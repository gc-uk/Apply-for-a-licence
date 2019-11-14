/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


"use strict";
! function(l) {
    var h = l.jQuery,
        t = l.GOVUK || {},
        o = "default",
        n = function(t, e, i) {
            var s = t.$fixedEl,
                o = s.closest(".sticky-scroll-area");
            o = o.length ? o : s.parent(), this._els = [t], this.edge = e, this.selector = i, this.node = o.get(0), this.setEvents()
        };
    n.prototype.addEl = function(t) {
        this._els.push(t)
    }, n.prototype.hasEl = function(t) {
        return -1 !== h.inArray(t, this._els)
    }, n.prototype.updateEls = function(t) {
        this._els = t
    }, n.prototype.setEvents = function() {
        this.node.addEventListener("focus", this.focusHandler.bind(this), !0), h(this.node).on("keyup", "textarea", this.focusHandler.bind(this))
    }, n.prototype.removeEvents = function() {
        this.node.removeEventListener("focus", this.focusHandler.bind(this)), h(this.node).find("textarea").off("keyup", "textarea", this.focusHandler.bind(this))
    }, n.prototype.getFocusedDetails = {
        forElement: function(t) {
            var e = {
                top: t.offset().top,
                height: t.outerHeight(),
                type: "element"
            };
            return e.bottom = e.top + e.height, e
        },
        forCaret: function(t) {
            var e = t.target,
                i = window.getCaretCoordinates(e, e.selectionEnd),
                s = {
                    top: h(e).offset().top + i.top,
                    height: i.height,
                    type: "caret"
                };
            return s.bottom = s.top + s.height, s
        }
    }, n.prototype.focusHandler = function(t) {
        var e, i, s = h(document.activeElement),
            o = s.get(0).nodeName.toLowerCase(),
            n = c.endOfFurthestEl(this._els, this.edge),
            r = function() {
                return 0 < s.closest(this.selector).length
            }.bind(this);
        if ("textarea" === o) e = this.getFocusedDetails.forCaret(t);
        else {
            if (r()) return;
            e = this.getFocusedDetails.forElement(s)
        }
        0 < (i = c.getOverlap(e, this.edge, n)) && c.adjustForOverlap(e, this.edge, i)
    }, n.prototype.destroy = function() {
        this.removeEvents()
    };
    var a = {
            _scrollAreas: [],
            getAreaForEl: function(t) {
                for (var e = this._scrollAreas.length; e--;)
                    if (this._scrollAreas[e].hasEl(t)) return this._scrollAreas[e];
                return !1
            },
            getAreaByEl: function(e) {
                return h.grep(this._scrollAreas, function(t) {
                    return -1 !== h.inArray(e, t.els)
                })[0] || !1
            },
            addEl: function(t, e, i) {
                var s = this.getAreaForEl(t);
                s ? s.addEl(t) : this._scrollAreas.push(new n(t, e, i))
            },
            syncEls: function(o) {
                var i = this,
                    s = [];
                h.each(this._scrollAreas, function(t, e) {
                    var i = function(i) {
                        var s = [];
                        return h.each(o, function(t, e) {
                            i.hasEl(e) && s.push(e)
                        }), s
                    }(e);
                    i.length || s.push(t), e.updateEls(i)
                }), h.each(s, function(t, e) {
                    i._scrollAreas[e].destroy(), i._scrollAreas.splice(e, 1)
                })
            }
        },
        c = {
            getOverlap: function(t, e, i) {
                return i ? "top" === e ? i - t.top : t.bottom - i : 0
            },
            endOfFurthestEl: function(t, e) {
                var i, s = h.grep(t, function(t) {
                    return t.isStuck()
                });
                return i = "bottom" === e ? function(t) {
                    return t.$fixedEl.offset().top
                } : function(t) {
                    return t.$fixedEl.offset().top + t.height
                }, !!s.length && h.map(s, function(t) {
                    return i(t)
                }).reduce(function(t, e) {
                    return t < e ? e : t
                })
            },
            adjustForOverlap: function(t, e, i) {
                var s = h(window).scrollTop();
                "top" === e ? h(window).scrollTop(s - i) : h(window).scrollTop(s + i)
            }
        },
        e = {
            _classes: {
                top: "content-fixed__top",
                bottom: "content-fixed__bottom"
            },
            _getClassForEdge: function(t) {
                return this._classes[t]
            },
            mark: function(t) {
                var e, i = this._getClassForEdge(t.edge);
                e = "dialog" === o ? [r.getElementAtOppositeEnd(t)] : t._els, e = h.grep(e, function(t) {
                    return t.isStuck()
                }), h.each(e, function(t, e) {
                    e.$fixedEl.addClass(i)
                })
            },
            unmark: function(t) {
                var i = this._getClassForEdge(t.edge);
                h.each(t._els, function(t, e) {
                    e.$fixedEl.removeClass(i)
                })
            }
        },
        d = function(t, e) {
            this._sticky = e, this.$fixedEl = t, this._initialFixedClass = "content-fixed-onload", this._fixedClass = "content-fixed", this._appliedClass = null, this._$shim = null, this._stopped = !1, this._hasLoaded = !1, this._canBeStuck = !0, this.verticalMargins = {
                top: parseInt(this.$fixedEl.css("margin-top"), 10),
                bottom: parseInt(this.$fixedEl.css("margin-bottom"), 10)
            }
        };
    d.prototype._getShimCSS = function() {
        return {
            width: this.horizontalSpace + "px",
            height: this.height + "px",
            "margin-top": this.verticalMargins.top + "px",
            "margin-bottom": this.verticalMargins.bottom + "px"
        }
    }, d.prototype.stickyClass = function() {
        return this._sticky._initialPositionsSet ? this._fixedClass : this._initialFixedClass
    }, d.prototype.appliedClass = function() {
        return this._appliedClass
    }, d.prototype.removeStickyClasses = function(t) {
        this.$fixedEl.removeClass([this._initialFixedClass, this._fixedClass].join(" "))
    }, d.prototype.isStuck = function() {
        return null !== this._appliedClass
    }, d.prototype.stick = function(t) {
        this._appliedClass = this.stickyClass(), this.$fixedEl.addClass(this._appliedClass), this._hasBeenCalled = !0
    }, d.prototype.release = function(t) {
        this._appliedClass = null, this.removeStickyClasses(t), this._hasBeenCalled = !0
    }, d.prototype.addShim = function(t) {
        this._$shim = h('<div class="shim">&nbsp</div>'), this._$shim.css(this._getShimCSS()), this.$fixedEl[t](this._$shim)
    }, d.prototype.removeShim = function() {
        null !== this._$shim && (this._$shim.remove(), this._$shim = null)
    }, d.prototype.updateShim = function() {
        this._$shim && this._$shim.css(this._getShimCSS())
    }, d.prototype.stop = function() {
        this._stopped = !0
    }, d.prototype.unstop = function() {
        this._stopped = !1
    }, d.prototype.isStopped = function() {
        return this._stopped
    }, d.prototype.isInPage = function() {
        var t = this.$fixedEl.get(0);
        return t !== document.body && document.body.contains(t)
    }, d.prototype.canBeStuck = function(t) {
        if (void 0 === t) return this._canBeStuck;
        this._canBeStuck = t
    };
    var r = {
            hasResized: !(d.prototype.hasLoaded = function(t) {
                if (void 0 === t) return this._hasLoaded;
                this._hasLoaded = t
            }),
            spaceBetweenStickys: 40,
            _getPaddingBetweenEls: function(t) {
                return t.length <= 1 ? 0 : (t.length - 1) * this.spaceBetweenStickys
            },
            _getTotalHeight: function(t) {
                return h.map(t, function(t) {
                    return t.height
                }).reduce(function(t, e) {
                    return t + e
                }) - this._getPaddingBetweenEls(t)
            },
            _elsThatCanBeStuck: function(t) {
                return h.grep(t, function(t) {
                    return t.canBeStuck()
                })
            },
            getOffsetFromEdge: function(t, e) {
                var i, s = this._elsThatCanBeStuck(e._els).slice();
                return "top" === e.edge && s.reverse(), (i = s.indexOf(t)) === s.length - 1 ? 0 : (s = s.slice(i + 1), this._getTotalHeight(s) - this.spaceBetweenStickys)
            },
            getOffsetFromEnd: function(t, e) {
                var i, s = this._elsThatCanBeStuck(e._els).slice();
                return "bottom" === e.edge && s.reverse(), (i = s.indexOf(t)) === s.length - 1 ? 0 : (s = s.slice(i + 1), this._getTotalHeight(s) - this.spaceBetweenStickys)
            },
            fitToHeight: function(t) {
                var e = this,
                    i = t._els.slice(),
                    s = t.getWindowDimensions().height,
                    o = function() {
                        return e._getTotalHeight(e._elsThatCanBeStuck(i)) <= s
                    };
                for ("top" === t.edge && i.reverse(), h.each(i, function(t, e) {
                        e.canBeStuck(!0)
                    }); e._elsThatCanBeStuck(i).length && !o();) {
                    var n = e._elsThatCanBeStuck(i)[0];
                    t.reset(n), n.canBeStuck(!1), e.hasResized || (e.hasResized = !0)
                }
            },
            getElementAtStickyEdge: function(t) {
                var e = this._elsThatCanBeStuck(t._els);
                return e["top" === t.edge ? 0 : e.length - 1]
            },
            getElementAtOppositeEnd: function(t) {
                var e = this._elsThatCanBeStuck(t._els);
                return e["top" === t.edge ? e.length - 1 : 0]
            },
            getInPageEdgePosition: function(t) {
                return this.getElementAtStickyEdge(t).inPageEdgePosition
            },
            getHeight: function(t) {
                return this._getTotalHeight(this._elsThatCanBeStuck(t))
            },
            adjustForResize: function(t) {
                var e = t.getWindowDimensions().height;
                "top" === t.edge ? h(window).scrollTop(this.getInPageEdgePosition(t)) : h(window).scrollTop(this.getInPageEdgePosition(t) - e), this.hasResized = !1
            },
            releaseEl: function(t, e) {
                t.$fixedEl.css(e.edge, "")
            }
        },
        i = function(t) {
            this._hasScrolled = !1, this._scrollTimeout = !1, this._windowHasResized = !1, this._resizeTimeout = !1, this._elsLoaded = !1, this._initialPositionsSet = !1, this._els = [], this.CSS_SELECTOR = t, this.STOP_PADDING = 10
        };
    i.prototype.setMode = function(t) {
        o = t
    }, i.prototype.getWindowDimensions = function() {
        return {
            height: h(l).height(),
            width: h(l).width()
        }
    }, i.prototype.getWindowPositions = function() {
        return {
            scrollTop: h(l).scrollTop()
        }
    }, i.prototype.setElementPositions = function() {
        var i = this,
            s = i.getWindowDimensions(),
            t = i.getWindowPositions().scrollTop,
            o = {
                top: t,
                bottom: t + s.height
            };
        e.unmark(i), h.each(i._els, function(t, e) {
            e.canBeStuck() && function(t) {
                i.viewportIsWideEnough(s.width) ? i.windowNotPastScrolledFrom(o, i.getScrolledFrom(t)) ? i.reset(t) : i.windowNotPastScrollingTo(o, i.getScrollingTo(t)) ? (i.stick(t), t.isStopped() && i.unstop(t)) : (t.isStuck() || i.stick(t), i.stop(t)) : i.reset(t)
            }(e)
        }), e.mark(i), !1 === i._initialPositionsSet && (i._initialPositionsSet = !0)
    }, i.prototype.setElementDimensions = function(t, e) {
        t.$fixedEl;
        this.setElWidth(t), this.setElHeight(t, function() {
            t._$shim && t.updateShim(), void 0 !== e && e()
        })
    }, i.prototype.reset = function(t) {
        t.isStopped() && this.unstop(t), t.isStuck() && this.release(t)
    }, i.prototype.recalculate = function() {
        var t = this;
        this.syncWithDOM(function() {
            a.syncEls(t._els), t.setEvents(), "dialog" === o && (r.fitToHeight(t), r.hasResized && r.adjustForResize(t)), t.setElementPositions()
        })
    }, i.prototype.setElWidth = function(t) {
        var e = t.$fixedEl,
            i = a.getAreaByEl(t),
            s = h(i.node).width();
        t.horizontalSpace = s, t._$shim && e.width(s)
    }, i.prototype.setElHeight = function(t, e) {
        var i = this,
            s = t.$fixedEl,
            o = s.find("img"),
            n = function() {
                t.height = s.outerHeight(), t._$shim ? t.inPageEdgePosition = i.getInPageEdgePosition(t._$shim) : t.inPageEdgePosition = i.getInPageEdgePosition(s), e()
            };
        if (!t.hasLoaded() && 0 < o.length) {
            var r = new l.Image;
            r.onload = function() {
                n()
            }, r.src = o.attr("src")
        } else n()
    }, i.prototype.allElementsLoaded = function(t) {
        return this._els.length === t
    }, i.prototype.getElForNode = function(e) {
        var t = h.grep(this._els, function(t) {
            return t.$fixedEl.is(e)
        });
        return !!t.length && t[0]
    }, i.prototype.add = function(t, e, i) {
        var s, o = this,
            n = h(t),
            r = this.getElForNode(t),
            l = !!r;
        s = function() {
            r.hasLoaded(!0), l || o._els.push(r), e && o.setElementPositions(), void 0 !== i && i()
        }, l || (r = new d(n, o), a.addEl(r, o.edge, o.CSS_SELECTOR)), o.setElementDimensions(r, s)
    }, i.prototype.remove = function(e) {
        -1 !== h.inArray(e, this._els) && (this.reset(e), this._els = h.grep(this._els, function(t) {
            return t !== e
        }))
    }, i.prototype.syncWithDOM = function(t) {
        var i, s = this,
            e = h(s.CSS_SELECTOR),
            o = e.length;
        i = function() {
            s._els.length === o && (s.endOfScrollArea = s.getEndOfScrollArea(), void 0 !== t && t())
        }, this._els.length && h.each(this._els, function(t, e) {
            e.isInPage() || s.remove(e)
        }), o && (this._initialPositionsSet = !1, e.each(function(t, e) {
            s.add(e, !1, i)
        }))
    }, i.prototype.init = function() {
        this.recalculate()
    }, i.prototype.setEvents = function() {
        this._scrollEvent = this.onScroll.bind(this), this._resizeEvent = this.onResize.bind(this), !1 === this._scrollTimeout && (h(l).scroll(this._scrollEvent), this._scrollTimeout = l.setInterval(this.checkScroll.bind(this), 50)), !1 === this._resizeTimeout && (h(l).resize(this._resizeEvent), this._resizeTimeout = l.setInterval(this.checkResize.bind(this), 50))
    }, i.prototype.clearEvents = function() {
        !1 !== this._scrollTimeout && (h(l).off("scroll", this._scrollEvent), l.clearInterval(this._scrollTimeout), this._scrollTimeout = !1), !1 !== this._resizeTimeout && (h(l).off("resize", this._resizeEvent), l.clearInterval(this._resizeTimeout), this._resizeTimeout = !1)
    }, i.prototype.viewportIsWideEnough = function(t) {
        return 768 < t
    }, i.prototype.onScroll = function() {
        this._hasScrolled = !0
    }, i.prototype.onResize = function() {
        this._windowHasResized = !0
    }, i.prototype.checkScroll = function() {
        !0 === this._hasScrolled && (this._hasScrolled = !1, this.setElementPositions())
    }, i.prototype.checkResize = function() {
        var i = this,
            s = i.getWindowDimensions().width;
        !0 === i._windowHasResized && (i._windowHasResized = !1, h.each(i._els, function(t, e) {
            i.viewportIsWideEnough(s) ? i.setElementDimensions(e) : i.reset(e)
        }), i.viewportIsWideEnough(s) && ("dialog" === o && (r.fitToHeight(i), r.hasResized && r.adjustForResize(i)), i.setElementPositions()))
    }, i.prototype.release = function(t) {
        if (t.isStuck()) {
            var e = t.$fixedEl;
            t.removeStickyClasses(this), e.css("width", ""), r.releaseEl(t, this), t.removeShim(), t.release(this)
        }
    };
    var s = new i(".js-stick-at-top-when-scrolling");
    s.edge = "top", s.getEndOfScrollArea = function() {
        var t = h(".js-footer:eq(0)");
        return 0 === t.length ? 0 : t.offset().top - this.STOP_PADDING
    }, s.getInPageEdgePosition = function(t) {
        return t.offset().top
    }, s.getScrolledFrom = function(t) {
        return "dialog" === o ? r.getInPageEdgePosition(this) : t.inPageEdgePosition
    }, s.getScrollingTo = function(t) {
        var e = t.height;
        return "dialog" === o && (e = r.getHeight(this._els)), this.endOfScrollArea - e
    }, s.getStoppingPosition = function(t) {
        var e = 0;
        return "dialog" === o && (e = r.getOffsetFromEnd(t, this)), this.endOfScrollArea - e - t.height
    }, s.windowNotPastScrolledFrom = function(t, e) {
        return e > t.top
    }, s.windowNotPastScrollingTo = function(t, e) {
        return t.top < e
    }, s.stick = function(t) {
        if (!t.isStuck()) {
            var e = t.$fixedEl,
                i = 0;
            "dialog" === o && (i = r.getOffsetFromEdge(t, this)), t.addShim("before"), e.css({
                width: e.width() + "px",
                top: i + "px"
            }), t.stick(this)
        }
    }, s.stop = function(t) {
        t.isStopped() || (t.$fixedEl.css({
            position: "absolute",
            top: this.getStoppingPosition(t)
        }), t.stop())
    }, s.unstop = function(t) {
        var e = 0;
        "dialog" === o && (e = r.getOffsetFromEdge(t, this)), t.$fixedEl.css({
            position: "",
            top: e + "px"
        }), t.unstop()
    };
    var u = new i(".js-stick-at-bottom-when-scrolling");
    u.edge = "bottom", u.getEndOfScrollArea = function() {
        var t = h(".js-header:eq(0)");
        return 0 === t.length ? 0 : t.offset().top + t.outerHeight() + this.STOP_PADDING
    }, u.getInPageEdgePosition = function(t) {
        return t.offset().top + t.outerHeight()
    }, u.getScrolledFrom = function(t) {
        return "dialog" === o ? r.getInPageEdgePosition(this) : t.inPageEdgePosition
    }, u.getScrollingTo = function(t) {
        var e = t.height;
        return "dialog" === o && (e = r.getHeight(this._els)), this.endOfScrollArea + e
    }, u.getStoppingPosition = function(t) {
        var e = 0;
        return "dialog" === o && (e = r.getOffsetFromEnd(t, this)), this.endOfScrollArea + e
    }, u.windowNotPastScrolledFrom = function(t, e) {
        return e < t.bottom
    }, u.windowNotPastScrollingTo = function(t, e) {
        return t.bottom > e
    }, u.stick = function(t) {
        if (!t.isStuck()) {
            var e = t.$fixedEl,
                i = 0;
            "dialog" === o && (i = r.getOffsetFromEdge(t, this)), t.addShim("after"), e.css({
                width: e.width() + "px",
                bottom: i + "px"
            }), t.stick(this)
        }
    }, u.stop = function(t) {
        t.isStopped() || (t.$fixedEl.css({
            position: "absolute",
            top: this.getStoppingPosition(t),
            bottom: "auto"
        }), t.stop())
    }, u.unstop = function(t) {
        var e = 0;
        "dialog" === o && (e = r.getOffsetFromEdge(t, this)), t.$fixedEl.css({
            position: "",
            top: "",
            bottom: e + "px"
        }), t.unstop()
    }, t.stickAtTopWhenScrolling = s, t.stickAtBottomWhenScrolling = u, l.GOVUK = t
}(window);