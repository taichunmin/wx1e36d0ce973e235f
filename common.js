require("@babel/runtime/helpers/Arrayincludes"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 3 ], {
    123: function(e, t, n) {
        n.d(t, "a", function() {
            return c;
        });
        var r = n(31), a = n(6), i = n(51), c = function(e) {
            var t = [ i.f ], n = new Uint8Array(e), c = n.length, o = c > 600 ? Math.floor(c / 150) : 4, s = new Uint8Array(new ArrayBuffer(4));
            new DataView(s.buffer).setInt32(0, c, !1), t.push(Object(a.a)(Object(a.a)({}, i.c), {}, {
                payload: s
            })), t.push(Object(a.a)(Object(a.a)({}, i.b), {}, {
                payload: [ c >> 8 & 255, 255 & c ]
            }));
            for (var u = Math.ceil(c / o), f = 0; f < o; f++) {
                var d = f * u, l = Math.min(d + u, c), h = n.slice(d, l), v = l - d;
                t.push(Object(a.a)(Object(a.a)({}, i.e), {}, {
                    payload: [ v >> 8 & 255, 255 & v ].concat(Object(r.a)(h), [ f >> 8 & 255, 255 & f ])
                }));
            }
            return t.push(i.g), t.push(i.a), t;
        };
    },
    124: function(e, t, n) {
        n.d(t, "b", function() {
            return d;
        }), n.d(t, "a", function() {
            return l;
        });
        var r = n(13), a = n(2), i = n(5), c = n(264), o = n.n(c), s = n(265), u = n.n(s);
        function f(e) {
            var t = Object(i.useState)(), n = Object(r.a)(t, 2), c = n[0], o = n[1];
            return Object(i.useEffect)(function() {
                var t = Object(a.createInnerAudioContext)();
                t.src = e, o(t);
            }, []), {
                audioContext: c
            };
        }
        function d() {
            var e = f(u.a).audioContext, t = f(o.a).audioContext;
            return l().openAudio ? {
                start: null == e ? void 0 : e.play,
                stop: null == t ? void 0 : t.play
            } : {
                start: function() {},
                stop: function() {}
            };
        }
        function l() {
            var e = Object(i.useState)(!0), t = Object(r.a)(e, 2), n = t[0], c = t[1];
            return Object(a.useReady)(function() {
                var e = !!Object(a.getStorageSync)("open_audio");
                c(e);
            }), Object(i.useEffect)(function() {
                Object(a.setStorageSync)("open_audio", n);
            }, [ n ]), {
                openAudio: n,
                setOpenAudio: c
            };
        }
    },
    24: function(e, t, n) {
        n.d(t, "b", function() {
            return f;
        }), n.d(t, "a", function() {
            return d;
        }), n.d(t, "d", function() {
            return l;
        }), n.d(t, "c", function() {
            return h;
        });
        var r = n(4), a = n(9), i = n(2), c = n.n(i), o = n(29), s = (n(20), n(35)), u = n.n(s), f = function(e) {
            return e.startsWith("http") ? e : o.a + e;
        }, d = function() {
            var e = Object(a.a)(Object(r.a)().mark(function e(t, n) {
                var a, i;
                return Object(r.a)().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, u.a.get(t || "", {
                            responseType: "arraybuffer"
                        }).catch(function() {
                            throw c.a.showToast({
                                icon: "none",
                                title: "下载失败，请重试"
                            }), new Error("下载失败，请重试");
                        });

                      case 2:
                        return a = e.sent, i = a.data, e.abrupt("return", i);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }));
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }(), l = function(e) {
            var t = e[2], n = e.slice(3, 3 + t).map(function(e) {
                return String.fromCharCode(e);
            }).join(""), r = (e[3 + t], e[4 + t]), a = e[5 + t], i = "";
            return a > 0 && (i = e.slice(6 + t, 6 + t + a).map(function(e) {
                return e.toString(16);
            }).join("")), {
                deviceSN: i,
                deviceMode: r,
                firmwareVersion: n
            };
        }, h = c.a.getRealtimeLogManager();
    },
    26: function(e, t, n) {
        n.d(t, "a", function() {
            return v;
        });
        var r = n(6), a = (n(106), n(70)), i = (n(399), n(268)), c = n(13), o = n(1), s = n(37), u = n(5), f = n(20), d = n.n(f), l = n(50), h = n(0);
        function v(e) {
            var t = e.isPublic, n = void 0 !== t && t, v = Object(s.useAtom)(l.b), b = Object(c.a)(v, 2), p = b[0], j = (b[1], 
            function() {
                return null == p || !p.verify || p.license;
            });
            return Object(u.useEffect)(function() {
                console.log(n, j()), n || j() || d.a.toUser({
                    type: f.NavigateType.switchTab
                });
            }, []), Object(h.jsxs)(o.g, Object(r.a)(Object(r.a)({}, e), {}, {
                children: [ e.children, Object(h.jsx)(i.a, {
                    id: "global-toast"
                }), Object(h.jsx)(a.a, {
                    id: "global-dialog"
                }) ]
            }));
        }
    },
    264: function(e, t, n) {
        e.exports = n.p + "assets/audio/write_done.mp3";
    },
    265: function(e, t, n) {
        e.exports = n.p + "assets/audio/write_starting.mp3";
    },
    29: function(e, t, n) {
        n.d(t, "a", function() {
            return C;
        }), n.d(t, "c", function() {
            return P;
        }), n.d(t, "b", function() {
            return I;
        });
        var r = n(35), a = n.n(r), i = n(269), c = n(2), o = n.n(c), s = n(20), u = n.n(s), f = n(15), d = n(16), l = n(30), h = n(32), v = n(4), b = n(6), p = n(9), j = n(28), O = n(10), m = n(127), g = n(11), w = "http://localhost".replace(/\/+$/, ""), y = Object(d.a)(function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.a;
            Object(f.a)(this, e), this.basePath = n, this.axios = r, Object(g.a)(this, "configuration", void 0), 
            t && (this.configuration = t, this.basePath = t.basePath || this.basePath);
        }), x = function(e) {
            Object(l.a)(n, e);
            var t = Object(h.a)(n);
            function n(e, r) {
                var a;
                return Object(f.a)(this, n), (a = t.call(this, r)).field = e, Object(g.a)(Object(O.a)(a), "name", "RequiredError"), 
                a;
            }
            return Object(d.a)(n);
        }(Object(m.a)(Error)), k = function(e) {
            return {
                niceJsonMiniProgramV1DevicesGet: function() {
                    var t = Object(p.a)(Object(v.a)().mark(function t(n) {
                        var r, a, i, c, o, s, u, f, d, l = arguments;
                        return Object(v.a)().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return r = l.length > 1 && void 0 !== l[1] ? l[1] : {}, a = "/nice-json/mini-program/v1/devices", 
                                i = j.parse(a, !0), e && (c = e.baseOptions), o = Object(b.a)(Object(b.a)({
                                    method: "GET"
                                }, c), r), u = {}, (s = {})["Content-Type"] = "application/json", i.query = Object(b.a)(Object(b.a)(Object(b.a)({}, i.query), u), r.query), 
                                delete i.search, f = c && c.headers ? c.headers : {}, o.headers = Object(b.a)(Object(b.a)(Object(b.a)({}, s), f), r.headers), 
                                d = "string" != typeof n || "application/json" === o.headers["Content-Type"], o.data = d ? JSON.stringify(void 0 !== n ? n : {}) : n || "", 
                                t.abrupt("return", {
                                    url: j.format(i),
                                    options: o
                                });

                              case 15:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                niceJsonMiniProgramV1DevicesPost: function() {
                    var t = Object(p.a)(Object(v.a)().mark(function t(n) {
                        var r, a, i, c, o, s, u, f, d, l = arguments;
                        return Object(v.a)().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return r = l.length > 1 && void 0 !== l[1] ? l[1] : {}, a = "/nice-json/mini-program/v1/devices", 
                                i = j.parse(a, !0), e && (c = e.baseOptions), o = Object(b.a)(Object(b.a)({
                                    method: "POST"
                                }, c), r), u = {}, (s = {})["Content-Type"] = "application/json", i.query = Object(b.a)(Object(b.a)(Object(b.a)({}, i.query), u), r.query), 
                                delete i.search, f = c && c.headers ? c.headers : {}, o.headers = Object(b.a)(Object(b.a)(Object(b.a)({}, s), f), r.headers), 
                                d = "string" != typeof n || "application/json" === o.headers["Content-Type"], o.data = d ? JSON.stringify(void 0 !== n ? n : {}) : n || "", 
                                t.abrupt("return", {
                                    url: j.format(i),
                                    options: o
                                });

                              case 15:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                niceJsonMiniProgramV1FirmwaresGet: function() {
                    var t = Object(p.a)(Object(v.a)().mark(function t(n) {
                        var r, a, i, c, o, s, u, f, d = arguments;
                        return Object(v.a)().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return r = d.length > 1 && void 0 !== d[1] ? d[1] : {}, a = "/nice-json/mini-program/v1/firmwares/", 
                                i = j.parse(a, !0), e && (c = e.baseOptions), o = Object(b.a)(Object(b.a)({
                                    method: "GET"
                                }, c), r), s = {}, u = {}, void 0 !== n && (u.type = n), i.query = Object(b.a)(Object(b.a)(Object(b.a)({}, i.query), u), r.query), 
                                delete i.search, f = c && c.headers ? c.headers : {}, o.headers = Object(b.a)(Object(b.a)(Object(b.a)({}, s), f), r.headers), 
                                t.abrupt("return", {
                                    url: j.format(i),
                                    options: o
                                });

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                niceJsonMiniProgramV1GameDataDataIdGet: function() {
                    var t = Object(p.a)(Object(v.a)().mark(function t(n) {
                        var r, a, i, c, o, s, u, f, d = arguments;
                        return Object(v.a)().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (r = d.length > 1 && void 0 !== d[1] ? d[1] : {}, null != n) {
                                    t.next = 3;
                                    break;
                                }
                                throw new x("dataId", "Required parameter dataId was null or undefined when calling niceJsonMiniProgramV1GameDataDataIdGet.");

                              case 3:
                                return a = "/nice-json/mini-program/v1/game_data/{data_id}".replace("{".concat("data_id", "}"), encodeURIComponent(String(n))), 
                                i = j.parse(a, !0), e && (c = e.baseOptions), o = Object(b.a)(Object(b.a)({
                                    method: "GET"
                                }, c), r), s = {}, u = {}, i.query = Object(b.a)(Object(b.a)(Object(b.a)({}, i.query), u), r.query), 
                                delete i.search, f = c && c.headers ? c.headers : {}, o.headers = Object(b.a)(Object(b.a)(Object(b.a)({}, s), f), r.headers), 
                                t.abrupt("return", {
                                    url: j.format(i),
                                    options: o
                                });

                              case 14:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                niceJsonMiniProgramV1GamesGameIdGet: function() {
                    var t = Object(p.a)(Object(v.a)().mark(function t(n) {
                        var r, a, i, c, o, s, u, f, d = arguments;
                        return Object(v.a)().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (r = d.length > 1 && void 0 !== d[1] ? d[1] : {}, null != n) {
                                    t.next = 3;
                                    break;
                                }
                                throw new x("gameId", "Required parameter gameId was null or undefined when calling niceJsonMiniProgramV1GamesGameIdGet.");

                              case 3:
                                return a = "/nice-json/mini-program/v1/games/{game_id}".replace("{".concat("game_id", "}"), encodeURIComponent(String(n))), 
                                i = j.parse(a, !0), e && (c = e.baseOptions), o = Object(b.a)(Object(b.a)({
                                    method: "GET"
                                }, c), r), s = {}, u = {}, i.query = Object(b.a)(Object(b.a)(Object(b.a)({}, i.query), u), r.query), 
                                delete i.search, f = c && c.headers ? c.headers : {}, o.headers = Object(b.a)(Object(b.a)(Object(b.a)({}, s), f), r.headers), 
                                t.abrupt("return", {
                                    url: j.format(i),
                                    options: o
                                });

                              case 14:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                niceJsonMiniProgramV1GamesGet: function() {
                    var t = Object(p.a)(Object(v.a)().mark(function t() {
                        var n, r, a, i, c, o, s, u, f = arguments;
                        return Object(v.a)().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = f.length > 0 && void 0 !== f[0] ? f[0] : {}, r = "/nice-json/mini-program/v1/games", 
                                a = j.parse(r, !0), e && (i = e.baseOptions), c = Object(b.a)(Object(b.a)({
                                    method: "GET"
                                }, i), n), o = {}, s = {}, a.query = Object(b.a)(Object(b.a)(Object(b.a)({}, a.query), s), n.query), 
                                delete a.search, u = i && i.headers ? i.headers : {}, c.headers = Object(b.a)(Object(b.a)(Object(b.a)({}, o), u), n.headers), 
                                t.abrupt("return", {
                                    url: j.format(a),
                                    options: c
                                });

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                niceJsonMiniProgramV1HomeGet: function() {
                    var t = Object(p.a)(Object(v.a)().mark(function t() {
                        var n, r, a, i, c, o, s, u, f = arguments;
                        return Object(v.a)().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = f.length > 0 && void 0 !== f[0] ? f[0] : {}, r = "/nice-json/mini-program/v1/home", 
                                a = j.parse(r, !0), e && (i = e.baseOptions), c = Object(b.a)(Object(b.a)({
                                    method: "GET"
                                }, i), n), o = {}, s = {}, a.query = Object(b.a)(Object(b.a)(Object(b.a)({}, a.query), s), n.query), 
                                delete a.search, u = i && i.headers ? i.headers : {}, c.headers = Object(b.a)(Object(b.a)(Object(b.a)({}, o), u), n.headers), 
                                t.abrupt("return", {
                                    url: j.format(a),
                                    options: c
                                });

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                niceJsonMiniProgramV1LoginPost: function() {
                    var t = Object(p.a)(Object(v.a)().mark(function t(n) {
                        var r, a, i, c, o, s, u, f, d, l = arguments;
                        return Object(v.a)().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return r = l.length > 1 && void 0 !== l[1] ? l[1] : {}, a = "/nice-json/mini-program/v1/login", 
                                i = j.parse(a, !0), e && (c = e.baseOptions), o = Object(b.a)(Object(b.a)({
                                    method: "POST"
                                }, c), r), u = {}, (s = {})["Content-Type"] = "application/json", i.query = Object(b.a)(Object(b.a)(Object(b.a)({}, i.query), u), r.query), 
                                delete i.search, f = c && c.headers ? c.headers : {}, o.headers = Object(b.a)(Object(b.a)(Object(b.a)({}, s), f), r.headers), 
                                d = "string" != typeof n || "application/json" === o.headers["Content-Type"], o.data = d ? JSON.stringify(void 0 !== n ? n : {}) : n || "", 
                                t.abrupt("return", {
                                    url: j.format(i),
                                    options: o
                                });

                              case 15:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                niceJsonMiniProgramV1QuestionsGet: function() {
                    var t = Object(p.a)(Object(v.a)().mark(function t() {
                        var n, r, a, i, c, o, s, u, f = arguments;
                        return Object(v.a)().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = f.length > 0 && void 0 !== f[0] ? f[0] : {}, r = "/nice-json/mini-program/v1/questions", 
                                a = j.parse(r, !0), e && (i = e.baseOptions), c = Object(b.a)(Object(b.a)({
                                    method: "GET"
                                }, i), n), o = {}, s = {}, a.query = Object(b.a)(Object(b.a)(Object(b.a)({}, a.query), s), n.query), 
                                delete a.search, u = i && i.headers ? i.headers : {}, c.headers = Object(b.a)(Object(b.a)(Object(b.a)({}, o), u), n.headers), 
                                t.abrupt("return", {
                                    url: j.format(a),
                                    options: c
                                });

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                niceJsonMiniProgramV1QuestionsPost: function() {
                    var t = Object(p.a)(Object(v.a)().mark(function t() {
                        var n, r, a, i, c, o, s, u, f = arguments;
                        return Object(v.a)().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = f.length > 0 && void 0 !== f[0] ? f[0] : {}, r = "/nice-json/mini-program/v1/questions", 
                                a = j.parse(r, !0), e && (i = e.baseOptions), c = Object(b.a)(Object(b.a)({
                                    method: "POST"
                                }, i), n), o = {}, s = {}, a.query = Object(b.a)(Object(b.a)(Object(b.a)({}, a.query), s), n.query), 
                                delete a.search, u = i && i.headers ? i.headers : {}, c.headers = Object(b.a)(Object(b.a)(Object(b.a)({}, o), u), n.headers), 
                                t.abrupt("return", {
                                    url: j.format(a),
                                    options: c
                                });

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                niceJsonMiniProgramV1SignupPost: function() {
                    var t = Object(p.a)(Object(v.a)().mark(function t(n) {
                        var r, a, i, c, o, s, u, f, d, l = arguments;
                        return Object(v.a)().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return r = l.length > 1 && void 0 !== l[1] ? l[1] : {}, a = "/nice-json/mini-program/v1/signup", 
                                i = j.parse(a, !0), e && (c = e.baseOptions), o = Object(b.a)(Object(b.a)({
                                    method: "POST"
                                }, c), r), u = {}, (s = {})["Content-Type"] = "application/json", i.query = Object(b.a)(Object(b.a)(Object(b.a)({}, i.query), u), r.query), 
                                delete i.search, f = c && c.headers ? c.headers : {}, o.headers = Object(b.a)(Object(b.a)(Object(b.a)({}, s), f), r.headers), 
                                d = "string" != typeof n || "application/json" === o.headers["Content-Type"], o.data = d ? JSON.stringify(void 0 !== n ? n : {}) : n || "", 
                                t.abrupt("return", {
                                    url: j.format(i),
                                    options: o
                                });

                              case 15:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                niceJsonMiniProgramV1UserGet: function() {
                    var t = Object(p.a)(Object(v.a)().mark(function t(n) {
                        var r, a, i, c, o, s, u, f, d = arguments;
                        return Object(v.a)().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return r = d.length > 1 && void 0 !== d[1] ? d[1] : {}, a = "/nice-json/mini-program/v1/user", 
                                i = j.parse(a, !0), e && (c = e.baseOptions), o = Object(b.a)(Object(b.a)({
                                    method: "GET"
                                }, c), r), s = {}, u = {}, null != n && (s.NICETHEME = String(n)), i.query = Object(b.a)(Object(b.a)(Object(b.a)({}, i.query), u), r.query), 
                                delete i.search, f = c && c.headers ? c.headers : {}, o.headers = Object(b.a)(Object(b.a)(Object(b.a)({}, s), f), r.headers), 
                                t.abrupt("return", {
                                    url: j.format(i),
                                    options: o
                                });

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                niceJsonMiniProgramV1UserVerifyPost: function() {
                    var t = Object(p.a)(Object(v.a)().mark(function t(n) {
                        var r, a, i, c, o, s, u, f, d, l = arguments;
                        return Object(v.a)().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return r = l.length > 1 && void 0 !== l[1] ? l[1] : {}, a = "/nice-json/mini-program/v1/user/verify", 
                                i = j.parse(a, !0), e && (c = e.baseOptions), o = Object(b.a)(Object(b.a)({
                                    method: "POST"
                                }, c), r), u = {}, (s = {})["Content-Type"] = "application/json", i.query = Object(b.a)(Object(b.a)(Object(b.a)({}, i.query), u), r.query), 
                                delete i.search, f = c && c.headers ? c.headers : {}, o.headers = Object(b.a)(Object(b.a)(Object(b.a)({}, s), f), r.headers), 
                                d = "string" != typeof n || "application/json" === o.headers["Content-Type"], o.data = d ? JSON.stringify(void 0 !== n ? n : {}) : n || "", 
                                t.abrupt("return", {
                                    url: j.format(i),
                                    options: o
                                });

                              case 15:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }()
            };
        }, U = function(e) {
            return {
                niceJsonMiniProgramV1DevicesGet: function(t, n) {
                    return Object(p.a)(Object(v.a)().mark(function r() {
                        var i;
                        return Object(v.a)().wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return r.next = 2, k(e).niceJsonMiniProgramV1DevicesGet(t, n);

                              case 2:
                                return i = r.sent, r.abrupt("return", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, n = Object(b.a)(Object(b.a)({}, i.options), {}, {
                                        url: t + i.url
                                    });
                                    return e.request(n);
                                });

                              case 4:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                    }))();
                },
                niceJsonMiniProgramV1DevicesPost: function(t, n) {
                    return Object(p.a)(Object(v.a)().mark(function r() {
                        var i;
                        return Object(v.a)().wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return r.next = 2, k(e).niceJsonMiniProgramV1DevicesPost(t, n);

                              case 2:
                                return i = r.sent, r.abrupt("return", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, n = Object(b.a)(Object(b.a)({}, i.options), {}, {
                                        url: t + i.url
                                    });
                                    return e.request(n);
                                });

                              case 4:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                    }))();
                },
                niceJsonMiniProgramV1FirmwaresGet: function(t, n) {
                    return Object(p.a)(Object(v.a)().mark(function r() {
                        var i;
                        return Object(v.a)().wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return r.next = 2, k(e).niceJsonMiniProgramV1FirmwaresGet(t, n);

                              case 2:
                                return i = r.sent, r.abrupt("return", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, n = Object(b.a)(Object(b.a)({}, i.options), {}, {
                                        url: t + i.url
                                    });
                                    return e.request(n);
                                });

                              case 4:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                    }))();
                },
                niceJsonMiniProgramV1GameDataDataIdGet: function(t, n) {
                    return Object(p.a)(Object(v.a)().mark(function r() {
                        var i;
                        return Object(v.a)().wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return r.next = 2, k(e).niceJsonMiniProgramV1GameDataDataIdGet(t, n);

                              case 2:
                                return i = r.sent, r.abrupt("return", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, n = Object(b.a)(Object(b.a)({}, i.options), {}, {
                                        url: t + i.url
                                    });
                                    return e.request(n);
                                });

                              case 4:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                    }))();
                },
                niceJsonMiniProgramV1GamesGameIdGet: function(t, n) {
                    return Object(p.a)(Object(v.a)().mark(function r() {
                        var i;
                        return Object(v.a)().wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return r.next = 2, k(e).niceJsonMiniProgramV1GamesGameIdGet(t, n);

                              case 2:
                                return i = r.sent, r.abrupt("return", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, n = Object(b.a)(Object(b.a)({}, i.options), {}, {
                                        url: t + i.url
                                    });
                                    return e.request(n);
                                });

                              case 4:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                    }))();
                },
                niceJsonMiniProgramV1GamesGet: function(t) {
                    return Object(p.a)(Object(v.a)().mark(function n() {
                        var r;
                        return Object(v.a)().wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, k(e).niceJsonMiniProgramV1GamesGet(t);

                              case 2:
                                return r = n.sent, n.abrupt("return", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, n = Object(b.a)(Object(b.a)({}, r.options), {}, {
                                        url: t + r.url
                                    });
                                    return e.request(n);
                                });

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                niceJsonMiniProgramV1HomeGet: function(t) {
                    return Object(p.a)(Object(v.a)().mark(function n() {
                        var r;
                        return Object(v.a)().wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, k(e).niceJsonMiniProgramV1HomeGet(t);

                              case 2:
                                return r = n.sent, n.abrupt("return", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, n = Object(b.a)(Object(b.a)({}, r.options), {}, {
                                        url: t + r.url
                                    });
                                    return e.request(n);
                                });

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                niceJsonMiniProgramV1LoginPost: function(t, n) {
                    return Object(p.a)(Object(v.a)().mark(function r() {
                        var i;
                        return Object(v.a)().wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return r.next = 2, k(e).niceJsonMiniProgramV1LoginPost(t, n);

                              case 2:
                                return i = r.sent, r.abrupt("return", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, n = Object(b.a)(Object(b.a)({}, i.options), {}, {
                                        url: t + i.url
                                    });
                                    return e.request(n);
                                });

                              case 4:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                    }))();
                },
                niceJsonMiniProgramV1QuestionsGet: function(t) {
                    return Object(p.a)(Object(v.a)().mark(function n() {
                        var r;
                        return Object(v.a)().wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, k(e).niceJsonMiniProgramV1QuestionsGet(t);

                              case 2:
                                return r = n.sent, n.abrupt("return", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, n = Object(b.a)(Object(b.a)({}, r.options), {}, {
                                        url: t + r.url
                                    });
                                    return e.request(n);
                                });

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                niceJsonMiniProgramV1QuestionsPost: function(t) {
                    return Object(p.a)(Object(v.a)().mark(function n() {
                        var r;
                        return Object(v.a)().wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, k(e).niceJsonMiniProgramV1QuestionsPost(t);

                              case 2:
                                return r = n.sent, n.abrupt("return", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, n = Object(b.a)(Object(b.a)({}, r.options), {}, {
                                        url: t + r.url
                                    });
                                    return e.request(n);
                                });

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                niceJsonMiniProgramV1SignupPost: function(t, n) {
                    return Object(p.a)(Object(v.a)().mark(function r() {
                        var i;
                        return Object(v.a)().wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return r.next = 2, k(e).niceJsonMiniProgramV1SignupPost(t, n);

                              case 2:
                                return i = r.sent, r.abrupt("return", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, n = Object(b.a)(Object(b.a)({}, i.options), {}, {
                                        url: t + i.url
                                    });
                                    return e.request(n);
                                });

                              case 4:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                    }))();
                },
                niceJsonMiniProgramV1UserGet: function(t, n) {
                    return Object(p.a)(Object(v.a)().mark(function r() {
                        var i;
                        return Object(v.a)().wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return r.next = 2, k(e).niceJsonMiniProgramV1UserGet(t, n);

                              case 2:
                                return i = r.sent, r.abrupt("return", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, n = Object(b.a)(Object(b.a)({}, i.options), {}, {
                                        url: t + i.url
                                    });
                                    return e.request(n);
                                });

                              case 4:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                    }))();
                },
                niceJsonMiniProgramV1UserVerifyPost: function(t, n) {
                    return Object(p.a)(Object(v.a)().mark(function r() {
                        var i;
                        return Object(v.a)().wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return r.next = 2, k(e).niceJsonMiniProgramV1UserVerifyPost(t, n);

                              case 2:
                                return i = r.sent, r.abrupt("return", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w, n = Object(b.a)(Object(b.a)({}, i.options), {}, {
                                        url: t + i.url
                                    });
                                    return e.request(n);
                                });

                              case 4:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                    }))();
                }
            };
        }, V = function(e) {
            Object(l.a)(n, e);
            var t = Object(h.a)(n);
            function n() {
                return Object(f.a)(this, n), t.apply(this, arguments);
            }
            return Object(d.a)(n, [ {
                key: "niceJsonMiniProgramV1DevicesGet",
                value: function(e, t) {
                    var n = this;
                    return U(this.configuration).niceJsonMiniProgramV1DevicesGet(e, t).then(function(e) {
                        return e(n.axios, n.basePath);
                    });
                }
            }, {
                key: "niceJsonMiniProgramV1DevicesPost",
                value: function(e, t) {
                    var n = this;
                    return U(this.configuration).niceJsonMiniProgramV1DevicesPost(e, t).then(function(e) {
                        return e(n.axios, n.basePath);
                    });
                }
            }, {
                key: "niceJsonMiniProgramV1FirmwaresGet",
                value: function(e, t) {
                    var n = this;
                    return U(this.configuration).niceJsonMiniProgramV1FirmwaresGet(e, t).then(function(e) {
                        return e(n.axios, n.basePath);
                    });
                }
            }, {
                key: "niceJsonMiniProgramV1GameDataDataIdGet",
                value: function(e, t) {
                    var n = this;
                    return U(this.configuration).niceJsonMiniProgramV1GameDataDataIdGet(e, t).then(function(e) {
                        return e(n.axios, n.basePath);
                    });
                }
            }, {
                key: "niceJsonMiniProgramV1GamesGameIdGet",
                value: function(e, t) {
                    var n = this;
                    return U(this.configuration).niceJsonMiniProgramV1GamesGameIdGet(e, t).then(function(e) {
                        return e(n.axios, n.basePath);
                    });
                }
            }, {
                key: "niceJsonMiniProgramV1GamesGet",
                value: function(e) {
                    var t = this;
                    return U(this.configuration).niceJsonMiniProgramV1GamesGet(e).then(function(e) {
                        return e(t.axios, t.basePath);
                    });
                }
            }, {
                key: "niceJsonMiniProgramV1HomeGet",
                value: function(e) {
                    var t = this;
                    return U(this.configuration).niceJsonMiniProgramV1HomeGet(e).then(function(e) {
                        return e(t.axios, t.basePath);
                    });
                }
            }, {
                key: "niceJsonMiniProgramV1LoginPost",
                value: function(e, t) {
                    var n = this;
                    return U(this.configuration).niceJsonMiniProgramV1LoginPost(e, t).then(function(e) {
                        return e(n.axios, n.basePath);
                    });
                }
            }, {
                key: "niceJsonMiniProgramV1QuestionsGet",
                value: function(e) {
                    var t = this;
                    return U(this.configuration).niceJsonMiniProgramV1QuestionsGet(e).then(function(e) {
                        return e(t.axios, t.basePath);
                    });
                }
            }, {
                key: "niceJsonMiniProgramV1QuestionsPost",
                value: function(e) {
                    var t = this;
                    return U(this.configuration).niceJsonMiniProgramV1QuestionsPost(e).then(function(e) {
                        return e(t.axios, t.basePath);
                    });
                }
            }, {
                key: "niceJsonMiniProgramV1SignupPost",
                value: function(e, t) {
                    var n = this;
                    return U(this.configuration).niceJsonMiniProgramV1SignupPost(e, t).then(function(e) {
                        return e(n.axios, n.basePath);
                    });
                }
            }, {
                key: "niceJsonMiniProgramV1UserGet",
                value: function(e, t) {
                    var n = this;
                    return U(this.configuration).niceJsonMiniProgramV1UserGet(e, t).then(function(e) {
                        return e(n.axios, n.basePath);
                    });
                }
            }, {
                key: "niceJsonMiniProgramV1UserVerifyPost",
                value: function(e, t) {
                    var n = this;
                    return U(this.configuration).niceJsonMiniProgramV1UserVerifyPost(e, t).then(function(e) {
                        return e(n.axios, n.basePath);
                    });
                }
            } ]), n;
        }(y), C = "https://nfctag.nfcreader.net/", P = a.a.create({
            baseURL: C,
            timeout: 1e4,
            adapter: i.a
        });
        P.interceptors.response.use(function(e) {
            return [ 200, 401 ].includes(e.data.code) || "用户不存在" === e.data.message || o.a.showToast({
                icon: "none",
                title: e.data.message
            }), 401 === e.data.code && u.a.toUser({
                data: u.a.getData(),
                type: s.NavigateType.switchTab
            }), e;
        }, function(e) {
            return o.a.showToast({
                icon: "none",
                title: "网络错误"
            }), Promise.reject(e);
        });
        var I = new V(void 0, "", P);
    },
    33: function(e, t, n) {
        n.d(t, "a", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "b", function() {
            return i;
        });
        var r = function(e) {
            return Array.prototype.map.call(new Uint8Array(e), function(e) {
                return "0x".concat(("00" + e.toString(16)).slice(-2));
            });
        }, a = function(e) {
            var t = new ArrayBuffer(e.length), n = new DataView(t);
            return e.forEach(function(e, t) {
                n.setUint8(t, e);
            }), t;
        }, i = function(e) {
            return e.map(function(e) {
                return function(e) {
                    return "0x".concat(e.toString(16).padStart(2, "0"));
                }(e);
            }).join(" ");
        };
    },
    34: function(e, t, n) {
        (function(e) {
            n.d(t, "a", function() {
                return g;
            });
            var r = n(118), a = n(31), i = n(4), c = n(9), o = n(15), s = n(16), u = n(11), f = n(2), d = n.n(f), l = n(29), h = n(7), v = n(33), b = n(51), p = n(24), j = n(47), O = n(97), m = n.n(O), g = new (function() {
                function t() {
                    var n = this;
                    Object(o.a)(this, t), Object(u.a)(this, "isReady", !1), Object(u.a)(this, "isNewVersion", !1), 
                    Object(u.a)(this, "deviceInfo", null), Object(u.a)(this, "timeoutTimer", null), 
                    Object(u.a)(this, "write", function() {
                        var t = Object(c.a)(Object(i.a)().mark(function t(r) {
                            var o, s = arguments;
                            return Object(i.a)().wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return o = s.length > 1 && void 0 !== s[1] ? s[1] : [], t.abrupt("return", new Promise(function() {
                                        var t = Object(c.a)(Object(i.a)().mark(function t(s, u) {
                                            var f, d, l, h, b, p, j;
                                            return Object(i.a)().wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                  case 0:
                                                    if (t.prev = 0, f = Math.floor(256 * Math.random()), d = Math.floor(256 * Math.random()), 
                                                    l = e.from([ 75, 71, 70, 95, 65, 77, 73, 76, 7, 231, 4, 6, 10, 42, f, d ]), n.timeoutTimer && clearTimeout(n.timeoutTimer), 
                                                    n.timeoutTimer = setTimeout(Object(c.a)(Object(i.a)().mark(function e() {
                                                        return Object(i.a)().wrap(function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                              case 0:
                                                                return e.next = 2, n.disconnect();

                                                              case 2:
                                                              case "end":
                                                                return e.stop();
                                                            }
                                                        }, e);
                                                    })), 1e4), n.isNewVersion) {
                                                        t.next = 13;
                                                        break;
                                                    }
                                                    return t.t0 = s, t.next = 10, n.rawWrite(r, o);

                                                  case 10:
                                                    return t.t1 = t.sent, (0, t.t0)(t.t1), t.abrupt("return");

                                                  case 13:
                                                    return h = Object(a.a)(r), console.log("packetToServer", h), t.next = 17, n.createRequestPacket(h, f, d, l);

                                                  case 17:
                                                    return b = t.sent, console.log("toDevicePacketBuffer", b), t.next = 21, n.rawWrite(Object(a.a)(b));

                                                  case 21:
                                                    return p = t.sent, t.next = 24, n.decryptResponsePacket(Object(a.a)(p), f, d, l);

                                                  case 24:
                                                    if (j = t.sent, !(o.length > 0 && j.some(function(e, t) {
                                                        return e !== o[t];
                                                    }))) {
                                                        t.next = 28;
                                                        break;
                                                    }
                                                    throw console.error("writing: ".concat(Object(v.b)(Object(a.a)(b)), " value: ").concat(Object(v.b)(j), ", shouldBe: ").concat(Object(v.b)(o))), 
                                                    new Error("写入校验错误");

                                                  case 28:
                                                    s(j), t.next = 34;
                                                    break;

                                                  case 31:
                                                    t.prev = 31, t.t2 = t.catch(0), u(t.t2);

                                                  case 34:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t, null, [ [ 0, 31 ] ]);
                                        }));
                                        return function(e, n) {
                                            return t.apply(this, arguments);
                                        };
                                    }()));

                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }()), Object(u.a)(this, "rawWrite", function() {
                        var e = Object(c.a)(Object(i.a)().mark(function e(t) {
                            var r, a = arguments;
                            return Object(i.a)().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return r = a.length > 1 && void 0 !== a[1] ? a[1] : [], e.abrupt("return", new Promise(function() {
                                        var e = Object(c.a)(Object(i.a)().mark(function e(a, o) {
                                            var s;
                                            return Object(i.a)().wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    if (h.a.device) {
                                                        e.next = 3;
                                                        break;
                                                    }
                                                    return e.next = 3, n.init();

                                                  case 3:
                                                    return e.prev = 3, d.a.onBLECharacteristicValueChange(function() {
                                                        var e = Object(c.a)(Object(i.a)().mark(function e(n) {
                                                            var c, s;
                                                            return Object(i.a)().wrap(function(e) {
                                                                for (;;) switch (e.prev = e.next) {
                                                                  case 0:
                                                                    if (c = n.value, n.characteristicId === h.a.notifyUuid && 0 !== c.byteLength) {
                                                                        e.next = 3;
                                                                        break;
                                                                    }
                                                                    return e.abrupt("return");

                                                                  case 3:
                                                                    if (s = Object(v.a)(c).map(function(e) {
                                                                        return parseInt(e, 16);
                                                                    }), !(r.length > 0) || r.every(function(e, t) {
                                                                        return e === s[t];
                                                                    })) {
                                                                        e.next = 8;
                                                                        break;
                                                                    }
                                                                    return p.c.error("Amiibo writing mismatched", "writing: ".concat(Object(v.b)(t), " value: ").concat(Object(v.b)(s), ", shouldBe: ").concat(Object(v.b)(r))), 
                                                                    o("写入校验错误"), e.abrupt("return");

                                                                  case 8:
                                                                    a(Object(v.a)(c).map(function(e) {
                                                                        return parseInt(e, 16);
                                                                    }));

                                                                  case 9:
                                                                  case "end":
                                                                    return e.stop();
                                                                }
                                                            }, e);
                                                        }));
                                                        return function(t) {
                                                            return e.apply(this, arguments);
                                                        };
                                                    }()), s = Object(v.c)(t), e.next = 8, d.a.writeBLECharacteristicValue({
                                                        deviceId: h.a.device.deviceId,
                                                        serviceId: h.a.serviceUuid,
                                                        characteristicId: h.a.writeUuid,
                                                        value: s
                                                    });

                                                  case 8:
                                                    e.next = 14;
                                                    break;

                                                  case 10:
                                                    e.prev = 10, e.t0 = e.catch(3), p.c.error("Amiibo rawWrite: ", e.t0), o(e.t0);

                                                  case 14:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e, null, [ [ 3, 10 ] ]);
                                        }));
                                        return function(t, n) {
                                            return e.apply(this, arguments);
                                        };
                                    }()));

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());
                }
                return Object(s.a)(t, [ {
                    key: "init",
                    value: function() {
                        var e = Object(c.a)(Object(i.a)().mark(function e() {
                            var t, n, r, a, c = arguments;
                            return Object(i.a)().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (a = c.length > 0 && void 0 !== c[0] ? c[0] : [ "amiibolink", "omllbolink", "omllbomini" ], 
                                    !this.isReady) {
                                        e.next = 3;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 3:
                                    return e.next = 5, h.a.init();

                                  case 5:
                                    return e.next = 7, h.a.discoverDeviceAndConnect(a);

                                  case 7:
                                    if ("ios" !== d.a.getDeviceInfo().platform) {
                                        e.next = 13;
                                        break;
                                    }
                                    return e.next = 11, d.a.getBLEMTU({
                                        deviceId: h.a.device.deviceId,
                                        writeType: "write",
                                        success: function(e) {
                                            d.a.getApp().BLEMTU = e.mtu;
                                        }
                                    });

                                  case 11:
                                    e.next = 16;
                                    break;

                                  case 13:
                                    return e.next = 15, h.a.getMaxBLEMTU(247);

                                  case 15:
                                    d.a.getApp().BLEMTU = e.sent;

                                  case 16:
                                    if ("omllbolink" !== (null === h.a || void 0 === h.a || null === (t = h.a.device) || void 0 === t ? void 0 : t.localName) && "omllbomini" !== (null === h.a || void 0 === h.a || null === (n = h.a.device) || void 0 === n ? void 0 : n.localName)) {
                                        e.next = 21;
                                        break;
                                    }
                                    return e.next = 19, this.chargeVersionPreCheck().catch(function(e) {
                                        p.c.error("Amiibo chargeVersionPreCheck failed:", e);
                                    });

                                  case 19:
                                    e.next = 24;
                                    break;

                                  case 21:
                                    if ("amiibolink" !== (null === h.a || void 0 === h.a || null === (r = h.a.device) || void 0 === r ? void 0 : r.localName)) {
                                        e.next = 24;
                                        break;
                                    }
                                    return e.next = 24, this.handleVersionPreCheck().catch(function(e) {
                                        p.c.error("Amiibo handleVersionPreCheck failed:", e);
                                    });

                                  case 24:
                                    return e.next = 26, this.snReport();

                                  case 26:
                                    this.isReady = !0;

                                  case 27:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "disconnect",
                    value: function() {
                        var e = Object(c.a)(Object(i.a)().mark(function e() {
                            return Object(i.a)().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.timeoutTimer && clearTimeout(this.timeoutTimer), this.isReady = !1, 
                                    this.isNewVersion = !1, this.deviceInfo = null, this.timeoutTimer = null, e.next = 7, 
                                    h.a.disconnect();

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "snReport",
                    value: function() {
                        var e = Object(c.a)(Object(i.a)().mark(function e() {
                            var t, n, r;
                            return Object(i.a)().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ("omllbolink" === h.a.device.name || "omllbomini" === h.a.device.name) {
                                        e.next = 3;
                                        break;
                                    }
                                    if (h.a.device && this.deviceInfo && this.isNewVersion) {
                                        e.next = 3;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 3:
                                    l.b.niceJsonMiniProgramV1DevicesPost({
                                        version: (null === (t = this.deviceInfo) || void 0 === t ? void 0 : t.firmwareVersion) || "",
                                        type: (null === (n = h.a.device) || void 0 === n ? void 0 : n.name) || "",
                                        sn: "".concat(null === (r = this.deviceInfo) || void 0 === r ? void 0 : r.deviceSN)
                                    });

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "handleVersionPreCheck",
                    value: function() {
                        var e = Object(c.a)(Object(i.a)().mark(function e() {
                            var t, n, r, a, c, o, s, u;
                            return Object(i.a)().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this.rawWrite(b.h.write);

                                  case 2:
                                    if (t = e.sent, this.isNewVersion = !Object(v.b)(t).startsWith("0xb2 0xa2"), !this.isNewVersion) {
                                        e.next = 11;
                                        break;
                                    }
                                    return e.next = 7, this.write(b.h.write);

                                  case 7:
                                    return n = e.sent, r = Object(p.d)(n), a = r.firmwareVersion, c = r.deviceSN, o = r.deviceMode, 
                                    this.deviceInfo = {
                                        firmwareVersion: a,
                                        deviceSN: c,
                                        isNewVersion: !0,
                                        deviceMode: o
                                    }, e.abrupt("return");

                                  case 11:
                                    s = Object(p.d)(t), u = s.firmwareVersion, this.deviceInfo = {
                                        isNewVersion: !1,
                                        firmwareVersion: u,
                                        deviceSN: "",
                                        deviceMode: 0
                                    };

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "chargeVersionPreCheck",
                    value: function() {
                        var e = Object(c.a)(Object(i.a)().mark(function e() {
                            var t, n, r, a;
                            return Object(i.a)().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = {
                                        deviceId: null === h.a || void 0 === h.a || null === (t = h.a.device) || void 0 === t ? void 0 : t.deviceId,
                                        serviceUuid: h.a.serviceUuid,
                                        writeUuid: h.a.writeUuid,
                                        notifyUuid: h.a.notifyUuid
                                    }, e.next = 3, Object(j.c)(n);

                                  case 3:
                                    return r = e.sent, e.next = 6, Object(j.d)(n);

                                  case 6:
                                    a = e.sent, this.deviceInfo = {
                                        isNewVersion: !1,
                                        firmwareVersion: r.version,
                                        deviceSN: r.sn,
                                        deviceMode: parseInt(a.mode),
                                        electricity: parseInt(a.electricity),
                                        buzzer: parseInt(a.buzzer)
                                    };

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "writeTask",
                    value: function() {
                        var e = Object(c.a)(Object(i.a)().mark(function e(t) {
                            var n, c, o, s, u, f, l, h, v;
                            return Object(i.a)().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    n = t.asList, c = t.onProgress, t.shouldDisconnect, o = n.length, s = [], u = 0, 
                                    console.log("writeTask start"), f = Object(r.a)(n), e.prev = 6, f.s();

                                  case 8:
                                    if ((l = f.n()).done) {
                                        e.next = 18;
                                        break;
                                    }
                                    return h = l.value, e.next = 12, this.write([].concat(Object(a.a)(h.write), Object(a.a)(h.payload || [])), h.shouldBe).catch(function(e) {
                                        throw console.log(e), p.c.warn("Amiibo writeTask failed", e), d.a.showToast({
                                            title: "写入失败",
                                            icon: "none"
                                        }), new Error(e);
                                    });

                                  case 12:
                                    v = e.sent, s.push(v), null == c || c(Math.floor(u / o * 100)), u += 1;

                                  case 16:
                                    e.next = 8;
                                    break;

                                  case 18:
                                    e.next = 23;
                                    break;

                                  case 20:
                                    e.prev = 20, e.t0 = e.catch(6), f.e(e.t0);

                                  case 23:
                                    return e.prev = 23, f.f(), e.finish(23);

                                  case 26:
                                    return console.log("writeTask end"), e.abrupt("return", s);

                                  case 28:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 6, 20, 23, 26 ] ]);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "decryptResponsePacket",
                    value: function() {
                        var t = Object(c.a)(Object(i.a)().mark(function t(n, r, c, o) {
                            var s, u, f, d, l, h;
                            return Object(i.a)().wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (s = n[0], u = n[1], s === r && u === c) {
                                        t.next = 4;
                                        break;
                                    }
                                    throw "数据包已损坏，请重试";

                                  case 4:
                                    return f = n.slice(4), d = m.a.createDecipheriv("aes-128-ecb", o, "").setAutoPadding(!1), 
                                    l = e.concat([ d.update(e.from(f)), d.final() ]), h = n[3], t.abrupt("return", Object(a.a)(l).slice(0, h));

                                  case 9:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function(e, n, r, a) {
                            return t.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "createRequestPacket",
                    value: function() {
                        var t = Object(c.a)(Object(i.a)().mark(function t(n, r, a, c) {
                            var o, s, u, f;
                            return Object(i.a)().wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (this.isNewVersion) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return", e.from(n));

                                  case 2:
                                    for (o = e.from(n); o.length % 16 != 0; ) o = e.concat([ o, e.from([ 0 ]) ]);
                                    return s = m.a.createCipheriv("aes-128-ecb", c, "").setAutoPadding(!1), u = s.update(o), 
                                    (f = new Uint8Array(s.final())).length > 0 && (u = e.concat([ u, f ])), t.abrupt("return", e.concat([ e.from([ r, a ]), e.from([ u.length ]), e.from([ n.length ]), u ]));

                                  case 9:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e, n, r, a) {
                            return t.apply(this, arguments);
                        };
                    }()
                } ]), t;
            }())();
        }).call(this, n(19).Buffer);
    },
    47: function(e, t, n) {
        n.d(t, "c", function() {
            return f;
        }), n.d(t, "d", function() {
            return d;
        }), n.d(t, "e", function() {
            return l;
        }), n.d(t, "a", function() {
            return h;
        }), n.d(t, "b", function() {
            return v;
        }), n.d(t, "f", function() {
            return j;
        }), n.d(t, "g", function() {
            return O;
        }), n.d(t, "h", function() {
            return m;
        }), n.d(t, "i", function() {
            return g;
        }), n.d(t, "j", function() {
            return w;
        });
        var r = n(4), a = n(9), i = n(33), c = n(2), o = n.n(c), s = n(7), u = n(34), f = function(e) {
            return new Promise(function() {
                var t = Object(a.a)(Object(r.a)().mark(function t(n, a) {
                    var c, s;
                    return Object(r.a)().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return c = new ArrayBuffer(1), new DataView(c).setUint8(0, 1), s = function(e) {
                                var t = k(Object(i.a)(e.value)).data, r = t[1], c = t.slice(2, 5).map(function(e) {
                                    return parseInt("0x" + e.slice(-2));
                                }).join("."), o = t.slice(5, 13).reverse().map(function(e) {
                                    return e.slice(-2);
                                }).join("");
                                "0x00" === r ? n({
                                    version: c,
                                    sn: o
                                }) : a(r);
                            }, t.next = 6, o.a.notifyBLECharacteristicValueChange({
                                deviceId: e.deviceId,
                                serviceId: e.serviceUuid,
                                characteristicId: e.notifyUuid,
                                state: !0
                            });

                          case 6:
                            o.a.onBLECharacteristicValueChange(s), y(e, c).catch(function(e) {
                                console.error(e), a("信息发送失败");
                            });

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }));
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            }());
        }, d = function(e) {
            return new Promise(function() {
                var t = Object(a.a)(Object(r.a)().mark(function t(n, a) {
                    var c, s;
                    return Object(r.a)().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return c = new ArrayBuffer(1), new DataView(c).setUint8(0, 2), s = function e(t) {
                                var r = k(Object(i.a)(t.value)).data, c = r[1], s = r[2], u = r[3], f = r[4], d = r.length > 5 ? r[5] : "0x03";
                                "0x00" === c ? (o.a.offBLECharacteristicValueChange(e), n({
                                    electricity: s,
                                    mode: u,
                                    props: f,
                                    buzzer: d
                                })) : (o.a.offBLECharacteristicValueChange(e), a(c));
                            }, t.next = 6, o.a.notifyBLECharacteristicValueChange({
                                deviceId: e.deviceId,
                                serviceId: e.serviceUuid,
                                characteristicId: e.notifyUuid,
                                state: !0
                            });

                          case 6:
                            o.a.onBLECharacteristicValueChange(s), y(e, c).catch(function(e) {
                                console.error(e), o.a.offBLECharacteristicValueChange(s), a("信息发送失败");
                            });

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }));
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            }());
        }, l = function(e) {
            return new Promise(function() {
                var t = Object(a.a)(Object(r.a)().mark(function t(n, a) {
                    var c, u, f, d;
                    return Object(r.a)().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return u = new ArrayBuffer(2), (f = new DataView(u)).setUint8(0, 3), f.setUint8(1, e), 
                            d = function e(t) {
                                var r = k(Object(i.a)(t.value)).data, c = r[1], s = r[2];
                                "0x00" === c ? (o.a.offBLECharacteristicValueChange(e), n(s)) : (o.a.offBLECharacteristicValueChange(e), 
                                a(c));
                            }, t.next = 7, o.a.notifyBLECharacteristicValueChange({
                                deviceId: s.a.device.deviceId,
                                serviceId: s.a.serviceUuid,
                                characteristicId: s.a.notifyUuid,
                                state: !0
                            });

                          case 7:
                            o.a.onBLECharacteristicValueChange(d), y({
                                deviceId: null === s.a || void 0 === s.a || null === (c = s.a.device) || void 0 === c ? void 0 : c.deviceId,
                                serviceUuid: s.a.serviceUuid,
                                writeUuid: s.a.writeUuid,
                                notifyUuid: s.a.notifyUuid
                            }, u).catch(function(e) {
                                console.error(e), o.a.offBLECharacteristicValueChange(d), a("信息发送失败");
                            });

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }));
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            }());
        }, h = function(e) {
            return new Promise(function() {
                var t = Object(a.a)(Object(r.a)().mark(function t(n, a) {
                    var c, u, f, d;
                    return Object(r.a)().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return u = new ArrayBuffer(2), (f = new DataView(u)).setUint8(0, 13), f.setUint8(1, e), 
                            d = function e(t) {
                                var r = k(Object(i.a)(t.value)).data, c = r[1], s = r[2];
                                "0x00" === c ? (o.a.offBLECharacteristicValueChange(e), n(s)) : (o.a.offBLECharacteristicValueChange(e), 
                                a(c));
                            }, t.next = 7, o.a.notifyBLECharacteristicValueChange({
                                deviceId: s.a.device.deviceId,
                                serviceId: s.a.serviceUuid,
                                characteristicId: s.a.notifyUuid,
                                state: !0
                            });

                          case 7:
                            o.a.onBLECharacteristicValueChange(d), y({
                                deviceId: null === s.a || void 0 === s.a || null === (c = s.a.device) || void 0 === c ? void 0 : c.deviceId,
                                serviceUuid: s.a.serviceUuid,
                                writeUuid: s.a.writeUuid,
                                notifyUuid: s.a.notifyUuid
                            }, u).catch(function(e) {
                                console.error(e), o.a.offBLECharacteristicValueChange(d), a("信息发送失败");
                            });

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }));
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            }());
        }, v = function() {
            return new Promise(function() {
                var e = Object(a.a)(Object(r.a)().mark(function e(t, n) {
                    var a, c, u;
                    return Object(r.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return c = new ArrayBuffer(1), new DataView(c).setUint8(0, 7), u = function e(r) {
                                var a = k(Object(i.a)(r.value)).data[1];
                                "0x00" === a ? (o.a.offBLECharacteristicValueChange(e), t(a)) : (o.a.offBLECharacteristicValueChange(e), 
                                n(a));
                            }, e.next = 6, o.a.notifyBLECharacteristicValueChange({
                                deviceId: s.a.device.deviceId,
                                serviceId: s.a.serviceUuid,
                                characteristicId: s.a.notifyUuid,
                                state: !0
                            });

                          case 6:
                            o.a.onBLECharacteristicValueChange(u), y({
                                deviceId: null === s.a || void 0 === s.a || null === (a = s.a.device) || void 0 === a ? void 0 : a.deviceId,
                                serviceUuid: s.a.serviceUuid,
                                writeUuid: s.a.writeUuid,
                                notifyUuid: s.a.notifyUuid
                            }, c).catch(function(e) {
                                console.error(e), o.a.offBLECharacteristicValueChange(u), n("信息发送失败");
                            });

                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            }());
        }, b = {
            length: 0,
            offset: 0,
            block: 0,
            send: 0
        }, p = {
            length: 0,
            offset: 0,
            block: 0,
            send: 0
        }, j = function(e, t) {
            return p.length = e.length, p.offset = 0, p.block = 0, new Promise(function() {
                var n = Object(a.a)(Object(r.a)().mark(function n(a, c) {
                    var u, f, d;
                    return Object(r.a)().wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return u = function(t, n) {
                                if (t >= n) return p.length = 0, p.offset = 0, p.block = 0, o.a.offBLECharacteristicValueChange(d), 
                                void a(!0);
                                var r = p.offset + 80;
                                r > n && (r = n);
                                var i = e.slice(t, r);
                                f(i);
                            }, f = function(e) {
                                var n;
                                t((p.offset / p.length * 100).toFixed(2));
                                var r = p.offset.toString(16).padStart(4, "0");
                                p.block = e.length;
                                var a = new ArrayBuffer(e.length + 4), i = new DataView(a);
                                i.setUint8(0, 5), i.setUint8(1, parseInt("0x" + r.slice(0, 2))), i.setUint8(2, parseInt("0x" + r.slice(2, 4))), 
                                i.setUint8(3, e.length);
                                for (var o = 0; o < e.length; o++) i.setUint8(o + 4, e[o]);
                                y({
                                    deviceId: null === s.a || void 0 === s.a || null === (n = s.a.device) || void 0 === n ? void 0 : n.deviceId,
                                    serviceUuid: s.a.serviceUuid,
                                    writeUuid: s.a.writeUuid,
                                    notifyUuid: s.a.notifyUuid
                                }, a).then(function() {}).catch(function(e) {
                                    console.error(e), c("数据发送失败");
                                });
                            }, d = function e(t) {
                                var n = k(Object(i.a)(t.value)).data[1];
                                if ("0x00" !== n) return o.a.offBLECharacteristicValueChange(e), void c(n);
                                p.offset += p.block, u(p.offset, p.length);
                            }, n.next = 5, o.a.notifyBLECharacteristicValueChange({
                                deviceId: s.a.device.deviceId,
                                serviceId: s.a.serviceUuid,
                                characteristicId: s.a.notifyUuid,
                                state: !0
                            });

                          case 5:
                            o.a.onBLECharacteristicValueChange(d), 0 === p.offset && u(p.offset, p.length);

                          case 7:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }));
                return function(e, t) {
                    return n.apply(this, arguments);
                };
            }());
        }, O = function(e, t) {
            return new Promise(function() {
                var n = Object(a.a)(Object(r.a)().mark(function n(a, c) {
                    var u, f, d, l;
                    return Object(r.a)().wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return f = new ArrayBuffer(5), (d = new DataView(f)).setUint8(0, 6), d.setUint8(1, Number("0x" + e.slice(0, 2))), 
                            d.setUint8(2, Number("0x" + e.slice(2, 4))), d.setUint8(3, Number("0x" + t.slice(0, 2))), 
                            d.setUint8(4, Number("0x" + t.slice(2, 4))), l = function e(t) {
                                var n = k(Object(i.a)(t.value)).data[1];
                                "0x00" === n ? (o.a.offBLECharacteristicValueChange(e), a(n)) : (o.a.offBLECharacteristicValueChange(e), 
                                c(n));
                            }, n.next = 10, o.a.notifyBLECharacteristicValueChange({
                                deviceId: s.a.device.deviceId,
                                serviceId: s.a.serviceUuid,
                                characteristicId: s.a.notifyUuid,
                                state: !0
                            });

                          case 10:
                            o.a.onBLECharacteristicValueChange(l), y({
                                deviceId: null === s.a || void 0 === s.a || null === (u = s.a.device) || void 0 === u ? void 0 : u.deviceId,
                                serviceUuid: s.a.serviceUuid,
                                writeUuid: s.a.writeUuid,
                                notifyUuid: s.a.notifyUuid
                            }, f).catch(function(e) {
                                console.error(e), o.a.offBLECharacteristicValueChange(l), c("信息发送失败");
                            });

                          case 12:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }));
                return function(e, t) {
                    return n.apply(this, arguments);
                };
            }());
        }, m = function(e, t) {
            return b.length = e.length, b.offset = 0, b.block = 0, new Promise(function() {
                var n = Object(a.a)(Object(r.a)().mark(function n(a, c) {
                    var u, f, d;
                    return Object(r.a)().wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return u = function(t, n) {
                                if (t >= n) return b.length = 0, b.offset = 0, b.block = 0, o.a.offBLECharacteristicValueChange(d), 
                                void a(!0);
                                for (var r = b.offset + 58; r / 4 % 1 != 0; ) r -= 1;
                                r > n && (r = n);
                                var i = e.slice(t, r);
                                f(i);
                            }, f = function(e) {
                                var n;
                                t((b.offset / b.length * 100).toFixed(2));
                                var r = b.offset.toString(16).padStart(8, "0");
                                b.block = e.length;
                                var a = new ArrayBuffer(e.length + 6), i = new DataView(a);
                                i.setUint8(0, 8), i.setUint8(1, parseInt("0x" + r.slice(0, 2))), i.setUint8(2, parseInt("0x" + r.slice(2, 4))), 
                                i.setUint8(3, parseInt("0x" + r.slice(4, 6))), i.setUint8(4, parseInt("0x" + r.slice(6, 8))), 
                                i.setUint8(5, e.length);
                                for (var u = 0; u < e.length; u++) i.setUint8(u + 6, e[u]);
                                y({
                                    deviceId: null === s.a || void 0 === s.a || null === (n = s.a.device) || void 0 === n ? void 0 : n.deviceId,
                                    serviceUuid: s.a.serviceUuid,
                                    writeUuid: s.a.writeUuid,
                                    notifyUuid: s.a.notifyUuid
                                }, a).catch(function(e) {
                                    console.error(e), o.a.offBLECharacteristicValueChange(d), c("信息发送失败");
                                });
                            }, d = function e(t) {
                                var n = k(Object(i.a)(t.value)).data[1];
                                if ("0x00" !== n) return o.a.offBLECharacteristicValueChange(e), void c(n);
                                b.offset += b.block, u(b.offset, b.length);
                            }, n.next = 5, o.a.notifyBLECharacteristicValueChange({
                                deviceId: s.a.device.deviceId,
                                serviceId: s.a.serviceUuid,
                                characteristicId: s.a.notifyUuid,
                                state: !0
                            });

                          case 5:
                            o.a.onBLECharacteristicValueChange(d), 0 === b.offset && u(b.offset, b.length);

                          case 7:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }));
                return function(e, t) {
                    return n.apply(this, arguments);
                };
            }());
        }, g = function(e, t) {
            return new Promise(function() {
                var n = Object(a.a)(Object(r.a)().mark(function n(a, c) {
                    var u, f, d, l;
                    return Object(r.a)().wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return f = new ArrayBuffer(7), (d = new DataView(f)).setUint8(0, 9), d.setUint8(1, Number("0x" + e.slice(0, 2))), 
                            d.setUint8(2, Number("0x" + e.slice(2, 4))), d.setUint8(3, Number("0x" + e.slice(4, 6))), 
                            d.setUint8(4, Number("0x" + e.slice(6, 8))), d.setUint8(5, Number("0x" + t.slice(0, 2))), 
                            d.setUint8(6, Number("0x" + t.slice(2, 4))), l = function e(t) {
                                var n = k(Object(i.a)(t.value)).data[1];
                                return "0x00" !== n ? (o.a.offBLECharacteristicValueChange(e), void c(n)) : (o.a.offBLECharacteristicValueChange(e), 
                                void a("固件升级成功，设备将自动关机，请重新开机之后连接设备"));
                            }, n.next = 12, o.a.notifyBLECharacteristicValueChange({
                                deviceId: s.a.device.deviceId,
                                serviceId: s.a.serviceUuid,
                                characteristicId: s.a.notifyUuid,
                                state: !0
                            });

                          case 12:
                            o.a.onBLECharacteristicValueChange(l), y({
                                deviceId: null === s.a || void 0 === s.a || null === (u = s.a.device) || void 0 === u ? void 0 : u.deviceId,
                                serviceUuid: s.a.serviceUuid,
                                writeUuid: s.a.writeUuid,
                                notifyUuid: s.a.notifyUuid
                            }, f).catch(function(e) {
                                console.error(e), o.a.offBLECharacteristicValueChange(l), c("信息发送失败");
                            });

                          case 14:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }));
                return function(e, t) {
                    return n.apply(this, arguments);
                };
            }());
        }, w = function(e) {
            return new Promise(function() {
                var t = Object(a.a)(Object(r.a)().mark(function t(n, a) {
                    var c, u, f, d;
                    return Object(r.a)().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return u = new ArrayBuffer(5), (f = new DataView(u)).setUint8(0, 10), f.setUint8(1, Number("0x" + e.slice(0, 2))), 
                            f.setUint8(2, Number("0x" + e.slice(2, 4))), f.setUint8(3, Number("0x" + e.slice(4, 6))), 
                            f.setUint8(4, Number("0x" + e.slice(6, 8))), d = function e(t) {
                                var r = k(Object(i.a)(t.value)).data[1];
                                return "0x00" !== r ? (o.a.offBLECharacteristicValueChange(e), void a(r)) : (n("固件升级成功，设备将自动关机，请重新开机之后连接设备"), 
                                void o.a.offBLECharacteristicValueChange(e));
                            }, t.next = 10, o.a.notifyBLECharacteristicValueChange({
                                deviceId: s.a.device.deviceId,
                                serviceId: s.a.serviceUuid,
                                characteristicId: s.a.notifyUuid,
                                state: !0
                            });

                          case 10:
                            o.a.onBLECharacteristicValueChange(d), y({
                                deviceId: null === s.a || void 0 === s.a || null === (c = s.a.device) || void 0 === c ? void 0 : c.deviceId,
                                serviceUuid: s.a.serviceUuid,
                                writeUuid: s.a.writeUuid,
                                notifyUuid: s.a.notifyUuid
                            }, u).catch(function(e) {
                                console.error(e), o.a.offBLECharacteristicValueChange(d), a("信息发送失败");
                            });

                          case 12:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }));
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            }());
        }, y = function(e, t) {
            var n = new ArrayBuffer(t.byteLength + 6), r = new DataView(n), a = new Uint8Array(t).buffer, i = new DataView(a), c = 0;
            r.setUint8(0, 255), r.setUint8(1, t.byteLength), r.setUint8(2, 1), r.setUint8(3, 1);
            for (var o = 0; o < t.byteLength; o++) c += i.getUint8(o), r.setUint8(4 + o, i.getUint8(o));
            return r.setUint8(4 + t.byteLength, c), r.setUint8(5 + t.byteLength, 254), x(e, n, 0);
        }, x = function e(t, n, r) {
            var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return new Promise(function(c, s) {
                var f = o.a.getApp().BLEMTU, d = n.byteLength, l = a || c, h = i || s, v = r + f;
                if (v > d && (v = d), d >= v) {
                    o.a.getApp().timeoutTimer && clearTimeout(o.a.getApp().timeoutTimer), o.a.getApp().timeoutTimer = setTimeout(function() {
                        u.a.disconnect();
                    }, 1e4);
                    var b = n.slice(r, v);
                    o.a.writeBLECharacteristicValue({
                        deviceId: t.deviceId,
                        serviceId: t.serviceUuid,
                        characteristicId: t.writeUuid,
                        value: b,
                        success: function() {
                            v !== d ? e(t, n, v, l, h).then() : l(!0);
                        },
                        fail: function(e) {
                            h(e);
                        }
                    }).catch(function(e) {
                        console.log("write", e);
                    });
                } else l(!0);
            });
        }, k = function(e) {
            if (255 !== parseInt(e[0]) || 254 !== parseInt(e[e.length - 1])) return !1;
            var t = e[1], n = e.slice(2, 4), r = e[e.length - 2], a = e.slice(4, parseInt(t) + 4), i = new Uint8Array(1);
            return i[0] = 0, a.map(function(e) {
                i[0] += parseInt(e);
            }), i[0] === parseInt(r) && {
                keys: n,
                data: a
            };
        };
    },
    50: function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "a", function() {
            return i;
        });
        var r = n(37), a = Object(r.atom)(null), i = Object(r.atom)({});
    },
    51: function(e, t, n) {
        n.d(t, "h", function() {
            return r;
        }), n.d(t, "i", function() {
            return a;
        }), n.d(t, "d", function() {
            return i;
        }), n.d(t, "f", function() {
            return c;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "b", function() {
            return s;
        }), n.d(t, "g", function() {
            return u;
        }), n.d(t, "e", function() {
            return f;
        }), n.d(t, "a", function() {
            return d;
        });
        var r = {
            write: [ 162, 178 ]
        }, a = {
            write: [ 161, 177 ],
            payload: [],
            shouldBe: [ 177, 161 ]
        }, i = {
            write: [ 163, 179 ],
            shouldBe: []
        }, c = {
            write: [ 160, 176 ],
            shouldBe: [ 176, 160 ]
        }, o = {
            write: [ 172, 172, 0, 4 ],
            payload: [],
            shouldBe: [ 202, 202 ]
        }, s = {
            write: [ 171, 171 ],
            payload: [],
            shouldBe: [ 186, 186 ]
        }, u = {
            write: [ 188, 188 ],
            shouldBe: [ 203, 203 ]
        }, f = {
            write: [ 221, 170 ],
            payload: [],
            shouldBe: [ 170, 221 ]
        }, d = {
            write: [ 204, 221 ],
            shouldBe: [ 221, 204 ]
        };
    },
    57: function(e, t, n) {
        n.d(t, "a", function() {
            return T;
        }), n(404);
        var r = n(171), a = (n(106), n(70)), i = (n(56), n(25)), c = (n(52), n(22)), o = n(4), s = n(6), u = n(9), f = n(13), d = n(1), l = n(2), h = n.n(l), v = n(61), b = n.n(v), p = n(62), j = n.n(p), O = n(5), m = n(37), g = n(50), w = n(20), y = n.n(w), x = Object(m.atom)(!1), k = Object(m.atom)(!1);
        function U() {
            var e = Object(m.useAtom)(x), t = Object(f.a)(e, 2), n = t[0], r = t[1], a = Object(m.useAtom)(k), i = Object(f.a)(a, 2), c = i[0], o = i[1], s = function() {
                h.a.getSystemInfo().then(function(e) {
                    var t = e.locationEnabled, n = e.locationAuthorized, a = e.bluetoothEnabled;
                    console.log("locationEnabled", t), console.log("locationAuthorized", n), r(!!t && !!n), 
                    t || h.a.showToast({
                        icon: "none",
                        title: "请在系统中开启位置信息，并且允许微信使用位置信息功能。"
                    }), h.a.getSetting().then(function(e) {
                        var t = e.authSetting;
                        o(!!t["scope.bluetooth"] && !!a);
                    });
                });
            };
            return Object(O.useEffect)(function() {
                s();
            }, []), {
                refresh: s,
                locationGranted: n,
                bluetoothGranted: c
            };
        }
        var V = n(34), C = n(7), P = n(124), I = n(47), B = n(33), E = function(e, t) {
            e = e.split("."), t = t.split(".");
            for (var n = Math.max(e.length, t.length); e.length < n; ) e.push("0");
            for (;t.length < n; ) t.push("0");
            for (var r = 0; r < n; r++) {
                var a = parseInt(e[r]), i = parseInt(t[r]);
                if (a > i) return 1;
                if (a < i) return -1;
            }
            return 0;
        }, L = n(24), M = n(0);
        function T(e) {
            var t = e.autoDisconnect, n = void 0 === t || t, r = e.commands, l = void 0 === r ? [] : r, v = e.showProgress, p = void 0 !== v && v, x = e.actionTitle, k = void 0 === x ? "绑定激活" : x, T = e.children, D = e.onDeviceConnected, A = e.onWriteDone, S = e.crc16, N = void 0 === S ? "" : S, q = e.rawFileArrayBuffer, R = Object(O.useState)(!1), z = Object(f.a)(R, 2), F = z[0], _ = z[1], Q = Object(O.useState)(0), W = Object(f.a)(Q, 2), H = W[0], K = W[1], $ = Object(O.useState)(!0), X = Object(f.a)($, 2), Y = X[0], Z = X[1], ee = Object(m.useAtomValue)(g.b), te = Object(O.useState)(!1), ne = Object(f.a)(te, 2), re = ne[0], ae = ne[1];
            Object(O.useEffect)(function() {
                null != ee && ee.id || y.a.toUser({
                    type: w.NavigateType.switchTab
                });
            }, [ ee ]);
            var ie = U(), ce = ie.refresh, oe = ie.locationGranted, se = ie.bluetoothGranted, ue = Object(P.b)(), fe = ue.start, de = ue.stop, le = oe && se;
            Object(O.useEffect)(function() {
                le && (h.a.getLocation({
                    type: "wgs84"
                }), he());
            }, [ le ]);
            var he = function() {
                var e = Object(u.a)(Object(o.a)().mark(function e() {
                    return Object(o.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, V.a.init().catch(function(e) {
                                throw L.c.error("Amiibo init failed", e), new Error("初始化设备错误");
                            });

                          case 2:
                            ae(!0), console.log(V.a.deviceInfo), V.a.deviceInfo && D(Object(s.a)({
                                name: C.a.device.name
                            }, V.a.deviceInfo));

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }();
            Object(O.useEffect)(function() {
                if (re) if (_(!0), 0 !== l.length) {
                    if ("amiibolink" === C.a.device.name) pe(); else if ("omllbolink" === C.a.device.name || "omllbomini" === C.a.device.name) if (4 === (null == N ? void 0 : N.length)) {
                        var e;
                        if (E(null === (e = V.a.deviceInfo) || void 0 === e ? void 0 : e.firmwareVersion, "0.0.4") < 0) return h.a.showModal({
                            title: "固件升级",
                            content: "当前固件版本过低，请升级再写入",
                            showCancel: !1,
                            success: function(e) {
                                e.confirm && y.a.toFirmware({
                                    type: w.NavigateType.navigateTo
                                }).then();
                            }
                        }), _(!1), K(0), void Z(!1);
                        be();
                    } else 8 === (null == N ? void 0 : N.length) && ve();
                } else setTimeout(function() {
                    _(!1), Z(!1);
                }, 100);
            }, [ re ]);
            var ve = function() {
                var e = Object(u.a)(Object(o.a)().mark(function e() {
                    var t;
                    return Object(o.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = Object(B.a)(q), e.next = 3, Object(I.j)(t.length.toString(16).padStart(8, "0")).then(function() {
                                Object(I.h)(t, function(e) {
                                    K(e);
                                }).then(function() {
                                    Object(I.i)(t.length.toString(16).padStart(8, "0"), N).then(function() {
                                        _(!1), K(0), Z(!1), h.a.showToast({
                                            title: "升级成功",
                                            icon: "none"
                                        }), null == A || A();
                                    }).catch(function(e) {
                                        _(!1), K(0), Z(!1), console.error(e), h.a.showToast({
                                            title: "升级失败".concat(e),
                                            icon: "none"
                                        }), null == A || A();
                                    });
                                }).catch(function(e) {
                                    throw _(!1), K(0), Z(!1), L.c.error("Amiibo charge firmwaresUpgrade failed: ", e), 
                                    console.error(e), h.a.showToast({
                                        title: "写入时发生错误".concat(e),
                                        icon: "none"
                                    }), null == A || A(), new Error("写入时发生错误");
                                });
                            }).catch(function(e) {
                                throw _(!1), K(0), Z(!1), L.c.error("Amiibo charge upgrade_start failed: ", e), 
                                h.a.showToast({
                                    title: "写入时发生错误".concat(e),
                                    icon: "none"
                                }), null == A || A(), new Error("写入时发生错误");
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
            }(), be = function() {
                var e = Object(u.a)(Object(o.a)().mark(function e() {
                    return Object(o.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return null == fe || fe(), e.next = 3, Object(I.f)(Object(B.a)(q), function(e) {
                                K(e);
                            }).then(function() {
                                Object(I.g)(N, q.byteLength.toString(16).padStart(4, "0")).then(function() {
                                    null == de || de(), _(!1), K(0), Z(!1), null == A || A(), setTimeout(function() {
                                        h.a.showToast({
                                            icon: "none",
                                            title: "写入成功"
                                        });
                                    }, 500);
                                }).catch(function(e) {
                                    L.c.error("Amiibo props_send_done failed: ", e), h.a.showToast({
                                        title: "写入时发生错误 ".concat(e),
                                        icon: "none"
                                    });
                                });
                            }).catch(function(e) {
                                throw console.error(e), L.c.error("Amiibo chargeWrite failed: ", e), h.a.showToast({
                                    title: "写入时发生错误",
                                    icon: "none"
                                }), new Error("写入时发生错误");
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
            }(), pe = function() {
                var e = Object(u.a)(Object(o.a)().mark(function e() {
                    return Object(o.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return null == fe || fe(), e.next = 3, V.a.writeTask({
                                asList: l,
                                onProgress: function(e) {
                                    K(e);
                                },
                                shouldDisconnect: n
                            }).catch(function(e) {
                                throw console.error(e), L.c.error("Amiibo handleWrite failed: ", e), h.a.showToast({
                                    title: "写入时发生错误",
                                    icon: "none"
                                }), new Error("写入时发生错误");
                            });

                          case 3:
                            null == de || de(), _(!1), K(0), Z(!1), null == A || A(), setTimeout(function() {
                                h.a.showToast({
                                    icon: "none",
                                    title: "写入成功"
                                });
                            }, 500);

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }();
            return Object(M.jsxs)(M.Fragment, {
                children: [ T, Object(M.jsx)(a.a, {
                    id: "device-connection-dialog",
                    title: k,
                    showCancelButton: !1,
                    showConfirmButton: !1,
                    closeOnClickOverlay: !1,
                    show: Y,
                    children: Object(M.jsx)(M.Fragment, {
                        children: function(e, t, n) {
                            return oe ? se ? Object(M.jsxs)(d.g, {
                                children: [ re ? Object(M.jsxs)(d.g, {
                                    className: "text-center",
                                    children: [ Object(M.jsx)(c.a, {
                                        className: "w-168",
                                        src: "omllbolink" === (null === C.a || void 0 === C.a || null === (e = C.a.device) || void 0 === e ? void 0 : e.name) ? j.a : b.a,
                                        fit: "cover"
                                    }), "omllbolink" === (null === C.a || void 0 === C.a || null === (t = C.a.device) || void 0 === t ? void 0 : t.name) && Object(M.jsxs)(d.g, {
                                        className: "key-power text-sm text-success text-center",
                                        children: [ Object(M.jsx)(d.g, {
                                            className: "power-icon"
                                        }), "电量", null === (n = V.a.deviceInfo) || void 0 === n ? void 0 : n.electricity, "%" ]
                                    }) ]
                                }) : Object(M.jsx)(M.Fragment, {
                                    children: Object(M.jsxs)(d.g, {
                                        className: "waiting-box",
                                        children: [ Object(M.jsx)(d.g, {
                                            className: "back-circle"
                                        }), Object(M.jsx)(d.g, {
                                            className: "button"
                                        }), Object(M.jsx)(d.g, {
                                            className: "front-circle"
                                        }), Object(M.jsx)(d.g, {
                                            className: "svg-bluetooth"
                                        }) ]
                                    })
                                }), F ? Object(M.jsx)(d.g, {
                                    className: "p-3",
                                    children: Object(M.jsx)(i.a, {
                                        type: "default",
                                        disabled: !0,
                                        className: "btn btn-light",
                                        block: !0,
                                        children: p ? "已写入 ".concat(H, "%，请稍等...") : "正在处理"
                                    })
                                }) : Object(M.jsx)(d.g, {
                                    className: "p-3",
                                    children: Object(M.jsx)(i.a, {
                                        type: "default",
                                        disabled: !0,
                                        className: "btn btn-light",
                                        block: !0,
                                        children: re ? "准备就绪" : "请按下按钮，等待蓝牙接入..."
                                    })
                                }), Object(M.jsxs)(d.g, {
                                    className: "search-tips text-xs text-muted px-4 pb-4",
                                    children: [ Object(M.jsx)(d.g, {
                                        className: "text",
                                        children: "1、请确保手机已打开“蓝牙”和“位置信息”或“定位服务”；"
                                    }), Object(M.jsx)(d.g, {
                                        className: "text",
                                        children: "2、请确保微信取得了蓝牙和定位权限；"
                                    }), Object(M.jsx)(d.g, {
                                        className: "text",
                                        children: "3、请确保设备已经开机、电量正常（无电请更换电池或连接USB充电）；"
                                    }) ]
                                }) ]
                            }) : Object(M.jsx)(J, {
                                onAuthorize: ce
                            }) : Object(M.jsx)(G, {
                                onAuthorize: ce
                            });
                        }()
                    })
                }) ]
            });
        }
        var G = function(e) {
            var t = e.onAuthorize;
            return Object(M.jsx)(r.a, {
                image: "network",
                description: "请手动授予位置使用权限",
                children: Object(M.jsx)(i.a, {
                    onClick: function() {
                        h.a.authorize({
                            scope: "scope.userLocation"
                        }).then(function() {
                            return t();
                        }).catch(function(e) {
                            h.a.showToast({
                                icon: "none",
                                title: "位置授权失败，请手动授予位置使用权限"
                            }), console.log(e);
                        });
                    },
                    round: !0,
                    type: "primary",
                    className: "btn btn-primary btn-w-lg",
                    children: "立即授权"
                })
            });
        }, J = function(e) {
            var t = e.onAuthorize;
            return Object(M.jsx)(r.a, {
                image: "search",
                description: "请打开蓝牙并授予蓝牙使用权限",
                children: Object(M.jsx)(i.a, {
                    onClick: function() {
                        h.a.authorize({
                            scope: "scope.bluetooth"
                        }).then(function() {
                            return t();
                        }).catch(function(e) {
                            h.a.showToast({
                                icon: "none",
                                title: "蓝牙授权失败，请手动授予蓝牙使用权限"
                            }), console.log(e);
                        });
                    },
                    round: !0,
                    type: "primary",
                    className: "btn btn-primary btn-w-lg",
                    children: "立即授权"
                })
            });
        };
    },
    61: function(e, t, n) {
        e.exports = n.p + "assets/images/key.png";
    },
    62: function(e, t, n) {
        e.exports = n.p + "assets/images/key2.png";
    },
    7: function(e, t, n) {
        n.d(t, "a", function() {
            return l;
        });
        var r = n(4), a = n(9), i = n(15), c = n(16), o = n(11), s = n(2), u = n.n(s), f = n(24), d = function(e) {
            return new Promise(function(t) {
                return setTimeout(t, e);
            });
        }, l = new (function() {
            function e() {
                var t = this;
                Object(i.a)(this, e), Object(o.a)(this, "device", void 0), Object(o.a)(this, "adapterReady", !1), 
                Object(o.a)(this, "notifyUuid", ""), Object(o.a)(this, "writeUuid", ""), Object(o.a)(this, "serviceUuid", ""), 
                Object(o.a)(this, "initBleDeviceServices", Object(a.a)(Object(r.a)().mark(function e() {
                    return Object(r.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.abrupt("return", new Promise(function(e, n) {
                                t.device && u.a.getBLEDeviceServices({
                                    deviceId: t.device.deviceId
                                }).then(function() {
                                    var i = Object(a.a)(Object(r.a)().mark(function i(c) {
                                        return Object(r.a)().wrap(function(i) {
                                            for (;;) switch (i.prev = i.next) {
                                              case 0:
                                                if (f.c.info("BLE getBLEDeviceServices:", c), t.serviceUuid = c.services[0].uuid, 
                                                0 !== c.errCode) {
                                                    i.next = 6;
                                                    break;
                                                }
                                                u.a.getBLEDeviceCharacteristics({
                                                    deviceId: t.device.deviceId,
                                                    serviceId: c.services[0].uuid,
                                                    success: function() {
                                                        var i = Object(a.a)(Object(r.a)().mark(function a(i) {
                                                            return Object(r.a)().wrap(function(r) {
                                                                for (;;) switch (r.prev = r.next) {
                                                                  case 0:
                                                                    if (0 !== i.errCode) {
                                                                        r.next = 5;
                                                                        break;
                                                                    }
                                                                    i.characteristics.forEach(function(e) {
                                                                        e.properties.write && (t.writeUuid = e.uuid), e.properties.notify && (t.notifyUuid = e.uuid);
                                                                    }), e(i), r.next = 10;
                                                                    break;

                                                                  case 5:
                                                                    return r.next = 7, t.disconnect();

                                                                  case 7:
                                                                    f.c.error("BLE getBLEDeviceCharacteristics failed:", i), u.a.showToast({
                                                                        title: "设备状态异常",
                                                                        icon: "none",
                                                                        duration: 2e3
                                                                    }), n(i);

                                                                  case 10:
                                                                    console.log("getBLEDeviceCharacteristics", i);

                                                                  case 11:
                                                                  case "end":
                                                                    return r.stop();
                                                                }
                                                            }, a);
                                                        }));
                                                        return function(e) {
                                                            return i.apply(this, arguments);
                                                        };
                                                    }(),
                                                    fail: function() {
                                                        var e = Object(a.a)(Object(r.a)().mark(function e(n) {
                                                            return Object(r.a)().wrap(function(e) {
                                                                for (;;) switch (e.prev = e.next) {
                                                                  case 0:
                                                                    return e.next = 2, t.disconnect();

                                                                  case 2:
                                                                    f.c.error("BLE getBLEDeviceCharacteristics failed:", n.errMsg);

                                                                  case 3:
                                                                  case "end":
                                                                    return e.stop();
                                                                }
                                                            }, e);
                                                        }));
                                                        return function(t) {
                                                            return e.apply(this, arguments);
                                                        };
                                                    }()
                                                }), i.next = 11;
                                                break;

                                              case 6:
                                                return i.next = 8, t.disconnect();

                                              case 8:
                                                u.a.showToast({
                                                    title: "设备状态异常",
                                                    icon: "none",
                                                    duration: 2e3
                                                }), f.c.error("BLE getBLEDeviceServices failed:", c), n("设备状态异常");

                                              case 11:
                                              case "end":
                                                return i.stop();
                                            }
                                        }, i);
                                    }));
                                    return function(e) {
                                        return i.apply(this, arguments);
                                    };
                                }()).catch(function() {
                                    var e = Object(a.a)(Object(r.a)().mark(function e(a) {
                                        return Object(r.a)().wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                return e.next = 2, t.disconnect();

                                              case 2:
                                                f.c.warn("Amiibo initBleDeviceServices failed", a), n(a);

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
                }))), Object(o.a)(this, "getMaxBLEMTU", function() {
                    var e = Object(a.a)(Object(r.a)().mark(function e(n) {
                        var a, i, c, o = arguments;
                        return Object(r.a)().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (i = o.length > 1 && void 0 !== o[1] ? o[1] : "", c = null === (a = t.device) || void 0 === a ? void 0 : a.deviceId) {
                                    e.next = 4;
                                    break;
                                }
                                return e.abrupt("return");

                              case 4:
                                return e.prev = 4, e.next = 7, u.a.setBLEMTU({
                                    deviceId: c,
                                    mtu: n
                                });

                              case 7:
                                if ("error" !== i) {
                                    e.next = 11;
                                    break;
                                }
                                return e.abrupt("return", n);

                              case 11:
                                return e.abrupt("return", t.getMaxBLEMTU(n + 20, "success"));

                              case 12:
                                e.next = 23;
                                break;

                              case 14:
                                if (e.prev = 14, e.t0 = e.catch(4), "success" !== i) {
                                    e.next = 20;
                                    break;
                                }
                                return e.abrupt("return", n - 20);

                              case 20:
                                if (!(n <= 20)) {
                                    e.next = 22;
                                    break;
                                }
                                return e.abrupt("return", 20);

                              case 22:
                                return e.abrupt("return", t.getMaxBLEMTU(n - 20, "error"));

                              case 23:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 4, 14 ] ]);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }());
            }
            return Object(c.a)(e, [ {
                key: "initAdapter",
                value: function() {
                    var e = this;
                    return u.a.openBluetoothAdapter().then(function() {
                        e.adapterReady = !0;
                    }).catch(function(e) {
                        u.a.showToast({
                            icon: "none",
                            title: "初始化蓝牙失败，请稍后再试或检查设备是否已开启蓝牙。"
                        }), f.c.warn("BLE init adapter failed:", e);
                    });
                }
            }, {
                key: "closeAdapter",
                value: function() {
                    u.a.closeBluetoothAdapter();
                }
            }, {
                key: "init",
                value: function() {
                    var e = Object(a.a)(Object(r.a)().mark(function e() {
                        var t = this;
                        return Object(r.a)().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return u.a.onBluetoothAdapterStateChange(function() {
                                    var e = Object(a.a)(Object(r.a)().mark(function e(n) {
                                        return Object(r.a)().wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                t.adapterReady = n.available, n.available || t.initAdapter();

                                              case 2:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }()), u.a.onBLEConnectionStateChange(function() {
                                    var e = Object(a.a)(Object(r.a)().mark(function e(n) {
                                        var a, i, c;
                                        return Object(r.a)().wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                if (i = n.connected, c = n.deviceId, (null === (a = t.device) || void 0 === a ? void 0 : a.deviceId) !== c || i) {
                                                    e.next = 4;
                                                    break;
                                                }
                                                return e.next = 4, t.disconnect();

                                              case 4:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }()), e.next = 4, this.initAdapter();

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }()
            }, {
                key: "discoverDeviceAndConnect",
                value: function() {
                    var e = Object(a.a)(Object(r.a)().mark(function e(t) {
                        var n = this;
                        return Object(r.a)().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.abrupt("return", new Promise(function(e, i) {
                                    u.a.startBluetoothDevicesDiscovery({
                                        allowDuplicatesKey: !0,
                                        interval: 200,
                                        success: function() {
                                            var c = Object(a.a)(Object(r.a)().mark(function c(o) {
                                                return Object(r.a)().wrap(function(c) {
                                                    for (;;) switch (c.prev = c.next) {
                                                      case 0:
                                                        if (0 !== o.errCode) {
                                                            c.next = 4;
                                                            break;
                                                        }
                                                        u.a.onBluetoothDeviceFound(function() {
                                                            u.a.getBluetoothDevices().then(function() {
                                                                var i = Object(a.a)(Object(r.a)().mark(function a(i) {
                                                                    var c, o, s;
                                                                    return Object(r.a)().wrap(function(r) {
                                                                        for (;;) switch (r.prev = r.next) {
                                                                          case 0:
                                                                            if (c = i.devices, !((o = c.filter(function(e) {
                                                                                return t.includes(e.localName);
                                                                            })).length > 0)) {
                                                                                r.next = 9;
                                                                                break;
                                                                            }
                                                                            return r.next = 5, u.a.stopBluetoothDevicesDiscovery({});

                                                                          case 5:
                                                                            return s = null == o ? void 0 : o[0], r.next = 8, n.connect(s);

                                                                          case 8:
                                                                            e(o);

                                                                          case 9:
                                                                          case "end":
                                                                            return r.stop();
                                                                        }
                                                                    }, a);
                                                                }));
                                                                return function(e) {
                                                                    return i.apply(this, arguments);
                                                                };
                                                            }()).catch(function(e) {
                                                                f.c.error("BLE getBluetoothDevices failed:", e), u.a.showToast({
                                                                    title: "搜索蓝牙设备失败，请检查设备权限后重启小程序",
                                                                    icon: "none"
                                                                }), i(e);
                                                            });
                                                        }), c.next = 9;
                                                        break;

                                                      case 4:
                                                        return f.c.error("BLE startBluetoothDevicesDiscovery failed:", o), u.a.showToast({
                                                            title: "搜索蓝牙设备失败，请检查设备权限后重启小程序",
                                                            icon: "none"
                                                        }), c.next = 8, u.a.stopBluetoothDevicesDiscovery();

                                                      case 8:
                                                        i(o);

                                                      case 9:
                                                      case "end":
                                                        return c.stop();
                                                    }
                                                }, c);
                                            }));
                                            return function(e) {
                                                return c.apply(this, arguments);
                                            };
                                        }()
                                    });
                                }));

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }()
            }, {
                key: "connect",
                value: function(e) {
                    var t = this;
                    if (!this.device) return u.a.createBLEConnection({
                        deviceId: e.deviceId,
                        timeout: 5e3
                    }).then(Object(a.a)(Object(r.a)().mark(function n() {
                        return Object(r.a)().wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t.device = e, n.next = 3, t.initBleDeviceServices();

                              case 3:
                                return n.next = 5, u.a.notifyBLECharacteristicValueChange({
                                    deviceId: t.device.deviceId,
                                    serviceId: t.serviceUuid,
                                    characteristicId: t.notifyUuid,
                                    state: !0
                                }).catch(function(e) {
                                    f.c.error("BLE notifyBLECharacteristicValueChange failed:", e);
                                });

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))).catch(function() {
                        var n = Object(a.a)(Object(r.a)().mark(function n(i) {
                            var c;
                            return Object(r.a)().wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, null === (c = t.connect(e)) || void 0 === c ? void 0 : c.catch(function() {
                                        var n = Object(a.a)(Object(r.a)().mark(function n(a) {
                                            return Object(r.a)().wrap(function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                  case 0:
                                                    if (console.log(a), 1509007 != a.errno) {
                                                        n.next = 4;
                                                        break;
                                                    }
                                                    return t.device = e, n.abrupt("return");

                                                  case 4:
                                                    return f.c.error("BLE createBLEConnection failed:", a), u.a.showToast({
                                                        icon: "none",
                                                        title: "连接超时，请退出页面重试"
                                                    }), n.next = 8, t.disconnect();

                                                  case 8:
                                                  case "end":
                                                    return n.stop();
                                                }
                                            }, n);
                                        }));
                                        return function(e) {
                                            return n.apply(this, arguments);
                                        };
                                    }());

                                  case 2:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }));
                        return function(e) {
                            return n.apply(this, arguments);
                        };
                    }());
                }
            }, {
                key: "disconnect",
                value: function() {
                    var e = Object(a.a)(Object(r.a)().mark(function e() {
                        var t, n, a;
                        return Object(r.a)().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, d(1e3);

                              case 2:
                                this.device && u.a.closeBLEConnection({
                                    deviceId: null === (t = this.device) || void 0 === t ? void 0 : t.deviceId
                                }), n = u.a.getSystemInfoSync(), a = n.platform, this.device = void 0, this.notifyUuid = "", 
                                this.writeUuid = "", this.serviceUuid = "", u.a.offBLECharacteristicValueChange(void 0), 
                                u.a.offBLEConnectionStateChange(void 0), u.a.offBluetoothDeviceFound(void 0), u.a.offBLEMTUChange(void 0), 
                                "android" === a && (u.a.offBluetoothAdapterStateChange(void 0), this.closeAdapter());

                              case 13:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }()
            } ]), e;
        }())();
    }
} ]);