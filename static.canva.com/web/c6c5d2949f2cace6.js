(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [32915], {

        /***/
        88780: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(878415);
            __web_req__(914242);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var Tf = __c.Tf;
                var E = __c.E;
                var w = __c.w;
                var bIb = function(a) {
                        var b = {
                            element: void 0
                        };
                        const c = new Map;
                        for (const d in b) a[d].GN.forEach((e, f) => c.set(f, e));
                        return {
                            GN: c,
                            apply: d => {
                                const e = new Map,
                                    f = {},
                                    g = {};
                                for (const h in d) {
                                    const k = a[h].apply(d[h]);
                                    k.Lca.forEach((l, m) => e.set(m, l));
                                    f[h] = k.data;
                                    g[h] = k.xaa
                                }
                                return {
                                    Lca: e,
                                    data: f,
                                    xaa: g
                                }
                            }
                        }
                    },
                    cIb = function(a) {
                        return () => a
                    },
                    f7 = function(a, b, c, d) {
                        return new dIb(a, b, c, d)
                    },
                    g7 = function(a, b) {
                        return a === b || b.map(c => a.f$(eIb(c)))
                    },
                    gIb = function(a, b) {
                        return a.Aaa(b).map(c => new fIb(c, d => d.props[b]))
                    },
                    eIb = function(a) {
                        w(a instanceof h7);
                        return a
                    },
                    j7 = function(a, b) {
                        if (a === b) return !0;
                        switch (typeof a) {
                            case "string":
                            case "number":
                            case "boolean":
                            case "undefined":
                                return !1;
                            case "object":
                                if (typeof b !== "object" || a.kind !== b.kind) return !1;
                                switch (a.kind) {
                                    case "array":
                                        return b.kind === "array" && i7(a.items, b.items);
                                    case "set":
                                        var c;
                                        if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : i7([...a], [...b]);
                                        return c;
                                    case "map":
                                        if (c = b.kind === "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : i7([...a.keys(), ...a.values()], [...b.keys(),
                                            ...b.values()
                                        ]);
                                        return c;
                                    case "record":
                                        return b.kind === "record" && hIb(a.fields, b.fields);
                                    case "instance":
                                        return b.kind === "instance" && a.instance === b.instance;
                                    default:
                                        throw new E(a);
                                }
                            default:
                                throw new E(a);
                        }
                    },
                    i7 = function(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (!j7(a[c], b[c])) return !1;
                        return !0
                    },
                    hIb = function(a, b) {
                        if (a === b) return !0;
                        const c = Object.keys(a),
                            d = Object.keys(b),
                            e = new Set([...c, ...d]);
                        if (c.length !== e.size || d.length !== e.size) return !1;
                        for (const f of e)
                            if (!j7(a[f],
                                    b[f])) return !1;
                        return !0
                    },
                    k7 = function(a) {
                        return typeof a === "string" ? JSON.stringify(a) : String(a)
                    },
                    jIb = function(a, b) {
                        return a.map(c => b.map(d => iIb[0](c, d)))
                    },
                    lIb = function(a, b, c) {
                        return b.map(d => kIb[a](d, c))
                    },
                    l7 = function(a, b, c) {
                        switch (c.kind) {
                            case 0:
                                return mIb(c.value);
                            case 1:
                                const e = l7(a, b, c.lq);
                                return nIb[c.name].map(u => m7(u, e));
                            case 2:
                                const f = l7(a, b, c.hFa),
                                    g = l7(a, b, c.iFa);
                                return oIb[c.name].map(u => pIb(u, f, g));
                            case 3:
                                const h = c.args.map(u => u.kind !== 13 ? new qIb(l7(a, b, u)) : new rIb(l7(a, b, u.L6a)));
                                c = c.name;
                                switch (c) {
                                    case 0:
                                    case 1:
                                        var d = h.map(u => u.w8(v => v.type, v => v.type.tF()));
                                        return n7.union(...d).map(sIb[c]).map(u => tIb(u, h));
                                    default:
                                        return uIb[c].map(u => tIb(u, h))
                                }
                            case 4:
                                d = c.name;
                                const k = c.param,
                                    l = c.body,
                                    m = l7(a, b, c.LV);
                                c = m.type.tF();
                                const n = c.map(u => vIb(b, k, u, v => l7(a, v, l)));
                                return lIb(d, c, n.resultType).map(u => wIb(u, m, n));
                            case 5:
                                const p = c.entries.map(([u, v]) => [l7(a, b, u), l7(a, b, v)]);
                                c = n7.union(...p.map(([u]) => u.type));
                                d = n7.union(...p.map(([, u]) => u.type));
                                if (!g7(c, n7.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                return jIb(c, d).map(u => xIb(u, p));
                            case 6:
                                const q = Tf(c.fields, u => l7(a, b, u));
                                c = Tf(q, u => u.type);
                                return (0, yIb[0])(c).map(u => zIb(u, q));
                            case 7:
                                d = a.types.resolve(c.name);
                                if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                                const r = l7(a, b, {
                                    kind: 6,
                                    fields: c.args
                                });
                                return d.gRa.map(u => m7(u, r, {
                                    Im: !0
                                }));
                            case 8:
                                return d = l7(a, b, c.base), AIb(d, c.D9a);
                            case 9:
                                return BIb(b, c.name);
                            case 10:
                                return d = __c.Pd(c.defs, u => l7(a, b, u)), CIb(a, b, d, c.body);
                            case 11:
                                d = l7(a, b, c.test).as(n7.eg);
                                const t = l7(a, b, c.z1a);
                                c = l7(a,
                                    b, c.alternate);
                                return DIb(d, t, c);
                            case 12:
                                return l7(a, b, c.body).computed();
                            default:
                                throw new E(c);
                        }
                    },
                    mIb = function(a) {
                        switch (typeof a) {
                            case "string":
                                return o7(n7.string, a);
                            case "number":
                                return o7(n7.number, a);
                            case "boolean":
                                return o7(n7.eg, a);
                            case "undefined":
                                return o7(n7.undefined, a);
                            default:
                                throw new E(a);
                        }
                    },
                    AIb = function(a, b) {
                        return a.map(c => gIb(c, b).map(({
                            type: d,
                            get: e
                        }) => m7(new p7(c, d, e), a)))
                    },
                    BIb = function(a, b) {
                        return a.resolve(b).map(c => q7.of(c, d => d.resolve(b)))
                    },
                    CIb = function(a, b, c, d) {
                        const e = __c.Pd(c,
                                g => g.type),
                            f = __c.Pd(c, g => g.evaluate);
                        return EIb(l7(a, new r7(new Map(e), b), d), g => {
                            const h = __c.Pd(f, k => k(g));
                            return new r7(new Map(h), g)
                        })
                    },
                    DIb = function(a, b, c) {
                        return b.map((d, e) => c.map((f, g) => {
                            f = n7.union(d, f);
                            return q7.of(f, h => {
                                const k = a(h),
                                    l = e(h),
                                    m = g(h);
                                return () => k() ? l() : m()
                            })
                        }))
                    },
                    m7 = function({
                        f5: a,
                        resultType: b,
                        apply: c
                    }, d, e) {
                        const f = d.as(a);
                        return new q7(b, g => {
                            const h = f(g);
                            if (e === null || e === void 0 ? 0 : e.Im) {
                                const k = FIb(c);
                                return () => k(h())
                            }
                            return () => c(h())
                        })
                    },
                    pIb = function({
                            f5: a,
                            jFa: b,
                            resultType: c,
                            apply: d
                        },
                        e, f) {
                        const g = e.as(a),
                            h = f.as(b);
                        return new q7(c, k => {
                            const l = g(k),
                                m = h(k);
                            return () => d(l(), m())
                        })
                    },
                    tIb = function({
                        lFa: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        let e;
                        const f = d.map(g => g.w5(h => h.as(a), h => h.as(e !== null && e !== void 0 ? e : e = n7.LV(a))));
                        return new q7(b, g => {
                            const h = l => l(g),
                                k = f.map(l => l.w5(h, h));
                            return () => {
                                const l = [];
                                k.forEach(m => {
                                    m.w8(n => l.push(n()), n => l.push(...n()))
                                });
                                return c(l)
                            }
                        })
                    },
                    wIb = function({
                        itemType: a,
                        DFa: b,
                        resultType: c,
                        reduce: d
                    }, e, f) {
                        const g = f.as(a, b),
                            h = e.as(n7.LV(a));
                        return q7.of(c, k => {
                            const l = h(k),
                                m = g(k),
                                n = FIb(p => {
                                    p = p.map(cIb);
                                    return [p, p.map(m)]
                                });
                            return () => {
                                const [p, q] = n(l());
                                return d(p, q)
                            }
                        })
                    },
                    xIb = function({
                        keyType: a,
                        valueType: b,
                        resultType: c,
                        apply: d
                    }, e) {
                        const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                        return new q7(c, g => {
                            const h = f.map(([k, l]) => [k(g), l(g)]);
                            return () => d(h.map(([k, l]) => [k(), l()]))
                        })
                    },
                    zIb = function({
                        kFa: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                        if (e.length) throw Error(`too few arguments (missing ${e})`);
                        const f = GIb(a, (g, h) => d[h].as(g));
                        return new q7(b,
                            g => {
                                const h = HIb(f, k => k(g));
                                return () => c(IIb(h, k => k()))
                            })
                    },
                    o7 = function(a, b) {
                        const c = cIb(b);
                        return new q7(a, () => c)
                    },
                    EIb = function(a, b) {
                        const c = a.evaluate;
                        return new q7(a.type, d => c(b(d)))
                    },
                    vIb = function(a, b, c, d) {
                        return d(a.define(b, c)).map((e, f) => new JIb(c, e, g => h => f(g.define(b, h))))
                    },
                    FIb = function(a) {
                        let b;
                        return c => {
                            if (b && s7.Gh(b.u, c)) return b.v;
                            const d = a(c);
                            b = {
                                u: c,
                                v: d
                            };
                            return d
                        }
                    },
                    GIb = function(a, b) {
                        return Tf(a, b)
                    },
                    HIb = function(a, b) {
                        return Tf(a, b)
                    },
                    IIb = function(a, b) {
                        return Tf(a, b)
                    },
                    OIb = function(a) {
                        const b =
                            a.types,
                            c = a.values;
                        class d {
                            optional() {
                                const G = this.f2,
                                    H = this.U_,
                                    J = this.Fha,
                                    L = b.union(this.type, b.undefined);
                                return new d(L, S => S != null ? G(S) : void 0, (S, R, V) => V != null ? H(S, R, V) : void 0, (S, R, V, da) => V != null ? J(S, R, V, da) : da.delete(R))
                            }
                            Av() {
                                return new d(this.type, this.f2, this.U_, (G, H) => {
                                    throw G.error(H, "read-only field");
                                })
                            }
                            FT(G) {
                                return G ? new d(this.type, this.f2, (H, J, L) => {
                                    L = this.U_(H, J, L);
                                    L != null && G(H, J, L);
                                    return L
                                }, (H, J, L, S) => {
                                    L != null && G(H, J, L);
                                    this.Fha(H, J, L, S)
                                }) : this
                            }
                            GWa(G, H) {
                                const J = this.f2,
                                    L = this.U_,
                                    S =
                                    this.Fha;
                                return KIb(this.type, R => {
                                    const V = () => L(G, H, R.get(H));
                                    return {
                                        rMa: () => J(V()),
                                        Lpa: V,
                                        WUa: da => S(G, H, da, R)
                                    }
                                })
                            }
                            constructor(G, H, J, L) {
                                this.type = G;
                                this.f2 = H;
                                this.U_ = J;
                                this.Fha = L
                            }
                        }
                        a = new d(b.string, G => G, t7("string", G => G.value), u7("string"));
                        const e = new d(b.eg, G => G, t7("boolean", G => G.value), u7("boolean")),
                            f = (new d(b.number, G => G, t7("int32", G => G.value), u7("int32"))).FT(G => Number.isInteger(G)),
                            g = (new d(b.number, G => G, t7("double", G => G.value), u7("double"))).FT(G => Number.isFinite(G)),
                            h = new d(b.instance("Fill"),
                                G => c.instance("Fill", G), t7("fill", G => G.value), u7("fill")),
                            k = a.optional(),
                            l = e.optional(),
                            m = f.optional(),
                            n = g.optional(),
                            p = h.optional(),
                            q = a.Av(),
                            r = e.Av(),
                            t = f.Av(),
                            u = g.Av(),
                            v = h.Av(),
                            x = k.Av(),
                            y = l.Av(),
                            z = m.Av(),
                            A = n.Av(),
                            D = p.Av(),
                            F = {
                                [0]: {
                                    [0]: {
                                        string: a,
                                        boolean: e,
                                        int32: f,
                                        double: g,
                                        fill: h
                                    },
                                    [1]: {
                                        string: q,
                                        boolean: r,
                                        int32: t,
                                        double: u,
                                        fill: v
                                    }
                                },
                                [1]: {
                                    [0]: {
                                        string: k,
                                        boolean: l,
                                        int32: m,
                                        double: n,
                                        fill: p
                                    },
                                    [1]: {
                                        string: x,
                                        boolean: y,
                                        int32: z,
                                        double: A,
                                        fill: D
                                    }
                                }
                            };
                        return (G, H) => {
                            const J = new LIb(G),
                                L = Tf(H, R => R.key),
                                S = Tf(H, R => {
                                    var V =
                                        R.fwa;
                                    const da = R.Zta;
                                    switch (R.type) {
                                        case "string":
                                            V = F[V][da].string.FT(MIb(R.VB));
                                            break;
                                        case "boolean":
                                            V = F[V][da]["boolean"];
                                            break;
                                        case "double":
                                            V = F[V][da]["double"].FT(NIb(R.range));
                                            break;
                                        case "int32":
                                            V = F[V][da].int32.FT(NIb(R.range));
                                            break;
                                        case "fill":
                                            V = F[V][da].fill;
                                            break;
                                        default:
                                            throw new E(R);
                                    }
                                    return V.GWa(J, R.key)
                                });
                            return {
                                GN: new Map(Object.entries(S).map(([R, V]) => [L[R], V.type])),
                                apply: R => {
                                    const V = Tf(S, ma => ma.eval(R)),
                                        da = Tf(V, ma => ({
                                            get: ma.Lpa
                                        })),
                                        oa = Tf(V, ma => ({
                                            get: ma.Lpa,
                                            set: ma.WUa
                                        }));
                                    return {
                                        Lca: new Map(Object.entries(V).map(([ma,
                                            ya
                                        ]) => [L[ma], ya.rMa])),
                                        data: Object.create(null, da),
                                        xaa: Object.create(null, oa)
                                    }
                                }
                            }
                        }
                    },
                    t7 = function(a, b) {
                        return (c, d, e) => {
                            if (e == null) throw c.error(d, "not found");
                            if (e.type !== a) throw c.error(d, `type error: expected ${a}, was ${e.type}`);
                            return b(e)
                        }
                    },
                    u7 = function(a) {
                        return (b, c, d, e) => {
                            if (d == null) throw b.error(a, "value is nullish");
                            if (a === "string" && typeof d === "string" || a === "boolean" && typeof d === "boolean" || a === "double" && typeof d === "number" || a === "int32" && typeof d === "number") b = {
                                type: a,
                                value: d
                            };
                            else {
                                if (a === "fill" &&
                                    typeof d === "object") throw b.error(a, "Write for fill is not yet supported");
                                throw b.error(a, `type error: expected ${a}, but received ${typeof d}`);
                            }
                            e.set(c, b)
                        }
                    },
                    NIb = function(a) {
                        if (a) {
                            var b = a.min,
                                c = a.max;
                            w(b == null || c == null || b <= c);
                            return (d, e, f) => {
                                if (b != null && f < b) throw d.error(e, `value below min ${b}: ${f}`);
                                if (c != null && f > c) throw d.error(e, `value above max ${b}: ${f}`);
                            }
                        }
                    },
                    MIb = function(a) {
                        if (a) return (b, c, d) => {
                            if (!a.test(d)) throw b.error(c, `value does not match regex ${a}: '${d}'`);
                        }
                    },
                    KIb = function(a, b) {
                        return {
                            type: a,
                            eval: b
                        }
                    },
                    QIb = function() {
                        return (new PIb({})).add((a, b) => ({
                            Fill: new a("Fill", {
                                color: b.string
                            }, c => __c.zQ.create({ ...__c.BQ,
                                color: c.color
                            }))
                        })).add((a, b) => ({
                            RectElement: new a("RectElement", {
                                top: b.number,
                                left: b.number,
                                width: b.number,
                                height: b.number,
                                rotation: b.union(b.number, b.undefined),
                                fill: b.instance("Fill"),
                                R: b.union(b.array(b.number), b.undefined)
                            }, c => {
                                var d, e, f;
                                const g = __c.hL.create({ ...__c.eS,
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: (e = c.rotation) !== null && e !== void 0 ? e : __c.eS.rotation,
                                    fill: __c.BQ,
                                    R: (f = (d = c.R) === null || d === void 0 ? void 0 : d.items) !== null && f !== void 0 ? f : __c.eS.R
                                });
                                Object.defineProperties(g, {
                                    fill: {
                                        value: c.fill.instance
                                    }
                                });
                                return g
                            })
                        }))
                    },
                    v7 = function() {
                        throw Error("ref not found");
                    },
                    SIb = function(a, b) {
                        return class extends RIb {
                            componentDidCatch(c) {
                                a.error(c);
                                this.setState({
                                    hasError: !0
                                })
                            }
                            render() {
                                return this.state.hasError ? w7(__c.Kk, {
                                    background: "criticalLow",
                                    width: "full",
                                    height: "full",
                                    padding: "0.25u",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    role: "alert",
                                    children: w7(__c.Hk, {
                                        size: "xsmall",
                                        alignment: "center",
                                        children: __c.O("Q6XSow")
                                    })
                                }) : w7(b, { ...this.props
                                })
                            }
                            constructor(...c) {
                                super(...c);
                                this.state = {
                                    hasError: !1
                                }
                            }
                        }
                    },
                    XIb = function(a, b, c) {
                        const d = f => ({
                            element: f.W.Lg
                        });
                        b = bIb(b);
                        switch (c.type) {
                            case 0:
                                c = c.Pw;
                                if (typeof c === "object") {
                                    var e = a.dBa.types;
                                    e = e.LV(e.instance("RectElement"));
                                    return TIb(a, d, b, e, c, f => new UIb(() => f().map(g => g.instance)))
                                }
                                return VIb(d, b, c);
                            case 1:
                                return WIb(a, d, b, c.Component);
                            default:
                                throw new E(c);
                        }
                    },
                    TIb = function(a, b, c, d, e, f) {
                        const g =
                            a.O6(a.dBa, c, d).compile(e);
                        return {
                            type: 0,
                            Pw: h => ({
                                Za: f(g.apply(b(h)))
                            })
                        }
                    },
                    VIb = function(a, b, c) {
                        return {
                            type: 0,
                            Pw: d => c(b.apply(a(d)).data)
                        }
                    },
                    WIb = function(a, b, c, d) {
                        return {
                            type: 1,
                            Component: SIb(a.M, YIb(({
                                model: e
                            }) => {
                                const [f] = ZIb(() => c.apply(b(e)).xaa);
                                return w7(d, {
                                    data: f,
                                    Xv: a.Xv
                                })
                            }))
                        }
                    },
                    aJb = function(a) {
                        return {
                            GN: a.GN,
                            apply: $Ib(a.apply)
                        }
                    },
                    $Ib = function(a) {
                        const b = new WeakMap;
                        return c => {
                            let d = b.get(c);
                            d || (d = a(c), b.set(c, d));
                            return d
                        }
                    },
                    bJb = __webpack_require__(519427),
                    x7 = bJb.computed,
                    cJb = bJb.observable;
                var w7 = __webpack_require__(443763).jsx;
                var y7 = __webpack_require__(875604),
                    YIb = y7.memo,
                    RIb = y7.PureComponent,
                    ZIb = y7.useState;
                var p7 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.f5 = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    z7 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.f5 = a;
                            this.jFa = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    A7 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.lFa = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    eJb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = dJb;
                            this.keyType = a;
                            this.valueType = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    gJb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b) {
                            var c = fJb;
                            this.kFa = a;
                            this.resultType =
                                b;
                            this.apply = c
                        }
                    },
                    dIb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.itemType = a;
                            this.DFa = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var hJb = class {},
                    qIb = class extends hJb {
                        w5(a) {
                            return new qIb(a(this.value))
                        }
                        w8(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    rIb = class extends hJb {
                        w5(a, b) {
                            return new rIb(b(this.value))
                        }
                        w8(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var fIb = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                var h7 = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    B7 = class extends h7 {
                        f$(a) {
                            return this === a || a.zda(b => this.WP(b))
                        }
                        tF() {
                            throw Error(`${this} is not iterable`);
                        }
                        Aaa(a) {
                            var b;
                            const c = (b = this.propTypes) !== null && b !== void 0 ? b : this.propTypes = this.hZ();
                            if (!c) throw Error(`${this} is not navigable"`);
                            if (!c.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return c[a]
                        }
                        hZ() {
                            throw Error(`${this} is not navigable`);
                        }
                        D8(a) {
                            a(this)
                        }
                        zda(a) {
                            return a(this)
                        }
                        constructor() {
                            super();
                            this.kind = "simple";
                            this.propTypes =
                                void 0
                        }
                    },
                    C7 = class extends B7 {
                        WP(a) {
                            return a instanceof C7 && this.name === a.name
                        }
                        toString() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    D7 = class extends B7 {
                        WP(a) {
                            return a instanceof D7 && this.Rw === a.Rw
                        }
                        toString() {
                            return this.Rw.name
                        }
                        constructor(a) {
                            super();
                            this.Rw = a
                        }
                    },
                    E7 = class extends B7 {
                        WP(a) {
                            return a instanceof E7 && this.Rw === a.Rw && g7(this.lq, a.lq)
                        }
                        toString() {
                            return `${this.Rw}<${this.lq}>`
                        }
                        constructor(a, b) {
                            super();
                            this.Rw = a;
                            this.lq = b
                        }
                    },
                    iJb = class extends E7 {
                        tF() {
                            return this.lq
                        }
                        hZ() {
                            const a = this.lq;
                            return {
                                size: n7.number,
                                empty: n7.eg,
                                get first() {
                                    return n7.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array", a)
                        }
                    },
                    jJb = class extends E7 {
                        tF() {
                            return this.lq
                        }
                        hZ() {
                            const a = this.lq;
                            return {
                                size: n7.number,
                                empty: n7.eg,
                                get first() {
                                    return n7.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    kJb = class extends B7 {
                        WP(a) {
                            return a instanceof kJb && g7(this.key, a.key) && g7(this.value, a.value)
                        }
                        toString() {
                            return `map<${this.key}, ${this.value}>`
                        }
                        constructor(a, b) {
                            super();
                            this.key = a;
                            this.value = b
                        }
                    },
                    lJb = class extends B7 {
                        WP(a) {
                            return a instanceof
                            lJb ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && g7(this.fields[b], c)) : !1
                        }
                        hZ() {
                            return this.fields
                        }
                        toString() {
                            const a = Object.entries(this.fields);
                            return a.length ? `{ ${a.map(([b,c])=>`${b}: ${c}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a
                        }
                    },
                    F7 = class extends h7 {
                        f$(a) {
                            return this === a || this.Xj.every(b => b.f$(a))
                        }
                        tF() {
                            return n7.union(...this.Xj.map(a => a.tF()))
                        }
                        Aaa(a) {
                            return n7.union(...this.Xj.map(b => b.Aaa(a)))
                        }
                        D8(a) {
                            this.Xj.forEach(b => b.D8(a))
                        }
                        zda(a) {
                            return this.Xj.some(b =>
                                b.zda(a))
                        }
                        toString() {
                            return this.Xj.length ? this.Xj.map(a => a.toString()).join(" | ") : "never"
                        }
                        constructor(a) {
                            super();
                            this.Xj = a;
                            this.kind = "disjunction";
                            w(a.length !== 1)
                        }
                    },
                    G7 = new F7([]),
                    mJb = new C7("string"),
                    nJb = new C7("number"),
                    oJb = new C7("boolean"),
                    pJb = new C7("undefined"),
                    qJb = new F7([mJb, nJb, oJb]),
                    rJb = class {
                        get never() {
                            return G7
                        }
                        get string() {
                            return mJb
                        }
                        get number() {
                            return nJb
                        }
                        get eg() {
                            return oJb
                        }
                        get undefined() {
                            return pJb
                        }
                        get primitive() {
                            return qJb
                        }
                        optional(a) {
                            return n7.union(a, n7.undefined)
                        }
                        array(a) {
                            return new iJb(a)
                        }
                        set(a) {
                            return new jJb(a)
                        }
                        LV(a) {
                            return new F7([new iJb(a),
                                new jJb(a)
                            ])
                        }
                        map(a, b) {
                            return new kJb(a, b)
                        }
                        kc(a) {
                            return new lJb({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return G7;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) eIb(d).D8(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return G7;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return g7(d, e) ? e : g7(e, d) ? d : new F7(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => g7(d, e)) || (c.forEach(e => g7(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new F7([...c])
                        }
                    },
                    sJb = class extends rJb {
                        instance(a) {
                            return new D7(a)
                        }
                    },
                    n7 = new sJb,
                    tJb = class extends rJb {
                        instance(a) {
                            return new D7(__c.C(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var uJb, vJb, H7 = Symbol("value"),
                    I7 = class {
                        get props() {
                            var a;
                            return (a = this.wEa) !== null && a !== void 0 ? a : this.wEa = this.k5()
                        }
                    },
                    wJb = class {
                        get size() {
                            return this[H7].length
                        }
                        get empty() {
                            return this[H7].length === 0
                        }
                        get first() {
                            return this[H7][0]
                        }
                        constructor(a) {
                            this[H7] = a
                        }
                    };
                uJb = Symbol.iterator;
                var xJb = class extends I7 {
                        k5() {
                            return new wJb(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[uJb]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,k7).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    yJb = class {
                        get size() {
                            return this[H7].size
                        }
                        get empty() {
                            return this[H7].size === 0
                        }
                        get first() {
                            return this[H7][Symbol.iterator]().next().value
                        }
                        constructor(a) {
                            this[H7] = a
                        }
                    };
                vJb = Symbol.iterator;
                var zJb = class extends I7 {
                        k5() {
                            return new yJb(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[vJb]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,k7).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    AJb = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${k7(a)}]: ${k7(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    BJb = class extends I7 {
                        k5() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${k7(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    CJb = class {
                        toString() {
                            return `[instance ${this.Rw.name}]`
                        }
                        constructor(a, b) {
                            this.Rw = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    DJb = class {
                        array(a) {
                            return new xJb(a)
                        }
                        arrayOf(...a) {
                            return new xJb(a)
                        }
                        set(a) {
                            return new zJb(a)
                        }
                        map(a) {
                            return new AJb(new Map(a))
                        }
                        kc(a) {
                            return new BJb({ ...a
                            })
                        }
                    },
                    EJb = class extends DJb {
                        instance(a, b) {
                            return new CJb(a, b)
                        }
                        stringify(a) {
                            return k7(a)
                        }
                        constructor() {
                            super();
                            this.Gh = j7
                        }
                    },
                    s7 = new EJb,
                    FJb = class extends DJb {
                        instance(a, b) {
                            a = __c.C(this.classes[a]);
                            return new CJb(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var nIb = {
                        [0]: new p7(n7.number, n7.number, a => -a),
                        [1]: new p7(n7.string, n7.number, a => a.length),
                        [2]: new p7(n7.eg, n7.eg, a => !a)
                    },
                    oIb = {
                        [0]: new z7(n7.number, n7.number, n7.number, (a, b) => a + b),
                        [1]: new z7(n7.number, n7.number, n7.number, (a, b) => a - b),
                        [2]: new z7(n7.number, n7.number, n7.number, (a, b) => a * b),
                        [3]: new z7(n7.number, n7.number, n7.number, (a, b) => a / b),
                        [4]: new z7(n7.number, n7.number, n7.number, (a, b) => a % b),
                        [5]: new z7(n7.string, n7.string, n7.string, (a, b) => a + b),
                        [6]: new z7(n7.number, n7.number, n7.eg, (a, b) => a === b),
                        [7]: new z7(n7.number,
                            n7.number, n7.eg, (a, b) => a !== b),
                        [8]: new z7(n7.number, n7.number, n7.eg, (a, b) => a < b),
                        [9]: new z7(n7.number, n7.number, n7.eg, (a, b) => a <= b),
                        [10]: new z7(n7.number, n7.number, n7.eg, (a, b) => a > b),
                        [11]: new z7(n7.number, n7.number, n7.eg, (a, b) => a >= b),
                        [12]: new z7(n7.eg, n7.eg, n7.eg, (a, b) => a && b),
                        [13]: new z7(n7.eg, n7.eg, n7.eg, (a, b) => a || b)
                    },
                    uIb = {
                        [2]: new A7(n7.number, n7.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new A7(n7.number, n7.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new A7(n7.number, n7.number, a => Math.max(...a)),
                        [5]: new A7(n7.number,
                            n7.number, a => Math.min(...a)),
                        [6]: new A7(n7.string, n7.string, a => a.join(""))
                    },
                    GJb = a => s7.array(a),
                    HJb = a => s7.set(a),
                    sIb = {
                        [0]: a => new A7(a, n7.array(a), GJb),
                        [1]: a => new A7(a, n7.set(a), HJb)
                    },
                    dJb = a => s7.map(a),
                    iIb = {
                        [0]: (a, b) => new eJb(a, b, n7.map(a, b))
                    },
                    fJb = a => s7.kc(a),
                    yIb = {
                        [0]: a => new gJb(a, n7.kc(a))
                    },
                    IJb = (a, b) => s7.array(b.map(c => c())),
                    JJb = (a, b) => s7.array(b.flatMap(c => c().items)),
                    KJb = (a, b) => s7.array(a.filter((c, d) => b[d]()).map(c => c())),
                    LJb = (a, b) => b.some(c => c()),
                    MJb = (a, b) => b.every(c => c()),
                    NJb = (a, b) => {
                        var c;
                        return (c =
                            a.find((d, e) => b[e]())) === null || c === void 0 ? void 0 : c()
                    },
                    kIb = {
                        [0]: (a, b) => b.map(c => f7(a, c, n7.array(c), IJb)),
                        [1]: (a, b) => b.tF().map(c => f7(a, n7.array(c), n7.array(c), JJb)),
                        [2]: a => f7(a, n7.eg, n7.array(a), KJb),
                        [3]: a => f7(a, n7.eg, n7.eg, LJb),
                        [4]: a => f7(a, n7.eg, n7.eg, MJb),
                        [5]: a => f7(a, n7.eg, n7.optional(a), NJb)
                    };
                var r7 = class {
                    define(a, b) {
                        return new r7(new Map([
                            [a, b]
                        ]), this)
                    }
                    resolve(a) {
                        const b = this.defs.get(a);
                        if (b) return b;
                        if (this.parent) return this.parent.resolve(a);
                        throw Error(`undefined symbol: ${a}`);
                    }
                    constructor(a, b) {
                        this.defs = a;
                        this.parent = b
                    }
                };
                var PJb = (a, b, c) => {
                        const d = new r7(new Map(b.GN)),
                            e = new OJb(a);
                        return {
                            compile: f => {
                                const g = l7(e, d, f).as(c);
                                return {
                                    apply: h => {
                                        h = new r7(new Map(b.apply(h).Lca));
                                        return g(h)
                                    }
                                }
                            }
                        }
                    },
                    OJb = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    q7 = class {
                        static of (a, b) {
                            return new q7(a, b)
                        }
                        as(a) {
                            if (!g7(this.type, a)) throw Error(`inferred type ${this.type} does not match expected type: ${a}`);
                            return this.evaluate
                        }
                        computed() {
                            const a = this.evaluate;
                            return new q7(this.type, b => {
                                const c = x7(a(b), {
                                    equals: s7.Gh
                                });
                                return () => c.get()
                            })
                        }
                        map(a) {
                            return a(this.type,
                                this.evaluate)
                        }
                        constructor(a, b) {
                            this.type = a;
                            this.evaluate = b
                        }
                    },
                    JIb = class {
                        as(a, b) {
                            if (!g7(a, this.g5)) throw Error(`argument type ${a} is not assignable to parameter type: ${this.g5}`);
                            if (!g7(this.resultType, b)) throw Error(`return type ${this.resultType} is not assignable to expected type: ${b}`);
                            return this.evaluate
                        }
                        map(a) {
                            return a(this.g5, this.resultType, this.evaluate)
                        }
                        constructor(a, b, c) {
                            this.g5 = a;
                            this.resultType = b;
                            this.evaluate = c
                        }
                    };
                var PIb = class {
                        add(a) {
                            a = a(QJb, this.types);
                            return new PIb({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new tJb(this.classes);
                            this.values = new FJb(this.classes)
                        }
                    },
                    QJb = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.gRa = new p7(n7.kc(b), n7.instance(this), d => s7.instance(this, c(d.fields)))
                        }
                    };
                var LIb = class {
                    error(a, b) {
                        return Error(`widget '${this.yYa}': schema error on key '${a}': ${b}`)
                    }
                    constructor(a) {
                        this.yYa = a
                    }
                };
                var RJb = Object.freeze({
                    empty: !0,
                    count() {
                        return 0
                    },
                    toArray() {
                        return []
                    },
                    xr() {
                        return new Map
                    },
                    first() {},
                    last() {},
                    next() {
                        v7()
                    },
                    Ec() {
                        v7()
                    },
                    Dd() {
                        v7()
                    },
                    Pu() {
                        v7()
                    },
                    has() {
                        return !1
                    },
                    KA() {
                        return this
                    },
                    map() {
                        return []
                    },
                    flatMap() {
                        return []
                    },
                    filter() {
                        return []
                    },
                    forEach() {},
                    reduce(a, b) {
                        return b
                    },
                    some() {
                        return !1
                    },
                    every() {
                        return !0
                    },
                    [Symbol.iterator]() {
                        return [][Symbol.iterator]()
                    }
                });
                var SJb;
                SJb = Symbol.iterator;
                var UIb = class {
                    static A(a) {
                        __c.P(a, {
                            ud: x7,
                            ys: x7
                        })
                    }
                    get ud() {
                        return this.pFa().map(a => {
                            let b = this.xqa.get(a);
                            b == null && (b = `${this.bNa++}`, this.xqa.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get ys() {
                        const a = new Map;
                        this.ud.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    Bj(a) {
                        return __c.C(this.ys.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.ud.length
                    }
                    count() {
                        return this.ud.length
                    }
                    toArray() {
                        return this.ud.map(a => a.ref)
                    }
                    xr() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get pX() {
                        const a = this.ud[0];
                        return a && a.ref
                    }
                    get XY() {
                        const a =
                            this.ud[this.ud.length - 1];
                        return a && a.ref
                    }
                    first(a) {
                        if (!a) return this.pX;
                        const b = this.ud.find(c => a(c.ref));
                        return b && b.ref
                    }
                    last(a) {
                        if (!a) return this.XY;
                        const b = this.ud;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.ref)) return d.ref
                        }
                    }
                    next(a, b) {
                        const c = this.ud;
                        for (a = this.Bj(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Ec(a, b) {
                        const c = this.ud;
                        for (a = this.Bj(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Dd(a, b) {
                        a = this.ys.get(a);
                        b = this.ys.get(b);
                        w(a != null);
                        w(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    Pu(a) {
                        return this.ud[this.Bj(a)].id
                    }
                    has(a) {
                        return this.ys.has(a)
                    }
                    KA(a) {
                        return new __c.CP(this, a)
                    }
                    map(a) {
                        return this.ud.map(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.ud.flatMap(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.ud.filter(b => a(b.ref, b.id)).map(b => b.ref)
                    }
                    forEach(a) {
                        this.ud.forEach((b, c) => a(b.ref, b.id, c))
                    }
                    reduce(a, b) {
                        return this.ud.reduce((c, d) => a(c, d.ref, d.id), b)
                    }
                    some(a) {
                        return this.ud.some(b => a(b.ref, b.id))
                    }
                    every(a) {
                        return this.ud.every(b => a(b.ref, b.id))
                    }[SJb]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.pFa =
                            a;
                        this.bNa = (UIb.A(this), 0);
                        this.xqa = new WeakMap
                    }
                };
                var TJb = new Set,
                    UJb = {
                        Pw: () => ({
                            Za: RJb
                        })
                    },
                    VJb = class {
                        static A(a) {
                            __c.P(a, {
                                f0: cJb.shallow
                            })
                        }
                        TNa(a, b, {
                            element: c
                        }) {
                            const d = __c.C(this.mUa.q0.get(a));
                            w(d.element === b.element);
                            w(!this.f0.has(a));
                            b = {
                                element: XIb(this, b, c)
                            };
                            this.f0.set(a, b);
                            TJb.has(a) || (__c.NR.set(a, UJb), TJb.add(a));
                            return b
                        }
                        BKa(a) {
                            var b;
                            return (b = this.f0.get(a)) === null || b === void 0 ? void 0 : b.element
                        }
                        constructor(a, b, c, d, e) {
                            this.mUa = a;
                            this.dBa = b;
                            this.O6 = c;
                            this.M = d;
                            this.Xv = e;
                            this.f0 = (VJb.A(this), new Map)
                        }
                    };
                var WJb = class {
                    static A(a) {
                        __c.P(a, {
                            q0: cJb.shallow
                        })
                    }
                    UNa(a, b) {
                        w(!this.q0.has(a));
                        b = {
                            document: aJb(this.Lma(a, b.document)),
                            element: aJb(this.Lma(a, b.element))
                        };
                        this.q0.set(a, b);
                        return b
                    }
                    constructor(a) {
                        this.Lma = a;
                        this.q0 = (WJb.A(this), new Map)
                    }
                };
                __c.uAa = {
                    $Na: function(a) {
                        var b = a.M;
                        a = a.AYa;
                        var c = {
                            Ak: QIb(),
                            O6: PJb
                        };
                        const {
                            Ak: d,
                            O6: e
                        } = c;
                        c = new WJb(OIb(d));
                        b = new VJb(c, d, e, b, a);
                        return {
                            Aha: c,
                            sbb: c,
                            RT: b,
                            QT: b
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/c6c5d2949f2cace6.js.map