(function (t) {
    function e(e) {
        for (var s, i, o = e[0], l = e[1], c = e[2], d = 0, p = []; d < o.length; d++) i = o[d], Object.prototype.hasOwnProperty.call(r, i) && r[i] && p.push(r[i][0]), r[i] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        u && u(e);
        while (p.length) p.shift()();
        return n.push.apply(n, c || []), a()
    }

    function a() {
        for (var t, e = 0; e < n.length; e++) {
            for (var a = n[e], s = !0, o = 1; o < a.length; o++) {
                var l = a[o];
                0 !== r[l] && (s = !1)
            }
            s && (n.splice(e--, 1), t = i(i.s = a[0]))
        }
        return t
    }

    var s = {}, r = {app: 0}, n = [];

    function i(e) {
        if (s[e]) return s[e].exports;
        var a = s[e] = {i: e, l: !1, exports: {}};
        return t[e].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }

    i.m = t, i.c = s, i.d = function (t, e, a) {
        i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: a})
    }, i.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var s in t) i.d(a, s, function (e) {
            return t[e]
        }.bind(null, s));
        return a
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/static/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [], l = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var c = 0; c < o.length; c++) e(o[c]);
    var u = l;
    n.push([0, "chunk-vendors"]), a()
})({
    0: function (t, e, a) {
        t.exports = a("56d7")
    }, "034f": function (t, e, a) {
        "use strict";
        var s = a("85ec"), r = a.n(s);
        r.a
    }, "0f4a": function (t, e, a) {
        t.exports = a.p + "img/super-txt.df2733dc.png"
    }, 1784: function (t, e, a) {
        t.exports = a.p + "img/nope.f6495931.png"
    }, "1d45": function (t, e, a) {
        t.exports = a.p + "img/x.7ce208e6.svg"
    }, "2d23": function (t, e, a) {
    }, "31bb": function (t, e, a) {
        t.exports = a.p + "img/exit.4fd2cd61.svg"
    }, "340d": function (t, e, a) {
        t.exports = a.p + "img/rewind.d3f6ac8f.png"
    }, "408e": function (t, e, a) {
        t.exports = a.p + "img/rewind-txt.d88df357.png"
    }, "410e": function (t, e, a) {
        t.exports = a.p + "img/menu-a.b339b316.svg"
    }, "447c": function (t, e, a) {
        "use strict";
        var s = a("2d23"), r = a.n(s);
        r.a
    }, "4ffd": function (t, e, a) {
        t.exports = a.p + "img/logo.b9825f81.png"
    }, "522a": function (t, e, a) {
        "use strict";
        var s = a("fce8"), r = a.n(s);
        r.a
    }, 5234: function (t, e, a) {
        t.exports = a.p + "img/friends.720bd696.svg"
    }, 5254: function (t, e, a) {
        "use strict";
        var s = a("d306"), r = a.n(s);
        r.a
    }, "52ea": function (t, e, a) {
        t.exports = a.p + "img/swiper-a.8992db57.png"
    }, 5415: function (t, e, a) {
        t.exports = a.p + "img/user.657d237a.svg"
    }, "56d7": function (t, e, a) {
        "use strict";
        a.r(e);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var s = a("2b0e"), r = (a("ab8b"), a("3e48"), function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {attrs: {id: "app"}}, [t.show_nav ? a("Navbar") : t._e(), a("router-view", {attrs: {self: t.self}})], 1)
            }), n = [], i = function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "nav-holder"}, [s("nav", {staticClass: "navbar navbar-light bg-light fixed-top"}, [s("router-link", {attrs: {to: "/user/show"}}, ["/user/show" === this.$route.path ? s("img", {
                    staticClass: "nav-icon navbar-brand",
                    attrs: {src: a("6270")}
                }) : s("img", {
                    staticClass: "nav-icon navbar-brand",
                    attrs: {src: a("5415")}
                })]), s("router-link", {attrs: {to: "/swiper"}}, ["/swiper" === this.$route.path ? s("img", {
                    staticClass: "nav-icon navbar-brand",
                    attrs: {src: a("52ea")}
                }) : s("img", {
                    staticClass: "nav-icon navbar-brand",
                    attrs: {src: a("dbdc")}
                })]), s("router-link", {attrs: {to: "/menu"}}, ["/menu" === this.$route.path ? s("img", {
                    staticClass: "nav-icon navbar-brand",
                    attrs: {src: a("410e")}
                }) : s("img", {staticClass: "nav-icon navbar-brand", attrs: {src: a("67f9")}})])], 1)])
            }, o = [], l = {name: "Navbar"}, c = l, u = (a("522a"), a("2877")),
            d = Object(u["a"])(c, i, o, !1, null, "aedfca7e", null), p = d.exports, f = {
                name: "App", components: {Navbar: p}, computed: {
                    self: function () {
                        return this.$store.state.self
                    }, show_nav: function () {
                        return "/" !== this.$route.path && "/login" !== this.$route.path
                    }
                }
            }, _ = f, m = (a("034f"), Object(u["a"])(_, r, n, !1, null, null, null)), v = m.exports, h = a("2f62"),
            g = a("d4ec"), b = a("bee2"), C = function () {
                function t(e) {
                    Object(g["a"])(this, t), this.id = e.id, this.nickname = e.nickname, this.phonenum = e.phonenum, this.gender = e.gender, this.birthday = e.birthday, this.location = e.location, this.avatar = e.avatar, this.profile = new k({})
                }

                return Object(b["a"])(t, [{
                    key: "is_self", value: function (t) {
                        return this.id === t.id
                    }
                }, {
                    key: "set_profile", value: function (t) {
                        if (!(t instanceof k)) throw"Type Error";
                        this.profile = t
                    }
                }, {
                    key: "to_dict", value: function () {
                        var t = {};
                        for (var e in this) t[e] = this[e];
                        return t
                    }
                }, {
                    key: "copy", value: function () {
                        var e = new t(this.to_dict()), a = new k(this.profile.to_dict());
                        return e.set_profile(a), e
                    }
                }]), t
            }(), k = function () {
                function t(e) {
                    Object(g["a"])(this, t), this.dating_gender = e.dating_gender, this.dating_location = e.dating_location, this.min_distance = e.min_distance, this.max_distance = e.max_distance, this.min_dating_age = e.min_dating_age, this.max_dating_age = e.max_dating_age, this.vibration = e.vibration, this.only_matched = e.only_matched, this.auto_play = e.auto_play
                }

                return Object(b["a"])(t, [{
                    key: "to_dict", value: function () {
                        var t = {};
                        for (var e in this) t[e] = this[e];
                        return t
                    }
                }]), t
            }();
        s["a"].use(h["a"]);
        var w = new h["a"].Store({
                state: {self: void 0, queue: []}, mutations: {
                    set_self: function (t, e) {
                        if (!(e instanceof C)) throw"Type Error";
                        t.self = e
                    }, reset_self: function (t) {
                        t.self = void 0, t.queue = []
                    }, set_profile: function (t, e) {
                        t.self.set_profile(e)
                    }
                }
            }), y = w, x = (a("99af"), a("45fc"), a("8c4f")), O = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {attrs: {id: "login"}}, [t._m(0), a("div", {staticClass: "container-fluid"}, [a("fieldset", {staticClass: "form-group"}, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.phonenum,
                        expression: "phonenum"
                    }],
                    staticClass: "form-control col-10 offset-1",
                    attrs: {placeholder: "请输入手机号"},
                    domProps: {value: t.phonenum},
                    on: {
                        input: function (e) {
                            e.target.composing || (t.phonenum = e.target.value)
                        }
                    }
                })]), a("fieldset", {staticClass: "form-group"}, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.vcode,
                        expression: "vcode"
                    }, {name: "show", rawName: "v-show", value: t.seen, expression: "seen"}],
                    staticClass: "form-control col-10 offset-1",
                    attrs: {placeholder: "请输入验证码"},
                    domProps: {value: t.vcode},
                    on: {
                        input: function (e) {
                            e.target.composing || (t.vcode = e.target.value)
                        }
                    }
                })]), a("button", {
                    staticClass: "btn col-10 btn-primary", on: {
                        click: function (e) {
                            return t.button_clicked()
                        }
                    }
                }, [t._v(t._s(t.btn_text))])])])
            }, q = [function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "logo"}, [s("img", {
                    attrs: {
                        width: "200px",
                        src: a("4ffd")
                    }
                }), s("h1", [t._v("aboutTa")])])
            }], E = a("b1d0"), $ = {
                name: "Login", props: ["self"], data: function () {
                    return {phonenum: "", vcode: "", seen: !1, btn_text: "发送验证码"}
                }, methods: {
                    button_clicked: function () {
                        !1 === this.seen ? this.get_vcode() : this.submit_vcode()
                    }, get_vcode: function () {
                        E["a"].get("/api/user/vcode/fetch", {params: {phonenum: this.phonenum}}).then((function (t) {
                            0 === t.data.code && alert("消息已发送，请查看手机短信")
                        })), this.seen = !0, this.btn_text = "登陆"
                    }, submit_vcode: function () {
                        var t = this;
                        E["a"].post("/api/user/vcode/submit", {
                            phonenum: this.phonenum,
                            vcode: this.vcode
                        }).then((function (e) {
                            if (0 === e.data.code) {
                                var a = new C(e.data.data);
                                t.$store.commit("set_self", a), t.$router.push("/user/show")
                            }
                        }))
                    }
                }
            }, P = $, j = (a("f4e9"), Object(u["a"])(P, O, q, !1, null, "c69a6bbc", null)), A = j.exports, M = function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "list-group"}, [s("router-link", {
                    staticClass: "list-group-item list-group-item-action list-item",
                    attrs: {to: "/swiper"}
                }, [s("img", {
                    staticClass: "icon navbar-brand",
                    attrs: {src: a("790a")}
                }), s("span", {staticClass: "item-text"}, [t._v("滑一滑")])]), s("router-link", {
                    staticClass: "list-group-item list-group-item-action list-item",
                    attrs: {to: "/fans"}
                }, [s("img", {
                    staticClass: "icon navbar-brand",
                    attrs: {src: a("5ec4")}
                }), s("span", {staticClass: "item-text"}, [t._v("赞过我的人")])]), s("router-link", {
                    staticClass: "list-group-item list-group-item-action list-item",
                    attrs: {to: "/hot/rank"}
                }, [s("img", {
                    staticClass: "icon navbar-brand",
                    attrs: {src: a("bdcd")}
                }), s("span", {staticClass: "item-text"}, [t._v("热度排行")])]), s("router-link", {
                    staticClass: "list-group-item list-group-item-action list-item",
                    attrs: {to: "/friends"}
                }, [s("img", {
                    staticClass: "icon navbar-brand",
                    attrs: {src: a("5234")}
                }), s("span", {staticClass: "item-text"}, [t._v("我的好友")])]), s("router-link", {
                    staticClass: "list-group-item list-group-item-action list-item",
                    attrs: {to: "/user/show"}
                }, [s("img", {
                    staticClass: "icon navbar-brand",
                    attrs: {src: a("5415")}
                }), s("span", {staticClass: "item-text"}, [t._v("用户中心")])]), s("router-link", {
                    staticClass: "list-group-item list-group-item-action list-item",
                    attrs: {to: "/login"},
                    nativeOn: {
                        click: function (e) {
                            return t.exit()
                        }
                    }
                }, [s("img", {
                    staticClass: "icon navbar-brand",
                    attrs: {src: a("31bb")}
                }), s("span", {staticClass: "item-text"}, [t._v("退出")])])], 1)
            }, D = [], T = {
                name: "Menu", methods: {
                    exit: function () {
                        console.log("退出！重置 self 对象"), this.$store.commit("reset_self")
                    }
                }
            }, N = T, U = Object(u["a"])(N, M, D, !1, null, null, null), R = U.exports, L = function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "container-fluid user-box"}, [s("router-link", {attrs: {to: "/upload/avatar"}}, [t.self.avatar ? s("img", {
                    staticClass: "img-thumbnail avatar",
                    attrs: {src: t.self.avatar}
                }) : s("img", {
                    staticClass: "img-thumbnail avatar",
                    attrs: {src: a("dc3a")}
                })]), s("div", {staticClass: "info"}, [s("h5", [t._v("个人资料")]), s("table", {staticClass: "table"}, [s("tbody", [s("tr", [s("th", [t._v("昵称")]), s("td", [t._v(t._s(t.self.nickname))])]), s("tr", [s("th", [t._v("手机")]), s("td", [t._v(t._s(t.self.phonenum))])]), s("tr", [s("th", [t._v("性别")]), s("td", [t._v(t._s("male" == t.self.gender ? "男" : "女"))])]), s("tr", [s("th", [t._v("生日")]), s("td", [t._v(t._s(t.self.birthday))])]), s("tr", [s("th", [t._v("地区")]), s("td", [t._v(t._s(t.self.location))])])])])]), t.profile_btn ? s("div", [s("button", {
                    staticClass: "btn btn-success col-10 btn-txt",
                    on: {
                        click: function (e) {
                            return t.show_more()
                        }
                    }
                }, [t._v("查看更多")])]) : s("div", {staticClass: "info"}, [s("h5", [t._v("交友资料")]), s("table", {staticClass: "table"}, [s("tbody", [s("tr", [s("th", [t._v("交友性别")]), s("td", [t._v(t._s("male" == t.self.profile.dating_gender ? "小哥哥" : "小姐姐"))])]), s("tr", [s("th", [t._v("交友城市")]), s("td", [t._v(t._s(t.self.profile.dating_location))])]), s("tr", [s("th", [t._v("最大年龄")]), s("td", [t._v(t._s(t.self.profile.max_dating_age) + " 岁")])]), s("tr", [s("th", [t._v("最小年龄")]), s("td", [t._v(t._s(t.self.profile.min_dating_age) + " 岁")])]), s("tr", [s("th", [t._v("最大距离")]), s("td", [t._v(t._s(t.self.profile.max_distance) + " 公里")])]), s("tr", [s("th", [t._v("最小距离")]), s("td", [t._v(t._s(t.self.profile.min_distance) + " 公里")])]), s("tr", [s("th", [t._v("自动播放")]), s("td", [t._v(t._s(t.self.profile.auto_play ? "是" : "否"))])]), s("tr"), s("tr", [s("th", [t._v("资料保密")]), s("td", [t._v(t._s(t.self.profile.only_matched ? "是" : "否"))])]), s("tr", [s("th", [t._v("开启震动")]), s("td", [t._v(t._s(t.self.profile.vibration ? "是" : "否"))])])])])]), t.profile_btn ? t._e() : s("router-link", {
                    staticClass: "btn btn-primary col-10 btn-txt",
                    attrs: {to: "/user/update"}
                }, [t._v("修改资料")])], 1)
            }, I = [], S = {
                name: "UserShow", props: ["self"], data: function () {
                    return {profile_btn: !0}
                }, methods: {
                    show_more: function () {
                        var t = this;
                        void 0 === this.self.profile.dating_gender && (console.log("从服务器获取 profile"), E["a"].get("/api/user/profile/show").then((function (e) {
                            var a = new k(e.data.data);
                            t.self.set_profile(a)
                        }))), this.profile_btn = !1
                    }
                }
            }, B = S, K = Object(u["a"])(B, L, I, !1, null, null, null), W = K.exports, F = function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "container-fluid user-box"}, [s("form", {staticClass: "form-horizontal"}, [s("router-link", {attrs: {to: "/upload/avatar"}}, [t.user.avatar ? s("img", {
                    staticClass: "img-thumbnail avatar",
                    attrs: {src: t.user.avatar}
                }) : s("img", {
                    staticClass: "img-thumbnail avatar",
                    attrs: {src: a("dc3a")}
                })]), s("div", {staticClass: "info"}, [s("h5", [t._v("基本资料")]), s("div", {staticClass: "form-group row"}, [s("label", {staticClass: "col-sm-3 col-form-label lable"}, [t._v("昵称")]), s("div", {staticClass: "inputer"}, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.nickname,
                        expression: "user.nickname"
                    }], staticClass: "form-control", domProps: {value: t.user.nickname}, on: {
                        input: function (e) {
                            e.target.composing || t.$set(t.user, "nickname", e.target.value)
                        }
                    }
                })])]), s("fieldset", {staticClass: "form-group"}, [s("div", {staticClass: "row"}, [s("legend", {staticClass: "col-form-label col-sm pt-0 lable"}, [t._v("性别")]), s("div", {staticClass: "form-check radio-edge"}, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.gender,
                        expression: "user.gender"
                    }],
                    staticClass: "form-check-input",
                    attrs: {type: "radio", value: "male"},
                    domProps: {checked: t._q(t.user.gender, "male")},
                    on: {
                        change: function (e) {
                            return t.$set(t.user, "gender", "male")
                        }
                    }
                }), s("label", {staticClass: "form-check-label"}, [t._v("小哥哥")])]), s("div", {staticClass: "form-check"}, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.gender,
                        expression: "user.gender"
                    }],
                    staticClass: "form-check-input",
                    attrs: {type: "radio", value: "female"},
                    domProps: {checked: t._q(t.user.gender, "female")},
                    on: {
                        change: function (e) {
                            return t.$set(t.user, "gender", "female")
                        }
                    }
                }), s("label", {staticClass: "form-check-label"}, [t._v("小姐姐")])])])]), s("div", {staticClass: "form-group row"}, [s("label", {staticClass: "col-sm-3 col-form-label lable"}, [t._v("生日")]), s("div", {staticClass: "inputer"}, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.birthday,
                        expression: "user.birthday"
                    }],
                    staticClass: "form-control",
                    attrs: {type: "date", min: "1900-01-01", max: "2004-12-31"},
                    domProps: {value: t.user.birthday},
                    on: {
                        input: function (e) {
                            e.target.composing || t.$set(t.user, "birthday", e.target.value)
                        }
                    }
                })])]), s("div", {staticClass: "form-group row"}, [s("label", {staticClass: "col-sm-3 col-form-label lable"}, [t._v("地区")]), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.location,
                        expression: "user.location"
                    }], staticClass: "form-control form-control-sm inputer", on: {
                        change: function (e) {
                            var a = Array.prototype.filter.call(e.target.options, (function (t) {
                                return t.selected
                            })).map((function (t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.$set(t.user, "location", e.target.multiple ? a : a[0])
                        }
                    }
                }, t._l(t.citys, (function (e) {
                    return s("option", {key: e, domProps: {value: e}}, [t._v(t._s(e))])
                })), 0)])]), s("div", {staticClass: "info"}, [s("h5", [t._v("其他设置")]), s("fieldset", {staticClass: "form-group"}, [s("div", {staticClass: "row"}, [s("legend", {staticClass: "col-form-label col-sm pt-0 lable"}, [t._v("交友性别")]), s("div", {staticClass: "form-check radio-edge"}, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.profile.dating_gender,
                        expression: "user.profile.dating_gender"
                    }],
                    staticClass: "form-check-input",
                    attrs: {type: "radio", value: "male"},
                    domProps: {checked: t._q(t.user.profile.dating_gender, "male")},
                    on: {
                        change: function (e) {
                            return t.$set(t.user.profile, "dating_gender", "male")
                        }
                    }
                }), s("label", {staticClass: "form-check-label"}, [t._v("小哥哥")])]), s("div", {staticClass: "form-check"}, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.profile.dating_gender,
                        expression: "user.profile.dating_gender"
                    }],
                    staticClass: "form-check-input",
                    attrs: {type: "radio", value: "female"},
                    domProps: {checked: t._q(t.user.profile.dating_gender, "female")},
                    on: {
                        change: function (e) {
                            return t.$set(t.user.profile, "dating_gender", "female")
                        }
                    }
                }), s("label", {staticClass: "form-check-label"}, [t._v("小姐姐")])])])]), s("div", {staticClass: "form-group row"}, [s("label", {staticClass: "col-sm-3 col-form-label lable"}, [t._v("交友城市")]), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.profile.dating_location,
                        expression: "user.profile.dating_location"
                    }], staticClass: "form-control form-control-sm inputer", on: {
                        change: function (e) {
                            var a = Array.prototype.filter.call(e.target.options, (function (t) {
                                return t.selected
                            })).map((function (t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.$set(t.user.profile, "dating_location", e.target.multiple ? a : a[0])
                        }
                    }
                }, t._l(t.citys, (function (e) {
                    return s("option", {key: e, domProps: {value: e}}, [t._v(t._s(e))])
                })), 0)]), s("div", {staticClass: "form-group row"}, [s("label", {staticClass: "col-sm-3 col-form-label lable"}, [t._v("最大年龄")]), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.user.profile.max_dating_age,
                        expression: "user.profile.max_dating_age",
                        modifiers: {number: !0}
                    }], staticClass: "form-control form-control-sm inputer", on: {
                        change: function (e) {
                            var a = Array.prototype.filter.call(e.target.options, (function (t) {
                                return t.selected
                            })).map((function (e) {
                                var a = "_value" in e ? e._value : e.value;
                                return t._n(a)
                            }));
                            t.$set(t.user.profile, "max_dating_age", e.target.multiple ? a : a[0])
                        }
                    }
                }, t._l(t.ages, (function (e) {
                    return s("option", {key: e, domProps: {value: e}}, [t._v(t._s(e))])
                })), 0)]), s("div", {staticClass: "form-group row"}, [s("label", {staticClass: "col-sm-3 col-form-label lable"}, [t._v("最小年龄")]), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.user.profile.min_dating_age,
                        expression: "user.profile.min_dating_age",
                        modifiers: {number: !0}
                    }], staticClass: "form-control form-control-sm inputer", on: {
                        change: function (e) {
                            var a = Array.prototype.filter.call(e.target.options, (function (t) {
                                return t.selected
                            })).map((function (e) {
                                var a = "_value" in e ? e._value : e.value;
                                return t._n(a)
                            }));
                            t.$set(t.user.profile, "min_dating_age", e.target.multiple ? a : a[0])
                        }
                    }
                }, t._l(t.ages, (function (e) {
                    return s("option", {key: e, domProps: {value: e}}, [t._v(t._s(e))])
                })), 0)]), s("div", {staticClass: "form-group row"}, [s("label", {staticClass: "col-sm-3 col-form-label lable"}, [t._v("最大距离")]), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.user.profile.max_distance,
                        expression: "user.profile.max_distance",
                        modifiers: {number: !0}
                    }], staticClass: "form-control form-control-sm inputer", on: {
                        change: function (e) {
                            var a = Array.prototype.filter.call(e.target.options, (function (t) {
                                return t.selected
                            })).map((function (e) {
                                var a = "_value" in e ? e._value : e.value;
                                return t._n(a)
                            }));
                            t.$set(t.user.profile, "max_distance", e.target.multiple ? a : a[0])
                        }
                    }
                }, t._l(t.range, (function (e) {
                    return s("option", {key: e, domProps: {value: e}}, [t._v(t._s(e))])
                })), 0)]), s("div", {staticClass: "form-group row"}, [s("label", {staticClass: "col-sm-3 col-form-label lable"}, [t._v("最小距离")]), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.user.profile.min_distance,
                        expression: "user.profile.min_distance",
                        modifiers: {number: !0}
                    }], staticClass: "form-control form-control-sm inputer", on: {
                        change: function (e) {
                            var a = Array.prototype.filter.call(e.target.options, (function (t) {
                                return t.selected
                            })).map((function (e) {
                                var a = "_value" in e ? e._value : e.value;
                                return t._n(a)
                            }));
                            t.$set(t.user.profile, "min_distance", e.target.multiple ? a : a[0])
                        }
                    }
                }, t._l(t.range, (function (e) {
                    return s("option", {key: e, domProps: {value: e}}, [t._v(t._s(e))])
                })), 0)]), s("fieldset", {staticClass: "form-group"}, [s("div", {staticClass: "row"}, [s("legend", {staticClass: "col-form-label col-sm pt-0 lable"}, [t._v("自动播放")]), s("div", {staticClass: "form-check radio-edge"}, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.profile.auto_play,
                        expression: "user.profile.auto_play"
                    }],
                    staticClass: "form-check-input",
                    attrs: {type: "radio", value: "true"},
                    domProps: {checked: t._q(t.user.profile.auto_play, "true")},
                    on: {
                        change: function (e) {
                            return t.$set(t.user.profile, "auto_play", "true")
                        }
                    }
                }), s("label", {staticClass: "form-check-label"}, [t._v("开")])]), s("div", {staticClass: "form-check"}, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.profile.auto_play,
                        expression: "user.profile.auto_play"
                    }],
                    staticClass: "form-check-input",
                    attrs: {type: "radio", value: "false"},
                    domProps: {checked: t._q(t.user.profile.auto_play, "false")},
                    on: {
                        change: function (e) {
                            return t.$set(t.user.profile, "auto_play", "false")
                        }
                    }
                }), s("label", {staticClass: "form-check-label"}, [t._v("关")])])])]), s("fieldset", {staticClass: "form-group"}, [s("div", {staticClass: "row"}, [s("legend", {staticClass: "col-form-label col-sm pt-0 lable"}, [t._v("资料保密")]), s("div", {staticClass: "form-check radio-edge"}, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.profile.only_matched,
                        expression: "user.profile.only_matched"
                    }],
                    staticClass: "form-check-input",
                    attrs: {type: "radio", value: "true"},
                    domProps: {checked: t._q(t.user.profile.only_matched, "true")},
                    on: {
                        change: function (e) {
                            return t.$set(t.user.profile, "only_matched", "true")
                        }
                    }
                }), s("label", {staticClass: "form-check-label"}, [t._v("开")])]), s("div", {staticClass: "form-check"}, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.profile.only_matched,
                        expression: "user.profile.only_matched"
                    }],
                    staticClass: "form-check-input",
                    attrs: {type: "radio", value: "false"},
                    domProps: {checked: t._q(t.user.profile.only_matched, "false")},
                    on: {
                        change: function (e) {
                            return t.$set(t.user.profile, "only_matched", "false")
                        }
                    }
                }), s("label", {staticClass: "form-check-label"}, [t._v("关")])])])]), s("fieldset", {staticClass: "form-group"}, [s("div", {staticClass: "row"}, [s("legend", {staticClass: "col-form-label col-sm pt-0 lable"}, [t._v("开启震动")]), s("div", {staticClass: "form-check radio-edge"}, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.profile.vibration,
                        expression: "user.profile.vibration"
                    }],
                    staticClass: "form-check-input",
                    attrs: {type: "radio", value: "true"},
                    domProps: {checked: t._q(t.user.profile.vibration, "true")},
                    on: {
                        change: function (e) {
                            return t.$set(t.user.profile, "vibration", "true")
                        }
                    }
                }), s("label", {staticClass: "form-check-label"}, [t._v("开")])]), s("div", {staticClass: "form-check"}, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.user.profile.vibration,
                        expression: "user.profile.vibration"
                    }],
                    staticClass: "form-check-input",
                    attrs: {type: "radio", value: "false"},
                    domProps: {checked: t._q(t.user.profile.vibration, "false")},
                    on: {
                        change: function (e) {
                            return t.$set(t.user.profile, "vibration", "false")
                        }
                    }
                }), s("label", {staticClass: "form-check-label"}, [t._v("关")])])])])])], 1), s("button", {
                    staticClass: "btn btn-primary col-10",
                    on: {
                        click: function (e) {
                            return t.submit()
                        }
                    }
                }, [t._v("保存修改")])])
            }, z = [], J = a("c550"), G = J["a"], H = (a("5254"), Object(u["a"])(G, F, z, !1, null, "3861714b", null)),
            Q = H.exports, V = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {staticClass: "container-fluid upload-box"}, [a("div", {staticClass: "form-horizontal"}, [a("h5", [t._v("上传您的个人形象")]), a("hr"), a("div", {staticClass: "form-group"}, [a("input", {
                    attrs: {
                        type: "file",
                        accept: "image/*"
                    }, on: {
                        change: function (e) {
                            return t.handle_file(e.target.files)
                        }
                    }
                })]), a("button", {
                    staticClass: "btn btn-primary col-12 btn-txt", on: {
                        click: function (e) {
                            return t.upload_avatar()
                        }
                    }
                }, [t._v("点击提交")])])])
            }, X = [], Y = (a("b0c0"), a("cea2")), Z = {
                name: "UploadAvatar", data: function () {
                    return {file: void 0}
                }, methods: {
                    handle_file: function (t) {
                        this.file = t[0], console.log("选中文件:\n", this.file)
                    }, upload_avatar: function () {
                        var t = this;
                        E["a"].get("/qiniu/token").then((function (e) {
                            if (0 === e.data.code) {
                                var a = e.data.data.key, s = e.data.data.token;
                                t.upload_to_qn(a, s)
                            }
                        }))
                    }, upload_to_qn: function (t, e) {
                        var a = this,
                            s = {fname: this.file.name, params: {}, mimeType: ["image/png", "image/jpeg", "image/gif"]},
                            r = {useCdnDomain: !1, region: Y["region"].z0, retryCount: 1}, n = {
                                next: function (t) {
                                    console.log("上传进度: ".concat(t.total.percent))
                                }, error: function (t) {
                                    console.log(t)
                                }, complete: function (t) {
                                    console.log("上传成功"), a.$store.state.self.avatar = t.data, a.$router.push("/user/show")
                                }
                            }, i = Y["upload"](this.file, t, e, s, r);
                        i.subscribe(n)
                    }
                }
            }, tt = Z, et = (a("7781"), Object(u["a"])(tt, V, X, !1, null, "43888756", null)), at = et.exports,
            st = function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return t.queue.length > 0 ? s("div", {staticClass: "vue-tinder"}, [s("Tinder", {
                    ref: "tinder",
                    attrs: {"key-name": "id", queue: t.queue, "offset-y": 15},
                    on: {
                        "update:queue": function (e) {
                            t.queue = e
                        }, submit: t.on_submit
                    },
                    scopedSlots: t._u([{
                        key: "default", fn: function (e) {
                            return [s("div", {
                                staticClass: "pic",
                                style: {"background-image": "url(" + e.data.avatar + ")"},
                                on: {click: t.show_stanger}
                            })]
                        }
                    }], null, !1, 913120244)
                }, [s("img", {
                    staticClass: "like-pointer",
                    attrs: {slot: "like", src: a("d8ed")},
                    slot: "like"
                }), s("img", {
                    staticClass: "nope-pointer",
                    attrs: {slot: "nope", src: a("77e1")},
                    slot: "nope"
                }), s("img", {
                    staticClass: "super-pointer",
                    attrs: {slot: "super", src: a("0f4a")},
                    slot: "super"
                }), s("img", {
                    staticClass: "rewind-pointer",
                    attrs: {slot: "rewind", src: a("408e")},
                    slot: "rewind"
                })]), s("div", {staticClass: "swipe-btns"}, [s("img", {
                    attrs: {src: a("340d")},
                    on: {
                        click: function (e) {
                            return t.decide("rewind")
                        }
                    }
                }), s("img", {
                    attrs: {src: a("1784")}, on: {
                        click: function (e) {
                            return t.decide("nope")
                        }
                    }
                }), s("img", {
                    attrs: {src: a("6000")}, on: {
                        click: function (e) {
                            return t.decide("super")
                        }
                    }
                }), s("img", {
                    attrs: {src: a("ef74")}, on: {
                        click: function (e) {
                            return t.decide("like")
                        }
                    }
                })])], 1) : s("div", {
                    staticClass: "alert alert-primary notice",
                    attrs: {role: "alert"}
                }, [s("strong", [t._v("亲，您的眼光太高，满足条件的都被您滑完了！")]), s("br"), s("br"), s("span", [t._v("适当调整交友资料可以认识更多有趣的人哦！")])])
            }, rt = [], nt = (a("4160"), a("caad"), a("c975"), a("d81d"), a("159b"), a("96cf"), a("1da1")),
            it = a("0d28"), ot = a.n(it), lt = {
                name: "Swiper", components: {Tinder: ot.a}, data: function () {
                    return {queue: this.$store.state.queue, offset: 0, history: []}
                }, created: function () {
                    this.queue.length <= 5 && this.fetch_data()
                }, methods: {
                    show_stanger: function () {
                        this.$router.push({name: "stanger", params: {stanger: this.queue[0]}})
                    }, fetch_data: function () {
                        var t = this;
                        E["a"].get("/api/social/rcmd").then((function (e) {
                            if (0 == e.data.code) {
                                var a = t.queue.map((function (t) {
                                    return t.id
                                }));
                                e.data.data.forEach((function (e) {
                                    -1 === a.indexOf(e.id) && t.queue.push(e)
                                }))
                            } else console.log("获取数据失败: ".concat(e.data.data))
                        }))
                    }, on_submit: function (t) {
                        var e = t.type, a = t.key, s = t.item;
                        this.swipe(e, a), this.queue.length < 5 && this.fetch_data(), this.history.push(s)
                    }, decide: function (t) {
                        var e = this;
                        return Object(nt["a"])(regeneratorRuntime.mark((function a() {
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        "rewind" === t ? e.rewind() : 0 === e.queue.length ? alert("手速太快，都被你滑完了！\n\n可以调整交友资料，匹配一些不同的好友！") : e.$refs.tinder.decide(t);
                                    case 1:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }, swipe: function (t, e) {
                        var a = this, s = {nope: "dislike", like: "like", super: "superlike"};
                        console.log(t, e);
                        var r = "/api/social/".concat(s[t]);
                        E["a"].post(r, {sid: e}).then((function (s) {
                            0 === s.data.code ? ["like", "super"].includes(t) && s.data.data.is_matched && alert("恭喜，匹配成功！！！") : 1006 === s.data.code ? console.log("重复滑动: ".concat(e)) : a.$refs.tinder.rewind([a.history.pop()])
                        }))
                    }, rewind: function () {
                        var t = this;
                        this.history.length ? E["a"].post("/api/social/rewind").then((function (e) {
                            0 === e.data.code && t.$refs.tinder.rewind([t.history.pop()])
                        })) : alert("您还没有滑过任何人")
                    }
                }
            }, ct = lt, ut = (a("447c"), Object(u["a"])(ct, st, rt, !1, null, null, null)), dt = ut.exports,
            pt = function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "container-fluid user-box"}, [t.stanger.avatar ? s("img", {
                    staticClass: "img-thumbnail avatar",
                    attrs: {src: t.stanger.avatar}
                }) : t._e(), s("div", {staticClass: "info"}, [s("h5", [t._v("个人资料")]), s("table", {staticClass: "table"}, [s("tbody", [s("tr", [s("th", [t._v("昵称")]), s("td", [t._v(t._s(t.stanger.nickname))])]), s("tr", [s("th", [t._v("性别")]), s("td", [t._v(t._s("male" == t.stanger.gender ? "小哥哥" : "小姐姐"))])]), t.stanger.birthday ? s("tr", [s("th", [t._v("生日")]), s("td", [t._v(t._s(t.stanger.birthday))])]) : t._e(), t.stanger.location ? s("tr", [s("th", [t._v("地区")]), s("td", [t._v(t._s(t.stanger.location))])]) : t._e()])])]), s("button", {
                    staticClass: "btn btn-success col-10 btn-txt",
                    on: {
                        click: function (e) {
                            return t.$router.back()
                        }
                    }
                }, [s("img", {attrs: {src: a("863a"), width: "10px"}}), t._v(" 返 回 ")])])
            }, ft = [], _t = {name: "StangerShow", props: ["stanger"]}, mt = _t,
            vt = Object(u["a"])(mt, pt, ft, !1, null, null, null), ht = vt.exports, gt = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return t.friends.length > 0 ? a("div", {staticClass: "list-group"}, t._l(t.friends, (function (e) {
                    return a("router-link", {
                        key: e.id,
                        staticClass: "list-group-item list-group-item-action list-item",
                        attrs: {to: {name: "friend", params: {friend: e}}}
                    }, [a("img", {
                        staticClass: "icon navbar-brand",
                        attrs: {src: e.avatar}
                    }), a("span", {staticClass: "item-text"}, [t._v(t._s(e.nickname))]), a("span", {staticClass: "item-text"}, [t._v("@")]), a("span", {staticClass: "item-text"}, [t._v(t._s(e.location))])])
                })), 1) : a("div", {
                    staticClass: "alert alert-warning notice",
                    attrs: {role: "alert"}
                }, [a("strong", [t._v("您暂时没有好友")]), a("br"), a("br"), t._m(0)])
            }, bt = [function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("span", [t._v(" 互相喜欢的人，才能成为好朋友！ "), a("br"), t._v(" 加油让自己变得更受欢迎！！ ")])
            }], Ct = {
                name: "Friends", data: function () {
                    return {friends: []}
                }, created: function () {
                    var t = this;
                    E["a"].get("/api/social/friends").then((function (e) {
                        0 === e.data.code && (t.friends = e.data.data)
                    }))
                }
            }, kt = Ct, wt = Object(u["a"])(kt, gt, bt, !1, null, null, null), yt = wt.exports, xt = function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "container-fluid user-box"}, [t.friend.avatar ? s("img", {
                    staticClass: "img-thumbnail avatar",
                    attrs: {src: t.friend.avatar}
                }) : t._e(), s("div", {staticClass: "info"}, [s("h5", [t._v("个人资料")]), s("table", {staticClass: "table"}, [s("tbody", [s("tr", [s("th", [t._v("昵称")]), s("td", [t._v(t._s(t.friend.nickname))])]), s("tr", [s("th", [t._v("性别")]), s("td", [t._v(t._s("male" == t.friend.gender ? "小哥哥" : "小姐姐"))])]), s("tr", [s("th", [t._v("生日")]), s("td", [t._v(t._s(t.friend.birthday))])]), s("tr", [s("th", [t._v("地区")]), s("td", [t._v(t._s(t.friend.location))])])])])]), s("button", {
                    staticClass: "btn btn-success col-10 btn-txt",
                    on: {
                        click: function (e) {
                            return t.$router.back()
                        }
                    }
                }, [s("img", {
                    attrs: {
                        src: a("863a"),
                        width: "10px"
                    }
                }), t._v(" 返 回 ")]), s("button", {
                    staticClass: "btn btn-danger col-10 btn-txt", on: {
                        click: function (e) {
                            return t.break_off()
                        }
                    }
                }, [s("img", {attrs: {src: a("1d45"), width: "10px"}}), t._v(" 删除好友 ")])])
            }, Ot = [], qt = {
                name: "FriendShow", props: ["friend"], methods: {
                    break_off: function () {
                        alert("敢删我好友！胆肥啦 ？！！")
                    }
                }
            }, Et = qt, $t = Object(u["a"])(Et, xt, Ot, !1, null, null, null), Pt = $t.exports, jt = function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return t.queue.length > 0 ? s("div", {staticClass: "vue-tinder"}, [s("Tinder", {
                    ref: "tinder",
                    attrs: {"key-name": "id", queue: t.queue, "offset-y": 15},
                    on: {
                        "update:queue": function (e) {
                            t.queue = e
                        }, submit: t.on_submit
                    },
                    scopedSlots: t._u([{
                        key: "default", fn: function (e) {
                            return [s("div", {
                                staticClass: "pic",
                                style: {"background-image": "url(" + e.data.avatar + ")"},
                                on: {click: t.show_stanger}
                            })]
                        }
                    }], null, !1, 3795022264)
                }, [s("img", {
                    staticClass: "like-pointer",
                    attrs: {slot: "like", src: a("d8ed")},
                    slot: "like"
                }), s("img", {
                    staticClass: "nope-pointer",
                    attrs: {slot: "nope", src: a("77e1")},
                    slot: "nope"
                }), s("img", {
                    staticClass: "super-pointer",
                    attrs: {slot: "super", src: a("0f4a")},
                    slot: "super"
                }), s("img", {
                    staticClass: "rewind-pointer",
                    attrs: {slot: "rewind", src: a("408e")},
                    slot: "rewind"
                })]), s("div", {staticClass: "swipe-btns"}, [s("img", {
                    attrs: {src: a("340d")}, on: {
                        click: function (e) {
                            return t.decide("rewind")
                        }
                    }
                }), s("img", {
                    attrs: {src: a("1784")}, on: {
                        click: function (e) {
                            return t.decide("nope")
                        }
                    }
                }), s("img", {
                    attrs: {src: a("6000")}, on: {
                        click: function (e) {
                            return t.decide("super")
                        }
                    }
                }), s("img", {
                    attrs: {src: a("ef74")}, on: {
                        click: function (e) {
                            return t.decide("like")
                        }
                    }
                })])], 1) : s("div", {
                    staticClass: "alert alert-primary notice",
                    attrs: {role: "alert"}
                }, [s("strong", [t._v("您暂时没有粉丝")]), s("br"), s("br"), s("span", [t._v("听说上传的照片越漂亮，机会越大哦！")])])
            }, At = [], Mt = {
                name: "Fans", components: {Tinder: ot.a}, data: function () {
                    return {queue: [], offset: 0, history: []}
                }, created: function () {
                    this.fetch_data()
                }, methods: {
                    show_stanger: function () {
                        this.$router.push({name: "stanger", params: {stanger: this.queue[0]}})
                    }, fetch_data: function () {
                        var t = this;
                        E["a"].get("/api/social/fans").then((function (e) {
                            if (0 === e.data.code) {
                                var a = t.queue.map((function (t) {
                                    return t.id
                                }));
                                e.data.data.forEach((function (e) {
                                    -1 === a.indexOf(e.id) && t.queue.push(e)
                                }))
                            } else console.log("获取数据失败: ".concat(e.data.data))
                        }))
                    }, on_submit: function (t) {
                        var e = t.type, a = t.key, s = t.item;
                        this.swipe(e, a), this.queue.length < 5 && this.fetch_data(), this.history.push(s)
                    }, decide: function (t) {
                        var e = this;
                        return Object(nt["a"])(regeneratorRuntime.mark((function a() {
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        "rewind" === t ? e.rewind() : 0 === e.queue.length ? alert("手速太快，都被你滑完了！") : e.$refs.tinder.decide(t);
                                    case 1:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }, swipe: function (t, e) {
                        var a = this, s = {nope: "dislike", like: "like", super: "superlike"};
                        console.log(t, e);
                        var r = "/api/social/".concat(s[t]);
                        E["a"].post(r, {sid: e}).then((function (s) {
                            0 === s.data.code ? ["like", "super"].includes(t) && s.data.data.is_matched && alert("恭喜，匹配成功！！！") : 1006 === s.data.code ? console.log("重复滑动: ".concat(e)) : a.$refs.tinder.rewind([a.history.pop()])
                        }))
                    }, rewind: function () {
                        var t = this;
                        this.history.length ? E["a"].post("/api/social/rewind").then((function (e) {
                            0 === e.data.code && t.$refs.tinder.rewind([t.history.pop()])
                        })) : alert("您还没有滑过任何人")
                    }
                }
            }, Dt = Mt, Tt = Object(u["a"])(Dt, jt, At, !1, null, null, null), Nt = Tt.exports, Ut = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return t.users.length > 0 ? a("div", {staticClass: "list-group"}, t._l(t.users, (function (e) {
                    return a("router-link", {
                        key: e.id,
                        staticClass: "list-group-item list-group-item-action list-item",
                        attrs: {to: {name: "stanger", params: {stanger: e}}}
                    }, [a("span", {staticClass: "rank-txt"}, [t._v(t._s(e.rank) + ".")]), a("img", {
                        staticClass: "icon navbar-brand",
                        attrs: {src: e.avatar}
                    }), a("span", {staticClass: "item-txt"}, [t._v(t._s(e.nickname) + " / " + t._s(e.score) + " 分")])])
                })), 1) : a("div", {
                    staticClass: "alert alert-primary notice",
                    attrs: {role: "alert"}
                }, [a("strong", [t._v("暂无排名数据")])])
            }, Rt = [], Lt = {
                name: "Friends", data: function () {
                    return {users: []}
                }, created: function () {
                    var t = this;
                    E["a"].get("/api/social/rank").then((function (e) {
                        0 === e.data.code && (t.users = e.data.data)
                    }))
                }
            }, It = Lt, St = (a("df91"), Object(u["a"])(It, Ut, Rt, !1, null, "dae4a034", null)), Bt = St.exports;
        s["a"].use(x["a"]);
        var Kt = new x["a"]({
            routes: [{
                name: "home",
                path: "/",
                component: A,
                props: !0,
                meta: {requiresAuth: !1}
            }, {name: "login", path: "/login", component: A, props: !0, meta: {requiresAuth: !1}}, {
                name: "menu",
                path: "/menu",
                component: R,
                props: !0,
                meta: {requiresAuth: !1}
            }, {name: "show", path: "/user/show", component: W, props: !0, meta: {requiresAuth: !0}}, {
                name: "update",
                path: "/user/update",
                component: Q,
                props: !0,
                meta: {requiresAuth: !0}
            }, {
                name: "avatar",
                path: "/upload/avatar",
                component: at,
                props: !0,
                meta: {requiresAuth: !0}
            }, {name: "swiper", path: "/swiper", component: dt, props: !0, meta: {requiresAuth: !0}}, {
                name: "stanger",
                path: "/stanger/show",
                component: ht,
                props: !0,
                meta: {requiresAuth: !0}
            }, {name: "friends", path: "/friends", component: yt, props: !0, meta: {requiresAuth: !0}}, {
                name: "friend",
                path: "/friend/show",
                component: Pt,
                props: !0,
                meta: {requiresAuth: !0}
            }, {name: "fans", path: "/fans", component: Nt, props: !0, meta: {requiresAuth: !0}}, {
                name: "rank",
                path: "/hot/rank",
                component: Bt,
                props: !0,
                meta: {requiresAuth: !0}
            }]
        });
        Kt.beforeEach((function (t, e, a) {
            t.matched.some((function (t) {
                return t.meta.requiresAuth
            })) ? void 0 == y.state.self ? (console.log("尚未登录: ".concat(t.path, " => /login")), a({path: "/login"})) : (console.log("".concat(y.state.self.nickname, " => ").concat(t.path)), a()) : (console.log("无需登录 => ".concat(t.path)), a())
        }));
        var Wt = Kt;
        s["a"].config.productionTip = !1, new s["a"]({
            store: y, router: Wt, render: function (t) {
                return t(v)
            }
        }).$mount("#app")
    }, "5ec4": function (t, e, a) {
        t.exports = a.p + "img/like.ac05eb26.svg"
    }, 6e3: function (t, e, a) {
        t.exports = a.p + "img/super-like.89d0b871.png"
    }, 6270: function (t, e, a) {
        t.exports = a.p + "img/user-a.338fa4af.svg"
    }, "67f9": function (t, e, a) {
        t.exports = a.p + "img/menu.45a830ba.svg"
    }, "69d1": function (t, e, a) {
    }, 7781: function (t, e, a) {
        "use strict";
        var s = a("c2ee"), r = a.n(s);
        r.a
    }, "77e1": function (t, e, a) {
        t.exports = a.p + "img/nope-txt.3648f341.png"
    }, "790a": function (t, e, a) {
        t.exports = a.p + "img/fire.6458f000.svg"
    }, "85ec": function (t, e, a) {
    }, "863a": function (t, e, a) {
        t.exports = a.p + "img/back-w.271d6a03.svg"
    }, b1d0: function (t, e, a) {
        "use strict";
        var s = a("bc3a"), r = a.n(s), n = a("4328"), i = a.n(n);
        r.a.defaults.withCredentials = !0;
        var o = {
            999: "服务器错误",
            1e3: "验证码发送失败",
            1001: "验证码错误",
            1002: "您还没有登陆",
            1003: "表单数据错误",
            1004: "SID 错误",
            1005: "滑动类型错误",
            1006: "重复滑动",
            1007: "反悔次数达到上限",
            1008: "反悔超时",
            1009: "当前还没有滑动记录",
            1010: "您没有该功能权限"
        }, l = r.a.create({
            withCredentials: !0,
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            transformRequest: [function (t) {
                return t instanceof FormData || (t = i.a.stringify(t)), t
            }]
        });
        l.interceptors.response.use((function (t) {
            if (0 != t.data.code) {
                var e = o[t.data.code];
                alert(e)
            }
            return t
        })), e["a"] = l
    }, bdcd: function (t, e, a) {
        t.exports = a.p + "img/list.f585607d.svg"
    }, c2ee: function (t, e, a) {
    }, c550: function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d81d"),
            core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__),
            core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d3b7"),
            core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__),
            core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ddb0"),
            core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__),
            _Users_xu_Teaching_Lecture_swiper_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2909"),
            _libs_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("b1d0");
        __webpack_exports__["a"] = {
            name: "UserUpdate", props: ["self"], data: function () {
                return {
                    user: this.self.copy(),
                    citys: ["北京", "上海", "深圳", "武汉", "成都", "西安", "沈阳"],
                    ages: Object(_Users_xu_Teaching_Lecture_swiper_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["a"])(Array(43).keys()).map((function (t) {
                        return t + 18
                    })),
                    range: Object(_Users_xu_Teaching_Lecture_swiper_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["a"])(Array(10).keys()).map((function (t) {
                        return t + 1
                    }))
                }
            }, methods: {
                submit: function submit() {
                    var _this = this;
                    this.user.profile.auto_play = eval(this.user.profile.auto_play), this.user.profile.only_matched = eval(this.user.profile.only_matched), this.user.profile.vibration = eval(this.user.profile.vibration);
                    var params = this.user.to_dict(), p_dict = this.user.profile.to_dict();
                    for (var k in p_dict) params[k] = p_dict[k];
                    _libs_http__WEBPACK_IMPORTED_MODULE_4__["a"].post("/api/user/profile/update", params).then((function (t) {
                        0 === t.data.code && (_this.$store.state.self = _this.user, _this.$router.push("/user/show"))
                    }))
                }
            }
        }
    }, d306: function (t, e, a) {
    }, d8ed: function (t, e, a) {
        t.exports = a.p + "img/like-txt.52d704df.png"
    }, dbdc: function (t, e, a) {
        t.exports = a.p + "img/swiper.fc34a7aa.png"
    }, dc3a: function (t, e, a) {
        t.exports = a.p + "img/default.fd8c1f48.jpg"
    }, df91: function (t, e, a) {
        "use strict";
        var s = a("69d1"), r = a.n(s);
        r.a
    }, e29d: function (t, e, a) {
    }, ef74: function (t, e, a) {
        t.exports = a.p + "img/like.a33bd5aa.png"
    }, f4e9: function (t, e, a) {
        "use strict";
        var s = a("e29d"), r = a.n(s);
        r.a
    }, fce8: function (t, e, a) {
    }
});
//# sourceMappingURL=app.bfef509f.js.map