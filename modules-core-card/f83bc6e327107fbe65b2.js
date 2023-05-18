(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [919, 172], {
    7749: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Card: () => D.Card,
        CardExpanded: () => a.Z,
        CardHeader: () => r.Z,
        CardWithImageGallery: () => D.CardWithImageGallery,
        CardWrapper: () => s.Z,
        Deck: () => D.Deck,
        EventsDeck: () => j,
        LayeredImageFrame: () => o.Z,
        LinkoutWrapper: () => i.Z,
        TextCard: () => D.TextCard,
        TextOverlay: () => c.Z,
        ThumbsGalleryOrThumb: () => l.Z
      });
      var a = n(9525),
        r = n(547),
        s = n(8819),
        o = n(507),
        i = n(4950),
        c = n(9838),
        l = n(7366),
        u = n(822),
        d = n(8673),
        m = n.n(d),
        f = n(8976),
        p = n(420),
        v = n.n(p),
        h = n(9542),
        g = n(6711),
        x = n(1204),
        y = n(7311),
        b = n.n(y),
        _ = n(4859),
        S = n(5938);
      var N = n(9929),
        w = n(559);
      var $ = n(3322);

      function T(e, t) {
        const n = {
          ...e
        };
        return b().forOwn(e, ((e, a) => {
          if ("image" === a) {
            const e = n[a];
            n[a] = {
              ...e,
              prod: t
            }
          } else b().isObject(e) && !b().isArray(e) ? T(e, t) : b().isArray(e) && (n[a] = e.map((e => b().isObject(e) ? T(e, t) : e)))
        })), n
      }
      const E = (0, N.withTranslations)((e => {
          let {
            active: t,
            styles: n,
            title: a,
            itemNumber: r,
            inModalMode: s,
            openModalMode: o,
            element: i,
            upNext: c,
            mobileMode: l,
            refDeck: d,
            components: p,
            tina: v,
            prevPage: x,
            nextPage: y,
            loadCssRawValue: b,
            transitionStyle: _,
            selectedItemNumber: S,
            carouselTitle: N,
            sharedDraggingDelta: E,
            setSharedDraggingDelta: M
          } = e;
          const {
            track: k
          } = (0, g.useGtmTrack)(), j = (0, u.createRef)(), D = (0, u.createRef)(), C = (0, u.createRef)(), I = (0, u.createRef)(), P = (0, u.createRef)(), [W, L] = (0, u.useState)(!1), [R, O] = (0, u.useState)(0), [B, H] = (0, u.useState)(0), [G, z] = (0, u.useState)(0), [X, A] = (0, u.useState)(0), [Y, Z] = (0, u.useState)(0), [U, F] = (0, u.useState)(!1), [V, Q] = (0, u.useState)(0), [q, J] = (0, u.useState)(0), [K, ee] = (0, u.useState)(0), [te, ne] = (0, u.useState)(0), [ae, re] = (0, u.useState)(0), [se, oe] = (0, u.useState)("700"), [ie, ce] = (0, u.useState)(-1), [le, ue] = (0, u.useState)(0), [de, me] = (0, u.useState)(0), [fe, pe] = (0, u.useState)(""), ve = (0, h.useTinaPayload)(), he = v?.payload?.meta?.cdn ?? !1 ?? ve?.meta?.prod ?? !1, ge = (0, h.useTranslations)({
            payload: v?.payload,
            variables: v?.variables
          }), xe = ge?.meta ?? {}, ye = T(ge?.content?.[0], he), be = (0, u.useMemo)((() => ye?.images?.[0]?.image?.badge), [ye]), _e = (0, u.useMemo)((() => a ?? xe?.title), [a, xe?.title]), Se = (0, w.useImageParser)({
            alt: ye?.images?.[0]?.image?.alt ?? "",
            ariaLabel: ye?.images?.[0]?.image?.alt ?? "",
            sources: ye?.images?.[0]?.image?.sources ?? [],
            prod: he
          }), Ne = Se?.src?.mobile ?? !1, we = (0, u.useMemo)((() => xe?.foreignId), [xe]), $e = (0, u.useMemo)((() => xe?.foreignTitle), [xe]);
          (0, u.useEffect)((() => {
            let e = K;
            W ? e = 0 : s && !l && (e = K), O(e)
          }), [W, l, s, B, X, te, ae, G, K]), (0, u.useEffect)((() => {
            L(!(!s || !l))
          }), [s, l]), (0, u.useEffect)((() => {
            s && t && k({
              event: "virtualPageview",
              display_type: l ? "mobile" : "desktop",
              view_name: `${we}/${$e}`,
              source_content_id: we,
              source_content_name: $e
            })
          }), [s, t]), (0, u.useEffect)((() => {
            const e = m()(((e, t) => {
              let n = 18;
              if (e?.documentElement && (n = b(e?.documentElement, "--root-font-size")), de !== t.innerHeight && me(t.innerHeight), d?.current) {
                re(b(d.current, "--eventDeck-marginSm") * n);
                const e = n * b(d?.current, "--eventDeck-modalGutters"),
                  a = t?.innerWidth;
                H(a - 2 * e), I.current && l && 0 === G && z(I.current.clientWidth), A(b(d.current, "--eventDeck-itemSize") * n);
                const r = b(d?.current, "--eventDeck-itemImageTitleMargins") * n,
                  s = D?.current?.clientHeight,
                  o = s + r;
                Number.isNaN(o) || ee(o), ue(b(d?.current, "--eventDeck-headerHeight") * n)
              }
              let a = Math.min(700, t.innerWidth);
              l || (a = 900), oe(`${a}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [d, l]), (0, u.useEffect)((() => {
            if (j.current) {
              const e = j.current.clientHeight;
              Number.isNaN(e) || ne(e)
            }
          }), [j]), (0, u.useEffect)((() => {
            if (!0 === s && !0 === l && I.current) {
              const e = B / G;
              I.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!1 === s && !0 === l && I.current && (I.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !l && I.current && (I.current.style.transform = null)
          }), [s, l, B, G]), (0, u.useEffect)((() => {
            const e = .5 * B,
              t = de - le - 3 * ae;
            Z(B - (e < t ? e : t))
          }), [B, ae, de]), (0, u.useEffect)((() => {
            "next" === fe ? (y(null, !0), pe("")) : "prev" === fe && (x(null, !0), pe(""))
          }), [fe]);
          const [Te, Ee] = (0, u.useState)(0), [Me, ke] = (0, u.useState)(0), [je, De] = (0, u.useState)(!1), [Ce, Ie] = (0, u.useState)(0), Pe = () => s && t && !l, We = e => {
            if (!0 === U || !s) return;
            const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
            J(void 0 !== e.changedTouches ? e.touches[0].screenY : e.screenY), Q(t)
          }, Le = e => {
            if (!0 === U || 0 === V || !s) return;
            const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
              n = void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY,
              a = t > V ? 1 : -1,
              r = Math.abs(V - t),
              o = Math.abs(q - n);
            r > 50 && o < 25 ? (pe(a > 0 ? "prev" : "next"), F(!0), Q(0), J(0), De(!1), Ie(0), M(0)) : (De(!0), Ie(r * a), M(r * a))
          }, Re = () => {
            !0 !== U && s && (F(!0), Q(0), J(0), pe(""), De(!1), Ie(0), M(0))
          };
          (0, u.useEffect)((() => {
            let e = [],
              t = 0,
              a = 0;
            if (null !== n?.transform) {
              e = n.transform.split(",");
              const r = e[0].split("(");
              t = Number(r[1].replace("px", "")), Ee(t), a = Number(e[1].replace("px", "")), ke(a)
            }
            0 === r && Pe() && console.log("styles", {
              styles: n,
              transformArry: e,
              xVal: t,
              yVal: a
            })
          }), [n]), (0, u.useEffect)((() => {
            U && setTimeout((() => {
              F(!1), Q(0)
            }), 200)
          }), [U, 200]);
          return (0, u.useEffect)((() => {
            s && clearTimeout(ie)
          }), [s]), ye ? (0, $.jsxs)("div", {
            className: "fde59cc0b211a74fd79f",
            ref: i,
            "data-item-position": r,
            "data-modal-mode": s,
            "data-active-item": t,
            "data-up-next": c,
            "data-transition": je || 0 !== E ? "none" : _,
            style: {
              ...n,
              transform: Pe() ? `translate3d(${Te+Ce}px, ${Me}px, 0)` : s && l ? `translate3d(${Te+E}px, ${Me}px, 0)` : n?.transform
            },
            onClick: e => {
              s ? s && !l && (r < S ? x(e, !0) : r > S && y(e, !0)) : o(e)
            },
            onMouseEnter: () => {
              s || L(!0), s || l || (clearTimeout(ie), ce(setTimeout((() => {
                k({
                  event: "carousel_title_hover",
                  event_category: "carousel",
                  event_action: "title_hover",
                  event_label: N,
                  card_name: _e,
                  card_id: r,
                  position: r,
                  view_name: `${we}/${$e}`,
                  source_content_id: we,
                  source_content_name: $e
                })
              }), 1e3)))
            },
            onMouseLeave: () => {
              s || L(!1), s || l || clearTimeout(ie)
            },
            onTouchStart: We,
            onTouchMove: Le,
            onTouchEnd: Re,
            onMouseDown: We,
            onMouseMove: Le,
            onMouseUp: Re,
            tabIndex: -1,
            role: "presentation",
            children: [(0, $.jsxs)("div", {
              className: "fa238bf7612b7724abaa",
              "data-full-header": W,
              ref: C,
              style: {
                height: s && l ? `${B}px` : null,
                width: s && l ? `${B}px` : null
              },
              children: [Ne && (0, $.jsx)("img", {
                ref: I,
                src: `${Se?.src?.mobile}?im=Resize,width=${se}`,
                alt: Se?.alt,
                style: {
                  width: 0 !== G && l ? `${G}px` : null,
                  height: 0 !== G && l ? `${G}px` : null
                }
              }), (0, $.jsxs)("div", {
                className: "d21f276146dec1dcf842",
                style: {
                  transform: !l || l && s ? `translate3d(0, ${R}px, 0)` : null
                },
                children: [be && (0, $.jsx)("div", {
                  className: "d9c130714618614ef63c",
                  ref: j,
                  children: (0, $.jsx)(f.Badge, {
                    text: be
                  })
                }), (0, $.jsx)("span", {
                  className: "e056f0aa82c811cbadda",
                  ref: D,
                  "aria-hidden": s,
                  children: _e
                })]
              })]
            }), (0, $.jsxs)("div", {
              className: "f4efaa263cba6ec12f58",
              ref: P,
              style: {
                top: s && l ? `${B}px` : null,
                width: s && !l && t ? `${Y}px` : null
              },
              children: [_e && (0, $.jsx)("span", {
                className: "d784a6def5f96306e977",
                children: _e
              }), (0, $.jsx)("div", {
                className: "b98f5b22300490f3feb8",
                children: (0, $.jsx)(h.TinaParser, {
                  components: p,
                  tina: {
                    meta: xe,
                    payload: {
                      content: ye?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        M = "cb22b2530b90ee356a13",
        k = e => {
          let {
            prevPage: t,
            prevBtnDisabled: n,
            nextPage: a,
            nextBtnDisabled: r,
            selectedItemNumber: s,
            itemsData: o,
            closeModalMode: i
          } = e;
          return (0, $.jsxs)($.Fragment, {
            children: [(0, $.jsxs)("div", {
              className: "faa5acf4b727e1382599",
              children: [(0, $.jsx)("button", {
                className: M,
                type: "button",
                onClick: t,
                disabled: n,
                "aria-label": "Previous"
              }), (0, $.jsxs)("span", {
                className: "dacf520118176355e3f9",
                children: [s + 1, (0, $.jsx)("span", {
                  className: "f75c0ab96a4285c2dea2"
                }), o.length]
              }), (0, $.jsx)("button", {
                className: M,
                type: "button",
                onClick: a,
                disabled: r,
                "aria-label": "Next"
              })]
            }), (0, $.jsx)("button", {
              className: "fd85da563bb161a9949a",
              type: "button",
              onClick: i,
              "aria-label": "Close"
            })]
          })
        },
        j = e => {
          let {
            title: t = "New This Week"
          } = e;
          const {
            track: n
          } = (0, g.useGtmTrack)(), a = (() => {
            const {
              data: e
            } = (0, _.useQuery)(S.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                orderBy: "priority",
                orderDirection: "desc"
              }
            }), t = e?.tinaModulesList?.results, n = b().map(t, "id");
            return (0, f.useTinaModuleFetchByIds)({
              ids: n
            })
          })(), [r, s] = (0, u.useState)([]), [o, i] = (0, u.useState)(null), [c, l] = (0, u.useState)(0), [d, p] = (0, u.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [y, N] = (0, u.useState)(!1), w = (0, u.createRef)(), [T, M] = (0, u.useState)(null), j = (0, u.createRef)(), D = (0, u.createRef)(), [C, I] = (0, u.useState)([]), [P, W] = (0, u.useState)(!0), [L, R] = (0, u.useState)(!1), [O, B] = (0, u.useState)([]), [H, G] = (0, u.useState)(404), [z, X] = (0, u.useState)(808), [A, Y] = (0, u.useState)(672), [Z, U] = (0, u.useState)(336), [F, V] = (0, u.useState)(0), [Q, q] = (0, u.useState)(0), [J, K] = (0, u.useState)(0), [ee, te] = (0, u.useState)(0), [ne, ae] = (0, u.useState)(0), [re, se] = (0, u.useState)(!1), [oe, ie] = (0, u.useState)(window.innerWidth), [ce, le] = (0, u.useState)(0), [ue, de] = (0, u.useState)(0), [me, fe] = (0, u.useState)(0), [pe, ve] = (0, u.useState)(0), [he, ge] = (0, u.useState)(0), [xe, ye] = (0, u.useState)(0), [be, _e] = (0, u.useState)(-1e3), [Se, Ne] = (0, u.useState)(0), [we, $e] = (0, u.useState)(50), [Te, Ee] = (0, u.useState)(0), [Me, ke] = (0, u.useState)(!1), [je, De] = (0, u.useState)(768), [Ce, Ie] = (0, u.useState)(!1), [Pe, We] = (0, u.useState)(!1), [Le, Re] = (0, u.useState)(!1), [Oe, Be] = (0, u.useState)(!1), [He, Ge] = (0, u.useState)(!1), [ze, Xe] = (0, u.useState)(1e3), [Ae, Ye] = (0, u.useState)(1.2), [Ze, Ue] = (0, u.useState)(0), [Fe, Ve] = (0, u.useState)(!1), [Qe, qe] = (0, u.useState)(!1), [Je, Ke] = (0, u.useState)(!0), [et, tt] = (0, u.useState)(!1), [nt, at] = (0, u.useState)(!1), [rt, st] = (0, u.useState)(null), [ot, it] = (0, u.useState)(100);
          (0, u.useEffect)((() => {
            it(re ? 500 : 100)
          }), [re]);
          const [ct, lt] = (0, u.useState)(!1), [ut, dt] = (0, u.useState)({}), [mt, ft] = (0, u.useState)(""), [pt, vt] = (0, u.useState)(0), [ht, gt] = (0, u.useState)(!1), [xt, yt] = (0, u.useState)(!1), [bt, _t] = (0, u.useState)(0), [St, Nt] = (0, u.useState)(0), [wt, $t] = (0, u.useState)(100);
          (0, u.useEffect)((() => {
            $t(Me ? 20 : 100)
          }), [Me]);
          const Tt = (e, t) => {
              let n = getComputedStyle(e).getPropertyValue(t);
              return n = n.replace("px", "").replace("rem", "").replace("em", ""), n = n.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), n = n.replace("ms", "").replace("s", ""), Number(n)
            },
            Et = () => oe * ce + we,
            Mt = () => !1 === Me ? Ae : 1,
            kt = e => e === pe - 1 || e === pe + 1,
            jt = () => -1 * me;
          (0, u.useEffect)((() => {
            re && (() => {
              const e = T?.getBoundingClientRect().top,
                t = -1 * (e - c);
              if (I(C.map((e => {
                  if (e.styles.transform) {
                    const n = e.styles.transform.split(","),
                      a = `${n[0]}, ${t}px,${n[2]}`;
                    e.styles = {
                      ...e.styles,
                      transform: a
                    }
                  }
                  return e
                }))), j.current) {
                const t = -1 * (e - c);
                j.current.style.transform = `translateY(${t}px)`
              }
            })()
          }), [Me, re, Ze]);
          const Dt = function(e) {
              let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (!0 === Me) return 0;
              const n = e.itemNumber % 2 == 0,
                a = H * Ae;
              if (!0 === n && 0 !== e.itemNumber) {
                const n = Tt(e?.element?.current, "top");
                let r = n - J;
                return !1 === t && (r -= n), -1 * (.5 * a + r) + Ze
              }
              return J - .5 * a + Ze
            },
            Ct = function(e, t) {
              let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                a = jt();
              !1 === n && (a = 0);
              const r = oe * ce,
                s = !1 === Me ? H * Mt() : r;
              return e.inModalMode && Me ? -1 === t ? Et() * (pe - e.itemNumber) * -1 - e.styles.left : Et() * (e.itemNumber - pe) - e.styles.left : -1 === t ? -1 * e.styles.left - s - we + a : r - e.styles.left + we + a
            },
            It = (e, t, n) => {
              -1 === t && (R(!1), W(!0)), R(!1 === n && e >= t || !0 === n && e + 1 === t), W(e <= 0)
            },
            Pt = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              pe + 1 >= r.length || (n({
                event: e ? "modal_swipe" : "modal_next",
                event_category: "modal",
                event_action: e ? "swipe" : "next",
                event_label: t,
                card_name: C[pe + 1]?.tina?.payload?.meta?.title ?? `card-${pe+1}`,
                card_id: pe + 1,
                position: pe + 1,
                view_name: `${C[pe+1].source_content_id}/${C[pe+1].source_content_name}`,
                source_content_id: C[pe + 1].source_content_id,
                source_content_name: C[pe + 1].source_content_name
              }), It(pe + 1, r.length, !0), Me ? Me && I(C.map((e => {
                e.itemNumber === pe - 1 ? e.upNext = !1 : e.itemNumber === pe + 2 ? e.upNext = !0 : e.itemNumber === pe + 1 ? e.active = !0 : e.itemNumber === pe && (e.upNext = !0, e.active = !1);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let n = Number(t[0].replace("px", ""));
                n -= Et();
                const a = `translate3d(${n}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: a
                }, e
              }))) : I(C.map((e => (e.itemNumber === pe - 1 ? e.upNext = !1 : e.itemNumber === pe + 2 ? e.upNext = !0 : e.itemNumber === pe + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${jt()}px, ${Ze}px, 0) scale(1)`
              }) : e.itemNumber === pe && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ct(e,-1)}px, ${Dt(e)}px, 0) scale(${Mt()})`
              }), e)))), ve(pe + 1))
            },
            Wt = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (nt || et) return;
              if (at(!0), re) return void Pt(a);
              const r = ue + 1;
              if (!(r > ne))
                if (n({
                    event: a ? "carousel_swipe" : "carousel_next",
                    event_category: "carousel",
                    event_action: a ? "swipe" : "next",
                    event_label: t
                  }), It(r, ne, !1), Me) {
                  let e = r * Z * -1;
                  e < be && (e = be, R(!0), W(!1), de(ne)), de(r), I(C.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = me - Q;
                  0 === me && (e = -1 * A), de(r), e < be && (e = be, R(!0), W(!1), de(ne)), fe(e)
                }
            },
            Lt = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              nt || pe - 1 < 0 || (n({
                event: e ? "modal_swipe" : "modal_previous",
                event_category: "modal",
                event_action: e ? "swipe" : "previous",
                event_label: t,
                card_name: C[pe - 1]?.tina?.payload?.meta?.title ?? "card-" + (pe - 1),
                card_id: pe - 1,
                position: pe - 1,
                view_name: `${C[pe-1].source_content_id}/${C[pe-1].source_content_name}`,
                source_content_id: C[pe - 1].source_content_id,
                source_content_name: C[pe - 1].source_content_name
              }), It(pe - 1, r.length, !0), Me || I(C.map((e => (e.itemNumber === pe + 1 ? e.upNext = !1 : e.itemNumber === pe - 2 ? e.upNext = !0 : e.itemNumber === pe ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ct(e,1)}px, ${Dt(e)}px, 0) scale(${Mt()})`
              }) : e.itemNumber === pe - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${jt()}px, ${Ze}px, 0) scale(1)`
              }), e)))), Me && I(C.map((e => {
                e.itemNumber === pe + 1 ? e.upNext = !1 : e.itemNumber === pe - 2 ? e.upNext = !0 : e.itemNumber === pe ? (e.upNext = !0, e.active = !1) : e.itemNumber === pe - 1 && (e.active = !0);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let n = Number(t[0].replace("px", ""));
                n += Et();
                const a = `translate3d(${n}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: a
                }, e
              }))), ve(pe - 1))
            },
            Rt = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (nt || et) return;
              if (at(!0), !0 === re) return void Lt(a);
              const r = ue - 1;
              if (!(r < 0))
                if (n({
                    event: a ? "carousel_swipe" : "carousel_previous",
                    event_category: "carousel",
                    event_action: a ? "swipe" : "previous",
                    event_label: t
                  }), It(r, ne, !1), Me) {
                  let e = r * Z * -1;
                  e > 0 && (e = 0, W(!0), R(!1), de(0)), de(r), I(C.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = me + Q;
                  de(r), (e > 0 || 0 === e) && (e = 0, W(!0), R(!1), de(0)), fe(e)
                }
            },
            Ot = function(e, t) {
              let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
              return e.map(((e, a) => {
                let r = a * Z,
                  s = a;
                !1 === Me && (s = Math.ceil(.5 * a) + 1, a > 0 && (r = 2 === s ? A : A + Z * (s - 2)));
                const o = O[a];
                return o?.current && (o.current.scrollTop = 0), {
                  ...e,
                  mobileMode: Me,
                  itemNumber: a,
                  columnNumber: s,
                  inModalMode: !1,
                  upNext: !0,
                  active: !1,
                  openModalMode: Ht,
                  element: o,
                  transitionStyle: t,
                  styles: {
                    left: r,
                    transform: "" === n ? null : n,
                    height: null,
                    top: null
                  }
                }
              }))
            },
            Bt = () => {
              if (n({
                  event: "modal_close",
                  event_category: "modal",
                  event_action: "close",
                  event_label: t,
                  card_name: C[pe]?.tina?.payload?.meta?.title ?? `card-${pe}`,
                  card_id: pe,
                  position: pe,
                  view_name: `${C[pe].source_content_id}/${C[pe].source_content_name}`,
                  source_content_id: C[pe].source_content_id,
                  source_content_name: C[pe].source_content_name
                }), Me) {
                let e = pe * Z * -1;
                e < be && (e = be, R(!0), W(!1), de(ne)), de(pe), It(pe, ne, !1), I(Ot(r, "cardClose", `translate3d(${e}px, 0, 0)`))
              } else {
                I(Ot(r, "cardClose"));
                const e = Math.ceil((C[pe].columnNumber + 1) / F) - 1;
                de(e);
                let t = e * Q * -1;
                t < be ? (t = be, W(!1), R(!0), de(ne)) : It(e, ne, !1), fe(t), ve(0)
              }
              j.current.style.transform = "translateY(0px)", j.current.style.transition = "all var(--eventDeck-transitionCardClose)", Ve(!1), Be(!1), se(!1), We(!1), Ie(!1), Ge(!1), setTimeout((() => {
                Re(!0)
              }), ze)
            };
          (0, u.useEffect)((() => {
            !1 !== Le && (Re(!1), Ve(!1), T.style.zIndex = null, I(C.map((e => (e.transitionStyle = "", e)))))
          }), [Le]), (0, u.useEffect)((() => {
            if (!ct) return;
            if (lt(!1), nt) return;
            ve(Number(ut.target.dataset.itemPosition)), We(!0), tt(!0), Je && Ke(!1);
            const e = C[ut.target.dataset.itemPosition].source_content_id,
              a = C[ut.target.dataset.itemPosition].source_content_name,
              r = C[ut.target.dataset.itemPosition]?.tina?.payload?.meta?.title;
            n({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: t,
              card_name: r ?? `card-${pe}`,
              card_id: ut.target.dataset.itemPosition,
              position: ut.target.dataset.itemPosition,
              view_name: `${e}/${r}`,
              source_content_id: e,
              source_content_name: a
            })
          }), [ct]);
          const Ht = e => {
            setTimeout((() => {
              dt(e), lt(!0)
            }), 1)
          };
          (0, u.useEffect)((() => {
            if (!1 === Pe || !0 === re) return;
            We(!1);
            const e = (() => {
              const e = T?.getBoundingClientRect().top;
              return Ue(-1 * (e - c)), -1 * (e - 140)
            })();
            Me && I(C.map((e => {
              const t = e.itemNumber > pe + 3 || e.itemNumber < pe - 3;
              return e.styles = {
                ...e.styles,
                display: t ? "none" : null,
                transition: t ? "none" : null
              }, e
            }))), T.style.zIndex = "101", Ve(!0), j.current && (j.current.style.transition = "all var(--eventDeck-transitionCardOpen)", j.current.style.transform = `translateY(${e}px)`), Be(!0), setTimeout((() => {
              Ie(!0)
            }), 1)
          }), [Pe]);
          const Gt = () => {
            I(C.map(((e, t) => {
              e.active = t === pe, e.inModalMode = !0, e.transitionStyle = "cardOpen", Me && (e.upNext = kt(e.itemNumber));
              const n = !Me;
              let a = 0;
              if (Me) {
                const e = he + 5 * c;
                a = window.innerHeight - e
              }
              return e.itemNumber < pe ? e.styles = {
                ...e.styles,
                height: Me ? `${a}px` : null,
                transform: `translate3d(${Ct(e,-1,n)}px, ${Ze}px, 0) scale(${Mt()})`
              } : e.itemNumber > pe ? e.styles = {
                ...e.styles,
                height: Me ? `${a}px` : null,
                transform: `translate3d(${Ct(e,1,n)}px, ${Ze}px, 0) scale(1)`
              } : e.itemNumber === pe && (e.styles = Me ? {
                ...e.styles,
                height: `${a}px`,
                transform: `translate3d(${-1*e.styles.left}px, ${Ze}px, 0) scale(1)`
              } : {
                left: 0,
                top: 0,
                transform: `translate3d(${jt()}px, ${Ze}px, 0) scale(1)`
              }), e
            })))
          };
          (0, u.useEffect)((() => {
            !1 !== Ce && !0 !== re && (se(!0), Ie(!1), It(pe, C.length, !0), j.current && (j.current.style.transition = "all var(--eventDeck-transitionCardOpen)", j.current.style.transform = `translateY(${Ze}px)`), Gt(), !1 === Me ? Ge(!0) : (fe(0), tt(!1), qe(!0)))
          }), [Ce]), (0, u.useEffect)((() => {
            Qe && (qe(!1), I(C.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
          }), [Qe]);
          const zt = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            I(C.map((t => {
              if (t.upNext = kt(t.itemNumber), t.itemNumber !== pe) {
                let e = Ct(t, 1);
                t.itemNumber < pe && (e = Ct(t, -1)), t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, ${Dt(t)}px, 0) scale(${Mt()})`
                }
              } else t.itemNumber === pe && !Me && e && (t.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${jt()}px, ${Ze}px, 0) scale(1)`
              });
              return t
            })))
          };
          (0, u.useEffect)((() => {
            !1 !== He && !0 !== Me && (Ge(!1), zt(), tt(!1))
          }), [He]), (0, u.useEffect)((() => {
            I(Ot(r, ""))
          }), [A, Z, r]), (0, u.useEffect)((() => {
            xt || re ? (document.body.style.touchAction = xt ? "pan-x" : "none", document.body.style.overflow = "hidden") : xt || re || (document.body.style.touchAction = "auto", document.body.style.overflow = "auto")
          }), [re, xt]), (0, u.useEffect)((() => {
            if (!nt) return;
            clearTimeout(rt);
            const e = setTimeout((() => {
              at(!1)
            }), ot);
            st(e)
          }), [nt]), (0, u.useEffect)((() => {
            y && setTimeout((() => {
              N(!1)
            }), 3e3)
          }), [y]), (0, u.useEffect)((() => {
            N(!0), fe(0), de(0);
            let e = Math.ceil(Math.ceil(Te / Z) / F);
            Me && (e = C.length - 1), e < 0 && (e = 1), It(0, e, !1), re && Bt()
          }), [Me]), (0, u.useEffect)((() => {
            const e = (a ?? []).map((e => ({
              ...e,
              source_content_id: e?.tina?.payload?.meta?.foreignId,
              source_content_name: e?.tina?.payload?.meta?.foreignTitle,
              view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
            })));
            s(e)
          }), [a]), (0, u.useEffect)((() => {
            B(r.map((() => (0, u.createRef)())))
          }), [r]), (0, u.useEffect)((() => {
            const e = e => {
              const {
                key: t
              } = e;
              "ArrowLeft" === t ? Rt(null, !1) : "ArrowRight" === t && Wt(null, !1)
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }), [nt, et, re]), (0, u.useEffect)((() => {
            if (j.current) {
              let e = 0;
              e = j?.current?.clientHeight, e += Tt(j?.current, "margin-top"), e += Tt(j?.current, "margin-bottom"), ge(e)
            }
          }), [j, D]), (0, u.useEffect)((() => {
            Te < ce * oe && 0 === ue ? (fe(0), R(!0), W(!0)) : me < be ? (R(!0), W(!1), de(ne), fe(be)) : me < 0 && (R(!1), de(ne - 1)), Te > ce * oe && L && R(!1)
          }), [be]), (0, u.useEffect)((() => {
            if (w.current) {
              M(w.current);
              const e = Tt(document.documentElement, "--root-font-size"),
                t = Tt(w.current, "--eventDeck-modalGutters") * e;
              ye(t);
              const n = oe - 2 * t;
              le(n / oe);
              let a = Tt(w.current, "--eventDeck-modalBottomGutter");
              a *= e;
              const s = window.innerHeight - (he + a);
              K(.5 * n < s ? n / 4 : .5 * s);
              const c = Tt(w.current, "--eventDeck-mobileBreakpoint");
              De(c);
              let u = Tt(w.current, "--eventDeck-itemSize");
              u *= e, G(u);
              let d = Tt(w.current, "--eventDeck-modalGutterGap");
              d *= e, $e(d);
              let m = Tt(w.current, "--eventDeck-insideMargin");
              m *= e;
              const f = !1 === Me ? 2 * u + m : u + m;
              X(f), Y(f + m);
              const p = u + m;
              U(p);
              let v = Math.ceil(.5 * (r.length - 1)) * p + f;
              Me && (v = r.length * p), Ee(v), 0 !== Te && _e(-1 * Te + n);
              let h = Math.ceil(Math.ceil(v / p) / F);
              (Me || re) && (h = C.length - 1), ae(h);
              const g = Tt(w.current, "--eventDeck-itemScaleUpAmount");
              Ye(g), Xe(Tt(w.current, "--eventDeck-cardCloseTransitionDuration")), l(Tt(w.current, "--eventDeck-itemImageTitleMargins") * e), null !== o && e !== o && (i(e), re && zt()), null === o && i(e)
            }
          }), [w, r]), (0, u.useEffect)((() => {
            if (re && !Me) {
              zt();
              const e = T?.getBoundingClientRect().top,
                t = -1 * (e - c);
              t !== Ze && Ue(t)
            }
          }), [d]), (0, u.useEffect)((() => {
            const e = m()((e => {
              ie(e), ke(e < je);
              const t = (1 - ce) / 2;
              Ne(e * t);
              const n = e - 2 * xe,
                a = Math.round(n / Z);
              V(a), q(a * Z), te(e - e * t);
              const r = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (r !== d && p(r), re && r === d && !y) {
                const e = T?.getBoundingClientRect().top,
                  t = -1 * (e - c);
                t !== Ze && Ue(t)
              }
            }), 300);
            return window.addEventListener("resize", (() => {
              e(window.innerWidth)
            })), window.addEventListener("scroll", (() => {
              re && Me && e(window.innerWidth)
            })), e(window.innerWidth), () => {
              window.removeEventListener("resize", (() => {
                e(window.innerWidth)
              }))
            }
          }), [Z, ce, re, Me]), (0, u.useEffect)((() => {
            !1 !== re && !0 !== y && (Me ? Gt() : zt(!0))
          }), [ee, Q, we, H, oe, Se, J, Ze]), (0, u.useEffect)((() => {
            const e = () => {
              if (w.current && Je) {
                const e = w.current.getBoundingClientRect(),
                  t = .2 * window.innerHeight;
                window.innerHeight - e.top >= t && Ke(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [w]), (0, u.useEffect)((() => {
            "next" === mt ? (Wt(null, !0), ft("")) : "prev" === mt && (Rt(null, !0), ft(""))
          }), [mt]);
          const Xt = e => {
              if (ht || re) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              vt(t)
            },
            At = e => {
              if (ht || 0 === pt || re) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                n = t > pt ? 1 : -1,
                a = Math.abs(pt - t);
              yt(!0), _t(a * n)
            },
            Yt = e => {
              if (ht || re) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                n = t > pt ? 1 : -1,
                a = Math.abs(pt - t);
              ft(a > wt ? n > 0 ? "prev" : "next" : ""), gt(!0), vt(0), _t(0), yt(!1)
            };
          (0, u.useEffect)((() => {
            ht && setTimeout((() => {
              gt(!1), vt(0)
            }), ot)
          }), [ht]);
          const Zt = (0, h.useTinaComponents)(),
            Ut = (0, u.useMemo)((() => ({
              ...Zt,
              CardWithImageGallery: x.Z,
              HTMLElement: f.HTMLElement,
              ImageWithBadge: f.ImageWithBadge,
              Carousel: f.Carousel,
              GroupOfItems: v(),
              UnorderedList: f.UnorderedList
            })), [Zt]),
            Ft = (0, u.useMemo)((() => C.map((e => (0, u.createElement)(E, {
              ...e,
              refDeck: w,
              key: e?.id ?? e?.sync_hash,
              components: Ut,
              prevPage: Rt,
              nextPage: Wt,
              loadCssRawValue: Tt,
              selectedItemNumber: pe,
              carouselTitle: t,
              sharedDraggingDelta: St,
              setSharedDraggingDelta: Nt
            })))), [C, w, Ut, Rt, Wt, Tt, pe]);
          return !Ft?.length || Ft.length <= 0 ? null : (0, $.jsxs)($.Fragment, {
            children: [(0, $.jsx)("div", {
              className: "c1b08e0c6762959d6e40",
              "data-modal-mode": Oe,
              "aria-hidden": "true"
            }), (0, $.jsxs)("div", {
              className: "dd9c11d21c9d76e0f525",
              "data-modal-mode": re,
              "data-faded": Je,
              ref: w,
              onTouchStart: Xt,
              onTouchMove: At,
              onTouchEnd: Yt,
              onMouseDown: Xt,
              onMouseMove: At,
              onMouseUp: Yt,
              tabIndex: -1,
              role: "presentation",
              children: [(0, $.jsxs)("div", {
                className: "fe4a9770ab07662ba456",
                "data-modal-mode": re,
                ref: j,
                "data-animating": Fe,
                children: [(0, $.jsx)("h2", {
                  className: "bdad5a5a38f931159788",
                  children: t
                }), (0, $.jsx)(k, {
                  prevPage: Rt,
                  prevBtnDisabled: P,
                  nextPage: Wt,
                  nextBtnDisabled: L,
                  selectedItemNumber: pe,
                  itemsData: r,
                  closeModalMode: Bt
                })]
              }), (0, $.jsx)("div", {
                className: "fe13159c37ea559619ab",
                "data-modal-mode": re,
                "data-is-dragging": xt,
                style: {
                  transform: `translate3d(${me+bt}px, 0, 0)`,
                  width: `${Te}px`
                },
                ref: D,
                children: Ft
              })]
            })]
          })
        };
      var D = n(4427)
    },
    8231: (e, t, n) => {
      var a = n(1715).Symbol;
      e.exports = a
    },
    8970: (e, t, n) => {
      var a = n(8231),
        r = n(9762),
        s = n(4511),
        o = a ? a.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? r(e) : s(e)
      }
    },
    9284: (e, t, n) => {
      var a = n(8217),
        r = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, a(e) + 1).replace(r, "") : e
      }
    },
    8477: (e, t, n) => {
      var a = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = a
    },
    9762: (e, t, n) => {
      var a = n(8231),
        r = Object.prototype,
        s = r.hasOwnProperty,
        o = r.toString,
        i = a ? a.toStringTag : void 0;
      e.exports = function(e) {
        var t = s.call(e, i),
          n = e[i];
        try {
          e[i] = void 0;
          var a = !0
        } catch (e) {}
        var r = o.call(e);
        return a && (t ? e[i] = n : delete e[i]), r
      }
    },
    4511: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    1715: (e, t, n) => {
      var a = n(8477),
        r = "object" == typeof self && self && self.Object === Object && self,
        s = a || r || Function("return this")();
      e.exports = s
    },
    8217: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    8673: (e, t, n) => {
      var a = n(4078),
        r = n(1923),
        s = n(9789),
        o = Math.max,
        i = Math.min;
      e.exports = function(e, t, n) {
        var c, l, u, d, m, f, p = 0,
          v = !1,
          h = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function x(t) {
          var n = c,
            a = l;
          return c = l = void 0, p = t, d = e.apply(a, n)
        }

        function y(e) {
          var n = e - f;
          return void 0 === f || n >= t || n < 0 || h && e - p >= u
        }

        function b() {
          var e = r();
          if (y(e)) return _(e);
          m = setTimeout(b, function(e) {
            var n = t - (e - f);
            return h ? i(n, u - (e - p)) : n
          }(e))
        }

        function _(e) {
          return m = void 0, g && c ? x(e) : (c = l = void 0, d)
        }

        function S() {
          var e = r(),
            n = y(e);
          if (c = arguments, l = this, f = e, n) {
            if (void 0 === m) return function(e) {
              return p = e, m = setTimeout(b, t), v ? x(e) : d
            }(f);
            if (h) return clearTimeout(m), m = setTimeout(b, t), x(f)
          }
          return void 0 === m && (m = setTimeout(b, t)), d
        }
        return t = s(t) || 0, a(n) && (v = !!n.leading, u = (h = "maxWait" in n) ? o(s(n.maxWait) || 0, t) : u, g = "trailing" in n ? !!n.trailing : g), S.cancel = function() {
          void 0 !== m && clearTimeout(m), p = 0, c = f = l = m = void 0
        }, S.flush = function() {
          return void 0 === m ? d : _(r())
        }, S
      }
    },
    4078: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    9842: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    151: (e, t, n) => {
      var a = n(8970),
        r = n(9842);
      e.exports = function(e) {
        return "symbol" == typeof e || r(e) && "[object Symbol]" == a(e)
      }
    },
    1923: (e, t, n) => {
      var a = n(1715);
      e.exports = function() {
        return a.Date.now()
      }
    },
    9789: (e, t, n) => {
      var a = n(9284),
        r = n(4078),
        s = n(151),
        o = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (s(e)) return NaN;
        if (r(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = r(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = a(e);
        var n = i.test(e);
        return n || c.test(e) ? l(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e
      }
    }
  }
]);