"use strict";
(self.webpackChunkcoti_marketing_new = self.webpackChunkcoti_marketing_new || []).push([
    [658], {
        658: function(e, s, n) {
            n.r(s), n.d(s, {
                default: function() {
                    return f
                }
            });
            var c = n(9439),
                a = n(7313),
                i = n(2059),
                r = n(3041),
                u = n(5968),
                t = n(9263),
                l = n(7640),
                o = n(6417),
                d = function(e) {
                    var s = e.useCase;
                    return (0, a.useMemo)((function() {
                        return (0, o.jsxs)("div", {
                            className: "use_case",
                            children: [(0, o.jsx)(i.Z, {
                                className: "use_case_icon",
                                image: "icons/".concat(s.image)
                            }), (0, o.jsxs)("div", {
                                className: "cover_use_case_title",
                                children: [(0, o.jsx)("h3", {
                                    children: s.headline
                                }), s.subHeadline && (0, o.jsx)("h4", {
                                    children: s.subHeadline
                                })]
                            }), (0, o.jsx)("p", {
                                children: s.text
                            })]
                        })
                    }), [s])
                },
                f = function() {
                    var e = (0, a.useRef)(null),
                        s = (0, a.useState)(!1),
                        n = (0, c.Z)(s, 2),
                        i = n[0],
                        f = n[1],
                        h = (0, l.RO)(e),
                        m = u.vc.homepage.useCases,
                        x = m.enterprises,
                        _ = m.consumer,
                        j = m.cbdc,
                        v = "".concat("", "/videos/coti-wave-banner.mp4");
                    return (0, a.useEffect)((function() {
                        if (h && !i) return f(!0),
                            function() {
                                i && f(!1)
                            }
                    }), [h]), (0, a.useMemo)((function() {
                        return (0, o.jsxs)(r.Z, {
                            className: "use_cases_section flex",
                            children: [(0, o.jsx)(t.Z, {
                                className: "wave-video",
                                poster: "coti-wave.png",
                                src: v,
                                play: i
                            }), (0, o.jsx)("h2", {
                                ref: e,
                                className: "title",
                                children: "A Whole New World of Use Cases"
                            }), (0, o.jsxs)("div", {
                                className: "use_cases_wrapper",
                                children: [(0, o.jsx)(d, {
                                    useCase: x
                                }), (0, o.jsx)(d, {
                                    useCase: _
                                }), (0, o.jsx)(d, {
                                    useCase: j
                                })]
                            })]
                        })
                    }), [j, _, x, v, i])
                }
        }
    }
]);