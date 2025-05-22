(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [76703], {

        /***/
        910906: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var XJb = function(a) {
                        a.gD && (a.gD(), a.gD = null);
                        const b = a.props.YIa;
                        b.forEach(c => {
                            window.addEventListener(c, a.oja)
                        });
                        a.gD = () => {
                            b.forEach(c => {
                                window.removeEventListener(c, a.oja)
                            })
                        }
                    },
                    cKb = function(a) {
                        return YJb(b => {
                            const [{
                                store: c,
                                Ba: d
                            }] = ZJb(() => {
                                const e = new $Jb,
                                    f = new aKb(e);
                                return {
                                    store: e,
                                    Ba: f
                                }
                            });
                            return J7(bKb, {
                                Iua: d.reset,
                                children: J7(__c.C5a, {
                                    bOa: d,
                                    cOa: c,
                                    sra: a.wq.contains(b.url),
                                    children: ({
                                        Pk: e
                                    }) => J7(__c.eG, {
                                        url: b.url,
                                        store: a.wq,
                                        Ak: a.ls,
                                        Du: a.Du,
                                        Rm: a.Rm,
                                        Pk: e,
                                        ov: b.ov,
                                        xK: b.xK
                                    })
                                })
                            })
                        })
                    },
                    eKb = function(a) {
                        return dKb(function(b) {
                            return J7("div", {
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    all: "initial"
                                },
                                children: J7(a.je, {
                                    text: b.text,
                                    animation: void 0,
                                    Fc: void 0,
                                    $a: void 0,
                                    Oa: void 0,
                                    Te: [],
                                    writingMode: 1
                                })
                            })
                        })
                    },
                    J7 = __webpack_require__(443763).jsx;
                var K7 = __webpack_require__(875604),
                    fKb = K7.Component,
                    dKb = K7.memo,
                    ZJb = K7.useState;
                var gKb = __webpack_require__(519427),
                    L7 = gKb.action,
                    hKb = gKb.observable;
                var YJb = __webpack_require__(446474).Pi;
                var iKb = class extends fKb {
                    render() {
                        const {
                            children: a,
                            component: b = "div",
                            qTa: c,
                            XZ: d
                        } = this.props;
                        let e = {};
                        d && (e = c.reduce((f, g) => {
                            f[g] = this.oEa;
                            return f
                        }, {}));
                        return J7(b, {
                            className: "_kI3Pw",
                            ...e,
                            children: a
                        })
                    }
                    componentDidMount() {
                        this.props.XZ && XJb(this)
                    }
                    componentDidUpdate() {
                        this.props.XZ && XJb(this)
                    }
                    componentWillUnmount() {
                        this.gD && (this.gD(), this.gD = null)
                    }
                    constructor(...a) {
                        super(...a);
                        this.z4 = this.gD = null;
                        this.oEa = b => {
                            this.z4 = b.nativeEvent
                        };
                        this.oja = b => {
                            const c = this.props.XZ,
                                d = this.z4 === b;
                            c && !d && c(b);
                            this.z4 = null
                        }
                    }
                };
                var bKb = a => J7(iKb, {
                    qTa: ["onMouseDown", "onTouchStart"],
                    YIa: ["mousedown", "touchstart"],
                    XZ: a.Iua,
                    children: a.children
                });
                var $Jb = class {
                        static A(a) {
                            __c.P(a, {
                                Pk: hKb.ref
                            })
                        }
                        constructor() {
                            this.Pk = ($Jb.A(this), !0)
                        }
                    },
                    aKb = class {
                        static A(a) {
                            __c.P(a, {
                                onDoubleClick: L7.bound,
                                onTouchEnd: L7.bound,
                                reset: L7.bound
                            })
                        }
                        onDoubleClick() {
                            this.store.Pk = !1
                        }
                        onTouchEnd(a) {
                            a.touches.length > 0 || (this.$G ? (window.clearTimeout(this.$G), this.$G = void 0, this.store.Pk = !1) : this.$G = window.setTimeout(() => this.$G = void 0, 300))
                        }
                        reset() {
                            this.store.Pk = !0
                        }
                        zI() {
                            this.$G && window.clearTimeout(this.$G)
                        }
                        constructor(a) {
                            this.store = a;
                            this.$G = (aKb.A(this), void 0)
                        }
                    };
                __c.tAa = {
                    ZNa: function(a) {
                        const b = cKb({
                                Du: (d, e) => a.M.error(d, {
                                    qe: "widget: ",
                                    extra: new Map(Object.entries(e))
                                }),
                                Rm: a.Rm,
                                wq: a.wq,
                                ls: a.ls
                            }),
                            c = eKb({
                                je: a.je
                            });
                        return {
                            CDa: b,
                            RDa: c
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/eb8cb08b9b2ce20f.js.map