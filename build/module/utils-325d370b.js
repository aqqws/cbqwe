function e(e, t=' ') {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t)
}
function t(t, n=2, a=' ') {
    return e(parseFloat(t).toFixed(n), a)
}
function n(e) {
    return 0 === parseFloat(e) ? '0' : Math.abs(e) < 1e-6 ? e.toPrecision(1) : parseFloat(e.toString()).toString()
}
function a(t, n=2, a=' ') {
    return e(Number(parseFloat(t).toFixed(n)), a)
}
function r(e, t) {
    return t[e % 100 > 4 && e % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][e % 10 < 5 ? e % 10 : 5]]
}
function o(e) {
    let t = document.createElement('input');
    t.type = 'text',
    t.value = e,
    document.body.appendChild(t),
    t.select(),
    document.execCommand('Copy'),
    document.body.removeChild(t)
}
function u(e, t) {
    let n = e + Math.random() * (t + 1 - e);
    return Math.floor(n)
}
function l(e) {
    const t = new Date(1e3 * e);
    return new Intl.DateTimeFormat('ru-RU',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(t)
}
function c(e, t) {
    return e.length > t ? e.substr(0, t - 1) + '...' : e
}
function i(e, t) {
    try {
        return e()
    } catch (e) {
        return t
    }
}
function s(e) {
    if (null === e)
        return;
    let n = parseFloat(e)
      , a = document.getElementsByClassName('__balance');
    for (let e = 0, r = a.length; e < r; e++)
        a[e].dataset.__balance && (a[e].innerText = t(n),
        a[e].dataset.__balance = n.toFixed(2))
}
function m(e, t, n) {
    if (n) {
        const a = new Date;
        a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3);
        let r = 'expires=' + a.toUTCString();
        document.cookie = e + '=' + t + ';' + r + ';path=/'
    } else
        document.cookie = e + '=' + t + ';path=/'
}
function d(e) {
    let t = e + '='
      , n = decodeURIComponent(document.cookie).split(';');
    for (let e = 0; e < n.length; e++) {
        let a = n[e];
        for (; ' ' == a.charAt(0); )
            a = a.substring(1);
        if (0 == a.indexOf(t))
            return a.substring(t.length, a.length)
    }
    return ''
}
function f(e) {
    if (null === e)
        return;
    let t = parseFloat(e)
      , n = document.getElementsByClassName('__balance_bcn');
    for (let e = 0, r = n.length; e < r; e++)
        n[e].dataset.__balance_bcn && (n[e].innerText = a(t),
        n[e].dataset.__balance_bcn = t.toFixed(2))
}
function g(e) {
    let t = e.split(' | ')
      , n = null
      , a = null;
    return t.length > 1 ? (n = t[0],
    a = t[1]) : 1 === t.length && (n = t[0]),
    {
        title: n,
        name: a
    }
}
export {t as a, f as b, u as c, r as d, o as e, n as f, i as g, l as h, d as i, m as j, a as r, g as s, c as t, s as u};
