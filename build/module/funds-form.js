import {S as t, i as e, s as n, e as s, a, c as l, b as r, d as c, f as o, g as i, h, j as u, n as f, k as m, o as d, l as p, m as g, x as v, p as $, t as y, q as b, r as E, u as w, v as x, w as I, y as D, z as _, A as C, B as V, C as P, D as M, E as N, F as k, G as S, H as F, I as T, J as A, K as R, L as B, M as G, N as j, O as q, P as O, Q as L, R as U, T as z} from './index-d31607ce.js';
import {p as H} from './hystmodal-75bc6505.js';
import {A as J} from './api-bacd081c.js';
import {N as K} from './notify-09240109.js';
import {f as W, r as Q, g as Y} from './utils-325d370b.js';
import {S as Z} from './SVG-11b7b78b.js';
import './index-3b14bfaf.js';
function X(t, e, n) {
    const s = t.slice();
    return s[1] = e[n][0],
    s[2] = e[n][1],
    s
}
function tt(t) {
    let e, n, a;
    return {
        c() {
            e = s('input'),
            this.h()
        },
        l(t) {
            e = l(t, 'INPUT', {
                type: !0,
                name: !0
            }),
            this.h()
        },
        h() {
            i(e, 'type', 'hidden'),
            i(e, 'name', n = t[1]),
            e.value = a = t[2]
        },
        m(t, n) {
            h(t, e, n)
        },
        p(t, s) {
            1 & s && n !== (n = t[1]) && i(e, 'name', n),
            1 & s && a !== (a = t[2]) && (e.value = a)
        },
        d(t) {
            t && o(e)
        }
    }
}
function et(t) {
    let e, n, d, p = Object.entries(t[0]), g = [];
    for (let e = 0; e < p.length; e += 1)
        g[e] = tt(X(t, p, e));
    return {
        c() {
            e = s('form');
            for (let t = 0; t < g.length; t += 1)
                g[t].c();
            n = a(),
            this.h()
        },
        l(t) {
            e = l(t, 'FORM', {
                name: !0,
                id: !0,
                action: !0,
                method: !0
            });
            var s = r(e);
            for (let t = 0; t < g.length; t += 1)
                g[t].l(s);
            n = c(s),
            s.forEach(o),
            this.h()
        },
        h() {
            i(e, 'name', 'FundsFormRedirectForm'),
            i(e, 'id', 'FundsFormRedirectForm'),
            i(e, 'action', d = t[0].url),
            i(e, 'method', 'POST')
        },
        m(t, s) {
            h(t, e, s);
            for (let t = 0; t < g.length; t += 1)
                g[t] && g[t].m(e, null);
            u(e, n)
        },
        p(t, [s]) {
            if (1 & s) {
                let a;
                for (p = Object.entries(t[0]),
                a = 0; a < p.length; a += 1) {
                    const l = X(t, p, a);
                    g[a] ? g[a].p(l, s) : (g[a] = tt(l),
                    g[a].c(),
                    g[a].m(e, n))
                }
                for (; a < g.length; a += 1)
                    g[a].d(1);
                g.length = p.length
            }
            1 & s && d !== (d = t[0].url) && i(e, 'action', d)
        },
        i: f,
        o: f,
        d(t) {
            t && o(e),
            m(g, t)
        }
    }
}
function nt(t, e, n) {
    let {formData: s} = e;
    return d(( () => {
        document.getElementById('FundsFormRedirectForm').submit()
    }
    )),
    t.$$set = t => {
        'formData'in t && n(0, s = t.formData)
    }
    ,
    [s]
}
class st extends t {
    constructor(t) {
        super(),
        e(this, t, nt, et, n, {
            formData: 0
        })
    }
}
function at(t) {
    let e, n, s;
    return {
        c() {
            e = p('svg'),
            n = p('use'),
            this.h()
        },
        l(t) {
            e = g(t, 'svg', {
                'data-tooltip-content': !0,
                class: !0,
                style: !0
            });
            var s = r(e);
            n = g(s, 'use', {
                'xmlns:xlink': !0,
                'xlink:href': !0
            }),
            r(n).forEach(o),
            s.forEach(o),
            this.h()
        },
        h() {
            i(n, 'xmlns:xlink', 'http://www.w3.org/1999/xlink'),
            v(n, 'xlink:href', t[0]),
            i(e, 'data-tooltip-content', t[3]),
            i(e, 'class', s = 'icon ' + t[4] + (t[2] ? ` ${t[2]}` : '')),
            i(e, 'style', t[1])
        },
        m(t, s) {
            h(t, e, s),
            u(e, n)
        },
        p(t, [a]) {
            1 & a && v(n, 'xlink:href', t[0]),
            8 & a && i(e, 'data-tooltip-content', t[3]),
            20 & a && s !== (s = 'icon ' + t[4] + (t[2] ? ` ${t[2]}` : '')) && i(e, 'class', s),
            2 & a && i(e, 'style', t[1])
        },
        i: f,
        o: f,
        d(t) {
            t && o(e)
        }
    }
}
const lt = /(?:.*).(svg)#(.*)/g;
function rt(t, e, n) {
    let s, a, {href: l} = e, {style: r=null} = e, {addClass: c=null} = e, {tooltip: o=null} = e;
    for (; null !== (a = lt.exec(l)); )
        a.index === lt.lastIndex && lt.lastIndex++,
        a && 'svg' === a[1] && (s = a[2]);
    return s || null === (a = /^#([a-z0-9\-]+)/g.exec(l)) || a && a[1] && (s = a[1]),
    t.$$set = t => {
        'href'in t && n(0, l = t.href),
        'style'in t && n(1, r = t.style),
        'addClass'in t && n(2, c = t.addClass),
        'tooltip'in t && n(3, o = t.tooltip)
    }
    ,
    [l, r, c, o, s]
}
class ct extends t {
    constructor(t) {
        super(),
        e(this, t, rt, at, n, {
            href: 0,
            style: 1,
            addClass: 2,
            tooltip: 3
        })
    }
}
function ot(t) {
    let e, n;
    return e = new st({
        props: {
            formData: t[4]
        }
    }),
    {
        c() {
            D(e.$$.fragment)
        },
        l(t) {
            _(e.$$.fragment, t)
        },
        m(t, s) {
            C(e, t, s),
            n = !0
        },
        p(t, n) {
            const s = {};
            16 & n && (s.formData = t[4]),
            e.$set(s)
        },
        i(t) {
            n || (y(e.$$.fragment, t),
            n = !0)
        },
        o(t) {
            E(e.$$.fragment, t),
            n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}
function it(t) {
    let e, n, f, m, d, p, g, v, $, x, I, D, _, C, V, A, R, B, G, j, q, O, L = wt(t[0].description) + '', U = t[0].amountRequired && ht(t), z = 'phone' === t[0].walletRequired && mt(t);
    function H(t, e) {
        return t[1] ? pt : dt
    }
    let J = H(t)
      , K = J(t);
    const W = [vt, gt]
      , Q = [];
    function Y(t, e) {
        return t[6] ? 0 : 1
    }
    C = Y(t),
    V = Q[C] = W[C](t);
    let Z = t[5] && $t(t);
    let X = function(t) {
        return t[11].isGuest ? bt : yt
    }(t)
      , tt = X(t);
    return {
        c() {
            e = s('form'),
            n = s('div'),
            f = s('div'),
            m = a(),
            U && U.c(),
            d = a(),
            z && z.c(),
            p = a(),
            g = s('div'),
            v = P('Промокод:\n        '),
            K.c(),
            $ = a(),
            x = s('div'),
            I = s('input'),
            D = a(),
            _ = s('span'),
            V.c(),
            R = a(),
            Z && Z.c(),
            B = a(),
            G = s('div'),
            tt.c(),
            this.h()
        },
        l(t) {
            e = l(t, 'FORM', {
                action: !0,
                method: !0
            });
            var s = r(e);
            n = l(s, 'DIV', {
                class: !0
            });
            var a = r(n);
            f = l(a, 'DIV', {
                class: !0
            }),
            r(f).forEach(o),
            m = c(a),
            U && U.l(a),
            d = c(a),
            z && z.l(a),
            p = c(a),
            g = l(a, 'DIV', {
                class: !0
            });
            var i = r(g);
            v = M(i, 'Промокод:\n        '),
            K.l(i),
            i.forEach(o),
            $ = c(a),
            x = l(a, 'DIV', {
                class: !0
            });
            var h = r(x);
            I = l(h, 'INPUT', {
                type: !0,
                name: !0,
                maxlength: !0
            }),
            D = c(h),
            _ = l(h, 'SPAN', {
                class: !0
            });
            var u = r(_);
            V.l(u),
            u.forEach(o),
            R = c(h),
            Z && Z.l(h),
            h.forEach(o),
            B = c(a),
            G = l(a, 'DIV', {});
            var y = r(G);
            tt.l(y),
            y.forEach(o),
            a.forEach(o),
            s.forEach(o),
            this.h()
        },
        h() {
            i(f, 'class', 'item-hint item-description'),
            N(f, 'empty', !t[0].description.length),
            i(g, 'class', 'item-label'),
            i(I, 'type', 'text'),
            i(I, 'name', 'PaymentForm[promoCode]'),
            i(I, 'maxlength', t[12].promoCode.maxLength),
            i(_, 'class', A = t[1] ? 'success' : t[5] ? 'error' : ''),
            i(x, 'class', 'item input-wrap'),
            i(n, 'class', 'form-group'),
            i(e, 'action', t[11].isGuest ? '#' : '/payment/payment/add'),
            i(e, 'method', 'post')
        },
        m(s, a) {
            h(s, e, a),
            u(e, n),
            u(n, f),
            f.innerHTML = L,
            u(n, m),
            U && U.m(n, null),
            u(n, d),
            z && z.m(n, null),
            u(n, p),
            u(n, g),
            u(g, v),
            K.m(g, null),
            u(n, $),
            u(n, x),
            u(x, I),
            k(I, t[3]),
            u(x, D),
            u(x, _),
            Q[C].m(_, null),
            u(x, R),
            Z && Z.m(x, null),
            u(n, B),
            u(n, G),
            tt.m(G, null),
            j = !0,
            q || (O = [S(I, 'input', t[16]), S(e, 'submit', F(t[17]))],
            q = !0)
        },
        p(t, e) {
            (!j || 1 & e) && L !== (L = wt(t[0].description) + '') && (f.innerHTML = L),
            (!j || 1 & e) && N(f, 'empty', !t[0].description.length),
            t[0].amountRequired ? U ? U.p(t, e) : (U = ht(t),
            U.c(),
            U.m(n, d)) : U && (U.d(1),
            U = null),
            'phone' === t[0].walletRequired ? z ? z.p(t, e) : (z = mt(t),
            z.c(),
            z.m(n, p)) : z && (z.d(1),
            z = null),
            J === (J = H(t)) && K ? K.p(t, e) : (K.d(1),
            K = J(t),
            K && (K.c(),
            K.m(g, null))),
            8 & e && I.value !== t[3] && k(I, t[3]);
            let s = C;
            C = Y(t),
            C !== s && (b(),
            E(Q[s], 1, 1, ( () => {
                Q[s] = null
            }
            )),
            w(),
            V = Q[C],
            V || (V = Q[C] = W[C](t),
            V.c()),
            y(V, 1),
            V.m(_, null)),
            (!j || 34 & e && A !== (A = t[1] ? 'success' : t[5] ? 'error' : '')) && i(_, 'class', A),
            t[5] ? Z ? Z.p(t, e) : (Z = $t(t),
            Z.c(),
            Z.m(x, null)) : Z && (Z.d(1),
            Z = null),
            tt.p(t, e)
        },
        i(t) {
            j || (y(V),
            j = !0)
        },
        o(t) {
            E(V),
            j = !1
        },
        d(t) {
            t && o(e),
            U && U.d(),
            z && z.d(),
            K.d(),
            Q[C].d(),
            Z && Z.d(),
            tt.d(),
            q = !1,
            T(O)
        }
    }
}
function ht(t) {
    let e, n, f, m, d, p, g, v, $, y, b, E, w, x, I, D, _, C, V, F, T, B = W(t[0].min) + '', G = t[0].currency.sign + '', j = t[0].currency.sign + '', q = t[2] > 0 && ut(t);
    return {
        c() {
            e = s('div'),
            n = P('Сумма:'),
            f = s('p'),
            m = P('Мин.\n          '),
            d = s('strong'),
            p = P(B),
            g = a(),
            v = P(G),
            $ = a(),
            y = s('div'),
            b = s('input'),
            I = a(),
            D = s('span'),
            _ = P(j),
            C = a(),
            V = s('div'),
            q && q.c(),
            this.h()
        },
        l(t) {
            e = l(t, 'DIV', {
                class: !0
            });
            var s = r(e);
            n = M(s, 'Сумма:'),
            f = l(s, 'P', {
                class: !0
            });
            var a = r(f);
            m = M(a, 'Мин.\n          '),
            d = l(a, 'STRONG', {});
            var i = r(d);
            p = M(i, B),
            i.forEach(o),
            g = c(a),
            v = M(a, G),
            a.forEach(o),
            s.forEach(o),
            $ = c(t),
            y = l(t, 'DIV', {
                class: !0
            });
            var h = r(y);
            b = l(h, 'INPUT', {
                type: !0,
                name: !0,
                step: !0,
                min: !0,
                max: !0
            }),
            I = c(h),
            D = l(h, 'SPAN', {});
            var u = r(D);
            _ = M(u, j),
            u.forEach(o),
            h.forEach(o),
            C = c(t),
            V = l(t, 'DIV', {
                class: !0
            });
            var E = r(V);
            q && q.l(E),
            E.forEach(o),
            this.h()
        },
        h() {
            i(f, 'class', 'label-hint small'),
            i(e, 'class', 'item-label'),
            i(b, 'type', 'number'),
            i(b, 'name', 'PaymentForm[amount]'),
            i(b, 'step', E = t[0].step),
            b.required = !0,
            i(b, 'min', w = t[0].min),
            i(b, 'max', x = t[0].max),
            N(D, 'acronym', t[0].currency.sign.length >= 3),
            i(y, 'class', 'input-wrap'),
            i(V, 'class', 'item-hint item-coins'),
            N(V, 'small', !t[0].amountRequired)
        },
        m(s, a) {
            h(s, e, a),
            u(e, n),
            u(e, f),
            u(f, m),
            u(f, d),
            u(d, p),
            u(f, g),
            u(f, v),
            h(s, $, a),
            h(s, y, a),
            u(y, b),
            k(b, t[2]),
            u(y, I),
            u(y, D),
            u(D, _),
            h(s, C, a),
            h(s, V, a),
            q && q.m(V, null),
            F || (T = S(b, 'input', t[14]),
            F = !0)
        },
        p(t, e) {
            1 & e && B !== (B = W(t[0].min) + '') && A(p, B),
            1 & e && G !== (G = t[0].currency.sign + '') && A(v, G),
            1 & e && E !== (E = t[0].step) && i(b, 'step', E),
            1 & e && w !== (w = t[0].min) && i(b, 'min', w),
            1 & e && x !== (x = t[0].max) && i(b, 'max', x),
            4 & e && R(b.value) !== t[2] && k(b, t[2]),
            1 & e && j !== (j = t[0].currency.sign + '') && A(_, j),
            1 & e && N(D, 'acronym', t[0].currency.sign.length >= 3),
            t[2] > 0 ? q ? q.p(t, e) : (q = ut(t),
            q.c(),
            q.m(V, null)) : q && (q.d(1),
            q = null),
            1 & e && N(V, 'small', !t[0].amountRequired)
        },
        d(t) {
            t && o(e),
            t && o($),
            t && o(y),
            t && o(C),
            t && o(V),
            q && q.d(),
            F = !1,
            T()
        }
    }
}
function ut(t) {
    let e, n, f, m, d, p, g = Q(t[10]) + '', v = t[9] && ft(t);
    return {
        c() {
            e = s('div'),
            n = P('Будет начислено: '),
            f = s('span'),
            m = P(g),
            d = a(),
            v && v.c(),
            p = $(),
            this.h()
        },
        l(t) {
            e = l(t, 'DIV', {
                class: !0
            });
            var s = r(e);
            n = M(s, 'Будет начислено: '),
            f = l(s, 'SPAN', {
                class: !0
            });
            var a = r(f);
            m = M(a, g),
            a.forEach(o),
            s.forEach(o),
            d = c(t),
            v && v.l(t),
            p = $(),
            this.h()
        },
        h() {
            i(f, 'class', '__currency'),
            i(e, 'class', 'amount-prediction')
        },
        m(t, s) {
            h(t, e, s),
            u(e, n),
            u(e, f),
            u(f, m),
            h(t, d, s),
            v && v.m(t, s),
            h(t, p, s)
        },
        p(t, e) {
            1024 & e && g !== (g = Q(t[10]) + '') && A(m, g),
            t[9] ? v ? v.p(t, e) : (v = ft(t),
            v.c(),
            v.m(p.parentNode, p)) : v && (v.d(1),
            v = null)
        },
        d(t) {
            t && o(e),
            t && o(d),
            v && v.d(t),
            t && o(p)
        }
    }
}
function ft(t) {
    let e, n, a, c, f, m, d;
    return {
        c() {
            e = s('div'),
            n = P('Вы получите: '),
            a = s('img'),
            f = s('span'),
            m = P('x '),
            d = P(t[9]),
            this.h()
        },
        l(s) {
            e = l(s, 'DIV', {
                class: !0
            });
            var c = r(e);
            n = M(c, 'Вы получите: '),
            a = l(c, 'IMG', {
                'data-tooltip-content': !0,
                src: !0,
                alt: !0
            }),
            f = l(c, 'SPAN', {});
            var i = r(f);
            m = M(i, 'x '),
            d = M(i, t[9]),
            i.forEach(o),
            c.forEach(o),
            this.h()
        },
        h() {
            i(a, 'data-tooltip-content', 'BattleCoins (BCN)'),
            B(a.src, c = '/img/payment/bcn.svg') || i(a, 'src', '/img/payment/bcn.svg'),
            i(a, 'alt', 'BattleCoin'),
            i(e, 'class', 'bcn-prediction')
        },
        m(t, s) {
            h(t, e, s),
            u(e, n),
            u(e, a),
            u(e, f),
            u(f, m),
            u(f, d)
        },
        p(t, e) {
            512 & e && A(d, t[9])
        },
        d(t) {
            t && o(e)
        }
    }
}
function mt(t) {
    let e, n, f, m, d, p, g, v, $, y, b, E, w, x;
    return {
        c() {
            e = s('div'),
            n = P('Телефон:'),
            f = a(),
            m = s('div'),
            d = s('input'),
            p = a(),
            g = s('span'),
            v = s('img'),
            y = a(),
            b = s('div'),
            E = P('В международном формате. Например 79215554433 или 37375554433'),
            this.h()
        },
        l(t) {
            e = l(t, 'DIV', {
                class: !0
            });
            var s = r(e);
            n = M(s, 'Телефон:'),
            s.forEach(o),
            f = c(t),
            m = l(t, 'DIV', {
                class: !0
            });
            var a = r(m);
            d = l(a, 'INPUT', {
                type: !0,
                name: !0
            }),
            p = c(a),
            g = l(a, 'SPAN', {});
            var i = r(g);
            v = l(i, 'IMG', {
                src: !0,
                alt: !0,
                class: !0
            }),
            i.forEach(o),
            a.forEach(o),
            y = c(t),
            b = l(t, 'DIV', {
                class: !0
            });
            var h = r(b);
            E = M(h, 'В международном формате. Например 79215554433 или 37375554433'),
            h.forEach(o),
            this.h()
        },
        h() {
            i(e, 'class', 'item-label'),
            i(d, 'type', 'number'),
            i(d, 'name', 'PaymentForm[wallet]'),
            d.required = !0,
            B(v.src, $ = '/img/svg/cell-phone.svg') || i(v, 'src', '/img/svg/cell-phone.svg'),
            i(v, 'alt', 'Phone'),
            i(v, 'class', 'icon-cell-phone'),
            i(m, 'class', 'input-wrap'),
            i(b, 'class', 'item-hint')
        },
        m(s, a) {
            h(s, e, a),
            u(e, n),
            h(s, f, a),
            h(s, m, a),
            u(m, d),
            k(d, t[8]),
            u(m, p),
            u(m, g),
            u(g, v),
            h(s, y, a),
            h(s, b, a),
            u(b, E),
            w || (x = S(d, 'input', t[15]),
            w = !0)
        },
        p(t, e) {
            256 & e && R(d.value) !== t[8] && k(d, t[8])
        },
        d(t) {
            t && o(e),
            t && o(f),
            t && o(m),
            t && o(y),
            t && o(b),
            w = !1,
            x()
        }
    }
}
function dt(t) {
    let e, n;
    return {
        c() {
            e = s('p'),
            n = P('(если есть)'),
            this.h()
        },
        l(t) {
            e = l(t, 'P', {
                class: !0
            });
            var s = r(e);
            n = M(s, '(если есть)'),
            s.forEach(o),
            this.h()
        },
        h() {
            i(e, 'class', 'label-hint small')
        },
        m(t, s) {
            h(t, e, s),
            u(e, n)
        },
        p: f,
        d(t) {
            t && o(e)
        }
    }
}
function pt(t) {
    let e, n, a, c;
    return {
        c() {
            e = s('p'),
            n = P('Плюс '),
            a = P(t[1]),
            c = P('%'),
            this.h()
        },
        l(s) {
            e = l(s, 'P', {
                class: !0
            });
            var i = r(e);
            n = M(i, 'Плюс '),
            a = M(i, t[1]),
            c = M(i, '%'),
            i.forEach(o),
            this.h()
        },
        h() {
            i(e, 'class', 'label-hint label-hint-success')
        },
        m(t, s) {
            h(t, e, s),
            u(e, n),
            u(e, a),
            u(e, c)
        },
        p(t, e) {
            2 & e && A(a, t[1])
        },
        d(t) {
            t && o(e)
        }
    }
}
function gt(t) {
    let e, n;
    return e = new ct({
        props: {
            href: '/img/svg/icons.svg#icon-percent'
        }
    }),
    {
        c() {
            D(e.$$.fragment)
        },
        l(t) {
            _(e.$$.fragment, t)
        },
        m(t, s) {
            C(e, t, s),
            n = !0
        },
        i(t) {
            n || (y(e.$$.fragment, t),
            n = !0)
        },
        o(t) {
            E(e.$$.fragment, t),
            n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}
function vt(t) {
    let e, n;
    return {
        c() {
            e = s('img'),
            this.h()
        },
        l(t) {
            e = l(t, 'IMG', {
                src: !0,
                alt: !0,
                class: !0
            }),
            this.h()
        },
        h() {
            B(e.src, n = '/img/svg/dual-ring.svg') || i(e, 'src', '/img/svg/dual-ring.svg'),
            i(e, 'alt', 'loading'),
            i(e, 'class', 'icon-loading')
        },
        m(t, n) {
            h(t, e, n)
        },
        i: f,
        o: f,
        d(t) {
            t && o(e)
        }
    }
}
function $t(t) {
    let e, n;
    return {
        c() {
            e = s('div'),
            n = P(t[5]),
            this.h()
        },
        l(s) {
            e = l(s, 'DIV', {
                class: !0
            });
            var a = r(e);
            n = M(a, t[5]),
            a.forEach(o),
            this.h()
        },
        h() {
            i(e, 'class', 'input-wrap-error')
        },
        m(t, s) {
            h(t, e, s),
            u(e, n)
        },
        p(t, e) {
            32 & e && A(n, t[5])
        },
        d(t) {
            t && o(e)
        }
    }
}
function yt(t) {
    let e, n, a, c = t[7] ? 'ПОДОЖДИТЕ...' : 'ПОПОЛНИТЬ СЧЕТ';
    return {
        c() {
            e = s('button'),
            n = P(c),
            this.h()
        },
        l(t) {
            e = l(t, 'BUTTON', {});
            var s = r(e);
            n = M(s, c),
            s.forEach(o),
            this.h()
        },
        h() {
            e.disabled = a = !!t[7] && 'disabled'
        },
        m(t, s) {
            h(t, e, s),
            u(e, n)
        },
        p(t, s) {
            128 & s && c !== (c = t[7] ? 'ПОДОЖДИТЕ...' : 'ПОПОЛНИТЬ СЧЕТ') && A(n, c),
            128 & s && a !== (a = !!t[7] && 'disabled') && (e.disabled = a)
        },
        d(t) {
            t && o(e)
        }
    }
}
function bt(t) {
    let e, n;
    return {
        c() {
            e = s('a'),
            n = P('СПЕРВА ВОЙДИТЕ ЧЕРЕЗ STEAM'),
            this.h()
        },
        l(t) {
            e = l(t, 'A', {
                href: !0,
                class: !0
            });
            var s = r(e);
            n = M(s, 'СПЕРВА ВОЙДИТЕ ЧЕРЕЗ STEAM'),
            s.forEach(o),
            this.h()
        },
        h() {
            i(e, 'href', t[11].authLink),
            i(e, 'class', 'authBtn')
        },
        m(t, s) {
            h(t, e, s),
            u(e, n)
        },
        p: f,
        d(t) {
            t && o(e)
        }
    }
}
function Et(t) {
    let e, n, s, l = t[4] && ot(t), r = t[0] && it(t);
    return {
        c() {
            l && l.c(),
            e = a(),
            r && r.c(),
            n = $()
        },
        l(t) {
            l && l.l(t),
            e = c(t),
            r && r.l(t),
            n = $()
        },
        m(t, a) {
            l && l.m(t, a),
            h(t, e, a),
            r && r.m(t, a),
            h(t, n, a),
            s = !0
        },
        p(t, [s]) {
            t[4] ? l ? (l.p(t, s),
            16 & s && y(l, 1)) : (l = ot(t),
            l.c(),
            y(l, 1),
            l.m(e.parentNode, e)) : l && (b(),
            E(l, 1, 1, ( () => {
                l = null
            }
            )),
            w()),
            t[0] ? r ? (r.p(t, s),
            1 & s && y(r, 1)) : (r = it(t),
            r.c(),
            y(r, 1),
            r.m(n.parentNode, n)) : r && (b(),
            E(r, 1, 1, ( () => {
                r = null
            }
            )),
            w())
        },
        i(t) {
            s || (y(l),
            y(r),
            s = !0)
        },
        o(t) {
            E(l),
            E(r),
            s = !1
        },
        d(t) {
            l && l.d(t),
            t && o(e),
            r && r.d(t),
            t && o(n)
        }
    }
}
function wt(t) {
    let e = {
        '%ИСКЛЮЧЕНИЙ_1%': '<span class=\'tooltip\' data-tooltip-content=\'Albania, Barbados, Burkina Faso, Cambodia, Cayman Islands, Haiti, Jamaica, Jordan, Mali, Malta, Morocco, Myanmar, Nicaragua, Pakistan, Panama, Philippines, Senegal, South Sudan, Syria, Uganda, Yemen, Russia, Belarus, Iran, North Korea, Turkey, Azerbaijan, Poland, Canada, Ukraine, Bulgaria, Croatia, Cameroon, Democratic Republic of Congo, Kenya, Monaco, Mozambique, Namibia, Nigeria, South Africa, Tanzania, Venezuela, Vietnam\'>исключений</span>'
    };
    return t.replace(/%[A-Za-zА-Яа-яЁё0-9\-_]+%/g, (t => e[t] || t))
}
function xt(t, e, n) {
    let s;
    x(t, H, (t => n(3, s = t)));
    let a, l, r, c, o, i, h, u, f, m, d, {method: p} = e, g = new Map;
    const {user: v, config: $} = I('context')
      , y = $.endpoints.promoCode.substr(0, $.endpoints.promoCode.length - 1);
    function b() {
        n(10, d = Math.round(h * (1 + l / 100) * Y(( () => p.currency.rate)))),
        n(9, m = h * Y(( () => p.currency.rate)) > 0 && Q(Math.floor(h * Y(( () => p.currency.rate)) * $.rates.BCN)))
    }
    async function E() {
        try {
            n(6, o = !0);
            const t = await J.get(y + s);
            t.success && n(1, l = parseInt(t.promo.amount))
        } catch (t) {
            404 === K.getStatus(t) ? n(5, c = 'Промо не найден') : 403 === K.getStatus(t) && n(5, c = 'Этот промо не активен')
        }
        n(6, o = !1)
    }
    async function w(t) {
        let e = function(t) {
            let e = new FormData;
            return e.append('amount', parseFloat(t.amount).toString()),
            e.append('id', parseFloat(t.id).toString()),
            t.promoCode && e.append('promoCode', t.promoCode),
            t.wallet && e.append('wallet', t.wallet),
            e
        }({
            amount: t.target.elements[0].value,
            id: p.id,
            wallet: !!p.walletRequired && u,
            promoCode: s
        });
        try {
            n(7, i = !0);
            const s = await J.post(t.target.action, e);
            s.success && 'string' == typeof s.url ? window.location.href = s.url : s.success && s.url.url && n(4, r = s.url)
        } catch (t) {
            K.error(t),
            n(7, i = !1)
        }
    }
    return t.$$set = t => {
        'method'in t && n(0, p = t.method)
    }
    ,
    t.$$.update = () => {
        8 & t.$$.dirty && !1 !== s && function() {
            if (n(1, l = 0),
            n(5, c = !1),
            clearTimeout(a),
            s) {
                if (!new RegExp($.promoCode.pattern,'gi').test(s) || s.length < $.promoCode.minLength || s.length > $.promoCode.maxLength)
                    return n(5, c = 'Неверный формат'),
                    !1;
                a = setTimeout(E, 400)
            }
        }(),
        6 & t.$$.dirty && (h || l) && b(),
        1 & t.$$.dirty && p && (f !== p.currency.code && (g.set(f, h),
        f = p.currency.code,
        n(2, h = g.get(p.currency.code))),
        b(),
        n(8, u = u || p._walletPhone))
    }
    ,
    [p, l, h, s, r, c, o, i, u, m, d, v, $, w, function() {
        h = R(this.value),
        n(2, h)
    }
    , function() {
        u = R(this.value),
        n(8, u)
    }
    , function() {
        s = this.value,
        H.set(s)
    }
    , t => w(t)]
}
class It extends t {
    constructor(t) {
        super(),
        e(this, t, xt, Et, n, {
            method: 0
        })
    }
}
function Dt(t) {
    let e, n, a;
    return {
        c() {
            e = s('p'),
            n = P('Выберите способ оплаты'),
            this.h()
        },
        l(t) {
            e = l(t, 'P', {
                class: !0
            });
            var s = r(e);
            n = M(s, 'Выберите способ оплаты'),
            s.forEach(o),
            this.h()
        },
        h() {
            i(e, 'class', a = 'method_btns__text_separator position_' + t[0])
        },
        m(t, s) {
            h(t, e, s),
            u(e, n)
        },
        p(t, [n]) {
            1 & n && a !== (a = 'method_btns__text_separator position_' + t[0]) && i(e, 'class', a)
        },
        i: f,
        o: f,
        d(t) {
            t && o(e)
        }
    }
}
function _t(t, e, n) {
    let {position: s} = e;
    return t.$$set = t => {
        'position'in t && n(0, s = t.position)
    }
    ,
    [s]
}
class Ct extends t {
    constructor(t) {
        super(),
        e(this, t, _t, Dt, n, {
            position: 0
        })
    }
}
function Vt(t, e, n) {
    const s = t.slice();
    return s[22] = e[n],
    s
}
function Pt(t, e, n) {
    const s = t.slice();
    return s[22] = e[n],
    s
}
function Mt(t, e, n) {
    const s = t.slice();
    return s[27] = e[n],
    s
}
function Nt(t, e, n) {
    const s = t.slice();
    return s[30] = e[n],
    s
}
function kt(t, e, n) {
    const s = t.slice();
    return s[33] = e[n],
    s
}
function St(t) {
    let e, n;
    return e = new Z({
        props: {
            href: '/img/svg/funds-form.svg#' + t[33]
        }
    }),
    {
        c() {
            D(e.$$.fragment)
        },
        l(t) {
            _(e.$$.fragment, t)
        },
        m(t, s) {
            C(e, t, s),
            n = !0
        },
        p(t, n) {
            const s = {};
            2 & n[0] && (s.href = '/img/svg/funds-form.svg#' + t[33]),
            e.$set(s)
        },
        i(t) {
            n || (y(e.$$.fragment, t),
            n = !0)
        },
        o(t) {
            E(e.$$.fragment, t),
            n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}
function Ft(t, e) {
    let n, f, d, p, g, v, $, x, I, D, _, C, V, N, k = e[30].label + '', F = e[30].icons, T = [];
    for (let t = 0; t < F.length; t += 1)
        T[t] = St(kt(e, F, t));
    const R = t => E(T[t], 1, 1, ( () => {
        T[t] = null
    }
    ));
    function B(...t) {
        return e[11](e[30], ...t)
    }
    return {
        key: t,
        first: null,
        c() {
            n = s('a'),
            f = s('div');
            for (let t = 0; t < T.length; t += 1)
                T[t].c();
            d = a(),
            p = s('p'),
            g = P(k),
            v = a(),
            $ = s('div'),
            x = a(),
            this.h()
        },
        l(t) {
            n = l(t, 'A', {
                class: !0,
                href: !0,
                style: !0
            });
            var e = r(n);
            f = l(e, 'DIV', {
                class: !0
            });
            var s = r(f);
            for (let t = 0; t < T.length; t += 1)
                T[t].l(s);
            d = c(s),
            p = l(s, 'P', {});
            var a = r(p);
            g = M(a, k),
            a.forEach(o),
            s.forEach(o),
            v = c(e),
            $ = l(e, 'DIV', {
                class: !0
            }),
            r($).forEach(o),
            x = c(e),
            e.forEach(o),
            this.h()
        },
        h() {
            i(f, 'class', 'icons-holder'),
            i($, 'class', 'border'),
            i(n, 'class', I = !0 === e[30].active ? 'active' : ''),
            i(n, 'href', D = e[30].href ? e[30].href : '#'),
            i(n, 'style', _ = !1 !== e[30].visible && e[30].items.length ? '' : 'display:none;'),
            this.first = n
        },
        m(t, e) {
            h(t, n, e),
            u(n, f);
            for (let t = 0; t < T.length; t += 1)
                T[t] && T[t].m(f, null);
            u(f, d),
            u(f, p),
            u(p, g),
            u(n, v),
            u(n, $),
            u(n, x),
            C = !0,
            V || (N = S(n, 'click', B),
            V = !0)
        },
        p(t, s) {
            if (e = t,
            2 & s[0]) {
                let t;
                for (F = e[30].icons,
                t = 0; t < F.length; t += 1) {
                    const n = kt(e, F, t);
                    T[t] ? (T[t].p(n, s),
                    y(T[t], 1)) : (T[t] = St(n),
                    T[t].c(),
                    y(T[t], 1),
                    T[t].m(f, d))
                }
                for (b(),
                t = F.length; t < T.length; t += 1)
                    R(t);
                w()
            }
            (!C || 2 & s[0]) && k !== (k = e[30].label + '') && A(g, k),
            (!C || 2 & s[0] && I !== (I = !0 === e[30].active ? 'active' : '')) && i(n, 'class', I),
            (!C || 2 & s[0] && D !== (D = e[30].href ? e[30].href : '#')) && i(n, 'href', D),
            (!C || 2 & s[0] && _ !== (_ = !1 !== e[30].visible && e[30].items.length ? '' : 'display:none;')) && i(n, 'style', _)
        },
        i(t) {
            if (!C) {
                for (let t = 0; t < F.length; t += 1)
                    y(T[t]);
                C = !0
            }
        },
        o(t) {
            T = T.filter(Boolean);
            for (let t = 0; t < T.length; t += 1)
                E(T[t]);
            C = !1
        },
        d(t) {
            t && o(n),
            m(T, t),
            V = !1,
            N()
        }
    }
}
function Tt(t) {
    let e, n = t[22].badge, a = [];
    for (let e = 0; e < n.length; e += 1)
        a[e] = At(Mt(t, n, e));
    return {
        c() {
            e = s('div');
            for (let t = 0; t < a.length; t += 1)
                a[t].c();
            this.h()
        },
        l(t) {
            e = l(t, 'DIV', {
                class: !0
            });
            var n = r(e);
            for (let t = 0; t < a.length; t += 1)
                a[t].l(n);
            n.forEach(o),
            this.h()
        },
        h() {
            i(e, 'class', 'badge-holder')
        },
        m(t, n) {
            h(t, e, n);
            for (let t = 0; t < a.length; t += 1)
                a[t] && a[t].m(e, null)
        },
        p(t, s) {
            if (16 & s[0]) {
                let l;
                for (n = t[22].badge,
                l = 0; l < n.length; l += 1) {
                    const r = Mt(t, n, l);
                    a[l] ? a[l].p(r, s) : (a[l] = At(r),
                    a[l].c(),
                    a[l].m(e, null))
                }
                for (; l < a.length; l += 1)
                    a[l].d(1);
                a.length = n.length
            }
        },
        d(t) {
            t && o(e),
            m(a, t)
        }
    }
}
function At(t) {
    let e, n, a, c = t[27] + '';
    return {
        c() {
            e = s('div'),
            n = P(c),
            this.h()
        },
        l(t) {
            e = l(t, 'DIV', {
                class: !0
            });
            var s = r(e);
            n = M(s, c),
            s.forEach(o),
            this.h()
        },
        h() {
            i(e, 'class', a = 'badge badge-' + Ut(t[27]))
        },
        m(t, s) {
            h(t, e, s),
            u(e, n)
        },
        p(t, s) {
            16 & s[0] && c !== (c = t[27] + '') && A(n, c),
            16 & s[0] && a !== (a = 'badge badge-' + Ut(t[27])) && i(e, 'class', a)
        },
        d(t) {
            t && o(e)
        }
    }
}
function Rt(t) {
    let e, n, a, r;
    return {
        c() {
            e = s('img'),
            this.h()
        },
        l(t) {
            e = l(t, 'IMG', {
                src: !0,
                alt: !0,
                class: !0
            }),
            this.h()
        },
        h() {
            B(e.src, n = t[22].icon) || i(e, 'src', n),
            i(e, 'alt', a = t[22].iconCode),
            i(e, 'class', r = t[22].iconCode)
        },
        m(t, n) {
            h(t, e, n)
        },
        p(t, s) {
            16 & s[0] && !B(e.src, n = t[22].icon) && i(e, 'src', n),
            16 & s[0] && a !== (a = t[22].iconCode) && i(e, 'alt', a),
            16 & s[0] && r !== (r = t[22].iconCode) && i(e, 'class', r)
        },
        d(t) {
            t && o(e)
        }
    }
}
function Bt(t) {
    let e, n, f, m = Y(p) + '', d = t[22].flag && Gt(t);
    function p() {
        return t[12](t[22])
    }
    return {
        c() {
            e = s('div'),
            d && d.c(),
            n = a(),
            f = P(m),
            this.h()
        },
        l(t) {
            e = l(t, 'DIV', {
                class: !0
            });
            var s = r(e);
            d && d.l(s),
            n = c(s),
            f = M(s, m),
            s.forEach(o),
            this.h()
        },
        h() {
            i(e, 'class', 'method_btns__extra_desc')
        },
        m(t, s) {
            h(t, e, s),
            d && d.m(e, null),
            u(e, n),
            u(e, f)
        },
        p(s, a) {
            (t = s)[22].flag ? d ? d.p(t, a) : (d = Gt(t),
            d.c(),
            d.m(e, n)) : d && (d.d(1),
            d = null),
            16 & a[0] && m !== (m = Y(p) + '') && A(f, m)
        },
        d(t) {
            t && o(e),
            d && d.d()
        }
    }
}
function Gt(t) {
    let e, n;
    return {
        c() {
            e = s('img'),
            this.h()
        },
        l(t) {
            e = l(t, 'IMG', {
                src: !0,
                alt: !0
            }),
            this.h()
        },
        h() {
            B(e.src, n = t[22].flag) || i(e, 'src', n),
            i(e, 'alt', 'method flag')
        },
        m(t, n) {
            h(t, e, n)
        },
        p(t, s) {
            16 & s[0] && !B(e.src, n = t[22].flag) && i(e, 'src', n)
        },
        d(t) {
            t && o(e)
        }
    }
}
function jt(t) {
    let e, n, f, m, d, p, g = t[22].gateway.code + '', v = t[22].currency.code + '';
    return {
        c() {
            e = s('div'),
            n = s('div'),
            f = P(g),
            m = a(),
            d = s('div'),
            p = P(v),
            this.h()
        },
        l(t) {
            e = l(t, 'DIV', {
                class: !0
            });
            var s = r(e);
            n = l(s, 'DIV', {
                class: !0
            });
            var a = r(n);
            f = M(a, g),
            a.forEach(o),
            m = c(s),
            d = l(s, 'DIV', {});
            var i = r(d);
            p = M(i, v),
            i.forEach(o),
            s.forEach(o),
            this.h()
        },
        h() {
            i(n, 'class', 'code'),
            i(e, 'class', 'gateway')
        },
        m(t, s) {
            h(t, e, s),
            u(e, n),
            u(n, f),
            u(e, m),
            u(e, d),
            u(d, p)
        },
        p(t, e) {
            16 & e[0] && g !== (g = t[22].gateway.code + '') && A(f, g),
            16 & e[0] && v !== (v = t[22].currency.code + '') && A(p, v)
        },
        d(t) {
            t && o(e)
        }
    }
}
function qt(t, e) {
    let n, f, m, d, p, g, v, $, y, b = Y(E);
    function E() {
        return e[10](e[22])
    }
    let w = e[22].badge && Tt(e)
      , x = e[22].icon && Rt(e)
      , I = (e[22].label || e[22].flag) && Bt(e)
      , D = b && jt(e);
    function _(...t) {
        return e[15](e[22], ...t)
    }
    return {
        key: t,
        first: null,
        c() {
            n = s('a'),
            w && w.c(),
            f = a(),
            m = s('div'),
            x && x.c(),
            d = a(),
            I && I.c(),
            p = a(),
            D && D.c(),
            this.h()
        },
        l(t) {
            n = l(t, 'A', {
                class: !0,
                href: !0
            });
            var e = r(n);
            w && w.l(e),
            f = c(e),
            m = l(e, 'DIV', {
                class: !0
            });
            var s = r(m);
            x && x.l(s),
            d = c(s),
            I && I.l(s),
            s.forEach(o),
            p = c(e),
            D && D.l(e),
            e.forEach(o),
            this.h()
        },
        h() {
            i(m, 'class', 'icons-holder group-' + Y(e[13])),
            i(n, 'class', g = !0 === e[22].active ? 'active' : ''),
            i(n, 'href', '#'),
            G(( () => e[14].call(n))),
            this.first = n
        },
        m(t, s) {
            h(t, n, s),
            w && w.m(n, null),
            u(n, f),
            u(n, m),
            x && x.m(m, null),
            u(m, d),
            I && I.m(m, null),
            u(n, p),
            D && D.m(n, null),
            v = j(n, e[14].bind(n)),
            $ || (y = S(n, 'click', _),
            $ = !0)
        },
        p(t, s) {
            (e = t)[22].badge ? w ? w.p(e, s) : (w = Tt(e),
            w.c(),
            w.m(n, f)) : w && (w.d(1),
            w = null),
            e[22].icon ? x ? x.p(e, s) : (x = Rt(e),
            x.c(),
            x.m(m, d)) : x && (x.d(1),
            x = null),
            e[22].label || e[22].flag ? I ? I.p(e, s) : (I = Bt(e),
            I.c(),
            I.m(m, null)) : I && (I.d(1),
            I = null),
            16 & s[0] && (b = Y(E)),
            b ? D ? D.p(e, s) : (D = jt(e),
            D.c(),
            D.m(n, null)) : D && (D.d(1),
            D = null),
            16 & s[0] && g !== (g = !0 === e[22].active ? 'active' : '') && i(n, 'class', g)
        },
        d(t) {
            t && o(n),
            w && w.d(),
            x && x.d(),
            I && I.d(),
            D && D.d(),
            v(),
            $ = !1,
            y()
        }
    }
}
function Ot(t) {
    let e, n;
    return {
        c() {
            e = s('a'),
            n = P(' '),
            this.h()
        },
        l(t) {
            e = l(t, 'A', {
                href: !0,
                class: !0
            });
            var s = r(e);
            n = M(s, ' '),
            s.forEach(o),
            this.h()
        },
        h() {
            i(e, 'href', '#'),
            i(e, 'class', 'disabled')
        },
        m(t, s) {
            h(t, e, s),
            u(e, n)
        },
        p: f,
        d(t) {
            t && o(e)
        }
    }
}
function Lt(t) {
    let e, n, f, d, $, x, I, N, k, S, F, T, A, R, B, O, z, H, J, K, W, Q, Y, Z, X, tt, et = [], nt = new Map, st = [], at = new Map;
    I = new Ct({
        props: {
            position: 'top'
        }
    });
    let lt = t[1];
    const rt = t => t[30].id;
    for (let e = 0; e < lt.length; e += 1) {
        let n = Nt(t, lt, e)
          , s = rt(n);
        nt.set(s, et[e] = Ft(s, n))
    }
    F = new Ct({
        props: {
            position: 'bottom'
        }
    });
    let ct = t[4];
    const ot = t => t[22].id;
    for (let e = 0; e < ct.length; e += 1) {
        let n = Pt(t, ct, e)
          , s = ot(n);
        at.set(s, st[e] = qt(s, n))
    }
    let it = t[5]
      , ht = [];
    for (let e = 0; e < it.length; e += 1)
        ht[e] = Ot(Vt(t, it, e));
    return J = new It({
        props: {
            method: t[2]
        }
    }),
    {
        c() {
            e = s('div'),
            n = s('button'),
            f = p('svg'),
            d = p('use'),
            $ = a(),
            x = s('div'),
            D(I.$$.fragment),
            N = a();
            for (let t = 0; t < et.length; t += 1)
                et[t].c();
            k = a(),
            S = s('div'),
            D(F.$$.fragment),
            T = a(),
            A = s('div');
            for (let t = 0; t < st.length; t += 1)
                st[t].c();
            R = a();
            for (let t = 0; t < ht.length; t += 1)
                ht[t].c();
            O = a(),
            z = s('div'),
            H = a(),
            D(J.$$.fragment),
            K = a(),
            W = s('p'),
            Q = P('Если после оплаты прошло более 30 минут, а баланс на сайте не пополнился, то напишите нам в '),
            Y = s('a'),
            Z = P('техподдержку'),
            X = P('.'),
            this.h()
        },
        l(t) {
            e = l(t, 'DIV', {
                class: !0
            });
            var s = r(e);
            n = l(s, 'BUTTON', {
                'data-hystclose': !0,
                class: !0
            });
            var a = r(n);
            f = g(a, 'svg', {
                class: !0
            });
            var i = r(f);
            d = g(i, 'use', {
                'xmlns:xlink': !0,
                'xlink:href': !0
            }),
            r(d).forEach(o),
            i.forEach(o),
            a.forEach(o),
            $ = c(s),
            x = l(s, 'DIV', {
                class: !0
            });
            var h = r(x);
            _(I.$$.fragment, h),
            N = c(h);
            for (let t = 0; t < et.length; t += 1)
                et[t].l(h);
            h.forEach(o),
            k = c(s),
            S = l(s, 'DIV', {
                class: !0
            });
            var u = r(S);
            _(F.$$.fragment, u),
            T = c(u),
            A = l(u, 'DIV', {
                class: !0
            });
            var m = r(A);
            for (let t = 0; t < st.length; t += 1)
                st[t].l(m);
            R = c(m);
            for (let t = 0; t < ht.length; t += 1)
                ht[t].l(m);
            m.forEach(o),
            O = c(u),
            z = l(u, 'DIV', {
                class: !0
            }),
            r(z).forEach(o),
            H = c(u),
            _(J.$$.fragment, u),
            K = c(u),
            W = l(u, 'P', {
                class: !0
            });
            var p = r(W);
            Q = M(p, 'Если после оплаты прошло более 30 минут, а баланс на сайте не пополнился, то напишите нам в '),
            Y = l(p, 'A', {
                href: !0
            });
            var v = r(Y);
            Z = M(v, 'техподдержку'),
            v.forEach(o),
            X = M(p, '.'),
            p.forEach(o),
            u.forEach(o),
            s.forEach(o),
            this.h()
        },
        h() {
            i(d, 'xmlns:xlink', 'http://www.w3.org/1999/xlink'),
            v(d, 'xlink:href', '#ico-cross'),
            i(f, 'class', 'icon icon-wallet gradient'),
            i(n, 'data-hystclose', ''),
            i(n, 'class', 'hystmodal__close'),
            i(x, 'class', 'method_btns__l1_buttons'),
            i(A, 'class', 'method_btns__l2_buttons'),
            G(( () => t[16].call(A))),
            i(z, 'class', 'hr'),
            i(Y, 'href', '/support'),
            i(W, 'class', 'help'),
            i(S, 'class', 'method_btns__l2_wrapper'),
            i(e, 'class', 'method_btns')
        },
        m(s, a) {
            h(s, e, a),
            u(e, n),
            u(n, f),
            u(f, d),
            u(e, $),
            u(e, x),
            C(I, x, null),
            u(x, N);
            for (let t = 0; t < et.length; t += 1)
                et[t] && et[t].m(x, null);
            u(e, k),
            u(e, S),
            C(F, S, null),
            u(S, T),
            u(S, A);
            for (let t = 0; t < st.length; t += 1)
                st[t] && st[t].m(A, null);
            u(A, R);
            for (let t = 0; t < ht.length; t += 1)
                ht[t] && ht[t].m(A, null);
            B = j(A, t[16].bind(A)),
            u(S, O),
            u(S, z),
            u(S, H),
            C(J, S, null),
            u(S, K),
            u(S, W),
            u(W, Q),
            u(W, Y),
            u(Y, Z),
            u(W, X),
            tt = !0
        },
        p(t, e) {
            if (66 & e[0] && (lt = t[1],
            b(),
            et = q(et, e, rt, 1, t, lt, nt, x, L, Ft, null, Nt),
            w()),
            408 & e[0] && (ct = t[4],
            st = q(st, e, ot, 1, t, ct, at, A, U, qt, R, Pt)),
            32 & e[0]) {
                let n;
                for (it = t[5],
                n = 0; n < it.length; n += 1) {
                    const s = Vt(t, it, n);
                    ht[n] ? ht[n].p(s, e) : (ht[n] = Ot(),
                    ht[n].c(),
                    ht[n].m(A, null))
                }
                for (; n < ht.length; n += 1)
                    ht[n].d(1);
                ht.length = it.length
            }
            const n = {};
            4 & e[0] && (n.method = t[2]),
            J.$set(n)
        },
        i(t) {
            if (!tt) {
                y(I.$$.fragment, t);
                for (let t = 0; t < lt.length; t += 1)
                    y(et[t]);
                y(F.$$.fragment, t),
                y(J.$$.fragment, t),
                tt = !0
            }
        },
        o(t) {
            E(I.$$.fragment, t);
            for (let t = 0; t < et.length; t += 1)
                E(et[t]);
            E(F.$$.fragment, t),
            E(J.$$.fragment, t),
            tt = !1
        },
        d(t) {
            t && o(e),
            V(I);
            for (let t = 0; t < et.length; t += 1)
                et[t].d();
            V(F);
            for (let t = 0; t < st.length; t += 1)
                st[t].d();
            m(ht, t),
            B(),
            V(J)
        }
    }
}
function Ut(t) {
    switch (t.toLowerCase()) {
    case 'new':
    case 'новый':
        return 'new';
    case 'p2p':
    case 'п2п':
        return 'p2p';
    case 'test':
    case 'тест':
    case 'тестовый':
        return 'test';
    default:
        return 'default'
    }
}
function zt(t, e, n) {
    const {config: s} = I('context');
    let a, l, r, c, o;
    O();
    let i = s.items
      , h = [];
    function u() {
        if (n(5, h = []),
        !l)
            return !1;
        let t = Math.floor(l / (r + 2));
        const e = o.length % t;
        if (0 === e)
            return n(5, h = []),
            !1;
        for (let n = 0; n < t - e; n++)
            h.push({
                id: !1
            });
        n(5, h)
    }
    function f(t, e) {
        i.map((t => {
            t.active = t.id === e.id
        }
        )),
        n(1, i),
        t.preventDefault()
    }
    function m(t, e) {
        o.map((t => {
            t.active = t.id === e.id
        }
        )),
        i.map((t => {
            t.active && (t.items = o)
        }
        )),
        n(1, i)
    }
    function p() {
        let t = !1;
        return i.map((e => {
            e.active && (t = e)
        }
        )),
        t
    }
    d(( () => {
        n(9, c = !0)
    }
    ));
    return t.$$.update = () => {
        513 & t.$$.dirty[0] && c && l && u(),
        2 & t.$$.dirty[0] && i && (n(4, o = i.filter((t => !0 === t.active))[0].items),
        u(),
        n(2, a = function() {
            let t = !1;
            return o.map((e => {
                e.active && (t = e)
            }
            )),
            t
        }()))
    }
    ,
    [l, i, a, r, o, h, f, m, p, c, t => t.gateway.code, (t, e) => f(e, t), t => t.label, () => p().class, function() {
        r = this.clientWidth,
        n(3, r)
    }
    , (t, e) => m(0, t), function() {
        l = this.clientWidth,
        n(0, l)
    }
    ]
}
class Ht extends t {
    constructor(t) {
        super(),
        e(this, t, zt, Lt, n, {}, null, [-1, -1])
    }
}
function Jt(t) {
    let e, n;
    return e = new Ht({}),
    {
        c() {
            D(e.$$.fragment)
        },
        l(t) {
            _(e.$$.fragment, t)
        },
        m(t, s) {
            C(e, t, s),
            n = !0
        },
        p: f,
        i(t) {
            n || (y(e.$$.fragment, t),
            n = !0)
        },
        o(t) {
            E(e.$$.fragment, t),
            n = !1
        },
        d(t) {
            V(e, t)
        }
    }
}
function Kt(t, e, n) {
    let {user: s} = e
      , {config: a} = e;
    return z('context', {
        user: s,
        isGuest: s.isGuest,
        config: a
    }),
    t.$$set = t => {
        'user'in t && n(0, s = t.user),
        'config'in t && n(1, a = t.config)
    }
    ,
    [s, a]
}
var Wt = document.getElementById('funds-form')
  , Qt = new class extends t {
    constructor(t) {
        super(),
        e(this, t, Kt, Jt, n, {
            user: 0,
            config: 1
        })
    }
}
({
    target: Wt,
    props: {
        user: __userData,
        config: __fundsFormConfig
    }
});
export {Qt as default};
