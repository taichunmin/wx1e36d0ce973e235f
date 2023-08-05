require("../../@babel/runtime/helpers/Arrayincludes"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 30 ], {
    101: function(e, t, n) {
        (function(e) {
            n.d(t, "a", function() {
                return B;
            });
            var a = n(4), i = n(9), r = n(15), c = n(16), o = n(11), s = n(2), u = n.n(s), l = n(7), f = n(24), h = n(88), d = n(55), g = n(34), b = function(e) {
                return new Promise(function(t) {
                    return setTimeout(t, e);
                });
            }, E = {
                CREATE: 1,
                SET_PRN: 2,
                CALCULATE_CHECKSUM: 3,
                EXECUTE: 4,
                SELECT: 6,
                RESPONSE_CODE: 96
            }, v = 1, C = 2, p = 200, w = {
                OFFSET: 3,
                CRC32: 7
            }, O = {
                MAXIMUM_SIZE: 3,
                OFFSET: 7,
                CRC32: 11
            }, U = {
                INVALID_CODE: 0,
                SUCCESS: 1,
                OPCODE_NOT_SUPPORTED: 2,
                INVALID_PARAMETER: 3,
                INSUFFICIENT_RESOURCES: 4,
                INVALID_OBJECT: 5,
                UNSUPPORTED_TYPE: 7,
                OPERATION_NOT_PERMITTED: 8,
                OPERATION_FAILED: 10
            }, L = function(e) {
                return function(t) {
                    for (var n = 0, a = Object.keys(e); n < a.length; n++) {
                        var i = a[n];
                        if (e[i] === t) return i;
                    }
                    return "UNKNOWN";
                };
            }, k = L(E), m = L(U), y = function(e) {
                return Array.prototype.map.call(new Uint8Array(e), function(e) {
                    return ("00" + e.toString(16)).slice(-2);
                }).join("");
            }, B = new (function() {
                function t() {
                    var n = this;
                    Object(r.a)(this, t), Object(o.a)(this, "serviceFE59Uuid", ""), Object(o.a)(this, "c90001Uuid", ""), 
                    Object(o.a)(this, "c90002Uuid", ""), Object(o.a)(this, "c90003Uuid", ""), Object(o.a)(this, "skipSendingInitPacket", !0), 
                    Object(o.a)(this, "resumeSendingInitPacket", !0), Object(o.a)(this, "expectedCRC", 0), 
                    Object(o.a)(this, "imageBuf", e.from([])), Object(o.a)(this, "total", 0), Object(o.a)(this, "count", 0), 
                    Object(o.a)(this, "bin_offset", 0), Object(o.a)(this, "data", {
                        controlPointCharacteristicUUID: "8EC90001-F315-4F60-9FB8-838830DAEA50",
                        packetCharacteristicUUID: "8EC90002-F315-4F60-9FB8-838830DAEA50",
                        bin_data: e.from([]),
                        dat_data: e.from([]),
                        bin_offset: "",
                        total: 0,
                        count: 0,
                        percentage: 0
                    }), Object(o.a)(this, "initBleDeviceServices", Object(i.a)(Object(a.a)().mark(function e() {
                        return Object(a.a)().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.abrupt("return", new Promise(function(e, t) {
                                    l.a.device && u.a.getBLEDeviceServices({
                                        deviceId: l.a.device.deviceId
                                    }).then(function() {
                                        var r = Object(i.a)(Object(a.a)().mark(function r(c) {
                                            var o, s;
                                            return Object(a.a)().wrap(function(r) {
                                                for (;;) switch (r.prev = r.next) {
                                                  case 0:
                                                    if (f.c.info("BLE getBLEDeviceServices:", c), o = c.services, console.log(o), s = o.find(function(e) {
                                                        return e.uuid.indexOf("FE59-") > -1;
                                                    })) {
                                                        r.next = 6;
                                                        break;
                                                    }
                                                    return r.abrupt("return");

                                                  case 6:
                                                    if (n.serviceFE59Uuid = s.uuid, 0 !== c.errCode) {
                                                        r.next = 11;
                                                        break;
                                                    }
                                                    u.a.getBLEDeviceCharacteristics({
                                                        deviceId: l.a.device.deviceId,
                                                        serviceId: s.uuid,
                                                        success: function() {
                                                            var r = Object(i.a)(Object(a.a)().mark(function i(r) {
                                                                var c, o, s;
                                                                return Object(a.a)().wrap(function(a) {
                                                                    for (;;) switch (a.prev = a.next) {
                                                                      case 0:
                                                                        if (0 !== r.errCode) {
                                                                            a.next = 8;
                                                                            break;
                                                                        }
                                                                        c = "8EC90001-F315-4F60-9FB8-838830DAEA50", o = "8EC90002-F315-4F60-9FB8-838830DAEA50", 
                                                                        (s = r.characteristics.map(function(e) {
                                                                            return e.uuid;
                                                                        })).includes(c) && s.includes(o) && (n.c90001Uuid = c, n.c90002Uuid = o), e(r), 
                                                                        a.next = 13;
                                                                        break;

                                                                      case 8:
                                                                        return a.next = 10, l.a.disconnect();

                                                                      case 10:
                                                                        f.c.error("BLE getBLEDeviceCharacteristics failed:", r), u.a.showToast({
                                                                            title: "设备状态异常",
                                                                            icon: "none",
                                                                            duration: 2e3
                                                                        }), t(r);

                                                                      case 13:
                                                                        console.log("getBLEDeviceCharacteristics", r);

                                                                      case 14:
                                                                      case "end":
                                                                        return a.stop();
                                                                    }
                                                                }, i);
                                                            }));
                                                            return function(e) {
                                                                return r.apply(this, arguments);
                                                            };
                                                        }(),
                                                        fail: function() {
                                                            var e = Object(i.a)(Object(a.a)().mark(function e(n) {
                                                                return Object(a.a)().wrap(function(e) {
                                                                    for (;;) switch (e.prev = e.next) {
                                                                      case 0:
                                                                        return e.next = 2, l.a.disconnect();

                                                                      case 2:
                                                                        f.c.error("BLE getBLEDeviceCharacteristics failed:", n.errMsg), t("设备状态异常");

                                                                      case 4:
                                                                      case "end":
                                                                        return e.stop();
                                                                    }
                                                                }, e);
                                                            }));
                                                            return function(t) {
                                                                return e.apply(this, arguments);
                                                            };
                                                        }()
                                                    }), r.next = 16;
                                                    break;

                                                  case 11:
                                                    return r.next = 13, l.a.disconnect();

                                                  case 13:
                                                    u.a.showToast({
                                                        title: "设备状态异常",
                                                        icon: "none",
                                                        duration: 2e3
                                                    }), f.c.error("BLE getBLEDeviceServices failed:", c), t("设备状态异常");

                                                  case 16:
                                                  case "end":
                                                    return r.stop();
                                                }
                                            }, r);
                                        }));
                                        return function(e) {
                                            return r.apply(this, arguments);
                                        };
                                    }()).catch(function() {
                                        var e = Object(i.a)(Object(a.a)().mark(function e(n) {
                                            return Object(a.a)().wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.next = 2, l.a.disconnect();

                                                  case 2:
                                                    f.c.warn("Amiibo initBleDeviceServices failed", n), t(n);

                                                  case 4:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    }());
                                }));

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))), Object(o.a)(this, "enable90001Notify", Object(i.a)(Object(a.a)().mark(function e() {
                        return Object(a.a)().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (l.a.device) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");

                              case 2:
                                return u.a.showLoading({
                                    title: "正在升级"
                                }), e.abrupt("return", u.a.notifyBLECharacteristicValueChange({
                                    deviceId: l.a.device.deviceId,
                                    serviceId: n.serviceFE59Uuid,
                                    characteristicId: n.c90001Uuid,
                                    state: !0
                                }).then(function(e) {
                                    console.log("启动通知：" + JSON.stringify(e));
                                    var t = new ArrayBuffer(2), a = new DataView(t);
                                    a.setUint8(0, 6), a.setUint8(1, 1), setTimeout(function() {
                                        return n.bleWriteTo90001(a, t);
                                    }, 2e3);
                                }).then(function() {
                                    return u.a.onBLECharacteristicValueChange(function(e) {
                                        console.log(" BLECharacteristicValueChange:收到的数据" + JSON.stringify(e), y(e.value)), 
                                        u.a.hideLoading(), u.a.showLoading({
                                            title: "数据校验..."
                                        });
                                        var t = y(e.value);
                                        return console.log("data:" + t + " length:" + t.length), n.controlPointNotificationHandler(e);
                                    });
                                }).then(function(e) {
                                    console.log(JSON.stringify(e));
                                }));

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    })));
                }
                return Object(c.a)(t, [ {
                    key: "setData",
                    value: function(e) {
                        for (var t in console.log(e), e) this.data[t] = e[t];
                    }
                }, {
                    key: "bleWriteTo90001",
                    value: function() {
                        var e = Object(i.a)(Object(a.a)().mark(function e(t, n) {
                            var i;
                            return Object(a.a)().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (l.a.device) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 2:
                                    for (console.log("90001发送的数据："), i = 0; i < t.byteLength; i++) console.log("0x" + t.getUint8(i).toString(16));
                                    return e.abrupt("return", u.a.writeBLECharacteristicValue({
                                        deviceId: l.a.device.deviceId,
                                        serviceId: this.serviceFE59Uuid,
                                        characteristicId: this.c90001Uuid,
                                        value: n
                                    }));

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "bleWriteTo90003",
                    value: function() {
                        var e = Object(i.a)(Object(a.a)().mark(function e(t, n) {
                            var i;
                            return Object(a.a)().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (l.a.device) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 2:
                                    for (console.log("90003发送的数据："), i = 0; i < t.byteLength; i++) console.log("0x" + t.getUint8(i).toString(16));
                                    return e.abrupt("return", u.a.writeBLECharacteristicValue({
                                        deviceId: l.a.device.deviceId,
                                        serviceId: this.serviceFE59Uuid,
                                        characteristicId: this.c90003Uuid,
                                        value: n
                                    }));

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "ab2hex",
                    value: function(e) {
                        return Array.prototype.map.call(new Uint8Array(e), function(e) {
                            return ("00" + e.toString(16)).slice(-2);
                        }).join("");
                    }
                }, {
                    key: "parseResponse",
                    value: function(e) {
                        var t, n = new DataView(e), a = n.getUint8(0), i = n.getUint8(1), r = n.getUint8(2);
                        if (console.log(n + " responseCode:" + i), a !== E.RESPONSE_CODE) throw u.a.hideLoading(), 
                        u.a.showToast({
                            title: k(a),
                            icon: "none"
                        }), new Error("Unexpected response code received: ".concat(k(a), "."));
                        if (r !== U.SUCCESS) throw u.a.hideLoading(), u.a.showToast({
                            title: m(r),
                            icon: "none"
                        }), new Error("Error in result code: ".concat(m(r), "."));
                        switch (i) {
                          case E.CREATE:
                          case E.SET_PRN:
                            break;

                          case E.CALCULATE_CHECKSUM:
                            t = {
                                offset: h.a.littleEndianUInt32(n.getUint32(w.OFFSET)),
                                crc32: h.a.littleEndianUInt32(n.getUint32(w.CRC32))
                            };
                            break;

                          case E.EXECUTE:
                            break;

                          case E.SELECT:
                            t = {
                                maximumSize: h.a.littleEndianUInt32(n.getUint32(O.MAXIMUM_SIZE)),
                                offset: h.a.littleEndianUInt32(n.getUint32(O.OFFSET)),
                                crc32: h.a.littleEndianUInt32(n.getUint32(O.CRC32))
                            };
                            break;

                          default:
                            throw u.a.hideLoading(), u.a.showToast({
                                title: k(i),
                                icon: "none"
                            }), new Error("Unknwon response op-code received: ".concat(k(i), "."));
                        }
                        return {
                            responseCode: a,
                            responseOpCode: i,
                            resultCode: r,
                            data: t
                        };
                    }
                }, {
                    key: "controlPointNotificationHandler",
                    value: function() {
                        var e = Object(i.a)(Object(a.a)().mark(function e(t) {
                            var n, i, r, c, o, s, l = this;
                            return Object(a.a)().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, b(100);

                                  case 2:
                                    console.log("执行到这里了呀哈哈哈哈哈哈哈wwwww------------"), n = t.value, i = this.parseResponse(n), 
                                    r = i.responseOpCode, c = this.data.dat_data, console.log(i), e.t0 = r, e.next = e.t0 === E.CREATE ? 11 : e.t0 === E.SET_PRN ? 14 : e.t0 === E.CALCULATE_CHECKSUM ? 17 : e.t0 === E.EXECUTE ? 20 : e.t0 === E.SELECT ? 26 : 36;
                                    break;

                                  case 11:
                                    return console.log("CREATE"), this.sendPRN(), e.abrupt("break", 39);

                                  case 14:
                                    return console.log("SET_PRN"), this.writeBleDat(c, 0), e.abrupt("break", 39);

                                  case 17:
                                    return console.log("CALCULATE_CHECKSUM"), this.sendEXECUTE(), e.abrupt("break", 39);

                                  case 20:
                                    return console.log("EXECUTE"), o = new ArrayBuffer(2), (s = new DataView(o)).setUint8(0, E.SELECT), 
                                    s.setUint8(1, C), e.abrupt("return", this.bleWriteTo90001(s, o).then(function() {
                                        return u.a.onBLECharacteristicValueChange(function(e) {
                                            console.log(" EXECUTE:" + JSON.stringify(e)), console.log("value 收到的数据 " + l.ab2hex(e.value)), 
                                            l.dataEventListener(e);
                                        });
                                    }));

                                  case 26:
                                    if (console.log("controlPointNotificationHandler->SELECT"), console.log("init包长度：" + c.byteLength + " offset:" + i.data.offset), 
                                    this.skipSendingInitPacket = !1, this.resumeSendingInitPacket = !1, i.data.offset > 0 && i.data.offset <= c.byteLength && (i.data.offset == c.byteLength ? this.skipSendingInitPacket = !0 : this.resumeSendingInitPacket = !0), 
                                    0 != i.data.offset || this.skipSendingInitPacket) {
                                        e.next = 34;
                                        break;
                                    }
                                    return this.sendCreate(), e.abrupt("return");

                                  case 34:
                                    return this.sendEXECUTE(), e.abrupt("break", 39);

                                  case 36:
                                    throw u.a.hideLoading(), u.a.showToast({
                                        title: k(r),
                                        icon: "none"
                                    }), new Error("Unknwon response op-code received: ".concat(k(r), "."));

                                  case 39:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "formater4length",
                    value: function(e) {
                        3 == (e = e.toString(16)).length ? e = "0" + e : 2 == e.length ? e = "00" + e : 1 == e.length && (e = "000" + e);
                        var t = new Array();
                        return t.push("0x" + e.slice(2)), t.push("0x" + e.slice(0, 2)), console.log("hexstr:" + t), 
                        t;
                    }
                }, {
                    key: "dataEventListener",
                    value: function() {
                        var e = Object(i.a)(Object(a.a)().mark(function e(t) {
                            var n, i, r, c, o, s, l, f, h, v, C = this;
                            return Object(a.a)().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, b(100);

                                  case 2:
                                    n = t.value, i = this.parseResponse(n), r = i.responseOpCode, console.log(i), c = this.data.bin_data, 
                                    e.t0 = r, e.next = e.t0 === E.CREATE ? 10 : e.t0 === E.SET_PRN ? 19 : e.t0 === E.CALCULATE_CHECKSUM ? 21 : e.t0 === E.EXECUTE ? 36 : e.t0 === E.SELECT ? 39 : 50;
                                    break;

                                  case 10:
                                    return u.a.hideLoading(), u.a.showLoading({
                                        title: "正在升级（".concat(this.count, " / ").concat(this.total, "）")
                                    }), console.log("CREATE(" + this.count + "/" + this.total + ")"), e.next = 15, b(500);

                                  case 15:
                                    return this.writeBleBin(this.imageBuf.slice(0, 4096), 0), this.expectedCRC = Object(d.a)(this.imageBuf.slice(0, 4096)), 
                                    console.log("expectedCRC ->  " + this.expectedCRC + "  length " + this.imageBuf.byteLength), 
                                    e.abrupt("break", 53);

                                  case 19:
                                    return console.log("SET_PRN"), e.abrupt("break", 53);

                                  case 21:
                                    if (console.log("CALCULATE_CHECKSUM"), this.count = i.data.offset / 4096, i.data.offset == c.byteLength && (this.count = this.total), 
                                    this.bin_offset = i.data.offset, console.log(" 对比crc:" + i.data.crc32 + " binCrc:" + Object(d.a)(c.slice(0, 4096 * this.count))), 
                                    i.data.crc32 == Object(d.a)(c.slice(0, 4096 * this.count))) {
                                        e.next = 30;
                                        break;
                                    }
                                    return (o = c.byteLength - i.data.offset) < 4096 ? this.sendCreatePackage(this.formater4length(o)) : this.sendCreatePackage(this.formater4length(4096)), 
                                    e.abrupt("return");

                                  case 30:
                                    return console.log("发送通过"), this.imageBuf = this.imageBuf.slice(4096), s = new ArrayBuffer(1), 
                                    (l = new DataView(s)).setUint8(0, E.EXECUTE), e.abrupt("return", this.bleWriteTo90001(l, s).then(function() {
                                        return u.a.onBLECharacteristicValueChange(function(e) {
                                            console.log(" BLECharacteristicValueChange:" + JSON.stringify(e)), console.log(" value: 收到的数据" + C.ab2hex(e.value)), 
                                            C.dataEventListener(e);
                                        });
                                    }));

                                  case 36:
                                    return console.log("EXECUTE"), this.count != this.total ? (f = c.byteLength - this.bin_offset) < 4096 ? this.sendCreatePackage(this.formater4length(f)) : this.sendCreatePackage(this.formater4length(4096)) : (u.a.hideLoading(), 
                                    u.a.showToast({
                                        title: "升级成功",
                                        icon: "success"
                                    }), g.a.disconnect()), e.abrupt("break", 53);

                                  case 39:
                                    if (console.log("dataEventListener->SELECT"), console.log(" offset:" + i.data.offset), 
                                    this.skipSendingInitPacket = !1, this.resumeSendingInitPacket = !1, i.data.offset > 0 && i.data.offset <= this.imageBuf.byteLength && (i.data.offset == this.imageBuf.byteLength ? this.skipSendingInitPacket = !0 : (this.resumeSendingInitPacket = !0, 
                                    console.log("已发送crc:" + Object(d.a)(this.imageBuf.slice(0, i.data.offset))), this.imageBuf = this.imageBuf.slice(i.data.offset), 
                                    console.log("未发送crc:" + Object(d.a)(this.imageBuf)))), 0 != i.data.offset) {
                                        e.next = 47;
                                        break;
                                    }
                                    return this.sendCreatePackage(this.formater4length(4096)), e.abrupt("return");

                                  case 47:
                                    return h = new ArrayBuffer(1), v = new DataView(h), e.abrupt("return", this.bleWriteTo90001(v, h).then(function() {
                                        return u.a.onBLECharacteristicValueChange(function(e) {
                                            console.log(" BLECharacteristicValueChange:" + JSON.stringify(e)), console.log(" value: 收到的数据" + C.ab2hex(e.value)), 
                                            C.dataEventListener(e);
                                        });
                                    }));

                                  case 50:
                                    throw u.a.hideLoading(), u.a.showToast({
                                        title: k(r),
                                        icon: "none"
                                    }), new Error("Unknwon response op-code received: ".concat(k(r), "."));

                                  case 53:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "sendPRN",
                    value: function() {
                        var e = this, t = new ArrayBuffer(3), n = new DataView(t);
                        return n.setUint8(0, E.SET_PRN), n.setUint8(1, 0), n.setUint8(2, 0), this.bleWriteTo90001(n, t).then(function() {
                            return u.a.onBLECharacteristicValueChange(function() {
                                var t = Object(i.a)(Object(a.a)().mark(function t(n) {
                                    return Object(a.a)().wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                          case 0:
                                            if (console.log(" BLECharacteristicValueChange:" + JSON.stringify(n)), console.log("CREATE-> 收到的数据 " + e.ab2hex(n.value) + " length:" + e.ab2hex(n.value).length), 
                                            !e.ab2hex(n.value)) {
                                                t.next = 5;
                                                break;
                                            }
                                            return t.next = 5, e.controlPointNotificationHandler(n);

                                          case 5:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                }));
                                return function(e) {
                                    return t.apply(this, arguments);
                                };
                            }());
                        });
                    }
                }, {
                    key: "sendCreatePackage",
                    value: function(e) {
                        var t = this, n = new ArrayBuffer(6), a = new DataView(n);
                        return a.setUint8(0, E.CREATE), a.setUint8(1, C), a.setUint8(2, e[0]), a.setUint8(3, e[1]), 
                        a.setUint8(4, 0), a.setUint8(5, 0), this.bleWriteTo90001(a, n).then(function(e) {
                            return u.a.onBLECharacteristicValueChange(function(e) {
                                console.log(" BLECharacteristicValueChange:" + JSON.stringify(e)), console.log(" value: 收到的数据" + t.ab2hex(e.value)), 
                                t.dataEventListener(e);
                            });
                        });
                    }
                }, {
                    key: "sendCreate",
                    value: function() {
                        var e = this, t = new ArrayBuffer(6), n = new DataView(t);
                        return n.setUint8(0, E.CREATE), n.setUint8(1, v), n.setUint8(2, 143), n.setUint8(3, 0), 
                        n.setUint8(4, 0), n.setUint8(5, 0), this.bleWriteTo90001(n, t).then(function(t) {
                            return u.a.onBLECharacteristicValueChange(function(t) {
                                console.log(" BLECharacteristicValueChange:" + JSON.stringify(t)), console.log(" 收到的数据" + JSON.stringify(t) + "value" + e.ab2hex(t.value)), 
                                e.controlPointNotificationHandler(t);
                            });
                        });
                    }
                }, {
                    key: "sendEXECUTE",
                    value: function() {
                        var e = this, t = new ArrayBuffer(1), n = new DataView(t);
                        return n.setUint8(0, E.EXECUTE), console.log("执行到这里了呀哈哈哈哈哈哈哈------------"), this.bleWriteTo90001(n, t).then(function(t) {
                            return console.log("执行到这里了呀哈哈哈哈哈哈哈--aaa----------"), u.a.onBLECharacteristicValueChange(function(t) {
                                console.log("执行到这里了呀哈哈哈哈哈哈哈bbbb------------"), console.log(" CALCULATE_CHECKSUM:" + JSON.stringify(t)), 
                                console.log("value 收到的数据 " + e.ab2hex(t.value)), e.controlPointNotificationHandler(t);
                            });
                        });
                    }
                }, {
                    key: "bufferFromHex",
                    value: function(e) {
                        return new Uint8Array(e.match(/[\da-f]{2}/gi).map(function(e) {
                            return parseInt(e, 16);
                        })).buffer;
                    }
                }, {
                    key: "writeBleDat",
                    value: function() {
                        var e = Object(i.a)(Object(a.a)().mark(function e(t, n) {
                            var i, r, c, o, s, f, h, d, g, b, v, C, w, O = this;
                            return Object(a.a)().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (l.a.device) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 2:
                                    u.a.showToast({
                                        title: "即将写入init包"
                                    }), i = n, r = t.byteLength, console.log("writeBleDat:" + this.ab2hex(t) + " offset:" + n + " length:" + r);

                                  case 6:
                                    if (!(n < r)) {
                                        e.next = 32;
                                        break;
                                    }
                                    for (f in c = n + p > r ? r - n : p, o = new Uint8Array(t, n, c), s = "", o) (h = o[f]) < 16 && (s += "0"), 
                                    s += h.toString(16);
                                    if (console.log("writeBleDat:" + s), d = this.bufferFromHex(s), u.a.writeBLECharacteristicValue({
                                        deviceId: l.a.device.deviceId,
                                        serviceId: this.serviceFE59Uuid,
                                        characteristicId: this.c90002Uuid,
                                        value: d,
                                        fail: function(e) {
                                            n -= p, console.log("write dat fail", e);
                                        }
                                    }), g = (n + c) / r, u.a.showLoading({
                                        title: "写入" + g + "%",
                                        mask: !0
                                    }), n + c != r) {
                                        e.next = 23;
                                        break;
                                    }
                                    return b = new ArrayBuffer(1), (v = new DataView(b)).setUint8(0, E.CALCULATE_CHECKSUM), 
                                    console.log("readFile"), console.log(v, b, "发送的数据呀"), e.abrupt("return", this.bleWriteTo90001(v, b).then(function(e) {
                                        return u.a.onBLECharacteristicValueChange(function(e) {
                                            console.log(" BLECharacteristicValueChange:" + JSON.stringify(e)), console.log(".dat 接收的数据 " + O.ab2hex(e.value)), 
                                            O.controlPointNotificationHandler(e);
                                        });
                                    }));

                                  case 23:
                                    for (C = new Date().getTime(), w = new Date().getTime(); w - C < 40; ) w = new Date().getTime();
                                    if (n - i != 1e3) {
                                        e.next = 29;
                                        break;
                                    }
                                    return setTimeout(function() {
                                        O.writeBleDat(t, n + p);
                                    }, 100), e.abrupt("return");

                                  case 29:
                                    n += p, e.next = 6;
                                    break;

                                  case 32:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "writeBleBin",
                    value: function() {
                        var e = Object(i.a)(Object(a.a)().mark(function e(t, n) {
                            var i, r, c, o, s, f, h, d, g, b, v, C, w, O = this;
                            return Object(a.a)().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (l.a.device) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 2:
                                    i = n, r = t.byteLength, console.log("writeBleBin:" + this.ab2hex(t) + " offset:" + n + " length:" + r);

                                  case 5:
                                    if (!(n < r)) {
                                        e.next = 30;
                                        break;
                                    }
                                    for (h in o = n + p > r ? r - n : p, s = new Uint8Array(t, n, o), f = "", s) (d = s[h]) < 16 && (f += "0"), 
                                    f += d.toString(16);
                                    if (console.log("writeBleDat:" + f), g = this.bufferFromHex(f), u.a.writeBLECharacteristicValue({
                                        deviceId: null === (c = l.a.device) || void 0 === c ? void 0 : c.deviceId,
                                        serviceId: this.serviceFE59Uuid,
                                        characteristicId: this.c90002Uuid,
                                        value: g,
                                        fail: function(e) {
                                            n -= p, console.log("write bin fail", e);
                                        }
                                    }), b = (n + o) / r, this.setData({
                                        percentage: (100 * b).toFixed(1)
                                    }), n + o != r) {
                                        e.next = 21;
                                        break;
                                    }
                                    return t = new ArrayBuffer(1), (v = new DataView(t)).setUint8(0, E.CALCULATE_CHECKSUM), 
                                    console.log("readFile"), e.abrupt("return", this.bleWriteTo90001(v, t).then(function() {
                                        return u.a.onBLECharacteristicValueChange(function(e) {
                                            console.log(" BLECharacteristicValueChange:" + JSON.stringify(e)), console.log(".bin 接收的数据 " + O.ab2hex(e.value)), 
                                            O.dataEventListener(e);
                                        });
                                    }));

                                  case 21:
                                    for (C = new Date().getTime(), w = new Date().getTime(); w - C < 40; ) w = new Date().getTime();
                                    if (n - i != 1e3) {
                                        e.next = 27;
                                        break;
                                    }
                                    return setTimeout(function() {
                                        O.writeBleBin(t, n + p);
                                    }, 200), e.abrupt("return");

                                  case 27:
                                    n += p, e.next = 5;
                                    break;

                                  case 30:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "matchCrc",
                    value: function() {
                        console.log("crc校验" + this.imageBuf.byteLength);
                        var e = this.imageBuf.byteLength / 4096;
                        console.log(e);
                        for (var t = 0; t <= e + 1; t++) console.log("CRC: " + Object(d.a)(this.imageBuf.slice(0, 4096 * (t + 1))) + "  i:" + (t + 1)), 
                        console.log("CRC: " + Object(d.a)(this.imageBuf.slice(0, 4096 * (t + 1))).toString(16) + "  i:" + (t + 1)), 
                        console.log(this.imageBuf.slice(4096 * (t + 1)).byteLength.toString(16) + "  size:" + 4096..toString(16));
                        console.log(this.imageBuf.slice(94208).byteLength.toString(16)), console.log(this.imageBuf.slice(94208).byteLength.toString(16).length);
                        var n = 4096..toString(16);
                        console.log(this.formater4length(n)[0]);
                    }
                }, {
                    key: "downfirmware",
                    value: function() {
                        var e = u.a.env.USER_DATA_PATH;
                        return u.a.showLoading({
                            title: "正在下载..."
                        }), u.a.downloadFile({
                            url: "https://amiibo-1256353502.cos.ap-nanjing.myqcloud.com/amiibolink%E5%9B%BA%E4%BB%B6/amiibolink20230419.zip",
                            success: function(t) {
                                u.a.saveFile({
                                    tempFilePath: t.tempFilePath,
                                    filePath: e + "/firmware.zip",
                                    success: function(e) {
                                        console.log(JSON.stringify(e)), u.a.showToast({
                                            title: "下载成功",
                                            icon: "success"
                                        });
                                    },
                                    fail: function(e) {
                                        console.info("保存文件失败");
                                    }
                                });
                            }
                        }).finally(function() {
                            u.a.hideLoading();
                        });
                    }
                }, {
                    key: "unzip",
                    value: function() {
                        var e = this, t = u.a.getFileSystemManager(), n = u.a.env.USER_DATA_PATH || "", r = this;
                        return new Promise(function(c, o) {
                            t.unzip({
                                zipFilePath: n + "/firmware.zip",
                                targetPath: n,
                                success: function(o) {
                                    console.log("解压成功:" + JSON.stringify(o)), t.readFile({
                                        filePath: n + "/manifest.json",
                                        encoding: "binary",
                                        success: function() {
                                            var o = Object(i.a)(Object(a.a)().mark(function i(o) {
                                                return Object(a.a)().wrap(function(a) {
                                                    for (;;) switch (a.prev = a.next) {
                                                      case 0:
                                                        console.log(o), t.readFile({
                                                            filePath: n + "/amiibolink(release)_v1.2.1.33_202304191123.dat",
                                                            success: function(a) {
                                                                console.log(a), e.expectedCRC = Object(d.a)(a.data), console.log(Object(d.a)(a.data) + " 长度：" + a.data), 
                                                                r.setData({
                                                                    dat_data: a.data
                                                                }), t.readFile({
                                                                    filePath: n + "/amiibolink(release)_v1.2.1.33_202304191123.bin",
                                                                    success: function(t) {
                                                                        console.log(Object(d.a)(t.data) + " 长度：" + t.data), e.expectedCRC = Object(d.a)(t.data), 
                                                                        console.log(e.expectedCRC), e.imageBuf = t.data, e.total = parseInt("".concat(e.imageBuf.byteLength / 4096)) + 1, 
                                                                        r.setData({
                                                                            bin_data: t.data
                                                                        }), c("");
                                                                    }
                                                                });
                                                            }
                                                        });

                                                      case 2:
                                                      case "end":
                                                        return a.stop();
                                                    }
                                                }, i);
                                            }));
                                            return function(e) {
                                                return o.apply(this, arguments);
                                            };
                                        }()
                                    });
                                },
                                fail: function(e) {
                                    console.log("解压失败:" + JSON.stringify(e)), o(e);
                                }
                            });
                        });
                    }
                } ]), t;
            }())();
        }).call(this, n(19).Buffer);
    },
    489: function(e, t, n) {},
    508: function(e, t, n) {
        n.r(t);
        var a = n(8), i = (n(56), n(25)), r = (n(52), n(22)), c = n(4), o = n(9), s = n(13), u = n(1), l = n(5), f = n(26), h = n(61), d = n.n(h), g = (n(489), 
        n(101)), b = n(2), E = n.n(b), v = n(34), C = n(0), p = function() {
            var e = Object(l.useState)(!1), t = Object(s.a)(e, 2), n = t[0], a = t[1], h = function() {
                var e = Object(o.a)(Object(c.a)().mark(function e() {
                    return Object(c.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return a(!0), E.a.showLoading({
                                title: "连接 DFU 设备..."
                            }), e.next = 4, v.a.init([ "amiibolink_boot" ]).catch(console.log).finally(function() {
                                E.a.hideLoading();
                            });

                          case 4:
                            return E.a.showLoading({
                                title: "初始化设备..."
                            }), e.next = 7, g.a.initBleDeviceServices().catch(console.log).finally(function() {
                                E.a.hideLoading();
                            });

                          case 7:
                            return E.a.showLoading({
                                title: "下载固件中..."
                            }), e.next = 10, g.a.downfirmware().catch(console.log).finally(function() {
                                E.a.hideLoading();
                            });

                          case 10:
                            return E.a.showLoading({
                                title: "正在处理"
                            }), e.next = 13, g.a.unzip().catch(console.log).finally(function() {
                                E.a.hideLoading();
                            });

                          case 13:
                            return e.next = 15, g.a.enable90001Notify().catch(console.log).finally(function() {
                                E.a.hideLoading();
                            });

                          case 15:
                            a(!1);

                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }();
            return Object(C.jsxs)(f.a, {
                children: [ Object(C.jsx)(u.g, {
                    className: "text-center p-4",
                    children: Object(C.jsx)(r.a, {
                        className: "w-168",
                        src: d.a,
                        fit: "cover"
                    })
                }), Object(C.jsxs)(u.g, {
                    className: "p-3",
                    children: [ Object(C.jsx)(u.g, {
                        children: Object(C.jsx)(i.a, {
                            type: "default",
                            loading: n,
                            onClick: h,
                            className: "btn btn-light",
                            block: !0,
                            children: n ? "正在更新" : "立即更新"
                        })
                    }), Object(C.jsx)(u.g, {
                        className: "text-muted text-center mt-2",
                        children: "请在设备休眠模式下长按 15 秒"
                    }) ]
                }) ]
            });
        };
        Page(Object(a.createPageConfig)(p, "pages/to-new-firmware/index", {
            root: {
                cn: []
            }
        }, {
            navigationBarTitleText: "固件更新"
        } || {})), t.default = p;
    },
    55: function(e, t, n) {
        var a = n(19), i = a.Buffer.from && a.Buffer.alloc && a.Buffer.allocUnsafe && a.Buffer.allocUnsafeSlow ? a.Buffer.from : function(e) {
            return new a.Buffer(e);
        }, r = [ 0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117 ];
        "undefined" != typeof Int32Array && (r = new Int32Array(r));
        var c = function(e, t) {
            var n = function(e, n) {
                return t(e, n) >>> 0;
            };
            return n.signed = t, n.unsigned = n, n.model = e, n;
        }("crc-32", function(e, t) {
            a.Buffer.isBuffer(e) || (e = i(e));
            for (var n = 0 === t ? 0 : -1 ^ ~~t, c = 0; c < e.length; c++) {
                var o = e[c];
                n = r[255 & (n ^ o)] ^ n >>> 8;
            }
            return -1 ^ n;
        });
        t.a = c;
    },
    88: function(e, t, n) {
        var a = n(19);
        t.a = {
            littleEndian: function(e) {
                for (var t = new a.Buffer(e.length), n = 0, i = e.length - 1; n <= i; ++n, --i) t[n] = e[i], 
                t[i] = e[n];
                return new Uint8Array(e);
            },
            littleEndianUInt32: function(e) {
                return (e >> 24 & 255 | e << 8 & 16711680 | e >> 8 & 65280 | e << 24 & 4278190080) >>> 0;
            }
        };
    }
}, [ [ 508, 0, 1, 2, 3 ] ] ]);