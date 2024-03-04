"use strict";
(self.webpackChunkcoti_marketing_new = self.webpackChunkcoti_marketing_new || []).push([
    [55], {
        9055: function(e, i, n) {
            n.r(i);
            var a = n(7313),
                t = n(2059),
                s = n(3041),
                o = n(9764),
                c = n(5968),
                r = n(407),
                l = n(8437),
                u = n(2986),
                m = n(6691),
                p = n(6417);
            i.default = function() {
                var e = c.vc.homepage,
                    i = (0, l.C)(r.Ci).windowDimensions.isMobile,
                    n = (0, m.defaultLottieOptions)({
                        url: "animationsData/overlay_lines_2.json"
                    });
                return (0, a.useMemo)((function() {
                    return (0, p.jsxs)(s.Z, {
                        className: "private",
                        children: [(0, p.jsx)(t.Z, {
                            className: "section_image",
                            image: "shapes/".concat(e.private.image).concat(i ? "_mobile" : "", ".png"),
                            children: (0, p.jsx)(u.Z, {
                                options: n
                            })
                        }), (0, p.jsx)(o.ZG, {
                            headline: e.private.headline,
                            text: e.private.text
                        })]
                    })
                }), [i, e, n])
            }
        }
    }
]);