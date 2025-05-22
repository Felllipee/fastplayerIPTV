(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [76301], {

        /***/
        738083: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var JM = __c.JM;
                var Ic = __c.Ic;
                var P = __c.P;
                var Rl = __c.Rl;
                var TC = __c.TC;
                var O = __c.O;
                var sl = __c.sl;
                var C = __c.C;
                var E = __c.E;
                var Q5 = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.DI(b.reference.fg);
                                a = a.aL(b.reference.lg);
                                return c != null && a != null;
                            case 1:
                                return a.DI(b.reference.fg) != null;
                            case 2:
                                return a.aL(b.reference.lg) != null;
                            case 3:
                                return !1;
                            default:
                                throw new E(b.reference);
                        }
                    },
                    QDb = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.S.length > 0) return !1;
                                a = a.uy(c.vN.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.AI(new __c.EI, a.uA).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return Q5(b, d);
                                        case 1:
                                            return Q5(b,
                                                d.start) && Q5(b, d.end);
                                        default:
                                            throw new E(d);
                                    }
                                }).length > 0;
                            default:
                                throw new E(c);
                        }
                    },
                    RDb = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.ea;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || (k.boundary === "start" ? g.span.tb === c : g.span.dc === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = k.boundary === "start" ? c === null || c === void 0 ? void 0 : c.la : c === null || c === void 0 ? void 0 : c.Aa) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: C(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.W7, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.Dxa, h = h.ea === k.ea && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.Gb === c.Gb && g.Gb === 0 ? g.W7 = f : e.push({
                                            Dxa: k,
                                            KVa: l,
                                            W7: f,
                                            color: c.color,
                                            weight: c.weight,
                                            Gb: c.Gb
                                        })
                                    }
                            }
                        return e
                    },
                    SDb = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.ea,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || (l.boundary === "start" ? d.span.qb === h : d.span.Qb === h))
                                    if (d = b.get(`${h.id}:${g.id}`), (d = l.boundary === "start" ? d === null ||
                                            d === void 0 ? void 0 : d.ia : d === null || d === void 0 ? void 0 : d.Ca) && (l.boundary !== "start" || e(g, h) !== 1)) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            ea: g,
                                            boundary: "start"
                                        } : {
                                            ea: C(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.Rla, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.a8, k = k.ea === m.ea && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.Gb === d.Gb && h.Gb === 0 ? h.a8 = g : f.push({
                                            Rla: l,
                                            UVa: m,
                                            a8: g,
                                            color: d.color,
                                            weight: d.weight,
                                            Gb: d.Gb
                                        })
                                    }
                            }
                        return f
                    },
                    TDb = function(a, b, c, d, e) {
                        const f =
                            a.bza.BHa(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                u = f.get(r) || 0;
                            return t <= u ? q : r
                        };
                        const g = new Map;
                        if (d.length === 0 || e.length === 0) return g;
                        var h = [],
                            k = b.layout.cols.Ec(e[0].column);
                        k && h.push({
                            column: k,
                            boundary: "start"
                        });
                        h.push(...e);
                        (e = b.layout.cols.next(e[e.length - 1].column)) && h.push({
                            column: e,
                            boundary: "start"
                        });
                        e = [];
                        (k = b.layout.rows.Ec(d[0].ea)) && e.push({
                            ea: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].ea)) && e.push({
                            ea: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = q.boundary === "start" ? q.column : void 0) ? b.layout.cols.Ec(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = r.boundary === "start" ? r.ea : void 0;
                                k = l ? b.layout.rows.Ec(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = q.boundary === "end" ? l === null || l === void 0 ? void 0 : l.Ca : m === null || m === void 0 ? void 0 : m.ia;
                                m = r.boundary === "end" ? n === null || n === void 0 ? void 0 : n.Aa : m === null || m === void 0 ?
                                    void 0 : m.la;
                                n = q.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Ca : n === null || n === void 0 ? void 0 : n.ia;
                                l = r.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Aa : l === null || l === void 0 ? void 0 : l.la;
                                p = __c.kl({
                                    la: n,
                                    Aa: k,
                                    ia: l,
                                    Ca: m
                                }, a);
                                let t;
                                switch (p) {
                                    case "blockStart":
                                        t = n;
                                        break;
                                    case "blockEnd":
                                        t = k;
                                        break;
                                    case "inlineStart":
                                        t = l;
                                        break;
                                    case "inlineEnd":
                                        t = m;
                                        break;
                                    default:
                                        t = void 0
                                }
                                const {
                                    height: u,
                                    width: v
                                } = (t === null || t === void 0 ? void 0 : t.Gb) === 1 ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((l === null || l === void 0 ? void 0 :
                                        l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                                    width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                                };
                                g.set(R5(q, r), __c.hl(p, u / 2, v / 2))
                            }
                        }
                        return g
                    },
                    UDb = function(a, b, c, d, e, f) {
                        if (d.length === 0 || e.length === 0) return [];
                        const g = RDb(b, c, d, e);
                        f = SDb(b, c, d, e, f);
                        const h = TDb(a, b, c, d, e),
                            k = a.hMa(b),
                            l = a.HLa(b),
                            m = b.direction === "rtl";
                        a = g.map(n => {
                            var p, q, r = n.KVa,
                                t = n.W7,
                                u = n.Dxa;
                            const v = n.color,
                                x = n.weight;
                            n = n.Gb;
                            const y = m ? -1 : 1,
                                z = (p = h.get(R5(r, u))) === null || p === void 0 ?
                                void 0 : p.Ca;
                            p = (q = h.get(R5(t, u))) === null || q === void 0 ? void 0 : q.ia;
                            if (z != null && p != null) {
                                q = C(k.get(u.ea));
                                var A = C(l.get(r.column));
                                r = C(l.get(t.column));
                                u = u.boundary === "start" ? q.start : q.end;
                                q = A.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: v,
                                    weight: x,
                                    Gb: n,
                                    p1: new sl(q + z * y, u),
                                    p2: new sl(t + p * y, u),
                                    ...__c.nl((t - q) * y, n * x, z)
                                }
                            }
                        }).filter(__c.wb);
                        return [...f.map(n => {
                            var p, q, r = n.Rla,
                                t = n.UVa,
                                u = n.a8;
                            const v = n.color,
                                x = n.weight;
                            n = n.Gb;
                            const y = (p = h.get(R5(r, t))) === null || p === void 0 ? void 0 : p.Aa;
                            p = (q = h.get(R5(r,
                                u))) === null || q === void 0 ? void 0 : q.la;
                            if (y != null && p != null) {
                                q = C(l.get(r.column));
                                var z = C(k.get(t.ea));
                                t = C(k.get(u.ea));
                                r = r.boundary === "start" ? q.start : q.end;
                                q = z.start;
                                u = u.boundary === "start" ? t.start : t.end;
                                return {
                                    color: v,
                                    weight: x,
                                    Gb: n,
                                    p1: new sl(r, q + y),
                                    p2: new sl(r, u + p),
                                    ...__c.nl(u - q, n * x, y)
                                }
                            }
                        }).filter(__c.wb), ...a]
                    },
                    VDb = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.Qd(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.Qd(d, e => `${e.Lh}_${e.Mh}`);
                            for (const [, e] of a) {
                                const {
                                    Mh: f,
                                    Lh: g
                                } = e[0];
                                a = __c.Qd(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    Lh: g,
                                    Mh: f
                                })
                            }
                        }
                        return b
                    },
                    WDb = function(a, b, c, d) {
                        var e = __c.S9a;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                ea: k,
                                boundary: "start"
                            }, {
                                ea: k,
                                boundary: "end"
                            }] : [{
                                ea: k,
                                boundary: "start"
                            }]),
                            g = c.get().flatMap(k => a.layout.cols.last() === k ? [{
                                column: k,
                                boundary: "start"
                            }, {
                                column: k,
                                boundary: "end"
                            }] : [{
                                column: k,
                                boundary: "start"
                            }]),
                            h = new Map;
                        for (const k of b.get())
                            for (const l of c.get()) b = l && k ?
                                e.bza.QTa(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = UDb(e, a, h, f, g, d);
                        return VDb(c)
                    },
                    XDb = function(a) {
                        switch (a) {
                            case 2:
                                return O("ibdecg");
                            case 7:
                                return O("446quA");
                            case 5:
                                return O("j1fbqg");
                            case 1:
                                return O("O5i4AQ");
                            case 6:
                                return O("C0VHsg");
                            case 4:
                                return O("9ND0kg");
                            case -1:
                                return O("RWqnLA");
                            case 9:
                                return O("nQR/7w");
                            case -2:
                                return O("P23rtA");
                            case 3:
                                return O("+IXmVg");
                            default:
                                throw new E(a);
                        }
                    },
                    S5 = function() {
                        const [a] = (0, __c.rb)(() => TC());
                        return a
                    },
                    YDb = function(a, b, c) {
                        const d = [a];
                        for (; a != null &&
                            a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    ZDb = function(a) {
                        const b = a.direction === "rtl" ? -(0, __c.V9a)(a) / 2 : -(0, __c.T9a)(a) / 2,
                            c = -(0, __c.U9a)(a) / 2,
                            d = a.width + (0, __c.T9a)(a) / 2 + (0, __c.V9a)(a) / 2;
                        a = a.height + (0, __c.U9a)(a) / 2 + (0, __c.W9a)(a) / 2;
                        return Rl({
                            top: 0,
                            left: 0,
                            width: d,
                            height: a,
                            rotation: 0
                        }).translate(b, c)
                    },
                    $Db = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.N)(a, { ...b
                            })
                        })
                    },
                    cEb = function(a) {
                        var b;
                        const c = a.Ty;
                        var d = a.content;
                        const e = a.context;
                        a = a.xl;
                        __c.B((d === null || d === void 0 ? void 0 : (b = d.Le) === null || b ===
                            void 0 ? void 0 : b.type) === "formula");
                        b = d.Rh;
                        const f = {
                            type: "dom",
                            render: h => h.innerText = ""
                        };
                        switch (b.type) {
                            case 9:
                                d = f;
                                break;
                            case 6:
                                var g;
                                d = (g = c.g4) === null || g === void 0 ? void 0 : g.call(c, {
                                    content: __c.Ae(__c.rLa, { ...__c.kQa,
                                        value: b.value
                                    }),
                                    context: e,
                                    xl: a
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                d = aEb(c, e, d.gu, d.Rh.type);
                                break;
                            case 0:
                                d = {
                                    type: "react",
                                    node: T5(__c.PS, {
                                        label: XDb(b.error),
                                        children: T5(__c.Kk, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: T5(bEb, {
                                                tone: "critical"
                                            })
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new E(b);
                        }
                        return d !== null && d !== void 0 ? d : f
                    },
                    aEb = function(a, b, c, d) {
                        var e;
                        return (e = a.l4) === null || e === void 0 ? void 0 : e.call(a, {
                            context: b,
                            value: c,
                            valueType: d
                        })
                    },
                    fEb = function(a) {
                        const b = a.Ty,
                            c = a.Kf,
                            d = a.qWa,
                            e = a.Oa;
                        b.l4 = f => __c.pxa({ ...f,
                            Oa: e
                        });
                        b.bja = f => cEb({ ...f,
                            Ty: b
                        });
                        b.g4 = $Db(dEb({
                            Kf: c,
                            QH: void 0
                        }));
                        b.dja = eEb(d, e);
                        b.eja = $Db(f => T5(U5, { ...f,
                            Oa: e
                        }))
                    },
                    gEb = function({
                        label: a,
                        Xt: b,
                        width: c,
                        height: d,
                        scale: e,
                        Yla: f
                    }) {
                        return T5("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: V5(__c.Hk, {
                                className: W5("ivlMMQ", X5(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && T5(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    X5 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    iEb = function({
                        yi: a,
                        qqa: b,
                        scale: c,
                        el: d,
                        hl: e,
                        BCa: f
                    }) {
                        const g = Y5(() => {
                                const m = d === null || d === void 0 ? void 0 : d.get();
                                if (m != null && m.length !== 0) return new __c.mJ(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return T5(__c.Ik, {
                            qm: "light",
                            light: "light",
                            Ho: "light",
                            dark: "light",
                            children: m => T5("div", {
                                className: W5("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: T5("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: W5("N7J3UA", l),
                                    ref: g === null || g === void 0 ? void 0 : g.io,
                                    children: T5(__c.TS, {
                                        className: W5("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: O("ruWN9A"),
                                        children: T5(hEb, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    kEb = function() {
                        const a = new jEb,
                            b = new __c.bU,
                            c = Z5(f => {
                                const {
                                    scale: g = 1,
                                    mqa: h,
                                    size: k =
                                        "small",
                                    BCa: l = !0
                                } = f, m = $5(n => a.hl({
                                    scale: n,
                                    size: k,
                                    paa: h
                                }), [k, h]);
                                return T5(iEb, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    yi: f.sheet.direction === "rtl",
                                    qqa: f.selection != null && a.NOa(f.sheet, f.selection),
                                    hl: m,
                                    BCa: l
                                })
                            }),
                            d = Z5(f => {
                                const {
                                    scale: g = 1,
                                    mqa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    qUa: n
                                } = f, p = $5(v => a.hl({
                                    scale: v,
                                    size: k,
                                    paa: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = $5(v => m != null && a.Xca(m).has(v), [m]), t = $5(v => m != null && a.SMa(l, m).has(v), [l, m]), u = $5(v => {
                                    const x = n != null && l.layout.cols.Dd(v, n.qb) >= 0 && l.layout.cols.Dd(v, n.Qb) <=
                                        0;
                                    return r(v) ? x ? "secondary-active" : "primary-active" : t(v) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return T5(a6, { ...f,
                                    xd: g,
                                    Td: q,
                                    hl: p,
                                    nx: u,
                                    Zx: b
                                })
                            }),
                            e = Z5(f => {
                                const {
                                    scale: g = 1,
                                    mqa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    qUa: n
                                } = f, p = $5(v => a.hl({
                                    scale: v,
                                    size: k,
                                    paa: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = $5(v => m != null && a.Zca(m).has(v), [m]), t = $5(v => m != null && a.TMa(l, m).has(v), [l, m]), u = $5(v => {
                                    const x = n != null && l.layout.rows.Dd(v, n.tb) >= 0 && l.layout.rows.Dd(v, n.dc) <= 0;
                                    return r(v) ?
                                        x ? "secondary-active" : "primary-active" : t(v) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return T5(b6, { ...f,
                                    xd: q,
                                    Td: g,
                                    hl: p,
                                    nx: u,
                                    Zx: b
                                })
                            });
                        return {
                            XCa: c,
                            WCa: d,
                            YCa: e
                        }
                    },
                    lEb = function(a) {
                        const b = a.Wl,
                            c = () => null;
                        return __c.eD(d => T5(c6, { ...d,
                            Wl: b,
                            Jf: c
                        }))
                    },
                    mEb = function({
                        sheet: a,
                        O: b,
                        range: c,
                        Kh: d
                    }) {
                        d6(() => e6(() => {
                            if (d.current != null) {
                                var e, f = (e = b === null || b === void 0 ? void 0 : b.get()) !== null && e !== void 0 ? e : 1;
                                e = a.direction === "rtl";
                                e = c ? a.ia(c.qb) * f * (e ? 1 : -1) : 0;
                                var g = c ? -a.la(c.tb) *
                                    f : 0;
                                d.current.style.transform = `translate(${e}px, ${g}px)`;
                                d.current.style.width = `${a.width*f}px`;
                                d.current.style.height = `${a.height*f}px`
                            }
                        }), [a, c, d, b])
                    },
                    pEb = function({
                        onScroll: a
                    }) {
                        const b = new nEb(a);
                        return {
                            Fv: b,
                            T3: Z5(c => T5(oEb, {
                                sheet: c.sheet,
                                Fv: b,
                                children: c.children
                            }))
                        }
                    },
                    sEb = function(a) {
                        const b = a.Wl,
                            c = a.je,
                            d = a.cza,
                            e = ({
                                children: k
                            }) => k,
                            {
                                Fv: f,
                                T3: g
                            } = pEb({
                                onScroll: a.onScroll
                            });
                        class h extends qEb {
                            get eD() {
                                const k = this.props.Y.wu;
                                switch (k) {
                                    case "screen":
                                        return g;
                                    case "print":
                                        return e;
                                    default:
                                        throw new E(k);
                                }
                            }
                            componentDidMount() {
                                d.Qya(this.props.item, {
                                    ob: this.props.ob,
                                    Y: this.props.Y
                                })
                            }
                            componentWillUnmount() {
                                d.GGa(this.props.item, {
                                    ob: this.props.ob,
                                    Y: this.props.Y
                                })
                            }
                            render() {
                                d.Qya(this.props.item, {
                                    ob: this.props.ob,
                                    Y: this.props.Y
                                });
                                return T5(rEb, { ...this.props,
                                    O: this.O,
                                    Wl: b,
                                    eD: this.eD,
                                    Jf: this.Jf,
                                    cza: d,
                                    Fv: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.O = f6(() => {
                                    const l = this.props.item;
                                    var m = this.props.Y,
                                        n = m.wu;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return m;
                                        case "print":
                                            n = d.mMa(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.Hm(l,
                                                n.ob, {
                                                    zoom: m
                                                }));
                                            return n / l.config.width;
                                        default:
                                            throw new E(n);
                                    }
                                });
                                this.Jf = Z5(l => T5("div", {
                                    className: "wKvivQ",
                                    children: T5(__c.xxa, { ...this.props,
                                        ...l,
                                        je: c
                                    })
                                }))
                            }
                        }
                        return {
                            Pia: h,
                            Fv: f
                        }
                    },
                    tEb = function(a, b) {
                        if (b != null && b.qb != null && b.tb != null && b.Qb != null && b.dc != null) {
                            var c = a.ia(b.qb),
                                d = a.la(b.tb),
                                e = a.ia(b.Qb) + b.Qb.width - c;
                            a = a.la(b.dc) + b.dc.height - d;
                            return Rl({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    vEb = function(a) {
                        const b = a.Wl,
                            c = () => null;
                        return d => T5(uEb, { ...d,
                            Wl: b,
                            Jf: c
                        })
                    },
                    zEb = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                ula: b,
                                qq: b,
                                ya: {},
                                Yj: {}
                            },
                            d = g6(() => a.yt.style || c, h => {
                                var k;
                                Object.assign(a.uV.style, h.ula);
                                Object.assign(a.yD.style, h.qq);
                                Object.assign(a.Fw.style, h.ya);
                                Object.assign(a.Kw.style, h.Yj);
                                h = h === null || h === void 0 ? void 0 : (k = h.ya) === null || k === void 0 ? void 0 : k.textDecoration;
                                a.Fw.classList.toggle("OQx3PQ", h === "underline");
                                a.Fw.classList.toggle("_99ezUA", h === "line-through");
                                a.Fw.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: wEb
                            }),
                            e = g6(() => a.x$, h => {
                                a.Fw.classList.toggle("_84KvRA", !h);
                                a.uV.classList.toggle("_84KvRA", !h);
                                a.yD.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = g6(() => a.renderer, h => {
                                a.YV && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.YV = void 0, a.KR.remove()) : a.Kw.innerHTML = "";
                                switch (h === null || h === void 0 ? void 0 : h.type) {
                                    case "react":
                                        a.YV = xEb(h.node, a.KR);
                                        a.Kw.appendChild(a.KR);
                                        break;
                                    case "dom":
                                        h.render(a.Kw);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(h);
                                }
                                a.Qaa()
                            }, {
                                fireImmediately: !0
                            }),
                            g = yEb ? g6(() => a.t9, h => {
                                a.Fw.classList.toggle("qxD1GA", h)
                            }, {
                                fireImmediately: !0
                            }) :
                            void 0;
                        return () => {
                            d();
                            e();
                            f();
                            g === null || g === void 0 || g()
                        }
                    },
                    wEb = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    BEb = function(a) {
                        const b = a.ut,
                            c = a.Mv,
                            d = a.bw,
                            e = a.aCa,
                            f = a.Hn,
                            g = new AEb(c),
                            h = (k, l) => f ? QDb(f, k, l) : !1;
                        return k => T5(h6, { ...k,
                            mF: h,
                            bw: d,
                            Mv: c,
                            ut: b,
                            e$: g,
                            aCa: e === null || e === void 0 ? void 0 : e.get()
                        })
                    },
                    R5 = (a, b) => `${a.column.id}-${a.boundary}:${b.ea.id}-${b.boundary}`,
                    dEb = ({
                        Kf: a,
                        QH: b
                    }) => c => (0, __c.N)(__c.Y9a, { ...c,
                        Kf: a,
                        QH: b
                    }),
                    i6 = __webpack_require__(443763),
                    CEb = i6.Fragment,
                    T5 = i6.jsx,
                    V5 = i6.jsxs;
                var DEb = __webpack_require__(358579).Z;
                var EEb = __webpack_require__,
                    FEb = EEb(993864),
                    W5 = EEb.n_x(FEb)();
                var Z5 = __webpack_require__(446474).Pi;
                var j6 = __webpack_require__(875604),
                    k6 = j6.Component,
                    qEb = j6.PureComponent,
                    $5 = j6.useCallback,
                    d6 = j6.useEffect,
                    GEb = j6.useLayoutEffect,
                    Y5 = j6.useMemo,
                    l6 = j6.useRef,
                    HEb = j6.useState;
                var m6 = __webpack_require__(635872),
                    n6 = m6.Om,
                    IEb = m6.kq,
                    JEb = m6.YN;
                var o6 = __webpack_require__(519427),
                    p6 = o6.action,
                    e6 = o6.autorun,
                    q6 = o6.comparer,
                    f6 = o6.computed,
                    KEb = o6.createAtom,
                    r6 = o6.observable,
                    g6 = o6.reaction,
                    LEb = o6.untracked;
                var s6 = __webpack_require__(937763)._;
                var t6 = __webpack_require__(161563)._;
                var xEb = __webpack_require__(36281).createPortal;
                var MEb = Z5(a => {
                        var b, c, d = a.sheet.direction === "rtl";
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const [e] = HEb(() => TC()), f = {
                            get: $5(() => {
                                var g;
                                const h = e === null || e === void 0 ? void 0 : (g = e.current) === null || g === void 0 ? void 0 : g.getBoundingClientRect();
                                var k, l;
                                g = {
                                    top: 0,
                                    left: 0,
                                    width: (k = h === null || h === void 0 ? void 0 : h.width) !== null && k !== void 0 ? k : 0,
                                    height: (l = h === null || h === void 0 ? void 0 : h.height) !== null && l !== void 0 ? l : 0
                                };
                                return Rl(g)
                            }, [e])
                        };
                        return V5("div", {
                            className: W5("nMvVqA", d),
                            children: [V5("div", {
                                ref: DEb(a.Kh, e),
                                className: "_0YOFPg",
                                children: [T5(a.Wl, { ...a,
                                    viewport: f
                                }), T5("div", {
                                    className: W5("Gdl7fQ", d),
                                    children: (c = a.wia) === null || c === void 0 ? void 0 : (b = c.get()) === null || b === void 0 ? void 0 : b.map((g, h) => T5(g, {}, h))
                                })]
                            }), a.W5a === "visible" && V5(CEb, {
                                children: [T5("div", {
                                    className: W5("_32sKQw", d),
                                    children: T5(a.WDa, { ...a
                                    })
                                }), T5("div", {
                                    className: W5("xdIsTQ", d),
                                    children: T5(a.ZDa, { ...a
                                    })
                                }), T5("div", {
                                    className: W5("rsTRSA", d),
                                    children: T5(a.YDa, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    NEb = Z5(a => {
                        a = a.content;
                        __c.w(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.T;
                            case "text3":
                                return __c.qv.ka(a.value).cells.T();
                            default:
                                throw new E(a);
                        }
                    });
                var OEb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.996 19.995a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM13.762 9.17a.75.75 0 0 1 1.06 1.06l-1.766 1.766 1.766 1.767a.75.75 0 0 1-1.06 1.06l-1.766-1.766-1.767 1.766a.75.75 0 0 1-1.06-1.06l1.766-1.767L9.17 10.23a.75.75 0 0 1 1.06-1.06l1.767 1.766 1.766-1.766Z" fill="currentColor"/></svg>';
                var bEb = __c.ES({
                    medium: OEb
                });
                var eEb = (a, b) => __c.bxa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            pf: c
                        } = __c.zg(__c.eh, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            $a: void 0,
                            writingMode: 1,
                            Fc: "start",
                            Te: PEb(e, c),
                            Oa: b
                        })
                    }),
                    PEb = n6((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.T.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: q6.structural
                    });
                var QEb, REb, SEb, U5;
                new(QEb = class extends s6 {
                    constructor() {
                        super(U5);
                        REb()
                    }
                }, (() => {
                    class a extends(SEb = k6) {
                        static A(b) {
                            P(b, {
                                pf: f6
                            })
                        }
                        get pf() {
                            return __c.zg(__c.eh, this.props.context.attrs).pf
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = T5(this.props.Jf, {
                                content: b,
                                ea: c.container.ea,
                                col: c.container.column,
                                pf: this.pf
                            });
                            return this.pf === "wrap" ? T5("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [U5, REb]
                    } = t6(a, [], [Ic], SEb))
                })(), QEb);
                var TEb = __c.Lk * 5,
                    UEb = __c.Lk * 4;
                var jEb = class {
                    hl({
                        size: a,
                        scale: b,
                        paa: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? TEb * b : UEb * b
                    }
                    constructor() {
                        this.NOa = n6((a, b) => {
                            var c, d;
                            b = b.get();
                            return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                        });
                        this.Xca = IEb(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.$k
                        });
                        this.Zca = IEb(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 :
                                b.rows) || [])
                        }, {
                            equals: __c.$k
                        });
                        this.SMa = n6((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.Zca(b).size > 0) return new Set(a.layout.cols);
                            b = this.Xca(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.ea, e.column);
                                for (const f of YDb(c ? c.span.qb : e.column, c ? c.span.Qb : e.column, a.layout.cols))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.$k
                        });
                        this.TMa = n6((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.Xca(b).size > 0) return new Set(a.layout.rows);
                            b = this.Zca(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.ea, e.column);
                                for (const f of YDb(c ? c.span.tb : e.ea, c ? c.span.dc : e.ea, a.layout.rows))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.$k
                        })
                    }
                };
                var VEb, WEb, XEb, YEb, ZEb, $Eb, aFb = parseInt("4px", 10) || 4,
                    a6;
                new(VEb = class extends s6 {
                    constructor() {
                        super(a6);
                        XEb()
                    }
                }, (() => {
                    class a extends(YEb = k6) {
                        static A(b) {
                            P(b, {
                                yi: f6,
                                ts: f6,
                                NS: f6
                            })
                        }
                        get yi() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get ts() {
                            var b;
                            const c = (b = this.props.el) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.mJ(c)
                        }
                        get NS() {
                            var b, c, d;
                            return (c = (d = this.props).Y8) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return T5(__c.Ik, {
                                qm: "light",
                                light: "light",
                                Ho: "light",
                                dark: "light",
                                children: this.UGa
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (a6.A(this), p6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    xd: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "column", f)
                            }));
                            this.onMouseLeave = p6(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.bxa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    hl: g,
                                    nx: h,
                                    e6a: k,
                                    xd: l = 1,
                                    Td: m = 1
                                } = this.props, n = {
                                    jNbTIg: !this.yi,
                                    gtA7Dw: this.yi
                                }, p = (e === null || e === void 0 ? 0 : e.sticky) ? this.yi ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                var q;
                                const r = (e === null || e === void 0 ? 0 : e.sticky) ? (q = this.NS) !== null && q !== void 0 ? q : p : void 0;
                                let t = -1;
                                return V5("div", {
                                    style: r,
                                    className: W5("Vt2_4w", n, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.layout.cols.map(u => {
                                        var v;
                                        t++;
                                        if (!(c && f.layout.cols.Dd(u, c) < 0 || d && f.layout.cols.Dd(u, d) > 0)) return T5(bFb, {
                                            col: u,
                                            label: __c.nC(t),
                                            Xt: k === null || k === void 0 ? void 0 : (v = k.get()) === null || v === void 0 ? void 0 : v.get(u),
                                            hl: g,
                                            nx: h,
                                            xd: l,
                                            Td: m
                                        }, u.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && T5("div", {
                                        style: {
                                            width: aFb * l
                                        },
                                        className: W5("HBvlug", "ru3tFQ",
                                            n)
                                    })]
                                })
                            };
                            this.UGa = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.iA ? e.layout.$c.get(e.view.freeze.iA) : void 0,
                                    g = {
                                        jNbTIg: !this.yi,
                                        gtA7Dw: this.yi
                                    };
                                return V5("div", {
                                    ref: (d = this.ts) === null || d === void 0 ? void 0 : d.io,
                                    className: W5("xhBZaw", g, c.className),
                                    children: [f && this.bxa(void 0, f, {
                                        sticky: !0
                                    }), this.bxa(f ? e.cols.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [a6, XEb]
                    } = t6(a, [], [Ic], YEb))
                })(), VEb);
                var b6;
                new(WEb = class extends s6 {
                    constructor() {
                        super(b6);
                        ZEb()
                    }
                }, (() => {
                    class a extends($Eb = k6) {
                        static A(b) {
                            P(b, {
                                yi: f6,
                                ts: f6,
                                NS: f6
                            })
                        }
                        get yi() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get ts() {
                            var b;
                            const c = (b = this.props.el) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.mJ(c)
                        }
                        get NS() {
                            var b, c, d;
                            return (c = (d = this.props).Y8) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return T5(__c.Ik, {
                                qm: "light",
                                light: "light",
                                Ho: "light",
                                dark: "light",
                                children: this.fUa
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (b6.A(this), p6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Td: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "row", f)
                            }));
                            this.onMouseLeave = p6(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.exa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    hl: g,
                                    nx: h,
                                    xd: k = 1,
                                    Td: l = 1
                                } = this.props, m = {
                                    jNbTIg: !this.yi,
                                    gtA7Dw: this.yi
                                }, n = (e === null || e === void 0 ? 0 : e.sticky) ? {
                                    top: 0
                                } : void 0;
                                var p;
                                const q = (e === null || e === void 0 ? 0 : e.sticky) ? (p = this.NS) !== null && p !== void 0 ? p : n : void 0;
                                let r = -1;
                                return V5("div", {
                                    style: q,
                                    className: W5("_93roJg", m, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.rows.map(t => {
                                        r++;
                                        if (!(c && f.rows.Dd(t, c) < 0 || d && f.rows.Dd(t, d) > 0)) return T5(cFb, {
                                            ea: t,
                                            label: `${r+1}`,
                                            nx: h,
                                            hl: g,
                                            xd: k,
                                            Td: l
                                        }, t.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && T5("div", {
                                        style: {
                                            height: aFb * l
                                        },
                                        className: W5("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.fUa = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.bL ? e.layout.pd.get(e.view.freeze.bL) : void 0,
                                    g = {
                                        jNbTIg: !this.yi,
                                        gtA7Dw: this.yi
                                    };
                                return V5("div", {
                                    ref: (d = this.ts) === null || d === void 0 ? void 0 : d.io,
                                    className: W5("An9VeA", g, c.className),
                                    children: [f && this.exa(void 0, f, {
                                        sticky: !0
                                    }), this.exa(f ? e.rows.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [b6, ZEb]
                    } = t6(a, [], [Ic], $Eb))
                })(), WEb);
                var bFb = Z5(a => {
                        const b = a.label,
                            c = a.Xt,
                            d = a.col,
                            e = a.nx,
                            f = a.hl,
                            g = a.xd;
                        a = a.Td;
                        const h = f(a),
                            k = JEb(() => e(d));
                        return T5("div", {
                            className: W5("_83Rssw", "d2uLIA", X5(k)),
                            style: {
                                width: d.width * g,
                                height: h
                            },
                            children: T5(gEb, {
                                label: b,
                                Xt: c,
                                width: d.width,
                                height: f(1),
                                scale: a,
                                Yla: k
                            })
                        })
                    }),
                    cFb = Z5(a => {
                        const b = a.label,
                            c = a.ea,
                            d = a.hl,
                            e = a.nx,
                            f = a.xd;
                        a = a.Td;
                        const g = d(f),
                            h = JEb(() => e(c));
                        return T5("div", {
                            className: W5("_83Rssw", "JhBzyw", X5(h)),
                            style: {
                                width: g,
                                height: c.height * a
                            },
                            children: T5(gEb, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                Yla: h
                            })
                        })
                    });
                var dFb = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var eFb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var hEb = __c.ES({
                    Sp: dFb,
                    medium: eFb
                });
                var fFb, gFb, hFb, c6;
                new(fFb = class extends s6 {
                    constructor() {
                        super(c6);
                        gFb()
                    }
                }, (() => {
                    class a extends(hFb = k6) {
                        static A(b) {
                            P(b, {
                                kd: f6.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return T5(this.props.Wl, {
                                sheet: b.W.config,
                                container: b,
                                eV: "visible",
                                el: this.props.el,
                                $o: this.props.$o,
                                ap: this.props.ap,
                                O: this.props.O,
                                kd: this.kd,
                                Jf: this.props.Jf,
                                Mz: void 0
                            })
                        }
                        get kd() {
                            return __c.zC(this.props.element.W.Da, this.props.zd)
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [c6, gFb]
                    } = t6(a, [], [Ic], hFb))
                })(), fFb);
                var iFb = class {
                    constructor() {
                        this.L0 = new WeakMap;
                        this.mMa = a => this.L0.get(a);
                        this.Qya = (a, b) => {
                            this.L0.set(a, b)
                        };
                        this.GGa = (a, b) => {
                            const c = this.L0.get(a);
                            c && c.Y === b.Y && c.ob === b.ob && this.L0.delete(a)
                        }
                    }
                };
                var u6 = parseInt("4px", 10) || 4,
                    jFb = Z5(({
                        sheet: a,
                        O: b,
                        range: c,
                        Cq: d,
                        Dq: e
                    }) => {
                        if (c != null && (d || e)) {
                            var f;
                            b = (f = b === null || b === void 0 ? void 0 : b.get()) !== null && f !== void 0 ? f : 1;
                            f = a.direction === "rtl";
                            var g = {
                                ZJ0G6w: !f,
                                dOI_jA: f
                            };
                            if (d && e) return d = a.la(c.dc) + c.dc.height, a = a.ia(c.Qb) + c.Qb.width, T5("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: u6 * b
                                },
                                className: W5("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.ia(c.Qb) + c.Qb.width, T5("div", {
                                style: {
                                    width: u6 * b,
                                    height: a.height * b,
                                    ...(f ? {
                                        right: c * b
                                    } : {
                                        left: c * b
                                    })
                                },
                                className: W5("aX8dhQ", "gl1RPg",
                                    g)
                            });
                            if (e) return c = a.la(c.dc) + c.dc.height, T5("div", {
                                style: {
                                    top: c * b,
                                    width: a.width * b,
                                    height: u6 * b
                                },
                                className: W5("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var v6 = ({
                        sheet: a,
                        range: b,
                        O: c,
                        children: d
                    }) => {
                        const e = S5();
                        mEb({
                            sheet: a,
                            O: c,
                            range: b,
                            Kh: e
                        });
                        return T5("div", {
                            ref: e,
                            className: W5("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    kFb = ({
                        sheet: a,
                        range: b,
                        O: c,
                        children: d
                    }) => {
                        const e = S5();
                        mEb({
                            sheet: a,
                            O: c,
                            range: b,
                            Kh: e
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return T5("div", {
                            className: W5("nstn2A", a, "_9sodyg"),
                            children: T5("div", {
                                ref: e,
                                className: W5("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var oEb = Z5(({
                        sheet: a,
                        children: b,
                        Fv: c
                    }) => {
                        const d = $5(f => {
                                c.ida(a, f)
                            }, [c, a]),
                            e = $5(f => {
                                f != null ? c.Gv.set(a, f) : c.Gv.delete(a)
                            }, [c, a]);
                        return T5(__c.Lcb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            dC: e,
                            children: b
                        })
                    }),
                    nEb = class {
                        ida(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.jS.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.Gv = new WeakMap;
                            this.jS = r6.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = p6((b, c) => {
                                b = this.Gv.get(b);
                                b === null || b === void 0 || b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var rEb = Z5(a => {
                    const b = a.item,
                        c = a.el,
                        d = a.ze,
                        e = a.measureRef,
                        f = a.O,
                        g = a.Oqa,
                        h = a.ob,
                        k = a.$o,
                        l = a.ap,
                        m = a.Wl,
                        n = a.eD,
                        p = a.Jf,
                        q = a.zd,
                        r = a.Fv;
                    a = Y5(() => __c.zC(b.Da, q), [b, q]);
                    const t = Y5(() => Z5(({
                            sheet: y,
                            range: z,
                            Cq: A,
                            Dq: D
                        }) => T5(v6, {
                            sheet: y,
                            range: z,
                            O: f,
                            children: T5(jFb, {
                                sheet: y,
                                O: f,
                                range: z,
                                Cq: A,
                                Dq: D
                            })
                        })), [f]),
                        u = ZDb(b.config),
                        v = f.get(),
                        x = Math.min(u.width * v, h.width);
                    d6(() => e6(() => {
                        var y = b.config.view.freeze.iA ? b.config.layout.$c.get(b.config.view.freeze.iA) : void 0;
                        if (y != null)
                            if (b.config.ia(y) + y.width > x) {
                                if (y = r.Gv.get(b)) y.style.overflowX =
                                    "hidden"
                            } else if (y = r.Gv.get(b)) y.style.overflowX = "scroll"
                    }), [b, h.width, r, v, x]);
                    return T5("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: x
                        },
                        children: T5(n, {
                            sheet: b,
                            children: T5("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: u.width * v,
                                    height: u.height * v
                                },
                                children: T5("div", {
                                    className: "W1ir5A",
                                    children: T5(m, {
                                        container: d.ih(b),
                                        sheet: b.config,
                                        eV: "visible",
                                        el: c,
                                        O: f,
                                        $o: k,
                                        ap: l,
                                        kd: a,
                                        Jf: p,
                                        Mz: t
                                    })
                                })
                            })
                        })
                    })
                });
                var lFb = Z5(({
                    page: a,
                    range: b,
                    Bv: c
                }) => {
                    const d = tEb(a.sheet, b);
                    return T5("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => d == null ? c(e, f) : __c.Pl(Rl(e)).ll(d) && c(e, f))
                    })
                });
                var mFb = new __c.bU,
                    w6 = a => TEb * a,
                    nFb = () => "primary-default",
                    uEb = Z5(({
                        container: a,
                        el: b,
                        $o: c,
                        ap: d,
                        kP: e,
                        O: f,
                        viewport: g,
                        tVa: h,
                        Wl: k,
                        Jf: l,
                        Bv: m,
                        e0: n,
                        w_a: p,
                        xZa: q,
                        wZa: r
                    }) => {
                        const t = a.page,
                            u = Y5(() => Z5(({
                                sheet: v,
                                range: x,
                                Cq: y,
                                Dq: z
                            }) => V5(CEb, {
                                children: [T5(v6, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: T5(jFb, {
                                        sheet: v,
                                        O: f,
                                        range: x,
                                        Cq: y,
                                        Dq: z
                                    })
                                }), V5(kFb, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: [p && T5(p, {}), m && T5(lFb, {
                                        page: t,
                                        Bv: m,
                                        range: x
                                    }), r && T5(r, {}), n && n()]
                                }), q && x && T5(v6, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: T5(q, {
                                        range: x
                                    })
                                })]
                            })), [t, f, p, m, r, n, q]);
                        return h ? T5(oFb, {
                            container: a,
                            viewport: g,
                            O: f,
                            el: b,
                            $o: c,
                            ap: d,
                            Wl: k,
                            Jf: l,
                            Mz: u
                        }) : T5(k, {
                            sheet: t.sheet,
                            container: a,
                            eV: "hidden",
                            el: b,
                            $o: c,
                            ap: d,
                            kP: e,
                            O: f,
                            viewport: g,
                            Jf: l,
                            Mz: u
                        })
                    }),
                    oFb = Z5(a => {
                        const b = a.container,
                            c = a.O,
                            d = a.viewport,
                            e = a.el,
                            f = a.$o,
                            g = a.ap,
                            h = a.Wl,
                            k = a.Jf;
                        a = a.Mz;
                        const l = b.page,
                            m = l.sheet.direction === "rtl",
                            n = l6(null),
                            p = l6(null),
                            q = l6(null);
                        d6(() => {
                            const y = x6({
                                sheet: l.sheet,
                                n1: !0,
                                o1: !0,
                                O: c,
                                viewport: d
                            });
                            return g6(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const A = n.current;
                                if (z && A) {
                                    var D =
                                        l.sheet.direction === "rtl",
                                        F;
                                    A.style.position = (F = z.position) !== null && F !== void 0 ? F : "sticky";
                                    var G;
                                    A.style.top = (G = z.top) !== null && G !== void 0 ? G : "0px";
                                    var H, J;
                                    D ? A.style.right = (H = z.right) !== null && H !== void 0 ? H : "0px" : A.style.left = (J = z.left) !== null && J !== void 0 ? J : "0px";
                                    var L;
                                    A.style.transform = (L = z.transform) !== null && L !== void 0 ? L : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        d6(() => {
                            const y = x6({
                                sheet: l.sheet,
                                n1: !1,
                                o1: !0,
                                O: c,
                                viewport: d
                            });
                            return g6(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const A = q.current;
                                if (z && A) {
                                    var D;
                                    A.style.position =
                                        (D = z.position) !== null && D !== void 0 ? D : "sticky";
                                    var F;
                                    A.style.top = (F = z.top) !== null && F !== void 0 ? F : "0px";
                                    var G;
                                    A.style.transform = (G = z.transform) !== null && G !== void 0 ? G : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        d6(() => {
                            const y = x6({
                                sheet: l.sheet,
                                n1: !0,
                                o1: !1,
                                O: c,
                                viewport: d
                            });
                            return g6(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const A = p.current;
                                if (z && A) {
                                    var D = l.sheet.direction === "rtl",
                                        F;
                                    A.style.position = (F = z.position) !== null && F !== void 0 ? F : "sticky";
                                    var G, H;
                                    D ? A.style.right = (G = z.right) !== null && G !== void 0 ? G : "0px" : A.style.left = (H =
                                        z.left) !== null && H !== void 0 ? H : "0px";
                                    var J;
                                    A.style.transform = (J = z.transform) !== null && J !== void 0 ? J : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        const r = $5((y, z, A) => x6({
                                sheet: y,
                                n1: z,
                                o1: A,
                                O: c,
                                viewport: d
                            }), [c, d]),
                            t = Y5(() => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet]),
                            u = Y5(() => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                        var v;
                        const x = (v = c === null || c === void 0 ? void 0 : c.get()) !== null && v !== void 0 ? v : 1;
                        return V5("div", {
                            className: W5("OsKKIQ", "cbOp6Q"),
                            children: [T5("div", {
                                className: "VDFv_A",
                                children: T5(h, {
                                    sheet: l.sheet,
                                    container: b,
                                    eV: "hidden",
                                    el: e,
                                    $o: f,
                                    ap: g,
                                    kP: r,
                                    O: c,
                                    viewport: d,
                                    Jf: k,
                                    Mz: a
                                })
                            }), T5("div", {
                                ref: n,
                                className: "_688KWg",
                                children: T5(iEb, {
                                    yi: m,
                                    qqa: !1,
                                    hl: w6,
                                    scale: x
                                })
                            }), T5("div", {
                                ref: q,
                                className: "m0cT1w",
                                children: T5(a6, {
                                    sheet: l.sheet,
                                    xd: x,
                                    Td: x,
                                    hl: w6,
                                    nx: nFb,
                                    Zx: mFb,
                                    Y8: t
                                })
                            }), T5("div", {
                                ref: p,
                                className: "zm537g",
                                children: T5(b6, {
                                    sheet: l.sheet,
                                    xd: x,
                                    Td: x,
                                    hl: w6,
                                    nx: nFb,
                                    Zx: mFb,
                                    Y8: u
                                })
                            })]
                        })
                    }),
                    x6 = ({
                        sheet: a,
                        n1: b,
                        o1: c,
                        O: d,
                        viewport: e
                    }) => f6(() => {
                        var f = e === null || e === void 0 ? void 0 : __c.Zl(e.get()),
                            g;
                        const h = (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                            g !== void 0 ? g : 1;
                        if (!f) return {};
                        g = {};
                        f = new sl(f.left, f.top);
                        const k = a.direction === "rtl";
                        g.position = "relative";
                        c && (g.top = "0px");
                        b && (k ? g.right = "0px" : g.left = "0px");
                        g.transform = `translate(${b?f.x*h:0}px, ${c?f.y*h:0}px)`;
                        return g
                    });
                var AEb = class {
                    constructor(a) {
                        this.Mv = a;
                        this.vGa = __c.VV;
                        this.ULa = n6((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let t = 0; t < d.length; t++) {
                                var g = d[t],
                                    h = this.PLa(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[t + 1];
                                            if (k == null || !JM(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[t + 1];
                                            if (k == null || !JM(b, c, k)) continue;
                                            k = d[t - 1];
                                            if (k == null || !JM(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[t - 1];
                                            if (k == null || !JM(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new E(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + (h === "center" ? 0 : this.vGa);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.ia(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.ia(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.ia(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new E(h);
                                            }
                                            for (l = d.indexOf(g); l >= 0; l--) {
                                                var m = d[l],
                                                    n = l - 1 < 0 || JM(b, c, d[l - 1]),
                                                    p;
                                                if (p = m === g || JM(b, c, m)) {
                                                    p = h;
                                                    var q = k,
                                                        r = b.ia(m);
                                                    p = p < r && r < q
                                                }
                                                if (p && n) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = JM(b, c, l)) m = h, n = k, p = b.ia(l), m = m < p && p < n;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.PLa = (b, c, d) => {
                            var e, f;
                            const g =
                                b.layout.cells.get(c, d);
                            if (g && (g.ref.content.ref || g.ref.pa.ref) && g.span.tb === g.span.dc && g.span.qb === g.span.Qb) {
                                var h = this.Mv.Eq(b, c, d);
                                b = this.Mv.U8(b, c, d, __c.fh({
                                    pf: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    pf: k,
                                    textAlign: l
                                } = __c.zg(__c.eh, b);
                                if (k === "overflow") return __c.cxa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.pa.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.Rh.type : void 0)
                            }
                        }
                    }
                };
                var pFb = Z5(function(a) {
                    const b = a.sheet;
                    var c = a.xf;
                    const d = a.mYa,
                        e = a.O,
                        f = a.e$,
                        g = a.FLa;
                    a = a.overflow;
                    const h = S5();
                    GEb(() => e6(() => {
                        const p = C(h.current);
                        var q;
                        const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = $5(p => f.ULa(b, p, d, g), [f, b, d, g]);
                    var l = $5((p, q) => {
                        var r, t;
                        return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                    }, [k]);
                    c = WDb(b, c, d, l);
                    l = b.width;
                    const m = b.height,
                        n = b.direction ===
                        "rtl";
                    return T5("svg", {
                        ref: h,
                        role: "presentation",
                        className: W5("c6a1eQ", {
                            H_CtIQ: !n,
                            _8_56PQ: n,
                            _3NnFzw: a === "visible",
                            JMH1ng: a === "hidden"
                        }),
                        viewBox: `0 0 ${l} ${m}`,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        children: c.map(({
                            lines: p,
                            color: q,
                            weight: r,
                            Lh: t,
                            Mh: u
                        }) => T5("path", {
                            stroke: q,
                            strokeDasharray: t,
                            strokeDashoffset: u,
                            strokeWidth: r,
                            d: p.map(({
                                p1: v,
                                p2: x
                            }) => `M ${v.x} ${v.y} L ${x.x} ${x.y}`).join(" ")
                        }, `${q}-${r}-${t}-${u}`))
                    })
                });
                var qFb;
                qFb = Symbol.iterator;
                var rFb = class {
                    get size() {
                        return this.U0
                    }
                    get([a, b]) {
                        return (a = this.Mx.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.Mx.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.Mx.get(a);
                        d == null && (d = new Map, this.Mx.set(a, d));
                        d.set(b, c);
                        this.U0++;
                        return this
                    }
                    clear() {
                        this.Mx.clear();
                        this.U0 = 0
                    }
                    delete([a, b]) {
                        const c = this.Mx.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.U0--;
                        c.size === 0 && this.Mx.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.Mx)
                            for (const [d, e] of c) a([b, d], e)
                    }*[qFb]() {
                        for (const [a, b] of this.Mx)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.U0 = 0;
                        this.Mx = new Map
                    }
                };
                var sFb, tFb, uFb, vFb, wFb, xFb, yFb, yEb = __c.Pz("285688d5", !1),
                    zFb, AFb = class extends k6 {
                        render() {
                            const {
                                HX: a,
                                ...b
                            } = this.props, c = this.props.sheet;
                            return V5("div", {
                                ref: this.eza,
                                className: W5("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                                children: [(a === null || a === void 0 ? void 0 : a.Ika) && T5(y6, { ...b,
                                    sheet: c,
                                    range: a.Ika.range,
                                    Cq: !0,
                                    Dq: !0,
                                    className: "_0C8M3w"
                                }), (a === null || a === void 0 ? void 0 : a.iCa) && T5(y6, { ...b,
                                    sheet: c,
                                    range: a.iCa.range,
                                    Cq: !1,
                                    Dq: !0,
                                    className: "_7n44yg"
                                }), (a === null || a === void 0 ? void 0 : a.sqa) && T5(y6, { ...b,
                                    sheet: c,
                                    range: a.sqa.range,
                                    Cq: !0,
                                    Dq: !1,
                                    className: "fF5r6w"
                                }), (a === null || a === void 0 ? void 0 : a.lBa) && T5(y6, { ...b,
                                    sheet: c,
                                    range: a.lBa.range,
                                    Cq: !1,
                                    Dq: !1,
                                    className: "llILYw"
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = e6(() => {
                                var b = this.props,
                                    c = b.O;
                                b = b.sheet;
                                const d = this.eza.current;
                                d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                            });
                            __c.qc(this, [a])
                        }
                        constructor(...a) {
                            super(...a);
                            this.eza = TC()
                        }
                    };
                ({
                    c: [zFb, uFb]
                } = t6(AFb, [], [Ic], k6));
                uFb();
                var y6;
                new(sFb = class extends s6 {
                    constructor() {
                        super(y6);
                        vFb()
                    }
                }, (() => {
                    class a extends(wFb = k6) {
                        static A(b) {
                            P(b, {
                                qda: f6,
                                bounds: f6
                            })
                        }
                        get qda() {
                            const b = this.props.viewport,
                                c = this.props.Cq,
                                d = this.props.Dq;
                            return b == null || !c && !d ? b : f6(() => {
                                const e = __c.Zl(b.get());
                                return Rl({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.mF,
                                c = this.props.sheet,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.Mz,
                                g = this.props.Cq,
                                h = this.props.Dq;
                            return V5("div", {
                                ref: this.wba,
                                className: W5("i0YQww",
                                    this.props.className),
                                children: [T5("div", {
                                    ref: this.Fva,
                                    className: "vUKoKg",
                                    children: T5("div", {
                                        ref: this.Gva,
                                        children: T5(z6, {
                                            mF: b,
                                            sheet: c,
                                            container: d,
                                            bounds: e,
                                            el: this.props.el,
                                            bw: this.props.bw,
                                            Jf: this.props.Jf,
                                            UN: this.props.UN,
                                            O: this.props.O,
                                            xf: this.xf,
                                            LT: this.LT,
                                            MI: this.MI
                                        })
                                    })
                                }), T5(this.V3, {}), f && T5(f, {
                                    sheet: c,
                                    range: e,
                                    Cq: g,
                                    Dq: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = e6(() => {
                                    var h = this.props,
                                        k = h.O,
                                        l = h.sheet;
                                    const m = h.range;
                                    var n = this.wba.current;
                                    const p = this.Fva.current;
                                    h = this.Gva.current;
                                    k = k ? k.get() : 1;
                                    const q =
                                        m ? l.ia(m.Qb) + m.Qb.width - l.ia(m.qb) : l.width,
                                        r = m ? l.la(m.dc) + m.dc.height - l.la(m.tb) : l.height;
                                    n && (n.style.width = `${q*k}px`, n.style.height = `${r*k}px`);
                                    p && (p.style.width = `${q*k}px`, p.style.height = `${r*k}px`);
                                    n = l.direction === "rtl";
                                    n = m ? l.ia(m.qb) * k * (n ? 1 : -1) : 0;
                                    l = m ? -l.la(m.tb) * k : 0;
                                    h && (h.style.transform = `translate(${n}px, ${l}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.kP;
                            const e = this.props.Cq,
                                f = this.props.Dq,
                                g = e || f ? d === null || d === void 0 ? void 0 : d(c, e, f) : void 0;
                            d = e6(() => {
                                const h = this.wba.current;
                                if (h != null) {
                                    var k =
                                        e || f ? "sticky" : "relative",
                                        l = f ? "0px" : "unset",
                                        m = e ? "0px" : "unset",
                                        n = e ? "0px" : "unset",
                                        p = c.direction === "rtl";
                                    if (g == null) h.style.position = k, h.style.top = l, h.style.left = p ? "unset" : m, h.style.right = p ? n : "unset";
                                    else {
                                        const x = g.get();
                                        var q;
                                        h.style.position = (q = x.position) !== null && q !== void 0 ? q : k;
                                        var r;
                                        h.style.top = (r = x.top) !== null && r !== void 0 ? r : l;
                                        var t;
                                        h.style.left = p ? "unset" : (t = x.left) !== null && t !== void 0 ? t : m;
                                        var u;
                                        h.style.right = p ? (u = x.right) !== null && u !== void 0 ? u : n : "unset";
                                        var v;
                                        h.style.transform = (v = x.transform) !== null &&
                                            v !== void 0 ? v : "unset"
                                    }
                                }
                            });
                            __c.qc(this, [b, d])
                        }
                        get bounds() {
                            const b = this.props.sheet,
                                c = this.props.range;
                            if (b.layout.cols.empty || b.layout.rows.empty) return {
                                qb: void 0,
                                Qb: void 0,
                                tb: void 0,
                                dc: void 0
                            };
                            var d, e, f, g;
                            return {
                                qb: (d = c === null || c === void 0 ? void 0 : c.qb) !== null && d !== void 0 ? d : b.layout.cols.first(),
                                Qb: (e = c === null || c === void 0 ? void 0 : c.Qb) !== null && e !== void 0 ? e : b.layout.cols.last(),
                                tb: (f = c === null || c === void 0 ? void 0 : c.tb) !== null && f !== void 0 ? f : b.layout.rows.first(),
                                dc: (g = c === null || c === void 0 ? void 0 : c.dc) !==
                                    null && g !== void 0 ? g : b.layout.rows.last()
                            }
                        }
                        constructor(...b) {
                            super(...b);
                            this.wba = (y6.A(this), TC());
                            this.Fva = TC();
                            this.Gva = TC();
                            this.MI = new BFb;
                            this.nYa = f6(() => [...this.xf.get().keys()].sort((c, d) => this.props.sheet.layout.rows.Dd(c, d)), {
                                equals: __c.cl()
                            });
                            this.lYa = f6(() => [...this.LT.get().keys()].sort((c, d) => this.props.sheet.layout.cols.Dd(c, d)), {
                                equals: __c.cl()
                            });
                            this.V3 = Z5(() => T5(this.props.VDa, {
                                xf: this.nYa,
                                mYa: this.lYa,
                                FLa: this.MI.NLa,
                                range: this.props.range
                            }));
                            this.xf = f6(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.O,
                                    f = (c = this.qda) === null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.Fa.y - g : c.tb ? d.la(c.tb) : 0;
                                f = f ? f.br.y + g : c.dc ? d.la(c.dc) + c.dc.height : 0;
                                g = new Map;
                                for (let k = c.tb; k != null && c.dc != null && d.layout.rows.Dd(k, c.dc) <= 0; k = d.layout.rows.next(k)) {
                                    const l = d.la(k);
                                    if (!(l + k.height < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: q6.shallow
                            });
                            this.LT = f6(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.O,
                                    f = (c = this.qda) ===
                                    null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.Fa.x - g : c.qb ? d.ia(c.qb) : 0;
                                f = f ? f.br.x + g : c.Qb ? d.ia(c.Qb) + c.Qb.width : 0;
                                g = new Map;
                                for (let k = c.qb; k != null && c.Qb != null && d.layout.cols.Dd(k, c.Qb) <= 0; k = d.layout.cols.next(k)) {
                                    const l = d.ia(k);
                                    if (!(l + k.width < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: q6.shallow
                            })
                        }
                    }({
                        c: [y6, vFb]
                    } = t6(a, [], [Ic], wFb))
                })(), sFb);
                var BFb = class {
                        constructor() {
                            this.cells = new rFb;
                            this.pca = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = r6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.NLa = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                d == null && (d = r6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return (c = d.get()) === null || c === void 0 ? void 0 : c.uma
                            }
                        }
                    },
                    z6;
                new(tFb = class extends s6 {
                    constructor() {
                        super(z6);
                        xFb()
                    }
                }, (() => {
                    class a extends(yFb = k6) {
                        static A(b) {
                            P(b, {
                                PC: r6.shallow,
                                ts: f6,
                                mka: p6,
                                mW: p6.bound
                            })
                        }
                        get ts() {
                            var b;
                            const c = (b = this.props.el) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.mJ(c)
                        }
                        render() {
                            var b;
                            return V5("div", {
                                ref: DEb(this.Kh, (b = this.ts) === null || b === void 0 ? void 0 : b.io),
                                children: [T5("div", {
                                    ref: this.S5,
                                    className: "_5YlOqQ"
                                }), T5("div", {
                                    ref: this.U5,
                                    className: "_XCmKw"
                                }), this.PC.map(c => c.$Sa)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                g6(() => [this.props.sheet, this.props.LT.get(), this.props.xf.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.HGa();
                                    this.mka(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = e6(() => {
                                    var e = this.props,
                                        f = e.O;
                                    e = e.sheet;
                                    const g = this.Kh.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.PC.map(e => zEb(e));
                            __c.qc(this, [c, b, ...d])
                        }
                        HGa() {
                            const b = C(this.S5.current),
                                c = C(this.U5.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.kha.length = 0;
                            this.PC.length = 0
                        }
                        mka(b, c) {
                            const d = C(this.S5.current),
                                e = C(this.U5.current),
                                f = [],
                                g = new Map;
                            for (const h of this.kha) c.has(h.ea) ? g.set(h.ea, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new CFb(this.mW, h), d.appendChild(c.vV), e.appendChild(c.xV), this.kha.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        mW(b, c) {
                            const d = this.props.UN,
                                e = this.props.sheet,
                                f = this.props.container,
                                g = this.props.MI;
                            b = new DFb(this.props.mF, this.props.bw, this.props.Jf, d(b, c), e, b, c, f, g.pca, this.VX, this.UX);
                            __c.qc(this, zEb(b));
                            this.PC.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.Kh = (z6.A(this), TC());
                            this.S5 = TC();
                            this.U5 = TC();
                            this.kha = [];
                            this.PC = [];
                            this.VX = n6(c => {
                                const d = this.props.xf.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.UX = n6(c => {
                                const d = this.props.LT.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [z6, xFb]
                    } = t6(a, [], [Ic], yFb))
                })(), tFb);
                var CFb = class {
                        static A(a) {
                            P(a, {
                                update: p6
                            })
                        }
                        update(a, b, c) {
                            [this.vV, this.xV].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.ea = b;
                            for (const [d] of c) c = this.PC.get(d), c || (c = this.mW(d, b), this.PC.set(d, c), this.vV.appendChild(c.uV), this.xV.appendChild(c.yD)), c.update(b)
                        }
                        hide() {
                            [this.vV, this.xV].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.mW = a;
                            this.ea = b;
                            this.vV = (CFb.A(this), document.createElement("div"));
                            this.xV = document.createElement("div");
                            this.PC = new Map
                        }
                    },
                    DFb = class {
                        static A(a) {
                            P(a, {
                                YV: r6.ref,
                                ea: r6.ref,
                                t9: f6,
                                update: p6,
                                Go: f6,
                                attrs: f6.struct,
                                x$: f6,
                                qq: f6,
                                renderer: f6,
                                uma: f6.struct
                            })
                        }
                        get t9() {
                            if (!yEb) return !1;
                            const a = this.Go;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.mF(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.ea && (this.ea = a, this.yt.ea = a, this.t7 && this.t7(), this.t7 = this.pca(this.ea, this.col, this))
                        }
                        get $Sa() {
                            return this.YV
                        }
                        get Go() {
                            const a = this.sheet.layout.cells.get(this.ea, this.col);
                            return a ? a.ref :
                                void 0
                        }
                        get attrs() {
                            const a = this.yt.attrs;
                            return {
                                pf: a === null || a === void 0 ? void 0 : a.pf,
                                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                                direction: a === null || a === void 0 ? void 0 : a.direction,
                                link: a === null || a === void 0 ? void 0 : a.link
                            }
                        }
                        get x$() {
                            var a = this.yt.span;
                            if (!a) return !1;
                            if (a.tb === a.dc && a.qb === a.Qb) return !0;
                            var b = this.VX("first");
                            const c = this.VX("last"),
                                d = this.UX("first"),
                                e = this.UX("last");
                            if (!(b && c && d && e)) return !1;
                            b = this.sheet.layout.rows.Dd(a.tb, b) >= 0 && this.sheet.layout.rows.Dd(a.tb, c) <= 0 ? a.tb : b;
                            a =
                                this.sheet.layout.cols.Dd(a.qb, d) >= 0 && this.sheet.layout.cols.Dd(a.qb, e) <= 0 ? a.qb : d;
                            return b === this.ea && a === this.col
                        }
                        get qq() {
                            const a = this.sheet,
                                b = this.ea,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                sheet: a,
                                ea: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.zSa.Hc(c, b);
                                case "sheet-item":
                                    return this.container.pda.Hc(c, b);
                                case "sheet-element":
                                    return this.container.kVa.Hc(c, b);
                                default:
                                    throw new E(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.Go;
                            if (a && this.x$ && (a.content.ref ||
                                    a.pa.ref)) return this.bw({
                                context: {
                                    container: this.qq,
                                    attrs: this.attrs
                                },
                                xl: this.Qaa,
                                Jf: this.Jf
                            })
                        }
                        get uma() {
                            this.vma.reportObserved();
                            var a = LEb(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.KR : this.Kw, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            var n, p, q, r, t, u;
                            this.mF = a;
                            this.bw = b;
                            this.yt = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.pca = k;
                            this.VX = l;
                            this.UX = m;
                            this.uV = (DFb.A(this), document.createElement("div"));
                            this.yD = document.createElement("div");
                            this.Fw = document.createElement("div");
                            this.Kw = document.createElement("div");
                            this.KR = document.createElement("div");
                            this.vma = KEb("content size atom");
                            this.Qaa = p6(() => this.vma.reportChanged());
                            this.ea = g;
                            this.uV.className = "_2JFriw";
                            this.yD.className = "imy9ug";
                            this.Fw.className = W5("pDMp7w", {
                                _0yZ6Qg: ((p = this.Go) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                                qhF5uA: ((r = this.Go) === null || r === void 0 ? void 0 : (q = r.content.ref) === null ||
                                    q === void 0 ? void 0 : q.type) !== "text3" && ((u = this.Go) === null || u === void 0 ? void 0 : (t = u.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                                qxD1GA: this.t9
                            });
                            this.Kw.className = "_30B9pw";
                            this.Fw.appendChild(this.Kw);
                            this.yD.appendChild(this.Fw);
                            this.KR.className = "G7zH2w";
                            this.t7 = k(this.ea, this.col, this);
                            this.Jf = v => T5(c, { ...v,
                                xl: this.Qaa
                            })
                        }
                    };
                var EFb, FFb, GFb, h6;
                new(EFb = class extends s6 {
                    constructor() {
                        super(h6);
                        FFb()
                    }
                }, (() => {
                    class a extends(GFb = k6) {
                        static A(b) {
                            P(b, {
                                HX: f6
                            })
                        }
                        render() {
                            const {
                                mF: b,
                                sheet: c,
                                container: d,
                                el: e,
                                kP: f,
                                bw: g,
                                kd: h,
                                Jf: k,
                                viewport: l,
                                Mz: m,
                                aCa: n = !1
                            } = this.props;
                            if (!c.layout.cols.empty && !c.layout.rows.empty) return T5("div", {
                                className: W5("SNkrHw", c.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                    RaA0Nw: n
                                }),
                                ...h,
                                children: T5(zFb, {
                                    mF: b,
                                    bw: g,
                                    Jf: k,
                                    VDa: this.V3,
                                    UN: this.UN,
                                    sheet: c,
                                    container: d,
                                    el: e,
                                    kP: f,
                                    O: this.O,
                                    viewport: l,
                                    Mz: m,
                                    HX: this.HX
                                })
                            })
                        }
                        get HX() {
                            var b = this.props.sheet;
                            const c = {},
                                d = b.view.freeze.bL ? b.layout.pd.get(b.view.freeze.bL) : void 0,
                                e = b.view.freeze.iA ? b.layout.$c.get(b.view.freeze.iA) : void 0,
                                f = b.layout.rows.first(),
                                g = b.layout.rows.last(),
                                h = b.layout.cols.first(),
                                k = b.layout.cols.last();
                            if (f != null && g != null && h != null && k != null) {
                                var l = e ? b.layout.cols.next(e) : h;
                                b = d ? b.layout.rows.next(d) : f;
                                d && e && (c.Ika = {
                                    range: {
                                        qb: h,
                                        tb: f,
                                        Qb: e,
                                        dc: d
                                    }
                                });
                                d && l && (c.iCa = {
                                    range: {
                                        qb: l,
                                        tb: f,
                                        Qb: k,
                                        dc: d
                                    }
                                });
                                e && b && (c.sqa = {
                                    range: {
                                        qb: h,
                                        tb: b,
                                        Qb: e,
                                        dc: g
                                    }
                                });
                                b && l && (c.lBa = {
                                    range: {
                                        qb: l,
                                        tb: b,
                                        Qb: k,
                                        dc: g
                                    }
                                });
                                return c
                            }
                        }
                        get O() {
                            return this.props.O ?
                                this.props.O : f6(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.V3 = (h6.A(this), Z5(c => {
                                const {
                                    sheet: d,
                                    e$: e,
                                    O: f,
                                    eV: g = "hidden"
                                } = this.props;
                                return T5(v6, {
                                    sheet: d,
                                    range: c.range,
                                    O: f,
                                    children: T5(pFb, { ...c,
                                        sheet: d,
                                        O: this.O,
                                        e$: e,
                                        overflow: g
                                    })
                                })
                            }));
                            this.UN = (c, d) => new __c.vxa(this.props.Mv, this.props.ut, this.props.sheet, c, d, this.O, this.$o, this.ap);
                            this.$o = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).$o) === null || e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            };
                            this.ap = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).ap) === null ||
                                    e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            }
                        }
                    }({
                        c: [h6, FFb]
                    } = t6(a, [], [Ic], GFb))
                })(), EFb);
                __c.Cxa = {
                    VNa: function(a) {
                        const b = a.zm,
                            c = a.Oe,
                            d = a.se,
                            e = a.co,
                            f = a.Mv,
                            g = a.ut,
                            h = a.vM;
                        fEb({
                            Ty: a.Ty,
                            Kf: a.Kf,
                            qWa: a.cS,
                            Oa: a.Oa
                        });
                        const k = BEb({
                            bw: h,
                            Mv: f,
                            ut: g,
                            Hn: void 0
                        });
                        b.q4 = vEb({
                            Wl: k
                        });
                        c.W3 = lEb({
                            Wl: k
                        });
                        ({
                            Pia: a
                        } = sEb({
                            Wl: k,
                            je: e(),
                            cza: new iFb
                        }));
                        d.fm.o4 = a;
                        const {
                            XCa: l,
                            YCa: m,
                            WCa: n
                        } = kEb();
                        return {
                            Qia: Z5(p => T5(MEb, { ...p,
                                container: void 0,
                                Wl: k,
                                YDa: l,
                                ZDa: m,
                                WDa: n,
                                Jf: NEb
                            }))
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/b88343fe8e6d04d4.js.map