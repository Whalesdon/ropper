(self.webpackChunkcoti_marketing_new = self.webpackChunkcoti_marketing_new || []).push([
    [492], {
        1492: function(n, e, o) {
            "use strict";
            o.r(e);
            var r = o(7313),
                a = o(3041),
                t = o(8437),
                s = o(407),
                i = o(6417);
            e.default = function() {
                var n = (0, t.C)(s.Ci).windowDimensions.isMobile,
                    e = (0, r.useCallback)((function() {
                        var e = o(3927)("./roadmap_".concat(n ? "mobile" : "desktop", ".svg"));
                        return (0, i.jsx)("img", {
                            src: e,
                            alt: "full_roadmap"
                        })
                    }), [n]);
                return (0, i.jsxs)(a.Z, {
                    className: "roadmap blog_carousel_component",
                    children: [(0, i.jsx)("h3", {
                        children: "Roadmap"
                    }), (0, i.jsx)(e, {})]
                })
            }
        },
        3927: function(n, e, o) {
            var r = {
                "./roadmap_desktop.svg": 631,
                "./roadmap_mobile.svg": 5902
            };

            function a(n) {
                var e = t(n);
                return o(e)
            }

            function t(n) {
                if (!o.o(r, n)) {
                    var e = new Error("Cannot find module '" + n + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return r[n]
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.resolve = t, n.exports = a, a.id = 3927
        }
    }
]);