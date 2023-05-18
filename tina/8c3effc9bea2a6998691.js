/*! For license information please see 8c3effc9bea2a6998691.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [515], {
    751: (t, e, i) => {
      i.d(e, {
        e: () => W
      });
      var s, o = i(822),
        r = i(468),
        n = (s = function(t, e) {
          return s = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(t, e) {
            t.__proto__ = e
          } || function(t, e) {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
          }, s(t, e)
        }, function(t, e) {
          function i() {
            this.constructor = t
          }
          s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        h = function() {
          return h = Object.assign || function(t) {
            for (var e, i = 1, s = arguments.length; i < s; i++)
              for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
          }, h.apply(this, arguments)
        },
        a = {
          width: "100%",
          height: "10px",
          top: "0px",
          left: "0px",
          cursor: "row-resize"
        },
        p = {
          width: "10px",
          height: "100%",
          top: "0px",
          left: "0px",
          cursor: "col-resize"
        },
        l = {
          width: "20px",
          height: "20px",
          position: "absolute"
        },
        d = {
          top: h(h({}, a), {
            top: "-5px"
          }),
          right: h(h({}, p), {
            left: void 0,
            right: "-5px"
          }),
          bottom: h(h({}, a), {
            top: void 0,
            bottom: "-5px"
          }),
          left: h(h({}, p), {
            left: "-5px"
          }),
          topRight: h(h({}, l), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize"
          }),
          bottomRight: h(h({}, l), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize"
          }),
          bottomLeft: h(h({}, l), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize"
          }),
          topLeft: h(h({}, l), {
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize"
          })
        },
        u = function(t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.onMouseDown = function(t) {
              e.props.onResizeStart(t, e.props.direction)
            }, e.onTouchStart = function(t) {
              e.props.onResizeStart(t, e.props.direction)
            }, e
          }
          return n(e, t), e.prototype.render = function() {
            return o.createElement("div", {
              className: this.props.className || "",
              style: h(h({
                position: "absolute",
                userSelect: "none"
              }, d[this.props.direction]), this.props.replaceStyles || {}),
              onMouseDown: this.onMouseDown,
              onTouchStart: this.onTouchStart
            }, this.props.children)
          }, e
        }(o.PureComponent),
        c = function() {
          var t = function(e, i) {
            return t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function(t, e) {
              t.__proto__ = e
            } || function(t, e) {
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }, t(e, i)
          };
          return function(e, i) {
            function s() {
              this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s)
          }
        }(),
        f = function() {
          return f = Object.assign || function(t) {
            for (var e, i = 1, s = arguments.length; i < s; i++)
              for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
          }, f.apply(this, arguments)
        },
        g = {
          width: "auto",
          height: "auto"
        },
        w = function(t, e, i) {
          return Math.max(Math.min(t, i), e)
        },
        v = function(t, e) {
          return Math.round(t / e) * e
        },
        b = function(t, e) {
          return new RegExp(t, "i").test(e)
        },
        z = function(t) {
          return Boolean(t.touches && t.touches.length)
        },
        m = function(t, e, i) {
          void 0 === i && (i = 0);
          var s = e.reduce((function(i, s, o) {
              return Math.abs(s - t) < Math.abs(e[i] - t) ? o : i
            }), 0),
            o = Math.abs(e[s] - t);
          return 0 === i || o < i ? e[s] : t
        },
        y = function(t) {
          return "auto" === (t = t.toString()) || t.endsWith("px") || t.endsWith("%") || t.endsWith("vh") || t.endsWith("vw") || t.endsWith("vmax") || t.endsWith("vmin") ? t : t + "px"
        },
        x = function(t, e, i, s) {
          if (t && "string" == typeof t) {
            if (t.endsWith("px")) return Number(t.replace("px", ""));
            if (t.endsWith("%")) return e * (Number(t.replace("%", "")) / 100);
            if (t.endsWith("vw")) return i * (Number(t.replace("vw", "")) / 100);
            if (t.endsWith("vh")) return s * (Number(t.replace("vh", "")) / 100)
          }
          return t
        },
        S = ["as", "style", "className", "grid", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
        R = "__resizable_base__",
        W = function(t) {
          function e(e) {
            var i = t.call(this, e) || this;
            return i.ratio = 1, i.resizable = null, i.parentLeft = 0, i.parentTop = 0, i.resizableLeft = 0, i.resizableRight = 0, i.resizableTop = 0, i.resizableBottom = 0, i.targetLeft = 0, i.targetTop = 0, i.appendBase = function() {
              if (!i.resizable || !i.window) return null;
              var t = i.parentNode;
              if (!t) return null;
              var e = i.window.document.createElement("div");
              return e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.transform = "scale(0, 0)", e.style.left = "0", e.style.flex = "0 0 100%", e.classList ? e.classList.add(R) : e.className += R, t.appendChild(e), e
            }, i.removeBase = function(t) {
              var e = i.parentNode;
              e && e.removeChild(t)
            }, i.ref = function(t) {
              t && (i.resizable = t)
            }, i.state = {
              isResizing: !1,
              width: void 0 === (i.propsSize && i.propsSize.width) ? "auto" : i.propsSize && i.propsSize.width,
              height: void 0 === (i.propsSize && i.propsSize.height) ? "auto" : i.propsSize && i.propsSize.height,
              direction: "right",
              original: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              },
              backgroundStyle: {
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0)",
                cursor: "auto",
                opacity: 0,
                position: "fixed",
                zIndex: 9999,
                top: "0",
                left: "0",
                bottom: "0",
                right: "0"
              },
              flexBasis: void 0
            }, i.onResizeStart = i.onResizeStart.bind(i), i.onMouseMove = i.onMouseMove.bind(i), i.onMouseUp = i.onMouseUp.bind(i), i
          }
          return c(e, t), Object.defineProperty(e.prototype, "parentNode", {
            get: function() {
              return this.resizable ? this.resizable.parentNode : null
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "window", {
            get: function() {
              return this.resizable && this.resizable.ownerDocument ? this.resizable.ownerDocument.defaultView : null
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "propsSize", {
            get: function() {
              return this.props.size || this.props.defaultSize || g
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "size", {
            get: function() {
              var t = 0,
                e = 0;
              if (this.resizable && this.window) {
                var i = this.resizable.offsetWidth,
                  s = this.resizable.offsetHeight,
                  o = this.resizable.style.position;
                "relative" !== o && (this.resizable.style.position = "relative"), t = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : i, e = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : s, this.resizable.style.position = o
              }
              return {
                width: t,
                height: e
              }
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "sizeStyle", {
            get: function() {
              var t = this,
                e = this.props.size,
                i = function(e) {
                  if (void 0 === t.state[e] || "auto" === t.state[e]) return "auto";
                  if (t.propsSize && t.propsSize[e] && t.propsSize[e].toString().endsWith("%")) {
                    if (t.state[e].toString().endsWith("%")) return t.state[e].toString();
                    var i = t.getParentSize();
                    return Number(t.state[e].toString().replace("px", "")) / i[e] * 100 + "%"
                  }
                  return y(t.state[e])
                };
              return {
                width: e && void 0 !== e.width && !this.state.isResizing ? y(e.width) : i("width"),
                height: e && void 0 !== e.height && !this.state.isResizing ? y(e.height) : i("height")
              }
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.getParentSize = function() {
            if (!this.parentNode) return this.window ? {
              width: this.window.innerWidth,
              height: this.window.innerHeight
            } : {
              width: 0,
              height: 0
            };
            var t = this.appendBase();
            if (!t) return {
              width: 0,
              height: 0
            };
            var e = !1,
              i = this.parentNode.style.flexWrap;
            "wrap" !== i && (e = !0, this.parentNode.style.flexWrap = "wrap"), t.style.position = "relative", t.style.minWidth = "100%", t.style.minHeight = "100%";
            var s = {
              width: t.offsetWidth,
              height: t.offsetHeight
            };
            return e && (this.parentNode.style.flexWrap = i), this.removeBase(t), s
          }, e.prototype.bindEvents = function() {
            this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
              capture: !0,
              passive: !1
            }), this.window.addEventListener("touchend", this.onMouseUp))
          }, e.prototype.unbindEvents = function() {
            this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp))
          }, e.prototype.componentDidMount = function() {
            if (this.resizable && this.window) {
              var t = this.window.getComputedStyle(this.resizable);
              this.setState({
                width: this.state.width || this.size.width,
                height: this.state.height || this.size.height,
                flexBasis: "auto" !== t.flexBasis ? t.flexBasis : void 0
              })
            }
          }, e.prototype.componentWillUnmount = function() {
            this.window && this.unbindEvents()
          }, e.prototype.createSizeForCssProperty = function(t, e) {
            var i = this.propsSize && this.propsSize[e];
            return "auto" !== this.state[e] || this.state.original[e] !== t || void 0 !== i && "auto" !== i ? t : "auto"
          }, e.prototype.calculateNewMaxFromBoundary = function(t, e) {
            var i, s, o = this.props.boundsByDirection,
              r = this.state.direction,
              n = o && b("left", r),
              h = o && b("top", r);
            if ("parent" === this.props.bounds) {
              var a = this.parentNode;
              a && (i = n ? this.resizableRight - this.parentLeft : a.offsetWidth + (this.parentLeft - this.resizableLeft), s = h ? this.resizableBottom - this.parentTop : a.offsetHeight + (this.parentTop - this.resizableTop))
            } else "window" === this.props.bounds ? this.window && (i = n ? this.resizableRight : this.window.innerWidth - this.resizableLeft, s = h ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = n ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), s = h ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
            return i && Number.isFinite(i) && (t = t && t < i ? t : i), s && Number.isFinite(s) && (e = e && e < s ? e : s), {
              maxWidth: t,
              maxHeight: e
            }
          }, e.prototype.calculateNewSizeFromDirection = function(t, e) {
            var i = this.props.scale || 1,
              s = this.props.resizeRatio || 1,
              o = this.state,
              r = o.direction,
              n = o.original,
              h = this.props,
              a = h.lockAspectRatio,
              p = h.lockAspectRatioExtraHeight,
              l = h.lockAspectRatioExtraWidth,
              d = n.width,
              u = n.height,
              c = p || 0,
              f = l || 0;
            return b("right", r) && (d = n.width + (t - n.x) * s / i, a && (u = (d - f) / this.ratio + c)), b("left", r) && (d = n.width - (t - n.x) * s / i, a && (u = (d - f) / this.ratio + c)), b("bottom", r) && (u = n.height + (e - n.y) * s / i, a && (d = (u - c) * this.ratio + f)), b("top", r) && (u = n.height - (e - n.y) * s / i, a && (d = (u - c) * this.ratio + f)), {
              newWidth: d,
              newHeight: u
            }
          }, e.prototype.calculateNewSizeFromAspectRatio = function(t, e, i, s) {
            var o = this.props,
              r = o.lockAspectRatio,
              n = o.lockAspectRatioExtraHeight,
              h = o.lockAspectRatioExtraWidth,
              a = void 0 === s.width ? 10 : s.width,
              p = void 0 === i.width || i.width < 0 ? t : i.width,
              l = void 0 === s.height ? 10 : s.height,
              d = void 0 === i.height || i.height < 0 ? e : i.height,
              u = n || 0,
              c = h || 0;
            if (r) {
              var f = (l - u) * this.ratio + c,
                g = (d - u) * this.ratio + c,
                v = (a - c) / this.ratio + u,
                b = (p - c) / this.ratio + u,
                z = Math.max(a, f),
                m = Math.min(p, g),
                y = Math.max(l, v),
                x = Math.min(d, b);
              t = w(t, z, m), e = w(e, y, x)
            } else t = w(t, a, p), e = w(e, l, d);
            return {
              newWidth: t,
              newHeight: e
            }
          }, e.prototype.setBoundingClientRect = function() {
            if ("parent" === this.props.bounds) {
              var t = this.parentNode;
              if (t) {
                var e = t.getBoundingClientRect();
                this.parentLeft = e.left, this.parentTop = e.top
              }
            }
            if (this.props.bounds && "string" != typeof this.props.bounds) {
              var i = this.props.bounds.getBoundingClientRect();
              this.targetLeft = i.left, this.targetTop = i.top
            }
            if (this.resizable) {
              var s = this.resizable.getBoundingClientRect(),
                o = s.left,
                r = s.top,
                n = s.right,
                h = s.bottom;
              this.resizableLeft = o, this.resizableRight = n, this.resizableTop = r, this.resizableBottom = h
            }
          }, e.prototype.onResizeStart = function(t, e) {
            if (this.resizable && this.window) {
              var i, s = 0,
                o = 0;
              if (t.nativeEvent && function(t) {
                  return Boolean((t.clientX || 0 === t.clientX) && (t.clientY || 0 === t.clientY))
                }(t.nativeEvent) ? (s = t.nativeEvent.clientX, o = t.nativeEvent.clientY) : t.nativeEvent && z(t.nativeEvent) && (s = t.nativeEvent.touches[0].clientX, o = t.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(t, e, this.resizable)) return;
              this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
                height: this.props.size.height
              }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
                width: this.props.size.width
              })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
              var r = this.window.getComputedStyle(this.resizable);
              if ("auto" !== r.flexBasis) {
                var n = this.parentNode;
                if (n) {
                  var h = this.window.getComputedStyle(n).flexDirection;
                  this.flexDir = h.startsWith("row") ? "row" : "column", i = r.flexBasis
                }
              }
              this.setBoundingClientRect(), this.bindEvents();
              var a = {
                original: {
                  x: s,
                  y: o,
                  width: this.size.width,
                  height: this.size.height
                },
                isResizing: !0,
                backgroundStyle: f(f({}, this.state.backgroundStyle), {
                  cursor: this.window.getComputedStyle(t.target).cursor || "auto"
                }),
                direction: e,
                flexBasis: i
              };
              this.setState(a)
            }
          }, e.prototype.onMouseMove = function(t) {
            var e = this;
            if (this.state.isResizing && this.resizable && this.window) {
              if (this.window.TouchEvent && z(t)) try {
                t.preventDefault(), t.stopPropagation()
              } catch (t) {}
              var i = this.props,
                s = i.maxWidth,
                o = i.maxHeight,
                n = i.minWidth,
                h = i.minHeight,
                a = z(t) ? t.touches[0].clientX : t.clientX,
                p = z(t) ? t.touches[0].clientY : t.clientY,
                l = this.state,
                d = l.direction,
                u = l.original,
                c = l.width,
                f = l.height,
                g = this.getParentSize(),
                w = function(t, e, i, s, o, r, n) {
                  return s = x(s, t.width, e, i), o = x(o, t.height, e, i), r = x(r, t.width, e, i), n = x(n, t.height, e, i), {
                    maxWidth: void 0 === s ? void 0 : Number(s),
                    maxHeight: void 0 === o ? void 0 : Number(o),
                    minWidth: void 0 === r ? void 0 : Number(r),
                    minHeight: void 0 === n ? void 0 : Number(n)
                  }
                }(g, this.window.innerWidth, this.window.innerHeight, s, o, n, h);
              s = w.maxWidth, o = w.maxHeight, n = w.minWidth, h = w.minHeight;
              var b = this.calculateNewSizeFromDirection(a, p),
                y = b.newHeight,
                S = b.newWidth,
                R = this.calculateNewMaxFromBoundary(s, o);
              this.props.snap && this.props.snap.x && (S = m(S, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (y = m(y, this.props.snap.y, this.props.snapGap));
              var W = this.calculateNewSizeFromAspectRatio(S, y, {
                width: R.maxWidth,
                height: R.maxHeight
              }, {
                width: n,
                height: h
              });
              if (S = W.newWidth, y = W.newHeight, this.props.grid) {
                var E = v(S, this.props.grid[0]),
                  M = v(y, this.props.grid[1]),
                  _ = this.props.snapGap || 0;
                S = 0 === _ || Math.abs(E - S) <= _ ? E : S, y = 0 === _ || Math.abs(M - y) <= _ ? M : y
              }
              var N = {
                width: S - u.width,
                height: y - u.height
              };
              c && "string" == typeof c && (c.endsWith("%") ? S = S / g.width * 100 + "%" : c.endsWith("vw") ? S = S / this.window.innerWidth * 100 + "vw" : c.endsWith("vh") && (S = S / this.window.innerHeight * 100 + "vh")), f && "string" == typeof f && (f.endsWith("%") ? y = y / g.height * 100 + "%" : f.endsWith("vw") ? y = y / this.window.innerWidth * 100 + "vw" : f.endsWith("vh") && (y = y / this.window.innerHeight * 100 + "vh"));
              var k = {
                width: this.createSizeForCssProperty(S, "width"),
                height: this.createSizeForCssProperty(y, "height")
              };
              "row" === this.flexDir ? k.flexBasis = k.width : "column" === this.flexDir && (k.flexBasis = k.height), (0, r.flushSync)((function() {
                e.setState(k)
              })), this.props.onResize && this.props.onResize(t, d, this.resizable, N)
            }
          }, e.prototype.onMouseUp = function(t) {
            var e = this.state,
              i = e.isResizing,
              s = e.direction,
              o = e.original;
            if (i && this.resizable) {
              var r = {
                width: this.size.width - o.width,
                height: this.size.height - o.height
              };
              this.props.onResizeStop && this.props.onResizeStop(t, s, this.resizable, r), this.props.size && this.setState(this.props.size), this.unbindEvents(), this.setState({
                isResizing: !1,
                backgroundStyle: f(f({}, this.state.backgroundStyle), {
                  cursor: "auto"
                })
              })
            }
          }, e.prototype.updateSize = function(t) {
            this.setState({
              width: t.width,
              height: t.height
            })
          }, e.prototype.renderResizer = function() {
            var t = this,
              e = this.props,
              i = e.enable,
              s = e.handleStyles,
              r = e.handleClasses,
              n = e.handleWrapperStyle,
              h = e.handleWrapperClass,
              a = e.handleComponent;
            if (!i) return null;
            var p = Object.keys(i).map((function(e) {
              return !1 !== i[e] ? o.createElement(u, {
                key: e,
                direction: e,
                onResizeStart: t.onResizeStart,
                replaceStyles: s && s[e],
                className: r && r[e]
              }, a && a[e] ? a[e] : null) : null
            }));
            return o.createElement("div", {
              className: h,
              style: n
            }, p)
          }, e.prototype.render = function() {
            var t = this,
              e = Object.keys(this.props).reduce((function(e, i) {
                return -1 !== S.indexOf(i) || (e[i] = t.props[i]), e
              }), {}),
              i = f(f(f({
                position: "relative",
                userSelect: this.state.isResizing ? "none" : "auto"
              }, this.props.style), this.sizeStyle), {
                maxWidth: this.props.maxWidth,
                maxHeight: this.props.maxHeight,
                minWidth: this.props.minWidth,
                minHeight: this.props.minHeight,
                boxSizing: "border-box",
                flexShrink: 0
              });
            this.state.flexBasis && (i.flexBasis = this.state.flexBasis);
            var s = this.props.as || "div";
            return o.createElement(s, f({
              ref: this.ref,
              style: i,
              className: this.props.className
            }, e), this.state.isResizing && o.createElement("div", {
              style: this.state.backgroundStyle
            }), this.props.children, this.renderResizer())
          }, e.defaultProps = {
            as: "div",
            onResizeStart: function() {},
            onResize: function() {},
            onResizeStop: function() {},
            enable: {
              top: !0,
              right: !0,
              bottom: !0,
              left: !0,
              topRight: !0,
              bottomRight: !0,
              bottomLeft: !0,
              topLeft: !0
            },
            style: {},
            grid: [1, 1],
            lockAspectRatio: !1,
            lockAspectRatioExtraWidth: 0,
            lockAspectRatioExtraHeight: 0,
            scale: 1,
            resizeRatio: 1,
            snapGap: 0
          }, e
        }(o.PureComponent)
    },
    652: (t, e, i) => {
      var s = i(822),
        o = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        h = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function a(t, e, i) {
        var s, a = {},
          p = null,
          l = null;
        for (s in void 0 !== i && (p = "" + i), void 0 !== e.key && (p = "" + e.key), void 0 !== e.ref && (l = e.ref), e) r.call(e, s) && !h.hasOwnProperty(s) && (a[s] = e[s]);
        if (t && t.defaultProps)
          for (s in e = t.defaultProps) void 0 === a[s] && (a[s] = e[s]);
        return {
          $$typeof: o,
          type: t,
          key: p,
          ref: l,
          props: a,
          _owner: n.current
        }
      }
      e.jsx = a, e.jsxs = a
    },
    322: (t, e, i) => {
      t.exports = i(652)
    }
  }
]);