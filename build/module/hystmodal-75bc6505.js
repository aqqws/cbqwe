import {w as t} from './index-3b14bfaf.js';
import {U as e} from './index-d31607ce.js';
import {g as s} from './utils-325d370b.js';
class i {
    constructor(t) {
        this.config = Object.assign({
            backscroll: !0,
            linkAttributeName: 'data-hystmodal',
            closeOnOverlay: !0,
            closeOnEsc: !0,
            closeOnButton: !0,
            waitTransitions: !1,
            catchFocus: !0,
            fixedSelectors: '*[data-hystfixed]',
            beforeOpen: () => {}
            ,
            afterClose: () => {}
        }, t),
        this.config.linkAttributeName && this.init(),
        this._closeAfterTransition = this._closeAfterTransition.bind(this)
    }
    init() {
        this.isOpened = !1,
        this.openedWindow = !1,
        this.starter = !1,
        this._nextWindows = !1,
        this._scrollPosition = 0,
        this._reopenTrigger = !1,
        this._overlayChecker = !1,
        this._isMoved = !1,
        this._focusElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'],
        this._modalBlock = !1;
        const t = document.querySelector('.hystmodal__shadow');
        t ? this.shadow = t : (this.shadow = document.createElement('div'),
        this.shadow.classList.add('hystmodal__shadow'),
        document.body.appendChild(this.shadow)),
        this.eventsFeeler()
    }
    eventsFeeler() {
        document.addEventListener('click', (t => {
            const e = t.target.closest(`[${this.config.linkAttributeName}]`);
            if (!this._isMoved && e) {
                t.preventDefault(),
                this.starter = e;
                const s = this.starter.getAttribute(this.config.linkAttributeName);
                return this._nextWindows = document.querySelector(s),
                void this.open()
            }
            this.config.closeOnButton && t.target.closest('[data-hystclose]') && this.close()
        }
        )),
        this.config.closeOnOverlay && (document.addEventListener('mousedown', (t => {
            !this._isMoved && t.target instanceof Element && !t.target.classList.contains('hystmodal__wrap') || (this._overlayChecker = !0)
        }
        )),
        document.addEventListener('mouseup', (t => {
            if (!this._isMoved && t.target instanceof Element && this._overlayChecker && t.target.classList.contains('hystmodal__wrap'))
                return t.preventDefault(),
                this._overlayChecker = !this._overlayChecker,
                void this.close();
            this._overlayChecker = !1
        }
        ))),
        window.addEventListener('keydown', (t => {
            if (!this._isMoved && this.config.closeOnEsc && 27 === t.which && this.isOpened)
                return t.preventDefault(),
                void this.close();
            !this._isMoved && this.config.catchFocus && 9 === t.which && this.isOpened && this.focusCatcher(t)
        }
        ))
    }
    open(t) {
        if (t && (this._nextWindows = 'string' == typeof t ? document.querySelector(t) : t),
        this._nextWindows) {
            if (this.isOpened)
                return this._reopenTrigger = !0,
                void this.close();
            this.openedWindow = this._nextWindows,
            this._modalBlock = this.openedWindow.querySelector('.hystmodal__window'),
            this.config.beforeOpen(this),
            this._bodyScrollControl(),
            this.shadow.classList.add('hystmodal__shadow--show'),
            this.openedWindow.classList.add('hystmodal--active'),
            this.openedWindow.setAttribute('aria-hidden', 'false'),
            this.config.catchFocus && this.focusControl(),
            this.isOpened = !0
        }
    }
    close() {
        this.isOpened && (this.config.waitTransitions ? (this.openedWindow.classList.add('hystmodal--moved'),
        this._isMoved = !0,
        this.openedWindow.addEventListener('transitionend', this._closeAfterTransition),
        this.openedWindow.classList.remove('hystmodal--active')) : (this.openedWindow.classList.remove('hystmodal--active'),
        this._closeAfterTransition()))
    }
    _closeAfterTransition() {
        this.openedWindow.classList.remove('hystmodal--moved'),
        this.openedWindow.removeEventListener('transitionend', this._closeAfterTransition),
        this._isMoved = !1,
        this.shadow.classList.remove('hystmodal__shadow--show'),
        this.openedWindow.setAttribute('aria-hidden', 'true'),
        this.config.catchFocus && this.focusControl(),
        this._bodyScrollControl(),
        this.isOpened = !1,
        this.openedWindow.scrollTop = 0,
        this.config.afterClose(this),
        this._reopenTrigger && (this._reopenTrigger = !1,
        this.open())
    }
    focusControl() {
        const t = this.openedWindow.querySelectorAll(this._focusElements);
        this.isOpened && this.starter ? this.starter.focus() : t.length && t[0].focus()
    }
    focusCatcher(t) {
        const e = this.openedWindow.querySelectorAll(this._focusElements)
          , s = Array.prototype.slice.call(e);
        if (this.openedWindow.contains(document.activeElement)) {
            const e = s.indexOf(document.activeElement);
            t.shiftKey && 0 === e && (s[s.length - 1].focus(),
            t.preventDefault()),
            t.shiftKey || e !== s.length - 1 || (s[0].focus(),
            t.preventDefault())
        } else
            s[0].focus(),
            t.preventDefault()
    }
    _bodyScrollControl() {
        if (!this.config.backscroll)
            return;
        const t = document.querySelectorAll(this.config.fixedSelectors)
          , e = Array.prototype.slice.call(t)
          , s = document.documentElement;
        if (!0 === this.isOpened)
            return s.classList.remove('hystmodal__opened'),
            s.style.marginRight = '',
            e.forEach((t => {
                t.style.marginRight = ''
            }
            )),
            window.scrollTo(0, this._scrollPosition),
            void (s.style.top = '');
        this._scrollPosition = window.pageYOffset;
        const i = window.innerWidth - s.clientWidth;
        s.style.top = -this._scrollPosition + 'px',
        i && (s.style.marginRight = `${i}px`,
        e.forEach((t => {
            t.style.marginRight = `${parseInt(getComputedStyle(t).marginRight, 10) + i}px`
        }
        ))),
        s.classList.add('hystmodal__opened')
    }
}
const o = t(!1);
let n = null
  , a = null;
const d = new i({
    linkAttributeName: 'data-hystmodal',
    catchFocus: !1,
    beforeOpen: t => {
        document.getElementsByTagName('html')[0].style.height = 'auto';
        let i = s(( () => t.starter.dataset.promocode));
        if (i ? o.set(i) : e(o) || o.set(null),
        a) {
            const e = a();
            e.modal === t.starter.dataset.hystmodal && e.fn()
        }
    }
    ,
    afterClose: () => {
        document.getElementsByTagName('html')[0].style.height = '100%',
        n && n()
    }
});
d.setAfterCloseCallback = t => {
    n = t
}
,
d.setBeforeOpenCallback = t => {
    a = t
}
;
export {d as h, o as p};
