/*! For license information please see 4a80c8e446438349e6bf.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_sites_circolocorecords = self.webpackChunk_rockstargames_sites_circolocorecords || []).push([
  [346, 479], {
    2346: (e, t, l) => {
      l.r(t), l.d(t, {
        FormMetaField: () => i,
        MetaFields: () => r,
        componentsForTinaParser: () => y,
        formTemplates: () => v,
        tinaBlockTemplates: () => S
      });
      var a = l(559),
        o = l(4479);
      const s = [{
        value: null,
        label: "-- Select Type of CLR Page This is --"
      }];
      Object.keys(o.types).map((e => {
        s.push({
          value: o.types[e].value,
          label: o.types[e].name
        })
      }));
      const r = () => [{
          name: "title",
          label: "Title",
          component: "text"
        }, {
          name: "subtitle",
          label: "Subtitle",
          component: "text"
        }, {
          name: "blurb",
          label: "Meta description",
          component: "textarea"
        }, {
          component: "select",
          name: "type",
          label: "Type",
          options: s
        }],
        n = {
          name: "images",
          component: "group",
          label: "Images for this item.",
          fields: [(e => {
            let {
              label: t,
              name: l
            } = {
              name: "card",
              label: "Card Image"
            };
            return {
              component: "group",
              label: t,
              name: l,
              fields: [{
                name: "mobile",
                label: "Mobile",
                component: "image",
                previewSrc: a.previewSrc,
                uploadDir: a.uploadDir
              }, {
                name: "desktop",
                label: "Desktop",
                component: "image",
                previewSrc: a.previewSrc,
                uploadDir: a.uploadDir
              }]
            }
          })()]
        },
        c = {
          name: "cardPath",
          label: "Associated Card",
          description: "Relative path to the card associated to this article (ex: /releases?info=913a9)",
          component: "text"
        },
        i = () => ({
          name: "meta",
          label: "Metadata",
          component: "group",
          description: "Title, subtitle, meta...",
          fields: [...r(), {
            name: "created",
            label: "Post Date",
            component: "date",
            dateFormat: "YYYY-MM-DD",
            timeFormat: "HH:mm:ss"
          }, n, c]
        });
      var d = l(8976),
        m = l(4224),
        b = l.n(m),
        p = l(6947),
        u = l(9542);
      const f = {
        btn: "ea0ec3a6a22a07263525",
        text: "a2b8246d9331c8510ad2",
        medium: "e66576c42e8ccacfe69c",
        small: "c6ae2cbf9cbbb29c9004"
      };
      var h = l(9706);
      const x = e => {
        let {
          text: t,
          onClick: l,
          btnColor: a = "black",
          size: o,
          className: s,
          disabled: r = !1
        } = e;
        const n = {
          color: "black" === a ? "#fff" : "#000",
          backgroundColor: "black" === a ? "transparent" : "#fff"
        };
        return (0, h.jsx)("button", {
          className: [f[o], f[s], f.btn].join(" "),
          onClick: l,
          style: n,
          type: "button",
          disabled: r,
          children: (0, h.jsx)("div", {
            className: f.text,
            children: t
          })
        })
      };
      var g = l(1853);
      const y = {
          ...d,
          RockstarVideoPlayer: b(),
          clr: {
            Hero: e => {
              let {
                layout: t,
                title: l,
                subtitle: a,
                body: o,
                mobileImg: s = "",
                desktopImg: r = "",
                video: n = null,
                backgroundColor: c,
                buttons: i = {},
                style: m
              } = e;
              const p = {
                  oneCol: "eed263f2885de52aa695",
                  twoCol: "ed10144f7a2d4bc2539d"
                },
                f = i.button1 || {},
                g = i.button2 || {},
                y = {
                  "--background": c ?? "var(--black-200)",
                  "--mobile-image": `url(${(0,u.useGetCdnSource)(s)})` ?? 0,
                  "--desktop-image": `url(${(0,u.useGetCdnSource)(r)})` ?? 0
                };
              return (0, h.jsx)("section", {
                className: "f93d8050c96c297d55c8",
                style: {
                  ...y,
                  ...m
                },
                children: (0, h.jsxs)(d.Grid, {
                  className: p[t],
                  children: [(0, h.jsx)("div", {
                    className: "c532bb32973c988d7995",
                    children: r ? (0, h.jsxs)("div", {
                      className: "f267f6ef1f6cc9ba549f",
                      children: [(0, h.jsx)("img", {
                        alt: "art",
                        className: "f796dbd720eb774457db"
                      }), (0, h.jsx)("img", {
                        alt: "art",
                        className: "b4b0c570d0bd3dfa229a"
                      })]
                    }) : n && (0, h.jsx)("div", {
                      className: "f17afd9c3748ddddcb3b",
                      children: (0, h.jsx)(b(), {
                        context: "embed",
                        autoplay: !1,
                        id: n.id,
                        hero: !0,
                        isClr: !0
                      })
                    })
                  }), "twoCol" === t && (0, h.jsxs)("div", {
                    className: "c2f56b053694bb351ea1",
                    children: [(0, h.jsxs)("div", {
                      className: "abb2117a65c9f97feead",
                      children: [(0, h.jsx)("h2", {
                        children: l
                      }), a && (0, h.jsx)("h4", {
                        children: a
                      }), (0, h.jsx)("p", {
                        className: "f5213190b84727d0dca4",
                        children: o
                      })]
                    }), (f.text || g.text) && (0, h.jsxs)("div", {
                      className: "fef7924889170b0ecd1c",
                      children: [f.text && (0, h.jsx)(d.A, {
                        to: f.url,
                        target: "_self",
                        children: (0, h.jsx)(x, {
                          className: "heroBtn",
                          text: f.text,
                          size: "medium",
                          onClick: () => {},
                          btnColor: "white"
                        })
                      }), g.text && (0, h.jsx)(d.A, {
                        to: g.url,
                        target: "_self",
                        children: (0, h.jsx)(x, {
                          className: "heroBtn",
                          text: g.text,
                          btnColor: "black",
                          size: "medium",
                          onClick: () => {}
                        })
                      })]
                    })]
                  })]
                })
              })
            },
            NewsIntro: e => {
              let {
                created_formatted: t,
                title: l,
                subtitle: a
              } = e;
              return (0, h.jsxs)("div", {
                className: "eaa94e1cda1ccf2bd7dd",
                children: [(0, h.jsx)("h6", {
                  children: t
                }), (0, h.jsx)("h1", {
                  children: l
                }), (0, h.jsx)("h4", {
                  children: a
                })]
              })
            },
            Highlights: e => {
              let {
                type: t = "releases",
                tinaModule: l
              } = e;
              const a = {
                  Deck: p.Deck,
                  ClrCard: p.ClrCard
                },
                o = {
                  releases: "/releases",
                  store: "https://store.circolocorecords.com"
                };
              return (0, h.jsx)("section", {
                className: "afff74ab0d4299bcc98f",
                "data-context": "clr-grid",
                children: (0, h.jsxs)(d.Grid, {
                  className: "a5e55c55927b76bbb503",
                  children: [(0, h.jsx)(d.TinaModuleFetchNRender, {
                    components: a,
                    id: l
                  }), (0, h.jsx)(d.A, {
                    className: "fcd34cd1adc54c4fd994",
                    to: o[t],
                    target: o[t].startsWith("http") ? "_blank" : "_self",
                    children: {
                      releases: "See All Releases",
                      store: "See All Store Items"
                    } [t]
                  })]
                })
              })
            }
          },
          gen9: {
            TinaWrapper: e => {
              let {
                children: t,
                style: l,
                theme: a
              } = e;
              const [o, s] = (0, g.useState)(a);
              return (0, g.useEffect)((() => {
                a && s(a)
              }), [a]), (0, h.jsx)("div", {
                className: "cce3c47240f1835b9e3d",
                style: l,
                "data-theme": o,
                children: t
              })
            }
          },
          CalloutSection: d.CalloutSection,
          Deck: p.Deck,
          TinaModuleFetchNRender: d.TinaModuleFetchNRender
        },
        v = e => {
          switch (e) {
            case o.types.RELEASE.value:
              return {
                Grid: {
                  label: "CLR Root",
                  templates: {
                    "clr.Hero": null,
                    RockstarVideoPlayer: null
                  }
                }
              };
            case o.types.UPDATE.value:
              return {
                Grid: {
                  label: "CLR Root",
                  templates: {
                    "clr.NewsIntro": null,
                    "clr.Hero": null,
                    CalloutSection: null,
                    HTMLElement: null
                  }
                }
              };
            default:
              return []
          }
        };
      var C = l(3616),
        k = l(3204),
        N = l.n(k);
      const S = {
        Hero: () => ({
          label: "CLR Hero",
          fields: [{
            name: "layout",
            label: "Hero Layout",
            description: "Are there two columns or one (img only)",
            component: "select",
            options: [{
              value: "",
              label: "-- Select a Type --"
            }, {
              value: "twoCol",
              label: "Two Columns"
            }, {
              value: "oneCol",
              label: "One Column (Full Img/Video)"
            }]
          }, {
            label: "Mobile Image (1:1 ratio)",
            name: "mobileImg",
            component: "image",
            clearable: !0,
            uploadDir: a.uploadDir,
            parse: a.parse,
            previewSrc: a.previewSrc
          }, {
            label: "Desktop Image (16:9 ratio)",
            name: "desktopImg",
            component: "image",
            clearable: !0,
            uploadDir: a.uploadDir,
            parse: a.parse,
            previewSrc: a.previewSrc
          }, (0, C.translatedField)({
            name: "title",
            label: "Title",
            description: "CLR Hero title text",
            component: "text"
          }), (0, C.translatedField)({
            name: "subtitle",
            label: "Subtitle",
            description: "CLR Hero subtitle text",
            component: "text"
          }), (0, C.translatedField)({
            name: "body",
            label: "Body Text",
            description: "CLR Hero body text",
            component: "text"
          }), {
            name: "video",
            label: "Video Source",
            component: "group",
            fields: N()().fields
          }, {
            name: "buttons",
            label: "Buttons (optional)",
            component: "group",
            fields: [{
              name: "button1",
              label: "Button 1 (optional)",
              component: "group",
              fields: [{
                name: "text",
                label: "Text",
                component: "text"
              }, {
                name: "url",
                label: "Url",
                component: "text"
              }]
            }, {
              name: "button2",
              label: "Button 2 (optional)",
              component: "group",
              fields: [{
                name: "text",
                label: "Text",
                component: "text"
              }, {
                name: "url",
                label: "Url",
                component: "text"
              }]
            }]
          }, (0, C.StyleField)({
            filter: "image"
          })],
          defaultItem: () => (0, C.defaultItemUnique)(),
          itemProps: e => (0, C.itemPropsWithKey)(e, {
            label: `${e?.[C.TINA_MEMOQ_PREFIX]?.title??"NEW"} [CLR Hero]`
          })
        }),
        NewsIntro: () => ({
          label: "CLR News Intro",
          defaultItem: () => (0, C.defaultItemUnique)(),
          itemProps: e => (0, C.itemPropsWithKey)(e, {
            label: `${e?.[C.TINA_MEMOQ_PREFIX]?.title??"NEW"} [CLR News Intro]`
          })
        }),
        Highlights: () => ({
          label: "Highlight Section",
          fields: [(0, C.NameField)(), {
            name: "type",
            label: "Highlight Section Type",
            description: "Is this a store highlight or a release highlight section?",
            component: "select",
            options: [{
              value: "",
              label: "-- Select a Type --"
            }, {
              value: "releases",
              label: "Releases"
            }, {
              value: "store",
              label: "Store"
            }]
          }, {
            name: "tinaModule",
            component: "tina-module-selector",
            variables: {
              types: ["deck"]
            },
            label: "Tina Module"
          }, (0, C.StyleField)({
            filter: "deck"
          })],
          defaultItem: () => (0, C.defaultItemUnique)(),
          itemProps: e => (0, C.itemPropsWithKey)(e, {
            label: `${e?.name??"NEW"} [Highlight]`
          })
        })
      }
    },
    4479: (e, t, l) => {
      l.r(t), l.d(t, {
        faux: () => o,
        types: () => a
      });
      const a = {
          UPDATE: {
            name: "CLR Update",
            value: "clr-update"
          },
          RELEASE: {
            name: "CLR Release",
            value: "clr-release"
          }
        },
        o = 12
    },
    115: (e, t, l) => {
      var a = l(1853),
        o = Symbol.for("react.element"),
        s = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        r = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        n = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, l) {
        var a, c = {},
          i = null,
          d = null;
        for (a in void 0 !== l && (i = "" + l), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (d = t.ref), t) s.call(t, a) && !n.hasOwnProperty(a) && (c[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === c[a] && (c[a] = t[a]);
        return {
          $$typeof: o,
          type: e,
          key: i,
          ref: d,
          props: c,
          _owner: r.current
        }
      }
      t.jsx = c, t.jsxs = c
    },
    9706: (e, t, l) => {
      e.exports = l(115)
    }
  }
]);