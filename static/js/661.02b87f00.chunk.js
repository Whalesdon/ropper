"use strict";
(self.webpackChunkcoti_marketing_new = self.webpackChunkcoti_marketing_new || []).push([
    [661], {
        1374: function() {},
        3151: function() {},
        4026: function(e, t, n) {
            n.d(t, {
                tq: function() {
                    return k
                },
                o5: function() {
                    return O
                }
            });
            var i = n(9439);

            function a(e, t) {
                if (null == e) return {};
                var n, i, a = function(e, t) {
                    if (null == e) return {};
                    var n, i, a = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var r = n(7313),
                s = n(7943);

            function l(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function o(e, t) {
                var n = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((function(e) {
                    return n.indexOf(e) < 0
                })).forEach((function(n) {
                    "undefined" === typeof e[n] ? e[n] = t[n] : l(t[n]) && l(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : o(e[n], t[n]) : e[n] = t[n]
                }))
            }

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e.pagination && "undefined" === typeof e.pagination.el
            }

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = e.split(" ").map((function(e) {
                        return e.trim()
                    })).filter((function(e) {
                        return !!e
                    })),
                    n = [];
                return t.forEach((function(e) {
                    n.indexOf(e) < 0 && n.push(e)
                })), n.join(" ")
            }
            var f = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];
            var v = n(3433),
                h = function(e, t) {
                    var n = t.slidesPerView;
                    if (t.breakpoints) {
                        var i = s.ZP.prototype.getBreakpoint(t.breakpoints),
                            a = i in t.breakpoints ? t.breakpoints[i] : void 0;
                        a && a.slidesPerView && (n = a.slidesPerView)
                    }
                    var r = Math.ceil(parseFloat(t.loopedSlides || n, 10));
                    return (r += t.loopAdditionalSlides) > e.length && t.loopedSlidesLimit && (r = e.length), r
                };

            function g(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function m(e) {
                var t = [];
                return r.Children.toArray(e).forEach((function(e) {
                    g(e) ? t.push(e) : e.props && e.props.children && m(e.props.children).forEach((function(e) {
                        return t.push(e)
                    }))
                })), t
            }

            function w(e) {
                var t = [],
                    n = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return r.Children.toArray(e).forEach((function(e) {
                    if (g(e)) t.push(e);
                    else if (e.props && e.props.slot && n[e.props.slot]) n[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        var i = m(e.props.children);
                        i.length > 0 ? i.forEach((function(e) {
                            return t.push(e)
                        })) : n["container-end"].push(e)
                    } else n["container-end"].push(e)
                })), {
                    slides: t,
                    slots: n
                }
            }

            function b(e) {
                var t, n, i, a, r, s = e.swiper,
                    d = e.slides,
                    c = e.passedParams,
                    u = e.changedParams,
                    p = e.nextEl,
                    f = e.prevEl,
                    v = e.scrollbarEl,
                    h = e.paginationEl,
                    g = u.filter((function(e) {
                        return "children" !== e && "direction" !== e
                    })),
                    m = s.params,
                    w = s.pagination,
                    b = s.navigation,
                    y = s.scrollbar,
                    C = s.virtual,
                    S = s.thumbs;
                u.includes("thumbs") && c.thumbs && c.thumbs.swiper && m.thumbs && !m.thumbs.swiper && (t = !0), u.includes("controller") && c.controller && c.controller.control && m.controller && !m.controller.control && (n = !0), u.includes("pagination") && c.pagination && (c.pagination.el || h) && (m.pagination || !1 === m.pagination) && w && !w.el && (i = !0), u.includes("scrollbar") && c.scrollbar && (c.scrollbar.el || v) && (m.scrollbar || !1 === m.scrollbar) && y && !y.el && (a = !0), u.includes("navigation") && c.navigation && (c.navigation.prevEl || f) && (c.navigation.nextEl || p) && (m.navigation || !1 === m.navigation) && b && !b.prevEl && !b.nextEl && (r = !0);
                (g.forEach((function(e) {
                    if (l(m[e]) && l(c[e])) o(m[e], c[e]);
                    else {
                        var t = c[e];
                        !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? m[e] = c[e] : !1 === t && s[n = e] && (s[n].destroy(), "navigation" === n ? (m[n].prevEl = void 0, m[n].nextEl = void 0, s[n].prevEl = void 0, s[n].nextEl = void 0) : (m[n].el = void 0, s[n].el = void 0))
                    }
                    var n
                })), g.includes("controller") && !n && s.controller && s.controller.control && m.controller && m.controller.control && (s.controller.control = m.controller.control), u.includes("children") && d && C && m.virtual.enabled ? (C.slides = d, C.update(!0)) : u.includes("children") && s.lazy && s.params.lazy.enabled && s.lazy.load(), t) && (S.init() && S.update(!0));
                n && (s.controller.control = m.controller.control), i && (h && (m.pagination.el = h), w.init(), w.render(), w.update()), a && (v && (m.scrollbar.el = v), y.init(), y.updateSize(), y.setTranslate()), r && (p && (m.navigation.nextEl = p), f && (m.navigation.prevEl = f), b.init(), b.update()), u.includes("allowSlideNext") && (s.allowSlideNext = c.allowSlideNext), u.includes("allowSlidePrev") && (s.allowSlidePrev = c.allowSlidePrev), u.includes("direction") && s.changeDirection(c.direction, !1), s.update()
            }
            var y = n(4942);

            function C(e, t) {
                return "undefined" === typeof window ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
            }
            var S = (0, r.createContext)(null),
                E = (0, r.createContext)(null),
                T = ["className", "tag", "wrapperTag", "children", "onSwiper"];

            function x() {
                return x = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, x.apply(this, arguments)
            }
            var k = (0, r.forwardRef)((function(e, t) {
                var n = void 0 === e ? {} : e,
                    g = n.className,
                    m = n.tag,
                    S = void 0 === m ? "div" : m,
                    k = n.wrapperTag,
                    P = void 0 === k ? "div" : k,
                    M = n.children,
                    O = n.onSwiper,
                    L = a(n, T),
                    _ = !1,
                    A = (0, r.useState)("swiper"),
                    z = (0, i.Z)(A, 2),
                    I = z[0],
                    D = z[1],
                    N = (0, r.useState)(null),
                    G = (0, i.Z)(N, 2),
                    B = G[0],
                    $ = G[1],
                    j = (0, r.useState)(!1),
                    F = (0, i.Z)(j, 2),
                    H = F[0],
                    R = F[1],
                    V = (0, r.useRef)(!1),
                    W = (0, r.useRef)(null),
                    q = (0, r.useRef)(null),
                    Z = (0, r.useRef)(null),
                    X = (0, r.useRef)(null),
                    Y = (0, r.useRef)(null),
                    U = (0, r.useRef)(null),
                    K = (0, r.useRef)(null),
                    J = (0, r.useRef)(null),
                    Q = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = {
                                on: {}
                            },
                            i = {},
                            a = {};
                        o(n, s.ZP.defaults), o(n, s.ZP.extendedDefaults), n._emitClasses = !0, n.init = !1;
                        var r = {},
                            d = f.map((function(e) {
                                return e.replace(/_/, "")
                            })),
                            c = Object.assign({}, e);
                        return Object.keys(c).forEach((function(s) {
                            "undefined" !== typeof e[s] && (d.indexOf(s) >= 0 ? l(e[s]) ? (n[s] = {}, a[s] = {}, o(n[s], e[s]), o(a[s], e[s])) : (n[s] = e[s], a[s] = e[s]) : 0 === s.search(/on[A-Z]/) && "function" === typeof e[s] ? t ? i["".concat(s[2].toLowerCase()).concat(s.substr(3))] = e[s] : n.on["".concat(s[2].toLowerCase()).concat(s.substr(3))] = e[s] : r[s] = e[s])
                        })), ["navigation", "pagination", "scrollbar"].forEach((function(e) {
                            !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e]
                        })), {
                            params: n,
                            passedParams: a,
                            rest: r,
                            events: i
                        }
                    }(L),
                    ee = Q.params,
                    te = Q.passedParams,
                    ne = Q.rest,
                    ie = Q.events,
                    ae = w(M),
                    re = ae.slides,
                    se = ae.slots,
                    le = function() {
                        R(!H)
                    };
                Object.assign(ee.on, {
                    _containerClasses: function(e, t) {
                        D(t)
                    }
                });
                var oe = function() {
                    if (Object.assign(ee.on, ie), _ = !0, q.current = new s.ZP(ee), q.current.loopCreate = function() {}, q.current.loopDestroy = function() {}, ee.loop && (q.current.loopedSlides = h(re, ee)), q.current.virtual && q.current.params.virtual.enabled) {
                        q.current.virtual.slides = re;
                        var e = {
                            cache: !1,
                            slides: re,
                            renderExternal: $,
                            renderExternalUpdate: !1
                        };
                        o(q.current.params.virtual, e), o(q.current.originalParams.virtual, e)
                    }
                };
                W.current || oe(), q.current && q.current.on("_beforeBreakpoint", le);
                return (0, r.useEffect)((function() {
                    return function() {
                        q.current && q.current.off("_beforeBreakpoint", le)
                    }
                })), (0, r.useEffect)((function() {
                    !V.current && q.current && (q.current.emitSlidesClasses(), V.current = !0)
                })), C((function() {
                    if (t && (t.current = W.current), W.current) return q.current.destroyed && oe(),
                        function(e, t) {
                            var n = e.el,
                                i = e.nextEl,
                                a = e.prevEl,
                                r = e.paginationEl,
                                s = e.scrollbarEl,
                                l = e.swiper;
                            d(t) && i && a && (l.params.navigation.nextEl = i, l.originalParams.navigation.nextEl = i, l.params.navigation.prevEl = a, l.originalParams.navigation.prevEl = a), c(t) && r && (l.params.pagination.el = r, l.originalParams.pagination.el = r), u(t) && s && (l.params.scrollbar.el = s, l.originalParams.scrollbar.el = s), l.init(n)
                        }({
                            el: W.current,
                            nextEl: Y.current,
                            prevEl: U.current,
                            paginationEl: K.current,
                            scrollbarEl: J.current,
                            swiper: q.current
                        }, ee), O && O(q.current),
                        function() {
                            q.current && !q.current.destroyed && q.current.destroy(!0, !1)
                        }
                }), []), C((function() {
                    !_ && ie && q.current && Object.keys(ie).forEach((function(e) {
                        q.current.on(e, ie[e])
                    }));
                    var e = function(e, t, n, i, a) {
                        var r = [];
                        if (!t) return r;
                        var s = function(e) {
                            r.indexOf(e) < 0 && r.push(e)
                        };
                        if (n && i) {
                            var o = i.map(a),
                                d = n.map(a);
                            o.join("") !== d.join("") && s("children"), i.length !== n.length && s("children")
                        }
                        return f.filter((function(e) {
                            return "_" === e[0]
                        })).map((function(e) {
                            return e.replace(/_/, "")
                        })).forEach((function(n) {
                            if (n in e && n in t)
                                if (l(e[n]) && l(t[n])) {
                                    var i = Object.keys(e[n]),
                                        a = Object.keys(t[n]);
                                    i.length !== a.length ? s(n) : (i.forEach((function(i) {
                                        e[n][i] !== t[n][i] && s(n)
                                    })), a.forEach((function(i) {
                                        e[n][i] !== t[n][i] && s(n)
                                    })))
                                } else e[n] !== t[n] && s(n)
                        })), r
                    }(te, Z.current, re, X.current, (function(e) {
                        return e.key
                    }));
                    return Z.current = te, X.current = re, e.length && q.current && !q.current.destroyed && b({
                            swiper: q.current,
                            slides: re,
                            passedParams: te,
                            changedParams: e,
                            nextEl: Y.current,
                            prevEl: U.current,
                            scrollbarEl: J.current,
                            paginationEl: K.current
                        }),
                        function() {
                            ie && q.current && Object.keys(ie).forEach((function(e) {
                                q.current.off(e, ie[e])
                            }))
                        }
                })), C((function() {
                    var e;
                    !(e = q.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                }), [B]), r.createElement(S, x({
                    ref: W,
                    className: p("".concat(I).concat(g ? " ".concat(g) : ""))
                }, ne), r.createElement(E.Provider, {
                    value: q.current
                }, se["container-start"], r.createElement(P, {
                    className: "swiper-wrapper"
                }, se["wrapper-start"], ee.virtual ? function(e, t, n) {
                    if (!n) return null;
                    var i = e.isHorizontal() ? (0, y.Z)({}, e.rtlTranslate ? "right" : "left", "".concat(n.offset, "px")) : {
                        top: "".concat(n.offset, "px")
                    };
                    return t.filter((function(e, t) {
                        return t >= n.from && t <= n.to
                    })).map((function(t) {
                        return r.cloneElement(t, {
                            swiper: e,
                            style: i
                        })
                    }))
                }(q.current, re, B) : !ee.loop || q.current && q.current.destroyed ? re.map((function(e) {
                    return r.cloneElement(e, {
                        swiper: q.current
                    })
                })) : function(e, t, n) {
                    var i = t.map((function(t, n) {
                        return r.cloneElement(t, {
                            swiper: e,
                            "data-swiper-slide-index": n
                        })
                    }));

                    function a(e, t, i) {
                        return r.cloneElement(e, {
                            key: "".concat(e.key, "-duplicate-").concat(t, "-").concat(i),
                            className: "".concat(e.props.className || "", " ").concat(n.slideDuplicateClass)
                        })
                    }
                    if (n.loopFillGroupWithBlank) {
                        var s = n.slidesPerGroup - i.length % n.slidesPerGroup;
                        if (s !== n.slidesPerGroup)
                            for (var l = 0; l < s; l += 1) {
                                var o = r.createElement("div", {
                                    className: "".concat(n.slideClass, " ").concat(n.slideBlankClass)
                                });
                                i.push(o)
                            }
                    }
                    "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = i.length);
                    for (var d = h(i, n), c = [], u = [], p = 0; p < d; p += 1) {
                        var f = p - Math.floor(p / i.length) * i.length;
                        u.push(a(i[f], p, "append")), c.unshift(a(i[i.length - f - 1], p, "prepend"))
                    }
                    return e && (e.loopedSlides = d), [].concat(c, (0, v.Z)(i), u)
                }(q.current, re, ee), se["wrapper-end"]), d(ee) && r.createElement(r.Fragment, null, r.createElement("div", {
                    ref: U,
                    className: "swiper-button-prev"
                }), r.createElement("div", {
                    ref: Y,
                    className: "swiper-button-next"
                })), u(ee) && r.createElement("div", {
                    ref: J,
                    className: "swiper-scrollbar"
                }), c(ee) && r.createElement("div", {
                    ref: K,
                    className: "swiper-pagination"
                }), se["container-end"]))
            }));
            k.displayName = "Swiper";
            var P = ["tag", "children", "className", "swiper", "zoom", "virtualIndex"];

            function M() {
                return M = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, M.apply(this, arguments)
            }
            var O = (0, r.forwardRef)((function(e, t) {
                var n = void 0 === e ? {} : e,
                    s = n.tag,
                    l = void 0 === s ? "div" : s,
                    o = n.children,
                    d = n.className,
                    c = void 0 === d ? "" : d,
                    u = n.swiper,
                    f = n.zoom,
                    v = n.virtualIndex,
                    h = a(n, P),
                    g = (0, r.useRef)(null),
                    m = (0, r.useState)("swiper-slide"),
                    w = (0, i.Z)(m, 2),
                    b = w[0],
                    y = w[1];

                function E(e, t, n) {
                    t === g.current && y(n)
                }
                C((function() {
                    if (t && (t.current = g.current), g.current && u) {
                        if (!u.destroyed) return u.on("_slideClass", E),
                            function() {
                                u && u.off("_slideClass", E)
                            };
                        "swiper-slide" !== b && y("swiper-slide")
                    }
                })), C((function() {
                    u && g.current && !u.destroyed && y(u.getSlideClasses(g.current))
                }), [u]);
                var T = {
                        isActive: b.indexOf("swiper-slide-active") >= 0 || b.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: b.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: b.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: b.indexOf("swiper-slide-prev") >= 0 || b.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: b.indexOf("swiper-slide-next") >= 0 || b.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    x = function() {
                        return "function" === typeof o ? o(T) : o
                    };
                return r.createElement(l, M({
                    ref: g,
                    className: p("".concat(b).concat(c ? " ".concat(c) : "")),
                    "data-swiper-slide-index": v
                }, h), r.createElement(S.Provider, {
                    value: T
                }, f ? r.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof f ? f : void 0
                }, x()) : x()))
            }));
            O.displayName = "SwiperSlide"
        },
        7943: function(e, t, n) {
            n.d(t, {
                pt: function() {
                    return we
                },
                W_: function() {
                    return he
                },
                tl: function() {
                    return me
                },
                ZP: function() {
                    return fe
                }
            });
            var i = n(3433),
                a = n(5671),
                r = n(3144);

            function s(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Object.keys(t).forEach((function(n) {
                    "undefined" === typeof e[n] ? e[n] = t[n] : s(t[n]) && s(e[n]) && Object.keys(t[n]).length > 0 && l(e[n], t[n])
                }))
            }
            var o = {
                body: {},
                addEventListener: function() {},
                removeEventListener: function() {},
                activeElement: {
                    blur: function() {},
                    nodeName: ""
                },
                querySelector: function() {
                    return null
                },
                querySelectorAll: function() {
                    return []
                },
                getElementById: function() {
                    return null
                },
                createEvent: function() {
                    return {
                        initEvent: function() {}
                    }
                },
                createElement: function() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function() {},
                        getElementsByTagName: function() {
                            return []
                        }
                    }
                },
                createElementNS: function() {
                    return {}
                },
                importNode: function() {
                    return null
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function d() {
                var e = "undefined" !== typeof document ? document : {};
                return l(e, o), e
            }
            var c = {
                document: o,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState: function() {},
                    pushState: function() {},
                    go: function() {},
                    back: function() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {},
                matchMedia: function() {
                    return {}
                },
                requestAnimationFrame: function(e) {
                    return "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0)
                },
                cancelAnimationFrame: function(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function u() {
                var e = "undefined" !== typeof window ? window : {};
                return l(e, c), e
            }
            var p = n(2963),
                f = n(7326),
                v = n(136),
                h = n(9388);
            var g = function(e) {
                (0, v.Z)(n, e);
                var t = (0, h.Z)(n);

                function n(e) {
                    var r;
                    return (0, a.Z)(this, n), "number" === typeof e ? r = t.call(this, e) : (r = t.call.apply(t, [this].concat((0, i.Z)(e || []))), function(e) {
                        var t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: function() {
                                return t
                            },
                            set: function(e) {
                                t.__proto__ = e
                            }
                        })
                    }((0, f.Z)(r))), (0, p.Z)(r)
                }
                return (0, r.Z)(n)
            }((0, n(8737).Z)(Array));

            function m() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = [];
                return e.forEach((function(e) {
                    Array.isArray(e) ? t.push.apply(t, (0, i.Z)(m(e))) : t.push(e)
                })), t
            }

            function w(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function b(e, t) {
                var n = u(),
                    i = d(),
                    a = [];
                if (!t && e instanceof g) return e;
                if (!e) return new g(a);
                if ("string" === typeof e) {
                    var r = e.trim();
                    if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
                        var s = "div";
                        0 === r.indexOf("<li") && (s = "ul"), 0 === r.indexOf("<tr") && (s = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (s = "tr"), 0 === r.indexOf("<tbody") && (s = "table"), 0 === r.indexOf("<option") && (s = "select");
                        var l = i.createElement(s);
                        l.innerHTML = r;
                        for (var o = 0; o < l.childNodes.length; o += 1) a.push(l.childNodes[o])
                    } else a = function(e, t) {
                        if ("string" !== typeof e) return [e];
                        for (var n = [], i = t.querySelectorAll(e), a = 0; a < i.length; a += 1) n.push(i[a]);
                        return n
                    }(e.trim(), t || i)
                } else if (e.nodeType || e === n || e === i) a.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof g) return e;
                    a = e
                }
                return new g(function(e) {
                    for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
                    return t
                }(a))
            }
            b.fn = g.prototype;
            var y = "resize scroll".split(" ");

            function C(e) {
                return function() {
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    if ("undefined" === typeof n[0]) {
                        for (var a = 0; a < this.length; a += 1) y.indexOf(e) < 0 && (e in this[a] ? this[a][e]() : b(this[a]).trigger(e));
                        return this
                    }
                    return this.on.apply(this, [e].concat(n))
                }
            }
            C("click"), C("blur"), C("focus"), C("focusin"), C("focusout"), C("keyup"), C("keydown"), C("keypress"), C("submit"), C("change"), C("mousedown"), C("mousemove"), C("mouseup"), C("mouseenter"), C("mouseleave"), C("mouseout"), C("mouseover"), C("touchstart"), C("touchend"), C("touchmove"), C("resize"), C("scroll");
            var S = {
                addClass: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var a = m(t.map((function(e) {
                        return e.split(" ")
                    })));
                    return this.forEach((function(e) {
                        var t;
                        (t = e.classList).add.apply(t, (0, i.Z)(a))
                    })), this
                },
                removeClass: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var a = m(t.map((function(e) {
                        return e.split(" ")
                    })));
                    return this.forEach((function(e) {
                        var t;
                        (t = e.classList).remove.apply(t, (0, i.Z)(a))
                    })), this
                },
                hasClass: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var i = m(t.map((function(e) {
                        return e.split(" ")
                    })));
                    return w(this, (function(e) {
                        return i.filter((function(t) {
                            return e.classList.contains(t)
                        })).length > 0
                    })).length > 0
                },
                toggleClass: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var i = m(t.map((function(e) {
                        return e.split(" ")
                    })));
                    this.forEach((function(e) {
                        i.forEach((function(t) {
                            e.classList.toggle(t)
                        }))
                    }))
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" === typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var n = 0; n < this.length; n += 1)
                        if (2 === arguments.length) this[n].setAttribute(e, t);
                        else
                            for (var i in e) this[n][i] = e[i], this[n].setAttribute(i, e[i]);
                    return this
                },
                removeAttr: function(e) {
                    for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" !== typeof e ? "".concat(e, "ms") : e;
                    return this
                },
                on: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var i = t[0],
                        a = t[1],
                        r = t[2],
                        s = t[3];

                    function l(e) {
                        var t = e.target;
                        if (t) {
                            var n = e.target.dom7EventData || [];
                            if (n.indexOf(e) < 0 && n.unshift(e), b(t).is(a)) r.apply(t, n);
                            else
                                for (var i = b(t).parents(), s = 0; s < i.length; s += 1) b(i[s]).is(a) && r.apply(i[s], n)
                        }
                    }

                    function o(e) {
                        var t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
                    }
                    "function" === typeof t[1] && (i = t[0], r = t[1], s = t[2], a = void 0), s || (s = !1);
                    for (var d, c = i.split(" "), u = 0; u < this.length; u += 1) {
                        var p = this[u];
                        if (a)
                            for (d = 0; d < c.length; d += 1) {
                                var f = c[d];
                                p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({
                                    listener: r,
                                    proxyListener: l
                                }), p.addEventListener(f, l, s)
                            } else
                                for (d = 0; d < c.length; d += 1) {
                                    var v = c[d];
                                    p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[v] || (p.dom7Listeners[v] = []), p.dom7Listeners[v].push({
                                        listener: r,
                                        proxyListener: o
                                    }), p.addEventListener(v, o, s)
                                }
                    }
                    return this
                },
                off: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var i = t[0],
                        a = t[1],
                        r = t[2],
                        s = t[3];
                    "function" === typeof t[1] && (i = t[0], r = t[1], s = t[2], a = void 0), s || (s = !1);
                    for (var l = i.split(" "), o = 0; o < l.length; o += 1)
                        for (var d = l[o], c = 0; c < this.length; c += 1) {
                            var u = this[c],
                                p = void 0;
                            if (!a && u.dom7Listeners ? p = u.dom7Listeners[d] : a && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]), p && p.length)
                                for (var f = p.length - 1; f >= 0; f -= 1) {
                                    var v = p[f];
                                    r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (u.removeEventListener(d, v.proxyListener, s), p.splice(f, 1)) : r || (u.removeEventListener(d, v.proxyListener, s), p.splice(f, 1))
                                }
                        }
                    return this
                },
                trigger: function() {
                    for (var e = u(), t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    for (var a = n[0].split(" "), r = n[1], s = 0; s < a.length; s += 1)
                        for (var l = a[s], o = 0; o < this.length; o += 1) {
                            var d = this[o];
                            if (e.CustomEvent) {
                                var c = new e.CustomEvent(l, {
                                    detail: r,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                d.dom7EventData = n.filter((function(e, t) {
                                    return t > 0
                                })), d.dispatchEvent(c), d.dom7EventData = [], delete d.dom7EventData
                            }
                        }
                    return this
                },
                transitionEnd: function(e) {
                    var t = this;
                    return e && t.on("transitionend", (function n(i) {
                        i.target === this && (e.call(this, i), t.off("transitionend", n))
                    })), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    var e = u();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = u(),
                            t = d(),
                            n = this[0],
                            i = n.getBoundingClientRect(),
                            a = t.body,
                            r = n.clientTop || a.clientTop || 0,
                            s = n.clientLeft || a.clientLeft || 0,
                            l = n === e ? e.scrollY : n.scrollTop,
                            o = n === e ? e.scrollX : n.scrollLeft;
                        return {
                            top: i.top + l - r,
                            left: i.left + o - s
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    var n, i = u();
                    if (1 === arguments.length) {
                        if ("string" !== typeof e) {
                            for (n = 0; n < this.length; n += 1)
                                for (var a in e) this[n].style[a] = e[a];
                            return this
                        }
                        if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" === typeof e) {
                        for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    return e ? (this.forEach((function(t, n) {
                        e.apply(t, [t, n])
                    })), this) : this
                },
                html: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].innerHTML : null;
                    for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    var t, n, i = u(),
                        a = d(),
                        r = this[0];
                    if (!r || "undefined" === typeof e) return !1;
                    if ("string" === typeof e) {
                        if (r.matches) return r.matches(e);
                        if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
                        if (r.msMatchesSelector) return r.msMatchesSelector(e);
                        for (t = b(e), n = 0; n < t.length; n += 1)
                            if (t[n] === r) return !0;
                        return !1
                    }
                    if (e === a) return r === a;
                    if (e === i) return r === i;
                    if (e.nodeType || e instanceof g) {
                        for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
                            if (t[n] === r) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    var e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if ("undefined" === typeof e) return this;
                    var t = this.length;
                    if (e > t - 1) return b([]);
                    if (e < 0) {
                        var n = t + e;
                        return b(n < 0 ? [] : [this[n]])
                    }
                    return b([this[e]])
                },
                append: function() {
                    for (var e, t = d(), n = 0; n < arguments.length; n += 1) {
                        e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                        for (var i = 0; i < this.length; i += 1)
                            if ("string" === typeof e) {
                                var a = t.createElement("div");
                                for (a.innerHTML = e; a.firstChild;) this[i].appendChild(a.firstChild)
                            } else if (e instanceof g)
                            for (var r = 0; r < e.length; r += 1) this[i].appendChild(e[r]);
                        else this[i].appendChild(e)
                    }
                    return this
                },
                prepend: function(e) {
                    var t, n, i = d();
                    for (t = 0; t < this.length; t += 1)
                        if ("string" === typeof e) {
                            var a = i.createElement("div");
                            for (a.innerHTML = e, n = a.childNodes.length - 1; n >= 0; n -= 1) this[t].insertBefore(a.childNodes[n], this[t].childNodes[0])
                        } else if (e instanceof g)
                        for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && b(this[0].nextElementSibling).is(e) ? b([this[0].nextElementSibling]) : b([]) : this[0].nextElementSibling ? b([this[0].nextElementSibling]) : b([]) : b([])
                },
                nextAll: function(e) {
                    var t = [],
                        n = this[0];
                    if (!n) return b([]);
                    for (; n.nextElementSibling;) {
                        var i = n.nextElementSibling;
                        e ? b(i).is(e) && t.push(i) : t.push(i), n = i
                    }
                    return b(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        var t = this[0];
                        return e ? t.previousElementSibling && b(t.previousElementSibling).is(e) ? b([t.previousElementSibling]) : b([]) : t.previousElementSibling ? b([t.previousElementSibling]) : b([])
                    }
                    return b([])
                },
                prevAll: function(e) {
                    var t = [],
                        n = this[0];
                    if (!n) return b([]);
                    for (; n.previousElementSibling;) {
                        var i = n.previousElementSibling;
                        e ? b(i).is(e) && t.push(i) : t.push(i), n = i
                    }
                    return b(t)
                },
                parent: function(e) {
                    for (var t = [], n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? b(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
                    return b(t)
                },
                parents: function(e) {
                    for (var t = [], n = 0; n < this.length; n += 1)
                        for (var i = this[n].parentNode; i;) e ? b(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
                    return b(t)
                },
                closest: function(e) {
                    var t = this;
                    return "undefined" === typeof e ? b([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    for (var t = [], n = 0; n < this.length; n += 1)
                        for (var i = this[n].querySelectorAll(e), a = 0; a < i.length; a += 1) t.push(i[a]);
                    return b(t)
                },
                children: function(e) {
                    for (var t = [], n = 0; n < this.length; n += 1)
                        for (var i = this[n].children, a = 0; a < i.length; a += 1) e && !b(i[a]).is(e) || t.push(i[a]);
                    return b(t)
                },
                filter: function(e) {
                    return b(w(this, e))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };
            Object.keys(S).forEach((function(e) {
                Object.defineProperty(b.fn, e, {
                    value: S[e],
                    writable: !0
                })
            }));
            var E, T, x, k = b,
                P = n(4942);

            function M(e) {
                var t = e;
                Object.keys(t).forEach((function(e) {
                    try {
                        t[e] = null
                    } catch (n) {}
                    try {
                        delete t[e]
                    } catch (n) {}
                }))
            }

            function O(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return setTimeout(e, t)
            }

            function L() {
                return Date.now()
            }

            function _(e) {
                var t, n = u();
                return n.getComputedStyle && (t = n.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
            }

            function A(e) {
                var t, n, i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                    r = u(),
                    s = _(e);
                return r.WebKitCSSMatrix ? ((n = s.transform || s.webkitTransform).split(",").length > 6 && (n = n.split(", ").map((function(e) {
                    return e.replace(",", ".")
                })).join(", ")), i = new r.WebKitCSSMatrix("none" === n ? "" : n)) : t = (i = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === a && (n = r.WebKitCSSMatrix ? i.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (n = r.WebKitCSSMatrix ? i.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), n || 0
            }

            function z(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function I(e) {
                return "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
            }

            function D() {
                for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], n = 1; n < arguments.length; n += 1) {
                    var i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                    if (void 0 !== i && null !== i && !I(i))
                        for (var a = Object.keys(Object(i)).filter((function(e) {
                                return t.indexOf(e) < 0
                            })), r = 0, s = a.length; r < s; r += 1) {
                            var l = a[r],
                                o = Object.getOwnPropertyDescriptor(i, l);
                            void 0 !== o && o.enumerable && (z(e[l]) && z(i[l]) ? i[l].__swiper__ ? e[l] = i[l] : D(e[l], i[l]) : !z(e[l]) && z(i[l]) ? (e[l] = {}, i[l].__swiper__ ? e[l] = i[l] : D(e[l], i[l])) : e[l] = i[l])
                        }
                }
                return e
            }

            function N(e, t, n) {
                e.style.setProperty(t, n)
            }

            function G(e) {
                var t, n = e.swiper,
                    i = e.targetPosition,
                    a = e.side,
                    r = u(),
                    s = -n.translate,
                    l = null,
                    o = n.params.speed;
                n.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(n.cssModeFrameID);
                var d = i > s ? "next" : "prev",
                    c = function(e, t) {
                        return "next" === d && e >= t || "prev" === d && e <= t
                    };
                ! function e() {
                    t = (new Date).getTime(), null === l && (l = t);
                    var d = Math.max(Math.min((t - l) / o, 1), 0),
                        u = .5 - Math.cos(d * Math.PI) / 2,
                        p = s + u * (i - s);
                    if (c(p, i) && (p = i), n.wrapperEl.scrollTo((0, P.Z)({}, a, p)), c(p, i)) return n.wrapperEl.style.overflow = "hidden", n.wrapperEl.style.scrollSnapType = "", setTimeout((function() {
                        n.wrapperEl.style.overflow = "", n.wrapperEl.scrollTo((0, P.Z)({}, a, p))
                    })), void r.cancelAnimationFrame(n.cssModeFrameID);
                    n.cssModeFrameID = r.requestAnimationFrame(e)
                }()
            }

            function B() {
                return E || (E = function() {
                    var e = u(),
                        t = d();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            var t = !1;
                            try {
                                var n = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, n)
                            } catch (i) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), E
            }

            function $() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.userAgent,
                    n = B(),
                    i = u(),
                    a = i.navigator.platform,
                    r = t || i.navigator.userAgent,
                    s = {
                        ios: !1,
                        android: !1
                    },
                    l = i.screen.width,
                    o = i.screen.height,
                    d = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                    c = r.match(/(iPad).*OS\s([\d_]+)/),
                    p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                    f = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    v = "Win32" === a,
                    h = "MacIntel" === a,
                    g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
                return !c && h && n.touch && g.indexOf("".concat(l, "x").concat(o)) >= 0 && ((c = r.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), h = !1), d && !v && (s.os = "android", s.android = !0), (c || f || p) && (s.os = "ios", s.ios = !0), s
            }

            function j() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return T || (T = $(e)), T
            }

            function F() {
                return x || (x = function() {
                    var e = u();
                    return {
                        isSafari: function() {
                            var t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), x
            }
            var H = {
                on: function(e, t, n) {
                    var i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" !== typeof t) return i;
                    var a = n ? "unshift" : "push";
                    return e.split(" ").forEach((function(e) {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t)
                    })), i
                },
                once: function(e, t, n) {
                    var i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" !== typeof t) return i;

                    function a() {
                        i.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
                        for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                        t.apply(i, r)
                    }
                    return a.__emitterProxy = t, i.on(e, a, n)
                },
                onAny: function(e, t) {
                    var n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" !== typeof e) return n;
                    var i = t ? "unshift" : "push";
                    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
                },
                offAny: function(e) {
                    var t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    var n = t.eventsAnyListeners.indexOf(e);
                    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
                },
                off: function(e, t) {
                    var n = this;
                    return !n.eventsListeners || n.destroyed ? n : n.eventsListeners ? (e.split(" ").forEach((function(e) {
                        "undefined" === typeof t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach((function(i, a) {
                            (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[e].splice(a, 1)
                        }))
                    })), n) : n
                },
                emit: function() {
                    var e, t, n, a = this;
                    if (!a.eventsListeners || a.destroyed) return a;
                    if (!a.eventsListeners) return a;
                    for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++) s[l] = arguments[l];
                    "string" === typeof s[0] || Array.isArray(s[0]) ? (e = s[0], t = s.slice(1, s.length), n = a) : (e = s[0].events, t = s[0].data, n = s[0].context || a), t.unshift(n);
                    var o = Array.isArray(e) ? e : e.split(" ");
                    return o.forEach((function(e) {
                        a.eventsAnyListeners && a.eventsAnyListeners.length && a.eventsAnyListeners.forEach((function(a) {
                            a.apply(n, [e].concat((0, i.Z)(t)))
                        })), a.eventsListeners && a.eventsListeners[e] && a.eventsListeners[e].forEach((function(e) {
                            e.apply(n, t)
                        }))
                    })), a
                }
            };
            var R = {
                updateSize: function() {
                    var e, t, n = this,
                        i = n.$el;
                    e = "undefined" !== typeof n.params.width && null !== n.params.width ? n.params.width : i[0].clientWidth, t = "undefined" !== typeof n.params.height && null !== n.params.height ? n.params.height : i[0].clientHeight, 0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(n, {
                        width: e,
                        height: t,
                        size: n.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    var e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }

                    function n(e, n) {
                        return parseFloat(e.getPropertyValue(t(n)) || 0)
                    }
                    var i = e.params,
                        a = e.$wrapperEl,
                        r = e.size,
                        s = e.rtlTranslate,
                        l = e.wrongRTL,
                        o = e.virtual && i.virtual.enabled,
                        d = o ? e.virtual.slides.length : e.slides.length,
                        c = a.children(".".concat(e.params.slideClass)),
                        u = o ? e.virtual.slides.length : c.length,
                        p = [],
                        f = [],
                        v = [],
                        h = i.slidesOffsetBefore;
                    "function" === typeof h && (h = i.slidesOffsetBefore.call(e));
                    var g = i.slidesOffsetAfter;
                    "function" === typeof g && (g = i.slidesOffsetAfter.call(e));
                    var m = e.snapGrid.length,
                        w = e.slidesGrid.length,
                        b = i.spaceBetween,
                        y = -h,
                        C = 0,
                        S = 0;
                    if ("undefined" !== typeof r) {
                        "string" === typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * r), e.virtualSize = -b, s ? c.css({
                            marginLeft: "",
                            marginBottom: "",
                            marginTop: ""
                        }) : c.css({
                            marginRight: "",
                            marginBottom: "",
                            marginTop: ""
                        }), i.centeredSlides && i.cssMode && (N(e.wrapperEl, "--swiper-centered-offset-before", ""), N(e.wrapperEl, "--swiper-centered-offset-after", ""));
                        var E, T = i.grid && i.grid.rows > 1 && e.grid;
                        T && e.grid.initSlides(u);
                        for (var x = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((function(e) {
                                return "undefined" !== typeof i.breakpoints[e].slidesPerView
                            })).length > 0, k = 0; k < u; k += 1) {
                            E = 0;
                            var M = c.eq(k);
                            if (T && e.grid.updateSlide(k, M, u, t), "none" !== M.css("display")) {
                                if ("auto" === i.slidesPerView) {
                                    x && (c[k].style[t("width")] = "");
                                    var O = getComputedStyle(M[0]),
                                        L = M[0].style.transform,
                                        _ = M[0].style.webkitTransform;
                                    if (L && (M[0].style.transform = "none"), _ && (M[0].style.webkitTransform = "none"), i.roundLengths) E = e.isHorizontal() ? M.outerWidth(!0) : M.outerHeight(!0);
                                    else {
                                        var A = n(O, "width"),
                                            z = n(O, "padding-left"),
                                            I = n(O, "padding-right"),
                                            D = n(O, "margin-left"),
                                            G = n(O, "margin-right"),
                                            B = O.getPropertyValue("box-sizing");
                                        if (B && "border-box" === B) E = A + D + G;
                                        else {
                                            var $ = M[0],
                                                j = $.clientWidth;
                                            E = A + z + I + D + G + ($.offsetWidth - j)
                                        }
                                    }
                                    L && (M[0].style.transform = L), _ && (M[0].style.webkitTransform = _), i.roundLengths && (E = Math.floor(E))
                                } else E = (r - (i.slidesPerView - 1) * b) / i.slidesPerView, i.roundLengths && (E = Math.floor(E)), c[k] && (c[k].style[t("width")] = "".concat(E, "px"));
                                c[k] && (c[k].swiperSlideSize = E), v.push(E), i.centeredSlides ? (y = y + E / 2 + C / 2 + b, 0 === C && 0 !== k && (y = y - r / 2 - b), 0 === k && (y = y - r / 2 - b), Math.abs(y) < .001 && (y = 0), i.roundLengths && (y = Math.floor(y)), S % i.slidesPerGroup === 0 && p.push(y), f.push(y)) : (i.roundLengths && (y = Math.floor(y)), (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup === 0 && p.push(y), f.push(y), y = y + E + b), e.virtualSize += E + b, C = E, S += 1
                            }
                        }
                        if (e.virtualSize = Math.max(e.virtualSize, r) + g, s && l && ("slide" === i.effect || "coverflow" === i.effect) && a.css({
                                width: "".concat(e.virtualSize + i.spaceBetween, "px")
                            }), i.setWrapperSize && a.css((0, P.Z)({}, t("width"), "".concat(e.virtualSize + i.spaceBetween, "px"))), T && e.grid.updateWrapperSize(E, p, t), !i.centeredSlides) {
                            for (var F = [], H = 0; H < p.length; H += 1) {
                                var R = p[H];
                                i.roundLengths && (R = Math.floor(R)), p[H] <= e.virtualSize - r && F.push(R)
                            }
                            p = F, Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - r)
                        }
                        if (0 === p.length && (p = [0]), 0 !== i.spaceBetween) {
                            var V = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
                            c.filter((function(e, t) {
                                return !i.cssMode || t !== c.length - 1
                            })).css((0, P.Z)({}, V, "".concat(b, "px")))
                        }
                        if (i.centeredSlides && i.centeredSlidesBounds) {
                            var W = 0;
                            v.forEach((function(e) {
                                W += e + (i.spaceBetween ? i.spaceBetween : 0)
                            }));
                            var q = (W -= i.spaceBetween) - r;
                            p = p.map((function(e) {
                                return e < 0 ? -h : e > q ? q + g : e
                            }))
                        }
                        if (i.centerInsufficientSlides) {
                            var Z = 0;
                            if (v.forEach((function(e) {
                                    Z += e + (i.spaceBetween ? i.spaceBetween : 0)
                                })), (Z -= i.spaceBetween) < r) {
                                var X = (r - Z) / 2;
                                p.forEach((function(e, t) {
                                    p[t] = e - X
                                })), f.forEach((function(e, t) {
                                    f[t] = e + X
                                }))
                            }
                        }
                        if (Object.assign(e, {
                                slides: c,
                                snapGrid: p,
                                slidesGrid: f,
                                slidesSizesGrid: v
                            }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                            N(e.wrapperEl, "--swiper-centered-offset-before", "".concat(-p[0], "px")), N(e.wrapperEl, "--swiper-centered-offset-after", "".concat(e.size / 2 - v[v.length - 1] / 2, "px"));
                            var Y = -e.snapGrid[0],
                                U = -e.slidesGrid[0];
                            e.snapGrid = e.snapGrid.map((function(e) {
                                return e + Y
                            })), e.slidesGrid = e.slidesGrid.map((function(e) {
                                return e + U
                            }))
                        }
                        if (u !== d && e.emit("slidesLengthChange"), p.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== w && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !o && !i.cssMode && ("slide" === i.effect || "fade" === i.effect)) {
                            var K = "".concat(i.containerModifierClass, "backface-hidden"),
                                J = e.$el.hasClass(K);
                            u <= i.maxBackfaceHiddenSlides ? J || e.$el.addClass(K) : J && e.$el.removeClass(K)
                        }
                    }
                },
                updateAutoHeight: function(e) {
                    var t, n = this,
                        i = [],
                        a = n.virtual && n.params.virtual.enabled,
                        r = 0;
                    "number" === typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed);
                    var s = function(e) {
                        return a ? n.slides.filter((function(t) {
                            return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
                        }))[0] : n.slides.eq(e)[0]
                    };
                    if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
                        if (n.params.centeredSlides)(n.visibleSlides || k([])).each((function(e) {
                            i.push(e)
                        }));
                        else
                            for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                                var l = n.activeIndex + t;
                                if (l > n.slides.length && !a) break;
                                i.push(s(l))
                            } else i.push(s(n.activeIndex));
                    for (t = 0; t < i.length; t += 1)
                        if ("undefined" !== typeof i[t]) {
                            var o = i[t].offsetHeight;
                            r = o > r ? o : r
                        }(r || 0 === r) && n.$wrapperEl.css("height", "".concat(r, "px"))
                },
                updateSlidesOffset: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0,
                        t = this,
                        n = t.params,
                        i = t.slides,
                        a = t.rtlTranslate,
                        r = t.snapGrid;
                    if (0 !== i.length) {
                        "undefined" === typeof i[0].swiperSlideOffset && t.updateSlidesOffset();
                        var s = -e;
                        a && (s = e), i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                        for (var l = 0; l < i.length; l += 1) {
                            var o = i[l],
                                d = o.swiperSlideOffset;
                            n.cssMode && n.centeredSlides && (d -= i[0].swiperSlideOffset);
                            var c = (s + (n.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + n.spaceBetween),
                                u = (s - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + n.spaceBetween),
                                p = -(s - d),
                                f = p + t.slidesSizesGrid[l],
                                v = p >= 0 && p < t.size - 1 || f > 1 && f <= t.size || p <= 0 && f >= t.size;
                            v && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(l), i.eq(l).addClass(n.slideVisibleClass)), o.progress = a ? -c : c, o.originalProgress = a ? -u : u
                        }
                        t.visibleSlides = k(t.visibleSlides)
                    }
                },
                updateProgress: function(e) {
                    var t = this;
                    if ("undefined" === typeof e) {
                        var n = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * n || 0
                    }
                    var i = t.params,
                        a = t.maxTranslate() - t.minTranslate(),
                        r = t.progress,
                        s = t.isBeginning,
                        l = t.isEnd,
                        o = s,
                        d = l;
                    0 === a ? (r = 0, s = !0, l = !0) : (s = (r = (e - t.minTranslate()) / a) <= 0, l = r >= 1), Object.assign(t, {
                        progress: r,
                        isBeginning: s,
                        isEnd: l
                    }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), s && !o && t.emit("reachBeginning toEdge"), l && !d && t.emit("reachEnd toEdge"), (o && !s || d && !l) && t.emit("fromEdge"), t.emit("progress", r)
                },
                updateSlidesClasses: function() {
                    var e, t = this,
                        n = t.slides,
                        i = t.params,
                        a = t.$wrapperEl,
                        r = t.activeIndex,
                        s = t.realIndex,
                        l = t.virtual && i.virtual.enabled;
                    n.removeClass("".concat(i.slideActiveClass, " ").concat(i.slideNextClass, " ").concat(i.slidePrevClass, " ").concat(i.slideDuplicateActiveClass, " ").concat(i.slideDuplicateNextClass, " ").concat(i.slideDuplicatePrevClass)), (e = l ? t.$wrapperEl.find(".".concat(i.slideClass, '[data-swiper-slide-index="').concat(r, '"]')) : n.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? a.children(".".concat(i.slideClass, ":not(.").concat(i.slideDuplicateClass, ')[data-swiper-slide-index="').concat(s, '"]')).addClass(i.slideDuplicateActiveClass) : a.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, '[data-swiper-slide-index="').concat(s, '"]')).addClass(i.slideDuplicateActiveClass));
                    var o = e.nextAll(".".concat(i.slideClass)).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === o.length && (o = n.eq(0)).addClass(i.slideNextClass);
                    var d = e.prevAll(".".concat(i.slideClass)).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === d.length && (d = n.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? a.children(".".concat(i.slideClass, ":not(.").concat(i.slideDuplicateClass, ')[data-swiper-slide-index="').concat(o.attr("data-swiper-slide-index"), '"]')).addClass(i.slideDuplicateNextClass) : a.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, '[data-swiper-slide-index="').concat(o.attr("data-swiper-slide-index"), '"]')).addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? a.children(".".concat(i.slideClass, ":not(.").concat(i.slideDuplicateClass, ')[data-swiper-slide-index="').concat(d.attr("data-swiper-slide-index"), '"]')).addClass(i.slideDuplicatePrevClass) : a.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, '[data-swiper-slide-index="').concat(d.attr("data-swiper-slide-index"), '"]')).addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    var t, n = this,
                        i = n.rtlTranslate ? n.translate : -n.translate,
                        a = n.slidesGrid,
                        r = n.snapGrid,
                        s = n.params,
                        l = n.activeIndex,
                        o = n.realIndex,
                        d = n.snapIndex,
                        c = e;
                    if ("undefined" === typeof c) {
                        for (var u = 0; u < a.length; u += 1) "undefined" !== typeof a[u + 1] ? i >= a[u] && i < a[u + 1] - (a[u + 1] - a[u]) / 2 ? c = u : i >= a[u] && i < a[u + 1] && (c = u + 1) : i >= a[u] && (c = u);
                        s.normalizeSlideIndex && (c < 0 || "undefined" === typeof c) && (c = 0)
                    }
                    if (r.indexOf(i) >= 0) t = r.indexOf(i);
                    else {
                        var p = Math.min(s.slidesPerGroupSkip, c);
                        t = p + Math.floor((c - p) / s.slidesPerGroup)
                    }
                    if (t >= r.length && (t = r.length - 1), c !== l) {
                        var f = parseInt(n.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                        Object.assign(n, {
                            snapIndex: t,
                            realIndex: f,
                            previousIndex: l,
                            activeIndex: c
                        }), n.emit("activeIndexChange"), n.emit("snapIndexChange"), o !== f && n.emit("realIndexChange"), (n.initialized || n.params.runCallbacksOnInit) && n.emit("slideChange")
                    } else t !== d && (n.snapIndex = t, n.emit("snapIndexChange"))
                },
                updateClickedSlide: function(e) {
                    var t, n = this,
                        i = n.params,
                        a = k(e).closest(".".concat(i.slideClass))[0],
                        r = !1;
                    if (a)
                        for (var s = 0; s < n.slides.length; s += 1)
                            if (n.slides[s] === a) {
                                r = !0, t = s;
                                break
                            }
                    if (!a || !r) return n.clickedSlide = void 0, void(n.clickedIndex = void 0);
                    n.clickedSlide = a, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(k(a).attr("data-swiper-slide-index"), 10) : n.clickedIndex = t, i.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
                }
            };
            var V = {
                getTranslate: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y",
                        t = this,
                        n = t.params,
                        i = t.rtlTranslate,
                        a = t.translate,
                        r = t.$wrapperEl;
                    if (n.virtualTranslate) return i ? -a : a;
                    if (n.cssMode) return a;
                    var s = A(r[0], e);
                    return i && (s = -s), s || 0
                },
                setTranslate: function(e, t) {
                    var n = this,
                        i = n.rtlTranslate,
                        a = n.params,
                        r = n.$wrapperEl,
                        s = n.wrapperEl,
                        l = n.progress,
                        o = 0,
                        d = 0;
                    n.isHorizontal() ? o = i ? -e : e : d = e, a.roundLengths && (o = Math.floor(o), d = Math.floor(d)), a.cssMode ? s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -o : -d : a.virtualTranslate || r.transform("translate3d(".concat(o, "px, ").concat(d, "px, ").concat(0, "px)")), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? o : d;
                    var c = n.maxTranslate() - n.minTranslate();
                    (0 === c ? 0 : (e - n.minTranslate()) / c) !== l && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = arguments.length > 4 ? arguments[4] : void 0,
                        r = this,
                        s = r.params,
                        l = r.wrapperEl;
                    if (r.animating && s.preventInteractionOnTransition) return !1;
                    var o, d = r.minTranslate(),
                        c = r.maxTranslate();
                    if (o = i && e > d ? d : i && e < c ? c : e, r.updateProgress(o), s.cssMode) {
                        var u = r.isHorizontal();
                        if (0 === t) l[u ? "scrollLeft" : "scrollTop"] = -o;
                        else {
                            var p;
                            if (!r.support.smoothScroll) return G({
                                swiper: r,
                                targetPosition: -o,
                                side: u ? "left" : "top"
                            }), !0;
                            l.scrollTo((p = {}, (0, P.Z)(p, u ? "left" : "top", -o), (0, P.Z)(p, "behavior", "smooth"), p))
                        }
                        return !0
                    }
                    return 0 === t ? (r.setTransition(0), r.setTranslate(o), n && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), n && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, n && r.emit("transitionEnd"))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                }
            };

            function W(e) {
                var t = e.swiper,
                    n = e.runCallbacks,
                    i = e.direction,
                    a = e.step,
                    r = t.activeIndex,
                    s = t.previousIndex,
                    l = i;
                if (l || (l = r > s ? "next" : r < s ? "prev" : "reset"), t.emit("transition".concat(a)), n && r !== s) {
                    if ("reset" === l) return void t.emit("slideResetTransition".concat(a));
                    t.emit("slideChangeTransition".concat(a)), "next" === l ? t.emit("slideNextTransition".concat(a)) : t.emit("slidePrevTransition".concat(a))
                }
            }
            var q = {
                setTransition: function(e, t) {
                    var n = this;
                    n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
                },
                transitionStart: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = this,
                        i = n.params;
                    i.cssMode || (i.autoHeight && n.updateAutoHeight(), W({
                        swiper: n,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = this,
                        i = n.params;
                    n.animating = !1, i.cssMode || (n.setTransition(0), W({
                        swiper: n,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            };
            var Z = {
                slideTo: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        a = arguments.length > 4 ? arguments[4] : void 0;
                    if ("number" !== typeof e && "string" !== typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(typeof e, "] given."));
                    if ("string" === typeof e) {
                        var r = parseInt(e, 10),
                            s = isFinite(r);
                        if (!s) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
                        e = r
                    }
                    var l = this,
                        o = e;
                    o < 0 && (o = 0);
                    var d = l.params,
                        c = l.snapGrid,
                        u = l.slidesGrid,
                        p = l.previousIndex,
                        f = l.activeIndex,
                        v = l.rtlTranslate,
                        h = l.wrapperEl,
                        g = l.enabled;
                    if (l.animating && d.preventInteractionOnTransition || !g && !i && !a) return !1;
                    var m = Math.min(l.params.slidesPerGroupSkip, o),
                        w = m + Math.floor((o - m) / l.params.slidesPerGroup);
                    w >= c.length && (w = c.length - 1);
                    var b, y = -c[w];
                    if (d.normalizeSlideIndex)
                        for (var C = 0; C < u.length; C += 1) {
                            var S = -Math.floor(100 * y),
                                E = Math.floor(100 * u[C]),
                                T = Math.floor(100 * u[C + 1]);
                            "undefined" !== typeof u[C + 1] ? S >= E && S < T - (T - E) / 2 ? o = C : S >= E && S < T && (o = C + 1) : S >= E && (o = C)
                        }
                    if (l.initialized && o !== f) {
                        if (!l.allowSlideNext && y < l.translate && y < l.minTranslate()) return !1;
                        if (!l.allowSlidePrev && y > l.translate && y > l.maxTranslate() && (f || 0) !== o) return !1
                    }
                    if (o !== (p || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(y), b = o > f ? "next" : o < f ? "prev" : "reset", v && -y === l.translate || !v && y === l.translate) return l.updateActiveIndex(o), d.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== d.effect && l.setTranslate(y), "reset" !== b && (l.transitionStart(n, b), l.transitionEnd(n, b)), !1;
                    if (d.cssMode) {
                        var x = l.isHorizontal(),
                            k = v ? y : -y;
                        if (0 === t) {
                            var M = l.virtual && l.params.virtual.enabled;
                            M && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), h[x ? "scrollLeft" : "scrollTop"] = k, M && requestAnimationFrame((function() {
                                l.wrapperEl.style.scrollSnapType = "", l._swiperImmediateVirtual = !1
                            }))
                        } else {
                            var O;
                            if (!l.support.smoothScroll) return G({
                                swiper: l,
                                targetPosition: k,
                                side: x ? "left" : "top"
                            }), !0;
                            h.scrollTo((O = {}, (0, P.Z)(O, x ? "left" : "top", k), (0, P.Z)(O, "behavior", "smooth"), O))
                        }
                        return !0
                    }
                    return l.setTransition(t), l.setTranslate(y), l.updateActiveIndex(o), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, i), l.transitionStart(n, b), 0 === t ? l.transitionEnd(n, b) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                        l && !l.destroyed && e.target === this && (l.$wrapperEl[0].removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.$wrapperEl[0].removeEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(n, b))
                    }), l.$wrapperEl[0].addEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.$wrapperEl[0].addEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    if ("string" === typeof e) {
                        var a = parseInt(e, 10),
                            r = isFinite(a);
                        if (!r) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
                        e = a
                    }
                    var s = this,
                        l = e;
                    return s.params.loop && (l += s.loopedSlides), s.slideTo(l, t, n, i)
                },
                slideNext: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = this,
                        a = i.animating,
                        r = i.enabled,
                        s = i.params;
                    if (!r) return i;
                    var l = s.slidesPerGroup;
                    "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                    var o = i.activeIndex < s.slidesPerGroupSkip ? 1 : l;
                    if (s.loop) {
                        if (a && s.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }
                    return s.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + o, e, t, n)
                },
                slidePrev: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = this,
                        a = i.params,
                        r = i.animating,
                        s = i.snapGrid,
                        l = i.slidesGrid,
                        o = i.rtlTranslate,
                        d = i.enabled;
                    if (!d) return i;
                    if (a.loop) {
                        if (r && a.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }
                    var c = o ? i.translate : -i.translate;

                    function u(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var p, f = u(c),
                        v = s.map((function(e) {
                            return u(e)
                        })),
                        h = s[v.indexOf(f) - 1];
                    "undefined" === typeof h && a.cssMode && (s.forEach((function(e, t) {
                        f >= e && (p = t)
                    })), "undefined" !== typeof p && (h = s[p > 0 ? p - 1 : p]));
                    var g = 0;
                    if ("undefined" !== typeof h && ((g = l.indexOf(h)) < 0 && (g = i.activeIndex - 1), "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (g = g - i.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), a.rewind && i.isBeginning) {
                        var m = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                        return i.slideTo(m, e, t, n)
                    }
                    return i.slideTo(g, e, t, n)
                },
                slideReset: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = this;
                    return i.slideTo(i.activeIndex, e, t, n)
                },
                slideToClosest: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
                        a = this,
                        r = a.activeIndex,
                        s = Math.min(a.params.slidesPerGroupSkip, r),
                        l = s + Math.floor((r - s) / a.params.slidesPerGroup),
                        o = a.rtlTranslate ? a.translate : -a.translate;
                    if (o >= a.snapGrid[l]) {
                        var d = a.snapGrid[l],
                            c = a.snapGrid[l + 1];
                        o - d > (c - d) * i && (r += a.params.slidesPerGroup)
                    } else {
                        var u = a.snapGrid[l - 1],
                            p = a.snapGrid[l];
                        o - u <= (p - u) * i && (r -= a.params.slidesPerGroup)
                    }
                    return r = Math.max(r, 0), r = Math.min(r, a.slidesGrid.length - 1), a.slideTo(r, e, t, n)
                },
                slideToClickedSlide: function() {
                    var e, t = this,
                        n = t.params,
                        i = t.$wrapperEl,
                        a = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
                        r = t.clickedIndex;
                    if (n.loop) {
                        if (t.animating) return;
                        e = parseInt(k(t.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = i.children(".".concat(n.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(n.slideDuplicateClass, ")")).eq(0).index(), O((function() {
                            t.slideTo(r)
                        }))) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = i.children(".".concat(n.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(n.slideDuplicateClass, ")")).eq(0).index(), O((function() {
                            t.slideTo(r)
                        }))) : t.slideTo(r)
                    } else t.slideTo(r)
                }
            };
            var X = {
                loopCreate: function() {
                    var e = this,
                        t = d(),
                        n = e.params,
                        i = e.$wrapperEl,
                        a = i.children().length > 0 ? k(i.children()[0].parentNode) : i;
                    a.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass)).remove();
                    var r = a.children(".".concat(n.slideClass));
                    if (n.loopFillGroupWithBlank) {
                        var s = n.slidesPerGroup - r.length % n.slidesPerGroup;
                        if (s !== n.slidesPerGroup) {
                            for (var l = 0; l < s; l += 1) {
                                var o = k(t.createElement("div")).addClass("".concat(n.slideClass, " ").concat(n.slideBlankClass));
                                a.append(o)
                            }
                            r = a.children(".".concat(n.slideClass))
                        }
                    }
                    "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
                    var c = [],
                        u = [];
                    r.each((function(e, t) {
                        k(e).attr("data-swiper-slide-index", t)
                    }));
                    for (var p = 0; p < e.loopedSlides; p += 1) {
                        var f = p - Math.floor(p / r.length) * r.length;
                        u.push(r.eq(f)[0]), c.unshift(r.eq(r.length - f - 1)[0])
                    }
                    for (var v = 0; v < u.length; v += 1) a.append(k(u[v].cloneNode(!0)).addClass(n.slideDuplicateClass));
                    for (var h = c.length - 1; h >= 0; h -= 1) a.prepend(k(c[h].cloneNode(!0)).addClass(n.slideDuplicateClass))
                },
                loopFix: function() {
                    var e = this;
                    e.emit("beforeLoopFix");
                    var t, n = e.activeIndex,
                        i = e.slides,
                        a = e.loopedSlides,
                        r = e.allowSlidePrev,
                        s = e.allowSlideNext,
                        l = e.snapGrid,
                        o = e.rtlTranslate;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    var d = -l[n] - e.getTranslate();
                    if (n < a) t = i.length - 3 * a + n, t += a, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
                    else if (n >= i.length - a) {
                        t = -i.length + n + a, t += a, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)
                    }
                    e.allowSlidePrev = r, e.allowSlideNext = s, e.emit("loopFix")
                },
                loopDestroy: function() {
                    var e = this,
                        t = e.$wrapperEl,
                        n = e.params,
                        i = e.slides;
                    t.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass, ",.").concat(n.slideClass, ".").concat(n.slideBlankClass)).remove(), i.removeAttr("data-swiper-slide-index")
                }
            };

            function Y(e) {
                var t = this,
                    n = d(),
                    i = u(),
                    a = t.touchEventsData,
                    r = t.params,
                    s = t.touches;
                if (t.enabled && (!t.animating || !r.preventInteractionOnTransition)) {
                    !t.animating && r.cssMode && r.loop && t.loopFix();
                    var l = e;
                    l.originalEvent && (l = l.originalEvent);
                    var o = k(l.target);
                    if (("wrapper" !== r.touchEventsTarget || o.closest(t.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0) && (!a.isTouched || !a.isMoved))) {
                        var c = !!r.noSwipingClass && "" !== r.noSwipingClass,
                            p = e.composedPath ? e.composedPath() : e.path;
                        c && l.target && l.target.shadowRoot && p && (o = k(p[0]));
                        var f = r.noSwipingSelector ? r.noSwipingSelector : ".".concat(r.noSwipingClass),
                            v = !(!l.target || !l.target.shadowRoot);
                        if (r.noSwiping && (v ? function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;

                                function n(t) {
                                    if (!t || t === d() || t === u()) return null;
                                    t.assignedSlot && (t = t.assignedSlot);
                                    var i = t.closest(e);
                                    return i || t.getRootNode ? i || n(t.getRootNode().host) : null
                                }
                                return n(t)
                            }(f, o[0]) : o.closest(f)[0])) t.allowClick = !0;
                        else if (!r.swipeHandler || o.closest(r.swipeHandler)[0]) {
                            s.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, s.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                            var h = s.currentX,
                                g = s.currentY,
                                m = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                                w = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                            if (m && (h <= w || h >= i.innerWidth - w)) {
                                if ("prevent" !== m) return;
                                e.preventDefault()
                            }
                            if (Object.assign(a, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), s.startX = h, s.startY = g, a.touchStartTime = L(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
                                var b = !0;
                                o.is(a.focusableElements) && (b = !1, "SELECT" === o[0].nodeName && (a.isTouched = !1)), n.activeElement && k(n.activeElement).is(a.focusableElements) && n.activeElement !== o[0] && n.activeElement.blur();
                                var y = b && t.allowTouchMove && r.touchStartPreventDefault;
                                !r.touchStartForcePreventDefault && !y || o[0].isContentEditable || l.preventDefault()
                            }
                            t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", l)
                        }
                    }
                }
            }

            function U(e) {
                var t = d(),
                    n = this,
                    i = n.touchEventsData,
                    a = n.params,
                    r = n.touches,
                    s = n.rtlTranslate;
                if (n.enabled) {
                    var l = e;
                    if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
                        if (!i.isTouchEvent || "touchmove" === l.type) {
                            var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                                c = "touchmove" === l.type ? o.pageX : l.pageX,
                                u = "touchmove" === l.type ? o.pageY : l.pageY;
                            if (l.preventedByNestedSwiper) return r.startX = c, void(r.startY = u);
                            if (!n.allowTouchMove) return k(l.target).is(i.focusableElements) || (n.allowClick = !1), void(i.isTouched && (Object.assign(r, {
                                startX: c,
                                startY: u,
                                currentX: c,
                                currentY: u
                            }), i.touchStartTime = L()));
                            if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                                if (n.isVertical()) {
                                    if (u < r.startY && n.translate <= n.maxTranslate() || u > r.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                                } else if (c < r.startX && n.translate <= n.maxTranslate() || c > r.startX && n.translate >= n.minTranslate()) return;
                            if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && k(l.target).is(i.focusableElements)) return i.isMoved = !0, void(n.allowClick = !1);
                            if (i.allowTouchCallbacks && n.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                                r.currentX = c, r.currentY = u;
                                var p = r.currentX - r.startX,
                                    f = r.currentY - r.startY;
                                if (!(n.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2)) < n.params.threshold)) {
                                    var v;
                                    if ("undefined" === typeof i.isScrolling) n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : p * p + f * f >= 25 && (v = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, i.isScrolling = n.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle);
                                    if (i.isScrolling && n.emit("touchMoveOpposite", l), "undefined" === typeof i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                                    else if (i.startMoving) {
                                        n.allowClick = !1, !a.cssMode && l.cancelable && l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && !a.cssMode && n.loopFix(), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", l)), n.emit("sliderMove", l), i.isMoved = !0;
                                        var h = n.isHorizontal() ? p : f;
                                        r.diff = h, h *= a.touchRatio, s && (h = -h), n.swipeDirection = h > 0 ? "prev" : "next", i.currentTranslate = h + i.startTranslate;
                                        var g = !0,
                                            m = a.resistanceRatio;
                                        if (a.touchReleaseOnEdges && (m = 0), h > 0 && i.currentTranslate > n.minTranslate() ? (g = !1, a.resistance && (i.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + i.startTranslate + h, m))) : h < 0 && i.currentTranslate < n.maxTranslate() && (g = !1, a.resistance && (i.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - i.startTranslate - h, m))), g && (l.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.allowSlidePrev || n.allowSlideNext || (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                                            if (!(Math.abs(h) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                        }
                                        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && n.freeMode || a.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && a.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
                                    }
                                }
                            }
                        }
                    } else i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l)
                }
            }

            function K(e) {
                var t = this,
                    n = t.touchEventsData,
                    i = t.params,
                    a = t.touches,
                    r = t.rtlTranslate,
                    s = t.slidesGrid;
                if (t.enabled) {
                    var l = e;
                    if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
                    i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var o, d = L(),
                        c = d - n.touchStartTime;
                    if (t.allowClick) {
                        var u = l.path || l.composedPath && l.composedPath();
                        t.updateClickedSlide(u && u[0] || l.target), t.emit("tap click", l), c < 300 && d - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
                    }
                    if (n.lastClickTime = L(), O((function() {
                            t.destroyed || (t.allowClick = !0)
                        })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === a.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
                    if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, o = i.followFinger ? r ? t.translate : -t.translate : -n.currentTranslate, !i.cssMode)
                        if (t.params.freeMode && i.freeMode.enabled) t.freeMode.onTouchEnd({
                            currentPos: o
                        });
                        else {
                            for (var p = 0, f = t.slidesSizesGrid[0], v = 0; v < s.length; v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                                var h = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                                "undefined" !== typeof s[v + h] ? o >= s[v] && o < s[v + h] && (p = v, f = s[v + h] - s[v]) : o >= s[v] && (p = v, f = s[s.length - 1] - s[s.length - 2])
                            }
                            var g = null,
                                m = null;
                            i.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
                            var w = (o - s[p]) / f,
                                b = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                            if (c > i.longSwipesMs) {
                                if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && (w >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? g : p + b) : t.slideTo(p)), "prev" === t.swipeDirection && (w > 1 - i.longSwipesRatio ? t.slideTo(p + b) : null !== m && w < 0 && Math.abs(w) > i.longSwipesRatio ? t.slideTo(m) : t.slideTo(p))
                            } else {
                                if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                                t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(p + b) : t.slideTo(p) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : p + b), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p))
                            }
                        }
                }
            }

            function J() {
                var e = this,
                    t = e.params,
                    n = e.el;
                if (!n || 0 !== n.offsetWidth) {
                    t.breakpoints && e.setBreakpoint();
                    var i = e.allowSlideNext,
                        a = e.allowSlidePrev,
                        r = e.snapGrid;
                    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = a, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
                }
            }

            function Q(e) {
                var t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function ee() {
                var e = this,
                    t = e.wrapperEl,
                    n = e.rtlTranslate;
                if (e.enabled) {
                    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                    var i = e.maxTranslate() - e.minTranslate();
                    (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
                }
            }
            var te = !1;

            function ne() {}
            var ie = function(e, t) {
                var n = d(),
                    i = e.params,
                    a = e.touchEvents,
                    r = e.el,
                    s = e.wrapperEl,
                    l = e.device,
                    o = e.support,
                    c = !!i.nested,
                    u = "on" === t ? "addEventListener" : "removeEventListener",
                    p = t;
                if (o.touch) {
                    var f = !("touchstart" !== a.start || !o.passiveListener || !i.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r[u](a.start, e.onTouchStart, f), r[u](a.move, e.onTouchMove, o.passiveListener ? {
                        passive: !1,
                        capture: c
                    } : c), r[u](a.end, e.onTouchEnd, f), a.cancel && r[u](a.cancel, e.onTouchEnd, f)
                } else r[u](a.start, e.onTouchStart, !1), n[u](a.move, e.onTouchMove, c), n[u](a.end, e.onTouchEnd, !1);
                (i.preventClicks || i.preventClicksPropagation) && r[u]("click", e.onClick, !0), i.cssMode && s[u]("scroll", e.onScroll), i.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", J, !0) : e[p]("observerUpdate", J, !0)
            };
            var ae = {
                    attachEvents: function() {
                        var e = this,
                            t = d(),
                            n = e.params,
                            i = e.support;
                        e.onTouchStart = Y.bind(e), e.onTouchMove = U.bind(e), e.onTouchEnd = K.bind(e), n.cssMode && (e.onScroll = ee.bind(e)), e.onClick = Q.bind(e), i.touch && !te && (t.addEventListener("touchstart", ne), te = !0), ie(e, "on")
                    },
                    detachEvents: function() {
                        ie(this, "off")
                    }
                },
                re = function(e, t) {
                    return e.grid && t.grid && t.grid.rows > 1
                };
            var se = {
                setBreakpoint: function() {
                    var e = this,
                        t = e.activeIndex,
                        n = e.initialized,
                        i = e.loopedSlides,
                        a = void 0 === i ? 0 : i,
                        r = e.params,
                        s = e.$el,
                        l = r.breakpoints;
                    if (l && (!l || 0 !== Object.keys(l).length)) {
                        var o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                        if (o && e.currentBreakpoint !== o) {
                            var d = (o in l ? l[o] : void 0) || e.originalParams,
                                c = re(e, r),
                                u = re(e, d),
                                p = r.enabled;
                            c && !u ? (s.removeClass("".concat(r.containerModifierClass, "grid ").concat(r.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !c && u && (s.addClass("".concat(r.containerModifierClass, "grid")), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === r.grid.fill) && s.addClass("".concat(r.containerModifierClass, "grid-column")), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((function(t) {
                                var n = r[t] && r[t].enabled,
                                    i = d[t] && d[t].enabled;
                                n && !i && e[t].disable(), !n && i && e[t].enable()
                            }));
                            var f = d.direction && d.direction !== r.direction,
                                v = r.loop && (d.slidesPerView !== r.slidesPerView || f);
                            f && n && e.changeDirection(), D(e.params, d);
                            var h = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", d), v && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", d)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "window",
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    if (e && ("container" !== t || n)) {
                        var i = !1,
                            a = u(),
                            r = "window" === t ? a.innerHeight : n.clientHeight,
                            s = Object.keys(e).map((function(e) {
                                if ("string" === typeof e && 0 === e.indexOf("@")) {
                                    var t = parseFloat(e.substr(1));
                                    return {
                                        value: r * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                        s.sort((function(e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        }));
                        for (var l = 0; l < s.length; l += 1) {
                            var o = s[l],
                                d = o.point,
                                c = o.value;
                            "window" === t ? a.matchMedia("(min-width: ".concat(c, "px)")).matches && (i = d) : c <= n.clientWidth && (i = d)
                        }
                        return i || "max"
                    }
                }
            };
            var le = {
                addClasses: function() {
                    var e = this,
                        t = e.classNames,
                        n = e.params,
                        a = e.rtl,
                        r = e.$el,
                        s = e.device,
                        l = e.support,
                        o = function(e, t) {
                            var n = [];
                            return e.forEach((function(e) {
                                "object" === typeof e ? Object.keys(e).forEach((function(i) {
                                    e[i] && n.push(t + i)
                                })) : "string" === typeof e && n.push(t + e)
                            })), n
                        }(["initialized", n.direction, {
                            "pointer-events": !l.touch
                        }, {
                            "free-mode": e.params.freeMode && n.freeMode.enabled
                        }, {
                            autoheight: n.autoHeight
                        }, {
                            rtl: a
                        }, {
                            grid: n.grid && n.grid.rows > 1
                        }, {
                            "grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill
                        }, {
                            android: s.android
                        }, {
                            ios: s.ios
                        }, {
                            "css-mode": n.cssMode
                        }, {
                            centered: n.cssMode && n.centeredSlides
                        }, {
                            "watch-progress": n.watchSlidesProgress
                        }], n.containerModifierClass);
                    t.push.apply(t, (0, i.Z)(o)), r.addClass((0, i.Z)(t).join(" ")), e.emitContainerClasses()
                },
                removeClasses: function() {
                    var e = this,
                        t = e.$el,
                        n = e.classNames;
                    t.removeClass(n.join(" ")), e.emitContainerClasses()
                }
            };
            var oe = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function de(e, t) {
                return function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = Object.keys(n)[0],
                        a = n[i];
                    "object" === typeof a && null !== a ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
                        auto: !0
                    }), i in e && "enabled" in a ? (!0 === e[i] && (e[i] = {
                        enabled: !0
                    }), "object" !== typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
                        enabled: !1
                    }), D(t, n)) : D(t, n)) : D(t, n)
                }
            }
            var ce = {
                    eventsEmitter: H,
                    update: R,
                    translate: V,
                    transition: q,
                    slide: Z,
                    loop: X,
                    grabCursor: {
                        setGrabCursor: function(e) {
                            var t = this;
                            if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                                var n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                                n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab"
                            }
                        },
                        unsetGrabCursor: function() {
                            var e = this;
                            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: ae,
                    breakpoints: se,
                    checkOverflow: {
                        checkOverflow: function() {
                            var e = this,
                                t = e.isLocked,
                                n = e.params,
                                i = n.slidesOffsetBefore;
                            if (i) {
                                var a = e.slides.length - 1,
                                    r = e.slidesGrid[a] + e.slidesSizesGrid[a] + 2 * i;
                                e.isLocked = e.size > r
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: le,
                    images: {
                        loadImage: function(e, t, n, i, a, r) {
                            var s, l = u();

                            function o() {
                                r && r()
                            }
                            k(e).parent("picture")[0] || e.complete && a ? o() : t ? ((s = new l.Image).onload = o, s.onerror = o, i && (s.sizes = i), n && (s.srcset = n), t && (s.src = t)) : o()
                        },
                        preloadImages: function() {
                            var e = this;

                            function t() {
                                "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                                var i = e.imagesToLoad[n];
                                e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                ue = {},
                pe = function() {
                    function e() {
                        var t, n;
                        (0, a.Z)(this, e);
                        for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++) s[l] = arguments[l];
                        if (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? n = s[0] : (t = s[0], n = s[1]), n || (n = {}), n = D({}, n), t && !n.el && (n.el = t), n.el && k(n.el).length > 1) {
                            var o = [];
                            return k(n.el).each((function(t) {
                                var i = D({}, n, {
                                    el: t
                                });
                                o.push(new e(i))
                            })), o
                        }
                        var d, c = this;
                        (c.__swiper__ = !0, c.support = B(), c.device = j({
                            userAgent: n.userAgent
                        }), c.browser = F(), c.eventsListeners = {}, c.eventsAnyListeners = [], c.modules = (0, i.Z)(c.__modules__), n.modules && Array.isArray(n.modules)) && (d = c.modules).push.apply(d, (0, i.Z)(n.modules));
                        var u = {};
                        c.modules.forEach((function(e) {
                            e({
                                swiper: c,
                                extendParams: de(n, u),
                                on: c.on.bind(c),
                                once: c.once.bind(c),
                                off: c.off.bind(c),
                                emit: c.emit.bind(c)
                            })
                        }));
                        var p = D({}, oe, u);
                        return c.params = D({}, p, ue, n), c.originalParams = D({}, c.params), c.passedParams = D({}, n), c.params && c.params.on && Object.keys(c.params.on).forEach((function(e) {
                            c.on(e, c.params.on[e])
                        })), c.params && c.params.onAny && c.onAny(c.params.onAny), c.$ = k, Object.assign(c, {
                            enabled: c.params.enabled,
                            el: t,
                            classNames: [],
                            slides: k(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === c.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === c.params.direction
                            },
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: c.params.allowSlideNext,
                            allowSlidePrev: c.params.allowSlidePrev,
                            touchEvents: function() {
                                var e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                    t = ["pointerdown", "pointermove", "pointerup"];
                                return c.touchEventsTouch = {
                                    start: e[0],
                                    move: e[1],
                                    end: e[2],
                                    cancel: e[3]
                                }, c.touchEventsDesktop = {
                                    start: t[0],
                                    move: t[1],
                                    end: t[2]
                                }, c.support.touch || !c.params.simulateTouch ? c.touchEventsTouch : c.touchEventsDesktop
                            }(),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                focusableElements: c.params.focusableElements,
                                lastClickTime: L(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: c.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), c.emit("_swiper"), c.params.init && c.init(), c
                    }
                    return (0, r.Z)(e, [{
                        key: "enable",
                        value: function() {
                            var e = this;
                            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            var e = this;
                            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                        }
                    }, {
                        key: "setProgress",
                        value: function(e, t) {
                            var n = this;
                            e = Math.min(Math.max(e, 0), 1);
                            var i = n.minTranslate(),
                                a = (n.maxTranslate() - i) * e + i;
                            n.translateTo(a, "undefined" === typeof t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
                        }
                    }, {
                        key: "emitContainerClasses",
                        value: function() {
                            var e = this;
                            if (e.params._emitClasses && e.el) {
                                var t = e.el.className.split(" ").filter((function(t) {
                                    return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)
                                }));
                                e.emit("_containerClasses", t.join(" "))
                            }
                        }
                    }, {
                        key: "getSlideClasses",
                        value: function(e) {
                            var t = this;
                            return t.destroyed ? "" : e.className.split(" ").filter((function(e) {
                                return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
                            })).join(" ")
                        }
                    }, {
                        key: "emitSlidesClasses",
                        value: function() {
                            var e = this;
                            if (e.params._emitClasses && e.el) {
                                var t = [];
                                e.slides.each((function(n) {
                                    var i = e.getSlideClasses(n);
                                    t.push({
                                        slideEl: n,
                                        classNames: i
                                    }), e.emit("_slideClass", n, i)
                                })), e.emit("_slideClasses", t)
                            }
                        }
                    }, {
                        key: "slidesPerViewDynamic",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "current",
                                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = this,
                                i = n.params,
                                a = n.slides,
                                r = n.slidesGrid,
                                s = n.slidesSizesGrid,
                                l = n.size,
                                o = n.activeIndex,
                                d = 1;
                            if (i.centeredSlides) {
                                for (var c, u = a[o].swiperSlideSize, p = o + 1; p < a.length; p += 1) a[p] && !c && (d += 1, (u += a[p].swiperSlideSize) > l && (c = !0));
                                for (var f = o - 1; f >= 0; f -= 1) a[f] && !c && (d += 1, (u += a[f].swiperSlideSize) > l && (c = !0))
                            } else if ("current" === e)
                                for (var v = o + 1; v < a.length; v += 1) {
                                    var h = t ? r[v] + s[v] - r[o] < l : r[v] - r[o] < l;
                                    h && (d += 1)
                                } else
                                    for (var g = o - 1; g >= 0; g -= 1) {
                                        var m = r[o] - r[g] < l;
                                        m && (d += 1)
                                    }
                            return d
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var e = this;
                            if (e && !e.destroyed) {
                                var t = e.snapGrid,
                                    n = e.params;
                                n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                            }

                            function i() {
                                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                                    n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
                            }
                        }
                    }, {
                        key: "changeDirection",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = this,
                                i = n.params.direction;
                            return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass("".concat(n.params.containerModifierClass).concat(i)).addClass("".concat(n.params.containerModifierClass).concat(e)), n.emitContainerClasses(), n.params.direction = e, n.slides.each((function(t) {
                                "vertical" === e ? t.style.width = "" : t.style.height = ""
                            })), n.emit("changeDirection"), t && n.update()), n
                        }
                    }, {
                        key: "changeLanguageDirection",
                        value: function(e) {
                            var t = this;
                            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.$el.removeClass("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update())
                        }
                    }, {
                        key: "mount",
                        value: function(e) {
                            var t = this;
                            if (t.mounted) return !0;
                            var n = k(e || t.params.el);
                            if (!(e = n[0])) return !1;
                            e.swiper = t;
                            var i = function() {
                                    return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."))
                                },
                                a = function() {
                                    if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                                        var t = k(e.shadowRoot.querySelector(i()));
                                        return t.children = function(e) {
                                            return n.children(e)
                                        }, t
                                    }
                                    return n.children ? n.children(i()) : k(n).children(i())
                                }();
                            if (0 === a.length && t.params.createElements) {
                                var r = d().createElement("div");
                                a = k(r), r.className = t.params.wrapperClass, n.append(r), n.children(".".concat(t.params.slideClass)).each((function(e) {
                                    a.append(e)
                                }))
                            }
                            return Object.assign(t, {
                                $el: n,
                                el: e,
                                $wrapperEl: a,
                                wrapperEl: a[0],
                                mounted: !0,
                                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
                                wrongRTL: "-webkit-box" === a.css("display")
                            }), !0
                        }
                    }, {
                        key: "init",
                        value: function(e) {
                            var t = this;
                            return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = this,
                                i = n.params,
                                a = n.$el,
                                r = n.$wrapperEl,
                                s = n.slides;
                            return "undefined" === typeof n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), s && s.length && s.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((function(e) {
                                n.off(e)
                            })), !1 !== e && (n.$el[0].swiper = null, M(n)), n.destroyed = !0), null
                        }
                    }], [{
                        key: "extendDefaults",
                        value: function(e) {
                            D(ue, e)
                        }
                    }, {
                        key: "extendedDefaults",
                        get: function() {
                            return ue
                        }
                    }, {
                        key: "defaults",
                        get: function() {
                            return oe
                        }
                    }, {
                        key: "installModule",
                        value: function(t) {
                            e.prototype.__modules__ || (e.prototype.__modules__ = []);
                            var n = e.prototype.__modules__;
                            "function" === typeof t && n.indexOf(t) < 0 && n.push(t)
                        }
                    }, {
                        key: "use",
                        value: function(t) {
                            return Array.isArray(t) ? (t.forEach((function(t) {
                                return e.installModule(t)
                            })), e) : (e.installModule(t), e)
                        }
                    }]), e
                }();
            Object.keys(ce).forEach((function(e) {
                Object.keys(ce[e]).forEach((function(t) {
                    pe.prototype[t] = ce[e][t]
                }))
            })), pe.use([function(e) {
                var t = e.swiper,
                    n = e.on,
                    i = e.emit,
                    a = u(),
                    r = null,
                    s = null,
                    l = function() {
                        t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
                    },
                    o = function() {
                        t && !t.destroyed && t.initialized && i("orientationchange")
                    };
                n("init", (function() {
                    t.params.resizeObserver && "undefined" !== typeof a.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver((function(e) {
                        s = a.requestAnimationFrame((function() {
                            var n = t.width,
                                i = t.height,
                                a = n,
                                r = i;
                            e.forEach((function(e) {
                                var n = e.contentBoxSize,
                                    i = e.contentRect,
                                    s = e.target;
                                s && s !== t.el || (a = i ? i.width : (n[0] || n).inlineSize, r = i ? i.height : (n[0] || n).blockSize)
                            })), a === n && r === i || l()
                        }))
                    })), r.observe(t.el)) : (a.addEventListener("resize", l), a.addEventListener("orientationchange", o))
                })), n("destroy", (function() {
                    s && a.cancelAnimationFrame(s), r && r.unobserve && t.el && (r.unobserve(t.el), r = null), a.removeEventListener("resize", l), a.removeEventListener("orientationchange", o)
                }))
            }, function(e) {
                var t = e.swiper,
                    n = e.extendParams,
                    i = e.on,
                    a = e.emit,
                    r = [],
                    s = u(),
                    l = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = s.MutationObserver || s.WebkitMutationObserver,
                            i = new n((function(e) {
                                if (1 !== e.length) {
                                    var t = function() {
                                        a("observerUpdate", e[0])
                                    };
                                    s.requestAnimationFrame ? s.requestAnimationFrame(t) : s.setTimeout(t, 0)
                                } else a("observerUpdate", e[0])
                            }));
                        i.observe(e, {
                            attributes: "undefined" === typeof t.attributes || t.attributes,
                            childList: "undefined" === typeof t.childList || t.childList,
                            characterData: "undefined" === typeof t.characterData || t.characterData
                        }), r.push(i)
                    };
                n({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", (function() {
                    if (t.params.observer) {
                        if (t.params.observeParents)
                            for (var e = t.$el.parents(), n = 0; n < e.length; n += 1) l(e[n]);
                        l(t.$el[0], {
                            childList: t.params.observeSlideChildren
                        }), l(t.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                })), i("destroy", (function() {
                    r.forEach((function(e) {
                        e.disconnect()
                    })), r.splice(0, r.length)
                }))
            }]);
            var fe = pe;

            function ve(e, t, n, i) {
                var a = d();
                return e.params.createElements && Object.keys(i).forEach((function(r) {
                    if (!n[r] && !0 === n.auto) {
                        var s = e.$el.children(".".concat(i[r]))[0];
                        s || ((s = a.createElement("div")).className = i[r], e.$el.append(s)), n[r] = s, t[r] = s
                    }
                })), n
            }

            function he(e) {
                var t = e.swiper,
                    n = e.extendParams,
                    i = e.on,
                    a = e.emit;

                function r(e) {
                    var n;
                    return e && (n = k(e), t.params.uniqueNavElements && "string" === typeof e && n.length > 1 && 1 === t.$el.find(e).length && (n = t.$el.find(e))), n
                }

                function s(e, n) {
                    var i = t.params.navigation;
                    e && e.length > 0 && (e[n ? "addClass" : "removeClass"](i.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](i.lockClass))
                }

                function l() {
                    if (!t.params.loop) {
                        var e = t.navigation,
                            n = e.$nextEl;
                        s(e.$prevEl, t.isBeginning && !t.params.rewind), s(n, t.isEnd && !t.params.rewind)
                    }
                }

                function o(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), a("navigationPrev"))
                }

                function d(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), a("navigationNext"))
                }

                function c() {
                    var e = t.params.navigation;
                    if (t.params.navigation = ve(t, t.originalParams.navigation, t.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), e.nextEl || e.prevEl) {
                        var n = r(e.nextEl),
                            i = r(e.prevEl);
                        n && n.length > 0 && n.on("click", d), i && i.length > 0 && i.on("click", o), Object.assign(t.navigation, {
                            $nextEl: n,
                            nextEl: n && n[0],
                            $prevEl: i,
                            prevEl: i && i[0]
                        }), t.enabled || (n && n.addClass(e.lockClass), i && i.addClass(e.lockClass))
                    }
                }

                function u() {
                    var e = t.navigation,
                        n = e.$nextEl,
                        i = e.$prevEl;
                    n && n.length && (n.off("click", d), n.removeClass(t.params.navigation.disabledClass)), i && i.length && (i.off("click", o), i.removeClass(t.params.navigation.disabledClass))
                }
                n({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), t.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }, i("init", (function() {
                    !1 === t.params.navigation.enabled ? p() : (c(), l())
                })), i("toEdge fromEdge lock unlock", (function() {
                    l()
                })), i("destroy", (function() {
                    u()
                })), i("enable disable", (function() {
                    var e = t.navigation,
                        n = e.$nextEl,
                        i = e.$prevEl;
                    n && n[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), i && i[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
                })), i("click", (function(e, n) {
                    var i = t.navigation,
                        r = i.$nextEl,
                        s = i.$prevEl,
                        l = n.target;
                    if (t.params.navigation.hideOnClick && !k(l).is(s) && !k(l).is(r)) {
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l))) return;
                        var o;
                        r ? o = r.hasClass(t.params.navigation.hiddenClass) : s && (o = s.hasClass(t.params.navigation.hiddenClass)), a(!0 === o ? "navigationShow" : "navigationHide"), r && r.toggleClass(t.params.navigation.hiddenClass), s && s.toggleClass(t.params.navigation.hiddenClass)
                    }
                }));
                var p = function() {
                    t.$el.addClass(t.params.navigation.navigationDisabledClass), u()
                };
                Object.assign(t.navigation, {
                    enable: function() {
                        t.$el.removeClass(t.params.navigation.navigationDisabledClass), c(), l()
                    },
                    disable: p,
                    update: l,
                    init: c,
                    destroy: u
                })
            }

            function ge() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return ".".concat(e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, "."))
            }

            function me(e) {
                var t, n = e.swiper,
                    i = e.extendParams,
                    a = e.on,
                    r = e.emit,
                    s = "swiper-pagination";
                i({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function(e) {
                            return e
                        },
                        formatFractionTotal: function(e) {
                            return e
                        },
                        bulletClass: "".concat(s, "-bullet"),
                        bulletActiveClass: "".concat(s, "-bullet-active"),
                        modifierClass: "".concat(s, "-"),
                        currentClass: "".concat(s, "-current"),
                        totalClass: "".concat(s, "-total"),
                        hiddenClass: "".concat(s, "-hidden"),
                        progressbarFillClass: "".concat(s, "-progressbar-fill"),
                        progressbarOppositeClass: "".concat(s, "-progressbar-opposite"),
                        clickableClass: "".concat(s, "-clickable"),
                        lockClass: "".concat(s, "-lock"),
                        horizontalClass: "".concat(s, "-horizontal"),
                        verticalClass: "".concat(s, "-vertical"),
                        paginationDisabledClass: "".concat(s, "-disabled")
                    }
                }), n.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                var l = 0;

                function o() {
                    return !n.params.pagination.el || !n.pagination.el || !n.pagination.$el || 0 === n.pagination.$el.length
                }

                function d(e, t) {
                    var i = n.params.pagination.bulletActiveClass;
                    e[t]().addClass("".concat(i, "-").concat(t))[t]().addClass("".concat(i, "-").concat(t, "-").concat(t))
                }

                function c() {
                    var e = n.rtl,
                        i = n.params.pagination;
                    if (!o()) {
                        var a, s = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.slides.length,
                            c = n.pagination.$el,
                            u = n.params.loop ? Math.ceil((s - 2 * n.loopedSlides) / n.params.slidesPerGroup) : n.snapGrid.length;
                        if (n.params.loop ? ((a = Math.ceil((n.activeIndex - n.loopedSlides) / n.params.slidesPerGroup)) > s - 1 - 2 * n.loopedSlides && (a -= s - 2 * n.loopedSlides), a > u - 1 && (a -= u), a < 0 && "bullets" !== n.params.paginationType && (a = u + a)) : a = "undefined" !== typeof n.snapIndex ? n.snapIndex : n.activeIndex || 0, "bullets" === i.type && n.pagination.bullets && n.pagination.bullets.length > 0) {
                            var p, f, v, h = n.pagination.bullets;
                            if (i.dynamicBullets && (t = h.eq(0)[n.isHorizontal() ? "outerWidth" : "outerHeight"](!0), c.css(n.isHorizontal() ? "width" : "height", "".concat(t * (i.dynamicMainBullets + 4), "px")), i.dynamicMainBullets > 1 && void 0 !== n.previousIndex && ((l += a - (n.previousIndex - n.loopedSlides || 0)) > i.dynamicMainBullets - 1 ? l = i.dynamicMainBullets - 1 : l < 0 && (l = 0)), p = Math.max(a - l, 0), v = ((f = p + (Math.min(h.length, i.dynamicMainBullets) - 1)) + p) / 2), h.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((function(e) {
                                    return "".concat(i.bulletActiveClass).concat(e)
                                })).join(" ")), c.length > 1) h.each((function(e) {
                                var t = k(e),
                                    n = t.index();
                                n === a && t.addClass(i.bulletActiveClass), i.dynamicBullets && (n >= p && n <= f && t.addClass("".concat(i.bulletActiveClass, "-main")), n === p && d(t, "prev"), n === f && d(t, "next"))
                            }));
                            else {
                                var g = h.eq(a),
                                    m = g.index();
                                if (g.addClass(i.bulletActiveClass), i.dynamicBullets) {
                                    for (var w = h.eq(p), b = h.eq(f), y = p; y <= f; y += 1) h.eq(y).addClass("".concat(i.bulletActiveClass, "-main"));
                                    if (n.params.loop)
                                        if (m >= h.length) {
                                            for (var C = i.dynamicMainBullets; C >= 0; C -= 1) h.eq(h.length - C).addClass("".concat(i.bulletActiveClass, "-main"));
                                            h.eq(h.length - i.dynamicMainBullets - 1).addClass("".concat(i.bulletActiveClass, "-prev"))
                                        } else d(w, "prev"), d(b, "next");
                                    else d(w, "prev"), d(b, "next")
                                }
                            }
                            if (i.dynamicBullets) {
                                var S = Math.min(h.length, i.dynamicMainBullets + 4),
                                    E = (t * S - t) / 2 - v * t,
                                    T = e ? "right" : "left";
                                h.css(n.isHorizontal() ? T : "top", "".concat(E, "px"))
                            }
                        }
                        if ("fraction" === i.type && (c.find(ge(i.currentClass)).text(i.formatFractionCurrent(a + 1)), c.find(ge(i.totalClass)).text(i.formatFractionTotal(u))), "progressbar" === i.type) {
                            var x;
                            x = i.progressbarOpposite ? n.isHorizontal() ? "vertical" : "horizontal" : n.isHorizontal() ? "horizontal" : "vertical";
                            var P = (a + 1) / u,
                                M = 1,
                                O = 1;
                            "horizontal" === x ? M = P : O = P, c.find(ge(i.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(M, ") scaleY(").concat(O, ")")).transition(n.params.speed)
                        }
                        "custom" === i.type && i.renderCustom ? (c.html(i.renderCustom(n, a + 1, u)), r("paginationRender", c[0])) : r("paginationUpdate", c[0]), n.params.watchOverflow && n.enabled && c[n.isLocked ? "addClass" : "removeClass"](i.lockClass)
                    }
                }

                function u() {
                    var e = n.params.pagination;
                    if (!o()) {
                        var t = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.slides.length,
                            i = n.pagination.$el,
                            a = "";
                        if ("bullets" === e.type) {
                            var s = n.params.loop ? Math.ceil((t - 2 * n.loopedSlides) / n.params.slidesPerGroup) : n.snapGrid.length;
                            n.params.freeMode && n.params.freeMode.enabled && !n.params.loop && s > t && (s = t);
                            for (var l = 0; l < s; l += 1) e.renderBullet ? a += e.renderBullet.call(n, l, e.bulletClass) : a += "<".concat(e.bulletElement, ' class="').concat(e.bulletClass, '"></').concat(e.bulletElement, ">");
                            i.html(a), n.pagination.bullets = i.find(ge(e.bulletClass))
                        }
                        "fraction" === e.type && (a = e.renderFraction ? e.renderFraction.call(n, e.currentClass, e.totalClass) : '<span class="'.concat(e.currentClass, '"></span>') + " / " + '<span class="'.concat(e.totalClass, '"></span>'), i.html(a)), "progressbar" === e.type && (a = e.renderProgressbar ? e.renderProgressbar.call(n, e.progressbarFillClass) : '<span class="'.concat(e.progressbarFillClass, '"></span>'), i.html(a)), "custom" !== e.type && r("paginationRender", n.pagination.$el[0])
                    }
                }

                function p() {
                    n.params.pagination = ve(n, n.originalParams.pagination, n.params.pagination, {
                        el: "swiper-pagination"
                    });
                    var e = n.params.pagination;
                    if (e.el) {
                        var t = k(e.el);
                        0 !== t.length && (n.params.uniqueNavElements && "string" === typeof e.el && t.length > 1 && (t = n.$el.find(e.el)).length > 1 && (t = t.filter((function(e) {
                            return k(e).parents(".swiper")[0] === n.el
                        }))), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), t.addClass(n.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (t.addClass("".concat(e.modifierClass).concat(e.type, "-dynamic")), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", ge(e.bulletClass), (function(e) {
                            e.preventDefault();
                            var t = k(this).index() * n.params.slidesPerGroup;
                            n.params.loop && (t += n.loopedSlides), n.slideTo(t)
                        })), Object.assign(n.pagination, {
                            $el: t,
                            el: t[0]
                        }), n.enabled || t.addClass(e.lockClass))
                    }
                }

                function f() {
                    var e = n.params.pagination;
                    if (!o()) {
                        var t = n.pagination.$el;
                        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), t.removeClass(n.isHorizontal() ? e.horizontalClass : e.verticalClass), n.pagination.bullets && n.pagination.bullets.removeClass && n.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", ge(e.bulletClass))
                    }
                }
                a("init", (function() {
                    !1 === n.params.pagination.enabled ? v() : (p(), u(), c())
                })), a("activeIndexChange", (function() {
                    (n.params.loop || "undefined" === typeof n.snapIndex) && c()
                })), a("snapIndexChange", (function() {
                    n.params.loop || c()
                })), a("slidesLengthChange", (function() {
                    n.params.loop && (u(), c())
                })), a("snapGridLengthChange", (function() {
                    n.params.loop || (u(), c())
                })), a("destroy", (function() {
                    f()
                })), a("enable disable", (function() {
                    var e = n.pagination.$el;
                    e && e[n.enabled ? "removeClass" : "addClass"](n.params.pagination.lockClass)
                })), a("lock unlock", (function() {
                    c()
                })), a("click", (function(e, t) {
                    var i = t.target,
                        a = n.pagination.$el;
                    if (n.params.pagination.el && n.params.pagination.hideOnClick && a && a.length > 0 && !k(i).hasClass(n.params.pagination.bulletClass)) {
                        if (n.navigation && (n.navigation.nextEl && i === n.navigation.nextEl || n.navigation.prevEl && i === n.navigation.prevEl)) return;
                        var s = a.hasClass(n.params.pagination.hiddenClass);
                        r(!0 === s ? "paginationShow" : "paginationHide"), a.toggleClass(n.params.pagination.hiddenClass)
                    }
                }));
                var v = function() {
                    n.$el.addClass(n.params.pagination.paginationDisabledClass), n.pagination.$el && n.pagination.$el.addClass(n.params.pagination.paginationDisabledClass), f()
                };
                Object.assign(n.pagination, {
                    enable: function() {
                        n.$el.removeClass(n.params.pagination.paginationDisabledClass), n.pagination.$el && n.pagination.$el.removeClass(n.params.pagination.paginationDisabledClass), p(), u(), c()
                    },
                    disable: v,
                    render: u,
                    update: c,
                    init: p,
                    destroy: f
                })
            }

            function we(e) {
                var t, n = e.swiper,
                    i = e.extendParams,
                    a = e.on,
                    r = e.emit;

                function s() {
                    if (!n.size) return n.autoplay.running = !1, void(n.autoplay.paused = !1);
                    var e = n.slides.eq(n.activeIndex),
                        i = n.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || n.params.autoplay.delay), clearTimeout(t), t = O((function() {
                        var e;
                        n.params.autoplay.reverseDirection ? n.params.loop ? (n.loopFix(), e = n.slidePrev(n.params.speed, !0, !0), r("autoplay")) : n.isBeginning ? n.params.autoplay.stopOnLastSlide ? o() : (e = n.slideTo(n.slides.length - 1, n.params.speed, !0, !0), r("autoplay")) : (e = n.slidePrev(n.params.speed, !0, !0), r("autoplay")) : n.params.loop ? (n.loopFix(), e = n.slideNext(n.params.speed, !0, !0), r("autoplay")) : n.isEnd ? n.params.autoplay.stopOnLastSlide ? o() : (e = n.slideTo(0, n.params.speed, !0, !0), r("autoplay")) : (e = n.slideNext(n.params.speed, !0, !0), r("autoplay")), (n.params.cssMode && n.autoplay.running || !1 === e) && s()
                    }), i)
                }

                function l() {
                    return "undefined" === typeof t && (!n.autoplay.running && (n.autoplay.running = !0, r("autoplayStart"), s(), !0))
                }

                function o() {
                    return !!n.autoplay.running && ("undefined" !== typeof t && (t && (clearTimeout(t), t = void 0), n.autoplay.running = !1, r("autoplayStop"), !0))
                }

                function c(e) {
                    n.autoplay.running && (n.autoplay.paused || (t && clearTimeout(t), n.autoplay.paused = !0, 0 !== e && n.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((function(e) {
                        n.$wrapperEl[0].addEventListener(e, p)
                    })) : (n.autoplay.paused = !1, s())))
                }

                function u() {
                    var e = d();
                    "hidden" === e.visibilityState && n.autoplay.running && c(), "visible" === e.visibilityState && n.autoplay.paused && (s(), n.autoplay.paused = !1)
                }

                function p(e) {
                    n && !n.destroyed && n.$wrapperEl && e.target === n.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((function(e) {
                        n.$wrapperEl[0].removeEventListener(e, p)
                    })), n.autoplay.paused = !1, n.autoplay.running ? s() : o())
                }

                function f() {
                    n.params.autoplay.disableOnInteraction ? o() : (r("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((function(e) {
                        n.$wrapperEl[0].removeEventListener(e, p)
                    }))
                }

                function v() {
                    n.params.autoplay.disableOnInteraction || (n.autoplay.paused = !1, r("autoplayResume"), s())
                }
                n.autoplay = {
                    running: !1,
                    paused: !1
                }, i({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), a("init", (function() {
                    n.params.autoplay.enabled && (l(), d().addEventListener("visibilitychange", u), n.params.autoplay.pauseOnMouseEnter && (n.$el.on("mouseenter", f), n.$el.on("mouseleave", v)))
                })), a("beforeTransitionStart", (function(e, t, i) {
                    n.autoplay.running && (i || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(t) : o())
                })), a("sliderFirstMove", (function() {
                    n.autoplay.running && (n.params.autoplay.disableOnInteraction ? o() : c())
                })), a("touchEnd", (function() {
                    n.params.cssMode && n.autoplay.paused && !n.params.autoplay.disableOnInteraction && s()
                })), a("destroy", (function() {
                    n.$el.off("mouseenter", f), n.$el.off("mouseleave", v), n.autoplay.running && o(), d().removeEventListener("visibilitychange", u)
                })), Object.assign(n.autoplay, {
                    pause: c,
                    run: s,
                    start: l,
                    stop: o
                })
            }
        }
    }
]);