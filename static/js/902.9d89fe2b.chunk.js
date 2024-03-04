"use strict";
(self.webpackChunkcoti_marketing_new = self.webpackChunkcoti_marketing_new || []).push([
    [902], {
        4902: function(e, n, i) {
            i.r(n);
            var a = i(7313),
                s = i(2059),
                t = i(3041),
                o = i(9764),
                c = i(5968),
                r = i(407),
                l = i(8437),
                u = i(2986),
                m = i(6691),
                f = i(6417);
            n.default = function() {
                var e = c.vc.homepage.faster,
                    n = (0, l.C)(r.Ci).windowDimensions.isMobile,
                    i = (0, m.defaultLottieOptions)({
                        url: "animationsData/overlay_lines.json"
                    });
                return (0, a.useMemo)((function() {
                    return (0, f.jsxs)(t.Z, {
                        className: "faster",
                        children: [(0, f.jsx)(o.ZG, {
                            headline: e.headline,
                            text: e.text
                        }), (0, f.jsx)(s.Z, {
                            className: "section_image",
                            image: "shapes/".concat(e.image).concat(n ? "_mobile" : "", ".png"),
                            children: (0, f.jsx)(u.Z, {
                                options: i
                            })
                        })]
                    })
                }), [e, n, i])
            }
        }
    }
]);