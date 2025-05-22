(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [60205], {

        /***/
        994944: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(981587);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var E = __c.E;
                var P = __c.P;
                var uCb = function(a, b) {
                        class c {
                            static A(d) {
                                P(d, {
                                    wd: B5,
                                    P4: B5
                                })
                            }
                            get wd() {
                                switch (this.P4) {
                                    case "date":
                                        return new pCb(this.Yj, b.language || "en-AU");
                                    case "select":
                                        return new qCb(this.Yj);
                                    case "mention":
                                        return new rCb(this.Yj);
                                    case "embed":
                                        return new sCb(this.Yj);
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(this.P4);
                                }
                            }
                            get P4() {
                                var d;
                                return (d = this.Yj.$k) === null || d === void 0 ? void 0 : d.type
                            }
                            constructor(d) {
                                this.context = d;
                                this.Yj = (c.A(this), void 0);
                                this.Yj = __c.C(a.Eq(d.sheet,
                                    d.ea, d.column))
                            }
                        }
                        return tCb(d => (new c(d)).wd)
                    },
                    vCb = function(a) {
                        var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                        try {
                            const c = __c.ED(a),
                                d = c instanceof __c.FD ? c.jz() : c;
                            return __c.Dw(b, e => {
                                e = __c.ED(e);
                                e = e instanceof __c.FD ? __c.qL(e, d) : e;
                                return Math.abs(__c.tL(e, d))
                            })
                        } catch (c) {
                            if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                            throw c;
                        }
                    },
                    wCb = function(a) {
                        return a.trim().split(/\s+/, 2).map(b => __c.Qx(b)[0]).join("")
                    },
                    zCb = function(a = "") {
                        a = xCb(a);
                        a = Math.floor(a() * yCb.length);
                        return yCb[a]
                    },
                    BCb = function(a, b = "medium") {
                        if (a !== null && a !== void 0 && a.length) {
                            var c = window.devicePixelRatio || 1,
                                d = (typeof b === "number" ? b : ACb(b)) * c;
                            return [...a].sort((e, f) => {
                                e = e.width;
                                f = f.width;
                                return e > d && f < d ? -1 : e < d && f > d ? 1 : Math.abs(e - d) - Math.abs(f - d)
                            })[0].url
                        }
                    },
                    DCb = function() {
                        const a = C5(() => new Map, []);
                        return {
                            fMa: b => {
                                if (a.has(b)) return __c.C(a.get(b));
                                const c = CCb();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    ECb = function(a, b) {
                        return C5(() => {
                                const c = new Map;
                                return d => {
                                    if (c.has(d)) return __c.C(c.get(d));
                                    const e = a(d);
                                    c.set(d, e);
                                    return e
                                }
                            },
                            b)
                    },
                    LCb = function({
                        children: a,
                        keyFrame: b,
                        Bza: c,
                        ariaLive: d,
                        Gra: e = !1,
                        YEa: f,
                        E6: g,
                        nJa: h,
                        a3a: k,
                        oma: l,
                        Sna: m,
                        Z2a: n,
                        ZWa: p
                    }) {
                        const {
                            fMa: q
                        } = DCb(), {
                            nLa: r,
                            CTa: t
                        } = FCb(b, a), u = ECb(v => () => {
                            (e === !1 || typeof e === "function" && !e(v)) && t(v)
                        }, [t, e]);
                        return D5("div", {
                            className: E5(g, "_9GxJfQ", {
                                KwB0XQ: l === "hidden",
                                WV1Mmw: c === "fill-height",
                                _2uSJxw: c === "flex-grow"
                            }),
                            children: D5("div", {
                                className: E5("m2VaAA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: v,
                                    element: x
                                }) => D5(GCb, { in: v === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(v),
                                    onExited: u(v),
                                    children: y => D5(HCb.Provider, {
                                        value: y,
                                        children: D5("div", {
                                            className: E5("KxXR9g", n, {
                                                KwB0XQ: m === "hidden"
                                            }),
                                            ref: q(v),
                                            "aria-hidden": y === ICb || y === JCb || y === KCb,
                                            children: v === b ? a : x
                                        })
                                    })
                                }, v)), r.every(v => v.key !== b) && D5(GCb, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : u(b),
                                    children: v => D5(HCb.Provider, {
                                        value: v,
                                        children: D5("div", {
                                            className: E5("KxXR9g", n),
                                            ref: q(b),
                                            "aria-hidden": v === ICb || v === JCb || v === KCb,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    FCb = function(a, b) {
                        const [c, d] = MCb(() => [{
                            key: a,
                            element: b
                        }]);
                        NCb(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = F5(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            nLa: c,
                            CTa: e
                        }
                    },
                    OCb = function(a) {
                        switch (a.type) {
                            case "mention":
                                return "bCAtqw";
                            case "embed":
                                return "BTcT3w";
                            case "date":
                                return "McKQgg";
                            case "select":
                                return "V2E5nQ";
                            default:
                                throw new E(a);
                        }
                    },
                    SCb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                                return D5(PCb, {
                                    zp: a.user ? b.bP(a.user) : void 0,
                                    text: a.text,
                                    backgroundColor: a.user ? b.DLa(a.user).background : void 0
                                });
                            case "embed":
                                const c = !a.url;
                                a = b.Vna.AO.get(a.url);
                                return D5(QCb, {
                                    icon: a,
                                    HOa: c
                                });
                            case "date":
                                return a.text ? void 0 : D5(RCb, {});
                            case "select":
                                break;
                            default:
                                throw new E(a);
                        }
                    },
                    UCb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return D5(TCb, {
                                    selected: !!b.Bxa
                                });
                            default:
                                throw new E(a);
                        }
                    },
                    G5 = function(a) {
                        return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? a.key ===
                            "Meta" || ["91", "224"].includes(a.code) : !1
                    },
                    VCb = function(a) {
                        __c.w(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    WCb = function(a, b, c) {
                        if (c) {
                            var d = BCb(c.images, "medium"),
                                e = BCb(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = H5(() => a.CT.set(b, e));
                                f.onerror = H5(() => a.CT.set(b, void 0));
                                !f.complete && c.complete ? a.CT.set(b, d) : c.src = ""
                            }
                        } else a.CT.set(b, void 0)
                    },
                    YCb = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e =
                                new Promise(f => {
                                    a.Qg ? a.Qg.y5a(new XCb({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.sj.content.title;
                                        h ? (I5(() => a.vAa.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        I5(() => a.vAa.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                                });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    J5 = __webpack_require__(519427),
                    H5 = J5.action,
                    ZCb = J5.comparer,
                    B5 = J5.computed,
                    $Cb = J5.observable,
                    K5 = J5.ObservableMap,
                    I5 = J5.runInAction;
                var tCb = __webpack_require__(635872).Om;
                var L5 = __webpack_require__(875604),
                    aDb = L5.createContext,
                    CCb = L5.createRef,
                    bDb = L5.lazy,
                    M5 = L5.memo,
                    F5 = L5.useCallback,
                    NCb = L5.useEffect,
                    cDb = L5.useId,
                    dDb = L5.useLayoutEffect,
                    C5 = L5.useMemo,
                    MCb = L5.useState;
                var xCb = __webpack_require__(503216);
                var eDb = __webpack_require__(443763),
                    D5 = eDb.jsx,
                    N5 = eDb.jsxs;
                var fDb = __webpack_require__,
                    gDb = fDb(993864),
                    E5 = fDb.n_x(gDb)();
                var GCb = __webpack_require__(460876).Z;
                var O5 = __webpack_require__(223826),
                    KCb = O5.Wj,
                    ICb = O5.Ix,
                    JCb = O5.$r;
                var P5 = __webpack_require__(446474).Pi;
                var hDb = class {
                        static A(a) {
                            P(a, {
                                text: B5,
                                user: B5,
                                brand: B5
                            })
                        }
                        get text() {
                            return this.wd.text
                        }
                        get user() {
                            return this.wd.user
                        }
                        get brand() {
                            return this.wd.brand
                        }
                        constructor(a) {
                            this.wd = a;
                            this.type = (hDb.A(this), "mention")
                        }
                    },
                    iDb = class {
                        static A(a) {
                            P(a, {
                                text: B5,
                                url: B5
                            })
                        }
                        get text() {
                            return this.wd.text
                        }
                        get url() {
                            return this.wd.url
                        }
                        constructor(a) {
                            this.wd = a;
                            this.type = (iDb.A(this), "embed")
                        }
                    },
                    jDb = class {
                        static A(a) {
                            P(a, {
                                text: B5,
                                language: B5,
                                style: B5,
                                date: B5
                            })
                        }
                        get text() {
                            return this.wd.text
                        }
                        get language() {
                            return this.wd.language
                        }
                        get style() {
                            return this.wd.style
                        }
                        get date() {
                            return this.wd.date
                        }
                        constructor(a) {
                            this.wd =
                                a;
                            this.type = (jDb.A(this), "date")
                        }
                    },
                    kDb = class {
                        static A(a) {
                            P(a, {
                                text: B5,
                                options: B5,
                                yd: B5,
                                FI: B5
                            })
                        }
                        get text() {
                            return this.wd.text
                        }
                        get options() {
                            return this.wd.options.map(a => a)
                        }
                        get yd() {
                            return this.wd.yd
                        }
                        get FI() {
                            var a;
                            return (a = this.wd.options.first(b => b.id === this.wd.yd)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            this.wd = a;
                            this.type = (kDb.A(this), "select")
                        }
                    },
                    lDb = tCb(a => {
                        switch (a.type) {
                            case "mention":
                                return new hDb(a);
                            case "embed":
                                return new iDb(a);
                            case "date":
                                return new jDb(a);
                            case "select":
                                return new kDb(a);
                            default:
                                throw new E(a);
                        }
                    });
                var pCb = class {
                        static A(a) {
                            P(a, {
                                style: B5,
                                date: B5,
                                text: B5
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = this.Kk.Rh.type === 2 ? this.Kk.Rh.date : void 0) || (a = new Date, a = __c.MA(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                WMa: a.getHours(),
                                VQa: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.Kk.gu
                        }
                        constructor(a, b) {
                            this.Kk = a;
                            this.language = b;
                            this.type = (pCb.A(this), "date")
                        }
                    },
                    mDb = class {
                        get label() {
                            return this.option.label
                        }
                        get fill() {
                            return this.option.fill
                        }
                        constructor(a, b) {
                            this.option = a;
                            this.id =
                                b
                        }
                    },
                    qCb = class {
                        static A(a) {
                            P(a, {
                                options: B5,
                                yd: B5,
                                FI: B5,
                                text: B5,
                                qpa: B5({
                                    equals: ZCb.shallow
                                })
                            })
                        }
                        get options() {
                            return this.qpa.map((a, b) => new mDb(a, b))
                        }
                        get yd() {
                            var a;
                            return (a = this.options.find(b => b.label === this.text)) === null || a === void 0 ? void 0 : a.id
                        }
                        get FI() {
                            var a;
                            return (a = this.options.find(b => b.id === this.yd)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.Kk.gu
                        }
                        get qpa() {
                            var a, b;
                            __c.B(((a = this.Kk.$k) === null || a === void 0 ? void 0 : a.type) === "select");
                            return (b = this.Kk.$k) === null || b === void 0 ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            this.Kk = a;
                            this.type = (qCb.A(this), "select")
                        }
                    },
                    rCb = class {
                        static A(a) {
                            P(a, {
                                tE: B5
                            })
                        }
                        get text() {
                            return this.tE ? this.tE.text : ""
                        }
                        get user() {
                            return this.tE ? this.tE.user : ""
                        }
                        get brand() {
                            return this.tE ? this.tE.brand : ""
                        }
                        get tE() {
                            if (this.Kk.Rh.type !== 9) return __c.B(this.Kk.Rh.type === 7), this.Kk.Rh ? this.Kk.Rh.value[0] : void 0
                        }
                        constructor(a) {
                            this.Kk = a;
                            this.type = (rCb.A(this), "mention")
                        }
                    },
                    sCb = class {
                        static A(a) {
                            P(a, {
                                PO: B5
                            })
                        }
                        get text() {
                            return this.PO ? this.PO.embed.text : ""
                        }
                        get url() {
                            return this.PO ?
                                this.PO.embed.url : ""
                        }
                        get PO() {
                            if (this.Kk.Rh.type !== 9) return __c.B(this.Kk.Rh.type === 8), this.Kk.Rh ? this.Kk.Rh.value[0] : void 0
                        }
                        constructor(a) {
                            this.Kk = a;
                            this.type = (sCb.A(this), "embed")
                        }
                    };
                var nDb = class {
                    m8(a) {
                        this.q5.m8(a)
                    }
                    wS(a, b) {
                        this.q5.wS(a, b)
                    }
                    bP(a) {
                        return this.q5.bP(a)
                    }
                    k8(a) {
                        this.Vna.k8(a)
                    }
                    constructor(a, b, c, d) {
                        this.q5 = a;
                        this.Vna = b;
                        this.Oa = c;
                        this.ls = d;
                        this.Wga = new __c.Abb;
                        this.DLa = e => __c.Ewa(this.Wga, e)
                    }
                };
                var oDb = {
                    xxsmall: 2,
                    xsmall: 3,
                    small: 4,
                    medium: 5,
                    large: 6,
                    xlarge: 8,
                    xxlarge: 10,
                    xxxlarge: 20
                };
                var yCb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                        try {
                            return __c.uD(__c.zD(a))
                        } catch (b) {
                            return "#8e8e8e"
                        }
                    }),
                    ACb = a => a.endsWith("rem") ? parseFloat(a) * 10 : __c.Lk * oDb[a];
                var pDb = M5(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        Cka: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    if (d) {
                        a = __c.ED(d);
                        var n = a instanceof __c.FD ? __c.HD(a) : __c.uD(a)
                    } else n = e ? zCb(e) : "#8e8e8e";
                    var p = cDb();
                    switch (l) {
                        case "circle":
                            a = D5("defs", {
                                children: D5("clipPath", {
                                    id: p,
                                    children: D5("circle", {
                                        id: `${p}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            a = D5("defs", {
                                children: D5("clipPath", {
                                    id: p,
                                    children: D5("rect", {
                                        id: `${p}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new E(l);
                    }
                    switch (l) {
                        case "circle":
                            p = D5("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: E5("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            p = D5("rect", {
                                width: "100%",
                                height: "100%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: E5("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new E(l);
                    }
                    n = vCb(n);
                    return D5("span", {
                        role: f,
                        "aria-label": g,
                        className: E5("VaW8_A", {
                            cUFFRA: l === "square"
                        }),
                        style: {
                            "--pDK9Gw": n
                        },
                        ...m,
                        children: N5("svg", {
                            className: h,
                            style: k,
                            children: [a, p, D5("text", {
                                x: "50%",
                                y: "50%",
                                "aria-hidden": "true",
                                textAnchor: "middle",
                                fill: n,
                                fontWeight: "500",
                                fontSize: "50%",
                                dominantBaseline: "central",
                                letterSpacing: "0.01rem",
                                dy: "-0.04em",
                                children: wCb(b).toUpperCase()
                            })]
                        })
                    })
                });
                var qDb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var rDb = ({
                    borderColor: a,
                    Zva: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => D5("span", {
                    className: E5(d, {
                        JwH6AA: a,
                        QJpRHw: !a
                    }),
                    style: {
                        backgroundImage: `url(${b})`,
                        borderColor: a && `${a}`,
                        ...e
                    },
                    role: f,
                    "aria-label": f === "img" ? c : void 0,
                    ...g
                });
                var sDb = ({
                    name: a,
                    l0a: b,
                    ariaLabel: c,
                    Cka: d,
                    backgroundColor: e,
                    borderColor: f,
                    zp: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = E5("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: l === "square"
                    });
                    b = b || "presentation";
                    return g ? D5(rDb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        Zva: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? D5(pDb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        Cka: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : D5(rDb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        Zva: qDb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
                var tDb = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.116 12.366a1.25 1.25 0 0 1 1.768 0l5.586 5.586a.75.75 0 0 0 1.06 0l5.586-5.586a1.25 1.25 0 0 1 1.768 1.768l-5.586 5.586a3.25 3.25 0 0 1-4.596 0l-5.586-5.586a1.25 1.25 0 0 1 0-1.768" clip-rule="evenodd"/></svg>';
                var uDb = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M10.964 5.972 8.177 8.759a.25.25 0 0 1-.354 0L5.036 5.972a.75.75 0 1 0-1.06 1.06L6.762 9.82a1.75 1.75 0 0 0 2.475 0l2.787-2.788a.75.75 0 1 0-1.06-1.06"/></svg>';
                var vDb = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.25" d="M3.17 5 5.3 7.12a1 1 0 0 0 1.42 0L8.83 5"/></svg>';
                var wDb = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="m16.384 9.225-4.207 4.207a.25.25 0 0 1-.353 0L7.623 9.224a.75.75 0 0 0-1.059.002.75.75 0 0 0-.002 1.059l4.201 4.21c.681.68 1.787.678 2.47-.005l4.207-4.207a.75.75 0 0 0 .002-1.059.75.75 0 0 0-1.058.002"/></svg>';
                var xDb = __c.ES({
                    Sp: vDb,
                    small: uDb,
                    medium: wDb,
                    hB: tDb
                });
                var HCb = aDb(void 0);
                var yDb = Number.parseInt("300ms", 10),
                    zDb = {
                        enter: "_QukmA",
                        enterActive: "_5_06KQ",
                        enterDone: void 0,
                        exitActive: "a952jg",
                        exitDone: "orZOEA"
                    },
                    ADb = M5(function({
                        aE: a = !1,
                        children: b,
                        keyFrame: c,
                        Bza: d,
                        oma: e = "hidden",
                        Sna: f = "hidden",
                        ariaLive: g,
                        Gra: h,
                        $5a: k = "none"
                    }) {
                        a = __c.ub().Kc && !a;
                        return LCb({
                            children: b,
                            keyFrame: c,
                            Bza: d,
                            ariaLive: g,
                            oma: e,
                            Sna: f,
                            Gra: h,
                            YEa: a ? yDb : 0,
                            nJa: E5({
                                _1niDPQ: a,
                                Q6kGbg: k === "none",
                                _9j7ODw: k === "layout"
                            }),
                            ZWa: zDb
                        })
                    });
                var BDb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var CDb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var DDb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
                var EDb = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var FDb = M5(a => {
                        const b = a.link,
                            c = a.className,
                            d = a.ariaLabel,
                            e = a.FI,
                            f = a.NIa,
                            g = a.NDa,
                            h = a.aEa,
                            k = a.measureRef,
                            l = a.onPointerDown,
                            m = a.onMouseEnter,
                            n = a.onMouseLeave,
                            p = E5({
                                EdewNw: !!g,
                                _6ZpPrw: !!h,
                                pzXyUA: a.text.length > 0
                            });
                        a = a.text.length > 0 ? a.text : "\ufeff";
                        return N5("span", {
                            className: E5(c, "FedJ0Q"),
                            "aria-label": d || a,
                            children: [D5("span", {
                                className: E5("_2Lr6pQ", p),
                                children: D5("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), N5("span", {
                                className: E5("XemTdQ", p),
                                ref: k,
                                style: e ? {
                                    color: e
                                } : void 0,
                                onPointerDown: l,
                                onMouseEnter: m,
                                onMouseLeave: n,
                                children: [g, D5("span", {
                                    className: E5("U_QH_A", {
                                        C9XL8g: !f
                                    }),
                                    children: b ? D5("a", {
                                        className: "vgTP5Q",
                                        ...b,
                                        children: a
                                    }) : a
                                }), h]
                            })]
                        })
                    }),
                    PCb = M5(a => {
                        const b = a.backgroundColor,
                            c = a.zp;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return D5(ADb, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? D5(sDb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                zp: c,
                                borderColor: c ? void 0 : b
                            }) : D5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: EDb
                                }
                            })
                        })
                    }),
                    QCb = M5(a => {
                        const b = a.icon;
                        a = a.HOa;
                        return D5(ADb, {
                            keyFrame: b ?
                                "favicon" : "placeholder",
                            children: b ? D5("span", {
                                className: "_tFJqA",
                                children: D5("img", {
                                    src: b,
                                    className: "qpbYdw"
                                })
                            }) : D5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: a ? DDb : CDb
                                }
                            })
                        })
                    }),
                    RCb = M5(() => D5("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: BDb
                        }
                    })),
                    TCb = M5(({
                        selected: a
                    }) => D5("div", {
                        className: E5("whph4A", {
                            zgzjww: a
                        }),
                        children: D5(xDb, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    GDb = P5(a => {
                        const {
                            wd: b,
                            Bxa: c,
                            Fba: d,
                            mode: e = "viewable",
                            measureRef: f,
                            xl: g,
                            onPointerDown: h
                        } = a;
                        a = b.text || "\u00a0".repeat(16);
                        const k = b.type === "embed" ? d.Oa(b.url) : void 0,
                            [l, m] = MCb(!1),
                            n = F5(t => m(G5(t)), [m]),
                            p = F5(t => m(!G5(t)), [m]),
                            q = F5(t => {
                                m(G5(t.nativeEvent));
                                document.addEventListener("keydown", n);
                                document.addEventListener("keyup", p)
                            }, [m, n, p]),
                            r = F5(() => {
                                m(!1);
                                document.removeEventListener("keydown", n);
                                document.removeEventListener("keyup", p)
                            }, [m, n, p]);
                        NCb(() => {
                            I5(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.m8(b.user);
                                        break;
                                    case "embed":
                                        d.k8(b.url)
                                }
                            })
                        }, [b, d]);
                        dDb(() => {
                            g === null || g === void 0 || g()
                        }, [b.type, a, g]);
                        return D5(FDb, {
                            text: a,
                            link: e === "viewable" || l ? k : void 0,
                            NIa: b.text.length === 0,
                            ariaLabel: b.text || "",
                            className: OCb(b),
                            FI: b.FI,
                            NDa: SCb(b, d),
                            aEa: UCb(b, {
                                Bxa: c
                            }),
                            measureRef: f,
                            onPointerDown: h,
                            onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
                            onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0
                        })
                    });
                var HDb = __c.M(() => ({
                    z6a: __c.AO(11),
                    mode: __c.I("A?", 1, "BY_USER_IDS"),
                    UXa: __c.zO(1)
                }));
                var IDb = class {
                        static A(a) {
                            P(a, {
                                qH: $Cb.shallow,
                                Hoa: H5
                            })
                        }
                        bP(a) {
                            return this.xka.bP(a)
                        }
                        m8(a) {
                            this.Vga.has(a) || this.qH.has(a) || (this.qH.add(a), this.uIa())
                        }
                        wS(a, b) {
                            this.Vga.has(a) || (this.Vga.set(a, b), this.qH.delete(a), WCb(this.xka, a, b))
                        }
                        async Hoa() {
                            if (this.qH.size !== 0) {
                                var a = [...this.qH.values()];
                                this.qH.clear();
                                if (this.zka) {
                                    var b = await this.zka;
                                    await Promise.all(VCb(a).map(async c => {
                                        const d = new HDb({
                                                UXa: c
                                            }),
                                            {
                                                D0a: e
                                            } = await b.h5a(d);
                                        I5(() => c.forEach(f => this.wS(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.wS(c))
                            }
                        }
                        constructor(a,
                            b) {
                            this.zka = a;
                            this.Vga = (IDb.A(this), new K5);
                            this.qH = new Set;
                            this.xka = new JDb;
                            this.uIa = __c.Nc(() => this.Hoa(), 200);
                            I5(() => {
                                b === null || b === void 0 || b.forEach((c, d) => this.wS(d, c))
                            })
                        }
                    },
                    JDb = class {
                        bP(a) {
                            return this.CT.get(a)
                        }
                        constructor() {
                            this.CT = new K5
                        }
                    };
                var XCb = __c.M(() => ({
                    id: __c.X("id", 1),
                    extension: __c.Z("extension", 3),
                    uxa: __c.vO("revision", 5),
                    version: __c.vO("version", 2),
                    g6a: __c.vO("imagesetsLimit", 6)
                }));
                var KDb = class {
                    static A(a) {
                        P(a, {
                            vKa: H5
                        })
                    }
                    async vKa(a) {
                        if (this.Qg) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                c == null || c.length < 2 ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await YCb(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        this.Qg = a;
                        this.vAa = (KDb.A(this), new K5);
                        this.promises = new Map
                    }
                };
                var LDb = class {
                    static A(a) {
                        P(a, {
                            AO: $Cb.shallow
                        })
                    }
                    async k8(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await ((d = this.ls) === null || d === void 0 ? void 0 : d.IU(a));
                            c = e === null || e === void 0 ? void 0 : e.uKa
                        } catch (e) {}
                        c ? (b.src = c, b.onload = H5(() => this.AO.set(a, c)), b.onerror = H5(() => this.AO.set(a, void 0))) : I5(() => this.AO.set(a, void 0))
                    }
                    constructor(a) {
                        this.ls = a;
                        this.AO = (LDb.A(this), new Map)
                    }
                };
                __c.$sa = {
                    RNa: function(a) {
                        const b = a.document,
                            c = a.Qg,
                            d = a.Oa,
                            e = a.ls;
                        var f = a.yka;
                        const g = a.se,
                            h = a.oi,
                            k = a.Ty,
                            l = a.V2;
                        a = a.t6a;
                        f = new IDb(a === null || a === void 0 ? void 0 : a(), f);
                        a = new LDb(e);
                        new KDb(c);
                        const m = new nDb(f, a, d, e),
                            n = uCb(l, b);
                        g.fm.j4 = P5(({
                            item: q,
                            measureRef: r
                        }) => {
                            const t = C5(() => lDb(q.wd), [q.wd]);
                            return D5(GDb, {
                                wd: t,
                                Fba: m,
                                measureRef: r
                            })
                        });
                        const p = P5(({
                            context: q,
                            xl: r
                        }) => {
                            const t = C5(() => __c.C(n(q.container)), [q]);
                            dDb(r, [r, q.container.column.width]);
                            return D5(GDb, {
                                wd: t,
                                Fba: m,
                                xl: r
                            })
                        });
                        k.cja = ({
                                context: q,
                                xl: r
                            }) =>
                            ({
                                type: "react",
                                node: D5(p, {
                                    context: q,
                                    xl: r
                                })
                            });
                        h && (h.zia = bDb(() => __webpack_require__.me(365475).then(() => __c.oCb).then(({
                            NHa: q
                        }) => ({
                            default: q()
                        }))));
                        return {
                            Fba: m
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/4cb2300718933be5.js.map