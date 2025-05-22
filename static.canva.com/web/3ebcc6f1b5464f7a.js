(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [28646], {

        /***/
        82986: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(914242);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var sO = __c.sO;
                var X = __c.X;
                var M = __c.M;
                var Fa = __c.Fa;
                var WGb, ZGb, bHb, cHb, eHb, dHb, gHb, jHb, iHb, mHb, $6;
                __c.V6 = function(a) {
                    return {
                        type: 1,
                        Component: a
                    }
                };
                __c.W6 = function() {
                    return a => a
                };
                __c.X6 = function(a, b, c) {
                    return {
                        key: a,
                        fwa: b,
                        type: "string",
                        VB: c,
                        Zta: 0
                    }
                };
                __c.Y6 = function(a) {
                    return () => ({ ...UGb,
                        ...a
                    })
                };
                WGb = function({
                    element: a
                }) {
                    var b = VGb.get(a.y5);
                    if (!b) throw Error(`Blueprint ${a.y5} not found`);
                    b = b.dbb.find(c => c.cha === a.cha);
                    if (!b) throw Error(`Variant ${a.cha} not found for blueprint ${a.y5}`);
                    return {
                        Za: b.Za
                    }
                };
                ZGb = function(a, b) {
                    var c = XGb,
                        d = YGb;
                    a.handle("SET_CONFIG", async e => {
                        if (e === void 0) throw new Z6({
                            code: "internal_error",
                            message: "SET_CONFIG: request cannot be undefined."
                        });
                        e = c.deserialize(e);
                        e = await b(e);
                        if (d) return d.serialize(e)
                    })
                };
                bHb = async function(a, b) {
                    a = await a.bma.request("RENDER_ELEMENT", $Gb.serialize(b));
                    if (!a.ok) throw Error(`Encountered an error while sending ${"RENDER_ELEMENT"} request: ${a.error}`);
                    if (a.value == null) throw Error("RENDER_ELEMENT: Result cannot be empty");
                    return aHb.deserialize(a.value)
                };
                cHb = function(a) {
                    ZGb(a.bma, b => a.handler.GMa(b))
                };
                eHb = async function(a, b) {
                    const c = b.requestId,
                        d = b.path;
                    b = b.payload;
                    const e = a.requestHandler.get(d);
                    if (e) {
                        a.VQ.tN.send({
                            type: "ack",
                            requestId: c
                        });
                        var f = setInterval(() => a.VQ.tN.send({
                            type: "ack",
                            requestId: c
                        }), 9E3);
                        try {
                            var g = await e(b);
                            clearInterval(f);
                            a.VQ.tN.send({
                                type: "response",
                                requestId: c,
                                payload: g
                            })
                        } catch (k) {
                            clearInterval(f);
                            g = "internal_error";
                            b = "Something went wrong on our end, if this issue persists please contact us.";
                            if (k instanceof Z6) {
                                var h = k;
                                k.code === "internal_error" ? a.M.ub(k, {
                                    qe: "Internal error in comms handler",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", d]
                                    ])
                                }) : (g = k.code, b = k.pTa)
                            } else a.MTa ? a.M.ub(k, {
                                qe: "Unexpected error type thrown from comms handler",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", d]
                                ])
                            }) : a.MIa.error(k);
                            g = dHb(a.VQ, c, g, b);
                            g.ok || a.M.XN(g.error, {
                                qe: "unable to send error response",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", d]
                                ])
                            })
                        }
                        if (h != null)
                            for (const k of a.$Ja) try {
                                k(h)
                            } catch (l) {
                                a.M.OT(l, {
                                    qe: "Error executing errorObserver"
                                })
                            }
                    } else h = dHb(a.VQ, c, "internal_error", `No request handler configured for path: "${d}".`),
                        h.ok || a.M.XN(h.error, {
                            qe: "unable to send error response",
                            tags: new Map([
                                ["type", "request"],
                                ["path", d]
                            ])
                        })
                };
                dHb = function(a, b, c, d) {
                    return a.tN.send({
                        type: "error",
                        requestId: b,
                        code: c,
                        message: d
                    })
                };
                gHb = function({
                    src: a,
                    srcdoc: b,
                    sandbox: c
                }) {
                    if (b.length !== 0 || !c.contains("allow-same-origin")) return fHb;
                    a = (new URL(a)).origin;
                    return a === "null" ? fHb : {
                        Zga: a,
                        hya: a
                    }
                };
                jHb = async function(a, b, c, {
                    addEventListener: d,
                    removeEventListener: e
                } = window) {
                    const f = new hHb(6E4),
                        g = gHb(c),
                        h = c.contentWindow;
                    if (!h) throw new Z6({
                        code: "internal_error",
                        message: "contentWindow is missing from iFrame"
                    });
                    c = ({
                        data: k,
                        source: l,
                        origin: m
                    }) => {
                        var n;
                        (k === null || k === void 0 ? 0 : (n = k.source) === null || n === void 0 ? 0 : n.startsWith("react-")) || (m !== g.Zga ? iHb(m) || b.info("received message event from an unexpected origin", {
                            extra: new Map([
                                ["expected", g.Zga],
                                ["actual", m]
                            ])
                        }) : l !== h ? l !== window && b.info("source and content window do not match", {
                            extra: new Map([
                                ["data.source", k === null || k === void 0 ? void 0 : k.source]
                            ])
                        }) : (l = k ? k.source ? k.source !== "iframe" ? Fa("invalid source") : (0, __c.Ea)() : Fa("'source' is missing in MessageEvent data object") : Fa("missing 'data' field in MessageEvent"), l.ok ? (h.postMessage({
                            source: "parent"
                        }, g.hya, [a]), f.resolve(void 0)) : b.a3(l.error, {
                            extra: new Map([
                                ["data.source", k === null || k === void 0 ? void 0 : k.source]
                            ])
                        })))
                    };
                    d("message", c);
                    try {
                        await f.promise()
                    } finally {
                        e("message", c)
                    }
                };
                iHb = function(a) {
                    return kHb.some(b => a.endsWith(b))
                };
                mHb = function({
                    M: a
                }) {
                    const b = new lHb(a);
                    return __c.W6()(() => ({
                        element: __c.V6(({
                            data: {
                                element: c
                            },
                            Xv: {
                                CDa: d
                            }
                        }) => $6(d, {
                            url: c.url,
                            ov: e => b.ov(e, c),
                            xK: e => b.xK(e)
                        }))
                    }))
                };
                __c.Dd.prototype.XN = __c.ca(3, function(a, b) {
                    this.console.error(...__c.hd(this, "critical", a, b))
                });
                __c.Fd.prototype.XN = __c.ca(2, function(a, b) {
                    __c.Cd(this, "fatal", a, b)
                });
                __c.a7 = {};
                $6 = __webpack_require__(443763).jsx;
                var nHb = __webpack_require__(446474).Pi;
                var oHb = __webpack_require__(875604).memo;
                var b7 = __webpack_require__(519427),
                    pHb = b7.ObservableMap,
                    qHb = b7.reaction,
                    rHb = b7.runInAction;
                var UGb = Object.freeze({
                    document: Object.freeze({}),
                    element: Object.freeze({})
                });
                var sHb = __c.Y6({
                        element: __c.a7
                    }),
                    tHb = {
                        wA: __c.W6()(() => ({
                            element: __c.V6(nHb(() => $6("div", {
                                children: "3D Widget"
                            })))
                        })),
                        xA: sHb
                    };
                var VGb = new pHb,
                    uHb = __c.Y6({
                        element: {
                            y5: __c.X6("blueprintId", 0),
                            cha: __c.X6("variantId", 0)
                        }
                    });
                var vHb = {
                    wA: __c.W6()(() => ({
                        element: {
                            type: 0,
                            Pw: WGb
                        }
                    })),
                    xA: uHb
                };
                var Z6 = class extends Error {
                    constructor(a) {
                        a.code = a.code;
                        const b = a.message.endsWith(".") ? "" : ".";
                        super(`[${a.code}]:  ${a.message}${b}`.trim());
                        this.code = a.code;
                        this.name = "CanvaError";
                        this.pTa = a.message;
                        Object.setPrototypeOf(this, Z6.prototype)
                    }
                };
                var $Gb = M(() => ({
                    config: __c.Z(1)
                }));
                var wHb = M(() => ({
                    color: X(1)
                }));
                var xHb = M(() => ({
                    type: __c.I("A?", 1, "RECOLORABLE"),
                    id: X(1),
                    value: __c.Qa(2, wHb)
                }));
                var yHb = M(() => ({
                    borderRadius: sO(1),
                    borderWidth: sO(2)
                }));
                var zHb = M(() => ({
                    type: __c.I("A?", 2, "BORDERABLE"),
                    id: X(1),
                    value: __c.Qa(2, yHb)
                }));
                var aHb = M(() => ({
                    config: X(1),
                    width: sO(2),
                    height: sO(3),
                    WK: __c.Ra(4, xHb),
                    aGa: __c.Ra(5, zHb)
                }));
                var XGb = M(() => ({
                    config: X(1),
                    width: sO(2),
                    height: sO(3),
                    WK: __c.Ra(4, xHb),
                    aGa: __c.Ra(5, zHb)
                }));
                var YGb = M(() => ({}));
                var AHb = class {
                    constructor(a, b) {
                        this.bma = a;
                        this.handler = b;
                        cHb(this)
                    }
                };
                var BHb = class {
                    constructor(a, b, c) {
                        this.handler = a;
                        this.port = b;
                        this.M = c;
                        this.send = d => {
                            try {
                                return this.port.postMessage(d), (0, __c.Ea)()
                            } catch (e) {
                                return this.M.ub(e), Fa(e)
                            }
                        };
                        this.QRa = d => {
                            this.M.ub(d)
                        };
                        this.PRa = ({
                            data: d
                        }) => {
                            if (d) try {
                                this.handler.receive(d)
                            } catch (e) {
                                this.M.ub(e)
                            } else this.M.error(new Z6({
                                code: "internal_error",
                                message: "missing data in 'MessageEvent'"
                            }))
                        };
                        this.port.onmessage = this.PRa;
                        this.port.onmessageerror = this.QRa
                    }
                };
                var CHb = class extends Error {
                        constructor() {
                            super("[internal_error] Comms promise timed out.")
                        }
                    },
                    hHb = class {
                        reset(a) {
                            a && (this.timeoutMs = a);
                            this.setTimeout()
                        }
                        resolve(a) {
                            clearTimeout(this.hf);
                            this.RTa(a)
                        }
                        reject(a) {
                            clearTimeout(this.hf);
                            this.Ywa(a)
                        }
                        promise() {
                            return this.p
                        }
                        setTimeout() {
                            clearTimeout(this.hf);
                            this.hf = setTimeout(() => {
                                this.Ywa(new CHb)
                            }, this.timeoutMs)
                        }
                        constructor(a) {
                            this.timeoutMs = a;
                            this.p = new Promise((b, c) => {
                                this.RTa = b;
                                this.Ywa = c
                            });
                            this.setTimeout()
                        }
                    };
                var DHb = class {
                    request(a, b) {
                        const c = this.Rva,
                            d = new hHb(5E3),
                            e = this.NTa(),
                            f = async function() {
                                c.set(e, d);
                                try {
                                    const g = await d.promise();
                                    return (0, __c.Ea)(g)
                                } catch (g) {
                                    return g instanceof CHb ? Fa(new Z6({
                                        code: "internal_error",
                                        message: `Comms promise timed out (${a}).`
                                    })) : Fa(g)
                                } finally {
                                    c.delete(e)
                                }
                            }();
                        b = this.send(e, a, b);
                        b.ok || (this.M.ub(b.error, {
                            qe: "unable to send request",
                            tags: new Map([
                                ["type", "request"],
                                ["path", a]
                            ])
                        }), d.reject(b.error));
                        return f
                    }
                    constructor(a, b) {
                        this.send = a;
                        this.M = b;
                        this.NTa = __c.id;
                        this.Rva =
                            new Map
                    }
                };
                var EHb = class {
                    handle(a, b) {
                        if (this.requestHandler.has(a)) throw new Z6({
                            code: "internal_error",
                            message: `Handler for '${a}' is already defined.`
                        });
                        this.requestHandler.set(a, b)
                    }
                    constructor(a, b) {
                        var c = console;
                        this.VQ = a;
                        this.M = b;
                        this.MTa = !0;
                        this.MIa = c;
                        this.requestHandler = new Map;
                        this.$Ja = new Set
                    }
                };
                var GHb = class {
                        constructor(a, b) {
                            this.request = (c, d) => this.client.request(c, d);
                            this.handle = (c, d) => this.requestHandler.handle(c, d);
                            a = new FHb(c => {
                                switch (c.type) {
                                    case "ack":
                                    case "error":
                                    case "response":
                                        var d = this.client;
                                        const e = c.requestId,
                                            f = c.type,
                                            g = d.Rva.get(e);
                                        if (g) switch (f) {
                                            case "response":
                                                g.resolve(c.payload);
                                                break;
                                            case "ack":
                                                g.reset(2E4);
                                                break;
                                            case "error":
                                                g.reject(new Z6({
                                                    code: c.code,
                                                    message: c.message
                                                }));
                                                break;
                                            default:
                                                throw new __c.E(c);
                                        } else f !== "ack" && d.M.error("request has already been handled and resolved or was not sent from this client", {
                                            tags: new Map([
                                                ["type", f],
                                                ["requestId", `${e}`]
                                            ])
                                        });
                                        break;
                                    case "request":
                                        eHb(this.requestHandler, c);
                                        break;
                                    default:
                                        throw new __c.E(c);
                                }
                            }, a, b.Wk("bus"));
                            this.client = new DHb(a.Ry, b.Wk("client"));
                            this.requestHandler = new EHb(a, b.Wk("requestHandler"))
                        }
                    },
                    FHb = class {
                        constructor(a, b, c) {
                            this.cY = a;
                            this.Ry = (d, e, f) => this.tN.send({
                                type: "request",
                                requestId: d,
                                path: e,
                                payload: f
                            });
                            this.XRa = d => {
                                switch (d.type) {
                                    case "ack":
                                        this.cY({
                                            type: "ack",
                                            requestId: d.requestId
                                        });
                                        break;
                                    case "error":
                                        this.cY({
                                            type: "error",
                                            requestId: d.requestId,
                                            code: d.code,
                                            message: d.message
                                        });
                                        break;
                                    case "response":
                                        this.cY({
                                            type: "response",
                                            requestId: d.requestId,
                                            payload: d.payload
                                        });
                                        break;
                                    case "request":
                                        this.cY({
                                            type: "request",
                                            requestId: d.requestId,
                                            path: d.path,
                                            payload: d.payload
                                        });
                                        break;
                                    default:
                                        throw new __c.E(d);
                                }
                            };
                            this.tN = new BHb({
                                receive: this.XRa
                            }, b, c)
                        }
                    };
                var fHb = {
                    Zga: "null",
                    hya: "*"
                };
                var kHb = "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(" ");
                var lHb = class {
                    async ov(a, b) {
                        const {
                            port1: c,
                            port2: d
                        } = new MessageChannel;
                        var e = new GHb(c, this.M);
                        await jHb(d, this.M, a, window);
                        const f = new AHb(e, {
                            GMa: g => {
                                rHb(() => b.config = g.config);
                                return new YGb
                            }
                        });
                        e = qHb(() => b.config, async g => {
                            const h = await bHb(f, {
                                config: g
                            });
                            h.config && h.config !== g && rHb(() => b.config = h.config)
                        }, {
                            fireImmediately: !0
                        });
                        this.ds.set(a, e)
                    }
                    xK(a) {
                        var b;
                        (b = this.ds.get(a)) === null || b === void 0 || b();
                        this.ds.delete(a)
                    }
                    constructor(a) {
                        this.M = a;
                        this.ds = new Map
                    }
                };
                var HHb = __c.Y6({
                    element: {
                        url: __c.X6("url", 0),
                        config: __c.X6("config", 1)
                    }
                });
                var IHb = __c.Y6({
                    element: __c.a7
                });
                var JHb = oHb(function() {
                    return $6("div", {
                        style: {
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            backgroundColor: "#fFfFfF",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        children: "FORM V2 Widget"
                    })
                });
                var KHb = {
                    wA: function(a) {
                        return __c.W6()(() => ({
                            element: __c.V6(a)
                        }))
                    }(nHb(() => $6(JHb, {
                        state: {}
                    }))),
                    xA: IHb
                };
                __c.vAa = {
                    YNa: function(a) {
                        function b(e, f) {
                            const g = c.UNa(e, f.xA());
                            f = d.TNa(e, g, f.wA());
                            return {
                                id: e,
                                lt: g,
                                Q9a: f
                            }
                        }
                        const c = a.Aha,
                            d = a.RT;
                        return {
                            L0a: b("w:wnJF5T87v", vHb),
                            d2a: a.xJa ? Promise.all([__webpack_require__.me(697956).then(() => __c.LHb), __webpack_require__.me(411625).then(() => __c.MHb), __webpack_require__.me(305660).then(() => __c.NHb), __webpack_require__.me(696820).then(() => __c.OHb)]).then(([e, f, g, h]) => ({
                                $1a: b("w:cm9wgGptP", e),
                                a2a: b("w:yLMS4dWnl", f),
                                b2a: b("w:2flp30CGQ", g),
                                c2a: b("w:1Nv6K6Dtv", h)
                            })) : void 0,
                            l1a: b("w:JR4G8hDDg", {
                                xA: HHb,
                                wA: mHb({
                                    M: a.M
                                })
                            }),
                            form: b("w:6JG6DxspF", KHb),
                            sab: a.MJa ? b("w:2pbXJMtm1", tHb) : void 0
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/3ebcc6f1b5464f7a.js.map