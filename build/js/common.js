import {f as e, a as t, r as n, t as r, A as i} from './api-CaGmJ7Hv.js';

var o = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : {};
function a(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var s, p, l = {
    exports: {}
};
s = l,
p = l.exports,
function() {
    var e, t, n, r, i, o, a, l, u, d, c, f, h, m, v, g, b, y, w, E, T = [].slice;
    e = /^\(?([^)]*)\)?(?:(.)(d+))?$/,
    t = 1e3 / 30,
    h = document.createElement('div').style,
    i = null != h.transition || null != h.webkitTransition || null != h.mozTransition || null != h.oTransition,
    c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
    n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
    a = e => {
        var t;
        return (t = document.createElement('div')).innerHTML = e,
        t.children[0]
    }
    ,
    d = (e, t) => e.className = e.className.replace(new RegExp('(^| )' + t.split(' ').join('|') + '( |$)','gi'), ' '),
    o = (e, t) => (d(e, t),
    e.className += ' ' + t),
    m = (e, t) => {
        var n;
        if (null != document.createEvent)
            return (n = document.createEvent('HTMLEvents')).initEvent(t, !0, !0),
            e.dispatchEvent(n)
    }
    ,
    u = () => {
        var e, t;
        return null != (e = null != (t = window.performance) && 'function' == typeof t.now ? t.now() : void 0) ? e : +new Date
    }
    ,
    f = (e, t) => (null == t && (t = 0),
    t ? (e *= Math.pow(10, t),
    e += .5,
    (e = Math.floor(e)) / Math.pow(10, t)) : Math.round(e)),
    v = e => e < 0 ? Math.ceil(e) : Math.floor(e),
    l = e => e - f(e),
    b = !1,
    (g = function() {
        var e, t, n, r, i;
        if (!b && null != window.jQuery) {
            for (b = !0,
            i = [],
            t = 0,
            n = (r = ['html', 'text']).length; t < n; t++)
                e = r[t],
                i.push(function(e) {
                    var t;
                    return t = window.jQuery.fn[e],
                    window.jQuery.fn[e] = function(e) {
                        var n;
                        return null == e || null == (null != (n = this[0]) ? n.odometer : void 0) ? t.apply(this, arguments) : this[0].odometer.update(e)
                    }
                }(e));
            return i
        }
    }
    )(),
    setTimeout(g, 0),
    r = function() {
        function r(e) {
            var n, i, o, a, s, p, l, u, d, c = this;
            if (this.options = e,
            this.el = this.options.el,
            null != this.el.odometer)
                return this.el.odometer;
            for (n in this.el.odometer = this,
            l = r.options)
                o = l[n],
                null == this.options[n] && (this.options[n] = o);
            null == (a = this.options).duration && (a.duration = 2e3),
            this.MAX_VALUES = this.options.duration / t / 2 | 0,
            this.resetFormat(),
            this.value = this.cleanValue(null != (u = this.options.value) ? u : ''),
            this.renderInside(),
            this.render();
            try {
                for (s = 0,
                p = (d = ['innerHTML', 'innerText', 'textContent']).length; s < p; s++)
                    i = d[s],
                    null != this.el[i] && (e => {
                        Object.defineProperty(c.el, e, {
                            get: () => {
                                var t;
                                return 'innerHTML' === e ? c.inside.outerHTML : null != (t = c.inside.innerText) ? t : c.inside.textContent
                            }
                            ,
                            set: e => c.update(e)
                        })
                    }
                    )(i)
            } catch (e) {
                this.watchForMutations()
            }
        }
        return r.prototype.renderInside = function() {
            return this.inside = document.createElement('div'),
            this.inside.className = 'odometer-inside',
            this.el.innerHTML = '',
            this.el.appendChild(this.inside)
        }
        ,
        r.prototype.watchForMutations = function() {
            var e = this;
            if (null != n)
                try {
                    return null == this.observer && (this.observer = new n((t => {
                        var n;
                        return n = e.el.innerText,
                        e.renderInside(),
                        e.render(e.value),
                        e.update(n)
                    }
                    ))),
                    this.watchMutations = !0,
                    this.startWatchingMutations()
                } catch (e) {}
        }
        ,
        r.prototype.startWatchingMutations = function() {
            if (this.watchMutations)
                return this.observer.observe(this.el, {
                    childList: !0
                })
        }
        ,
        r.prototype.stopWatchingMutations = function() {
            var e;
            return null != (e = this.observer) ? e.disconnect() : void 0
        }
        ,
        r.prototype.cleanValue = function(e) {
            var t;
            return 'string' == typeof e && (e = (e = (e = e.replace(null != (t = this.format.radix) ? t : '.', '<radix>')).replace(/[.,]/g, '')).replace('<radix>', '.'),
            e = parseFloat(e, 10) || 0),
            f(e, this.format.precision)
        }
        ,
        r.prototype.bindTransitionEnd = function() {
            var e, t, n, r, i, o, a = this;
            if (!this.transitionEndBound) {
                for (this.transitionEndBound = !0,
                t = !1,
                o = [],
                n = 0,
                r = (i = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd'.split(' ')).length; n < r; n++)
                    e = i[n],
                    o.push(this.el.addEventListener(e, ( () => (t || (t = !0,
                    setTimeout(( () => (a.render(),
                    t = !1,
                    m(a.el, 'odometerdone'))), 0)),
                    !0)), !1));
                return o
            }
        }
        ,
        r.prototype.resetFormat = function() {
            var t, n, r, i, o, a, s, p;
            if ((t = null != (s = this.options.format) ? s : '(,ddd).dd') || (t = 'd'),
            !(r = e.exec(t)))
                throw new Error('Odometer: Unparsable digit format');
            return a = (p = r.slice(1, 4))[0],
            o = p[1],
            i = (null != (n = p[2]) ? n.length : void 0) || 0,
            this.format = {
                repeating: a,
                radix: o,
                precision: i
            }
        }
        ,
        r.prototype.render = function(e) {
            var t, n, r, o, a, s, p;
            for (null == e && (e = this.value),
            this.stopWatchingMutations(),
            this.resetFormat(),
            this.inside.innerHTML = '',
            a = this.options.theme,
            o = [],
            s = 0,
            p = (t = this.el.className.split(' ')).length; s < p; s++)
                (n = t[s]).length && ((r = /^odometer-theme-(.+)$/.exec(n)) ? a = r[1] : /^odometer(-|$)/.test(n) || o.push(n));
            return o.push('odometer'),
            i || o.push('odometer-no-transitions'),
            a ? o.push('odometer-theme-' + a) : o.push('odometer-auto-theme'),
            this.el.className = o.join(' '),
            this.ribbons = {},
            this.formatDigits(e),
            this.startWatchingMutations()
        }
        ,
        r.prototype.formatDigits = function(e) {
            var t, n, r, i, o, a, s, p, u;
            if (this.digits = [],
            this.options.formatFunction)
                for (i = 0,
                a = (p = this.options.formatFunction(e).split('').reverse()).length; i < a; i++)
                    (n = p[i]).match(/0-9/) ? ((t = this.renderDigit()).querySelector('.odometer-value').innerHTML = n,
                    this.digits.push(t),
                    this.insertDigit(t)) : this.addSpacer(n);
            else
                for (r = !this.format.precision || !l(e) || !1,
                o = 0,
                s = (u = e.toString().split('').reverse()).length; o < s; o++)
                    '.' === (t = u[o]) && (r = !0),
                    this.addDigit(t, r)
        }
        ,
        r.prototype.update = function(e) {
            var t, n = this;
            if (t = (e = this.cleanValue(e)) - this.value)
                return d(this.el, 'odometer-animating-up odometer-animating-down odometer-animating'),
                o(this.el, t > 0 ? 'odometer-animating-up' : 'odometer-animating-down'),
                this.stopWatchingMutations(),
                this.animate(e),
                this.startWatchingMutations(),
                setTimeout(( () => (n.el.offsetHeight,
                o(n.el, 'odometer-animating'))), 0),
                this.value = e
        }
        ,
        r.prototype.renderDigit = () => a('<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value"></span></span></span></span></span>'),
        r.prototype.insertDigit = function(e, t) {
            return null != t ? this.inside.insertBefore(e, t) : this.inside.children.length ? this.inside.insertBefore(e, this.inside.children[0]) : this.inside.appendChild(e)
        }
        ,
        r.prototype.addSpacer = function(e, t, n) {
            var r;
            return (r = a('<span class="odometer-formatting-mark"></span>')).innerHTML = e,
            n && o(r, n),
            this.insertDigit(r, t)
        }
        ,
        r.prototype.addDigit = function(e, t) {
            var n, r, i, o;
            if (null == t && (t = !0),
            '-' === e)
                return this.addSpacer(e, null, 'odometer-negation-mark');
            if ('.' === e)
                return this.addSpacer(null != (o = this.format.radix) ? o : '.', null, 'odometer-radix-mark');
            if (t)
                for (i = !1; ; ) {
                    if (!this.format.repeating.length) {
                        if (i)
                            throw new Error('Bad odometer format without digits');
                        this.resetFormat(),
                        i = !0
                    }
                    if (n = this.format.repeating[this.format.repeating.length - 1],
                    this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1),
                    'd' === n)
                        break;
                    this.addSpacer(n)
                }
            return (r = this.renderDigit()).querySelector('.odometer-value').innerHTML = e,
            this.digits.push(r),
            this.insertDigit(r)
        }
        ,
        r.prototype.animate = function(e) {
            return i && 'count' !== this.options.animation ? this.animateSlide(e) : this.animateCount(e)
        }
        ,
        r.prototype.animateCount = function(e) {
            var t, n, r, i, o, a = this;
            if (n = +e - this.value)
                return i = r = u(),
                t = this.value,
                (o = () => {
                    var s, p;
                    return u() - i > a.options.duration ? (a.value = e,
                    a.render(),
                    void m(a.el, 'odometerdone')) : ((s = u() - r) > 50 && (r = u(),
                    p = s / a.options.duration,
                    t += n * p,
                    a.render(Math.round(t))),
                    null != c ? c(o) : setTimeout(o, 50))
                }
                )()
        }
        ,
        r.prototype.getDigitCount = function() {
            var e, t, n, r, i, o;
            for (e = i = 0,
            o = (r = 1 <= arguments.length ? T.call(arguments, 0) : []).length; i < o; e = ++i)
                n = r[e],
                r[e] = Math.abs(n);
            return t = Math.max.apply(Math, r),
            Math.ceil(Math.log(t + 1) / Math.log(10))
        }
        ,
        r.prototype.getFractionalDigitCount = function() {
            var e, t, n, r, i, o, a;
            for (t = /^\-?\d*\.(\d*?)0*$/,
            e = o = 0,
            a = (i = 1 <= arguments.length ? T.call(arguments, 0) : []).length; o < a; e = ++o)
                r = i[e],
                i[e] = r.toString(),
                n = t.exec(i[e]),
                i[e] = null == n ? 0 : n[1].length;
            return Math.max.apply(Math, i)
        }
        ,
        r.prototype.resetDigits = function() {
            return this.digits = [],
            this.ribbons = [],
            this.inside.innerHTML = '',
            this.resetFormat()
        }
        ,
        r.prototype.animateSlide = function(e) {
            var t, n, r, i, a, s, p, l, u, d, c, f, h, m, g, b, y, w, E, T, x, M, O, L, A, D, S;
            if (b = this.value,
            (l = this.getFractionalDigitCount(b, e)) && (e *= Math.pow(10, l),
            b *= Math.pow(10, l)),
            r = e - b) {
                for (this.bindTransitionEnd(),
                i = this.getDigitCount(b, e),
                a = [],
                t = 0,
                c = E = 0; 0 <= i ? E < i : E > i; c = 0 <= i ? ++E : --E) {
                    if (y = v(b / Math.pow(10, i - c - 1)),
                    s = (p = v(e / Math.pow(10, i - c - 1))) - y,
                    Math.abs(s) > this.MAX_VALUES) {
                        for (d = [],
                        f = s / (this.MAX_VALUES + this.MAX_VALUES * t * .5),
                        n = y; s > 0 && n < p || s < 0 && n > p; )
                            d.push(Math.round(n)),
                            n += f;
                        d[d.length - 1] !== p && d.push(p),
                        t++
                    } else
                        d = ( () => {
                            S = [];
                            for (var e = y; y <= p ? e <= p : e >= p; y <= p ? e++ : e--)
                                S.push(e);
                            return S
                        }
                        ).apply(this);
                    for (c = T = 0,
                    M = d.length; T < M; c = ++T)
                        u = d[c],
                        d[c] = Math.abs(u % 10);
                    a.push(d)
                }
                for (this.resetDigits(),
                c = x = 0,
                O = (D = a.reverse()).length; x < O; c = ++x)
                    for (d = D[c],
                    this.digits[c] || this.addDigit(' ', c >= l),
                    null == (w = this.ribbons)[c] && (w[c] = this.digits[c].querySelector('.odometer-ribbon-inner')),
                    this.ribbons[c].innerHTML = '',
                    r < 0 && (d = d.reverse()),
                    h = A = 0,
                    L = d.length; A < L; h = ++A)
                        u = d[h],
                        (g = document.createElement('div')).className = 'odometer-value',
                        g.innerHTML = u,
                        this.ribbons[c].appendChild(g),
                        h === d.length - 1 && o(g, 'odometer-last-value'),
                        0 === h && o(g, 'odometer-first-value');
                return y < 0 && this.addDigit('-'),
                null != (m = this.inside.querySelector('.odometer-radix-mark')) && m.parent.removeChild(m),
                l ? this.addSpacer(this.format.radix, this.digits[l - 1], 'odometer-radix-mark') : void 0
            }
        }
        ,
        r
    }(),
    r.options = null != (w = window.odometerOptions) ? w : {},
    setTimeout(( () => {
        var e, t, n, i, o;
        if (window.odometerOptions) {
            for (e in o = [],
            i = window.odometerOptions)
                t = i[e],
                o.push(null != (n = r.options)[e] ? (n = r.options)[e] : n[e] = t);
            return o
        }
    }
    ), 0),
    r.init = () => {
        var e, t, n, i, o, a;
        if (null != document.querySelectorAll) {
            for (a = [],
            n = 0,
            i = (t = document.querySelectorAll(r.options.selector || '.odometer')).length; n < i; n++)
                e = t[n],
                a.push(e.odometer = new r({
                    el: e,
                    value: null != (o = e.innerText) ? o : e.textContent
                }));
            return a
        }
    }
    ,
    null != (null != (E = document.documentElement) ? E.doScroll : void 0) && null != document.createEventObject ? (y = document.onreadystatechange,
    document.onreadystatechange = function() {
        return 'complete' === document.readyState && !1 !== r.options.auto && r.init(),
        null != y ? y.apply(this, arguments) : void 0
    }
    ) : document.addEventListener('DOMContentLoaded', ( () => {
        if (!1 !== r.options.auto)
            return r.init()
    }
    ), !1),
    null !== p ? s.exports = r : window.Odometer = r
}
.call(o);
var u = a(l.exports);
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var d = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator
  , c = ( () => {
    for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1)
        if (d && navigator.userAgent.indexOf(e[t]) >= 0)
            return 1;
    return 0
}
)();
var f = d && window.Promise ? function(e) {
    var t = !1;
    return () => {
        t || (t = !0,
        window.Promise.resolve().then(( () => {
            t = !1,
            e()
        }
        )))
    }
}
: function(e) {
    var t = !1;
    return () => {
        t || (t = !0,
        setTimeout(( () => {
            t = !1,
            e()
        }
        ), c))
    }
}
;
function h(e) {
    return e && '[object Function]' === {}.toString.call(e)
}
function m(e, t) {
    if (1 !== e.nodeType)
        return [];
    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
    return t ? n[t] : n
}
function v(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host
}
function g(e) {
    if (!e)
        return document.body;
    switch (e.nodeName) {
    case 'HTML':
    case 'BODY':
        return e.ownerDocument.body;
    case '#document':
        return e.body
    }
    var t = m(e)
      , n = t.overflow
      , r = t.overflowX
      , i = t.overflowY;
    return /(auto|scroll|overlay)/.test(n + i + r) ? e : g(v(e))
}
function b(e) {
    return e && e.referenceNode ? e.referenceNode : e
}
var y = d && !(!window.MSInputMethodContext || !document.documentMode)
  , w = d && /MSIE 10/.test(navigator.userAgent);
function E(e) {
    return 11 === e ? y : 10 === e ? w : y || w
}
function T(e) {
    if (!e)
        return document.documentElement;
    for (var t = E(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
        n = (e = e.nextElementSibling).offsetParent;
    var r = n && n.nodeName;
    return r && 'BODY' !== r && 'HTML' !== r ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === m(n, 'position') ? T(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
}
function x(e) {
    return null !== e.parentNode ? x(e.parentNode) : e
}
function M(e, t) {
    if (!(e && e.nodeType && t && t.nodeType))
        return document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
      , r = n ? e : t
      , i = n ? t : e
      , o = document.createRange();
    o.setStart(r, 0),
    o.setEnd(i, 0);
    var a, s, p = o.commonAncestorContainer;
    if (e !== p && t !== p || r.contains(i))
        return 'BODY' === (s = (a = p).nodeName) || 'HTML' !== s && T(a.firstElementChild) !== a ? T(p) : p;
    var l = x(e);
    return l.host ? M(l.host, t) : M(e, x(t).host)
}
function O(e) {
    var t = 'top' === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top') ? 'scrollTop' : 'scrollLeft'
      , n = e.nodeName;
    if ('BODY' === n || 'HTML' === n) {
        var r = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || r)[t]
    }
    return e[t]
}
function L(e, t) {
    var n = 'x' === t ? 'Left' : 'Top'
      , r = 'Left' === n ? 'Right' : 'Bottom';
    return parseFloat(e['border' + n + 'Width']) + parseFloat(e['border' + r + 'Width'])
}
function A(e, t, n, r) {
    return Math.max(t['offset' + e], t['scroll' + e], n['client' + e], n['offset' + e], n['scroll' + e], E(10) ? parseInt(n['offset' + e]) + parseInt(r['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(r['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
}
function D(e) {
    var t = e.body
      , n = e.documentElement
      , r = E(10) && getComputedStyle(n);
    return {
        height: A('Height', t, n, r),
        width: A('Width', t, n, r)
    }
}
var S = ( () => {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            'value'in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    return (t, n, r) => (n && e(t.prototype, n),
    r && e(t, r),
    t)
}
)()
  , C = (e, t, n) => (t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : e[t] = n,
e)
  , k = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
;
function F(e) {
    return k({}, e, {
        right: e.left + e.width,
        bottom: e.top + e.height
    })
}
function I(e) {
    var t = {};
    try {
        if (E(10)) {
            t = e.getBoundingClientRect();
            var n = O(e, 'top')
              , r = O(e, 'left');
            t.top += n,
            t.left += r,
            t.bottom += n,
            t.right += r
        } else
            t = e.getBoundingClientRect()
    } catch (e) {}
    var i = {
        left: t.left,
        top: t.top,
        width: t.right - t.left,
        height: t.bottom - t.top
    }
      , o = 'HTML' === e.nodeName ? D(e.ownerDocument) : {}
      , a = o.width || e.clientWidth || i.width
      , s = o.height || e.clientHeight || i.height
      , p = e.offsetWidth - a
      , l = e.offsetHeight - s;
    if (p || l) {
        var u = m(e);
        p -= L(u, 'x'),
        l -= L(u, 'y'),
        i.width -= p,
        i.height -= l
    }
    return F(i)
}
function H(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
      , r = E(10)
      , i = 'HTML' === t.nodeName
      , o = I(e)
      , a = I(t)
      , s = g(e)
      , p = m(t)
      , l = parseFloat(p.borderTopWidth)
      , u = parseFloat(p.borderLeftWidth);
    n && i && (a.top = Math.max(a.top, 0),
    a.left = Math.max(a.left, 0));
    var d = F({
        top: o.top - a.top - l,
        left: o.left - a.left - u,
        width: o.width,
        height: o.height
    });
    if (d.marginTop = 0,
    d.marginLeft = 0,
    !r && i) {
        var c = parseFloat(p.marginTop)
          , f = parseFloat(p.marginLeft);
        d.top -= l - c,
        d.bottom -= l - c,
        d.left -= u - f,
        d.right -= u - f,
        d.marginTop = c,
        d.marginLeft = f
    }
    return (r && !n ? t.contains(s) : t === s && 'BODY' !== s.nodeName) && (d = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , r = O(t, 'top')
          , i = O(t, 'left')
          , o = n ? -1 : 1;
        return e.top += r * o,
        e.bottom += r * o,
        e.left += i * o,
        e.right += i * o,
        e
    }(d, t)),
    d
}
function N(e) {
    var t = e.nodeName;
    if ('BODY' === t || 'HTML' === t)
        return !1;
    if ('fixed' === m(e, 'position'))
        return !0;
    var n = v(e);
    return !!n && N(n)
}
function B(e) {
    if (!e || !e.parentElement || E())
        return document.documentElement;
    for (var t = e.parentElement; t && 'none' === m(t, 'transform'); )
        t = t.parentElement;
    return t || document.documentElement
}
function P(e, t, n, r) {
    var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
      , o = {
        top: 0,
        left: 0
    }
      , a = i ? B(e) : M(e, b(t));
    if ('viewport' === r)
        o = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = e.ownerDocument.documentElement
              , r = H(e, n)
              , i = Math.max(n.clientWidth, window.innerWidth || 0)
              , o = Math.max(n.clientHeight, window.innerHeight || 0)
              , a = t ? 0 : O(n)
              , s = t ? 0 : O(n, 'left');
            return F({
                top: a - r.top + r.marginTop,
                left: s - r.left + r.marginLeft,
                width: i,
                height: o
            })
        }(a, i);
    else {
        var s = void 0;
        'scrollParent' === r ? 'BODY' === (s = g(v(t))).nodeName && (s = e.ownerDocument.documentElement) : s = 'window' === r ? e.ownerDocument.documentElement : r;
        var p = H(s, a, i);
        if ('HTML' !== s.nodeName || N(a))
            o = p;
        else {
            var l = D(e.ownerDocument)
              , u = l.height
              , d = l.width;
            o.top += p.top - p.marginTop,
            o.bottom = u + p.top,
            o.left += p.left - p.marginLeft,
            o.right = d + p.left
        }
    }
    var c = 'number' == typeof (n = n || 0);
    return o.left += c ? n : n.left || 0,
    o.top += c ? n : n.top || 0,
    o.right -= c ? n : n.right || 0,
    o.bottom -= c ? n : n.bottom || 0,
    o
}
function V(e, t, n, r, i) {
    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto'))
        return e;
    var a = P(n, r, o, i)
      , s = {
        top: {
            width: a.width,
            height: t.top - a.top
        },
        right: {
            width: a.right - t.right,
            height: a.height
        },
        bottom: {
            width: a.width,
            height: a.bottom - t.bottom
        },
        left: {
            width: t.left - a.left,
            height: a.height
        }
    }
      , p = Object.keys(s).map((e => {
        return k({
            key: e
        }, s[e], {
            area: (t = s[e],
            t.width * t.height)
        });
        var t
    }
    )).sort(( (e, t) => t.area - e.area))
      , l = p.filter((e => {
        var t = e.width
          , r = e.height;
        return t >= n.clientWidth && r >= n.clientHeight
    }
    ))
      , u = l.length > 0 ? l[0].key : p[0].key
      , d = e.split('-')[1];
    return u + (d ? '-' + d : '')
}
function q(e, t, n) {
    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    return H(n, r ? B(t) : M(t, b(n)), r)
}
function W(e) {
    var t = e.ownerDocument.defaultView.getComputedStyle(e)
      , n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
      , r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
    return {
        width: e.offsetWidth + r,
        height: e.offsetHeight + n
    }
}
function j(e) {
    var t = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, (e => t[e]))
}
function U(e, t, n) {
    n = n.split('-')[0];
    var r = W(e)
      , i = {
        width: r.width,
        height: r.height
    }
      , o = -1 !== ['right', 'left'].indexOf(n)
      , a = o ? 'top' : 'left'
      , s = o ? 'left' : 'top'
      , p = o ? 'height' : 'width'
      , l = o ? 'width' : 'height';
    return i[a] = t[a] + t[p] / 2 - r[p] / 2,
    i[s] = n === s ? t[s] - r[l] : t[j(s)],
    i
}
function R(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
}
function _(e, t, n) {
    return (void 0 === n ? e : e.slice(0, function(e, t, n) {
        if (Array.prototype.findIndex)
            return e.findIndex((e => e[t] === n));
        var r = R(e, (e => e[t] === n));
        return e.indexOf(r)
    }(e, 'name', n))).forEach((e => {
        e.function;
        var n = e.function || e.fn;
        e.enabled && h(n) && (t.offsets.popper = F(t.offsets.popper),
        t.offsets.reference = F(t.offsets.reference),
        t = n(t, e))
    }
    )),
    t
}
function z() {
    if (!this.state.isDestroyed) {
        var e = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {}
        };
        e.offsets.reference = q(this.state, this.popper, this.reference, this.options.positionFixed),
        e.placement = V(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
        e.originalPlacement = e.placement,
        e.positionFixed = this.options.positionFixed,
        e.offsets.popper = U(this.popper, e.offsets.reference, e.placement),
        e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute',
        e = _(this.modifiers, e),
        this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
        this.options.onCreate(e))
    }
}
function Y(e, t) {
    return e.some((e => {
        var n = e.name;
        return e.enabled && n === t
    }
    ))
}
function $(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
        var i = t[r]
          , o = i ? '' + i + n : e;
        if (void 0 !== document.body.style[o])
            return o
    }
    return null
}
function X() {
    return this.state.isDestroyed = !0,
    Y(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
    this.popper.style.position = '',
    this.popper.style.top = '',
    this.popper.style.left = '',
    this.popper.style.right = '',
    this.popper.style.bottom = '',
    this.popper.style.willChange = '',
    this.popper.style[$('transform')] = ''),
    this.disableEventListeners(),
    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
    this
}
function Z(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window
}
function Q(e, t, n, r) {
    var i = 'BODY' === e.nodeName
      , o = i ? e.ownerDocument.defaultView : e;
    o.addEventListener(t, n, {
        passive: !0
    }),
    i || Q(g(o.parentNode), t, n, r),
    r.push(o)
}
function J(e, t, n, r) {
    n.updateBound = r,
    Z(e).addEventListener('resize', n.updateBound, {
        passive: !0
    });
    var i = g(e);
    return Q(i, 'scroll', n.updateBound, n.scrollParents),
    n.scrollElement = i,
    n.eventsEnabled = !0,
    n
}
function G() {
    this.state.eventsEnabled || (this.state = J(this.reference, this.options, this.state, this.scheduleUpdate))
}
function K() {
    var e, t;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
    this.state = (e = this.reference,
    t = this.state,
    Z(e).removeEventListener('resize', t.updateBound),
    t.scrollParents.forEach((e => {
        e.removeEventListener('scroll', t.updateBound)
    }
    )),
    t.updateBound = null,
    t.scrollParents = [],
    t.scrollElement = null,
    t.eventsEnabled = !1,
    t))
}
function ee(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
}
function te(e, t) {
    Object.keys(t).forEach((n => {
        var r = '';
        -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) && ee(t[n]) && (r = 'px'),
        e.style[n] = t[n] + r
    }
    ))
}
var ne = d && /Firefox/i.test(navigator.userAgent);
function re(e, t, n) {
    var r = R(e, (e => e.name === t))
      , i = !!r && e.some((e => e.name === n && e.enabled && e.order < r.order));
    if (!i)
        ;return i
}
var ie = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']
  , oe = ie.slice(3);
function ae(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
      , n = oe.indexOf(e)
      , r = oe.slice(n + 1).concat(oe.slice(0, n));
    return t ? r.reverse() : r
}
var se = 'flip'
  , pe = 'clockwise'
  , le = 'counterclockwise';
function ue(e, t, n, r) {
    var i = [0, 0]
      , o = -1 !== ['right', 'left'].indexOf(r)
      , a = e.split(/(\+|\-)/).map((e => e.trim()))
      , s = a.indexOf(R(a, (e => -1 !== e.search(/,|\s/))));
    a[s] && a[s].indexOf(',');
    var p = /\s*,\s*|\s+/
      , l = -1 !== s ? [a.slice(0, s).concat([a[s].split(p)[0]]), [a[s].split(p)[1]].concat(a.slice(s + 1))] : [a];
    return l = l.map(( (e, r) => {
        var i = (1 === r ? !o : o) ? 'height' : 'width'
          , a = !1;
        return e.reduce(( (e, t) => '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t,
        a = !0,
        e) : a ? (e[e.length - 1] += t,
        a = !1,
        e) : e.concat(t)), []).map((e => function(e, t, n, r) {
            var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
              , o = +i[1]
              , a = i[2];
            if (!o)
                return e;
            if (0 === a.indexOf('%')) {
                return F('%p' === a ? n : r)[t] / 100 * o
            }
            if ('vh' === a || 'vw' === a)
                return ('vh' === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
            return o
        }(e, i, t, n)))
    }
    )),
    l.forEach(( (e, t) => {
        e.forEach(( (n, r) => {
            ee(n) && (i[t] += n * ('-' === e[r - 1] ? -1 : 1))
        }
        ))
    }
    )),
    i
}
var de = {
    shift: {
        order: 100,
        enabled: !0,
        fn: function(e) {
            var t = e.placement
              , n = t.split('-')[0]
              , r = t.split('-')[1];
            if (r) {
                var i = e.offsets
                  , o = i.reference
                  , a = i.popper
                  , s = -1 !== ['bottom', 'top'].indexOf(n)
                  , p = s ? 'left' : 'top'
                  , l = s ? 'width' : 'height'
                  , u = {
                    start: C({}, p, o[p]),
                    end: C({}, p, o[p] + o[l] - a[l])
                };
                e.offsets.popper = k({}, a, u[r])
            }
            return e
        }
    },
    offset: {
        order: 200,
        enabled: !0,
        fn: function(e, t) {
            var n = t.offset
              , r = e.placement
              , i = e.offsets
              , o = i.popper
              , a = i.reference
              , s = r.split('-')[0]
              , p = void 0;
            return p = ee(+n) ? [+n, 0] : ue(n, o, a, s),
            'left' === s ? (o.top += p[0],
            o.left -= p[1]) : 'right' === s ? (o.top += p[0],
            o.left += p[1]) : 'top' === s ? (o.left += p[0],
            o.top -= p[1]) : 'bottom' === s && (o.left += p[0],
            o.top += p[1]),
            e.popper = o,
            e
        },
        offset: 0
    },
    preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function(e, t) {
            var n = t.boundariesElement || T(e.instance.popper);
            e.instance.reference === n && (n = T(n));
            var r = $('transform')
              , i = e.instance.popper.style
              , o = i.top
              , a = i.left
              , s = i[r];
            i.top = '',
            i.left = '',
            i[r] = '';
            var p = P(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
            i.top = o,
            i.left = a,
            i[r] = s,
            t.boundaries = p;
            var l = t.priority
              , u = e.offsets.popper
              , d = {
                primary: function(e) {
                    var n = u[e];
                    return u[e] < p[e] && !t.escapeWithReference && (n = Math.max(u[e], p[e])),
                    C({}, e, n)
                },
                secondary: function(e) {
                    var n = 'right' === e ? 'left' : 'top'
                      , r = u[n];
                    return u[e] > p[e] && !t.escapeWithReference && (r = Math.min(u[n], p[e] - ('right' === e ? u.width : u.height))),
                    C({}, n, r)
                }
            };
            return l.forEach((e => {
                var t = -1 !== ['left', 'top'].indexOf(e) ? 'primary' : 'secondary';
                u = k({}, u, d[t](e))
            }
            )),
            e.offsets.popper = u,
            e
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
    },
    keepTogether: {
        order: 400,
        enabled: !0,
        fn: function(e) {
            var t = e.offsets
              , n = t.popper
              , r = t.reference
              , i = e.placement.split('-')[0]
              , o = Math.floor
              , a = -1 !== ['top', 'bottom'].indexOf(i)
              , s = a ? 'right' : 'bottom'
              , p = a ? 'left' : 'top'
              , l = a ? 'width' : 'height';
            return n[s] < o(r[p]) && (e.offsets.popper[p] = o(r[p]) - n[l]),
            n[p] > o(r[s]) && (e.offsets.popper[p] = o(r[s])),
            e
        }
    },
    arrow: {
        order: 500,
        enabled: !0,
        fn: function(e, t) {
            var n;
            if (!re(e.instance.modifiers, 'arrow', 'keepTogether'))
                return e;
            var r = t.element;
            if ('string' == typeof r) {
                if (!(r = e.instance.popper.querySelector(r)))
                    return e
            } else if (!e.instance.popper.contains(r))
                return e;
            var i = e.placement.split('-')[0]
              , o = e.offsets
              , a = o.popper
              , s = o.reference
              , p = -1 !== ['left', 'right'].indexOf(i)
              , l = p ? 'height' : 'width'
              , u = p ? 'Top' : 'Left'
              , d = u.toLowerCase()
              , c = p ? 'left' : 'top'
              , f = p ? 'bottom' : 'right'
              , h = W(r)[l];
            s[f] - h < a[d] && (e.offsets.popper[d] -= a[d] - (s[f] - h)),
            s[d] + h > a[f] && (e.offsets.popper[d] += s[d] + h - a[f]),
            e.offsets.popper = F(e.offsets.popper);
            var v = s[d] + s[l] / 2 - h / 2
              , g = m(e.instance.popper)
              , b = parseFloat(g['margin' + u])
              , y = parseFloat(g['border' + u + 'Width'])
              , w = v - e.offsets.popper[d] - b - y;
            return w = Math.max(Math.min(a[l] - h, w), 0),
            e.arrowElement = r,
            e.offsets.arrow = (C(n = {}, d, Math.round(w)),
            C(n, c, ''),
            n),
            e
        },
        element: '[x-arrow]'
    },
    flip: {
        order: 600,
        enabled: !0,
        fn: function(e, t) {
            if (Y(e.instance.modifiers, 'inner'))
                return e;
            if (e.flipped && e.placement === e.originalPlacement)
                return e;
            var n = P(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
              , r = e.placement.split('-')[0]
              , i = j(r)
              , o = e.placement.split('-')[1] || ''
              , a = [];
            switch (t.behavior) {
            case se:
                a = [r, i];
                break;
            case pe:
                a = ae(r);
                break;
            case le:
                a = ae(r, !0);
                break;
            default:
                a = t.behavior
            }
            return a.forEach(( (s, p) => {
                if (r !== s || a.length === p + 1)
                    return e;
                r = e.placement.split('-')[0],
                i = j(r);
                var l = e.offsets.popper
                  , u = e.offsets.reference
                  , d = Math.floor
                  , c = 'left' === r && d(l.right) > d(u.left) || 'right' === r && d(l.left) < d(u.right) || 'top' === r && d(l.bottom) > d(u.top) || 'bottom' === r && d(l.top) < d(u.bottom)
                  , f = d(l.left) < d(n.left)
                  , h = d(l.right) > d(n.right)
                  , m = d(l.top) < d(n.top)
                  , v = d(l.bottom) > d(n.bottom)
                  , g = 'left' === r && f || 'right' === r && h || 'top' === r && m || 'bottom' === r && v
                  , b = -1 !== ['top', 'bottom'].indexOf(r)
                  , y = !!t.flipVariations && (b && 'start' === o && f || b && 'end' === o && h || !b && 'start' === o && m || !b && 'end' === o && v)
                  , w = !!t.flipVariationsByContent && (b && 'start' === o && h || b && 'end' === o && f || !b && 'start' === o && v || !b && 'end' === o && m)
                  , E = y || w;
                (c || g || E) && (e.flipped = !0,
                (c || g) && (r = a[p + 1]),
                E && (o = function(e) {
                    return 'end' === e ? 'start' : 'start' === e ? 'end' : e
                }(o)),
                e.placement = r + (o ? '-' + o : ''),
                e.offsets.popper = k({}, e.offsets.popper, U(e.instance.popper, e.offsets.reference, e.placement)),
                e = _(e.instance.modifiers, e, 'flip'))
            }
            )),
            e
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport',
        flipVariations: !1,
        flipVariationsByContent: !1
    },
    inner: {
        order: 700,
        enabled: !1,
        fn: function(e) {
            var t = e.placement
              , n = t.split('-')[0]
              , r = e.offsets
              , i = r.popper
              , o = r.reference
              , a = -1 !== ['left', 'right'].indexOf(n)
              , s = -1 === ['top', 'left'].indexOf(n);
            return i[a ? 'left' : 'top'] = o[n] - (s ? i[a ? 'width' : 'height'] : 0),
            e.placement = j(t),
            e.offsets.popper = F(i),
            e
        }
    },
    hide: {
        order: 800,
        enabled: !0,
        fn: function(e) {
            if (!re(e.instance.modifiers, 'hide', 'preventOverflow'))
                return e;
            var t = e.offsets.reference
              , n = R(e.instance.modifiers, (e => 'preventOverflow' === e.name)).boundaries;
            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                if (!0 === e.hide)
                    return e;
                e.hide = !0,
                e.attributes['x-out-of-boundaries'] = ''
            } else {
                if (!1 === e.hide)
                    return e;
                e.hide = !1,
                e.attributes['x-out-of-boundaries'] = !1
            }
            return e
        }
    },
    computeStyle: {
        order: 850,
        enabled: !0,
        fn: function(e, t) {
            var n = t.x
              , r = t.y
              , i = e.offsets.popper
              , o = R(e.instance.modifiers, (e => 'applyStyle' === e.name)).gpuAcceleration
              , a = void 0 !== o ? o : t.gpuAcceleration
              , s = T(e.instance.popper)
              , p = I(s)
              , l = {
                position: i.position
            }
              , u = function(e, t) {
                var n = e.offsets
                  , r = n.popper
                  , i = n.reference
                  , o = Math.round
                  , a = Math.floor
                  , s = e => e
                  , p = o(i.width)
                  , l = o(r.width)
                  , u = -1 !== ['left', 'right'].indexOf(e.placement)
                  , d = -1 !== e.placement.indexOf('-')
                  , c = t ? u || d || p % 2 == l % 2 ? o : a : s
                  , f = t ? o : s;
                return {
                    left: c(p % 2 == 1 && l % 2 == 1 && !d && t ? r.left - 1 : r.left),
                    top: f(r.top),
                    bottom: f(r.bottom),
                    right: c(r.right)
                }
            }(e, window.devicePixelRatio < 2 || !ne)
              , d = 'bottom' === n ? 'top' : 'bottom'
              , c = 'right' === r ? 'left' : 'right'
              , f = $('transform')
              , h = void 0
              , m = void 0;
            if (m = 'bottom' === d ? 'HTML' === s.nodeName ? -s.clientHeight + u.bottom : -p.height + u.bottom : u.top,
            h = 'right' === c ? 'HTML' === s.nodeName ? -s.clientWidth + u.right : -p.width + u.right : u.left,
            a && f)
                l[f] = 'translate3d(' + h + 'px, ' + m + 'px, 0)',
                l[d] = 0,
                l[c] = 0,
                l.willChange = 'transform';
            else {
                var v = 'bottom' === d ? -1 : 1
                  , g = 'right' === c ? -1 : 1;
                l[d] = m * v,
                l[c] = h * g,
                l.willChange = d + ', ' + c
            }
            var b = {
                'x-placement': e.placement
            };
            return e.attributes = k({}, b, e.attributes),
            e.styles = k({}, l, e.styles),
            e.arrowStyles = k({}, e.offsets.arrow, e.arrowStyles),
            e
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
    },
    applyStyle: {
        order: 900,
        enabled: !0,
        fn: function(e) {
            var t, n;
            return te(e.instance.popper, e.styles),
            t = e.instance.popper,
            n = e.attributes,
            Object.keys(n).forEach((e => {
                !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
            }
            )),
            e.arrowElement && Object.keys(e.arrowStyles).length && te(e.arrowElement, e.arrowStyles),
            e
        },
        onLoad: function(e, t, n, r, i) {
            var o = q(i, t, e, n.positionFixed)
              , a = V(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
            return t.setAttribute('x-placement', a),
            te(t, {
                position: n.positionFixed ? 'fixed' : 'absolute'
            }),
            n
        },
        gpuAcceleration: void 0
    }
}
  , ce = {
    placement: 'bottom',
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function() {},
    onUpdate: function() {},
    modifiers: de
}
  , fe = function() {
    function e(t, n) {
        var r = this
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        ( (e, t) => {
            if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
        }
        )(this, e),
        this.scheduleUpdate = () => requestAnimationFrame(r.update),
        this.update = f(this.update.bind(this)),
        this.options = k({}, e.Defaults, i),
        this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        },
        this.reference = t && t.jquery ? t[0] : t,
        this.popper = n && n.jquery ? n[0] : n,
        this.options.modifiers = {},
        Object.keys(k({}, e.Defaults.modifiers, i.modifiers)).forEach((t => {
            r.options.modifiers[t] = k({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
        }
        )),
        this.modifiers = Object.keys(this.options.modifiers).map((e => k({
            name: e
        }, r.options.modifiers[e]))).sort(( (e, t) => e.order - t.order)),
        this.modifiers.forEach((e => {
            e.enabled && h(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
        }
        )),
        this.update();
        var o = this.options.eventsEnabled;
        o && this.enableEventListeners(),
        this.state.eventsEnabled = o
    }
    return S(e, [{
        key: 'update',
        value: function() {
            return z.call(this)
        }
    }, {
        key: 'destroy',
        value: function() {
            return X.call(this)
        }
    }, {
        key: 'enableEventListeners',
        value: function() {
            return G.call(this)
        }
    }, {
        key: 'disableEventListeners',
        value: function() {
            return K.call(this)
        }
    }]),
    e
}();
/**!
* tippy.js v5.2.1
* (c) 2017-2020 atomiks
* MIT License
*/
function he() {
    return he = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    he.apply(this, arguments)
}
fe.Utils = ('undefined' != typeof window ? window : global).PopperUtils,
fe.placements = ie,
fe.Defaults = ce;
function me(e, t) {
    e.innerHTML = t
}
function ve(e, t) {
    return {}.hasOwnProperty.call(e, t)
}
function ge(e) {
    return Ee(e) ? [e] : function(e) {
        return we(e, 'NodeList')
    }(e) ? Se(e) : Array.isArray(e) ? e : Se(document.querySelectorAll(e))
}
function be(e, t, n) {
    if (Array.isArray(e)) {
        var r = e[t];
        return r ?? (Array.isArray(n) ? n[t] : n)
    }
    return e
}
function ye(e, t) {
    return e && e.modifiers && e.modifiers[t]
}
function we(e, t) {
    var n = {}.toString.call(e);
    return 0 === n.indexOf('[object') && n.indexOf(t + ']') > -1
}
function Ee(e) {
    return we(e, 'Element')
}
function Te(e, t) {
    return 'function' == typeof e ? e.apply(void 0, t) : e
}
function xe(e, t, n, r) {
    e.filter((e => e.name === t))[0][n] = r
}
function Me() {
    return document.createElement('div')
}
function Oe(e, t) {
    e.forEach((e => {
        e && (e.style.transitionDuration = t + 'ms')
    }
    ))
}
function Le(e, t) {
    e.forEach((e => {
        e && e.setAttribute('data-state', t)
    }
    ))
}
function Ae(e, t) {
    return 0 === t ? e : r => {
        clearTimeout(n),
        n = setTimeout(( () => {
            e(r)
        }
        ), t)
    }
    ;
    var n
}
function De(e, t, n) {
    e && e !== t && e.apply(void 0, n)
}
function Se(e) {
    return [].slice.call(e)
}
function Ce(e, t) {
    return e.indexOf(t) > -1
}
function ke(e) {
    return e.split(/\s+/).filter(Boolean)
}
function Fe(e, t) {
    return void 0 !== e ? e : t
}
function Ie(e) {
    return [].concat(e)
}
function He(e, t) {
    -1 === e.indexOf(t) && e.push(t)
}
function Ne(e) {
    return 'number' == typeof e ? e : parseFloat(e)
}
function Be(e, t, n) {
    void 0 === t && (t = 5);
    var r = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    return Object.keys(r).reduce(( (r, i) => (r[i] = 'number' == typeof t ? t : t[i],
    e === i && (r[i] = 'number' == typeof t ? t + n : t[e] + n),
    r)), r)
}
var Pe = he({
    allowHTML: !0,
    animation: 'fade',
    appendTo: function() {
        return document.body
    },
    aria: 'describedby',
    arrow: !0,
    boundary: 'scrollParent',
    content: '',
    delay: 0,
    distance: 10,
    duration: [300, 250],
    flip: !0,
    flipBehavior: 'flip',
    flipOnUpdate: !1,
    hideOnClick: !0,
    ignoreAttributes: !1,
    inertia: !1,
    interactive: !1,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    lazy: !0,
    maxWidth: 350,
    multiple: !1,
    offset: 0,
    onAfterUpdate: function() {},
    onBeforeUpdate: function() {},
    onCreate: function() {},
    onDestroy: function() {},
    onHidden: function() {},
    onHide: function() {},
    onMount: function() {},
    onShow: function() {},
    onShown: function() {},
    onTrigger: function() {},
    onUntrigger: function() {},
    placement: 'top',
    plugins: [],
    popperOptions: {},
    role: 'tooltip',
    showOnCreate: !1,
    theme: '',
    touch: !0,
    trigger: 'mouseenter focus',
    triggerTarget: null,
    updateDuration: 0,
    zIndex: 9999
}, {
    animateFill: !1,
    followCursor: !1,
    inlinePositioning: !1,
    sticky: !1
})
  , Ve = Object.keys(Pe)
  , qe = ['arrow', 'boundary', 'distance', 'flip', 'flipBehavior', 'flipOnUpdate', 'offset', 'placement', 'popperOptions'];
function We(e) {
    var t = (e.plugins || []).reduce(( (t, n) => {
        var r = n.name
          , i = n.defaultValue;
        return r && (t[r] = void 0 !== e[r] ? e[r] : i),
        t
    }
    ), {});
    return he({}, e, {}, t)
}
function je(e, t) {
    var n = he({}, t, {
        content: Te(t.content, [e])
    }, t.ignoreAttributes ? {} : function(e, t) {
        return (t ? Object.keys(We(he({}, Pe, {
            plugins: t
        }))) : Ve).reduce(( (t, n) => {
            var r = (e.getAttribute('data-tippy-' + n) || '').trim();
            if (!r)
                return t;
            if ('content' === n)
                t[n] = r;
            else
                try {
                    t[n] = JSON.parse(r)
                } catch (e) {
                    t[n] = r
                }
            return t
        }
        ), {})
    }(e, t.plugins));
    return n.interactive && (n.aria = null),
    n
}
var Ue = {
    passive: !0
}
  , Re = 'tippy-popper'
  , _e = 'tippy-tooltip'
  , ze = 'tippy-content'
  , Ye = 'tippy-arrow'
  , $e = 'tippy-svg-arrow'
  , Xe = '.' + Re
  , Ze = '.' + _e
  , Qe = '.' + ze
  , Je = '.' + Ye
  , Ge = '.' + $e
  , Ke = {
    isTouch: !1
}
  , et = 0;
function tt() {
    Ke.isTouch || (Ke.isTouch = !0,
    window.performance && document.addEventListener('mousemove', nt))
}
function nt() {
    var e = performance.now();
    e - et < 20 && (Ke.isTouch = !1,
    document.removeEventListener('mousemove', nt)),
    et = e
}
function rt() {
    var e, t = document.activeElement;
    if ((e = t) && e._tippy && e._tippy.reference === e) {
        var n = t._tippy;
        t.blur && !n.state.isVisible && t.blur()
    }
}
var it = 'undefined' != typeof window && 'undefined' != typeof document
  , ot = it ? navigator.userAgent : ''
  , at = /MSIE |Trident\//.test(ot)
  , st = it && /iPhone|iPad|iPod/.test(navigator.platform);
function pt(e) {
    var t = e && st && Ke.isTouch;
    document.body.classList[t ? 'add' : 'remove']('tippy-iOS')
}
function lt(e) {
    return e.split('-')[0]
}
function ut(e) {
    e.setAttribute('data-inertia', '')
}
function dt(e) {
    e.setAttribute('data-interactive', '')
}
function ct(e, t) {
    if (Ee(t.content))
        me(e, ''),
        e.appendChild(t.content);
    else if ('function' != typeof t.content) {
        e[t.allowHTML ? 'innerHTML' : 'textContent'] = t.content
    }
}
function ft(e) {
    return {
        tooltip: e.querySelector(Ze),
        content: e.querySelector(Qe),
        arrow: e.querySelector(Je) || e.querySelector(Ge)
    }
}
function ht(e) {
    var t = Me();
    return !0 === e ? t.className = Ye : (t.className = $e,
    Ee(e) ? t.appendChild(e) : me(t, e)),
    t
}
function mt(e, t) {
    var n = Me();
    n.className = Re,
    n.style.position = 'absolute',
    n.style.top = '0',
    n.style.left = '0';
    var r = Me();
    r.className = _e,
    r.id = 'tippy-' + e,
    r.setAttribute('data-state', 'hidden'),
    r.setAttribute('tabindex', '-1'),
    bt(r, 'add', t.theme);
    var i = Me();
    return i.className = ze,
    i.setAttribute('data-state', 'hidden'),
    t.interactive && dt(r),
    t.arrow && (r.setAttribute('data-arrow', ''),
    r.appendChild(ht(t.arrow))),
    t.inertia && ut(r),
    ct(i, t),
    r.appendChild(i),
    n.appendChild(r),
    vt(n, t, t),
    n
}
function vt(e, t, n) {
    var r, i = ft(e), o = i.tooltip, a = i.content, s = i.arrow;
    e.style.zIndex = '' + n.zIndex,
    o.setAttribute('data-animation', n.animation),
    o.style.maxWidth = 'number' == typeof (r = n.maxWidth) ? r + 'px' : r,
    n.role ? o.setAttribute('role', n.role) : o.removeAttribute('role'),
    t.content !== n.content && ct(a, n),
    !t.arrow && n.arrow ? (o.appendChild(ht(n.arrow)),
    o.setAttribute('data-arrow', '')) : t.arrow && !n.arrow ? (o.removeChild(s),
    o.removeAttribute('data-arrow')) : t.arrow !== n.arrow && (o.removeChild(s),
    o.appendChild(ht(n.arrow))),
    !t.interactive && n.interactive ? dt(o) : t.interactive && !n.interactive && function(e) {
        e.removeAttribute('data-interactive')
    }(o),
    !t.inertia && n.inertia ? ut(o) : t.inertia && !n.inertia && function(e) {
        e.removeAttribute('data-inertia')
    }(o),
    t.theme !== n.theme && (bt(o, 'remove', t.theme),
    bt(o, 'add', n.theme))
}
function gt(e, t, n) {
    ['transitionend', 'webkitTransitionEnd'].forEach((r => {
        e[t + 'EventListener'](r, n)
    }
    ))
}
function bt(e, t, n) {
    ke(n).forEach((n => {
        e.classList[t](n + '-theme')
    }
    ))
}
var yt = 1
  , wt = []
  , Et = [];
function Tt(e, t) {
    var n, r, i, o = je(e, he({}, Pe, {}, We(t)));
    if (!o.multiple && e._tippy)
        return null;
    var a, s, p, l, u, d, c, f = !1, h = !1, m = !1, v = 0, g = [], b = Ae(Y, o.interactiveDebounce), y = (u = o.triggerTarget || e,
    (d = Ie(u)[0]) && d.ownerDocument || document), w = yt++, E = mt(w, o), T = ft(E), x = (c = o.plugins).filter(( (e, t) => c.indexOf(e) === t)), M = T.tooltip, O = T.content, L = [M, O], A = {
        id: w,
        reference: e,
        popper: E,
        popperChildren: T,
        popperInstance: null,
        props: o,
        state: {
            currentPlacement: null,
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1
        },
        plugins: x,
        clearDelayTimeouts: function() {
            clearTimeout(n),
            clearTimeout(r),
            cancelAnimationFrame(i)
        },
        setProps: function(t) {
            if (A.state.isDestroyed)
                return;
            H('onBeforeUpdate', [A, t]),
            _();
            var n = A.props
              , r = je(e, he({}, A.props, {}, t, {
                ignoreAttributes: !0
            }));
            r.ignoreAttributes = Fe(t.ignoreAttributes, n.ignoreAttributes),
            A.props = r,
            R(),
            n.interactiveDebounce !== r.interactiveDebounce && (P(),
            b = Ae(Y, r.interactiveDebounce));
            vt(E, n, r),
            A.popperChildren = ft(E),
            n.triggerTarget && !r.triggerTarget ? Ie(n.triggerTarget).forEach((e => {
                e.removeAttribute('aria-expanded')
            }
            )) : r.triggerTarget && e.removeAttribute('aria-expanded');
            if (B(),
            A.popperInstance)
                if (qe.some((e => ve(t, e) && t[e] !== n[e]))) {
                    var i = A.popperInstance.reference;
                    A.popperInstance.destroy(),
                    Q(),
                    A.popperInstance.reference = i,
                    A.state.isVisible && A.popperInstance.enableEventListeners()
                } else
                    A.popperInstance.update();
            H('onAfterUpdate', [A, t])
        },
        setContent: function(e) {
            A.setProps({
                content: e
            })
        },
        show: function(e) {
            void 0 === e && (e = be(A.props.duration, 0, Pe.duration));
            var t = A.state.isVisible
              , n = A.state.isDestroyed
              , r = !A.state.isEnabled
              , i = Ke.isTouch && !A.props.touch;
            if (t || n || r || i)
                return;
            if (F().hasAttribute('disabled'))
                return;
            A.popperInstance || Q();
            if (H('onShow', [A], !1),
            !1 === A.props.onShow(A))
                return;
            q(),
            E.style.visibility = 'visible',
            A.state.isVisible = !0,
            A.state.isMounted || Oe(L.concat(E), 0);
            s = function() {
                A.state.isVisible && (Oe([E], A.props.updateDuration),
                Oe(L, e),
                Le(L, 'visible'),
                N(),
                B(),
                He(Et, A),
                pt(!0),
                A.state.isMounted = !0,
                H('onMount', [A]),
                function(e, t) {
                    j(e, t)
                }(e, ( () => {
                    A.state.isShown = !0,
                    H('onShown', [A])
                }
                )))
            }
            ,
            function() {
                v = 0;
                var e, t = A.props.appendTo, n = F();
                e = A.props.interactive && t === Pe.appendTo || 'parent' === t ? n.parentNode : Te(t, [n]);
                e.contains(E) || e.appendChild(E);
                xe(A.popperInstance.modifiers, 'flip', 'enabled', A.props.flip),
                A.popperInstance.enableEventListeners(),
                A.popperInstance.update()
            }()
        },
        hide: function(e) {
            void 0 === e && (e = be(A.props.duration, 1, Pe.duration));
            var t = !A.state.isVisible && !f
              , n = A.state.isDestroyed
              , r = !A.state.isEnabled && !f;
            if (t || n || r)
                return;
            if (H('onHide', [A], !1),
            !1 === A.props.onHide(A) && !f)
                return;
            W(),
            E.style.visibility = 'hidden',
            A.state.isVisible = !1,
            A.state.isShown = !1,
            Oe(L, e),
            Le(L, 'hidden'),
            N(),
            B(),
            function(e, t) {
                j(e, ( () => {
                    !A.state.isVisible && E.parentNode && E.parentNode.contains(E) && t()
                }
                ))
            }(e, ( () => {
                A.popperInstance.disableEventListeners(),
                A.popperInstance.options.placement = A.props.placement,
                E.parentNode.removeChild(E),
                0 === (Et = Et.filter((e => e !== A))).length && pt(!1),
                A.state.isMounted = !1,
                H('onHidden', [A])
            }
            ))
        },
        enable: function() {
            A.state.isEnabled = !0
        },
        disable: function() {
            A.hide(),
            A.state.isEnabled = !1
        },
        destroy: function() {
            if (A.state.isDestroyed)
                return;
            f = !0,
            A.clearDelayTimeouts(),
            A.hide(0),
            _(),
            delete e._tippy,
            A.popperInstance && A.popperInstance.destroy();
            f = !1,
            A.state.isDestroyed = !0,
            H('onDestroy', [A])
        }
    };
    e._tippy = A,
    E._tippy = A;
    var D = x.map((e => e.fn(A)))
      , S = e.hasAttribute('aria-expanded');
    return R(),
    B(),
    o.lazy || Q(),
    H('onCreate', [A]),
    o.showOnCreate && G(),
    E.addEventListener('mouseenter', ( () => {
        A.props.interactive && A.state.isVisible && A.clearDelayTimeouts()
    }
    )),
    E.addEventListener('mouseleave', (e => {
        A.props.interactive && Ce(A.props.trigger, 'mouseenter') && (b(e),
        y.addEventListener('mousemove', b))
    }
    )),
    A;
    function C() {
        var e = A.props.touch;
        return Array.isArray(e) ? e : [e, 0]
    }
    function k() {
        return 'hold' === C()[0]
    }
    function F() {
        return l || e
    }
    function I(e) {
        return A.state.isMounted && !A.state.isVisible || Ke.isTouch || a && 'focus' === a.type ? 0 : be(A.props.delay, e ? 0 : 1, Pe.delay)
    }
    function H(e, t, n) {
        var r;
        (void 0 === n && (n = !0),
        D.forEach((n => {
            ve(n, e) && n[e].apply(n, t)
        }
        )),
        n) && (r = A.props)[e].apply(r, t)
    }
    function N() {
        var t = A.props.aria;
        if (t) {
            var n = 'aria-' + t
              , r = M.id;
            Ie(A.props.triggerTarget || e).forEach((e => {
                var t = e.getAttribute(n);
                if (A.state.isVisible)
                    e.setAttribute(n, t ? t + ' ' + r : r);
                else {
                    var i = t && t.replace(r, '').trim();
                    i ? e.setAttribute(n, i) : e.removeAttribute(n)
                }
            }
            ))
        }
    }
    function B() {
        S || Ie(A.props.triggerTarget || e).forEach((e => {
            A.props.interactive ? e.setAttribute('aria-expanded', A.state.isVisible && e === F() ? 'true' : 'false') : e.removeAttribute('aria-expanded')
        }
        ))
    }
    function P() {
        y.body.removeEventListener('mouseleave', K),
        y.removeEventListener('mousemove', b),
        wt = wt.filter((e => e !== b))
    }
    function V(e) {
        if (!A.props.interactive || !E.contains(e.target)) {
            if (F().contains(e.target)) {
                if (Ke.isTouch)
                    return;
                if (A.state.isVisible && Ce(A.props.trigger, 'click'))
                    return
            }
            !0 === A.props.hideOnClick && (h = !1,
            A.clearDelayTimeouts(),
            A.hide(),
            m = !0,
            setTimeout(( () => {
                m = !1
            }
            )),
            A.state.isMounted || W())
        }
    }
    function q() {
        y.addEventListener('mousedown', V, !0)
    }
    function W() {
        y.removeEventListener('mousedown', V, !0)
    }
    function j(e, t) {
        function n(e) {
            e.target === M && (gt(M, 'remove', n),
            t())
        }
        if (0 === e)
            return t();
        gt(M, 'remove', p),
        gt(M, 'add', n),
        p = n
    }
    function U(t, n, r) {
        void 0 === r && (r = !1),
        Ie(A.props.triggerTarget || e).forEach((e => {
            e.addEventListener(t, n, r),
            g.push({
                node: e,
                eventType: t,
                handler: n,
                options: r
            })
        }
        ))
    }
    function R() {
        k() && (U('touchstart', z, Ue),
        U('touchend', $, Ue)),
        ke(A.props.trigger).forEach((e => {
            if ('manual' !== e)
                switch (U(e, z),
                e) {
                case 'mouseenter':
                    U('mouseleave', $);
                    break;
                case 'focus':
                    U(at ? 'focusout' : 'blur', X);
                    break;
                case 'focusin':
                    U('focusout', X)
                }
        }
        ))
    }
    function _() {
        g.forEach((e => {
            var t = e.node
              , n = e.eventType
              , r = e.handler
              , i = e.options;
            t.removeEventListener(n, r, i)
        }
        )),
        g = []
    }
    function z(e) {
        var t = !1;
        if (A.state.isEnabled && !Z(e) && !m) {
            if (a = e,
            l = e.currentTarget,
            B(),
            !A.state.isVisible && function(e) {
                return we(e, 'MouseEvent')
            }(e) && wt.forEach((t => t(e))),
            'click' !== e.type || Ce(A.props.trigger, 'mouseenter') && !h || !1 === A.props.hideOnClick || !A.state.isVisible) {
                var r = C()
                  , i = r[0]
                  , o = r[1];
                Ke.isTouch && 'hold' === i && o ? n = setTimeout(( () => {
                    G(e)
                }
                ), o) : G(e)
            } else
                t = !0;
            'click' === e.type && (h = !t),
            t && K(e)
        }
    }
    function Y(t) {
        var n = function(e, t) {
            for (; e; ) {
                if (t(e))
                    return e;
                e = e.parentElement
            }
            return null
        }(t.target, (t => t === e || t === E));
        if ('mousemove' !== t.type || !n) {
            var r = Se(E.querySelectorAll(Xe)).concat(E).map((e => {
                var t = e._tippy
                  , n = t.popperChildren.tooltip
                  , r = t.props.interactiveBorder;
                return {
                    popperRect: e.getBoundingClientRect(),
                    tooltipRect: n.getBoundingClientRect(),
                    interactiveBorder: r
                }
            }
            ));
            (function(e, t) {
                var n = t.clientX
                  , r = t.clientY;
                return e.every((e => {
                    var t = e.popperRect
                      , i = e.tooltipRect
                      , o = e.interactiveBorder
                      , a = Math.min(t.top, i.top)
                      , s = Math.max(t.right, i.right)
                      , p = Math.max(t.bottom, i.bottom)
                      , l = Math.min(t.left, i.left);
                    return a - r > o || r - p > o || l - n > o || n - s > o
                }
                ))
            }
            )(r, t) && (P(),
            K(t))
        }
    }
    function $(e) {
        if (!(Z(e) || Ce(A.props.trigger, 'click') && h))
            return A.props.interactive ? (y.body.addEventListener('mouseleave', K),
            y.addEventListener('mousemove', b),
            He(wt, b),
            void b(e)) : void K(e)
    }
    function X(e) {
        (Ce(A.props.trigger, 'focusin') || e.target === F()) && (A.props.interactive && e.relatedTarget && E.contains(e.relatedTarget) || K(e))
    }
    function Z(e) {
        var t = 'ontouchstart'in window
          , n = Ce(e.type, 'touch')
          , r = k();
        return t && Ke.isTouch && r && !n || Ke.isTouch && !r && n
    }
    function Q() {
        var t, n = A.props.popperOptions, r = A.popperChildren.arrow, i = ye(n, 'flip'), o = ye(n, 'preventOverflow');
        function a(e) {
            var n = A.state.currentPlacement;
            A.state.currentPlacement = e.placement,
            A.props.flip && !A.props.flipOnUpdate && (e.flipped && (A.popperInstance.options.placement = e.placement),
            xe(A.popperInstance.modifiers, 'flip', 'enabled', !1)),
            M.setAttribute('data-placement', e.placement),
            !1 !== e.attributes['x-out-of-boundaries'] ? M.setAttribute('data-out-of-boundaries', '') : M.removeAttribute('data-out-of-boundaries');
            var r = lt(e.placement)
              , i = Ce(['top', 'bottom'], r)
              , o = Ce(['bottom', 'right'], r);
            M.style.top = '0',
            M.style.left = '0',
            M.style[i ? 'top' : 'left'] = (o ? 1 : -1) * t + 'px',
            n && n !== e.placement && A.popperInstance.update()
        }
        var s = he({
            eventsEnabled: !1,
            placement: A.props.placement
        }, n, {
            modifiers: he({}, n && n.modifiers, {
                tippyDistance: {
                    enabled: !0,
                    order: 0,
                    fn: function(e) {
                        t = function(e, t) {
                            var n = 'string' == typeof t && Ce(t, 'rem')
                              , r = e.documentElement;
                            return r && n ? parseFloat(getComputedStyle(r).fontSize || String(16)) * Ne(t) : Ne(t)
                        }(y, A.props.distance);
                        var n = lt(e.placement)
                          , r = Be(n, o && o.padding, t)
                          , a = Be(n, i && i.padding, t)
                          , s = A.popperInstance.modifiers;
                        return xe(s, 'preventOverflow', 'padding', r),
                        xe(s, 'flip', 'padding', a),
                        e
                    }
                },
                preventOverflow: he({
                    boundariesElement: A.props.boundary
                }, o),
                flip: he({
                    enabled: A.props.flip,
                    behavior: A.props.flipBehavior
                }, i),
                arrow: he({
                    element: r,
                    enabled: !!r
                }, ye(n, 'arrow')),
                offset: he({
                    offset: A.props.offset
                }, ye(n, 'offset'))
            }),
            onCreate: function(e) {
                a(e),
                De(n && n.onCreate, s.onCreate, [e]),
                J()
            },
            onUpdate: function(e) {
                a(e),
                De(n && n.onUpdate, s.onUpdate, [e]),
                J()
            }
        });
        A.popperInstance = new fe(e,E,s)
    }
    function J() {
        0 === v ? (v++,
        A.popperInstance.update()) : s && 1 === v && (v++,
        function(e) {
            e.offsetHeight
        }(E),
        s())
    }
    function G(e) {
        A.clearDelayTimeouts(),
        A.popperInstance || Q(),
        e && H('onTrigger', [A, e]),
        q();
        var t = I(!0);
        t ? n = setTimeout(( () => {
            A.show()
        }
        ), t) : A.show()
    }
    function K(e) {
        if (A.clearDelayTimeouts(),
        H('onUntrigger', [A, e]),
        A.state.isVisible) {
            if (!(Ce(A.props.trigger, 'mouseenter') && Ce(A.props.trigger, 'click') && Ce(['mouseleave', 'mousemove'], e.type) && h)) {
                var t = I(!1);
                t ? r = setTimeout(( () => {
                    A.state.isVisible && A.hide()
                }
                ), t) : i = requestAnimationFrame(( () => {
                    A.hide()
                }
                ))
            }
        } else
            W()
    }
}
function xt(e, t, n) {
    void 0 === t && (t = {}),
    void 0 === n && (n = []),
    n = Pe.plugins.concat(t.plugins || n),
    document.addEventListener('touchstart', tt, he({}, Ue, {
        capture: !0
    })),
    window.addEventListener('blur', rt);
    var r = he({}, t, {
        plugins: n
    })
      , i = ge(e).reduce(( (e, t) => {
        var n = t && Tt(t, r);
        return n && e.push(n),
        e
    }
    ), []);
    return Ee(e) ? i[0] : i
}
xt.version = '5.2.1',
xt.defaultProps = Pe,
xt.setDefaultProps = function(e) {
    Object.keys(e).forEach((t => {
        Pe[t] = e[t]
    }
    ))
}
,
xt.currentInput = Ke;
/**!
* tippy.js v5.2.1
* (c) 2017-2020 atomiks
* MIT License
*/
var Mt = {
    mouseover: 'mouseenter',
    focusin: 'focus',
    click: 'click'
};
function Ot(e, t, n) {
    void 0 === n && (n = []),
    n = t.plugins || n;
    var r, i, o = [], a = [], s = t.target, p = (r = ['target'],
    i = he({}, t),
    r.forEach((e => {
        delete i[e]
    }
    )),
    i), l = he({}, p, {
        plugins: n,
        trigger: 'manual'
    }), u = he({}, p, {
        plugins: n,
        showOnCreate: !0
    }), d = xt(e, l);
    function c(e) {
        if (e.target) {
            var n = e.target.closest(s);
            if (n)
                if (Ce(n.getAttribute('data-tippy-trigger') || t.trigger || Pe.trigger, Mt[e.type])) {
                    var r = xt(n, u);
                    r && (a = a.concat(r))
                }
        }
    }
    function f(e, t, n, r) {
        void 0 === r && (r = !1),
        e.addEventListener(t, n, r),
        o.push({
            node: e,
            eventType: t,
            handler: n,
            options: r
        })
    }
    return Ie(d).forEach((function(e) {
        var t = e.destroy;
        e.destroy = e => {
            void 0 === e && (e = !0),
            e && a.forEach((e => {
                e.destroy()
            }
            )),
            a = [],
            o.forEach((e => {
                var t = e.node
                  , n = e.eventType
                  , r = e.handler
                  , i = e.options;
                t.removeEventListener(n, r, i)
            }
            )),
            o = [],
            t()
        }
        ,
        function(e) {
            var t = e.reference;
            f(t, 'mouseover', c),
            f(t, 'focusin', c),
            f(t, 'click', c)
        }(e)
    }
    )),
    d
}
const Lt = new EventSource('https://' + window.location.hostname + '/events');
window.sse = Lt,
function(t) {
    let n = document.querySelectorAll('.visitors-online > span > span');
    e(n, ( (e, t) => {
        new u({
            el: t,
            format: '',
            value: t.innerText,
            theme: 'default'
        })
    }
    )),
    t.addEventListener('message', (t => {
        let r = JSON.parse(t.data);
        e(n, ( (e, t) => {
            t.innerText = r.ol
        }
        ))
    }
    ))
}(Lt),
xt.setDefaultProps({
    animation: 'scale',
    arrow: !0,
    inertia: !0
}),
Ot('body', {
    target: '[data-tooltip-content]',
    popperOptions: {
        positionFixed: !0
    },
    content: e => e.getAttribute('data-tooltip-content')
}),
window.tippy = xt,
function() {
    let r = document.querySelectorAll('[data-modal]');
    e(r, ( (e, n) => {
        n.addEventListener('click', (e => {
            e.preventDefault(),
            t(document.querySelector(n.dataset.modal), 'visible')
        }
        ))
    }
    ));
    let i = document.getElementsByClassName('light-modal-close-icon');
    e(i, ( (e, t) => {
        t.addEventListener('click', (e => {
            e.preventDefault();
            let r = t.closest('.light-modal');
            n(r, 'visible')
        }
        ))
    }
    ))
}(),
function() {
    let e = document.querySelector('button.menu-toggle')
      , t = document.getElementById('mobile-menu');
    e.addEventListener('click', (n => {
        n.preventDefault(),
        r(e, 'is-active'),
        r(t, 'open')
    }
    ))
}(),
new class {
    constructor() {
        this.parentEl = document.getElementById('promocode-holder'),
        this.parentEl && (this.countdownEl = this.parentEl.querySelector('#promocode-countdown'),
        this.countdownEls = this.countdownEl.querySelectorAll('span'),
        this.amountEls = this.parentEl.querySelectorAll('.text'),
        this.codeParentEl = this.parentEl.querySelector('#coupon-holder'),
        this.codeEl = this.codeParentEl.querySelector('span'),
        this.time = parseInt(this.countdownEl.dataset.time),
        this.now = parseInt(this.countdownEl.dataset.now),
        this.interval = setInterval(this.fn.bind(this), 1e3))
    }
    fn() {
        let e = 1e3 * this.time - 1e3 * this.now
          , t = Math.floor(e % 864e5 / 36e5)
          , n = Math.floor(e % 36e5 / 6e4)
          , r = Math.floor(e % 6e4 / 1e3);
        if (e >= 0)
            this.countdownEls[0].textContent = this.addZero(t),
            this.countdownEls[1].textContent = this.addZero(n),
            this.countdownEls[2].textContent = this.addZero(r);
        else if (e < 0) {
            clearInterval(this.interval);
            let e = setInterval((async () => {
                const t = await i.get(this.parentEl.dataset.endpoint);
                t.data.success && (clearInterval(e),
                this.amountEls[0].innerText = `+${t.data.data.amount}%`,
                this.amountEls[1].innerText = `+${t.data.data.amount}%`,
                this.codeParentEl.dataset.promocode = t.data.data.code,
                this.codeEl.innerText = t.data.data.code,
                this.now = parseInt(t.data.data.time.now),
                this.time = parseInt(t.data.data.time.time),
                this.interval = setInterval(this.fn.bind(this), 1e3))
            }
            ), 1e3)
        }
        this.now += 1
    }
    addZero(e) {
        return e < 10 && (e = '0' + e),
        e
    }
}
;
