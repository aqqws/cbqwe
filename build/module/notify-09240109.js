class t {
    constructor(e) {
        this.fragment = new DocumentFragment,
        this.options = e,
        null == this.options && (this.options = t.deepAssign({}, t._options)),
        this.events = this.options.events,
        this.node = void 0,
        this.title = void 0,
        this.closeButton = void 0,
        this.body = void 0,
        this.image = void 0,
        this.text = void 0,
        this.buttons = void 0,
        this.progressBar = void 0,
        this.addExtinguish = this.addExtinguishFct.bind(this),
        this.removeExtinguish = this.removeExtinguishFct.bind(this)
    }
    static deepAssign(e, ...s) {
        for (let n = 0, o = s.length; n < o; n++)
            for (var i in s[n])
                null != s[n][i] && 'object' == typeof s[n][i] ? e[i] = t.deepAssign(e[i] ? e[i] : {}, s[n][i]) : e[i] = s[n][i];
        return e
    }
    static options(e) {
        t._options = t.deepAssign({}, t._options, e)
    }
    static makeWrapper(e) {
        let s = document.createElement('div');
        s.className = 'gn-wrapper gn-' + e,
        document.body.appendChild(s),
        t.wrappers[e] = s
    }
    static firstUnbreakChar(t, e, s=0) {
        let i;
        for (s < 0 && (s = 0); s >= 0; )
            i = t.indexOf(e, s),
            s = i > 0 && '\\' == t[i - 1] ? i + 1 : -1;
        return i
    }
    static searchToken(t, e, s) {
        let i = [s[0], s[1]];
        for (let s = t.length; i[0] < s; i[0]++) {
            if ('string' == typeof t[i[0]] && (i[1] = t[i[0]].indexOf(e, i[1])) > -1)
                return i;
            i[1] = 0
        }
        return [-1, -1]
    }
    static breakString(t, e, s, i) {
        let n = e.open.length
          , o = e.close.length;
        if (s[0] != i[0]) {
            let a = {
                tag: e,
                str: [t[s[0]].substring(s[1])]
            }
              , r = 0;
            for (let e = s[0] + 1; e < i[0]; e++,
            r++)
                a.str.push(t[e]);
            return a.str.push(t[i[0]].substring(0, i[1])),
            a.str = [this.joinString(a.str)],
            t.splice(s[0] + 1, r, a),
            i[0] = s[0] + 2,
            t[s[0]] = t[s[0]].substring(0, s[1] - n),
            t[i[0]] = t[i[0]].substring(i[1] + o),
            [i[0], 0]
        }
        return t.splice(s[0] + 1, 0, {
            tag: e,
            str: [t[s[0]].substring(s[1], i[1])]
        }, t[s[0]].substring(i[1] + o)),
        t[s[0]] = t[s[0]].substring(0, s[1] - n),
        [s[0] + 2, 0]
    }
    static joinString(t) {
        let e = [];
        for (let s = 0, i = t.length; s < i; s++)
            'string' == typeof t[s] ? e.push(t[s]) : (e.push(t[s].tag.open),
            e.push(this.joinString(t[s].str)),
            e.push(t[s].tag.close));
        return e.join('')
    }
    static buildNode(t, e) {
        for (let s = 0; s < t.length; s++)
            if ('string' == typeof t[s])
                t[s].length > 0 && e.appendChild(document.createTextNode(t[s]));
            else {
                let i, n = t[s].tag, o = document.createElement(n.type);
                'a' != n.type && 'button' != n.type || o.addEventListener('click', (t => {
                    t.stopPropagation()
                }
                ));
                let a = this.joinString(t[s].str);
                if ('title'in n && n.title && a.length > 0)
                    if (0 == a.indexOf('!'))
                        a = a.substring(1);
                    else {
                        let t = this.firstUnbreakChar(a, '|');
                        a = a.replace('\\|', '|'),
                        t > -1 && (i = a.substring(0, t),
                        a = a.substring(t + 1))
                    }
                if (null == i && (i = a),
                'attributes'in n) {
                    let t = Object.keys(n.attributes);
                    for (let e = 0, s = t.length; e < s; e++) {
                        let s = n.attributes[t[e]].replace('$content', a).replace('$title', i);
                        o.setAttribute(t[e], s)
                    }
                }
                if (n.textContent ? o.textContent = n.textContent.replace('$content', a).replace('$title', i) : 0 != n.textContent && this.textToNode(t[s].str, o),
                n.class)
                    if (Array.isArray(n.class))
                        for (let t = 0, e = n.class.length; t < e; t++)
                            o.classList.add(n.class[t]);
                    else
                        o.className = n.class;
                e.appendChild(o)
            }
        return e
    }
    static textToNode(e, s) {
        if (null == e)
            return;
        let i;
        i = Array.isArray(e) ? e : [e = e.replace(/(\r?\n|\r)/gm, '\n')],
        null != this.tokens && null == this.refreshTokens || (this.tokens = Object.keys(t.tags),
        this.refreshTokens = void 0);
        for (let e = 0, s = this.tokens.length; e < s; e++) {
            let s = t.tags[this.tokens[e]]
              , n = {
                open: s.open.length,
                close: s.close.length
            }
              , o = [0, 0]
              , a = [0, 0]
              , r = [0, 0];
            for (; (a = this.searchToken(i, s.open, o))[0] > -1; )
                a[1] += n.open,
                o = (r = this.searchToken(i, s.close, a))[0] > -1 ? this.breakString(i, s, a, r) : a
        }
        return this.buildNode(i, s)
    }
    make(t) {
        if (this.node = document.createElement('div'),
        this.fragment.appendChild(this.node),
        this.node.className = 'gn-notification gn-insert',
        'default-insert' == this.options.insertAnimation.name)
            switch (this.options.position) {
            case 'top-left':
            case 'bottom-left':
                this.options.insertAnimation.name = 'insert-left';
                break;
            case 'top-right':
            case 'bottom-right':
                this.options.insertAnimation.name = 'insert-right';
                break;
            case 'top-center':
                this.options.insertAnimation.name = 'insert-top';
                break;
            case 'bottom-center':
                this.options.insertAnimation.name = 'insert-bottom'
            }
        this.options.insertAnimation.name == this.options.removeAnimation.name && ('fadeout' == this.options.insertAnimation.name ? this.options.removeAnimation.name = 'rotateout' : this.options.removeAnimation.name = 'fadeout'),
        this.node.style.animationName = this.options.insertAnimation.name,
        this.node.style.animationDuration = this.options.insertAnimation.duration + 'ms',
        t.forEach((t => {
            this.node.classList.add(t)
        }
        )),
        this.node.addEventListener('animationend', (t => {
            if (t.animationName == this.options.removeAnimation.name)
                this.close(!1);
            else if (t.animationName == this.options.insertAnimation.name) {
                if (this.node.classList.remove('gn-insert'),
                !this.options.sticky && this.options.pauseOnHover && (this.node.addEventListener('mouseenter', this.removeExtinguish),
                this.node.addEventListener('mouseleave', this.addExtinguish)),
                this.progressBar)
                    if (this.progressBar.style.animationDuration = this.options.duration + 'ms',
                    document.hasFocus())
                        this.progressBar.classList.add('gn-extinguish');
                    else {
                        let t = () => {
                            this.progressBar.classList.add('gn-extinguish'),
                            document.removeEventListener('focus', t)
                        }
                        ;
                        document.addEventListener('focus', t)
                    }
            } else
                'shorten' == t.animationName && this.progressBar && (!this.options.sticky && this.options.pauseOnHover && (this.node.removeEventListener('mouseenter', this.removeExtinguish),
                this.node.removeEventListener('mouseleave', this.addExtinguish)),
                this.progressBar.classList.add('gn-retire'),
                this.events.onDeath ? this.events.onDeath(this) : (this.disableButtons(),
                this.closeAnimated()))
        }
        )),
        this.options.closeOnClick && (this.node.title = 'Click to close.',
        this.node.classList.add('gn-close-on-click'),
        this.node.addEventListener('click', ( () => {
            this.close(!0)
        }
        ))),
        this.events.onCreate && this.events.onCreate(this)
    }
    setType(t) {
        if (this.node) {
            let e = this.node.classList.contains('gn-close-on-click');
            this.node.className = 'gn-notification gn-' + t,
            e && this.node.classList.add('gn-close-on-click')
        }
    }
    setTitle(t) {
        null == this.title && (this.title = document.createElement('h1'),
        this.node.insertBefore(this.title, this.node.firstElementChild),
        this.closeButton && this.title.appendChild(this.closeButton)),
        this.title.title = t,
        this.title.textContent = t
    }
    addCloseButton() {
        let t = document.createElement('span');
        t.title = 'Click to close.',
        t.className = 'gn-close',
        t.textContent = '×',
        t.addEventListener('click', ( () => {
            this.close(!0)
        }
        )),
        this.title ? (t.classList.add('gn-close-title'),
        this.title.appendChild(t)) : this.node.insertBefore(t, this.node.firstElementChild)
    }
    addBody() {
        this.body = document.createElement('div'),
        this.body.className = 'gn-content',
        this.node.appendChild(this.body),
        this.buttons ? this.node.insertBefore(this.body, this.buttons) : this.progressBar ? this.node.insertBefore(this.body, this.progressBar) : this.node.appendChild(this.body)
    }
    setImage(t) {
        null == this.image && (this.image = document.createElement('img'),
        this.text ? this.body.insertBefore(this.image, this.text) : (this.body || this.addBody(),
        this.body.appendChild(this.image))),
        this.image.src = t
    }
    setText(e) {
        if (null == this.text)
            this.text = document.createElement('div'),
            this.text.className = 'gn-text',
            this.body || this.addBody(),
            this.body.appendChild(this.text);
        else
            for (; this.text.firstChild; )
                this.text.removeChild(this.text.firstChild);
        t.textToNode(e, this.text)
    }
    addButton(e) {
        if (!e.type || !e.value)
            return;
        null == this.buttons && (this.buttons = document.createElement('div'),
        this.buttons.className = 'gn-buttons',
        this.progressBar ? this.node.insertBefore(this.buttons, this.progressBar) : this.node.appendChild(this.buttons));
        let s = document.createElement('button');
        t.textToNode(e.value, s),
        s.className = 'gn-button gn-' + e.type,
        e.onClick && s.addEventListener('click', (t => {
            t.stopPropagation(),
            e.onClick(this)
        }
        )),
        this.buttons.appendChild(s)
    }
    removeButtons() {
        this.buttons && (this.node.removeChild(this.buttons),
        this.buttons = void 0)
    }
    addProgressBar() {
        this.progressBar = document.createElement('span'),
        this.progressBar.className = 'gn-lifespan',
        this.node.appendChild(this.progressBar)
    }
    display() {
        if (this.node) {
            if (this.options.removeAllOnDisplay)
                t.displayed.forEach((t => {
                    t.remove()
                }
                ));
            else if (this.options.maxNotifications > 0) {
                let e = -(this.options.maxNotifications - (t.displayed.length + 1));
                if (e > 0)
                    for (let s = 0, i = e; s < i; s++)
                        t.displayed[s].remove()
            }
            t.wrappers[this.options.position] || t.makeWrapper(this.options.position),
            t.wrappers[this.options.position].appendChild(this.fragment),
            t.displayed.push(this),
            this.events.onDisplay && this.events.onDisplay(this)
        }
    }
    remove() {
        if (null != this.node) {
            this.node.remove(),
            this.node = void 0;
            let e = t.displayed.indexOf(this);
            return e && t.displayed.splice(e, 1),
            !0
        }
        return !1
    }
    close(t=!1) {
        this.remove() && this.events.onClose && this.events.onClose(this, t)
    }
    closeAnimated() {
        this.node.classList.add('gn-remove'),
        this.node.style.animationName = this.options.removeAnimation.name,
        this.node.style.animationDuration = this.options.removeAnimation.duration + 'ms',
        this.node.addEventListener('mouseenter', (t => {
            t.target.classList.remove('gn-remove')
        }
        )),
        this.node.addEventListener('mouseleave', (t => {
            t.target.classList.add('gn-remove')
        }
        ))
    }
    addExtinguishFct() {
        this.progressBar.classList.add('gn-extinguish')
    }
    removeExtinguishFct() {
        this.progressBar.classList.remove('gn-extinguish')
    }
    disableButtons() {
        if (this.buttons)
            for (let t = 0, e = this.buttons.childNodes.length; t < e; t++)
                this.buttons.childNodes[t].disabled = !0
    }
    static create(e, s, i={}) {
        let n = 'image'in s && s.image
          , o = 'text'in s && s.text
          , a = 'title'in s && s.title
          , r = 'buttons'in s;
        if (!(n || a || o || r))
            return;
        let l = t.deepAssign({}, t._options, i)
          , h = new t(l);
        if (h.make(e),
        a && h.setTitle(s.title),
        l.closeButton && h.addCloseButton(),
        n && h.setImage(s.image),
        o && h.setText(s.text),
        r) {
            Array.isArray(s.buttons) || (s.buttons = [s.buttons]);
            for (let t = 0, e = s.buttons.length; t < e; t++)
                h.addButton(s.buttons[t])
        }
        return l.sticky || h.addProgressBar(),
        'display'in l && !l.display || h.display(),
        h
    }
    static success(t, e={}) {
        return this.create(['gn-success'], t, e)
    }
    static info(t, e={}) {
        return this.create(['gn-info'], t, e)
    }
    static error(t, e={}) {
        return this.create(['gn-error'], t, e),
        console.log(t, e)
    }
    static warning(t, e={}) {
        return this.create(['gn-warning'], t, e)
    }
    static message(t, e={}) {
        return this.create(['gn-message'], t, e)
    }
    static custom(t, e, s={}) {
        return this.create(t, e, s)
    }
    static addTag(t, e) {
        this.tags[t] = e,
        this.refreshTokens = !0
    }
}
t.wrappers = {},
t.displayed = [],
t._options = {
    position: 'top-right',
    maxNotifications: 0,
    removeAllOnDisplay: !1,
    pauseOnHover: !0,
    closeOnClick: !0,
    closeButton: !0,
    duration: 4e3,
    sticky: !1,
    events: {
        onCreate: void 0,
        onDisplay: void 0,
        onDeath: void 0,
        onClose: void 0
    },
    insertAnimation: {
        name: 'default-insert',
        duration: 250
    },
    removeAnimation: {
        name: 'fadeout',
        duration: 400
    }
},
t.tags = {
    code: {
        type: 'code',
        class: 'gn-code',
        open: '``',
        close: '``',
        textContent: '$content'
    },
    header2: {
        type: 'h2',
        class: 'gn-header',
        open: '## ',
        close: '\n'
    },
    header1: {
        type: 'h1',
        class: 'gn-header',
        open: '# ',
        close: '\n'
    },
    image: {
        type: 'img',
        title: !0,
        attributes: {
            src: '$content',
            title: '$title'
        },
        textContent: !1,
        open: '![',
        close: ']'
    },
    link: {
        type: 'a',
        title: !0,
        attributes: {
            href: '$content',
            target: 'blank',
            title: '$title'
        },
        textContent: '$title',
        open: '{{',
        close: '}}'
    },
    bold: {
        type: 'span',
        class: 'gn-bold',
        open: '**',
        close: '**'
    },
    italic: {
        type: 'span',
        class: 'gn-italic',
        open: '*',
        close: '*'
    },
    separator: {
        type: 'div',
        class: 'gn-separator',
        textContent: !1,
        open: '\n---\n',
        close: ''
    },
    linejump: {
        type: 'br',
        textContent: !1,
        open: '\n',
        close: ''
    },
    floatRight: {
        type: 'span',
        class: 'gn-float-right',
        open: '>*>',
        close: '<'
    }
},
t.addTag('span', {
    type: 'span',
    class: ['__currency'],
    textContent: '$content',
    title: !1,
    open: '$',
    close: '$'
});
const e = (t, e) => {
    try {
        return t()
    } catch (t) {
        return e
    }
}
;
function s(t) {
    try {
        JSON.parse(t)
    } catch (t) {
        return !1
    }
    return !0
}
function i(t) {
    return e(( () => t.response.data.message))
}
const n = {
    success: (e, s='Готово!') => {
        t.success({
            title: s,
            text: e
        })
    }
    ,
    error: i => {
        if (i) {
            let n = 'Мы уже работаем над её устранением!'
              , o = 'Ошибка'
              , a = e(( () => i.response.status));
            e(( () => i.response)) ? i.response.request instanceof window.XMLHttpRequest && (e(( () => i.response.data.message)) ? (o = a >= 500 ? i.toString() : o,
            n = s(i.response.data.message) ? JSON.parse(i.response.data.message).message : i.response.data.message) : [401].includes(a) ? n = 'Сперва необходимо авторизоваться' : [403].includes(a) ? n = 'Данное действие запрещено' : o = 'Внутренняя ошибка') : 'string' == typeof i ? n = i : 'object' == typeof i && (n = e(( () => i.data.message)) || n),
            t.error({
                title: o,
                text: n
            })
        }
    }
    ,
    warning: (e, s='Внимание') => {
        t.warning({
            title: s,
            text: e
        })
    }
    ,
    getStatus: function(t) {
        return e(( () => t.response.status))
    },
    isJSON: s,
    getCode: function(t) {
        return e(( () => t.response.data.code))
    },
    getMessage: i,
    getData: t => {
        let n = i(t);
        if (n && s(n))
            return e(( () => JSON.parse(t.response.data.message).data))
    }
};
export {n as N};
