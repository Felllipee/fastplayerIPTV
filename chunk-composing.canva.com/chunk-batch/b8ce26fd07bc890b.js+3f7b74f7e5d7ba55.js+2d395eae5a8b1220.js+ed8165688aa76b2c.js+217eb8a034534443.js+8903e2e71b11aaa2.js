; // __FILE_CONTENT_FOR__:b8ce26fd07bc890b.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [89303], {

        /***/
        841629: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {}).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
]); // __FILE_CONTENT_FOR__:3f7b74f7e5d7ba55.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [57399], {

        /***/
        78999: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(841629);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var uL = __c.uL;
                var vL = __c.vL;
                var ca = __c.ca;
                var ba = __c.ba;
                var fW = __c.fW;
                var zn = __c.zn;
                var B = __c.B;
                var eK = __c.eK;
                var Rl = __c.Rl;
                var Zl = __c.Zl;
                var ul = __c.ul;
                var fK = __c.fK;
                var C = __c.C;
                var E = __c.E;
                var MFb = function(a, b) {
                        for (let d = 0; d < 10; d++) {
                            var c = Math.max(b * .001, 1);
                            const e = a(b);
                            c = (a(b + c) - e) / c;
                            Math.abs(c - 0) < 1E-8 && (c = 1);
                            if (Math.abs(e / b) < 1E-8) break;
                            b -= e / c
                        }
                        return b
                    },
                    NFb = function(a, b, c, d, e, f, g) {
                        const h = a - c;
                        g = Math.max(g !== null && g !== void 0 ? g : a, h);
                        return MFb(k => {
                            const l = Math.max(k, h),
                                m = l - h;
                            var n = __c.iF(b, b + c, b + m),
                                p = n(d);
                            n = n(d + e);
                            p += f;
                            k -= l;
                            return Math.abs(m - 0) < 1E-8 && n > p ? k : n - p + k
                        }, g)
                    },
                    OFb = function(a) {
                        const b = a.hb;
                        if (a = a.Yb.first()) {
                            var c;
                            a = ((c = a.tD[0]) !== null && c !== void 0 ? c : 0) + __c.nL(b.toArray())
                        } else a =
                            0;
                        return a
                    },
                    A6 = function(a) {
                        return !!a && a.text.charLength > 1
                    },
                    B6 = function(a, b, c, d) {
                        a = PFb[a][b];
                        switch (c) {
                            case "left":
                                return a.left(d);
                            case "center":
                                return a.center(d);
                            case "right":
                                return a.right(d);
                            default:
                                throw new E(c);
                        }
                    },
                    QFb = function(a, {
                        L1: b,
                        SOa: c
                    }) {
                        const d = a.target,
                            e = d.viewBox,
                            f = d.slice,
                            g = d.Yb.first();
                        if (A6(g) && f) {
                            var h = C(d.resizeMode, "resizeMode must be provided if there is text content"),
                                k = 2 * OFb(d),
                                l, m = a.hg.width / ((l = a.yj) !== null && l !== void 0 ? l : e.width),
                                n;
                            a = a.hg.height / ((n = a.ik) !== null && n !== void 0 ?
                                n : e.height);
                            h.minBlockSize = Math.max(h.minBlockSize, (e.height - f.source.height) * a);
                            var p;
                            c = c ? b.height : (p = h.minBlockSize) !== null && p !== void 0 ? p : b.height;
                            return {
                                textBox: __c.gK({
                                    width: b.width,
                                    height: c,
                                    viewBox: d.viewBox,
                                    slice: { ...f,
                                        Hg: b.width / m + f.source.width - e.width,
                                        Gg: c / a + f.source.height - e.height
                                    }
                                }, g.box),
                                desiredHeight: c,
                                Td: a,
                                sWa: k
                            }
                        }
                    },
                    RFb = function(a, b) {
                        return a === b ? !0 : a.length === b.length && a.every((c, d) => c === b[d])
                    },
                    C6 = function(a, b, c) {
                        a.Ee || __c.bua(a);
                        var d = C(a.Ee, "Cannot measure text using a destroyed qltt");
                        if (__c.zL(a.uf, a.$a) != null) return __c.LL(d);
                        const e = a.writingMode;
                        __c.pL(e) ? d.style.width = `${b}px` : d.style.height = `${b}px`;
                        d = d.getBoundingClientRect();
                        d = __c.gta(e, d);
                        const {
                            width: f,
                            height: g
                        } = __c.hta(e, {
                            inline: b,
                            block: d.block + a.dV
                        });
                        return {
                            width: f,
                            height: g,
                            Eb: (c === null || c === void 0 ? 0 : c.V0) ? [] : a.qK(b)
                        }
                    },
                    SFb = function(a, b, c = !0, d = a.hg.Fa, e) {
                        var f = a.target;
                        const g = f.viewBox,
                            h = f.slice;
                        var k = f.Yb.first(),
                            l = QFb(a, {
                                L1: b,
                                SOa: c
                            });
                        if (!l || !h || !k || !A6(k) && !a.ne.KLa(f).length) return {
                            L1: b,
                            Eb: []
                        };
                        const m = C(a.$p, "typesetter must be provided if there is text content");
                        a = l.textBox;
                        c = l.desiredHeight;
                        const n = l.Td;
                        l = l.sWa;
                        e = C6(m, a.width - l, e);
                        RFb(k.Ea.Eb, e.Eb) || (k.Ea = {
                            Eb: e.Eb
                        });
                        l = e.height + l;
                        f = a.height > l ? c : NFb(g.height, h.source.top, h.source.height, k.box.top, k.box.height, l / n, fK(f.viewBox, h)) * n;
                        k = k.Fc;
                        d = ul(d, b.Ua) || ul(d, b.r) || ul(d, b.c) ? B6({
                            [1]: 1,
                            [2]: 2,
                            [3]: 3
                        }[k], 1, ul(d, b.Ua) ? "left" : ul(d, b.r) ? "right" : "center", b) : d;
                        return {
                            L1: b.resizeTo(d, b.width, f),
                            Eb: e.Eb
                        }
                    },
                    TFb = function(a, b) {
                        return __c.NL(a, b, 1, "glyph")
                    },
                    UFb = function(a, b, c) {
                        c = __c.gm(a, b, c);
                        return c > 1 ? a.transform(__c.Kl(b,
                            c)) : a
                    },
                    VFb = function(a, b, c, d) {
                        if (!c && !d) return b.transform(__c.dm(a));
                        var e = b.transform(__c.dm(a)),
                            f = e.c;
                        b = e.width;
                        const g = e.height;
                        e = e.rotation;
                        f = __c.Ll(a.center(), a.rotation * Math.PI / 180, c, d).transformPoint(f);
                        return __c.Sl({
                            center: f,
                            width: b,
                            height: g,
                            rotation: d ? c ? e + 180 : 2 * a.rotation + 180 - e : 2 * a.rotation - e
                        })
                    },
                    WFb = function(a, b, c, d) {
                        if (!c && !d) return b.transform(__c.am(a));
                        var e = b.c;
                        const f = b.width,
                            g = b.height;
                        b = b.rotation;
                        e = __c.Ll(a.center(), a.rotation * Math.PI / 180, c, d).transformPoint(e);
                        return __c.Sl({
                            center: e,
                            width: f,
                            height: g,
                            rotation: d ? c ? b - 180 : 2 * a.rotation + 180 - b : 2 * a.rotation - b
                        }).transform(__c.am(a))
                    },
                    XFb = function(a, b, c, d = !1, e = !1) {
                        const f = a.center();
                        var g = b.center();
                        const h = b.width / a.width,
                            k = b.height / a.height;
                        a = VFb(a, c, d, e).transform(__c.Fl(g.x - f.x, g.y - f.y).then(__c.Kl(g, Math.min(1, Math.min(h, k)))));
                        g = UFb(a, g, b.ma());
                        return WFb(b, g, d, e)
                    },
                    D6 = function(a, b, c, d = !1, e = !1) {
                        return c && Zl(XFb(a, b, Rl(c), d, e))
                    },
                    YFb = function(a, b) {
                        const c = a.viewBox,
                            d = a.slice,
                            e = a.width / eK(c, d);
                        a = a.height / fK(c, d);
                        return {
                            top: (b.top - c.top) *
                                a,
                            left: (b.left - c.left) * e,
                            width: b.width * e,
                            height: b.height * a,
                            rotation: b.rotation
                        }
                    },
                    ZFb = function(a, b) {
                        const c = a.viewBox,
                            d = a.slice,
                            e = a.width / eK(c, d);
                        a = a.height / fK(c, d);
                        return {
                            top: b.top / a + c.top,
                            left: b.left / e + c.left,
                            width: b.width / e,
                            height: b.height / a,
                            rotation: b.rotation
                        }
                    },
                    $Fb = function(a, b, c) {
                        var d = a.Iqa.get(b),
                            e = a.Lqa.get(b);
                        if (d != null || e != null) {
                            if (d === null || d === void 0 ? 0 : d.sb) {
                                d = d.sb;
                                var f = YFb(a.target, d);
                                const g = C(a.Kqa.get(b));
                                f = D6(g, c, f);
                                b.fill.image.ref && f && (b.fill.image.ref.sb = { ...ZFb(a.target, f),
                                    rotation: d.rotation
                                })
                            }
                            if (e ===
                                null || e === void 0 ? 0 : e.sb) e = e.sb, d = YFb(a.target, e), f = C(a.Kqa.get(b)), c = D6(f, c, d), b.fill.video.ref && c && (b.fill.video.ref.sb = { ...ZFb(a.target, c),
                                rotation: e.rotation
                            })
                        }
                    },
                    E6 = function(a) {
                        const b = new Map;
                        a.hb.forEach(c => {
                            const d = __c.pU(c.d);
                            d && b.set(c, Rl(__c.gK(a, Zl(d))).translate(a.left, a.top))
                        });
                        return b
                    },
                    aGb = function(a, b) {
                        return a === b ? !0 : a.length === b.length && a.every((c, d) => c === b[d])
                    },
                    bGb = function(a, b, c, d, e = !1, f = !1) {
                        if (d) return b = VFb(b, Rl(d), e, f), a = UFb(b, a, c.ma()), Zl(WFb(c, a, e, f))
                    },
                    cGb = function({
                        width: a,
                        height: b
                    }) {
                        return Rl({
                            width: a,
                            height: b,
                            top: 0,
                            left: 0
                        })
                    },
                    dGb = function(a, b) {
                        switch (b.element.type) {
                            case "text":
                                return a.g0.kW(b.element);
                            case "rect":
                                return a.g0.iW(b.element);
                            case "shape":
                                if (!b.element.slice) break;
                                return a.g0.jW(b.element);
                            case "layout":
                                return new F6(b.element, a.ne, a.g0, a.Es);
                            default:
                                throw new E(b.element);
                        }
                    },
                    eGb = function(a) {
                        a.dS.forEach(({
                            writingMode: b,
                            state: c,
                            $a: d
                        }, e) => {
                            var f = c.cells.T();
                            a.Hla.set(e, f.length);
                            __c.pL(b) && !__c.Iab.test(f) && a.lla.add(e);
                            f = document.createElement("div");
                            f.classList.add("AdBbhQ", __c.IL(b));
                            f.style.writingMode = __c.oL(b);
                            a.kt.set(e, f);
                            a.renderer.render(f, c, d, b)
                        });
                        a.Kt.append(...a.kt.values());
                        a.Kt.classList.add("kBwe2A");
                        a.dS.forEach(({
                            CZ: b,
                            state: c
                        }, d) => {
                            const e = C(a.kt.get(d));
                            b = __c.BL(c, a.jb, b);
                            a.Ska.set(d, b);
                            a.FR.set(d, __c.aua(e))
                        })
                    },
                    fGb = function(a, b) {
                        var c = Rl(b);
                        a = a.Zg.hW(b);
                        b = c.Fa;
                        const d = c.br;
                        c = c.br;
                        try {
                            a.Zh(b, d, c, !0, !1)
                        } finally {
                            a.destroy()
                        }
                    },
                    hGb = function(a, b, c, d) {
                        c = new gGb(c, d);
                        B(a.count() === 1, "Only single widget root element is supported");
                        a =
                            a.first();
                        B(a != null && a.type === "layout", `Unexpected widget root found: ${a===null||a===void 0?void 0:a.type}`);
                        c.Y2(a, b)
                    },
                    jGb = function(a) {
                        return { ...__c.xQa,
                            ...G6,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.tCa.width,
                                height: a.tCa.height
                            },
                            hb: a.hb.map(iGb)
                        }
                    },
                    kGb = function(a) {
                        switch (a.Uv) {
                            case 0:
                                var b = zn.mc().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? a.lineHeight * 1E3 : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on",
                                    direction: a.direction
                                });
                                a.color && b.lf("color", a.color);
                                b = b.Lb(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.zQa,
                                    ...H6,
                                    ...G6,
                                    Pa: (c = a.Pa) !== null && c !== void 0 ? c : 0,
                                    text: b,
                                    cg: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.zQa,
                                    ...H6,
                                    ...G6,
                                    text: b,
                                    cg: 2
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    L6 = function({
                        content: a,
                        fill: b,
                        border: c,
                        R: d
                    }) {
                        b = { ...__c.iQa,
                            fill: I6(b),
                            border: J6(c),
                            R: K6(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: jGb(a)
                                };
                            case "text":
                                return { ...b,
                                    element: kGb(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: lGb(a)
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    lGb = function({
                        cells: a,
                        border: b,
                        fill: c,
                        R: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.jQa,
                            ...H6,
                            ...G6,
                            N: H6.width,
                            aa: H6.height,
                            fill: I6(c),
                            border: J6(b),
                            direction: 1,
                            R: K6(d),
                            cells: new Map(a.map(k => [k.id, L6(k)])),
                            behavior: {
                                rules: [{
                                    mf: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: g !== null && g !== void 0 ? g : 0,
                                        rowGap: h !== null && h !== void 0 ? h : 0,
                                        zf: mGb(a)
                                    }
                                }]
                            },
                            ae: void 0
                        }
                    },
                    mGb = function(a) {
                        return new Map(a.map(b => [b.id, nGb(b)]))
                    },
                    nGb = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.LI,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.cS,
                                ...(b != null ? typeof b === "number" ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    J6 = function(a) {
                        var b;
                        const c = (b = a === null || a === void 0 ? void 0 : a.color) !== null && b !== void 0 ? b : "#000000";
                        var d;
                        return { ...__c.SI,
                            all: a ? { ...__c.CQ,
                                weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                                color: c,
                                ye: !0
                            } : void 0
                        }
                    },
                    K6 = function(a) {
                        return { ...__c.bS,
                            ...(a != null ? typeof a === "number" ? {
                                all: a
                            } : a : {})
                        }
                    },
                    iGb = function(a) {
                        return { ...__c.yQa,
                            ...a,
                            fill: I6(a.fill),
                            stroke: oGb(a.stroke)
                        }
                    },
                    oGb = function(a) {
                        return a ? { ...__c.CQ,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    I6 = function(a) {
                        var b;
                        const c = { ...__c.BQ,
                            Pa: (b = a === null || a === void 0 ? void 0 : a.Pa) !== null && b !== void 0 ? b : 0
                        };
                        switch (a === null || a === void 0 ? void 0 : a.type) {
                            case "color":
                                return { ...c,
                                    color: a.color
                                };
                            case "gradient":
                                return { ...c,
                                    Ta: a.Ta
                                };
                            case void 0:
                                return c;
                            default:
                                throw new E(a);
                        }
                    },
                    uGb = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        pGb(a.cells,
                            c, (e, f) => {
                                let g = !1;
                                qGb(e.element, f.content, () => {
                                    a.cells.delete(f.id);
                                    a.cells.set(f.id, L6(f));
                                    g = !0
                                });
                                g || (M6(e.fill, f.fill), rGb(e.border, f.border), sGb(e.R, f.R))
                            }, e => L6(e));
                        tGb(a.behavior, b, c);
                        M6(a.fill, b.fill);
                        sGb(a.R, b.R);
                        rGb(a.border, b.border);
                        var d;
                        a.Pa = (d = b.Pa) !== null && d !== void 0 ? d : 0
                    },
                    tGb = function(a, b, c) {
                        N6(a.rules, [b], d => {
                            vGb(d.grid.gridTemplateColumns, b.gridTemplateColumns) || (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                            vGb(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows =
                                b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                            var f;
                            d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                            pGb(d.grid.zf, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd = n;
                                typeof k === "number" && g.padding.all !== k ? g.padding.all = k : typeof k !== "number" && (g.padding.la = k === null || k === void 0 ?
                                    void 0 : k.la, g.padding.Aa = k === null || k === void 0 ? void 0 : k.Aa, g.padding.ia = k === null || k === void 0 ? void 0 : k.ia, g.padding.Ca = k === null || k === void 0 ? void 0 : k.Ca);
                                g.alignSelf = p
                            }, g => nGb(g))
                        }, d => {
                            var e, f;
                            return {
                                mf: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                                    zf: mGb(d.cells)
                                }
                            }
                        })
                    },
                    wGb = function(a, b) {
                        N6(a.hb, b.hb, (e, f) => {
                            e.d = f.d;
                            M6(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref,
                                f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(oGb(f.stroke))
                        }, e => iGb(e));
                        const {
                            viewBox: c,
                            width: d
                        } = jGb(b);
                        a.width = d;
                        Rl(a.viewBox).equals(Rl(c)) || (a.viewBox = c)
                    },
                    qGb = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                a.type === "shape" ? wGb(a, b) : c();
                                break;
                            case "text":
                                a.type === "text" && zn.domain.yb(zn.ka(a.text), kGb(b).text) || c();
                                break;
                            case "layout":
                                a.type === "layout" ? uGb(a, b) : c();
                                break;
                            default:
                                throw new E(b);
                        }
                    },
                    pGb = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f),
                            c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    N6 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    M6 = function(a, b) {
                        switch (b === null || b === void 0 ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.Ta.set(void 0);
                                var c;
                                a.Pa = (c = b.Pa) !== null && c !== void 0 ? c : 0;
                                break;
                            case "gradient":
                                if (a.Ta.ref && __c.HHa.domain.yb(a.Ta.ref, b.Ta)) break;
                                a.color = void 0;
                                a.Ta.set(b.Ta);
                                var d;
                                a.Pa = (d = b.Pa) !== null && d !== void 0 ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.Ta.set(void 0)
                        }
                    },
                    sGb = function(a, b) {
                        b = K6(b);
                        a.all = b.all;
                        a.Dw = b.Dw;
                        a.Bw = b.Bw;
                        a.Cw = b.Cw;
                        a.Aw = b.Aw
                    },
                    rGb = function(a, b) {
                        b = J6(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.TI.domain.yb(__c.TI.ka(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    vGb = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    yGb = function(a, b, c, d) {
                        let e = a.cxa.get(b);
                        if (e) return e;
                        e = {
                            Yr: new xGb(c.lt, b, d, c.Q9),
                            hka: void 0,
                            isa: void 0,
                            Wta: __c.jX.mode
                        };
                        a.cxa.set(b, e);
                        return e
                    },
                    AGb = function(a, b, c, d, e) {
                        var f, g;
                        e = yGb(a, c, b, e);
                        const h = e.Yr,
                            k = e.isa,
                            l = e.hka,
                            m = e.Wta;
                        c = __c.MR.ka(c);
                        const n = ((f = (g = a.Qt).l9) === null || f === void 0 ? void 0 : f.call(g, d)) || __c.jX;
                        h.kh === k && zGb.structural(c, l) && n.mode === m || (e.hka = c, e.isa = h.kh, e.Wta = n.mode, b = b.render(h, n), a.WQa.update(d, b), hGb(d, b, (p, q) => a.tH.a$.set(p, q), (p, q, r) => a.tH.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    DGb = function(a, b) {
                        const c = [],
                            d = () => c.forEach(e => e());
                        c.push(a.CRa());
                        c.push(BGb(() => {
                            a: {
                                var e = new CGb;
                                for (const f of b)
                                    if (e.xH(f),
                                        e.t8) {
                                        e = e.t8;
                                        break a
                                    }
                                e = void 0
                            }
                            return e && (a.fc.isLoaded(e) || a.J$.has(e))
                        }, e => {
                            if (e) {
                                for (const f of b) B(f.type === "layout"), fGb(a.Dl, f);
                                d()
                            }
                        }));
                        return d
                    },
                    EGb = function(a, b) {
                        return {
                            Pw: ({
                                Lg: c
                            }) => {
                                var d;
                                const {
                                    Yr: e
                                } = yGb(a.renderer, c, b, a.GQ), f = __c.OR.create([]), g = [];
                                g.push(DGb(a.TKa, f));
                                g.push(BGb(() => {
                                    var k, l;
                                    return [(k = (l = a.Qt).l9) === null || k === void 0 ? void 0 : k.call(l, f), __c.MR.ka(c), e.kh]
                                }, () => {
                                    AGb(a.renderer, b, c, f, a.GQ)
                                }, {
                                    fireImmediately: !0,
                                    equals: zGb.structural
                                }));
                                const h = (d = b.Laa) === null || d === void 0 ? void 0 :
                                    d.call(b, {
                                        Yr: e
                                    });
                                h && g.push(h);
                                return {
                                    Za: f,
                                    Ks: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    FGb = {
                        left: a => a.cf,
                        center: a => a.Ua,
                        right: a => a.Fa
                    },
                    GGb = {
                        left: a => a.b,
                        center: a => a.c,
                        right: a => a.t
                    },
                    HGb = {
                        left: a => a.br,
                        center: a => a.r,
                        right: a => a.tr
                    },
                    PFb = {
                        [1]: {
                            [1]: {
                                left: a => a.tr,
                                center: a => a.t,
                                right: a => a.Fa
                            },
                            [2]: HGb,
                            [3]: FGb
                        },
                        [2]: {
                            [1]: {
                                left: a => a.r,
                                center: a => a.c,
                                right: a => a.Ua
                            },
                            [2]: GGb,
                            [3]: GGb
                        },
                        [3]: {
                            [1]: {
                                left: a => a.br,
                                center: a => a.b,
                                right: a => a.cf
                            },
                            [2]: FGb,
                            [3]: HGb
                        }
                    },
                    O6 = class extends fW {
                        constructor(a, b, c, d, e) {
                            super(a, b);
                            this.$p = c;
                            this.ik = d;
                            this.yj =
                                e;
                            this.ik = d !== null && d !== void 0 ? d : fK(a.viewBox, a.slice);
                            this.yj = e !== null && e !== void 0 ? e : eK(a.viewBox, a.slice)
                        }
                    };
                O6.prototype.rG = ba(34);
                O6.prototype.rG = ca(34, function(a = Rl(this.target), b, c = this.hg.Fa, d) {
                    const e = this.target,
                        f = e.slice,
                        {
                            L1: g,
                            Eb: h
                        } = SFb(this, a, b, c, d);
                    (a = this.target.Yb.first()) && h && (a.Ea = {
                        Eb: h
                    });
                    b && e.resizeMode && (e.resizeMode.minBlockSize = g.height);
                    this.yj != null && f && (f.Hg = Math.max(0, this.yj / this.hg.width * g.width + f.source.width - e.viewBox.width));
                    this.ik != null && f && (f.Gg = Math.max(0, this.ik / this.hg.height * g.height + f.source.height - e.viewBox.height));
                    this.Lv(Zl(g));
                    return g
                });
                __c.wL.prototype.rG = ca(33, function(a, b) {
                    var c = a.Yb.first();
                    c = A6(c) ? TFb(this.Wf, zn.ka(c === null || c === void 0 ? void 0 : c.text)) : void 0;
                    a = new O6(a, this.xi, c);
                    try {
                        return a.rG(void 0, !1, void 0, b)
                    } finally {
                        c === null || c === void 0 || c.destroy()
                    }
                });
                var IGb = class extends fW {
                        constructor(a, b, c, d) {
                            super(a, b);
                            this.$p = c;
                            this.Es = d
                        }
                    },
                    P6 = class extends fW {
                        resize(a, b, c, d) {
                            a = this.Dl.rG(this.hg.resize(a, b, c, d), !0, void 0, {
                                V0: !0
                            });
                            E6(this.target).forEach((e, f) => $Fb(this, f, e));
                            return a !== null && a !== void 0 ? a : this.hg
                        }
                        reset() {
                            super.reset();
                            const a = C(this.target.slice);
                            a.Hg = this.BNa;
                            a.Gg = this.ANa
                        }
                        complete() {
                            this.Dl.rG(void 0, !1, void 0, {
                                V0: !0
                            })
                        }
                        destroy() {
                            this.$p && this.$p.destroy()
                        }
                        constructor(a, b, c) {
                            super(a, b);
                            this.Kqa = E6(this.target);
                            this.Iqa = new WeakMap;
                            this.Lqa =
                                new WeakMap;
                            var d = C(a.slice);
                            this.BNa = d.Hg;
                            this.ANa = d.Gg;
                            a.hb.forEach(g => {
                                var h = g.fill.image.ref;
                                h && this.Iqa.set(g, __c.xHa.ka(h));
                                (h = g.fill.video.ref) && this.Lqa.set(g, __c.AHa.ka(h))
                            });
                            if (d.Hg != null) {
                                const g = a.Yb.first();
                                this.yj = eK(a.viewBox, d);
                                const h = a.width / this.yj;
                                var e = a.viewBox.width - d.source.width;
                                if (A6(g)) {
                                    var f;
                                    e = (f = g.text.Wi(0)["font-size"]) !== null && f !== void 0 ? f : __c.bh.Gc["font-size"];
                                    e = NFb(a.viewBox.width, d.source.left, d.source.width, g.box.left, g.box.width, (e + 2 * OFb(a)) / h, eK(a.viewBox, d))
                                }
                                this.minWidth =
                                    Math.max(5, e * h)
                            } else this.yj = void 0, this.minWidth = 5;
                            d.Gg != null ? (this.ik = fK(a.viewBox, d), this.minHeight = Math.max(5, a.height / this.ik * (a.viewBox.height - d.source.height))) : (this.ik = void 0, this.minHeight = 5);
                            this.Wf = c;
                            d = a.Yb.first();
                            A6(d) && (this.$p = TFb(c, zn.ka(d.text)));
                            this.Dl = new O6(a, b, this.$p, this.ik, this.yj)
                        }
                    };
                P6.prototype.Zh = ba(5);
                var Q6 = class extends fW {
                    resize() {
                        throw Error("Unimplemented");
                    }
                    complete() {
                        const a = C6(this.$p, Math.max(5, this.target.N || this.target.width));
                        this.target.Ea = {
                            Eb: a.Eb
                        }
                    }
                    destroy() {
                        this.Es.destroy();
                        this.$p.destroy()
                    }
                    reset() {
                        super.reset();
                        this.target.Ea = this.CNa;
                        this.target.yk = this.zNa;
                        this.target.N = this.yj;
                        this.target.aa = this.ik
                    }
                    constructor(a, b, c, d) {
                        super(a, b);
                        this.Wf = c;
                        this.nb = d;
                        this.yj = a.N;
                        this.ik = a.aa;
                        this.zNa = a.yk;
                        this.CNa = a.Ea;
                        this.xd = a.N != null ? a.width / a.N : void 0;
                        this.Td = a.aa != null ? a.height / a.aa : void 0;
                        this.cg = a.cg;
                        this.writingMode = a.writingMode || 1;
                        this.Es = d.Oo();
                        this.$p = __c.NL(c, zn.ka(a.text), this.writingMode, "em-square", a.Qe.ref);
                        this.Dl = new IGb(a, b, this.$p, this.Es)
                    }
                };
                Q6.prototype.Zh = ba(4);
                var R6 = class extends fW {
                    resizeTo(a, b, c) {
                        B(this.flipX === this.target.fill.flipX);
                        B(this.flipY === this.target.fill.flipY);
                        this.Lv(Zl(a));
                        var d = this.target.fill.image.ref;
                        d && b && (d.sb = b);
                        (b = this.target.fill.video.ref) && c && (b.sb = c);
                        return a
                    }
                    resize(a, b, c, d) {
                        a = this.hg.resize(a, b, c, d);
                        b = D6(this.hg, a, this.N9, this.flipX, this.flipY);
                        c = D6(this.hg, a, this.O9, this.flipX, this.flipY);
                        return this.resizeTo(a, b, c)
                    }
                    reset() {
                        super.reset();
                        var a = this.target.fill.image.ref,
                            b = this.N9;
                        a && b && (a.sb = b);
                        a = this.target.fill.video.ref;
                        b = this.O9;
                        a && b && (a.sb = b)
                    }
                    complete() {}
                    destroy() {}
                    constructor(a, b, c, d) {
                        super(a, b);
                        this.N9 = c;
                        this.O9 = d;
                        this.flipX = this.target.fill.flipX;
                        this.flipY = this.target.fill.flipY
                    }
                };
                R6.prototype.Zh = ba(6);
                vL.prototype.jW = ca(32, function(a) {
                    return new P6(a, this.xi, this.Wf)
                });
                uL.prototype.jW = ca(31, function() {
                    throw Error("Unimplemented");
                });
                vL.prototype.iW = ca(30, function(a) {
                    var b = a.fill.image.ref;
                    const c = a.fill.video.ref;
                    b = b && (b.sb || Zl(this.RX(a, b)));
                    return new R6(a, this.xi, b, c === null || c === void 0 ? void 0 : c.sb)
                });
                uL.prototype.iW = ca(29, function() {
                    throw Error("Unimplemented");
                });
                vL.prototype.kW = ca(28, function(a) {
                    return new Q6(a, this.xi, this.Wf, this.nb)
                });
                uL.prototype.kW = ca(27, function() {
                    throw Error("Unimplemented");
                });
                vL.prototype.RX = ca(26, function(a, b) {
                    const c = b.sb;
                    if (c) return Rl(c);
                    b = this.sE(b.media);
                    return __c.xG(a, b)
                });
                uL.prototype.RX = ca(25, function(a, b) {
                    const c = b.sb;
                    if (c) return Rl(c);
                    b = this.sE(b.media);
                    return __c.xG(a, b)
                });
                var F6 = class extends fW {
                    resize() {
                        throw Error("Method not implemented.");
                    }
                    complete() {
                        for (const [, {
                                Zg: a
                            }] of this.wN) a.complete()
                    }
                    destroy() {
                        for (const [, {
                                Zg: a
                            }] of this.wN) a.destroy()
                    }
                    reset() {
                        super.reset();
                        this.target.width = this.rY;
                        this.target.height = this.xNa;
                        this.target.N = this.yj;
                        this.target.aa = this.ik;
                        for (const [, {
                                Zg: a
                            }] of this.wN) a.reset()
                    }
                    constructor(a, b, c, d) {
                        super(a, b);
                        this.g0 = c;
                        this.Es = d;
                        this.rY = this.target.width;
                        this.xNa = this.target.height;
                        this.yj = this.target.N;
                        this.ik = this.target.aa;
                        this.wN = new Map;
                        for (const [, e] of a.cells)(a = dGb(this, e)) && this.wN.set(e, {
                            Zg: a,
                            wNa: Rl(e.element)
                        })
                    }
                };
                F6.prototype.Zh = ba(7);
                var S6 = class extends fW {
                    resize() {
                        throw Error("Method not implemented.");
                    }
                    complete() {
                        this.Zg.complete()
                    }
                    destroy() {
                        this.Zg.destroy();
                        this.Es.destroy()
                    }
                    reset() {
                        super.reset();
                        this.Zg.reset()
                    }
                    constructor(a, b, c, d) {
                        super(a, b);
                        this.nb = d;
                        this.rY = this.target.width;
                        this.yj = this.target.N;
                        this.ik = this.target.aa;
                        this.Es = this.nb.create(a);
                        this.Zg = new F6(a, b, c, this.Es)
                    }
                };
                S6.prototype.Zh = ba(8);
                vL.prototype.hW = ca(21, function(a) {
                    return new S6(a, this.xi, this, this.zF)
                });
                uL.prototype.hW = ca(20, function() {
                    throw Error("Unimplemented");
                });
                __c.Ol.prototype.Zh = ca(10, function(a, b, c, d, e, f = 0, g = 0) {
                    const h = this.rotation;
                    var k = __c.Fl(-a.x, -a.y).then(__c.Il(-h * __c.ql / 180));
                    a = k.invert();
                    b = k.transformPoint(b);
                    c = k.transformPoint(c);
                    k = k.transformPoint(this.center());
                    d = d ? Math.max(f, Math.min(Infinity, this.width * c.x / b.x)) : this.width;
                    e = e ? Math.max(g, Math.min(Infinity, this.height * c.y / b.y)) : this.height;
                    g = a.transformPoint(new __c.sl(d / this.width * k.x, e / this.height * k.y));
                    return __c.Sl({
                        center: g,
                        width: d,
                        height: e,
                        rotation: h
                    })
                });
                __c.gW.prototype.Zh = ca(9, function(a, b, c, d, e) {
                    this.resizeTo(this.hg.Zh(a, b, c, d, e, this.minWidth, this.minHeight))
                });
                S6.prototype.Zh = ca(8, function(a, b, c, d, e) {
                    const {
                        width: f,
                        height: g
                    } = this.hg.Zh(a, b, c, d, e);
                    var h = this.rY / this.yj,
                        k = this.Es,
                        l = f / h;
                    h = e ? g / h : this.ik;
                    const m = C(k.Zg, "Cannot measure layout using a destroyed measurer");
                    m.style.width = __c.ZI(l);
                    m.style.height = __c.ZI(h);
                    for (var [, n] of k.O1.entries()) n.style.minWidth = "", n.style.minHeight = "";
                    l = new Map;
                    for (const [p, q] of k.O1) n = C(q.parentElement), {
                        width: n
                    } = Rl(n.getBoundingClientRect()), l.set(p, n);
                    n = k.Hka;
                    n.kt.size === 0 && eGb(n);
                    for (const [p, q] of l) {
                        h = C(n.kt.get(p),
                            "Cannot measure text using a destroyed bqltt");
                        const {
                            writingMode: r,
                            $a: t
                        } = C(n.dS.get(p), "Cannot measure text using an unknown key");
                        __c.zL(n.uf, t) == null && (__c.pL(r) ? h.style.width = `${q}px` : h.style.height = `${q}px`)
                    }
                    l = n.measure(l, void 0);
                    for (const [p, q] of k.O1) {
                        const {
                            width: r,
                            height: t
                        } = C(l.get(p));
                        q.style.minWidth = __c.ZI(r);
                        q.style.minHeight = __c.ZI(t)
                    }
                    C(k.Ee).getBoundingClientRect();
                    this.Zg.Zh(a, b, c, d, e)
                });
                F6.prototype.Zh = ca(7, function(a, b, c, d, e) {
                    for (const [n, {
                            Zg: p,
                            wNa: q
                        }] of this.wN) {
                        ({
                            V5: b
                        } = C(this.Es.W5.get(n)));
                        const {
                            top: r,
                            left: t,
                            width: u,
                            height: v
                        } = b.getBoundingClientRect();
                        b = C(Rl({
                            top: r,
                            left: t,
                            width: u,
                            height: v
                        }));
                        c = cGb(q);
                        p.Zh(c.Fa, c.br, cGb(b).br, d, e);
                        n.element.top !== 0 && (n.element.top = 0);
                        n.element.left !== 0 && (n.element.left = 0)
                    }
                    b = this.rY / this.yj;
                    c = C(this.Es.Sra.get(this.target));
                    const {
                        top: f,
                        left: g,
                        width: h,
                        height: k
                    } = c.getBoundingClientRect(), {
                        width: l,
                        height: m
                    } = C(Rl({
                        top: f,
                        left: g,
                        width: h,
                        height: k
                    }));
                    this.Lv(Zl(this.hg.resizeTo(a, l * b, m * b)));
                    d && (this.target.N = l);
                    e && (this.target.aa = m)
                });
                R6.prototype.Zh = ca(6, function(a, b, c, d, e) {
                    const f = this.target.fill.image.ref ? 5 : 1;
                    b = this.hg.Zh(a, b, c, d, e, f, f);
                    c = bGb(a, this.hg, b, this.N9, this.flipX, this.flipY);
                    a = bGb(a, this.hg, b, this.O9, this.flipX, this.flipY);
                    this.resizeTo(b, c, a)
                });
                P6.prototype.Zh = ca(5, function(a, b, c, d, e) {
                    this.Dl.rG(this.hg.Zh(a, b, c, d, e, this.minWidth, this.minHeight), e, a, {
                        V0: !0
                    });
                    E6(this.target).forEach((f, g) => $Fb(this, g, f))
                });
                Q6.prototype.Zh = ca(4, function(a, b, c, d, e) {
                    b = this.hg.Zh(a, b, c, d, e, 5, 5);
                    c = this.hg;
                    a = __c.am(c).transformPoint(a);
                    var f = B6(this.cg, this.writingMode, d ? a.x < c.width / 2 ? "right" : a.x > c.width / 2 ? "left" : "center" : a.y < c.height / 2 ? "right" : a.y > c.height / 2 ? "left" : "center", this.hg); {
                        d = this.Dl;
                        a = d.target;
                        e = d.$p;
                        c = d.hg;
                        var g = d.target,
                            h = g.N != null ? g.width / g.N : 1;
                        g = g.aa != null ? g.height / g.aa : 1;
                        !Number.isFinite(h) && Number.isFinite(g) ? h = g : !Number.isFinite(g) && Number.isFinite(h) && (g = h);
                        const {
                            xd: m,
                            Td: n
                        } = {
                            xd: h,
                            Td: g
                        };
                        h = a.writingMode ||
                            1;
                        f = f || B6(a.cg, h, "left", c);
                        var k, l;
                        h = __c.pL(h) ? ((k = b === null || b === void 0 ? void 0 : b.width) !== null && k !== void 0 ? k : a.width) / m : ((l = b === null || b === void 0 ? void 0 : b.height) !== null && l !== void 0 ? l : a.height) / n;
                        k = C6(e, h);
                        l = c.resizeTo(f, m * Math.max(1, k.width), n * Math.max(1, k.height));
                        __c.$l(c, l) && aGb(a.Ea.Eb, k.Eb) || (d.Lv(Zl(l)), a.yk = 1, a.Ea = {
                            Eb: k.Eb
                        }, a.N = m !== 1 ? Math.max(1, k.width) : void 0, a.aa = n !== 1 ? Math.max(1, k.height) : void 0)
                    }
                });
                var T6 = __webpack_require__(519427),
                    zGb = T6.comparer,
                    JGb = T6.computed,
                    U6 = T6.observable,
                    BGb = T6.reaction,
                    KGb = T6.runInAction;
                var LGb = class {
                    static A(a) {
                        __c.P(a, {
                            eSa: U6.ref,
                            aMa: U6.ref
                        })
                    }
                    constructor() {
                        this.l9 = (LGb.A(this), void 0)
                    }
                };
                var MGb = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    xGb = class {
                        static A(a) {
                            __c.P(a, {
                                Gd: JGb
                            })
                        }
                        get jsa() {
                            var a = this.GQ,
                                b = this.Lg,
                                c = this.Q9;
                            let d = a.sources.get(b);
                            d || (d = U6.box(c), a.sources.set(b, d));
                            return d
                        }
                        get kh() {
                            return this.jsa.get()
                        }
                        get Gd() {
                            return this.lt.Tp({
                                type: "dict",
                                value: this.Lg
                            })
                        }
                        fj(a) {
                            this.jsa.set(a instanceof Function ? { ...this.kh,
                                ...a()
                            } : { ...this.kh,
                                ...a
                            })
                        }
                        constructor(a, b, c, d) {
                            this.lt = a;
                            this.Lg = b;
                            this.GQ = c;
                            this.Q9 = d;
                            xGb.A(this)
                        }
                    };
                var gGb = class {
                    NT(a, b) {
                        this.Wwa(a, b);
                        b.ref && this.qca(a, b.ref, b.key)
                    }
                    AH(a, b) {
                        b.ref && this.qca(a.text, b.ref, b.key)
                    }
                    vha(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                B(a.element.type === "shape");
                                this.NT(a.element, b.content);
                                break;
                            case "text":
                                B(a.element.type === "text");
                                this.AH(a.element, b.content);
                                break;
                            case "layout":
                                B(a.element.type === "layout");
                                this.Y2(a.element, b.content);
                                break;
                            default:
                                throw new E(b.content);
                        }
                    }
                    Y2(a, b) {
                        this.Wwa(a, b);
                        b.ref && this.qca(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), B(!!d && !!a), this.vha(d, a)
                    }
                    constructor(a, b) {
                        this.Wwa = a;
                        this.qca = b
                    }
                };
                var G6 = {
                        locked: !0,
                        Li: {
                            ZV: !1,
                            RS: !1
                        },
                        jg: !0
                    },
                    H6 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var NGb = class {
                    constructor(a) {
                        this.Dl = a;
                        this.update = (b, c) => {
                            N6(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        uGb(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...lGb(d),
                                            ...G6,
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            N: d.minWidth,
                                            aa: d.minHeight
                                        };
                                        break a;
                                    default:
                                        throw new E(d.type);
                                }
                                return d
                            });
                            for (const d of b) B(d.type === "layout"), d.width = c.minWidth, d.height = c.minHeight, d.N = c.minWidth, d.aa = c.minHeight, c.direction && (d.direction = c.direction), fGb(this.Dl,
                                d)
                        }
                    }
                };
                var OGb = class {
                    constructor(a, b, c) {
                        this.WQa = a;
                        this.tH = b;
                        this.Qt = c;
                        this.cxa = new WeakMap
                    }
                };
                var PGb = class {
                        static A(a) {
                            __c.P(a, {
                                J$: U6.shallow
                            })
                        }
                        constructor(a, b) {
                            this.fc = a;
                            this.Dl = b;
                            this.J$ = (PGb.A(this), new Set);
                            this.C8 = new Set;
                            this.CRa = () => {
                                this.xX || (this.xX = __c.Xw(this.fc).subscribe(d => {
                                    KGb(() => {
                                        this.J$.add(d.id)
                                    })
                                }));
                                const c = Symbol();
                                this.C8.add(c);
                                return () => {
                                    this.C8.delete(c);
                                    this.C8.size <= 0 && this.xX && (this.xX.unsubscribe(), this.xX = void 0)
                                }
                            }
                        }
                    },
                    CGb = class extends __c.Sy {
                        xH(a, b) {
                            this.t8 || super.xH(a, b)
                        }
                        AH(a) {
                            this.t8 = (a = a.text.lx("font-family")["font-family"].values().next().value) && __c.Lw(a).id
                        }
                    };
                var QGb = !1,
                    RGb = class {
                        register(a, b) {
                            this.A6.has(a) || (this.A6.set(a, b), QGb || (__c.NR.set(a, EGb(this, b)), QGb = !0))
                        }
                        get(a) {
                            return this.A6.get(a)
                        }
                        constructor(a, b, c, d, e) {
                            this.renderer = a;
                            this.GQ = b;
                            this.Qt = c;
                            this.fc = d;
                            this.Dl = e;
                            this.A6 = new Map;
                            this.TKa = new PGb(this.fc, this.Dl)
                        }
                    };
                var SGb = class {
                        constructor() {
                            this.a$ = new __c.YK;
                            this.refs = new __c.YK
                        }
                    },
                    TGb = class {
                        getContext(a) {
                            return this.tH.refs.get(a)
                        }
                        IE(a) {
                            return this.tH.a$.get(a)
                        }
                        constructor(a, b, c) {
                            this.tH = a;
                            this.GQ = b;
                            this.renderer = c
                        }
                    };
                __c.nAa = {
                    aOa: function(a) {
                        const b = new LGb,
                            c = new SGb,
                            d = new OGb(new NGb(a.Dl), c, b),
                            e = new MGb;
                        a = new RGb(d, e, b, a.fc, a.Dl);
                        return {
                            Qt: b,
                            rbb: new TGb(c, e, d),
                            RT: a,
                            tH: c
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
]); // __FILE_CONTENT_FOR__:2d395eae5a8b1220.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [13794], {

        /***/
        401054: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {}).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
]); // __FILE_CONTENT_FOR__:ed8165688aa76b2c.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [10316], {

        /***/
        605338: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(841629);
            __web_req__(401054);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var E = __c.E;
                var O = __c.O;
                var wb = __c.wb;
                var dBb = function(a, b) {
                        a.sC.forEach(c => c(b));
                        a.kwa = b
                    },
                    eBb = function(a, b) {
                        dBb(a, {
                            notification: b
                        })
                    },
                    fBb = function(a, b, c) {
                        return (new __c.Hb(a, c ? __c.Ib(c) : void 0, __c.Kb, {
                            ignoreTag: !0
                        })).format(Object.fromEntries(Object.entries(b)))
                    },
                    Y4 = function(a, b) {
                        var c = a.IAa.get(b);
                        if (c != null) return c;
                        c = {
                            value: a.lt.lo(b)
                        };
                        a.IAa.set(b, c);
                        a.DAa.set(c, b);
                        return c
                    },
                    Z4 = function(a, b) {
                        a = a.DAa.get(b);
                        if (a == null) throw new gBb("ref does not exists");
                        return a
                    },
                    b5 = function(a) {
                        const b = (c, d) => {
                            if (c == null && a != null) return a;
                            if ((c ===
                                    null || c === void 0 ? void 0 : c.type) !== "string") throw d === "toWidgetData" ? new $4("string", c) : new a5("string", c);
                            return c.value
                        };
                        return {
                            Ji: c => ({
                                type: "string",
                                value: c
                            }),
                            mo: c => b(c, "toWidgetState"),
                            lo: c => b(c, "toWidgetData"),
                            Tp: c => b(c, "toWidgetData")
                        }
                    },
                    d5 = function(a, b) {
                        if (a.length === 0) throw new c5("At least one value must be provided for literal types.");
                        const c = new Set(a),
                            d = (e, f) => {
                                if (e == null) return b;
                                if ((e === null || e === void 0 ? void 0 : e.type) !== "string" || !c.has(e.value)) throw f === "toWidgetData" ? new $4("literal",
                                    e) : new a5("literal", e);
                                return e.value
                            };
                        return {
                            Ji: e => ({
                                type: "string",
                                value: e
                            }),
                            mo: e => d(e, "toWidgetState"),
                            lo: e => d(e, "toWidgetData"),
                            Tp: e => d(e, "toWidgetData")
                        }
                    },
                    e5 = function(a) {
                        const b = (c, d) => {
                            if (c == null || !Number.isFinite(a)) return a;
                            if ((c === null || c === void 0 ? void 0 : c.type) !== "double" || !Number.isFinite(c.value)) throw d === "toWidgetData" ? new $4("double", c) : new a5("double", c);
                            return c.value
                        };
                        return {
                            Ji: c => {
                                if (!Number.isFinite(c)) throw new hBb(c);
                                return {
                                    type: "double",
                                    value: c
                                }
                            },
                            mo: c => b(c, "toWidgetState"),
                            lo: c =>
                                b(c, "toWidgetData"),
                            Tp: c => b(c, "toWidgetData")
                        }
                    },
                    iBb = function() {
                        const a = b => {
                            if ((b === null || b === void 0 ? void 0 : b.type) !== "fill") throw new $4("fill", b);
                            return b.value
                        };
                        return {
                            Ji: b => ({
                                type: "fill",
                                value: b
                            }),
                            mo: b => {
                                if ((b === null || b === void 0 ? void 0 : b.type) !== "fill") throw new a5("fill", b);
                                return b.value
                            },
                            lo: a,
                            Tp: a
                        }
                    },
                    g5 = function(a) {
                        const b = new Set;
                        for (const d of Object.keys(a)) {
                            const [e] = a[d];
                            if (b.has(e)) throw new c5(`Duplicate serialized keys "${e}" found in record schema.`);
                            b.add(e)
                        }
                        const c = (d, e) => {
                            if ((e ===
                                    null || e === void 0 ? void 0 : e.type) !== "dict") throw new $4("record", e);
                            const f = {};
                            for (const g of Object.keys(a)) {
                                const [h, k] = a[g], l = f5(() => {
                                    const m = e.value.get(h);
                                    return k.lo(m)
                                }, {
                                    keepAlive: !0
                                });
                                Object.defineProperty(f, g, {
                                    get() {
                                        return l.get()
                                    },
                                    set(m) {
                                        d !== "readonly" && (m = k.Ji(m), m == null ? e.value.delete(h) : e.value.set(h, m))
                                    },
                                    enumerable: !0
                                })
                            }
                            return f
                        };
                        return {
                            Ji: d => {
                                const e = {};
                                for (const f of Object.keys(a)) {
                                    const [g, h] = a[f], k = h.Ji(d[f]);
                                    k != null && (e[g] = k)
                                }
                                return {
                                    type: "dict",
                                    value: new Map(Object.entries(e))
                                }
                            },
                            mo: d => {
                                if ((d === null || d === void 0 ? void 0 : d.type) !== "dict") throw new a5("record", d);
                                const e = {};
                                for (const f of Object.keys(a)) {
                                    const [g, h] = a[f], k = h.mo(d.value.get(g));
                                    k != null && (e[f] = k)
                                }
                                return e
                            },
                            lo: d => c("editable", d),
                            Tp: d => c("readonly", d),
                            wb: d => g5({ ...a,
                                ...d
                            })
                        }
                    },
                    i5 = function(a) {
                        return {
                            Ji: b => ({
                                type: "list",
                                value: b.map(c => a.Ji(c))
                            }),
                            mo: b => {
                                if ((b === null || b === void 0 ? void 0 : b.type) !== "list") throw new a5("list", b);
                                return b.value.filter(wb).map(c => a.mo(c))
                            },
                            lo: b => {
                                if ((b === null || b === void 0 ? void 0 : b.type) !== "list") throw new $4("list",
                                    b);
                                return new jBb(b, a)
                            },
                            Tp: b => {
                                if ((b === null || b === void 0 ? void 0 : b.type) !== "list") throw new $4("list", b);
                                return new h5(b, a)
                            }
                        }
                    },
                    kBb = function(a) {
                        return {
                            Ji: b => {
                                if (b != null) return a.Ji(b)
                            },
                            mo: b => {
                                if (b != null) return a.mo(b)
                            },
                            lo: b => {
                                if (b != null) return a.lo(b)
                            },
                            Tp: b => {
                                if (b != null) return a.Tp(b)
                            }
                        }
                    },
                    j5 = function(a, b) {
                        const c = new Set(Object.keys(a)),
                            d = e => {
                                var f;
                                if ((e === null || e === void 0 ? void 0 : e.type) !== "dict") throw new $4("union", e);
                                const g = (f = e.value.get("k")) === null || f === void 0 ? void 0 : f.value;
                                f = e.value.get("v");
                                if (g == null || f == null || typeof g !== "string" || !c.has(g)) throw new $4("union", e);
                                return {
                                    qV: a[g],
                                    rV: f
                                }
                            };
                        return {
                            Ji: e => {
                                const f = b(e);
                                return {
                                    type: "dict",
                                    value: new Map([
                                        ["k", {
                                            type: "string",
                                            value: f
                                        }],
                                        ["v", a[f].Ji(e)]
                                    ])
                                }
                            },
                            mo: e => {
                                var f;
                                if ((e === null || e === void 0 ? void 0 : e.type) !== "dict") throw new a5("union", e);
                                const g = (f = e.value.get("k")) === null || f === void 0 ? void 0 : f.value;
                                f = e.value.get("v");
                                if (g == null || f == null || typeof g !== "string" || !c.has(g)) throw new a5("union", e);
                                const {
                                    qV: h,
                                    rV: k
                                } = {
                                    qV: a[g],
                                    rV: f
                                };
                                return h.mo(k)
                            },
                            lo: e => {
                                const {
                                    qV: f,
                                    rV: g
                                } = d(e);
                                return f.lo(g)
                            },
                            Tp: e => {
                                const {
                                    qV: f,
                                    rV: g
                                } = d(e);
                                return f.Tp(g)
                            }
                        }
                    },
                    mBb = function(a) {
                        lBb({ ...a,
                            W: a.span
                        })
                    },
                    lBb = function(a) {
                        const b = { ...a.props
                        };
                        a.W.Rz(({
                            qj: c,
                            sA: d
                        }) => {
                            c = a.D2a ? {} : {
                                Ff: c()
                            };
                            a.Cd.track(a.event, { ...c,
                                Ml: d(),
                                ...b
                            })
                        })
                    },
                    nBb = function(a) {
                        const b = () => a.kh.zt.get(a.Gd.Lj) || k5;
                        return {
                            FJ: function() {
                                return a.kh.lra ? 3 : a.kh.FNa === "checking" || a.kh.pb.status === 2 ? 1 : a.kh.pb.status === 3 ? 4 : a.kh.oQ ? 2 : 0
                            },
                            X8: function() {
                                const c = a.Gd,
                                    {
                                        cz: d
                                    } = b();
                                return !(!d || !c.fields.first(({
                                        value: e
                                    }) =>
                                    !!e.options.first(({
                                        value: f
                                    }) => f.id === d)))
                            },
                            bMa: function(c, d) {
                                const {
                                    results: e
                                } = b();
                                c = e.fields.get(c);
                                if (!c) return 0;
                                var f;
                                d = (f = c.Ns.get(d)) !== null && f !== void 0 ? f : 0;
                                f = c.total > 0 ? d / c.total * 100 : 0;
                                Number.isInteger(f) || (f = parseFloat(f.toFixed(1)));
                                return f
                            },
                            qMa: function(c) {
                                if (!a.Gd.fields.first(({
                                        value: e
                                    }) => e.id === c)) return 0;
                                var {
                                    results: d
                                } = b();
                                return (d = d.fields.get(c)) ? d.total : 0
                            },
                            Ku: b,
                            KQa: c => {
                                const d = new Map(a.kh.zt);
                                d.set(a.Gd.Lj, { ...b(),
                                    ...c
                                });
                                return d
                            }
                        }
                    },
                    rBb = function(a, b, c, d, e, f) {
                        function g() {
                            const u =
                                b.FJ(),
                                v = q();
                            return (p === "poll" || !v) && u === 0
                        }
                        async function h() {
                            var u;
                            const v = f.lr("submit_response", {
                                OG: {
                                    name: "ui.rendering.form.submit_response"
                                }
                            });
                            var x = {
                                zc: m,
                                jLa: p,
                                cu: "interacted",
                                action: "response_submitted",
                                location: "in_form"
                            };
                            e && mBb({
                                span: v,
                                Cd: e,
                                event: oBb,
                                props: x
                            });
                            const {
                                results: y,
                                yd: z,
                                Zba: A
                            } = r();
                            if (z != null && g())
                                if (x = (u = a.Gd.fields.first(({
                                        value: J
                                    }) => {
                                        var L;
                                        return !((L = J.options.first(({
                                            value: S
                                        }) => S.id === z)) === null || L === void 0 || !L.value)
                                    })) === null || u === void 0 ? void 0 : u.value) {
                                    l("selected_field_found",
                                        v);
                                    var D = a.kh,
                                        F = y;
                                    p === "poll" && A && A !== z && (F = l5({
                                        u5: y,
                                        ek: x.id,
                                        CK: A
                                    }));
                                    F = pBb({
                                        Yma: F,
                                        ek: x.id,
                                        CK: z
                                    });
                                    l("field_results_created", v);
                                    m5(() => {
                                        a.fj(() => ({
                                            zt: t({
                                                yd: z,
                                                cz: z,
                                                results: F
                                            }),
                                            oQ: !0
                                        }))
                                    });
                                    l("submission_set", v);
                                    v.cX();
                                    var G = await c.LPa({
                                        $h: a.Gd.$h,
                                        Lj: n,
                                        aFa: {
                                            ek: x.id,
                                            si: x.label.text.T.trim(),
                                            yd: z,
                                            options: x.options.map(({
                                                value: J
                                            }) => ({
                                                id: J.id,
                                                label: J.label.text.T.trim()
                                            }))
                                        }
                                    });
                                    if (G.ok) return m5(() => {
                                        const J = L => {
                                            var S;
                                            return (S = G.value[0]) === null || S === void 0 ? void 0 : S.Bma.includes(L)
                                        };
                                        a.fj(() => ({
                                            oQ: !1,
                                            pb: { ...a.kh.pb,
                                                eQ: J
                                            },
                                            zt: t({
                                                Zba: void 0
                                            })
                                        }))
                                    });
                                    d === null || d === void 0 || eBb(d, {
                                        Sta: O("izckBA"),
                                        group: qBb,
                                        KM: {
                                            oI: O("mQhziQ"),
                                            onClick: h
                                        }
                                    });
                                    var H = l5({
                                        u5: F,
                                        ek: x.id,
                                        CK: z
                                    });
                                    A && (H = pBb({
                                        Yma: H,
                                        ek: x.id,
                                        CK: A
                                    }));
                                    m5(() => {
                                        a.fj({ ...D,
                                            ...(A && {
                                                zt: t({
                                                    yd: A,
                                                    cz: A,
                                                    results: H
                                                })
                                            })
                                        })
                                    })
                                } else v.abort();
                            else v.abort()
                        }
                        async function k(u) {
                            var v;
                            const x = r(),
                                y = (v = a.Gd.fields.first(({
                                    value: D
                                }) => {
                                    var F;
                                    return !((F = D.options.first(({
                                        value: G
                                    }) => G.id === u)) === null || F === void 0 || !F.value)
                                })) === null || v === void 0 ? void 0 : v.value;
                            if (y) {
                                var z = a.kh,
                                    A = l5({
                                        u5: x.results,
                                        ek: y.id,
                                        CK: u
                                    });
                                m5(() => {
                                    a.fj(() => ({
                                        zt: t({
                                            yd: void 0,
                                            cz: void 0,
                                            results: A
                                        }),
                                        Lr: void 0,
                                        oQ: !0
                                    }))
                                });
                                (await c.DTa({
                                    Lj: n
                                })).ok ? m5(() => {
                                    a.fj({
                                        oQ: !1
                                    })
                                }) : (d === null || d === void 0 || eBb(d, {
                                    Sta: O("kgHTHw"),
                                    group: qBb,
                                    KM: {
                                        oI: O("mQhziQ"),
                                        onClick: () => k(u)
                                    }
                                }), m5(() => {
                                    a.fj(z)
                                }))
                            }
                        }

                        function l(u, v) {
                            v.Sj(u);
                            v.ai().Sj(u)
                        }
                        const m = a.Gd.id,
                            n = a.Gd.Lj,
                            p = a.Gd.type,
                            q = b.X8,
                            r = b.Ku,
                            t = b.KQa;
                        return {
                            submit: h,
                            uaa: function() {
                                a.fj(() => ({
                                    WG: 1
                                }))
                            },
                            vaa: function() {
                                a.fj(() => ({
                                    WG: 0
                                }))
                            },
                            taa: function() {
                                a.fj(() => ({
                                    WG: 2
                                }))
                            },
                            waa: function() {
                                a.fj(() => ({
                                    WG: 1
                                }))
                            },
                            l2: function(u) {
                                const v = r(),
                                    x = p === "poll" && u === (v === null || v === void 0 ? void 0 : v.yd) && u === (v === null || v === void 0 ? void 0 : v.cz);
                                if (g() && x) k(u);
                                else if (g() && a.Gd.fields.some(({
                                        value: z
                                    }) => z.options.some(({
                                        value: A
                                    }) => A.id === u))) {
                                    var y = v === null || v === void 0 ? void 0 : v.cz;
                                    m5(() => {
                                        const z = r();
                                        a.fj(() => ({
                                            zt: t({
                                                Zba: y,
                                                yd: z.yd === u ? void 0 : u
                                            })
                                        }))
                                    });
                                    p === "poll" && h()
                                }
                            },
                            LZ: function(u) {
                                g() && a.Gd.fields.some(({
                                    value: v
                                }) => v.options.some(({
                                    value: x
                                }) => x.id === u)) && a.fj(() => ({
                                    xx: u
                                }))
                            },
                            MZ: function(u) {
                                b.FJ() === 0 && a.Gd.fields.some(({
                                        value: v
                                    }) =>
                                    v.options.some(({
                                        value: x
                                    }) => x.id === u)) && a.kh.xx && a.fj(() => ({
                                    xx: void 0
                                }))
                            },
                            JZ: function(u) {
                                const {
                                    cz: v,
                                    yd: x
                                } = r();
                                b.FJ() === 0 && a.Gd.fields.some(({
                                    value: y
                                }) => y.options.some(({
                                    value: z
                                }) => z.id === u)) && x !== u && !v && a.fj(() => ({
                                    Lr: u
                                }))
                            },
                            NZ: function(u) {
                                b.FJ() === 0 && a.Gd.fields.some(({
                                    value: v
                                }) => v.options.some(({
                                    value: x
                                }) => x.id === u)) && a.kh.Lr && a.fj(() => ({
                                    Lr: void 0
                                }))
                            }
                        }
                    },
                    l5 = function({
                        u5: a,
                        ek: b,
                        CK: c
                    }) {
                        var d;
                        const e = (d = a.fields.get(b)) !== null && d !== void 0 ? d : {
                            id: b,
                            Ns: new Map,
                            total: 0
                        };
                        var f;
                        d = Math.max(0, ((f = e.Ns.get(c)) !==
                            null && f !== void 0 ? f : 0) - 1);
                        f = new Map(e.Ns);
                        d > 0 ? f.set(c, d) : f.delete(c);
                        return {
                            fields: n5(a.fields, b, {
                                id: b,
                                Ns: f,
                                total: Math.max(0, e.total - 1)
                            })
                        }
                    },
                    pBb = function({
                        Yma: a,
                        ek: b,
                        CK: c
                    }) {
                        var d;
                        const e = (d = a.fields.get(b)) !== null && d !== void 0 ? d : {
                            id: b,
                            Ns: new Map,
                            total: 0
                        };
                        var f;
                        d = ((f = e.Ns.get(c)) !== null && f !== void 0 ? f : 0) + 1;
                        return {
                            fields: n5(a.fields, b, {
                                id: b,
                                Ns: n5(e.Ns, c, d),
                                total: e.total + 1
                            })
                        }
                    },
                    n5 = function(a, b, c) {
                        return new Map([...a.entries(), [b, c]])
                    },
                    o5 = function(a, b) {
                        var c;
                        return (((c = a.z2) === null || c === void 0 ? void 0 : c.get(a.document.language ||
                            "en")) || [])[sBb[b]]
                    },
                    tBb = async function() {
                        var {
                            Bga: a
                        } = await __webpack_require__.me(535189).then(() => ({
                            Bga: '{\n"af-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Verkeerd",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Dien tans in \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laai tans...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Vanlyn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Korrek",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Regstreeks"\n},\n"ar":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-AE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-EG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-SA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"as-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0985\u09b6\u09c1\u09a6\u09cd\u09a7",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u09a6\u09be\u0996\u09bf\u09b2 \u0995\u09f0\u09be \u09b9\u09c8 \u0986\u099b\u09c7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u09b2\'\u09a1 \u09b9\u09c8 \u0986\u099b\u09c7",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0985\u09ab\u09b2\u09be\u0987\u09a8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u0995\u09bf\u09ac\u09be \u09b8\u09ae\u09b8\u09cd\u09af\u09be \u09b9\u2019\u09b2",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u09b6\u09c1\u09a6\u09cd\u09a7",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u09b2\u09be\u0987\u09ad"\n},\n"az-AZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Yanl\u0131\u015f",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"T\u0259qdim edilir...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Y\u00fckl\u0259nir...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Do\u011fru",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Canl\u0131"\n},\n"bg-BG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041f\u043e\u0434\u0430\u0432\u0430\u043d\u0435\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043d\u0435...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u041f\u0440\u0430\u0432\u0438\u043b\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u041d\u0430 \u0436\u0438\u0432\u043e"\n},\n"bn-BD":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09be\u09ae \u09b6\u09c7\u09df\u09be\u09b0 \u0995\u09b0\u09be \u09b9\u09ac\u09c7",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u09ad\u09c1\u09b2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u09aa\u09cd\u09b0\u09a4\u09bf\u0995\u09cd\u09b0\u09bf\u09af\u09bc\u09be \u09b8\u09c7\u09ad \u0995\u09b0\u09be \u09b9\u09df\u09c7\u099b\u09c7",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u099c\u09ae\u09be \u09a6\u09c7\u0993\u09df\u09be \u09b9\u099a\u09cd\u099b\u09c7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u09b2\u09cb\u09a1 \u09b9\u099a\u09cd\u099b\u09c7...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u099f\u09bf \u09ad\u09cb\u099f} other {# \u099f\u09bf \u09ad\u09cb\u099f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0985\u09ab\u09b2\u09be\u0987\u09a8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09be\u09ae \u09b6\u09c7\u09af\u09bc\u09be\u09b0 \u0995\u09b0\u09be \u09b9\u09ac\u09c7 \u09a8\u09be",\n"d648001f72873b11f1495205043049417024f9cf":"\u0995\u09cb\u09a8\u09cb \u09b8\u09ae\u09b8\u09cd\u09af\u09be \u09b9\u09df\u09c7\u099b\u09c7",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u09b8\u09a0\u09bf\u0995",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u09b2\u09be\u0987\u09ad"\n},\n"ca-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"El teu nom es compartir\u00e0",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecte",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"S\'ha desat la resposta",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"S\'est\u00e0 enviant...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"S\'est\u00e0 carregant...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vot} other {# vots}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sense connexi\u00f3",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No es compartir\u00e0 el teu nom",\n"d648001f72873b11f1495205043049417024f9cf":"Hi ha hagut un problema",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcte",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicada"\n},\n"ceb-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Sayop",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Nagsumite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Nag-load...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Adunay nahitabo nga problema",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Husto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"cs-CZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Va\u0161e jm\u00e9no bude sd\u00edleno",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nespr\u00e1vn\u011b",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpov\u011b\u010f ulo\u017eena",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Odes\u00edl\u00e1n\u00ed\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na\u010d\u00edt\u00e1n\u00ed...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0hlas} few {#\u00a0hlasy} many {#\u00a0hlasu} other {#\u00a0hlas\u016f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Va\u0161e jm\u00e9no nebude sd\u00edleno",\n"d648001f72873b11f1495205043049417024f9cf":"N\u011bco se pokazilo",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Spr\u00e1vn\u011b",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"K\u00a0dispozici"\n},\n"cy-GB":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Anghywir",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Wrthi\'n cyflwyno...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Yn llwytho...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"All-lein",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Cywir",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Yn Fyw"\n},\n"da-DK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Dit navn deles",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Forkert",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svaret er gemt",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Indsender...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Indl\u00e6ser...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stemme} other {# stemmer}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Dit navn deles ikke",\n"d648001f72873b11f1495205043049417024f9cf":"Der gik noget galt",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Korrekt",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktiv"\n},\n"de-DE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Dein Name bleibt nicht anonym",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Falsch",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwort gespeichert",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Wird gesendet \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden\u00a0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# Stimme} other {# Stimmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Dein Name ist nicht sichtbar",\n"d648001f72873b11f1495205043049417024f9cf":"Da ist etwas schiefgelaufen.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Richtig",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"el-GR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03ac \u03c3\u03b1\u03c2 \u03b8\u03b1 \u03ba\u03bf\u03b9\u03bd\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u039b\u03ac\u03b8\u03bf\u03c2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0397 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c4\u03b7\u03ba\u03b5",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u03a5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u03c8\u03ae\u03c6\u03bf\u03c2} other {# \u03c8\u03ae\u03c6\u03bf\u03b9}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0395\u03ba\u03c4\u03cc\u03c2 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7\u03c2",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03ac \u03c3\u03b1\u03c2 \u03b4\u03b5\u03bd \u03b8\u03b1 \u03ba\u03bf\u03b9\u03bd\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af",\n"d648001f72873b11f1495205043049417024f9cf":"\u03a0\u03b1\u03c1\u03bf\u03c5\u03c3\u03b9\u03ac\u03c3\u03c4\u03b7\u03ba\u03b5 \u03ba\u03ac\u03c0\u03bf\u03b9\u03bf \u03c0\u03c1\u03cc\u03b2\u03bb\u03b7\u03bc\u03b1",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u03a3\u03c9\u03c3\u03c4\u03ac",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0394\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03bf"\n},\n"en":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-AU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-GB":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-psaccent":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"es-419":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no sali\u00f3 bien.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-AR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Vamos a compartir tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se va a compartir tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no sali\u00f3 bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-CO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no sali\u00f3 bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Se compartir\u00e1 el nombre",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Tu nombre no se compartir\u00e1",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no ha salido bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-MX":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no funcion\u00f3.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-US":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Se produjo un error",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"et-EE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Vale",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Esitatud ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laadimine ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"V\u00f5rgu\u00fchenduseta",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u00d5ige",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Avalik"\n},\n"eu-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Se compartir\u00e1 el nombre",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Oker",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Bidaltzen...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kargatzen\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Lineaz kanpo",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Tu nombre no se compartir\u00e1",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no ha salido bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Zuzen",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publikoa"\n},\n"fa-IR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0646\u0627\u062f\u0631\u0633\u062a",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062f\u0631\u062d\u0627\u0644 \u0627\u0631\u0633\u0627\u0644\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062f\u0631\u062d\u0627\u0644 \u0628\u0627\u0631 \u06a9\u0631\u062f\u0646\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641\u0644\u0627\u06cc\u0646",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u06cc\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0632\u0646\u062f\u0647"\n},\n"ff-SN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nana daidai",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Tottirde...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Lowd\u00e9...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Boowal \u0253oggol",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Huunde boni",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Daidai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Wuur"\n},\n"fi-FI":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nimesi jaetaan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"V\u00e4\u00e4rin",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Vastaus tallennettu",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"L\u00e4hetet\u00e4\u00e4n...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ladataan...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u00e4\u00e4ni} other {# \u00e4\u00e4nt\u00e4}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nime\u00e4si ei jaeta",\n"d648001f72873b11f1495205043049417024f9cf":"Jokin meni pieleen",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Oikein",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"K\u00e4ynniss\u00e4"\n},\n"fr-BE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Votre nom sera partag\u00e9",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Votre nom ne sera pas partag\u00e9",\n"d648001f72873b11f1495205043049417024f9cf":"Une erreur est survenue",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"fr-CA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Votre nom sera communiqu\u00e9",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Votre nom ne sera pas partag\u00e9",\n"d648001f72873b11f1495205043049417024f9cf":"Une erreur est survenue",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"fr-FR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Votre nom sera partag\u00e9",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Votre nom ne sera pas partag\u00e9",\n"d648001f72873b11f1495205043049417024f9cf":"Une erreur est survenue",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"gl-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Se compartir\u00e1 el nombre",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrectas",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sen conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Tu nombre no se compartir\u00e1",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no ha salido bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correctas",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En directo"\n},\n"gu-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0aa4\u0aae\u0abe\u0ab0\u0ac1\u0a82 \u0aa8\u0abe\u0aae \u0ab6\u0ac7\u0ab0 \u0a95\u0ab0\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0ab6\u0ac7",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0a96\u0acb\u0a9f\u0abe",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0a9c\u0ab5\u0abe\u0aac \u0ab8\u0abe\u0a9a\u0ab5\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0acd\u0aaf\u0acb",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0ab8\u0aac\u0aae\u0abf\u0a9f \u0a95\u0ab0\u0ac0 \u0ab0\u0ab9\u0acd\u0aaf\u0abe \u0a9b\u0ac0\u0a8f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0ab2\u0acb\u0aa1 \u0a95\u0ab0\u0ac0 \u0ab0\u0ab9\u0acd\u0aaf\u0abe\u0a82 \u0a9b\u0ac7...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0aae\u0aa4} other {# \u0aae\u0aa4}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0a91\u0aab\u0ab2\u0abe\u0a87\u0aa8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0aa4\u0aae\u0abe\u0ab0\u0ac1\u0a82 \u0aa8\u0abe\u0aae \u0ab6\u0ac7\u0ab0 \u0a95\u0ab0\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0ab6\u0ac7 \u0aa8\u0ab9\u0ac0\u0a82",\n"d648001f72873b11f1495205043049417024f9cf":"\u0a95\u0a82\u0a88\u0a95 \u0a96\u0acb\u0a9f\u0ac1\u0a82 \u0aa5\u0aaf\u0ac1\u0a82",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0ab8\u0abe\u0a9a\u0abe",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0ab2\u0abe\u0a87\u0ab5"\n},\n"ha-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Ba daidai ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Aikawa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u018aorawa...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"A waje da layi",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Daidai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Nan take"\n},\n"he-IL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"%{0}",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u05e9\u05de\u05da \u05d9\u05e9\u05d5\u05ea\u05e3",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u05dc\u05d0 \u05e0\u05db\u05d5\u05df",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u05d4\u05ea\u05d2\u05d5\u05d1\u05d4 \u05e0\u05e9\u05de\u05e8\u05d4",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u05e9\u05d5\u05dc\u05d7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u05d8\u05d5\u05e2\u05df...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {\u05d4\u05e6\u05d1\u05e2\u05d4 \u05d0\u05d7\u05ea} two {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea} many {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea} other {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u05dc\u05d0 \u05de\u05e7\u05d5\u05d5\u05df",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u05d4\u05e9\u05dd \u05e9\u05dc\u05da \u05dc\u05d0 \u05d9\u05e9\u05d5\u05ea\u05e3",\n"d648001f72873b11f1495205043049417024f9cf":"\u05de\u05e9\u05d4\u05d5 \u05d4\u05e9\u05ea\u05d1\u05e9",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u05e0\u05db\u05d5\u05df",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u05d6\u05de\u05d9\u05df"\n},\n"hi-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0906\u092a\u0915\u093e \u0928\u093e\u092e \u0936\u0947\u092f\u0930 \u0915\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u091c\u0935\u093e\u092c \u0938\u0947\u0935 \u0915\u093f\u092f\u093e \u0917\u092f\u093e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u0915\u093f\u092f\u093e \u091c\u093e \u0930\u0939\u093e \u0939\u0948...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u093e \u0939\u0948...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0935\u094b\u091f} other {# \u0935\u094b\u091f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u095e\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0906\u092a\u0915\u093e \u0928\u093e\u092e \u0936\u0947\u092f\u0930 \u0928\u0939\u0940\u0902 \u0915\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e",\n"d648001f72873b11f1495205043049417024f9cf":"\u0915\u094b\u0908 \u0917\u0921\u093c\u092c\u0921\u093c\u0940 \u0939\u0941\u0908",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u0935"\n},\n"hr-HR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Va\u0161e ime se dijeli",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neto\u010dno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odgovor je spremljen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Slanje...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"U\u010ditavanje...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# glas} few {# glasa} other {# glasova}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Izvan mre\u017ee",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Va\u0161e se ime ne\u0107e dijeliti",\n"d648001f72873b11f1495205043049417024f9cf":"Do\u0161lo je do pogre\u0161ke",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"To\u010dno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"U\u017eivo"\n},\n"hu-HU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"A neved meg lesz osztva",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Helytelen",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"V\u00e1lasz mentve",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Bek\u00fcld\u00e9s...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Bet\u00f6lt\u00e9s\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# szavazat} other {# szavazat}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"A neved nem lesz megosztva",\n"d648001f72873b11f1495205043049417024f9cf":"Hiba t\u00f6rt\u00e9nt",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Helyes",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u00c9l\u0151"\n},\n"hy-AM":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u054d\u056d\u0561\u056c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0546\u0565\u0580\u056f\u0561\u0575\u0561\u0581\u057e\u0578\u0582\u0574 \u0567...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0532\u0565\u057c\u0576\u0578\u0582\u0574...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0531\u0576\u0581\u0561\u0576\u0581",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0543\u056b\u0577\u057f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0540\u0580\u0561\u057a\u0561\u0580\u0561\u056f\u057e\u0561\u056e \u0567"\n},\n"id-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nama Anda akan dibagikan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons tercatat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Sedang mengirim ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Memuat ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# suara} other {# suara}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nama Anda tidak akan dibagikan",\n"d648001f72873b11f1495205043049417024f9cf":"Terjadi kesalahan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Benar",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Sudah tayang"\n},\n"ig-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Abughi eziokwu",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Na-enyefe",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na-ebugo...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"An\u1ecdgh\u1ecb n\'\u1ecbntanet\u1ecb",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Eziokwu",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Gbanyere"\n},\n"it-IT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Il tuo nome verr\u00e0 condiviso",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Risposta errata",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Risposta salvata",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Stiamo inviando il modulo...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Caricamento in corso...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# voti}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Non condivideremo il tuo nome",\n"d648001f72873b11f1495205043049417024f9cf":"Abbiamo riscontrato un errore",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Risposta corretta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Disponibile"\n},\n"ja-Hira":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u3042\u306a\u305f\u306e\u540d\u524d\u304c\u5171\u6709\u3055\u308c\u307e\u3059",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u3075\u305b\u3044\u304b\u3044",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u3078\u3093\u3057\u3093\u304c\u307b\u305e\u3093\u3055\u308c\u307e\u3057\u305f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u305d\u3046\u3057\u3093\u3061\u3085\u3046...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u3088\u307f\u3053\u3093\u3067\u3044\u307e\u3059\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u3072\u3087\u3046} other {#\u3072\u3087\u3046}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u304a\u3075\u3089\u3044\u3093",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u540d\u524d\u306f\u5171\u6709\u3055\u308c\u307e\u305b\u3093",\n"d648001f72873b11f1495205043049417024f9cf":"\u3082\u3093\u3060\u3044\u304c\u306f\u3063\u305b\u3044\u3057\u307e\u3057\u305f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u305b\u3044\u304b\u3044",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u3053\u3046\u304b\u3044\u306a\u304b"\n},\n"ja-JP":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u3042\u306a\u305f\u306e\u540d\u524d\u304c\u5171\u6709\u3055\u308c\u307e\u3059",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u89e3",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u8fd4\u4fe1\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u9001\u4fe1\u4e2d...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u7968} other {#\u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u30aa\u30d5\u30e9\u30a4\u30f3",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u540d\u524d\u306f\u5171\u6709\u3055\u308c\u307e\u305b\u3093",\n"d648001f72873b11f1495205043049417024f9cf":"\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u89e3",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u516c\u958b\u4e2d"\n},\n"jv-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nama Anda akan dibagikan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons tercatat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Ngirimake...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ngamot...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# suara} other {# suara}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nama Anda tidak akan dibagikan",\n"d648001f72873b11f1495205043049417024f9cf":"Terjadi kesalahan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Bener",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Langsung"\n},\n"ka-GE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u10db\u10d8\u10db\u10d3\u10d8\u10dc\u10d0\u10e0\u10d4\u10dd\u10d1\u10e1 \u10e9\u10d0\u10d1\u10d0\u10e0\u10d4\u10d1\u10d0...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u10d8\u10e2\u10d5\u10d8\u10e0\u10d7\u10d4\u10d1\u10d0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u10dd\u10e4\u10da\u10d0\u10d8\u10dc\u10d8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u10e1\u10ec\u10dd\u10e0\u10d8",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u10e1\u10d0\u10ef\u10d0\u10e0\u10dd"\n},\n"kk-KZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0414\u04b1\u0440\u044b\u0441 \u0435\u043c\u0435\u0441",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0416\u0456\u0431\u0435\u0440\u0456\u043b\u0443\u0434\u0435...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0416\u04af\u043a\u0442\u0435\u043b\u0443\u0434\u0435...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0414\u04b1\u0440\u044b\u0441",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0416\u0430\u043b\u043f\u044b\u0493\u0430 \u043e\u0440\u0442\u0430\u049b"\n},\n"km-KH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u1780\u17c6\u1796\u17bb\u1784\u178a\u17b6\u1780\u17cb\u1794\u1789\u17d2\u1787\u17bc\u1793...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a.",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u1782\u17d2\u1798\u17b6\u1793\u17a2\u17ca\u17b8\u1793\u1792\u17ba\u178e\u17b7\u178f",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u1798\u17b6\u1793\u17a2\u17d2\u179c\u17b8\u1798\u17bd\u1799\u1781\u17bb\u179f\u1794\u17d2\u179a\u1780\u17d2\u179a\u178f\u17b8",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u1794\u1793\u17d2\u178f\u1795\u17d2\u1791\u17b6\u179b\u17cb"\n},\n"kn-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0ca8\u0cbf\u0cae\u0ccd\u0cae \u0cb9\u0cc6\u0cb8\u0cb0\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb9\u0c82\u0c9a\u0cbf\u0c95\u0cca\u0cb3\u0ccd\u0cb3\u0cb2\u0cbe\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0ca6\u0cc6",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0ca4\u0caa\u0ccd\u0caa\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0caa\u0ccd\u0cb0\u0ca4\u0cbf\u0c95\u0ccd\u0cb0\u0cbf\u0caf\u0cc6\u0caf\u0ca8\u0ccd\u0ca8\u0cc1 \u0c89\u0cb3\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0cb8\u0cb2\u0ccd\u0cb2\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0cbf\u0ca6\u0cc6...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0cb2\u0ccb\u0ca1\u0ccd \u0c86\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0cbf\u0ca6\u0cc6...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0cae\u0ca4} other {# \u0cae\u0ca4\u0c97\u0cb3\u0cc1}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0c86\u0cab\u0ccd\u200c\u0cb2\u0cc8\u0ca8\u0ccd",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0ca8\u0cbf\u0cae\u0ccd\u0cae \u0cb9\u0cc6\u0cb8\u0cb0\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb9\u0c82\u0c9a\u0cbf\u0c95\u0cca\u0cb3\u0ccd\u0cb3\u0cb2\u0cbe\u0c97\u0cc1\u0cb5\u0cc1\u0ca6\u0cbf\u0cb2\u0ccd\u0cb2",\n"d648001f72873b11f1495205043049417024f9cf":"\u0c8f\u0ca8\u0ccb \u0ca4\u0caa\u0ccd\u0caa\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0cb8\u0cb0\u0cbf\u0caf\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0cb2\u0cc8\u0cb5\u0ccd"\n},\n"ko-KR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\uc774\ub984\uc774 \uacf5\uc720\ub429\ub2c8\ub2e4",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\uc798\ubabb\ub41c \ub2f5\ubcc0",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\ub2f5\ubcc0\uc774 \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\uc81c\ucd9c \uc911...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\ub85c\ub4dc \uc911...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\ud45c} other {#\ud45c}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\uc624\ud504\ub77c\uc778",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\ub0b4 \uc774\ub984\uc774 \uacf5\uc720\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4",\n"d648001f72873b11f1495205043049417024f9cf":"\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\uc62c\ubc14\ub978 \ub2f5\ubcc0",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\uac8c\uc2dc \uc911"\n},\n"ku-TR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nerast",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"P\u00ea\u015fk\u00ea\u015fkirin...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Bar dike",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u015ea\u015f\u00eeyek r\u00fb da",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Rast",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Z\u00eend\u00ee"\n},\n"ky-KG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041a\u0430\u0442\u0430",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0422\u0430\u043f\u0448\u044b\u0440\u044b\u043b\u0443\u0443\u0434\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0416\u04af\u043a\u0442\u04e9\u043b\u04af\u04af\u0434\u04e9...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0422\u0443\u0443\u0440\u0430",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0422\u04af\u0437 \u043e\u0431\u043e"\n},\n"lt-LT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neteisingai",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Pateikiama...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u012ekeliama...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Neprijungta",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Teisingai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Vie\u0161as"\n},\n"lv-LV":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nepareizi",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iesnieg\u0161ana...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Notiek iel\u0101de",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Bezsaist\u0113",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Pareizi",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Tie\u0161saist\u0113"\n},\n"ma-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u092d\u090f \u0930\u0939\u0932 \u0905\u091b\u093f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u092d\u090f \u0930\u0939\u0932 \u0905\u091b\u093f...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u0935"\n},\n"mg-MG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Diso",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Mandrotsaka...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Mamoaka\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Ivelan-jotra",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Nisy zavatra tsy nety",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Marina",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Mivantana"\n},\n"mk-MK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u0442\u043e\u0447\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0421\u0435 \u043f\u043e\u0434\u043d\u0435\u0441\u0443\u0432\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0421\u0435 \u0432\u0447\u0438\u0442\u0443\u0432\u0430...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0458\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0422\u043e\u0447\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0408\u0430\u0432\u043d\u043e"\n},\n"ml-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d2a\u0d47\u0d30\u0d4d \u0d2a\u0d19\u0d4d\u0d15\u0d3f\u0d1f\u0d41\u0d02.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0d24\u0d46\u0d31\u0d4d\u0d31\u0d4d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0d2a\u0d4d\u0d30\u0d24\u0d3f\u0d15\u0d30\u0d23\u0d02 \u0d38\u0d02\u0d30\u0d15\u0d4d\u0d37\u0d3f\u0d1a\u0d4d\u0d1a\u0d41",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0d38\u0d2e\u0d7c\u0d2a\u0d4d\u0d2a\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0d32\u0d4b\u0d21\u0d41\u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d41\u0d28\u0d4d\u0d28\u0d41...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0d35\u0d4b\u0d1f\u0d4d\u0d1f\u0d4d} other {# \u0d35\u0d4b\u0d1f\u0d4d\u0d1f\u0d41\u0d15\u0d7e}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0d13\u0d2b\u0d4d\u200c\u0d32\u0d48\u0d7b",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d2a\u0d47\u0d30\u0d4d \u0d2a\u0d19\u0d4d\u0d15\u0d3f\u0d1f\u0d3f\u0d32\u0d4d\u0d32",\n"d648001f72873b11f1495205043049417024f9cf":"\u0d0e\u0d28\u0d4d\u0d24\u0d4b \u0d2a\u0d3f\u0d36\u0d15\u0d4d \u0d38\u0d02\u0d2d\u0d35\u0d3f\u0d1a\u0d4d\u0d1a\u0d41",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0d36\u0d30\u0d3f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0d32\u0d48\u0d35\u0d4d"\n},\n"mn-MN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0411\u0443\u0440\u0443\u0443",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0418\u043b\u0433\u044d\u044d\u0436 \u0431\u0430\u0439\u043d\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0410\u0447\u0430\u0430\u043b\u0436 \u0431\u0430\u0439\u043d\u0430...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u042f\u043c\u0430\u0440 \u043d\u044d\u0433 \u0430\u043b\u0434\u0430\u0430 \u0433\u0430\u0440\u043b\u0430\u0430",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0417\u04e9\u0432",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0428\u0443\u0443\u0434"\n},\n"mr-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0924\u0941\u092e\u091a\u0947 \u0928\u093e\u0935 \u0936\u0947\u0905\u0930 \u0915\u0947\u0932\u0947 \u091c\u093e\u0908\u0932",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u091a\u0942\u0915",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u092a\u094d\u0930\u0924\u093f\u0938\u093e\u0926 \u091c\u0924\u0928 \u0915\u0947\u0932\u093e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0924 \u0906\u0939\u0947...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u094b\u0924 \u0906\u0939\u0947...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u092e\u0924} other {# \u092e\u0924\u0947}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0924\u0941\u092e\u091a\u0947 \u0928\u093e\u0935 \u0936\u0947\u0905\u0930 \u0915\u0947\u0932\u0947 \u091c\u093e\u0923\u093e\u0930 \u0928\u093e\u0939\u0940",\n"d648001f72873b11f1495205043049417024f9cf":"\u0915\u093e\u0939\u0940\u0924\u0930\u0940 \u091a\u0942\u0915 \u091d\u093e\u0932\u0940",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0905\u091a\u0942\u0915",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0908\u0935"\n},\n"ms-MY":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nama anda akan dikongsikan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons disimpan",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Menyerahkan...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Memuatkan...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# undian} other {# undian}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Luar talian",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nama anda tidak akan dikongsikan",\n"d648001f72873b11f1495205043049417024f9cf":"Terdapat sedikit masalah",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Betul",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Hidup"\n},\n"my-MM":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u1019\u1019\u103e\u1014\u103a\u1015\u102b",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u1015\u1031\u1038\u1015\u102d\u102f\u1037\u1014\u1031\u101e\u100a\u103a...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u1016\u103d\u1004\u1037\u103a\u1014\u1031\u101e\u100a\u103a...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u1021\u1031\u102c\u1037\u1016\u103a\u101c\u102d\u102f\u1004\u103a\u1038",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u1019\u103e\u1014\u103a\u101e\u100a\u103a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u1010\u1036\u1006\u102d\u1015\u103a\u1021\u101b\u103e\u1004\u103a"\n},\n"nb-NO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Navnet ditt blir delt",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Feil",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svar lagret",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Sender inn\u00a0\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laster inn\u00a0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stemme} other {# stemmer}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Frakoblet",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Navnet ditt blir ikke delt",\n"d648001f72873b11f1495205043049417024f9cf":"Noe gikk galt",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Riktig",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"ne-NP":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u092a\u0947\u0936 \u0917\u0930\u093f\u0926\u0948...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u0941\u0901\u0926\u0948...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0905\u092b\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u092d"\n},\n"nl-BE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Je naam wordt gedeeld",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Onjuist",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwoord opgeslagen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Verzenden...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stem} other {# stemmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Je naam wordt niet gedeeld",\n"d648001f72873b11f1495205043049417024f9cf":"Er is iets misgegaan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Juist",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"nl-NL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Je naam wordt gedeeld",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Onjuist",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwoord opgeslagen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Verzenden...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stem} other {# stemmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Je naam wordt niet gedeeld",\n"d648001f72873b11f1495205043049417024f9cf":"Er is iets misgegaan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Juist",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"om-ET":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Sirrii miti",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Galchaa jirra...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Fe\'uu jira",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sarara ala",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Wanti tokko dogongoraan deemaa jira",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sirrii",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"kallattin"\n},\n"pa-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0a17\u0a32\u0a24",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0a38\u0a2a\u0a41\u0a30\u0a26 \u0a15\u0a40\u0a24\u0a3e \u0a1c\u0a3e \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0a32\u0a4b\u0a21 \u0a15\u0a40\u0a24\u0a3e \u0a1c\u0a3e \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0a14\u0a5e\u0a32\u0a3e\u0a08\u0a28",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0a38\u0a39\u0a40",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0a32\u0a3e\u0a08\u0a35"\n},\n"pa-PK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u0644\u0637",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0645\u0639 \u06a9\u06cc\u062a\u0627 \u062c\u0627 \u0631\u06c1\u06cc\u0627 \u0627\u06d2...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u06cc\u0627 \u0627\u06d2\u06d4\u06d4\u06d4",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641 \u0644\u0627\u0626\u0646",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u062f\u0631\u0633\u062a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0628\u0631\u0627\u06c1\u0650 \u0631\u0627\u0633\u062a"\n},\n"pl-PL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Twoje imi\u0119 i\u00a0nazwisko zostanie udost\u0119pnione",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Niepoprawnie",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpowied\u017a zapisana",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Przesy\u0142anie\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0141adowanie\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# g\u0142os} few {# g\u0142osy} many {# g\u0142os\u00f3w} other {# g\u0142osu}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Twoje imi\u0119 i\u00a0nazwisko nie b\u0119d\u0105 udost\u0119pniane",\n"d648001f72873b11f1495205043049417024f9cf":"Co\u015b posz\u0142o nie tak",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Poprawnie",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Formularz aktywny"\n},\n"pt-BR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Seu nome ser\u00e1 compartilhado",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorreta",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"A resposta foi salva",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Carregando\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Seu nome n\u00e3o ser\u00e1 compartilhado",\n"d648001f72873b11f1495205043049417024f9cf":"Algo deu errado",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicado"\n},\n"pt-PT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"O seu nome ser\u00e1 partilhado",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorreta",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"A resposta foi guardada",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"A carregar...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"O seu nome n\u00e3o ser\u00e1 partilhado",\n"d648001f72873b11f1495205043049417024f9cf":"Ocorreu um problema",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicado"\n},\n"ro-RO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Numele t\u0103u va fi distribuit",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u0103spunsul a fost salvat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Se trimite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Se \u00eencarc\u0103...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vot} few {# voturi} other {# de voturi}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Numele t\u0103u nu va fi distribuit",\n"d648001f72873b11f1495205043049417024f9cf":"Ceva nu a mers cum trebuie",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Corect",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicat"\n},\n"ru-RU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f \u0431\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u0432\u0435\u0440\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u041e\u0442\u0432\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0\u0433\u043e\u043b\u043e\u0441} few {#\u00a0\u0433\u043e\u043b\u043e\u0441\u0430} many {#\u00a0\u0433\u043e\u043b\u043e\u0441\u043e\u0432} other {#\u00a0\u0433\u043e\u043b\u043e\u0441\u043e\u0432}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041d\u0435 \u0432 \u0441\u0435\u0442\u0438",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",\n"d648001f72873b11f1495205043049417024f9cf":"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0412\u0435\u0440\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e"\n},\n"sd-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u091c\u092e\u093e \u0915\u0930\u093e\u0913 \u092a\u092f\u094b \u0935\u091e\u0947...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u092a\u092f\u094b \u0925\u093f\u0910...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928\u0902",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u091c\u0940\u0924\u094b-\u091c\u093e\u0917\u0924\u094b"\n},\n"si-LK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0dc0\u0dd0\u0dbb\u0daf\u0dd2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0dba\u0ddc\u0db8\u0dd4 \u0d9a\u0dbb\u0db8\u0dd2\u0db1\u0dca...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0db4\u0dd6\u0dbb\u0dab\u0dba \u0dc0\u0dda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0d95\u0dc6\u0dca\u0dbd\u0dba\u0dd2\u0db1\u0dca",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u0d9a\u0dd4\u0db8\u0d9a\u0dca \u0dc4\u0ddd \u0dc0\u0dd0\u0dbb\u0daf\u0dd3 \u0d9c\u0ddc\u0dc3\u0dca \u0d87\u0dad.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0db1\u0dd2\u0dc0\u0dd0\u0dbb\u0daf\u0dd2",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0dc3\u0da2\u0dd3\u0dc0\u0dd3"\n},\n"sk-SK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Va\u0161e meno sa bude zdie\u013ea\u0165",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nespr\u00e1vne",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpove\u010f bola ulo\u017een\u00e1",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Odosiela sa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na\u010d\u00edtava sa...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# hlas} few {# hlasy} many {# hlasu} other {# hlasov}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Va\u0161e meno sa nebude zdie\u013ea\u0165",\n"d648001f72873b11f1495205043049417024f9cf":"Vyskytla sa chyba",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Spr\u00e1vne",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Na\u017eivo"\n},\n"sl-SI":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nepravilno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Po\u0161iljanje \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Nalaganje ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Brez povezave",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Pravilno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"V \u017eivo"\n},\n"sn-ZW":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Vatadza",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Kutumira...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kurodha...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hapana indaneti",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Pane zvakanganisika",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Vagona",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Ruzhinji"\n},\n"so-SO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Khalad",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Gudbinta...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Soo wada bogga.",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Qadka ka maqan",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Waxbaa khaldan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sax",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Toos"\n},\n"sq-AL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"E pasakt\u00eb",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Po d\u00ebrgohet...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"N\u00eb ngarkim...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Jasht\u00eb linje",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Ndodhi nj\u00eb gabim",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"E sakt\u00eb",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktiv"\n},\n"sr-RS":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neta\u010dno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Prosle\u0111ivanje...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"U\u010ditava se...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Van mre\u017ee",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Ta\u010dno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"U\u017eivo"\n},\n"su-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Ngirimkeun...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ngamuat...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflen",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Aya nu salah",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Bener",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktif"\n},\n"sv-SE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Ditt namn kommer att delas",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Fel",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svar sparat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Skickar in ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"L\u00e4ser in ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# r\u00f6st} other {# r\u00f6ster}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Ditt namn kommer inte att delas",\n"d648001f72873b11f1495205043049417024f9cf":"N\u00e5gonting gick fel",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"R\u00e4tt",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicerad"\n},\n"sw-KE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Si sahihi",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Inawasilisha...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kupakia...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Nje ya mtandao",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sahihi",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Moja kwa moja"\n},\n"ta-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bcd \u0baa\u0b95\u0bbf\u0bb0\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0ba4\u0bb5\u0bb1\u0bc1",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0baa\u0ba4\u0bbf\u0bb2\u0bcd \u0b9a\u0bc7\u0bae\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0b9a\u0bae\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0b8f\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1} other {# \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0b95\u0bb3\u0bcd}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0b86\u0b83\u0baa\u0bcd\u0bb2\u0bc8\u0ba9\u0bcd",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bcd \u0baa\u0b95\u0bbf\u0bb0\u0baa\u0bcd\u0baa\u0b9f\u0bbe\u0ba4\u0bc1",\n"d648001f72873b11f1495205043049417024f9cf":"\u0b8f\u0ba4\u0bcb \u0ba4\u0bb5\u0bb1\u0bbe\u0b95\u0bbf\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0b9a\u0bb0\u0bbf",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0ba8\u0bc7\u0bb0\u0bb2\u0bc8"\n},\n"te-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0c2e\u0c40 \u0c2a\u0c47\u0c30\u0c41 \u0c37\u0c47\u0c30\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0c38\u0c30\u0c48\u0c28\u0c26\u0c3f \u0c15\u0c3e\u0c26\u0c41",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0c2a\u0c4d\u0c30\u0c24\u0c3f\u0c38\u0c4d\u0c2a\u0c02\u0c26\u0c28 \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c3f\u0c02\u0c26\u0c3f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0c38\u0c2e\u0c30\u0c4d\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c4b\u0c02\u0c26\u0c3f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0c32\u0c4b\u0c21\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0c13\u0c1f\u0c4d\u200c} other {# \u0c13\u0c1f\u0c4d\u200c\u0c32\u0c41}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0c06\u0c2b\u0c4d\u200c\u0c32\u0c48\u0c28\u0c4d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0c2e\u0c40 \u0c2a\u0c47\u0c30\u0c41 \u0c37\u0c47\u0c30\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c26\u0c41",\n"d648001f72873b11f1495205043049417024f9cf":"\u0c0f\u0c26\u0c4b \u0c38\u0c2e\u0c38\u0c4d\u0c2f \u0c0f\u0c30\u0c4d\u0c2a\u0c21\u0c3f\u0c02\u0c26\u0c3f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0c38\u0c30\u0c48\u0c28\u0c26\u0c3f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0c2a\u0c2c\u0c4d\u0c32\u0c3f\u0c15\u0c4d"\n},\n"th-TH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0e0a\u0e37\u0e48\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e08\u0e30\u0e16\u0e39\u0e01\u0e41\u0e0a\u0e23\u0e4c",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e41\u0e25\u0e49\u0e27",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2a\u0e48\u0e07...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0e42\u0e2b\u0e27\u0e15} other {# \u0e42\u0e2b\u0e27\u0e15}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e30\u0e44\u0e21\u0e48\u0e41\u0e0a\u0e23\u0e4c\u0e0a\u0e37\u0e48\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",\n"d648001f72873b11f1495205043049417024f9cf":"\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49"\n},\n"tl-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Ibabahagi ang iyong pangalan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Hindi Tama",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Na-save ang tugon",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Isinusumite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Naglo-load...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# boto} other {# (na) boto}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Hindi ibabahagi ang iyong pangalan",\n"d648001f72873b11f1495205043049417024f9cf":"May maling nangyari",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Tama",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"tr-TR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"%{0}",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Ad\u0131n\u0131z payla\u015f\u0131lacak",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Yanl\u0131\u015f",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Yan\u0131t\u0131n\u0131z\u0131 kaydettik",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"G\u00f6nderiliyor...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Y\u00fckleniyor...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# oy} other {# oy}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u00c7evrimd\u0131\u015f\u0131",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Ad\u0131n\u0131z\u0131 payla\u015fmayaca\u011f\u0131z",\n"d648001f72873b11f1495205043049417024f9cf":"Bir sorunla kar\u015f\u0131la\u015ft\u0131k",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Do\u011fru",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Yay\u0131nda"\n},\n"uk-UA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0412\u0430\u0448\u0435 \u0456\u043c\u2019\u044f \u0431\u0443\u0434\u0435 \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0430\u0434\u0430\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041d\u0430\u0434\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c} few {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456} many {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439} other {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041d\u0435 \u0432 \u043c\u0435\u0440\u0435\u0436\u0456",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0412\u0430\u0448\u0435 \u0456\u043c\u2019\u044f \u043d\u0435 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u0442\u0438\u043c\u0435\u0442\u044c\u0441\u044f",\n"d648001f72873b11f1495205043049417024f9cf":"\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u041d\u0430\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0443\u0441\u0456\u043c"\n},\n"ur-PK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u0644\u0637",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0645\u0639 \u06a9\u0631\u0648\u0627 \u0631\u06c1\u06d2 \u06c1\u06cc\u06ba...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u0627 \u06c1\u06d2...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641 \u0644\u0627\u0626\u0646",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u062f\u0631\u0633\u062a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0628\u0631\u0627\u06c1\u0650 \u0631\u0627\u0633\u062a"\n},\n"uz-UZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Noto\u02bbg\u02bbri",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Yuborilmoqda...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Yuklanmoqda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"To\u02bbg\u02bbri",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Jonli"\n},\n"vi-VN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"T\u00ean c\u1ee7a b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c chia s\u1ebb",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Kh\u00f4ng ch\u00ednh x\u00e1c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0110\u00e3 l\u01b0u c\u00e2u tr\u1ea3 l\u1eddi",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0110ang g\u1eedi...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0110ang t\u1ea3i...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# l\u01b0\u1ee3t b\u00ecnh ch\u1ecdn} other {# l\u01b0\u1ee3t b\u00ecnh ch\u1ecdn}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"T\u00ean c\u1ee7a b\u1ea1n s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c chia s\u1ebb",\n"d648001f72873b11f1495205043049417024f9cf":"\u0110\u00e3 x\u1ea3y ra l\u1ed7i",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Ch\u00ednh x\u00e1c",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Tr\u1ef1c ti\u1ebfp"\n},\n"wo-SN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Jubul",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Mingi koy joxe...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Mingi yab...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Amul net",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Amna lu jaarul yoon",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Jub na",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Teew"\n},\n"xh-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Abangachananga",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iyangenisa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Iyalowuda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"I-Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Abachanileyo",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"iLive"\n},\n"yo-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"K\u00f2 t\u1ecd\u0300n\u00e0",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u01f8f\u00e0kal\u1eb9\u0300...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u00d3 n \u1e63araj\u1ecd...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u00c0\u00ecs\u00ed n\u00ed on\u00edfor\u00edkor\u00ed",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"B\u1eb9\u0301\u1eb9\u0300 ni",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"zh-CN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u4f60\u7684\u540d\u79f0\u5c06\u88ab\u5206\u4eab",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u9519\u8bef",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u4fdd\u5b58\u56de\u5e94",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u6b63\u5728\u52a0\u8f7d\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u7968} other {#\u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u79bb\u7ebf",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u4f60\u7684\u540d\u79f0\u4e0d\u4f1a\u88ab\u5206\u4eab",\n"d648001f72873b11f1495205043049417024f9cf":"\u51fa\u73b0\u9519\u8bef",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u786e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u5df2\u4e0a\u7ebf"\n},\n"zh-HK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u6211\u5011\u6703\u5206\u4eab\u4f60\u7684\u59d3\u540d",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u78ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u5132\u5b58\u56de\u61c9",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u6b63\u5728\u8f09\u5165\u2026\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u7968} other {# \u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u96e2\u7dda",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u6211\u5011\u4e0d\u6703\u516c\u958b\u4f60\u7684\u59d3\u540d",\n"d648001f72873b11f1495205043049417024f9cf":"\u767c\u751f\u932f\u8aa4",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u78ba",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u4e0a\u7dda"\n},\n"zh-TW":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u6211\u5011\u6703\u5206\u4eab\u4f60\u7684\u59d3\u540d",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u78ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u5132\u5b58\u56de\u61c9",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u8f09\u5165\u4e2d\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u7968} other {# \u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u96e2\u7dda",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u6211\u5011\u4e0d\u6703\u516c\u958b\u4f60\u7684\u59d3\u540d",\n"d648001f72873b11f1495205043049417024f9cf":"\u767c\u751f\u554f\u984c\u4e86",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u78ba",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u53ef\u4f7f\u7528"\n},\n"zu-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Akunembile",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iyathumela...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Iyalayisha...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Okungaxhunyiwe ku-inthanethi",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Kunembile",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Bukhoma"\n}\n}'
                        }));
                        a = JSON.parse(a);
                        const b = new Map;
                        for (const c in a) b.set(c, Object.values(a[c]));
                        return b
                    },
                    p5 = function({
                        layout: a,
                        direction: b,
                        gap: c,
                        padding: d,
                        background: e,
                        border: f,
                        R: g,
                        cells: h,
                        ...k
                    }) {
                        a = a === "vertical";
                        let l = [];
                        const m = [],
                            n = c && d,
                            p = d ? 1 : 0;
                        let q = 1;
                        for (let r = 0; r < h.length; r++) {
                            const t = h[r];
                            typeof t.size === "string" ? l.push(t.size) : l.push(`${t.size}px`);
                            m.push({ ...t,
                                id: t.id,
                                placement: a ? {
                                    gridColumnStart: `${p+1}`,
                                    gridColumnEnd: `${p+2}`,
                                    gridRowStart: `${p+q}`,
                                    gridRowEnd: `${p+q+1}`,
                                    padding: t.padding ? uBb(t.padding) : void 0,
                                    alignSelf: t.alignSelf
                                } : {
                                    gridColumnStart: `${p+q}`,
                                    gridColumnEnd: `${p+q+1}`,
                                    gridRowStart: `${p+1}`,
                                    gridRowEnd: `${p+2}`,
                                    padding: t.padding ? uBb(t.padding) : void 0,
                                    alignSelf: t.alignSelf
                                }
                            });
                            q += n ? 2 : 1
                        }
                        n && (l = l.join(` ${c}px `).split(" "));
                        d && (l = [`${d}px`, ...l, `${d}px`]);
                        return { ...k,
                            type: "layout",
                            cells: m,
                            direction: b,
                            fill: e,
                            border: f,
                            R: g,
                            gridTemplateColumns: a ? d ? [`${d}px`, "1fr", `${d}px`] : ["1fr"] : l,
                            gridTemplateRows: a ? l : d ? [`${d}px`, "auto", `${d}px`] : ["auto"],
                            columnGap: n || a ? void 0 : c,
                            rowGap: !n && a ? c : void 0
                        }
                    },
                    vBb =
                    function({
                        padding: a,
                        direction: b,
                        background: c,
                        R: d,
                        Pa: e,
                        border: f,
                        content: g,
                        ref: h,
                        key: k,
                        ...l
                    }) {
                        return { ...l,
                            type: "layout",
                            direction: b,
                            gridTemplateColumns: ["1fr"],
                            gridTemplateRows: ["1fr"],
                            fill: c,
                            R: d,
                            Pa: e,
                            border: f,
                            cells: [{
                                id: "_",
                                content: g,
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: "2",
                                    gridRowStart: "1",
                                    gridRowEnd: "2",
                                    alignSelf: "center",
                                    padding: a
                                }
                            }],
                            key: k,
                            ref: h
                        }
                    },
                    uBb = function(a) {
                        switch (a.length) {
                            case 0:
                                break;
                            case 1:
                                return a[0];
                            case 2:
                                return {
                                    la: a[0],
                                    Ca: a[1],
                                    Aa: a[0],
                                    ia: a[1]
                                };
                            case 4:
                                return {
                                    la: a[0],
                                    Ca: a[1],
                                    Aa: a[2],
                                    ia: a[3]
                                };
                            default:
                                throw Error(`Invalid padding value: ${a}`);
                        }
                    },
                    q5 = function(a, b) {
                        __c.w(b.length > 0, "zero contrast candidates received");
                        const c = new Map;
                        return __c.Dw(b, d => {
                            var e;
                            const f = (e = c.get(d)) !== null && e !== void 0 ? e : __c.sL(d, a);
                            c.set(d, f);
                            return f
                        })
                    },
                    s5 = function(a, b) {
                        __c.w(!0);
                        __c.w(!0);
                        __c.w(!0);
                        const {
                            Ua: c,
                            a: d,
                            b: e
                        } = __c.lD(a), {
                            Ua: f,
                            a: g,
                            b: h
                        } = __c.lD(b), k = (c + f) / 2;
                        var l = (Math.hypot(d, e) + Math.hypot(g, h)) / 2;
                        l = .5 * (1 - Math.sqrt(l ** 7 / (l ** 7 + 25 ** 7)));
                        var m = d * (1 + l),
                            n = g * (1 + l),
                            p = Math.hypot(m, e),
                            q = Math.hypot(n,
                                h);
                        l = (p + q) / 2;
                        var r = __c.JD(Math.atan2(e, m) * 180 / Math.PI);
                        const t = __c.JD(Math.atan2(h, n) * 180 / Math.PI);
                        m = Math.abs(r - t) > 180 ? (r + t + 360) / 2 : (r + t) / 2;
                        n = q - p;
                        p = 2 * Math.sqrt(p * q) * Math.sin((Math.abs(t - r) <= 180 ? t - r : t <= r ? t - r + 360 : t - r - 360) / 2 * Math.PI / 180);
                        q = 1 + .045 * l;
                        r = 1 + .015 * l * (1 - .17 * Math.cos((m - 30) * Math.PI / 180) + .24 * Math.cos(2 * m * Math.PI / 180) + .32 * Math.cos((3 * m + 6) * Math.PI / 180) - .2 * Math.cos((4 * m - 63) * Math.PI / 180));
                        return Math.sqrt(((f - c) / (1 + .015 * (k - 50) ** 2 / Math.sqrt(20 + (k - 50) ** 2))) ** 2 + (n / (1 * q)) ** 2 + (p / (1 * r)) ** 2 + n / (1 * q) * (p / (1 *
                            r)) * (-(2 * Math.sqrt(l ** 7 / (l ** 7 + 25 ** 7))) * Math.sin(30 * Math.exp(-1 * ((m - 275) / 25) ** 2) * 2 * Math.PI / 180))) >= 20 ? a : q5(b, r5)
                    },
                    t5 = function(a) {
                        switch (a.type) {
                            case "color":
                                return a.color;
                            case "gradient":
                                return a.Ta.Kj[0].color;
                            default:
                                throw new E(a);
                        }
                    },
                    u5 = function(a, b) {
                        a = __c.zn.create(__c.zn.ka(a.text));
                        b != null && a.ph(b);
                        return {
                            type: "text",
                            Uv: 1,
                            text: __c.zn.ka(a)
                        }
                    },
                    v5 = function(a) {
                        switch (a) {
                            case "l":
                                return 1;
                            case "r":
                                return 2;
                            default:
                                throw new E(a);
                        }
                    },
                    w5 = function(a) {
                        switch (a) {
                            case "l":
                                return "ltr";
                            case "r":
                                return "rtl";
                            default:
                                throw new E(a);
                        }
                    },
                    wBb = function(a) {
                        if (a) return {
                            l2: a.l2,
                            LZ: a.LZ,
                            MZ: a.MZ,
                            JZ: a.JZ,
                            NZ: a.NZ
                        }
                    },
                    xBb = function({
                        direction: a,
                        text: b,
                        background: c
                    }) {
                        return {
                            id: "header",
                            size: "auto",
                            fill: c,
                            padding: [20, 20, 16, 20],
                            content: u5(b, {
                                direction: w5(a)
                            })
                        }
                    },
                    ABb = function({
                        direction: a,
                        messages: b,
                        nba: c,
                        yn: d,
                        Dba: e,
                        R: f,
                        state: g,
                        oG: h,
                        Py: k
                    }) {
                        var l = h !== k,
                            m = q5(k, r5);
                        h = l ? h : m;
                        m = s5("#000000", k);
                        var n = s5(h, k);
                        l = yBb(g, g === 3 && l ? n : m, l);
                        c = {
                            id: "text",
                            placement: {
                                gridColumnStart: "2",
                                gridColumnEnd: "3",
                                gridRowStart: "2",
                                gridRowEnd: "3",
                                alignSelf: "center"
                            },
                            content: u5(c, {
                                direction: w5(a),
                                ...(g === 3 && {
                                    color: q5(h, r5)
                                })
                            })
                        };
                        g === 3 || g === 4 || g === 5 ? (b = (n = o5(b, "resultsPercentage")) ? fBb(n, [e], b.document.language) : __c.Gb("sUWUOA", [e]), k = {
                            id: "percentage",
                            placement: {
                                gridColumnStart: "4",
                                gridColumnEnd: "5",
                                gridRowStart: "2",
                                gridRowEnd: "3",
                                alignSelf: "center"
                            },
                            content: {
                                type: "text",
                                Uv: 0,
                                fontFamily: d,
                                fontWeight: "bold",
                                fontSize: zBb,
                                text: b,
                                textAlign: "end",
                                direction: w5(a),
                                color: g === 3 ? q5(h, r5) : q5(k, r5)
                            }
                        }) : k = void 0;
                        k = {
                            type: "layout",
                            gridTemplateRows: ["10px", "1fr", "10px"],
                            gridTemplateColumns: ["10px",
                                "1fr", "2px", "45px", "10px"
                            ],
                            fill: l,
                            cells: [c, k].filter(wb)
                        };
                        if (g !== 3 && g !== 4 && g !== 5) return k;
                        b = e > 0;
                        const p = e < 100;
                        n = (c = b && !p || !b && p) ? 1 : 2;
                        e = [b ? `${e}fr` : void 0, p ? `${100-e}fr` : void 0].filter(wb);
                        g = {
                            type: "color",
                            color: g === 3 ? h : m,
                            Pa: g === 3 ? 0 : .8
                        };
                        return c ? { ...k,
                            fill: b ? g : l
                        } : {
                            type: "layout",
                            direction: v5(a),
                            gridTemplateRows: ["1fr"],
                            gridTemplateColumns: e,
                            fill: l,
                            cells: [{
                                id: "bar",
                                R: f,
                                fill: g,
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: "2",
                                    gridRowStart: "1",
                                    gridRowEnd: "2"
                                },
                                content: vBb({
                                    direction: v5(a),
                                    content: {
                                        type: "text",
                                        Uv: 0,
                                        text: "",
                                        fontFamily: d,
                                        fontSize: zBb,
                                        direction: w5(a)
                                    }
                                })
                            }, {
                                id: "optionTextWithPercentage",
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: `${n+1}`,
                                    gridRowStart: "1",
                                    gridRowEnd: "2"
                                },
                                content: k
                            }]
                        }
                    },
                    yBb = function(a, b, c) {
                        switch (a) {
                            case 0:
                                return {
                                    type: "color",
                                    color: b,
                                    Pa: .92
                                };
                            case 1:
                            case 5:
                                return {
                                    type: "color",
                                    color: b,
                                    Pa: .88
                                };
                            case 2:
                                return {
                                    type: "color",
                                    color: b,
                                    Pa: .74
                                };
                            case 3:
                                return {
                                    type: "color",
                                    color: b,
                                    Pa: c ? .5 : .92
                                };
                            case 4:
                                return {
                                    type: "color",
                                    color: b,
                                    Pa: .92
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    BBb = function({
                        hLa: a,
                        hF: b,
                        ek: c,
                        direction: d,
                        options: e,
                        yd: f,
                        xx: g,
                        Lr: h,
                        mba: k,
                        yn: l,
                        DS: m,
                        oG: n,
                        Py: p,
                        messages: q,
                        U2: r
                    }) {
                        return {
                            id: "field",
                            size: "1fr",
                            padding: [16, 20],
                            alignSelf: "center",
                            content: p5({
                                layout: "vertical",
                                direction: v5(d),
                                gap: 8,
                                cells: e.map(({
                                    value: t
                                }) => {
                                    var u = t.id === f;
                                    const v = t.id === g,
                                        x = t.id === h;
                                    u = m ? u ? 3 : v ? 5 : 4 : x ? 2 : v ? 1 : 0;
                                    return {
                                        id: t.id,
                                        size: "auto",
                                        alignSelf: "center",
                                        content: {
                                            ref: r.option,
                                            key: t.id,
                                            R: k,
                                            Ci: () => {
                                                var y;
                                                return b === null || b === void 0 ? void 0 : (y = b.l2) === null || y === void 0 ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseEnter: () => {
                                                var y;
                                                return b ===
                                                    null || b === void 0 ? void 0 : (y = b.LZ) === null || y === void 0 ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseLeave: () => {
                                                var y;
                                                return b === null || b === void 0 ? void 0 : (y = b.MZ) === null || y === void 0 ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseDown: () => {
                                                var y;
                                                return b === null || b === void 0 ? void 0 : (y = b.JZ) === null || y === void 0 ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseUp: () => {
                                                var y;
                                                return b === null || b === void 0 ? void 0 : (y = b.NZ) === null || y === void 0 ? void 0 : y.call(b, t.id)
                                            },
                                            ...ABb({
                                                messages: q,
                                                nba: t.label,
                                                direction: d,
                                                yn: l,
                                                Dba: a.bMa(c, t.id),
                                                R: k,
                                                state: u,
                                                oG: n,
                                                Py: p
                                            })
                                        }
                                    }
                                })
                            })
                        }
                    },
                    GBb =
                    function(a) {
                        const b = a.status,
                            c = a.yn,
                            d = a.direction,
                            e = a.backgroundColor,
                            f = q5(e, r5);
                        switch (b) {
                            case 0:
                                var g;
                                return {
                                    type: "text",
                                    Uv: 1,
                                    text: x5((g = a.statusMessage) !== null && g !== void 0 ? g : o5(a.messages, "live") || O("/iw6+Q"), c, d, q5(e, CBb), f)
                                };
                            case 1:
                                return {
                                    type: "text",
                                    Uv: 1,
                                    text: x5(a.messages.loading(), c, d, q5(e, DBb), f)
                                };
                            case 2:
                                return {
                                    type: "text",
                                    Uv: 1,
                                    text: x5(o5(a.messages, "submitting") || O("wutQEA"), c, d, q5(e, DBb), f)
                                };
                            case 3:
                                return {
                                    type: "text",
                                    Uv: 1,
                                    text: x5(o5(a.messages, "offline") || O("nFbxIQ"), c, d, q5(e, EBb), f)
                                };
                            case 4:
                                return {
                                    type: "text",
                                    Uv: 1,
                                    text: x5(o5(a.messages, "somethingWentWrong") || O("ElTceA"), c, d, q5(e, FBb), f)
                                };
                            default:
                                throw new E(b);
                        }
                    },
                    HBb = function({
                        direction: a,
                        messages: b,
                        yn: c,
                        Faa: d,
                        status: e,
                        pb: f,
                        backgroundColor: g
                    }) {
                        var h;
                        f = f.status === 1 ? ((h = f.v1) === null || h === void 0 ? void 0 : h.type) === "ANON" ? o5(b, "yourNameWontBeShared") || O("Gzs/9g") : o5(b, "yourNameWillBeShared") || O("WjcAyg") : o5(b, "live") || O("/iw6+Q");
                        d = (h = o5(b, "numVotes")) ? fBb(h, [d], b.document.language) : __c.Gb("6QpLYA", [d]);
                        return [{
                            id: "footer",
                            size: "auto",
                            padding: [0, 20, 20, 20],
                            content: GBb({
                                messages: b,
                                status: e,
                                statusMessage: `${f} | ${d}`,
                                yn: c,
                                backgroundColor: g,
                                direction: a
                            })
                        }]
                    },
                    IBb = function({
                        width: a,
                        height: b,
                        Vj: c,
                        color: d,
                        qOa: e,
                        backgroundColor: f
                    }) {
                        return {
                            type: "shape",
                            width: a,
                            height: b,
                            tCa: {
                                width: 16,
                                height: 16
                            },
                            hb: [{
                                d: "M 8 16 C 12.4183 16 16 12.4183 16 8 C 16 3.5817 12.4183 0 8 0 C 3.5817 0 0 3.5817 0 8 C 0 12.4183 3.5817 16 8 16 Z",
                                stroke: {
                                    weight: c,
                                    color: d
                                },
                                fill: {
                                    type: "color",
                                    color: d
                                }
                            }, {
                                d: e ? "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z" : "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                                fill: {
                                    type: "color",
                                    color: f
                                }
                            }]
                        }
                    },
                    LBb = function({
                        direction: a,
                        nba: b,
                        Py: c,
                        state: d
                    }) {
                        const e = s5("#000000", c);
                        return {
                            type: "layout",
                            gridTemplateRows: ["10px", "1fr", "10px"],
                            gridTemplateColumns: ["10px", "1fr", "2px", "18px", "10px"],
                            fill: JBb(d, e),
                            cells: [{
                                id: "text",
                                placement: {
                                    alignSelf: "center",
                                    gridColumnStart: "2",
                                    gridColumnEnd: "3",
                                    gridRowStart: "2",
                                    gridRowEnd: "3"
                                },
                                content: (() => {
                                    switch (d) {
                                        case 5:
                                            return u5(b, {
                                                direction: w5(a),
                                                color: "#00873d"
                                            });
                                        case 6:
                                            return u5(b, {
                                                direction: w5(a),
                                                color: "#c8001e"
                                            });
                                        case 4:
                                            return u5(b, {
                                                direction: w5(a),
                                                color: q5(c, KBb)
                                            });
                                        default:
                                            return u5(b, {
                                                direction: w5(a)
                                            })
                                    }
                                })()
                            }, d === 5 || d === 6 ? {
                                id: "validation",
                                placement: {
                                    gridColumnStart: "4",
                                    gridColumnEnd: "5",
                                    gridRowStart: "2",
                                    gridRowEnd: "3",
                                    alignSelf: "center"
                                },
                                content: IBb({
                                    width: 18,
                                    height: 18,
                                    Vj: 1.6,
                                    qOa: d === 5,
                                    color: d === 5 ? "#00873d" : "#c8001e",
                                    backgroundColor: "#ffffff"
                                })
                            } : void 0].filter(wb)
                        }
                    },
                    JBb = function(a, b) {
                        switch (a) {
                            case 0:
                                return {
                                    type: "color",
                                    color: b,
                                    Pa: .92
                                };
                            case 1:
                                return {
                                    type: "color",
                                    color: b,
                                    Pa: .74
                                };
                            case 2:
                                return {
                                    type: "color",
                                    color: b,
                                    Pa: .88
                                };
                            case 3:
                                return {
                                    type: "color",
                                    color: b,
                                    Pa: .74
                                };
                            case 4:
                                return {
                                    type: "color",
                                    color: b,
                                    Pa: .9
                                };
                            case 5:
                                return {
                                    type: "color",
                                    color: "#e3fff0",
                                    Pa: 0
                                };
                            case 6:
                                return {
                                    type: "color",
                                    color: "#ffd9df",
                                    Pa: 0
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    MBb = function({
                        hF: a,
                        direction: b,
                        options: c,
                        pb: d,
                        yd: e,
                        xx: f,
                        Lr: g,
                        mba: h,
                        Py: k,
                        DS: l,
                        U2: m,
                        context: n
                    }) {
                        return {
                            id: "field",
                            size: "1fr",
                            padding: [16, 20, 10, 20],
                            alignSelf: "center",
                            content: p5({
                                layout: "vertical",
                                direction: v5(b),
                                gap: 8,
                                cells: c.map(({
                                    value: p
                                }) => {
                                    var q = p.id === e;
                                    const r = d.status === 1,
                                        t = p.id === f,
                                        u = p.id === g;
                                    q = r && l && n.mode !== "edit" ?
                                        d.eQ(p.id) ? 5 : q ? 6 : 4 : n.mode === "edit" ? r && d.eQ(p.id) ? 5 : 4 : q ? 1 : u ? 3 : t ? 2 : 0;
                                    return {
                                        id: p.id,
                                        size: "auto",
                                        alignSelf: "center",
                                        content: {
                                            ref: m.option,
                                            key: p.id,
                                            R: h,
                                            Ci: () => {
                                                var v;
                                                return a === null || a === void 0 ? void 0 : (v = a.l2) === null || v === void 0 ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseEnter: () => {
                                                var v;
                                                return a === null || a === void 0 ? void 0 : (v = a.LZ) === null || v === void 0 ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseLeave: () => {
                                                var v;
                                                return a === null || a === void 0 ? void 0 : (v = a.MZ) === null || v === void 0 ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseDown: () => {
                                                var v;
                                                return a ===
                                                    null || a === void 0 ? void 0 : (v = a.JZ) === null || v === void 0 ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseUp: () => {
                                                var v;
                                                return a === null || a === void 0 ? void 0 : (v = a.NZ) === null || v === void 0 ? void 0 : v.call(a, p.id)
                                            },
                                            ...LBb({
                                                direction: b,
                                                nba: p.label,
                                                Py: k,
                                                state: q
                                            })
                                        }
                                    }
                                })
                            })
                        }
                    },
                    NBb = function({
                        direction: a,
                        text: b,
                        eGa: c,
                        cla: d,
                        hF: e
                    }) {
                        const f = r5.includes(c),
                            {
                                h: g,
                                s: h,
                                Ua: k
                            } = __c.tD(c);
                        var l = new __c.jD(g, h, k < 10 ? k + 6 : k - 6);
                        l = __c.vD(l);
                        var m = new __c.jD(g, h, k < 10 ? k + 10 : k - 10);
                        m = __c.vD(m);
                        return {
                            id: "submit",
                            size: "auto",
                            padding: [0, 20],
                            content: vBb({
                                direction: v5(a),
                                Ci: e === null || e === void 0 ? void 0 : e.submit,
                                onMouseEnter: e === null || e === void 0 ? void 0 : e.uaa,
                                onMouseLeave: e === null || e === void 0 ? void 0 : e.vaa,
                                onMouseDown: e === null || e === void 0 ? void 0 : e.taa,
                                onMouseUp: e === null || e === void 0 ? void 0 : e.waa,
                                background: {
                                    type: "color",
                                    color: d === 2 ? m : d === 1 ? l : c,
                                    Pa: (e === null || e === void 0 ? 0 : e.submit) ? f ? .1 : void 0 : .6
                                },
                                R: 24,
                                padding: 12,
                                content: u5(b, {
                                    direction: w5(a)
                                })
                            })
                        }
                    },
                    PBb = function({
                        hF: a,
                        direction: b,
                        messages: c,
                        yn: d,
                        oI: e,
                        oG: f,
                        status: g,
                        pb: h,
                        yd: k,
                        backgroundColor: l,
                        DS: m,
                        WG: n
                    }) {
                        if (!m || !h || !k) {
                            var p;
                            k = f === l ? q5(f, r5) : f;
                            h = (h === null || h === void 0 ? void 0 : h.status) === 1 ? ((p = h.v1) === null || p === void 0 ? void 0 : p.type) === "ANON" ? o5(c, "yourNameWontBeShared") || O("Gzs/9g") : o5(c, "yourNameWillBeShared") || O("WjcAyg") : void 0;
                            return [NBb({
                                direction: b,
                                text: e,
                                eGa: k,
                                cla: n,
                                hF: a
                            }), {
                                id: "quiz_status",
                                size: "auto",
                                padding: [8, 20, 10, 20],
                                content: GBb({
                                    status: g,
                                    statusMessage: h,
                                    yn: d,
                                    messages: c,
                                    direction: b,
                                    backgroundColor: l
                                })
                            }]
                        }
                        a = q5(l, r5);
                        return [{
                            id: "quiz_results_footer",
                            size: "auto",
                            padding: [20, 20, 24, 20],
                            content: p5({
                                layout: "vertical",
                                direction: v5(b),
                                cells: [{
                                    id: "quiz_result",
                                    size: "auto",
                                    content: {
                                        type: "text",
                                        Uv: 0,
                                        fontFamily: d,
                                        text: h.eQ(k) ? o5(c, "correctLabel") || O("i3mNPA") : o5(c, "incorrectLabel") || O("As1GTA"),
                                        fontSize: OBb,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        direction: w5(b),
                                        color: a
                                    }
                                }, {
                                    id: "quiz_message",
                                    size: "auto",
                                    content: {
                                        type: "text",
                                        Uv: 0,
                                        fontFamily: d,
                                        text: o5(c, "responseSaved") || O("xSH8Og"),
                                        fontSize: y5,
                                        Pa: .2,
                                        textAlign: "center",
                                        direction: w5(b),
                                        color: a
                                    }
                                }]
                            })
                        }]
                    };
                __c.lX.prototype.cX = __c.ca(23, function() {});
                __c.SN.prototype.cX = __c.ca(22, function() {
                    this.ended || this.WC || (this.WC = !0, setTimeout(() => {
                        try {
                            this.ended = !0, __c.zBa(this)
                        } catch (a) {
                            this.M.ub(a, {
                                qe: "Error ending span in next cycle",
                                extra: new Map(__c.HN(this))
                            })
                        }
                    }))
                });
                __c.VH.prototype.Dba = __c.ca(18, function() {
                    return __c.QH(this, () => __c.qH(this.operators, "%", this.value))
                });
                var QBb = class {
                        constructor() {
                            this.type = "layout"
                        }
                    },
                    z5 = __webpack_require__(519427),
                    RBb = z5.action,
                    f5 = z5.computed,
                    SBb = z5.reaction,
                    m5 = z5.runInAction;
                var h5 = class {
                        static A(a) {
                            __c.P(a, {
                                qna: f5
                            })
                        }
                        get qna() {
                            const a = [];
                            for (const b of this.list.value) {
                                const c = Y4(this, b);
                                if (c === void 0) throw new gBb("undefined value found when deserializing list.");
                                a.push(c)
                            }
                            return a
                        }
                        count() {
                            return this.list.value.count()
                        }
                        toArray() {
                            return this.qna.map(({
                                value: a
                            }) => a)
                        }
                        first(a) {
                            const b = this.list.value.first(a ? c => a(Y4(this, c)) : void 0);
                            if (b != null) return Y4(this, b)
                        }
                        last(a) {
                            const b = this.list.value.last(a ? c => a(Y4(this, c)) : void 0);
                            if (b != null) return Y4(this, b)
                        }
                        next(a, b) {
                            var c =
                                b ? d => b(Y4(this, d)) : void 0;
                            a = Z4(this, a);
                            c = this.list.value.next(a, c);
                            if (c != null) return Y4(this, c)
                        }
                        Ec(a, b) {
                            var c = b ? d => b(Y4(this, d)) : void 0;
                            a = Z4(this, a);
                            c = this.list.value.Ec(a, c);
                            if (c != null) return Y4(this, c)
                        }
                        map(a) {
                            return this.list.value.map((b, c) => a(Y4(this, b), c))
                        }
                        filter(a) {
                            return this.list.value.filter((b, c) => a(Y4(this, b), c)).map(b => Y4(this, b))
                        }
                        forEach(a) {
                            return this.list.value.forEach((b, c) => a(Y4(this, b), c))
                        }
                        some(a) {
                            return this.list.value.some(b => a(Y4(this, b)))
                        }
                        constructor(a, b) {
                            this.lt = b;
                            this.IAa =
                                (h5.A(this), new WeakMap);
                            this.DAa = new WeakMap;
                            __c.B(a.type === "list");
                            this.list = a
                        }
                    },
                    jBb = class extends h5 {
                        replace(a, b) {
                            a = Z4(this, a);
                            b = this.list.value.replace(a, this.lt.Ji(b));
                            return Y4(this, b)
                        }
                        dF(a, b) {
                            a = a != null ? Z4(this, a) : void 0;
                            b = this.list.value.dF(a, this.lt.Ji(b));
                            return Y4(this, b)
                        }
                        insertBefore(a, b) {
                            a = a != null ? Z4(this, a) : void 0;
                            b = this.list.value.insertBefore(a, this.lt.Ji(b));
                            return Y4(this, b)
                        }
                        append(a) {
                            a = this.list.value.append(this.lt.Ji(a));
                            return Y4(this, a)
                        }
                        prepend(a) {
                            a = this.list.value.prepend(this.lt.Ji(a));
                            return Y4(this, a)
                        }
                        delete(a) {
                            a = Z4(this, a);
                            this.list.value.delete(a)
                        }
                        Tn(a, b) {
                            a = a == null ? void 0 : Z4(this, a);
                            b = Z4(this, b);
                            this.list.value.Tn(a, b)
                        }
                    };
                var c5 = class extends Error {
                        constructor(a) {
                            super(a);
                            this.name = "SchemaError"
                        }
                    },
                    gBb = class extends c5 {
                        constructor(a) {
                            super(`ListError: ${a}`)
                        }
                    },
                    $4 = class extends c5 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget data`)
                        }
                    },
                    a5 = class extends c5 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget state`)
                        }
                    },
                    hBb = class extends c5 {
                        constructor(a) {
                            super(`Error transforming ${a} into type ${"double"} of document state`)
                        }
                    };
                var k5 = {
                        yd: void 0,
                        cz: void 0,
                        Zba: void 0,
                        results: {
                            fields: new Map
                        }
                    },
                    TBb = {
                        pb: {
                            status: 2
                        },
                        zt: new Map,
                        WG: 0,
                        xx: void 0,
                        Lr: void 0,
                        u9: !1,
                        FNa: "unchecked",
                        oQ: !1,
                        lra: !1
                    };
                var UBb = g5({
                        type: ["t", d5(["text2"], "text2"), "readonly"],
                        text: ["te", function() {
                            const a = b => {
                                if ((b === null || b === void 0 ? void 0 : b.type) !== "text2") throw new $4("text2", b);
                                return b.value
                            };
                            return {
                                Ji: b => ({
                                    type: "text2",
                                    value: b
                                }),
                                mo: b => {
                                    if ((b === null || b === void 0 ? void 0 : b.type) !== "text2") throw new a5("text2", b);
                                    return b.value
                                },
                                lo: a,
                                Tp: a
                            }
                        }()]
                    }),
                    A5 = j5({
                        text2: UBb
                    }, a => a.type),
                    VBb = g5({
                        id: ["i", b5("")],
                        label: ["l", A5]
                    }),
                    WBb = i5(VBb),
                    XBb = i5(b5("")),
                    YBb = g5({
                        type: ["t", d5(["select"], "select"), "readonly"],
                        id: ["i", b5("")],
                        label: ["l",
                            A5
                        ],
                        options: ["o", WBb],
                        R: ["c", e5(0)],
                        zHa: ["co", XBb],
                        P6a: ["tl", d5(["c", "u"], "c")]
                    }),
                    ZBb = j5({
                        select: YBb
                    }, a => a.type),
                    $Bb = i5(ZBb),
                    aCb = g5({
                        label: ["l", A5]
                    }),
                    bCb = g5({}),
                    cCb = d5(["l", "r"], "l"),
                    dCb = g5({
                        minHeight: ["mh", e5(1)],
                        minWidth: ["mw", e5(1)],
                        id: ["i", b5()],
                        Lj: ["s", b5()],
                        $h: ["a", kBb(b5())],
                        direction: ["r", cCb],
                        yn: ["d", b5("")],
                        Xs: ["pf", iBb()],
                        mt: ["sf", iBb()],
                        border: ["b", function() {
                            const a = b => {
                                if ((b === null || b === void 0 ? void 0 : b.type) !== "stroke") throw new $4("stroke", b);
                                return b.value
                            };
                            return {
                                Ji: b => ({
                                    type: "stroke",
                                    value: b
                                }),
                                mo: b => {
                                    if ((b === null || b === void 0 ? void 0 : b.type) !== "stroke") throw new a5("stroke", b);
                                    return b.value
                                },
                                lo: a,
                                Tp: a
                            }
                        }()],
                        R: ["c", e5(0)],
                        header: ["h", kBb(bCb)],
                        oqa: ["hh", function(a) {
                            const b = (c, d) => {
                                if (c == null) return a;
                                if ((c === null || c === void 0 ? void 0 : c.type) !== "boolean") throw d === "toWidgetData" ? new $4("boolean", c) : new a5("boolean", c);
                                return c.value
                            };
                            return {
                                Ji: c => ({
                                    type: "boolean",
                                    value: c
                                }),
                                mo: c => b(c, "toWidgetState"),
                                lo: c => b(c, "toWidgetData"),
                                Tp: c => b(c, "toWidgetData")
                            }
                        }(!1)]
                    }),
                    eCb = dCb.wb({
                        type: ["t",
                            d5(["quiz"], "quiz"), "readonly"
                        ],
                        fields: ["f", $Bb],
                        footer: ["fo", aCb]
                    }),
                    fCb = dCb.wb({
                        type: ["t", d5(["poll"], "poll"), "readonly"],
                        fields: ["f", $Bb]
                    });
                d5(["poll", "quiz"], "quiz");
                var gCb = j5({
                    quiz: eCb,
                    poll: fCb
                }, a => a.type);
                var oBb = {
                    ck: "form_widget_interacted",
                    ot(a) {
                        return __c.jx({
                            form_id: a.zc,
                            form_type: a.jLa,
                            action_group: a.cu,
                            action: a.action,
                            location: a.location,
                            linked_design_id: a.a7a,
                            toggle_value: a.kz,
                            editing_context: a.Qh == null ? void 0 : __c.kx(a.Qh),
                            performance_context: a.Ff == null ? void 0 : __c.lx(a.Ff)
                        })
                    }
                };
                var qBb = Symbol("UNABLE_TO_SUBMIT");
                var sBb = {
                        resultsPercentage: 0,
                        yourNameWillBeShared: 1,
                        incorrectLabel: 2,
                        responseSaved: 3,
                        submitting: 4,
                        loading: 5,
                        numVotes: 6,
                        offline: 7,
                        yourNameWontBeShared: 8,
                        somethingWentWrong: 9,
                        correctLabel: 10,
                        live: 11
                    },
                    hCb = class {
                        async M9() {
                            this.z2 = await tBb()
                        }
                        loading() {
                            return o5(this, "loading") || O("2Q9Q+A")
                        }
                        constructor(a) {
                            this.document = a;
                            this.M9()
                        }
                    };
                var iCb = class {
                    static A(a) {
                        __c.P(a, {
                            border: f5
                        })
                    }
                    get border() {
                        const a = this.Yr.Gd;
                        a.border.weight && !a.border.color && this.M && this.M.error("Form widget borders cannot have weight without a color");
                        return {
                            weight: a.border.weight,
                            color: a.border.color,
                            Cxa: a.R
                        }
                    }
                    constructor(a, b) {
                        this.Yr = a;
                        this.M = b;
                        iCb.A(this)
                    }
                };
                var jCb = class {
                    static A(a) {
                        __c.P(a, {
                            Xs: f5,
                            mt: f5,
                            oG: f5,
                            Py: f5
                        })
                    }
                    get Xs() {
                        const a = this.Yr.Gd.Xs.color,
                            b = this.Yr.Gd.Xs.Ta;
                        if (a) return {
                            type: "color",
                            color: a
                        };
                        if (b.ref) return {
                            type: "gradient",
                            Ta: b.ref
                        }
                    }
                    get mt() {
                        const a = this.Yr.Gd.mt.color,
                            b = this.Yr.Gd.mt.Ta;
                        if (a) return {
                            type: "color",
                            color: a
                        };
                        if (b.ref) return {
                            type: "gradient",
                            Ta: b.ref
                        }
                    }
                    get oG() {
                        if (!this.Xs) return "#000000";
                        switch (this.Xs.type) {
                            case "color":
                                return this.Xs.color;
                            case "gradient":
                                return this.Xs.Ta.Kj[0].color;
                            default:
                                throw new E(this.Xs);
                        }
                    }
                    get Py() {
                        if (!this.mt) return "#000000";
                        switch (this.mt.type) {
                            case "color":
                                return this.mt.color;
                            case "gradient":
                                return this.mt.Ta.Kj[0].color;
                            default:
                                throw new E(this.mt);
                        }
                    }
                    constructor(a) {
                        this.Yr = a;
                        jCb.A(this)
                    }
                };
                var r5 = ["#000000", "#ffffff"];
                var zBb = 9 * __c.hW,
                    KBb = ["#cccccc", "#333333"],
                    OBb = 14 * __c.hW,
                    y5 = 9 * __c.hW,
                    CBb = ["#00d200", "#00ed00"],
                    DBb = ["#ffae00", "#ffc654"],
                    EBb = ["#545454", "#c8c8c8"],
                    FBb = ["#e53935", "#ef5350"];
                var x5 = (a, b, c, d, e) => __c.zn.mc().attrs({
                    "font-size": y5,
                    leading: void 0,
                    "text-align": "center",
                    direction: w5(c),
                    color: d
                }).Lb("\u25cf ").attrs({
                    "font-family": b,
                    "font-size": y5,
                    color: e,
                    "font-kerning": "normal",
                    "font-feature-liga": "on",
                    "font-feature-clig": "on",
                    "font-feature-calt": "on"
                }).Lb(a).Lb("\n").build();
                var kCb;
                kCb = ({
                    jRa: a,
                    lIa: b
                }) => {
                    const c = b.status !== 1 && a.status === 1;
                    return a.status === 1 && b.status === 1 && a.MV !== b.MV || c
                };
                __c.$na = {
                    VHa: function(a, b, c, d, e, f, g, h, k) {
                        g.Wk("forms");
                        const {
                            kpa: l
                        } = d !== null && d !== void 0 ? d : {}, m = h.vs("ui.rendering.form"), n = {
                            root: new QBb,
                            option: new QBb
                        }, p = new hCb(b);
                        return {
                            Q9: TBb,
                            lt: gCb,
                            Laa: ({
                                Yr: q
                            }) => {
                                if (l && a) {
                                    var r, t = SBb(() => q.Gd.id, () => {
                                            const v = q.Gd.type,
                                                x = l.get({
                                                    zc: q.Gd.id,
                                                    yc: a,
                                                    ff: c
                                                });
                                            r === null || r === void 0 || r.unsubscribe();
                                            v === "poll" && (r = x.yPa({
                                                oMa: () => q.Gd.Lj
                                            }).subscribe(({
                                                results: y,
                                                Lj: z
                                            }) => {
                                                m5(() => {
                                                    const A = new Map(q.kh.zt);
                                                    var D;
                                                    A.set(z, { ...((D = A.get(z)) !== null && D !== void 0 ? D : k5),
                                                        results: y
                                                    });
                                                    q.fj({
                                                        zt: A
                                                    })
                                                })
                                            }));
                                            x.getSettings({
                                                lMa: () => q.Gd.$h
                                            }).subscribe(y => {
                                                const z = q.kh.pb;
                                                let A = y;
                                                if (y.status === 1 && !q.Gd.$h && q.Gd.type === "quiz") {
                                                    var D, F;
                                                    const G = (F = (D = q.Gd.fields.first()) === null || D === void 0 ? void 0 : D.value.zHa.toArray()) !== null && F !== void 0 ? F : [];
                                                    A = {
                                                        status: 1,
                                                        eQ: H => G.includes(H),
                                                        MV: y.MV,
                                                        v1: y.v1
                                                    }
                                                }
                                                m5(() => {
                                                    q.fj({
                                                        pb: A
                                                    })
                                                });
                                                kCb({
                                                    jRa: A,
                                                    lIa: z
                                                }) && x.Poa({
                                                    Lj: q.Gd.Lj,
                                                    $h: q.Gd.$h
                                                }).then(RBb(G => {
                                                    const H = q.Gd.Lj;
                                                    if (G.ok) {
                                                        var J = new Map(q.kh.zt);
                                                        if (G.value) {
                                                            var L;
                                                            G = G.value;
                                                            var S;
                                                            var R = (S = (L = q.Gd.fields.first()) ===
                                                                null || L === void 0 ? void 0 : L.value.id) !== null && S !== void 0 ? S : "";
                                                            var V;
                                                            ({
                                                                yd: L
                                                            } = (V = G.rn.get(R)) !== null && V !== void 0 ? V : {});
                                                            var da;
                                                            J.set(H, { ...((da = J.get(H)) !== null && da !== void 0 ? da : k5),
                                                                yd: L,
                                                                cz: L
                                                            })
                                                        } else J.set(H, { ...((R = J.get(H)) !== null && R !== void 0 ? R : k5),
                                                            yd: void 0,
                                                            cz: void 0
                                                        });
                                                        q.fj({
                                                            zt: J,
                                                            Lr: void 0
                                                        })
                                                    }
                                                }))
                                            })
                                        }, {
                                            fireImmediately: !0
                                        }),
                                        u = SBb(() => (k === null || k === void 0 ? void 0 : k.status) === 2, RBb(v => {
                                            q.fj({
                                                lra: v
                                            })
                                        }), {
                                            fireImmediately: !0
                                        });
                                    return () => {
                                        r === null || r === void 0 || r.unsubscribe();
                                        t();
                                        u()
                                    }
                                }
                            },
                            render: (q, r) => {
                                var t = nBb(q);
                                if (l && a) {
                                    var u = l.get({
                                        zc: q.Gd.id,
                                        yc: a,
                                        ff: c
                                    });
                                    u = rBb(q, t, u, e, f, m)
                                }
                                a: {
                                    var v = q.Gd,
                                        x = new jCb(q),
                                        y = new iCb(q);
                                    switch (v.type) {
                                        case "poll":
                                            var z;
                                            r = q.Gd;
                                            q = q.kh;
                                            v = x.Xs;
                                            x = x.mt;
                                            y = y.border;
                                            var A = y.Cxa,
                                                D = r.direction,
                                                F = (z = r.fields.first()) === null || z === void 0 ? void 0 : z.value;
                                            if (F && v && x) {
                                                z = t5(v);
                                                var G = t5(x),
                                                    H = t.X8(),
                                                    J = t.Ku();
                                                u = {
                                                    minWidth: r.minWidth,
                                                    minHeight: r.minHeight,
                                                    ...p5({
                                                        layout: "vertical",
                                                        direction: v5(D),
                                                        background: x,
                                                        R: A,
                                                        border: y,
                                                        cells: [r.oqa ? void 0 : xBb({
                                                            direction: D,
                                                            text: F.label,
                                                            background: v
                                                        }), BBb({
                                                            hLa: t,
                                                            hF: wBb(u),
                                                            options: F.options,
                                                            xx: q.xx,
                                                            Lr: q.Lr,
                                                            yd: J.yd,
                                                            mba: F.R,
                                                            oG: z,
                                                            Py: G,
                                                            yn: r.yn,
                                                            direction: D,
                                                            DS: H,
                                                            ek: F.id,
                                                            messages: p,
                                                            U2: n
                                                        }), ...HBb({
                                                            direction: D,
                                                            messages: p,
                                                            yn: r.yn,
                                                            Faa: t.qMa(F.id),
                                                            status: t.FJ(),
                                                            pb: q.pb,
                                                            backgroundColor: G
                                                        })].filter(wb)
                                                    }),
                                                    ref: n.root
                                                }
                                            } else u = { ...p5({
                                                    layout: "vertical",
                                                    direction: v5(D),
                                                    background: {
                                                        type: "color",
                                                        color: "#ffffff"
                                                    },
                                                    cells: []
                                                }),
                                                minWidth: r.minWidth,
                                                minHeight: r.minHeight
                                            };
                                            break a;
                                        case "quiz":
                                            v = x;
                                            z = q.Gd;
                                            q = q.kh;
                                            var L = v.Xs;
                                            v = v.mt;
                                            y = y.border;
                                            x = y.Cxa;
                                            A = z.direction;
                                            var S = (D = z.fields.first()) === null ||
                                                D === void 0 ? void 0 : D.value;
                                            if (S && L && v) {
                                                D = t5(L);
                                                F = t5(v);
                                                G = t.FJ();
                                                H = q.pb.status === 1 && q.pb;
                                                J = t.X8() && H && G === 0;
                                                t = t.Ku();
                                                var R = z.minWidth,
                                                    V = z.minHeight,
                                                    da = v5(A);
                                                L = z.oqa ? void 0 : xBb({
                                                    direction: A,
                                                    text: S.label,
                                                    background: L
                                                });
                                                S = MBb({
                                                    hF: wBb(u),
                                                    direction: A,
                                                    options: S.options,
                                                    pb: q.pb,
                                                    xx: q.xx,
                                                    Lr: q.Lr,
                                                    yd: t.yd,
                                                    mba: S.R,
                                                    Py: F,
                                                    DS: J,
                                                    U2: n,
                                                    context: r
                                                });
                                                u = u ? {
                                                    submit: u.submit,
                                                    uaa: u.uaa,
                                                    vaa: u.vaa,
                                                    taa: u.taa,
                                                    waa: u.waa
                                                } : void 0;
                                                u = {
                                                    minWidth: R,
                                                    minHeight: V,
                                                    ...p5({
                                                        layout: "vertical",
                                                        direction: da,
                                                        background: v,
                                                        R: x,
                                                        border: y,
                                                        cells: [L, S, ...PBb({
                                                            hF: u,
                                                            direction: A,
                                                            messages: p,
                                                            yn: z.yn,
                                                            oI: z.footer.label,
                                                            oG: D,
                                                            status: G,
                                                            DS: J && r.mode !== "edit",
                                                            pb: H ? H : void 0,
                                                            yd: t.yd,
                                                            backgroundColor: F,
                                                            WG: q.WG
                                                        })].filter(wb)
                                                    }),
                                                    ref: n.root
                                                }
                                            } else u = { ...p5({
                                                    layout: "vertical",
                                                    direction: v5(A),
                                                    background: {
                                                        type: "color",
                                                        color: "#ffffff"
                                                    },
                                                    cells: []
                                                }),
                                                minWidth: z.minWidth,
                                                minHeight: z.minHeight
                                            };
                                            break a;
                                        default:
                                            throw new E(v);
                                    }
                                }
                                return u
                            },
                            U2: n
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
]); // __FILE_CONTENT_FOR__:217eb8a034534443.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [61316], {

        /***/
        464819: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(401054);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var ib = __c.ib;
                var Z = __c.Z;
                var X = __c.X;
                var I = __c.I;
                var M = __c.M;
                var E = __c.E;
                var Ea = __c.Ea;
                var Fa = __c.Fa;
                var ljb = function(a) {
                        return new __c.NY({
                            value: a.yd,
                            Aq: new __c.OY({
                                id: a.ek,
                                label: a.si,
                                Aq: new jjb({
                                    arity: 1,
                                    multiple: !1,
                                    options: a.options.map(b => new kjb({
                                        label: b.label,
                                        value: b.id
                                    }))
                                })
                            })
                        })
                    },
                    mjb = function(a) {
                        const b = a.Aq.Aq;
                        __c.B(b.type === "SELECT_FIELD");
                        return {
                            ek: a.Aq.id,
                            si: a.Aq.label,
                            yd: a.value,
                            options: b.options.map(c => ({
                                id: c.value,
                                label: c.label
                            }))
                        }
                    },
                    njb = function(a) {
                        return {
                            id: a.id,
                            status: a.status,
                            rn: new Map(a.rn.map(b => [b.Aq.id, mjb(b)]))
                        }
                    },
                    ojb = function(a, b) {
                        return {
                            eQ: c => {
                                const d = a.pb.No[0];
                                return d ? d.Bma.includes(c) :
                                    !1
                            },
                            MV: a.pb.$Ea ? "anon" : "public",
                            v1: b
                        }
                    },
                    pjb = function(a, b) {
                        const {
                            initialDelay: c,
                            RJ: d = 1.6,
                            JF: e,
                            jM: f,
                            XI: g,
                            signal: h,
                            naa: k
                        } = b;
                        __c.w(d > 1, "increaseFactor (${increaseFactor}) must be greater than 1");
                        return __c.Hw(a, l => {
                            l = Math.min(c * Math.pow(d, l), e);
                            const m = k === null || k === void 0 ? void 0 : k();
                            return m !== void 0 ? Math.max(l, m) : l
                        }, {
                            jM: f,
                            XI: g,
                            signal: h
                        })
                    },
                    qjb = function({
                        yc: a,
                        zc: b
                    }) {
                        return `${a}:${b}`
                    },
                    rjb = async function(a) {
                        if (![2, 1, 4].includes(a.nn)) {
                            var b = a.zc,
                                c = a.yc;
                            PY(() => {
                                a.nn = 2
                            });
                            try {
                                await a.$U.EJ(new __c.QY({
                                    ref: {
                                        zc: b,
                                        yc: c,
                                        fk: void 0
                                    },
                                    ff: a.ff,
                                    Si: RY(a)
                                })), PY(() => {
                                    a.nn = 4
                                })
                            } catch (d) {
                                PY(() => {
                                    a.nn === 2 && (a.nn = d instanceof __c.xN ? 1 : 5)
                                })
                            }
                        }
                    },
                    RY = function(a) {
                        return a.source.type === "website" ? a.source.Si : void 0
                    },
                    SY = async function(a, b) {
                        try {
                            await a.$E
                        } catch (c) {
                            return Fa()
                        }
                        return b()
                    },
                    ujb = async function(a, b, c, d) {
                        d = ljb(d);
                        try {
                            const e = await a.Bq.Pga(new __c.sjb({
                                VG: b.id,
                                zc: a.zc,
                                fingerprint: c,
                                yc: a.yc,
                                ff: a.ff,
                                rn: [d],
                                Si: RY(a),
                                caller: b.submitter,
                                gka: tjb(a, c)
                            }));
                            switch (e.type) {
                                case "SUCCESS":
                                    const f = a.Ku(c);
                                    f.hK = e.yL.id;
                                    f.Nx = e.yL;
                                    return Ea([...e.No]);
                                case "ERROR":
                                    return a.M.ub(new TY("edit submission failed")), Fa();
                                default:
                                    throw new E(e);
                            }
                        } catch (e) {
                            return Fa()
                        }
                    },
                    vjb = async function(a, b, c, d, e) {
                        switch (b.code) {
                            case 3:
                                return a.M.ub(new TY("unknown form")), Fa();
                            case 1:
                            case 2:
                                try {
                                    if (!(await a.Poa({
                                            Lj: c,
                                            $h: e
                                        })).ok) return a.M.ub(new TY("backfill submission failed")), Fa();
                                    const {
                                        Nx: f
                                    } = a.Ku(c);
                                    return f && f.rn.length !== 0 ? ujb(a, f, c, d) : (a.M.ub(new TY("empty submission")), Fa())
                                } catch (f) {
                                    return a.M.ub(f), Fa()
                                }
                            default:
                                throw new E(b.code);
                        }
                    },
                    tjb = function(a, b) {
                        ({
                                Nx: a
                            } =
                            a.Ku(b));
                        a = a === null || a === void 0 ? void 0 : a.submitter;
                        return (a === null || a === void 0 ? void 0 : a.type) === "ANON" ? a : void 0
                    },
                    wjb = function(a, b) {
                        return b.some(c => c === 5) && a.source.type === "website" ? 2 : void 0
                    },
                    UY = __webpack_require__(519427),
                    xjb = UY.observable,
                    yjb = UY.reaction,
                    PY = UY.runInAction;
                var zjb = __webpack_require__(430256).y;
                __c.VY = M(() => ({
                    type: I("A?", 2, "ANON"),
                    clientId: X(1)
                }));
                __c.WY = M(() => ({
                    type: I("A?", 1, "USER"),
                    brand: X(1),
                    user: X(2),
                    sR: Z(3)
                }));
                __c.XY = __c.gb(() => ({
                    type: [1, __c.WY, 2, __c.VY]
                }), () => ({}));
                __c.YY = () => ({
                    VG: X(1),
                    zc: X(2),
                    yc: X(6),
                    fingerprint: X(7),
                    ff: Z(5),
                    Si: Z(8),
                    gka: __c.K(9, __c.VY),
                    caller: __c.K(12, __c.XY)
                });
                __c.Ajb = M(() => ({ ...__c.YY(),
                    type: I("A?", 4, "ARCHIVE")
                }));
                var Bjb = ib(() => [1, 2]);
                var ZY = () => ({
                    arity: __c.Sa(1, Bjb)
                });
                var Cjb = M(() => ({ ...ZY(),
                    type: I("A?", 8, "EMAIL_FIELD")
                }));
                var Djb = M(() => ({ ...ZY(),
                    type: I("A?", 9, "TEXT_FIELD")
                }));
                var kjb = M(() => ({
                    label: X(1),
                    value: X(2)
                }));
                var jjb = M(() => ({ ...ZY(),
                    type: I("A?", 10, "SELECT_FIELD"),
                    options: __c.Ra(11, kjb),
                    multiple: __c.AO(12)
                }));
                var Ejb = __c.gb(() => ({
                    type: [8, Cjb, 9, Djb, 10, jjb]
                }), ZY);
                __c.OY = M(() => ({
                    id: X(1),
                    label: X(2),
                    Aq: __c.Qa(3, Ejb)
                }));
                __c.NY = M(() => ({
                    Aq: __c.Qa(3, __c.OY),
                    value: X(2)
                }));
                __c.sjb = M(() => ({ ...__c.YY(),
                    type: I("A?", 3, "EDIT"),
                    rn: __c.Ra(10, __c.NY),
                    submitter: __c.K(11, __c.XY)
                }));
                __c.$Y = M(() => ({
                    yc: X(1),
                    zc: X(2),
                    fk: Z(3)
                }));
                __c.Fjb = ib(() => [1, 2, 3, 4, 5, 7, 8, 9], 1);
                __c.aZ = ib(() => [1, 2]);
                __c.QY = M(() => ({
                    ref: __c.Qa(1, __c.$Y),
                    M_: __c.Ua(2, __c.Fjb),
                    X0: __c.Ta(6, __c.aZ),
                    $h: Z(4),
                    ff: Z(3),
                    Si: Z(5)
                }));
                __c.bZ = M(() => ({
                    ek: X(1),
                    Bma: __c.zO(2)
                }));
                __c.Gjb = ib(() => [1, 2]);
                __c.cZ = ib(() => [1, 2]);
                var Hjb = M(() => ({
                    NI: Z(1),
                    limit: __c.sO(2, 100),
                    ff: Z(3),
                    Ada: __c.Ta(7, __c.Gjb),
                    status: __c.Ta(8, __c.cZ),
                    $h: Z(20),
                    type: I("A?", 6, "BY_CALLER"),
                    yc: X(11),
                    zc: X(12),
                    fk: Z(13),
                    Si: Z(14)
                }));
                var Ijb = M(() => ({
                    type: I("A?", 1, "WEBSITE"),
                    GIa: X(1)
                }));
                var Jjb = M(() => ({
                    type: I("A?", 2, "PREVIEW")
                }));
                var Kjb = M(() => ({
                    type: I("A?", 3, "DESIGN"),
                    yc: X(1)
                }));
                __c.Ljb = __c.gb(() => ({
                    type: [1, Ijb, 2, Jjb, 3, Kjb]
                }), () => ({}));
                __c.Mjb = M(() => ({
                    F9: X(1),
                    zc: X(2),
                    fk: X(3),
                    $h: Z(10),
                    source: __c.Qa(4, __c.Ljb),
                    rn: __c.Ra(5, __c.NY),
                    Cr: Z(6),
                    kI: Z(7),
                    gva: Z(8),
                    ff: Z(9),
                    Si: Z(11)
                }));
                var Njb = class {
                    EJ(a) {
                        const b = this.bufferData;
                        if (b) {
                            b.buffer.push(a);
                            const e = b.buffer.length - 1;
                            return b.OFa.then(f => ({
                                form: f.Dca[e].form,
                                bS: f.bS
                            }))
                        }
                        const c = this.lUa,
                            d = [a];
                        a = new Promise((e, f) => {
                            c(async () => {
                                this.bufferData = void 0;
                                try {
                                    const g = await this.Bq.Gpa({
                                        kxa: d
                                    });
                                    e(g)
                                } catch (g) {
                                    f(g)
                                }
                            }, 500)
                        });
                        this.bufferData = {
                            buffer: d,
                            OFa: a
                        };
                        return a.then(e => ({
                            form: e.Dca[0].form,
                            bS: e.bS
                        }))
                    }
                    constructor(a) {
                        var b = setTimeout;
                        this.Bq = a;
                        this.lUa = b
                    }
                };
                var Ojb = class {
                    start() {
                        if (this.rI) return this.rI;
                        let a, b = !1;
                        const c = async () => {
                            a = pjb(this.mWa, {
                                initialDelay: this.ha.initialDelay,
                                RJ: this.ha.RJ,
                                JF: this.ha.JF,
                                naa: this.ha.naa,
                                XI: !0
                            });
                            try {
                                const d = await a.result;
                                b || this.effect(d)
                            } catch (d) {} finally {
                                b || c()
                            }
                        };
                        c();
                        return this.rI = () => {
                            b = !0;
                            a === null || a === void 0 || a.cancel();
                            this.rI = void 0
                        }
                    }
                    cancel() {
                        this.rI && this.rI()
                    }
                    constructor(a, b, c) {
                        this.mWa = a;
                        this.effect = b;
                        this.ha = c
                    }
                };
                var Pjb, TY;
                __c.Qjb = class {
                    get(a) {
                        a = this.getContext(a);
                        rjb(a);
                        return a
                    }
                    Hc(a) {
                        const b = this.getContext(a);
                        b.fW(a);
                        return b
                    }
                    getContext({
                        zc: a,
                        yc: b,
                        ff: c
                    }) {
                        const d = qjb({
                                yc: b,
                                zc: a
                            }),
                            e = this.contexts.get(d);
                        if (e) return e;
                        a = new Pjb(a, b, c, this.$U, this.Bq, this.M, this.source);
                        this.contexts.set(d, a);
                        return a
                    }
                    constructor(a, b, c = {
                        type: "design"
                    }) {
                        this.Bq = a;
                        this.M = b;
                        this.source = c;
                        this.contexts = new Map;
                        this.$U = new Njb(a)
                    }
                };
                Pjb = class {
                    static A(a) {
                        __c.P(a, {
                            nn: xjb.ref
                        })
                    }
                    get status() {
                        switch (this.nn) {
                            case 0:
                            case 2:
                            case 3:
                                return 1;
                            case 4:
                                return 2;
                            case 5:
                            case 1:
                                return 3;
                            default:
                                throw new E(this.nn);
                        }
                    }
                    get $E() {
                        return new Promise((a, b) => {
                            yjb(() => this.status, (c, d, e) => {
                                switch (c) {
                                    case 2:
                                        a();
                                        e.dispose();
                                        break;
                                    case 3:
                                        b(Error("Form initialization errored."));
                                        e.dispose();
                                        break;
                                    case 1:
                                        break;
                                    default:
                                        throw new E(c);
                                }
                            }, {
                                fireImmediately: !0
                            })
                        })
                    }
                    getSettings(a) {
                        return new zjb(b => {
                            const c = yjb(() => a.lMa(), async d => {
                                if (d) {
                                    const e = this.$ya.get(d);
                                    if (e) {
                                        b.next({
                                            status: 1,
                                            ...e
                                        });
                                        return
                                    }
                                }
                                try {
                                    b.next({
                                        status: 2
                                    });
                                    await this.$E;
                                    const {
                                        form: e,
                                        nna: f
                                    } = await this.Bq.EJ(new __c.QY({
                                        ref: new __c.$Y({
                                            zc: this.zc,
                                            yc: this.yc
                                        }),
                                        $h: d,
                                        ff: this.ff,
                                        Si: RY(this),
                                        M_: [8]
                                    })), g = ojb(e.pb, f);
                                    d && this.$ya.set(d, g);
                                    b.next({
                                        status: 1,
                                        ...g
                                    })
                                } catch (e) {
                                    b.next({
                                        status: 3,
                                        $h: d
                                    }), this.M.ub(e)
                                }
                            }, {
                                fireImmediately: !0
                            });
                            return () => c()
                        })
                    }
                    async Poa(a) {
                        const b = this.Ku(a.Lj);
                        return b.wJ ? b.wJ : SY(this, async () => {
                            b.wJ = this.Bq.Qoa(new Hjb({
                                zc: this.zc,
                                fk: a.Lj,
                                yc: this.yc,
                                ff: this.ff,
                                Ada: 2,
                                Si: RY(this),
                                $h: a.$h
                            })).then(({
                                Fk: c
                            }) => {
                                const d = (c = c.find(e => e.status === 1 && e.AX.fk === a.Lj)) ? njb(c) : void 0;
                                b.hK = d === null || d === void 0 ? void 0 : d.id;
                                b.Nx = c;
                                return Ea(d)
                            }).catch(() => Fa()).finally(() => {
                                b.wJ = void 0
                            });
                            return b.wJ
                        })
                    }
                    async LPa({
                        $h: a,
                        Lj: b,
                        aFa: c
                    }) {
                        return SY(this, async () => {
                            const d = this.Ku(b);
                            await d.wJ;
                            const e = this.zc,
                                f = this.ff;
                            this.Jy && this.Jy.cancel();
                            const g = ljb(c);
                            try {
                                if (d.Nx) return await ujb(this, d.Nx, b, c);
                                const m = __c.id();
                                var h = this.Bq,
                                    k = h.Oma;
                                const n = this.yc;
                                var l = this.source.type === "website" ? new Ijb({
                                        GIa: n
                                    }) :
                                    new Kjb({
                                        yc: n
                                    });
                                const p = await k.call(h, new __c.Mjb({
                                    F9: m,
                                    zc: e,
                                    fk: b,
                                    $h: a,
                                    ff: f,
                                    rn: [g],
                                    source: l,
                                    Si: RY(this)
                                }));
                                switch (p.type) {
                                    case "SUCCESS":
                                        return d.hK = m, d.Nx = p.yL, Ea([...p.No]);
                                    case "ERROR":
                                        return vjb(this, p, b, c, a);
                                    default:
                                        throw new E(p);
                                }
                            } catch (m) {
                                return Fa()
                            } finally {
                                this.Jy && this.Jy.start()
                            }
                        })
                    }
                    async DTa({
                        Lj: a
                    }) {
                        return SY(this, async () => {
                            const b = this.Ku(a);
                            await b.wJ;
                            const c = this.zc,
                                d = this.yc,
                                e = this.ff;
                            if (!b.hK) return Ea();
                            this.Jy && this.Jy.cancel();
                            try {
                                var f;
                                const g = await this.Bq.Pga(new __c.Ajb({
                                    VG: b.hK,
                                    zc: c,
                                    yc: d,
                                    fingerprint: a,
                                    ff: e,
                                    Si: RY(this),
                                    caller: (f = b.Nx) === null || f === void 0 ? void 0 : f.submitter,
                                    gka: tjb(this, a)
                                }));
                                switch (g.type) {
                                    case "SUCCESS":
                                        return b.hK = void 0, b.Nx = void 0, Ea();
                                    case "ERROR":
                                        return Fa();
                                    default:
                                        throw new E(g);
                                }
                            } catch (g) {
                                return Fa()
                            } finally {
                                this.Jy && this.Jy.start()
                            }
                        })
                    }
                    Ku(a) {
                        var b = this.bAa.get(a);
                        if (b) return b;
                        b = {
                            Lj: a,
                            hK: void 0,
                            Nx: void 0
                        };
                        this.bAa.set(a, b);
                        return b
                    }
                    async fW(a) {
                        if (![4, 3].includes(this.nn)) {
                            PY(() => {
                                this.nn = 3
                            });
                            try {
                                await this.Bq.fW({
                                    zc: this.zc,
                                    yc: this.yc,
                                    ff: this.ff,
                                    $h: a.$h,
                                    pb: a.A$a
                                }), PY(() => {
                                    this.nn = 4
                                })
                            } catch (b) {
                                PY(() => {
                                    b instanceof __c.yN ? this.nn = 4 : this.nn === 3 && (this.nn = 5)
                                })
                            }
                        }
                    }
                    constructor(a, b, c, d, e, f, g = {
                        type: "design"
                    }) {
                        this.zc = a;
                        this.yc = b;
                        this.ff = c;
                        this.$U = d;
                        this.Bq = e;
                        this.M = f;
                        this.source = g;
                        this.nn = (Pjb.A(this), 0);
                        this.bAa = new Map;
                        this.$ya = new Map;
                        this.yPa = h => {
                            let k = [],
                                l;
                            const m = async () => {
                                try {
                                    const v = h.oMa();
                                    var n = this.zc,
                                        p = this.yc;
                                    const x = this.ff,
                                        y = [5];
                                    await this.$E;
                                    const {
                                        form: z,
                                        bS: A
                                    } = await this.$U.EJ(new __c.QY({
                                        ref: new __c.$Y({
                                            zc: n,
                                            yc: p,
                                            fk: v
                                        }),
                                        M_: y,
                                        ff: x,
                                        Si: RY(this),
                                        X0: wjb(this, y)
                                    }));
                                    l = A != null ? A * 1E3 : void 0;
                                    a: {
                                        n = k;
                                        var q = z.lX;
                                        if (n.length !== q.length) var r = !1;
                                        else {
                                            for (p = 0; p < n.length; p++)
                                                if (n[p].version !== q[p].version) {
                                                    r = !1;
                                                    break a
                                                }
                                            r = !0
                                        }
                                    }
                                    if (!r) {
                                        var t = k = z.lX;
                                        const D = new Map;
                                        for (const F of t) {
                                            if (F.type !== "SELECT") continue;
                                            let G = D.get(F.ek);
                                            G || (G = {
                                                id: F.ek,
                                                Ns: new Map,
                                                total: 0
                                            }, D.set(F.ek, G));
                                            for (const H of F.iAa) {
                                                const J = H.qR;
                                                var u;
                                                const L = (u = G.Ns.get(J)) !== null && u !== void 0 ? u : 0;
                                                G.Ns.set(J, L + H.bea);
                                                G.total += H.bea
                                            }
                                        }
                                        return {
                                            Lj: v,
                                            results: {
                                                fields: D
                                            }
                                        }
                                    }
                                } catch (v) {
                                    this.M.ub(v)
                                }
                            };
                            return new zjb(n => {
                                const p = [],
                                    q = new Ojb(() => m(), t => n.next(t), {
                                        initialDelay: 1E3,
                                        RJ: 2,
                                        JF: 6E4,
                                        naa: () => l
                                    }),
                                    r = q.start();
                                p.push(r);
                                this.Jy = q;
                                p.push(() => this.Jy = void 0);
                                return () => p.forEach(t => t())
                            })
                        }
                    }
                };
                TY = class extends Error {
                    constructor(a) {
                        super(`form: unexpected "${a}"`)
                    }
                };
                __c.Rjb = M(() => ({
                    q5a: __c.wO(1),
                    WXa: __c.wO(2),
                    $Ea: __c.AO(4),
                    No: __c.Ra(3, __c.bZ)
                }));
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
]); // __FILE_CONTENT_FOR__:8903e2e71b11aaa2.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [47523], {

        /***/
        428405: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(981587);
            __web_req__(464819);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var C = __c.C;
                var w = __c.w;
                var Zpb = function(a, b, c) {
                        w(b.length > 0);
                        w(!a.kb.has(b));
                        if (c != null)
                            if (Array.isArray(c)) c = c.filter(__c.wb), c.length !== 0 && (w(c.every(d => typeof d === "number" || typeof d === "string")), a.kb.set(b, c));
                            else if (typeof c === "boolean") a.kb.set(b, c || String(c));
                        else if (typeof c === "number" || typeof c === "string") a.kb.set(b, String(c));
                        else throw Error(`invalid param value type: ${typeof c}`);
                    },
                    R0 = function(a, b) {
                        if (!b) return a;
                        if (b instanceof Map)
                            for (const [c, d] of b) Zpb(a, c, d);
                        else
                            for (const c in b) Zpb(a, c, b[c]);
                        return a
                    },
                    S0 = function(a) {
                        if (a.kb.size === 0) return a.path;
                        const b = Array.from(a.kb.entries()).map(([c, d]) => d === !0 ? `${encodeURIComponent(c)}` : Array.isArray(d) ? d.map(e => `${encodeURIComponent(c)}=${encodeURIComponent(e)}`).join("&") : `${encodeURIComponent(c)}=${encodeURIComponent(d)}`).join("&");
                        return `${a.path}?${b}`
                    },
                    T0 = function(a) {
                        w(a.length > 0);
                        w(a.every(b => b.indexOf("?") < 0));
                        return R0(new $pb(["", ...a.map(encodeURIComponent)].join("/")))
                    },
                    $pb = class {
                        constructor(a) {
                            this.path = a;
                            this.kb = new Map
                        }
                    };
                var aqb = __c.gb(() => ({
                    type: [3, __c.sjb, 4, __c.Ajb]
                }), __c.YY);
                var bqb = __c.M(() => ({
                    yc: __c.X(1),
                    zc: __c.X(2),
                    pb: __c.Qa(3, __c.Rjb),
                    $h: __c.Z(6),
                    ff: __c.Z(5)
                }));
                var cqb = __c.M(() => ({
                    kxa: __c.Ra(1, __c.QY)
                }));
                var dqb = class {
                        async fW(a) {
                            const b = S0(T0([U0, ""])),
                                [c, {
                                    hDa: d
                                }] = await Promise.all([this.Jq.post(b, bqb.serialize(a), {
                                    Gy: "createform"
                                }), __webpack_require__.me(469546).then(() => ({
                                    hDa: __c.Zjb
                                }))]);
                            return d.deserialize(c)
                        }
                        async EJ(a) {
                            const b = T0([U0, ""]);
                            R0(b, {
                                "ref.designId": C(a.ref.yc),
                                "ref.formId": C(a.ref.zc),
                                "ref.formFingerprint": a.ref.fk,
                                projections: a.M_.map(e => __c.Fjb.serialize(e)),
                                sourceFilter: a.X0 && __c.aZ.serialize(a.X0),
                                settingsId: a.$h,
                                extensionToken: a.ff,
                                websiteAccessToken: a.Si
                            });
                            a = S0(b);
                            const [c,
                                {
                                    zDa: d
                                }
                            ] = await Promise.all([this.Jq.get(a, {
                                Gy: "getform"
                            }), __webpack_require__.me(469546).then(() => ({
                                zDa: __c.jZ
                            }))]);
                            return d.deserialize(c)
                        }
                        async Gpa(a) {
                            const b = S0(T0([U0, "batch"])),
                                [c, {
                                    yDa: d
                                }] = await Promise.all([this.Jq.post(b, cqb.serialize(a), {
                                    Gy: "getformbatch"
                                }), __webpack_require__.me(469546).then(() => ({
                                    yDa: __c.bkb
                                }))]);
                            return d.deserialize(c)
                        }
                        async Oma(a) {
                            const b = S0(T0([U0, "submissions"])),
                                [c, {
                                    iDa: d
                                }] = await Promise.all([this.Jq.post(b, __c.Mjb.serialize(a), {
                                    Gy: "createsubmission"
                                }), __webpack_require__.me(469546).then(() =>
                                    ({
                                        iDa: __c.Wpb
                                    }))]);
                            return d.deserialize(c)
                        }
                        async Qoa(a) {
                            const b = T0([U0, "submissions"]);
                            R0(b, {
                                type: a.type,
                                continuation: a.NI,
                                limit: C(a.limit),
                                extensionToken: a.ff,
                                sortOrder: a.Ada && __c.Gjb.serialize(a.Ada),
                                status: a.status && __c.cZ.serialize(a.status),
                                settingsId: a.$h
                            });
                            switch (a.type) {
                                case "BY_FORM":
                                    R0(b, {
                                        designId: C(a.yc),
                                        formId: C(a.zc),
                                        formFingerprint: a.fk,
                                        source: a.source && __c.aZ.serialize(a.source)
                                    });
                                    break;
                                case "BY_USER":
                                    R0(b, {
                                        designId: C(a.yc),
                                        formId: C(a.zc),
                                        formFingerprint: a.fk,
                                        brand: C(a.brand),
                                        user: C(a.user),
                                        org: a.sR
                                    });
                                    break;
                                case "BY_CALLER":
                                    R0(b, {
                                        designId: C(a.yc),
                                        formId: C(a.zc),
                                        formFingerprint: a.fk,
                                        websiteAccessToken: a.Si
                                    });
                                    break;
                                default:
                                    throw new __c.E(a);
                            }
                            a = S0(b);
                            const [c, {
                                uDa: d
                            }] = await Promise.all([this.Jq.get(a, {
                                Gy: "findsubmissions"
                            }), __webpack_require__.me(469546).then(() => ({
                                uDa: __c.iZ
                            }))]);
                            return d.deserialize(c)
                        }
                        async Pga(a) {
                            w(a.zc != null && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(a.zc));
                            w(a.VG != null && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(a.VG));
                            const b = S0(T0([U0, a.zc, "submissions", a.VG])),
                                [c, {
                                    cEa: d
                                }] = await Promise.all([this.Jq.post(b, aqb.serialize(a), {
                                    Gy: "updatesubmissionapi"
                                }), __webpack_require__.me(469546).then(() => ({
                                    cEa: __c.Ypb
                                }))]);
                            return d.deserialize(c)
                        }
                        constructor(a) {
                            this.Jq = a
                        }
                    },
                    U0 = "form";
                var eqb = class {};
                __c.jCa = {
                    XNa: function({
                        Jq: a,
                        M: b,
                        Si: c
                    }) {
                        a = new dqb(a);
                        return {
                            Bq: a,
                            iLa: new eqb,
                            kpa: new __c.Qjb(a, b, {
                                type: "website",
                                Si: c
                            })
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=https://chunk-composing.canva.com/chunk-batch-sm/8+58_sourcemaps/3f7b74f7e5d7ba55.js.map+8+65_sourcemaps/ed8165688aa76b2c.js.map+21_sourcemaps/217eb8a034534443.js.map+14_sourcemaps/8903e2e71b11aaa2.js.map