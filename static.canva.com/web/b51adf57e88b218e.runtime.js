(() => {
    "use strict";
    var e, r, t, f, n, s = {},
        i = {};

    function c(e) {
        var r = i[e];
        if (void 0 !== r) return r.exports;
        var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return s[e].call(t.exports, t, t.exports, c), t.loaded = !0, t.exports
    }
    c.m = s, c.amdD = function() {
        throw new Error("define cannot be used indirect")
    }, c.amdO = {}, e = [], c.O = (r, t, f, n) => {
        if (!t) {
            var s = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [t, f, n] = e[u], i = !0, a = 0; a < t.length; a++)
                    if ((!1 & n || s >= n) && Object.keys(c.O).every((e => c.O[e](t[a])))) t.splice(a--, 1);
                    else if (i = !1, n < s) s = n;
                if (i) {
                    e.splice(u--, 1);
                    var d = f();
                    if (void 0 !== d) r = d
                }
            }
            return r
        } else {
            n = n || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
            e[u] = [t, f, n]
        }
    }, c.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return c.d(r, {
            a: r
        }), r
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, c.t = function(e, f) {
        if (1 & f) e = this(e);
        if (8 & f) return e;
        if ("object" == typeof e && e) {
            if (4 & f && e.__esModule) return e;
            if (16 & f && "function" == typeof e.then) return e
        }
        var n = Object.create(null);
        c.r(n);
        var s = {};
        r = r || [null, t({}), t([]), t(t)];
        for (var i = 2 & f && e;
            "object" == typeof i && !~r.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach((r => s[r] = () => e[r]));
        return s.default = () => e, c.d(n, s), n
    }, c.d = (e, r) => {
        for (var t in r)
            if (c.o(r, t) && !c.o(e, t)) Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
    }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((r, t) => (c.f[t](e, r), r)), [])), c.u = e => {
        if (50869 === e) return "1a6258dbcf662f6b.js";
        if (61454 === e) return "048252aca513298a.vendor.js";
        if (68772 === e) return "68f927d4d76307b6.vendor.js";
        if (71059 === e) return "2d09d0e5bb3908fd.js";
        if (50971 === e) return "cd0871fdf1035ea6.js";
        if (76703 === e) return "eb8cb08b9b2ce20f.js";
        if (21023 === e) return "77d128da0c8600f5.js";
        if (30270 === e) return "870ca2cb27b159ab.js";
        if (32915 === e) return "c6c5d2949f2cace6.js";
        if (28646 === e) return "3ebcc6f1b5464f7a.js";
        if (12942 === e) return "311ef6f58098e557.js";
        if (49830 === e) return "74a8e430bdf422d1.js";
        if (39314 === e) return "134a0aaa27142845.js";
        if (85225 === e) return "630c9ae2efbb7a86.vendor.js";
        if (45085 === e) return "174237372733965f.js";
        if (61615 === e) return "df5738a1fe8eb442.js";
        if (52358 === e) return "1d22ddbdd2dd9427.js";
        if (52356 === e) return "6a7cf22548db51c0.js";
        if (49392 === e) return "722891b0715051a3.js";
        if (70665 === e) return "2e3f5e8b7a758b9a.js";
        if (81623 === e) return "289d28d9c336c744.js";
        if (97751 === e) return "59539209121830f9.js";
        if (48376 === e) return "23729442233188de.js";
        if (63891 === e) return "d119ce011af1d593.js";
        if (47604 === e) return "25e8945b41b90890.js";
        if (6151 === e) return "d23298b7540c940e.js";
        if (61442 === e) return "96179e451a880907.js";
        if (29046 === e) return "cd8e7882baa1d54a.js";
        if (10412 === e) return "9181220faa6c221f.js";
        if (3465 === e) return "d24243cc4eb629ff.js";
        if (3905 === e) return "1f0649e59f136a28.js";
        if (53697 === e) return "b124815dd648e769.js";
        if (67115 === e) return "02c8e6612298492a.js";
        if (83191 === e) return "0d667e87bb6f40f9.js";
        if (32255 === e) return "1a86896ff18a4d60.js";
        if (33581 === e) return "b37b30e283fbf7af.js";
        if (73539 === e) return "b829cb98bfd20fbf.js";
        if (35672 === e) return "4fd71e8478c43850.js";
        if (83126 === e) return "63e7eec9f2e12fe5.js";
        if (49210 === e) return "bfa137fe0c6dafaf.js";
        if (49350 === e) return "d33a9f7e473c57e8.js";
        if (42283 === e) return "bff8cbec87ea3ece.js";
        if (89840 === e) return "48c209985343ff88.js";
        if (10785 === e) return "4c0e6f498e277111.js";
        if (42617 === e) return "984e5f7ca95aab1f.js";
        if (19326 === e) return "d7b408069a369355.js";
        if (25360 === e) return "ef59ae8559bc1e06.js";
        if (15816 === e) return "6c4ee02c144a0f94.js";
        if (83785 === e) return "145de9484badf685.js";
        if (98384 === e) return "c932969f6d93c2b2.js";
        if (39927 === e) return "fa5f8c98129823d5.js";
        if (30203 === e) return "d004bf5629168c81.js";
        if (58899 === e) return "fd4df2963a7834af.js";
        if (80978 === e) return "d721a8cb558ad1b8.js";
        if (34449 === e) return "75866f0b1c720387.js";
        if (5925 === e) return "da2e89401c85a606.js";
        if (52595 === e) return "3d851bc1073e6854.js";
        if (39412 === e) return "f4ca3cb87d154751.js";
        if (70038 === e) return "08f392ed49ed14d8.js";
        if (21877 === e) return "2b6eed9d0c5a50a9.js";
        if (12894 === e) return "45e18970abbc97b5.js";
        if (44374 === e) return "b34d1ed2656359c8.js";
        if (67587 === e) return "0db06a8fe05eadaa.js";
        if (38207 === e) return "03c00f0e280918af.js";
        if (99925 === e) return "417fc56c15c38881.js";
        if (46384 === e) return "12ce428762a340d9.js";
        if (67896 === e) return "2c39e9674a44d496.js";
        if (84151 === e) return "5d9ec583030add62.js";
        if (63963 === e) return "e1ed0bc4ae4d5d22.js";
        if (61372 === e) return "744da0c6a09b941a.js";
        if (14433 === e) return "690d42b208317f9d.js";
        if (63299 === e) return "2b8c72b3a572b62d.js";
        if (90063 === e) return "b11a4d3c5f11545f.js";
        if (68255 === e) return "627b58b94ee0c5f3.js";
        if (10188 === e) return "1a28887e0d1cf5ee.js";
        if (58911 === e) return "069f372d97fd8ce2.js";
        if (20284 === e) return "a2d9b5054b4741ce.js";
        if (67810 === e) return "44ad2f275c678c38.js";
        if (85140 === e) return "b24f2f437d4999b5.js";
        if (14842 === e) return "5d3ba0a3cd456910.js";
        if (77367 === e) return "4cd1c9ea5fcbcd34.js";
        if (47845 === e) return "1b1f8628d309088d.js";
        if (69774 === e) return "180401596ff5af38.js";
        if (29179 === e) return "2ee4fdfdbcd60042.js";
        if (93060 === e) return "5b5f698868e48827.js";
        if (97412 === e) return "a4fcfa48ffd3d0ec.js";
        if (99137 === e) return "69a4bcd455fc029e.js";
        if (57257 === e) return "c9def26bb46195ae.js";
        if (83296 === e) return "bd44929c5c193e88.js";
        if (79101 === e) return "d58ed6cd0dac4029.js";
        if (38423 === e) return "3b8361d675c81ef9.js";
        if (28338 === e) return "3bc900731b070cf4.js";
        if (26271 === e) return "495d88444f521da9.js";
        if (61433 === e) return "3eb632d9e6f40d50.js";
        if (49235 === e) return "cc7c86301700d033.js";
        if (19750 === e) return "6ea199a6de9f827e.js";
        if (65133 === e) return "7fd369cceb972d8b.js";
        if (10242 === e) return "2f88e6e0eb55180e.js";
        if (19827 === e) return "20196a127979095f.js";
        if (20520 === e) return "1d7061d4dc7c4c3e.js";
        if (91821 === e) return "1d798c2050a0618f.js";
        if (80117 === e) return "a49c599cf9543254.js";
        if (92815 === e) return "1f65f112ec498328.js";
        if (35011 === e) return "e7ef26c902fa69cb.js";
        if (59981 === e) return "e49518b0eab699fb.vendor.js";
        if (2956 === e) return "2b48f39ef3d88294.vendor.js";
        if (45699 === e) return "db06903b905e5507.js";
        if (45366 === e) return "7cdcd7b0a429cbae.vendor.js";
        if (21829 === e) return "0f14e3ddd0a623d4.js";
        if (56782 === e) return "667b0a707b1719eb.js";
        if (50634 === e) return "510f3c65a200981a.js";
        if (87246 === e) return "ee6e3355f0532c29.js";
        if (38660 === e) return "d1224a17c8c7f916.js";
        if (60650 === e) return "66080ed0882a942f.js";
        if (87911 === e) return "2fbf2ea0dc8031f9.js";
        if (37438 === e) return "3d9baf3ebe0746f7.js";
        if (73825 === e) return "0a8fddd4f9aaa666.js";
        if (57914 === e) return "6dca992bb20f373a.js";
        if (37906 === e) return "437835d380644d5b.js";
        if (77181 === e) return "f9b3980b92557aa1.js";
        if (19656 === e) return "e535e0b881aad393.js";
        if (76301 === e) return "b88343fe8e6d04d4.js";
        if (32901 === e) return "db179451d850a6a3.js";
        if (24459 === e) return "b19ba81a67fbfd92.js";
        if (1794 === e) return "badb90010f14b57e.js";
        if (96826 === e) return "c98064e9889c02b9.vendor.js";
        if (47798 === e) return "12e355d8ece7a05b.js";
        if (14408 === e) return "1987112260a58368.js";
        if (91969 === e) return "0140d7c866bd0627.js";
        if (89303 === e) return "b8ce26fd07bc890b.js";
        if (57399 === e) return "3f7b74f7e5d7ba55.js";
        if (19289 === e) return "6c978a0ec0acce1e.js";
        if (60205 === e) return "4cb2300718933be5.js";
        if (13794 === e) return "2d395eae5a8b1220.js";
        if (10316 === e) return "ed8165688aa76b2c.js";
        if (61316 === e) return "217eb8a034534443.js";
        if (47523 === e) return "8903e2e71b11aaa2.js";
        if (2906 === e) return "f67cc71888ca56ab.js";
        if (4450 === e) return "e2f51ca48b6c7087.js";
        if (45749 === e) return "fec51175973236df.js";
        if (50463 === e) return "3306fe457aff725c.js";
        if (38734 === e) return "e650b3683e8a526a.js";
        if (47510 === e) return "e1af08db73447187.js";
        if (218 === e) return "4707b3b4b9ac6d19.js";
        if (68629 === e) return "d5ddc543ff1007f9.js";
        if (61161 === e) return "9f88f7df3ca67d71.js";
        if (16621 === e) return "c2ef1dd849641220.js";
        if (13073 === e) return "e368aa53cfc7a9bf.js";
        if (53256 === e) return "27091b03dd524586.js";
        if (14902 === e) return "1d640d8b91f37fe0.js";
        if (14955 === e) return "c6e310ddbf449bac.js"
    }, c.miniCssF = e => {
        if (50869 === e) return "d47fa7f5e61148d4.ltr.css";
        if ({
                61454: 1,
                68772: 1,
                85225: 1,
                59981: 1,
                2956: 1,
                45366: 1,
                96826: 1
            }[e]) return "ef46db3751d8e999.vendor.ltr.css";
        if ({
                71059: 1,
                21023: 1,
                30270: 1,
                32915: 1,
                28646: 1,
                12942: 1,
                49830: 1,
                39314: 1,
                45085: 1,
                61615: 1,
                52358: 1,
                52356: 1,
                70665: 1,
                81623: 1,
                97751: 1,
                48376: 1,
                63891: 1,
                47604: 1,
                6151: 1,
                61442: 1,
                10412: 1,
                3465: 1,
                3905: 1,
                53697: 1,
                67115: 1,
                83191: 1,
                32255: 1,
                33581: 1,
                73539: 1,
                35672: 1,
                83126: 1,
                49350: 1,
                42283: 1,
                89840: 1,
                10785: 1,
                42617: 1,
                19326: 1,
                25360: 1,
                15816: 1,
                83785: 1,
                98384: 1,
                39927: 1,
                30203: 1,
                58899: 1,
                80978: 1,
                34449: 1,
                5925: 1,
                52595: 1,
                39412: 1,
                70038: 1,
                21877: 1,
                12894: 1,
                44374: 1,
                67587: 1,
                38207: 1,
                99925: 1,
                46384: 1,
                67896: 1,
                84151: 1,
                63963: 1,
                61372: 1,
                14433: 1,
                63299: 1,
                90063: 1,
                68255: 1,
                10188: 1,
                58911: 1,
                20284: 1,
                67810: 1,
                85140: 1,
                14842: 1,
                77367: 1,
                47845: 1,
                69774: 1,
                29179: 1,
                93060: 1,
                97412: 1,
                99137: 1,
                57257: 1,
                83296: 1,
                79101: 1,
                38423: 1,
                26271: 1,
                61433: 1,
                49235: 1,
                19750: 1,
                10242: 1,
                19827: 1,
                91821: 1,
                92815: 1,
                45699: 1,
                21829: 1,
                56782: 1,
                87246: 1,
                38660: 1,
                60650: 1,
                87911: 1,
                37438: 1,
                73825: 1,
                57914: 1,
                37906: 1,
                77181: 1,
                19656: 1,
                32901: 1,
                24459: 1,
                47798: 1,
                89303: 1,
                57399: 1,
                19289: 1,
                13794: 1,
                10316: 1,
                61316: 1,
                47523: 1,
                2906: 1,
                4450: 1,
                45749: 1,
                50463: 1,
                38734: 1,
                47510: 1,
                218: 1,
                68629: 1,
                61161: 1,
                16621: 1,
                13073: 1,
                53256: 1,
                14902: 1,
                14955: 1
            }[e]) return "ef46db3751d8e999.ltr.css";
        if (50971 === e) return "638e8938c76a575e.ltr.css";
        if (76703 === e) return "784ade8bd24ba7d6.ltr.css";
        if (49392 === e) return "e71066744fca056b.ltr.css";
        if (29046 === e) return "f6e522ba1b73f662.ltr.css";
        if (49210 === e) return "5f1d4839e07de62c.ltr.css";
        if (28338 === e) return "71dec1f5d11e3f66.ltr.css";
        if (65133 === e) return "05624d166fe81780.ltr.css";
        if (20520 === e) return "f8678f5d2a496896.ltr.css";
        if (80117 === e) return "aed61a49fdfc513b.ltr.css";
        if (35011 === e) return "ca10385ab7f3657c.ltr.css";
        if (50634 === e) return "5b2241d885919c07.ltr.css";
        if (76301 === e) return "6cd95ec3bdfd8887.ltr.css";
        if (1794 === e) return "5b7fe8f909b06739.ltr.css";
        if (14408 === e) return "9094dc9ec76e31ae.ltr.css";
        if (91969 === e) return "924c43291449318d.ltr.css";
        if (60205 === e) return "ee8b17ce4967cfe1.ltr.css"
    }, c.miniCssFRtl = e => {
        if (98581 === e) return "c166e5d20ad58f4e.runtime.rtl.css";
        if (69588 === e) return "c166e5d20ad58f4e.i3d79q.vendor.rtl.css";
        if (25436 === e) return "8e54262212aed57f.vendor.rtl.css";
        if (95433 === e) return "c166e5d20ad58f4e.5a9ync.vendor.rtl.css";
        if (21389 === e) return "36ad98b393748ad6.rtl.css";
        if (50869 === e) return "4f05c1b2bf63d608.rtl.css";
        if ({
                61454: 1,
                68772: 1,
                85225: 1,
                59981: 1,
                2956: 1,
                45366: 1,
                96826: 1
            }[e]) return "c166e5d20ad58f4e.vendor.rtl.css";
        if ({
                71059: 1,
                21023: 1,
                30270: 1,
                32915: 1,
                28646: 1,
                12942: 1,
                49830: 1,
                39314: 1,
                45085: 1,
                61615: 1,
                52358: 1,
                52356: 1,
                70665: 1,
                81623: 1,
                97751: 1,
                48376: 1,
                63891: 1,
                47604: 1,
                6151: 1,
                61442: 1,
                10412: 1,
                3465: 1,
                3905: 1,
                53697: 1,
                67115: 1,
                83191: 1,
                32255: 1,
                33581: 1,
                73539: 1,
                35672: 1,
                83126: 1,
                49350: 1,
                42283: 1,
                89840: 1,
                10785: 1,
                42617: 1,
                19326: 1,
                25360: 1,
                15816: 1,
                83785: 1,
                98384: 1,
                39927: 1,
                30203: 1,
                58899: 1,
                80978: 1,
                34449: 1,
                5925: 1,
                52595: 1,
                39412: 1,
                70038: 1,
                21877: 1,
                12894: 1,
                44374: 1,
                67587: 1,
                38207: 1,
                99925: 1,
                46384: 1,
                67896: 1,
                84151: 1,
                63963: 1,
                61372: 1,
                14433: 1,
                63299: 1,
                90063: 1,
                68255: 1,
                10188: 1,
                58911: 1,
                20284: 1,
                67810: 1,
                85140: 1,
                14842: 1,
                77367: 1,
                47845: 1,
                69774: 1,
                29179: 1,
                93060: 1,
                97412: 1,
                99137: 1,
                57257: 1,
                83296: 1,
                79101: 1,
                38423: 1,
                26271: 1,
                61433: 1,
                49235: 1,
                19750: 1,
                10242: 1,
                19827: 1,
                91821: 1,
                92815: 1,
                45699: 1,
                21829: 1,
                56782: 1,
                87246: 1,
                38660: 1,
                60650: 1,
                87911: 1,
                37438: 1,
                73825: 1,
                57914: 1,
                37906: 1,
                77181: 1,
                19656: 1,
                32901: 1,
                24459: 1,
                47798: 1,
                89303: 1,
                57399: 1,
                19289: 1,
                13794: 1,
                10316: 1,
                61316: 1,
                47523: 1,
                2906: 1,
                4450: 1,
                45749: 1,
                50463: 1,
                38734: 1,
                47510: 1,
                218: 1,
                68629: 1,
                61161: 1,
                16621: 1,
                13073: 1,
                53256: 1,
                14902: 1,
                14955: 1
            }[e]) return "c166e5d20ad58f4e.rtl.css";
        if (50971 === e) return "1e246b15020f607d.rtl.css";
        if (76703 === e) return "25b189ed8191fa10.rtl.css";
        if (49392 === e) return "b53e0b8f14174717.rtl.css";
        if (29046 === e) return "1991a15a9b55f670.rtl.css";
        if (49210 === e) return "b4bd268b7e5afaa4.rtl.css";
        if (28338 === e) return "7cf7805937173758.rtl.css";
        if (65133 === e) return "5e44a47af6e0da97.rtl.css";
        if (20520 === e) return "29bdbb1d75c8c7a3.rtl.css";
        if (80117 === e) return "7dac84e36568326f.rtl.css";
        if (35011 === e) return "be92cdc2c813e15f.rtl.css";
        if (50634 === e) return "3759df5a77daebac.rtl.css";
        if (76301 === e) return "24d8d7309fb8ff62.rtl.css";
        if (1794 === e) return "b197b394e4f55ce1.rtl.css";
        if (14408 === e) return "918171a1aa694966.rtl.css";
        if (91969 === e) return "d41a1c13df702638.rtl.css";
        if (60205 === e) return "272adea3752f60f0.rtl.css"
    }, c.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), c.hmd = e => {
        if (!(e = Object.create(e)).children) e.children = [];
        return Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: () => {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), f = {}, n = "@canva/web:", c.l = (e, r, t, s) => {
        if (!f[e]) {
            var i, a;
            if (void 0 !== t)
                for (var d = document.getElementsByTagName("script"), u = 0; u < d.length; u++) {
                    var o = d[u];
                    if (o.getAttribute("src") == e || o.getAttribute("data-webpack") == n + t) {
                        i = o;
                        break
                    }
                }
            if (!i) {
                if (a = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, c.nc) i.setAttribute("nonce", c.nc);
                i.setAttribute("data-webpack", n + t), i.src = e
            }
            f[e] = [r];
            var l = (r, t) => {
                    i.onerror = i.onload = null, clearTimeout(b);
                    var n = f[e];
                    if (delete f[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(t))), r) return r(t)
                },
                b = setTimeout(l.bind(null, void 0, {
                    type: "timeout",
                    target: i
                }), 12e4);
            i.onerror = l.bind(null, i.onerror), i.onload = l.bind(null, i.onload), a && document.head.appendChild(i)
        } else f[e].push(r)
    }, c.r = e => {
        if ("undefined" != typeof Symbol && Symbol.toStringTag) Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.nmd = e => {
        if (e.paths = [], !e.children) e.children = [];
        return e
    }, (() => {
        const e = c.e,
            r = function e(r, t, f) {
                return r().catch((function(n) {
                    return 0 === f ? Promise.reject(n) : (s = t, new Promise((function(e) {
                        setTimeout(e, s)
                    }))).then((function() {
                        return e(r, t, f - 1)
                    }));
                    var s
                }))
            };
        c.e = function(t) {
            return r((function() {
                return e(t)
            }), 1e3, 5)
        }
    })(), c.p = "", (() => {
        if (self.__batch_chunks__) ! function(e, r, t, f, n, s, i, c, a) {
            const d = e.l;
            let u = [],
                o = [];
            const l = [];
            for (const O of document.head.querySelectorAll('link[rel="prefetch"][href]')) {
                const e = O.getAttribute("href");
                e && l.push(e)
            }
            let b = e => document.head.appendChild(e);
            e.l = function(e, r, n, i) {
                for (let t = 0; t < l.length; t++)
                    if (l[t].endsWith(e)) return l.splice(t, 1), d(e, r, n, i);
                if (t) {
                    if (0 === u.length) Promise.resolve().then((() => {
                        k(u, p), u = [], h = 0
                    }));
                    const r = y(e);
                    if (u.length >= 1 && h + r > s || u.length >= f) k(u, p), u = [], h = 0;
                    h += r
                } else {
                    if (j++ < 10) return d(e, r, n, i);
                    if (0 === u.length) setTimeout((() => w(u, p)), 1)
                }
                u.push({
                    src: e,
                    callback: function(t) {
                        if ("load" === t.type) r(t);
                        else window.batchFailedAssetCount = (window.batchFailedAssetCount || 0) + 1, d(e, r, n, i)
                    },
                    originalLoad: () => {
                        d(e, r, n, i)
                    }
                })
            }, e.loadCss = function(e, r) {
                const n = e.getAttribute("href");
                if (b = r || b, t) {
                    if (0 === o.length) Promise.resolve().then((() => {
                        k(o, v), o = [], g = 0
                    }));
                    const e = y(n);
                    if (o.length >= 1 && g + e > s || o.length >= f) k(o, v), o = [], g = 0;
                    g += e
                } else {
                    if (m++ < 15) return r(e);
                    if (0 === o.length) setTimeout((() => w(o, v)), 1)
                }
                o.push({
                    src: n,
                    callback: t => {
                        if ("load" === t.type) e.onload && e.onload(t);
                        else r(e)
                    },
                    originalLoad: () => {
                        r(e)
                    }
                })
            };
            let j = 0,
                h = 0;

            function p(e, t) {
                const f = document.createElement("script");
                let n;
                const s = e => {
                    f.onerror = f.onload = null, clearTimeout(n), f.parentNode && f.parentNode.removeChild(f), t("string" == typeof e ? {
                        type: "error",
                        target: {}
                    } : e)
                };
                f.onload = f.onerror = s, f.src = e, f.async = !1, n = setTimeout((() => s({
                    type: "timeout",
                    target: f
                })), r), document.head.appendChild(f)
            }
            let m = 0,
                g = 0;

            function v(e, r) {
                const t = document.createElement("link");
                t.onload = t.onerror = e => r(e), t.href = e, t.rel = "stylesheet", b(t)
            }

            function y(e) {
                const r = n(),
                    t = e.substring(r.length);
                return t ? i[t] || 0 : 0
            }

            function _() {
                const e = n(),
                    r = new URL(window.location.href);
                if (null == e ? void 0 : e.startsWith("http")) {
                    const {
                        protocol: r,
                        host: t
                    } = new URL(e);
                    return `${r}//chunk-composing.${t.split(".").slice(-2).join(".")}`
                } else if (["localhost", "127.0.0.1"].includes(r.hostname) && r.searchParams.get("pageLoadWorkerUrl")) return r.searchParams.get("pageLoadWorkerUrl");
                else return r.origin
            }
            async function w(e, r) {
                const t = n();
                let d, u = 0,
                    o = [];
                try {
                    d = self.navigator.serviceWorker
                } catch {}
                const l = c && (null == d ? void 0 : d.controller) ? await async function(e) {
                    const r = await caches.open(a),
                        t = [];
                    for (const f of e)
                        if (await r.match(f.src)) f.originalLoad();
                        else t.push(f);
                    return t
                }(e) : e;
                for (const n of l) {
                    const e = n.src.substring(t.length),
                        r = e ? i[e] || 0 : 0;
                    if (o.length >= 1 && u + r > s || o.length >= f) b(o), o = [], u = 0;
                    o.push(n), u += r
                }

                function b(e) {
                    if (1 === e.length) return void e[0].originalLoad();
                    const f = _(),
                        n = e.map((({
                            src: e
                        }) => e.substring(t.length))).join("+");
                    r(`${f}/chunk-batch/${n}`, (r => {
                        for (const {
                                callback: t,
                                src: f
                            } of e) t({
                            type: r.type,
                            target: {
                                src: f,
                                href: f
                            }
                        })
                    }))
                }
                o.length && b(o), e.length = 0
            }

            function k(e, r) {
                if (0 === e.length) return;
                const t = n();
                if (1 !== e.length) r(`${_()}/chunk-batch/${e.map((({src:e})=>e.substring(t.length))).join("+")}`, (r => {
                    for (const {
                            callback: t,
                            src: f
                        } of e) t({
                        type: r.type,
                        target: {
                            src: f,
                            href: f
                        }
                    })
                }));
                else e[0].originalLoad()
            }
        }(c, 12e4, self.__sync_batch_chunks__, 40, (() => c.p), 10485760, {
            "1f1a18dc0034ca77.ltr.css": 451948,
            "b2fefcfe35741ef5.js": 13411911,
            "36ad98b393748ad6.rtl.css": 451960,
            "b51adf57e88b218e.runtime.js": 74503,
            "a0684b0780c739e9.vendor.ltr.css": 15361,
            "ee20eabed984b044.vendor.js": 2219515,
            "8e54262212aed57f.vendor.rtl.css": 15361,
            "411de7fe679f1413.5a9ync.vendor.js": 85008,
            "c0feee7212ef7ec1.i3d79q.vendor.js": 705391,
            "d47fa7f5e61148d4.ltr.css": 7483,
            "1a6258dbcf662f6b.js": 36630,
            "4f05c1b2bf63d608.rtl.css": 7483,
            "048252aca513298a.vendor.js": 158490,
            "68f927d4d76307b6.vendor.js": 125594,
            "2d09d0e5bb3908fd.js": 122358,
            "638e8938c76a575e.ltr.css": 412,
            "cd0871fdf1035ea6.js": 170822,
            "1e246b15020f607d.rtl.css": 414,
            "784ade8bd24ba7d6.ltr.css": 1069,
            "eb8cb08b9b2ce20f.js": 20793,
            "25b189ed8191fa10.rtl.css": 1069,
            "c6c5d2949f2cace6.js": 302133,
            "77d128da0c8600f5.js": 13577,
            "3ebcc6f1b5464f7a.js": 192988,
            "e1af08db73447187.js": 77271,
            "4707b3b4b9ac6d19.js": 91904,
            "d5ddc543ff1007f9.js": 70244,
            "9f88f7df3ca67d71.js": 1467,
            "311ef6f58098e557.js": 12247,
            "74a8e430bdf422d1.js": 40882,
            "134a0aaa27142845.js": 29940,
            "630c9ae2efbb7a86.vendor.js": 168645,
            "e71066744fca056b.ltr.css": 3310,
            "722891b0715051a3.js": 1791074,
            "b53e0b8f14174717.rtl.css": 3310,
            "df5738a1fe8eb442.js": 7482,
            "6a7cf22548db51c0.js": 102928,
            "1d22ddbdd2dd9427.js": 9306,
            "174237372733965f.js": 1315,
            "2e3f5e8b7a758b9a.js": 112559,
            "59539209121830f9.js": 148081,
            "289d28d9c336c744.js": 43385,
            "23729442233188de.js": 40393,
            "d119ce011af1d593.js": 137525,
            "f6e522ba1b73f662.ltr.css": 322,
            "cd8e7882baa1d54a.js": 73595,
            "1991a15a9b55f670.rtl.css": 322,
            "d23298b7540c940e.js": 1779,
            "1a86896ff18a4d60.js": 192358,
            "d24243cc4eb629ff.js": 872,
            "0d667e87bb6f40f9.js": 5251,
            "b37b30e283fbf7af.js": 31452,
            "02c8e6612298492a.js": 11890,
            "b124815dd648e769.js": 6242,
            "1f0649e59f136a28.js": 5761,
            "96179e451a880907.js": 17110,
            "9181220faa6c221f.js": 24031,
            "b829cb98bfd20fbf.js": 64243,
            "4fd71e8478c43850.js": 13382,
            "63e7eec9f2e12fe5.js": 6031,
            "5f1d4839e07de62c.ltr.css": 2196,
            "bfa137fe0c6dafaf.js": 25745,
            "b4bd268b7e5afaa4.rtl.css": 2196,
            "d33a9f7e473c57e8.js": 105936,
            "bff8cbec87ea3ece.js": 19638,
            "48c209985343ff88.js": 22610,
            "4c0e6f498e277111.js": 1648,
            "984e5f7ca95aab1f.js": 1680,
            "d7b408069a369355.js": 1449,
            "ef59ae8559bc1e06.js": 1448,
            "6c4ee02c144a0f94.js": 1447,
            "145de9484badf685.js": 1445,
            "c932969f6d93c2b2.js": 1445,
            "fa5f8c98129823d5.js": 1561,
            "d004bf5629168c81.js": 1650,
            "fd4df2963a7834af.js": 1448,
            "d721a8cb558ad1b8.js": 1447,
            "75866f0b1c720387.js": 1458,
            "da2e89401c85a606.js": 1448,
            "3d851bc1073e6854.js": 1450,
            "f4ca3cb87d154751.js": 1554,
            "08f392ed49ed14d8.js": 1552,
            "2b6eed9d0c5a50a9.js": 1537,
            "45e18970abbc97b5.js": 1453,
            "b34d1ed2656359c8.js": 1627,
            "0db06a8fe05eadaa.js": 1728,
            "03c00f0e280918af.js": 1440,
            "417fc56c15c38881.js": 1539,
            "12ce428762a340d9.js": 1586,
            "2c39e9674a44d496.js": 1674,
            "5d9ec583030add62.js": 1674,
            "e1ed0bc4ae4d5d22.js": 1684,
            "744da0c6a09b941a.js": 1585,
            "690d42b208317f9d.js": 1781,
            "2b8c72b3a572b62d.js": 1570,
            "b11a4d3c5f11545f.js": 1671,
            "627b58b94ee0c5f3.js": 1626,
            "1a28887e0d1cf5ee.js": 1627,
            "a2d9b5054b4741ce.js": 181233,
            "71dec1f5d11e3f66.ltr.css": 360,
            "3bc900731b070cf4.js": 387788,
            "7cf7805937173758.rtl.css": 360,
            "b24f2f437d4999b5.js": 245723,
            "a4fcfa48ffd3d0ec.js": 90304,
            "5b5f698868e48827.js": 513993,
            "180401596ff5af38.js": 85049,
            "c9def26bb46195ae.js": 24249,
            "bd44929c5c193e88.js": 170140,
            "3b8361d675c81ef9.js": 2185,
            "2ee4fdfdbcd60042.js": 6218,
            "069f372d97fd8ce2.js": 10118,
            "1b1f8628d309088d.js": 30028,
            "4cd1c9ea5fcbcd34.js": 10906,
            "495d88444f521da9.js": 116112,
            "d58ed6cd0dac4029.js": 1091,
            "5d3ba0a3cd456910.js": 39451,
            "69a4bcd455fc029e.js": 23635,
            "3eb632d9e6f40d50.js": 148100,
            "cc7c86301700d033.js": 298216,
            "05624d166fe81780.ltr.css": 698,
            "7fd369cceb972d8b.js": 3846,
            "5e44a47af6e0da97.rtl.css": 698,
            "20196a127979095f.js": 327099,
            "2f88e6e0eb55180e.js": 8299,
            "6ea199a6de9f827e.js": 8324,
            "f8678f5d2a496896.ltr.css": 355,
            "1d7061d4dc7c4c3e.js": 319021,
            "29bdbb1d75c8c7a3.rtl.css": 355,
            "aed61a49fdfc513b.ltr.css": 355,
            "a49c599cf9543254.js": 299269,
            "7dac84e36568326f.rtl.css": 355,
            "1d798c2050a0618f.js": 80024,
            "ca10385ab7f3657c.ltr.css": 354,
            "e7ef26c902fa69cb.js": 68685,
            "be92cdc2c813e15f.rtl.css": 354,
            "1f65f112ec498328.js": 3520,
            "db06903b905e5507.js": 207957,
            "e49518b0eab699fb.vendor.js": 12754,
            "2b48f39ef3d88294.vendor.js": 18823,
            "0f14e3ddd0a623d4.js": 210552,
            "7cdcd7b0a429cbae.vendor.js": 13455,
            "667b0a707b1719eb.js": 375288,
            "5b2241d885919c07.ltr.css": 360,
            "510f3c65a200981a.js": 184158,
            "3759df5a77daebac.rtl.css": 360,
            "ee6e3355f0532c29.js": 250711,
            "d1224a17c8c7f916.js": 78007,
            "66080ed0882a942f.js": 11629,
            "2fbf2ea0dc8031f9.js": 1327,
            "0a8fddd4f9aaa666.js": 1399,
            "6dca992bb20f373a.js": 1299,
            "437835d380644d5b.js": 1295,
            "f9b3980b92557aa1.js": 1389,
            "e535e0b881aad393.js": 1313,
            "6cd95ec3bdfd8887.ltr.css": 11646,
            "b88343fe8e6d04d4.js": 758688,
            "24d8d7309fb8ff62.rtl.css": 11646,
            "db179451d850a6a3.js": 1317,
            "b19ba81a67fbfd92.js": 41588,
            "5b7fe8f909b06739.ltr.css": 913,
            "badb90010f14b57e.js": 173740,
            "b197b394e4f55ce1.rtl.css": 913,
            "c98064e9889c02b9.vendor.js": 648073,
            "9094dc9ec76e31ae.ltr.css": 446,
            "1987112260a58368.js": 21469,
            "918171a1aa694966.rtl.css": 446,
            "12e355d8ece7a05b.js": 19177,
            "924c43291449318d.ltr.css": 263,
            "0140d7c866bd0627.js": 10944,
            "d41a1c13df702638.rtl.css": 263,
            "3f7b74f7e5d7ba55.js": 463257,
            "ee8b17ce4967cfe1.ltr.css": 8805,
            "4cb2300718933be5.js": 292976,
            "272adea3752f60f0.rtl.css": 8805,
            "c2ef1dd849641220.js": 1299,
            "ed8165688aa76b2c.js": 534824,
            "8903e2e71b11aaa2.js": 35920,
            "217eb8a034534443.js": 86189,
            "27091b03dd524586.js": 733,
            "f67cc71888ca56ab.js": 4794,
            "e2f51ca48b6c7087.js": 40504,
            "fec51175973236df.js": 194957,
            "1d640d8b91f37fe0.js": 6493,
            "c6e310ddbf449bac.js": 39265
        }, self.__check_cache_batch_chunks__, "assets-2")
    })(), (() => {
        const e = JSON.parse('{"2650":58899,"10588":35672,"16139":45699,"26307":61433,"26759":39927,"29203":60650,"33714":33581,"38844":19827,"46989":49210,"77732":50463,"78999":57399,"82986":28646,"83888":49392,"88780":32915,"100606":38660,"103478":38734,"110247":63891,"126802":99925,"144616":68772,"150721":70665,"150778":30203,"186873":19656,"201268":14433,"217517":56782,"223244":26271,"227900":42283,"229894":97751,"249007":87911,"250851":46384,"252935":32901,"254588":91969,"261760":52595,"266055":4450,"292270":48376,"305660":68629,"314854":38207,"317158":21877,"335146":12894,"340693":50869,"356430":89840,"363531":73825,"365475":16621,"368036":57914,"411625":218,"428405":47523,"432521":83126,"456572":14955,"460541":24459,"465530":90063,"467611":49350,"469546":53256,"482919":49235,"490896":50634,"502437":4450,"519561":20520,"520679":25360,"521746":10188,"535189":13073,"545058":80978,"555434":73539,"556151":52358,"563026":70038,"567764":39314,"571038":67587,"572534":14902,"582389":61442,"594403":63299,"605338":10316,"617807":52356,"621071":34449,"636287":61372,"647312":19326,"652365":44374,"652535":50971,"658506":71059,"678201":68255,"696820":61161,"697956":47510,"700123":21829,"730337":49830,"733653":87246,"738083":76301,"741114":37438,"744620":61454,"777985":39412,"796735":1794,"807817":45749,"819178":10785,"846915":14408,"858761":77181,"870064":42617,"877501":63963,"905923":84151,"910906":76703,"933618":67896,"938629":15816,"959820":83785,"973664":37906,"978457":98384,"988209":80117,"990570":5925,"994944":60205}'),
            r = JSON.parse('{"218":[21023,28646],"1794":[45085,85225],"2906":[61316],"2956":[59981],"3465":[],"3905":[29046],"4450":[2906],"5925":[],"6151":[],"10188":[],"10242":[],"10316":[13794,89303],"10412":[29046,61442],"10785":[],"12894":[],"12942":[],"13073":[],"13794":[],"14408":[47798,96826],"14433":[],"14842":[85140],"14902":[45749],"14955":[],"15816":[],"16621":[],"19289":[],"19326":[],"19656":[],"19750":[],"19827":[10242,14842,20284,32255,38423,3905,57257,65133,67810,69774],"20284":[29046,53697,58911],"20520":[10242,14842,19750,32255,38423,3905,57257,67115,67810,79101,83296,93060,99137],"21023":[],"21389":[],"21829":[35011,38423,45366,49350,83191,92815],"21877":[],"24459":[12942],"25360":[],"25436":[],"26271":[28338],"28338":[14842,32255,38423,3905,57257,67115,67810,77367,79101,83296,93060,97412,99137],"28646":[30270],"29046":[61615],"29179":[58911],"30203":[],"30270":[],"32255":[29046,3465,47604,6151,83191],"32901":[],"32915":[21023,30270],"33581":[10412,32255,3905,67115],"34449":[],"35011":[29179,85140,89840],"35672":[],"37438":[],"37906":[],"38207":[],"38423":[],"38660":[19750,32255,38423,57257,83296,99137],"38734":[],"39314":[],"39412":[],"39927":[],"42283":[],"42617":[],"44374":[],"45085":[],"45366":[59981],"45699":[2956,35011,38423,49350,83191,92815],"45749":[],"46384":[],"47510":[28646],"47523":[19289,61316],"47604":[],"47798":[],"47845":[29046],"48376":[],"49210":[],"49235":[38423,3905,67115,93060,97412,99137],"49350":[],"49392":[45085,52356,85225],"49830":[12942],"50463":[],"50634":[32255,38423,57257,58911,67810,77367,79101,83296],"50869":[],"50971":[],"52356":[52358],"52358":[61615],"52595":[],"53256":[2906],"53697":[],"56782":[20284,29179,47604,47845,57257,69774,77367,83296,92815],"57257":[10412],"57399":[89303],"57914":[],"58899":[],"58911":[],"59981":[],"60205":[19289],"60650":[],"61161":[28646],"61316":[13794],"61372":[],"61433":[28338],"61442":[],"61454":[],"61615":[],"63299":[],"63891":[48376],"63963":[],"65133":[19750,77367,83296],"67115":[29046,53697],"67587":[],"67810":[],"67896":[],"68255":[],"68629":[28646],"68772":[],"69588":[],"69774":[],"70038":[],"70665":[],"71059":[],"73539":[3465],"73825":[],"76301":[],"76703":[],"77181":[],"77367":[],"79101":[],"80117":[10242,19750,20284,32255,38423,3905,57257,67810,79101,91821],"80978":[],"81623":[],"83126":[],"83191":[],"83296":[85140],"83785":[],"84151":[],"85140":[29046,81623],"85225":[],"87246":[20284,3465,38423,3905,47604,6151,65133,83191,91821],"87911":[],"89303":[],"89840":[],"90063":[],"91821":[83296,99137],"91969":[47798,96826],"92815":[],"93060":[20284,29179,47845,6151,85140],"95433":[],"96826":[],"97412":[85140],"97751":[81623],"98384":[],"99137":[69774,85140],"99925":[]}'),
            t = (e, f, n) => {
                if (!n.has(e)) return n.add(e), r[e].forEach((e => t(e, f, n))), f.push(e), f
            };
        c.me = function(r) {
            const f = e[r];
            if (null == f) return Promise.resolve(c(r));
            const n = t(f, [], new Set);
            return Promise.all(n.map((e => c.e(e)))).then((() => c(r)))
        }
    })(), (() => {
        const e = {};
        c.f.locale = function(r, t) {
            ! function(e, r, t) {
                if (null == r[e]) {
                    const t = self.cmsg;
                    if (!t || !t.assets) return;
                    const f = t.loaded,
                        n = t.locale || "en";
                    if (f && f[e + "_" + n]) return;
                    const s = t.assets[n] && t.assets[n][e] && t.assets[n][e].js;
                    if (!s) return;
                    r[e] = Promise.all(s.map((t => new Promise(((f, n) => {
                        const s = c.p + t;
                        c.l(s, (s => {
                            if ("load" === s.type) r[e] = 0, f();
                            else delete r[e], n(new Error(`Fail to load message files@${t}`))
                        }), "ensure-locale-" + e, e)
                    })))))
                }
                const f = r[e];
                if (f) t.push(f)
            }(r, e, t)
        }
    })(), (() => {
        let e = "undefined" != typeof self && void 0 !== self.document ? self.document.body.parentElement.getAttribute("dir") : "ltr";
        if ("ltr" !== e && "rtl" !== e) console.warn("Could not determine the direction of text, please check that the dir attribute is set on the html tag"), e = "ltr";
        if ("rtl" === e) c.miniCssF = c.miniCssFRtl
    })(), (() => {
        if ("undefined" != typeof document) {
            var e = e => new Promise(((r, t) => {
                    var f = c.miniCssF(e),
                        n = c.p + f;
                    if (((e, r) => {
                            for (var t = document.getElementsByTagName("link"), f = 0; f < t.length; f++) {
                                var n = (i = t[f]).getAttribute("data-href") || i.getAttribute("href");
                                if ("stylesheet" === i.rel && (n === e || n === r)) return i
                            }
                            var s = document.getElementsByTagName("style");
                            for (f = 0; f < s.length; f++) {
                                var i;
                                if ((n = (i = s[f]).getAttribute("data-href")) === e || n === r) return i
                            }
                        })(f, n)) return r();
                    ((e, r, t, f, n) => {
                        var s = document.createElement("link");
                        s.rel = "stylesheet", s.type = "text/css", s.onerror = s.onload = t => {
                                if (s.onerror = s.onload = null, "load" === t.type) f();
                                else {
                                    var i = t && ("load" === t.type ? "missing" : t.type),
                                        c = t && t.target && t.target.href || r,
                                        a = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                                    if (a.code = "CSS_CHUNK_LOAD_FAILED", a.type = i, a.request = c, s.parentNode) s.parentNode.removeChild(s);
                                    n(a)
                                }
                            }, s.href = r,
                            function(e) {
                                const r = e => {
                                    document.head.appendChild(e)
                                };
                                if (c.loadCss) c.loadCss(e, r);
                                else r(e)
                            }(s)
                    })(e, n, 0, r, t)
                })),
                r = {
                    98581: 0
                };
            c.f.miniCss = (t, f) => {
                if (r[t]) f.push(r[t]);
                else if (0 !== r[t] && {
                        1794: 1,
                        14408: 1,
                        20520: 1,
                        28338: 1,
                        29046: 1,
                        35011: 1,
                        49210: 1,
                        49392: 1,
                        50634: 1,
                        50869: 1,
                        50971: 1,
                        60205: 1,
                        65133: 1,
                        76301: 1,
                        76703: 1,
                        80117: 1,
                        91969: 1
                    }[t]) f.push(r[t] = e(t).then((() => {
                    r[t] = 0
                }), (e => {
                    throw delete r[t], e
                })))
            }
        }
    })(), (() => {
        var e = {
            98581: 0
        };
        c.f.j = (r, t) => {
            var f = c.o(e, r) ? e[r] : void 0;
            if (0 !== f)
                if (f) t.push(f[2]);
                else if (98581 != r) {
                var n = new Promise(((t, n) => f = e[r] = [t, n]));
                t.push(f[2] = n);
                var s = c.p + c.u(r),
                    i = new Error;
                c.l(s, (t => {
                    if (c.o(e, r)) {
                        if (0 !== (f = e[r])) e[r] = void 0;
                        if (f) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                                s = t && t.target && t.target.src;
                            i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + s + ")", i.name = "ChunkLoadError", i.type = n, i.request = s, f[1](i)
                        }
                    }
                }), "chunk-" + r, r)
            } else e[r] = 0
        }, c.O.j = r => 0 === e[r];
        var r = (r, t) => {
                var f, n, [s, i, a] = t,
                    d = 0;
                if (s.some((r => 0 !== e[r]))) {
                    for (f in i)
                        if (c.o(i, f)) c.m[f] = i[f];
                    if (a) var u = a(c)
                }
                if (r) r(t);
                for (; d < s.length; d++) {
                    if (n = s[d], c.o(e, n) && e[n]) e[n][0]();
                    e[n] = 0
                }
                return c.O(u)
            },
            t = self.webpackChunk_canva_web = self.webpackChunk_canva_web || [];
        t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
    })()
})();
//# sourceMappingURL=sourcemaps/b51adf57e88b218e.runtime.js.map