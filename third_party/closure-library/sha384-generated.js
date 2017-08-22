/* Generated from closure library commit c6c579a445d2a6415120753314f701eb0ae989bc */
var h = this;

function m(a) {
    var b = typeof a;
    if ("object" == b) if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" ==
        b && "undefined" == typeof a.call) return "object";
    return b
}

function n(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.v = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.u = function(a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d)
    }
};

function aa() {
    this.g = -1
};

function r(a, b, c) {
    return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
};

function v(a, b) {
    this.b = a | 0;
    this.a = b | 0
}
var ba = {}, w = {};

function x(a) {
    return -128 <= a && 128 > a ? r(ba, a, function(a) {
        return new v(a | 0, 0 > a ? -1 : 0)
    }) : new v(a | 0, 0 > a ? -1 : 0)
}

function y(a) {
    return isNaN(a) ? z() : a <= -A ? B() : a + 1 >= A ? ca() : 0 > a ? C(y(-a)) : new v(a % D | 0, a / D | 0)
}
var D = 4294967296,
    A = D * D / 2;

function z() {
    return r(w, da, function() {
        return x(0)
    })
}

function F() {
    return r(w, ea, function() {
        return x(1)
    })
}

function G() {
    return r(w, fa, function() {
        return x(-1)
    })
}

function ca() {
    return r(w, ga, function() {
        return new v(-1, 2147483647)
    })
}

function B() {
    return r(w, ha, function() {
        return new v(0, -2147483648)
    })
}

function H() {
    return r(w, ia, function() {
        return x(16777216)
    })
}
v.prototype.toString = function(a) {
    a = a || 10;
    if (2 > a || 36 < a) throw Error("radix out of range: " + a);
    if (I(this)) return "0";
    if (0 > this.a) {
        if (J(this, B())) {
            var b = y(a),
                c = K(this, b),
                b = L(c.multiply(b), this);
            return c.toString(a) + b.b.toString(a)
        }
        return "-" + C(this).toString(a)
    }
    for (var c = y(Math.pow(a, 6)), b = this, d = "";;) {
        var e = K(b, c),
            f = (L(b, e.multiply(c)).b >>> 0).toString(a),
            b = e;
        if (I(b)) return f + d;
        for (; 6 > f.length;) f = "0" + f;
        d = "" + f + d
    }
};

function M(a) {
    return 0 <= a.b ? a.b : D + a.b
}

function I(a) {
    return 0 == a.a && 0 == a.b
}

function J(a, b) {
    return a.a == b.a && a.b == b.b
}
v.prototype.compare = function(a) {
    if (J(this, a)) return 0;
    var b = 0 > this.a,
        c = 0 > a.a;
    return b && !c ? -1 : !b && c ? 1 : 0 > L(this, a).a ? -1 : 1
};

function C(a) {
    return J(a, B()) ? B() : (new v(~a.b, ~a.a)).add(F())
}
v.prototype.add = function(a) {
    var b = this.a >>> 16,
        c = this.a & 65535,
        d = this.b >>> 16,
        e = a.a >>> 16,
        f = a.a & 65535,
        g = a.b >>> 16;
    a = 0 + ((this.b & 65535) + (a.b & 65535));
    g = 0 + (a >>> 16) + (d + g);
    d = 0 + (g >>> 16);
    d += c + f;
    b = 0 + (d >>> 16) + (b + e) & 65535;
    return new v((g & 65535) << 16 | a & 65535, b << 16 | d & 65535)
};

function L(a, b) {
    return a.add(C(b))
}
v.prototype.multiply = function(a) {
    if (I(this) || I(a)) return z();
    if (J(this, B())) return 1 == (a.b & 1) ? B() : z();
    if (J(a, B())) return 1 == (this.b & 1) ? B() : z();
    if (0 > this.a) return 0 > a.a ? C(this).multiply(C(a)) : C(C(this).multiply(a));
    if (0 > a.a) return C(this.multiply(C(a)));
    if (0 > this.compare(H()) && 0 > a.compare(H())) return y((this.a * D + M(this)) * (a.a * D + M(a)));
    var b = this.a >>> 16,
        c = this.a & 65535,
        d = this.b >>> 16,
        e = this.b & 65535,
        f = a.a >>> 16,
        g = a.a & 65535,
        q = a.b >>> 16;
    a = a.b & 65535;
    var t, k, u, p;
    p = 0 + e * a;
    u = 0 + (p >>> 16) + d * a;
    k = 0 + (u >>> 16);
    u = (u & 65535) +
        e * q;
    k += u >>> 16;
    k += c * a;
    t = 0 + (k >>> 16);
    k = (k & 65535) + d * q;
    t += k >>> 16;
    k = (k & 65535) + e * g;
    t = t + (k >>> 16) + (b * a + c * q + d * g + e * f) & 65535;
    return new v((u & 65535) << 16 | p & 65535, t << 16 | k & 65535)
};

function K(a, b) {
    if (I(b)) throw Error("division by zero");
    if (I(a)) return z();
    if (J(a, B())) {
        if (J(b, F()) || J(b, G())) return B();
        if (J(b, B())) return F();
        var c;
        c = 1;
        if (0 == c) c = a;
        else {
            var d = a.a;
            c = 32 > c ? new v(a.b >>> c | d << 32 - c, d >> c) : new v(d >> c - 32, 0 <= d ? 0 : -1)
        }
        c = K(c, b).shiftLeft(1);
        if (J(c, z())) return 0 > b.a ? F() : G();
        a = L(a, b.multiply(c));
        return c.add(K(a, b))
    }
    if (J(b, B())) return z();
    if (0 > a.a) return 0 > b.a ? K(C(a), C(b)) : C(K(C(a), b));
    if (0 > b.a) return C(K(a, C(b)));
    for (d = z(); 0 <= a.compare(b);) {
        c = Math.max(1, Math.floor((a.a * D + M(a)) /
            (b.a * D + M(b))));
        for (var e = Math.ceil(Math.log(c) / Math.LN2), e = 48 >= e ? 1 : Math.pow(2, e - 48), f = y(c), g = f.multiply(b); 0 > g.a || 0 < g.compare(a);) c -= e, f = y(c), g = f.multiply(b);
        I(f) && (f = F());
        d = d.add(f);
        a = L(a, g)
    }
    return d
}
v.prototype.shiftLeft = function(a) {
    a &= 63;
    if (0 == a) return this;
    var b = this.b;
    return 32 > a ? new v(b << a, this.a << a | b >>> 32 - a) : new v(0, b << a - 32)
};
var ga = 1,
    ha = 2,
    da = 3,
    ea = 4,
    fa = 5,
    ia = 6;

function N(a, b) {
    this.g = 128;
    this.h = void 0 !== h.Uint8Array ? new Uint8Array(128) : Array(128);
    this.j = this.f = 0;
    this.c = [];
    this.l = a;
    this.s = [];
    this.o = O(b);
    this.i = !1;
    this.reset()
}
n(N, aa);
for (var P = [], Q = 0; 127 > Q; Q++) P[Q] = 0;
var R = function(a) {
    return Array.prototype.concat.apply(Array.prototype, arguments)
}([128], P);
N.prototype.reset = function() {
    this.j = this.f = 0;
    var a;
    a = this.o;
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        a = c
    } else a = [];
    this.c = a;
    this.i = !1
};
N.prototype.update = function(a, b) {
    b = void 0 !== b ? b : a.length;
    if (this.i) throw Error("this hasher needs to be reset");
    var c = this.f;
    if ("string" == typeof a) for (var d = 0; d < b; d++) {
            var e = a.charCodeAt(d);
            if (255 < e) throw Error("Characters must be in range [0,255]");
            this.h[c++] = e;
            c == this.g && (S(this), c = 0)
    } else if (d = m(a), "array" == d || "object" == d && "number" == typeof a.length) for (d = 0; d < b; d++) {
            e = a[d];
            if ("number" != typeof e || 0 > e || 255 < e || e != (e | 0)) throw Error("message must be a byte array");
            this.h[c++] = e;
            c == this.g && (S(this),
                c = 0)
    } else throw Error("message must be string or array");
    this.f = c;
    this.j += b
};
N.prototype.digest = function() {
    if (this.i) throw Error("this hasher needs to be reset");
    var a = 8 * this.j;
    112 > this.f ? this.update(R, 112 - this.f) : this.update(R, this.g - this.f + 112);
    for (var b = 127; 112 <= b; b--) this.h[b] = a & 255, a /= 256;
    S(this);
    for (var a = 0, c = Array(8 * this.l), b = 0; b < this.l; b++) {
        for (var d = this.c[b], e = d.a, d = d.b, f = 24; 0 <= f; f -= 8) c[a++] = e >> f & 255;
        for (f = 24; 0 <= f; f -= 8) c[a++] = d >> f & 255
    }
    this.i = !0;
    return c
};

function S(a) {
    for (var b = a.h, c = a.s, d = 0; 16 > d; d++) {
        var e = 8 * d;
        c[d] = new v(b[e + 4] << 24 | b[e + 5] << 16 | b[e + 6] << 8 | b[e + 7], b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3])
    }
    for (d = 16; 80 > d; d++) {
        var e = c[d - 15],
            b = e.b,
            e = e.a,
            f = c[d - 2],
            g = f.b,
            f = f.a;
        c[d] = a.m(c[d - 16], c[d - 7], new v(b >>> 1 ^ e << 31 ^ b >>> 8 ^ e << 24 ^ b >>> 7 ^ e << 25, e >>> 1 ^ b << 31 ^ e >>> 8 ^ b << 24 ^ e >>> 7), new v(g >>> 19 ^ f << 13 ^ f >>> 29 ^ g << 3 ^ g >>> 6 ^ f << 26, f >>> 19 ^ g << 13 ^ g >>> 29 ^ f << 3 ^ f >>> 6))
    }
    for (var b = a.c[0], e = a.c[1], g = a.c[2], f = a.c[3], q = a.c[4], t = a.c[5], k = a.c[6], u = a.c[7], d = 0; 80 > d; d++) var p = b.b,
    l = b.a, p = (new v(p >>>
        28 ^ l << 4 ^ l >>> 2 ^ p << 30 ^ l >>> 7 ^ p << 25, l >>> 28 ^ p << 4 ^ p >>> 2 ^ l << 30 ^ p >>> 7 ^ l << 25)).add(new v(b.b & e.b | e.b & g.b | b.b & g.b, b.a & e.a | e.a & g.a | b.a & g.a)), l = q.b, E = q.a, V = q.b, W = q.a, l = a.m(u, new v(l >>> 14 ^ E << 18 ^ l >>> 18 ^ E << 14 ^ E >>> 9 ^ l << 23, E >>> 14 ^ l << 18 ^ E >>> 18 ^ l << 14 ^ l >>> 9 ^ E << 23), new v(V & t.b | ~V & k.b, W & t.a | ~W & k.a), ja[d], c[d]), u = k, k = t, t = q, q = f.add(l), f = g, g = e, e = b, b = l.add(p);
    a.c[0] = a.c[0].add(b);
    a.c[1] = a.c[1].add(e);
    a.c[2] = a.c[2].add(g);
    a.c[3] = a.c[3].add(f);
    a.c[4] = a.c[4].add(q);
    a.c[5] = a.c[5].add(t);
    a.c[6] = a.c[6].add(k);
    a.c[7] = a.c[7].add(u)
}
N.prototype.m = function(a, b, c) {
    for (var d = (a.b ^ 2147483648) + (b.b ^ 2147483648), e = a.a + b.a, f = arguments.length - 1; 2 <= f; --f) d += arguments[f].b ^ 2147483648, e += arguments[f].a;
    arguments.length & 1 && (d += 2147483648);
    e += arguments.length >> 1;
    e += Math.floor(d / 4294967296);
    return new v(d, e)
};

function O(a) {
    for (var b = [], c = 0; c < a.length; c += 2) b.push(new v(a[c + 1], a[c]));
    return b
}
var ja = O([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
    1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909,
    1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270,
    289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591
]);

function T() {
    N.call(this, 6, ka)
}
n(T, N);
var ka = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];

function U(a) {
    var b = new T;
    b.update(a);
    return new Uint8Array(b.digest())
}
var X = ["ampSha384Digest"],
    Y = window || h;
X[0] in Y || !Y.execScript || Y.execScript("var " + X[0]);
for (var Z; X.length && (Z = X.shift());) X.length || void 0 === U ? Y = Y[Z] ? Y[Z] : Y[Z] = {} : Y[Z] = U;;
export

function base64(input) {
    return ampBase64(input)
};
export

function sha384(input) {
    return ampSha384Digest(input)
};
