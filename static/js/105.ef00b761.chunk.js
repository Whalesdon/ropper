"use strict";
(self.webpackChunkcoti_marketing_new = self.webpackChunkcoti_marketing_new || []).push([
    [105], {
        8105: function(e, i, n) {
            n.r(i);
            var t = n(7313),
                a = n(2059),
                s = n(3041),
                o = n(9764),
                c = n(5968),
                l = n(407),
                r = n(8437),
                m = n(2986),
                u = n(6691),
                h = n(6417);
            i.default = function() {
                var e = c.vc.homepage.lighter,
                    i = (0, r.C)(l.Ci).windowDimensions.isMobile,
                    n = (0, u.defaultLottieOptions)({
                        url: "animationsData/overlay_lines_2.json"
                    });
                return (0, t.useMemo)((function() {
                    return (0, h.jsxs)(s.Z, {
                        className: "lighter",
                        children: [(0, h.jsx)(a.Z, {
                            className: "section_image",
                            image: "shapes/".concat(e.image).concat(i ? "_mobile" : "", ".png"),
                            children: (0, h.jsx)(m.Z, {
                                options: n
                            })
                        }), (0, h.jsx)(o.ZG, {
                            headline: e.headline,
                            text: e.text
                        })]
                    })
                }), [i, e.headline, e.image, e.text, n])
            }
        }
    }
]);