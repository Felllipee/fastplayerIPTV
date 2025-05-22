(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [21389], {

        /***/
        476834: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            self._5c0f058b2d917619b177d32cbc4c572b = self._5c0f058b2d917619b177d32cbc4c572b || {};
            (function(__c) {
                /*

                 Copyright The Closure Library Authors.
                 Copyright The Closure Compiler Authors.
                 SPDX-License-Identifier: Apache-2.0
                */
                var aa = function(a) {
                        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
                        for (var b = 0; b < a.length; ++b) {
                            var c = a[b];
                            if (c && c.Math == Math) return c
                        }
                        throw Error("Cannot find global object");
                    },
                    da = function(a, b) {
                        if (b) a: {
                            var c = ba;a = a.split(".");
                            for (var d = 0; d < a.length - 1; d++) {
                                var e = a[d];
                                if (!(e in c)) break a;
                                c = c[e]
                            }
                            a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && ca(c, a, {
                                configurable: !0,
                                writable: !0,
                                value: b
                            })
                        }
                    },
                    r = function(a, b) {
                        var c = [];
                        if (!a) throw Error(b == null ? "invalid argument" : ea(b, ...c));
                    },
                    ea = function(a, ...b) {
                        let c = 0;
                        return a.replace(/\{}/g, () => c < b.length ? b[c++] : "{}")
                    },
                    t = function(a, b) {
                        var c = [];
                        if (!a) throw Error(b == null ? "invalid state" : ea(b, ...c));
                    },
                    ha = function(a, b, ...c) {
                        if (a == null) throw Error(b == null ? "argument is null" : ea(b, ...c));
                        return a
                    },
                    la = function(a, b) {
                        if (!(a in ia)) {
                            const c = self.bootstrap;
                            if (!c) throw Error("Could not find bootstrap");
                            ia[a] = { ...c[a]
                            };
                            delete c[a]
                        }
                        a in ja && ja[a] != null ? a = ja[a] : (b = b(ka.required(a, ia)), a = ja[a] =
                            b);
                        return a
                    },
                    na = function() {
                        var a = window.location.search;
                        ["base", "page", "ui"].forEach(b => {
                            ma(a, `bootstrap.${b}.`)
                        })
                    },
                    ma = function(a, b) {
                        const c = new Map;
                        (new URLSearchParams(a)).forEach((d, e) => {
                            e.startsWith(b) && c.set(decodeURIComponent(e.replace(b, "").replace(/\+/g, " ")), decodeURIComponent(d.replace(/\+/g, " ")))
                        });
                        return c
                    },
                    pa = function(a) {
                        return new oa(a)
                    },
                    ra = function(a) {
                        return new qa(a)
                    },
                    sa = function(a) {
                        return a != null && a.then != null
                    },
                    va = function(a) {
                        ({
                            kf: b
                        } = {
                            kf: !1
                        });
                        var b;
                        let c = !1,
                            d;
                        return (...e) => {
                            r(e.length ===
                                0);
                            if (d == null || b && (!d.ok || c)) try {
                                c = !1, d = ta(a()), sa(d.value) && d.value.then(null, () => c = !0)
                            } catch (f) {
                                d = ua(f)
                            }
                            if (d.ok) return d.value;
                            throw d.error;
                        }
                    },
                    wa = function(a, b, c, d) {
                        return {
                            tag: c,
                            K: 2,
                            G: b,
                            default: d != null ? d : a.defaultValue,
                            defaultValue: a.defaultValue,
                            A: a.A
                        }
                    },
                    xa = function(a, b, c) {
                        return {
                            tag: c,
                            K: 3,
                            G: b,
                            defaultValue: a.defaultValue,
                            A: a.A
                        }
                    },
                    za = function(a) {
                        return (b, c, d) => {
                            const {
                                tag: e,
                                G: f,
                                W: g
                            } = u(b, c, d);
                            return {
                                K: 5,
                                tag: e,
                                G: f,
                                pa: g,
                                Oc: ya.A,
                                A: a === "object" ? "object" : a === "enum" ? "string" : a.A
                            }
                        }
                    },
                    x = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 1,
                            G: void 0,
                            sd: d,
                            value: e,
                            Fe: !1,
                            A: "string"
                        }
                    },
                    y = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 2,
                            G: d,
                            pa: e,
                            A: "object"
                        }
                    },
                    B = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 3,
                            G: d,
                            pa: e,
                            A: "object"
                        }
                    },
                    C = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 4,
                            G: d,
                            pa: e,
                            A: "object"
                        }
                    },
                    D = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e,
                            wd: f
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 2,
                            G: d,
                            pa: e,
                            default: f,
                            A: "string"
                        }
                    },
                    E = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 3,
                            G: d,
                            pa: e,
                            A: "string"
                        }
                    },
                    J = function(a) {
                        var b = {};
                        const c = va(() => {
                            const e = a();
                            var f = Object.keys(e);
                            const g = {},
                                h = {};
                            for (const k of f) switch (f = e[k], f.K) {
                                case 1:
                                    h[f.tag] = { ...f,
                                        name: k
                                    };
                                    break;
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                    g[f.tag] = { ...f,
                                        name: k
                                    };
                                    break;
                                default:
                                    throw new F(f);
                            }
                            return {
                                kind: 1,
                                hd: e,
                                Hb: Aa(e, b.Eb),
                                Te: g,
                                ye: h
                            }
                        });
                        class d {
                            static za(e) {
                                return d.qb(e, [])
                            }
                            static Wb(e, f, g) {
                                f = f.config;
                                return f.A === "Uint8Array" ? Ba(e) : f.pa ? f.pa.qb(e, g) : e
                            }
                            static S(e) {
                                return d.Pa(e, [])
                            }
                            static Db(e, f, g) {
                                f = f.config;
                                return f.A === "Uint8Array" ? Ca(e) : f.pa ?
                                    f.pa.Pa(e, g) : e
                            }
                            static Pa(e, f) {
                                var {
                                    Hb: g
                                } = c(), h = Object.create(d.prototype);
                                for (const w of g) {
                                    g = w.config;
                                    const v = w.name;
                                    var k = w.L,
                                        l = w.Z,
                                        n = k,
                                        m = e[n];
                                    m == null && l != null && e[l] != null && (n = l, m = e[n]);
                                    switch (g.K) {
                                        case 3:
                                            if (m == null) {
                                                h[v] = void 0;
                                                break
                                            } else if (!G(m, g.A)) throw Da({
                                                L: k,
                                                Z: l
                                            }, m, g.A, f);
                                            f.push(n);
                                            h[v] = d.Db(m, w, f);
                                            f.pop();
                                            break;
                                        case 2:
                                            if (m == null && g.defaultValue != null) {
                                                h[v] = g.defaultValue;
                                                break
                                            } else if (m == null || !G(m, g.A)) throw Ea({
                                                L: k,
                                                Z: l
                                            }, m, g.A, f);
                                            f.push(n);
                                            h[v] = d.Db(m, w, f);
                                            f.pop();
                                            break;
                                        case 1:
                                            var p = w.Tb;
                                            n = w.Lc;
                                            if (m == null && g.Fe) {
                                                h[v] = g.value;
                                                break
                                            }
                                            if (m === p) {
                                                h[v] = g.value;
                                                break
                                            }
                                            if (n != null && m === n) {
                                                h[v] = g.value;
                                                break
                                            }
                                            e = p;
                                            h = n;
                                            throw new TypeError(`Expected value ${h?`either "${e}" OR "${h}"`:`"${e}"`} for key ${Fa({L:k,Z:l})} found: ${JSON.stringify(m)} ${H(f)}`);
                                        case 4:
                                            if (m == null) {
                                                h[v] = [];
                                                break
                                            } else if (!Array.isArray(m)) throw Ga({
                                                L: k,
                                                Z: l
                                            }, m, g.A, f);
                                            p = Array(m.length);
                                            for (var q = 0; q < m.length; ++q) {
                                                if (!G(m[q], g.A)) throw Ea({
                                                    L: k,
                                                    Z: l
                                                }, m[q], g.A, [...f, n], q);
                                                f.push(`${n}[${q}]`);
                                                p[q] = d.Db(m[q], w, f);
                                                f.pop()
                                            }
                                            h[v] =
                                                p;
                                            break;
                                        case 5:
                                            if (m == null) {
                                                h[v] = new Map;
                                                break
                                            } else if (typeof m !== "object") throw new TypeError(`Expected Map for key ${Fa({L:k,Z:l})}, found: ${I(m)} ${H(f)}`);
                                            k = g.Oc === "number";
                                            m = Object.entries(m);
                                            l = Array(m.length);
                                            for (p = 0; p < m.length; ++p) {
                                                const [z, A] = m[p];
                                                if (k) {
                                                    if (q = Number(z), isNaN(q)) throw new TypeError(`Expected number map key, found: NaN ${H([...f,n])}`);
                                                } else q = z;
                                                if (!G(A, g.A)) throw new TypeError(`Expected ${g.A} map value for map key "${q}", found: ${I(A)} ${H([...f,n])}`);
                                                f.push(`${n}["${q}"]`);
                                                const M = d.Db(A, w, f);
                                                f.pop();
                                                l[p] = [q, M]
                                            }
                                            h[v] = new Map(l);
                                            break;
                                        default:
                                            throw new F(g);
                                    }
                                }
                                return h
                            }
                            constructor(e = {}) {
                                var {
                                    Hb: f
                                } = c();
                                for (const g of f) {
                                    f = g.config;
                                    const h = g.name,
                                        k = e[h];
                                    switch (f.K) {
                                        case 1:
                                            this[h] = f.value;
                                            break;
                                        case 2:
                                            this[h] = k == null ? f.default : k;
                                            break;
                                        case 3:
                                            this[h] = k;
                                            break;
                                        case 4:
                                            this[h] = k == null ? [] : k;
                                            break;
                                        case 5:
                                            this[h] = k == null ? new Map : k;
                                            break;
                                        default:
                                            throw new F(f);
                                    }
                                }
                            }
                        }
                        d.init = c;
                        d.qb = b.Ya ? (e, f) => {
                            throw new TypeError(`Unproducible oneof case ${H(f)}`);
                        } : (e, f) => {
                            if (e == null || typeof e !== "object") throw new TypeError(`Expected type object, found: ${I(e)} ${H(f)}`);
                            var {
                                Hb: g
                            } = c();
                            const h = {};
                            for (const m of g) {
                                g = m.config;
                                var k = m.L,
                                    l = e[m.name];
                                const p = k;
                                switch (g.K) {
                                    case 1:
                                        if (l !== g.value) throw new TypeError(`Expected value ${JSON.stringify(g.value)} for key "${k}", found: ${JSON.stringify(l)} ${H(f)}`);
                                        h[p] = m.Tb;
                                        break;
                                    case 2:
                                        if (g.defaultValue != null && l === g.defaultValue) break;
                                        f.push(p);
                                        var n = d.Wb(l, m, f);
                                        f.pop();
                                        if (!G(n, g.A)) throw Ea({
                                            L: k
                                        }, l, g.A, f);
                                        h[p] = n;
                                        break;
                                    case 3:
                                        if (l == null) break;
                                        f.push(p);
                                        n = d.Wb(l, m, f);
                                        f.pop();
                                        if (!G(n, g.A)) throw Da({
                                            L: k
                                        }, l, g.A, f);
                                        h[p] = n;
                                        break;
                                    case 4:
                                        if (l == null) break;
                                        else {
                                            if (!Array.isArray(l)) throw Ga({
                                                L: k
                                            }, l, g.A, f);
                                            if (l.length === 0) break
                                        }
                                        n = Array(l.length);
                                        for (let q = 0; q < l.length; ++q) {
                                            f.push(`${p}[${q}]`);
                                            const w = d.Wb(l[q], m, f);
                                            f.pop();
                                            if (!G(w, g.A)) throw Ea({
                                                L: k
                                            }, w, g.A, [...f, p], q);
                                            n[q] = w
                                        }
                                        h[p] = n;
                                        break;
                                    case 5:
                                        if (!(l instanceof Map)) throw new TypeError(`Expected Map for key "${k}", found: ${I(l)} ${H(f)}`);
                                        if (l.size === 0) break;
                                        k = {};
                                        for (const [q, w] of l) {
                                            if (typeof q !== g.Oc) throw new TypeError(`Expected ${g.Oc} map key, found: ${I(q)} ${H([...f,
p])}`);
                                            f.push(`${p}["${q}"]`);
                                            l = d.Wb(w, m, f);
                                            f.pop();
                                            if (!G(l, g.A)) throw new TypeError(`Expected ${g.A} map value for map key "${q}", found: ${I(l)} ${H([...f,p])}`);
                                            k[q] = l
                                        }
                                        h[p] = k;
                                        break;
                                    default:
                                        throw new F(g);
                                }
                            }
                            return h
                        };
                        return d
                    },
                    K = function(a, b) {
                        var c = {};
                        const d = va(() => {
                                var g = a();
                                const h = Object.keys(g)[0];
                                let k;
                                const l = new Map,
                                    n = new Map,
                                    m = new Map;
                                for (var p = 0; p < g[h].length; p += 2) {
                                    var q = g[h][p];
                                    const z = g[h][p + 1],
                                        A = z.init().hd[h];
                                    if (!A) throw new TypeError("Missing discriminator.");
                                    if (A.K !== 1) throw new TypeError(`Discriminator must be FieldLabel.CONSTANT, was ${A.K}.}`);
                                    var w = Ha("A?", A.G, c.Eb);
                                    const {
                                        ea: M,
                                        ya: fa
                                    } = Ha(Ia(q - 1), A.sd, c.Eb);
                                    m.set(q, {
                                        ug: z,
                                        value: A.value
                                    });
                                    l.set(A.value, z);
                                    n.set(M, z);
                                    fa && n.set(fa, z);
                                    if (k && k.L !== w.ea) throw new TypeError(`oneOf JSON keys are not consistent. ${k.L} ${w.ea}`);
                                    if (k && k.Z !== w.ya) throw new TypeError(`oneOf secondary JSON keys are not consistent. ${k.Z} ${w.ya}`);
                                    q = A.tag;
                                    k = {
                                        L: w.ea,
                                        Z: w.ya
                                    }
                                }
                                if (k == null || q == null) throw new TypeError("OneOf has no cases.");
                                g = b();
                                w = Object.keys(g);
                                p = {};
                                for (var v of w) p[g[v].tag] = { ...g[v],
                                    name: v
                                };
                                v = c.De != null ?
                                    c.De() : void 0;
                                return {
                                    kind: 2,
                                    Hb: Aa(g, c.Eb),
                                    Ie: h,
                                    yf: l,
                                    Xg: q,
                                    He: k,
                                    Yf: n,
                                    Ee: v,
                                    hd: g,
                                    Te: p,
                                    ye: {},
                                    Si: m
                                }
                            }),
                            e = (g, h) => {
                                const {
                                    Ie: k,
                                    yf: l
                                } = d(), n = g[k], m = l.get(n);
                                if (!m) throw new TypeError(`Unknown oneof deserialized case: ${JSON.stringify(n)} ${H(h)}`);
                                return m.qb(g, h)
                            },
                            f = (g, h) => {
                                const {
                                    Yf: k,
                                    He: l,
                                    Ee: n
                                } = d();
                                var m = l.Z;
                                let p = g[l.L];
                                p == null && m && (p = g[m]);
                                if (p == null && n) return n.Pa(g, h);
                                m = k.get(p);
                                if (!m) throw new TypeError(`Unknown oneof serialized case: ${JSON.stringify(p)} ${H(h)}`);
                                return m.Pa(g, h)
                            };
                        return {
                            init: d,
                            za: g =>
                                e(g, []),
                            qb: e,
                            S: g => f(g, []),
                            Pa: f
                        }
                    },
                    L = function(a, b = 0) {
                        var c = {};
                        const d = va(() => {
                                const g = a(),
                                    h = [],
                                    k = new Map,
                                    l = new Map,
                                    n = new Map,
                                    m = new Map,
                                    p = new Set;
                                let q = 0,
                                    w = 1;
                                for (; q < g.length;) {
                                    const z = w++,
                                        A = g[q];
                                    var v = Ia(A - b);
                                    q += 1;
                                    let M;
                                    const fa = g[q];
                                    typeof fa === "string" && (M = fa, q += 1);
                                    const {
                                        ea: Kb,
                                        ya: Lb
                                    } = Ha(v, M, c.Eb);
                                    v = g[q];
                                    typeof v === "object" && v.Ya && (p.add(z), q += 1);
                                    h.push(z);
                                    k.set(Kb, z);
                                    Lb && k.set(Lb, z);
                                    l.set(z, Kb);
                                    n.set(z, A);
                                    m.set(A, z)
                                }
                                return {
                                    values: h,
                                    Pd: l,
                                    hj: n,
                                    xi: m,
                                    Zf: k,
                                    Ya: p.size ? p : void 0
                                }
                            }),
                            e = (g, h, k) => {
                                const {
                                    Ya: l
                                } =
                                d();
                                if (l && l.has(g)) throw new TypeError(`Unproducible enum value: ${JSON.stringify(g)} ${k?H(k):""}`);
                                h = h.get(g);
                                if (h == null) throw new TypeError(`The proto enum serializer failed to serialize value ${JSON.stringify(g)} into JSON.
It does not recognize value ${JSON.stringify(g)} as a valid member of the TypeScript enum.
${k?H(k):""}`);
                                return h
                            },
                            f = (g, h) => {
                                const k = d().Zf.get(g);
                                if (k == null) throw new TypeError(`The proto enum deserializer failed to deserialize JSON ${JSON.stringify(g)} into an enum value.
It does not recognize JSON ${JSON.stringify(g)} as a valid JSON value encoding of the enum.
${H(h)}`);
                                return k
                            };
                        return {
                            values: () => d().values,
                            si: () => {
                                const {
                                    values: g,
                                    Ya: h
                                } = d();
                                return h == null ? g : g.filter(k => !h.has(k))
                            },
                            za: g => e(g, d().Pd, []),
                            qb: (g, h) => e(g, d().Pd, h),
                            S: g => f(g, []),
                            Pa: f
                        }
                    },
                    Aa = function(a, b) {
                        return Object.entries(a).map(([c, d]) => {
                            let e = Ia(d.tag - 1);
                            if (d.K === 1) {
                                const {
                                    ea: k,
                                    ya: l
                                } = Ha(e, d.sd, b);
                                e = "A?";
                                var f = {
                                    Tb: k,
                                    Lc: l
                                }
                            }
                            const {
                                ea: g,
                                ya: h
                            } = Ha(e, d.G, b);
                            return {
                                config: d,
                                name: c,
                                L: g,
                                Z: h,
                                Tb: f === null || f === void 0 ? void 0 : f.Tb,
                                Lc: f === null || f === void 0 ? void 0 : f.Lc
                            }
                        })
                    },
                    Ha = function(a, b, c) {
                        if (!b) {
                            if (c !==
                                void 0) throw Error("Dual Deserialization config templated but JSON full key/value wasn't");
                            return {
                                ea: a
                            }
                        }
                        if (c === void 0) return {
                            ea: b
                        };
                        if (c === 0) return {
                            ea: a,
                            ya: b
                        };
                        if (c === 1) return {
                            ea: b,
                            ya: a
                        };
                        throw Error("function should have been exhaustive, but wasn't");
                    },
                    Ga = function(a, b, c, d) {
                        return new TypeError(`Expected repeated ${c} value for key ${Fa(a)}, found: ${I(b)} ${H(d)}`)
                    },
                    Da = function(a, b, c, d) {
                        return new TypeError(`Expected optional ${c} value for key ${Fa(a)}, found: ${I(b)} ${H(d)}`)
                    },
                    Ea = function(a, b, c,
                        d, e) {
                        return new TypeError(`Expected ${c} value${e!==void 0?` at index ${e}`:""} for key ${Fa(a)}, found: ${I(b)} ${H(d)}`)
                    },
                    Fa = function(a) {
                        const b = a.L;
                        return (a = a.Z) ? `either "${b}" OR "${a}"` : `"${b}"`
                    },
                    H = function(a) {
                        return `(path: .${a.join(".")})`
                    },
                    I = function(a) {
                        return a === null ? "null" : Array.isArray(a) ? "array" : typeof a
                    },
                    Ia = function(a) {
                        if (a < 64) return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a);
                        const b = [];
                        for (; a > 0;) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a %
                            64)), a = Math.floor(a / 64);
                        return b.reverse().join("")
                    },
                    u = function(a, b, c) {
                        return typeof a === "string" ? {
                            G: a,
                            tag: b,
                            W: c,
                            wd: void 0
                        } : {
                            tag: a,
                            W: b,
                            wd: c
                        }
                    },
                    G = function(a, b) {
                        return typeof a === b || b === "Uint8Array" && typeof a === "string"
                    },
                    Ba = function(a) {
                        a = Array.from(a, b => String.fromCodePoint(b)).join("");
                        return btoa(a)
                    },
                    Ca = function(a) {
                        return Uint8Array.from(atob(a), b => b.codePointAt(0))
                    },
                    Na = async function(a, b) {
                        const c = Ja(a.tb),
                            d = a.l.ta(b.request.mode === "navigate" ? "intercept_fetch.navigate" : "intercept_fetch.other", {
                                startTime: c
                            });
                        Ka(a.xa, b);
                        try {
                            await a.l.Vb("handle_request", d, () => {
                                const e = La(a.requestHandler, b, d);
                                e != null ? (b.request.mode === "navigate" && Ma(a.xa, b, e), b.respondWith(e)) : (d.abort(), a.l.ta("intercept_fetch.unhandled", {
                                    startTime: c
                                }).end());
                                return e
                            })
                        } finally {
                            d.end()
                        }
                    },
                    Oa = function(a, b, c) {
                        b = new Headers([
                            ["X-serviceworker-error-navigation-url", b],
                            ["X-serviceworker-error-code", JSON.stringify(c)]
                        ]);
                        try {
                            fetch(a.fb, {
                                headers: b
                            })
                        } catch (d) {}
                    },
                    Pa = function(a) {
                        return a != null
                    },
                    Ra = function(a, b, c) {
                        return b != null && typeof b === "object" &&
                            b.sampleRate != null && b instanceof Error ? Qa(b.sampleRate) : c === "error" || c === "fatal" ? a.bd : a.ad
                    },
                    Qa = function(a) {
                        return Math.min(Math.max(0, a), 1)
                    },
                    Sa = async function(a, b) {
                        b = [
                            ["requestUrl", b]
                        ];
                        if (a instanceof Error && /quota/i.test(a.message)) {
                            var c, d;
                            (a = await ((d = navigator.storage) === null || d === void 0 ? void 0 : (c = d.estimate) === null || c === void 0 ? void 0 : c.call(d))) && b.push(...Object.entries(a))
                        }
                        return new Map(b)
                    },
                    Ta = async function(a, b, c) {
                        const d = new N(b instanceof Error ? b.message : String(b), .01);
                        try {
                            const e = await Sa(b,
                                    c.url),
                                f = new Map([
                                    ["requestMode", c.mode],
                                    ["requestOrigin", (new URL(c.url)).origin]
                                ]);
                            a.j.error(d, {
                                extra: e,
                                tags: f
                            })
                        } catch (e) {
                            a.j.error(d)
                        }
                    },
                    Wa = function({
                        D: {
                            j: a
                        },
                        fb: b
                    }) {
                        const c = b != null ? new Ua({
                                fb: b
                            }) : null,
                            d = new Va(a);
                        return {
                            jf: (e, f) => {
                                f.then(g => {
                                    e.mode !== "navigate" || g.ok || c === null || c === void 0 || Oa(c, e.url, g.status)
                                }).catch(g => {
                                    Ta(d, g, e);
                                    e.mode !== "navigate" || c !== null && c !== void 0 && Oa(c, e.url, -1)
                                })
                            }
                        }
                    },
                    La = function(a, b, c) {
                        try {
                            const d = a.Ic.resolve(b.request);
                            if (d == null) return a.C.Sa() ? Promise.resolve(Response.error()) :
                                void 0;
                            c.setAttribute("handler_name", d.name);
                            const e = d.handle(b, c);
                            a.Ne.jf(b.request, e);
                            return e.then(f => a.Vf.Nd(f)).catch(() => a.zf.ff(b.request))
                        } catch (d) {
                            a.j.error(new N(d instanceof Error ? d.message : String(d), .01))
                        }
                    },
                    Za = function() {
                        ({
                            userAgent: a
                        } = {
                            userAgent: self.navigator.userAgent
                        });
                        var a;
                        return a.includes("Firefox") ? new Xa : new Ya
                    },
                    $a = function(a) {
                        return new Promise(b => setTimeout(b, a))
                    },
                    ab = function(a) {
                        const b = Error(a);
                        return c => {
                            c instanceof Error && (c.stack == null || c.stack === "") && (c.stack = b.stack);
                            return c
                        }
                    },
                    bb = function(a) {
                        return new Promise((b, c) => {
                            const d = () => {
                                    a.removeEventListener("success", e);
                                    a.removeEventListener("error", g)
                                },
                                e = () => {
                                    d();
                                    b(a.result)
                                },
                                f = ab("idb promisify_request_events error"),
                                g = () => {
                                    d();
                                    c(f(a.error))
                                };
                            a.addEventListener("success", e);
                            a.addEventListener("error", g)
                        })
                    },
                    cb = async function(a, b) {
                        const c = a.J(a.cursor.request);
                        a.cursor.continue(b);
                        return c
                    },
                    eb = function(a) {
                        return new Promise((b, c) => {
                            const d = ab("idb_transaction error");
                            a.ca.addEventListener("complete", () => b());
                            a.ca.addEventListener("error",
                                f => {
                                    f = f.target;
                                    c(d((f === null || f === void 0 ? void 0 : f.error) || a.ca.error || Error("Unknown error")))
                                });
                            const e = new db;
                            a.ca.addEventListener("abort", () => {
                                if (a.ca.error instanceof Error) {
                                    var f = e.cause = a.ca.error;
                                    f = [`${f.name}`, `${f.message}`].filter(g => !!g).join(": ");
                                    e.message = `${e.message} (${f})`
                                }
                                c(e)
                            })
                        })
                    },
                    gb = function({
                        name: a,
                        version: b,
                        Ff: c,
                        fe: d
                    }) {
                        var e = indexedDB;
                        return new Promise((f, g) => {
                            try {
                                const h = e.open(a, b);
                                let k, l = !1;
                                c && h.addEventListener("upgradeneeded", m => {
                                    l || (k = new fb(h.result), c(k, m))
                                });
                                switch (d.type) {
                                    case 0:
                                        d.Df &&
                                            h.addEventListener("blocked", d.Df);
                                        h.addEventListener("success", () => {
                                            f(k !== null && k !== void 0 ? k : new fb(h.result))
                                        });
                                        break;
                                    case 1:
                                        h.addEventListener("blocked", () => {
                                            l = !0;
                                            g(Error("operation blocked due to open connections"))
                                        });
                                        h.addEventListener("success", () => {
                                            const m = h.result;
                                            l ? m.close() : (m.addEventListener("versionchange", p => {
                                                (d.ve && p.newVersion == null || d.we && p.newVersion != null) && m.close()
                                            }), f(k !== null && k !== void 0 ? k : new fb(m)))
                                        });
                                        break;
                                    default:
                                        throw new F(d);
                                }
                                const n = ab("idb_database open error");
                                h.addEventListener("error",
                                    () => {
                                        g(n(h.error))
                                    })
                            } catch (h) {
                                g(h)
                            }
                        })
                    },
                    jb = function(a) {
                        if (!(a instanceof Error)) return !1;
                        if (a.name === "QuotaExceededError" || a instanceof DOMException && a.code === 22 || a instanceof hb) return !0;
                        ib == null && (ib = [/Encountered full disk while opening backing store for indexedDB.open./i, /Failed to PutOrAdd in database because not enough space for domain/i]);
                        return ib.some(b => b.test(a.message))
                    },
                    mb = function(a) {
                        if (!self.indexedDB) return !0;
                        if (!(a instanceof Error)) return !1;
                        if (a instanceof kb || a instanceof db || a instanceof DOMException && ["AbortError", "TransactionInactiveError"].includes(a.name)) return !0;
                        lb == null && (lb = [/(transaction|operation) was aborted/i, /The database connection is closing/i, /connection to indexed database server lost/i, /internal error/i, /the transaction is inactive or finished/i, /unable to open database file on disk/i, /without an in-progress transaction/i]);
                        return lb.some(b => b.test(a.message))
                    },
                    ob = async function(a, b) {
                        const c = await a.Gf(),
                            d = () => {
                                e.connection = void 0;
                                c.removeEventListener("close", d)
                            };
                        c.addEventListener("close", d, {
                            once: !0
                        });
                        const e = new nb({
                            transaction: (f, g) => c.transaction(f, g),
                            close: () => {
                                d();
                                c.close();
                                b()
                            }
                        });
                        e.Ab = self.setTimeout(() => {
                            e.dispose()
                        }, 2500);
                        return e
                    },
                    pb = async function(a, {
                        B: b
                    }) {
                        var c;
                        const d = b != null ? (c = a.l) === null || c === void 0 ? void 0 : c.ua("idb_connection_manager.open_idb_connection", b) : void 0,
                            e = ob(a.hf, () => {
                                a.connection === e && (a.connection = void 0)
                            }).catch(f => {
                                a.connection = void 0;
                                d === null || d === void 0 || d.setStatus("error");
                                throw f;
                            }).finally(() => d === null || d === void 0 ? void 0 :
                                d.end());
                        return e
                    },
                    qb = async function(a, b, {
                        B: c
                    }) {
                        var d;
                        const e = c != null ? (d = a.l) === null || d === void 0 ? void 0 : d.ua("idb_connection_manager.get_connection", c) : void 0;
                        try {
                            if (a.connection == null || (b === null || b === void 0 ? 0 : b.We)) a.connection = pb(a, {
                                B: c
                            });
                            let f = await a.connection;
                            f.mf || (a.connection = pb(a, {
                                B: c
                            }), f = await a.connection);
                            return f
                        } catch (f) {
                            throw e === null || e === void 0 || e.setStatus("error"), f;
                        } finally {
                            e === null || e === void 0 || e.end()
                        }
                    },
                    rb = async function({
                        transaction: a,
                        H: b,
                        Y: c
                    }) {
                        try {
                            const e = await c(a.objectStore(b));
                            try {
                                var d;
                                a === null || a === void 0 || (d = a.commit) === null || d === void 0 || d.call(a)
                            } catch (f) {}
                            return e
                        } catch (e) {
                            try {
                                a === null || a === void 0 || a.abort()
                            } catch (f) {}
                            throw e;
                        }
                    },
                    O = async function(a, {
                        H: b,
                        mode: c,
                        Y: d,
                        methodName: e
                    }) {
                        var f;
                        const g = (f = a.l) === null || f === void 0 ? void 0 : f.uf({
                            methodName: e
                        });
                        try {
                            try {
                                const k = (await qb(a.md, {}, {
                                        B: g
                                    })).transaction(b, c),
                                    [l] = await Promise.all([rb({
                                        transaction: k.transaction,
                                        H: b,
                                        Y: d
                                    }), k.Sd]);
                                return l
                            } catch (k) {
                                const l = (await qb(a.md, {
                                        We: !0
                                    }, {
                                        B: g
                                    })).transaction(b, c),
                                    [n] = await Promise.all([rb({
                                        transaction: l.transaction,
                                        H: b,
                                        Y: d
                                    }), l.Sd]);
                                return n
                            }
                        } catch (k) {
                            a = k;
                            var h = a instanceof Error ? jb(a) ? new hb(a) : mb(a) ? new kb(a) : a : Error(String(a));
                            h instanceof sb || h instanceof tb || h instanceof ub || h instanceof hb || (g === null || g === void 0 || g.setAttribute("error", k instanceof Error ? k.message : String(k)), g === null || g === void 0 || g.end("error"));
                            throw h;
                        } finally {
                            g === null || g === void 0 || g.end("ok")
                        }
                    },
                    yb = function(a, b, c, d = [], e) {
                        return new vb(a, b, new wb(new xb({
                            Gf: () => gb({
                                name: a,
                                version: 1,
                                Ff: f => {
                                    f = f.createObjectStore(a, {
                                        keyPath: "key"
                                    });
                                    if (d !=
                                        null && d.length > 0)
                                        for (const {
                                                name: g,
                                                Ib: h,
                                                ...k
                                            } of d) f.createIndex(g, `${"record"}.${h}`, k)
                                },
                                fe: {
                                    type: 1,
                                    ve: !0,
                                    we: !0
                                }
                            })
                        }, e), e != null ? {
                            uf: ({
                                methodName: f
                            }) => {
                                if (!(e == null || Math.random() > .01)) return e.ta(`storage_layer.idb_database_manager.execute.${f}`, {
                                    attrs: new Map([
                                        ["sample_rate_override", 1]
                                    ]),
                                    timeout: 3E5
                                })
                            }
                        } : void 0), c)
                    },
                    zb = function(a, b, c, d, e) {
                        return yb(a, b, c, d, e)
                    },
                    Ab = async function(a) {
                        if (a.Cb != null) switch (a = await a.Cb.sc(), a) {
                            case 1:
                            case 2:
                                break;
                            case 3:
                            case void 0:
                                throw new sb;
                            default:
                                throw new F(a);
                        }
                    },
                    Db = async function(a, b, c) {
                        await Ab(a);
                        return O(a.oa, {
                            H: a.H,
                            mode: "readwrite",
                            Y: async d => {
                                await Promise.all(b.map(async e => {
                                    var f = await d.get(e);
                                    f = f ? {
                                        value: a.S(Bb(f))
                                    } : void 0;
                                    f = c(f, e);
                                    f != null ? await d.put(Cb(e, a.Xb.za(f.value))) : await d.delete(e)
                                }))
                            },
                            methodName: "updateMany"
                        })
                    },
                    Cb = function(a, b) {
                        return {
                            key: a,
                            record: b
                        }
                    },
                    Eb = function(a) {
                        if (typeof a !== "object" || a == null) throw Error("Result is not an object");
                        a = a.key;
                        if (typeof a !== "string") throw Error("Key is not a string");
                        return a
                    },
                    Bb = function(a) {
                        if (typeof a !==
                            "object" || a == null) throw Error("Result is not an object");
                        a = a.record;
                        if (a == null) throw Error("Value is undefined");
                        return a
                    },
                    Gb = async function(a) {
                        return Promise.race([(async () => {
                            try {
                                return await Fb().get("userAgent")
                            } catch (b) {
                                a.F(b)
                            }
                        })(), $a(1E4).then(() => {})])
                    },
                    Fb = function() {
                        return yb("config", {
                            za: a => a,
                            S: a => a
                        })
                    },
                    Hb = async function(a, b) {
                        const c = await a.Nf.$e();
                        if (c == null || c === a.options.bg || (new URL(b.url)).origin !== a.options.targetOrigin) return b;
                        a = b.clone();
                        a.headers.set("X-Canva-User-Agent", c);
                        return a
                    },
                    Mb = function({
                        la: a,
                        C: b,
                        D: {
                            l: c,
                            j: d
                        }
                    }) {
                        return new Ib(b, a ? new Jb({
                            $e: () => Gb(d)
                        }) : void 0, c, (...e) => self.fetch(...e))
                    },
                    Nb = function({
                        H: a,
                        ha: b,
                        ja: c
                    }) {
                        return `${b}-${c}-${a}`
                    },
                    Ob = function(a, b, c) {
                        return a.td.Ga(b, c, void 0, a.nd[b], a.l)
                    },
                    Qb = function(a, b) {
                        var c = Pb;
                        const d = a.Sc.ha,
                            e = a.Sc.ja,
                            f = Nb({
                                H: b,
                                ha: d,
                                ja: e
                            });
                        a.Uf.put(f, {
                            ha: d,
                            ja: e
                        }).catch(g => a.j.F(g));
                        return a.td.Ga(f, c, a.xe[b] ? {
                            sc: async () => a.Cb.sc(d)
                        } : void 0, a.nd[b], a.l)
                    },
                    Ub = function(a) {
                        const b = new Rb(void 0),
                            c = new Sb(void 0);
                        return new Tb(void 0, b, c, a, void 0)
                    },
                    Vb = function(a) {
                        return self.navigator.locks ? self.navigator.locks.request("page_preloader_lock", a) : a()
                    },
                    Zb = async function(a) {
                        async function b(k, l, n, m = "js") {
                            n && (l = m === "js" ? l + `\n//# sourceMappingURL=${n}` : l + `\n/*# sourceMappingURL=${n}*/`);
                            if (n = k.match(/^([0-9a-fA-F]{16,}).*$/))
                                if ([, n] = n, m = (new TextEncoder).encode(l.replace(new RegExp(n, "g"), "")), await Wb(m) !== n) throw Error(`The file named ${k} doesn't match its content hash.`);
                            h.push({
                                fileName: k,
                                content: l
                            })
                        }
                        if (!Wb) {
                            var {
                                tg: c
                            } = await __webpack_require__.me(536633).then(() =>
                                ({
                                    tg: __c.Xb
                                }));
                            Wb = c
                        }
                        if (c = Yb(a)) a = c.Ae;
                        const d = /(?:\n|^)(?:;\/\/|\/\*) __FILE_CONTENT_FOR__:(.*?)(?: \*\/)?\n/gm;
                        let e, f, g = "";
                        const h = [];
                        for (; e = d.exec(a);) g && await b(g, a.slice(f, e.index), c === null || c === void 0 ? void 0 : c.Id.shift(), c === null || c === void 0 ? void 0 : c.jd), g = e[1], f = d.lastIndex;
                        g && await b(g, a.slice(f, a.endsWith("\n") ? a.length - 1 : void 0), c === null || c === void 0 ? void 0 : c.Id.shift(), c === null || c === void 0 ? void 0 : c.jd);
                        return h
                    },
                    Yb = function(a) {
                        var b = a.endsWith("\n") ? a.length - 1 : a.length;
                        const c = a.lastIndexOf("\n",
                            b);
                        if (b = a.slice(c + 1, b).match(/\/(\/|\*)# sourceMappingURL=.*\/chunk-batch-sm\/(.*?)(?: \*\/)?$/)) {
                            var [, d, e] = b;
                            b = d === "/" ? "js" : "css";
                            return {
                                Id: e.split("+").map(f => f.split("_")[1]),
                                jd: b,
                                Ae: a.slice(0, c)
                            }
                        }
                    },
                    ac = async function(a, {
                        urls: b,
                        Tf: c
                    }) {
                        const d = [];
                        await Db(a.db, b, (e, f) => {
                            e = e === null || e === void 0 ? void 0 : e.value;
                            e == null && (e = new $b({
                                Fc: [],
                                Ra: !1,
                                Kb: void 0
                            }));
                            e.Ra === !1 && d.push(f);
                            e.Uc.add(c);
                            e.Kb = Date.now();
                            return {
                                value: e
                            }
                        });
                        return {
                            mg: d
                        }
                    },
                    bc = async function(a, b, c) {
                        await a.db.update(b, d => {
                            d = d === null || d ===
                                void 0 ? void 0 : d.value;
                            d == null && (d = new $b({
                                Fc: [],
                                Ra: !1,
                                Kb: Date.now()
                            }));
                            d.Ra = !0;
                            return {
                                value: d
                            }
                        });
                        try {
                            await (await a.rc()).put(b, c)
                        } catch (d) {
                            throw a.db.update(b, e => {
                                e = e === null || e === void 0 ? void 0 : e.value;
                                if (e != null) return e.Ra = !1, {
                                    value: e
                                }
                            }).catch(() => {}), d;
                        }
                    },
                    cc = async function(a, b, c) {
                        if (b.ok) {
                            var d = await b.clone().text(),
                                e = [];
                            try {
                                e = (await a.l.ob("chunk_composing_route.extract_files_from_batch_content", c, async () => a.ue.Re(d))).map(({
                                    fileName: f,
                                    content: g
                                }) => ({
                                    url: `${a.N}/${f}`,
                                    response: new Response(g, {
                                        headers: b.headers
                                    })
                                }))
                            } catch (f) {
                                a.j.F(f);
                                return
                            }
                            try {
                                await a.l.ob("chunk_composing_route.cache_chunks", c, async () => a.re.qe(e))
                            } catch (f) {
                                a.j.F(f)
                            }
                        }
                    },
                    fc = function({
                        N: a,
                        C: b,
                        I: c,
                        D: d
                    }) {
                        const e = {
                                Re: Zb
                            },
                            f = Ub(d.j),
                            g = new dc(f, d.l);
                        return {
                            te: new ec(b, a, c, {
                                qe: async h => {
                                    await Vb(async () => {
                                        const k = new Map(h.map(({
                                                url: n,
                                                response: m
                                            }) => [n, m])),
                                            {
                                                mg: l
                                            } = await ac(g, {
                                                urls: [...k.keys()],
                                                Tf: ""
                                            });
                                        for (const n of l) {
                                            if (!k.has(n)) throw Error(`Response for ${n} not found`);
                                            await bc(g, n, k.get(n))
                                        }
                                    })
                                }
                            }, e, d.j, d.l)
                        }
                    },
                    hc = async function(a,
                        b, c) {
                        c = await a.wf.match(b.request.url, {
                            B: c
                        });
                        return c == null ? null : a.Ub != null && b.request.headers.has("range") ? gc(a.Ub, b.request, c) : c
                    },
                    ic = function({
                        start: a,
                        end: b,
                        ee: c
                    }) {
                        r(a == null || a >= 0, "Range start and end must be within the bounds of the blob");
                        r(b == null || b <= c, "Range start and end must be within the bounds of the blob");
                        if (a != null && b != null) return {
                            start: a,
                            end: b + 1
                        };
                        if (a != null && b == null) return {
                            start: a,
                            end: c
                        };
                        if (a == null && b != null) return {
                            start: c - b,
                            end: c
                        };
                        throw Error(`Invalid range. Start: ${a}, end: ${b}`);
                    },
                    gc = async function(a, b, c) {
                        try {
                            const e = b.headers.get("range");
                            if (e == null) throw Error("Range header is required");
                            const f = await c.blob();
                            var d;
                            const [, g, h] = (d = jc.exec(e)) !== null && d !== void 0 ? d : [];
                            if (g == null && h == null) throw Error(`invalid-range-header: ${e}`);
                            const {
                                start: k,
                                end: l
                            } = {
                                start: g == null ? void 0 : Number(g),
                                end: h == null ? void 0 : Number(h)
                            }, n = ic({
                                start: k,
                                end: l,
                                ee: f.size
                            }), m = f.slice(n.start, n.end), p = m.size, q = new Response(m, {
                                status: 206,
                                headers: c.headers
                            });
                            q.headers.set(...kc);
                            q.headers.set("Content-Length",
                                p.toString());
                            q.headers.set("Content-Range", `bytes ${n.start}-${n.end-1}/${f.size}`);
                            return q
                        } catch (e) {
                            return a.j.F(e), new Response("", {
                                status: 416
                            })
                        }
                    },
                    mc = function({
                        j: a
                    }) {
                        return {
                            Ub: new lc({
                                j: a
                            })
                        }
                    },
                    pc = function({
                        C: a,
                        ma: b,
                        D: {
                            j: c,
                            l: d
                        },
                        I: e
                    }) {
                        d = new nc({
                            cacheName: "media",
                            Rc(f) {
                                const {
                                    origin: g,
                                    pathname: h
                                } = new URL(f);
                                return g + h
                            }
                        }, c, d);
                        ({
                            Ub: b
                        } = b ? mc({
                            j: c
                        }) : {});
                        return {
                            Ge: new oc(a, d, b, e)
                        }
                    },
                    rc = function({
                        N: a,
                        D: {
                            j: b,
                            l: c
                        },
                        C: d,
                        I: e
                    }) {
                        b = new nc({
                            cacheName: "assets-2"
                        }, b, c);
                        return {
                            Jf: new qc({
                                N: a
                            }, d, e, b)
                        }
                    },
                    tc = function({
                        D: {
                            ub: a
                        }
                    }) {
                        a =
                            Qb(a, "homepage_bootstraps");
                        return new sc({
                            rb: !1
                        }, a)
                    },
                    uc = function({
                        D: {
                            ub: a
                        }
                    }) {
                        a = Qb(a, "editor_page_bootstraps");
                        return new sc({
                            rb: !1
                        }, a)
                    },
                    vc = function({
                        D: {
                            ub: a
                        }
                    }) {
                        a = Ob(a, "offline_fallback_bootstrap", Pb);
                        return new sc({
                            rb: !0
                        }, a)
                    },
                    wc = function({
                        tc: a
                    }) {
                        return {
                            ib: async b => {
                                const c = await a();
                                if (c != null) return tc({
                                    D: {
                                        ub: c
                                    }
                                }).ib(b)
                            }
                        }
                    },
                    xc = function({
                        tc: a
                    }) {
                        return {
                            ib: async b => {
                                const c = await a();
                                if (c != null) return uc({
                                    D: {
                                        ub: c
                                    }
                                }).ib(b)
                            }
                        }
                    },
                    zc = function(a) {
                        r(a.length > 0);
                        r(a.every(b => b.indexOf("?") < 0));
                        return new yc(["",
                            ...a.map(encodeURIComponent)
                        ].join("/"))
                    },
                    Ac = function(a, b) {
                        r(!0);
                        r(!a.Va.has("ui"));
                        if (b != null)
                            if (Array.isArray(b)) {
                                b = b.filter(Pa);
                                if (b.length === 0) return a;
                                r(b.every(c => typeof c === "number" || typeof c === "string"));
                                a.Va.set("ui", b)
                            } else if (typeof b === "boolean") a.Va.set("ui", b || String(b));
                        else if (typeof b === "number" || typeof b === "string") a.Va.set("ui", String(b));
                        else throw Error(`invalid param value type: ${typeof b}`);
                        return a
                    },
                    Bc = function(a) {
                        if (a.Va.size === 0) return a.path;
                        const b = Array.from(a.Va.entries()).map(([c,
                            d
                        ]) => d === !0 ? `${encodeURIComponent(c)}` : Array.isArray(d) ? d.map(e => `${encodeURIComponent(c)}=${encodeURIComponent(e)}`).join("&") : `${encodeURIComponent(c)}=${encodeURIComponent(d)}`).join("&");
                        return `${a.path}?${b}`
                    },
                    Cc = function(a) {
                        a = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(a);
                        if (!(a == null || a.length < 2)) {
                            var b = a[2];
                            (new Set(["edit", "remix", "view", "watch"])).has(a[2]) && (b = void 0);
                            return {
                                id: a[1],
                                Ch: b
                            }
                        }
                    },
                    Dc = function({
                        R: a,
                        rf: b
                    }) {
                        const c = b.Lb.app;
                        return (c === "home" ? ["settings", "home"] : [c]).includes(a.app) ?
                            a.locale === b.locale : !1
                    },
                    Ec = function({
                        app: a,
                        commit: b
                    }) {
                        return `${a}-${b}`
                    },
                    Fc = async function(a, b, c, d, e) {
                        b = Ec({
                            app: b,
                            commit: c
                        });
                        let f;
                        try {
                            f = await a.fa.get(b)
                        } catch (g) {
                            if (g instanceof tb) {
                                a.fa.delete(b);
                                return
                            }
                            throw g;
                        }
                        if (a = f != null) a = f, a.variant !== d ? a = !1 : (d = Date.now() / 1E3, a = (e === null || e === void 0 || !e.rb) && a.timestamp + 1209600 < d ? !1 : !0);
                        if (a) return f
                    },
                    Hc = async function(a, b, c) {
                        var d = ha(a.ge.get(b));
                        b = a.Kf.normalizeUrl({
                            url: c,
                            app: b
                        });
                        d = await d.ib(b);
                        if (d != null && (b = Gc.S(JSON.parse(d.Ba)), a = await Fc(a.sf, d.app,
                                b.commit, b.pe, {
                                    rb: c.href === a.options.V
                                }), a != null && Dc({
                                R: d,
                                rf: a
                            }))) return {
                            Ba: b,
                            nb: d,
                            Lb: a.Lb,
                            Mc: a.Mc
                        }
                    },
                    Oc = function({
                        V: a,
                        D: {
                            l: b,
                            j: c
                        }
                    }) {
                        const d = Ub(c);
                        var e = async () => {
                                var h = await Ob(d, "active_user_brand_hint_for_service_worker_to_serve_pages", Ic).get("active");
                                if (h != null) {
                                    const k = new Rb(void 0),
                                        l = new Sb(void 0);
                                    h = new Jc(h, k, l, c, void 0)
                                } else h = void 0;
                                return h
                            },
                            f = wc({
                                tc: e
                            });
                        e = xc({
                            tc: e
                        });
                        var g = vc({
                            D: {
                                ub: d
                            }
                        });
                        f = new Map([
                            ["home", f],
                            ["editor", e],
                            ["offline_fallback", g]
                        ]);
                        e = new Kc;
                        g = Ob(d, "manifests", Lc);
                        return new Mc({
                                V: a
                            },
                            f, e, new Nc(g, b))
                    },
                    Pc = function(a) {
                        let b;
                        try {
                            b = a.crypto.randomUUID()
                        } catch (c) {
                            b = a.crypto.getRandomValues(new Uint8Array(16)).reduce((d, e) => d + String.fromCharCode(e), "")
                        }
                        return btoa(b)
                    },
                    Qc = function(a) {
                        var b;
                        var c = '<!DOCTYPE html>\n<html dir="' + ((b = a.direction) == null ? "" : b) + '" lang="' + ((b = a.locale) == null ? "" : b) + '">\n  <head>\n    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>\n    <meta name="referrer" content="origin">\n    ';
                        a.viewport && (c += '\n      <meta name="viewport" content="' +
                            ((b = a.viewport) == null ? "" : b) + '">\n    ');
                        c += '\n    <link rel="shortcut icon" href="/favicon.ico">\n    <title>' + ((b = a.title) == null ? "" : b) + '</title>\n    <script nonce="' + ((b = a.nonce) == null ? "" : b) + '">\n      window["bootstrap"] = {\n        "ui": JSON.parse(' + ((b = a.Pc) == null ? "" : b) + '),\n        "base": JSON.parse(' + ((b = a.Ba) == null ? "" : b) + '),\n        "page": JSON.parse(' + ((b = a.nb) == null ? "" : b) + '),\n      };\n      window["flags"] = JSON.parse(' + ((b = a.oc) == null ? "" : b) + ');\n      window["__canva_public_path__"] = "' +
                            ((b = a.Qf) == null ? "" : b) + '";\n      window["cmsg"] = {\n        locale: "' + ((b = a.locale) == null ? "" : b) + '",\n        strings: {},\n      };\n    \x3c/script>\n    ';
                        for (const d of a.links) c += '\n      <link href="' + ((b = d.href) == null ? "" : b) + '" rel="' + ((b = d.rel) == null ? "" : b) + '" ' + ((b = d.nonce ? `nonce="${d.nonce}"` : "") == null ? "" : b) + ">\n    ";
                        c += '\n  </head>\n  <body>\n    <div id="root">' + ((b = a.Dc) == null ? "" : b) + "</div>\n    ";
                        for (const d of a.scripts) c += '\n      <script src="' + ((b = d.src) == null ? "" : b) + '" nonce="' +
                            ((b = d.nonce) == null ? "" : b) + '" ' + ((b = d.defer ? "defer" : "") == null ? "" : b) + ">\x3c/script>\n    ";
                        return c + "\n  </body>\n</html>\n"
                    },
                    Rc = function(a, b) {
                        const c = [];
                        var d = a.dd;
                        d.config.O === 3 && /android/i.test(d.config.userAgent) ? c.push(...b.Fd.Rd.ae.Fa) : (a = a.dd, a.config.O === 3 && /ipod|iphone|ipad/i.test(a.config.userAgent) && c.push(...b.Fd.Rd.lf.Fa));
                        c.push(...b.Wc.Fa);
                        return c
                    },
                    Sc = function(a, b, c, d, e) {
                        const f = b.locale,
                            g = b.direction,
                            h = b.title,
                            k = b.Pc,
                            l = b.Ba,
                            n = b.nb;
                        b = b.oc;
                        const m = c.viewport,
                            p = c.Dc;
                        var q = c.Wc;
                        const w =
                            c.pf.get(f) || {
                                ab: [],
                                Fa: []
                            };
                        q = [...c.links.filter(({
                            rel: v
                        }) => v !== "preload" && v !== "prefetch").map(v => ({
                            href: /^(https?:)?\/\//.test(v.href) ? v.href : `${d}/${v.href}`,
                            rel: v.rel,
                            nonce: e
                        })), ...w.ab.map(v => ({
                            href: `${d}/${v}`,
                            rel: "stylesheet"
                        })), ...q.ab.map(v => ({
                            href: `${d}/${v.filename}`,
                            rel: "stylesheet"
                        }))];
                        a = [...w.Fa.map(v => ({
                            src: `${d}/${v}`,
                            nonce: e
                        })), ...Rc(a, c).map(v => ({
                            src: `${d}/${v.filename}`,
                            nonce: e,
                            defer: !0
                        }))];
                        return Qc({
                            locale: f,
                            direction: g === 1 ? "ltr" : "rtl",
                            title: h,
                            viewport: m,
                            nonce: e,
                            Qf: d ? `${d}/` : "",
                            Pc: JSON.stringify(k),
                            Ba: JSON.stringify(l),
                            nb: JSON.stringify(n),
                            oc: JSON.stringify(b || "{}"),
                            links: q,
                            Dc: p !== null && p !== void 0 ? p : "",
                            scripts: a
                        })
                    },
                    Tc = function(a, b) {
                        const c = b.pathname;
                        if (c[0] !== "/") return a.fallback;
                        for (const d of a.rules) {
                            const e = d.match(c);
                            if (e != null) return {
                                page: d.page,
                                jb: f => e.jb(b, f)
                            }
                        }
                        return a.fallback
                    },
                    Uc = async function(a, b, {
                        B: c
                    }) {
                        c = a.l.ua("service_worker.page_assembler.render_page", c);
                        try {
                            const k = Tc(a.Xf, b);
                            let l = await Hc(a.yd, k.page, k.jb(0));
                            l == null && (l = await Hc(a.yd, "offline_fallback",
                                new URL(a.config.V)));
                            if (l != null) {
                                var d = { ...l.nb
                                };
                                const n = Gc.za({ ...l.Ba,
                                    od: 2,
                                    timestamp: void 0
                                });
                                var e = JSON.stringify(n);
                                b = { ...d,
                                    Ba: e
                                };
                                var f = Pc(a.Bf),
                                    g = Sc(a.Cf, b, l.Lb, l.Mc, f),
                                    h = a.ze.createPolicy({
                                        page: k.page,
                                        nonce: f
                                    });
                                return new Response(g, {
                                    headers: {
                                        "content-type": "text/html;charset=utf-8",
                                        "content-security-policy-report-only": h,
                                        "X-Offline-Response": "true"
                                    }
                                })
                            }
                        } catch (k) {
                            c.setStatus("error"), a.j.F(k)
                        } finally {
                            c.end()
                        }
                    },
                    Yc = function({
                        V: a,
                        userAgent: b,
                        O: c,
                        Ac: d,
                        D: {
                            j: e,
                            l: f
                        }
                    }) {
                        b = new Vc(new Wc({
                            O: c,
                            userAgent: b
                        }));
                        c = Oc({
                            V: a,
                            D: {
                                l: f,
                                j: e
                            }
                        });
                        return new Xc({
                            V: a
                        }, d, e, c, b, f)
                    },
                    $c = function({
                        V: a,
                        userAgent: b,
                        O: c,
                        C: d,
                        D: {
                            j: e,
                            l: f
                        },
                        Ac: g,
                        I: h,
                        ra: k
                    }) {
                        a = Yc({
                            V: a,
                            userAgent: b,
                            O: c,
                            Ac: g,
                            D: {
                                j: e,
                                l: f
                            }
                        });
                        return {
                            Lf: new Zc({
                                ra: k
                            }, d, h, a)
                        }
                    },
                    ad = function(a) {
                        a = a.slice(1).split("/");
                        a[a.length - 1] === "" && a.pop();
                        return a
                    },
                    bd = function(a, b, c) {
                        for (const d of b) {
                            b = a.root;
                            for (const e of ad(d)) b.children.has(e) || b.children.set(e, {
                                children: new Map,
                                config: void 0
                            }), b = b.children.get(e);
                            t(b.config == null, "Path already exists");
                            b.config = c
                        }
                    },
                    cd = function(a, b) {
                        r(b.startsWith("/"),
                            "Path must start with a slash");
                        a = a.root;
                        for (const d of ad(b)) {
                            if (d === "") return;
                            var c;
                            b = (c = a.children.get(d)) !== null && c !== void 0 ? c : a.children.get("*");
                            if (b == null) return;
                            a = b
                        }
                        return a.config
                    },
                    gd = function() {
                        const a = new dd;
                        bd(a, ed, {});
                        bd(a, fd, {
                            nf: "/settings"
                        });
                        return {
                            page: "home",
                            match: b => {
                                const c = cd(a, b);
                                if (c != null) return {
                                    jb: (d, e) => {
                                        switch (e) {
                                            case 0:
                                                var f;
                                                d = (f = c.Kh) !== null && f !== void 0 ? f : "/";
                                                return new URL(d, self.location.origin);
                                            case 1:
                                                var g;
                                                f = (g = c.nf) !== null && g !== void 0 ? g : d;
                                                return new URL(f, self.location.origin);
                                            default:
                                                throw new F(e);
                                        }
                                    }
                                }
                            }
                        }
                    },
                    hd = function() {
                        return {
                            page: "editor",
                            match: a => Cc(a) != null ? {
                                jb: b => b
                            } : void 0
                        }
                    },
                    id = function() {
                        return {
                            page: "offline_fallback",
                            jb: () => new URL("/_offline-fallback", self.location.origin)
                        }
                    },
                    kd = function({
                        D: {
                            j: a
                        },
                        C: b,
                        I: c
                    }) {
                        a = new nc({
                            cacheName: "web_workers"
                        }, a);
                        return {
                            rg: new jd(b, c, a)
                        }
                    },
                    pd = function({
                        V: a,
                        N: b,
                        userAgent: c,
                        O: d,
                        C: e,
                        D: {
                            j: f,
                            l: g
                        },
                        cb: h,
                        la: k,
                        ra: l,
                        ma: n
                    }) {
                        k = Mb({
                            la: k,
                            C: e,
                            D: {
                                l: g,
                                j: f
                            }
                        });
                        const m = gd();
                        ({
                            Lf: a
                        } = $c({
                            V: a,
                            userAgent: c,
                            O: d,
                            C: e,
                            D: {
                                j: f,
                                l: g
                            },
                            Ac: new ld([m, hd()]),
                            I: k,
                            ra: l
                        }));
                        ({
                            rg: c
                        } = kd({
                            C: e,
                            D: {
                                j: f,
                                l: g
                            },
                            I: k
                        }));
                        ({
                            Jf: d
                        } = rc({
                            N: b,
                            D: {
                                j: f,
                                l: g
                            },
                            C: e,
                            I: k
                        }));
                        ({
                            Ge: n
                        } = pc({
                            C: e,
                            ma: n,
                            D: {
                                j: f,
                                l: g
                            },
                            I: k
                        }));
                        ({
                            te: b
                        } = fc({
                            C: e,
                            I: k,
                            N: b,
                            D: {
                                j: f,
                                l: g
                            }
                        }));
                        return {
                            Ic: new md([new nd(k), new od(h), a, c, d, n, b])
                        }
                    },
                    rd = function({
                        kb: a,
                        V: b,
                        N: c,
                        userAgent: d,
                        O: e,
                        C: f,
                        D: {
                            j: g,
                            l: h
                        },
                        cb: k,
                        la: l,
                        ma: n,
                        ra: m,
                        yc: p = fetch
                    }) {
                        ({
                            Ic: b
                        } = pd({
                            V: b,
                            N: c,
                            userAgent: d,
                            O: e,
                            C: f,
                            D: {
                                j: g,
                                l: h
                            },
                            la: l,
                            ma: n,
                            cb: k,
                            ra: m
                        }));
                        a = Wa({
                            D: {
                                j: g
                            },
                            fb: a
                        });
                        c = Za();
                        return new qd(b, f, g, a, {
                                ff: async q => {
                                    if (f.Sa()) return Response.error();
                                    try {
                                        return await p(q, {
                                            redirect: "follow"
                                        })
                                    } catch (w) {
                                        return Response.error()
                                    }
                                }
                            },
                            c)
                    },
                    td = function({
                        serviceWorker: a,
                        D: {
                            j: b,
                            Ja: c,
                            tb: d,
                            xa: e
                        },
                        O: f,
                        C: g,
                        N: h,
                        kb: k,
                        Ce: l,
                        ra: n,
                        la: m,
                        ma: p
                    }) {
                        c = c.Qa("service_worker.fetch_interceptor");
                        b = rd({
                            kb: k,
                            V: `${a.location.origin}/_offline-fallback`,
                            N: h,
                            userAgent: self.navigator.userAgent,
                            O: f,
                            C: g,
                            D: {
                                j: b,
                                l: c
                            },
                            cb: {
                                Xe: l
                            },
                            ra: n,
                            la: m,
                            ma: p
                        });
                        const q = new sd(b, d, e, c);
                        a.addEventListener("fetch", w => Na(q, w))
                    },
                    Ad = function(a, b) {
                        const c = a.l.ta("service_worker.handle_message");
                        try {
                            const d = a.l.Vb("process_message", c, e => {
                                try {
                                    const f = ud.S(b.data),
                                        g = f.message,
                                        h = f.requestId;
                                    e.setAttribute("message_type", f.message);
                                    switch (g) {
                                        case "GET_SW_RELEASE":
                                            return new vd({
                                                requestId: h,
                                                release: a.options.release
                                            });
                                        case "OVERRIDE_NETWORK_STRATEGY":
                                            return a.C.Jb = f.Jb, new wd({
                                                requestId: h,
                                                Sa: a.C.Sa()
                                            });
                                        case "SKIP_WAITING":
                                            return a.serviceWorker.skipWaiting(), new xd({
                                                requestId: h
                                            });
                                        default:
                                            throw new F(g);
                                    }
                                } catch (f) {
                                    return e.setStatus("error"), new yd({
                                        Sf: JSON.stringify(b.data)
                                    })
                                }
                            });
                            a.l.Vb("post_response", c, () => {
                                var e;
                                (e = b.source) === null || e === void 0 || e.postMessage(zd.za(d))
                            })
                        } finally {
                            c.end()
                        }
                    },
                    Cd = function({
                        serviceWorker: a,
                        C: b,
                        release: c,
                        D: {
                            Ja: d
                        }
                    }) {
                        d = d.Qa("service_worker.message_handler");
                        const e = new Bd({
                            release: c
                        }, a, b, d);
                        a.addEventListener("message", f => Ad(e, f))
                    },
                    Dd = function(a, b, c, d) {
                        d = [c instanceof Error ? c : null, a.context, d].filter(Pa);
                        Object.keys(a.tags).length > 0 && d.push(a.tags);
                        return [`[ConsoleErrorClient][${a.name}][${b}]: ${c}`, ...d]
                    },
                    Fd = function() {
                        const a = Ed();
                        let b = 0;
                        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function(c) {
                            c = Number(c);
                            return (c ^ a[b++] & 15 >> c / 4).toString(16)
                        })
                    },
                    Ed = function() {
                        if (typeof window !== "undefined" && typeof window.crypto !== "undefined" && typeof window.crypto.getRandomValues === "function") return window.crypto.getRandomValues(new Uint8Array(31));
                        const a = Math.random;
                        return Array.from({
                            length: 31
                        }, () => Math.floor(a() * 255))
                    },
                    Gd = function(a) {
                        Object.keys(a).forEach(b => a[b] == null && delete a[b])
                    },
                    Id = function(a) {
                        if (a instanceof Hd) {
                            const b = [];
                            a.values.forEach(c => {
                                b.push(Id(c))
                            });
                            return b
                        }
                        if (a instanceof Jd) {
                            const b = {};
                            a.values.forEach(c => {
                                b[c.name] = Id(c.value)
                            });
                            return b
                        }
                        return a.value
                    },
                    Kd = function(a, b) {
                        let c = b;
                        Object.entries(a.Gd).forEach(([d, e]) => {
                            c = c.split(e).join(d)
                        });
                        return c
                    },
                    Ld = function(a, b = {}) {
                        Object.keys(b).forEach(c => {
                            const d = b[c];
                            typeof d === "string" && (b[c] = Kd(a, d))
                        })
                    },
                    Md = function(a, b) {
                        var c;
                        return { ...b,
                            frames: b === null || b === void 0 ? void 0 : (c = b.frames) === null || c === void 0 ? void 0 : c.map(d => {
                                for (const [e, f] of Object.entries(a.Gd)) {
                                    const g = h => h === null || h === void 0 ? void 0 : h.replace(f, e);
                                    d.module = g(d.module);
                                    d.abs_path = g(d.abs_path);
                                    d.filename = g(d.filename)
                                }
                                return d
                            })
                        }
                    },
                    Nd = function(a,
                        b) {
                        var c, d;
                        b.exception && b.exception.values && (b.exception = { ...b.exception,
                            values: (d = b.exception) === null || d === void 0 ? void 0 : (c = d.values) === null || c === void 0 ? void 0 : c.map(e => ({ ...e,
                                ...(e.stacktrace && {
                                    stacktrace: Md(a, e.stacktrace)
                                })
                            }))
                        })
                    },
                    Od = function(a, b) {
                        var c = b.request;
                        c != null && c.url != null && (c.url = Kd(a, c.url));
                        Nd(a, b);
                        b.tags != null && Ld(a, b.tags)
                    },
                    Pd = function(a, b) {
                        const c = [];
                        b.message && c.push(b.message);
                        if (b.exception) {
                            const {
                                type: d = "",
                                value: e = ""
                            } = b.exception.values && b.exception.values[0] || {};
                            d !== "Error" &&
                                c.push(d, e)
                        }
                        return c.some(d => a.Yd.some(e => Object.prototype.toString.call(e) === "[object RegExp]" ? e.test(d) : typeof e === "string" ? d.indexOf(e) !== -1 : !1))
                    },
                    Rd = function(a, b) {
                        var c, d;
                        if ((a === null || a === void 0 ? void 0 : a.message) !== (b === null || b === void 0 ? void 0 : b.message)) return !1;
                        a = (c = a.exception) === null || c === void 0 ? void 0 : c.values;
                        b = (d = b.exception) === null || d === void 0 ? void 0 : d.values;
                        if (a == null || b == null || a.length !== b.length) return !1;
                        for (d = 0; d < a.length; d++)
                            if (a[d].value !== b[d].value || a[d].type !== b[d].type || !Qd(a[d].stacktrace,
                                    b[d].stacktrace)) return !1;
                        return !0
                    },
                    Qd = function(a, b) {
                        a = a === null || a === void 0 ? void 0 : a.frames;
                        b = b === null || b === void 0 ? void 0 : b.frames;
                        if (a == null && b == null) return !0;
                        if (a == null || b == null || a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (a[c].filename !== b[c].filename || a[c].colno !== b[c].colno || a[c].lineno !== b[c].lineno) return !1;
                        return !0
                    },
                    Td = function(a, b) {
                        const c = a.history.find(f => Rd(f.event, b));
                        if (c == null) return !1;
                        const d = Sd.now(),
                            e = c.timestamp;
                        return Rd(b, c.event) && d - e < a.jg
                    },
                    Wd = function() {
                        return new Ud({
                            Qh: a =>
                                Vd({
                                    frame: a,
                                    cg: "/dist/renderer/"
                                })
                        })
                    },
                    Vd = function({
                        frame: a,
                        cg: b
                    }) {
                        if (a.filename == null) return a;
                        const c = a.filename.replace(/\\/g, "/").split(b);
                        if (c.length <= 1) return a;
                        a.filename = "app://" + b + c.pop();
                        return a
                    },
                    Yd = function(a, b) {
                        var c;
                        b === null || b === void 0 || (c = b.breadcrumbs) === null || c === void 0 || c.map((d, e) => {
                            if (b === null || b === void 0 ? 0 : b.breadcrumbs) {
                                var f = b.breadcrumbs;
                                if (d.type === "http") {
                                    var g;
                                    d.data = d.data || {};
                                    var h;
                                    d.data.url = Xd(a, (h = (g = d.data) === null || g === void 0 ? void 0 : g.url) !== null && h !== void 0 ? h : "")
                                }
                                f[e] =
                                    d
                            }
                        });
                        b.request && (b.request = a.Kc(b.request));
                        return b
                    },
                    Xd = function(a, b) {
                        try {
                            const c = new URL(b, `${a.location.protocol}//${a.location.host}`);
                            if (!["http:", "https:"].includes(c.protocol)) return "";
                            a.Zd.some(d => c.hostname.includes(d)) && c.pathname.startsWith("/_ajax") || (c.pathname = "");
                            c.search = "";
                            return b.includes(c.host) ? c.toString() : c.pathname || "/"
                        } catch (c) {
                            return ""
                        }
                    },
                    $d = function(a) {
                        const b = [];
                        for (const c of Zd) {
                            const d = c(a);
                            d && b.push(d)
                        }
                        return b
                    },
                    be = function(a) {
                        return (b, c) => {
                            b.request && (b.request = a.Kc(b.request));
                            if (ae(a, b)) return null;
                            if (a.vc) {
                                b.tags == null && (b.tags = {});
                                a: switch (a.vc.status) {
                                    case 2:
                                        var d = "OFFLINE";
                                        break a;
                                    case 1:
                                        d = "ONLINE";
                                        break a;
                                    default:
                                        d = "UNKNOWN"
                                }
                                b.tags.offlineStatus = d
                            }
                            try {
                                Od(a.$c, b)
                            } catch (e) {
                                a.F(e)
                            }
                            return a.Xc.reduce((e, f) => f(e, c), b)
                        }
                    },
                    me = function(a, b, c) {
                        var d, e, f, g = (d = a.P) === null || d === void 0 ? void 0 : d.getCurrentHub().getClient();
                        d = g && g.getOptions() || {};
                        var h;
                        g = (h = b.sampleRate) !== null && h !== void 0 ? h : 1;
                        var k;
                        h = [new ce, new de, new ee, new fe(2E3), new ge(g, (k = b.Af) !== null && k !== void 0 ? k : g), new he,
                            new ie, new je(a.allowUrls, location), Wd()
                        ];
                        a.R.flags && a.R.flags.Le && h.push(new ke(le));
                        a.setTags(a.R.tags);
                        a.setExtras(a.R.extra);
                        if (k = typeof navigator !== "undefined" ? navigator.userAgent : void 0) k = $d(k), a.setTags(k);
                        b = b.Mf;
                        b !== 1 && a.setTag("webx", String(b === 3));
                        a.setTag("iframe", String(typeof window !== "undefined" && window.self !== window.top));
                        c.zd && a.setTag("webview", c.zd);
                        d.beforeSend = be(a);
                        c = { ...d,
                            maxValueLength: 1024,
                            dsn: d.dsn || a.R.dsn,
                            environment: d.environment || a.R.environment,
                            release: d.release || a.R.release,
                            tracesSampleRate: 0,
                            sampleRate: 1,
                            integrations: h,
                            allowUrls: a.allowUrls,
                            autoSessionTracking: !1,
                            ignoreErrors: ["variable: _AutofillCallbackHandler", "_AutofillCallbackHandler is not defined", "Non-Error promise rejection captured with value: Object Not Found Matching Id"]
                        };
                        Gd(c);
                        (e = a.P) === null || e === void 0 || e.init(c);
                        (f = a.P) === null || f === void 0 || f.configureScope(l => {
                            l.setUser({
                                id: Fd()
                            });
                            l.setExtra("isAnonymousUser", !0);
                            l.setTag("initLocation", "error_client")
                        })
                    },
                    ae = function(a, b) {
                        const c = b.exception && b.exception.values &&
                            b.exception.values.length > 0 && b.exception.values[0],
                            d = c && c.stacktrace || void 0,
                            e = d && d.frames && d.frames[0] && d.frames[0].filename,
                            f = b.message || c && c.value || void 0;
                        return a.kd.some(g => g({
                            message: f,
                            filename: e,
                            location,
                            tags: b.tags,
                            event: b
                        }))
                    },
                    ne = function(a, b) {
                        var c, d;
                        b instanceof Error ? (c = a.P) === null || c === void 0 || c.captureException(b) : (d = a.P) === null || d === void 0 || d.captureMessage(b)
                    },
                    oe = function(a, b, c) {
                        if (b == null) return Error((c ? c + " " : "") + "[null error thrown]");
                        if (typeof b === "object") {
                            const e = b instanceof
                            N ? new N(b.message, b.sampleRate) : Error(b.message);
                            b.stack && (e.stack = b.stack);
                            b.cause && (e.cause = b.cause);
                            if (c) {
                                var d;
                                if ((d = b.message) === null || d === void 0 ? 0 : d.startsWith(c)) return a.setTag("prefixCollision", "true"), b;
                                a = c + " " + (e.message || "[no message on error]");
                                try {
                                    e.message = a
                                } catch (f) {
                                    if (f instanceof TypeError) return Error(a);
                                    throw f;
                                }
                            }
                            return e
                        }
                        return b.toString()
                    },
                    pe = function(a, b, c, d) {
                        a.P == null ? (console.error(c), d && console.log("errorParams", d)) : a.P && a.P.withScope(e => {
                            typeof d === "string" && (d = {
                                va: d
                            });
                            c = oe(e, c, typeof d === "string" ? d : d === null || d === void 0 ? void 0 : d.va);
                            d != null && (d.fingerprint && e.setFingerprint(d.fingerprint), d.ng && e.setTag("userFlow", d.ng), d.extra && d.extra.forEach((f, g) => e.setExtra(g, f)), d.tags && d.tags.forEach((f, g) => e.setTag(g, f)));
                            a.dc.length > 0 && e.setTag("component", a.dc.join("."));
                            e.setLevel(b);
                            ne(a, c)
                        })
                    },
                    qe = function(a) {
                        return a.ga === "span" && a.attrs.get("is_uop") === !0
                    },
                    se = function(a, b) {
                        re(a, b, () => {
                            const c = a.zb.get(b.context.spanId) || [];
                            for (const d of c) se(a, d)
                        })
                    },
                    re = function(a,
                        b, c) {
                        var d, e = (d = b.attrs.get("parent_relative_start_ms")) !== null && d !== void 0 ? d : b.duration;
                        e = typeof e === "number" ? ` - ${Math.round(e)}ms` : "";
                        var f = (d = b.parentSpanId != null) ? `${b.ga==="event"?"[ChildEvent]":"[ChildSpan]"}: ` : "[OpenTelemetryClient]: ";
                        const g = qe(b) ? "User Operation - " : "";
                        e = `${f}${g}${b.name}${e}`;
                        d && !a.uc.has(b.parentSpanId) ? console.group(e) : console.groupCollapsed(e);
                        console.groupCollapsed("Attributes");
                        d = {
                            name: b.name,
                            Ni: `${b.duration}ms`,
                            ...Object.fromEntries(b.attrs.entries())
                        };
                        e = {};
                        for (const h of Object.keys(d)) f = d[h], e[h] = f instanceof Object ? JSON.stringify(f) : f;
                        console.table(e);
                        console.groupEnd();
                        c === null || c === void 0 || c();
                        console.groupEnd();
                        a.uc.add(b.context.spanId)
                    },
                    P = function(a) {
                        return [
                            ["name", a.name],
                            ["status", a.status],
                            ["instrumentationScope", a.U],
                            ["startTime", a.startTime],
                            ["endTime", a.endTime],
                            ["duration", a.duration],
                            ["parentSpanId", a.parentSpanId]
                        ]
                    },
                    te = function(a) {
                        switch (a) {
                            case "unset":
                                return 0;
                            case "ok":
                                return 1;
                            case "error":
                                return 2;
                            default:
                                return 0
                        }
                    },
                    ve = function(a) {
                        const b = [];
                        for (const [c, d] of a.entries()) d != null && b.push({
                            key: c,
                            value: ue(d)
                        });
                        return b
                    },
                    ue = function(a) {
                        const b = typeof a;
                        return b === "string" ? {
                            stringValue: a
                        } : b === "number" ? Number.isInteger(a) ? {
                            intValue: a
                        } : {
                            doubleValue: a
                        } : b === "boolean" ? {
                            boolValue: a
                        } : a instanceof Uint8Array ? {
                            bytesValue: a
                        } : Array.isArray(a) ? {
                            arrayValue: {
                                values: a.map(ue)
                            }
                        } : b === "object" && a != null ? {
                            kvlistValue: {
                                values: Object.entries(a).map(([c, d]) => ({
                                    key: c,
                                    value: ue(d)
                                }))
                            }
                        } : {}
                    },
                    we = function(a) {
                        const b = new Map;
                        for (const c of a) a = b.get(c.U), a || (a = [], b.set(c.U,
                            a)), a.push(c);
                        return b
                    },
                    xe = function(a, b) {
                        b = b(a) / 1E3;
                        a = Math.trunc(b);
                        b = Number((b - a).toFixed(9)) * 1E9;
                        let [c, d] = [a, b];
                        d > 1E9 && (d -= 1E9, c += 1);
                        return c * 1E9 + d
                    },
                    ye = function(a, b) {
                        if (a.length === 0) return {
                            resourceSpans: []
                        };
                        const c = [];
                        a = we(a);
                        for (const [d, e] of a)
                            if (e.length > 0) {
                                a = {
                                    attributes: ve(e[0].da),
                                    droppedAttributesCount: 0
                                };
                                const f = [{
                                    scope: {
                                        name: d
                                    },
                                    spans: e.map(g => {
                                        var h = g.context;
                                        const k = xe(g.startTime, b);
                                        var l;
                                        const n = xe((l = g.endTime) !== null && l !== void 0 ? l : g.startTime, b);
                                        var m = g.attrs;
                                        g.ga === "event" && (l = g.attrs.get("parent_start"),
                                            l != null && typeof l === "number" && (m = new Map([...m.entries(), ["parent_start", xe(l, b)]])));
                                        l = h.traceId;
                                        h = h.spanId;
                                        var p = g.parentSpanId,
                                            q = g.name;
                                        m = ve(m);
                                        var w = {
                                            code: te(g.status)
                                        };
                                        g = g.links;
                                        const v = [];
                                        for (const z of g) v.push({
                                            spanId: z.kg.spanId,
                                            traceId: z.kg.traceId,
                                            droppedAttributesCount: 0
                                        });
                                        return {
                                            traceId: l,
                                            spanId: h,
                                            parentSpanId: p,
                                            name: q,
                                            kind: 3,
                                            startTimeUnixNano: k,
                                            endTimeUnixNano: n,
                                            attributes: m,
                                            droppedAttributesCount: 0,
                                            events: [],
                                            droppedEventsCount: 0,
                                            status: w,
                                            links: v,
                                            droppedLinksCount: 0
                                        }
                                    })
                                }];
                                c.push({
                                    resource: a,
                                    scopeSpans: f
                                })
                            }
                        return {
                            resourceSpans: c
                        }
                    },
                    ze = function(a, b) {
                        a.Ad.unshift(b);
                        return a
                    },
                    Be = function(a) {
                        try {
                            a.Ta.process(a.buffer)
                        } catch (b) {
                            a.j.F(b, {
                                va: `Failed to export the span buffer from ${Ae.name}`,
                                extra: new Map([
                                    ["spans", JSON.stringify(a.buffer.map(P), void 0, 2)],
                                    ["maxBatchSize", a.config.Mb],
                                    ["maxBatchingTimeMs", a.config.Nb]
                                ])
                            })
                        }
                        a.buffer = [];
                        a.Xa != null && clearTimeout(a.Xa);
                        a.Xa = void 0
                    },
                    Ce = function(a, b, c, d = !1) {
                        b.aborted || d || !b.wa() || (c.push(b), b.Ma.forEach(e => c.push(e)));
                        for (const e of b.Na) Ce(a, e, c,
                            d || b.aborted);
                        b.B = void 0;
                        b.Na.length = 0
                    },
                    Ge = function({
                        span: a,
                        j: b,
                        aa: c,
                        Qg: d = new Map
                    }) {
                        try {
                            var e, f, g, h, k;
                            t(!a.rd(), "Span must be ended to create a PerformanceContext");
                            const l = De(c, "LongTaskService"),
                                n = De(c, "VisibilityService"),
                                m = a.startTime,
                                p = a.endTime;
                            t(p != null, "Span endTime must exist to create a PerformanceContext");
                            const q = new Map([
                                    ["start", Ee(m, m)]
                                ]),
                                w = qe(a) ? (e = a.X) === null || e === void 0 ? void 0 : e.eb : void 0;
                            for (const {
                                    name: A,
                                    startTime: M
                                } of a.Ma) q.set(A, Ee(m, M));
                            if (w != null)
                                for (const [A, M] of w) q.set(A,
                                    Ee(m, M));
                            for (const [A, M] of d) q.set(A, Ee(m, M));
                            q.set("finish", Ee(m, p));
                            if (l == null || n == null) return {
                                xf: q,
                                ...((g = a.qa) === null || g === void 0 ? void 0 : (f = g.frameRate) === null || f === void 0 ? void 0 : Fe(f))
                            };
                            const v = l.Hh(m, p),
                                z = n.jj(a);
                            return {
                                xf: q,
                                Uh: v.count,
                                Vh: v.duration,
                                ij: z,
                                resources: void 0,
                                ...((k = a.qa) === null || k === void 0 ? void 0 : (h = k.frameRate) === null || h === void 0 ? void 0 : Fe(h))
                            }
                        } catch (l) {
                            return c = l instanceof Error ? l.message : "Unknown error creating PerformanceContext", d = c.includes("Invalid metric: adjusted time must not be negative") ?
                                2E-4 : .2, b.Qd(new N(c, d), {
                                    va: "Error creating PerformanceContext",
                                    tags: new Map([
                                        ["span.name", a.name],
                                        ["service.name", String(a.da.get("service.name"))]
                                    ])
                                }), {
                                    Fh: c
                                }
                        }
                    },
                    Ee = function(a, b) {
                        a = b - a;
                        t(a >= 0, "Invalid metric: adjusted time must not be negative");
                        return Math.round(a)
                    },
                    Ie = function(a) {
                        return function() {
                            for (let b = 0; b < a * 2; b++) He[b] = Math.floor(Math.random() * 16) + 48, He[b] >= 58 && (He[b] += 39);
                            return String.fromCharCode.apply(null, He.slice(0, a * 2))
                        }
                    },
                    Je = function(a) {
                        let b, c;
                        a instanceof Map ? b = a : a && (c = a);
                        return {
                            Ob: b,
                            Pb: c
                        }
                    },
                    Ke = function(a) {
                        const {
                            Ob: b,
                            Pb: c
                        } = Je(a);
                        var d;
                        return { ...c,
                            attrs: (d = b !== null && b !== void 0 ? b : c === null || c === void 0 ? void 0 : c.attrs) !== null && d !== void 0 ? d : new Map
                        }
                    },
                    Le = function(a) {
                        for (const c of a.ba.plugins) try {
                            var b;
                            (b = c.fi) === null || b === void 0 || b.call(c, a)
                        } catch (d) {
                            a.j.F(d, {
                                va: "Plugin.onSpanEnd error",
                                extra: new Map([
                                    ["plugin", c.name], ...P(a)
                                ])
                            })
                        }
                    },
                    Oe = function(a) {
                        var b;
                        (b = a.X) === null || b === void 0 || Me(b, a);
                        a.B instanceof Ne && a.B.X != null && a.B.X !== a.X && Me(a.B.X, a)
                    },
                    Qe = function(a, b, c, d) {
                        const e = a.jc = {
                            Da: a.Da,
                            Ea: a.Ea
                        };
                        try {
                            var f;
                            a.timeout && clearTimeout(a.timeout);
                            let g, h, k;
                            b instanceof Map ? h = b : b != null && (g = b);
                            c instanceof Map ? h = c : c != null && (k = c);
                            d != null && (k = d);
                            a.Za = !1;
                            g != null && a.setStatus(g);
                            h && a.Ha(h);
                            if ((f = a.qa) === null || f === void 0 ? 0 : f.frameRate) {
                                Pe(a.qa.frameRate);
                                const {
                                    qc: l,
                                    ld: n,
                                    frameCount: m
                                } = Fe(a.qa.frameRate);
                                l != null && n != null && m != null && (a.attrs.set("frame_duration_mean", l), a.attrs.set("frame_duration_standard_deviation", n), a.attrs.set("frame_count", m), a.attrs.set("long_frame_duration", l + 2 * n))
                            }
                            a.ended = !0;
                            a.endTime = k !== null && k !== void 0 ? k : a.getCurrentTime();
                            a.duration = a.endTime - a.startTime;
                            Le(a);
                            Oe(a);
                            a.ba.Wa.process([a]);
                            a.mb.forEach(l => l(e));
                            a.Za = !0;
                            return e
                        } catch (g) {
                            return a.j.F(g, {
                                va: "Error ending span",
                                extra: new Map(P(a))
                            }), e
                        }
                    },
                    Te = function({
                        xc: {
                            performance: a,
                            name: b,
                            type: c,
                            attrs: d,
                            startTime: e,
                            timeout: f,
                            Fb: g
                        },
                        l: h,
                        B: k,
                        Be: l,
                        j: n,
                        Ef: m
                    }) {
                        d = d || new Map;
                        c && d.set("uop_attr_type", c);
                        d.set("sample_rate_override", 1);
                        d.set("is_uop", !0);
                        c = k === null || k === void 0 ? void 0 : k.wa();
                        if (k != null && !k.wa()) {
                            const w = k.Zb();
                            w instanceof Re && (k = w.T)
                        }
                        e = {
                            performance: a,
                            attrs: d,
                            startTime: e,
                            timeout: f
                        };
                        const p = k ? h.ua(b, k, e) : h.ta(b, e);
                        t(p instanceof Ne, "User operations can only be created by SpanImpls");
                        const q = [];
                        l.forEach(w => {
                            try {
                                const v = w.Sg();
                                q.push(v)
                            } catch (v) {
                                n.F(v)
                            }
                        });
                        h = new Map(q.flatMap(w => [...w.entries()]));
                        a = new Re(b, p, h, n, c, g, (a === null || a === void 0 ? 0 : a.Wi) ? new Map : void 0);
                        p.X = a;
                        a.La(() => {
                            Se(p, p.attrs.get("uop_attr_type"))
                        });
                        a.Ha(h);
                        a.Ha(d);
                        m === null || m === void 0 || m(p);
                        return a
                    },
                    Ue = function(a) {
                        a = a === null || a === void 0 ?
                            void 0 : a.Zb();
                        return a instanceof Re ? a : void 0
                    },
                    Me = function(a, b) {
                        a.hc.delete(b);
                        if (!a.ended) {
                            if (a.eb && b.ga === "span" && !b.aborted) {
                                a.eb.set(`${b.name}_start`, b.startTime);
                                for (var c of b.Ma) a.eb.set(`${b.name}_${c.name}`, c.startTime);
                                b.endTime != null && a.eb.set(`${b.name}_end`, b.endTime)
                            }
                            c = b.status === "error";
                            b = b.attrs.get("timed_out") === !0;
                            if (a.hc.size === 0 || c || b) {
                                a.ended = !0;
                                const e = Ve(a, a.T);
                                if (e != null) {
                                    b && !a.T.name.endsWith("timed_out") && (a.T.setAttribute("timed_out", !0, !0), a.Fb || (a.T.name += ".timed_out"));
                                    var d = a.kc = a.T.end(c || a.Fb && b ? "error" : "ok", e.endTime);
                                    a.mb.forEach(f => f(d))
                                } else a.T.abort(), a.lb.forEach(f => f())
                            }
                        }
                    },
                    Ve = function(a, b) {
                        if (!b.aborted) {
                            var c = b.endTime != null ? b : void 0;
                            for (const d of b.Na) b = Ve(a, d), b != null && (c == null || b.endTime > c.endTime) && (c = b);
                            return c
                        }
                    },
                    Se = function(a, b) {
                        if (typeof b === "string") {
                            for (const c of a.Ma) c.setAttribute("uop_attr_type", b, !0);
                            for (const c of a.Na) c.attrs.get("is_uop") !== !0 && (c.setAttribute("uop_attr_type", b, !0), Se(c, b))
                        }
                    },
                    We = function(a) {
                        if (a) {
                            var b = a === null || a ===
                                void 0 ? void 0 : a.Zb();
                            return b instanceof Re ? b.pb : a.wa()
                        }
                    },
                    Fe = function(a) {
                        return {
                            frameCount: a.Ia.count,
                            qc: a.Ia.count > 0 ? a.Ia.vf : void 0,
                            ld: a.Ia.count > 0 ? a.Ia.Of : void 0
                        }
                    },
                    Pe = function(a) {
                        a.ac && a.Ec.cancelAnimationFrame(a.ac);
                        a.document.removeEventListener("visibilitychange", a.vd);
                        a = Fe(a);
                        var b = Xe;
                        const c = a.frameCount * a.qc,
                            d = a.qc + 2 * a.ld;
                        c > 0 && (b.frameCount += a.frameCount, b.ud.add(d, c));
                        for (const e of b.pd) e(a)
                    },
                    Ye = async function(a, b, c, d) {
                        let e, f;
                        typeof d === "function" ? f = d : e = Ke(d);
                        const g = a.ua(b, c, e);
                        return f(g).catch(h => {
                            g.setStatus("error");
                            throw h;
                        }).finally(() => g.end())
                    },
                    De = function(a, b) {
                        try {
                            return a.config.plugins.find(d => d.name === b)
                        } catch (d) {
                            var c;
                            a.j.F(d, {
                                extra: new Map([
                                    ["attrs", Object.fromEntries((c = a.config) === null || c === void 0 ? void 0 : c.da)]
                                ])
                            })
                        }
                    },
                    Ze = function(a) {
                        var b = Date.now(),
                            c = performance.now();
                        Math.abs(a.Qc + (c - a.Cc) - b) < a.threshold || (a.Qc = b, a.Cc = c)
                    },
                    kf = function({
                        R: a,
                        gb: b,
                        mc: c,
                        userAgent: d,
                        D: {
                            j: e
                        }
                    }) {
                        let f, g = new Map;
                        switch (a.M) {
                            case "NOOP":
                                return new $e;
                            case "CONSOLE":
                                f = new af;
                                break;
                            case "HTTP":
                                var h;
                                f = new bf({
                                    url: a.endpoint,
                                    ec: (h = a.Qe) !== null && h !== void 0 ? h : 1
                                }, e, new cf, df({
                                    url: a.endpoint,
                                    hg: c !== null && c !== void 0 ? c : 3E4,
                                    gb: b !== null && b !== void 0 ? b : .01
                                }));
                                var k, l, n, m;
                                g = new Map([
                                    ["telemetry_version", "v2"],
                                    ["app.component", a.app],
                                    ["service.name", a.app],
                                    ["app.release", (k = a.release) !== null && k !== void 0 ? k : ""],
                                    ["app.source", (l = a.source) !== null && l !== void 0 ? l : "web"],
                                    ["app.flavor", (n = a.Ve) !== null && n !== void 0 ? n : ""],
                                    ["app.build.variant", (m = a.variant) !== null && m !== void 0 ? m : "baseline"],
                                    ["session_id", Fd()],
                                    ["x-canva-tenant", "canva-app"],
                                    ["device.platform",
                                        a.platform
                                    ],
                                    ["device.id", a.deviceId]
                                ]);
                                d != null && (g.set("browser.name", d.ke), g.set("browser.version_major", d.ie), g.set("browser.version_minor", d.je));
                                break;
                            default:
                                throw new F(a);
                        }
                        b = ze(ze(new ef, q => new ff(q)), q => {
                            var w, v;
                            return new Ae(q, {
                                Mb: (w = a.Mb) !== null && w !== void 0 ? w : 20,
                                Nb: (v = a.Nb) !== null && v !== void 0 ? v : 5E3
                            }, e)
                        }).build(f);
                        var p;
                        c = a.M === "HTTP" ? (p = a.lg) !== null && p !== void 0 ? p : .01 : 1;
                        return new gf(new hf({
                            Wa: b,
                            Jc: new jf(c, e),
                            da: g
                        }), e)
                    },
                    Ka = function(a, b) {
                        b.request.mode !== "navigate" && (b = b.clientId, a.Md.Hc(b),
                            a.Ld.Hc(b))
                    },
                    Ma = function(a, b, c) {
                        if (b.request.mode !== "navigate") throw Error("Navigation event expected");
                        c.then(d => {
                            d.ok && (d = b.resultingClientId, a.Md.Gc(d), a.Ld.Gc(d))
                        }).catch(() => {})
                    },
                    lf = function(a, b) {
                        const c = a.Oa.get(b);
                        if (c != null) {
                            var d = performance.now() - 5E3,
                                e = c.Gb.filter(f => f >= d);
                            c.Gb = e;
                            e.length >= 3 ? c.Xa = self.setTimeout(() => lf(a, b), 5E3) : (e = Math.max(...e), c.span.end(void 0, void 0, e), a.Oa.delete(b))
                        }
                    },
                    pf = function({
                        Ja: a
                    }) {
                        a = a.Qa("service_worker.network_behavior_tracer");
                        return {
                            xa: new mf(new nf(a),
                                new of (a))
                        }
                    },
                    Ja = function(a) {
                        if (a.ed) return performance.now();
                        a.ed = !0;
                        return a.bc == null || Date.now() - a.bc < 500 ? 0 : performance.now()
                    },
                    sf = function({
                        location: a,
                        R: b,
                        gb: c,
                        mc: d,
                        userAgent: e,
                        D: {
                            j: f
                        }
                    }) {
                        a = a.origin.includes("localhost");
                        if (b == null || a) b = new qf({});
                        b = kf({
                            R: b,
                            gb: c,
                            mc: d,
                            userAgent: e,
                            D: {
                                j: f
                            }
                        });
                        ({
                            xa: c
                        } = pf({
                            Ja: b
                        }));
                        return {
                            Ja: b,
                            tb: new rf,
                            xa: c
                        }
                    },
                    ca = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
                        if (a == Array.prototype || a == Object.prototype) return a;
                        a[b] = c.value;
                        return a
                    },
                    ba =
                    aa(this);
                da("Object.fromEntries", function(a) {
                    return a ? a : function(b) {
                        var c = {};
                        if (!(Symbol.iterator in b)) throw new TypeError("" + b + " is not iterable");
                        b = b[Symbol.iterator].call(b);
                        for (var d = b.next(); !d.done; d = b.next()) {
                            d = d.value;
                            if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                            c[d[0]] = d[1]
                        }
                        return c
                    }
                });
                var Ud = __webpack_require__(336105).RewriteFrames;
                var de = __webpack_require__(681196).ExtraErrorData;
                var ee = __webpack_require__(802011).Dedupe;
                __webpack_require__.p = self.__canva_public_path__;
                var F = class extends Error {
                    constructor(a) {
                        super(`unhandled case: ${JSON.stringify(a)}`)
                    }
                };
                var tf = class {
                    constructor(a) {
                        this.type = a
                    }
                };
                var uf = class extends tf {
                        required(a, b) {
                            b = b[a];
                            if (b == null || typeof b !== this.type) throw new TypeError(`expected ${this.type} for property "${a}", found: ${JSON.stringify(b)}`);
                            return b
                        }
                        optional(a, b) {
                            b = b[a];
                            if (b != null) {
                                if (typeof b !== this.type) throw new TypeError(`expected optional ${this.type} for property "${a}", found: ${JSON.stringify(b)}`);
                                return b
                            }
                        }
                    },
                    ka = new uf("object");
                var ja = {},
                    ia = {};
                typeof window !== "undefined" && window.location && na();
                var oa = class {
                        get ok() {
                            return !0
                        }
                        map(a) {
                            return new oa(a(this.value))
                        }
                        constructor(a) {
                            this.value = a
                        }
                    },
                    qa = class {
                        get ok() {
                            return !1
                        }
                        map() {
                            return this
                        }
                        constructor(a) {
                            this.error = a
                        }
                    },
                    ta = pa,
                    ua = ra;
                var ya = {
                        A: "string"
                    },
                    vf = {
                        A: "boolean",
                        defaultValue: !1,
                        Ue: 1
                    },
                    wf = {
                        A: "number",
                        defaultValue: 0,
                        Ue: 8
                    },
                    xf = {
                        A: "number",
                        defaultValue: 0
                    },
                    yf = {
                        A: "number",
                        defaultValue: 0
                    },
                    zf = a => {
                        const {
                            tag: b,
                            G: c,
                            W: d
                        } = u(a);
                        return wa(xf, c, b, d)
                    },
                    Af = a => {
                        const {
                            tag: b,
                            G: c,
                            W: d
                        } = u(a);
                        return wa(yf, c, b, d)
                    },
                    Q = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(wf, c, b)
                    },
                    R = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(xf, c, b)
                    },
                    Bf = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(yf, c, b)
                    },
                    Cf = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return {
                            tag: b,
                            K: 4,
                            G: c,
                            A: xf.A
                        }
                    },
                    S = a => {
                        const {
                            tag: b,
                            G: c,
                            W: d
                        } = u(a);
                        return wa(ya, c, b, d)
                    },
                    T = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(ya, c, b)
                    },
                    Df = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return {
                            tag: b,
                            K: 4,
                            G: c,
                            A: ya.A
                        }
                    },
                    U = a => {
                        const {
                            tag: b,
                            G: c,
                            W: d
                        } = u(a);
                        return wa(vf, c, b, d)
                    },
                    V = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(vf, c, b)
                    },
                    Ef = za(ya),
                    Ff = za("object");
                var Gf = J(() => ({
                    M: x(2, "CONSOLE")
                }));
                var Hf = L(() => [1, 2, 3], 1);
                var If = J(() => ({
                    name: S(1),
                    value: S(2)
                }));
                var Jf = J(() => ({
                    Le: V(1)
                }));
                var Kf = J(() => ({
                    hh: V(1),
                    ci: R(2),
                    di: R(3),
                    ei: R(4)
                }));
                var Lf = J(() => ({
                    type: x(1, "STRING"),
                    value: S(1)
                }));
                var Mf = J(() => ({
                    type: x(2, "BOOL"),
                    value: U(1)
                }));
                var Nf = J(() => ({
                    type: x(3, "INT"),
                    value: zf(1)
                }));
                var Of = J(() => {
                    const {
                        tag: a,
                        G: b,
                        W: c
                    } = u(1);
                    return {
                        type: x(4, "DOUBLE"),
                        value: wa(wf, b, a, c)
                    }
                });
                var Hd = J(() => ({
                    type: x(5, "ARRAY"),
                    values: C(1, Pf)
                }));
                var Jd = J(() => ({
                    type: x(6, "KVLIST"),
                    values: C(1, Qf)
                }));
                var Pf = K(() => ({
                    type: [1, Lf, 2, Mf, 3, Nf, 4, Of, 5, Hd, 6, Jd]
                }), () => ({}));
                var Qf = J(() => ({
                    name: S(1),
                    value: y(2, Pf)
                }));
                var Rf = J(() => ({
                    M: x(3, "SENTRY"),
                    dsn: T(28),
                    environment: T(30),
                    release: T(34),
                    sampleRate: Q(29),
                    tracesSampleRate: Q(31),
                    eh: V(32),
                    Mf: E(33, Hf),
                    tags: C(35, If),
                    flags: B(36, Jf),
                    bi: B(37, Kf),
                    extra: C(38, Qf),
                    Af: Q(39)
                }));
                var Sf = K(() => ({
                    M: [2, Gf, 3, Rf]
                }), () => ({}));
                var Tf = () => ({
                    oh: V(5),
                    Nb: R(6),
                    Mb: R(7),
                    Qe: R(8),
                    mh: V(9),
                    Di: Q(10),
                    lg: Q(11),
                    source: T(13),
                    ha: T(14),
                    ja: T(4),
                    Hf: T(17),
                    deviceId: T(18),
                    Bg: T(15),
                    Bh: V(16),
                    th: V(19),
                    dh: V(20),
                    uh: V(21),
                    sh: V(22),
                    yg: Df(23)
                });
                var Uf = J(() => ({ ...Tf(),
                    M: x(1, "HTTP"),
                    app: S(27),
                    endpoint: S(28),
                    release: T(29),
                    Ve: T(31),
                    kh: V(32),
                    nh: V(33),
                    platform: T(35),
                    variant: T(36)
                }));
                var Vf = J(() => ({ ...Tf(),
                    M: x(2, "CONSOLE"),
                    app: S(27)
                }));
                var qf = J(() => ({ ...Tf(),
                    M: x(3, "NOOP")
                }));
                var Wf = K(() => ({
                    M: [1, Uf, 2, Vf, 3, qf]
                }), Tf);
                var sd = class {
                    constructor(a, b, c, d) {
                        this.requestHandler = a;
                        this.tb = b;
                        this.xa = c;
                        this.l = d
                    }
                };
                var Ua = class {
                    constructor({
                        fb: a
                    }) {
                        this.fb = a
                    }
                };
                var N = class extends Error {
                        constructor(a, b) {
                            super(a);
                            this.sampleRate = b;
                            this.sampleRate = Qa(b)
                        }
                    },
                    ge = class {
                        setupOnce(a, b) {
                            a((c, d) => {
                                const e = b().getIntegration(ge);
                                if (!e) return c;
                                if (!(Math.random() < Ra(e, d === null || d === void 0 ? void 0 : d.originalException, c.level))) return null;
                                d = {
                                    sampleRate: Ra(this, d === null || d === void 0 ? void 0 : d.originalException)
                                };
                                c.extra = c.extra != null ? { ...c.extra,
                                    ...d
                                } : d;
                                c.tags = c.tags != null ? { ...c.tags,
                                    ...d
                                } : d;
                                return c
                            })
                        }
                        constructor(a, b) {
                            this.bd = a;
                            this.ad = b;
                            this.name = ge.id;
                            this.bd = Qa(a);
                            this.ad =
                                Qa(b)
                        }
                    };
                ge.id = "Sampling";
                var Va = class {
                    constructor(a) {
                        this.j = a
                    }
                };
                var qd = class {
                    constructor(a, b, c, d, e, f) {
                        this.Ic = a;
                        this.C = b;
                        this.j = c;
                        this.Ne = d;
                        this.zf = e;
                        this.Vf = f
                    }
                };
                var Xa = class {
                        Nd(a) {
                            if (a.status !== 401) return a
                        }
                    },
                    Ya = class {
                        Nd(a) {
                            return a
                        }
                    };
                var Xf = class {
                        async
                        continue (a) {
                            a = await cb(this, a);
                            if (a != null) return new Xf(a)
                        }
                        async update(a) {
                            a = this.cursor.update(a);
                            return this.J(a)
                        }
                        async delete() {
                            const a = this.cursor.delete();
                            return this.J(a)
                        }
                        constructor(a) {
                            this.cursor = a;
                            this.J = bb
                        }
                    },
                    Yf = class extends Xf {
                        async
                        continue (a) {
                            a = await cb(this, a);
                            if (a != null) return new Yf(a)
                        }
                        get value() {
                            return this.cursor.value
                        }
                        constructor(a) {
                            super(a);
                            this.cursor = a
                        }
                    };
                var Zf = class {
                    async get(a) {
                        a = this.index.get(a);
                        return this.J(a)
                    }
                    async getAll(a, b) {
                        a = this.index.getAll(a, b);
                        return this.J(a)
                    }
                    async getAllKeys(a, b) {
                        a = this.index.getAllKeys(a, b);
                        return this.J(a)
                    }
                    async count(a) {
                        a = this.index.count(a);
                        return this.J(a)
                    }
                    async openCursor(a, b) {
                        a = this.index.openCursor(a, b);
                        a = await this.J(a);
                        return a != null ? new Yf(a) : void 0
                    }
                    async openKeyCursor(a, b) {
                        a = this.index.openKeyCursor(a, b);
                        a = await this.J(a);
                        return a != null ? new Xf(a) : void 0
                    }
                    constructor(a) {
                        this.index = a;
                        this.J = bb
                    }
                };
                var $f = class {
                    index(a) {
                        return new Zf(this.store.index(a))
                    }
                    async put(a, b) {
                        a = this.store.put(a, b);
                        return this.J(a)
                    }
                    async get(a) {
                        a = this.store.get(a);
                        return this.J(a)
                    }
                    async delete(a) {
                        a = this.store.delete(a);
                        return this.J(a)
                    }
                    async clear() {
                        const a = this.store.clear();
                        return this.J(a)
                    }
                    async getAll(a, b) {
                        a = this.store.getAll(a, b);
                        return this.J(a)
                    }
                    async getAllKeys(a, b) {
                        a = this.store.getAllKeys(a, b);
                        return this.J(a)
                    }
                    async count(a) {
                        a = this.store.count(a);
                        return this.J(a)
                    }
                    async openCursor(a, b) {
                        a = this.store.openCursor(a,
                            b);
                        a = await this.J(a);
                        return a != null ? new Yf(a) : void 0
                    }
                    async openKeyCursor(a, b) {
                        a = this.store.openKeyCursor(a, b);
                        a = await this.J(a);
                        return a != null ? new Xf(a) : void 0
                    }
                    createIndex(a, b, c) {
                        return this.store.createIndex(a, b, c)
                    }
                    deleteIndex(a) {
                        return this.store.deleteIndex(a)
                    }
                    constructor(a) {
                        this.store = a;
                        this.J = bb
                    }
                };
                var ag = class {
                        objectStore(a) {
                            a = this.ca.objectStore(a);
                            return new $f(a)
                        }
                        abort() {
                            this.ca.abort()
                        }
                        commit() {
                            this.ca.commit()
                        }
                        get error() {
                            return this.ca.error
                        }
                        constructor(a) {
                            this.ca = a;
                            this.sg = eb(this)
                        }
                    },
                    db = class extends Error {
                        constructor() {
                            super("Transaction was aborted")
                        }
                    };
                var fb = class {
                    transaction(a, b) {
                        return new ag(this.db.transaction(a, b))
                    }
                    createObjectStore(a, b) {
                        return new $f(this.db.createObjectStore(a, b))
                    }
                    get objectStoreNames() {
                        return this.db.objectStoreNames
                    }
                    close() {
                        this.db.close()
                    }
                    addEventListener(a, b, c) {
                        this.db.addEventListener(a, b, c)
                    }
                    removeEventListener(a, b, c) {
                        this.db.removeEventListener(a, b, c)
                    }
                    constructor(a) {
                        this.db = a
                    }
                };
                var hb = class extends Error {
                        constructor(a) {
                            super("Quota exceeded");
                            this.cause = a
                        }
                    },
                    ib, sb = class extends Error {
                        constructor() {
                            super("Consent required")
                        }
                    },
                    kb = class extends N {
                        constructor(a) {
                            super("IndexedDb Database Error", 0);
                            this.cause = a
                        }
                    },
                    lb, ub = class extends Error {
                        constructor() {
                            super("Maximum number of rows exceeded for put request")
                        }
                    },
                    tb = class extends Error {
                        constructor(a) {
                            super("Failed to deserialize stored data");
                            this.cause = a
                        }
                    };
                var nb = class {
                    get mf() {
                        return this.connection != null
                    }
                    transaction(a, b) {
                        if (this.connection == null) throw Error("Attempted to open a transaction on a closed connection");
                        self.clearTimeout(this.Ab);
                        this.Ab = void 0;
                        const c = this.connection;
                        try {
                            this.wc++;
                            const d = c.transaction(a, b),
                                e = d.sg;
                            e.catch(() => this.dispose()).finally(() => {
                                this.wc--;
                                this.wc <= 0 && (this.Ab = self.setTimeout(() => {
                                    this.dispose()
                                }, 2500))
                            });
                            return {
                                transaction: d,
                                Sd: e
                            }
                        } catch (d) {
                            throw this.dispose(), d;
                        }
                    }
                    dispose() {
                        var a;
                        (a = this.connection) === null || a ===
                            void 0 || a.close();
                        this.connection = void 0;
                        self.clearTimeout(this.Ab)
                    }
                    constructor(a) {
                        this.connection = a;
                        this.wc = 0
                    }
                };
                var xb = class {
                    constructor(a, b) {
                        this.hf = a;
                        this.l = b
                    }
                };
                var wb = class {
                    constructor(a, b) {
                        this.md = a;
                        this.l = b
                    }
                };
                var vb = class {
                    async put(a, b, c) {
                        await Ab(this);
                        const d = Cb(a, this.Xb.za(b));
                        return O(this.oa, {
                            H: this.H,
                            mode: "readwrite",
                            Y: async e => {
                                const {
                                    Ui: f
                                } = c !== null && c !== void 0 ? c : {};
                                if (f != null) {
                                    r(f > 0);
                                    const [g, h] = await Promise.all([e.get(a).then(k => !!k), e.count()]);
                                    if (h + (g ? 0 : 1) > f) throw new ub;
                                }
                                await e.put(d)
                            },
                            methodName: "put"
                        })
                    }
                    async get(a) {
                        const b = await O(this.oa, {
                            H: this.H,
                            mode: "readonly",
                            Y: async c => c.get(a),
                            methodName: "get"
                        });
                        return b != null ? this.S(Bb(b)) : void 0
                    }
                    async delete(a) {
                        return O(this.oa, {
                            H: this.H,
                            mode: "readwrite",
                            Y: async b => {
                                Array.isArray(a) ? await Promise.all(a.map(c => b.delete(c))) : await b.delete(a)
                            },
                            methodName: "delete"
                        })
                    }
                    async count() {
                        return O(this.oa, {
                            H: this.H,
                            mode: "readonly",
                            Y: async a => a.count(),
                            methodName: "count"
                        })
                    }
                    async update(a, b) {
                        await Ab(this);
                        return O(this.oa, {
                            H: this.H,
                            mode: "readwrite",
                            Y: async c => {
                                var d = await c.get(a);
                                d = d ? {
                                    value: this.S(Bb(d))
                                } : void 0;
                                d = b(d);
                                d != null ? await c.put(Cb(a, this.Xb.za(d.value))) : await c.delete(a)
                            },
                            methodName: "update"
                        })
                    }
                    async getAll(a, b) {
                        const c = await O(this.oa, {
                                H: this.H,
                                mode: "readonly",
                                Y: async f => {
                                    const g = typeof b === "string" ? f.index(b) : f;
                                    try {
                                        return (await g.getAll(a)).map(h => ta(h))
                                    } catch (h) {
                                        return f = await g.getAllKeys(a), Promise.all(f.map(async k => {
                                            try {
                                                const l = await g.get(k);
                                                return ta(l)
                                            } catch (l) {
                                                return ua({
                                                    key: String(k),
                                                    error: l instanceof Error ? l : Error(String(l))
                                                })
                                            }
                                        }))
                                    }
                                },
                                methodName: "getAll"
                            }),
                            d = [],
                            e = [];
                        for (const f of c)
                            if (f.ok) try {
                                d.push({
                                    key: Eb(f.value),
                                    Bd: this.S(Bb(f.value))
                                })
                            } catch (g) {
                                e.push({
                                    key: Eb(f.value),
                                    error: g instanceof Error ? g : Error(String(g))
                                })
                            } else e.push({
                                key: f.error.key,
                                error: f.error.error
                            });
                        return {
                            items: d,
                            errors: e
                        }
                    }
                    async getAllKeys() {
                        return O(this.oa, {
                            H: this.H,
                            mode: "readonly",
                            Y: async a => (await a.getAllKeys()).map(b => String(b)) || [],
                            methodName: "getAllKeys"
                        })
                    }
                    async clear() {
                        return O(this.oa, {
                            H: this.H,
                            mode: "readwrite",
                            Y: async a => a.clear(),
                            methodName: "clear"
                        })
                    }
                    close() {}
                    S(a) {
                        try {
                            return this.Xb.S(a)
                        } catch (b) {
                            throw new tb(b instanceof Error ? b : Error(String(b)));
                        }
                    }
                    constructor(a, b, c, d) {
                        this.H = a;
                        this.Xb = b;
                        this.oa = c;
                        this.Cb = d
                    }
                };
                var Ib = class {
                    async fetch(a, {
                        B: b
                    }) {
                        return this.l.ob("fetch_from_network", b, async () => {
                            if (this.C.Sa()) throw Error("Is force offline");
                            if (a.request.mode === "navigate") {
                                var c = await a.preloadResponse;
                                if (c != null && c.status !== 401) return c;
                                if (this.Ed != null) return c = await Hb(this.Ed, a.request), this.yc(c)
                            }
                            return this.yc(a.request, {
                                redirect: "follow"
                            })
                        })
                    }
                    constructor(a, b, c, d) {
                        this.C = a;
                        this.Ed = b;
                        this.l = c;
                        this.yc = d
                    }
                };
                var Jb = class {
                    constructor(a) {
                        this.options = {
                            bg: self.navigator.userAgent,
                            targetOrigin: self.location.origin
                        };
                        this.Nf = a
                    }
                };
                var bg = L(() => [1, 2, 3, {
                    Ya: !0
                }]);
                var cg = J(() => ({
                    status: D(1, bg)
                }));
                var Sb = class {
                    async sc(a) {
                        a = await this.fa.get(a);
                        return a === null || a === void 0 ? void 0 : a.status
                    }
                    constructor(a, b = {
                        Ga: (...c) => zb(...c)
                    }) {
                        this.fa = b.Ga("private_data_persist_consent", cg, void 0, [], a)
                    }
                };
                var dg = J(() => ({
                    ha: S(1),
                    ja: S(2)
                }));
                var Rb = class {
                    async put(a, {
                        ha: b,
                        ja: c
                    }) {
                        await this.fa.put(a, new dg({
                            ha: b,
                            ja: c
                        }))
                    }
                    async getAll() {
                        const {
                            items: a,
                            errors: b
                        } = await this.fa.getAll();
                        if (b.length > 0) throw b[0].error;
                        return a.map(c => ({
                            Ai: c.key,
                            Bd: c.Bd
                        }))
                    }
                    async delete(a) {
                        await this.fa.delete(a)
                    }
                    constructor(a, b = {
                        Ga: (...c) => zb(...c)
                    }) {
                        this.fa = b.Ga("storage_layer_name", dg, void 0, [], a)
                    }
                };
                var eg = {
                        editor_page_bootstraps: !0,
                        homepage_bootstraps: !1,
                        lesson_config: !1,
                        offline_designs: !0,
                        offline_document_response: !0,
                        document_resources: !0
                    },
                    fg = {
                        editor_page_bootstraps: [],
                        homepage_bootstraps: [],
                        lesson_config: [],
                        offline_designs: [],
                        offline_document_response: [],
                        document_resources: [{
                            name: "documents",
                            Ib: "E",
                            multiEntry: !0
                        }],
                        storage_layer_name: [],
                        private_data_persist_consent: [],
                        active_user_brand_hint_for_service_worker_to_serve_pages: [],
                        offline_fallback_bootstrap: [],
                        config: [],
                        asset_metadata: [],
                        manifests: [],
                        leadership_lock: [],
                        index_example: [{
                            name: "indexName",
                            Ib: "values",
                            multiEntry: !0
                        }],
                        design_asset_references: [{
                            name: "referrer_ids_idx",
                            Ib: "A",
                            multiEntry: !0
                        }],
                        page_asset_references: [{
                            name: "referrer_ids_idx",
                            Ib: "A",
                            multiEntry: !0
                        }]
                    };
                var Tb = class {
                    constructor(a, b, c, d, e, f = {
                        Ga: (...k) => zb(...k)
                    }, g = eg, h = fg) {
                        this.Sc = a;
                        this.Uf = b;
                        this.Cb = c;
                        this.j = d;
                        this.l = e;
                        this.td = f;
                        this.xe = g;
                        this.nd = h
                    }
                };
                var Jc = class extends Tb {
                    constructor(a, b, c, d, e, f = {
                        Ga: (...k) => zb(...k)
                    }, g = eg, h = fg) {
                        super(a, b, c, d, e, f, g, h);
                        this.Sc = a
                    }
                };
                var Wb;
                var $b = class {
                    get Fc() {
                        return [...this.Uc]
                    }
                    constructor({
                        Fc: a,
                        Ra: b,
                        Kb: c
                    }) {
                        this.Uc = new Set(a.filter(d => !!d));
                        this.Kb = c || void 0;
                        this.Ra = b
                    }
                };
                var dc = class {
                        async rc() {
                            this.ka == null && (this.ka = self.caches.open(this.cacheName), self.setTimeout(() => {
                                this.ka = void 0
                            }, 5E3));
                            return this.ka
                        }
                        constructor(a, b) {
                            this.l = b;
                            this.options = void 0;
                            this.cacheName = gg[1];
                            this.db = Ob(a, hg[1], $b)
                        }
                    },
                    hg = {
                        [0]: "design_asset_references",
                        [1]: "page_asset_references"
                    },
                    gg = {
                        [0]: "media",
                        [1]: "assets-2"
                    };
                var ec = class {
                    Ca({
                        url: a
                    }) {
                        return this.C.options.se !== 1 ? a.hostname.startsWith("chunk-composing.") && a.searchParams.get("preserve-source-map-comments") !== "true" : !1
                    }
                    async handle(a, b) {
                        return this.I.fetch(a, {
                            B: b
                        }).then(c => {
                            a.waitUntil(cc(this, c, b));
                            return c
                        })
                    }
                    constructor(a, b, c, d, e, f, g) {
                        this.C = a;
                        this.N = b;
                        this.I = c;
                        this.re = d;
                        this.ue = e;
                        this.j = f;
                        this.l = g;
                        this.name = "chunk-composing"
                    }
                };
                var od = class {
                    Ca(a) {
                        return a.url.pathname === "/__sw_debug_info"
                    }
                    async handle() {
                        return new Response(this.cb.Xe(), {
                            headers: {
                                "content-type": "text/plain"
                            }
                        })
                    }
                    constructor(a) {
                        this.cb = a;
                        this.name = "debug_info"
                    }
                };
                var ig = /[^a-zA-Z0-9]/g,
                    nc = class {
                        async match(a, {
                            B: b
                        } = {}) {
                            const c = async d => {
                                try {
                                    const e = await (await this.rc()).match(this.Rc(a));
                                    d === null || d === void 0 || d.Aa(`${this.Yc}.match.${e!=null?"cache_hit":"cache_miss"}`);
                                    d === null || d === void 0 || d.setAttribute("cache_hit", e != null);
                                    return e
                                } catch (e) {
                                    this.ka = null, d === null || d === void 0 || d.setStatus("error"), this.j.error(new N(e instanceof Error ? e.message : String(e), .01))
                                }
                            };
                            return this.l != null && b != null ? this.l.ob(`${this.Yc}.match`, b, c) : c()
                        }
                        async rc() {
                            this.ka == null &&
                                (this.ka = caches.open(this.cacheName), setTimeout(() => {
                                    this.ka = null
                                }, 1E3));
                            return this.ka
                        }
                        constructor({
                            cacheName: a,
                            Rc: b = e => e
                        }, c, d) {
                            this.j = c;
                            this.l = d;
                            this.ka = null;
                            this.cacheName = a;
                            this.Yc = `browser_cache_storage.${a.replace(ig,"_")}`;
                            this.Rc = b
                        }
                    };
                var jg = new Set("audio-private audio-public audio-upload blobs document-export font-private font-public media media-private media-public media-transformation mockup-assets print-product-assets template upload video-placeholders video-private-assets video-public video-upload".split(" ")),
                    oc = class {
                        Ca({
                            url: a
                        }) {
                            if (this.C.options.cd === 1) return !1;
                            if (a.hostname === "localhost" && !/\.js$|\.css$/.test(a.pathname)) return !0;
                            [a] = a.hostname.split(".");
                            return jg.has(a)
                        }
                        async handle(a, b) {
                            if (this.C.options.cd === 2) try {
                                return await this.I.fetch(a, {
                                    B: b
                                })
                            } catch (d) {
                                a = await hc(this, a, b);
                                if (a != null) return a;
                                throw d;
                            }
                            const c = await hc(this, a, b);
                            return c !== null && c !== void 0 ? c : this.I.fetch(a, {
                                B: b
                            })
                        }
                        constructor(a, b, c, d) {
                            this.C = a;
                            this.wf = b;
                            this.Ub = c;
                            this.I = d;
                            this.name = "design_asset"
                        }
                    };
                var jc = /^bytes=(\d+)?-(\d+)?$/;
                var kc = ["X-Shaka-From-Cache", "true"],
                    lc = class {
                        constructor({
                            j: a
                        }) {
                            this.j = a
                        }
                    };
                var qc = class {
                    Ca({
                        url: a
                    }) {
                        return this.C.options.xd !== 1 ? a.hostname === "localhost" && /\.js$|\.css$/.test(a.pathname) && !a.pathname.includes("_web_worker") ? !0 : a.href.startsWith(this.options.N) : !1
                    }
                    async handle(a, b) {
                        if (this.C.options.xd === 2) try {
                            return await this.I.fetch(a, {
                                B: b
                            })
                        } catch (d) {
                            a = await this.Vc.match(a.request.url, {
                                B: b
                            });
                            if (a != null) return a;
                            throw d;
                        }
                        const c = await this.Vc.match(a.request.url, {
                            B: b
                        });
                        return c != null ? c : this.I.fetch(a, {
                            B: b
                        })
                    }
                    constructor(a, b, c, d) {
                        this.options = a;
                        this.C = b;
                        this.I = c;
                        this.Vc =
                            d;
                        this.name = "page_asset"
                    }
                };
                var kg = L(() => [1, 2], 1);
                var Pb = J(() => ({
                    app: S(1),
                    url: S(2),
                    title: S(3),
                    locale: S(4),
                    direction: D(5, kg),
                    timestamp: Af(7),
                    Ba: S(8),
                    Pc: S(9),
                    nb: S(10),
                    oc: T(11),
                    pi: Ef(12)
                }));
                var sc = class {
                    async ib(a) {
                        a = await this.fa.get(a.key);
                        const b = Date.now() / 1E3;
                        if (this.options.rb || a && a.timestamp + 1209600 > b) return a
                    }
                    constructor(a, b) {
                        this.options = a;
                        this.fa = b
                    }
                };
                var yc = class {
                    constructor(a) {
                        this.path = a;
                        this.Va = new Map
                    }
                };
                var Kc = class {
                    normalizeUrl({
                        url: a,
                        app: b
                    }) {
                        switch (b) {
                            case "home":
                            case "offline_fallback":
                                return {
                                    key: a.href
                                };
                            case "editor":
                                b = ha(Cc(a.href), `Attempted to load editor bootstrap with invalid url ${a}`);
                                a = location.origin;
                                b = {
                                    id: b.id
                                };
                                var c = zc(["design", b.id]);
                                b = Bc(Ac(c, b.Yi));
                                return {
                                    key: a + b
                                };
                            default:
                                throw new F(b);
                        }
                    }
                };
                var W = J(() => ({
                    filename: S(1),
                    Ph: V(4),
                    locale: T(5),
                    Jd: T(6)
                }));
                var lg = J(() => ({
                    ab: C(1, W),
                    Fa: C(2, W)
                }));
                var mg = J(() => ({
                    lf: y(1, lg),
                    ae: y(2, lg)
                }));
                var ng = J(() => ({
                    Rd: y(1, mg)
                }));
                var og = J(() => ({
                    Qi: S(1)
                }));
                var pg = J(() => ({
                    Zi: Bf(1)
                }));
                var qg = J(() => ({
                    ab: Df(1),
                    Fa: Df(2),
                    Oi: Ef(3)
                }));
                var rg = J(() => ({
                    rel: S(1),
                    href: S(2),
                    Jd: T(6)
                }));
                var sg = J(() => ({
                    ab: C(1, W),
                    Fa: C(2, W)
                }));
                var tg = J(() => ({
                    id: S(1),
                    Pg: C(2, W),
                    Rh: C(3, W),
                    Je: C(4, W),
                    Th: Ff(5, sg),
                    Wh: y(6, sg),
                    Gi: y(7, sg),
                    Pi: Df(8),
                    Sh: zf(9),
                    Ci: V(10)
                }));
                var ug = J(() => ({
                    app: S(1),
                    Wc: y(9, lg),
                    Fd: y(8, ng),
                    Je: C(10, W),
                    Bi: C(13, W),
                    fonts: B(14, og),
                    build: y(3, pg),
                    pf: Ff(4, qg),
                    Dc: T(6),
                    ni: T(15),
                    oi: T(16),
                    viewport: T(7),
                    links: C(11, rg),
                    wh: T(18),
                    Hg: Ff(17, tg),
                    rj: Ff(25, tg)
                }));
                var Lc = J(() => ({
                    Lb: y(1, ug),
                    commit: S(5),
                    variant: T(4),
                    timestamp: Af(2),
                    locale: S(3),
                    direction: D(6, kg),
                    Mc: S(7)
                }));
                var Nc = class {
                    constructor(a, b) {
                        this.fa = a;
                        this.l = b
                    }
                };
                var Ic = J(() => ({
                    ha: S(1),
                    ja: S(2)
                }));
                var vg = L(() => [0, "CLIENT_FULL", 1, "CLIENT_HYDRATE", 2, "SERVER_FULL"]);
                var wg = L(() => [1, 3, 2], 1);
                var xg = J(() => ({
                    action: x(1, "REGISTER"),
                    Hi: S(1),
                    scope: S(2)
                }));
                var yg = J(() => ({
                    action: x(2, "UNREGISTER")
                }));
                var zg = J(() => ({
                    action: x(3, "UPDATE")
                }));
                var Ag = J(() => ({
                    action: x(4, "RETAIN")
                }));
                var Bg = K(() => ({
                    action: [1, xg, 2, yg, 3, zg, 4, Ag]
                }), () => ({}));
                var Cg = J(() => ({
                    tj: S(1),
                    sj: R(2)
                }));
                var Dg = L(() => [1, 2]);
                var Eg = L(() => [1, 2, 3, 4]);
                var Fg = J(() => ({
                    category: D(1, Eg),
                    name: S(2)
                }));
                var Gg = J(() => ({
                    xg: U(15),
                    Mi: U(12),
                    bj: U(13),
                    Gg: U(1),
                    Zg: U(2),
                    bh: U(7),
                    gh: U(14),
                    Lg: S(3),
                    Xh: S(9),
                    ri: S(10),
                    yi: C(5, Fg),
                    ki: T(6),
                    Mh: Cf(16),
                    Kg: Cf(17),
                    Yg: V(18),
                    Gh: V(19),
                    qh: V(20),
                    rh: V(21),
                    Jg: Bf(22)
                }));
                var Hg = J(() => ({
                    traceId: S(1),
                    spanId: S(2),
                    Nc: zf(3)
                }));
                var Ig = J(() => ({
                    href: S(1),
                    Jd: T(3)
                }));
                var Jg = () => ({
                    Ei: U(12),
                    ih: U(14),
                    commit: S(5),
                    timestamp: Bf(11),
                    j: y(6, Sf),
                    zi: D(7, vg),
                    O: D(9, wg),
                    Ki: B(15, Bg),
                    qj: B(4, Cg),
                    gi: T(13),
                    od: E(17, Dg),
                    Xi: B(18, Gg),
                    Kd: B(20, Wf),
                    ji: B(24, Hg),
                    mi: C(21, Ig),
                    cj: Df(22),
                    pe: T(34)
                });
                var Kg = J(() => ({
                    Vi: S(1),
                    Ah: Af(2)
                }));
                var Lg = J(() => ({
                    $d: T(1),
                    Cg: T(9),
                    ce: T(2),
                    de: T(3),
                    Xd: T(14),
                    og: T(12),
                    he: T(4),
                    qf: T(10),
                    app: T(11),
                    le: T(5),
                    ne: T(6),
                    Ji: T(7),
                    Og: Ff(8, Kg)
                }));
                var Mg = J(() => ({
                    $d: T(1),
                    ce: T(2),
                    de: T(3),
                    Xd: T(10),
                    og: T(9),
                    he: T(4),
                    qf: T(5),
                    app: T(6),
                    le: T(7),
                    ne: T(8)
                }));
                var Ng = J(() => ({
                    url: S(1),
                    context: B(2, Mg),
                    Yh: R(3)
                }));
                var Og = J(() => ({
                    Pe: S(27)
                }));
                var Pg = J(() => ({
                    Pe: S(27),
                    Mg: T(28),
                    locale: S(29),
                    Ig: R(30),
                    ja: T(31),
                    Hf: T(37),
                    ha: T(34),
                    yh: T(32),
                    Dh: T(33),
                    deviceId: T(35)
                }));
                var Qg = () => ({
                    fj: B(3, Og),
                    xh: y(4, Pg),
                    zh: Ef(5),
                    appName: T(9),
                    Nh: Cf(16),
                    Ti: Cf(17),
                    ah: U(18),
                    Wg: V(19)
                });
                var Rg = J(() => ({ ...Qg(),
                    M: x(2, "CONSOLE")
                }));
                var Sg = J(() => ({ ...Qg(),
                    M: x(8, "NOOP")
                }));
                var Tg = J(() => ({
                    containerId: S(1)
                }));
                var Ug = J(() => ({
                    vg: S(1),
                    projectId: S(2)
                }));
                var Vg = J(() => ({
                    be: S(1)
                }));
                var Wg = J(() => ({}));
                var Xg = J(() => ({
                    Jh: B(2, Tg),
                    hi: B(4, Ug),
                    Dg: B(6, Vg),
                    Ih: B(7, Wg)
                }));
                var Yg = J(() => ({ ...Qg(),
                    M: x(14, "PRODUCT_ANALYTICS"),
                    plugins: B(32, Xg),
                    oj: R(36),
                    ph: U(37),
                    pj: U(40),
                    fh: U(45),
                    $g: U(47)
                }));
                var Zg = K(() => ({
                    M: [2, Rg, 8, Sg, 14, Yg]
                }), Qg);
                var $g = J(() => ({
                    M: x(1, "NONE")
                }));
                var ah = J(() => ({
                    M: x(2, "FULLSTORY"),
                    ii: S(28)
                }));
                var bh = K(() => ({
                    M: [1, $g, 2, ah]
                }), () => ({}));
                var X = L(() => [1, 2, 3, 4]);
                var ch = J(() => ({
                    Ug: E(1, X),
                    wi: E(2, X),
                    $h: E(4, X),
                    Zh: E(8, X),
                    ej: E(5, X),
                    Fi: E(6, X),
                    Tg: E(7, X),
                    Rg: E(10, X),
                    Li: E(9, X),
                    gj: E(11, X),
                    Vg: E(12, X),
                    Fg: E(13, X),
                    Ng: E(14, X),
                    wg: E(15, X)
                }));
                var dh = J(() => ({
                    li: y(1, ch),
                    ui: U(2)
                }));
                var eh = J(() => ({
                    ha: T(1),
                    be: S(2),
                    aj: U(3),
                    dj: B(4, dh)
                }));
                var fh = J(() => ({
                    url: S(1),
                    Ag: T(2),
                    $i: U(3),
                    kj: T(4)
                }));
                var gh = J(() => ({ ...Jg(),
                    mode: x(2, "REAL"),
                    Lh: y(27, Lg),
                    nj: y(30, Ng),
                    zg: y(28, Zg),
                    Oh: B(29, bh),
                    Eg: B(32, eh),
                    Ii: B(31, fh)
                }));
                var hh = J(() => ({ ...Jg(),
                    mode: x(3, "FAKE"),
                    Ri: zf(27),
                    hostname: T(28),
                    mj: R(29)
                }));
                var Gc = K(() => ({
                    mode: [2, gh, 3, hh]
                }), Jg);
                var Mc = class {
                    constructor(a, b, c, d) {
                        this.options = a;
                        this.ge = b;
                        this.Kf = c;
                        this.sf = d
                    }
                };
                var ih = ["iOi0iWfdfKTOZE7Vp8+d8Cvsk9vE8DL4J4a5fgzlsUk="],
                    jh = class {
                        createPolicy({
                            page: a,
                            nonce: b
                        }) {
                            return [
                                ["frame-ancestors", "'none'"],
                                ["base-uri", "'self'"],
                                ["object-src", "'none'"],
                                ["script-src", `'report-sample' 'strict-dynamic' 'unsafe-eval' 'nonce-${b}' ${ih.map(c=>`'sha256-${c}'`).join(" ")}`],
                                ["report-uri", `https://csp.canva.com/_cspreport?app=sw_${a}&ro=true`]
                            ].map(([c, d]) => `${c} ${d}`).join("; ")
                        }
                    };
                var Wc = class {
                    constructor(a) {
                        this.config = a
                    }
                };
                var kh = class {
                    constructor() {
                        this.crypto = self.crypto
                    }
                };
                var Vc = class {
                    constructor(a) {
                        this.dd = a
                    }
                };
                var ld = class {
                    constructor(a) {
                        var b = id();
                        this.rules = a;
                        this.fallback = b
                    }
                };
                var Xc = class {
                    constructor(a, b, c, d, e, f) {
                        var g = new kh,
                            h = new jh;
                        this.config = a;
                        this.Xf = b;
                        this.j = c;
                        this.yd = d;
                        this.Cf = e;
                        this.Bf = g;
                        this.ze = h;
                        this.l = f
                    }
                };
                var Zc = class {
                    Ca({
                        request: a
                    }) {
                        return this.C.options.Rb !== 1 ? a.mode === "navigate" : !1
                    }
                    async handle(a, b) {
                        let c;
                        try {
                            if (c = await this.I.fetch(a, {
                                    B: b
                                }), (c === null || c === void 0 ? void 0 : c.status) !== 0 || (c === null || c === void 0 ? 0 : c.type.includes("opaque"))) return c
                        } catch (e) {}
                        var d = this.C;
                        return d.options.Rb !== 5 && d.options.Rb !== 1 && (d = this.options.ra, a = Uc(this.If, new URL(a.request.url), {
                            B: b
                        }), a = d != null && d > 500 ? await Promise.race([a, $a(d)]) : await a, a === null || a === void 0 ? 0 : a.ok) ? a : c !== null && c !== void 0 ? c : Response.error()
                    }
                    constructor(a,
                        b, c, d) {
                        this.options = a;
                        this.C = b;
                        this.I = c;
                        this.If = d;
                        this.name = "page"
                    }
                };
                var dd = class {
                    constructor() {
                        this.root = {
                            children: new Map,
                            config: void 0
                        }
                    }
                };
                var ed = "/ /folder /folder/* /folder/*/designs /folder/*/designs/* /folder/*/images /folder/*/images/* /folder/*/videos /folder/*/videos/* /folder/*/templates /folder/*/templates/* /your-projects /your-projects/videos /your-projects/videos/* /projects /projects/videos /projects/videos/* /library/* /library/*/videos /library/*/videos/* /dream-lab /assistant /assistant/* /ai /ai/* /ai/code /ai/code/* /s/designs /s/templates /offline-designs /shared-with-you /rewards /planner /design-reviews /classwork /menu /creators/apply /creators/template /creators/template/dashboard /creators/template/inspiration /creators/element /creators/my-items /creators/resources /creators/resources/videos /creators/resources/videos/* /creators/verify/* /creators/inspiration /creators/inspiration/campaigns/* /creators/welcome /creator-hub /contributors/upload /earnings /teams /teams/apps /teams/brand-control /teams/create /teams/designs /teams/folders /teams/groups /teams/groups/* /teams/layouts /teams/members /teams/settings /teams/timeline /groups/* /groups/*/designs /groups/*/folders /groups/*/members /pro-features /mockups /mockups/collection/* /mockups/mockup/* /smartmockups /smartmockups/collection/* /smartmockups/mockup/* /starred /team-stream /design-stream /trash /_design-spec-selector /your-apps /your-apps/* /portfolio /brand /brand/* /brand/brand-templates /brand/brand-templates/* /search/templates /search/designs /search /templates".split(" "),
                    fd = ["/settings", "/settings/*"];
                var nd = class {
                    Ca({
                        url: a
                    }) {
                        return a.pathname === "/popout"
                    }
                    async handle(a, b) {
                        try {
                            return await this.I.fetch(a, {
                                B: b
                            })
                        } catch (c) {
                            return new Response(null, {
                                headers: {
                                    "content-type": "text/plain",
                                    "content-security-policy": "frame-ancestors 'self'; base-uri 'self'; object-src 'none'; script-src 'none'; report-uri https://csp.canva.com/_cspreport?app=popout;"
                                }
                            })
                        }
                    }
                    constructor(a) {
                        this.I = a;
                        this.name = "popout"
                    }
                };
                var lh = ["/_ajax/", "/local-intercept/", "/_online"],
                    mh = new Set(["GET"]),
                    md = class {
                        resolve(a) {
                            if (mh.has(a.method)) {
                                var b = new URL(a.url);
                                if (!lh.some(c => b.pathname.startsWith(c)) && (b.hostname !== "localhost" || b.origin === this.options.ag)) return this.Wf.find(c => c.Ca({
                                    request: a,
                                    url: b
                                }))
                            }
                        }
                        constructor(a) {
                            this.options = {
                                ag: self.location.origin
                            };
                            this.Wf = a
                        }
                    };
                var jd = class {
                    Ca({
                        url: a
                    }) {
                        return this.C.options.qg !== 1 ? a.pathname.startsWith("/_web_worker/") : !1
                    }
                    async handle(a, b) {
                        try {
                            return await this.I.fetch(a, {
                                B: b
                            })
                        } catch (c) {
                            a = await this.pg.match(a.request.url, {
                                B: b
                            });
                            if (a != null) return a;
                            throw c;
                        }
                    }
                    constructor(a, b, c) {
                        this.C = a;
                        this.I = b;
                        this.pg = c;
                        this.name = "web_worker"
                    }
                };
                var nh = () => ({
                    requestId: S(1)
                });
                var oh = J(() => ({ ...nh(),
                    message: x(2, "OVERRIDE_NETWORK_STRATEGY"),
                    Jb: U(2)
                }));
                var ph = J(() => ({ ...nh(),
                    message: x(3, "GET_SW_RELEASE")
                }));
                var qh = J(() => ({ ...nh(),
                    message: x(4, "SKIP_WAITING")
                }));
                var ud = K(() => ({
                    message: [2, oh, 3, ph, 4, qh]
                }), nh);
                var vd = J(() => ({
                    message: x(3, "GET_SW_RELEASE"),
                    requestId: S(1),
                    release: S(2)
                }));
                var wd = J(() => ({
                    message: x(2, "OVERRIDE_NETWORK_STRATEGY"),
                    requestId: S(1),
                    Sa: U(2)
                }));
                var xd = J(() => ({
                    message: x(4, "SKIP_WAITING"),
                    requestId: S(1)
                }));
                var yd = J(() => ({
                    message: x(1, "MESSAGE_NOT_RECOGNISED"),
                    Sf: S(1)
                }));
                var zd = K(() => ({
                    message: [1, yd, 2, wd, 3, vd, 4, xd]
                }), () => ({}));
                var Bd = class {
                    constructor(a, b, c, d) {
                        this.options = a;
                        this.serviceWorker = b;
                        this.C = c;
                        this.l = d
                    }
                };
                var rh = class {
                    Sa() {
                        return this.Jb
                    }
                    constructor(a) {
                        this.options = a;
                        this.Jb = !1
                    }
                };
                var sh = L(() => [1, "N", 2, "O", 3, "A", 4, "C", {
                    Ya: !0
                }, 5, "B", 6, "D"]);
                var th = J(() => ({
                    ke: S(1),
                    ie: R(2),
                    je: R(3),
                    uj: T(4)
                }));
                var uh = () => ({
                    j: y(1, Sf),
                    O: D(8, wg),
                    cf: D(11, sh),
                    df: D(12, sh),
                    bf: D(7, sh),
                    gf: D(40, sh),
                    af: D(41, sh),
                    jh: U(38),
                    ma: U(39),
                    kb: T(14),
                    Se: R(18),
                    fd: U(20),
                    Ke: U(31),
                    Me: U(21),
                    release: S(22),
                    Kd: B(26, Wf),
                    fg: Q(36),
                    gg: R(37),
                    la: U(30),
                    userAgent: B(35, th)
                });
                var vh = J(() => ({ ...uh(),
                    mode: x(2, "REAL"),
                    N: S(27)
                }));
                var wh = J(() => ({ ...uh(),
                    mode: x(3, "FAKE")
                }));
                var xh = K(() => ({
                    mode: [2, vh, 3, wh]
                }), uh);
                var yh = !1,
                    zh = class {
                        setTag(a, b) {
                            this.tags[a] = b
                        }
                        Zc(a) {
                            return new zh(this, a)
                        }
                        setContext(a) {
                            this.context = a
                        }
                        error(a, b) {
                            this.console.error(...Dd(this, "error", a, b))
                        }
                        F(a, b) {
                            this.console.error(...Dd(this, "error", a, b))
                        }
                        Qd(a, b) {
                            this.console.warn(...Dd(this, "warning", a, b))
                        }
                        info(a, b) {
                            this.console.info(...Dd(this, "info", a, b))
                        }
                        debug(a, b) {
                            this.console.debug(...Dd(this, "debug", a, b))
                        }
                        toJSON() {
                            return {
                                name: this.name,
                                context: this.context,
                                tags: this.tags
                            }
                        }
                        constructor(a = console, b = "default") {
                            this.name = b;
                            this.tags = {};
                            if (!yh &&
                                typeof window === "object") {
                                const c = window.onerror;
                                window.onerror = (...e) => {
                                    typeof c === "function" && c(...e);
                                    console.error("unhandled error:", ...e)
                                };
                                const d = window.onunhandledrejection;
                                window.onunhandledrejection = e => {
                                    typeof d === "function" && d(e);
                                    console.error("[ConsoleErrorClient]: Unhandled promise rejection", e)
                                };
                                yh = !0
                            }
                            r(b.indexOf(".") === -1, "name must not contain a dot");
                            a instanceof zh ? (this.name = `${a.name}.${b}`, this.console = a.console) : this.console = a
                        }
                    };
                var Ah = class {
                    constructor() {
                        this.Gd = {}
                    }
                };
                var ke = class {
                    setupOnce(a, b) {
                        a(c => {
                            const d = b().getIntegration(ke);
                            return d ? Pd(d, c) ? null : c : c
                        })
                    }
                    constructor(a = []) {
                        this.Yd = a;
                        this.name = ke.id
                    }
                };
                ke.id = "FilterErrors";
                var he = class {
                    setupOnce(a, b) {
                        a(c => {
                            b().getIntegration(he);
                            return c
                        })
                    }
                    constructor() {
                        this.name = he.id
                    }
                };
                he.id = "HostRpcServiceErrors";
                var ie = class {
                    setupOnce(a, b) {
                        a(c => {
                            b().getIntegration(ie);
                            return c
                        })
                    }
                    constructor() {
                        this.name = ie.id
                    }
                };
                ie.id = "HttpServiceErrors";
                var Sd = {
                    now: () => Date.now()
                };
                var Bh = class {
                        add(a) {
                            this.bb = this.Ye(this.bb);
                            this.list[this.bb] = a
                        }
                        find(a) {
                            let b = this.bb;
                            do {
                                if (this.list[b] && a(this.list[b])) return this.list[b];
                                b = this.Ze(b)
                            } while (b !== this.bb)
                        }
                        constructor() {
                            this.cc = 10;
                            this.bb = 0;
                            this.Ye = a => (a + 1) % this.cc;
                            this.Ze = a => (a + this.cc - 1) % this.cc;
                            this.list = Array(10)
                        }
                    },
                    fe = class {
                        setupOnce(a, b) {
                            a(c => {
                                const d = b().getIntegration(fe);
                                d && (Td(d, c) ? c = null : d.history.add({
                                    event: c,
                                    timestamp: Sd.now()
                                }));
                                return c
                            })
                        }
                        constructor(a) {
                            this.jg = a;
                            this.name = fe.id;
                            this.history = new Bh
                        }
                    };
                fe.id = "NoSuccessiveEvent";
                var ce = class {
                    setupOnce(a, b) {
                        a(c => {
                            var d, e;
                            if (!b().getIntegration(ce)) return c;
                            var f;
                            c.tags = (f = c.tags) !== null && f !== void 0 ? f : {};
                            c.tags["prior.unhandled.error.count"] = this.Dd;
                            ((e = c.exception) === null || e === void 0 ? 0 : (d = e.values) === null || d === void 0 ? 0 : d.some(g => {
                                var h;
                                return ((h = g.mechanism) === null || h === void 0 ? void 0 : h.handled) === !1
                            })) && this.Dd++;
                            return c
                        })
                    }
                    constructor() {
                        this.name = ce.id;
                        this.Dd = 0
                    }
                };
                var je = class {
                    setupOnce(a, b) {
                        a(c => {
                            const d = b().getIntegration(je);
                            return d ? Yd(d, c) : c
                        })
                    }
                    Kc(a) {
                        var b, c, d;
                        const e = (a === null || a === void 0 ? 0 : a.url) ? Xd(this, a === null || a === void 0 ? void 0 : a.url) : void 0,
                            f = {};
                        if (a === null || a === void 0 ? 0 : (b = a.headers) === null || b === void 0 ? 0 : b["User-Agent"]) f["User-Agent"] = a === null || a === void 0 ? void 0 : a.headers["User-Agent"];
                        if (a === null || a === void 0 ? 0 : (c = a.headers) === null || c === void 0 ? 0 : c.Referer) f.Referer = Xd(this, a === null || a === void 0 ? void 0 : (d = a.headers) === null || d === void 0 ? void 0 : d.Referer);
                        return {
                            url: e,
                            headers: f
                        }
                    }
                    constructor(a, b) {
                        this.Zd = a;
                        this.location = b;
                        this.name = je.id
                    }
                };
                je.id = "UrlScrubber";
                var Zd = [function(a) {
                    if (a = /canvaeditor\/(\d+\.\d+\.\d+)/.exec(a)) return {
                        name: "mobile_app_version",
                        value: a[1]
                    }
                }, function(a) {
                    if (a = /com.canva.editor\s\(version\/(\d+\.\d+\.\d+)/.exec(a)) return {
                        name: "mobile_app_version",
                        value: a[1]
                    }
                }];
                var le = ["TimeoutError", "HttpTimeoutError", /^ResizeObserver loop/, /^WHEN_CANCELLED$/, "ChunkLoadError", /^NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope':/, /Failed to register a ServiceWorker.*(The document is in an invalid state|An unknown error occurred when fetching the script|Failed to access storage|The URL protocol of the current origin \('null'\) is not supported|Timed out while trying to start the Service Worker)\.$/, /^(Can't find variable: indexedDB|Internal error opening backing store for indexedDB.open.|Encountered full disk while opening backing store for indexedDB.open.|An internal error was encountered in the Indexed Database server)/,
                        /Non-Error promise rejection captured with value: [Tt]imeout( \(.\))?/
                    ],
                    Ch = class {
                        Kc(a) {
                            var b, c, d;
                            if (!a.url) return {
                                headers: {
                                    "User-Agent": (d = a === null || a === void 0 ? void 0 : (b = a.headers) === null || b === void 0 ? void 0 : b["User-Agent"]) !== null && d !== void 0 ? d : ""
                                }
                            };
                            b = /^(\/design\/[a-zA-Z0-9_-]+\/)([a-zA-Z0-9_-]{22})(.*)/;
                            d = new URL(a.url);
                            d.search = "";
                            b.test(d.pathname) && (d.pathname = d.pathname.replace(b, "$1<REDACTED>$3"));
                            var e;
                            return {
                                url: d.toString(),
                                headers: {
                                    "User-Agent": (e = a === null || a === void 0 ? void 0 : (c = a.headers) ===
                                        null || c === void 0 ? void 0 : c["User-Agent"]) !== null && e !== void 0 ? e : ""
                                }
                            }
                        }
                        Zc(a) {
                            return new Ch(this.R, this.dc.concat(a), this.kd, this.P, this.$c, this.Xc, !0, this.vc)
                        }
                        setContext({
                            user: a,
                            locale: b,
                            Eh: c
                        }) {
                            var d, e;
                            (e = this.P) === null || e === void 0 || (d = e.getCurrentHub()) === null || d === void 0 || d.configureScope(f => {
                                a && (f.setUser(a), f.setExtra("isAnonymousUser", !1));
                                b && f.setTag("locale", b);
                                c === null || c === void 0 || c.forEach((g, h) => f.setExtra(h, g))
                            })
                        }
                        setTags(a) {
                            for (const b of a) this.setTag(b.name, b.value)
                        }
                        setTag(a, b) {
                            if (this.P !=
                                null) {
                                {
                                    var c = a.length <= 32;
                                    const d = b.length <= 200;
                                    c && d ? c = ta(!0) : (c = (c ? "" : "Key name length cannot exceed 32 characters.\n") + (d ? "" : "Key value length cannot exceed 200 characters.\n"), c = ua(Error(c + `Tag: ${a}:${b}`)))
                                }
                                c.ok ? this.P.setTag(a, b) : ne(this, c.error)
                            }
                        }
                        setExtras(a) {
                            for (const b of a) this.setExtra(b.name, b.value)
                        }
                        setExtra(a, b) {
                            this.P != null && this.P.setExtra(a, Id(b))
                        }
                        error(a, b) {
                            pe(this, "error", a instanceof Error ? a : Error(a), b)
                        }
                        F(a, b) {
                            pe(this, "error", a, b)
                        }
                        Qd(a, b) {
                            pe(this, "warning", a, b)
                        }
                        info(a, b) {
                            pe(this,
                                "info", a instanceof Error ? a : Error(a), b)
                        }
                        debug(a, b) {
                            pe(this, "debug", a instanceof Error ? a : Error(a), b)
                        }
                        constructor(a, b = [], c = [], d = self.Sentry, e = new Ah, f = [], g = !1, h) {
                            a: {
                                var k = self;
                                if (typeof k.Android === "object" && typeof k.Android.getPageLocation === "function") {
                                    let l;
                                    try {
                                        l = k.Android.getPageLocation()
                                    } catch (n) {
                                        k = void 0;
                                        break a
                                    }
                                    k = typeof l === "string" ? l : void 0
                                } else k = void 0
                            }
                            this.R = a;this.dc = b;this.kd = c;this.P = d;this.$c = e;this.Xc = f;this.vc = h;this.od = void 0;this.allowUrls = "/dist/renderer/ canva.com canva.cn canva-dev.com canva-staging.com canva-staging.cn www.features.canva-internal.com www.features.canva-internal-staging.com canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-staging.com canva-apps-staging.cn".split(" ");
                            this.P ? g || me(this, a, {
                                zd: k
                            }) : typeof self.suppressSentryInitializationError !== "undefined" && self.suppressSentryInitializationError === !0 || console.error("Sentry can not be found on the global scope.")
                        }
                    };
                var $e = class {
                        Qa() {
                            return new Dh
                        }
                    },
                    Dh = class {
                        ta() {
                            return new Eh
                        }
                        ua() {
                            return new Eh
                        }
                        Vb(a, b, c) {
                            let d;
                            typeof c === "function" && (d = c);
                            return d(new Eh)
                        }
                        async ob(a, b, c) {
                            let d;
                            typeof c === "function" && (d = c);
                            return d(new Eh)
                        }
                        Aa() {}
                        async flush() {}
                    },
                    Eh = class {
                        Zb() {
                            return new Fh
                        }
                        abort() {}
                        Ha() {}
                        setAttribute() {
                            return this
                        }
                        setStatus() {
                            return this
                        }
                        rd() {
                            return !1
                        }
                        wa() {
                            return !1
                        }
                        end() {
                            return {
                                Da: () => ({}),
                                Ea: () => ({})
                            }
                        }
                        Aa() {}
                        La() {}
                        $a() {}
                        constructor() {
                            this.name = "";
                            this.attrs = new Map;
                            this.U = "NOOP";
                            this.Ma = [];
                            this.status = "unset";
                            this.da = new Map;
                            this.startTime = performance.now();
                            this.ga = "span";
                            this.context = {
                                traceId: "",
                                spanId: "",
                                Nc: 0
                            };
                            this.links = []
                        }
                    },
                    Fh = class {
                        Aa() {}
                        La() {}
                        $a() {}
                        setAttribute() {}
                        Ha() {}
                    };
                var af = class {
                    gd(a) {
                        var b = [];
                        for (const c of a) c.parentSpanId && !this.uc.has(c.parentSpanId) ? (a = this.zb.get(c.parentSpanId) || [], a.push(c), this.zb.set(c.parentSpanId, a)) : b.push(c);
                        for (const c of b) b = c.context.spanId, se(this, c), this.zb.delete(b)
                    }
                    async flush() {}
                    constructor() {
                        this.zb = new Map;
                        this.uc = new Set
                    }
                };
                var Gh = class extends Error {
                        constructor(a, b) {
                            super(a);
                            this.xc = b;
                            this.name = "TelemetryExportError";
                            Object.setPrototypeOf(this, Gh.prototype)
                        }
                    },
                    Hh = class extends N {
                        constructor(a, b, c) {
                            super(a, b);
                            this.xc = c;
                            this.name = "SampledTracingExportError";
                            Object.setPrototypeOf(this, Hh.prototype)
                        }
                    };
                var bf = class {
                    async gd(a) {
                        if (a.length !== 0)
                            if (this.Bb.size < this.ec) {
                                try {
                                    Ze(this.Od);
                                    var b = ye(a, c => {
                                        var d = this.Od;
                                        return d.Qc + (c - d.Cc)
                                    })
                                } catch (c) {
                                    this.j.F(c, {
                                        va: "OTLPSpanAdapter: Unable to convert spans",
                                        extra: new Map([
                                            ["spans", JSON.stringify(a.map(P), void 0, 2)]
                                        ])
                                    });
                                    return
                                }
                                try {
                                    const c = this.send(b);
                                    this.Bb.add(c);
                                    c.catch(d => {
                                        this.j.F(d)
                                    }).finally(() => {
                                        this.Bb.delete(c)
                                    })
                                } catch (c) {
                                    this.j.F(c)
                                }
                            } else this.j.F(new Gh("OTLPExporter: Concurrency Limit Reached"))
                    }
                    async flush() {
                        await Promise.all(this.Bb)
                    }
                    constructor(a,
                        b, c, d) {
                        this.config = a;
                        this.j = b;
                        this.Od = c;
                        this.send = d;
                        this.Bb = new Set;
                        var e;
                        this.ec = (e = a.ec) !== null && e !== void 0 ? e : Infinity
                    }
                };
                var df = ({
                    hg: a,
                    url: b,
                    gb: c,
                    fetch: d = self.fetch
                }) => async e => {
                    var f, g;
                    e = new Request(b, {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        priority: "low",
                        signal: (f = (g = AbortSignal).timeout) === null || f === void 0 ? void 0 : f.call(g, a)
                    });
                    try {
                        const h = await d(e);
                        if (h.status > 299 || h.status < 200) throw c != null ? new Hh(`SendWithFetch: Failed to export (status: ${h.status})`, c) : new Gh(`SendWithFetch: Failed to export (status: ${h.status})`);
                    } catch (h) {
                        throw f = h instanceof
                        Error && h.name === "AbortError" ? `SendWithFetch: Fetch request timeout: ${a}ms` : "SendWithFetch: Failed to export", c != null ? new Hh(f, c) : new Gh(f);
                    }
                };
                var ef = class {
                    build(a) {
                        return this.Ad.reduce((b, c) => c(b), {
                            Ua: () => {},
                            process: b => a.gd(b),
                            flush: () => a.flush()
                        })
                    }
                    constructor() {
                        this.Ad = []
                    }
                };
                var Ae = class {
                    Ua() {}
                    process(a) {
                        for (const b of a) b.wa() && (this.buffer.push(b), this.buffer.length >= this.config.Mb && Be(this));
                        this.buffer.length > 0 && this.Xa == null && (this.Xa = setTimeout(() => Be(this), this.config.Nb))
                    }
                    async flush() {
                        Be(this);
                        await this.Ta.flush()
                    }
                    constructor(a, b, c) {
                        this.Ta = a;
                        this.config = b;
                        this.j = c;
                        this.buffer = []
                    }
                };
                var ff = class {
                        Ua(a) {
                            const b = a.context.traceId,
                                c = this.Yb.get(b);
                            c != null ? (c.Qb += 1, a.B === void 0 && (c.root = a)) : this.Yb.set(b, {
                                Qb: 1,
                                root: a
                            });
                            this.Ta.Ua(a)
                        }
                        process(a) {
                            for (const c of a) {
                                a = c.context.traceId;
                                var b = this.Yb.get(a);
                                b != null && (--b.Qb, b.Qb === 0 && (b = this.Rf.process(b), this.Ta.process(b), this.Yb.delete(a)))
                            }
                        }
                        flush() {
                            return this.Ta.flush()
                        }
                        constructor(a) {
                            var b = new Ih;
                            this.Ta = a;
                            this.Rf = b;
                            this.Yb = new Map
                        }
                    },
                    Ih = class {
                        process(a) {
                            const b = [];
                            Ce(this, a.root, b);
                            return b
                        }
                    };
                var Jh = Ie(16),
                    Kh = Ie(8),
                    He = Array(32);
                var Ne = class {
                        Zb() {
                            return this.X || new Fh
                        }
                        Ha(a) {
                            this.Za || (this.attrs = new Map([...this.attrs, ...a]))
                        }
                        setAttribute(a, b, c = !1) {
                            if (this.Za && !c) return this;
                            this.attrs.set(a, b);
                            return this
                        }
                        setStatus(a) {
                            try {
                                if (this.Za) return this;
                                this.status = a;
                                return this
                            } catch (b) {
                                return this.status = "error", this.j.F(b), this
                            }
                        }
                        rd() {
                            return !this.ended
                        }
                        wa() {
                            return (this.context.Nc & 1) !== 0
                        }
                        abort() {
                            try {
                                var a;
                                if (!this.aborted) {
                                    this.aborted = !0;
                                    this.setAttribute("span_aborted", !0);
                                    for (const b of this.Na) b.abort();
                                    this.ended || (this.Za =
                                        this.ended = !0, this.timeout && clearTimeout(this.timeout), ((a = this.qa) === null || a === void 0 ? 0 : a.frameRate) && Pe(this.qa.frameRate), this.endTime = this.getCurrentTime(), this.duration = this.endTime - this.startTime, Le(this), Oe(this), this.lb.forEach(b => b()), this.ba.Wa.process([this]))
                                }
                            } catch (b) {
                                this.j.F(b)
                            }
                        }
                        end(a, b, c) {
                            try {
                                if (this.ended) return {
                                    Da: this.Da,
                                    Ea: this.Ea
                                };
                                this.ended = !0;
                                return Qe(this, a, b, c)
                            } catch (d) {
                                return this.j.F(d, {
                                    va: "Error ending span",
                                    extra: new Map(P(this))
                                }), {
                                    Da: this.Da,
                                    Ea: this.Ea
                                }
                            }
                        }
                        La(a) {
                            try {
                                this.ended &&
                                    this.aborted || (this.ended && this.jc ? a(this.jc) : this.mb.push(a))
                            } catch (b) {
                                this.j.F(b)
                            }
                        }
                        $a(a) {
                            try {
                                this.ended && this.aborted ? a() : this.lb.push(a)
                            } catch (b) {
                                this.j.F(b)
                            }
                        }
                        Aa(a, b) {
                            try {
                                r(a.length > 0, "Event name cannot be empty");
                                const {
                                    Ob: c,
                                    Pb: d
                                } = Je(b), e = new Lh({
                                    name: a,
                                    B: this,
                                    ba: this.ba,
                                    na: this.na,
                                    U: this.U,
                                    j: this.j,
                                    startTime: d === null || d === void 0 ? void 0 : d.startTime,
                                    X: void 0,
                                    ga: "event",
                                    hb: d === null || d === void 0 ? void 0 : d.hb,
                                    getCurrentTime: this.getCurrentTime,
                                    aa: this.aa,
                                    attrs: (d === null || d === void 0 ? void 0 : d.attrs) ||
                                        c,
                                    Bc: this.startTime
                                });
                                this.Ma.push(e)
                            } catch (c) {
                                this.j.F(c)
                            }
                        }
                        get da() {
                            return this.na()
                        }
                        constructor(a) {
                            var b;
                            this.Za = this.aborted = this.ended = !1;
                            this.attrs = new Map;
                            this.Ma = [];
                            this.Na = [];
                            this.status = "unset";
                            this.jc = void 0;
                            this.mb = [];
                            this.lb = [];
                            this.Da = f => Ge({
                                span: this,
                                j: this.j,
                                aa: this.aa,
                                ...f
                            });
                            this.Ea = () => this.wa() ? this.context : void 0;
                            this.name = a.name;
                            this.ended = !1;
                            this.ba = a.ba;
                            var c;
                            this.getCurrentTime = (c = a.getCurrentTime) !== null && c !== void 0 ? c : f => {
                                var g;
                                return (g = f === null || f === void 0 ? void 0 : f.zc) !==
                                    null && g !== void 0 ? g : performance.now()
                            };
                            c = Kh();
                            this.identifier = `${this.name}_${c}`;
                            this.startTime = this.getCurrentTime({
                                id: this.identifier,
                                zc: a.startTime
                            });
                            this.U = a.U;
                            this.X = a.X;
                            this.ga = a.ga;
                            this.j = a.j;
                            this.qa = a.qa;
                            const d = ((b = a.B) === null || b === void 0 ? void 0 : b.context.traceId) || Jh();
                            a.attrs && (this.attrs = new Map(a.attrs));
                            this.attrs.set("span_type", this.ga);
                            b = a.ba.Jc.Hd({
                                traceId: d,
                                dg: this.name,
                                attributes: this.attrs,
                                B: a.B
                            }) ? 1 : 0;
                            this.context = {
                                spanId: c,
                                traceId: d,
                                Nc: b
                            };
                            this.links = a.links || [];
                            a.B && (this.parentSpanId =
                                a.B.context.spanId, this.B = a.B);
                            this.na = a.na;
                            this.aa = a.aa;
                            this.setStatus("ok");
                            this.timeout = setTimeout(() => {
                                var f;
                                this.setAttribute("timed_out", !0);
                                ((f = this.X) === null || f === void 0 ? 0 : f.Fb) && qe(this) ? this.end("error") : (this.name += ".timed_out", this.end("ok"))
                            }, a.timeout || 12E4);
                            for (const f of this.ba.plugins) try {
                                var e;
                                (e = f.Ua) === null || e === void 0 || e.call(f, this)
                            } catch (g) {
                                this.j.F(g, {
                                    va: "Error calling plugin onSpanStart",
                                    extra: new Map([
                                        ["plugin", f.name], ...P(this)
                                    ])
                                })
                            }
                            this.ba.Wa.Ua(this)
                        }
                    },
                    Lh = class extends Ne {
                        constructor(a) {
                            super(a);
                            a.Bc != null && (this.setAttribute("parent_relative_start_ms", Math.round(this.startTime - a.Bc)), this.setAttribute("parent_start", a.Bc));
                            a.hb && this.setAttribute("event_type", a.hb);
                            this.end("ok", this.startTime)
                        }
                    };
                var Re = class {
                    get aborted() {
                        return this.T.aborted
                    }
                    La(a) {
                        try {
                            this.ended && this.aborted || (this.ended && this.kc ? a(this.kc) : this.mb.push(a))
                        } catch (b) {
                            this.j.F(b, {
                                tags: new Map([
                                    ["user_operation", this.name]
                                ])
                            })
                        }
                    }
                    $a(a) {
                        try {
                            this.ended && this.aborted ? a() : this.lb.push(a)
                        } catch (b) {
                            this.j.F(b, {
                                tags: new Map([
                                    ["user_operation", this.name]
                                ])
                            })
                        }
                    }
                    Aa(a, b) {
                        try {
                            const c = Ke(b);
                            this.Oe.forEach((e, f) => {
                                c.attrs.has(f) || c.attrs.set(f, e)
                            });
                            c.attrs.set("user_operation", this.name);
                            c.attrs.set("is_uop", !0);
                            c.attrs.set("sample_rate_override",
                                1);
                            const d = this.T.attrs.get("uop_attr_type");
                            d != null && c.attrs.set("uop_attr_type", d);
                            this.pb && c.attrs.set("uop_persist", !0);
                            this.T.Aa(a, c)
                        } catch (c) {
                            this.j.F(c, {
                                tags: new Map([
                                    ["user_operation", this.name]
                                ])
                            })
                        }
                    }
                    Ha(a) {
                        this.T.Ha(a)
                    }
                    setAttribute(a, b) {
                        this.T.setAttribute(a, b)
                    }
                    constructor(a, b, c, d, e, f, g) {
                        var h = new Set;
                        this.name = a;
                        this.T = b;
                        this.Oe = c;
                        this.j = d;
                        this.pb = e;
                        this.Fb = f;
                        this.eb = g;
                        this.hc = h;
                        this.mb = [];
                        this.lb = [];
                        this.kc = void 0;
                        this.ended = !1
                    }
                };
                var jf = class {
                    Hd({
                        dg: a,
                        attributes: b,
                        B: c
                    }) {
                        b = b === null || b === void 0 ? void 0 : b.get("sample_rate_override");
                        if (b != null && typeof b === "number") {
                            if (b < 0 || b > 1) this.j.error(Error(`Invalid sample rate (${b}) for ${a}`)), b = this.sampleRate;
                            return Math.random() < b
                        }
                        a = this.tf(c);
                        return a != null ? a : Math.random() < this.sampleRate
                    }
                    constructor(a = 0, b) {
                        var c = We;
                        this.sampleRate = a;
                        this.j = b;
                        this.tf = c;
                        this.sampleRate = Math.min(Math.max(0, this.sampleRate), 1)
                    }
                };
                var Mh = class {
                    add(a, b = 1) {
                        r(isFinite(a));
                        r(b > 0);
                        if (this.ia === 0) this.ia = b, this.wb = this.xb = this.Ka = a, this.yb = 0;
                        else {
                            this.ia += b;
                            const c = a - this.Ka;
                            this.Ka += b * c / this.ia;
                            this.yb += b * c * (a - this.Ka);
                            this.xb = Math.min(this.xb, a);
                            this.wb = Math.max(this.wb, a)
                        }
                    }
                    addAll(a) {
                        for (const b of a) this.add(b)
                    }
                    get count() {
                        return this.ia
                    }
                    get vf() {
                        return this.Ka
                    }
                    get min() {
                        return this.xb
                    }
                    get max() {
                        return this.wb
                    }
                    get Pf() {
                        return this.ia === 0 ? NaN : this.ia === 1 ? 0 : Math.max(this.yb, 0) / this.ia
                    }
                    get Of() {
                        return Math.sqrt(this.Pf)
                    }
                    constructor() {
                        this.ia =
                            0;
                        this.Ka = NaN;
                        this.yb = 0;
                        this.wb = this.xb = NaN
                    }
                };
                var Nh = class {
                        start() {
                            this.Ia = new Mh;
                            this.Sb = void 0;
                            this.ac = this.Ec.requestAnimationFrame(this.Cd);
                            this.document.addEventListener("visibilitychange", this.vd)
                        }
                        get qd() {
                            return this.document.visibilityState === "visible"
                        }
                        constructor() {
                            var a = window.document;
                            this.Ec = window;
                            this.document = a;
                            this.Ia = new Mh;
                            this.Cd = b => {
                                this.Sb !== void 0 && this.Ia.add(Math.min(b - this.Sb, 5E3));
                                this.Sb = this.qd ? b : void 0;
                                this.ac = this.Ec.requestAnimationFrame(this.Cd)
                            };
                            this.vd = () => {
                                this.qd || (this.Sb = void 0)
                            }
                        }
                    },
                    Oh = class {
                        reset() {
                            this.frameCount =
                                0;
                            this.ud = new Mh;
                            this.pd.clear()
                        }
                        constructor() {
                            this.frameCount = 0;
                            this.ud = new Mh;
                            this.pd = new Set
                        }
                    },
                    Xe = new Oh;
                var Ph = class {
                    Ua() {}
                    process() {}
                    async flush() {}
                };
                var Qh = class {
                    Hd() {
                        return !0
                    }
                };
                var Rh = class {
                    ta(a, b) {
                        return this.ua(a, void 0, b)
                    }
                    ua(a, b, c) {
                        try {
                            var d;
                            const {
                                Ob: e,
                                Pb: f
                            } = Je(c), g = ha(this.U(b), "No instrumentation scope found for '{}' of parent '{}:{}'", a, b === null || b === void 0 ? void 0 : b.U, b === null || b === void 0 ? void 0 : b.context.spanId), h = (f === null || f === void 0 ? 0 : (d = f.performance) === null || d === void 0 ? 0 : d.ai) ? this.fc.frameRate() : void 0;
                            h === null || h === void 0 || h.start();
                            const k = (f === null || f === void 0 ? 0 : f.eg) ? Te({
                                    xc: { ...f.eg,
                                        startTime: f.startTime,
                                        timeout: f.timeout
                                    },
                                    l: this.Tc,
                                    B: b,
                                    Be: [this.config.$b,
                                        this.$b
                                    ].filter(Pa),
                                    j: this.j,
                                    Ef: n => {
                                        b = n
                                    }
                                }) : Ue(b),
                                l = new Ne({
                                    name: a,
                                    B: b,
                                    ba: this.config,
                                    na: this.na,
                                    U: g,
                                    j: this.j,
                                    getCurrentTime: this.getCurrentTime,
                                    startTime: f === null || f === void 0 ? void 0 : f.startTime,
                                    timeout: f === null || f === void 0 ? void 0 : f.timeout,
                                    aa: this.aa,
                                    attrs: (f === null || f === void 0 ? void 0 : f.attrs) || e,
                                    links: f === null || f === void 0 ? void 0 : f.links,
                                    X: k,
                                    ga: "span",
                                    qa: {
                                        frameRate: h
                                    }
                                });
                            k !== null && k !== void 0 && (l.attrs.get("is_uop") || l.setAttribute("user_operation", k.name), k.pb == null && (k.pb = l.wa(), k.pb && k.T.setAttribute("uop_persist", !0)), k.hc.add(l));
                            b != null && b instanceof Ne && b.Na.push(l);
                            return l
                        } catch (e) {
                            return this.j.F(e), new Eh
                        }
                    }
                    Vb(a, b, c) {
                        {
                            let e, f;
                            typeof c === "function" ? f = c : e = Ke(c);
                            a = this.ua(a, b, e);
                            try {
                                var d = f(a)
                            } catch (g) {
                                throw a.setStatus("error"), g;
                            } finally {
                                a.end()
                            }
                        }
                        return d
                    }
                    async ob(a, b, c) {
                        return Ye(this, a, b, c)
                    }
                    Aa(a, b) {
                        try {
                            const {
                                Ob: c,
                                Pb: d
                            } = Je(b);
                            r(a.length > 0, "Event name cannot be empty");
                            const e = ha(this.U(), "Event ({}) requires instrumentation scope", a);
                            new Lh({
                                name: a,
                                ba: this.config,
                                na: this.na,
                                U: e,
                                X: void 0,
                                j: this.j,
                                ga: "event",
                                hb: d === null || d === void 0 ? void 0 : d.hb,
                                getCurrentTime: this.getCurrentTime,
                                startTime: d === null || d === void 0 ? void 0 : d.startTime,
                                aa: this.aa,
                                attrs: (d === null || d === void 0 ? void 0 : d.attrs) || c,
                                B: void 0
                            })
                        } catch (c) {
                            this.j.F(c)
                        }
                    }
                    async flush() {
                        try {
                            await this.config.Wa.flush()
                        } catch (a) {
                            this.j.F(a)
                        }
                    }
                    constructor(a, b, c, d, e, f, g, h = l => {
                        var n;
                        return (n = l === null || l === void 0 ? void 0 : l.zc) !== null && n !== void 0 ? n : performance.now()
                    }, k = {
                        frameRate: () => new Nh
                    }) {
                        this.U = a;
                        this.aa = b;
                        this.config = c;
                        this.na = d;
                        this.j = e;
                        this.Tc = f;
                        this.$b = g;
                        this.getCurrentTime =
                            h;
                        this.fc = k
                    }
                };
                var hf = class {
                        constructor(a) {
                            var b;
                            this.Jc = (b = a.Jc) !== null && b !== void 0 ? b : new Qh;
                            var c;
                            this.Wa = (c = a.Wa) !== null && c !== void 0 ? c : new Ph;
                            var d;
                            this.plugins = (d = a.plugins) !== null && d !== void 0 ? d : [];
                            var e;
                            this.da = (e = a.da) !== null && e !== void 0 ? e : new Map;
                            this.$b = a.$b
                        }
                    },
                    gf = class {
                        Qa(a) {
                            try {
                                return new Rh(() => a, this, this.config, () => new Map([...this.config.da, ["service.name", this.$f + " | " + a]]), this.j, this.Tc, void 0, this.getCurrentTime, this.fc)
                            } catch (c) {
                                var b;
                                this.j.F(c, {
                                    extra: new Map([
                                        ["attrs", Object.fromEntries((b = this.config) ===
                                            null || b === void 0 ? void 0 : b.da)]
                                    ])
                                });
                                return new Dh
                            }
                        }
                        constructor(a, b, c = e => {
                            var f;
                            return (f = e === null || e === void 0 ? void 0 : e.zc) !== null && f !== void 0 ? f : performance.now()
                        }, d = {
                            frameRate: () => new Nh
                        }) {
                            this.config = a;
                            this.j = b;
                            this.getCurrentTime = c;
                            this.fc = d;
                            this.$f = (a = this.config.da.get("service.name")) && typeof a === "string" ? a : "no_service_name";
                            this.Tc = this.Qa("telemetry.user_operation")
                        }
                    };
                var cf = class {
                    constructor() {
                        var a = Date.now(),
                            b = performance.now();
                        this.Qc = a;
                        this.Cc = b;
                        this.threshold = 1E4
                    }
                };
                var mf = class {
                    constructor(a, b) {
                        this.Md = a;
                        this.Ld = b
                    }
                };
                var of = class {
                    Gc(a) {
                        const b = this.l.ta("time_until_idle");
                        b.La(() => this.Oa.delete(a));
                        b.$a(() => this.Oa.delete(a));
                        this.Oa.set(a, {
                            span: b,
                            Xa: self.setTimeout(() => lf(this, a), 5E3),
                            Gb: [performance.now()]
                        })
                    }
                    Hc(a) {
                        a = this.Oa.get(a);
                        a != null && (a.Gb = a.Gb.slice(-5).concat(performance.now()))
                    }
                    constructor(a) {
                        this.l = a;
                        this.Oa = new Map
                    }
                };
                var nf = class {
                    Gc(a) {
                        const b = this.l.ta("time_to_second_fetch_event", {
                            timeout: this.options.ig
                        });
                        b.La(() => this.sb.delete(a));
                        b.$a(() => this.sb.delete(a));
                        this.sb.set(a, b)
                    }
                    Hc(a) {
                        const b = this.sb.get(a);
                        b != null && (b.end(), this.sb.delete(a))
                    }
                    constructor(a) {
                        this.options = {
                            ig: 3E4
                        };
                        this.l = a;
                        this.sb = new Map
                    }
                };
                var rf = class {
                    constructor() {
                        this.ed = !1;
                        this.bc = null
                    }
                };
                (function() {
                    var a;
                    const b = performance.now(),
                        c = la("page", xh.S);
                    var d;
                    const e = (d = c.release) !== null && d !== void 0 ? d : self.bootstrap.release;
                    var f;
                    d = (f = c.j) !== null && f !== void 0 ? f : la("errorService", Sf.S);
                    var g;
                    f = (g = c.Kd) !== null && g !== void 0 ? g : la("telemetryService", Wf.S);
                    a: switch (d.M) {
                        case "CONSOLE":
                            g = new zh;
                            break a;
                        case "SENTRY":
                            g = new Ch(d);
                            break a;
                        default:
                            throw new F(d);
                    }
                    const h = g.Zc("offline"),
                        {
                            Ja: k,
                            tb: l,
                            xa: n
                        } = sf({
                            location: self.location,
                            R: f,
                            gb: c.fg,
                            mc: c.gg,
                            userAgent: c.userAgent,
                            D: {
                                j: h
                            }
                        });
                    g = k.Qa("service_worker.install");
                    var m;
                    const p = g.ta(`boot.${(m=(a=self.serviceWorker)===null||a===void 0?void 0:a.state)!==null&&m!==void 0?m:"na"}`, {
                        startTime: 0
                    });
                    a = g.ua("main", p, {
                        startTime: b
                    });
                    const q = new rh({
                        Rb: c.df,
                        xd: c.cf,
                        cd: c.bf,
                        se: c.af,
                        qg: c.gf
                    });
                    if (c.fd) try {
                        td({
                            serviceWorker: self,
                            D: {
                                j: h,
                                Ja: k,
                                tb: l,
                                xa: n
                            },
                            O: c.O,
                            C: q,
                            N: c.mode === "REAL" ? c.N : location.origin,
                            kb: c.kb,
                            Ce: () => JSON.stringify(c, void 0, 2),
                            ra: c.Se,
                            la: c.la,
                            ma: c.ma
                        })
                    } catch (w) {
                        h.F(w)
                    }
                    Cd({
                        serviceWorker: self,
                        C: q,
                        release: e,
                        D: {
                            Ja: k
                        }
                    });
                    self.addEventListener("activate", w => {
                        w.waitUntil(async function() {
                            var v,
                                z;
                            c.Ke && await self.clients.claim().catch(A => h.F(A));
                            c.fd && q.options.Rb !== 1 ? await ((v = self.registration.navigationPreload) === null || v === void 0 ? void 0 : v.enable().catch(() => {})) : await ((z = self.registration.navigationPreload) === null || z === void 0 ? void 0 : z.disable().catch(() => {}))
                        }())
                    });
                    self.addEventListener("install", () => {
                        c.Me && self.skipWaiting()
                    });
                    a.end();
                    Promise.resolve().then(() => {
                        p.end();
                        l.bc = Date.now()
                    })
                })();
            }).call(self, self._5c0f058b2d917619b177d32cbc4c572b);
        },

        /***/
        692950:
            (_, __, r) => r(476834)

    },
    /******/
    __webpack_require__ => { // webpackRuntimeModules
        /******/
        var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
        /******/
        __webpack_require__.O(0, [95433], () => (__webpack_exec__(476834), __webpack_exec__(692950)));
        /******/
        var __webpack_exports__ = __webpack_require__.O();
        /******/
    }
])
//# sourceMappingURL=sourcemaps/hjfept.955e9aaed949d93a.js.map