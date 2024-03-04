"use strict";
(self.webpackChunkcoti_marketing_new = self.webpackChunkcoti_marketing_new || []).push([
    [443], {
        24: function(n, e, i) {
            i.d(e, {
                Z: function() {
                    return a
                }
            });
            var o = i(9439),
                s = i(7313),
                c = i(5369),
                t = i(6417),
                a = function(n) {
                    var e = n.visible,
                        i = n.children,
                        a = n.className,
                        l = n.disabled,
                        r = n.defaultExpand,
                        u = n.gaEvent,
                        d = (0, s.useState)(r),
                        f = (0, o.Z)(d, 2),
                        m = f[0],
                        v = f[1],
                        j = (0, s.useCallback)((function() {
                            l || (u && (0, c.Nf)("".concat(u, " expand tile button clicks - ").concat(m ? "Close" : "Open")), v(!m))
                        }), [l, u, m]);
                    return (0, s.useMemo)((function() {
                        return (0, t.jsxs)("div", {
                            className: "expand_component ".concat(null !== a && void 0 !== a ? a : "", " ").concat(m ? "open" : "", " ").concat(l ? "disabled" : ""),
                            onClick: j,
                            children: [(0, t.jsxs)("div", {
                                className: "expand_visible",
                                children: [e, (0, t.jsx)("div", {
                                    className: "cover_expand_arrow",
                                    children: (0, t.jsx)("div", {
                                        className: "app_icon expand_arrow ".concat(l ? "disabled" : "")
                                    })
                                })]
                            }), m && (0, t.jsx)("div", {
                                className: "expanded",
                                onClick: function(n) {
                                    return n.stopPropagation()
                                },
                                children: i
                            })]
                        })
                    }), [a, m, l, j, e, i])
                }
        },
        443: function(n, e, i) {
            i.r(e), i.d(e, {
                default: function() {
                    return x
                }
            });
            var o = i(24),
                s = i(2059),
                c = i(816),
                t = i(7754),
                a = i(5968),
                l = i(407),
                r = i(7640),
                u = i(7313),
                d = i(8467),
                f = i(8437),
                m = i(5369),
                v = i(4888),
                j = i(6417),
                x = function() {
                    var n = (0, f.C)(l.Ci).windowDimensions.isDesktop;
                    return (0, u.useMemo)((function() {
                        return (0, j.jsx)("div", {
                            className: "footer",
                            children: (0, j.jsxs)("div", {
                                className: "footer_wrapper",
                                children: [!n && (0, j.jsxs)(j.Fragment, {
                                    children: [(0, j.jsx)(c.Z, {
                                        className: "footer_top_logo"
                                    }), (0, j.jsx)(k, {})]
                                }), (0, j.jsx)(h, {}), (0, j.jsx)(p, {})]
                            })
                        })
                    }), [n])
                },
                h = function() {
                    var n = (0, f.C)(l.Ci).windowDimensions.isDesktop,
                        e = (0, d.s0)(),
                        i = (0, r.RF)(),
                        s = (0, u.useCallback)((function() {
                            i > 0 && window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth"
                            })
                        }), [i]),
                        c = (0, u.useCallback)((function(n) {
                            s(), e(n)
                        }), [e, s]),
                        x = (0, u.useCallback)((function(n, e, i) {
                            if (!a.Mu || i || e) {
                                var o = n ? Object.values(a._j).find((function(e) {
                                    return e.path === n
                                })) : Object.values(a._j).find((function(n) {
                                    return n.link === e
                                }));
                                n ? c(n) : e && (0, v.YQ)(e), (0, m.Nf)('[Footer] "'.concat(null === o || void 0 === o ? void 0 : o.label, '" button click'))
                            } else window.location.href = a.oR + n
                        }), [c]);
                    return (0, u.useMemo)((function() {
                        return (0, j.jsxs)("div", {
                            className: "site_map",
                            children: [Object.values(a.bd).map((function(e) {
                                var i;
                                return null !== (i = e.routes) && void 0 !== i && i.length ? n ? (0, j.jsxs)("div", {
                                    className: "category",
                                    children: [(0, j.jsx)("h3", {
                                        children: e.label
                                    }), (0, j.jsx)(t.o, {
                                        routes: e.routes,
                                        onClick: x
                                    })]
                                }, e.label) : (0, j.jsx)(o.Z, {
                                    className: "category",
                                    visible: (0, j.jsx)("h3", {
                                        children: e.label
                                    }),
                                    children: (0, j.jsx)(t.o, {
                                        routes: e.routes,
                                        onClick: x
                                    })
                                }, e.label) : null
                            })), n && (0, j.jsx)(k, {})]
                        })
                    }), [n, x])
                },
                p = function() {
                    var n = (0, f.C)(l.Ci).windowDimensions.isDesktop;
                    return (0, u.useMemo)((function() {
                        return (0, j.jsxs)("div", {
                            className: "site_info",
                            children: [n && (0, j.jsx)(c.Z, {
                                className: "small"
                            }), (0, j.jsxs)("div", {
                                className: "legal_contact",
                                children: [(0, j.jsx)(b, {}), n && (0, j.jsx)(N, {})]
                            })]
                        })
                    }), [n])
                },
                b = function() {
                    var n = (0, d.s0)();
                    return (0, u.useMemo)((function() {
                        return (0, j.jsx)("div", {
                            className: "terms",
                            children: Object.entries(a.BY).filter((function(n) {
                                return !a.Mu || n[1].isFoundation
                            })).map((function(e) {
                                return (0, j.jsx)("p", {
                                    onClick: function() {
                                        var i;
                                        !a.Mu || e[1].isFoundation ? (n(null !== (i = e[1].path) && void 0 !== i ? i : ""), (0, m.Nf)('[Footer] "'.concat(e[0], '" button click'))) : window.location.href = a.oR + e[1].path
                                    },
                                    children: e[1].label
                                }, e[0])
                            }))
                        })
                    }), [n])
                },
                k = function() {
                    var n = (0, f.C)(l.Ci).windowDimensions.isDesktop;
                    return (0, u.useMemo)((function() {
                        return (0, j.jsxs)("div", {
                            className: "social_networks",
                            children: [(0, j.jsx)("h3", {
                                children: "Social"
                            }), !n && (0, j.jsx)(N, {}), Object.entries(a.Ao).filter((function(n) {
                                return n[1].footer
                            })).map((function(e) {
                                return (0, j.jsxs)("div", {
                                    className: "social_link",
                                    onClick: function() {
                                        var n;
                                        (0, v.YQ)(null !== (n = e[1].link) && void 0 !== n ? n : ""), (0, m.Nf)('[Footer] "'.concat(e[0], '" button click'))
                                    },
                                    children: [e[1].icon && (0, j.jsx)(s.Z, {
                                        image: e[1].icon
                                    }), n && e[1].label]
                                }, e[0])
                            }))]
                        })
                    }), [n])
                },
                N = function() {
                    return (0, j.jsxs)("a", {
                        className: "contact",
                        href: "mailto: ".concat(a.vc.footer.contactEmail),
                        children: [(0, j.jsx)("span", {
                            className: "email_forward_icon"
                        }), a.vc.footer.contactEmail]
                    })
                }
        }
    }
]);