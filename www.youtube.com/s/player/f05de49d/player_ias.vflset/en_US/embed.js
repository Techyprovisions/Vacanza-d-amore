(function(g) {
    var window = this;
    'use strict';
    var AYa = function(a, b) {
            var c = (b - a.j) / (a.u - a.j);
            if (0 >= c) return 0;
            if (1 <= c) return 1;
            for (var d = 0, e = 1, f = 0, k = 0; 8 > k; k++) {
                f = g.Jn(a, c);
                var l = (g.Jn(a, c + 1E-6) - f) / 1E-6;
                if (1E-6 > Math.abs(f - b)) return c;
                if (1E-6 > Math.abs(l)) break;
                else f < b ? d = c : e = c, c -= (f - b) / l
            }
            for (k = 0; 1E-6 < Math.abs(f - b) && 8 > k; k++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = g.Jn(a, c);
            return c
        },
        k2 = function() {
            return {
                F: "svg",
                T: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                S: [{
                    F: "path",
                    Ib: !0,
                    L: "ytp-svg-fill",
                    T: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        l2 = function(a) {
            g.I.call(this);
            this.callback = a;
            this.u = new g.In(0, 0, .4, 0, .2, 1, 1, 1);
            this.delay = new g.jn(this.next, window, this);
            this.startTime = this.duration = this.j = this.from = NaN;
            g.J(this, this.delay)
        },
        n2 = function(a) {
            g.V.call(this, {
                F: "div",
                L: "ytp-related-on-error-overlay"
            });
            var b = this;
            this.api = a;
            this.D = this.B = 0;
            this.C = new g.Ry(this);
            this.u = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.title = new g.V({
                F: "h2",
                L: "ytp-related-title",
                X: "{{title}}"
            });
            this.previous = new g.V({
                F: "button",
                Ba: ["ytp-button", "ytp-previous"],
                T: {
                    "aria-label": "Show previous suggested videos"
                },
                S: [g.fG()]
            });
            this.P = new l2(function(f) {
                m2(b);
                b.suggestions.element.scrollLeft = -f
            });
            this.tileWidth = this.j = 0;
            this.I = !0;
            this.next = new g.V({
                F: "button",
                Ba: ["ytp-button", "ytp-next"],
                T: {
                    "aria-label": "Show more suggested videos"
                },
                S: [g.gG()]
            });
            g.J(this, this.C);
            a = a.R();
            this.J = a.j;
            g.J(this, this.title);
            this.title.ra(this.element);
            this.suggestions = new g.V({
                F: "div",
                L: "ytp-suggestions"
            });
            g.J(this, this.suggestions);
            this.suggestions.ra(this.element);
            g.J(this, this.previous);
            this.previous.ra(this.element);
            this.previous.Ja("click", this.DU, this);
            g.J(this, this.P);
            for (var c = {
                    gt: 0
                }; 16 > c.gt; c = {
                    gt: c.gt
                },
                c.gt++) {
                var d = new g.V({
                    F: "a",
                    L: "ytp-suggestion-link",
                    T: {
                        href: "{{link}}",
                        target: a.J,
                        "aria-label": "{{aria_label}}"
                    },
                    S: [{
                        F: "div",
                        L: "ytp-suggestion-image",
                        S: [{
                            F: "div",
                            T: {
                                "data-is-live": "{{is_live}}"
                            },
                            L: "ytp-suggestion-duration",
                            X: "{{duration}}"
                        }]
                    }, {
                        F: "div",
                        L: "ytp-suggestion-title",
                        T: {
                            title: "{{hover_title}}"
                        },
                        X: "{{title}}"
                    }, {
                        F: "div",
                        L: "ytp-suggestion-author",
                        X: "{{views_or_author}}"
                    }]
                });
                g.J(this, d);
                d.ra(this.suggestions.element);
                var e = d.va("ytp-suggestion-link");
                g.yk(e, "transitionDelay", c.gt / 20 + "s");
                this.C.N(e,
                    "click",
                    function(f) {
                        return function(k) {
                            var l = b.suggestionData[f.gt],
                                m = l.sessionData;
                            g.cJ(k, b.api, b.J, m || void 0) && b.api.ll(l.videoId, m, l.playlistId)
                        }
                    }(c));
                this.u.push(d)
            }
            g.J(this, this.next);
            this.next.ra(this.element);
            this.next.Ja("click", this.CU, this);
            this.C.N(this.api, "videodatachange", this.onVideoDataChange);
            this.resize(this.api.Wa().getPlayerSize());
            this.onVideoDataChange();
            this.show()
        },
        m2 = function(a) {
            return a.suggestionData.length * (a.tileWidth + a.B)
        },
        o2 = function(a) {
            a.next.element.style.bottom = a.D + "px";
            a.previous.element.style.bottom = a.D + "px";
            var b = a.j,
                c = a.containerWidth - m2(a);
            g.N(a.element, "ytp-scroll-min", 0 <= b);
            g.N(a.element, "ytp-scroll-max", b <= c)
        },
        BYa = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.u[b],
                    e = c.shortViewCount ? c.shortViewCount : c.author,
                    f = c.gm(),
                    k = a.api.R();
                if (g.EA(k)) {
                    var l = {};
                    k.Z && g.UH(l, k.loaderUrl);
                    f = g.lh(f, g.TH(l, "emb_rel_err"))
                }
                d.element.style.display = "";
                k = d.va("ytp-suggestion-title");
                g.Gn.test(c.title) ? k.dir = "rtl" : g.STa.test(c.title) && (k.dir = "ltr");
                k = d.va("ytp-suggestion-author");
                g.Gn.test(e) ? k.dir = "rtl" : g.STa.test(e) && (k.dir = "ltr");
                d.update({
                    views_or_author: e,
                    duration: c.isLivePlayback ? "Live" : c.lengthSeconds ? g.$G(c.lengthSeconds) : "",
                    link: f,
                    hover_title: c.title,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback
                });
                d = d.va("ytp-suggestion-image");
                c = c.vf();
                d.style.backgroundImage = c ? "url(" + c + ")" : ""
            }
            for (; b < a.u.length; b++) a.u[b].element.style.display = "none";
            o2(a)
        },
        p2 = function(a) {
            g.hJ.call(this, a);
            var b = this;
            this.j = null;
            var c = a.R(),
                d = {
                    F: "svg",
                    T: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    S: [{
                        F: "path",
                        T: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        F: "path",
                        T: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                };
            c.isMusic() && (d = {
                F: "svg",
                T: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 25 25",
                    width: "100%"
                },
                S: [{
                        F: "g",
                        T: {
                            "clip-path": "url(#clip0)",
                            fill: "#fff"
                        },
                        S: [{
                            F: "path",
                            T: {
                                d: "M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z"
                            }
                        }, {
                            F: "path",
                            T: {
                                d: "M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z"
                            }
                        }]
                    },
                    {
                        F: "defs",
                        S: [{
                            F: "clipPath",
                            T: {
                                id: "clip0"
                            },
                            S: [{
                                F: "path",
                                T: {
                                    d: "M0 0h24v24H0z",
                                    fill: "#fff",
                                    transform: "translate(.57 .5)"
                                }
                            }]
                        }]
                    }
                ]
            });
            var e = {
                    target: c.J
                },
                f = ["ytp-small-redirect"];
            if (c.C) f.push("no-link");
            else {
                var k = g.mB(c);
                c.Z && (k = CYa(k, c.loaderUrl));
                e.href = k;
                e["aria-label"] = "Visit YouTube to search for more videos"
            }
            c = new g.V({
                F: "a",
                Ba: f,
                T: e,
                S: [d]
            });
            c.ra(this.element);
            g.J(this, c);
            a.R().C || (this.j = new n2(a), this.j.ra(this.element), g.J(this, this.j));
            this.iconSize = 1;
            this.N(a, "videodatachange", function() {
                b.show()
            });
            this.resize(this.api.Wa().getPlayerSize())
        },
        DYa = function(a, b) {
            a.va("ytp-error-content").style.paddingTop = "0px";
            var c = a.va("ytp-error-content"),
                d = c.clientHeight;
            a.j.resize(b, b.height - d);
            c.style.paddingTop = (b.height - a.j.element.clientHeight) / 2 - d / 2 + "px"
        },
        EYa = function(a, b) {
            var c;
            b.reason && (q2(b.reason) ? c = g.ov(b.reason) : c = g.iJ(g.nv(b.reason)), a.Gd(c, "content"));
            var d;
            b.subreason && (q2(b.subreason) ? d = g.ov(b.subreason) : d = g.iJ(g.nv(b.subreason)), a.Gd(d, "subreason"));
            if (b.proceedButton && b.proceedButton.buttonRenderer && (c = a.va("ytp-error-content-wrap-subreason"), d = b.proceedButton.buttonRenderer, b = g.dg("A"), d.text && d.text.simpleText)) {
                var e = d.text.simpleText;
                b.textContent = e;
                a: {
                    for (var f = g.Wf("A", c), k = 0; k < f.length; k++)
                        if (f[k].textContent === e) {
                            e = !0;
                            break a
                        }
                    e = !1
                }
                if (!e) {
                    var l, m;
                    e = null ==
                        d ? void 0 : null == (l = d.navigationEndpoint) ? void 0 : null == (m = l.urlEndpoint) ? void 0 : m.url;
                    var n, p;
                    l = null == d ? void 0 : null == (n = d.navigationEndpoint) ? void 0 : null == (p = n.urlEndpoint) ? void 0 : p.target;
                    e && (a = a.api.R(), a.Z && (e = CYa(e, a.loaderUrl)), b.setAttribute("href", e));
                    l && b.setAttribute("target", l);
                    a = g.dg("DIV");
                    a.appendChild(b);
                    c.appendChild(a)
                }
            }
        },
        q2 = function(a) {
            if (a.runs)
                for (var b = 0; b < a.runs.length; b++)
                    if (a.runs[b].navigationEndpoint) return !0;
            return !1
        },
        CYa = function(a, b) {
            var c = {};
            g.UH(c, b);
            return g.lh(a, c)
        },
        r2 = function(a, b) {
            g.V.call(this, {
                F: "a",
                Ba: ["ytp-impression-link"],
                T: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "Watch on YouTube"
                },
                S: [{
                    F: "div",
                    L: "ytp-impression-link-content",
                    T: {
                        "aria-hidden": "true"
                    },
                    S: [{
                        F: "div",
                        L: "ytp-impression-link-text",
                        X: "Watch on"
                    }, {
                        F: "div",
                        L: "ytp-impression-link-logo",
                        S: [k2()]
                    }]
                }]
            });
            this.api = a;
            this.u = b;
            this.updateValue("target", a.R().J);
            this.api.zb(this.element, this, 96714);
            this.N(this.api, "presentingplayerstatechange", this.dh);
            this.N(this.api, "videoplayerreset", this.j);
            this.N(this.element, "click", this.onClick);
            this.j()
        },
        FYa = function(a) {
            var b = {};
            a.api.R().Z && g.UH(b, a.api.R().loaderUrl);
            return g.lh(a.api.getVideoUrl(), g.TH(b, "emb_imp_woyt"))
        },
        s2 = function(a) {
            g.V.call(this, {
                F: "div",
                Ba: ["ytp-mobile-a11y-hidden-seek-button"],
                S: [{
                    F: "button",
                    Ba: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
                    T: {
                        "aria-label": "Rewind 10 seconds",
                        "aria-hidden": "false"
                    }
                }, {
                    F: "button",
                    Ba: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
                    T: {
                        "aria-label": "Fast forward 10 seconds",
                        "aria-hidden": "false"
                    }
                }]
            });
            this.api = a;
            this.j = this.va("ytp-mobile-a11y-hidden-seek-button-rewind");
            this.forwardButton = this.va("ytp-mobile-a11y-hidden-seek-button-forward");
            this.api.zb(this.j, this, 141902);
            this.api.zb(this.forwardButton,
                this, 141903);
            this.N(this.api, "presentingplayerstatechange", this.dh);
            this.N(this.j, "click", this.u);
            this.N(this.forwardButton, "click", this.B);
            this.dh()
        },
        t2 = function(a) {
            g.V.call(this, {
                F: "div",
                L: "ytp-muted-autoplay-endscreen-overlay",
                S: [{
                    F: "div",
                    L: "ytp-muted-autoplay-end-panel",
                    S: [{
                        F: "div",
                        L: "ytp-muted-autoplay-end-text",
                        X: "{{text}}"
                    }]
                }]
            });
            this.api = a;
            this.B = this.va("ytp-muted-autoplay-end-panel");
            this.j = new g.aJ(this.api);
            g.J(this, this.j);
            this.j.ra(this.B, 0);
            this.api.zb(this.element, this, 52428);
            this.N(this.api, "presentingplayerstatechange", this.u);
            this.Ja("click", this.onClick);
            this.hide()
        },
        u2 = function(a) {
            g.V.call(this, {
                F: "div",
                L: "ytp-muted-autoplay-overlay",
                S: [{
                    F: "div",
                    L: "ytp-muted-autoplay-bottom-buttons",
                    S: [{
                        F: "button",
                        Ba: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        S: [{
                            F: "div",
                            Ba: ["ytp-muted-autoplay-equalizer-icon"],
                            S: [{
                                F: "svg",
                                T: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                S: [{
                                    F: "g",
                                    T: {
                                        fill: "#fff"
                                    },
                                    S: [{
                                        F: "rect",
                                        L: "ytp-equalizer-bar-left",
                                        T: {
                                            height: "9",
                                            width: "4",
                                            x: "1",
                                            y: "7"
                                        }
                                    }, {
                                        F: "rect",
                                        L: "ytp-equalizer-bar-middle",
                                        T: {
                                            height: "14",
                                            width: "4",
                                            x: "6",
                                            y: "2"
                                        }
                                    }, {
                                        F: "rect",
                                        L: "ytp-equalizer-bar-right",
                                        T: {
                                            height: "12",
                                            width: "4",
                                            x: "11",
                                            y: "4"
                                        }
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            this.api = a;
            this.bottomButtons = this.va("ytp-muted-autoplay-bottom-buttons");
            this.va("ytp-muted-autoplay-equalizer");
            this.B = new g.K(this.u, 4E3, this);
            a.zb(this.element, this, 39306);
            this.N(a, "presentingplayerstatechange", this.j);
            this.N(a, "onMutedAutoplayStarts", this.j);
            this.Ja("click", this.onClick);
            this.hide()
        },
        v2 = function(a, b) {
            g.V.call(this, {
                F: "div",
                L: "ytp-pause-overlay",
                T: {
                    tabIndex: "-1"
                }
            });
            var c = this;
            this.api = a;
            this.I = b;
            this.j = new g.Ry(this);
            this.C = new g.MG(this, 1E3, !1, 100);
            this.B = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.D = !1;
            this.U = 0;
            this.title = new g.V({
                F: "h2",
                L: "ytp-related-title",
                X: "{{title}}"
            });
            this.previous = new g.V({
                F: "button",
                Ba: ["ytp-button", "ytp-previous"],
                T: {
                    "aria-label": "Show previous suggested videos"
                },
                S: [g.fG()]
            });
            this.P = new l2(function(f) {
                c.suggestions.element.scrollLeft = -f
            });
            this.tileHeight = this.tileWidth = this.u = 0;
            this.next = new g.V({
                F: "button",
                Ba: ["ytp-button", "ytp-next"],
                T: {
                    "aria-label": "Show more suggested videos"
                },
                S: [g.gG()]
            });
            this.expandButton = new g.V({
                F: "button",
                Ba: ["ytp-button", "ytp-expand"],
                X: "More videos"
            });
            g.J(this, this.j);
            g.J(this, this.C);
            b = a.R();
            "0" === b.controlsType && g.sn(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.J = b.j;
            g.J(this, this.title);
            this.title.ra(this.element);
            this.suggestions = new g.V({
                F: "div",
                L: "ytp-suggestions"
            });
            g.J(this, this.suggestions);
            this.suggestions.ra(this.element);
            g.J(this, this.previous);
            this.previous.ra(this.element);
            this.previous.Ja("click", this.FU, this);
            g.J(this, this.P);
            for (a = {
                    jt: 0
                }; 16 > a.jt; a = {
                    jt: a.jt
                }, a.jt++) {
                var d = new g.V({
                    F: "a",
                    L: "ytp-suggestion-link",
                    T: {
                        href: "{{link}}",
                        target: b.J,
                        "aria-label": "{{aria_label}}"
                    },
                    S: [{
                        F: "div",
                        L: "ytp-suggestion-image"
                    }, {
                        F: "div",
                        L: "ytp-suggestion-overlay",
                        T: {
                            style: "{{blink_rendering_hack}}",
                            "aria-hidden": "{{aria_hidden}}"
                        },
                        S: [{
                            F: "div",
                            L: "ytp-suggestion-title",
                            X: "{{title}}"
                        }, {
                            F: "div",
                            L: "ytp-suggestion-author",
                            X: "{{author_and_views}}"
                        }, {
                            F: "div",
                            T: {
                                "data-is-live": "{{is_live}}"
                            },
                            L: "ytp-suggestion-duration",
                            X: "{{duration}}"
                        }]
                    }]
                });
                g.J(this, d);
                d.ra(this.suggestions.element);
                var e = d.va("ytp-suggestion-link");
                g.yk(e, "transitionDelay", a.jt / 20 + "s");
                this.j.N(e, "click", function(f) {
                    return function(k) {
                        var l = f.jt;
                        if (1E3 > (0, g.Q)() - c.U) g.Us(k), document.activeElement.blur();
                        else {
                            l = c.suggestionData[l];
                            var m = l.sessionData;
                            g.cJ(k, c.api, c.J, m || void 0) && c.api.ll(l.videoId, m, l.playlistId)
                        }
                    }
                }(a));
                this.B.push(d)
            }
            g.J(this, this.next);
            this.next.ra(this.element);
            this.next.Ja("click", this.EU, this);
            b = new g.V({
                F: "button",
                Ba: ["ytp-button", "ytp-collapse"],
                T: {
                    "aria-label": "Hide more videos"
                },
                S: [g.FBa()]
            });
            g.J(this, b);
            b.ra(this.element);
            b.Ja("click", this.rY, this);
            g.J(this, this.expandButton);
            this.expandButton.ra(this.element);
            this.expandButton.Ja("click", this.sY, this);
            this.j.N(this.api, "appresize", this.ub);
            this.j.N(this.api, "fullscreentoggled", this.Rn);
            this.j.N(this.api, "presentingplayerstatechange", this.Uc);
            this.j.N(this.api, "videodatachange", this.onVideoDataChange);
            this.ub(this.api.Wa().getPlayerSize());
            this.onVideoDataChange()
        },
        w2 = function(a) {
            var b = a.I.Ff() ? 32 : 16;
            b = a.tileHeight / 2 + b;
            a.next.element.style.bottom = b + "px";
            a.previous.element.style.bottom = b + "px";
            b = a.u;
            var c = a.containerWidth - a.suggestionData.length * (a.tileWidth + 8);
            g.N(a.element, "ytp-scroll-min", 0 <= b);
            g.N(a.element, "ytp-scroll-max", b <= c)
        },
        GYa = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.B[b],
                    e = c.shortViewCount ? c.author + " \u2022 " + c.shortViewCount : c.author;
                d.element.style.display = "";
                g.RTa.test(c.title) && (d.va("ytp-suggestion-title").dir = "rtl");
                g.RTa.test(e) && (d.va("ytp-suggestion-author").dir = "rtl");
                var f = c.isLivePlayback ? "Live" : c.lengthSeconds ? g.$G(c.lengthSeconds) : "";
                var k = c.gm();
                if (g.EA(a.api.R())) {
                    var l = {};
                    a.api.R().Z && g.UH(l, a.api.R().loaderUrl);
                    k = g.lh(k, g.TH(l, "emb_rel_pause"))
                }
                d.update({
                    author_and_views: e,
                    duration: f,
                    link: k,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback,
                    aria_hidden: !(!c.ariaLabel || a.api.R().K("embeds_rv_aria_hidden_killswitch")),
                    blink_rendering_hack: g.Vy || g.CA ? "will-change: opacity" : void 0
                });
                d = d.va("ytp-suggestion-image");
                c = c.vf();
                d.style.backgroundImage = c ? "url(" + c + ")" : ""
            }
            for (; b < a.B.length; b++) a.B[b].element.style.display = "none";
            w2(a)
        },
        x2 = function(a) {
            var b = a.R();
            g.V.call(this, {
                F: "a",
                Ba: ["ytp-watermark", "yt-uix-sessionlink"],
                T: {
                    target: b.J,
                    href: "{{url}}",
                    "aria-label": g.LE("Watch on $WEBSITE", {
                        WEBSITE: g.ZA(b)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                S: [k2()]
            });
            this.api = a;
            this.j = null;
            this.u = !1;
            this.state = a.vb();
            a.zb(this.element, this, 76758);
            this.N(a, "videodatachange", this.hK);
            this.N(a, "videodatachange", this.onVideoDataChange);
            this.N(a, "presentingplayerstatechange", this.onStateChange);
            this.N(a, "appresize", this.ub);
            b = this.state;
            this.state !== b && (this.state =
                b);
            this.hK();
            this.onVideoDataChange();
            this.ub(a.Wa().getPlayerSize())
        },
        y2 = function(a) {
            g.EI.call(this, a);
            this.G = a;
            this.j = new g.Ry(this);
            g.J(this, this.j);
            this.load()
        },
        z2 = function(a, b) {
            a = {
                adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
                breakType: 0 === a.G.getCurrentTime() ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL" : 0 === a.G.getPlayerState() ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL" : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
                embedUrl: g.pea(a.G.R().loaderUrl),
                eventType: b,
                youtubeHost: g.fh(a.G.R().ma) || ""
            };
            g.Xq("embedsAdEvent", a)
        };
    g.w(l2, g.I);
    l2.prototype.start = function(a, b, c) {
        this.from = a;
        this.j = b;
        this.duration = c;
        this.startTime = (0, g.Q)();
        this.next()
    };
    l2.prototype.next = function() {
        var a = (0, g.Q)() - this.startTime;
        var b = this.u;
        a = AYa(b, a / this.duration);
        if (0 == a) b = b.J;
        else if (1 == a) b = b.P;
        else {
            var c = g.Ef(b.J, b.D, a),
                d = g.Ef(b.D, b.I, a);
            b = g.Ef(b.I, b.P, a);
            c = g.Ef(c, d, a);
            d = g.Ef(d, b, a);
            b = g.Ef(c, d, a)
        }
        b = g.zf(b, 0, 1);
        this.callback((this.j - this.from) * b + this.from);
        1 > b && this.delay.start()
    };
    g.w(n2, g.V);
    g.h = n2.prototype;
    g.h.hide = function() {
        this.I = !0;
        g.V.prototype.hide.call(this)
    };
    g.h.show = function() {
        this.I = !1;
        g.V.prototype.show.call(this)
    };
    g.h.isHidden = function() {
        return this.I
    };
    g.h.CU = function() {
        this.scrollTo(this.j - this.containerWidth)
    };
    g.h.DU = function() {
        this.scrollTo(this.j + this.containerWidth)
    };
    g.h.resize = function(a, b) {
        var c = this.api.R(),
            d = 16 / 9,
            e = 650 <= a.width,
            f = 480 > a.width || 290 > a.height,
            k = Math.min(this.suggestionData.length, this.u.length);
        if (150 >= Math.min(a.width, a.height) || 0 === k || !c.Hc) this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.B = 16
            } else this.B = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else n = 8, e = 18, p = 16, f = 36, c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            l = a / l - this.B;
            m = Math.floor(l / d);
            b && m + 100 > b && 50 < l && (m = Math.max(b, 50 / d), l = Math.ceil(a / (d * (m - 100) + this.B)), l = a / l - this.B,
                m = Math.floor(l / d));
            50 > l || g.lI(this.api) ? this.hide() : this.show();
            for (b = 0; b < k; b++) {
                d = this.u[b];
                var q = d.va("ytp-suggestion-image");
                q.style.width = l + "px";
                q.style.height = m + "px";
                d.va("ytp-suggestion-title").style.width = l + "px";
                d.va("ytp-suggestion-author").style.width = l + "px";
                d = d.va("ytp-suggestion-duration");
                d.style.display = d && 100 > l ? "none" : ""
            }
            k = e + n + p + 4;
            this.D = k + c + (m - f) / 2;
            this.suggestions.element.style.height = m + k + "px";
            this.tileWidth = l;
            this.containerWidth = a;
            this.j = 0;
            m2(this);
            this.suggestions.element.scrollLeft = -0;
            o2(this)
        }
    };
    g.h.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.R();
        this.J = a.D ? !1 : b.j;
        a.suggestions ? this.suggestionData = g.zl(a.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        BYa(this);
        a.D ? this.title.update({
            title: g.LE("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: a.author
            })
        }) : this.title.update({
            title: "More videos on YouTube"
        })
    };
    g.h.scrollTo = function(a) {
        a = g.zf(a, this.containerWidth - m2(this), 0);
        this.P.start(this.j, a, 1E3);
        this.j = a;
        o2(this)
    };
    g.w(p2, g.hJ);
    p2.prototype.show = function() {
        g.hJ.prototype.show.call(this);
        DYa(this, this.api.Wa().getPlayerSize())
    };
    p2.prototype.resize = function(a) {
        g.hJ.prototype.resize.call(this, a);
        this.j && (DYa(this, a), g.N(this.element, "related-on-error-overlay-visible", !this.j.isHidden()))
    };
    p2.prototype.u = function(a) {
        g.hJ.prototype.u.call(this, a);
        var b = this.api.getVideoData();
        if (b.iG || b.playerErrorMessageRenderer)(a = b.iG) ? EYa(this, a) : b.playerErrorMessageRenderer && EYa(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.Ak && (b.Lr ? q2(b.Lr) ? c = g.ov(b.Lr) : c = g.iJ(g.nv(b.Lr)) : c = g.iJ(a.Ak), this.Gd(c, "subreason"))
        }
    };
    g.w(r2, g.V);
    r2.prototype.dh = function() {
        this.api.vb().isCued() || (this.hide(), this.api.Va(this.element, !1))
    };
    r2.prototype.j = function() {
        var a = this.api.getVideoData(),
            b = this.api.R(),
            c = this.api.getVideoData().D,
            d = b.Kc,
            e = !b.Hc,
            f = this.u.gg(),
            k = b.isMusic();
        b = b.C;
        d || f || c || e || k || b || !a.videoId ? (this.hide(), this.api.Va(this.element, !1)) : (a = FYa(this), this.updateValue("url", a), this.show())
    };
    r2.prototype.onClick = function(a) {
        var b = FYa(this);
        g.dJ(b, this.api, a);
        this.api.qb(this.element)
    };
    r2.prototype.show = function() {
        this.api.vb().isCued() && (g.V.prototype.show.call(this), this.api.En(this.element) && this.api.Va(this.element, !0))
    };
    g.w(s2, g.V);
    s2.prototype.dh = function() {
        var a = this.api.vb();
        !this.api.Of() || g.U(a, 2) && g.iI(this.api) || g.U(a, 64) ? (this.api.Va(this.j, !1), this.api.Va(this.forwardButton, !1), this.hide()) : (this.show(), this.api.Va(this.j, !0), this.api.Va(this.forwardButton, !0))
    };
    s2.prototype.u = function() {
        this.api.seekBy(-10 * this.api.getPlaybackRate());
        this.api.qb(this.j)
    };
    s2.prototype.B = function() {
        this.api.seekBy(10 * this.api.getPlaybackRate());
        this.api.qb(this.forwardButton)
    };
    g.w(t2, g.V);
    t2.prototype.u = function() {
        var a = this.api.vb(),
            b = this.api.getVideoData();
        this.api.R().K("embeds_enable_muted_autoplay") && b.mutedAutoplay && (g.U(a, 2) && !this.kb ? (this.show(), this.j.show(), a = this.api.getVideoData(), this.updateValue("text", a.LL), g.N(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.Va(this.element, this.kb), this.api.Ia("onMutedAutoplayEnds")) : this.hide())
    };
    t2.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.SC(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.qb(this.element);
        this.hide()
    };
    g.w(u2, g.V);
    u2.prototype.j = function() {
        var a = this.api.vb(),
            b = this.api.getVideoData();
        this.api.R().K("embeds_enable_muted_autoplay") && b.mutedAutoplay && !g.U(a, 2) ? this.kb || (g.V.prototype.show.call(this), this.B.start(), this.api.Va(this.element, this.kb)) : this.hide()
    };
    u2.prototype.u = function() {
        g.N(this.element, "ytp-muted-autoplay-hide-watermark", !0)
    };
    u2.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.SC(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.qb(this.element)
    };
    g.w(v2, g.V);
    g.h = v2.prototype;
    g.h.hide = function() {
        g.un(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.V.prototype.hide.call(this)
    };
    g.h.rY = function() {
        this.D = !0;
        g.un(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.expandButton.focus()
    };
    g.h.sY = function() {
        this.D = !1;
        g.sn(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.focus()
    };
    g.h.EU = function() {
        this.scrollTo(this.u - this.containerWidth)
    };
    g.h.FU = function() {
        this.scrollTo(this.u + this.containerWidth)
    };
    g.h.Rn = function() {
        this.ub(this.api.Wa().getPlayerSize())
    };
    g.h.Uc = function(a) {
        if (!(g.U(a.state, 1) || g.U(a.state, 16) || g.U(a.state, 32))) {
            var b = !this.api.R().K("embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch") && g.U(a.state, 1024);
            !g.U(a.state, 4) || g.U(a.state, 2) || b ? this.C.hide() : this.suggestionData.length && (this.D || (g.sn(this.api.getRootNode(), "ytp-expand-pause-overlay"), w2(this)), this.C.show(), this.U = (0, g.Q)())
        }
    };
    g.h.ub = function(a) {
        var b = 16 / 9,
            c = this.I.Ff();
        a = a.width - (c ? 112 : 58);
        c = Math.ceil(a / (c ? 320 : 192));
        c = (a - 8 * c) / c;
        b = Math.floor(c / b);
        for (var d = 0; d < this.B.length; d++) {
            var e = this.B[d].va("ytp-suggestion-image");
            e.style.width = c + "px";
            e.style.height = b + "px"
        }
        this.suggestions.element.style.height = b + "px";
        this.tileWidth = c;
        this.tileHeight = b;
        this.containerWidth = a;
        this.u = 0;
        this.suggestions.element.scrollLeft = -0;
        w2(this)
    };
    g.h.onVideoDataChange = function() {
        var a = this.api.R(),
            b = this.api.getVideoData();
        this.J = b.D ? !1 : a.j;
        b.suggestions ? this.suggestionData = g.zl(b.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        GYa(this);
        b.D ? this.title.update({
            title: g.LE("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: b.author
            })
        }) : this.title.update({
            title: "More videos"
        })
    };
    g.h.scrollTo = function(a) {
        a = g.zf(a, this.containerWidth - this.suggestionData.length * (this.tileWidth + 8), 0);
        this.P.start(this.u, a, 1E3);
        this.u = a;
        w2(this)
    };
    g.w(x2, g.V);
    g.h = x2.prototype;
    g.h.hK = function() {
        var a = this.api.getVideoData(),
            b = this.api.getVideoData(1).D,
            c = this.api.R();
        a = (a.mutedAutoplay || c.Kc && !g.U(this.state, 2)) && !(b && c.pfpChazalUi);
        g.aG(this, a);
        this.api.Va(this.element, a)
    };
    g.h.onStateChange = function(a) {
        a = a.state;
        this.state !== a && (this.state = a);
        this.hK()
    };
    g.h.onVideoDataChange = function() {
        if (this.api.getVideoData().videoId) {
            var a = this.api.getVideoUrl(!0, !1, !1, !0);
            this.updateValue("url", a);
            this.j || (this.j = this.Ja("click", this.onClick))
        } else this.j && (this.updateValue("url", null), this.qc(this.j), this.j = null)
    };
    g.h.onClick = function(a) {
        var b = this.api.getVideoUrl(!g.aH(a), !1, !0, !0);
        g.dJ(b, this.api, a);
        this.api.qb(this.element)
    };
    g.h.ub = function(a) {
        if ((a = 480 > a.width) && !this.u || !a && this.u) {
            var b = new g.V(k2()),
                c = this.va("ytp-watermark");
            g.N(c, "ytp-watermark-small", a);
            g.fg(c);
            b.ra(c);
            this.u = a
        }
    };
    g.w(y2, g.EI);
    g.h = y2.prototype;
    g.h.jj = function() {
        return !1
    };
    g.h.create = function() {
        var a = this.G.R(),
            b = g.eI(this.G),
            c, d = null == (c = this.G.getVideoData()) ? void 0 : c.clientPlaybackNonce;
        d && g.Pv("cpn", d);
        !a.Hc || a.C || b.vy() || (this.I = new v2(this.G, b), g.J(this, this.I), g.oI(this.G, this.I.element, 4));
        a.K("embeds_enable_muted_autoplay") && (this.u = new u2(this.G), g.J(this, this.u), g.oI(this.G, this.u.element, 4), this.D = new t2(this.G), g.J(this, this.D), g.oI(this.G, this.D.element, 4));
        if (a.Kc || this.u) this.watermark = new x2(this.G), g.J(this, this.watermark), g.oI(this.G, this.watermark.element,
            8);
        this.B = new r2(this.G, b);
        g.J(this, this.B);
        g.oI(this.G, this.B.element, 8);
        a.isMobile && (this.C = new s2(this.G), g.J(this, this.C), g.oI(this.G, this.C.element, 4));
        this.j.N(this.G, "appresize", this.ub);
        this.j.N(this.G, "presentingplayerstatechange", this.dh);
        this.j.N(this.G, "videodatachange", this.t1);
        this.j.N(this.G, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        this.j.N(this.G, "onAdStart", this.onAdStart);
        this.j.N(this.G, "onAdComplete", this.onAdComplete);
        this.j.N(this.G, "onAdSkip", this.onAdSkip);
        this.j.N(this.G,
            "onAdStateChange", this.onAdStateChange);
        this.Pb(this.G.vb());
        this.player.cf("embed")
    };
    g.h.ub = function() {
        var a = this.G.Wa().getPlayerSize();
        this.jf && this.jf.resize(a)
    };
    g.h.dh = function(a) {
        this.Pb(a.state)
    };
    g.h.Pb = function(a) {
        g.U(a, 128) ? (this.jf || (this.jf = new p2(this.G), g.J(this, this.jf), g.oI(this.G, this.jf.element, 4)), this.jf.u(a.getData()), this.jf.show(), g.sn(this.G.getRootNode(), "ytp-embed-error")) : this.jf && (this.jf.dispose(), this.jf = null, g.un(this.G.getRootNode(), "ytp-embed-error"))
    };
    g.h.onMutedAutoplayStarts = function() {
        this.G.getVideoData().mutedAutoplay && this.u && this.watermark && this.watermark.ra(this.u.bottomButtons, 0)
    };
    g.h.t1 = function() {
        var a = this.G.getVideoData();
        this.watermark && this.u && !a.mutedAutoplay && g.jg(this.u.element, this.watermark.element) && g.oI(this.G, this.watermark.element, 8)
    };
    g.h.onAdStart = function() {
        z2(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED")
    };
    g.h.onAdComplete = function() {
        z2(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")
    };
    g.h.onAdSkip = function() {
        z2(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")
    };
    g.h.onAdStateChange = function(a) {
        2 === a && z2(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED")
    };
    g.DI("embed", y2);
})(_yt_player);