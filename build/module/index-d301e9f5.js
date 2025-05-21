import {c as a, a as t} from './index-9ccd359e.js';
import {a2 as e, a3 as i} from './index-d31607ce.js';
function o(a, {delay: e=0, duration: o=400, easing: r=t, amount: n=5, opacity: d=0}={}) {
    const p = getComputedStyle(a)
      , s = +p.opacity
      , $ = 'none' === p.filter ? '' : p.filter
      , l = s * (1 - d)
      , [c,g] = i(n);
    return {
        delay: e,
        duration: o,
        easing: r,
        css: (a, t) => `opacity: ${s - l * t}; filter: ${$} blur(${t * c}${g});`
    }
}
function r(a, {delay: t=0, duration: i=400, easing: o=e}={}) {
    const r = +getComputedStyle(a).opacity;
    return {
        delay: t,
        duration: i,
        easing: o,
        css: a => 'opacity: ' + a * r
    }
}
function n(t, {delay: e=0, duration: i=400, easing: o=a, axis: r='y'}={}) {
    const n = getComputedStyle(t)
      , d = +n.opacity
      , p = 'y' === r ? 'height' : 'width'
      , s = parseFloat(n[p])
      , $ = 'y' === r ? ['top', 'bottom'] : ['left', 'right']
      , l = $.map((a => `${a[0].toUpperCase()}${a.slice(1)}`))
      , c = parseFloat(n[`padding${l[0]}`])
      , g = parseFloat(n[`padding${l[1]}`])
      , y = parseFloat(n[`margin${l[0]}`])
      , u = parseFloat(n[`margin${l[1]}`])
      , m = parseFloat(n[`border${l[0]}Width`])
      , f = parseFloat(n[`border${l[1]}Width`]);
    return {
        delay: e,
        duration: i,
        easing: o,
        css: a => `overflow: hidden;opacity: ${Math.min(20 * a, 1) * d};${p}: ${a * s}px;padding-${$[0]}: ${a * c}px;padding-${$[1]}: ${a * g}px;margin-${$[0]}: ${a * y}px;margin-${$[1]}: ${a * u}px;border-${$[0]}-width: ${a * m}px;border-${$[1]}-width: ${a * f}px;`
    }
}
export {o as b, r as f, n as s};
