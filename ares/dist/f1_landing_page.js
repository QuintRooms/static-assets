!(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var o = (e[r] = {i: r, l: !1, exports: {}});
        return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r});
        }),
        (n.r = function (t) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
                Object.defineProperty(t, '__esModule', {value: !0});
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, 'default', {enumerable: !0, value: t}), 2 & e && 'string' != typeof t))
                for (var o in t)
                    n.d(
                        r,
                        o,
                        function (e) {
                            return t[e];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, 'a', e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ''),
        n((n.s = 188));
})([
    function (t, e, n) {
        var r = n(26)('wks'),
            o = n(20),
            i = n(1).Symbol,
            a = 'function' == typeof i;
        (t.exports = function (t) {
            return r[t] || (r[t] = (a && i[t]) || (a ? i : o)('Symbol.' + t));
        }).store = r;
    },
    function (t, e) {
        var n = (t.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this')());
        'number' == typeof __g && (__g = n);
    },
    function (t, e, n) {
        var r = n(4);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + ' is not an object!');
            return t;
        };
    },
    function (t, e, n) {
        t.exports = !n(7)(function () {
            return (
                7 !=
                Object.defineProperty({}, 'a', {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (t, e) {
        t.exports = function (t) {
            return 'object' == typeof t ? null !== t : 'function' == typeof t;
        };
    },
    function (t, e, n) {
        var r = n(1),
            o = n(11),
            i = n(8),
            a = n(9),
            c = n(24),
            u = function (t, e, n) {
                var s,
                    l,
                    f,
                    h,
                    p = t & u.F,
                    d = t & u.G,
                    v = t & u.S,
                    m = t & u.P,
                    y = t & u.B,
                    g = d ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    b = d ? o : o[e] || (o[e] = {}),
                    x = b.prototype || (b.prototype = {});
                for (s in (d && (n = e), n))
                    (f = ((l = !p && g && void 0 !== g[s]) ? g : n)[s]),
                        (h = y && l ? c(f, r) : m && 'function' == typeof f ? c(Function.call, f) : f),
                        g && a(g, s, f, t & u.U),
                        b[s] != f && i(b, s, h),
                        m && x[s] != f && (x[s] = f);
            };
        (r.core = o), (u.F = 1), (u.G = 2), (u.S = 4), (u.P = 8), (u.B = 16), (u.W = 32), (u.U = 64), (u.R = 128), (t.exports = u);
    },
    function (t, e, n) {
        var r = n(2),
            o = n(53),
            i = n(41),
            a = Object.defineProperty;
        e.f = n(3)
            ? Object.defineProperty
            : function (t, e, n) {
                  if ((r(t), (e = i(e, !0)), r(n), o))
                      try {
                          return a(t, e, n);
                      } catch (t) {}
                  if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
                  return 'value' in n && (t[e] = n.value), t;
              };
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    function (t, e, n) {
        var r = n(6),
            o = n(30);
        t.exports = n(3)
            ? function (t, e, n) {
                  return r.f(t, e, o(1, n));
              }
            : function (t, e, n) {
                  return (t[e] = n), t;
              };
    },
    function (t, e, n) {
        var r = n(1),
            o = n(8),
            i = n(10),
            a = n(20)('src'),
            c = n(74),
            u = ('' + c).split('toString');
        (n(11).inspectSource = function (t) {
            return c.call(t);
        }),
            (t.exports = function (t, e, n, c) {
                var s = 'function' == typeof n;
                s && (i(n, 'name') || o(n, 'name', e)),
                    t[e] !== n &&
                        (s && (i(n, a) || o(n, a, t[e] ? '' + t[e] : u.join(String(e)))), t === r ? (t[e] = n) : c ? (t[e] ? (t[e] = n) : o(t, e, n)) : (delete t[e], o(t, e, n)));
            })(Function.prototype, 'toString', function () {
                return ('function' == typeof this && this[a]) || c.call(this);
            });
    },
    function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e);
        };
    },
    function (t, e) {
        var n = (t.exports = {version: '2.6.11'});
        'number' == typeof __e && (__e = n);
    },
    function (t, e, n) {
        var r = n(89),
            o = n(15);
        t.exports = function (t) {
            return r(o(t));
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if ('function' != typeof t) throw TypeError(t + ' is not a function!');
            return t;
        };
    },
    function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    },
    function (t, e, n) {
        var r = n(56),
            o = n(38);
        t.exports =
            Object.keys ||
            function (t) {
                return r(t, o);
            };
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
        };
    },
    function (t, e) {
        t.exports = !1;
    },
    function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++n + r).toString(36));
        };
    },
    function (t, e, n) {
        t.exports = function () {
            return {path: 'https://static.hotelsforhope.com/ares'};
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(25),
            o = {};
        (o[n(0)('toStringTag')] = 'z'),
            o + '' != '[object z]' &&
                n(9)(
                    Object.prototype,
                    'toString',
                    function () {
                        return '[object ' + r(this) + ']';
                    },
                    !0
                );
    },
    function (t, e, n) {
        'use strict';
        var r = n(59),
            o = n(94),
            i = n(17),
            a = n(12);
        (t.exports = n(69)(
            Array,
            'Array',
            function (t, e) {
                (this._t = a(t)), (this._i = 0), (this._k = e);
            },
            function () {
                var t = this._t,
                    e = this._k,
                    n = this._i++;
                return !t || n >= t.length ? ((this._t = void 0), o(1)) : o(0, 'keys' == e ? n : 'values' == e ? t[n] : [n, t[n]]);
            },
            'values'
        )),
            (i.Arguments = i.Array),
            r('keys'),
            r('values'),
            r('entries');
    },
    function (t, e, n) {
        var r = n(13);
        t.exports = function (t, e, n) {
            if ((r(t), void 0 === e)) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n);
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r);
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o);
                    };
            }
            return function () {
                return t.apply(e, arguments);
            };
        };
    },
    function (t, e, n) {
        var r = n(14),
            o = n(0)('toStringTag'),
            i =
                'Arguments' ==
                r(
                    (function () {
                        return arguments;
                    })()
                );
        t.exports = function (t) {
            var e, n, a;
            return void 0 === t
                ? 'Undefined'
                : null === t
                ? 'Null'
                : 'string' ==
                  typeof (n = (function (t, e) {
                      try {
                          return t[e];
                      } catch (t) {}
                  })((e = Object(t)), o))
                ? n
                : i
                ? r(e)
                : 'Object' == (a = r(e)) && 'function' == typeof e.callee
                ? 'Arguments'
                : a;
        };
    },
    function (t, e, n) {
        var r = n(11),
            o = n(1),
            i = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
        (t.exports = function (t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {});
        })('versions', []).push({version: r.version, mode: n(19) ? 'pure' : 'global', copyright: '© 2019 Denis Pushkarev (zloirock.ru)'});
    },
    function (t, e, n) {
        var r = n(18),
            o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0;
        };
    },
    function (t, e, n) {
        var r = n(6).f,
            o = n(10),
            i = n(0)('toStringTag');
        t.exports = function (t, e, n) {
            t && !o((t = n ? t : t.prototype), i) && r(t, i, {configurable: !0, value: e});
        };
    },
    function (t, e, n) {
        var r = n(15);
        t.exports = function (t) {
            return Object(r(t));
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e};
        };
    },
    ,
    function (t, e, n) {
        'use strict';
        var r,
            o,
            i,
            a,
            c = n(19),
            u = n(1),
            s = n(24),
            l = n(25),
            f = n(5),
            h = n(4),
            p = n(13),
            d = n(75),
            v = n(76),
            m = n(54),
            y = n(48).set,
            g = n(80)(),
            b = n(50),
            x = n(81),
            w = n(82),
            S = n(83),
            _ = u.TypeError,
            k = u.process,
            L = k && k.versions,
            M = (L && L.v8) || '',
            E = u.Promise,
            O = 'process' == l(k),
            j = function () {},
            T = (o = b.f),
            P = !!(function () {
                try {
                    var t = E.resolve(1),
                        e = ((t.constructor = {})[n(0)('species')] = function (t) {
                            t(j, j);
                        });
                    return (O || 'function' == typeof PromiseRejectionEvent) && t.then(j) instanceof e && 0 !== M.indexOf('6.6') && -1 === w.indexOf('Chrome/66');
                } catch (t) {}
            })(),
            A = function (t) {
                var e;
                return !(!h(t) || 'function' != typeof (e = t.then)) && e;
            },
            $ = function (t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    g(function () {
                        for (
                            var r = t._v,
                                o = 1 == t._s,
                                i = 0,
                                a = function (e) {
                                    var n,
                                        i,
                                        a,
                                        c = o ? e.ok : e.fail,
                                        u = e.resolve,
                                        s = e.reject,
                                        l = e.domain;
                                    try {
                                        c
                                            ? (o || (2 == t._h && R(t), (t._h = 1)),
                                              !0 === c ? (n = r) : (l && l.enter(), (n = c(r)), l && (l.exit(), (a = !0))),
                                              n === e.promise ? s(_('Promise-chain cycle')) : (i = A(n)) ? i.call(n, u, s) : u(n))
                                            : s(r);
                                    } catch (t) {
                                        l && !a && l.exit(), s(t);
                                    }
                                };
                            n.length > i;

                        )
                            a(n[i++]);
                        (t._c = []), (t._n = !1), e && !t._h && q(t);
                    });
                }
            },
            q = function (t) {
                y.call(u, function () {
                    var e,
                        n,
                        r,
                        o = t._v,
                        i = D(t);
                    if (
                        (i &&
                            ((e = x(function () {
                                O
                                    ? k.emit('unhandledRejection', o, t)
                                    : (n = u.onunhandledrejection)
                                    ? n({promise: t, reason: o})
                                    : (r = u.console) && r.error && r.error('Unhandled promise rejection', o);
                            })),
                            (t._h = O || D(t) ? 2 : 1)),
                        (t._a = void 0),
                        i && e.e)
                    )
                        throw e.v;
                });
            },
            D = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length;
            },
            R = function (t) {
                y.call(u, function () {
                    var e;
                    O ? k.emit('rejectionHandled', t) : (e = u.onrejectionhandled) && e({promise: t, reason: t._v});
                });
            },
            F = function (t) {
                var e = this;
                e._d || ((e._d = !0), ((e = e._w || e)._v = t), (e._s = 2), e._a || (e._a = e._c.slice()), $(e, !0));
            },
            I = function (t) {
                var e,
                    n = this;
                if (!n._d) {
                    (n._d = !0), (n = n._w || n);
                    try {
                        if (n === t) throw _("Promise can't be resolved itself");
                        (e = A(t))
                            ? g(function () {
                                  var r = {_w: n, _d: !1};
                                  try {
                                      e.call(t, s(I, r, 1), s(F, r, 1));
                                  } catch (t) {
                                      F.call(r, t);
                                  }
                              })
                            : ((n._v = t), (n._s = 1), $(n, !1));
                    } catch (t) {
                        F.call({_w: n, _d: !1}, t);
                    }
                }
            };
        P ||
            ((E = function (t) {
                d(this, E, 'Promise', '_h'), p(t), r.call(this);
                try {
                    t(s(I, this, 1), s(F, this, 1));
                } catch (t) {
                    F.call(this, t);
                }
            }),
            ((r = function (t) {
                (this._c = []), (this._a = void 0), (this._s = 0), (this._d = !1), (this._v = void 0), (this._h = 0), (this._n = !1);
            }).prototype = n(84)(E.prototype, {
                then: function (t, e) {
                    var n = T(m(this, E));
                    return (
                        (n.ok = 'function' != typeof t || t),
                        (n.fail = 'function' == typeof e && e),
                        (n.domain = O ? k.domain : void 0),
                        this._c.push(n),
                        this._a && this._a.push(n),
                        this._s && $(this, !1),
                        n.promise
                    );
                },
                catch: function (t) {
                    return this.then(void 0, t);
                },
            })),
            (i = function () {
                var t = new r();
                (this.promise = t), (this.resolve = s(I, t, 1)), (this.reject = s(F, t, 1));
            }),
            (b.f = T = function (t) {
                return t === E || t === a ? new i(t) : o(t);
            })),
            f(f.G + f.W + f.F * !P, {Promise: E}),
            n(28)(E, 'Promise'),
            n(85)('Promise'),
            (a = n(11).Promise),
            f(f.S + f.F * !P, 'Promise', {
                reject: function (t) {
                    var e = T(this);
                    return (0, e.reject)(t), e.promise;
                },
            }),
            f(f.S + f.F * (c || !P), 'Promise', {
                resolve: function (t) {
                    return S(c && this === a ? E : this, t);
                },
            }),
            f(
                f.S +
                    f.F *
                        !(
                            P &&
                            n(86)(function (t) {
                                E.all(t).catch(j);
                            })
                        ),
                'Promise',
                {
                    all: function (t) {
                        var e = this,
                            n = T(e),
                            r = n.resolve,
                            o = n.reject,
                            i = x(function () {
                                var n = [],
                                    i = 0,
                                    a = 1;
                                v(t, !1, function (t) {
                                    var c = i++,
                                        u = !1;
                                    n.push(void 0),
                                        a++,
                                        e.resolve(t).then(function (t) {
                                            u || ((u = !0), (n[c] = t), --a || r(n));
                                        }, o);
                                }),
                                    --a || r(n);
                            });
                        return i.e && o(i.v), n.promise;
                    },
                    race: function (t) {
                        var e = this,
                            n = T(e),
                            r = n.reject,
                            o = x(function () {
                                v(t, !1, function (t) {
                                    e.resolve(t).then(n.resolve, r);
                                });
                            });
                        return o.e && r(o.v), n.promise;
                    },
                }
            );
    },
    function (t, e, n) {
        var r = (function (t) {
            'use strict';
            var e = Object.prototype,
                n = e.hasOwnProperty,
                r = 'function' == typeof Symbol ? Symbol : {},
                o = r.iterator || '@@iterator',
                i = r.asyncIterator || '@@asyncIterator',
                a = r.toStringTag || '@@toStringTag';
            function c(t, e, n) {
                return Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}), t[e];
            }
            try {
                c({}, '');
            } catch (t) {
                c = function (t, e, n) {
                    return (t[e] = n);
                };
            }
            function u(t, e, n, r) {
                var o = e && e.prototype instanceof f ? e : f,
                    i = Object.create(o.prototype),
                    a = new _(r || []);
                return (
                    (i._invoke = (function (t, e, n) {
                        var r = 'suspendedStart';
                        return function (o, i) {
                            if ('executing' === r) throw new Error('Generator is already running');
                            if ('completed' === r) {
                                if ('throw' === o) throw i;
                                return L();
                            }
                            for (n.method = o, n.arg = i; ; ) {
                                var a = n.delegate;
                                if (a) {
                                    var c = x(a, n);
                                    if (c) {
                                        if (c === l) continue;
                                        return c;
                                    }
                                }
                                if ('next' === n.method) n.sent = n._sent = n.arg;
                                else if ('throw' === n.method) {
                                    if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                                    n.dispatchException(n.arg);
                                } else 'return' === n.method && n.abrupt('return', n.arg);
                                r = 'executing';
                                var u = s(t, e, n);
                                if ('normal' === u.type) {
                                    if (((r = n.done ? 'completed' : 'suspendedYield'), u.arg === l)) continue;
                                    return {value: u.arg, done: n.done};
                                }
                                'throw' === u.type && ((r = 'completed'), (n.method = 'throw'), (n.arg = u.arg));
                            }
                        };
                    })(t, n, a)),
                    i
                );
            }
            function s(t, e, n) {
                try {
                    return {type: 'normal', arg: t.call(e, n)};
                } catch (t) {
                    return {type: 'throw', arg: t};
                }
            }
            t.wrap = u;
            var l = {};
            function f() {}
            function h() {}
            function p() {}
            var d = {};
            d[o] = function () {
                return this;
            };
            var v = Object.getPrototypeOf,
                m = v && v(v(k([])));
            m && m !== e && n.call(m, o) && (d = m);
            var y = (p.prototype = f.prototype = Object.create(d));
            function g(t) {
                ['next', 'throw', 'return'].forEach(function (e) {
                    c(t, e, function (t) {
                        return this._invoke(e, t);
                    });
                });
            }
            function b(t, e) {
                var r;
                this._invoke = function (o, i) {
                    function a() {
                        return new e(function (r, a) {
                            !(function r(o, i, a, c) {
                                var u = s(t[o], t, i);
                                if ('throw' !== u.type) {
                                    var l = u.arg,
                                        f = l.value;
                                    return f && 'object' == typeof f && n.call(f, '__await')
                                        ? e.resolve(f.__await).then(
                                              function (t) {
                                                  r('next', t, a, c);
                                              },
                                              function (t) {
                                                  r('throw', t, a, c);
                                              }
                                          )
                                        : e.resolve(f).then(
                                              function (t) {
                                                  (l.value = t), a(l);
                                              },
                                              function (t) {
                                                  return r('throw', t, a, c);
                                              }
                                          );
                                }
                                c(u.arg);
                            })(o, i, r, a);
                        });
                    }
                    return (r = r ? r.then(a, a) : a());
                };
            }
            function x(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                    if (((e.delegate = null), 'throw' === e.method)) {
                        if (t.iterator.return && ((e.method = 'return'), (e.arg = void 0), x(t, e), 'throw' === e.method)) return l;
                        (e.method = 'throw'), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
                    }
                    return l;
                }
                var r = s(n, t.iterator, e.arg);
                if ('throw' === r.type) return (e.method = 'throw'), (e.arg = r.arg), (e.delegate = null), l;
                var o = r.arg;
                return o
                    ? o.done
                        ? ((e[t.resultName] = o.value), (e.next = t.nextLoc), 'return' !== e.method && ((e.method = 'next'), (e.arg = void 0)), (e.delegate = null), l)
                        : o
                    : ((e.method = 'throw'), (e.arg = new TypeError('iterator result is not an object')), (e.delegate = null), l);
            }
            function w(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
            }
            function S(t) {
                var e = t.completion || {};
                (e.type = 'normal'), delete e.arg, (t.completion = e);
            }
            function _(t) {
                (this.tryEntries = [{tryLoc: 'root'}]), t.forEach(w, this), this.reset(!0);
            }
            function k(t) {
                if (t) {
                    var e = t[o];
                    if (e) return e.call(t);
                    if ('function' == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            i = function e() {
                                for (; ++r < t.length; ) if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                                return (e.value = void 0), (e.done = !0), e;
                            };
                        return (i.next = i);
                    }
                }
                return {next: L};
            }
            function L() {
                return {value: void 0, done: !0};
            }
            return (
                (h.prototype = y.constructor = p),
                (p.constructor = h),
                (h.displayName = c(p, a, 'GeneratorFunction')),
                (t.isGeneratorFunction = function (t) {
                    var e = 'function' == typeof t && t.constructor;
                    return !!e && (e === h || 'GeneratorFunction' === (e.displayName || e.name));
                }),
                (t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : ((t.__proto__ = p), c(t, a, 'GeneratorFunction')), (t.prototype = Object.create(y)), t;
                }),
                (t.awrap = function (t) {
                    return {__await: t};
                }),
                g(b.prototype),
                (b.prototype[i] = function () {
                    return this;
                }),
                (t.AsyncIterator = b),
                (t.async = function (e, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(u(e, n, r, o), i);
                    return t.isGeneratorFunction(n)
                        ? a
                        : a.next().then(function (t) {
                              return t.done ? t.value : a.next();
                          });
                }),
                g(y),
                c(y, a, 'Generator'),
                (y[o] = function () {
                    return this;
                }),
                (y.toString = function () {
                    return '[object Generator]';
                }),
                (t.keys = function (t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return (
                        e.reverse(),
                        function n() {
                            for (; e.length; ) {
                                var r = e.pop();
                                if (r in t) return (n.value = r), (n.done = !1), n;
                            }
                            return (n.done = !0), n;
                        }
                    );
                }),
                (t.values = k),
                (_.prototype = {
                    constructor: _,
                    reset: function (t) {
                        if (
                            ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = void 0),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = 'next'),
                            (this.arg = void 0),
                            this.tryEntries.forEach(S),
                            !t)
                        )
                            for (var e in this) 't' === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ('throw' === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;
                        function r(n, r) {
                            return (a.type = 'throw'), (a.arg = t), (e.next = n), r && ((e.method = 'next'), (e.arg = void 0)), !!r;
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ('root' === i.tryLoc) return r('end');
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, 'catchLoc'),
                                    u = n.call(i, 'finallyLoc');
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                } else {
                                    if (!u) throw new Error('try statement without catch or finally');
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                                var i = o;
                                break;
                            }
                        }
                        i && ('break' === t || 'continue' === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return (a.type = t), (a.arg = e), i ? ((this.method = 'next'), (this.next = i.finallyLoc), l) : this.complete(a);
                    },
                    complete: function (t, e) {
                        if ('throw' === t.type) throw t.arg;
                        return (
                            'break' === t.type || 'continue' === t.type
                                ? (this.next = t.arg)
                                : 'return' === t.type
                                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                                : 'normal' === t.type && e && (this.next = e),
                            l
                        );
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), S(n), l;
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ('throw' === r.type) {
                                    var o = r.arg;
                                    S(n);
                                }
                                return o;
                            }
                        }
                        throw new Error('illegal catch attempt');
                    },
                    delegateYield: function (t, e, n) {
                        return (this.delegate = {iterator: k(t), resultName: e, nextLoc: n}), 'next' === this.method && (this.arg = void 0), l;
                    },
                }),
                t
            );
        })(t.exports);
        try {
            regeneratorRuntime = r;
        } catch (t) {
            Function('r', 'regeneratorRuntime = r')(r);
        }
    },
    function (t, e, n) {
        for (
            var r = n(23),
                o = n(16),
                i = n(9),
                a = n(1),
                c = n(8),
                u = n(17),
                s = n(0),
                l = s('iterator'),
                f = s('toStringTag'),
                h = u.Array,
                p = {
                    CSSRuleList: !0,
                    CSSStyleDeclaration: !1,
                    CSSValueList: !1,
                    ClientRectList: !1,
                    DOMRectList: !1,
                    DOMStringList: !1,
                    DOMTokenList: !0,
                    DataTransferItemList: !1,
                    FileList: !1,
                    HTMLAllCollection: !1,
                    HTMLCollection: !1,
                    HTMLFormElement: !1,
                    HTMLSelectElement: !1,
                    MediaList: !0,
                    MimeTypeArray: !1,
                    NamedNodeMap: !1,
                    NodeList: !0,
                    PaintRequestList: !1,
                    Plugin: !1,
                    PluginArray: !1,
                    SVGLengthList: !1,
                    SVGNumberList: !1,
                    SVGPathSegList: !1,
                    SVGPointList: !1,
                    SVGStringList: !1,
                    SVGTransformList: !1,
                    SourceBufferList: !1,
                    StyleSheetList: !0,
                    TextTrackCueList: !1,
                    TextTrackList: !1,
                    TouchList: !1,
                },
                d = o(p),
                v = 0;
            v < d.length;
            v++
        ) {
            var m,
                y = d[v],
                g = p[y],
                b = a[y],
                x = b && b.prototype;
            if (x && (x[l] || c(x, l, h), x[f] || c(x, f, y), (u[y] = h), g)) for (m in r) x[m] || i(x, m, r[m], !0);
        }
    },
    function (t, e, n) {
        'use strict';
        n.d(e, 'a', function () {
            return c;
        });
        n(46), n(34), n(23), n(52), n(32), n(22), n(33);
        function r(t, e, n, r, o, i, a) {
            try {
                var c = t[i](a),
                    u = c.value;
            } catch (t) {
                return void n(t);
            }
            c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        function o(t) {
            return function () {
                var e = this,
                    n = arguments;
                return new Promise(function (o, i) {
                    var a = t.apply(e, n);
                    function c(t) {
                        r(a, o, i, c, u, 'next', t);
                    }
                    function u(t) {
                        r(a, o, i, c, u, 'throw', t);
                    }
                    c(void 0);
                });
            };
        }
        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
        }
        var a = n(40),
            c = (function () {
                function t() {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                    })(this, t);
                }
                var e, n, r, c, u, s, l, f, h, p, d, v;
                return (
                    (e = t),
                    (n = [
                        {
                            key: 'ieForEachPolyfill',
                            value: function () {
                                window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
                            },
                        },
                        {
                            key: 'createHTML',
                            value:
                                ((v = o(
                                    regeneratorRuntime.mark(function t(e, n, r) {
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return t.abrupt(
                                                            'return',
                                                            new Promise(function (t) {
                                                                var o = document.querySelector(n);
                                                                o && null != o && (o.insertAdjacentHTML(r, e), t());
                                                            })
                                                        );
                                                    case 1:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )),
                                function (t, e, n) {
                                    return v.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'updateAttribute',
                            value: function (t, e, n) {
                                var r = document.querySelectorAll(t);
                                r &&
                                    r.forEach(function (t, r) {
                                        t.setAttribute(n, e);
                                    });
                            },
                        },
                        {
                            key: 'getAttribute',
                            value: function (t, e) {
                                if (document.querySelector(t)) return document.querySelector(t).getAttribute(e);
                            },
                        },
                        {
                            key: 'updateHTML',
                            value: function (t, e) {
                                var n = document.querySelectorAll(t);
                                n &&
                                    n.forEach(function (t, n) {
                                        t.innerHTML = e;
                                    });
                            },
                        },
                        {
                            key: 'appendToParent',
                            value: function (t, e) {
                                var n = document.querySelector(t),
                                    r = document.querySelector(e);
                                n && r && r.appendChild(n);
                            },
                        },
                        {
                            key: 'waitForSelectorInDOM',
                            value:
                                ((d = o(
                                    regeneratorRuntime.mark(function t(e) {
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return t.abrupt(
                                                            'return',
                                                            new Promise(function (t) {
                                                                var n = setInterval(function () {
                                                                    var r = document.querySelector(e);
                                                                    if (r) return t(r), clearInterval(n), r;
                                                                }, 500);
                                                            })
                                                        );
                                                    case 1:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )),
                                function (t) {
                                    return d.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'waitForTextInDOM',
                            value:
                                ((p = o(
                                    regeneratorRuntime.mark(function t(e, n) {
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return t.abrupt(
                                                            'return',
                                                            new Promise(function (t) {
                                                                var r = setInterval(function () {
                                                                    var o = document.querySelector(e).textContent;
                                                                    if (o === n) return t(o), clearInterval(r), o;
                                                                }, 500);
                                                            })
                                                        );
                                                    case 1:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )),
                                function (t, e) {
                                    return p.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'moveElementIntoExistingWrapper',
                            value: function (t, e, n) {
                                document.querySelector(e) && document.querySelector(t) && document.querySelector(e).insertAdjacentElement(n, document.querySelector(t));
                            },
                        },
                        {
                            key: 'moveOrphanedElementsIntoNewWrapper',
                            value:
                                ((h = o(
                                    regeneratorRuntime.mark(function t(e, n, r, o) {
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return t.abrupt(
                                                            'return',
                                                            new Promise(function (t) {
                                                                document.querySelector(r) &&
                                                                    (document.querySelector(r).insertAdjacentHTML(o, '<div class id="'.concat(n, '"></div>')),
                                                                    e.forEach(function (e) {
                                                                        document.getElementById(n).insertAdjacentElement('beforeEnd', e), t();
                                                                    }));
                                                            })
                                                        );
                                                    case 1:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )),
                                function (t, e, n, r) {
                                    return h.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'createWrapper',
                            value:
                                ((f = o(
                                    regeneratorRuntime.mark(function t(e, n, r, o) {
                                        var i;
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        if ((i = document.createElement('div'))) {
                                                            t.next = 3;
                                                            break;
                                                        }
                                                        return t.abrupt('return');
                                                    case 3:
                                                        i.setAttribute('class', r),
                                                            Array.prototype.forEach.call(document.querySelectorAll(e), function (t) {
                                                                i.appendChild(t);
                                                            }),
                                                            document.querySelector(n).insertAdjacentElement(o, i);
                                                    case 6:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )),
                                function (t, e, n, r) {
                                    return f.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'createModal',
                            value: function (t, e, n, r, o) {
                                n &&
                                    (document.querySelector(r).insertAdjacentHTML(o, '<span class="open-modal">Show '.concat(e, '</span>')),
                                    document.body.insertAdjacentHTML(
                                        'beforeEnd',
                                        '<div class="modal-overlay"><div class="modal-container"><div class="modal-header"><h3>'.concat(
                                            e,
                                            '</h3><span class="close-modal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="modal-content"></div></div></div>'
                                        )
                                    ),
                                    t.forEach(function (t) {
                                        document.querySelector('.modal-content').insertAdjacentElement('beforeEnd', t);
                                    }),
                                    document.querySelector('.open-modal').addEventListener('click', function () {
                                        document.querySelector('.modal-overlay').classList.toggle('show-modal');
                                    }),
                                    document.querySelector('.close-modal').addEventListener('click', function () {
                                        document.querySelector('.modal-overlay').classList.toggle('show-modal');
                                    }));
                            },
                        },
                        {
                            key: 'addMultipleHeaderLogos',
                            value:
                                ((l = o(
                                    regeneratorRuntime.mark(function t(e) {
                                        var n, r, o, i;
                                        return regeneratorRuntime.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (
                                                                (o = function (t) {
                                                                    if (t.matches && !r)
                                                                        try {
                                                                            Object.keys(e).forEach(function (t) {
                                                                                n.insertAdjacentHTML(
                                                                                    e[t].insertPosition,
                                                                                    '<img class="'.concat(e[t].className, '" src="').concat(e[t].imageUrl, '">')
                                                                                ),
                                                                                    (r = !0);
                                                                            });
                                                                        } catch (t) {
                                                                            console.error(t);
                                                                        }
                                                                }),
                                                                (t.next = 3),
                                                                this.waitForSelectorInDOM('header')
                                                            );
                                                        case 3:
                                                            (n = document.querySelector('header')), (i = window.matchMedia('(min-width: 1200px)')), o(i), i.addListener(o);
                                                        case 7:
                                                        case 'end':
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this
                                        );
                                    })
                                )),
                                function (t) {
                                    return l.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'emailVerificationSetup',
                            value: function () {
                                var t = document.createElement('script');
                                (t.text =
                                    "\n            const DeBounce_APIKEY = 'public_T0tSVklSNEZRTEtkc1c5MFZoUWhKZz09';\n            const DeBounce_BlockFreeEmails = 'false';\n        "),
                                    document.body.appendChild(t);
                                var e = document.createElement('script');
                                e.setAttribute('src', 'https://cdn.debounce.io/widget/DeBounce.js'), e.setAttribute('async', !0), document.body.appendChild(e);
                            },
                        },
                        {
                            key: 'createDropdownMenu',
                            value: function (t, e, n, r) {
                                var o = document.querySelector(t),
                                    i = document.querySelector(r);
                                if (o && i) {
                                    i.insertAdjacentHTML('beforeEnd', '<style>'.concat(n, '{display: none;}').concat(r, '{position: relative;}</style>').concat(e.outerHTML));
                                    var a = document.querySelector(n);
                                    document.addEventListener('click', function (t) {
                                        var e = t.target;
                                        e === o && a.classList.toggle('show-dropdown'),
                                            document.querySelector(''.concat(n, '.show-dropdown')) && e !== o && a.classList.toggle('show-dropdown');
                                    });
                                }
                            },
                        },
                        {
                            key: 'addPropThumbTag',
                            value: function (t, e) {
                                !document.querySelector('#theArnProperty'.concat(e, ' .ArnPropThumb > .propThumbTag')) &&
                                    document.querySelector('#theArnProperty'.concat(e)) &&
                                    document
                                        .querySelector('#theArnProperty'.concat(e, ' .ArnPropThumb'))
                                        .insertAdjacentHTML('afterbegin', '<div class="propThumbTag">'.concat(t, '</div>'));
                            },
                        },
                        {
                            key: 'ratesComingSoon',
                            value:
                                ((s = o(
                                    regeneratorRuntime.mark(function t(e) {
                                        return regeneratorRuntime.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            if (document.querySelector('.SearchHotels')) {
                                                                t.next = 2;
                                                                break;
                                                            }
                                                            return t.abrupt('return');
                                                        case 2:
                                                            return (t.next = 4), this.waitForSelectorInDOM('.pollingFinished');
                                                        case 4:
                                                            e.forEach(function (t) {
                                                                document.querySelector('#theArnProperty'.concat(t, ' .ArnLimitedAvail')) &&
                                                                    (document.querySelector('#theArnProperty'.concat(t, ' .ArnLimitedAvail')).textContent = 'Rates Coming Soon');
                                                            });
                                                        case 5:
                                                        case 'end':
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this
                                        );
                                    })
                                )),
                                function (t) {
                                    return s.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'addClass',
                            value: function (t, e) {
                                document.querySelector('.'.concat(t)).classList.add(e);
                            },
                        },
                        {
                            key: 'getMetaTagContent',
                            value: function (t) {
                                if (document.querySelector('meta[name="'.concat(t, '"]'))) return document.querySelector('meta[name="'.concat(t, '"]')).content;
                            },
                        },
                        {
                            key: 'parseJSON',
                            value: function (t) {
                                if (t) return JSON.parse(t);
                            },
                        },
                        {
                            key: 'getPageName',
                            value: function () {
                                var t,
                                    e = document.body;
                                return (
                                    e.classList.contains('SearchHotels') && !e.classList.contains('HoldRoomsForm') && (t = 'search-results'),
                                    e.classList.contains('SinglePropDetail') && (t = 'property-detail'),
                                    e.classList.contains('CheckOutForm') && (t = 'checkout'),
                                    e.classList.contains('ConfirmationForm') && (t = 'confirmation'),
                                    e.classList.contains('RootBody') && (t = 'landing-page'),
                                    e.classList.contains('WBFaq') && (t = 'faq'),
                                    e.classList.contains('WBTermsAndConditions') && (t = 'terms-conditions'),
                                    e.classList.contains('WBPrivacyPolicy') && (t = 'privacy-policy'),
                                    e.classList.contains('WBRateGuaranteeForm2') && (t = 'lrg-page'),
                                    e.classList.contains('WBValidatedRegistrationForm') && (t = 'cug-registration'),
                                    e.classList.contains('HoldRoomsForm') && e.classList.contains('SearchHotels') && (t = 'hold-rooms'),
                                    t
                                );
                            },
                        },
                        {
                            key: 'getElementTextContent',
                            value: function (t) {
                                if (document.querySelector(t)) return document.querySelector(t).textContent;
                            },
                        },
                        {
                            key: 'fetchJSON',
                            value: function (t) {
                                return function () {
                                    fetch(t)
                                        .then(function (t) {
                                            if (!t.ok) throw t;
                                            return t.json();
                                        })
                                        .catch(function (e) {
                                            e.text().then(function (e) {
                                                console.error('Could not fetch json from '.concat(t), e);
                                            });
                                        });
                                };
                            },
                        },
                        {
                            key: 'fetchHTMLFromFile',
                            value:
                                ((u = o(
                                    regeneratorRuntime.mark(function t(e) {
                                        var n;
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (n = ''),
                                                            (t.next = 3),
                                                            fetch(e)
                                                                .then(function (t) {
                                                                    if (!t.ok) throw t;
                                                                    return t.text();
                                                                })
                                                                .then(function (t) {
                                                                    n = t;
                                                                })
                                                                .catch(function (t) {
                                                                    t.text().then(function (t) {
                                                                        console.error('Could not fetch text from '.concat(e), t);
                                                                    });
                                                                })
                                                        );
                                                    case 3:
                                                        return t.abrupt('return', n);
                                                    case 4:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )),
                                function (t) {
                                    return u.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'removeMaskedElementFromTabIndex',
                            value: function (t) {
                                var e = document.querySelector(t);
                                e && e.setAttribute('tabindex', -1);
                            },
                        },
                        {
                            key: 'calculateNights',
                            value: function () {
                                var t = a(document.querySelector('input#theCheckIn').value).format('MM/DD/YYYY'),
                                    e = a(document.querySelector('input#theCheckOut').value).format('MM/DD/YYYY');
                                return a(e).diff(a(t), 'days');
                            },
                        },
                        {
                            key: 'matchMediaQuery',
                            value: function (t) {
                                return window.matchMedia('('.concat(t, ')')).matches;
                            },
                        },
                        {
                            key: 'selectCheckboxOnLabelClick',
                            value: function (t) {
                                document.querySelectorAll(t).forEach(function (t) {
                                    if (t.querySelector('input[type="checkbox"]') && t) {
                                        var e = t.querySelector('span');
                                        e || (e = t.querySelector('label')),
                                            e.addEventListener('click', function (e) {
                                                t.querySelector('input[type="checkbox"]').click();
                                            });
                                    }
                                });
                            },
                        },
                        {
                            key: 'addAttributeToInput',
                            value:
                                ((c = o(
                                    regeneratorRuntime.mark(function t(e, n, r, o) {
                                        return regeneratorRuntime.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            if (document.querySelector(o)) {
                                                                t.next = 2;
                                                                break;
                                                            }
                                                            return t.abrupt('return');
                                                        case 2:
                                                            return (t.prev = 2), (t.next = 5), this.waitForSelectorInDOM(e);
                                                        case 5:
                                                            document.querySelector(e).setAttribute(r, n), (t.next = 11);
                                                            break;
                                                        case 8:
                                                            (t.prev = 8), (t.t0 = t.catch(2)), console.error(t.t0);
                                                        case 11:
                                                        case 'end':
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this,
                                            [[2, 8]]
                                        );
                                    })
                                )),
                                function (t, e, n, r) {
                                    return c.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'replaceSpecificText',
                            value: function (t, e, n) {
                                if (document.querySelector(t)) {
                                    var r = document.querySelector(t).textContent.replace(e, n);
                                    document.querySelector(t).textContent = r;
                                }
                            },
                        },
                        {
                            key: 'checkForPastDate',
                            value: function (t) {
                                t || console.error('No date passed into checkForPastDate()');
                                var e = a();
                                return a(t).diff(e, 'milliseconds') < 0;
                            },
                        },
                    ]) && i(e.prototype, n),
                    r && i(e, r),
                    t
                );
            })();
    },
    function (t, e, n) {
        var r = n(4),
            o = n(1).document,
            i = r(o) && r(o.createElement);
        t.exports = function (t) {
            return i ? o.createElement(t) : {};
        };
    },
    function (t, e, n) {
        var r = n(26)('keys'),
            o = n(20);
        t.exports = function (t) {
            return r[t] || (r[t] = o(t));
        };
    },
    function (t, e) {
        t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
    },
    function (t, e, n) {
        'use strict';
        var r,
            o,
            i = n(43),
            a = RegExp.prototype.exec,
            c = String.prototype.replace,
            u = a,
            s = ((r = /a/), (o = /b*/g), a.call(r, 'a'), a.call(o, 'a'), 0 !== r.lastIndex || 0 !== o.lastIndex),
            l = void 0 !== /()??/.exec('')[1];
        (s || l) &&
            (u = function (t) {
                var e,
                    n,
                    r,
                    o,
                    u = this;
                return (
                    l && (n = new RegExp('^' + u.source + '$(?!\\s)', i.call(u))),
                    s && (e = u.lastIndex),
                    (r = a.call(u, t)),
                    s && r && (u.lastIndex = u.global ? r.index + r[0].length : e),
                    l &&
                        r &&
                        r.length > 1 &&
                        c.call(r[0], n, function () {
                            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
                        }),
                    r
                );
            }),
            (t.exports = u);
    },
    function (t, e, n) {
        t.exports = (function () {
            'use strict';
            var t = 'millisecond',
                e = 'second',
                n = 'minute',
                r = 'hour',
                o = 'day',
                i = 'week',
                a = 'month',
                c = 'quarter',
                u = 'year',
                s = 'date',
                l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,
                f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                h = function (t, e, n) {
                    var r = String(t);
                    return !r || r.length >= e ? t : '' + Array(e + 1 - r.length).join(n) + t;
                },
                p = {
                    s: h,
                    z: function (t) {
                        var e = -t.utcOffset(),
                            n = Math.abs(e),
                            r = Math.floor(n / 60),
                            o = n % 60;
                        return (e <= 0 ? '+' : '-') + h(r, 2, '0') + ':' + h(o, 2, '0');
                    },
                    m: function t(e, n) {
                        if (e.date() < n.date()) return -t(n, e);
                        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                            o = e.clone().add(r, a),
                            i = n - o < 0,
                            c = e.clone().add(r + (i ? -1 : 1), a);
                        return +(-(r + (n - o) / (i ? o - c : c - o)) || 0);
                    },
                    a: function (t) {
                        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
                    },
                    p: function (l) {
                        return (
                            {M: a, y: u, w: i, d: o, D: s, h: r, m: n, s: e, ms: t, Q: c}[l] ||
                            String(l || '')
                                .toLowerCase()
                                .replace(/s$/, '')
                        );
                    },
                    u: function (t) {
                        return void 0 === t;
                    },
                },
                d = {
                    name: 'en',
                    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                },
                v = 'en',
                m = {};
            m[v] = d;
            var y = function (t) {
                    return t instanceof w;
                },
                g = function (t, e, n) {
                    var r;
                    if (!t) return v;
                    if ('string' == typeof t) m[t] && (r = t), e && ((m[t] = e), (r = t));
                    else {
                        var o = t.name;
                        (m[o] = t), (r = o);
                    }
                    return !n && r && (v = r), r || (!n && v);
                },
                b = function (t, e) {
                    if (y(t)) return t.clone();
                    var n = 'object' == typeof e ? e : {};
                    return (n.date = t), (n.args = arguments), new w(n);
                },
                x = p;
            (x.l = g),
                (x.i = y),
                (x.w = function (t, e) {
                    return b(t, {locale: e.$L, utc: e.$u, $offset: e.$offset});
                });
            var w = (function () {
                    function h(t) {
                        (this.$L = this.$L || g(t.locale, null, !0)), this.parse(t);
                    }
                    var p = h.prototype;
                    return (
                        (p.parse = function (t) {
                            (this.$d = (function (t) {
                                var e = t.date,
                                    n = t.utc;
                                if (null === e) return new Date(NaN);
                                if (x.u(e)) return new Date();
                                if (e instanceof Date) return new Date(e);
                                if ('string' == typeof e && !/Z$/i.test(e)) {
                                    var r = e.match(l);
                                    if (r) {
                                        var o = r[2] - 1 || 0,
                                            i = (r[7] || '0').substring(0, 3);
                                        return n
                                            ? new Date(Date.UTC(r[1], o, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i))
                                            : new Date(r[1], o, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
                                    }
                                }
                                return new Date(e);
                            })(t)),
                                this.init();
                        }),
                        (p.init = function () {
                            var t = this.$d;
                            (this.$y = t.getFullYear()),
                                (this.$M = t.getMonth()),
                                (this.$D = t.getDate()),
                                (this.$W = t.getDay()),
                                (this.$H = t.getHours()),
                                (this.$m = t.getMinutes()),
                                (this.$s = t.getSeconds()),
                                (this.$ms = t.getMilliseconds());
                        }),
                        (p.$utils = function () {
                            return x;
                        }),
                        (p.isValid = function () {
                            return !('Invalid Date' === this.$d.toString());
                        }),
                        (p.isSame = function (t, e) {
                            var n = b(t);
                            return this.startOf(e) <= n && n <= this.endOf(e);
                        }),
                        (p.isAfter = function (t, e) {
                            return b(t) < this.startOf(e);
                        }),
                        (p.isBefore = function (t, e) {
                            return this.endOf(e) < b(t);
                        }),
                        (p.$g = function (t, e, n) {
                            return x.u(t) ? this[e] : this.set(n, t);
                        }),
                        (p.unix = function () {
                            return Math.floor(this.valueOf() / 1e3);
                        }),
                        (p.valueOf = function () {
                            return this.$d.getTime();
                        }),
                        (p.startOf = function (t, c) {
                            var l = this,
                                f = !!x.u(c) || c,
                                h = x.p(t),
                                p = function (t, e) {
                                    var n = x.w(l.$u ? Date.UTC(l.$y, e, t) : new Date(l.$y, e, t), l);
                                    return f ? n : n.endOf(o);
                                },
                                d = function (t, e) {
                                    return x.w(l.toDate()[t].apply(l.toDate('s'), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), l);
                                },
                                v = this.$W,
                                m = this.$M,
                                y = this.$D,
                                g = 'set' + (this.$u ? 'UTC' : '');
                            switch (h) {
                                case u:
                                    return f ? p(1, 0) : p(31, 11);
                                case a:
                                    return f ? p(1, m) : p(0, m + 1);
                                case i:
                                    var b = this.$locale().weekStart || 0,
                                        w = (v < b ? v + 7 : v) - b;
                                    return p(f ? y - w : y + (6 - w), m);
                                case o:
                                case s:
                                    return d(g + 'Hours', 0);
                                case r:
                                    return d(g + 'Minutes', 1);
                                case n:
                                    return d(g + 'Seconds', 2);
                                case e:
                                    return d(g + 'Milliseconds', 3);
                                default:
                                    return this.clone();
                            }
                        }),
                        (p.endOf = function (t) {
                            return this.startOf(t, !1);
                        }),
                        (p.$set = function (i, c) {
                            var l,
                                f = x.p(i),
                                h = 'set' + (this.$u ? 'UTC' : ''),
                                p = ((l = {}),
                                (l[o] = h + 'Date'),
                                (l[s] = h + 'Date'),
                                (l[a] = h + 'Month'),
                                (l[u] = h + 'FullYear'),
                                (l[r] = h + 'Hours'),
                                (l[n] = h + 'Minutes'),
                                (l[e] = h + 'Seconds'),
                                (l[t] = h + 'Milliseconds'),
                                l)[f],
                                d = f === o ? this.$D + (c - this.$W) : c;
                            if (f === a || f === u) {
                                var v = this.clone().set(s, 1);
                                v.$d[p](d), v.init(), (this.$d = v.set(s, Math.min(this.$D, v.daysInMonth())).$d);
                            } else p && this.$d[p](d);
                            return this.init(), this;
                        }),
                        (p.set = function (t, e) {
                            return this.clone().$set(t, e);
                        }),
                        (p.get = function (t) {
                            return this[x.p(t)]();
                        }),
                        (p.add = function (t, c) {
                            var s,
                                l = this;
                            t = Number(t);
                            var f = x.p(c),
                                h = function (e) {
                                    var n = b(l);
                                    return x.w(n.date(n.date() + Math.round(e * t)), l);
                                };
                            if (f === a) return this.set(a, this.$M + t);
                            if (f === u) return this.set(u, this.$y + t);
                            if (f === o) return h(1);
                            if (f === i) return h(7);
                            var p = ((s = {}), (s[n] = 6e4), (s[r] = 36e5), (s[e] = 1e3), s)[f] || 1,
                                d = this.$d.getTime() + t * p;
                            return x.w(d, this);
                        }),
                        (p.subtract = function (t, e) {
                            return this.add(-1 * t, e);
                        }),
                        (p.format = function (t) {
                            var e = this;
                            if (!this.isValid()) return 'Invalid Date';
                            var n = t || 'YYYY-MM-DDTHH:mm:ssZ',
                                r = x.z(this),
                                o = this.$locale(),
                                i = this.$H,
                                a = this.$m,
                                c = this.$M,
                                u = o.weekdays,
                                s = o.months,
                                l = function (t, r, o, i) {
                                    return (t && (t[r] || t(e, n))) || o[r].substr(0, i);
                                },
                                h = function (t) {
                                    return x.s(i % 12 || 12, t, '0');
                                },
                                p =
                                    o.meridiem ||
                                    function (t, e, n) {
                                        var r = t < 12 ? 'AM' : 'PM';
                                        return n ? r.toLowerCase() : r;
                                    },
                                d = {
                                    YY: String(this.$y).slice(-2),
                                    YYYY: this.$y,
                                    M: c + 1,
                                    MM: x.s(c + 1, 2, '0'),
                                    MMM: l(o.monthsShort, c, s, 3),
                                    MMMM: l(s, c),
                                    D: this.$D,
                                    DD: x.s(this.$D, 2, '0'),
                                    d: String(this.$W),
                                    dd: l(o.weekdaysMin, this.$W, u, 2),
                                    ddd: l(o.weekdaysShort, this.$W, u, 3),
                                    dddd: u[this.$W],
                                    H: String(i),
                                    HH: x.s(i, 2, '0'),
                                    h: h(1),
                                    hh: h(2),
                                    a: p(i, a, !0),
                                    A: p(i, a, !1),
                                    m: String(a),
                                    mm: x.s(a, 2, '0'),
                                    s: String(this.$s),
                                    ss: x.s(this.$s, 2, '0'),
                                    SSS: x.s(this.$ms, 3, '0'),
                                    Z: r,
                                };
                            return n.replace(f, function (t, e) {
                                return e || d[t] || r.replace(':', '');
                            });
                        }),
                        (p.utcOffset = function () {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                        }),
                        (p.diff = function (t, s, l) {
                            var f,
                                h = x.p(s),
                                p = b(t),
                                d = 6e4 * (p.utcOffset() - this.utcOffset()),
                                v = this - p,
                                m = x.m(this, p);
                            return (
                                (m =
                                    ((f = {}),
                                    (f[u] = m / 12),
                                    (f[a] = m),
                                    (f[c] = m / 3),
                                    (f[i] = (v - d) / 6048e5),
                                    (f[o] = (v - d) / 864e5),
                                    (f[r] = v / 36e5),
                                    (f[n] = v / 6e4),
                                    (f[e] = v / 1e3),
                                    f)[h] || v),
                                l ? m : x.a(m)
                            );
                        }),
                        (p.daysInMonth = function () {
                            return this.endOf(a).$D;
                        }),
                        (p.$locale = function () {
                            return m[this.$L];
                        }),
                        (p.locale = function (t, e) {
                            if (!t) return this.$L;
                            var n = this.clone(),
                                r = g(t, e, !0);
                            return r && (n.$L = r), n;
                        }),
                        (p.clone = function () {
                            return x.w(this.$d, this);
                        }),
                        (p.toDate = function () {
                            return new Date(this.valueOf());
                        }),
                        (p.toJSON = function () {
                            return this.isValid() ? this.toISOString() : null;
                        }),
                        (p.toISOString = function () {
                            return this.$d.toISOString();
                        }),
                        (p.toString = function () {
                            return this.$d.toUTCString();
                        }),
                        h
                    );
                })(),
                S = w.prototype;
            return (
                (b.prototype = S),
                [
                    ['$ms', t],
                    ['$s', e],
                    ['$m', n],
                    ['$H', r],
                    ['$W', o],
                    ['$M', a],
                    ['$y', u],
                    ['$D', s],
                ].forEach(function (t) {
                    S[t[1]] = function (e) {
                        return this.$g(e, t[0], t[1]);
                    };
                }),
                (b.extend = function (t, e) {
                    return t(e, w, b), b;
                }),
                (b.locale = g),
                (b.isDayjs = y),
                (b.unix = function (t) {
                    return b(1e3 * t);
                }),
                (b.en = m[v]),
                (b.Ls = m),
                b
            );
        })();
    },
    function (t, e, n) {
        var r = n(4);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
            if ('function' == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
            if (!e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (t, e, n) {
        var r = n(2),
            o = n(91),
            i = n(38),
            a = n(37)('IE_PROTO'),
            c = function () {},
            u = function () {
                var t,
                    e = n(36)('iframe'),
                    r = i.length;
                for (
                    e.style.display = 'none',
                        n(49).appendChild(e),
                        e.src = 'javascript:',
                        (t = e.contentWindow.document).open(),
                        t.write('<script>document.F=Object</script>'),
                        t.close(),
                        u = t.F;
                    r--;

                )
                    delete u.prototype[i[r]];
                return u();
            };
        t.exports =
            Object.create ||
            function (t, e) {
                var n;
                return null !== t ? ((c.prototype = r(t)), (n = new c()), (c.prototype = null), (n[a] = t)) : (n = u()), void 0 === e ? n : o(n, e);
            };
    },
    function (t, e, n) {
        'use strict';
        var r = n(2);
        t.exports = function () {
            var t = r(this),
                e = '';
            return t.global && (e += 'g'), t.ignoreCase && (e += 'i'), t.multiline && (e += 'm'), t.unicode && (e += 'u'), t.sticky && (e += 'y'), e;
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(25),
            o = RegExp.prototype.exec;
        t.exports = function (t, e) {
            var n = t.exec;
            if ('function' == typeof n) {
                var i = n.call(t, e);
                if ('object' != typeof i) throw new TypeError('RegExp exec method returned something other than an Object or null');
                return i;
            }
            if ('RegExp' !== r(t)) throw new TypeError('RegExp#exec called on incompatible receiver');
            return o.call(t, e);
        };
    },
    function (t, e, n) {
        'use strict';
        n(96);
        var r = n(9),
            o = n(8),
            i = n(7),
            a = n(15),
            c = n(0),
            u = n(39),
            s = c('species'),
            l = !i(function () {
                var t = /./;
                return (
                    (t.exec = function () {
                        var t = [];
                        return (t.groups = {a: '7'}), t;
                    }),
                    '7' !== ''.replace(t, '$<a>')
                );
            }),
            f = (function () {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function () {
                    return e.apply(this, arguments);
                };
                var n = 'ab'.split(t);
                return 2 === n.length && 'a' === n[0] && 'b' === n[1];
            })();
        t.exports = function (t, e, n) {
            var h = c(t),
                p = !i(function () {
                    var e = {};
                    return (
                        (e[h] = function () {
                            return 7;
                        }),
                        7 != ''[t](e)
                    );
                }),
                d = p
                    ? !i(function () {
                          var e = !1,
                              n = /a/;
                          return (
                              (n.exec = function () {
                                  return (e = !0), null;
                              }),
                              'split' === t &&
                                  ((n.constructor = {}),
                                  (n.constructor[s] = function () {
                                      return n;
                                  })),
                              n[h](''),
                              !e
                          );
                      })
                    : void 0;
            if (!p || !d || ('replace' === t && !l) || ('split' === t && !f)) {
                var v = /./[h],
                    m = n(a, h, ''[t], function (t, e, n, r, o) {
                        return e.exec === u ? (p && !o ? {done: !0, value: v.call(e, n, r)} : {done: !0, value: t.call(n, e, r)}) : {done: !1};
                    }),
                    y = m[0],
                    g = m[1];
                r(String.prototype, t, y),
                    o(
                        RegExp.prototype,
                        h,
                        2 == e
                            ? function (t, e) {
                                  return g.call(t, this, e);
                              }
                            : function (t) {
                                  return g.call(t, this);
                              }
                    );
            }
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(2),
            o = n(29),
            i = n(27),
            a = n(18),
            c = n(60),
            u = n(44),
            s = Math.max,
            l = Math.min,
            f = Math.floor,
            h = /\$([$&`']|\d\d?|<[^>]*>)/g,
            p = /\$([$&`']|\d\d?)/g;
        n(45)('replace', 2, function (t, e, n, d) {
            return [
                function (r, o) {
                    var i = t(this),
                        a = null == r ? void 0 : r[e];
                    return void 0 !== a ? a.call(r, i, o) : n.call(String(i), r, o);
                },
                function (t, e) {
                    var o = d(n, t, this, e);
                    if (o.done) return o.value;
                    var f = r(t),
                        h = String(this),
                        p = 'function' == typeof e;
                    p || (e = String(e));
                    var m = f.global;
                    if (m) {
                        var y = f.unicode;
                        f.lastIndex = 0;
                    }
                    for (var g = []; ; ) {
                        var b = u(f, h);
                        if (null === b) break;
                        if ((g.push(b), !m)) break;
                        '' === String(b[0]) && (f.lastIndex = c(h, i(f.lastIndex), y));
                    }
                    for (var x, w = '', S = 0, _ = 0; _ < g.length; _++) {
                        b = g[_];
                        for (var k = String(b[0]), L = s(l(a(b.index), h.length), 0), M = [], E = 1; E < b.length; E++) M.push(void 0 === (x = b[E]) ? x : String(x));
                        var O = b.groups;
                        if (p) {
                            var j = [k].concat(M, L, h);
                            void 0 !== O && j.push(O);
                            var T = String(e.apply(void 0, j));
                        } else T = v(k, h, L, M, O, e);
                        L >= S && ((w += h.slice(S, L) + T), (S = L + k.length));
                    }
                    return w + h.slice(S);
                },
            ];
            function v(t, e, r, i, a, c) {
                var u = r + t.length,
                    s = i.length,
                    l = p;
                return (
                    void 0 !== a && ((a = o(a)), (l = h)),
                    n.call(c, l, function (n, o) {
                        var c;
                        switch (o.charAt(0)) {
                            case '$':
                                return '$';
                            case '&':
                                return t;
                            case '`':
                                return e.slice(0, r);
                            case "'":
                                return e.slice(u);
                            case '<':
                                c = a[o.slice(1, -1)];
                                break;
                            default:
                                var l = +o;
                                if (0 === l) return n;
                                if (l > s) {
                                    var h = f(l / 10);
                                    return 0 === h ? n : h <= s ? (void 0 === i[h - 1] ? o.charAt(1) : i[h - 1] + o.charAt(1)) : n;
                                }
                                c = i[l - 1];
                        }
                        return void 0 === c ? '' : c;
                    })
                );
            }
        });
    },
    ,
    function (t, e, n) {
        var r,
            o,
            i,
            a = n(24),
            c = n(55),
            u = n(49),
            s = n(36),
            l = n(1),
            f = l.process,
            h = l.setImmediate,
            p = l.clearImmediate,
            d = l.MessageChannel,
            v = l.Dispatch,
            m = 0,
            y = {},
            g = function () {
                var t = +this;
                if (y.hasOwnProperty(t)) {
                    var e = y[t];
                    delete y[t], e();
                }
            },
            b = function (t) {
                g.call(t.data);
            };
        (h && p) ||
            ((h = function (t) {
                for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
                return (
                    (y[++m] = function () {
                        c('function' == typeof t ? t : Function(t), e);
                    }),
                    r(m),
                    m
                );
            }),
            (p = function (t) {
                delete y[t];
            }),
            'process' == n(14)(f)
                ? (r = function (t) {
                      f.nextTick(a(g, t, 1));
                  })
                : v && v.now
                ? (r = function (t) {
                      v.now(a(g, t, 1));
                  })
                : d
                ? ((i = (o = new d()).port2), (o.port1.onmessage = b), (r = a(i.postMessage, i, 1)))
                : l.addEventListener && 'function' == typeof postMessage && !l.importScripts
                ? ((r = function (t) {
                      l.postMessage(t + '', '*');
                  }),
                  l.addEventListener('message', b, !1))
                : (r =
                      'onreadystatechange' in s('script')
                          ? function (t) {
                                u.appendChild(s('script')).onreadystatechange = function () {
                                    u.removeChild(this), g.call(t);
                                };
                            }
                          : function (t) {
                                setTimeout(a(g, t, 1), 0);
                            })),
            (t.exports = {set: h, clear: p});
    },
    function (t, e, n) {
        var r = n(1).document;
        t.exports = r && r.documentElement;
    },
    function (t, e, n) {
        'use strict';
        var r = n(13);
        function o(t) {
            var e, n;
            (this.promise = new t(function (t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor');
                (e = t), (n = r);
            })),
                (this.resolve = r(e)),
                (this.reject = r(n));
        }
        t.exports.f = function (t) {
            return new o(t);
        };
    },
    ,
    function (t, e, n) {
        var r = n(29),
            o = n(16);
        n(97)('keys', function () {
            return function (t) {
                return o(r(t));
            };
        });
    },
    function (t, e, n) {
        t.exports =
            !n(3) &&
            !n(7)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(36)('div'), 'a', {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (t, e, n) {
        var r = n(2),
            o = n(13),
            i = n(0)('species');
        t.exports = function (t, e) {
            var n,
                a = r(t).constructor;
            return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
        };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
            }
            return t.apply(n, e);
        };
    },
    function (t, e, n) {
        var r = n(10),
            o = n(12),
            i = n(57)(!1),
            a = n(37)('IE_PROTO');
        t.exports = function (t, e) {
            var n,
                c = o(t),
                u = 0,
                s = [];
            for (n in c) n != a && r(c, n) && s.push(n);
            for (; e.length > u; ) r(c, (n = e[u++])) && (~i(s, n) || s.push(n));
            return s;
        };
    },
    function (t, e, n) {
        var r = n(12),
            o = n(27),
            i = n(90);
        t.exports = function (t) {
            return function (e, n, a) {
                var c,
                    u = r(e),
                    s = o(u.length),
                    l = i(a, s);
                if (t && n != n) {
                    for (; s > l; ) if ((c = u[l++]) != c) return !0;
                } else for (; s > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;
                return !t && -1;
            };
        };
    },
    function (t, e, n) {
        var r = n(10),
            o = n(29),
            i = n(37)('IE_PROTO'),
            a = Object.prototype;
        t.exports =
            Object.getPrototypeOf ||
            function (t) {
                return (t = o(t)), r(t, i) ? t[i] : 'function' == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
            };
    },
    function (t, e, n) {
        var r = n(0)('unscopables'),
            o = Array.prototype;
        null == o[r] && n(8)(o, r, {}),
            (t.exports = function (t) {
                o[r][t] = !0;
            });
    },
    function (t, e, n) {
        'use strict';
        var r = n(70)(!0);
        t.exports = function (t, e, n) {
            return e + (n ? r(t, e).length : 1);
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
        'use strict';
        var r = n(19),
            o = n(5),
            i = n(9),
            a = n(8),
            c = n(17),
            u = n(95),
            s = n(28),
            l = n(58),
            f = n(0)('iterator'),
            h = !([].keys && 'next' in [].keys()),
            p = function () {
                return this;
            };
        t.exports = function (t, e, n, d, v, m, y) {
            u(n, e, d);
            var g,
                b,
                x,
                w = function (t) {
                    if (!h && t in L) return L[t];
                    switch (t) {
                        case 'keys':
                        case 'values':
                            return function () {
                                return new n(this, t);
                            };
                    }
                    return function () {
                        return new n(this, t);
                    };
                },
                S = e + ' Iterator',
                _ = 'values' == v,
                k = !1,
                L = t.prototype,
                M = L[f] || L['@@iterator'] || (v && L[v]),
                E = M || w(v),
                O = v ? (_ ? w('entries') : E) : void 0,
                j = ('Array' == e && L.entries) || M;
            if (
                (j && (x = l(j.call(new t()))) !== Object.prototype && x.next && (s(x, S, !0), r || 'function' == typeof x[f] || a(x, f, p)),
                _ &&
                    M &&
                    'values' !== M.name &&
                    ((k = !0),
                    (E = function () {
                        return M.call(this);
                    })),
                (r && !y) || (!h && !k && L[f]) || a(L, f, E),
                (c[e] = E),
                (c[S] = p),
                v)
            )
                if (((g = {values: _ ? E : w('values'), keys: m ? E : w('keys'), entries: O}), y)) for (b in g) b in L || i(L, b, g[b]);
                else o(o.P + o.F * (h || k), e, g);
            return g;
        };
    },
    function (t, e, n) {
        var r = n(18),
            o = n(15);
        t.exports = function (t) {
            return function (e, n) {
                var i,
                    a,
                    c = String(o(e)),
                    u = r(n),
                    s = c.length;
                return u < 0 || u >= s
                    ? t
                        ? ''
                        : void 0
                    : (i = c.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === s || (a = c.charCodeAt(u + 1)) < 56320 || a > 57343
                    ? t
                        ? c.charAt(u)
                        : i
                    : t
                    ? c.slice(u, u + 2)
                    : a - 56320 + ((i - 55296) << 10) + 65536;
            };
        };
    },
    ,
    ,
    function (t, e, n) {
        var r = n(6).f,
            o = Function.prototype,
            i = /^\s*function ([^ (]*)/;
        'name' in o ||
            (n(3) &&
                r(o, 'name', {
                    configurable: !0,
                    get: function () {
                        try {
                            return ('' + this).match(i)[1];
                        } catch (t) {
                            return '';
                        }
                    },
                }));
    },
    function (t, e, n) {
        t.exports = n(26)('native-function-to-string', Function.toString);
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            if (!(t instanceof e) || (void 0 !== r && r in t)) throw TypeError(n + ': incorrect invocation!');
            return t;
        };
    },
    function (t, e, n) {
        var r = n(24),
            o = n(77),
            i = n(78),
            a = n(2),
            c = n(27),
            u = n(79),
            s = {},
            l = {};
        ((e = t.exports = function (t, e, n, f, h) {
            var p,
                d,
                v,
                m,
                y = h
                    ? function () {
                          return t;
                      }
                    : u(t),
                g = r(n, f, e ? 2 : 1),
                b = 0;
            if ('function' != typeof y) throw TypeError(t + ' is not iterable!');
            if (i(y)) {
                for (p = c(t.length); p > b; b++) if ((m = e ? g(a((d = t[b]))[0], d[1]) : g(t[b])) === s || m === l) return m;
            } else for (v = y.call(t); !(d = v.next()).done; ) if ((m = o(v, g, d.value, e)) === s || m === l) return m;
        }).BREAK = s),
            (e.RETURN = l);
    },
    function (t, e, n) {
        var r = n(2);
        t.exports = function (t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n);
            } catch (e) {
                var i = t.return;
                throw (void 0 !== i && r(i.call(t)), e);
            }
        };
    },
    function (t, e, n) {
        var r = n(17),
            o = n(0)('iterator'),
            i = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || i[o] === t);
        };
    },
    function (t, e, n) {
        var r = n(25),
            o = n(0)('iterator'),
            i = n(17);
        t.exports = n(11).getIteratorMethod = function (t) {
            if (null != t) return t[o] || t['@@iterator'] || i[r(t)];
        };
    },
    function (t, e, n) {
        var r = n(1),
            o = n(48).set,
            i = r.MutationObserver || r.WebKitMutationObserver,
            a = r.process,
            c = r.Promise,
            u = 'process' == n(14)(a);
        t.exports = function () {
            var t,
                e,
                n,
                s = function () {
                    var r, o;
                    for (u && (r = a.domain) && r.exit(); t; ) {
                        (o = t.fn), (t = t.next);
                        try {
                            o();
                        } catch (r) {
                            throw (t ? n() : (e = void 0), r);
                        }
                    }
                    (e = void 0), r && r.enter();
                };
            if (u)
                n = function () {
                    a.nextTick(s);
                };
            else if (!i || (r.navigator && r.navigator.standalone))
                if (c && c.resolve) {
                    var l = c.resolve(void 0);
                    n = function () {
                        l.then(s);
                    };
                } else
                    n = function () {
                        o.call(r, s);
                    };
            else {
                var f = !0,
                    h = document.createTextNode('');
                new i(s).observe(h, {characterData: !0}),
                    (n = function () {
                        h.data = f = !f;
                    });
            }
            return function (r) {
                var o = {fn: r, next: void 0};
                e && (e.next = o), t || ((t = o), n()), (e = o);
            };
        };
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return {e: !1, v: t()};
            } catch (t) {
                return {e: !0, v: t};
            }
        };
    },
    function (t, e, n) {
        var r = n(1).navigator;
        t.exports = (r && r.userAgent) || '';
    },
    function (t, e, n) {
        var r = n(2),
            o = n(4),
            i = n(50);
        t.exports = function (t, e) {
            if ((r(t), o(e) && e.constructor === t)) return e;
            var n = i.f(t);
            return (0, n.resolve)(e), n.promise;
        };
    },
    function (t, e, n) {
        var r = n(9);
        t.exports = function (t, e, n) {
            for (var o in e) r(t, o, e[o], n);
            return t;
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(1),
            o = n(6),
            i = n(3),
            a = n(0)('species');
        t.exports = function (t) {
            var e = r[t];
            i &&
                e &&
                !e[a] &&
                o.f(e, a, {
                    configurable: !0,
                    get: function () {
                        return this;
                    },
                });
        };
    },
    function (t, e, n) {
        var r = n(0)('iterator'),
            o = !1;
        try {
            var i = [7][r]();
            (i.return = function () {
                o = !0;
            }),
                Array.from(i, function () {
                    throw 2;
                });
        } catch (t) {}
        t.exports = function (t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = [7],
                    a = i[r]();
                (a.next = function () {
                    return {done: (n = !0)};
                }),
                    (i[r] = function () {
                        return a;
                    }),
                    t(i);
            } catch (t) {}
            return n;
        };
    },
    ,
    ,
    function (t, e, n) {
        var r = n(14);
        t.exports = Object('z').propertyIsEnumerable(0)
            ? Object
            : function (t) {
                  return 'String' == r(t) ? t.split('') : Object(t);
              };
    },
    function (t, e, n) {
        var r = n(18),
            o = Math.max,
            i = Math.min;
        t.exports = function (t, e) {
            return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e);
        };
    },
    function (t, e, n) {
        var r = n(6),
            o = n(2),
            i = n(16);
        t.exports = n(3)
            ? Object.defineProperties
            : function (t, e) {
                  o(t);
                  for (var n, a = i(e), c = a.length, u = 0; c > u; ) r.f(t, (n = a[u++]), e[n]);
                  return t;
              };
    },
    ,
    ,
    function (t, e) {
        t.exports = function (t, e) {
            return {value: e, done: !!t};
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(42),
            o = n(30),
            i = n(28),
            a = {};
        n(8)(a, n(0)('iterator'), function () {
            return this;
        }),
            (t.exports = function (t, e, n) {
                (t.prototype = r(a, {next: o(1, n)})), i(t, e + ' Iterator');
            });
    },
    function (t, e, n) {
        'use strict';
        var r = n(39);
        n(5)({target: 'RegExp', proto: !0, forced: r !== /./.exec}, {exec: r});
    },
    function (t, e, n) {
        var r = n(5),
            o = n(11),
            i = n(7);
        t.exports = function (t, e) {
            var n = (o.Object || {})[t] || Object[t],
                a = {};
            (a[t] = e(n)),
                r(
                    r.S +
                        r.F *
                            i(function () {
                                n(1);
                            }),
                    'Object',
                    a
                );
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
        'use strict';
        n.d(e, 'a', function () {
            return s;
        });
        n(33), n(32), n(22);
        var r = n(21),
            o = n.n(r);
        function i(t, e, n, r, o, i, a) {
            try {
                var c = t[i](a),
                    u = c.value;
            } catch (t) {
                return void n(t);
            }
            c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        function a(t) {
            return function () {
                var e = this,
                    n = arguments;
                return new Promise(function (r, o) {
                    var a = t.apply(e, n);
                    function c(t) {
                        i(a, r, o, c, u, 'next', t);
                    }
                    function u(t) {
                        i(a, r, o, c, u, 'throw', t);
                    }
                    c(void 0);
                });
            };
        }
        var c = new (n(35).a)(),
            u = new o.a();
        function s(t) {
            return l.apply(this, arguments);
        }
        function l() {
            return (l = a(
                regeneratorRuntime.mark(function t(e) {
                    var n, r, o, i, s, l, f, h;
                    return regeneratorRuntime.wrap(function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (
                                        (h = function () {
                                            return (h = a(
                                                regeneratorRuntime.mark(function t() {
                                                    var e;
                                                    return regeneratorRuntime.wrap(function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    if (null === document.querySelector('meta[name="landing-page"]')) {
                                                                        t.next = 2;
                                                                        break;
                                                                    }
                                                                    return t.abrupt('return');
                                                                case 2:
                                                                    return (t.next = 4), c.fetchHTMLFromFile(''.concat(u.path, '/html/f1/footer.html'));
                                                                case 4:
                                                                    (e = t.sent), document.querySelector('.pb-container').insertAdjacentHTML('afterend', e);
                                                                case 6:
                                                                case 'end':
                                                                    return t.stop();
                                                            }
                                                    }, t);
                                                })
                                            )).apply(this, arguments);
                                        }),
                                        (f = function () {
                                            return h.apply(this, arguments);
                                        }),
                                        (l = function () {
                                            return (l = a(
                                                regeneratorRuntime.mark(function t(e) {
                                                    var o, i, a;
                                                    return regeneratorRuntime.wrap(function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (
                                                                        (i = function (t) {
                                                                            null !== r &&
                                                                                (t.matches
                                                                                    ? document
                                                                                          .querySelector('.mobile-nav-lower-ul .language-mobile-li')
                                                                                          .insertAdjacentElement('afterbegin', r)
                                                                                    : document.querySelector('#tickets .language').insertAdjacentElement('afterbegin', r));
                                                                        }),
                                                                        (t.next = 3),
                                                                        c.fetchHTMLFromFile(''.concat(u.path, '/html/f1/mobile-hamburger-menu.html'))
                                                                    );
                                                                case 3:
                                                                    return (
                                                                        (o = t.sent),
                                                                        n.insertAdjacentHTML('beforeend', o),
                                                                        (document.querySelector('.mobile-nav-upper-ul #contactUs').href =
                                                                            '46451' === e || '45246' === e
                                                                                ? 'href="https://events.hotelsforhope.com/v6/support?siteId=46973"'
                                                                                : 'href="https://events.hotelsforhope.com/v6/support?siteId='.concat(e, '"')),
                                                                        (t.next = 9),
                                                                        c.waitForSelectorInDOM('.navbar-hamburger')
                                                                    );
                                                                case 9:
                                                                    document.querySelector('.navbar-hamburger').addEventListener('click', function () {
                                                                        document.querySelector('.mobile-nav-container').classList.toggle('show-mobile-nav');
                                                                    }),
                                                                        (a = window.matchMedia('(max-width: 1100px)')),
                                                                        i(a),
                                                                        a.addListener(i);
                                                                case 13:
                                                                case 'end':
                                                                    return t.stop();
                                                            }
                                                    }, t);
                                                })
                                            )).apply(this, arguments);
                                        }),
                                        (s = function (t) {
                                            return l.apply(this, arguments);
                                        }),
                                        (i = function () {
                                            return (i = a(
                                                regeneratorRuntime.mark(function t(o) {
                                                    var i, a;
                                                    return regeneratorRuntime.wrap(function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (t.next = 2), c.fetchHTMLFromFile(''.concat(u.path, '/html/f1/f1-header.html'));
                                                                case 2:
                                                                    if (
                                                                        ((i = t.sent),
                                                                        (a =
                                                                            '46451' === e || '45246' === e
                                                                                ? '\n        <ul id="races-contact">\n            <li>\n                <a href="#races-container" id="races">Races</a>\n            </li>\n            <li>\n                <a href="https://events.hotelsforhope.com/v6/support?siteId=46973" id="contactUs">Contact Us</a>\n            </li>\n        </ul>\n        <div class="navbar-hamburger">\n            <span class="toggle-bar top-bar"></span> \n            <span class="toggle-bar middle-bar"></span> \n            <span class="toggle-bar bottom-bar"></span>\n        </div>\n    '
                                                                                : '\n    <ul id="races-contact">\n        <li>\n            <a href="https://bookrooms.formula1.com/" id="races" target="_blank">Races</a>\n        </li>\n        <li>\n            <a href="https://events.hotelsforhope.com/v6/support?siteId='.concat(
                                                                                      o,
                                                                                      '" id="contactUs">Contact Us</a>\n        </li>\n    </ul>\n    <div class="navbar-hamburger">\n        <span class="toggle-bar top-bar"></span> \n        <span class="toggle-bar middle-bar"></span> \n        <span class="toggle-bar bottom-bar"></span>\n    </div>\n'
                                                                                  )),
                                                                        n.insertAdjacentHTML('beforebegin', i),
                                                                        n.insertAdjacentHTML('beforeend', a),
                                                                        null !== r)
                                                                    ) {
                                                                        t.next = 8;
                                                                        break;
                                                                    }
                                                                    return t.abrupt('return');
                                                                case 8:
                                                                    document.querySelector('#tickets .language').insertAdjacentElement('afterbegin', r);
                                                                case 9:
                                                                case 'end':
                                                                    return t.stop();
                                                            }
                                                    }, t);
                                                })
                                            )).apply(this, arguments);
                                        }),
                                        (o = function (t) {
                                            return i.apply(this, arguments);
                                        }),
                                        (t.next = 8),
                                        c.waitForSelectorInDOM('header')
                                    );
                                case 8:
                                    (n = document.querySelector('header')), (r = document.querySelector('#language')), o(e), s(e), f();
                                case 13:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                })
            )).apply(this, arguments);
        }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
        'use strict';
        n.r(e);
        n(73), n(34), n(23), n(22), n(52);
        var r = n(21),
            o = new (n.n(r).a)(),
            i = {
                races_2020: {
                    russia: {
                        days: '25-27',
                        month: 'Sep',
                        race_expiry: '2020-09-27',
                        sponsor: 'VTB',
                        name: 'Russian Grand Prix',
                        location: 'Sochi, Russia',
                        country_flag_url: ''.concat(o.path, '/html/f1/f1-landing-page/images/russia.jpg'),
                        flag_alt_text: 'Russian',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=36972&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Russia%202020',
                    },
                    portugal: {
                        days: '23-25',
                        month: 'Oct',
                        race_expiry: '2020-10-25',
                        sponsor: 'Heineken',
                        name: 'Portuguese Grand Prix',
                        location: 'Algarve, Portugal',
                        country_flag_url: ''.concat(o.path, '/html/f1/f1-landing-page/images/portugal.jpg'),
                        flag_alt_text: 'Portugese',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=44099&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Portugal%202020',
                    },
                    turkey: {
                        days: '13-15',
                        month: 'Nov',
                        race_expiry: '2020-11-15',
                        sponsor: 'DHL',
                        name: 'Turkish Grand Prix',
                        location: 'Istanbul, Turkey',
                        country_flag_url: ''.concat(o.path, '/html/f1/f1-landing-page/images/turkey.jpg'),
                        flag_alt_text: 'Turkish',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=44089&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Turkey%202020',
                    },
                    bahrain: {
                        days: '27-29',
                        month: 'Nov',
                        race_expiry: '2020-11-29',
                        sponsor: 'Gulf Air',
                        name: 'Bahrain Grand Prix',
                        location: 'Sakhir, Bahrain',
                        country_flag_url: ''.concat(o.path, '/html/f1/f1-landing-page/images/bahrain.jpg'),
                        flag_alt_text: 'Bahrain',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=44125&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Bahrain%202020',
                    },
                    sakhir: {
                        days: '4-6',
                        month: 'Dec',
                        race_expiry: '2020-12-06',
                        sponsor: 'Rolex',
                        name: 'Sakhir Grand Prix',
                        location: 'Sakhir, Bahrain',
                        country_flag_url: ''.concat(o.path, '/html/f1/f1-landing-page/images/bahrain.jpg'),
                        flag_alt_text: 'Bahrain',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=44126&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Sakhir%202020',
                    },
                    abu_dhabi: {
                        days: '11-13',
                        month: 'Dec',
                        race_expiry: '2020-12-13',
                        sponsor: 'Etihad Airways',
                        name: 'Abu Dhabi Grand Prix',
                        location: 'Yas Island, Abu Dhabi',
                        country_flag_url: ''.concat(o.path, '/html/f1/f1-landing-page/images/abu-dhabi.jpg'),
                        flag_alt_text: 'United Arab Emirates',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=36977&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Abu%20Dhabi%202020',
                    },
                    vietnam: {
                        days: 'TBC',
                        month: '',
                        race_expiry: '2021-01-30',
                        sponsor: 'Vinfast',
                        name: 'Vietnam Grand Prix',
                        location: 'Hanoi, Vietnam',
                        country_flag_url: ''.concat(o.path, '/html/f1/f1-landing-page/images/vietnam.jpg'),
                        flag_alt_text: 'Vietnamese',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=36361&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Vietnam%202020',
                    },
                },
            },
            a = n(35),
            c = n(120);
        Object(c.a)(document.querySelector('meta[name="siteId"]').content);
        var u,
            s = new a.a();
        Object.keys(i).forEach(function (t) {
            var e = t.slice(-4);
            document
                .querySelector('#lower-section')
                .insertAdjacentHTML(
                    'beforebegin',
                    '\n            <div class="container" id="races-container">\n                <section>\n                    <h1>'
                        .concat(
                            e,
                            ' FIA Formula One World Championship&trade; Races</h1>\n                    <p>Choose your race below to see all available hotel options.</p>\n                    <fieldset>\n                        <h3 class="season">'
                        )
                        .concat(e, ' Races</h3>\n                        <div class="races-')
                        .concat(e, ' races">\n                        </div>\n                    </fieldset>\n                </section>\n            </div>\n            ')
                ),
                (function (t, e) {
                    var n = document.querySelector('.races-'.concat(e));
                    Object.keys(t).forEach(function (r) {
                        s.checkForPastDate(t[r].race_expiry) ||
                            n.insertAdjacentHTML(
                                'beforeend',
                                '\n                <div class="race">\n                    <div class="race-info">\n                        <div class="date">\n                            <div class="days">'
                                    .concat(t[r].days, '</div>\n                            <div class="month">')
                                    .concat(
                                        t[r].month,
                                        '</div>\n                        </div>\n                        <div class="race-location">\n                            <img class="country-flag" src="'
                                    )
                                    .concat(t[r].country_flag_url, '" alt="')
                                    .concat(
                                        t[r].flag_alt_text,
                                        ' flag">\n                            <div class="race-details">\n                                <div class="name">\n                                <span id="F1-title">Formula 1</span>\n                                <span id="mobile-year">'
                                    )
                                    .concat(e, '</span>\n                                <span id="sponsor">')
                                    .concat(t[r].sponsor, '</span>\n                                ')
                                    .concat(t[r].name, '\n                                <span id="desktop-year">')
                                    .concat(e, '</span>\n                                </div>\n                                <div class="location">')
                                    .concat(
                                        t[r].location,
                                        '</div>\n                            </div>\n                        </div>\n                    </div>\n                <a class="book-btn" target="_blank" href="'
                                    )
                                    .concat(
                                        t[r].book_url,
                                        '">Book Rooms <svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#C21E26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M4.5 10 L9 6 4.5 .75"></path> </svg></a>\n                <a class="mobile-book-btn" target="_blank" href="'
                                    )
                                    .concat(
                                        t[r].book_url,
                                        '"><svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#C21E26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M4.5 10 L9 6 4.5 .75"></path> </svg></a>\n            </div>\n        '
                                    )
                            );
                    });
                })(i[t], e);
        }),
            (document.querySelector('.footer-nav ul li:last-child a').href = 'https://events.hotelsforhope.com/v6/support?siteId=46973'),
            document.querySelector('.more').addEventListener('click', function () {
                document.querySelector('.more').classList.toggle('open'), document.querySelector('.mobile-privacy-links').classList.toggle('show');
            }),
            (document.querySelector('.logo').outerHTML =
                '\n        <span class="logo">\n            <img src="https://static.hotelsforhope.com/ares/html/f1/f1-landing-page/images/logo.png" alt="F1 Rooms Logo">\n        </span>\n        '),
            (u = 'F1® Rooms'),
            (document.querySelector('title').textContent = u);
    },
]);
