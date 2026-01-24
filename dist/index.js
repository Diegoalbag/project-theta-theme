import $t, { jsx as U, jsxs as he } from "react/jsx-runtime";
import * as _e from "react";
import ve, { useState as Rn } from "react";
import { cva as vn } from "class-variance-authority";
import { clsx as bn } from "clsx";
import { twMerge as yn } from "tailwind-merge";
import Cn from "react-dom";
import { Check as Ue, ArrowRight as Pn, X as On, Menu as An } from "lucide-react";
function Gt(o, e) {
  if (typeof o == "function")
    return o(e);
  o != null && (o.current = e);
}
function Sn(...o) {
  return (e) => {
    let u = !1;
    const l = o.map((s) => {
      const t = Gt(s, e);
      return !u && typeof t == "function" && (u = !0), t;
    });
    if (u)
      return () => {
        for (let s = 0; s < l.length; s++) {
          const t = l[s];
          typeof t == "function" ? t() : Gt(o[s], null);
        }
      };
  };
}
var wn = Symbol.for("react.lazy"), He = _e[" use ".trim().toString()];
function Tn(o) {
  return typeof o == "object" && o !== null && "then" in o;
}
function en(o) {
  return o != null && typeof o == "object" && "$$typeof" in o && o.$$typeof === wn && "_payload" in o && Tn(o._payload);
}
// @__NO_SIDE_EFFECTS__
function tn(o) {
  const e = /* @__PURE__ */ xn(o), u = _e.forwardRef((l, s) => {
    let { children: t, ...n } = l;
    en(t) && typeof He == "function" && (t = He(t._payload));
    const i = _e.Children.toArray(t), a = i.find(Ln);
    if (a) {
      const f = a.props.children, d = i.map((g) => g === a ? _e.Children.count(f) > 1 ? _e.Children.only(null) : _e.isValidElement(f) ? f.props.children : null : g);
      return /* @__PURE__ */ U(e, { ...n, ref: s, children: _e.isValidElement(f) ? _e.cloneElement(f, void 0, d) : null });
    }
    return /* @__PURE__ */ U(e, { ...n, ref: s, children: t });
  });
  return u.displayName = `${o}.Slot`, u;
}
var Nn = /* @__PURE__ */ tn("Slot");
// @__NO_SIDE_EFFECTS__
function xn(o) {
  const e = _e.forwardRef((u, l) => {
    let { children: s, ...t } = u;
    if (en(s) && typeof He == "function" && (s = He(s._payload)), _e.isValidElement(s)) {
      const n = jn(s), i = Mn(t, s.props);
      return s.type !== _e.Fragment && (i.ref = l ? Sn(l, n) : n), _e.cloneElement(s, i);
    }
    return _e.Children.count(s) > 1 ? _e.Children.only(null) : null;
  });
  return e.displayName = `${o}.SlotClone`, e;
}
var In = Symbol("radix.slottable");
function Ln(o) {
  return _e.isValidElement(o) && typeof o.type == "function" && "__radixId" in o.type && o.type.__radixId === In;
}
function Mn(o, e) {
  const u = { ...e };
  for (const l in e) {
    const s = o[l], t = e[l];
    /^on[A-Z]/.test(l) ? s && t ? u[l] = (...i) => {
      const a = t(...i);
      return s(...i), a;
    } : s && (u[l] = s) : l === "style" ? u[l] = { ...s, ...t } : l === "className" && (u[l] = [s, t].filter(Boolean).join(" "));
  }
  return { ...o, ...u };
}
function jn(o) {
  let e = Object.getOwnPropertyDescriptor(o.props, "ref")?.get, u = e && "isReactWarning" in e && e.isReactWarning;
  return u ? o.ref : (e = Object.getOwnPropertyDescriptor(o, "ref")?.get, u = e && "isReactWarning" in e && e.isReactWarning, u ? o.props.ref : o.props.ref || o.ref);
}
function Dn(...o) {
  return yn(bn(o));
}
const Hn = vn(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function me({
  className: o,
  variant: e,
  size: u,
  asChild: l = !1,
  ...s
}) {
  return /* @__PURE__ */ U(
    l ? Nn : "button",
    {
      "data-slot": "button",
      className: Dn(Hn({ variant: e, size: u, className: o })),
      ...s
    }
  );
}
var $n = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], kn = $n.reduce((o, e) => {
  const u = /* @__PURE__ */ tn(`Primitive.${e}`), l = _e.forwardRef((s, t) => {
    const { asChild: n, ...i } = s, a = n ? u : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ U(a, { ...i, ref: t });
  });
  return l.displayName = `Primitive.${e}`, { ...o, [e]: l };
}, {}), qn = "AspectRatio", rn = _e.forwardRef(
  (o, e) => {
    const { ratio: u = 1 / 1, style: l, ...s } = o;
    return /* @__PURE__ */ U(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / u}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ U(
          kn.div,
          {
            ...s,
            ref: e,
            style: {
              ...l,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
rn.displayName = qn;
var Un = rn;
const Xn = Un;
function nn(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var Xe = {}, Ge = {}, Ft;
function be() {
  if (Ft) return Ge;
  Ft = 1;
  function o(e) {
    return e && e.__esModule ? e : { default: e };
  }
  return Ge._ = o, Ge;
}
var Fe = {}, Be = {}, Bt;
function kt() {
  return Bt || (Bt = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "warnOnce", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    let e = (u) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const u = /* @__PURE__ */ new Set();
      e = (l) => {
        u.has(l) || console.warn(l), u.add(l);
      };
    }
  })(Be)), Be;
}
var ze = {}, zt;
function Gn() {
  return zt || (zt = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "getImageBlurSvg", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e({ widthInt: u, heightInt: l, blurWidth: s, blurHeight: t, blurDataURL: n, objectFit: i }) {
      const f = s ? s * 40 : u, d = t ? t * 40 : l, g = f && d ? `viewBox='0 0 ${f} ${d}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${g}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${g ? "none" : i === "contain" ? "xMidYMid" : i === "cover" ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`;
    }
  })(ze)), ze;
}
var Ve = {}, Vt;
function qt() {
  return Vt || (Vt = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(s, t) {
      for (var n in t) Object.defineProperty(s, n, {
        enumerable: !0,
        get: t[n]
      });
    }
    e(o, {
      VALID_LOADERS: function() {
        return u;
      },
      imageConfigDefault: function() {
        return l;
      }
    });
    const u = [
      "default",
      "imgix",
      "cloudinary",
      "akamai",
      "custom"
    ], l = {
      deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
      ],
      imageSizes: [
        32,
        48,
        64,
        96,
        128,
        256,
        384
      ],
      path: "/_next/image",
      loader: "default",
      loaderFile: "",
      /**
      * @deprecated Use `remotePatterns` instead to protect your application from malicious users.
      */
      domains: [],
      disableStaticImages: !1,
      minimumCacheTTL: 14400,
      formats: [
        "image/webp"
      ],
      maximumRedirects: 3,
      dangerouslyAllowLocalIP: !1,
      dangerouslyAllowSVG: !1,
      contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
      contentDispositionType: "attachment",
      localPatterns: void 0,
      remotePatterns: [],
      qualities: [
        75
      ],
      unoptimized: !1
    };
  })(Ve)), Ve;
}
var Wt;
function on() {
  return Wt || (Wt = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "getImgProps", {
      enumerable: !0,
      get: function() {
        return v;
      }
    });
    const e = kt(), u = Gn(), l = qt(), s = [
      "lazy",
      "eager",
      void 0
    ], t = [
      "-moz-initial",
      "fill",
      "none",
      "scale-down",
      void 0
    ];
    function n(r) {
      return r.default !== void 0;
    }
    function i(r) {
      return r.src !== void 0;
    }
    function a(r) {
      return !!r && typeof r == "object" && (n(r) || i(r));
    }
    const f = /* @__PURE__ */ new Map();
    let d;
    function g(r) {
      return typeof r > "u" ? r : typeof r == "number" ? Number.isFinite(r) ? r : NaN : typeof r == "string" && /^[0-9]+$/.test(r) ? parseInt(r, 10) : NaN;
    }
    function b({ deviceSizes: r, allSizes: E }, c, A) {
      if (A) {
        const R = /(^|\s)(1?\d?\d)vw/g, h = [];
        for (let O; O = R.exec(A); O)
          h.push(parseInt(O[2]));
        if (h.length) {
          const O = Math.min(...h) * 0.01;
          return {
            widths: E.filter((S) => S >= r[0] * O),
            kind: "w"
          };
        }
        return {
          widths: E,
          kind: "w"
        };
      }
      return typeof c != "number" ? {
        widths: r,
        kind: "w"
      } : {
        widths: [
          ...new Set(
            // > This means that most OLED screens that say they are 3x resolution,
            // > are actually 3x in the green color, but only 1.5x in the red and
            // > blue colors. Showing a 3x resolution image in the app vs a 2x
            // > resolution image will be visually the same, though the 3x image
            // > takes significantly more data. Even true 3x resolution screens are
            // > wasteful as the human eye cannot see that level of detail without
            // > something like a magnifying glass.
            // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
            [
              c,
              c * 2
              /*, width * 3*/
            ].map((R) => E.find((h) => h >= R) || E[E.length - 1])
          )
        ],
        kind: "x"
      };
    }
    function _({ config: r, src: E, unoptimized: c, width: A, quality: p, sizes: R, loader: h }) {
      if (c)
        return {
          src: E,
          srcSet: void 0,
          sizes: void 0
        };
      const { widths: O, kind: S } = b(r, A, R), I = O.length - 1;
      return {
        sizes: !R && S === "w" ? "100vw" : R,
        srcSet: O.map((j, m) => `${h({
          config: r,
          src: E,
          quality: p,
          width: j
        })} ${S === "w" ? j : m + 1}${S}`).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: h({
          config: r,
          src: E,
          quality: p,
          width: O[I]
        })
      };
    }
    function v({ src: r, sizes: E, unoptimized: c = !1, priority: A = !1, preload: p = !1, loading: R, className: h, quality: O, width: S, height: I, fill: j = !1, style: m, overrideSrc: T, onLoad: N, onLoadingComplete: F, placeholder: L = "empty", blurDataURL: k, fetchPriority: X, decoding: ee = "async", layout: z, objectFit: H, objectPosition: K, lazyBoundary: te, lazyRoot: re, ...Z }, W) {
      const { imgConf: Y, showAltText: Q, blurComplete: P, defaultLoader: ae } = W;
      let G, ce = Y || l.imageConfigDefault;
      if ("allSizes" in ce)
        G = ce;
      else {
        const w = [
          ...ce.deviceSizes,
          ...ce.imageSizes
        ].sort((J, Ee) => J - Ee), B = ce.deviceSizes.sort((J, Ee) => J - Ee), ue = ce.qualities?.sort((J, Ee) => J - Ee);
        G = {
          ...ce,
          allSizes: w,
          deviceSizes: B,
          qualities: ue
        };
      }
      if (typeof ae > "u")
        throw Object.defineProperty(new Error(`images.loaderFile detected but the file is missing default export.
Read more: https://nextjs.org/docs/messages/invalid-images-config`), "__NEXT_ERROR_CODE", {
          value: "E163",
          enumerable: !1,
          configurable: !0
        });
      let y = Z.loader || ae;
      delete Z.loader, delete Z.srcSet;
      const C = "__next_img_default" in y;
      if (C) {
        if (G.loader === "custom")
          throw Object.defineProperty(new Error(`Image with src "${r}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
            value: "E252",
            enumerable: !1,
            configurable: !0
          });
      } else {
        const w = y;
        y = (B) => {
          const { config: ue, ...J } = B;
          return w(J);
        };
      }
      if (z) {
        z === "fill" && (j = !0);
        const w = {
          intrinsic: {
            maxWidth: "100%",
            height: "auto"
          },
          responsive: {
            width: "100%",
            height: "auto"
          }
        }, B = {
          responsive: "100vw",
          fill: "100vw"
        }, ue = w[z];
        ue && (m = {
          ...m,
          ...ue
        });
        const J = B[z];
        J && !E && (E = J);
      }
      let ge = "", D = g(S), q = g(I), fe, de;
      if (a(r)) {
        const w = n(r) ? r.default : r;
        if (!w.src)
          throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(w)}`), "__NEXT_ERROR_CODE", {
            value: "E460",
            enumerable: !1,
            configurable: !0
          });
        if (!w.height || !w.width)
          throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(w)}`), "__NEXT_ERROR_CODE", {
            value: "E48",
            enumerable: !1,
            configurable: !0
          });
        if (fe = w.blurWidth, de = w.blurHeight, k = k || w.blurDataURL, ge = w.src, !j) {
          if (!D && !q)
            D = w.width, q = w.height;
          else if (D && !q) {
            const B = D / w.width;
            q = Math.round(w.height * B);
          } else if (!D && q) {
            const B = q / w.height;
            D = Math.round(w.width * B);
          }
        }
      }
      r = typeof r == "string" ? r : ge;
      let se = !A && !p && (R === "lazy" || typeof R > "u");
      (!r || r.startsWith("data:") || r.startsWith("blob:")) && (c = !0, se = !1), G.unoptimized && (c = !0), C && !G.dangerouslyAllowSVG && r.split("?", 1)[0].endsWith(".svg") && (c = !0);
      const ie = g(O);
      if (process.env.NODE_ENV !== "production") {
        if (G.output === "export" && C && !c)
          throw Object.defineProperty(new Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api"), "__NEXT_ERROR_CODE", {
            value: "E500",
            enumerable: !1,
            configurable: !0
          });
        if (!r)
          c = !0;
        else if (j) {
          if (S)
            throw Object.defineProperty(new Error(`Image with src "${r}" has both "width" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
              value: "E96",
              enumerable: !1,
              configurable: !0
            });
          if (I)
            throw Object.defineProperty(new Error(`Image with src "${r}" has both "height" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
              value: "E115",
              enumerable: !1,
              configurable: !0
            });
          if (m?.position && m.position !== "absolute")
            throw Object.defineProperty(new Error(`Image with src "${r}" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.`), "__NEXT_ERROR_CODE", {
              value: "E216",
              enumerable: !1,
              configurable: !0
            });
          if (m?.width && m.width !== "100%")
            throw Object.defineProperty(new Error(`Image with src "${r}" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
              value: "E73",
              enumerable: !1,
              configurable: !0
            });
          if (m?.height && m.height !== "100%")
            throw Object.defineProperty(new Error(`Image with src "${r}" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
              value: "E404",
              enumerable: !1,
              configurable: !0
            });
        } else {
          if (typeof D > "u")
            throw Object.defineProperty(new Error(`Image with src "${r}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
              value: "E451",
              enumerable: !1,
              configurable: !0
            });
          if (isNaN(D))
            throw Object.defineProperty(new Error(`Image with src "${r}" has invalid "width" property. Expected a numeric value in pixels but received "${S}".`), "__NEXT_ERROR_CODE", {
              value: "E66",
              enumerable: !1,
              configurable: !0
            });
          if (typeof q > "u")
            throw Object.defineProperty(new Error(`Image with src "${r}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
              value: "E397",
              enumerable: !1,
              configurable: !0
            });
          if (isNaN(q))
            throw Object.defineProperty(new Error(`Image with src "${r}" has invalid "height" property. Expected a numeric value in pixels but received "${I}".`), "__NEXT_ERROR_CODE", {
              value: "E444",
              enumerable: !1,
              configurable: !0
            });
          if (/^[\x00-\x20]/.test(r))
            throw Object.defineProperty(new Error(`Image with src "${r}" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
              value: "E176",
              enumerable: !1,
              configurable: !0
            });
          if (/[\x00-\x20]$/.test(r))
            throw Object.defineProperty(new Error(`Image with src "${r}" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
              value: "E21",
              enumerable: !1,
              configurable: !0
            });
        }
        if (!s.includes(R))
          throw Object.defineProperty(new Error(`Image with src "${r}" has invalid "loading" property. Provided "${R}" should be one of ${s.map(String).join(",")}.`), "__NEXT_ERROR_CODE", {
            value: "E357",
            enumerable: !1,
            configurable: !0
          });
        if (A && R === "lazy")
          throw Object.defineProperty(new Error(`Image with src "${r}" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
            value: "E218",
            enumerable: !1,
            configurable: !0
          });
        if (p && R === "lazy")
          throw Object.defineProperty(new Error(`Image with src "${r}" has both "preload" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
            value: "E803",
            enumerable: !1,
            configurable: !0
          });
        if (p && A)
          throw Object.defineProperty(new Error(`Image with src "${r}" has both "preload" and "priority" properties. Only "preload" should be used.`), "__NEXT_ERROR_CODE", {
            value: "E802",
            enumerable: !1,
            configurable: !0
          });
        if (L !== "empty" && L !== "blur" && !L.startsWith("data:image/"))
          throw Object.defineProperty(new Error(`Image with src "${r}" has invalid "placeholder" property "${L}".`), "__NEXT_ERROR_CODE", {
            value: "E431",
            enumerable: !1,
            configurable: !0
          });
        if (L !== "empty" && D && q && D * q < 1600 && (0, e.warnOnce)(`Image with src "${r}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`), ie && G.qualities && !G.qualities.includes(ie) && (0, e.warnOnce)(`Image with src "${r}" is using quality "${ie}" which is not configured in images.qualities [${G.qualities.join(", ")}]. Please update your config to [${[
          ...G.qualities,
          ie
        ].sort().join(", ")}].
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`), L === "blur" && !k) {
          const w = [
            "jpeg",
            "png",
            "webp",
            "avif"
          ];
          throw Object.defineProperty(new Error(`Image with src "${r}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ${w.join(",")} (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
            value: "E371",
            enumerable: !1,
            configurable: !0
          });
        }
        if ("ref" in Z && (0, e.warnOnce)(`Image with src "${r}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`), !c && !C) {
          const w = y({
            config: G,
            src: r,
            width: D || 400,
            quality: ie || 75
          });
          let B;
          try {
            B = new URL(w);
          } catch {
          }
          (w === r || B && B.pathname === r && !B.search) && (0, e.warnOnce)(`Image with src "${r}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
        }
        F && (0, e.warnOnce)(`Image with src "${r}" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.`);
        for (const [w, B] of Object.entries({
          layout: z,
          objectFit: H,
          objectPosition: K,
          lazyBoundary: te,
          lazyRoot: re
        }))
          B && (0, e.warnOnce)(`Image with src "${r}" has legacy prop "${w}". Did you forget to run the codemod?
Read more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
        if (typeof window < "u" && !d && window.PerformanceObserver) {
          d = new PerformanceObserver((w) => {
            for (const B of w.getEntries()) {
              const ue = B?.element?.src || "", J = f.get(ue);
              J && J.loading === "lazy" && J.placeholder === "empty" && !J.src.startsWith("data:") && !J.src.startsWith("blob:") && (0, e.warnOnce)(`Image with src "${J.src}" was detected as the Largest Contentful Paint (LCP). Please add the \`loading="eager"\` property if this image is above the fold.
Read more: https://nextjs.org/docs/app/api-reference/components/image#loading`);
            }
          });
          try {
            d.observe({
              type: "largest-contentful-paint",
              buffered: !0
            });
          } catch (w) {
            console.error(w);
          }
        }
      }
      const pe = Object.assign(j ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: H,
        objectPosition: K
      } : {}, Q ? {} : {
        color: "transparent"
      }, m), le = !P && L !== "empty" ? L === "blur" ? `url("data:image/svg+xml;charset=utf-8,${(0, u.getImageBlurSvg)({
        widthInt: D,
        heightInt: q,
        blurWidth: fe,
        blurHeight: de,
        blurDataURL: k || "",
        objectFit: pe.objectFit
      })}")` : `url("${L}")` : null, V = t.includes(pe.objectFit) ? pe.objectFit === "fill" ? "100% 100%" : "cover" : pe.objectFit;
      let $ = le ? {
        backgroundSize: V,
        backgroundPosition: pe.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: le
      } : {};
      process.env.NODE_ENV === "development" && $.backgroundImage && L === "blur" && k?.startsWith("/") && ($.backgroundImage = `url("${k}")`);
      const ne = _({
        config: G,
        src: r,
        unoptimized: c,
        width: D,
        quality: ie,
        sizes: E,
        loader: y
      }), M = se ? "lazy" : R;
      if (process.env.NODE_ENV !== "production" && typeof window < "u") {
        let w;
        try {
          w = new URL(ne.src);
        } catch {
          w = new URL(ne.src, window.location.href);
        }
        f.set(w.href, {
          src: r,
          loading: M,
          placeholder: L
        });
      }
      return {
        props: {
          ...Z,
          loading: M,
          fetchPriority: X,
          width: D,
          height: q,
          decoding: ee,
          className: h,
          style: {
            ...pe,
            ...$
          },
          sizes: ne.sizes,
          srcSet: ne.srcSet,
          src: T || ne.src
        },
        meta: {
          unoptimized: c,
          preload: p || A,
          placeholder: L,
          fill: j
        }
      };
    }
  })(Fe)), Fe;
}
var Ce = { exports: {} }, We = {}, Kt;
function $e() {
  if (Kt) return We;
  Kt = 1;
  function o(u) {
    if (typeof WeakMap != "function") return null;
    var l = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
    return (o = function(t) {
      return t ? s : l;
    })(u);
  }
  function e(u, l) {
    if (!l && u && u.__esModule) return u;
    if (u === null || typeof u != "object" && typeof u != "function") return { default: u };
    var s = o(l);
    if (s && s.has(u)) return s.get(u);
    var t = { __proto__: null }, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in u)
      if (i !== "default" && Object.prototype.hasOwnProperty.call(u, i)) {
        var a = n ? Object.getOwnPropertyDescriptor(u, i) : null;
        a && (a.get || a.set) ? Object.defineProperty(t, i, a) : t[i] = u[i];
      }
    return t.default = u, s && s.set(u, t), t;
  }
  return We._ = e, We;
}
var Pe = { exports: {} }, Ke = {}, Yt;
function Fn() {
  return Yt || (Yt = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "default", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    const e = ve, u = typeof window > "u", l = u ? () => {
    } : e.useLayoutEffect, s = u ? () => {
    } : e.useEffect;
    function t(n) {
      const { headManager: i, reduceComponentsToState: a } = n;
      function f() {
        if (i && i.mountedInstances) {
          const d = e.Children.toArray(Array.from(i.mountedInstances).filter(Boolean));
          i.updateHead(a(d));
        }
      }
      return u && (i?.mountedInstances?.add(n.children), f()), l(() => (i?.mountedInstances?.add(n.children), () => {
        i?.mountedInstances?.delete(n.children);
      })), l(() => (i && (i._pendingUpdate = f), () => {
        i && (i._pendingUpdate = f);
      })), s(() => (i && i._pendingUpdate && (i._pendingUpdate(), i._pendingUpdate = null), () => {
        i && i._pendingUpdate && (i._pendingUpdate(), i._pendingUpdate = null);
      })), null;
    }
  })(Ke)), Ke;
}
var Ye = {}, Qt;
function Bn() {
  return Qt || (Qt = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "HeadManagerContext", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const l = (/* @__PURE__ */ (/* @__PURE__ */ be())._(ve)).default.createContext({});
    process.env.NODE_ENV !== "production" && (l.displayName = "HeadManagerContext");
  })(Ye)), Ye;
}
var Zt;
function zn() {
  return Zt || (Zt = 1, (function(o, e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function u(c, A) {
      for (var p in A) Object.defineProperty(c, p, {
        enumerable: !0,
        get: A[p]
      });
    }
    u(e, {
      default: function() {
        return E;
      },
      defaultHead: function() {
        return d;
      }
    });
    const l = /* @__PURE__ */ be(), s = /* @__PURE__ */ $e(), t = $t, n = /* @__PURE__ */ s._(ve), i = /* @__PURE__ */ l._(Fn()), a = Bn(), f = kt();
    function d() {
      return [
        /* @__PURE__ */ (0, t.jsx)("meta", {
          charSet: "utf-8"
        }, "charset"),
        /* @__PURE__ */ (0, t.jsx)("meta", {
          name: "viewport",
          content: "width=device-width"
        }, "viewport")
      ];
    }
    function g(c, A) {
      return typeof A == "string" || typeof A == "number" ? c : A.type === n.default.Fragment ? c.concat(
        // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
        n.default.Children.toArray(A.props.children).reduce(
          // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
          (p, R) => typeof R == "string" || typeof R == "number" ? p : p.concat(R),
          []
        )
      ) : c.concat(A);
    }
    const b = [
      "name",
      "httpEquiv",
      "charSet",
      "itemProp"
    ];
    function _() {
      const c = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), R = {};
      return (h) => {
        let O = !0, S = !1;
        if (h.key && typeof h.key != "number" && h.key.indexOf("$") > 0) {
          S = !0;
          const I = h.key.slice(h.key.indexOf("$") + 1);
          c.has(I) ? O = !1 : c.add(I);
        }
        switch (h.type) {
          case "title":
          case "base":
            A.has(h.type) ? O = !1 : A.add(h.type);
            break;
          case "meta":
            for (let I = 0, j = b.length; I < j; I++) {
              const m = b[I];
              if (h.props.hasOwnProperty(m))
                if (m === "charSet")
                  p.has(m) ? O = !1 : p.add(m);
                else {
                  const T = h.props[m], N = R[m] || /* @__PURE__ */ new Set();
                  (m !== "name" || !S) && N.has(T) ? O = !1 : (N.add(T), R[m] = N);
                }
            }
            break;
        }
        return O;
      };
    }
    function v(c) {
      return c.reduce(g, []).reverse().concat(d().reverse()).filter(_()).reverse().map((A, p) => {
        const R = A.key || p;
        if (process.env.NODE_ENV === "development")
          if (A.type === "script" && A.props.type !== "application/ld+json") {
            const h = A.props.src ? `<script> tag with src="${A.props.src}"` : "inline <script>";
            (0, f.warnOnce)(`Do not add <script> tags using next/head (see ${h}). Use next/script instead. 
See more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
          } else A.type === "link" && A.props.rel === "stylesheet" && (0, f.warnOnce)(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${A.props.href}"). Use Document instead. 
See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
        return /* @__PURE__ */ n.default.cloneElement(A, {
          key: R
        });
      });
    }
    function r({ children: c }) {
      const A = (0, n.useContext)(a.HeadManagerContext);
      return /* @__PURE__ */ (0, t.jsx)(i.default, {
        reduceComponentsToState: v,
        headManager: A,
        children: c
      });
    }
    const E = r;
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(Pe, Pe.exports)), Pe.exports;
}
var Qe = {}, Jt;
function Vn() {
  return Jt || (Jt = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "ImageConfigContext", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const u = /* @__PURE__ */ (/* @__PURE__ */ be())._(ve), l = qt(), s = u.default.createContext(l.imageConfigDefault);
    process.env.NODE_ENV !== "production" && (s.displayName = "ImageConfigContext");
  })(Qe)), Qe;
}
var Ze = {}, er;
function an() {
  return er || (er = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "RouterContext", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const l = (/* @__PURE__ */ (/* @__PURE__ */ be())._(ve)).default.createContext(null);
    process.env.NODE_ENV !== "production" && (l.displayName = "RouterContext");
  })(Ze)), Ze;
}
var Je = {}, et = {}, tr;
function Wn() {
  return tr || (tr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "findClosestQuality", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(u, l) {
      const s = u || 75;
      return l?.qualities?.length ? l.qualities.reduce((t, n) => Math.abs(n - s) < Math.abs(t - s) ? n : t, 0) : s;
    }
  })(et)), et;
}
var tt = {}, rt = { exports: {} }, rr;
function sn() {
  return rr || (rr = 1, (() => {
    var o = { 170: (s, t, n) => {
      const i = n(510), a = () => {
        if (typeof navigator < "u" && navigator.platform) {
          const d = navigator.platform.toLowerCase();
          return d === "win32" || d === "windows";
        }
        return typeof process < "u" && process.platform ? process.platform === "win32" : !1;
      };
      function f(d, g, b = !1) {
        return g && (g.windows === null || g.windows === void 0) && (g = { ...g, windows: a() }), i(d, g, b);
      }
      Object.assign(f, i), s.exports = f;
    }, 154: (s) => {
      const n = "[^\\\\/]", g = "(?=.)", b = "[^/]", _ = "(?:\\/|$)", v = "(?:^|\\/)", r = `\\.{1,2}${_}`, E = "(?!\\.)", c = `(?!${v}${r})`, A = `(?!\\.{0,1}${_})`, p = `(?!${r})`, R = "[^.\\/]", h = `${b}*?`, S = { DOT_LITERAL: "\\.", PLUS_LITERAL: "\\+", QMARK_LITERAL: "\\?", SLASH_LITERAL: "\\/", ONE_CHAR: g, QMARK: b, END_ANCHOR: _, DOTS_SLASH: r, NO_DOT: E, NO_DOTS: c, NO_DOT_SLASH: A, NO_DOTS_SLASH: p, QMARK_NO_DOT: R, STAR: h, START_ANCHOR: v, SEP: "/" }, I = { ...S, SLASH_LITERAL: "[\\\\/]", QMARK: n, STAR: `${n}*?`, DOTS_SLASH: "\\.{1,2}(?:[\\\\/]|$)", NO_DOT: "(?!\\.)", NO_DOTS: "(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))", NO_DOT_SLASH: "(?!\\.{0,1}(?:[\\\\/]|$))", NO_DOTS_SLASH: "(?!\\.{1,2}(?:[\\\\/]|$))", QMARK_NO_DOT: "[^.\\\\/]", START_ANCHOR: "(?:^|[\\\\/])", END_ANCHOR: "(?:[\\\\/]|$)", SEP: "\\" }, j = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
      s.exports = { MAX_LENGTH: 65536, POSIX_REGEX_SOURCE: j, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, extglobChars(m) {
        return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${m.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
      }, globChars(m) {
        return m === !0 ? I : S;
      } };
    }, 697: (s, t, n) => {
      const i = n(154), a = n(96), { MAX_LENGTH: f, POSIX_REGEX_SOURCE: d, REGEX_NON_SPECIAL_CHARS: g, REGEX_SPECIAL_CHARS_BACKREF: b, REPLACEMENTS: _ } = i, v = (c, A) => {
        if (typeof A.expandRange == "function")
          return A.expandRange(...c, A);
        c.sort();
        const p = `[${c.join("-")}]`;
        try {
          new RegExp(p);
        } catch {
          return c.map(((h) => a.escapeRegex(h))).join("..");
        }
        return p;
      }, r = (c, A) => `Missing ${c}: "${A}" - use "\\\\${A}" to match literal characters`, E = (c, A) => {
        if (typeof c != "string")
          throw new TypeError("Expected a string");
        c = _[c] || c;
        const p = { ...A }, R = typeof p.maxLength == "number" ? Math.min(f, p.maxLength) : f;
        let h = c.length;
        if (h > R)
          throw new SyntaxError(`Input length: ${h}, exceeds maximum allowed length: ${R}`);
        const O = { type: "bos", value: "", output: p.prepend || "" }, S = [O], I = p.capture ? "" : "?:", j = i.globChars(p.windows), m = i.extglobChars(j), { DOT_LITERAL: T, PLUS_LITERAL: N, SLASH_LITERAL: F, ONE_CHAR: L, DOTS_SLASH: k, NO_DOT: X, NO_DOT_SLASH: ee, NO_DOTS_SLASH: z, QMARK: H, QMARK_NO_DOT: K, STAR: te, START_ANCHOR: re } = j, Z = (M) => `(${I}(?:(?!${re}${M.dot ? k : T}).)*?)`, W = p.dot ? "" : X, Y = p.dot ? H : K;
        let Q = p.bash === !0 ? Z(p) : te;
        p.capture && (Q = `(${Q})`), typeof p.noext == "boolean" && (p.noextglob = p.noext);
        const P = { input: c, index: -1, start: 0, dot: p.dot === !0, consumed: "", output: "", prefix: "", backtrack: !1, negated: !1, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: !1, tokens: S };
        c = a.removePrefix(c, P), h = c.length;
        const ae = [], G = [], ce = [];
        let y = O, C;
        const ge = () => P.index === h - 1, D = P.peek = (M = 1) => c[P.index + M], q = P.advance = () => c[++P.index] || "", fe = () => c.slice(P.index + 1), de = (M = "", oe = 0) => {
          P.consumed += M, P.index += oe;
        }, se = (M) => {
          P.output += M.output != null ? M.output : M.value, de(M.value);
        }, ie = () => {
          let M = 1;
          for (; D() === "!" && (D(2) !== "(" || D(3) === "?"); )
            q(), P.start++, M++;
          return M % 2 === 0 ? !1 : (P.negated = !0, P.start++, !0);
        }, pe = (M) => {
          P[M]++, ce.push(M);
        }, le = (M) => {
          P[M]--, ce.pop();
        }, V = (M) => {
          if (y.type === "globstar") {
            const oe = P.braces > 0 && (M.type === "comma" || M.type === "brace"), x = M.extglob === !0 || ae.length && (M.type === "pipe" || M.type === "paren");
            M.type !== "slash" && M.type !== "paren" && !oe && !x && (P.output = P.output.slice(0, -y.output.length), y.type = "star", y.value = "*", y.output = Q, P.output += y.output);
          }
          if (ae.length && M.type !== "paren" && (ae[ae.length - 1].inner += M.value), (M.value || M.output) && se(M), y && y.type === "text" && M.type === "text") {
            y.output = (y.output || y.value) + M.value, y.value += M.value;
            return;
          }
          M.prev = y, S.push(M), y = M;
        }, $ = (M, oe) => {
          const x = { ...m[oe], conditions: 1, inner: "" };
          x.prev = y, x.parens = P.parens, x.output = P.output;
          const w = (p.capture ? "(" : "") + x.open;
          pe("parens"), V({ type: M, value: oe, output: P.output ? "" : L }), V({ type: "paren", extglob: !0, value: q(), output: w }), ae.push(x);
        }, ne = (M) => {
          let oe = M.close + (p.capture ? ")" : ""), x;
          if (M.type === "negate") {
            let w = Q;
            if (M.inner && M.inner.length > 1 && M.inner.includes("/") && (w = Z(p)), (w !== Q || ge() || /^\)+$/.test(fe())) && (oe = M.close = `)$))${w}`), M.inner.includes("*") && (x = fe()) && /^\.[^\\/.]+$/.test(x)) {
              const B = E(x, { ...A, fastpaths: !1 }).output;
              oe = M.close = `)${B})${w})`;
            }
            M.prev.type === "bos" && (P.negatedExtglob = !0);
          }
          V({ type: "paren", extglob: !0, value: C, output: oe }), le("parens");
        };
        if (p.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(c)) {
          let M = !1, oe = c.replace(b, ((x, w, B, ue, J, Ee) => ue === "\\" ? (M = !0, x) : ue === "?" ? w ? w + ue + (J ? H.repeat(J.length) : "") : Ee === 0 ? Y + (J ? H.repeat(J.length) : "") : H.repeat(B.length) : ue === "." ? T.repeat(B.length) : ue === "*" ? w ? w + ue + (J ? Q : "") : Q : w ? x : `\\${x}`));
          return M === !0 && (p.unescape === !0 ? oe = oe.replace(/\\/g, "") : oe = oe.replace(/\\+/g, ((x) => x.length % 2 === 0 ? "\\\\" : x ? "\\" : ""))), oe === c && p.contains === !0 ? (P.output = c, P) : (P.output = a.wrapOutput(oe, P, A), P);
        }
        for (; !ge(); ) {
          if (C = q(), C === "\0")
            continue;
          if (C === "\\") {
            const x = D();
            if (x === "/" && p.bash !== !0 || x === "." || x === ";")
              continue;
            if (!x) {
              C += "\\", V({ type: "text", value: C });
              continue;
            }
            const w = /^\\+/.exec(fe());
            let B = 0;
            if (w && w[0].length > 2 && (B = w[0].length, P.index += B, B % 2 !== 0 && (C += "\\")), p.unescape === !0 ? C = q() : C += q(), P.brackets === 0) {
              V({ type: "text", value: C });
              continue;
            }
          }
          if (P.brackets > 0 && (C !== "]" || y.value === "[" || y.value === "[^")) {
            if (p.posix !== !1 && C === ":") {
              const x = y.value.slice(1);
              if (x.includes("[") && (y.posix = !0, x.includes(":"))) {
                const w = y.value.lastIndexOf("["), B = y.value.slice(0, w), ue = y.value.slice(w + 2), J = d[ue];
                if (J) {
                  y.value = B + J, P.backtrack = !0, q(), !O.output && S.indexOf(y) === 1 && (O.output = L);
                  continue;
                }
              }
            }
            (C === "[" && D() !== ":" || C === "-" && D() === "]") && (C = `\\${C}`), C === "]" && (y.value === "[" || y.value === "[^") && (C = `\\${C}`), p.posix === !0 && C === "!" && y.value === "[" && (C = "^"), y.value += C, se({ value: C });
            continue;
          }
          if (P.quotes === 1 && C !== '"') {
            C = a.escapeRegex(C), y.value += C, se({ value: C });
            continue;
          }
          if (C === '"') {
            P.quotes = P.quotes === 1 ? 0 : 1, p.keepQuotes === !0 && V({ type: "text", value: C });
            continue;
          }
          if (C === "(") {
            pe("parens"), V({ type: "paren", value: C });
            continue;
          }
          if (C === ")") {
            if (P.parens === 0 && p.strictBrackets === !0)
              throw new SyntaxError(r("opening", "("));
            const x = ae[ae.length - 1];
            if (x && P.parens === x.parens + 1) {
              ne(ae.pop());
              continue;
            }
            V({ type: "paren", value: C, output: P.parens ? ")" : "\\)" }), le("parens");
            continue;
          }
          if (C === "[") {
            if (p.nobracket === !0 || !fe().includes("]")) {
              if (p.nobracket !== !0 && p.strictBrackets === !0)
                throw new SyntaxError(r("closing", "]"));
              C = `\\${C}`;
            } else
              pe("brackets");
            V({ type: "bracket", value: C });
            continue;
          }
          if (C === "]") {
            if (p.nobracket === !0 || y && y.type === "bracket" && y.value.length === 1) {
              V({ type: "text", value: C, output: `\\${C}` });
              continue;
            }
            if (P.brackets === 0) {
              if (p.strictBrackets === !0)
                throw new SyntaxError(r("opening", "["));
              V({ type: "text", value: C, output: `\\${C}` });
              continue;
            }
            le("brackets");
            const x = y.value.slice(1);
            if (y.posix !== !0 && x[0] === "^" && !x.includes("/") && (C = `/${C}`), y.value += C, se({ value: C }), p.literalBrackets === !1 || a.hasRegexChars(x))
              continue;
            const w = a.escapeRegex(y.value);
            if (P.output = P.output.slice(0, -y.value.length), p.literalBrackets === !0) {
              P.output += w, y.value = w;
              continue;
            }
            y.value = `(${I}${w}|${y.value})`, P.output += y.value;
            continue;
          }
          if (C === "{" && p.nobrace !== !0) {
            pe("braces");
            const x = { type: "brace", value: C, output: "(", outputIndex: P.output.length, tokensIndex: P.tokens.length };
            G.push(x), V(x);
            continue;
          }
          if (C === "}") {
            const x = G[G.length - 1];
            if (p.nobrace === !0 || !x) {
              V({ type: "text", value: C, output: C });
              continue;
            }
            let w = ")";
            if (x.dots === !0) {
              const B = S.slice(), ue = [];
              for (let J = B.length - 1; J >= 0 && (S.pop(), B[J].type !== "brace"); J--)
                B[J].type !== "dots" && ue.unshift(B[J].value);
              w = v(ue, p), P.backtrack = !0;
            }
            if (x.comma !== !0 && x.dots !== !0) {
              const B = P.output.slice(0, x.outputIndex), ue = P.tokens.slice(x.tokensIndex);
              x.value = x.output = "\\{", C = w = "\\}", P.output = B;
              for (const J of ue)
                P.output += J.output || J.value;
            }
            V({ type: "brace", value: C, output: w }), le("braces"), G.pop();
            continue;
          }
          if (C === "|") {
            ae.length > 0 && ae[ae.length - 1].conditions++, V({ type: "text", value: C });
            continue;
          }
          if (C === ",") {
            let x = C;
            const w = G[G.length - 1];
            w && ce[ce.length - 1] === "braces" && (w.comma = !0, x = "|"), V({ type: "comma", value: C, output: x });
            continue;
          }
          if (C === "/") {
            if (y.type === "dot" && P.index === P.start + 1) {
              P.start = P.index + 1, P.consumed = "", P.output = "", S.pop(), y = O;
              continue;
            }
            V({ type: "slash", value: C, output: F });
            continue;
          }
          if (C === ".") {
            if (P.braces > 0 && y.type === "dot") {
              y.value === "." && (y.output = T);
              const x = G[G.length - 1];
              y.type = "dots", y.output += C, y.value += C, x.dots = !0;
              continue;
            }
            if (P.braces + P.parens === 0 && y.type !== "bos" && y.type !== "slash") {
              V({ type: "text", value: C, output: T });
              continue;
            }
            V({ type: "dot", value: C, output: T });
            continue;
          }
          if (C === "?") {
            if (!(y && y.value === "(") && p.noextglob !== !0 && D() === "(" && D(2) !== "?") {
              $("qmark", C);
              continue;
            }
            if (y && y.type === "paren") {
              const w = D();
              let B = C;
              (y.value === "(" && !/[!=<:]/.test(w) || w === "<" && !/<([!=]|\w+>)/.test(fe())) && (B = `\\${C}`), V({ type: "text", value: C, output: B });
              continue;
            }
            if (p.dot !== !0 && (y.type === "slash" || y.type === "bos")) {
              V({ type: "qmark", value: C, output: K });
              continue;
            }
            V({ type: "qmark", value: C, output: H });
            continue;
          }
          if (C === "!") {
            if (p.noextglob !== !0 && D() === "(" && (D(2) !== "?" || !/[!=<:]/.test(D(3)))) {
              $("negate", C);
              continue;
            }
            if (p.nonegate !== !0 && P.index === 0) {
              ie();
              continue;
            }
          }
          if (C === "+") {
            if (p.noextglob !== !0 && D() === "(" && D(2) !== "?") {
              $("plus", C);
              continue;
            }
            if (y && y.value === "(" || p.regex === !1) {
              V({ type: "plus", value: C, output: N });
              continue;
            }
            if (y && (y.type === "bracket" || y.type === "paren" || y.type === "brace") || P.parens > 0) {
              V({ type: "plus", value: C });
              continue;
            }
            V({ type: "plus", value: N });
            continue;
          }
          if (C === "@") {
            if (p.noextglob !== !0 && D() === "(" && D(2) !== "?") {
              V({ type: "at", extglob: !0, value: C, output: "" });
              continue;
            }
            V({ type: "text", value: C });
            continue;
          }
          if (C !== "*") {
            (C === "$" || C === "^") && (C = `\\${C}`);
            const x = g.exec(fe());
            x && (C += x[0], P.index += x[0].length), V({ type: "text", value: C });
            continue;
          }
          if (y && (y.type === "globstar" || y.star === !0)) {
            y.type = "star", y.star = !0, y.value += C, y.output = Q, P.backtrack = !0, P.globstar = !0, de(C);
            continue;
          }
          let M = fe();
          if (p.noextglob !== !0 && /^\([^?]/.test(M)) {
            $("star", C);
            continue;
          }
          if (y.type === "star") {
            if (p.noglobstar === !0) {
              de(C);
              continue;
            }
            const x = y.prev, w = x.prev, B = x.type === "slash" || x.type === "bos", ue = w && (w.type === "star" || w.type === "globstar");
            if (p.bash === !0 && (!B || M[0] && M[0] !== "/")) {
              V({ type: "star", value: C, output: "" });
              continue;
            }
            const J = P.braces > 0 && (x.type === "comma" || x.type === "brace"), Ee = ae.length && (x.type === "pipe" || x.type === "paren");
            if (!B && x.type !== "paren" && !J && !Ee) {
              V({ type: "star", value: C, output: "" });
              continue;
            }
            for (; M.slice(0, 3) === "/**"; ) {
              const ye = c[P.index + 4];
              if (ye && ye !== "/")
                break;
              M = M.slice(3), de("/**", 3);
            }
            if (x.type === "bos" && ge()) {
              y.type = "globstar", y.value += C, y.output = Z(p), P.output = y.output, P.globstar = !0, de(C);
              continue;
            }
            if (x.type === "slash" && x.prev.type !== "bos" && !ue && ge()) {
              P.output = P.output.slice(0, -(x.output + y.output).length), x.output = `(?:${x.output}`, y.type = "globstar", y.output = Z(p) + (p.strictSlashes ? ")" : "|$)"), y.value += C, P.globstar = !0, P.output += x.output + y.output, de(C);
              continue;
            }
            if (x.type === "slash" && x.prev.type !== "bos" && M[0] === "/") {
              const ye = M[1] !== void 0 ? "|$" : "";
              P.output = P.output.slice(0, -(x.output + y.output).length), x.output = `(?:${x.output}`, y.type = "globstar", y.output = `${Z(p)}${F}|${F}${ye})`, y.value += C, P.output += x.output + y.output, P.globstar = !0, de(C + q()), V({ type: "slash", value: "/", output: "" });
              continue;
            }
            if (x.type === "bos" && M[0] === "/") {
              y.type = "globstar", y.value += C, y.output = `(?:^|${F}|${Z(p)}${F})`, P.output = y.output, P.globstar = !0, de(C + q()), V({ type: "slash", value: "/", output: "" });
              continue;
            }
            P.output = P.output.slice(0, -y.output.length), y.type = "globstar", y.output = Z(p), y.value += C, P.output += y.output, P.globstar = !0, de(C);
            continue;
          }
          const oe = { type: "star", value: C, output: Q };
          if (p.bash === !0) {
            oe.output = ".*?", (y.type === "bos" || y.type === "slash") && (oe.output = W + oe.output), V(oe);
            continue;
          }
          if (y && (y.type === "bracket" || y.type === "paren") && p.regex === !0) {
            oe.output = C, V(oe);
            continue;
          }
          (P.index === P.start || y.type === "slash" || y.type === "dot") && (y.type === "dot" ? (P.output += ee, y.output += ee) : p.dot === !0 ? (P.output += z, y.output += z) : (P.output += W, y.output += W), D() !== "*" && (P.output += L, y.output += L)), V(oe);
        }
        for (; P.brackets > 0; ) {
          if (p.strictBrackets === !0) throw new SyntaxError(r("closing", "]"));
          P.output = a.escapeLast(P.output, "["), le("brackets");
        }
        for (; P.parens > 0; ) {
          if (p.strictBrackets === !0) throw new SyntaxError(r("closing", ")"));
          P.output = a.escapeLast(P.output, "("), le("parens");
        }
        for (; P.braces > 0; ) {
          if (p.strictBrackets === !0) throw new SyntaxError(r("closing", "}"));
          P.output = a.escapeLast(P.output, "{"), le("braces");
        }
        if (p.strictSlashes !== !0 && (y.type === "star" || y.type === "bracket") && V({ type: "maybe_slash", value: "", output: `${F}?` }), P.backtrack === !0) {
          P.output = "";
          for (const M of P.tokens)
            P.output += M.output != null ? M.output : M.value, M.suffix && (P.output += M.suffix);
        }
        return P;
      };
      E.fastpaths = (c, A) => {
        const p = { ...A }, R = typeof p.maxLength == "number" ? Math.min(f, p.maxLength) : f, h = c.length;
        if (h > R)
          throw new SyntaxError(`Input length: ${h}, exceeds maximum allowed length: ${R}`);
        c = _[c] || c;
        const { DOT_LITERAL: O, SLASH_LITERAL: S, ONE_CHAR: I, DOTS_SLASH: j, NO_DOT: m, NO_DOTS: T, NO_DOTS_SLASH: N, STAR: F, START_ANCHOR: L } = i.globChars(p.windows), k = p.dot ? T : m, X = p.dot ? N : m, ee = p.capture ? "" : "?:", z = { negated: !1, prefix: "" };
        let H = p.bash === !0 ? ".*?" : F;
        p.capture && (H = `(${H})`);
        const K = (W) => W.noglobstar === !0 ? H : `(${ee}(?:(?!${L}${W.dot ? j : O}).)*?)`, te = (W) => {
          switch (W) {
            case "*":
              return `${k}${I}${H}`;
            case ".*":
              return `${O}${I}${H}`;
            case "*.*":
              return `${k}${H}${O}${I}${H}`;
            case "*/*":
              return `${k}${H}${S}${I}${X}${H}`;
            case "**":
              return k + K(p);
            case "**/*":
              return `(?:${k}${K(p)}${S})?${X}${I}${H}`;
            case "**/*.*":
              return `(?:${k}${K(p)}${S})?${X}${H}${O}${I}${H}`;
            case "**/.*":
              return `(?:${k}${K(p)}${S})?${O}${I}${H}`;
            default: {
              const Y = /^(.*?)\.(\w+)$/.exec(W);
              if (!Y) return;
              const Q = te(Y[1]);
              return Q ? Q + O + Y[2] : void 0;
            }
          }
        }, re = a.removePrefix(c, z);
        let Z = te(re);
        return Z && p.strictSlashes !== !0 && (Z += `${S}?`), Z;
      }, s.exports = E;
    }, 510: (s, t, n) => {
      const i = n(716), a = n(697), f = n(96), d = n(154), g = (_) => _ && typeof _ == "object" && !Array.isArray(_), b = (_, v, r = !1) => {
        if (Array.isArray(_)) {
          const S = _.map(((j) => b(j, v, r)));
          return (j) => {
            for (const m of S) {
              const T = m(j);
              if (T) return T;
            }
            return !1;
          };
        }
        const E = g(_) && _.tokens && _.input;
        if (_ === "" || typeof _ != "string" && !E)
          throw new TypeError("Expected pattern to be a non-empty string");
        const c = v || {}, A = c.windows, p = E ? b.compileRe(_, v) : b.makeRe(_, v, !1, !0), R = p.state;
        delete p.state;
        let h = () => !1;
        if (c.ignore) {
          const S = { ...v, ignore: null, onMatch: null, onResult: null };
          h = b(c.ignore, S, r);
        }
        const O = (S, I = !1) => {
          const { isMatch: j, match: m, output: T } = b.test(S, p, v, { glob: _, posix: A }), N = { glob: _, state: R, regex: p, posix: A, input: S, output: T, match: m, isMatch: j };
          return typeof c.onResult == "function" && c.onResult(N), j === !1 ? (N.isMatch = !1, I ? N : !1) : h(S) ? (typeof c.onIgnore == "function" && c.onIgnore(N), N.isMatch = !1, I ? N : !1) : (typeof c.onMatch == "function" && c.onMatch(N), I ? N : !0);
        };
        return r && (O.state = R), O;
      };
      b.test = (_, v, r, { glob: E, posix: c } = {}) => {
        if (typeof _ != "string")
          throw new TypeError("Expected input to be a string");
        if (_ === "")
          return { isMatch: !1, output: "" };
        const A = r || {}, p = A.format || (c ? f.toPosixSlashes : null);
        let R = _ === E, h = R && p ? p(_) : _;
        return R === !1 && (h = p ? p(_) : _, R = h === E), (R === !1 || A.capture === !0) && (A.matchBase === !0 || A.basename === !0 ? R = b.matchBase(_, v, r, c) : R = v.exec(h)), { isMatch: !!R, match: R, output: h };
      }, b.matchBase = (_, v, r) => (v instanceof RegExp ? v : b.makeRe(v, r)).test(f.basename(_)), b.isMatch = (_, v, r) => b(v, r)(_), b.parse = (_, v) => Array.isArray(_) ? _.map(((r) => b.parse(r, v))) : a(_, { ...v, fastpaths: !1 }), b.scan = (_, v) => i(_, v), b.compileRe = (_, v, r = !1, E = !1) => {
        if (r === !0)
          return _.output;
        const c = v || {}, A = c.contains ? "" : "^", p = c.contains ? "" : "$";
        let R = `${A}(?:${_.output})${p}`;
        _ && _.negated === !0 && (R = `^(?!${R}).*$`);
        const h = b.toRegex(R, v);
        return E === !0 && (h.state = _), h;
      }, b.makeRe = (_, v = {}, r = !1, E = !1) => {
        if (!_ || typeof _ != "string")
          throw new TypeError("Expected a non-empty string");
        let c = { negated: !1, fastpaths: !0 };
        return v.fastpaths !== !1 && (_[0] === "." || _[0] === "*") && (c.output = a.fastpaths(_, v)), c.output || (c = a(_, v)), b.compileRe(c, v, r, E);
      }, b.toRegex = (_, v) => {
        try {
          const r = v || {};
          return new RegExp(_, r.flags || (r.nocase ? "i" : ""));
        } catch (r) {
          if (v && v.debug === !0) throw r;
          return /$^/;
        }
      }, b.constants = d, s.exports = b;
    }, 716: (s, t, n) => {
      const i = n(96), { CHAR_ASTERISK: a, CHAR_AT: f, CHAR_BACKWARD_SLASH: d, CHAR_COMMA: g, CHAR_DOT: b, CHAR_EXCLAMATION_MARK: _, CHAR_FORWARD_SLASH: v, CHAR_LEFT_CURLY_BRACE: r, CHAR_LEFT_PARENTHESES: E, CHAR_LEFT_SQUARE_BRACKET: c, CHAR_PLUS: A, CHAR_QUESTION_MARK: p, CHAR_RIGHT_CURLY_BRACE: R, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: O } = n(154), S = (m) => m === v || m === d, I = (m) => {
        m.isPrefix !== !0 && (m.depth = m.isGlobstar ? 1 / 0 : 1);
      }, j = (m, T) => {
        const N = T || {}, F = m.length - 1, L = N.parts === !0 || N.scanToEnd === !0, k = [], X = [], ee = [];
        let z = m, H = -1, K = 0, te = 0, re = !1, Z = !1, W = !1, Y = !1, Q = !1, P = !1, ae = !1, G = !1, ce = !1, y = !1, C = 0, ge, D, q = { value: "", depth: 0, isGlob: !1 };
        const fe = () => H >= F, de = () => z.charCodeAt(H + 1), se = () => (ge = D, z.charCodeAt(++H));
        for (; H < F; ) {
          D = se();
          let $;
          if (D === d) {
            ae = q.backslashes = !0, D = se(), D === r && (P = !0);
            continue;
          }
          if (P === !0 || D === r) {
            for (C++; fe() !== !0 && (D = se()); ) {
              if (D === d) {
                ae = q.backslashes = !0, se();
                continue;
              }
              if (D === r) {
                C++;
                continue;
              }
              if (P !== !0 && D === b && (D = se()) === b) {
                if (re = q.isBrace = !0, W = q.isGlob = !0, y = !0, L === !0)
                  continue;
                break;
              }
              if (P !== !0 && D === g) {
                if (re = q.isBrace = !0, W = q.isGlob = !0, y = !0, L === !0)
                  continue;
                break;
              }
              if (D === R && (C--, C === 0)) {
                P = !1, re = q.isBrace = !0, y = !0;
                break;
              }
            }
            if (L === !0)
              continue;
            break;
          }
          if (D === v) {
            if (k.push(H), X.push(q), q = { value: "", depth: 0, isGlob: !1 }, y === !0) continue;
            if (ge === b && H === K + 1) {
              K += 2;
              continue;
            }
            te = H + 1;
            continue;
          }
          if (N.noext !== !0 && (D === A || D === f || D === a || D === p || D === _) === !0 && de() === E) {
            if (W = q.isGlob = !0, Y = q.isExtglob = !0, y = !0, D === _ && H === K && (ce = !0), L === !0) {
              for (; fe() !== !0 && (D = se()); ) {
                if (D === d) {
                  ae = q.backslashes = !0, D = se();
                  continue;
                }
                if (D === h) {
                  W = q.isGlob = !0, y = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (D === a) {
            if (ge === a && (Q = q.isGlobstar = !0), W = q.isGlob = !0, y = !0, L === !0)
              continue;
            break;
          }
          if (D === p) {
            if (W = q.isGlob = !0, y = !0, L === !0)
              continue;
            break;
          }
          if (D === c) {
            for (; fe() !== !0 && ($ = se()); ) {
              if ($ === d) {
                ae = q.backslashes = !0, se();
                continue;
              }
              if ($ === O) {
                Z = q.isBracket = !0, W = q.isGlob = !0, y = !0;
                break;
              }
            }
            if (L === !0)
              continue;
            break;
          }
          if (N.nonegate !== !0 && D === _ && H === K) {
            G = q.negated = !0, K++;
            continue;
          }
          if (N.noparen !== !0 && D === E) {
            if (W = q.isGlob = !0, L === !0) {
              for (; fe() !== !0 && (D = se()); ) {
                if (D === E) {
                  ae = q.backslashes = !0, D = se();
                  continue;
                }
                if (D === h) {
                  y = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (W === !0) {
            if (y = !0, L === !0)
              continue;
            break;
          }
        }
        N.noext === !0 && (Y = !1, W = !1);
        let ie = z, pe = "", le = "";
        K > 0 && (pe = z.slice(0, K), z = z.slice(K), te -= K), ie && W === !0 && te > 0 ? (ie = z.slice(0, te), le = z.slice(te)) : W === !0 ? (ie = "", le = z) : ie = z, ie && ie !== "" && ie !== "/" && ie !== z && S(ie.charCodeAt(ie.length - 1)) && (ie = ie.slice(0, -1)), N.unescape === !0 && (le && (le = i.removeBackslashes(le)), ie && ae === !0 && (ie = i.removeBackslashes(ie)));
        const V = { prefix: pe, input: m, start: K, base: ie, glob: le, isBrace: re, isBracket: Z, isGlob: W, isExtglob: Y, isGlobstar: Q, negated: G, negatedExtglob: ce };
        if (N.tokens === !0 && (V.maxDepth = 0, S(D) || X.push(q), V.tokens = X), N.parts === !0 || N.tokens === !0) {
          let $;
          for (let ne = 0; ne < k.length; ne++) {
            const M = $ ? $ + 1 : K, oe = k[ne], x = m.slice(M, oe);
            N.tokens && (ne === 0 && K !== 0 ? (X[ne].isPrefix = !0, X[ne].value = pe) : X[ne].value = x, I(X[ne]), V.maxDepth += X[ne].depth), (ne !== 0 || x !== "") && ee.push(x), $ = oe;
          }
          if ($ && $ + 1 < m.length) {
            const ne = m.slice($ + 1);
            ee.push(ne), N.tokens && (X[X.length - 1].value = ne, I(X[X.length - 1]), V.maxDepth += X[X.length - 1].depth);
          }
          V.slashes = k, V.parts = ee;
        }
        return V;
      };
      s.exports = j;
    }, 96: (s, t, n) => {
      const { REGEX_BACKSLASH: i, REGEX_REMOVE_BACKSLASH: a, REGEX_SPECIAL_CHARS: f, REGEX_SPECIAL_CHARS_GLOBAL: d } = n(154);
      t.isObject = (g) => g !== null && typeof g == "object" && !Array.isArray(g), t.hasRegexChars = (g) => f.test(g), t.isRegexChar = (g) => g.length === 1 && t.hasRegexChars(g), t.escapeRegex = (g) => g.replace(d, "\\$1"), t.toPosixSlashes = (g) => g.replace(i, "/"), t.removeBackslashes = (g) => g.replace(a, ((b) => b === "\\" ? "" : b)), t.escapeLast = (g, b, _) => {
        const v = g.lastIndexOf(b, _);
        return v === -1 ? g : g[v - 1] === "\\" ? t.escapeLast(g, b, v - 1) : `${g.slice(0, v)}\\${g.slice(v)}`;
      }, t.removePrefix = (g, b = {}) => {
        let _ = g;
        return _.startsWith("./") && (_ = _.slice(2), b.prefix = "./"), _;
      }, t.wrapOutput = (g, b = {}, _ = {}) => {
        const v = _.contains ? "" : "^", r = _.contains ? "" : "$";
        let E = `${v}(?:${g})${r}`;
        return b.negated === !0 && (E = `(?:^(?!${E}).*$)`), E;
      }, t.basename = (g, { windows: b } = {}) => {
        const _ = g.split(b ? /[\\/]/ : "/"), v = _[_.length - 1];
        return v === "" ? _[_.length - 2] : v;
      };
    } }, e = {};
    function u(s) {
      var t = e[s];
      if (t !== void 0)
        return t.exports;
      var n = e[s] = { exports: {} }, i = !0;
      try {
        o[s](n, n.exports, u), i = !1;
      } finally {
        i && delete e[s];
      }
      return n.exports;
    }
    typeof u < "u" && (u.ab = __dirname + "/");
    var l = u(170);
    rt.exports = l;
  })()), rt.exports;
}
var nr;
function Kn() {
  return nr || (nr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(t, n) {
      for (var i in n) Object.defineProperty(t, i, {
        enumerable: !0,
        get: n[i]
      });
    }
    e(o, {
      hasLocalMatch: function() {
        return s;
      },
      matchLocalPattern: function() {
        return l;
      }
    });
    const u = sn();
    function l(t, n) {
      return !(t.search !== void 0 && t.search !== n.search || !(0, u.makeRe)(t.pathname ?? "**", {
        dot: !0
      }).test(n.pathname));
    }
    function s(t, n) {
      if (!t)
        return !0;
      const i = new URL(n, "http://n");
      return t.some((a) => l(a, i));
    }
  })(tt)), tt;
}
var nt = {}, or;
function Yn() {
  return or || (or = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(t, n) {
      for (var i in n) Object.defineProperty(t, i, {
        enumerable: !0,
        get: n[i]
      });
    }
    e(o, {
      hasRemoteMatch: function() {
        return s;
      },
      matchRemotePattern: function() {
        return l;
      }
    });
    const u = sn();
    function l(t, n) {
      if (t.protocol !== void 0 && t.protocol.replace(/:$/, "") !== n.protocol.replace(/:$/, "") || t.port !== void 0 && t.port !== n.port)
        return !1;
      if (t.hostname === void 0)
        throw Object.defineProperty(new Error(`Pattern should define hostname but found
${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
          value: "E410",
          enumerable: !1,
          configurable: !0
        });
      return !(!(0, u.makeRe)(t.hostname).test(n.hostname) || t.search !== void 0 && t.search !== n.search || !(0, u.makeRe)(t.pathname ?? "**", {
        dot: !0
      }).test(n.pathname));
    }
    function s(t, n, i) {
      return t.some((a) => i.hostname === a) || n.some((a) => l(a, i));
    }
  })(nt)), nt;
}
var ar;
function un() {
  return ar || (ar = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "default", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const e = Wn();
    function u({ config: s, src: t, width: n, quality: i }) {
      if (t.startsWith("/") && t.includes("?") && s.localPatterns?.length === 1 && s.localPatterns[0].pathname === "**" && s.localPatterns[0].search === "")
        throw Object.defineProperty(new Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
          value: "E871",
          enumerable: !1,
          configurable: !0
        });
      if (process.env.NODE_ENV !== "production") {
        const f = [];
        if (t || f.push("src"), n || f.push("width"), f.length > 0)
          throw Object.defineProperty(new Error(`Next Image Optimization requires ${f.join(", ")} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
            src: t,
            width: n,
            quality: i
          })}`), "__NEXT_ERROR_CODE", {
            value: "E188",
            enumerable: !1,
            configurable: !0
          });
        if (t.startsWith("//"))
          throw Object.defineProperty(new Error(`Failed to parse src "${t}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
            value: "E360",
            enumerable: !1,
            configurable: !0
          });
        if (t.startsWith("/") && s.localPatterns && process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
        process.env.NEXT_RUNTIME !== "edge") {
          const { hasLocalMatch: d } = Kn();
          if (!d(s.localPatterns, t))
            throw Object.defineProperty(new Error(`Invalid src prop (${t}) on \`next/image\` does not match \`images.localPatterns\` configured in your \`next.config.js\`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
              value: "E426",
              enumerable: !1,
              configurable: !0
            });
        }
        if (!t.startsWith("/") && (s.domains || s.remotePatterns)) {
          let d;
          try {
            d = new URL(t);
          } catch (g) {
            throw console.error(g), Object.defineProperty(new Error(`Failed to parse src "${t}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
              value: "E63",
              enumerable: !1,
              configurable: !0
            });
          }
          if (process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
          process.env.NEXT_RUNTIME !== "edge") {
            const { hasRemoteMatch: g } = Yn();
            if (!g(s.domains, s.remotePatterns, d))
              throw Object.defineProperty(new Error(`Invalid src prop (${t}) on \`next/image\`, hostname "${d.hostname}" is not configured under images in your \`next.config.js\`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`), "__NEXT_ERROR_CODE", {
                value: "E231",
                enumerable: !1,
                configurable: !0
              });
          }
        }
      }
      const a = (0, e.findClosestQuality)(i, s);
      return `${s.path}?url=${encodeURIComponent(t)}&w=${n}&q=${a}${t.startsWith("/_next/static/media/") && process.env.NEXT_DEPLOYMENT_ID ? `&dpl=${process.env.NEXT_DEPLOYMENT_ID}` : ""}`;
    }
    u.__next_img_default = !0;
    const l = u;
  })(Je)), Je;
}
var Oe = { exports: {} }, ir;
function cn() {
  return ir || (ir = 1, (function(o, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "useMergedRef", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const u = ve;
    function l(t, n) {
      const i = (0, u.useRef)(null), a = (0, u.useRef)(null);
      return (0, u.useCallback)((f) => {
        if (f === null) {
          const d = i.current;
          d && (i.current = null, d());
          const g = a.current;
          g && (a.current = null, g());
        } else
          t && (i.current = s(t, f)), n && (a.current = s(n, f));
      }, [
        t,
        n
      ]);
    }
    function s(t, n) {
      if (typeof t == "function") {
        const i = t(n);
        return typeof i == "function" ? i : () => t(null);
      } else
        return t.current = n, () => {
          t.current = null;
        };
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(Oe, Oe.exports)), Oe.exports;
}
var sr;
function Qn() {
  return sr || (sr = 1, (function(o, e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "Image", {
      enumerable: !0,
      get: function() {
        return R;
      }
    });
    const u = /* @__PURE__ */ be(), l = /* @__PURE__ */ $e(), s = $t, t = /* @__PURE__ */ l._(ve), n = /* @__PURE__ */ u._(Cn), i = /* @__PURE__ */ u._(zn()), a = on(), f = qt(), d = Vn(), g = kt(), b = an(), _ = /* @__PURE__ */ u._(un()), v = cn(), r = process.env.__NEXT_IMAGE_OPTS;
    typeof window > "u" && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    function E(h, O, S, I, j, m, T) {
      const N = h?.src;
      if (!h || h["data-loaded-src"] === N)
        return;
      h["data-loaded-src"] = N, ("decode" in h ? h.decode() : Promise.resolve()).catch(() => {
      }).then(() => {
        if (!(!h.parentElement || !h.isConnected)) {
          if (O !== "empty" && j(!0), S?.current) {
            const L = new Event("load");
            Object.defineProperty(L, "target", {
              writable: !1,
              value: h
            });
            let k = !1, X = !1;
            S.current({
              ...L,
              nativeEvent: L,
              currentTarget: h,
              target: h,
              isDefaultPrevented: () => k,
              isPropagationStopped: () => X,
              persist: () => {
              },
              preventDefault: () => {
                k = !0, L.preventDefault();
              },
              stopPropagation: () => {
                X = !0, L.stopPropagation();
              }
            });
          }
          if (I?.current && I.current(h), process.env.NODE_ENV !== "production") {
            const L = new URL(N, "http://n").searchParams.get("url") || N;
            if (h.getAttribute("data-nimg") === "fill") {
              if (!m && (!T || T === "100vw") && h.getBoundingClientRect().width / window.innerWidth < 0.6 && (T === "100vw" ? (0, g.warnOnce)(`Image with src "${L}" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`) : (0, g.warnOnce)(`Image with src "${L}" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`)), h.parentElement) {
                const { position: ee } = window.getComputedStyle(h.parentElement), z = [
                  "absolute",
                  "fixed",
                  "relative"
                ];
                z.includes(ee) || (0, g.warnOnce)(`Image with src "${L}" has "fill" and parent element with invalid "position". Provided "${ee}" should be one of ${z.map(String).join(",")}.`);
              }
              h.height === 0 && (0, g.warnOnce)(`Image with src "${L}" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.`);
            }
            const k = h.height.toString() !== h.getAttribute("height"), X = h.width.toString() !== h.getAttribute("width");
            (k && !X || !k && X) && (0, g.warnOnce)(`Image with src "${L}" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
          }
        }
      });
    }
    function c(h) {
      return t.use ? {
        fetchPriority: h
      } : {
        fetchpriority: h
      };
    }
    const A = /* @__PURE__ */ (0, t.forwardRef)(({ src: h, srcSet: O, sizes: S, height: I, width: j, decoding: m, className: T, style: N, fetchPriority: F, placeholder: L, loading: k, unoptimized: X, fill: ee, onLoadRef: z, onLoadingCompleteRef: H, setBlurComplete: K, setShowAltText: te, sizesInput: re, onLoad: Z, onError: W, ...Y }, Q) => {
      const P = (0, t.useCallback)((G) => {
        G && (W && (G.src = G.src), process.env.NODE_ENV !== "production" && (h || console.error('Image is missing required "src" property:', G), G.getAttribute("alt") === null && console.error('Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.')), G.complete && E(G, L, z, H, K, X, re));
      }, [
        h,
        L,
        z,
        H,
        K,
        W,
        X,
        re
      ]), ae = (0, v.useMergedRef)(Q, P);
      return /* @__PURE__ */ (0, s.jsx)("img", {
        ...Y,
        ...c(F),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: k,
        width: j,
        height: I,
        decoding: m,
        "data-nimg": ee ? "fill" : "1",
        className: T,
        style: N,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: S,
        srcSet: O,
        src: h,
        ref: ae,
        onLoad: (G) => {
          const ce = G.currentTarget;
          E(ce, L, z, H, K, X, re);
        },
        onError: (G) => {
          te(!0), L !== "empty" && K(!0), W && W(G);
        }
      });
    });
    function p({ isAppRouter: h, imgAttributes: O }) {
      const S = {
        as: "image",
        imageSrcSet: O.srcSet,
        imageSizes: O.sizes,
        crossOrigin: O.crossOrigin,
        referrerPolicy: O.referrerPolicy,
        ...c(O.fetchPriority)
      };
      return h && n.default.preload ? (n.default.preload(O.src, S), null) : /* @__PURE__ */ (0, s.jsx)(i.default, {
        children: /* @__PURE__ */ (0, s.jsx)("link", {
          rel: "preload",
          // Note how we omit the `href` attribute, as it would only be relevant
          // for browsers that do not support `imagesrcset`, and in those cases
          // it would cause the incorrect image to be preloaded.
          //
          // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
          href: O.srcSet ? void 0 : O.src,
          ...S
        }, "__nimg-" + O.src + O.srcSet + O.sizes)
      });
    }
    const R = /* @__PURE__ */ (0, t.forwardRef)((h, O) => {
      const I = !(0, t.useContext)(b.RouterContext), j = (0, t.useContext)(d.ImageConfigContext), m = (0, t.useMemo)(() => {
        const te = r || j || f.imageConfigDefault, re = [
          ...te.deviceSizes,
          ...te.imageSizes
        ].sort((Y, Q) => Y - Q), Z = te.deviceSizes.sort((Y, Q) => Y - Q), W = te.qualities?.sort((Y, Q) => Y - Q);
        return {
          ...te,
          allSizes: re,
          deviceSizes: Z,
          qualities: W,
          // During the SSR, configEnv (__NEXT_IMAGE_OPTS) does not include
          // security sensitive configs like `localPatterns`, which is needed
          // during the server render to ensure it's validated. Therefore use
          // configContext, which holds the config from the server for validation.
          localPatterns: typeof window > "u" ? j?.localPatterns : te.localPatterns
        };
      }, [
        j
      ]), { onLoad: T, onLoadingComplete: N } = h, F = (0, t.useRef)(T);
      (0, t.useEffect)(() => {
        F.current = T;
      }, [
        T
      ]);
      const L = (0, t.useRef)(N);
      (0, t.useEffect)(() => {
        L.current = N;
      }, [
        N
      ]);
      const [k, X] = (0, t.useState)(!1), [ee, z] = (0, t.useState)(!1), { props: H, meta: K } = (0, a.getImgProps)(h, {
        defaultLoader: _.default,
        imgConf: m,
        blurComplete: k,
        showAltText: ee
      });
      return /* @__PURE__ */ (0, s.jsxs)(s.Fragment, {
        children: [
          /* @__PURE__ */ (0, s.jsx)(A, {
            ...H,
            unoptimized: K.unoptimized,
            placeholder: K.placeholder,
            fill: K.fill,
            onLoadRef: F,
            onLoadingCompleteRef: L,
            setBlurComplete: X,
            setShowAltText: z,
            sizesInput: h.sizes,
            ref: O
          }),
          K.preload ? /* @__PURE__ */ (0, s.jsx)(p, {
            isAppRouter: I,
            imgAttributes: H
          }) : null
        ]
      });
    });
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(Ce, Ce.exports)), Ce.exports;
}
var ur;
function Zn() {
  return ur || (ur = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(a, f) {
      for (var d in f) Object.defineProperty(a, d, {
        enumerable: !0,
        get: f[d]
      });
    }
    e(o, {
      default: function() {
        return i;
      },
      getImageProps: function() {
        return n;
      }
    });
    const u = /* @__PURE__ */ be(), l = on(), s = Qn(), t = /* @__PURE__ */ u._(un());
    function n(a) {
      const { props: f } = (0, l.getImgProps)(a, {
        defaultLoader: t.default,
        // This is replaced by webpack define plugin
        imgConf: process.env.__NEXT_IMAGE_OPTS
      });
      for (const [d, g] of Object.entries(f))
        g === void 0 && delete f[d];
      return {
        props: f
      };
    }
    const i = s.Image;
  })(Xe)), Xe;
}
var ot, cr;
function Jn() {
  return cr || (cr = 1, ot = Zn()), ot;
}
var eo = Jn();
const to = /* @__PURE__ */ nn(eo), ro = ({
  title: o,
  description: e,
  featureOne: u,
  featureTwo: l,
  featureThree: s,
  primaryCtaLabel: t,
  primaryCtaUrl: n,
  secondaryCtaLabel: i,
  secondaryCtaUrl: a,
  heroImage: f,
  textAlignment: d
}) => /* @__PURE__ */ U(
  "section",
  {
    className: "bg-secondary section-padding-y",
    "aria-labelledby": "hero-heading",
    children: /* @__PURE__ */ he("div", { className: "container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16", children: [
      /* @__PURE__ */ he(
        "div",
        {
          className: `flex flex-1 flex-col gap-6 lg:gap-8 ${{
            left: "text-left",
            center: "text-center",
            right: "text-right"
          }[d || "left"]}`,
          children: [
            /* @__PURE__ */ he("div", { className: "section-title-gap-xl flex flex-col", children: [
              /* @__PURE__ */ U("h1", { id: "hero-heading", className: "heading-xl", children: o }),
              /* @__PURE__ */ U("p", { className: "text-muted-foreground text-base lg:text-lg", children: e })
            ] }),
            /* @__PURE__ */ he("div", { className: "flex flex-col gap-2 md:gap-3", children: [
              u && /* @__PURE__ */ he("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ U("div", { className: "pt-0.5", children: /* @__PURE__ */ U(Ue, { className: "text-primary h-5 w-5" }) }),
                /* @__PURE__ */ U("span", { className: "text-card-foreground text-base leading-6 font-medium", children: u })
              ] }),
              l && /* @__PURE__ */ he("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ U("div", { className: "pt-0.5", children: /* @__PURE__ */ U(Ue, { className: "text-primary h-5 w-5" }) }),
                /* @__PURE__ */ U("span", { className: "text-card-foreground text-base leading-6 font-medium", children: l })
              ] }),
              s && /* @__PURE__ */ he("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ U("div", { className: "pt-0.5", children: /* @__PURE__ */ U(Ue, { className: "text-primary h-5 w-5" }) }),
                /* @__PURE__ */ U("span", { className: "text-card-foreground text-base leading-6 font-medium", children: s })
              ] })
            ] }),
            /* @__PURE__ */ he("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
              /* @__PURE__ */ U(me, { asChild: !0, children: /* @__PURE__ */ U("a", { href: n, children: t }) }),
              /* @__PURE__ */ U(me, { variant: "ghost", asChild: !0, children: /* @__PURE__ */ he("a", { href: a, children: [
                i,
                /* @__PURE__ */ U(Pn, {})
              ] }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ U("div", { className: "w-full flex-1", children: /* @__PURE__ */ U(Xn, { ratio: 1 / 1, children: /* @__PURE__ */ U(
        to,
        {
          src: f.url || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-EK6lJQh9Tq3HAhrRx6QQGhjNwND9Gs.png",
          alt: "Hero visual",
          fill: !0,
          priority: !0,
          className: "h-full w-full rounded-xl object-cover"
        }
      ) }) })
    ] })
  }
), no = [
  {
    id: "title",
    label: "Heading",
    type: "text",
    default: "Never forget what was said in a meeting again"
  },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    default: "AI that joins, transcribes, and transforms your meetings into structured knowledge"
  },
  {
    id: "featureOne",
    label: "Feature #1",
    type: "text",
    default: "Deal progress tracking"
  },
  {
    id: "featureTwo",
    label: "Feature #2",
    type: "text",
    default: "Customer sentiment analysis"
  },
  {
    id: "featureThree",
    label: "Feature #3",
    type: "text",
    default: "Automatic CRM updates"
  },
  {
    id: "primaryCtaLabel",
    label: "Primary button label",
    type: "text",
    default: "Try for free"
  },
  {
    id: "primaryCtaUrl",
    label: "Primary button URL",
    type: "url",
    default: "#",
    placeholder: "https://example.com"
  },
  {
    id: "secondaryCtaLabel",
    label: "Secondary button label",
    type: "text",
    default: "How it works"
  },
  {
    id: "secondaryCtaUrl",
    label: "Secondary button URL",
    type: "url",
    default: "#",
    placeholder: "https://example.com"
  },
  {
    id: "heroImage",
    label: "Hero image",
    type: "image_picker",
    default: {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-EK6lJQh9Tq3HAhrRx6QQGhjNwND9Gs.png",
      alt: "Hero visual",
      width: 1e3,
      height: 1e3
    },
    info: "Upload or select an image for the hero section"
  },
  {
    id: "textAlignment",
    label: "Text alignment",
    type: "text_alignment",
    default: "left"
  }
], oo = ({ width: o = 135, height: e = 36, className: u }) => /* @__PURE__ */ he(
  "svg",
  {
    width: o,
    height: e,
    viewBox: "0 0 135 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "text-foreground w-[120px] h-[32px] md:w-[135px] md:h-[36px]",
    children: [
      /* @__PURE__ */ he("g", { clipPath: "url(#clip0_22005_7547)", children: [
        /* @__PURE__ */ he("g", { clipPath: "url(#clip1_22005_7547)", children: [
          /* @__PURE__ */ U(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M25.5391 1.96969C21.9841 -0.0227045 17.7853 -0.527706 13.8593 0.564945C9.93327 1.6576 6.599 4.25914 4.58444 7.8016C2.56989 11.3441 2.03868 15.5397 3.10679 19.4724C4.1749 23.4052 6.75558 26.7556 10.2854 28.7923V34.7143C10.2854 35.0553 10.4208 35.3823 10.662 35.6234C10.9031 35.8645 11.2301 36 11.5711 36H24.4282C24.7692 36 25.0963 35.8645 25.3374 35.6234C25.5785 35.3823 25.714 35.0553 25.714 34.7143V29.5714H29.5711C30.5941 29.5714 31.5752 29.165 32.2985 28.4417C33.0219 27.7183 33.4282 26.7372 33.4282 25.7143V15.4286C33.4279 12.6865 32.6967 9.99412 31.3101 7.62853C29.9235 5.26294 27.9314 3.30963 25.5391 1.96969Z",
              fill: "#FFDFD0"
            }
          ),
          /* @__PURE__ */ U(
            "path",
            {
              d: "M13.4351 6.90452C11.4747 8.03848 9.97314 9.82303 9.19107 11.9485C8.40901 14.0739 8.39577 16.4061 9.15366 18.5402C9.50851 19.538 10.5859 20.0394 11.6094 19.7668C16.7908 18.3937 22.0674 14.6831 25.2714 11.7877C26.1199 11.0188 26.2974 9.73824 25.5414 8.88195C24.0612 7.20665 22.0475 6.09441 19.8412 5.73358C17.635 5.37274 15.3719 5.78807 13.4351 6.90452Z",
              fill: "#F95E16"
            }
          )
        ] }),
        /* @__PURE__ */ U(
          "path",
          {
            d: "M44 23.9412V11.741H47.2741L50.5309 17.6343L53.7533 11.741H56.9068V23.9412H54.4426V15.0323L50.979 21.2186H49.9795L46.4642 15.0323V23.9412H44Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ U(
          "path",
          {
            d: "M59.1541 23.9412V14.86H61.5665V23.9412H59.1541ZM60.3603 13.9467C59.9123 13.9467 59.5504 13.8146 59.2747 13.5503C58.999 13.2746 58.8611 12.9242 58.8611 12.4992C58.8611 12.0512 59.0047 11.6893 59.2919 11.4136C59.5791 11.1379 59.941 11 60.3775 11C60.7796 11 61.1243 11.1379 61.4115 11.4136C61.7101 11.6778 61.8595 12.0339 61.8595 12.482C61.8595 12.9185 61.7159 13.2746 61.4287 13.5503C61.153 13.8146 60.7968 13.9467 60.3603 13.9467Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ U(
          "path",
          {
            d: "M63.4789 23.9412V14.86H65.7363L65.8569 15.9111C66.1096 15.6009 66.3968 15.3597 66.7185 15.1874C67.0517 15.0036 67.3848 14.8772 67.718 14.8083C68.0626 14.7393 68.3728 14.7049 68.6485 14.7049C69.5216 14.7049 70.1994 14.8944 70.6819 15.2735C71.1759 15.6526 71.5262 16.1639 71.733 16.8072C71.9513 17.439 72.0604 18.1455 72.0604 18.9267V23.9412H69.6479V19.2369C69.6479 18.9612 69.625 18.6855 69.579 18.4098C69.5331 18.134 69.4469 17.8813 69.3205 17.6516C69.2057 17.4218 69.0391 17.238 68.8208 17.1001C68.6025 16.9623 68.3153 16.8933 67.9592 16.8933C67.4997 16.8933 67.1148 17.0082 66.8047 17.238C66.4945 17.4677 66.2647 17.7779 66.1154 18.1685C65.966 18.5591 65.8914 18.9899 65.8914 19.4609V23.9412H63.4789Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ U(
          "path",
          {
            d: "M77.6517 24.0619C76.7326 24.0619 75.9687 23.8551 75.3598 23.4415C74.7624 23.0164 74.3144 22.4535 74.0157 21.7528C73.717 21.0405 73.5677 20.2536 73.5677 19.392C73.5677 18.4844 73.7285 17.6803 74.0502 16.9795C74.3719 16.2672 74.8486 15.7101 75.4804 15.308C76.1123 14.9059 76.8992 14.7049 77.8412 14.7049C78.1629 14.7049 78.4788 14.7451 78.789 14.8255C79.1107 14.8944 79.4036 15.0036 79.6678 15.1529C79.9435 15.2908 80.179 15.4746 80.3743 15.7043V11.741H82.7868V23.9412H80.4433L80.4088 22.9245C80.202 23.1888 79.9493 23.407 79.6506 23.5794C79.3634 23.7402 79.0532 23.8608 78.7201 23.9412C78.3869 24.0217 78.0308 24.0619 77.6517 24.0619ZM78.1342 21.8906C78.6511 21.8906 79.0704 21.77 79.3921 21.5288C79.7253 21.2875 79.9723 20.9773 80.1331 20.5982C80.2939 20.2191 80.3743 19.8113 80.3743 19.3748C80.3743 18.9267 80.2939 18.5189 80.1331 18.1513C79.9837 17.7722 79.7425 17.4735 79.4093 17.2552C79.0877 17.0255 78.6626 16.9106 78.1342 16.9106C77.6057 16.9106 77.1807 17.0312 76.859 17.2724C76.5373 17.5137 76.3076 17.8296 76.1697 18.2202C76.0434 18.5993 75.9802 19.0071 75.9802 19.4437C75.9802 19.7653 76.0146 20.0755 76.0836 20.3742C76.164 20.6614 76.2903 20.9199 76.4627 21.1496C76.635 21.3794 76.859 21.5632 77.1347 21.7011C77.4104 21.8274 77.7436 21.8906 78.1342 21.8906Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ U(
          "path",
          {
            d: "M89.6279 24.0791C88.7778 24.0791 87.9851 23.947 87.2499 23.6828C86.5262 23.4185 85.9173 22.9992 85.4233 22.4248C84.9408 21.8504 84.6364 21.1094 84.51 20.2019H87.0259C87.1293 20.5925 87.3188 20.9084 87.5945 21.1496C87.8703 21.3794 88.1977 21.546 88.5768 21.6494C88.9674 21.7528 89.3752 21.8045 89.8002 21.8045C90.1219 21.8045 90.4378 21.7643 90.748 21.6838C91.0582 21.6034 91.3109 21.4656 91.5062 21.2703C91.713 21.075 91.8164 20.8108 91.8164 20.4776C91.8164 20.2249 91.7589 20.0181 91.6441 19.8572C91.5407 19.6964 91.3856 19.57 91.1788 19.4781C90.9835 19.3748 90.7423 19.2828 90.4551 19.2024C90.2138 19.1335 89.9611 19.0761 89.6968 19.0301C89.4441 18.9842 89.1914 18.9267 88.9386 18.8578C88.6974 18.7889 88.4619 18.7084 88.2321 18.6165C87.7956 18.5017 87.3763 18.3638 86.9742 18.203C86.5721 18.0307 86.216 17.8181 85.9058 17.5654C85.5956 17.3012 85.3486 16.9738 85.1648 16.5832C84.9925 16.1926 84.9063 15.7216 84.9063 15.1701C84.9063 14.5728 85.004 14.0673 85.1993 13.6537C85.4061 13.2402 85.676 12.9013 86.0092 12.637C86.3538 12.3613 86.7329 12.1488 87.1465 11.9995C87.5716 11.8501 87.9966 11.7467 88.4217 11.6893C88.8467 11.6318 89.2488 11.6031 89.6279 11.6031C90.4206 11.6031 91.1328 11.741 91.7647 12.0167C92.3965 12.2924 92.9135 12.706 93.3156 13.2574C93.7176 13.8088 93.9474 14.5038 94.0048 15.3425H91.6096C91.5636 14.9978 91.4373 14.7164 91.2305 14.4981C91.0237 14.2798 90.7595 14.119 90.4378 14.0156C90.1276 13.9122 89.7773 13.8605 89.3867 13.8605C89.1339 13.8605 88.8869 13.8835 88.6457 13.9294C88.4044 13.9754 88.1862 14.0501 87.9909 14.1535C87.8071 14.2454 87.6577 14.3717 87.5428 14.5326C87.4394 14.6934 87.3878 14.8887 87.3878 15.1184C87.3878 15.3482 87.4509 15.5492 87.5773 15.7216C87.7037 15.8824 87.8875 16.026 88.1287 16.1524C88.3815 16.2672 88.6744 16.3764 89.0076 16.4798C89.3522 16.5947 89.7141 16.6866 90.0932 16.7555C90.4723 16.8244 90.8342 16.9163 91.1788 17.0312C91.6153 17.1461 92.0232 17.2839 92.4023 17.4448C92.7814 17.5941 93.1145 17.7894 93.4017 18.0307C93.6889 18.2604 93.9129 18.5591 94.0738 18.9267C94.2346 19.2828 94.315 19.7251 94.315 20.2536C94.315 20.9544 94.1829 21.5517 93.9187 22.0457C93.6659 22.5282 93.3156 22.9188 92.8675 23.2175C92.431 23.5162 91.9313 23.7344 91.3684 23.8723C90.8054 24.0102 90.2253 24.0791 89.6279 24.0791Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ U(
          "path",
          {
            d: "M96.0581 27.3359V14.86H98.3155L98.4362 15.9973C98.8038 15.5492 99.2231 15.2218 99.6941 15.0151C100.177 14.8083 100.705 14.7049 101.279 14.7049C102.176 14.7049 102.916 14.9117 103.502 15.3252C104.088 15.7388 104.525 16.3017 104.812 17.014C105.111 17.7147 105.26 18.5017 105.26 19.3748C105.26 20.2708 105.105 21.075 104.795 21.7872C104.496 22.488 104.042 23.0452 103.433 23.4587C102.825 23.8608 102.066 24.0619 101.159 24.0619C100.768 24.0619 100.401 24.0159 100.056 23.924C99.7113 23.8321 99.4069 23.7115 99.1427 23.5621C98.8785 23.4013 98.6544 23.2232 98.4706 23.0279V27.3359H96.0581ZM100.745 21.8906C101.285 21.8906 101.71 21.77 102.02 21.5288C102.331 21.2875 102.549 20.9831 102.675 20.6155C102.802 20.2364 102.865 19.8458 102.865 19.4437C102.865 19.0071 102.796 18.5936 102.658 18.203C102.52 17.8124 102.29 17.5022 101.969 17.2724C101.659 17.0312 101.233 16.9106 100.694 16.9106C100.211 16.9106 99.8032 17.0312 99.4701 17.2724C99.1369 17.5022 98.8842 17.8066 98.7119 18.1857C98.5396 18.5648 98.4534 18.9727 98.4534 19.4092C98.4534 19.8458 98.5338 20.2536 98.6946 20.6327C98.867 21.0118 99.1197 21.3162 99.4529 21.546C99.7975 21.7757 100.228 21.8906 100.745 21.8906Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ U(
          "path",
          {
            d: "M109.689 24.0619C109.275 24.0619 108.873 24.0102 108.483 23.9068C108.104 23.7919 107.765 23.6196 107.466 23.3898C107.167 23.1601 106.932 22.8728 106.76 22.5282C106.587 22.1836 106.501 21.7815 106.501 21.322C106.501 20.7016 106.628 20.2076 106.88 19.84C107.133 19.4609 107.472 19.1737 107.897 18.9784C108.322 18.7831 108.81 18.651 109.362 18.5821C109.925 18.5132 110.505 18.4787 111.102 18.4787H112.412C112.412 18.1455 112.349 17.8526 112.222 17.5999C112.107 17.3356 111.929 17.1346 111.688 16.9967C111.447 16.8474 111.137 16.7727 110.757 16.7727C110.516 16.7727 110.281 16.8072 110.051 16.8761C109.833 16.9336 109.649 17.0197 109.5 17.1346C109.35 17.2495 109.253 17.3988 109.207 17.5826H106.76C106.829 17.0772 106.989 16.6464 107.242 16.2902C107.495 15.9226 107.811 15.6239 108.19 15.3942C108.569 15.1644 108.983 14.9978 109.431 14.8944C109.89 14.7796 110.361 14.7221 110.844 14.7221C112.165 14.7221 113.141 15.1012 113.773 15.8594C114.405 16.6061 114.721 17.6688 114.721 19.0473V23.9412H112.55L112.515 22.7695C112.228 23.1715 111.901 23.4645 111.533 23.6483C111.177 23.8321 110.832 23.947 110.499 23.9929C110.166 24.0389 109.896 24.0619 109.689 24.0619ZM110.24 22.1491C110.643 22.1491 111.01 22.0687 111.343 21.9079C111.676 21.747 111.941 21.5288 112.136 21.253C112.331 20.9773 112.429 20.6672 112.429 20.3225V20.0985H110.775C110.533 20.0985 110.298 20.11 110.068 20.133C109.85 20.1559 109.649 20.2019 109.465 20.2708C109.293 20.3283 109.155 20.4259 109.051 20.5638C108.948 20.7016 108.896 20.8854 108.896 21.1152C108.896 21.3449 108.954 21.5402 109.069 21.7011C109.195 21.8504 109.362 21.9653 109.568 22.0457C109.775 22.1146 109.999 22.1491 110.24 22.1491Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ U(
          "path",
          {
            d: "M120.672 24.0619C119.742 24.0619 118.943 23.8723 118.277 23.4932C117.622 23.1141 117.122 22.5799 116.778 21.8906C116.433 21.1899 116.261 20.3685 116.261 19.4264C116.261 18.4729 116.439 17.6458 116.795 16.945C117.151 16.2328 117.662 15.6814 118.328 15.2908C119.006 14.9002 119.822 14.7049 120.775 14.7049C121.511 14.7049 122.165 14.837 122.74 15.1012C123.314 15.3654 123.774 15.7445 124.118 16.2385C124.475 16.7325 124.681 17.3414 124.739 18.0651H122.378C122.275 17.663 122.074 17.3701 121.775 17.1863C121.488 17.0025 121.143 16.9106 120.741 16.9106C120.224 16.9106 119.81 17.0369 119.5 17.2897C119.202 17.5424 118.983 17.8641 118.845 18.2547C118.719 18.6453 118.656 19.0359 118.656 19.4264C118.656 19.8515 118.725 20.2536 118.863 20.6327C119.001 21.0003 119.219 21.3047 119.517 21.546C119.828 21.7757 120.23 21.8906 120.724 21.8906C121.137 21.8906 121.499 21.7987 121.809 21.6149C122.12 21.4196 122.321 21.1209 122.412 20.7188H124.825C124.768 21.4656 124.543 22.0859 124.153 22.5799C123.762 23.0739 123.263 23.4473 122.654 23.7C122.056 23.9412 121.396 24.0619 120.672 24.0619Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ U(
          "path",
          {
            d: "M130.434 24.0619C129.481 24.0619 128.671 23.8723 128.005 23.4932C127.338 23.1141 126.827 22.5799 126.471 21.8906C126.115 21.1899 125.937 20.3742 125.937 19.4437C125.937 18.5017 126.121 17.6803 126.488 16.9795C126.856 16.2672 127.373 15.7101 128.039 15.308C128.717 14.9059 129.515 14.7049 130.434 14.7049C131.124 14.7049 131.727 14.8198 132.244 15.0495C132.772 15.2793 133.214 15.6009 133.571 16.0145C133.938 16.4281 134.208 16.9106 134.381 17.462C134.564 18.0019 134.65 18.5878 134.639 19.2197C134.639 19.3805 134.633 19.5356 134.622 19.6849C134.61 19.8343 134.587 19.9836 134.553 20.133H128.332C128.367 20.4776 128.464 20.7935 128.625 21.0807C128.786 21.3679 129.01 21.5977 129.297 21.77C129.596 21.9308 129.963 22.0113 130.4 22.0113C130.687 22.0113 130.951 21.9825 131.193 21.9251C131.434 21.8562 131.641 21.7528 131.813 21.6149C131.985 21.4771 132.106 21.3162 132.175 21.1324H134.553C134.403 21.8102 134.122 22.3674 133.708 22.8039C133.306 23.2405 132.818 23.5621 132.244 23.7689C131.669 23.9642 131.066 24.0619 130.434 24.0619ZM128.384 18.4442H132.33C132.318 18.134 132.238 17.8468 132.089 17.5826C131.951 17.3069 131.738 17.0886 131.451 16.9278C131.175 16.7555 130.819 16.6693 130.383 16.6693C129.946 16.6693 129.579 16.7555 129.28 16.9278C128.993 17.1001 128.774 17.3241 128.625 17.5999C128.487 17.8641 128.407 18.1455 128.384 18.4442Z",
            fill: "currentColor"
          }
        )
      ] }),
      /* @__PURE__ */ he("defs", { children: [
        /* @__PURE__ */ U("clipPath", { id: "clip0_22005_7547", children: /* @__PURE__ */ U("rect", { width: "135", height: "36", fill: "white" }) }),
        /* @__PURE__ */ U("clipPath", { id: "clip1_22005_7547", children: /* @__PURE__ */ U("rect", { width: "36", height: "36", fill: "white" }) })
      ] })
    ]
  }
);
var Ae = { exports: {} }, Se = { exports: {} }, at = {}, lr;
function ln() {
  return lr || (lr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(n, i) {
      for (var a in i) Object.defineProperty(n, a, {
        enumerable: !0,
        get: i[a]
      });
    }
    e(o, {
      assign: function() {
        return t;
      },
      searchParamsToUrlQuery: function() {
        return u;
      },
      urlQueryToSearchParams: function() {
        return s;
      }
    });
    function u(n) {
      const i = {};
      for (const [a, f] of n.entries()) {
        const d = i[a];
        typeof d > "u" ? i[a] = f : Array.isArray(d) ? d.push(f) : i[a] = [
          d,
          f
        ];
      }
      return i;
    }
    function l(n) {
      return typeof n == "string" ? n : typeof n == "number" && !isNaN(n) || typeof n == "boolean" ? String(n) : "";
    }
    function s(n) {
      const i = new URLSearchParams();
      for (const [a, f] of Object.entries(n))
        if (Array.isArray(f))
          for (const d of f)
            i.append(a, l(d));
        else
          i.set(a, l(f));
      return i;
    }
    function t(n, ...i) {
      for (const a of i) {
        for (const f of a.keys())
          n.delete(f);
        for (const [f, d] of a.entries())
          n.append(f, d);
      }
      return n;
    }
  })(at)), at;
}
var it = {}, fr;
function fn() {
  return fr || (fr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(a, f) {
      for (var d in f) Object.defineProperty(a, d, {
        enumerable: !0,
        get: f[d]
      });
    }
    e(o, {
      formatUrl: function() {
        return t;
      },
      formatWithValidation: function() {
        return i;
      },
      urlObjectKeys: function() {
        return n;
      }
    });
    const l = /* @__PURE__ */ (/* @__PURE__ */ $e())._(ln()), s = /https?|ftp|gopher|file/;
    function t(a) {
      let { auth: f, hostname: d } = a, g = a.protocol || "", b = a.pathname || "", _ = a.hash || "", v = a.query || "", r = !1;
      f = f ? encodeURIComponent(f).replace(/%3A/i, ":") + "@" : "", a.host ? r = f + a.host : d && (r = f + (~d.indexOf(":") ? `[${d}]` : d), a.port && (r += ":" + a.port)), v && typeof v == "object" && (v = String(l.urlQueryToSearchParams(v)));
      let E = a.search || v && `?${v}` || "";
      return g && !g.endsWith(":") && (g += ":"), a.slashes || (!g || s.test(g)) && r !== !1 ? (r = "//" + (r || ""), b && b[0] !== "/" && (b = "/" + b)) : r || (r = ""), _ && _[0] !== "#" && (_ = "#" + _), E && E[0] !== "?" && (E = "?" + E), b = b.replace(/[?#]/g, encodeURIComponent), E = E.replace("#", "%23"), `${g}${r}${b}${E}${_}`;
    }
    const n = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes"
    ];
    function i(a) {
      return process.env.NODE_ENV === "development" && a !== null && typeof a == "object" && Object.keys(a).forEach((f) => {
        n.includes(f) || console.warn(`Unknown key passed via urlObject into url.format: ${f}`);
      }), t(a);
    }
  })(it)), it;
}
var st = {}, dr;
function ao() {
  return dr || (dr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "omit", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(u, l) {
      const s = {};
      return Object.keys(u).forEach((t) => {
        l.includes(t) || (s[t] = u[t]);
      }), s;
    }
  })(st)), st;
}
var ut = {}, pr;
function ke() {
  return pr || (pr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(R, h) {
      for (var O in h) Object.defineProperty(R, O, {
        enumerable: !0,
        get: h[O]
      });
    }
    e(o, {
      DecodeError: function() {
        return v;
      },
      MiddlewareNotFoundError: function() {
        return A;
      },
      MissingStaticPage: function() {
        return c;
      },
      NormalizeError: function() {
        return r;
      },
      PageNotFoundError: function() {
        return E;
      },
      SP: function() {
        return b;
      },
      ST: function() {
        return _;
      },
      WEB_VITALS: function() {
        return u;
      },
      execOnce: function() {
        return l;
      },
      getDisplayName: function() {
        return a;
      },
      getLocationOrigin: function() {
        return n;
      },
      getURL: function() {
        return i;
      },
      isAbsoluteUrl: function() {
        return t;
      },
      isResSent: function() {
        return f;
      },
      loadGetInitialProps: function() {
        return g;
      },
      normalizeRepeatedSlashes: function() {
        return d;
      },
      stringifyError: function() {
        return p;
      }
    });
    const u = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function l(R) {
      let h = !1, O;
      return (...S) => (h || (h = !0, O = R(...S)), O);
    }
    const s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, t = (R) => s.test(R);
    function n() {
      const { protocol: R, hostname: h, port: O } = window.location;
      return `${R}//${h}${O ? ":" + O : ""}`;
    }
    function i() {
      const { href: R } = window.location, h = n();
      return R.substring(h.length);
    }
    function a(R) {
      return typeof R == "string" ? R : R.displayName || R.name || "Unknown";
    }
    function f(R) {
      return R.finished || R.headersSent;
    }
    function d(R) {
      const h = R.split("?");
      return h[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (h[1] ? `?${h.slice(1).join("?")}` : "");
    }
    async function g(R, h) {
      if (process.env.NODE_ENV !== "production" && R.prototype?.getInitialProps) {
        const I = `"${a(R)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
        throw Object.defineProperty(new Error(I), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: !1,
          configurable: !0
        });
      }
      const O = h.res || h.ctx && h.ctx.res;
      if (!R.getInitialProps)
        return h.ctx && h.Component ? {
          pageProps: await g(h.Component, h.ctx)
        } : {};
      const S = await R.getInitialProps(h);
      if (O && f(O))
        return S;
      if (!S) {
        const I = `"${a(R)}.getInitialProps()" should resolve to an object. But found "${S}" instead.`;
        throw Object.defineProperty(new Error(I), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: !1,
          configurable: !0
        });
      }
      return process.env.NODE_ENV !== "production" && Object.keys(S).length === 0 && !h.ctx && console.warn(`${a(R)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`), S;
    }
    const b = typeof performance < "u", _ = b && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((R) => typeof performance[R] == "function");
    class v extends Error {
    }
    class r extends Error {
    }
    class E extends Error {
      constructor(h) {
        super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${h}`;
      }
    }
    class c extends Error {
      constructor(h, O) {
        super(), this.message = `Failed to load static file for page: ${h} ${O}`;
      }
    }
    class A extends Error {
      constructor() {
        super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
      }
    }
    function p(R) {
      return JSON.stringify({
        message: R.message,
        stack: R.stack
      });
    }
  })(ut)), ut;
}
var we = { exports: {} }, ct = {}, hr;
function dn() {
  return hr || (hr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "removeTrailingSlash", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(u) {
      return u.replace(/\/$/, "") || "/";
    }
  })(ct)), ct;
}
var lt = {}, _r;
function Ut() {
  return _r || (_r = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "parsePath", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(u) {
      const l = u.indexOf("#"), s = u.indexOf("?"), t = s > -1 && (l < 0 || s < l);
      return t || l > -1 ? {
        pathname: u.substring(0, t ? s : l),
        query: t ? u.substring(s, l > -1 ? l : void 0) : "",
        hash: l > -1 ? u.slice(l) : ""
      } : {
        pathname: u,
        query: "",
        hash: ""
      };
    }
  })(lt)), lt;
}
var gr;
function qe() {
  return gr || (gr = 1, (function(o, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizePathTrailingSlash", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const u = dn(), l = Ut(), s = (t) => {
      if (!t.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH)
        return t;
      const { pathname: n, query: i, hash: a } = (0, l.parsePath)(t);
      return process.env.__NEXT_TRAILING_SLASH ? /\.[^/]+\/?$/.test(n) ? `${(0, u.removeTrailingSlash)(n)}${i}${a}` : n.endsWith("/") ? `${n}${i}${a}` : `${n}/${i}${a}` : `${(0, u.removeTrailingSlash)(n)}${i}${a}`;
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(we, we.exports)), we.exports;
}
var ft = {}, Te = { exports: {} }, dt = {}, mr;
function pn() {
  return mr || (mr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "pathHasPrefix", {
      enumerable: !0,
      get: function() {
        return u;
      }
    });
    const e = Ut();
    function u(l, s) {
      if (typeof l != "string")
        return !1;
      const { pathname: t } = (0, e.parsePath)(l);
      return t === s || t.startsWith(s + "/");
    }
  })(dt)), dt;
}
var Er;
function io() {
  return Er || (Er = 1, (function(o, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "hasBasePath", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const u = pn(), l = process.env.__NEXT_ROUTER_BASEPATH || "";
    function s(t) {
      return (0, u.pathHasPrefix)(t, l);
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(Te, Te.exports)), Te.exports;
}
var Rr;
function hn() {
  return Rr || (Rr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "isLocalURL", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const e = ke(), u = io();
    function l(s) {
      if (!(0, e.isAbsoluteUrl)(s)) return !0;
      try {
        const t = (0, e.getLocationOrigin)(), n = new URL(s, t);
        return n.origin === t && (0, u.hasBasePath)(n.pathname);
      } catch {
        return !1;
      }
    }
  })(ft)), ft;
}
var pt = {}, ht = {}, vr;
function so() {
  return vr || (vr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(t, n) {
      for (var i in n) Object.defineProperty(t, i, {
        enumerable: !0,
        get: n[i]
      });
    }
    e(o, {
      getSortedRouteObjects: function() {
        return s;
      },
      getSortedRoutes: function() {
        return l;
      }
    });
    class u {
      insert(n) {
        this._insert(n.split("/").filter(Boolean), [], !1);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(n = "/") {
        const i = [
          ...this.children.keys()
        ].sort();
        this.slugName !== null && i.splice(i.indexOf("[]"), 1), this.restSlugName !== null && i.splice(i.indexOf("[...]"), 1), this.optionalRestSlugName !== null && i.splice(i.indexOf("[[...]]"), 1);
        const a = i.map((f) => this.children.get(f)._smoosh(`${n}${f}/`)).reduce((f, d) => [
          ...f,
          ...d
        ], []);
        if (this.slugName !== null && a.push(...this.children.get("[]")._smoosh(`${n}[${this.slugName}]/`)), !this.placeholder) {
          const f = n === "/" ? "/" : n.slice(0, -1);
          if (this.optionalRestSlugName != null)
            throw Object.defineProperty(new Error(`You cannot define a route with the same specificity as a optional catch-all route ("${f}" and "${f}[[...${this.optionalRestSlugName}]]").`), "__NEXT_ERROR_CODE", {
              value: "E458",
              enumerable: !1,
              configurable: !0
            });
          a.unshift(f);
        }
        return this.restSlugName !== null && a.push(...this.children.get("[...]")._smoosh(`${n}[...${this.restSlugName}]/`)), this.optionalRestSlugName !== null && a.push(...this.children.get("[[...]]")._smoosh(`${n}[[...${this.optionalRestSlugName}]]/`)), a;
      }
      _insert(n, i, a) {
        if (n.length === 0) {
          this.placeholder = !1;
          return;
        }
        if (a)
          throw Object.defineProperty(new Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
            value: "E392",
            enumerable: !1,
            configurable: !0
          });
        let f = n[0];
        if (f.startsWith("[") && f.endsWith("]")) {
          let b = function(_, v) {
            if (_ !== null && _ !== v)
              throw Object.defineProperty(new Error(`You cannot use different slug names for the same dynamic path ('${_}' !== '${v}').`), "__NEXT_ERROR_CODE", {
                value: "E337",
                enumerable: !1,
                configurable: !0
              });
            i.forEach((r) => {
              if (r === v)
                throw Object.defineProperty(new Error(`You cannot have the same slug name "${v}" repeat within a single dynamic path`), "__NEXT_ERROR_CODE", {
                  value: "E247",
                  enumerable: !1,
                  configurable: !0
                });
              if (r.replace(/\W/g, "") === f.replace(/\W/g, ""))
                throw Object.defineProperty(new Error(`You cannot have the slug names "${r}" and "${v}" differ only by non-word symbols within a single dynamic path`), "__NEXT_ERROR_CODE", {
                  value: "E499",
                  enumerable: !1,
                  configurable: !0
                });
            }), i.push(v);
          }, d = f.slice(1, -1), g = !1;
          if (d.startsWith("[") && d.endsWith("]") && (d = d.slice(1, -1), g = !0), d.startsWith("…"))
            throw Object.defineProperty(new Error(`Detected a three-dot character ('…') at ('${d}'). Did you mean ('...')?`), "__NEXT_ERROR_CODE", {
              value: "E147",
              enumerable: !1,
              configurable: !0
            });
          if (d.startsWith("...") && (d = d.substring(3), a = !0), d.startsWith("[") || d.endsWith("]"))
            throw Object.defineProperty(new Error(`Segment names may not start or end with extra brackets ('${d}').`), "__NEXT_ERROR_CODE", {
              value: "E421",
              enumerable: !1,
              configurable: !0
            });
          if (d.startsWith("."))
            throw Object.defineProperty(new Error(`Segment names may not start with erroneous periods ('${d}').`), "__NEXT_ERROR_CODE", {
              value: "E288",
              enumerable: !1,
              configurable: !0
            });
          if (a)
            if (g) {
              if (this.restSlugName != null)
                throw Object.defineProperty(new Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${n[0]}" ).`), "__NEXT_ERROR_CODE", {
                  value: "E299",
                  enumerable: !1,
                  configurable: !0
                });
              b(this.optionalRestSlugName, d), this.optionalRestSlugName = d, f = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null)
                throw Object.defineProperty(new Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${n[0]}").`), "__NEXT_ERROR_CODE", {
                  value: "E300",
                  enumerable: !1,
                  configurable: !0
                });
              b(this.restSlugName, d), this.restSlugName = d, f = "[...]";
            }
          else {
            if (g)
              throw Object.defineProperty(new Error(`Optional route parameters are not yet supported ("${n[0]}").`), "__NEXT_ERROR_CODE", {
                value: "E435",
                enumerable: !1,
                configurable: !0
              });
            b(this.slugName, d), this.slugName = d, f = "[]";
          }
        }
        this.children.has(f) || this.children.set(f, new u()), this.children.get(f)._insert(n.slice(1), i, a);
      }
      constructor() {
        this.placeholder = !0, this.children = /* @__PURE__ */ new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
      }
    }
    function l(t) {
      const n = new u();
      return t.forEach((i) => n.insert(i)), n.smoosh();
    }
    function s(t, n) {
      const i = {}, a = [];
      for (let d = 0; d < t.length; d++) {
        const g = n(t[d]);
        i[g] = d, a[d] = g;
      }
      return l(a).map((d) => t[i[d]]);
    }
  })(ht)), ht;
}
var _t = {}, gt = {}, mt = {}, Et = {}, br;
function uo() {
  return br || (br = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "ensureLeadingSlash", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(u) {
      return u.startsWith("/") ? u : `/${u}`;
    }
  })(Et)), Et;
}
var Rt = {}, yr;
function _n() {
  return yr || (yr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(d, g) {
      for (var b in g) Object.defineProperty(d, b, {
        enumerable: !0,
        get: g[b]
      });
    }
    e(o, {
      DEFAULT_SEGMENT_KEY: function() {
        return f;
      },
      PAGE_SEGMENT_KEY: function() {
        return a;
      },
      addSearchParamsIfPageSegment: function() {
        return t;
      },
      computeSelectedLayoutSegment: function() {
        return n;
      },
      getSegmentValue: function() {
        return u;
      },
      getSelectedLayoutSegmentPath: function() {
        return i;
      },
      isGroupSegment: function() {
        return l;
      },
      isParallelRouteSegment: function() {
        return s;
      }
    });
    function u(d) {
      return Array.isArray(d) ? d[1] : d;
    }
    function l(d) {
      return d[0] === "(" && d.endsWith(")");
    }
    function s(d) {
      return d.startsWith("@") && d !== "@children";
    }
    function t(d, g) {
      if (d.includes(a)) {
        const _ = JSON.stringify(g);
        return _ !== "{}" ? a + "?" + _ : a;
      }
      return d;
    }
    function n(d, g) {
      if (!d || d.length === 0)
        return null;
      const b = g === "children" ? d[0] : d[d.length - 1];
      return b === f ? null : b;
    }
    function i(d, g, b = !0, _ = []) {
      let v;
      if (b)
        v = d[1][g];
      else {
        const c = d[1];
        v = c.children ?? Object.values(c)[0];
      }
      if (!v) return _;
      const r = v[0];
      let E = u(r);
      return !E || E.startsWith(a) ? _ : (_.push(E), i(v, g, !1, _));
    }
    const a = "__PAGE__", f = "__DEFAULT__";
  })(Rt)), Rt;
}
var Cr;
function co() {
  return Cr || (Cr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(n, i) {
      for (var a in i) Object.defineProperty(n, a, {
        enumerable: !0,
        get: i[a]
      });
    }
    e(o, {
      normalizeAppPath: function() {
        return s;
      },
      normalizeRscURL: function() {
        return t;
      }
    });
    const u = uo(), l = _n();
    function s(n) {
      return (0, u.ensureLeadingSlash)(n.split("/").reduce((i, a, f, d) => !a || (0, l.isGroupSegment)(a) || a[0] === "@" || (a === "page" || a === "route") && f === d.length - 1 ? i : `${i}/${a}`, ""));
    }
    function t(n) {
      return n.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
  })(mt)), mt;
}
var Pr;
function Xt() {
  return Pr || (Pr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(n, i) {
      for (var a in i) Object.defineProperty(n, a, {
        enumerable: !0,
        get: i[a]
      });
    }
    e(o, {
      INTERCEPTION_ROUTE_MARKERS: function() {
        return l;
      },
      extractInterceptionRouteInformation: function() {
        return t;
      },
      isInterceptionRouteAppPath: function() {
        return s;
      }
    });
    const u = co(), l = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function s(n) {
      return n.split("/").find((i) => l.find((a) => i.startsWith(a))) !== void 0;
    }
    function t(n) {
      let i, a, f;
      for (const d of n.split("/"))
        if (a = l.find((g) => d.startsWith(g)), a) {
          [i, f] = n.split(a, 2);
          break;
        }
      if (!i || !a || !f)
        throw Object.defineProperty(new Error(`Invalid interception route: ${n}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
          value: "E269",
          enumerable: !1,
          configurable: !0
        });
      switch (i = (0, u.normalizeAppPath)(i), a) {
        case "(.)":
          i === "/" ? f = `/${f}` : f = i + "/" + f;
          break;
        case "(..)":
          if (i === "/")
            throw Object.defineProperty(new Error(`Invalid interception route: ${n}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
              value: "E207",
              enumerable: !1,
              configurable: !0
            });
          f = i.split("/").slice(0, -1).concat(f).join("/");
          break;
        case "(...)":
          f = "/" + f;
          break;
        case "(..)(..)":
          const d = i.split("/");
          if (d.length <= 2)
            throw Object.defineProperty(new Error(`Invalid interception route: ${n}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
              value: "E486",
              enumerable: !1,
              configurable: !0
            });
          f = d.slice(0, -2).concat(f).join("/");
          break;
        default:
          throw Object.defineProperty(new Error("Invariant: unexpected marker"), "__NEXT_ERROR_CODE", {
            value: "E112",
            enumerable: !1,
            configurable: !0
          });
      }
      return {
        interceptingRoute: i,
        interceptedRoute: f
      };
    }
  })(gt)), gt;
}
var Or;
function lo() {
  return Or || (Or = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "isDynamicRoute", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const e = Xt(), u = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/, l = /\/\[[^/]+\](?=\/|$)/;
    function s(t, n = !0) {
      return (0, e.isInterceptionRouteAppPath)(t) && (t = (0, e.extractInterceptionRouteInformation)(t).interceptedRoute), n ? l.test(t) : u.test(t);
    }
  })(_t)), _t;
}
var Ar;
function fo() {
  return Ar || (Ar = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(s, t) {
      for (var n in t) Object.defineProperty(s, n, {
        enumerable: !0,
        get: t[n]
      });
    }
    e(o, {
      getSortedRouteObjects: function() {
        return u.getSortedRouteObjects;
      },
      getSortedRoutes: function() {
        return u.getSortedRoutes;
      },
      isDynamicRoute: function() {
        return l.isDynamicRoute;
      }
    });
    const u = so(), l = lo();
  })(pt)), pt;
}
var vt = {}, bt = {}, yt = {}, Ct = { exports: {} }, Sr;
function po() {
  return Sr || (Sr = 1, (() => {
    typeof __nccwpck_require__ < "u" && (__nccwpck_require__.ab = __dirname + "/");
    var o = {};
    (() => {
      var e = o;
      Object.defineProperty(e, "__esModule", { value: !0 }), e.pathToRegexp = e.tokensToRegexp = e.regexpToFunction = e.match = e.tokensToFunction = e.compile = e.parse = void 0;
      function u(r) {
        for (var E = [], c = 0; c < r.length; ) {
          var A = r[c];
          if (A === "*" || A === "+" || A === "?") {
            E.push({ type: "MODIFIER", index: c, value: r[c++] });
            continue;
          }
          if (A === "\\") {
            E.push({ type: "ESCAPED_CHAR", index: c++, value: r[c++] });
            continue;
          }
          if (A === "{") {
            E.push({ type: "OPEN", index: c, value: r[c++] });
            continue;
          }
          if (A === "}") {
            E.push({ type: "CLOSE", index: c, value: r[c++] });
            continue;
          }
          if (A === ":") {
            for (var p = "", R = c + 1; R < r.length; ) {
              var h = r.charCodeAt(R);
              if (h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || h === 95) {
                p += r[R++];
                continue;
              }
              break;
            }
            if (!p) throw new TypeError("Missing parameter name at ".concat(c));
            E.push({ type: "NAME", index: c, value: p }), c = R;
            continue;
          }
          if (A === "(") {
            var O = 1, S = "", R = c + 1;
            if (r[R] === "?")
              throw new TypeError('Pattern cannot start with "?" at '.concat(R));
            for (; R < r.length; ) {
              if (r[R] === "\\") {
                S += r[R++] + r[R++];
                continue;
              }
              if (r[R] === ")") {
                if (O--, O === 0) {
                  R++;
                  break;
                }
              } else if (r[R] === "(" && (O++, r[R + 1] !== "?"))
                throw new TypeError("Capturing groups are not allowed at ".concat(R));
              S += r[R++];
            }
            if (O) throw new TypeError("Unbalanced pattern at ".concat(c));
            if (!S) throw new TypeError("Missing pattern at ".concat(c));
            E.push({ type: "PATTERN", index: c, value: S }), c = R;
            continue;
          }
          E.push({ type: "CHAR", index: c, value: r[c++] });
        }
        return E.push({ type: "END", index: c, value: "" }), E;
      }
      function l(r, E) {
        E === void 0 && (E = {});
        for (var c = u(r), A = E.prefixes, p = A === void 0 ? "./" : A, R = E.delimiter, h = R === void 0 ? "/#?" : R, O = [], S = 0, I = 0, j = "", m = function(W) {
          if (I < c.length && c[I].type === W) return c[I++].value;
        }, T = function(W) {
          var Y = m(W);
          if (Y !== void 0) return Y;
          var Q = c[I], P = Q.type, ae = Q.index;
          throw new TypeError("Unexpected ".concat(P, " at ").concat(ae, ", expected ").concat(W));
        }, N = function() {
          for (var W = "", Y; Y = m("CHAR") || m("ESCAPED_CHAR"); )
            W += Y;
          return W;
        }, F = function(W) {
          for (var Y = 0, Q = h; Y < Q.length; Y++) {
            var P = Q[Y];
            if (W.indexOf(P) > -1) return !0;
          }
          return !1;
        }, L = function(W) {
          var Y = O[O.length - 1], Q = W || (Y && typeof Y == "string" ? Y : "");
          if (Y && !Q)
            throw new TypeError('Must have text between two parameters, missing text after "'.concat(Y.name, '"'));
          return !Q || F(Q) ? "[^".concat(a(h), "]+?") : "(?:(?!".concat(a(Q), ")[^").concat(a(h), "])+?");
        }; I < c.length; ) {
          var k = m("CHAR"), X = m("NAME"), ee = m("PATTERN");
          if (X || ee) {
            var z = k || "";
            p.indexOf(z) === -1 && (j += z, z = ""), j && (O.push(j), j = ""), O.push({ name: X || S++, prefix: z, suffix: "", pattern: ee || L(z), modifier: m("MODIFIER") || "" });
            continue;
          }
          var H = k || m("ESCAPED_CHAR");
          if (H) {
            j += H;
            continue;
          }
          j && (O.push(j), j = "");
          var K = m("OPEN");
          if (K) {
            var z = N(), te = m("NAME") || "", re = m("PATTERN") || "", Z = N();
            T("CLOSE"), O.push({ name: te || (re ? S++ : ""), pattern: te && !re ? L(z) : re, prefix: z, suffix: Z, modifier: m("MODIFIER") || "" });
            continue;
          }
          T("END");
        }
        return O;
      }
      e.parse = l;
      function s(r, E) {
        return t(l(r, E), E);
      }
      e.compile = s;
      function t(r, E) {
        E === void 0 && (E = {});
        var c = f(E), A = E.encode, p = A === void 0 ? function(S) {
          return S;
        } : A, R = E.validate, h = R === void 0 ? !0 : R, O = r.map((function(S) {
          if (typeof S == "object")
            return new RegExp("^(?:".concat(S.pattern, ")$"), c);
        }));
        return function(S) {
          for (var I = "", j = 0; j < r.length; j++) {
            var m = r[j];
            if (typeof m == "string") {
              I += m;
              continue;
            }
            var T = S ? S[m.name] : void 0, N = m.modifier === "?" || m.modifier === "*", F = m.modifier === "*" || m.modifier === "+";
            if (Array.isArray(T)) {
              if (!F)
                throw new TypeError('Expected "'.concat(m.name, '" to not repeat, but got an array'));
              if (T.length === 0) {
                if (N) continue;
                throw new TypeError('Expected "'.concat(m.name, '" to not be empty'));
              }
              for (var L = 0; L < T.length; L++) {
                var k = p(T[L], m);
                if (h && !O[j].test(k))
                  throw new TypeError('Expected all "'.concat(m.name, '" to match "').concat(m.pattern, '", but got "').concat(k, '"'));
                I += m.prefix + k + m.suffix;
              }
              continue;
            }
            if (typeof T == "string" || typeof T == "number") {
              var k = p(String(T), m);
              if (h && !O[j].test(k))
                throw new TypeError('Expected "'.concat(m.name, '" to match "').concat(m.pattern, '", but got "').concat(k, '"'));
              I += m.prefix + k + m.suffix;
              continue;
            }
            if (!N) {
              var X = F ? "an array" : "a string";
              throw new TypeError('Expected "'.concat(m.name, '" to be ').concat(X));
            }
          }
          return I;
        };
      }
      e.tokensToFunction = t;
      function n(r, E) {
        var c = [], A = v(r, c, E);
        return i(A, c, E);
      }
      e.match = n;
      function i(r, E, c) {
        c === void 0 && (c = {});
        var A = c.decode, p = A === void 0 ? function(R) {
          return R;
        } : A;
        return function(R) {
          var h = r.exec(R);
          if (!h) return !1;
          for (var O = h[0], S = h.index, I = /* @__PURE__ */ Object.create(null), j = function(T) {
            if (h[T] === void 0) return "continue";
            var N = E[T - 1];
            N.modifier === "*" || N.modifier === "+" ? I[N.name] = h[T].split(N.prefix + N.suffix).map((function(F) {
              return p(F, N);
            })) : I[N.name] = p(h[T], N);
          }, m = 1; m < h.length; m++)
            j(m);
          return { path: O, index: S, params: I };
        };
      }
      e.regexpToFunction = i;
      function a(r) {
        return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function f(r) {
        return r && r.sensitive ? "" : "i";
      }
      function d(r, E) {
        if (!E) return r;
        for (var c = /\((?:\?<(.*?)>)?(?!\?)/g, A = 0, p = c.exec(r.source); p; )
          E.push({ name: p[1] || A++, prefix: "", suffix: "", modifier: "", pattern: "" }), p = c.exec(r.source);
        return r;
      }
      function g(r, E, c) {
        var A = r.map((function(p) {
          return v(p, E, c).source;
        }));
        return new RegExp("(?:".concat(A.join("|"), ")"), f(c));
      }
      function b(r, E, c) {
        return _(l(r, c), E, c);
      }
      function _(r, E, c) {
        c === void 0 && (c = {});
        for (var A = c.strict, p = A === void 0 ? !1 : A, R = c.start, h = R === void 0 ? !0 : R, O = c.end, S = O === void 0 ? !0 : O, I = c.encode, j = I === void 0 ? function(Y) {
          return Y;
        } : I, m = c.delimiter, T = m === void 0 ? "/#?" : m, N = c.endsWith, F = N === void 0 ? "" : N, L = "[".concat(a(F), "]|$"), k = "[".concat(a(T), "]"), X = h ? "^" : "", ee = 0, z = r; ee < z.length; ee++) {
          var H = z[ee];
          if (typeof H == "string")
            X += a(j(H));
          else {
            var K = a(j(H.prefix)), te = a(j(H.suffix));
            if (H.pattern)
              if (E && E.push(H), K || te)
                if (H.modifier === "+" || H.modifier === "*") {
                  var re = H.modifier === "*" ? "?" : "";
                  X += "(?:".concat(K, "((?:").concat(H.pattern, ")(?:").concat(te).concat(K, "(?:").concat(H.pattern, "))*)").concat(te, ")").concat(re);
                } else
                  X += "(?:".concat(K, "(").concat(H.pattern, ")").concat(te, ")").concat(H.modifier);
              else {
                if (H.modifier === "+" || H.modifier === "*")
                  throw new TypeError('Can not repeat "'.concat(H.name, '" without a prefix and suffix'));
                X += "(".concat(H.pattern, ")").concat(H.modifier);
              }
            else
              X += "(?:".concat(K).concat(te, ")").concat(H.modifier);
          }
        }
        if (S)
          p || (X += "".concat(k, "?")), X += c.endsWith ? "(?=".concat(L, ")") : "$";
        else {
          var Z = r[r.length - 1], W = typeof Z == "string" ? k.indexOf(Z[Z.length - 1]) > -1 : Z === void 0;
          p || (X += "(?:".concat(k, "(?=").concat(L, "))?")), W || (X += "(?=".concat(k, "|").concat(L, ")"));
        }
        return new RegExp(X, f(c));
      }
      e.tokensToRegexp = _;
      function v(r, E, c) {
        return r instanceof RegExp ? d(r, E) : Array.isArray(r) ? g(r, E, c) : b(r, E, c);
      }
      e.pathToRegexp = v;
    })(), Ct.exports = o;
  })()), Ct.exports;
}
var Pt = {}, wr;
function ho() {
  return wr || (wr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(a, f) {
      for (var d in f) Object.defineProperty(a, d, {
        enumerable: !0,
        get: f[d]
      });
    }
    e(o, {
      PARAM_SEPARATOR: function() {
        return u;
      },
      hasAdjacentParameterIssues: function() {
        return l;
      },
      normalizeAdjacentParameters: function() {
        return s;
      },
      normalizeTokensForRegexp: function() {
        return t;
      },
      stripNormalizedSeparators: function() {
        return n;
      },
      stripParameterSeparators: function() {
        return i;
      }
    });
    const u = "_NEXTSEP_";
    function l(a) {
      return typeof a != "string" ? !1 : !!(/\/\(\.{1,3}\):[^/\s]+/.test(a) || /:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(a));
    }
    function s(a) {
      let f = a;
      return f = f.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${u}:$2`), f = f.replace(/:([^:/\s)]+)(?=:)/g, `:$1${u}`), f;
    }
    function t(a) {
      return a.map((f) => typeof f == "object" && f !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
      "modifier" in f && // Only repeating modifiers (* or +) cause the validation error
      // Other modifiers like '?' (optional) are fine
      (f.modifier === "*" || f.modifier === "+") && // Token objects can have different shapes depending on route pattern
      "prefix" in f && "suffix" in f && // Both prefix and suffix must be empty strings
      // This is what causes the validation error in path-to-regexp
      f.prefix === "" && f.suffix === "" ? {
        ...f,
        prefix: "/"
      } : f);
    }
    function n(a) {
      return a.replace(new RegExp(`\\)${u}`, "g"), ")");
    }
    function i(a) {
      const f = {};
      for (const [d, g] of Object.entries(a))
        typeof g == "string" ? f[d] = g.replace(new RegExp(`^${u}`), "") : Array.isArray(g) ? f[d] = g.map((b) => typeof b == "string" ? b.replace(new RegExp(`^${u}`), "") : b) : f[d] = g;
      return f;
    }
  })(Pt)), Pt;
}
var Tr;
function _o() {
  return Tr || (Tr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(a, f) {
      for (var d in f) Object.defineProperty(a, d, {
        enumerable: !0,
        get: f[d]
      });
    }
    e(o, {
      safeCompile: function() {
        return t;
      },
      safePathToRegexp: function() {
        return s;
      },
      safeRegexpToFunction: function() {
        return n;
      },
      safeRouteMatcher: function() {
        return i;
      }
    });
    const u = po(), l = ho();
    function s(a, f, d) {
      if (typeof a != "string")
        return (0, u.pathToRegexp)(a, f, d);
      const g = (0, l.hasAdjacentParameterIssues)(a), b = g ? (0, l.normalizeAdjacentParameters)(a) : a;
      try {
        return (0, u.pathToRegexp)(b, f, d);
      } catch (_) {
        if (!g)
          try {
            const v = (0, l.normalizeAdjacentParameters)(a);
            return (0, u.pathToRegexp)(v, f, d);
          } catch {
            throw _;
          }
        throw _;
      }
    }
    function t(a, f) {
      const d = (0, l.hasAdjacentParameterIssues)(a), g = d ? (0, l.normalizeAdjacentParameters)(a) : a;
      try {
        const b = (0, u.compile)(g, f);
        return d ? (_) => (0, l.stripNormalizedSeparators)(b(_)) : b;
      } catch (b) {
        if (!d)
          try {
            const _ = (0, l.normalizeAdjacentParameters)(a), v = (0, u.compile)(_, f);
            return (r) => (0, l.stripNormalizedSeparators)(v(r));
          } catch {
            throw b;
          }
        throw b;
      }
    }
    function n(a, f) {
      const d = (0, u.regexpToFunction)(a, f || []);
      return (g) => {
        const b = d(g);
        return b ? {
          ...b,
          params: (0, l.stripParameterSeparators)(b.params)
        } : !1;
      };
    }
    function i(a) {
      return (f) => {
        const d = a(f);
        return d ? (0, l.stripParameterSeparators)(d) : !1;
      };
    }
  })(yt)), yt;
}
var Nr;
function gn() {
  return Nr || (Nr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "getRouteMatcher", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const e = ke(), u = _o();
    function l({ re: s, groups: t }) {
      const n = (i) => {
        const a = s.exec(i);
        if (!a) return !1;
        const f = (g) => {
          try {
            return decodeURIComponent(g);
          } catch {
            throw Object.defineProperty(new e.DecodeError("failed to decode param"), "__NEXT_ERROR_CODE", {
              value: "E528",
              enumerable: !1,
              configurable: !0
            });
          }
        }, d = {};
        for (const [g, b] of Object.entries(t)) {
          const _ = a[b.pos];
          _ !== void 0 && (b.repeat ? d[g] = _.split("/").map((v) => f(v)) : d[g] = f(_));
        }
        return d;
      };
      return (0, u.safeRouteMatcher)(n);
    }
  })(bt)), bt;
}
var Ot = {}, At = {}, xr;
function go() {
  return xr || (xr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(oe, x) {
      for (var w in x) Object.defineProperty(oe, w, {
        enumerable: !0,
        get: x[w]
      });
    }
    e(o, {
      ACTION_SUFFIX: function() {
        return v;
      },
      APP_DIR_ALIAS: function() {
        return K;
      },
      CACHE_ONE_YEAR: function() {
        return m;
      },
      DOT_NEXT_ALIAS: function() {
        return z;
      },
      ESLINT_DEFAULT_DIRS: function() {
        return pe;
      },
      GSP_NO_RETURNED_VALUE: function() {
        return D;
      },
      GSSP_COMPONENT_MEMBER_ERROR: function() {
        return de;
      },
      GSSP_NO_RETURNED_VALUE: function() {
        return q;
      },
      HTML_CONTENT_TYPE_HEADER: function() {
        return l;
      },
      INFINITE_CACHE: function() {
        return T;
      },
      INSTRUMENTATION_HOOK_FILENAME: function() {
        return X;
      },
      JSON_CONTENT_TYPE_HEADER: function() {
        return s;
      },
      MATCHED_PATH_HEADER: function() {
        return i;
      },
      MIDDLEWARE_FILENAME: function() {
        return N;
      },
      MIDDLEWARE_LOCATION_REGEXP: function() {
        return F;
      },
      NEXT_BODY_SUFFIX: function() {
        return c;
      },
      NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return j;
      },
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return p;
      },
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return R;
      },
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return I;
      },
      NEXT_CACHE_TAGS_HEADER: function() {
        return A;
      },
      NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return O;
      },
      NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return S;
      },
      NEXT_DATA_SUFFIX: function() {
        return r;
      },
      NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return n;
      },
      NEXT_META_SUFFIX: function() {
        return E;
      },
      NEXT_QUERY_PARAM_PREFIX: function() {
        return t;
      },
      NEXT_RESUME_HEADER: function() {
        return h;
      },
      NON_STANDARD_NODE_ENV: function() {
        return se;
      },
      PAGES_DIR_ALIAS: function() {
        return ee;
      },
      PRERENDER_REVALIDATE_HEADER: function() {
        return a;
      },
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return f;
      },
      PROXY_FILENAME: function() {
        return L;
      },
      PROXY_LOCATION_REGEXP: function() {
        return k;
      },
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return ae;
      },
      ROOT_DIR_ALIAS: function() {
        return H;
      },
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return P;
      },
      RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return Q;
      },
      RSC_ACTION_PROXY_ALIAS: function() {
        return Z;
      },
      RSC_ACTION_VALIDATE_ALIAS: function() {
        return re;
      },
      RSC_CACHE_WRAPPER_ALIAS: function() {
        return W;
      },
      RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
        return Y;
      },
      RSC_MOD_REF_PROXY_ALIAS: function() {
        return te;
      },
      RSC_PREFETCH_SUFFIX: function() {
        return d;
      },
      RSC_SEGMENTS_DIR_SUFFIX: function() {
        return g;
      },
      RSC_SEGMENT_SUFFIX: function() {
        return b;
      },
      RSC_SUFFIX: function() {
        return _;
      },
      SERVER_PROPS_EXPORT_ERROR: function() {
        return ge;
      },
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return ce;
      },
      SERVER_PROPS_SSG_CONFLICT: function() {
        return y;
      },
      SERVER_RUNTIME: function() {
        return le;
      },
      SSG_FALLBACK_EXPORT_ERROR: function() {
        return ie;
      },
      SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return G;
      },
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return C;
      },
      TEXT_PLAIN_CONTENT_TYPE_HEADER: function() {
        return u;
      },
      UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return fe;
      },
      WEBPACK_LAYERS: function() {
        return ne;
      },
      WEBPACK_RESOURCE_QUERIES: function() {
        return M;
      },
      WEB_SOCKET_MAX_RECONNECTIONS: function() {
        return V;
      }
    });
    const u = "text/plain", l = "text/html; charset=utf-8", s = "application/json; charset=utf-8", t = "nxtP", n = "nxtI", i = "x-matched-path", a = "x-prerender-revalidate", f = "x-prerender-revalidate-if-generated", d = ".prefetch.rsc", g = ".segments", b = ".segment.rsc", _ = ".rsc", v = ".action", r = ".json", E = ".meta", c = ".body", A = "x-next-cache-tags", p = "x-next-revalidated-tags", R = "x-next-revalidate-tag-token", h = "next-resume", O = 128, S = 256, I = 1024, j = "_N_T_", m = 31536e3, T = 4294967294, N = "middleware", F = `(?:src/)?${N}`, L = "proxy", k = `(?:src/)?${L}`, X = "instrumentation", ee = "private-next-pages", z = "private-dot-next", H = "private-next-root-dir", K = "private-next-app-dir", te = "private-next-rsc-mod-ref-proxy", re = "private-next-rsc-action-validate", Z = "private-next-rsc-server-reference", W = "private-next-rsc-cache-wrapper", Y = "private-next-rsc-track-dynamic-import", Q = "private-next-rsc-action-encryption", P = "private-next-rsc-action-client-wrapper", ae = "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict", G = "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps", ce = "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.", y = "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps", C = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props", ge = "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export", D = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?", q = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?", fe = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.", de = "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member", se = 'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env', ie = "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export", pe = [
      "app",
      "pages",
      "components",
      "lib",
      "src"
    ], le = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    }, V = 12, $ = {
      /**
      * The layer for the shared code between the client and server bundles.
      */
      shared: "shared",
      /**
      * The layer for server-only runtime and picking up `react-server` export conditions.
      * Including app router RSC pages and app router custom routes and metadata routes.
      */
      reactServerComponents: "rsc",
      /**
      * Server Side Rendering layer for app (ssr).
      */
      serverSideRendering: "ssr",
      /**
      * The browser client bundle layer for actions.
      */
      actionBrowser: "action-browser",
      /**
      * The Node.js bundle layer for the API routes.
      */
      apiNode: "api-node",
      /**
      * The Edge Lite bundle layer for the API routes.
      */
      apiEdge: "api-edge",
      /**
      * The layer for the middleware code.
      */
      middleware: "middleware",
      /**
      * The layer for the instrumentation hooks.
      */
      instrument: "instrument",
      /**
      * The layer for assets on the edge.
      */
      edgeAsset: "edge-asset",
      /**
      * The browser client bundle layer for App directory.
      */
      appPagesBrowser: "app-pages-browser",
      /**
      * The browser client bundle layer for Pages directory.
      */
      pagesDirBrowser: "pages-dir-browser",
      /**
      * The Edge Lite bundle layer for Pages directory.
      */
      pagesDirEdge: "pages-dir-edge",
      /**
      * The Node.js bundle layer for Pages directory.
      */
      pagesDirNode: "pages-dir-node"
    }, ne = {
      ...$,
      GROUP: {
        builtinReact: [
          $.reactServerComponents,
          $.actionBrowser
        ],
        serverOnly: [
          $.reactServerComponents,
          $.actionBrowser,
          $.instrument,
          $.middleware
        ],
        neutralTarget: [
          // pages api
          $.apiNode,
          $.apiEdge
        ],
        clientOnly: [
          $.serverSideRendering,
          $.appPagesBrowser
        ],
        bundled: [
          $.reactServerComponents,
          $.actionBrowser,
          $.serverSideRendering,
          $.appPagesBrowser,
          $.shared,
          $.instrument,
          $.middleware
        ],
        appPages: [
          // app router pages and layouts
          $.reactServerComponents,
          $.serverSideRendering,
          $.appPagesBrowser,
          $.actionBrowser
        ]
      }
    }, M = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
  })(At)), At;
}
var St = {}, Ir;
function mo() {
  return Ir || (Ir = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "escapeStringRegexp", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const e = /[|\\{}()[\]^$+*?.-]/, u = /[|\\{}()[\]^$+*?.-]/g;
    function l(s) {
      return e.test(s) ? s.replace(u, "\\$&") : s;
    }
  })(St)), St;
}
var wt = {}, Tt = {}, Lr;
function Eo() {
  return Lr || (Lr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "InvariantError", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    class e extends Error {
      constructor(l, s) {
        super(`Invariant: ${l.endsWith(".") ? l : l + "."} This is a bug in Next.js.`, s), this.name = "InvariantError";
      }
    }
  })(Tt)), Tt;
}
var Nt = {}, Mr;
function Ro() {
  return Mr || (Mr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "parseLoaderTree", {
      enumerable: !0,
      get: function() {
        return u;
      }
    });
    const e = _n();
    function u(l) {
      const [s, t, n] = l, { layout: i, template: a } = n;
      let { page: f } = n;
      f = s === e.DEFAULT_SEGMENT_KEY ? n.defaultPage : f;
      const d = i?.[1] || a?.[1] || f?.[1];
      return {
        page: f,
        segment: s,
        modules: n,
        /* it can be either layout / template / page */
        conventionPath: d,
        parallelRoutes: t
      };
    }
  })(Nt)), Nt;
}
var xt = {}, jr;
function vo() {
  return jr || (jr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(n, i) {
      for (var a in i) Object.defineProperty(n, a, {
        enumerable: !0,
        get: i[a]
      });
    }
    e(o, {
      getParamProperties: function() {
        return t;
      },
      getSegmentParam: function() {
        return l;
      },
      isCatchAll: function() {
        return s;
      }
    });
    const u = Xt();
    function l(n) {
      const i = u.INTERCEPTION_ROUTE_MARKERS.find((a) => n.startsWith(a));
      return i && (n = n.slice(i.length)), n.startsWith("[[...") && n.endsWith("]]") ? {
        // TODO-APP: Optional catchall does not currently work with parallel routes,
        // so for now aren't handling a potential interception marker.
        type: "optional-catchall",
        param: n.slice(5, -2)
      } : n.startsWith("[...") && n.endsWith("]") ? {
        type: i ? `catchall-intercepted-${i}` : "catchall",
        param: n.slice(4, -1)
      } : n.startsWith("[") && n.endsWith("]") ? {
        type: i ? `dynamic-intercepted-${i}` : "dynamic",
        param: n.slice(1, -1)
      } : null;
    }
    function s(n) {
      return n === "catchall" || n === "catchall-intercepted-(..)(..)" || n === "catchall-intercepted-(.)" || n === "catchall-intercepted-(..)" || n === "catchall-intercepted-(...)" || n === "optional-catchall";
    }
    function t(n) {
      let i = !1, a = !1;
      switch (n) {
        case "catchall":
        case "catchall-intercepted-(..)(..)":
        case "catchall-intercepted-(.)":
        case "catchall-intercepted-(..)":
        case "catchall-intercepted-(...)":
          i = !0;
          break;
        case "optional-catchall":
          i = !0, a = !0;
          break;
      }
      return {
        repeat: i,
        optional: a
      };
    }
  })(xt)), xt;
}
var Dr;
function bo() {
  return Dr || (Dr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(g, b) {
      for (var _ in b) Object.defineProperty(g, _, {
        enumerable: !0,
        get: b[_]
      });
    }
    e(o, {
      PARAMETER_PATTERN: function() {
        return a;
      },
      getDynamicParam: function() {
        return i;
      },
      interpolateParallelRouteParams: function() {
        return n;
      },
      parseMatchedParameter: function() {
        return d;
      },
      parseParameter: function() {
        return f;
      }
    });
    const u = Eo(), l = Ro(), s = vo();
    function t(g, b, _) {
      let v = g[b];
      if (_?.has(b)) {
        const [r] = _.get(b);
        v = r;
      } else Array.isArray(v) ? v = v.map((r) => encodeURIComponent(r)) : typeof v == "string" && (v = encodeURIComponent(v));
      return v;
    }
    function n(g, b, _, v) {
      const r = structuredClone(b), E = [
        {
          tree: g,
          depth: 0
        }
      ], c = _.split("/").slice(1);
      for (; E.length > 0; ) {
        const { tree: A, depth: p } = E.pop(), { segment: R, parallelRoutes: h } = (0, l.parseLoaderTree)(A), O = (0, s.getSegmentParam)(R);
        if (O && !r.hasOwnProperty(O.param) && // If the param is in the fallback route params, we don't need to
        // interpolate it because it's already marked as being unknown.
        !v?.has(O.param))
          switch (O.type) {
            case "catchall":
            case "optional-catchall":
            case "catchall-intercepted-(..)(..)":
            case "catchall-intercepted-(.)":
            case "catchall-intercepted-(..)":
            case "catchall-intercepted-(...)":
              const m = c.slice(p).flatMap((T) => {
                const N = (0, s.getSegmentParam)(T);
                return N ? r[N.param] : T;
              }).filter((T) => T !== void 0);
              m.length > 0 && (r[O.param] = m);
              break;
            case "dynamic":
            case "dynamic-intercepted-(..)(..)":
            case "dynamic-intercepted-(.)":
            case "dynamic-intercepted-(..)":
            case "dynamic-intercepted-(...)":
              if (p < c.length) {
                const T = c[p], N = (0, s.getSegmentParam)(T);
                r[O.param] = N ? r[N.param] : T;
              }
              break;
            default:
              O.type;
          }
        let S = p;
        !(R.startsWith("(") && R.endsWith(")")) && R !== "" && S++;
        for (const j of Object.values(h))
          E.push({
            tree: j,
            depth: S
          });
      }
      return r;
    }
    function i(g, b, _, v) {
      let r = t(g, b, v);
      if (!r || r.length === 0) {
        if (_ === "oc")
          return {
            param: b,
            value: null,
            type: _,
            treeSegment: [
              b,
              "",
              _
            ]
          };
        throw Object.defineProperty(new u.InvariantError(`Missing value for segment key: "${b}" with dynamic param type: ${_}`), "__NEXT_ERROR_CODE", {
          value: "E864",
          enumerable: !1,
          configurable: !0
        });
      }
      return {
        param: b,
        // The value that is passed to user code.
        value: r,
        // The value that is rendered in the router tree.
        treeSegment: [
          b,
          Array.isArray(r) ? r.join("/") : r,
          _
        ],
        type: _
      };
    }
    const a = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
    function f(g) {
      const b = g.match(a);
      return d(b ? b[2] : g);
    }
    function d(g) {
      const b = g.startsWith("[") && g.endsWith("]");
      b && (g = g.slice(1, -1));
      const _ = g.startsWith("...");
      return _ && (g = g.slice(3)), {
        key: g,
        repeat: _,
        optional: b
      };
    }
  })(wt)), wt;
}
var Hr;
function mn() {
  return Hr || (Hr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    function e(v, r) {
      for (var E in r) Object.defineProperty(v, E, {
        enumerable: !0,
        get: r[E]
      });
    }
    e(o, {
      getNamedMiddlewareRegex: function() {
        return _;
      },
      getNamedRouteRegex: function() {
        return b;
      },
      getRouteRegex: function() {
        return a;
      }
    });
    const u = go(), l = Xt(), s = mo(), t = dn(), n = bo();
    function i(v, r, E) {
      const c = {};
      let A = 1;
      const p = [];
      for (const R of (0, t.removeTrailingSlash)(v).slice(1).split("/")) {
        const h = l.INTERCEPTION_ROUTE_MARKERS.find((S) => R.startsWith(S)), O = R.match(n.PARAMETER_PATTERN);
        if (h && O && O[2]) {
          const { key: S, optional: I, repeat: j } = (0, n.parseMatchedParameter)(O[2]);
          c[S] = {
            pos: A++,
            repeat: j,
            optional: I
          }, p.push(`/${(0, s.escapeStringRegexp)(h)}([^/]+?)`);
        } else if (O && O[2]) {
          const { key: S, repeat: I, optional: j } = (0, n.parseMatchedParameter)(O[2]);
          c[S] = {
            pos: A++,
            repeat: I,
            optional: j
          }, E && O[1] && p.push(`/${(0, s.escapeStringRegexp)(O[1])}`);
          let m = I ? j ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          E && O[1] && (m = m.substring(1)), p.push(m);
        } else
          p.push(`/${(0, s.escapeStringRegexp)(R)}`);
        r && O && O[3] && p.push((0, s.escapeStringRegexp)(O[3]));
      }
      return {
        parameterizedRoute: p.join(""),
        groups: c
      };
    }
    function a(v, { includeSuffix: r = !1, includePrefix: E = !1, excludeOptionalTrailingSlash: c = !1 } = {}) {
      const { parameterizedRoute: A, groups: p } = i(v, r, E);
      let R = A;
      return c || (R += "(?:/)?"), {
        re: new RegExp(`^${R}$`),
        groups: p
      };
    }
    function f() {
      let v = 0;
      return () => {
        let r = "", E = ++v;
        for (; E > 0; )
          r += String.fromCharCode(97 + (E - 1) % 26), E = Math.floor((E - 1) / 26);
        return r;
      };
    }
    function d({ interceptionMarker: v, getSafeRouteKey: r, segment: E, routeKeys: c, keyPrefix: A, backreferenceDuplicateKeys: p }) {
      const { key: R, optional: h, repeat: O } = (0, n.parseMatchedParameter)(E);
      let S = R.replace(/\W/g, "");
      A && (S = `${A}${S}`);
      let I = !1;
      (S.length === 0 || S.length > 30) && (I = !0), isNaN(parseInt(S.slice(0, 1))) || (I = !0), I && (S = r());
      const j = S in c;
      A ? c[S] = `${A}${R}` : c[S] = R;
      const m = v ? (0, s.escapeStringRegexp)(v) : "";
      let T;
      return j && p ? T = `\\k<${S}>` : O ? T = `(?<${S}>.+?)` : T = `(?<${S}>[^/]+?)`, {
        key: R,
        pattern: h ? `(?:/${m}${T})?` : `/${m}${T}`,
        cleanedKey: S,
        optional: h,
        repeat: O
      };
    }
    function g(v, r, E, c, A, p = {
      names: {},
      intercepted: {}
    }) {
      const R = f(), h = {}, O = [], S = [];
      p = structuredClone(p);
      for (const I of (0, t.removeTrailingSlash)(v).slice(1).split("/")) {
        const j = l.INTERCEPTION_ROUTE_MARKERS.some((F) => I.startsWith(F)), m = I.match(n.PARAMETER_PATTERN), T = j ? m?.[1] : void 0;
        let N;
        if (T && m?.[2] ? (N = r ? u.NEXT_INTERCEPTION_MARKER_PREFIX : void 0, p.intercepted[m[2]] = T) : m?.[2] && p.intercepted[m[2]] ? N = r ? u.NEXT_INTERCEPTION_MARKER_PREFIX : void 0 : N = r ? u.NEXT_QUERY_PARAM_PREFIX : void 0, T && m && m[2]) {
          const { key: F, pattern: L, cleanedKey: k, repeat: X, optional: ee } = d({
            getSafeRouteKey: R,
            interceptionMarker: T,
            segment: m[2],
            routeKeys: h,
            keyPrefix: N,
            backreferenceDuplicateKeys: A
          });
          O.push(L), S.push(`/${m[1]}:${p.names[F] ?? k}${X ? ee ? "*" : "+" : ""}`), p.names[F] ??= k;
        } else if (m && m[2]) {
          c && m[1] && (O.push(`/${(0, s.escapeStringRegexp)(m[1])}`), S.push(`/${m[1]}`));
          const { key: F, pattern: L, cleanedKey: k, repeat: X, optional: ee } = d({
            getSafeRouteKey: R,
            segment: m[2],
            routeKeys: h,
            keyPrefix: N,
            backreferenceDuplicateKeys: A
          });
          let z = L;
          c && m[1] && (z = z.substring(1)), O.push(z), S.push(`/:${p.names[F] ?? k}${X ? ee ? "*" : "+" : ""}`), p.names[F] ??= k;
        } else
          O.push(`/${(0, s.escapeStringRegexp)(I)}`), S.push(`/${I}`);
        E && m && m[3] && (O.push((0, s.escapeStringRegexp)(m[3])), S.push(m[3]));
      }
      return {
        namedParameterizedRoute: O.join(""),
        routeKeys: h,
        pathToRegexpPattern: S.join(""),
        reference: p
      };
    }
    function b(v, r) {
      const E = g(v, r.prefixRouteKeys, r.includeSuffix ?? !1, r.includePrefix ?? !1, r.backreferenceDuplicateKeys ?? !1, r.reference);
      let c = E.namedParameterizedRoute;
      return r.excludeOptionalTrailingSlash || (c += "(?:/)?"), {
        ...a(v, r),
        namedRegex: `^${c}$`,
        routeKeys: E.routeKeys,
        pathToRegexpPattern: E.pathToRegexpPattern,
        reference: E.reference
      };
    }
    function _(v, r) {
      const { parameterizedRoute: E } = i(v, !1, !1), { catchAll: c = !0 } = r;
      if (E === "/")
        return {
          namedRegex: `^/${c ? ".*" : ""}$`
        };
      const { namedParameterizedRoute: A } = g(v, !1, !1, !1, !1, void 0);
      return {
        namedRegex: `^${A}${c ? "(?:(/.*)?)" : ""}$`
      };
    }
  })(Ot)), Ot;
}
var $r;
function yo() {
  return $r || ($r = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "interpolateAs", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const e = gn(), u = mn();
    function l(s, t, n) {
      let i = "";
      const a = (0, u.getRouteRegex)(s), f = a.groups, d = (
        // Try to match the dynamic route against the asPath
        (t !== s ? (0, e.getRouteMatcher)(a)(t) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        n
      );
      i = s;
      const g = Object.keys(f);
      return g.every((b) => {
        let _ = d[b] || "";
        const { repeat: v, optional: r } = f[b];
        let E = `[${v ? "..." : ""}${b}]`;
        return r && (E = `${_ ? "" : "/"}[${E}]`), v && !Array.isArray(_) && (_ = [
          _
        ]), (r || b in d) && // Interpolate group into data URL if present
        (i = i.replace(E, v ? _.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (c) => encodeURIComponent(c)
        ).join("/") : encodeURIComponent(_)) || "/");
      }) || (i = ""), {
        params: g,
        result: i
      };
    }
  })(vt)), vt;
}
var kr;
function Co() {
  return kr || (kr = 1, (function(o, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "resolveHref", {
      enumerable: !0,
      get: function() {
        return b;
      }
    });
    const u = ln(), l = fn(), s = ao(), t = ke(), n = qe(), i = hn(), a = fo(), f = yo(), d = mn(), g = gn();
    function b(_, v, r) {
      let E, c = typeof v == "string" ? v : (0, l.formatWithValidation)(v);
      const A = c.match(/^[a-z][a-z0-9+.-]*:\/\//i), p = A ? c.slice(A[0].length) : c;
      if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
        console.error(`Invalid href '${c}' passed to next/router in page: '${_.pathname}'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.`);
        const h = (0, t.normalizeRepeatedSlashes)(p);
        c = (A ? A[0] : "") + h;
      }
      if (!(0, i.isLocalURL)(c))
        return r ? [
          c
        ] : c;
      try {
        let h = c.startsWith("#") ? _.asPath : _.pathname;
        if (c.startsWith("?") && (h = _.asPath, (0, a.isDynamicRoute)(_.pathname))) {
          h = _.pathname;
          const O = (0, d.getRouteRegex)(_.pathname);
          (0, g.getRouteMatcher)(O)(_.asPath) || (h = _.asPath);
        }
        E = new URL(h, "http://n");
      } catch {
        E = new URL("/", "http://n");
      }
      try {
        const h = new URL(c, E);
        h.pathname = (0, n.normalizePathTrailingSlash)(h.pathname);
        let O = "";
        if ((0, a.isDynamicRoute)(h.pathname) && h.searchParams && r) {
          const I = (0, u.searchParamsToUrlQuery)(h.searchParams), { result: j, params: m } = (0, f.interpolateAs)(h.pathname, h.pathname, I);
          j && (O = (0, l.formatWithValidation)({
            pathname: j,
            hash: h.hash,
            query: (0, s.omit)(I, m)
          }));
        }
        const S = h.origin === E.origin ? h.href.slice(h.origin.length) : h.href;
        return r ? [
          S,
          O || S
        ] : S;
      } catch {
        return r ? [
          c
        ] : c;
      }
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(Se, Se.exports)), Se.exports;
}
var Ne = { exports: {} }, It = {}, Lt = {}, qr;
function En() {
  return qr || (qr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "addPathPrefix", {
      enumerable: !0,
      get: function() {
        return u;
      }
    });
    const e = Ut();
    function u(l, s) {
      if (!l.startsWith("/") || !s)
        return l;
      const { pathname: t, query: n, hash: i } = (0, e.parsePath)(l);
      return `${s}${t}${n}${i}`;
    }
  })(Lt)), Lt;
}
var Ur;
function Po() {
  return Ur || (Ur = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "addLocale", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const e = En(), u = pn();
    function l(s, t, n, i) {
      if (!t || t === n) return s;
      const a = s.toLowerCase();
      return !i && ((0, u.pathHasPrefix)(a, "/api") || (0, u.pathHasPrefix)(a, `/${t.toLowerCase()}`)) ? s : (0, e.addPathPrefix)(s, `/${t}`);
    }
  })(It)), It;
}
var Xr;
function Oo() {
  return Xr || (Xr = 1, (function(o, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addLocale", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const u = qe(), l = (s, ...t) => process.env.__NEXT_I18N_SUPPORT ? (0, u.normalizePathTrailingSlash)(Po().addLocale(s, ...t)) : s;
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(Ne, Ne.exports)), Ne.exports;
}
var xe = { exports: {} }, Ie = { exports: {} }, Gr;
function Ao() {
  return Gr || (Gr = 1, (function(o, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function u(t, n) {
      for (var i in n) Object.defineProperty(t, i, {
        enumerable: !0,
        get: n[i]
      });
    }
    u(e, {
      cancelIdleCallback: function() {
        return s;
      },
      requestIdleCallback: function() {
        return l;
      }
    });
    const l = typeof self < "u" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
      let n = Date.now();
      return self.setTimeout(function() {
        t({
          didTimeout: !1,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - n));
          }
        });
      }, 1);
    }, s = typeof self < "u" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
      return clearTimeout(t);
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(Ie, Ie.exports)), Ie.exports;
}
var Fr;
function So() {
  return Fr || (Fr = 1, (function(o, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "useIntersection", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const u = ve, l = Ao(), s = typeof IntersectionObserver == "function", t = /* @__PURE__ */ new Map(), n = [];
    function i(d) {
      const g = {
        root: d.root || null,
        margin: d.rootMargin || ""
      }, b = n.find((E) => E.root === g.root && E.margin === g.margin);
      let _;
      if (b && (_ = t.get(b), _))
        return _;
      const v = /* @__PURE__ */ new Map(), r = new IntersectionObserver((E) => {
        E.forEach((c) => {
          const A = v.get(c.target), p = c.isIntersecting || c.intersectionRatio > 0;
          A && p && A(p);
        });
      }, d);
      return _ = {
        id: g,
        observer: r,
        elements: v
      }, n.push(g), t.set(g, _), _;
    }
    function a(d, g, b) {
      const { id: _, observer: v, elements: r } = i(b);
      return r.set(d, g), v.observe(d), function() {
        if (r.delete(d), v.unobserve(d), r.size === 0) {
          v.disconnect(), t.delete(_);
          const c = n.findIndex((A) => A.root === _.root && A.margin === _.margin);
          c > -1 && n.splice(c, 1);
        }
      };
    }
    function f({ rootRef: d, rootMargin: g, disabled: b }) {
      const _ = b || !s, [v, r] = (0, u.useState)(!1), E = (0, u.useRef)(null), c = (0, u.useCallback)((p) => {
        E.current = p;
      }, []);
      (0, u.useEffect)(() => {
        if (s) {
          if (_ || v) return;
          const p = E.current;
          if (p && p.tagName)
            return a(p, (h) => h && r(h), {
              root: d?.current,
              rootMargin: g
            });
        } else if (!v) {
          const p = (0, l.requestIdleCallback)(() => r(!0));
          return () => (0, l.cancelIdleCallback)(p);
        }
      }, [
        _,
        g,
        d,
        v,
        E.current
      ]);
      const A = (0, u.useCallback)(() => {
        r(!1);
      }, []);
      return [
        c,
        v,
        A
      ];
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(xe, xe.exports)), xe.exports;
}
var Le = { exports: {} }, Me = { exports: {} }, Mt = {}, Br;
function wo() {
  return Br || (Br = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return u;
      }
    });
    const e = /* @__PURE__ */ new WeakMap();
    function u(l, s) {
      if (!s) return {
        pathname: l
      };
      let t = e.get(s);
      t || (t = s.map((d) => d.toLowerCase()), e.set(s, t));
      let n;
      const i = l.split("/", 2);
      if (!i[1]) return {
        pathname: l
      };
      const a = i[1].toLowerCase(), f = t.indexOf(a);
      return f < 0 ? {
        pathname: l
      } : (n = s[f], l = l.slice(n.length + 1) || "/", {
        pathname: l,
        detectedLocale: n
      });
    }
  })(Mt)), Mt;
}
var zr;
function To() {
  return zr || (zr = 1, (function(o, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return u;
      }
    });
    const u = (l, s) => process.env.__NEXT_I18N_SUPPORT ? wo().normalizeLocalePath(l, s) : {
      pathname: l,
      detectedLocale: void 0
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(Me, Me.exports)), Me.exports;
}
var je = { exports: {} }, jt = {}, Vr;
function No() {
  return Vr || (Vr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(u, l, s) {
      if (u) {
        s && (s = s.toLowerCase());
        for (const t of u) {
          const n = t.domain?.split(":", 1)[0].toLowerCase();
          if (l === n || s === t.defaultLocale.toLowerCase() || t.locales?.some((i) => i.toLowerCase() === s))
            return t;
        }
      }
    }
  })(jt)), jt;
}
var Wr;
function xo() {
  return Wr || (Wr = 1, (function(o, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return u;
      }
    });
    const u = (...l) => {
      if (process.env.__NEXT_I18N_SUPPORT)
        return No().detectDomainLocale(...l);
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(je, je.exports)), je.exports;
}
var Kr;
function Io() {
  return Kr || (Kr = 1, (function(o, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "getDomainLocale", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const u = qe(), l = process.env.__NEXT_ROUTER_BASEPATH || "";
    function s(t, n, i, a) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const f = To().normalizeLocalePath, d = xo().detectDomainLocale, g = n || f(t, i).detectedLocale, b = d(a, void 0, g);
        if (b) {
          const _ = `http${b.http ? "" : "s"}://`, v = g === b.defaultLocale ? "" : `/${g}`;
          return `${_}${b.domain}${(0, u.normalizePathTrailingSlash)(`${l}${v}${t}`)}`;
        }
        return !1;
      } else
        return !1;
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(Le, Le.exports)), Le.exports;
}
var De = { exports: {} }, Yr;
function Lo() {
  return Yr || (Yr = 1, (function(o, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addBasePath", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    const u = En(), l = qe(), s = process.env.__NEXT_ROUTER_BASEPATH || "";
    function t(n, i) {
      return (0, l.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !i ? n : (0, u.addPathPrefix)(n, s));
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(De, De.exports)), De.exports;
}
var Dt = {}, Qr;
function Mo() {
  return Qr || (Qr = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.defineProperty(o, "errorOnce", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    let e = (u) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const u = /* @__PURE__ */ new Set();
      e = (l) => {
        u.has(l) || console.error(l), u.add(l);
      };
    }
  })(Dt)), Dt;
}
var Zr;
function jo() {
  return Zr || (Zr = 1, (function(o, e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function u(m, T) {
      for (var N in T) Object.defineProperty(m, N, {
        enumerable: !0,
        get: T[N]
      });
    }
    u(e, {
      default: function() {
        return j;
      },
      useLinkStatus: function() {
        return I;
      }
    });
    const l = /* @__PURE__ */ $e(), s = $t, t = /* @__PURE__ */ l._(ve), n = Co(), i = hn(), a = fn(), f = ke(), d = Oo(), g = an(), b = So(), _ = Io(), v = Lo(), r = cn(), E = Mo(), c = /* @__PURE__ */ new Set();
    function A(m, T, N, F) {
      if (!(typeof window > "u") && (0, i.isLocalURL)(T)) {
        if (!F.bypassPrefetchedCheck) {
          const L = (
            // Let the link's locale prop override the default router locale.
            typeof F.locale < "u" ? F.locale : "locale" in m ? m.locale : void 0
          ), k = T + "%" + N + "%" + L;
          if (c.has(k))
            return;
          c.add(k);
        }
        m.prefetch(T, N, F).catch((L) => {
          if (process.env.NODE_ENV !== "production")
            throw L;
        });
      }
    }
    function p(m) {
      const N = m.currentTarget.getAttribute("target");
      return N && N !== "_self" || m.metaKey || m.ctrlKey || m.shiftKey || m.altKey || // triggers resource download
      m.nativeEvent && m.nativeEvent.which === 2;
    }
    function R(m, T, N, F, L, k, X, ee, z) {
      const { nodeName: H } = m.currentTarget;
      if (H.toUpperCase() === "A" && p(m) || m.currentTarget.hasAttribute("download"))
        return;
      if (!(0, i.isLocalURL)(N)) {
        L && (m.preventDefault(), location.replace(N));
        return;
      }
      m.preventDefault(), (() => {
        if (z) {
          let Z = !1;
          if (z({
            preventDefault: () => {
              Z = !0;
            }
          }), Z)
            return;
        }
        const re = X ?? !0;
        "beforePopState" in T ? T[L ? "replace" : "push"](N, F, {
          shallow: k,
          locale: ee,
          scroll: re
        }) : T[L ? "replace" : "push"](F || N, {
          scroll: re
        });
      })();
    }
    function h(m) {
      return typeof m == "string" ? m : (0, a.formatUrl)(m);
    }
    const O = /* @__PURE__ */ t.default.forwardRef(function(T, N) {
      let F;
      const { href: L, as: k, children: X, prefetch: ee = null, passHref: z, replace: H, shallow: K, scroll: te, locale: re, onClick: Z, onNavigate: W, onMouseEnter: Y, onTouchStart: Q, legacyBehavior: P = !1, ...ae } = T;
      F = X, P && (typeof F == "string" || typeof F == "number") && (F = /* @__PURE__ */ (0, s.jsx)("a", {
        children: F
      }));
      const G = t.default.useContext(g.RouterContext), ce = ee !== !1;
      if (process.env.NODE_ENV !== "production") {
        let $ = function(w) {
          return Object.defineProperty(new Error(`Failed prop type: The prop \`${w.key}\` expects a ${w.expected} in \`<Link>\`, but got \`${w.actual}\` instead.` + (typeof window < "u" ? `
Open your browser's console to view the Component stack trace.` : "")), "__NEXT_ERROR_CODE", {
            value: "E319",
            enumerable: !1,
            configurable: !0
          });
        };
        Object.keys({
          href: !0
        }).forEach((w) => {
          if (w === "href" && (T[w] == null || typeof T[w] != "string" && typeof T[w] != "object"))
            throw $({
              key: w,
              expected: "`string` or `object`",
              actual: T[w] === null ? "null" : typeof T[w]
            });
        }), Object.keys({
          as: !0,
          replace: !0,
          scroll: !0,
          shallow: !0,
          passHref: !0,
          prefetch: !0,
          locale: !0,
          onClick: !0,
          onMouseEnter: !0,
          onTouchStart: !0,
          legacyBehavior: !0,
          onNavigate: !0
        }).forEach((w) => {
          const B = typeof T[w];
          if (w === "as") {
            if (T[w] && B !== "string" && B !== "object")
              throw $({
                key: w,
                expected: "`string` or `object`",
                actual: B
              });
          } else if (w === "locale") {
            if (T[w] && B !== "string")
              throw $({
                key: w,
                expected: "`string`",
                actual: B
              });
          } else if (w === "onClick" || w === "onMouseEnter" || w === "onTouchStart" || w === "onNavigate") {
            if (T[w] && B !== "function")
              throw $({
                key: w,
                expected: "`function`",
                actual: B
              });
          } else if (w === "replace" || w === "scroll" || w === "shallow" || w === "passHref" || w === "legacyBehavior") {
            if (T[w] != null && B !== "boolean")
              throw $({
                key: w,
                expected: "`boolean`",
                actual: B
              });
          } else if (w === "prefetch" && T[w] != null && B !== "boolean" && T[w] !== "auto")
            throw $({
              key: w,
              expected: '`boolean | "auto"`',
              actual: B
            });
        });
      }
      const { href: y, as: C } = t.default.useMemo(() => {
        if (!G) {
          const M = h(L);
          return {
            href: M,
            as: k ? h(k) : M
          };
        }
        const [$, ne] = (0, n.resolveHref)(G, L, !0);
        return {
          href: $,
          as: k ? (0, n.resolveHref)(G, k) : ne || $
        };
      }, [
        G,
        L,
        k
      ]), ge = t.default.useRef(y), D = t.default.useRef(C);
      let q;
      if (P)
        if (process.env.NODE_ENV === "development") {
          Z && console.warn(`"onClick" was passed to <Link> with \`href\` of \`${L}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`), Y && console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${L}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
          try {
            q = t.default.Children.only(F);
          } catch {
            throw F ? Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${L}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window < "u" ? ` 
Open your browser's console to view the Component stack trace.` : "")), "__NEXT_ERROR_CODE", {
              value: "E266",
              enumerable: !1,
              configurable: !0
            }) : Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${L}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
              value: "E320",
              enumerable: !1,
              configurable: !0
            });
          }
        } else
          q = t.default.Children.only(F);
      else if (process.env.NODE_ENV === "development" && F?.type === "a")
        throw Object.defineProperty(new Error(`Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
Learn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor`), "__NEXT_ERROR_CODE", {
          value: "E209",
          enumerable: !1,
          configurable: !0
        });
      const fe = P ? q && typeof q == "object" && q.ref : N, [de, se, ie] = (0, b.useIntersection)({
        rootMargin: "200px"
      }), pe = t.default.useCallback(($) => {
        (D.current !== C || ge.current !== y) && (ie(), D.current = C, ge.current = y), de($);
      }, [
        C,
        y,
        ie,
        de
      ]), le = (0, r.useMergedRef)(pe, fe);
      t.default.useEffect(() => {
        process.env.NODE_ENV === "production" && G && (!se || !ce || A(G, y, C, {
          locale: re
        }));
      }, [
        C,
        y,
        se,
        re,
        ce,
        G?.locale,
        G
      ]);
      const V = {
        ref: le,
        onClick($) {
          if (process.env.NODE_ENV !== "production" && !$)
            throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
              value: "E312",
              enumerable: !1,
              configurable: !0
            });
          !P && typeof Z == "function" && Z($), P && q.props && typeof q.props.onClick == "function" && q.props.onClick($), G && ($.defaultPrevented || R($, G, y, C, H, K, te, re, W));
        },
        onMouseEnter($) {
          !P && typeof Y == "function" && Y($), P && q.props && typeof q.props.onMouseEnter == "function" && q.props.onMouseEnter($), G && A(G, y, C, {
            locale: re,
            priority: !0,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: !0
          });
        },
        onTouchStart: process.env.__NEXT_LINK_NO_TOUCH_START ? void 0 : function(ne) {
          !P && typeof Q == "function" && Q(ne), P && q.props && typeof q.props.onTouchStart == "function" && q.props.onTouchStart(ne), G && A(G, y, C, {
            locale: re,
            priority: !0,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: !0
          });
        }
      };
      if ((0, f.isAbsoluteUrl)(C))
        V.href = C;
      else if (!P || z || q.type === "a" && !("href" in q.props)) {
        const $ = typeof re < "u" ? re : G?.locale, ne = G?.isLocaleDomain && (0, _.getDomainLocale)(C, $, G?.locales, G?.domainLocales);
        V.href = ne || (0, v.addBasePath)((0, d.addLocale)(C, $, G?.defaultLocale));
      }
      return P ? (process.env.NODE_ENV === "development" && (0, E.errorOnce)(`\`legacyBehavior\` is deprecated and will be removed in a future release. A codemod is available to upgrade your components:

npx @next/codemod@latest new-link .

Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components`), /* @__PURE__ */ t.default.cloneElement(q, V)) : /* @__PURE__ */ (0, s.jsx)("a", {
        ...ae,
        ...V,
        children: F
      });
    }), S = /* @__PURE__ */ (0, t.createContext)({
      // We do not support link status in the Pages Router, so we always return false
      pending: !1
    }), I = () => (0, t.useContext)(S), j = O;
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), o.exports = e.default);
  })(Ae, Ae.exports)), Ae.exports;
}
var Ht, Jr;
function Do() {
  return Jr || (Jr = 1, Ht = jo()), Ht;
}
var Ho = Do();
const Re = /* @__PURE__ */ nn(Ho), $o = () => {
  const [o, e] = Rn(!1);
  return /* @__PURE__ */ U("nav", { className: "bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4", children: /* @__PURE__ */ he("div", { className: "relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6", children: [
    /* @__PURE__ */ he("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ U(Re, { href: "/", children: /* @__PURE__ */ U(oo, {}) }),
      /* @__PURE__ */ U(
        me,
        {
          variant: "ghost",
          className: "flex size-9 items-center justify-center md:hidden",
          onClick: () => e((l) => !l),
          "aria-label": o ? "Close menu" : "Open menu",
          children: o ? /* @__PURE__ */ U(On, {}) : /* @__PURE__ */ U(An, {})
        }
      )
    ] }),
    /* @__PURE__ */ he("div", { className: "hidden w-full flex-row justify-end gap-5 md:flex", children: [
      /* @__PURE__ */ he("div", { className: "flex flex-col gap-1 md:flex-row", children: [
        /* @__PURE__ */ U(Re, { href: "#features", children: /* @__PURE__ */ U(me, { variant: "ghost", className: "w-full md:w-auto", children: "Features" }) }),
        /* @__PURE__ */ U(Re, { href: "#about", children: /* @__PURE__ */ U(me, { variant: "ghost", className: "w-full md:w-auto", children: "About" }) }),
        /* @__PURE__ */ U(Re, { href: "#contact", children: /* @__PURE__ */ U(me, { variant: "ghost", className: "w-full md:w-auto", children: "Contact" }) })
      ] }),
      /* @__PURE__ */ U(Re, { href: "#pricing", children: /* @__PURE__ */ U(me, { children: "Try for free" }) })
    ] }),
    /* @__PURE__ */ he("div", { className: "flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden", children: [
      /* @__PURE__ */ he("div", { className: "flex flex-col gap-1 md:flex-row", children: [
        /* @__PURE__ */ U(Re, { href: "#features", children: /* @__PURE__ */ U(me, { variant: "ghost", className: "w-full md:w-auto", children: "Features" }) }),
        /* @__PURE__ */ U(Re, { href: "#about", children: /* @__PURE__ */ U(me, { variant: "ghost", className: "w-full md:w-auto", children: "About" }) }),
        /* @__PURE__ */ U(Re, { href: "#contact", children: /* @__PURE__ */ U(me, { variant: "ghost", className: "w-full md:w-auto", children: "Contact" }) })
      ] }),
      /* @__PURE__ */ U(Re, { href: "#pricing", children: /* @__PURE__ */ U(me, { className: "w-full", children: "Try for free" }) })
    ] })
  ] }) });
}, ko = [
  // { id: "title", label: "Heading", type: "text", default: "Welcome" },
  { id: "subtitle", label: "Subheading", type: "text" },
  { id: "content", label: "Body", type: "richtext" },
  { id: "background_image", label: "Background image", type: "image_picker" },
  { id: "background_color", label: "Background color", type: "color" }
], Vo = {
  hero: ro,
  header: $o
}, Wo = {
  hero: no,
  header: ko
};
export {
  Wo as sectionSettingsSchemas,
  Vo as sectionsComponents
};
