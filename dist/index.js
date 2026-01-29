import Ft, { jsx as q, jsxs as de } from "react/jsx-runtime";
import * as me from "react";
import ye, { useState as Nn } from "react";
import { cva as xn } from "class-variance-authority";
import { clsx as In } from "clsx";
import { twMerge as Ln } from "tailwind-merge";
import Mn from "react-dom";
import { Check as Xe, ArrowRight as jn, X as Dn, Menu as Hn, Settings as kn, Users as $n, Clock as qn, BarChart3 as Un, Shield as Xn, Zap as ln } from "lucide-react";
function Wt(n, e) {
  if (typeof n == "function")
    return n(e);
  n != null && (n.current = e);
}
function Fn(...n) {
  return (e) => {
    let i = !1;
    const f = n.map((s) => {
      const r = Wt(s, e);
      return !i && typeof r == "function" && (i = !0), r;
    });
    if (i)
      return () => {
        for (let s = 0; s < f.length; s++) {
          const r = f[s];
          typeof r == "function" ? r() : Wt(n[s], null);
        }
      };
  };
}
var Gn = /* @__PURE__ */ Symbol.for("react.lazy"), He = me[" use ".trim().toString()];
function Bn(n) {
  return typeof n == "object" && n !== null && "then" in n;
}
function fn(n) {
  return n != null && typeof n == "object" && "$$typeof" in n && n.$$typeof === Gn && "_payload" in n && Bn(n._payload);
}
// @__NO_SIDE_EFFECTS__
function dn(n) {
  const e = /* @__PURE__ */ Vn(n), i = me.forwardRef((f, s) => {
    let { children: r, ...t } = f;
    fn(r) && typeof He == "function" && (r = He(r._payload));
    const a = me.Children.toArray(r), o = a.find(Kn);
    if (o) {
      const u = o.props.children, _ = a.map((m) => m === o ? me.Children.count(u) > 1 ? me.Children.only(null) : me.isValidElement(u) ? u.props.children : null : m);
      return /* @__PURE__ */ q(e, { ...t, ref: s, children: me.isValidElement(u) ? me.cloneElement(u, void 0, _) : null });
    }
    return /* @__PURE__ */ q(e, { ...t, ref: s, children: r });
  });
  return i.displayName = `${n}.Slot`, i;
}
var zn = /* @__PURE__ */ dn("Slot");
// @__NO_SIDE_EFFECTS__
function Vn(n) {
  const e = me.forwardRef((i, f) => {
    let { children: s, ...r } = i;
    if (fn(s) && typeof He == "function" && (s = He(s._payload)), me.isValidElement(s)) {
      const t = Qn(s), a = Yn(r, s.props);
      return s.type !== me.Fragment && (a.ref = f ? Fn(f, t) : t), me.cloneElement(s, a);
    }
    return me.Children.count(s) > 1 ? me.Children.only(null) : null;
  });
  return e.displayName = `${n}.SlotClone`, e;
}
var Wn = /* @__PURE__ */ Symbol("radix.slottable");
function Kn(n) {
  return me.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === Wn;
}
function Yn(n, e) {
  const i = { ...e };
  for (const f in e) {
    const s = n[f], r = e[f];
    /^on[A-Z]/.test(f) ? s && r ? i[f] = (...a) => {
      const o = r(...a);
      return s(...a), o;
    } : s && (i[f] = s) : f === "style" ? i[f] = { ...s, ...r } : f === "className" && (i[f] = [s, r].filter(Boolean).join(" "));
  }
  return { ...n, ...i };
}
function Qn(n) {
  let e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, i = e && "isReactWarning" in e && e.isReactWarning;
  return i ? n.ref : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get, i = e && "isReactWarning" in e && e.isReactWarning, i ? n.props.ref : n.props.ref || n.ref);
}
function Zn(...n) {
  return Ln(In(n));
}
const Jn = xn(
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
function Ee({
  className: n,
  variant: e,
  size: i,
  asChild: f = !1,
  ...s
}) {
  return /* @__PURE__ */ q(
    f ? zn : "button",
    {
      "data-slot": "button",
      className: Zn(Jn({ variant: e, size: i, className: n })),
      ...s
    }
  );
}
var eo = [
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
], to = eo.reduce((n, e) => {
  const i = /* @__PURE__ */ dn(`Primitive.${e}`), f = me.forwardRef((s, r) => {
    const { asChild: t, ...a } = s, o = t ? i : e;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ q(o, { ...a, ref: r });
  });
  return f.displayName = `Primitive.${e}`, { ...n, [e]: f };
}, {}), ro = "AspectRatio", pn = me.forwardRef(
  (n, e) => {
    const { ratio: i = 1 / 1, style: f, ...s } = n;
    return /* @__PURE__ */ q(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / i}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ q(
          to.div,
          {
            ...s,
            ref: e,
            style: {
              ...f,
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
pn.displayName = ro;
var no = pn;
const oo = no;
function hn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Fe = {}, Ge = {}, Kt;
function be() {
  if (Kt) return Ge;
  Kt = 1;
  function n(e) {
    return e && e.__esModule ? e : { default: e };
  }
  return Ge._ = n, Ge;
}
var Be = {}, ze = {}, Yt;
function Gt() {
  return Yt || (Yt = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "warnOnce", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    let e = (i) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const i = /* @__PURE__ */ new Set();
      e = (f) => {
        i.has(f) || console.warn(f), i.add(f);
      };
    }
  })(ze)), ze;
}
var Ve = {}, Qt;
function _n() {
  return Qt || (Qt = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(s, r) {
      for (var t in r) Object.defineProperty(s, t, {
        enumerable: !0,
        get: r[t]
      });
    }
    e(n, {
      getDeploymentId: function() {
        return i;
      },
      getDeploymentIdQueryOrEmptyString: function() {
        return f;
      }
    });
    function i() {
      return process.env.NEXT_DEPLOYMENT_ID;
    }
    function f() {
      let s = i();
      return s ? `?dpl=${s}` : "";
    }
  })(Ve)), Ve;
}
var We = {}, Zt;
function ao() {
  return Zt || (Zt = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "getImageBlurSvg", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e({ widthInt: i, heightInt: f, blurWidth: s, blurHeight: r, blurDataURL: t, objectFit: a }) {
      const u = s ? s * 40 : i, _ = r ? r * 40 : f, m = u && _ ? `viewBox='0 0 ${u} ${_}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${m}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${m ? "none" : a === "contain" ? "xMidYMid" : a === "cover" ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${t}'/%3E%3C/svg%3E`;
    }
  })(We)), We;
}
var Ke = {}, Jt;
function Bt() {
  return Jt || (Jt = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(s, r) {
      for (var t in r) Object.defineProperty(s, t, {
        enumerable: !0,
        get: r[t]
      });
    }
    e(n, {
      VALID_LOADERS: function() {
        return i;
      },
      imageConfigDefault: function() {
        return f;
      }
    });
    const i = [
      "default",
      "imgix",
      "cloudinary",
      "akamai",
      "custom"
    ], f = {
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
      maximumResponseBody: 5e7,
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
  })(Ke)), Ke;
}
var er;
function gn() {
  return er || (er = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "getImgProps", {
      enumerable: !0,
      get: function() {
        return p;
      }
    });
    const e = Gt(), i = _n(), f = ao(), s = Bt(), r = [
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
    function a(c) {
      return c.default !== void 0;
    }
    function o(c) {
      return c.src !== void 0;
    }
    function u(c) {
      return !!c && typeof c == "object" && (a(c) || o(c));
    }
    const _ = /* @__PURE__ */ new Map();
    let m;
    function E(c) {
      return typeof c > "u" ? c : typeof c == "number" ? Number.isFinite(c) ? c : NaN : typeof c == "string" && /^[0-9]+$/.test(c) ? parseInt(c, 10) : NaN;
    }
    function d({ deviceSizes: c, allSizes: l }, y, h) {
      if (h) {
        const g = /(^|\s)(1?\d?\d)vw/g, A = [];
        for (let S; S = g.exec(h); S)
          A.push(parseInt(S[2]));
        if (A.length) {
          const S = Math.min(...A) * 0.01;
          return {
            widths: l.filter((T) => T >= c[0] * S),
            kind: "w"
          };
        }
        return {
          widths: l,
          kind: "w"
        };
      }
      return typeof y != "number" ? {
        widths: c,
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
              y,
              y * 2
              /*, width * 3*/
            ].map((g) => l.find((A) => A >= g) || l[l.length - 1])
          )
        ],
        kind: "x"
      };
    }
    function R({ config: c, src: l, unoptimized: y, width: h, quality: C, sizes: g, loader: A }) {
      if (y) {
        const v = (0, i.getDeploymentId)();
        if (l.startsWith("/") && !l.startsWith("//") && v) {
          const w = l.includes("?") ? "&" : "?";
          l = `${l}${w}dpl=${v}`;
        }
        return {
          src: l,
          srcSet: void 0,
          sizes: void 0
        };
      }
      const { widths: S, kind: T } = d(c, h, g), j = S.length - 1;
      return {
        sizes: !g && T === "w" ? "100vw" : g,
        srcSet: S.map((v, w) => `${A({
          config: c,
          src: l,
          quality: C,
          width: v
        })} ${T === "w" ? v : w + 1}${T}`).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: A({
          config: c,
          src: l,
          quality: C,
          width: S[j]
        })
      };
    }
    function p({ src: c, sizes: l, unoptimized: y = !1, priority: h = !1, preload: C = !1, loading: g, className: A, quality: S, width: T, height: j, fill: v = !1, style: w, overrideSrc: x, onLoad: G, onLoadingComplete: k, placeholder: D = "empty", blurDataURL: X, fetchPriority: J, decoding: z = "async", layout: $, objectFit: W, objectPosition: Z, lazyBoundary: ee, lazyRoot: te, ...B }, Y) {
      const { imgConf: Q, showAltText: O, blurComplete: ae, defaultLoader: V } = Y;
      let ue, b = Q || s.imageConfigDefault;
      if ("allSizes" in b)
        ue = b;
      else {
        const H = [
          ...b.deviceSizes,
          ...b.imageSizes
        ].sort((pe, Re) => pe - Re), ne = b.deviceSizes.sort((pe, Re) => pe - Re), se = b.qualities?.sort((pe, Re) => pe - Re);
        ue = {
          ...b,
          allSizes: H,
          deviceSizes: ne,
          qualities: se
        };
      }
      if (typeof V > "u")
        throw Object.defineProperty(new Error(`images.loaderFile detected but the file is missing default export.
Read more: https://nextjs.org/docs/messages/invalid-images-config`), "__NEXT_ERROR_CODE", {
          value: "E163",
          enumerable: !1,
          configurable: !0
        });
      let P = B.loader || V;
      delete B.loader, delete B.srcSet;
      const ge = "__next_img_default" in P;
      if (ge) {
        if (ue.loader === "custom")
          throw Object.defineProperty(new Error(`Image with src "${c}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
            value: "E252",
            enumerable: !1,
            configurable: !0
          });
      } else {
        const H = P;
        P = (ne) => {
          const { config: se, ...pe } = ne;
          return H(pe);
        };
      }
      if ($) {
        $ === "fill" && (v = !0);
        const H = {
          intrinsic: {
            maxWidth: "100%",
            height: "auto"
          },
          responsive: {
            width: "100%",
            height: "auto"
          }
        }, ne = {
          responsive: "100vw",
          fill: "100vw"
        }, se = H[$];
        se && (w = {
          ...w,
          ...se
        });
        const pe = ne[$];
        pe && !l && (l = pe);
      }
      let F = "", U = E(T), ie = E(j), he, fe;
      if (u(c)) {
        const H = a(c) ? c.default : c;
        if (!H.src)
          throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(H)}`), "__NEXT_ERROR_CODE", {
            value: "E460",
            enumerable: !1,
            configurable: !0
          });
        if (!H.height || !H.width)
          throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(H)}`), "__NEXT_ERROR_CODE", {
            value: "E48",
            enumerable: !1,
            configurable: !0
          });
        if (he = H.blurWidth, fe = H.blurHeight, X = X || H.blurDataURL, F = H.src, !v) {
          if (!U && !ie)
            U = H.width, ie = H.height;
          else if (U && !ie) {
            const ne = U / H.width;
            ie = Math.round(H.height * ne);
          } else if (!U && ie) {
            const ne = ie / H.height;
            U = Math.round(H.width * ne);
          }
        }
      }
      c = typeof c == "string" ? c : F;
      let ce = !h && !C && (g === "lazy" || typeof g > "u");
      (!c || c.startsWith("data:") || c.startsWith("blob:")) && (y = !0, ce = !1), ue.unoptimized && (y = !0), ge && !ue.dangerouslyAllowSVG && c.split("?", 1)[0].endsWith(".svg") && (y = !0);
      const _e = E(S);
      if (process.env.NODE_ENV !== "production") {
        if (ue.output === "export" && ge && !y)
          throw Object.defineProperty(new Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api"), "__NEXT_ERROR_CODE", {
            value: "E500",
            enumerable: !1,
            configurable: !0
          });
        if (!c)
          y = !0;
        else if (v) {
          if (T)
            throw Object.defineProperty(new Error(`Image with src "${c}" has both "width" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
              value: "E96",
              enumerable: !1,
              configurable: !0
            });
          if (j)
            throw Object.defineProperty(new Error(`Image with src "${c}" has both "height" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
              value: "E115",
              enumerable: !1,
              configurable: !0
            });
          if (w?.position && w.position !== "absolute")
            throw Object.defineProperty(new Error(`Image with src "${c}" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.`), "__NEXT_ERROR_CODE", {
              value: "E216",
              enumerable: !1,
              configurable: !0
            });
          if (w?.width && w.width !== "100%")
            throw Object.defineProperty(new Error(`Image with src "${c}" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
              value: "E73",
              enumerable: !1,
              configurable: !0
            });
          if (w?.height && w.height !== "100%")
            throw Object.defineProperty(new Error(`Image with src "${c}" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
              value: "E404",
              enumerable: !1,
              configurable: !0
            });
        } else {
          if (typeof U > "u")
            throw Object.defineProperty(new Error(`Image with src "${c}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
              value: "E451",
              enumerable: !1,
              configurable: !0
            });
          if (isNaN(U))
            throw Object.defineProperty(new Error(`Image with src "${c}" has invalid "width" property. Expected a numeric value in pixels but received "${T}".`), "__NEXT_ERROR_CODE", {
              value: "E66",
              enumerable: !1,
              configurable: !0
            });
          if (typeof ie > "u")
            throw Object.defineProperty(new Error(`Image with src "${c}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
              value: "E397",
              enumerable: !1,
              configurable: !0
            });
          if (isNaN(ie))
            throw Object.defineProperty(new Error(`Image with src "${c}" has invalid "height" property. Expected a numeric value in pixels but received "${j}".`), "__NEXT_ERROR_CODE", {
              value: "E444",
              enumerable: !1,
              configurable: !0
            });
          if (/^[\x00-\x20]/.test(c))
            throw Object.defineProperty(new Error(`Image with src "${c}" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
              value: "E176",
              enumerable: !1,
              configurable: !0
            });
          if (/[\x00-\x20]$/.test(c))
            throw Object.defineProperty(new Error(`Image with src "${c}" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
              value: "E21",
              enumerable: !1,
              configurable: !0
            });
        }
        if (!r.includes(g))
          throw Object.defineProperty(new Error(`Image with src "${c}" has invalid "loading" property. Provided "${g}" should be one of ${r.map(String).join(",")}.`), "__NEXT_ERROR_CODE", {
            value: "E357",
            enumerable: !1,
            configurable: !0
          });
        if (h && g === "lazy")
          throw Object.defineProperty(new Error(`Image with src "${c}" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
            value: "E218",
            enumerable: !1,
            configurable: !0
          });
        if (C && g === "lazy")
          throw Object.defineProperty(new Error(`Image with src "${c}" has both "preload" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
            value: "E803",
            enumerable: !1,
            configurable: !0
          });
        if (C && h)
          throw Object.defineProperty(new Error(`Image with src "${c}" has both "preload" and "priority" properties. Only "preload" should be used.`), "__NEXT_ERROR_CODE", {
            value: "E802",
            enumerable: !1,
            configurable: !0
          });
        if (D !== "empty" && D !== "blur" && !D.startsWith("data:image/"))
          throw Object.defineProperty(new Error(`Image with src "${c}" has invalid "placeholder" property "${D}".`), "__NEXT_ERROR_CODE", {
            value: "E431",
            enumerable: !1,
            configurable: !0
          });
        if (D !== "empty" && U && ie && U * ie < 1600 && (0, e.warnOnce)(`Image with src "${c}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`), _e && ue.qualities && !ue.qualities.includes(_e) && (0, e.warnOnce)(`Image with src "${c}" is using quality "${_e}" which is not configured in images.qualities [${ue.qualities.join(", ")}]. Please update your config to [${[
          ...ue.qualities,
          _e
        ].sort().join(", ")}].
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`), D === "blur" && !X) {
          const H = [
            "jpeg",
            "png",
            "webp",
            "avif"
          ];
          throw Object.defineProperty(new Error(`Image with src "${c}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ${H.join(",")} (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
            value: "E371",
            enumerable: !1,
            configurable: !0
          });
        }
        if ("ref" in B && (0, e.warnOnce)(`Image with src "${c}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`), !y && !ge) {
          const H = P({
            config: ue,
            src: c,
            width: U || 400,
            quality: _e || 75
          });
          let ne;
          try {
            ne = new URL(H);
          } catch {
          }
          (H === c || ne && ne.pathname === c && !ne.search) && (0, e.warnOnce)(`Image with src "${c}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
        }
        k && (0, e.warnOnce)(`Image with src "${c}" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.`);
        for (const [H, ne] of Object.entries({
          layout: $,
          objectFit: W,
          objectPosition: Z,
          lazyBoundary: ee,
          lazyRoot: te
        }))
          ne && (0, e.warnOnce)(`Image with src "${c}" has legacy prop "${H}". Did you forget to run the codemod?
Read more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
        if (typeof window < "u" && !m && window.PerformanceObserver) {
          m = new PerformanceObserver((H) => {
            for (const ne of H.getEntries()) {
              const se = ne?.element?.src || "", pe = _.get(se);
              pe && pe.loading === "lazy" && pe.placeholder === "empty" && !pe.src.startsWith("data:") && !pe.src.startsWith("blob:") && (0, e.warnOnce)(`Image with src "${pe.src}" was detected as the Largest Contentful Paint (LCP). Please add the \`loading="eager"\` property if this image is above the fold.
Read more: https://nextjs.org/docs/app/api-reference/components/image#loading`);
            }
          });
          try {
            m.observe({
              type: "largest-contentful-paint",
              buffered: !0
            });
          } catch (H) {
            console.error(H);
          }
        }
      }
      const le = Object.assign(v ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: W,
        objectPosition: Z
      } : {}, O ? {} : {
        color: "transparent"
      }, w), L = !ae && D !== "empty" ? D === "blur" ? `url("data:image/svg+xml;charset=utf-8,${(0, f.getImageBlurSvg)({
        widthInt: U,
        heightInt: ie,
        blurWidth: he,
        blurHeight: fe,
        blurDataURL: X || "",
        objectFit: le.objectFit
      })}")` : `url("${D}")` : null, K = t.includes(le.objectFit) ? le.objectFit === "fill" ? "100% 100%" : "cover" : le.objectFit;
      let oe = L ? {
        backgroundSize: K,
        backgroundPosition: le.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: L
      } : {};
      process.env.NODE_ENV === "development" && oe.backgroundImage && D === "blur" && X?.startsWith("/") && (oe.backgroundImage = `url("${X}")`);
      const I = R({
        config: ue,
        src: c,
        unoptimized: y,
        width: U,
        quality: _e,
        sizes: l,
        loader: P
      }), re = ce ? "lazy" : g;
      if (process.env.NODE_ENV !== "production" && typeof window < "u") {
        let H;
        try {
          H = new URL(I.src);
        } catch {
          H = new URL(I.src, window.location.href);
        }
        _.set(H.href, {
          src: c,
          loading: re,
          placeholder: D
        });
      }
      return {
        props: {
          ...B,
          loading: re,
          fetchPriority: J,
          width: U,
          height: ie,
          decoding: z,
          className: A,
          style: {
            ...le,
            ...oe
          },
          sizes: I.sizes,
          srcSet: I.srcSet,
          src: x || I.src
        },
        meta: {
          unoptimized: y,
          preload: C || h,
          placeholder: D,
          fill: v
        }
      };
    }
  })(Be)), Be;
}
var Ce = { exports: {} }, Ye = {}, tr;
function ke() {
  if (tr) return Ye;
  tr = 1;
  function n(i) {
    if (typeof WeakMap != "function") return null;
    var f = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
    return (n = function(r) {
      return r ? s : f;
    })(i);
  }
  function e(i, f) {
    if (!f && i && i.__esModule) return i;
    if (i === null || typeof i != "object" && typeof i != "function") return { default: i };
    var s = n(f);
    if (s && s.has(i)) return s.get(i);
    var r = { __proto__: null }, t = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in i)
      if (a !== "default" && Object.prototype.hasOwnProperty.call(i, a)) {
        var o = t ? Object.getOwnPropertyDescriptor(i, a) : null;
        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = i[a];
      }
    return r.default = i, s && s.set(i, r), r;
  }
  return Ye._ = e, Ye;
}
var Pe = { exports: {} }, Qe = {}, rr;
function io() {
  return rr || (rr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "default", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const e = ye, i = typeof window > "u", f = i ? () => {
    } : e.useLayoutEffect, s = i ? () => {
    } : e.useEffect;
    function r(t) {
      const { headManager: a, reduceComponentsToState: o } = t;
      function u() {
        if (a && a.mountedInstances) {
          const _ = e.Children.toArray(Array.from(a.mountedInstances).filter(Boolean));
          a.updateHead(o(_));
        }
      }
      return i && (a?.mountedInstances?.add(t.children), u()), f(() => (a?.mountedInstances?.add(t.children), () => {
        a?.mountedInstances?.delete(t.children);
      })), f(() => (a && (a._pendingUpdate = u), () => {
        a && (a._pendingUpdate = u);
      })), s(() => (a && a._pendingUpdate && (a._pendingUpdate(), a._pendingUpdate = null), () => {
        a && a._pendingUpdate && (a._pendingUpdate(), a._pendingUpdate = null);
      })), null;
    }
  })(Qe)), Qe;
}
var Ze = {}, nr;
function so() {
  return nr || (nr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "HeadManagerContext", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const f = (/* @__PURE__ */ (/* @__PURE__ */ be())._(ye)).default.createContext({});
    process.env.NODE_ENV !== "production" && (f.displayName = "HeadManagerContext");
  })(Ze)), Ze;
}
var or;
function uo() {
  return or || (or = 1, (function(n, e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function i(l, y) {
      for (var h in y) Object.defineProperty(l, h, {
        enumerable: !0,
        get: y[h]
      });
    }
    i(e, {
      default: function() {
        return c;
      },
      defaultHead: function() {
        return _;
      }
    });
    const f = /* @__PURE__ */ be(), s = /* @__PURE__ */ ke(), r = Ft, t = /* @__PURE__ */ s._(ye), a = /* @__PURE__ */ f._(io()), o = so(), u = Gt();
    function _() {
      return [
        /* @__PURE__ */ (0, r.jsx)("meta", {
          charSet: "utf-8"
        }, "charset"),
        /* @__PURE__ */ (0, r.jsx)("meta", {
          name: "viewport",
          content: "width=device-width"
        }, "viewport")
      ];
    }
    function m(l, y) {
      return typeof y == "string" || typeof y == "number" ? l : y.type === t.default.Fragment ? l.concat(
        // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
        t.default.Children.toArray(y.props.children).reduce(
          // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
          (h, C) => typeof C == "string" || typeof C == "number" ? h : h.concat(C),
          []
        )
      ) : l.concat(y);
    }
    const E = [
      "name",
      "httpEquiv",
      "charSet",
      "itemProp"
    ];
    function d() {
      const l = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), C = {};
      return (g) => {
        let A = !0, S = !1;
        if (g.key && typeof g.key != "number" && g.key.indexOf("$") > 0) {
          S = !0;
          const T = g.key.slice(g.key.indexOf("$") + 1);
          l.has(T) ? A = !1 : l.add(T);
        }
        switch (g.type) {
          case "title":
          case "base":
            y.has(g.type) ? A = !1 : y.add(g.type);
            break;
          case "meta":
            for (let T = 0, j = E.length; T < j; T++) {
              const v = E[T];
              if (g.props.hasOwnProperty(v))
                if (v === "charSet")
                  h.has(v) ? A = !1 : h.add(v);
                else {
                  const w = g.props[v], x = C[v] || /* @__PURE__ */ new Set();
                  (v !== "name" || !S) && x.has(w) ? A = !1 : (x.add(w), C[v] = x);
                }
            }
            break;
        }
        return A;
      };
    }
    function R(l) {
      return l.reduce(m, []).reverse().concat(_().reverse()).filter(d()).reverse().map((y, h) => {
        const C = y.key || h;
        if (process.env.NODE_ENV === "development")
          if (y.type === "script" && y.props.type !== "application/ld+json") {
            const g = y.props.src ? `<script> tag with src="${y.props.src}"` : "inline <script>";
            (0, u.warnOnce)(`Do not add <script> tags using next/head (see ${g}). Use next/script instead. 
See more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
          } else y.type === "link" && y.props.rel === "stylesheet" && (0, u.warnOnce)(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${y.props.href}"). Use Document instead. 
See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
        return /* @__PURE__ */ t.default.cloneElement(y, {
          key: C
        });
      });
    }
    function p({ children: l }) {
      const y = (0, t.useContext)(o.HeadManagerContext);
      return /* @__PURE__ */ (0, r.jsx)(a.default, {
        reduceComponentsToState: R,
        headManager: y,
        children: l
      });
    }
    const c = p;
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(Pe, Pe.exports)), Pe.exports;
}
var Je = {}, ar;
function co() {
  return ar || (ar = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "ImageConfigContext", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const i = /* @__PURE__ */ (/* @__PURE__ */ be())._(ye), f = Bt(), s = i.default.createContext(f.imageConfigDefault);
    process.env.NODE_ENV !== "production" && (s.displayName = "ImageConfigContext");
  })(Je)), Je;
}
var et = {}, ir;
function mn() {
  return ir || (ir = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "RouterContext", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const f = (/* @__PURE__ */ (/* @__PURE__ */ be())._(ye)).default.createContext(null);
    process.env.NODE_ENV !== "production" && (f.displayName = "RouterContext");
  })(et)), et;
}
var tt = {}, rt = {}, sr;
function lo() {
  return sr || (sr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "findClosestQuality", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i, f) {
      const s = i || 75;
      return f?.qualities?.length ? f.qualities.reduce((r, t) => Math.abs(t - s) < Math.abs(r - s) ? t : r, 0) : s;
    }
  })(rt)), rt;
}
var nt = {}, ot = { exports: {} }, ur;
function En() {
  return ur || (ur = 1, (() => {
    var n = { 170: (s, r, t) => {
      const a = t(510), o = () => {
        if (typeof navigator < "u" && navigator.platform) {
          const _ = navigator.platform.toLowerCase();
          return _ === "win32" || _ === "windows";
        }
        return typeof process < "u" && process.platform ? process.platform === "win32" : !1;
      };
      function u(_, m, E = !1) {
        return m && (m.windows === null || m.windows === void 0) && (m = { ...m, windows: o() }), a(_, m, E);
      }
      Object.assign(u, a), s.exports = u;
    }, 154: (s) => {
      const t = "[^\\\\/]", m = "(?=.)", E = "[^/]", d = "(?:\\/|$)", R = "(?:^|\\/)", p = `\\.{1,2}${d}`, c = "(?!\\.)", l = `(?!${R}${p})`, y = `(?!\\.{0,1}${d})`, h = `(?!${p})`, C = "[^.\\/]", g = `${E}*?`, S = { DOT_LITERAL: "\\.", PLUS_LITERAL: "\\+", QMARK_LITERAL: "\\?", SLASH_LITERAL: "\\/", ONE_CHAR: m, QMARK: E, END_ANCHOR: d, DOTS_SLASH: p, NO_DOT: c, NO_DOTS: l, NO_DOT_SLASH: y, NO_DOTS_SLASH: h, QMARK_NO_DOT: C, STAR: g, START_ANCHOR: R, SEP: "/" }, T = { ...S, SLASH_LITERAL: "[\\\\/]", QMARK: t, STAR: `${t}*?`, DOTS_SLASH: "\\.{1,2}(?:[\\\\/]|$)", NO_DOT: "(?!\\.)", NO_DOTS: "(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))", NO_DOT_SLASH: "(?!\\.{0,1}(?:[\\\\/]|$))", NO_DOTS_SLASH: "(?!\\.{1,2}(?:[\\\\/]|$))", QMARK_NO_DOT: "[^.\\\\/]", START_ANCHOR: "(?:^|[\\\\/])", END_ANCHOR: "(?:[\\\\/]|$)", SEP: "\\" }, j = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
      s.exports = { MAX_LENGTH: 65536, POSIX_REGEX_SOURCE: j, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, extglobChars(v) {
        return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${v.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
      }, globChars(v) {
        return v === !0 ? T : S;
      } };
    }, 697: (s, r, t) => {
      const a = t(154), o = t(96), { MAX_LENGTH: u, POSIX_REGEX_SOURCE: _, REGEX_NON_SPECIAL_CHARS: m, REGEX_SPECIAL_CHARS_BACKREF: E, REPLACEMENTS: d } = a, R = (l, y) => {
        if (typeof y.expandRange == "function")
          return y.expandRange(...l, y);
        l.sort();
        const h = `[${l.join("-")}]`;
        try {
          new RegExp(h);
        } catch {
          return l.map(((g) => o.escapeRegex(g))).join("..");
        }
        return h;
      }, p = (l, y) => `Missing ${l}: "${y}" - use "\\\\${y}" to match literal characters`, c = (l, y) => {
        if (typeof l != "string")
          throw new TypeError("Expected a string");
        l = d[l] || l;
        const h = { ...y }, C = typeof h.maxLength == "number" ? Math.min(u, h.maxLength) : u;
        let g = l.length;
        if (g > C)
          throw new SyntaxError(`Input length: ${g}, exceeds maximum allowed length: ${C}`);
        const A = { type: "bos", value: "", output: h.prepend || "" }, S = [A], T = h.capture ? "" : "?:", j = a.globChars(h.windows), v = a.extglobChars(j), { DOT_LITERAL: w, PLUS_LITERAL: x, SLASH_LITERAL: G, ONE_CHAR: k, DOTS_SLASH: D, NO_DOT: X, NO_DOT_SLASH: J, NO_DOTS_SLASH: z, QMARK: $, QMARK_NO_DOT: W, STAR: Z, START_ANCHOR: ee } = j, te = (I) => `(${T}(?:(?!${ee}${I.dot ? D : w}).)*?)`, B = h.dot ? "" : X, Y = h.dot ? $ : W;
        let Q = h.bash === !0 ? te(h) : Z;
        h.capture && (Q = `(${Q})`), typeof h.noext == "boolean" && (h.noextglob = h.noext);
        const O = { input: l, index: -1, start: 0, dot: h.dot === !0, consumed: "", output: "", prefix: "", backtrack: !1, negated: !1, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: !1, tokens: S };
        l = o.removePrefix(l, O), g = l.length;
        const ae = [], V = [], ue = [];
        let b = A, P;
        const ge = () => O.index === g - 1, F = O.peek = (I = 1) => l[O.index + I], U = O.advance = () => l[++O.index] || "", ie = () => l.slice(O.index + 1), he = (I = "", re = 0) => {
          O.consumed += I, O.index += re;
        }, fe = (I) => {
          O.output += I.output != null ? I.output : I.value, he(I.value);
        }, ce = () => {
          let I = 1;
          for (; F() === "!" && (F(2) !== "(" || F(3) === "?"); )
            U(), O.start++, I++;
          return I % 2 === 0 ? !1 : (O.negated = !0, O.start++, !0);
        }, _e = (I) => {
          O[I]++, ue.push(I);
        }, le = (I) => {
          O[I]--, ue.pop();
        }, L = (I) => {
          if (b.type === "globstar") {
            const re = O.braces > 0 && (I.type === "comma" || I.type === "brace"), N = I.extglob === !0 || ae.length && (I.type === "pipe" || I.type === "paren");
            I.type !== "slash" && I.type !== "paren" && !re && !N && (O.output = O.output.slice(0, -b.output.length), b.type = "star", b.value = "*", b.output = Q, O.output += b.output);
          }
          if (ae.length && I.type !== "paren" && (ae[ae.length - 1].inner += I.value), (I.value || I.output) && fe(I), b && b.type === "text" && I.type === "text") {
            b.output = (b.output || b.value) + I.value, b.value += I.value;
            return;
          }
          I.prev = b, S.push(I), b = I;
        }, K = (I, re) => {
          const N = { ...v[re], conditions: 1, inner: "" };
          N.prev = b, N.parens = O.parens, N.output = O.output;
          const M = (h.capture ? "(" : "") + N.open;
          _e("parens"), L({ type: I, value: re, output: O.output ? "" : k }), L({ type: "paren", extglob: !0, value: U(), output: M }), ae.push(N);
        }, oe = (I) => {
          let re = I.close + (h.capture ? ")" : ""), N;
          if (I.type === "negate") {
            let M = Q;
            if (I.inner && I.inner.length > 1 && I.inner.includes("/") && (M = te(h)), (M !== Q || ge() || /^\)+$/.test(ie())) && (re = I.close = `)$))${M}`), I.inner.includes("*") && (N = ie()) && /^\.[^\\/.]+$/.test(N)) {
              const H = c(N, { ...y, fastpaths: !1 }).output;
              re = I.close = `)${H})${M})`;
            }
            I.prev.type === "bos" && (O.negatedExtglob = !0);
          }
          L({ type: "paren", extglob: !0, value: P, output: re }), le("parens");
        };
        if (h.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(l)) {
          let I = !1, re = l.replace(E, ((N, M, H, ne, se, pe) => ne === "\\" ? (I = !0, N) : ne === "?" ? M ? M + ne + (se ? $.repeat(se.length) : "") : pe === 0 ? Y + (se ? $.repeat(se.length) : "") : $.repeat(H.length) : ne === "." ? w.repeat(H.length) : ne === "*" ? M ? M + ne + (se ? Q : "") : Q : M ? N : `\\${N}`));
          return I === !0 && (h.unescape === !0 ? re = re.replace(/\\/g, "") : re = re.replace(/\\+/g, ((N) => N.length % 2 === 0 ? "\\\\" : N ? "\\" : ""))), re === l && h.contains === !0 ? (O.output = l, O) : (O.output = o.wrapOutput(re, O, y), O);
        }
        for (; !ge(); ) {
          if (P = U(), P === "\0")
            continue;
          if (P === "\\") {
            const N = F();
            if (N === "/" && h.bash !== !0 || N === "." || N === ";")
              continue;
            if (!N) {
              P += "\\", L({ type: "text", value: P });
              continue;
            }
            const M = /^\\+/.exec(ie());
            let H = 0;
            if (M && M[0].length > 2 && (H = M[0].length, O.index += H, H % 2 !== 0 && (P += "\\")), h.unescape === !0 ? P = U() : P += U(), O.brackets === 0) {
              L({ type: "text", value: P });
              continue;
            }
          }
          if (O.brackets > 0 && (P !== "]" || b.value === "[" || b.value === "[^")) {
            if (h.posix !== !1 && P === ":") {
              const N = b.value.slice(1);
              if (N.includes("[") && (b.posix = !0, N.includes(":"))) {
                const M = b.value.lastIndexOf("["), H = b.value.slice(0, M), ne = b.value.slice(M + 2), se = _[ne];
                if (se) {
                  b.value = H + se, O.backtrack = !0, U(), !A.output && S.indexOf(b) === 1 && (A.output = k);
                  continue;
                }
              }
            }
            (P === "[" && F() !== ":" || P === "-" && F() === "]") && (P = `\\${P}`), P === "]" && (b.value === "[" || b.value === "[^") && (P = `\\${P}`), h.posix === !0 && P === "!" && b.value === "[" && (P = "^"), b.value += P, fe({ value: P });
            continue;
          }
          if (O.quotes === 1 && P !== '"') {
            P = o.escapeRegex(P), b.value += P, fe({ value: P });
            continue;
          }
          if (P === '"') {
            O.quotes = O.quotes === 1 ? 0 : 1, h.keepQuotes === !0 && L({ type: "text", value: P });
            continue;
          }
          if (P === "(") {
            _e("parens"), L({ type: "paren", value: P });
            continue;
          }
          if (P === ")") {
            if (O.parens === 0 && h.strictBrackets === !0)
              throw new SyntaxError(p("opening", "("));
            const N = ae[ae.length - 1];
            if (N && O.parens === N.parens + 1) {
              oe(ae.pop());
              continue;
            }
            L({ type: "paren", value: P, output: O.parens ? ")" : "\\)" }), le("parens");
            continue;
          }
          if (P === "[") {
            if (h.nobracket === !0 || !ie().includes("]")) {
              if (h.nobracket !== !0 && h.strictBrackets === !0)
                throw new SyntaxError(p("closing", "]"));
              P = `\\${P}`;
            } else
              _e("brackets");
            L({ type: "bracket", value: P });
            continue;
          }
          if (P === "]") {
            if (h.nobracket === !0 || b && b.type === "bracket" && b.value.length === 1) {
              L({ type: "text", value: P, output: `\\${P}` });
              continue;
            }
            if (O.brackets === 0) {
              if (h.strictBrackets === !0)
                throw new SyntaxError(p("opening", "["));
              L({ type: "text", value: P, output: `\\${P}` });
              continue;
            }
            le("brackets");
            const N = b.value.slice(1);
            if (b.posix !== !0 && N[0] === "^" && !N.includes("/") && (P = `/${P}`), b.value += P, fe({ value: P }), h.literalBrackets === !1 || o.hasRegexChars(N))
              continue;
            const M = o.escapeRegex(b.value);
            if (O.output = O.output.slice(0, -b.value.length), h.literalBrackets === !0) {
              O.output += M, b.value = M;
              continue;
            }
            b.value = `(${T}${M}|${b.value})`, O.output += b.value;
            continue;
          }
          if (P === "{" && h.nobrace !== !0) {
            _e("braces");
            const N = { type: "brace", value: P, output: "(", outputIndex: O.output.length, tokensIndex: O.tokens.length };
            V.push(N), L(N);
            continue;
          }
          if (P === "}") {
            const N = V[V.length - 1];
            if (h.nobrace === !0 || !N) {
              L({ type: "text", value: P, output: P });
              continue;
            }
            let M = ")";
            if (N.dots === !0) {
              const H = S.slice(), ne = [];
              for (let se = H.length - 1; se >= 0 && (S.pop(), H[se].type !== "brace"); se--)
                H[se].type !== "dots" && ne.unshift(H[se].value);
              M = R(ne, h), O.backtrack = !0;
            }
            if (N.comma !== !0 && N.dots !== !0) {
              const H = O.output.slice(0, N.outputIndex), ne = O.tokens.slice(N.tokensIndex);
              N.value = N.output = "\\{", P = M = "\\}", O.output = H;
              for (const se of ne)
                O.output += se.output || se.value;
            }
            L({ type: "brace", value: P, output: M }), le("braces"), V.pop();
            continue;
          }
          if (P === "|") {
            ae.length > 0 && ae[ae.length - 1].conditions++, L({ type: "text", value: P });
            continue;
          }
          if (P === ",") {
            let N = P;
            const M = V[V.length - 1];
            M && ue[ue.length - 1] === "braces" && (M.comma = !0, N = "|"), L({ type: "comma", value: P, output: N });
            continue;
          }
          if (P === "/") {
            if (b.type === "dot" && O.index === O.start + 1) {
              O.start = O.index + 1, O.consumed = "", O.output = "", S.pop(), b = A;
              continue;
            }
            L({ type: "slash", value: P, output: G });
            continue;
          }
          if (P === ".") {
            if (O.braces > 0 && b.type === "dot") {
              b.value === "." && (b.output = w);
              const N = V[V.length - 1];
              b.type = "dots", b.output += P, b.value += P, N.dots = !0;
              continue;
            }
            if (O.braces + O.parens === 0 && b.type !== "bos" && b.type !== "slash") {
              L({ type: "text", value: P, output: w });
              continue;
            }
            L({ type: "dot", value: P, output: w });
            continue;
          }
          if (P === "?") {
            if (!(b && b.value === "(") && h.noextglob !== !0 && F() === "(" && F(2) !== "?") {
              K("qmark", P);
              continue;
            }
            if (b && b.type === "paren") {
              const M = F();
              let H = P;
              (b.value === "(" && !/[!=<:]/.test(M) || M === "<" && !/<([!=]|\w+>)/.test(ie())) && (H = `\\${P}`), L({ type: "text", value: P, output: H });
              continue;
            }
            if (h.dot !== !0 && (b.type === "slash" || b.type === "bos")) {
              L({ type: "qmark", value: P, output: W });
              continue;
            }
            L({ type: "qmark", value: P, output: $ });
            continue;
          }
          if (P === "!") {
            if (h.noextglob !== !0 && F() === "(" && (F(2) !== "?" || !/[!=<:]/.test(F(3)))) {
              K("negate", P);
              continue;
            }
            if (h.nonegate !== !0 && O.index === 0) {
              ce();
              continue;
            }
          }
          if (P === "+") {
            if (h.noextglob !== !0 && F() === "(" && F(2) !== "?") {
              K("plus", P);
              continue;
            }
            if (b && b.value === "(" || h.regex === !1) {
              L({ type: "plus", value: P, output: x });
              continue;
            }
            if (b && (b.type === "bracket" || b.type === "paren" || b.type === "brace") || O.parens > 0) {
              L({ type: "plus", value: P });
              continue;
            }
            L({ type: "plus", value: x });
            continue;
          }
          if (P === "@") {
            if (h.noextglob !== !0 && F() === "(" && F(2) !== "?") {
              L({ type: "at", extglob: !0, value: P, output: "" });
              continue;
            }
            L({ type: "text", value: P });
            continue;
          }
          if (P !== "*") {
            (P === "$" || P === "^") && (P = `\\${P}`);
            const N = m.exec(ie());
            N && (P += N[0], O.index += N[0].length), L({ type: "text", value: P });
            continue;
          }
          if (b && (b.type === "globstar" || b.star === !0)) {
            b.type = "star", b.star = !0, b.value += P, b.output = Q, O.backtrack = !0, O.globstar = !0, he(P);
            continue;
          }
          let I = ie();
          if (h.noextglob !== !0 && /^\([^?]/.test(I)) {
            K("star", P);
            continue;
          }
          if (b.type === "star") {
            if (h.noglobstar === !0) {
              he(P);
              continue;
            }
            const N = b.prev, M = N.prev, H = N.type === "slash" || N.type === "bos", ne = M && (M.type === "star" || M.type === "globstar");
            if (h.bash === !0 && (!H || I[0] && I[0] !== "/")) {
              L({ type: "star", value: P, output: "" });
              continue;
            }
            const se = O.braces > 0 && (N.type === "comma" || N.type === "brace"), pe = ae.length && (N.type === "pipe" || N.type === "paren");
            if (!H && N.type !== "paren" && !se && !pe) {
              L({ type: "star", value: P, output: "" });
              continue;
            }
            for (; I.slice(0, 3) === "/**"; ) {
              const Re = l[O.index + 4];
              if (Re && Re !== "/")
                break;
              I = I.slice(3), he("/**", 3);
            }
            if (N.type === "bos" && ge()) {
              b.type = "globstar", b.value += P, b.output = te(h), O.output = b.output, O.globstar = !0, he(P);
              continue;
            }
            if (N.type === "slash" && N.prev.type !== "bos" && !ne && ge()) {
              O.output = O.output.slice(0, -(N.output + b.output).length), N.output = `(?:${N.output}`, b.type = "globstar", b.output = te(h) + (h.strictSlashes ? ")" : "|$)"), b.value += P, O.globstar = !0, O.output += N.output + b.output, he(P);
              continue;
            }
            if (N.type === "slash" && N.prev.type !== "bos" && I[0] === "/") {
              const Re = I[1] !== void 0 ? "|$" : "";
              O.output = O.output.slice(0, -(N.output + b.output).length), N.output = `(?:${N.output}`, b.type = "globstar", b.output = `${te(h)}${G}|${G}${Re})`, b.value += P, O.output += N.output + b.output, O.globstar = !0, he(P + U()), L({ type: "slash", value: "/", output: "" });
              continue;
            }
            if (N.type === "bos" && I[0] === "/") {
              b.type = "globstar", b.value += P, b.output = `(?:^|${G}|${te(h)}${G})`, O.output = b.output, O.globstar = !0, he(P + U()), L({ type: "slash", value: "/", output: "" });
              continue;
            }
            O.output = O.output.slice(0, -b.output.length), b.type = "globstar", b.output = te(h), b.value += P, O.output += b.output, O.globstar = !0, he(P);
            continue;
          }
          const re = { type: "star", value: P, output: Q };
          if (h.bash === !0) {
            re.output = ".*?", (b.type === "bos" || b.type === "slash") && (re.output = B + re.output), L(re);
            continue;
          }
          if (b && (b.type === "bracket" || b.type === "paren") && h.regex === !0) {
            re.output = P, L(re);
            continue;
          }
          (O.index === O.start || b.type === "slash" || b.type === "dot") && (b.type === "dot" ? (O.output += J, b.output += J) : h.dot === !0 ? (O.output += z, b.output += z) : (O.output += B, b.output += B), F() !== "*" && (O.output += k, b.output += k)), L(re);
        }
        for (; O.brackets > 0; ) {
          if (h.strictBrackets === !0) throw new SyntaxError(p("closing", "]"));
          O.output = o.escapeLast(O.output, "["), le("brackets");
        }
        for (; O.parens > 0; ) {
          if (h.strictBrackets === !0) throw new SyntaxError(p("closing", ")"));
          O.output = o.escapeLast(O.output, "("), le("parens");
        }
        for (; O.braces > 0; ) {
          if (h.strictBrackets === !0) throw new SyntaxError(p("closing", "}"));
          O.output = o.escapeLast(O.output, "{"), le("braces");
        }
        if (h.strictSlashes !== !0 && (b.type === "star" || b.type === "bracket") && L({ type: "maybe_slash", value: "", output: `${G}?` }), O.backtrack === !0) {
          O.output = "";
          for (const I of O.tokens)
            O.output += I.output != null ? I.output : I.value, I.suffix && (O.output += I.suffix);
        }
        return O;
      };
      c.fastpaths = (l, y) => {
        const h = { ...y }, C = typeof h.maxLength == "number" ? Math.min(u, h.maxLength) : u, g = l.length;
        if (g > C)
          throw new SyntaxError(`Input length: ${g}, exceeds maximum allowed length: ${C}`);
        l = d[l] || l;
        const { DOT_LITERAL: A, SLASH_LITERAL: S, ONE_CHAR: T, DOTS_SLASH: j, NO_DOT: v, NO_DOTS: w, NO_DOTS_SLASH: x, STAR: G, START_ANCHOR: k } = a.globChars(h.windows), D = h.dot ? w : v, X = h.dot ? x : v, J = h.capture ? "" : "?:", z = { negated: !1, prefix: "" };
        let $ = h.bash === !0 ? ".*?" : G;
        h.capture && ($ = `(${$})`);
        const W = (B) => B.noglobstar === !0 ? $ : `(${J}(?:(?!${k}${B.dot ? j : A}).)*?)`, Z = (B) => {
          switch (B) {
            case "*":
              return `${D}${T}${$}`;
            case ".*":
              return `${A}${T}${$}`;
            case "*.*":
              return `${D}${$}${A}${T}${$}`;
            case "*/*":
              return `${D}${$}${S}${T}${X}${$}`;
            case "**":
              return D + W(h);
            case "**/*":
              return `(?:${D}${W(h)}${S})?${X}${T}${$}`;
            case "**/*.*":
              return `(?:${D}${W(h)}${S})?${X}${$}${A}${T}${$}`;
            case "**/.*":
              return `(?:${D}${W(h)}${S})?${A}${T}${$}`;
            default: {
              const Y = /^(.*?)\.(\w+)$/.exec(B);
              if (!Y) return;
              const Q = Z(Y[1]);
              return Q ? Q + A + Y[2] : void 0;
            }
          }
        }, ee = o.removePrefix(l, z);
        let te = Z(ee);
        return te && h.strictSlashes !== !0 && (te += `${S}?`), te;
      }, s.exports = c;
    }, 510: (s, r, t) => {
      const a = t(716), o = t(697), u = t(96), _ = t(154), m = (d) => d && typeof d == "object" && !Array.isArray(d), E = (d, R, p = !1) => {
        if (Array.isArray(d)) {
          const S = d.map(((j) => E(j, R, p)));
          return (j) => {
            for (const v of S) {
              const w = v(j);
              if (w) return w;
            }
            return !1;
          };
        }
        const c = m(d) && d.tokens && d.input;
        if (d === "" || typeof d != "string" && !c)
          throw new TypeError("Expected pattern to be a non-empty string");
        const l = R || {}, y = l.windows, h = c ? E.compileRe(d, R) : E.makeRe(d, R, !1, !0), C = h.state;
        delete h.state;
        let g = () => !1;
        if (l.ignore) {
          const S = { ...R, ignore: null, onMatch: null, onResult: null };
          g = E(l.ignore, S, p);
        }
        const A = (S, T = !1) => {
          const { isMatch: j, match: v, output: w } = E.test(S, h, R, { glob: d, posix: y }), x = { glob: d, state: C, regex: h, posix: y, input: S, output: w, match: v, isMatch: j };
          return typeof l.onResult == "function" && l.onResult(x), j === !1 ? (x.isMatch = !1, T ? x : !1) : g(S) ? (typeof l.onIgnore == "function" && l.onIgnore(x), x.isMatch = !1, T ? x : !1) : (typeof l.onMatch == "function" && l.onMatch(x), T ? x : !0);
        };
        return p && (A.state = C), A;
      };
      E.test = (d, R, p, { glob: c, posix: l } = {}) => {
        if (typeof d != "string")
          throw new TypeError("Expected input to be a string");
        if (d === "")
          return { isMatch: !1, output: "" };
        const y = p || {}, h = y.format || (l ? u.toPosixSlashes : null);
        let C = d === c, g = C && h ? h(d) : d;
        return C === !1 && (g = h ? h(d) : d, C = g === c), (C === !1 || y.capture === !0) && (y.matchBase === !0 || y.basename === !0 ? C = E.matchBase(d, R, p, l) : C = R.exec(g)), { isMatch: !!C, match: C, output: g };
      }, E.matchBase = (d, R, p) => (R instanceof RegExp ? R : E.makeRe(R, p)).test(u.basename(d)), E.isMatch = (d, R, p) => E(R, p)(d), E.parse = (d, R) => Array.isArray(d) ? d.map(((p) => E.parse(p, R))) : o(d, { ...R, fastpaths: !1 }), E.scan = (d, R) => a(d, R), E.compileRe = (d, R, p = !1, c = !1) => {
        if (p === !0)
          return d.output;
        const l = R || {}, y = l.contains ? "" : "^", h = l.contains ? "" : "$";
        let C = `${y}(?:${d.output})${h}`;
        d && d.negated === !0 && (C = `^(?!${C}).*$`);
        const g = E.toRegex(C, R);
        return c === !0 && (g.state = d), g;
      }, E.makeRe = (d, R = {}, p = !1, c = !1) => {
        if (!d || typeof d != "string")
          throw new TypeError("Expected a non-empty string");
        let l = { negated: !1, fastpaths: !0 };
        return R.fastpaths !== !1 && (d[0] === "." || d[0] === "*") && (l.output = o.fastpaths(d, R)), l.output || (l = o(d, R)), E.compileRe(l, R, p, c);
      }, E.toRegex = (d, R) => {
        try {
          const p = R || {};
          return new RegExp(d, p.flags || (p.nocase ? "i" : ""));
        } catch (p) {
          if (R && R.debug === !0) throw p;
          return /$^/;
        }
      }, E.constants = _, s.exports = E;
    }, 716: (s, r, t) => {
      const a = t(96), { CHAR_ASTERISK: o, CHAR_AT: u, CHAR_BACKWARD_SLASH: _, CHAR_COMMA: m, CHAR_DOT: E, CHAR_EXCLAMATION_MARK: d, CHAR_FORWARD_SLASH: R, CHAR_LEFT_CURLY_BRACE: p, CHAR_LEFT_PARENTHESES: c, CHAR_LEFT_SQUARE_BRACKET: l, CHAR_PLUS: y, CHAR_QUESTION_MARK: h, CHAR_RIGHT_CURLY_BRACE: C, CHAR_RIGHT_PARENTHESES: g, CHAR_RIGHT_SQUARE_BRACKET: A } = t(154), S = (v) => v === R || v === _, T = (v) => {
        v.isPrefix !== !0 && (v.depth = v.isGlobstar ? 1 / 0 : 1);
      }, j = (v, w) => {
        const x = w || {}, G = v.length - 1, k = x.parts === !0 || x.scanToEnd === !0, D = [], X = [], J = [];
        let z = v, $ = -1, W = 0, Z = 0, ee = !1, te = !1, B = !1, Y = !1, Q = !1, O = !1, ae = !1, V = !1, ue = !1, b = !1, P = 0, ge, F, U = { value: "", depth: 0, isGlob: !1 };
        const ie = () => $ >= G, he = () => z.charCodeAt($ + 1), fe = () => (ge = F, z.charCodeAt(++$));
        for (; $ < G; ) {
          F = fe();
          let K;
          if (F === _) {
            ae = U.backslashes = !0, F = fe(), F === p && (O = !0);
            continue;
          }
          if (O === !0 || F === p) {
            for (P++; ie() !== !0 && (F = fe()); ) {
              if (F === _) {
                ae = U.backslashes = !0, fe();
                continue;
              }
              if (F === p) {
                P++;
                continue;
              }
              if (O !== !0 && F === E && (F = fe()) === E) {
                if (ee = U.isBrace = !0, B = U.isGlob = !0, b = !0, k === !0)
                  continue;
                break;
              }
              if (O !== !0 && F === m) {
                if (ee = U.isBrace = !0, B = U.isGlob = !0, b = !0, k === !0)
                  continue;
                break;
              }
              if (F === C && (P--, P === 0)) {
                O = !1, ee = U.isBrace = !0, b = !0;
                break;
              }
            }
            if (k === !0)
              continue;
            break;
          }
          if (F === R) {
            if (D.push($), X.push(U), U = { value: "", depth: 0, isGlob: !1 }, b === !0) continue;
            if (ge === E && $ === W + 1) {
              W += 2;
              continue;
            }
            Z = $ + 1;
            continue;
          }
          if (x.noext !== !0 && (F === y || F === u || F === o || F === h || F === d) === !0 && he() === c) {
            if (B = U.isGlob = !0, Y = U.isExtglob = !0, b = !0, F === d && $ === W && (ue = !0), k === !0) {
              for (; ie() !== !0 && (F = fe()); ) {
                if (F === _) {
                  ae = U.backslashes = !0, F = fe();
                  continue;
                }
                if (F === g) {
                  B = U.isGlob = !0, b = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (F === o) {
            if (ge === o && (Q = U.isGlobstar = !0), B = U.isGlob = !0, b = !0, k === !0)
              continue;
            break;
          }
          if (F === h) {
            if (B = U.isGlob = !0, b = !0, k === !0)
              continue;
            break;
          }
          if (F === l) {
            for (; ie() !== !0 && (K = fe()); ) {
              if (K === _) {
                ae = U.backslashes = !0, fe();
                continue;
              }
              if (K === A) {
                te = U.isBracket = !0, B = U.isGlob = !0, b = !0;
                break;
              }
            }
            if (k === !0)
              continue;
            break;
          }
          if (x.nonegate !== !0 && F === d && $ === W) {
            V = U.negated = !0, W++;
            continue;
          }
          if (x.noparen !== !0 && F === c) {
            if (B = U.isGlob = !0, k === !0) {
              for (; ie() !== !0 && (F = fe()); ) {
                if (F === c) {
                  ae = U.backslashes = !0, F = fe();
                  continue;
                }
                if (F === g) {
                  b = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (B === !0) {
            if (b = !0, k === !0)
              continue;
            break;
          }
        }
        x.noext === !0 && (Y = !1, B = !1);
        let ce = z, _e = "", le = "";
        W > 0 && (_e = z.slice(0, W), z = z.slice(W), Z -= W), ce && B === !0 && Z > 0 ? (ce = z.slice(0, Z), le = z.slice(Z)) : B === !0 ? (ce = "", le = z) : ce = z, ce && ce !== "" && ce !== "/" && ce !== z && S(ce.charCodeAt(ce.length - 1)) && (ce = ce.slice(0, -1)), x.unescape === !0 && (le && (le = a.removeBackslashes(le)), ce && ae === !0 && (ce = a.removeBackslashes(ce)));
        const L = { prefix: _e, input: v, start: W, base: ce, glob: le, isBrace: ee, isBracket: te, isGlob: B, isExtglob: Y, isGlobstar: Q, negated: V, negatedExtglob: ue };
        if (x.tokens === !0 && (L.maxDepth = 0, S(F) || X.push(U), L.tokens = X), x.parts === !0 || x.tokens === !0) {
          let K;
          for (let oe = 0; oe < D.length; oe++) {
            const I = K ? K + 1 : W, re = D[oe], N = v.slice(I, re);
            x.tokens && (oe === 0 && W !== 0 ? (X[oe].isPrefix = !0, X[oe].value = _e) : X[oe].value = N, T(X[oe]), L.maxDepth += X[oe].depth), (oe !== 0 || N !== "") && J.push(N), K = re;
          }
          if (K && K + 1 < v.length) {
            const oe = v.slice(K + 1);
            J.push(oe), x.tokens && (X[X.length - 1].value = oe, T(X[X.length - 1]), L.maxDepth += X[X.length - 1].depth);
          }
          L.slashes = D, L.parts = J;
        }
        return L;
      };
      s.exports = j;
    }, 96: (s, r, t) => {
      const { REGEX_BACKSLASH: a, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: u, REGEX_SPECIAL_CHARS_GLOBAL: _ } = t(154);
      r.isObject = (m) => m !== null && typeof m == "object" && !Array.isArray(m), r.hasRegexChars = (m) => u.test(m), r.isRegexChar = (m) => m.length === 1 && r.hasRegexChars(m), r.escapeRegex = (m) => m.replace(_, "\\$1"), r.toPosixSlashes = (m) => m.replace(a, "/"), r.removeBackslashes = (m) => m.replace(o, ((E) => E === "\\" ? "" : E)), r.escapeLast = (m, E, d) => {
        const R = m.lastIndexOf(E, d);
        return R === -1 ? m : m[R - 1] === "\\" ? r.escapeLast(m, E, R - 1) : `${m.slice(0, R)}\\${m.slice(R)}`;
      }, r.removePrefix = (m, E = {}) => {
        let d = m;
        return d.startsWith("./") && (d = d.slice(2), E.prefix = "./"), d;
      }, r.wrapOutput = (m, E = {}, d = {}) => {
        const R = d.contains ? "" : "^", p = d.contains ? "" : "$";
        let c = `${R}(?:${m})${p}`;
        return E.negated === !0 && (c = `(?:^(?!${c}).*$)`), c;
      }, r.basename = (m, { windows: E } = {}) => {
        const d = m.split(E ? /[\\/]/ : "/"), R = d[d.length - 1];
        return R === "" ? d[d.length - 2] : R;
      };
    } }, e = {};
    function i(s) {
      var r = e[s];
      if (r !== void 0)
        return r.exports;
      var t = e[s] = { exports: {} }, a = !0;
      try {
        n[s](t, t.exports, i), a = !1;
      } finally {
        a && delete e[s];
      }
      return t.exports;
    }
    typeof i < "u" && (i.ab = __dirname + "/");
    var f = i(170);
    ot.exports = f;
  })()), ot.exports;
}
var cr;
function fo() {
  return cr || (cr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(r, t) {
      for (var a in t) Object.defineProperty(r, a, {
        enumerable: !0,
        get: t[a]
      });
    }
    e(n, {
      hasLocalMatch: function() {
        return s;
      },
      matchLocalPattern: function() {
        return f;
      }
    });
    const i = En();
    function f(r, t) {
      return !(r.search !== void 0 && r.search !== t.search || !(0, i.makeRe)(r.pathname ?? "**", {
        dot: !0
      }).test(t.pathname));
    }
    function s(r, t) {
      if (!r)
        return !0;
      const a = new URL(t, "http://n");
      return r.some((o) => f(o, a));
    }
  })(nt)), nt;
}
var at = {}, lr;
function po() {
  return lr || (lr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(r, t) {
      for (var a in t) Object.defineProperty(r, a, {
        enumerable: !0,
        get: t[a]
      });
    }
    e(n, {
      hasRemoteMatch: function() {
        return s;
      },
      matchRemotePattern: function() {
        return f;
      }
    });
    const i = En();
    function f(r, t) {
      if (r.protocol !== void 0 && r.protocol.replace(/:$/, "") !== t.protocol.replace(/:$/, "") || r.port !== void 0 && r.port !== t.port)
        return !1;
      if (r.hostname === void 0)
        throw Object.defineProperty(new Error(`Pattern should define hostname but found
${JSON.stringify(r)}`), "__NEXT_ERROR_CODE", {
          value: "E410",
          enumerable: !1,
          configurable: !0
        });
      return !(!(0, i.makeRe)(r.hostname).test(t.hostname) || r.search !== void 0 && r.search !== t.search || !(0, i.makeRe)(r.pathname ?? "**", {
        dot: !0
      }).test(t.pathname));
    }
    function s(r, t, a) {
      return r.some((o) => a.hostname === o) || t.some((o) => f(o, a));
    }
  })(at)), at;
}
var fr;
function Rn() {
  return fr || (fr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "default", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const e = lo(), i = _n();
    function f({ config: r, src: t, width: a, quality: o }) {
      if (t.startsWith("/") && t.includes("?") && r.localPatterns?.length === 1 && r.localPatterns[0].pathname === "**" && r.localPatterns[0].search === "")
        throw Object.defineProperty(new Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
          value: "E871",
          enumerable: !1,
          configurable: !0
        });
      if (process.env.NODE_ENV !== "production") {
        const m = [];
        if (t || m.push("src"), a || m.push("width"), m.length > 0)
          throw Object.defineProperty(new Error(`Next Image Optimization requires ${m.join(", ")} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
            src: t,
            width: a,
            quality: o
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
        if (t.startsWith("/") && r.localPatterns && process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
        process.env.NEXT_RUNTIME !== "edge") {
          const { hasLocalMatch: E } = fo();
          if (!E(r.localPatterns, t))
            throw Object.defineProperty(new Error(`Invalid src prop (${t}) on \`next/image\` does not match \`images.localPatterns\` configured in your \`next.config.js\`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
              value: "E426",
              enumerable: !1,
              configurable: !0
            });
        }
        if (!t.startsWith("/") && (r.domains || r.remotePatterns)) {
          let E;
          try {
            E = new URL(t);
          } catch (d) {
            throw console.error(d), Object.defineProperty(new Error(`Failed to parse src "${t}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
              value: "E63",
              enumerable: !1,
              configurable: !0
            });
          }
          if (process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
          process.env.NEXT_RUNTIME !== "edge") {
            const { hasRemoteMatch: d } = po();
            if (!d(r.domains, r.remotePatterns, E))
              throw Object.defineProperty(new Error(`Invalid src prop (${t}) on \`next/image\`, hostname "${E.hostname}" is not configured under images in your \`next.config.js\`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`), "__NEXT_ERROR_CODE", {
                value: "E231",
                enumerable: !1,
                configurable: !0
              });
          }
        }
      }
      const u = (0, e.findClosestQuality)(o, r);
      let _ = (0, i.getDeploymentId)();
      return `${r.path}?url=${encodeURIComponent(t)}&w=${a}&q=${u}${t.startsWith("/") && _ ? `&dpl=${_}` : ""}`;
    }
    f.__next_img_default = !0;
    const s = f;
  })(tt)), tt;
}
var Oe = { exports: {} }, dr;
function vn() {
  return dr || (dr = 1, (function(n, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "useMergedRef", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const i = ye;
    function f(r, t) {
      const a = (0, i.useRef)(null), o = (0, i.useRef)(null);
      return (0, i.useCallback)((u) => {
        if (u === null) {
          const _ = a.current;
          _ && (a.current = null, _());
          const m = o.current;
          m && (o.current = null, m());
        } else
          r && (a.current = s(r, u)), t && (o.current = s(t, u));
      }, [
        r,
        t
      ]);
    }
    function s(r, t) {
      if (typeof r == "function") {
        const a = r(t);
        return typeof a == "function" ? a : () => r(null);
      } else
        return r.current = t, () => {
          r.current = null;
        };
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(Oe, Oe.exports)), Oe.exports;
}
var pr;
function ho() {
  return pr || (pr = 1, (function(n, e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "Image", {
      enumerable: !0,
      get: function() {
        return C;
      }
    });
    const i = /* @__PURE__ */ be(), f = /* @__PURE__ */ ke(), s = Ft, r = /* @__PURE__ */ f._(ye), t = /* @__PURE__ */ i._(Mn), a = /* @__PURE__ */ i._(uo()), o = gn(), u = Bt(), _ = co(), m = Gt(), E = mn(), d = /* @__PURE__ */ i._(Rn()), R = vn(), p = process.env.__NEXT_IMAGE_OPTS;
    typeof window > "u" && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    function c(g, A, S, T, j, v, w) {
      const x = g?.src;
      if (!g || g["data-loaded-src"] === x)
        return;
      g["data-loaded-src"] = x, ("decode" in g ? g.decode() : Promise.resolve()).catch(() => {
      }).then(() => {
        if (!(!g.parentElement || !g.isConnected)) {
          if (A !== "empty" && j(!0), S?.current) {
            const k = new Event("load");
            Object.defineProperty(k, "target", {
              writable: !1,
              value: g
            });
            let D = !1, X = !1;
            S.current({
              ...k,
              nativeEvent: k,
              currentTarget: g,
              target: g,
              isDefaultPrevented: () => D,
              isPropagationStopped: () => X,
              persist: () => {
              },
              preventDefault: () => {
                D = !0, k.preventDefault();
              },
              stopPropagation: () => {
                X = !0, k.stopPropagation();
              }
            });
          }
          if (T?.current && T.current(g), process.env.NODE_ENV !== "production") {
            const k = new URL(x, "http://n").searchParams.get("url") || x;
            if (g.getAttribute("data-nimg") === "fill") {
              if (!v && (!w || w === "100vw") && g.getBoundingClientRect().width / window.innerWidth < 0.6 && (w === "100vw" ? (0, m.warnOnce)(`Image with src "${k}" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`) : (0, m.warnOnce)(`Image with src "${k}" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`)), g.parentElement) {
                const { position: J } = window.getComputedStyle(g.parentElement), z = [
                  "absolute",
                  "fixed",
                  "relative"
                ];
                z.includes(J) || (0, m.warnOnce)(`Image with src "${k}" has "fill" and parent element with invalid "position". Provided "${J}" should be one of ${z.map(String).join(",")}.`);
              }
              g.height === 0 && (0, m.warnOnce)(`Image with src "${k}" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.`);
            }
            const D = g.height.toString() !== g.getAttribute("height"), X = g.width.toString() !== g.getAttribute("width");
            (D && !X || !D && X) && (0, m.warnOnce)(`Image with src "${k}" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
          }
        }
      });
    }
    function l(g) {
      return r.use ? {
        fetchPriority: g
      } : {
        fetchpriority: g
      };
    }
    const y = /* @__PURE__ */ (0, r.forwardRef)(({ src: g, srcSet: A, sizes: S, height: T, width: j, decoding: v, className: w, style: x, fetchPriority: G, placeholder: k, loading: D, unoptimized: X, fill: J, onLoadRef: z, onLoadingCompleteRef: $, setBlurComplete: W, setShowAltText: Z, sizesInput: ee, onLoad: te, onError: B, ...Y }, Q) => {
      const O = (0, r.useCallback)((V) => {
        V && (B && (V.src = V.src), process.env.NODE_ENV !== "production" && (g || console.error('Image is missing required "src" property:', V), V.getAttribute("alt") === null && console.error('Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.')), V.complete && c(V, k, z, $, W, X, ee));
      }, [
        g,
        k,
        z,
        $,
        W,
        B,
        X,
        ee
      ]), ae = (0, R.useMergedRef)(Q, O);
      return /* @__PURE__ */ (0, s.jsx)("img", {
        ...Y,
        ...l(G),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: D,
        width: j,
        height: T,
        decoding: v,
        "data-nimg": J ? "fill" : "1",
        className: w,
        style: x,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: S,
        srcSet: A,
        src: g,
        ref: ae,
        onLoad: (V) => {
          const ue = V.currentTarget;
          c(ue, k, z, $, W, X, ee);
        },
        onError: (V) => {
          Z(!0), k !== "empty" && W(!0), B && B(V);
        }
      });
    });
    function h({ isAppRouter: g, imgAttributes: A }) {
      const S = {
        as: "image",
        imageSrcSet: A.srcSet,
        imageSizes: A.sizes,
        crossOrigin: A.crossOrigin,
        referrerPolicy: A.referrerPolicy,
        ...l(A.fetchPriority)
      };
      return g && t.default.preload ? (t.default.preload(A.src, S), null) : /* @__PURE__ */ (0, s.jsx)(a.default, {
        children: /* @__PURE__ */ (0, s.jsx)("link", {
          rel: "preload",
          // Note how we omit the `href` attribute, as it would only be relevant
          // for browsers that do not support `imagesrcset`, and in those cases
          // it would cause the incorrect image to be preloaded.
          //
          // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
          href: A.srcSet ? void 0 : A.src,
          ...S
        }, "__nimg-" + A.src + A.srcSet + A.sizes)
      });
    }
    const C = /* @__PURE__ */ (0, r.forwardRef)((g, A) => {
      const T = !(0, r.useContext)(E.RouterContext), j = (0, r.useContext)(_.ImageConfigContext), v = (0, r.useMemo)(() => {
        const Z = p || j || u.imageConfigDefault, ee = [
          ...Z.deviceSizes,
          ...Z.imageSizes
        ].sort((Y, Q) => Y - Q), te = Z.deviceSizes.sort((Y, Q) => Y - Q), B = Z.qualities?.sort((Y, Q) => Y - Q);
        return {
          ...Z,
          allSizes: ee,
          deviceSizes: te,
          qualities: B,
          // During the SSR, configEnv (__NEXT_IMAGE_OPTS) does not include
          // security sensitive configs like `localPatterns`, which is needed
          // during the server render to ensure it's validated. Therefore use
          // configContext, which holds the config from the server for validation.
          localPatterns: typeof window > "u" ? j?.localPatterns : Z.localPatterns
        };
      }, [
        j
      ]), { onLoad: w, onLoadingComplete: x } = g, G = (0, r.useRef)(w);
      (0, r.useEffect)(() => {
        G.current = w;
      }, [
        w
      ]);
      const k = (0, r.useRef)(x);
      (0, r.useEffect)(() => {
        k.current = x;
      }, [
        x
      ]);
      const [D, X] = (0, r.useState)(!1), [J, z] = (0, r.useState)(!1), { props: $, meta: W } = (0, o.getImgProps)(g, {
        defaultLoader: d.default,
        imgConf: v,
        blurComplete: D,
        showAltText: J
      });
      return /* @__PURE__ */ (0, s.jsxs)(s.Fragment, {
        children: [
          /* @__PURE__ */ (0, s.jsx)(y, {
            ...$,
            unoptimized: W.unoptimized,
            placeholder: W.placeholder,
            fill: W.fill,
            onLoadRef: G,
            onLoadingCompleteRef: k,
            setBlurComplete: X,
            setShowAltText: z,
            sizesInput: g.sizes,
            ref: A
          }),
          W.preload ? /* @__PURE__ */ (0, s.jsx)(h, {
            isAppRouter: T,
            imgAttributes: $
          }) : null
        ]
      });
    });
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(Ce, Ce.exports)), Ce.exports;
}
var hr;
function _o() {
  return hr || (hr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(o, u) {
      for (var _ in u) Object.defineProperty(o, _, {
        enumerable: !0,
        get: u[_]
      });
    }
    e(n, {
      default: function() {
        return a;
      },
      getImageProps: function() {
        return t;
      }
    });
    const i = /* @__PURE__ */ be(), f = gn(), s = ho(), r = /* @__PURE__ */ i._(Rn());
    function t(o) {
      const { props: u } = (0, f.getImgProps)(o, {
        defaultLoader: r.default,
        // This is replaced by webpack define plugin
        imgConf: process.env.__NEXT_IMAGE_OPTS
      });
      for (const [_, m] of Object.entries(u))
        m === void 0 && delete u[_];
      return {
        props: u
      };
    }
    const a = s.Image;
  })(Fe)), Fe;
}
var it, _r;
function go() {
  return _r || (_r = 1, it = _o()), it;
}
var mo = go();
const Eo = /* @__PURE__ */ hn(mo), Ro = ({
  title: n,
  description: e,
  featureOne: i,
  featureTwo: f,
  featureThree: s,
  primaryCtaLabel: r,
  primaryCtaUrl: t,
  secondaryCtaLabel: a,
  secondaryCtaUrl: o,
  heroImage: u,
  textAlignment: _
}) => /* @__PURE__ */ q(
  "section",
  {
    className: "bg-secondary section-padding-y",
    "aria-labelledby": "hero-heading",
    children: /* @__PURE__ */ de("div", { className: "container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16", children: [
      /* @__PURE__ */ de(
        "div",
        {
          className: `flex flex-1 flex-col gap-6 lg:gap-8 ${{
            left: "text-left",
            center: "text-center",
            right: "text-right"
          }[_ || "left"]}`,
          children: [
            /* @__PURE__ */ de("div", { className: "section-title-gap-xl flex flex-col", children: [
              /* @__PURE__ */ q("h1", { id: "hero-heading", className: "heading-xl", children: n }),
              /* @__PURE__ */ q("p", { className: "text-muted-foreground text-base lg:text-lg", children: e })
            ] }),
            /* @__PURE__ */ de("div", { className: "flex flex-col gap-2 md:gap-3", children: [
              i && /* @__PURE__ */ de("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ q("div", { className: "pt-0.5", children: /* @__PURE__ */ q(Xe, { className: "text-primary h-5 w-5" }) }),
                /* @__PURE__ */ q("span", { className: "text-card-foreground text-base leading-6 font-medium", children: i })
              ] }),
              f && /* @__PURE__ */ de("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ q("div", { className: "pt-0.5", children: /* @__PURE__ */ q(Xe, { className: "text-primary h-5 w-5" }) }),
                /* @__PURE__ */ q("span", { className: "text-card-foreground text-base leading-6 font-medium", children: f })
              ] }),
              s && /* @__PURE__ */ de("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ q("div", { className: "pt-0.5", children: /* @__PURE__ */ q(Xe, { className: "text-primary h-5 w-5" }) }),
                /* @__PURE__ */ q("span", { className: "text-card-foreground text-base leading-6 font-medium", children: s })
              ] })
            ] }),
            /* @__PURE__ */ de("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
              /* @__PURE__ */ q(Ee, { asChild: !0, children: /* @__PURE__ */ q("a", { href: t, children: r }) }),
              /* @__PURE__ */ q(Ee, { variant: "ghost", asChild: !0, children: /* @__PURE__ */ de("a", { href: o, children: [
                a,
                /* @__PURE__ */ q(jn, {})
              ] }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ q("div", { className: "w-full flex-1", children: /* @__PURE__ */ q(oo, { ratio: 1 / 1, children: /* @__PURE__ */ q(
        Eo,
        {
          src: u?.url || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-EK6lJQh9Tq3HAhrRx6QQGhjNwND9Gs.png",
          alt: "Hero visual",
          fill: !0,
          priority: !0,
          className: "h-full w-full rounded-xl object-cover"
        }
      ) }) })
    ] })
  }
), vo = [
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
], yo = ({ width: n = 135, height: e = 36, className: i }) => /* @__PURE__ */ de(
  "svg",
  {
    width: n,
    height: e,
    viewBox: "0 0 135 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "text-foreground w-[120px] h-[32px] md:w-[135px] md:h-[36px]",
    children: [
      /* @__PURE__ */ de("g", { clipPath: "url(#clip0_22005_7547)", children: [
        /* @__PURE__ */ de("g", { clipPath: "url(#clip1_22005_7547)", children: [
          /* @__PURE__ */ q(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M25.5391 1.96969C21.9841 -0.0227045 17.7853 -0.527706 13.8593 0.564945C9.93327 1.6576 6.599 4.25914 4.58444 7.8016C2.56989 11.3441 2.03868 15.5397 3.10679 19.4724C4.1749 23.4052 6.75558 26.7556 10.2854 28.7923V34.7143C10.2854 35.0553 10.4208 35.3823 10.662 35.6234C10.9031 35.8645 11.2301 36 11.5711 36H24.4282C24.7692 36 25.0963 35.8645 25.3374 35.6234C25.5785 35.3823 25.714 35.0553 25.714 34.7143V29.5714H29.5711C30.5941 29.5714 31.5752 29.165 32.2985 28.4417C33.0219 27.7183 33.4282 26.7372 33.4282 25.7143V15.4286C33.4279 12.6865 32.6967 9.99412 31.3101 7.62853C29.9235 5.26294 27.9314 3.30963 25.5391 1.96969Z",
              fill: "#FFDFD0"
            }
          ),
          /* @__PURE__ */ q(
            "path",
            {
              d: "M13.4351 6.90452C11.4747 8.03848 9.97314 9.82303 9.19107 11.9485C8.40901 14.0739 8.39577 16.4061 9.15366 18.5402C9.50851 19.538 10.5859 20.0394 11.6094 19.7668C16.7908 18.3937 22.0674 14.6831 25.2714 11.7877C26.1199 11.0188 26.2974 9.73824 25.5414 8.88195C24.0612 7.20665 22.0475 6.09441 19.8412 5.73358C17.635 5.37274 15.3719 5.78807 13.4351 6.90452Z",
              fill: "#F95E16"
            }
          )
        ] }),
        /* @__PURE__ */ q(
          "path",
          {
            d: "M44 23.9412V11.741H47.2741L50.5309 17.6343L53.7533 11.741H56.9068V23.9412H54.4426V15.0323L50.979 21.2186H49.9795L46.4642 15.0323V23.9412H44Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ q(
          "path",
          {
            d: "M59.1541 23.9412V14.86H61.5665V23.9412H59.1541ZM60.3603 13.9467C59.9123 13.9467 59.5504 13.8146 59.2747 13.5503C58.999 13.2746 58.8611 12.9242 58.8611 12.4992C58.8611 12.0512 59.0047 11.6893 59.2919 11.4136C59.5791 11.1379 59.941 11 60.3775 11C60.7796 11 61.1243 11.1379 61.4115 11.4136C61.7101 11.6778 61.8595 12.0339 61.8595 12.482C61.8595 12.9185 61.7159 13.2746 61.4287 13.5503C61.153 13.8146 60.7968 13.9467 60.3603 13.9467Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ q(
          "path",
          {
            d: "M63.4789 23.9412V14.86H65.7363L65.8569 15.9111C66.1096 15.6009 66.3968 15.3597 66.7185 15.1874C67.0517 15.0036 67.3848 14.8772 67.718 14.8083C68.0626 14.7393 68.3728 14.7049 68.6485 14.7049C69.5216 14.7049 70.1994 14.8944 70.6819 15.2735C71.1759 15.6526 71.5262 16.1639 71.733 16.8072C71.9513 17.439 72.0604 18.1455 72.0604 18.9267V23.9412H69.6479V19.2369C69.6479 18.9612 69.625 18.6855 69.579 18.4098C69.5331 18.134 69.4469 17.8813 69.3205 17.6516C69.2057 17.4218 69.0391 17.238 68.8208 17.1001C68.6025 16.9623 68.3153 16.8933 67.9592 16.8933C67.4997 16.8933 67.1148 17.0082 66.8047 17.238C66.4945 17.4677 66.2647 17.7779 66.1154 18.1685C65.966 18.5591 65.8914 18.9899 65.8914 19.4609V23.9412H63.4789Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ q(
          "path",
          {
            d: "M77.6517 24.0619C76.7326 24.0619 75.9687 23.8551 75.3598 23.4415C74.7624 23.0164 74.3144 22.4535 74.0157 21.7528C73.717 21.0405 73.5677 20.2536 73.5677 19.392C73.5677 18.4844 73.7285 17.6803 74.0502 16.9795C74.3719 16.2672 74.8486 15.7101 75.4804 15.308C76.1123 14.9059 76.8992 14.7049 77.8412 14.7049C78.1629 14.7049 78.4788 14.7451 78.789 14.8255C79.1107 14.8944 79.4036 15.0036 79.6678 15.1529C79.9435 15.2908 80.179 15.4746 80.3743 15.7043V11.741H82.7868V23.9412H80.4433L80.4088 22.9245C80.202 23.1888 79.9493 23.407 79.6506 23.5794C79.3634 23.7402 79.0532 23.8608 78.7201 23.9412C78.3869 24.0217 78.0308 24.0619 77.6517 24.0619ZM78.1342 21.8906C78.6511 21.8906 79.0704 21.77 79.3921 21.5288C79.7253 21.2875 79.9723 20.9773 80.1331 20.5982C80.2939 20.2191 80.3743 19.8113 80.3743 19.3748C80.3743 18.9267 80.2939 18.5189 80.1331 18.1513C79.9837 17.7722 79.7425 17.4735 79.4093 17.2552C79.0877 17.0255 78.6626 16.9106 78.1342 16.9106C77.6057 16.9106 77.1807 17.0312 76.859 17.2724C76.5373 17.5137 76.3076 17.8296 76.1697 18.2202C76.0434 18.5993 75.9802 19.0071 75.9802 19.4437C75.9802 19.7653 76.0146 20.0755 76.0836 20.3742C76.164 20.6614 76.2903 20.9199 76.4627 21.1496C76.635 21.3794 76.859 21.5632 77.1347 21.7011C77.4104 21.8274 77.7436 21.8906 78.1342 21.8906Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ q(
          "path",
          {
            d: "M89.6279 24.0791C88.7778 24.0791 87.9851 23.947 87.2499 23.6828C86.5262 23.4185 85.9173 22.9992 85.4233 22.4248C84.9408 21.8504 84.6364 21.1094 84.51 20.2019H87.0259C87.1293 20.5925 87.3188 20.9084 87.5945 21.1496C87.8703 21.3794 88.1977 21.546 88.5768 21.6494C88.9674 21.7528 89.3752 21.8045 89.8002 21.8045C90.1219 21.8045 90.4378 21.7643 90.748 21.6838C91.0582 21.6034 91.3109 21.4656 91.5062 21.2703C91.713 21.075 91.8164 20.8108 91.8164 20.4776C91.8164 20.2249 91.7589 20.0181 91.6441 19.8572C91.5407 19.6964 91.3856 19.57 91.1788 19.4781C90.9835 19.3748 90.7423 19.2828 90.4551 19.2024C90.2138 19.1335 89.9611 19.0761 89.6968 19.0301C89.4441 18.9842 89.1914 18.9267 88.9386 18.8578C88.6974 18.7889 88.4619 18.7084 88.2321 18.6165C87.7956 18.5017 87.3763 18.3638 86.9742 18.203C86.5721 18.0307 86.216 17.8181 85.9058 17.5654C85.5956 17.3012 85.3486 16.9738 85.1648 16.5832C84.9925 16.1926 84.9063 15.7216 84.9063 15.1701C84.9063 14.5728 85.004 14.0673 85.1993 13.6537C85.4061 13.2402 85.676 12.9013 86.0092 12.637C86.3538 12.3613 86.7329 12.1488 87.1465 11.9995C87.5716 11.8501 87.9966 11.7467 88.4217 11.6893C88.8467 11.6318 89.2488 11.6031 89.6279 11.6031C90.4206 11.6031 91.1328 11.741 91.7647 12.0167C92.3965 12.2924 92.9135 12.706 93.3156 13.2574C93.7176 13.8088 93.9474 14.5038 94.0048 15.3425H91.6096C91.5636 14.9978 91.4373 14.7164 91.2305 14.4981C91.0237 14.2798 90.7595 14.119 90.4378 14.0156C90.1276 13.9122 89.7773 13.8605 89.3867 13.8605C89.1339 13.8605 88.8869 13.8835 88.6457 13.9294C88.4044 13.9754 88.1862 14.0501 87.9909 14.1535C87.8071 14.2454 87.6577 14.3717 87.5428 14.5326C87.4394 14.6934 87.3878 14.8887 87.3878 15.1184C87.3878 15.3482 87.4509 15.5492 87.5773 15.7216C87.7037 15.8824 87.8875 16.026 88.1287 16.1524C88.3815 16.2672 88.6744 16.3764 89.0076 16.4798C89.3522 16.5947 89.7141 16.6866 90.0932 16.7555C90.4723 16.8244 90.8342 16.9163 91.1788 17.0312C91.6153 17.1461 92.0232 17.2839 92.4023 17.4448C92.7814 17.5941 93.1145 17.7894 93.4017 18.0307C93.6889 18.2604 93.9129 18.5591 94.0738 18.9267C94.2346 19.2828 94.315 19.7251 94.315 20.2536C94.315 20.9544 94.1829 21.5517 93.9187 22.0457C93.6659 22.5282 93.3156 22.9188 92.8675 23.2175C92.431 23.5162 91.9313 23.7344 91.3684 23.8723C90.8054 24.0102 90.2253 24.0791 89.6279 24.0791Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ q(
          "path",
          {
            d: "M96.0581 27.3359V14.86H98.3155L98.4362 15.9973C98.8038 15.5492 99.2231 15.2218 99.6941 15.0151C100.177 14.8083 100.705 14.7049 101.279 14.7049C102.176 14.7049 102.916 14.9117 103.502 15.3252C104.088 15.7388 104.525 16.3017 104.812 17.014C105.111 17.7147 105.26 18.5017 105.26 19.3748C105.26 20.2708 105.105 21.075 104.795 21.7872C104.496 22.488 104.042 23.0452 103.433 23.4587C102.825 23.8608 102.066 24.0619 101.159 24.0619C100.768 24.0619 100.401 24.0159 100.056 23.924C99.7113 23.8321 99.4069 23.7115 99.1427 23.5621C98.8785 23.4013 98.6544 23.2232 98.4706 23.0279V27.3359H96.0581ZM100.745 21.8906C101.285 21.8906 101.71 21.77 102.02 21.5288C102.331 21.2875 102.549 20.9831 102.675 20.6155C102.802 20.2364 102.865 19.8458 102.865 19.4437C102.865 19.0071 102.796 18.5936 102.658 18.203C102.52 17.8124 102.29 17.5022 101.969 17.2724C101.659 17.0312 101.233 16.9106 100.694 16.9106C100.211 16.9106 99.8032 17.0312 99.4701 17.2724C99.1369 17.5022 98.8842 17.8066 98.7119 18.1857C98.5396 18.5648 98.4534 18.9727 98.4534 19.4092C98.4534 19.8458 98.5338 20.2536 98.6946 20.6327C98.867 21.0118 99.1197 21.3162 99.4529 21.546C99.7975 21.7757 100.228 21.8906 100.745 21.8906Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ q(
          "path",
          {
            d: "M109.689 24.0619C109.275 24.0619 108.873 24.0102 108.483 23.9068C108.104 23.7919 107.765 23.6196 107.466 23.3898C107.167 23.1601 106.932 22.8728 106.76 22.5282C106.587 22.1836 106.501 21.7815 106.501 21.322C106.501 20.7016 106.628 20.2076 106.88 19.84C107.133 19.4609 107.472 19.1737 107.897 18.9784C108.322 18.7831 108.81 18.651 109.362 18.5821C109.925 18.5132 110.505 18.4787 111.102 18.4787H112.412C112.412 18.1455 112.349 17.8526 112.222 17.5999C112.107 17.3356 111.929 17.1346 111.688 16.9967C111.447 16.8474 111.137 16.7727 110.757 16.7727C110.516 16.7727 110.281 16.8072 110.051 16.8761C109.833 16.9336 109.649 17.0197 109.5 17.1346C109.35 17.2495 109.253 17.3988 109.207 17.5826H106.76C106.829 17.0772 106.989 16.6464 107.242 16.2902C107.495 15.9226 107.811 15.6239 108.19 15.3942C108.569 15.1644 108.983 14.9978 109.431 14.8944C109.89 14.7796 110.361 14.7221 110.844 14.7221C112.165 14.7221 113.141 15.1012 113.773 15.8594C114.405 16.6061 114.721 17.6688 114.721 19.0473V23.9412H112.55L112.515 22.7695C112.228 23.1715 111.901 23.4645 111.533 23.6483C111.177 23.8321 110.832 23.947 110.499 23.9929C110.166 24.0389 109.896 24.0619 109.689 24.0619ZM110.24 22.1491C110.643 22.1491 111.01 22.0687 111.343 21.9079C111.676 21.747 111.941 21.5288 112.136 21.253C112.331 20.9773 112.429 20.6672 112.429 20.3225V20.0985H110.775C110.533 20.0985 110.298 20.11 110.068 20.133C109.85 20.1559 109.649 20.2019 109.465 20.2708C109.293 20.3283 109.155 20.4259 109.051 20.5638C108.948 20.7016 108.896 20.8854 108.896 21.1152C108.896 21.3449 108.954 21.5402 109.069 21.7011C109.195 21.8504 109.362 21.9653 109.568 22.0457C109.775 22.1146 109.999 22.1491 110.24 22.1491Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ q(
          "path",
          {
            d: "M120.672 24.0619C119.742 24.0619 118.943 23.8723 118.277 23.4932C117.622 23.1141 117.122 22.5799 116.778 21.8906C116.433 21.1899 116.261 20.3685 116.261 19.4264C116.261 18.4729 116.439 17.6458 116.795 16.945C117.151 16.2328 117.662 15.6814 118.328 15.2908C119.006 14.9002 119.822 14.7049 120.775 14.7049C121.511 14.7049 122.165 14.837 122.74 15.1012C123.314 15.3654 123.774 15.7445 124.118 16.2385C124.475 16.7325 124.681 17.3414 124.739 18.0651H122.378C122.275 17.663 122.074 17.3701 121.775 17.1863C121.488 17.0025 121.143 16.9106 120.741 16.9106C120.224 16.9106 119.81 17.0369 119.5 17.2897C119.202 17.5424 118.983 17.8641 118.845 18.2547C118.719 18.6453 118.656 19.0359 118.656 19.4264C118.656 19.8515 118.725 20.2536 118.863 20.6327C119.001 21.0003 119.219 21.3047 119.517 21.546C119.828 21.7757 120.23 21.8906 120.724 21.8906C121.137 21.8906 121.499 21.7987 121.809 21.6149C122.12 21.4196 122.321 21.1209 122.412 20.7188H124.825C124.768 21.4656 124.543 22.0859 124.153 22.5799C123.762 23.0739 123.263 23.4473 122.654 23.7C122.056 23.9412 121.396 24.0619 120.672 24.0619Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ q(
          "path",
          {
            d: "M130.434 24.0619C129.481 24.0619 128.671 23.8723 128.005 23.4932C127.338 23.1141 126.827 22.5799 126.471 21.8906C126.115 21.1899 125.937 20.3742 125.937 19.4437C125.937 18.5017 126.121 17.6803 126.488 16.9795C126.856 16.2672 127.373 15.7101 128.039 15.308C128.717 14.9059 129.515 14.7049 130.434 14.7049C131.124 14.7049 131.727 14.8198 132.244 15.0495C132.772 15.2793 133.214 15.6009 133.571 16.0145C133.938 16.4281 134.208 16.9106 134.381 17.462C134.564 18.0019 134.65 18.5878 134.639 19.2197C134.639 19.3805 134.633 19.5356 134.622 19.6849C134.61 19.8343 134.587 19.9836 134.553 20.133H128.332C128.367 20.4776 128.464 20.7935 128.625 21.0807C128.786 21.3679 129.01 21.5977 129.297 21.77C129.596 21.9308 129.963 22.0113 130.4 22.0113C130.687 22.0113 130.951 21.9825 131.193 21.9251C131.434 21.8562 131.641 21.7528 131.813 21.6149C131.985 21.4771 132.106 21.3162 132.175 21.1324H134.553C134.403 21.8102 134.122 22.3674 133.708 22.8039C133.306 23.2405 132.818 23.5621 132.244 23.7689C131.669 23.9642 131.066 24.0619 130.434 24.0619ZM128.384 18.4442H132.33C132.318 18.134 132.238 17.8468 132.089 17.5826C131.951 17.3069 131.738 17.0886 131.451 16.9278C131.175 16.7555 130.819 16.6693 130.383 16.6693C129.946 16.6693 129.579 16.7555 129.28 16.9278C128.993 17.1001 128.774 17.3241 128.625 17.5999C128.487 17.8641 128.407 18.1455 128.384 18.4442Z",
            fill: "currentColor"
          }
        )
      ] }),
      /* @__PURE__ */ de("defs", { children: [
        /* @__PURE__ */ q("clipPath", { id: "clip0_22005_7547", children: /* @__PURE__ */ q("rect", { width: "135", height: "36", fill: "white" }) }),
        /* @__PURE__ */ q("clipPath", { id: "clip1_22005_7547", children: /* @__PURE__ */ q("rect", { width: "36", height: "36", fill: "white" }) })
      ] })
    ]
  }
);
var Ae = { exports: {} }, Se = { exports: {} }, st = {}, gr;
function yn() {
  return gr || (gr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(t, a) {
      for (var o in a) Object.defineProperty(t, o, {
        enumerable: !0,
        get: a[o]
      });
    }
    e(n, {
      assign: function() {
        return r;
      },
      searchParamsToUrlQuery: function() {
        return i;
      },
      urlQueryToSearchParams: function() {
        return s;
      }
    });
    function i(t) {
      const a = {};
      for (const [o, u] of t.entries()) {
        const _ = a[o];
        typeof _ > "u" ? a[o] = u : Array.isArray(_) ? _.push(u) : a[o] = [
          _,
          u
        ];
      }
      return a;
    }
    function f(t) {
      return typeof t == "string" ? t : typeof t == "number" && !isNaN(t) || typeof t == "boolean" ? String(t) : "";
    }
    function s(t) {
      const a = new URLSearchParams();
      for (const [o, u] of Object.entries(t))
        if (Array.isArray(u))
          for (const _ of u)
            a.append(o, f(_));
        else
          a.set(o, f(u));
      return a;
    }
    function r(t, ...a) {
      for (const o of a) {
        for (const u of o.keys())
          t.delete(u);
        for (const [u, _] of o.entries())
          t.append(u, _);
      }
      return t;
    }
  })(st)), st;
}
var ut = {}, mr;
function bn() {
  return mr || (mr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(o, u) {
      for (var _ in u) Object.defineProperty(o, _, {
        enumerable: !0,
        get: u[_]
      });
    }
    e(n, {
      formatUrl: function() {
        return r;
      },
      formatWithValidation: function() {
        return a;
      },
      urlObjectKeys: function() {
        return t;
      }
    });
    const f = /* @__PURE__ */ (/* @__PURE__ */ ke())._(yn()), s = /https?|ftp|gopher|file/;
    function r(o) {
      let { auth: u, hostname: _ } = o, m = o.protocol || "", E = o.pathname || "", d = o.hash || "", R = o.query || "", p = !1;
      u = u ? encodeURIComponent(u).replace(/%3A/i, ":") + "@" : "", o.host ? p = u + o.host : _ && (p = u + (~_.indexOf(":") ? `[${_}]` : _), o.port && (p += ":" + o.port)), R && typeof R == "object" && (R = String(f.urlQueryToSearchParams(R)));
      let c = o.search || R && `?${R}` || "";
      return m && !m.endsWith(":") && (m += ":"), o.slashes || (!m || s.test(m)) && p !== !1 ? (p = "//" + (p || ""), E && E[0] !== "/" && (E = "/" + E)) : p || (p = ""), d && d[0] !== "#" && (d = "#" + d), c && c[0] !== "?" && (c = "?" + c), E = E.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${m}${p}${E}${c}${d}`;
    }
    const t = [
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
    function a(o) {
      return process.env.NODE_ENV === "development" && o !== null && typeof o == "object" && Object.keys(o).forEach((u) => {
        t.includes(u) || console.warn(`Unknown key passed via urlObject into url.format: ${u}`);
      }), r(o);
    }
  })(ut)), ut;
}
var ct = {}, Er;
function bo() {
  return Er || (Er = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "omit", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i, f) {
      const s = {};
      return Object.keys(i).forEach((r) => {
        f.includes(r) || (s[r] = i[r]);
      }), s;
    }
  })(ct)), ct;
}
var lt = {}, Rr;
function $e() {
  return Rr || (Rr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(C, g) {
      for (var A in g) Object.defineProperty(C, A, {
        enumerable: !0,
        get: g[A]
      });
    }
    e(n, {
      DecodeError: function() {
        return R;
      },
      MiddlewareNotFoundError: function() {
        return y;
      },
      MissingStaticPage: function() {
        return l;
      },
      NormalizeError: function() {
        return p;
      },
      PageNotFoundError: function() {
        return c;
      },
      SP: function() {
        return E;
      },
      ST: function() {
        return d;
      },
      WEB_VITALS: function() {
        return i;
      },
      execOnce: function() {
        return f;
      },
      getDisplayName: function() {
        return o;
      },
      getLocationOrigin: function() {
        return t;
      },
      getURL: function() {
        return a;
      },
      isAbsoluteUrl: function() {
        return r;
      },
      isResSent: function() {
        return u;
      },
      loadGetInitialProps: function() {
        return m;
      },
      normalizeRepeatedSlashes: function() {
        return _;
      },
      stringifyError: function() {
        return h;
      }
    });
    const i = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function f(C) {
      let g = !1, A;
      return (...S) => (g || (g = !0, A = C(...S)), A);
    }
    const s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, r = (C) => s.test(C);
    function t() {
      const { protocol: C, hostname: g, port: A } = window.location;
      return `${C}//${g}${A ? ":" + A : ""}`;
    }
    function a() {
      const { href: C } = window.location, g = t();
      return C.substring(g.length);
    }
    function o(C) {
      return typeof C == "string" ? C : C.displayName || C.name || "Unknown";
    }
    function u(C) {
      return C.finished || C.headersSent;
    }
    function _(C) {
      const g = C.split("?");
      return g[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (g[1] ? `?${g.slice(1).join("?")}` : "");
    }
    async function m(C, g) {
      if (process.env.NODE_ENV !== "production" && C.prototype?.getInitialProps) {
        const T = `"${o(C)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
        throw Object.defineProperty(new Error(T), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: !1,
          configurable: !0
        });
      }
      const A = g.res || g.ctx && g.ctx.res;
      if (!C.getInitialProps)
        return g.ctx && g.Component ? {
          pageProps: await m(g.Component, g.ctx)
        } : {};
      const S = await C.getInitialProps(g);
      if (A && u(A))
        return S;
      if (!S) {
        const T = `"${o(C)}.getInitialProps()" should resolve to an object. But found "${S}" instead.`;
        throw Object.defineProperty(new Error(T), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: !1,
          configurable: !0
        });
      }
      return process.env.NODE_ENV !== "production" && Object.keys(S).length === 0 && !g.ctx && console.warn(`${o(C)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`), S;
    }
    const E = typeof performance < "u", d = E && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((C) => typeof performance[C] == "function");
    class R extends Error {
    }
    class p extends Error {
    }
    class c extends Error {
      constructor(g) {
        super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${g}`;
      }
    }
    class l extends Error {
      constructor(g, A) {
        super(), this.message = `Failed to load static file for page: ${g} ${A}`;
      }
    }
    class y extends Error {
      constructor() {
        super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
      }
    }
    function h(C) {
      return JSON.stringify({
        message: C.message,
        stack: C.stack
      });
    }
  })(lt)), lt;
}
var we = { exports: {} }, ft = {}, vr;
function Cn() {
  return vr || (vr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "removeTrailingSlash", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i) {
      return i.replace(/\/$/, "") || "/";
    }
  })(ft)), ft;
}
var dt = {}, yr;
function zt() {
  return yr || (yr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "parsePath", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i) {
      const f = i.indexOf("#"), s = i.indexOf("?"), r = s > -1 && (f < 0 || s < f);
      return r || f > -1 ? {
        pathname: i.substring(0, r ? s : f),
        query: r ? i.substring(s, f > -1 ? f : void 0) : "",
        hash: f > -1 ? i.slice(f) : ""
      } : {
        pathname: i,
        query: "",
        hash: ""
      };
    }
  })(dt)), dt;
}
var br;
function qe() {
  return br || (br = 1, (function(n, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizePathTrailingSlash", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const i = Cn(), f = zt(), s = (r) => {
      if (!r.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH)
        return r;
      const { pathname: t, query: a, hash: o } = (0, f.parsePath)(r);
      return process.env.__NEXT_TRAILING_SLASH ? /\.[^/]+\/?$/.test(t) ? `${(0, i.removeTrailingSlash)(t)}${a}${o}` : t.endsWith("/") ? `${t}${a}${o}` : `${t}/${a}${o}` : `${(0, i.removeTrailingSlash)(t)}${a}${o}`;
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(we, we.exports)), we.exports;
}
var pt = {}, Te = { exports: {} }, ht = {}, Cr;
function Pn() {
  return Cr || (Cr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "pathHasPrefix", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const e = zt();
    function i(f, s) {
      if (typeof f != "string")
        return !1;
      const { pathname: r } = (0, e.parsePath)(f);
      return r === s || r.startsWith(s + "/");
    }
  })(ht)), ht;
}
var Pr;
function Co() {
  return Pr || (Pr = 1, (function(n, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "hasBasePath", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const i = Pn(), f = process.env.__NEXT_ROUTER_BASEPATH || "";
    function s(r) {
      return (0, i.pathHasPrefix)(r, f);
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(Te, Te.exports)), Te.exports;
}
var Or;
function On() {
  return Or || (Or = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "isLocalURL", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const e = $e(), i = Co();
    function f(s) {
      if (!(0, e.isAbsoluteUrl)(s)) return !0;
      try {
        const r = (0, e.getLocationOrigin)(), t = new URL(s, r);
        return t.origin === r && (0, i.hasBasePath)(t.pathname);
      } catch {
        return !1;
      }
    }
  })(pt)), pt;
}
var _t = {}, gt = {}, Ar;
function Po() {
  return Ar || (Ar = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(r, t) {
      for (var a in t) Object.defineProperty(r, a, {
        enumerable: !0,
        get: t[a]
      });
    }
    e(n, {
      getSortedRouteObjects: function() {
        return s;
      },
      getSortedRoutes: function() {
        return f;
      }
    });
    class i {
      insert(t) {
        this._insert(t.split("/").filter(Boolean), [], !1);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(t = "/") {
        const a = [
          ...this.children.keys()
        ].sort();
        this.slugName !== null && a.splice(a.indexOf("[]"), 1), this.restSlugName !== null && a.splice(a.indexOf("[...]"), 1), this.optionalRestSlugName !== null && a.splice(a.indexOf("[[...]]"), 1);
        const o = a.map((u) => this.children.get(u)._smoosh(`${t}${u}/`)).reduce((u, _) => [
          ...u,
          ..._
        ], []);
        if (this.slugName !== null && o.push(...this.children.get("[]")._smoosh(`${t}[${this.slugName}]/`)), !this.placeholder) {
          const u = t === "/" ? "/" : t.slice(0, -1);
          if (this.optionalRestSlugName != null)
            throw Object.defineProperty(new Error(`You cannot define a route with the same specificity as a optional catch-all route ("${u}" and "${u}[[...${this.optionalRestSlugName}]]").`), "__NEXT_ERROR_CODE", {
              value: "E458",
              enumerable: !1,
              configurable: !0
            });
          o.unshift(u);
        }
        return this.restSlugName !== null && o.push(...this.children.get("[...]")._smoosh(`${t}[...${this.restSlugName}]/`)), this.optionalRestSlugName !== null && o.push(...this.children.get("[[...]]")._smoosh(`${t}[[...${this.optionalRestSlugName}]]/`)), o;
      }
      _insert(t, a, o) {
        if (t.length === 0) {
          this.placeholder = !1;
          return;
        }
        if (o)
          throw Object.defineProperty(new Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
            value: "E392",
            enumerable: !1,
            configurable: !0
          });
        let u = t[0];
        if (u.startsWith("[") && u.endsWith("]")) {
          let E = function(d, R) {
            if (d !== null && d !== R)
              throw Object.defineProperty(new Error(`You cannot use different slug names for the same dynamic path ('${d}' !== '${R}').`), "__NEXT_ERROR_CODE", {
                value: "E337",
                enumerable: !1,
                configurable: !0
              });
            a.forEach((p) => {
              if (p === R)
                throw Object.defineProperty(new Error(`You cannot have the same slug name "${R}" repeat within a single dynamic path`), "__NEXT_ERROR_CODE", {
                  value: "E247",
                  enumerable: !1,
                  configurable: !0
                });
              if (p.replace(/\W/g, "") === u.replace(/\W/g, ""))
                throw Object.defineProperty(new Error(`You cannot have the slug names "${p}" and "${R}" differ only by non-word symbols within a single dynamic path`), "__NEXT_ERROR_CODE", {
                  value: "E499",
                  enumerable: !1,
                  configurable: !0
                });
            }), a.push(R);
          }, _ = u.slice(1, -1), m = !1;
          if (_.startsWith("[") && _.endsWith("]") && (_ = _.slice(1, -1), m = !0), _.startsWith("…"))
            throw Object.defineProperty(new Error(`Detected a three-dot character ('…') at ('${_}'). Did you mean ('...')?`), "__NEXT_ERROR_CODE", {
              value: "E147",
              enumerable: !1,
              configurable: !0
            });
          if (_.startsWith("...") && (_ = _.substring(3), o = !0), _.startsWith("[") || _.endsWith("]"))
            throw Object.defineProperty(new Error(`Segment names may not start or end with extra brackets ('${_}').`), "__NEXT_ERROR_CODE", {
              value: "E421",
              enumerable: !1,
              configurable: !0
            });
          if (_.startsWith("."))
            throw Object.defineProperty(new Error(`Segment names may not start with erroneous periods ('${_}').`), "__NEXT_ERROR_CODE", {
              value: "E288",
              enumerable: !1,
              configurable: !0
            });
          if (o)
            if (m) {
              if (this.restSlugName != null)
                throw Object.defineProperty(new Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${t[0]}" ).`), "__NEXT_ERROR_CODE", {
                  value: "E299",
                  enumerable: !1,
                  configurable: !0
                });
              E(this.optionalRestSlugName, _), this.optionalRestSlugName = _, u = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null)
                throw Object.defineProperty(new Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${t[0]}").`), "__NEXT_ERROR_CODE", {
                  value: "E300",
                  enumerable: !1,
                  configurable: !0
                });
              E(this.restSlugName, _), this.restSlugName = _, u = "[...]";
            }
          else {
            if (m)
              throw Object.defineProperty(new Error(`Optional route parameters are not yet supported ("${t[0]}").`), "__NEXT_ERROR_CODE", {
                value: "E435",
                enumerable: !1,
                configurable: !0
              });
            E(this.slugName, _), this.slugName = _, u = "[]";
          }
        }
        this.children.has(u) || this.children.set(u, new i()), this.children.get(u)._insert(t.slice(1), a, o);
      }
      constructor() {
        this.placeholder = !0, this.children = /* @__PURE__ */ new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
      }
    }
    function f(r) {
      const t = new i();
      return r.forEach((a) => t.insert(a)), t.smoosh();
    }
    function s(r, t) {
      const a = {}, o = [];
      for (let _ = 0; _ < r.length; _++) {
        const m = t(r[_]);
        a[m] = _, o[_] = m;
      }
      return f(o).map((_) => r[a[_]]);
    }
  })(gt)), gt;
}
var mt = {}, Et = {}, Rt = {}, vt = {}, Sr;
function Oo() {
  return Sr || (Sr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "ensureLeadingSlash", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i) {
      return i.startsWith("/") ? i : `/${i}`;
    }
  })(vt)), vt;
}
var yt = {}, wr;
function An() {
  return wr || (wr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(m, E) {
      for (var d in E) Object.defineProperty(m, d, {
        enumerable: !0,
        get: E[d]
      });
    }
    e(n, {
      DEFAULT_SEGMENT_KEY: function() {
        return u;
      },
      NOT_FOUND_SEGMENT_KEY: function() {
        return _;
      },
      PAGE_SEGMENT_KEY: function() {
        return o;
      },
      addSearchParamsIfPageSegment: function() {
        return r;
      },
      computeSelectedLayoutSegment: function() {
        return t;
      },
      getSegmentValue: function() {
        return i;
      },
      getSelectedLayoutSegmentPath: function() {
        return a;
      },
      isGroupSegment: function() {
        return f;
      },
      isParallelRouteSegment: function() {
        return s;
      }
    });
    function i(m) {
      return Array.isArray(m) ? m[1] : m;
    }
    function f(m) {
      return m[0] === "(" && m.endsWith(")");
    }
    function s(m) {
      return m.startsWith("@") && m !== "@children";
    }
    function r(m, E) {
      if (m.includes(o)) {
        const R = JSON.stringify(E);
        return R !== "{}" ? o + "?" + R : o;
      }
      return m;
    }
    function t(m, E) {
      if (!m || m.length === 0)
        return null;
      const d = E === "children" ? m[0] : m[m.length - 1];
      return d === u ? null : d;
    }
    function a(m, E, d = !0, R = []) {
      let p;
      if (d)
        p = m[1][E];
      else {
        const y = m[1];
        p = y.children ?? Object.values(y)[0];
      }
      if (!p) return R;
      const c = p[0];
      let l = i(c);
      return !l || l.startsWith(o) ? R : (R.push(l), a(p, E, !1, R));
    }
    const o = "__PAGE__", u = "__DEFAULT__", _ = "/_not-found";
  })(yt)), yt;
}
var Tr;
function Ao() {
  return Tr || (Tr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(t, a) {
      for (var o in a) Object.defineProperty(t, o, {
        enumerable: !0,
        get: a[o]
      });
    }
    e(n, {
      normalizeAppPath: function() {
        return s;
      },
      normalizeRscURL: function() {
        return r;
      }
    });
    const i = Oo(), f = An();
    function s(t) {
      return (0, i.ensureLeadingSlash)(t.split("/").reduce((a, o, u, _) => !o || (0, f.isGroupSegment)(o) || o[0] === "@" || (o === "page" || o === "route") && u === _.length - 1 ? a : `${a}/${o}`, ""));
    }
    function r(t) {
      return t.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
  })(Rt)), Rt;
}
var Nr;
function Ue() {
  return Nr || (Nr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(t, a) {
      for (var o in a) Object.defineProperty(t, o, {
        enumerable: !0,
        get: a[o]
      });
    }
    e(n, {
      INTERCEPTION_ROUTE_MARKERS: function() {
        return f;
      },
      extractInterceptionRouteInformation: function() {
        return r;
      },
      isInterceptionRouteAppPath: function() {
        return s;
      }
    });
    const i = Ao(), f = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function s(t) {
      return t.split("/").find((a) => f.find((o) => a.startsWith(o))) !== void 0;
    }
    function r(t) {
      let a, o, u;
      for (const _ of t.split("/"))
        if (o = f.find((m) => _.startsWith(m)), o) {
          [a, u] = t.split(o, 2);
          break;
        }
      if (!a || !o || !u)
        throw Object.defineProperty(new Error(`Invalid interception route: ${t}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
          value: "E269",
          enumerable: !1,
          configurable: !0
        });
      switch (a = (0, i.normalizeAppPath)(a), o) {
        case "(.)":
          a === "/" ? u = `/${u}` : u = a + "/" + u;
          break;
        case "(..)":
          if (a === "/")
            throw Object.defineProperty(new Error(`Invalid interception route: ${t}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
              value: "E207",
              enumerable: !1,
              configurable: !0
            });
          u = a.split("/").slice(0, -1).concat(u).join("/");
          break;
        case "(...)":
          u = "/" + u;
          break;
        case "(..)(..)":
          const _ = a.split("/");
          if (_.length <= 2)
            throw Object.defineProperty(new Error(`Invalid interception route: ${t}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
              value: "E486",
              enumerable: !1,
              configurable: !0
            });
          u = _.slice(0, -2).concat(u).join("/");
          break;
        default:
          throw Object.defineProperty(new Error("Invariant: unexpected marker"), "__NEXT_ERROR_CODE", {
            value: "E112",
            enumerable: !1,
            configurable: !0
          });
      }
      return {
        interceptingRoute: a,
        interceptedRoute: u
      };
    }
  })(Et)), Et;
}
var xr;
function So() {
  return xr || (xr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "isDynamicRoute", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const e = Ue(), i = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/, f = /\/\[[^/]+\](?=\/|$)/;
    function s(r, t = !0) {
      return (0, e.isInterceptionRouteAppPath)(r) && (r = (0, e.extractInterceptionRouteInformation)(r).interceptedRoute), t ? f.test(r) : i.test(r);
    }
  })(mt)), mt;
}
var Ir;
function wo() {
  return Ir || (Ir = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(s, r) {
      for (var t in r) Object.defineProperty(s, t, {
        enumerable: !0,
        get: r[t]
      });
    }
    e(n, {
      getSortedRouteObjects: function() {
        return i.getSortedRouteObjects;
      },
      getSortedRoutes: function() {
        return i.getSortedRoutes;
      },
      isDynamicRoute: function() {
        return f.isDynamicRoute;
      }
    });
    const i = Po(), f = So();
  })(_t)), _t;
}
var bt = {}, Ct = {}, Pt = {}, Ot = { exports: {} }, Lr;
function To() {
  return Lr || (Lr = 1, (() => {
    typeof __nccwpck_require__ < "u" && (__nccwpck_require__.ab = __dirname + "/");
    var n = {};
    (() => {
      var e = n;
      Object.defineProperty(e, "__esModule", { value: !0 }), e.pathToRegexp = e.tokensToRegexp = e.regexpToFunction = e.match = e.tokensToFunction = e.compile = e.parse = void 0;
      function i(p) {
        for (var c = [], l = 0; l < p.length; ) {
          var y = p[l];
          if (y === "*" || y === "+" || y === "?") {
            c.push({ type: "MODIFIER", index: l, value: p[l++] });
            continue;
          }
          if (y === "\\") {
            c.push({ type: "ESCAPED_CHAR", index: l++, value: p[l++] });
            continue;
          }
          if (y === "{") {
            c.push({ type: "OPEN", index: l, value: p[l++] });
            continue;
          }
          if (y === "}") {
            c.push({ type: "CLOSE", index: l, value: p[l++] });
            continue;
          }
          if (y === ":") {
            for (var h = "", C = l + 1; C < p.length; ) {
              var g = p.charCodeAt(C);
              if (g >= 48 && g <= 57 || g >= 65 && g <= 90 || g >= 97 && g <= 122 || g === 95) {
                h += p[C++];
                continue;
              }
              break;
            }
            if (!h) throw new TypeError("Missing parameter name at ".concat(l));
            c.push({ type: "NAME", index: l, value: h }), l = C;
            continue;
          }
          if (y === "(") {
            var A = 1, S = "", C = l + 1;
            if (p[C] === "?")
              throw new TypeError('Pattern cannot start with "?" at '.concat(C));
            for (; C < p.length; ) {
              if (p[C] === "\\") {
                S += p[C++] + p[C++];
                continue;
              }
              if (p[C] === ")") {
                if (A--, A === 0) {
                  C++;
                  break;
                }
              } else if (p[C] === "(" && (A++, p[C + 1] !== "?"))
                throw new TypeError("Capturing groups are not allowed at ".concat(C));
              S += p[C++];
            }
            if (A) throw new TypeError("Unbalanced pattern at ".concat(l));
            if (!S) throw new TypeError("Missing pattern at ".concat(l));
            c.push({ type: "PATTERN", index: l, value: S }), l = C;
            continue;
          }
          c.push({ type: "CHAR", index: l, value: p[l++] });
        }
        return c.push({ type: "END", index: l, value: "" }), c;
      }
      function f(p, c) {
        c === void 0 && (c = {});
        for (var l = i(p), y = c.prefixes, h = y === void 0 ? "./" : y, C = c.delimiter, g = C === void 0 ? "/#?" : C, A = [], S = 0, T = 0, j = "", v = function(B) {
          if (T < l.length && l[T].type === B) return l[T++].value;
        }, w = function(B) {
          var Y = v(B);
          if (Y !== void 0) return Y;
          var Q = l[T], O = Q.type, ae = Q.index;
          throw new TypeError("Unexpected ".concat(O, " at ").concat(ae, ", expected ").concat(B));
        }, x = function() {
          for (var B = "", Y; Y = v("CHAR") || v("ESCAPED_CHAR"); )
            B += Y;
          return B;
        }, G = function(B) {
          for (var Y = 0, Q = g; Y < Q.length; Y++) {
            var O = Q[Y];
            if (B.indexOf(O) > -1) return !0;
          }
          return !1;
        }, k = function(B) {
          var Y = A[A.length - 1], Q = B || (Y && typeof Y == "string" ? Y : "");
          if (Y && !Q)
            throw new TypeError('Must have text between two parameters, missing text after "'.concat(Y.name, '"'));
          return !Q || G(Q) ? "[^".concat(o(g), "]+?") : "(?:(?!".concat(o(Q), ")[^").concat(o(g), "])+?");
        }; T < l.length; ) {
          var D = v("CHAR"), X = v("NAME"), J = v("PATTERN");
          if (X || J) {
            var z = D || "";
            h.indexOf(z) === -1 && (j += z, z = ""), j && (A.push(j), j = ""), A.push({ name: X || S++, prefix: z, suffix: "", pattern: J || k(z), modifier: v("MODIFIER") || "" });
            continue;
          }
          var $ = D || v("ESCAPED_CHAR");
          if ($) {
            j += $;
            continue;
          }
          j && (A.push(j), j = "");
          var W = v("OPEN");
          if (W) {
            var z = x(), Z = v("NAME") || "", ee = v("PATTERN") || "", te = x();
            w("CLOSE"), A.push({ name: Z || (ee ? S++ : ""), pattern: Z && !ee ? k(z) : ee, prefix: z, suffix: te, modifier: v("MODIFIER") || "" });
            continue;
          }
          w("END");
        }
        return A;
      }
      e.parse = f;
      function s(p, c) {
        return r(f(p, c), c);
      }
      e.compile = s;
      function r(p, c) {
        c === void 0 && (c = {});
        var l = u(c), y = c.encode, h = y === void 0 ? function(S) {
          return S;
        } : y, C = c.validate, g = C === void 0 ? !0 : C, A = p.map((function(S) {
          if (typeof S == "object")
            return new RegExp("^(?:".concat(S.pattern, ")$"), l);
        }));
        return function(S) {
          for (var T = "", j = 0; j < p.length; j++) {
            var v = p[j];
            if (typeof v == "string") {
              T += v;
              continue;
            }
            var w = S ? S[v.name] : void 0, x = v.modifier === "?" || v.modifier === "*", G = v.modifier === "*" || v.modifier === "+";
            if (Array.isArray(w)) {
              if (!G)
                throw new TypeError('Expected "'.concat(v.name, '" to not repeat, but got an array'));
              if (w.length === 0) {
                if (x) continue;
                throw new TypeError('Expected "'.concat(v.name, '" to not be empty'));
              }
              for (var k = 0; k < w.length; k++) {
                var D = h(w[k], v);
                if (g && !A[j].test(D))
                  throw new TypeError('Expected all "'.concat(v.name, '" to match "').concat(v.pattern, '", but got "').concat(D, '"'));
                T += v.prefix + D + v.suffix;
              }
              continue;
            }
            if (typeof w == "string" || typeof w == "number") {
              var D = h(String(w), v);
              if (g && !A[j].test(D))
                throw new TypeError('Expected "'.concat(v.name, '" to match "').concat(v.pattern, '", but got "').concat(D, '"'));
              T += v.prefix + D + v.suffix;
              continue;
            }
            if (!x) {
              var X = G ? "an array" : "a string";
              throw new TypeError('Expected "'.concat(v.name, '" to be ').concat(X));
            }
          }
          return T;
        };
      }
      e.tokensToFunction = r;
      function t(p, c) {
        var l = [], y = R(p, l, c);
        return a(y, l, c);
      }
      e.match = t;
      function a(p, c, l) {
        l === void 0 && (l = {});
        var y = l.decode, h = y === void 0 ? function(C) {
          return C;
        } : y;
        return function(C) {
          var g = p.exec(C);
          if (!g) return !1;
          for (var A = g[0], S = g.index, T = /* @__PURE__ */ Object.create(null), j = function(w) {
            if (g[w] === void 0) return "continue";
            var x = c[w - 1];
            x.modifier === "*" || x.modifier === "+" ? T[x.name] = g[w].split(x.prefix + x.suffix).map((function(G) {
              return h(G, x);
            })) : T[x.name] = h(g[w], x);
          }, v = 1; v < g.length; v++)
            j(v);
          return { path: A, index: S, params: T };
        };
      }
      e.regexpToFunction = a;
      function o(p) {
        return p.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function u(p) {
        return p && p.sensitive ? "" : "i";
      }
      function _(p, c) {
        if (!c) return p;
        for (var l = /\((?:\?<(.*?)>)?(?!\?)/g, y = 0, h = l.exec(p.source); h; )
          c.push({ name: h[1] || y++, prefix: "", suffix: "", modifier: "", pattern: "" }), h = l.exec(p.source);
        return p;
      }
      function m(p, c, l) {
        var y = p.map((function(h) {
          return R(h, c, l).source;
        }));
        return new RegExp("(?:".concat(y.join("|"), ")"), u(l));
      }
      function E(p, c, l) {
        return d(f(p, l), c, l);
      }
      function d(p, c, l) {
        l === void 0 && (l = {});
        for (var y = l.strict, h = y === void 0 ? !1 : y, C = l.start, g = C === void 0 ? !0 : C, A = l.end, S = A === void 0 ? !0 : A, T = l.encode, j = T === void 0 ? function(Y) {
          return Y;
        } : T, v = l.delimiter, w = v === void 0 ? "/#?" : v, x = l.endsWith, G = x === void 0 ? "" : x, k = "[".concat(o(G), "]|$"), D = "[".concat(o(w), "]"), X = g ? "^" : "", J = 0, z = p; J < z.length; J++) {
          var $ = z[J];
          if (typeof $ == "string")
            X += o(j($));
          else {
            var W = o(j($.prefix)), Z = o(j($.suffix));
            if ($.pattern)
              if (c && c.push($), W || Z)
                if ($.modifier === "+" || $.modifier === "*") {
                  var ee = $.modifier === "*" ? "?" : "";
                  X += "(?:".concat(W, "((?:").concat($.pattern, ")(?:").concat(Z).concat(W, "(?:").concat($.pattern, "))*)").concat(Z, ")").concat(ee);
                } else
                  X += "(?:".concat(W, "(").concat($.pattern, ")").concat(Z, ")").concat($.modifier);
              else {
                if ($.modifier === "+" || $.modifier === "*")
                  throw new TypeError('Can not repeat "'.concat($.name, '" without a prefix and suffix'));
                X += "(".concat($.pattern, ")").concat($.modifier);
              }
            else
              X += "(?:".concat(W).concat(Z, ")").concat($.modifier);
          }
        }
        if (S)
          h || (X += "".concat(D, "?")), X += l.endsWith ? "(?=".concat(k, ")") : "$";
        else {
          var te = p[p.length - 1], B = typeof te == "string" ? D.indexOf(te[te.length - 1]) > -1 : te === void 0;
          h || (X += "(?:".concat(D, "(?=").concat(k, "))?")), B || (X += "(?=".concat(D, "|").concat(k, ")"));
        }
        return new RegExp(X, u(l));
      }
      e.tokensToRegexp = d;
      function R(p, c, l) {
        return p instanceof RegExp ? _(p, c) : Array.isArray(p) ? m(p, c, l) : E(p, c, l);
      }
      e.pathToRegexp = R;
    })(), Ot.exports = n;
  })()), Ot.exports;
}
var At = {}, Mr;
function No() {
  return Mr || (Mr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(o, u) {
      for (var _ in u) Object.defineProperty(o, _, {
        enumerable: !0,
        get: u[_]
      });
    }
    e(n, {
      PARAM_SEPARATOR: function() {
        return i;
      },
      hasAdjacentParameterIssues: function() {
        return f;
      },
      normalizeAdjacentParameters: function() {
        return s;
      },
      normalizeTokensForRegexp: function() {
        return r;
      },
      stripNormalizedSeparators: function() {
        return t;
      },
      stripParameterSeparators: function() {
        return a;
      }
    });
    const i = "_NEXTSEP_";
    function f(o) {
      return typeof o != "string" ? !1 : !!(/\/\(\.{1,3}\):[^/\s]+/.test(o) || /:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(o));
    }
    function s(o) {
      let u = o;
      return u = u.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${i}:$2`), u = u.replace(/:([^:/\s)]+)(?=:)/g, `:$1${i}`), u;
    }
    function r(o) {
      return o.map((u) => typeof u == "object" && u !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
      "modifier" in u && // Only repeating modifiers (* or +) cause the validation error
      // Other modifiers like '?' (optional) are fine
      (u.modifier === "*" || u.modifier === "+") && // Token objects can have different shapes depending on route pattern
      "prefix" in u && "suffix" in u && // Both prefix and suffix must be empty strings
      // This is what causes the validation error in path-to-regexp
      u.prefix === "" && u.suffix === "" ? {
        ...u,
        prefix: "/"
      } : u);
    }
    function t(o) {
      return o.replace(new RegExp(`\\)${i}`, "g"), ")");
    }
    function a(o) {
      const u = {};
      for (const [_, m] of Object.entries(o))
        typeof m == "string" ? u[_] = m.replace(new RegExp(`^${i}`), "") : Array.isArray(m) ? u[_] = m.map((E) => typeof E == "string" ? E.replace(new RegExp(`^${i}`), "") : E) : u[_] = m;
      return u;
    }
  })(At)), At;
}
var jr;
function xo() {
  return jr || (jr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(o, u) {
      for (var _ in u) Object.defineProperty(o, _, {
        enumerable: !0,
        get: u[_]
      });
    }
    e(n, {
      safeCompile: function() {
        return r;
      },
      safePathToRegexp: function() {
        return s;
      },
      safeRegexpToFunction: function() {
        return t;
      },
      safeRouteMatcher: function() {
        return a;
      }
    });
    const i = To(), f = No();
    function s(o, u, _) {
      if (typeof o != "string")
        return (0, i.pathToRegexp)(o, u, _);
      const m = (0, f.hasAdjacentParameterIssues)(o), E = m ? (0, f.normalizeAdjacentParameters)(o) : o;
      try {
        return (0, i.pathToRegexp)(E, u, _);
      } catch (d) {
        if (!m)
          try {
            const R = (0, f.normalizeAdjacentParameters)(o);
            return (0, i.pathToRegexp)(R, u, _);
          } catch {
            throw d;
          }
        throw d;
      }
    }
    function r(o, u) {
      const _ = (0, f.hasAdjacentParameterIssues)(o), m = _ ? (0, f.normalizeAdjacentParameters)(o) : o;
      try {
        const E = (0, i.compile)(m, u);
        return _ ? (d) => (0, f.stripNormalizedSeparators)(E(d)) : E;
      } catch (E) {
        if (!_)
          try {
            const d = (0, f.normalizeAdjacentParameters)(o), R = (0, i.compile)(d, u);
            return (p) => (0, f.stripNormalizedSeparators)(R(p));
          } catch {
            throw E;
          }
        throw E;
      }
    }
    function t(o, u) {
      const _ = (0, i.regexpToFunction)(o, u || []);
      return (m) => {
        const E = _(m);
        return E ? {
          ...E,
          params: (0, f.stripParameterSeparators)(E.params)
        } : !1;
      };
    }
    function a(o) {
      return (u) => {
        const _ = o(u);
        return _ ? (0, f.stripParameterSeparators)(_) : !1;
      };
    }
  })(Pt)), Pt;
}
var Dr;
function Sn() {
  return Dr || (Dr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "getRouteMatcher", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const e = $e(), i = xo();
    function f({ re: s, groups: r }) {
      const t = (a) => {
        const o = s.exec(a);
        if (!o) return !1;
        const u = (m) => {
          try {
            return decodeURIComponent(m);
          } catch {
            throw Object.defineProperty(new e.DecodeError("failed to decode param"), "__NEXT_ERROR_CODE", {
              value: "E528",
              enumerable: !1,
              configurable: !0
            });
          }
        }, _ = {};
        for (const [m, E] of Object.entries(r)) {
          const d = o[E.pos];
          d !== void 0 && (E.repeat ? _[m] = d.split("/").map((R) => u(R)) : _[m] = u(d));
        }
        return _;
      };
      return (0, i.safeRouteMatcher)(t);
    }
  })(Ct)), Ct;
}
var St = {}, wt = {}, Hr;
function Io() {
  return Hr || (Hr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(I, re) {
      for (var N in re) Object.defineProperty(I, N, {
        enumerable: !0,
        get: re[N]
      });
    }
    e(n, {
      ACTION_SUFFIX: function() {
        return d;
      },
      APP_DIR_ALIAS: function() {
        return $;
      },
      CACHE_ONE_YEAR: function() {
        return j;
      },
      DOT_NEXT_ALIAS: function() {
        return J;
      },
      ESLINT_DEFAULT_DIRS: function() {
        return ce;
      },
      GSP_NO_RETURNED_VALUE: function() {
        return ge;
      },
      GSSP_COMPONENT_MEMBER_ERROR: function() {
        return ie;
      },
      GSSP_NO_RETURNED_VALUE: function() {
        return F;
      },
      HTML_CONTENT_TYPE_HEADER: function() {
        return f;
      },
      INFINITE_CACHE: function() {
        return v;
      },
      INSTRUMENTATION_HOOK_FILENAME: function() {
        return D;
      },
      JSON_CONTENT_TYPE_HEADER: function() {
        return s;
      },
      MATCHED_PATH_HEADER: function() {
        return a;
      },
      MIDDLEWARE_FILENAME: function() {
        return w;
      },
      MIDDLEWARE_LOCATION_REGEXP: function() {
        return x;
      },
      NEXT_BODY_SUFFIX: function() {
        return c;
      },
      NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return T;
      },
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return y;
      },
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return h;
      },
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return S;
      },
      NEXT_CACHE_TAGS_HEADER: function() {
        return l;
      },
      NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return g;
      },
      NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return A;
      },
      NEXT_DATA_SUFFIX: function() {
        return R;
      },
      NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return t;
      },
      NEXT_META_SUFFIX: function() {
        return p;
      },
      NEXT_QUERY_PARAM_PREFIX: function() {
        return r;
      },
      NEXT_RESUME_HEADER: function() {
        return C;
      },
      NON_STANDARD_NODE_ENV: function() {
        return he;
      },
      PAGES_DIR_ALIAS: function() {
        return X;
      },
      PRERENDER_REVALIDATE_HEADER: function() {
        return o;
      },
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return u;
      },
      PROXY_FILENAME: function() {
        return G;
      },
      PROXY_LOCATION_REGEXP: function() {
        return k;
      },
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return O;
      },
      ROOT_DIR_ALIAS: function() {
        return z;
      },
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return Q;
      },
      RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return Y;
      },
      RSC_ACTION_PROXY_ALIAS: function() {
        return ee;
      },
      RSC_ACTION_VALIDATE_ALIAS: function() {
        return Z;
      },
      RSC_CACHE_WRAPPER_ALIAS: function() {
        return te;
      },
      RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
        return B;
      },
      RSC_MOD_REF_PROXY_ALIAS: function() {
        return W;
      },
      RSC_SEGMENTS_DIR_SUFFIX: function() {
        return _;
      },
      RSC_SEGMENT_SUFFIX: function() {
        return m;
      },
      RSC_SUFFIX: function() {
        return E;
      },
      SERVER_PROPS_EXPORT_ERROR: function() {
        return P;
      },
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return V;
      },
      SERVER_PROPS_SSG_CONFLICT: function() {
        return ue;
      },
      SERVER_RUNTIME: function() {
        return _e;
      },
      SSG_FALLBACK_EXPORT_ERROR: function() {
        return fe;
      },
      SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return ae;
      },
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return b;
      },
      TEXT_PLAIN_CONTENT_TYPE_HEADER: function() {
        return i;
      },
      UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return U;
      },
      WEBPACK_LAYERS: function() {
        return K;
      },
      WEBPACK_RESOURCE_QUERIES: function() {
        return oe;
      },
      WEB_SOCKET_MAX_RECONNECTIONS: function() {
        return le;
      }
    });
    const i = "text/plain", f = "text/html; charset=utf-8", s = "application/json; charset=utf-8", r = "nxtP", t = "nxtI", a = "x-matched-path", o = "x-prerender-revalidate", u = "x-prerender-revalidate-if-generated", _ = ".segments", m = ".segment.rsc", E = ".rsc", d = ".action", R = ".json", p = ".meta", c = ".body", l = "x-next-cache-tags", y = "x-next-revalidated-tags", h = "x-next-revalidate-tag-token", C = "next-resume", g = 128, A = 256, S = 1024, T = "_N_T_", j = 31536e3, v = 4294967294, w = "middleware", x = `(?:src/)?${w}`, G = "proxy", k = `(?:src/)?${G}`, D = "instrumentation", X = "private-next-pages", J = "private-dot-next", z = "private-next-root-dir", $ = "private-next-app-dir", W = "private-next-rsc-mod-ref-proxy", Z = "private-next-rsc-action-validate", ee = "private-next-rsc-server-reference", te = "private-next-rsc-cache-wrapper", B = "private-next-rsc-track-dynamic-import", Y = "private-next-rsc-action-encryption", Q = "private-next-rsc-action-client-wrapper", O = "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict", ae = "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps", V = "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.", ue = "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps", b = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props", P = "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export", ge = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?", F = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?", U = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.", ie = "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member", he = 'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env', fe = "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export", ce = [
      "app",
      "pages",
      "components",
      "lib",
      "src"
    ], _e = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    }, le = 12, L = {
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
    }, K = {
      ...L,
      GROUP: {
        builtinReact: [
          L.reactServerComponents,
          L.actionBrowser
        ],
        serverOnly: [
          L.reactServerComponents,
          L.actionBrowser,
          L.instrument,
          L.middleware
        ],
        neutralTarget: [
          // pages api
          L.apiNode,
          L.apiEdge
        ],
        clientOnly: [
          L.serverSideRendering,
          L.appPagesBrowser
        ],
        bundled: [
          L.reactServerComponents,
          L.actionBrowser,
          L.serverSideRendering,
          L.appPagesBrowser,
          L.shared,
          L.instrument,
          L.middleware
        ],
        appPages: [
          // app router pages and layouts
          L.reactServerComponents,
          L.serverSideRendering,
          L.appPagesBrowser,
          L.actionBrowser
        ]
      }
    }, oe = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
  })(wt)), wt;
}
var Tt = {}, kr;
function Lo() {
  return kr || (kr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "escapeStringRegexp", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const e = /[|\\{}()[\]^$+*?.-]/, i = /[|\\{}()[\]^$+*?.-]/g;
    function f(s) {
      return e.test(s) ? s.replace(i, "\\$&") : s;
    }
  })(Tt)), Tt;
}
var Nt = {}, xt = {}, $r;
function Vt() {
  return $r || ($r = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "InvariantError", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    class e extends Error {
      constructor(f, s) {
        super(`Invariant: ${f.endsWith(".") ? f : f + "."} This is a bug in Next.js.`, s), this.name = "InvariantError";
      }
    }
  })(xt)), xt;
}
var It = {}, qr;
function Mo() {
  return qr || (qr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "parseLoaderTree", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const e = An();
    function i(f) {
      const [s, r, t] = f, { layout: a, template: o } = t;
      let { page: u } = t;
      u = s === e.DEFAULT_SEGMENT_KEY ? t.defaultPage : u;
      const _ = a?.[1] || o?.[1] || u?.[1];
      return {
        page: u,
        segment: s,
        modules: t,
        /* it can be either layout / template / page */
        conventionPath: _,
        parallelRoutes: r
      };
    }
  })(It)), It;
}
var Lt = {}, Mt = {}, Ur;
function jo() {
  return Ur || (Ur = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(t, a) {
      for (var o in a) Object.defineProperty(t, o, {
        enumerable: !0,
        get: a[o]
      });
    }
    e(n, {
      getParamProperties: function() {
        return r;
      },
      getSegmentParam: function() {
        return f;
      },
      isCatchAll: function() {
        return s;
      }
    });
    const i = Ue();
    function f(t) {
      const a = i.INTERCEPTION_ROUTE_MARKERS.find((o) => t.startsWith(o));
      return a && (t = t.slice(a.length)), t.startsWith("[[...") && t.endsWith("]]") ? {
        // TODO-APP: Optional catchall does not currently work with parallel routes,
        // so for now aren't handling a potential interception marker.
        paramType: "optional-catchall",
        paramName: t.slice(5, -2)
      } : t.startsWith("[...") && t.endsWith("]") ? {
        paramType: a ? `catchall-intercepted-${a}` : "catchall",
        paramName: t.slice(4, -1)
      } : t.startsWith("[") && t.endsWith("]") ? {
        paramType: a ? `dynamic-intercepted-${a}` : "dynamic",
        paramName: t.slice(1, -1)
      } : null;
    }
    function s(t) {
      return t === "catchall" || t === "catchall-intercepted-(..)(..)" || t === "catchall-intercepted-(.)" || t === "catchall-intercepted-(..)" || t === "catchall-intercepted-(...)" || t === "optional-catchall";
    }
    function r(t) {
      let a = !1, o = !1;
      switch (t) {
        case "catchall":
        case "catchall-intercepted-(..)(..)":
        case "catchall-intercepted-(.)":
        case "catchall-intercepted-(..)":
        case "catchall-intercepted-(...)":
          a = !0;
          break;
        case "optional-catchall":
          a = !0, o = !0;
          break;
      }
      return {
        repeat: a,
        optional: o
      };
    }
  })(Mt)), Mt;
}
var Xr;
function Do() {
  return Xr || (Xr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(u, _) {
      for (var m in _) Object.defineProperty(u, m, {
        enumerable: !0,
        get: _[m]
      });
    }
    e(n, {
      isInterceptionAppRoute: function() {
        return a;
      },
      isNormalizedAppRoute: function() {
        return t;
      },
      parseAppRoute: function() {
        return o;
      },
      parseAppRouteSegment: function() {
        return r;
      }
    });
    const i = Vt(), f = jo(), s = Ue();
    function r(u) {
      if (u === "")
        return null;
      const _ = s.INTERCEPTION_ROUTE_MARKERS.find((E) => u.startsWith(E)), m = (0, f.getSegmentParam)(u);
      return m ? {
        type: "dynamic",
        name: u,
        param: m,
        interceptionMarker: _
      } : u.startsWith("(") && u.endsWith(")") ? {
        type: "route-group",
        name: u,
        interceptionMarker: _
      } : u.startsWith("@") ? {
        type: "parallel-route",
        name: u,
        interceptionMarker: _
      } : {
        type: "static",
        name: u,
        interceptionMarker: _
      };
    }
    function t(u) {
      return u.normalized;
    }
    function a(u) {
      return u.interceptionMarker !== void 0 && u.interceptingRoute !== void 0 && u.interceptedRoute !== void 0;
    }
    function o(u, _) {
      const m = u.split("/").filter(Boolean), E = [];
      let d, R, p;
      for (const l of m) {
        const y = r(l);
        if (y) {
          if (_ && (y.type === "route-group" || y.type === "parallel-route"))
            throw Object.defineProperty(new i.InvariantError(`${u} is being parsed as a normalized route, but it has a route group or parallel route segment.`), "__NEXT_ERROR_CODE", {
              value: "E923",
              enumerable: !1,
              configurable: !0
            });
          if (E.push(y), y.interceptionMarker) {
            const h = u.split(y.interceptionMarker);
            if (h.length !== 2)
              throw Object.defineProperty(new Error(`Invalid interception route: ${u}`), "__NEXT_ERROR_CODE", {
                value: "E924",
                enumerable: !1,
                configurable: !0
              });
            R = _ ? o(h[0], !0) : o(h[0], !1), p = _ ? o(h[1], !0) : o(h[1], !1), d = y.interceptionMarker;
          }
        }
      }
      const c = E.filter((l) => l.type === "dynamic");
      return {
        normalized: _,
        pathname: u,
        segments: E,
        dynamicSegments: c,
        interceptionMarker: d,
        interceptingRoute: R,
        interceptedRoute: p
      };
    }
  })(Lt)), Lt;
}
var jt = {}, Dt = {}, Fr;
function Ho() {
  return Fr || (Fr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "interceptionPrefixFromParamType", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i) {
      switch (i) {
        case "catchall-intercepted-(..)(..)":
        case "dynamic-intercepted-(..)(..)":
          return "(..)(..)";
        case "catchall-intercepted-(.)":
        case "dynamic-intercepted-(.)":
          return "(.)";
        case "catchall-intercepted-(..)":
        case "dynamic-intercepted-(..)":
          return "(..)";
        case "catchall-intercepted-(...)":
        case "dynamic-intercepted-(...)":
          return "(...)";
        default:
          return null;
      }
    }
  })(Dt)), Dt;
}
var Gr;
function ko() {
  return Gr || (Gr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "resolveParamValue", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const e = Vt(), i = Ho();
    function f(r, t, a) {
      return r.type === "dynamic" ? t[r.param.paramName] : (0, i.interceptionPrefixFromParamType)(a) === r.interceptionMarker ? r.name.replace(r.interceptionMarker, "") : r.name;
    }
    function s(r, t, a, o, u) {
      switch (t) {
        case "catchall":
        case "optional-catchall":
        case "catchall-intercepted-(..)(..)":
        case "catchall-intercepted-(.)":
        case "catchall-intercepted-(..)":
        case "catchall-intercepted-(...)":
          const _ = [];
          for (let m = a; m < o.segments.length; m++) {
            const E = o.segments[m];
            if (E.type === "static") {
              let d = E.name;
              const R = (0, i.interceptionPrefixFromParamType)(t);
              R && m === a && R === E.interceptionMarker && (d = d.replace(E.interceptionMarker, "")), _.push(d);
            } else {
              if (!u.hasOwnProperty(E.param.paramName)) {
                if (E.param.paramType === "optional-catchall")
                  break;
                return;
              }
              const d = u[E.param.paramName];
              Array.isArray(d) ? _.push(...d) : _.push(d);
            }
          }
          if (_.length > 0)
            return _;
          if (t === "optional-catchall")
            return;
          throw Object.defineProperty(new e.InvariantError(`Unexpected empty path segments match for a route "${o.pathname}" with param "${r}" of type "${t}"`), "__NEXT_ERROR_CODE", {
            value: "E931",
            enumerable: !1,
            configurable: !0
          });
        case "dynamic":
        case "dynamic-intercepted-(..)(..)":
        case "dynamic-intercepted-(.)":
        case "dynamic-intercepted-(..)":
        case "dynamic-intercepted-(...)":
          if (a < o.segments.length) {
            const m = o.segments[a];
            return m.type === "dynamic" && !u.hasOwnProperty(m.param.paramName) ? void 0 : f(m, u, t);
          }
          return;
      }
    }
  })(jt)), jt;
}
var Br;
function $o() {
  return Br || (Br = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(E, d) {
      for (var R in d) Object.defineProperty(E, R, {
        enumerable: !0,
        get: d[R]
      });
    }
    e(n, {
      PARAMETER_PATTERN: function() {
        return u;
      },
      getDynamicParam: function() {
        return o;
      },
      interpolateParallelRouteParams: function() {
        return a;
      },
      parseMatchedParameter: function() {
        return m;
      },
      parseParameter: function() {
        return _;
      }
    });
    const i = Vt(), f = Mo(), s = Do(), r = ko();
    function t(E, d, R) {
      let p = E[d];
      if (R?.has(d)) {
        const [c] = R.get(d);
        p = c;
      } else Array.isArray(p) ? p = p.map((c) => encodeURIComponent(c)) : typeof p == "string" && (p = encodeURIComponent(p));
      return p;
    }
    function a(E, d, R, p) {
      const c = structuredClone(d), l = [
        {
          tree: E,
          depth: 0
        }
      ], y = (0, s.parseAppRoute)(R, !0);
      for (; l.length > 0; ) {
        const { tree: h, depth: C } = l.pop(), { segment: g, parallelRoutes: A } = (0, f.parseLoaderTree)(h), S = (0, s.parseAppRouteSegment)(g);
        if (S?.type === "dynamic" && !c.hasOwnProperty(S.param.paramName) && // If the param is in the fallback route params, we don't need to
        // interpolate it because it's already marked as being unknown.
        !p?.has(S.param.paramName)) {
          const { paramName: j, paramType: v } = S.param, w = (0, r.resolveParamValue)(j, v, C, y, c);
          if (w !== void 0)
            c[j] = w;
          else if (v !== "optional-catchall")
            throw Object.defineProperty(new i.InvariantError(`Could not resolve param value for segment: ${j}`), "__NEXT_ERROR_CODE", {
              value: "E932",
              enumerable: !1,
              configurable: !0
            });
        }
        let T = C;
        S && S.type !== "route-group" && S.type !== "parallel-route" && T++;
        for (const j of Object.values(A))
          l.push({
            tree: j,
            depth: T
          });
      }
      return c;
    }
    function o(E, d, R, p) {
      let c = t(E, d, p);
      if (!c || c.length === 0) {
        if (R === "oc")
          return {
            param: d,
            value: null,
            type: R,
            treeSegment: [
              d,
              "",
              R
            ]
          };
        throw Object.defineProperty(new i.InvariantError(`Missing value for segment key: "${d}" with dynamic param type: ${R}`), "__NEXT_ERROR_CODE", {
          value: "E864",
          enumerable: !1,
          configurable: !0
        });
      }
      return {
        param: d,
        // The value that is passed to user code.
        value: c,
        // The value that is rendered in the router tree.
        treeSegment: [
          d,
          Array.isArray(c) ? c.join("/") : c,
          R
        ],
        type: R
      };
    }
    const u = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
    function _(E) {
      const d = E.match(u);
      return m(d ? d[2] : E);
    }
    function m(E) {
      const d = E.startsWith("[") && E.endsWith("]");
      d && (E = E.slice(1, -1));
      const R = E.startsWith("...");
      return R && (E = E.slice(3)), {
        key: E,
        repeat: R,
        optional: d
      };
    }
  })(Nt)), Nt;
}
var zr;
function wn() {
  return zr || (zr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    function e(R, p) {
      for (var c in p) Object.defineProperty(R, c, {
        enumerable: !0,
        get: p[c]
      });
    }
    e(n, {
      getNamedMiddlewareRegex: function() {
        return d;
      },
      getNamedRouteRegex: function() {
        return E;
      },
      getRouteRegex: function() {
        return o;
      }
    });
    const i = Io(), f = Ue(), s = Lo(), r = Cn(), t = $o();
    function a(R, p, c) {
      const l = {};
      let y = 1;
      const h = [];
      for (const C of (0, r.removeTrailingSlash)(R).slice(1).split("/")) {
        const g = f.INTERCEPTION_ROUTE_MARKERS.find((S) => C.startsWith(S)), A = C.match(t.PARAMETER_PATTERN);
        if (g && A && A[2]) {
          const { key: S, optional: T, repeat: j } = (0, t.parseMatchedParameter)(A[2]);
          l[S] = {
            pos: y++,
            repeat: j,
            optional: T
          }, h.push(`/${(0, s.escapeStringRegexp)(g)}([^/]+?)`);
        } else if (A && A[2]) {
          const { key: S, repeat: T, optional: j } = (0, t.parseMatchedParameter)(A[2]);
          l[S] = {
            pos: y++,
            repeat: T,
            optional: j
          }, c && A[1] && h.push(`/${(0, s.escapeStringRegexp)(A[1])}`);
          let v = T ? j ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          c && A[1] && (v = v.substring(1)), h.push(v);
        } else
          h.push(`/${(0, s.escapeStringRegexp)(C)}`);
        p && A && A[3] && h.push((0, s.escapeStringRegexp)(A[3]));
      }
      return {
        parameterizedRoute: h.join(""),
        groups: l
      };
    }
    function o(R, { includeSuffix: p = !1, includePrefix: c = !1, excludeOptionalTrailingSlash: l = !1 } = {}) {
      const { parameterizedRoute: y, groups: h } = a(R, p, c);
      let C = y;
      return l || (C += "(?:/)?"), {
        re: new RegExp(`^${C}$`),
        groups: h
      };
    }
    function u() {
      let R = 0;
      return () => {
        let p = "", c = ++R;
        for (; c > 0; )
          p += String.fromCharCode(97 + (c - 1) % 26), c = Math.floor((c - 1) / 26);
        return p;
      };
    }
    function _({ interceptionMarker: R, getSafeRouteKey: p, segment: c, routeKeys: l, keyPrefix: y, backreferenceDuplicateKeys: h }) {
      const { key: C, optional: g, repeat: A } = (0, t.parseMatchedParameter)(c);
      let S = C.replace(/\W/g, "");
      y && (S = `${y}${S}`);
      let T = !1;
      (S.length === 0 || S.length > 30) && (T = !0), isNaN(parseInt(S.slice(0, 1))) || (T = !0), T && (S = p());
      const j = S in l;
      y ? l[S] = `${y}${C}` : l[S] = C;
      const v = R ? (0, s.escapeStringRegexp)(R) : "";
      let w;
      return j && h ? w = `\\k<${S}>` : A ? w = `(?<${S}>.+?)` : w = `(?<${S}>[^/]+?)`, {
        key: C,
        pattern: g ? `(?:/${v}${w})?` : `/${v}${w}`,
        cleanedKey: S,
        optional: g,
        repeat: A
      };
    }
    function m(R, p, c, l, y, h = {
      names: {},
      intercepted: {}
    }) {
      const C = u(), g = {}, A = [], S = [];
      h = structuredClone(h);
      for (const T of (0, r.removeTrailingSlash)(R).slice(1).split("/")) {
        const j = f.INTERCEPTION_ROUTE_MARKERS.some((G) => T.startsWith(G)), v = T.match(t.PARAMETER_PATTERN), w = j ? v?.[1] : void 0;
        let x;
        if (w && v?.[2] ? (x = p ? i.NEXT_INTERCEPTION_MARKER_PREFIX : void 0, h.intercepted[v[2]] = w) : v?.[2] && h.intercepted[v[2]] ? x = p ? i.NEXT_INTERCEPTION_MARKER_PREFIX : void 0 : x = p ? i.NEXT_QUERY_PARAM_PREFIX : void 0, w && v && v[2]) {
          const { key: G, pattern: k, cleanedKey: D, repeat: X, optional: J } = _({
            getSafeRouteKey: C,
            interceptionMarker: w,
            segment: v[2],
            routeKeys: g,
            keyPrefix: x,
            backreferenceDuplicateKeys: y
          });
          A.push(k), S.push(`/${v[1]}:${h.names[G] ?? D}${X ? J ? "*" : "+" : ""}`), h.names[G] ??= D;
        } else if (v && v[2]) {
          l && v[1] && (A.push(`/${(0, s.escapeStringRegexp)(v[1])}`), S.push(`/${v[1]}`));
          const { key: G, pattern: k, cleanedKey: D, repeat: X, optional: J } = _({
            getSafeRouteKey: C,
            segment: v[2],
            routeKeys: g,
            keyPrefix: x,
            backreferenceDuplicateKeys: y
          });
          let z = k;
          l && v[1] && (z = z.substring(1)), A.push(z), S.push(`/:${h.names[G] ?? D}${X ? J ? "*" : "+" : ""}`), h.names[G] ??= D;
        } else
          A.push(`/${(0, s.escapeStringRegexp)(T)}`), S.push(`/${T}`);
        c && v && v[3] && (A.push((0, s.escapeStringRegexp)(v[3])), S.push(v[3]));
      }
      return {
        namedParameterizedRoute: A.join(""),
        routeKeys: g,
        pathToRegexpPattern: S.join(""),
        reference: h
      };
    }
    function E(R, p) {
      const c = m(R, p.prefixRouteKeys, p.includeSuffix ?? !1, p.includePrefix ?? !1, p.backreferenceDuplicateKeys ?? !1, p.reference);
      let l = c.namedParameterizedRoute;
      return p.excludeOptionalTrailingSlash || (l += "(?:/)?"), {
        ...o(R, p),
        namedRegex: `^${l}$`,
        routeKeys: c.routeKeys,
        pathToRegexpPattern: c.pathToRegexpPattern,
        reference: c.reference
      };
    }
    function d(R, p) {
      const { parameterizedRoute: c } = a(R, !1, !1), { catchAll: l = !0 } = p;
      if (c === "/")
        return {
          namedRegex: `^/${l ? ".*" : ""}$`
        };
      const { namedParameterizedRoute: y } = m(R, !1, !1, !1, !1, void 0);
      return {
        namedRegex: `^${y}${l ? "(?:(/.*)?)" : ""}$`
      };
    }
  })(St)), St;
}
var Vr;
function qo() {
  return Vr || (Vr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "interpolateAs", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const e = Sn(), i = wn();
    function f(s, r, t) {
      let a = "";
      const o = (0, i.getRouteRegex)(s), u = o.groups, _ = (
        // Try to match the dynamic route against the asPath
        (r !== s ? (0, e.getRouteMatcher)(o)(r) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        t
      );
      a = s;
      const m = Object.keys(u);
      return m.every((E) => {
        let d = _[E] || "";
        const { repeat: R, optional: p } = u[E];
        let c = `[${R ? "..." : ""}${E}]`;
        return p && (c = `${d ? "" : "/"}[${c}]`), R && !Array.isArray(d) && (d = [
          d
        ]), (p || E in _) && // Interpolate group into data URL if present
        (a = a.replace(c, R ? d.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (l) => encodeURIComponent(l)
        ).join("/") : encodeURIComponent(d)) || "/");
      }) || (a = ""), {
        params: m,
        result: a
      };
    }
  })(bt)), bt;
}
var Wr;
function Uo() {
  return Wr || (Wr = 1, (function(n, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "resolveHref", {
      enumerable: !0,
      get: function() {
        return E;
      }
    });
    const i = yn(), f = bn(), s = bo(), r = $e(), t = qe(), a = On(), o = wo(), u = qo(), _ = wn(), m = Sn();
    function E(d, R, p) {
      let c, l = typeof R == "string" ? R : (0, f.formatWithValidation)(R);
      const y = l.match(/^[a-z][a-z0-9+.-]*:\/\//i), h = y ? l.slice(y[0].length) : l;
      if ((h.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
        console.error(`Invalid href '${l}' passed to next/router in page: '${d.pathname}'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.`);
        const g = (0, r.normalizeRepeatedSlashes)(h);
        l = (y ? y[0] : "") + g;
      }
      if (!(0, a.isLocalURL)(l))
        return p ? [
          l
        ] : l;
      try {
        let g = l.startsWith("#") ? d.asPath : d.pathname;
        if (l.startsWith("?") && (g = d.asPath, (0, o.isDynamicRoute)(d.pathname))) {
          g = d.pathname;
          const A = (0, _.getRouteRegex)(d.pathname);
          (0, m.getRouteMatcher)(A)(d.asPath) || (g = d.asPath);
        }
        c = new URL(g, "http://n");
      } catch {
        c = new URL("/", "http://n");
      }
      try {
        const g = new URL(l, c);
        g.pathname = (0, t.normalizePathTrailingSlash)(g.pathname);
        let A = "";
        if ((0, o.isDynamicRoute)(g.pathname) && g.searchParams && p) {
          const T = (0, i.searchParamsToUrlQuery)(g.searchParams), { result: j, params: v } = (0, u.interpolateAs)(g.pathname, g.pathname, T);
          j && (A = (0, f.formatWithValidation)({
            pathname: j,
            hash: g.hash,
            query: (0, s.omit)(T, v)
          }));
        }
        const S = g.origin === c.origin ? g.href.slice(g.origin.length) : g.href;
        return p ? [
          S,
          A || S
        ] : S;
      } catch {
        return p ? [
          l
        ] : l;
      }
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(Se, Se.exports)), Se.exports;
}
var Ne = { exports: {} }, Ht = {}, kt = {}, Kr;
function Tn() {
  return Kr || (Kr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "addPathPrefix", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const e = zt();
    function i(f, s) {
      if (!f.startsWith("/") || !s)
        return f;
      const { pathname: r, query: t, hash: a } = (0, e.parsePath)(f);
      return `${s}${r}${t}${a}`;
    }
  })(kt)), kt;
}
var Yr;
function Xo() {
  return Yr || (Yr = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "addLocale", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const e = Tn(), i = Pn();
    function f(s, r, t, a) {
      if (!r || r === t) return s;
      const o = s.toLowerCase();
      return !a && ((0, i.pathHasPrefix)(o, "/api") || (0, i.pathHasPrefix)(o, `/${r.toLowerCase()}`)) ? s : (0, e.addPathPrefix)(s, `/${r}`);
    }
  })(Ht)), Ht;
}
var Qr;
function Fo() {
  return Qr || (Qr = 1, (function(n, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addLocale", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const i = qe(), f = (s, ...r) => process.env.__NEXT_I18N_SUPPORT ? (0, i.normalizePathTrailingSlash)(Xo().addLocale(s, ...r)) : s;
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(Ne, Ne.exports)), Ne.exports;
}
var xe = { exports: {} }, Ie = { exports: {} }, Zr;
function Go() {
  return Zr || (Zr = 1, (function(n, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function i(r, t) {
      for (var a in t) Object.defineProperty(r, a, {
        enumerable: !0,
        get: t[a]
      });
    }
    i(e, {
      cancelIdleCallback: function() {
        return s;
      },
      requestIdleCallback: function() {
        return f;
      }
    });
    const f = typeof self < "u" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(r) {
      let t = Date.now();
      return self.setTimeout(function() {
        r({
          didTimeout: !1,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - t));
          }
        });
      }, 1);
    }, s = typeof self < "u" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(r) {
      return clearTimeout(r);
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(Ie, Ie.exports)), Ie.exports;
}
var Jr;
function Bo() {
  return Jr || (Jr = 1, (function(n, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "useIntersection", {
      enumerable: !0,
      get: function() {
        return u;
      }
    });
    const i = ye, f = Go(), s = typeof IntersectionObserver == "function", r = /* @__PURE__ */ new Map(), t = [];
    function a(_) {
      const m = {
        root: _.root || null,
        margin: _.rootMargin || ""
      }, E = t.find((c) => c.root === m.root && c.margin === m.margin);
      let d;
      if (E && (d = r.get(E), d))
        return d;
      const R = /* @__PURE__ */ new Map(), p = new IntersectionObserver((c) => {
        c.forEach((l) => {
          const y = R.get(l.target), h = l.isIntersecting || l.intersectionRatio > 0;
          y && h && y(h);
        });
      }, _);
      return d = {
        id: m,
        observer: p,
        elements: R
      }, t.push(m), r.set(m, d), d;
    }
    function o(_, m, E) {
      const { id: d, observer: R, elements: p } = a(E);
      return p.set(_, m), R.observe(_), function() {
        if (p.delete(_), R.unobserve(_), p.size === 0) {
          R.disconnect(), r.delete(d);
          const l = t.findIndex((y) => y.root === d.root && y.margin === d.margin);
          l > -1 && t.splice(l, 1);
        }
      };
    }
    function u({ rootRef: _, rootMargin: m, disabled: E }) {
      const d = E || !s, [R, p] = (0, i.useState)(!1), c = (0, i.useRef)(null), l = (0, i.useCallback)((h) => {
        c.current = h;
      }, []);
      (0, i.useEffect)(() => {
        if (s) {
          if (d || R) return;
          const h = c.current;
          if (h && h.tagName)
            return o(h, (g) => g && p(g), {
              root: _?.current,
              rootMargin: m
            });
        } else if (!R) {
          const h = (0, f.requestIdleCallback)(() => p(!0));
          return () => (0, f.cancelIdleCallback)(h);
        }
      }, [
        d,
        m,
        _,
        R,
        c.current
      ]);
      const y = (0, i.useCallback)(() => {
        p(!1);
      }, []);
      return [
        l,
        R,
        y
      ];
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(xe, xe.exports)), xe.exports;
}
var Le = { exports: {} }, Me = { exports: {} }, $t = {}, en;
function zo() {
  return en || (en = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const e = /* @__PURE__ */ new WeakMap();
    function i(f, s) {
      if (!s) return {
        pathname: f
      };
      let r = e.get(s);
      r || (r = s.map((_) => _.toLowerCase()), e.set(s, r));
      let t;
      const a = f.split("/", 2);
      if (!a[1]) return {
        pathname: f
      };
      const o = a[1].toLowerCase(), u = r.indexOf(o);
      return u < 0 ? {
        pathname: f
      } : (t = s[u], f = f.slice(t.length + 1) || "/", {
        pathname: f,
        detectedLocale: t
      });
    }
  })($t)), $t;
}
var tn;
function Vo() {
  return tn || (tn = 1, (function(n, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const i = (f, s) => process.env.__NEXT_I18N_SUPPORT ? zo().normalizeLocalePath(f, s) : {
      pathname: f,
      detectedLocale: void 0
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(Me, Me.exports)), Me.exports;
}
var je = { exports: {} }, qt = {}, rn;
function Wo() {
  return rn || (rn = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i, f, s) {
      if (i) {
        s && (s = s.toLowerCase());
        for (const r of i) {
          const t = r.domain?.split(":", 1)[0].toLowerCase();
          if (f === t || s === r.defaultLocale.toLowerCase() || r.locales?.some((a) => a.toLowerCase() === s))
            return r;
        }
      }
    }
  })(qt)), qt;
}
var nn;
function Ko() {
  return nn || (nn = 1, (function(n, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const i = (...f) => {
      if (process.env.__NEXT_I18N_SUPPORT)
        return Wo().detectDomainLocale(...f);
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(je, je.exports)), je.exports;
}
var on;
function Yo() {
  return on || (on = 1, (function(n, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "getDomainLocale", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const i = qe(), f = process.env.__NEXT_ROUTER_BASEPATH || "";
    function s(r, t, a, o) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const u = Vo().normalizeLocalePath, _ = Ko().detectDomainLocale, m = t || u(r, a).detectedLocale, E = _(o, void 0, m);
        if (E) {
          const d = `http${E.http ? "" : "s"}://`, R = m === E.defaultLocale ? "" : `/${m}`;
          return `${d}${E.domain}${(0, i.normalizePathTrailingSlash)(`${f}${R}${r}`)}`;
        }
        return !1;
      } else
        return !1;
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(Le, Le.exports)), Le.exports;
}
var De = { exports: {} }, an;
function Qo() {
  return an || (an = 1, (function(n, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addBasePath", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const i = Tn(), f = qe(), s = process.env.__NEXT_ROUTER_BASEPATH || "";
    function r(t, a) {
      return (0, f.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !a ? t : (0, i.addPathPrefix)(t, s));
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(De, De.exports)), De.exports;
}
var Ut = {}, sn;
function Zo() {
  return sn || (sn = 1, (function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "errorOnce", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    let e = (i) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const i = /* @__PURE__ */ new Set();
      e = (f) => {
        i.has(f) || console.error(f), i.add(f);
      };
    }
  })(Ut)), Ut;
}
var un;
function Jo() {
  return un || (un = 1, (function(n, e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function i(v, w) {
      for (var x in w) Object.defineProperty(v, x, {
        enumerable: !0,
        get: w[x]
      });
    }
    i(e, {
      default: function() {
        return j;
      },
      useLinkStatus: function() {
        return T;
      }
    });
    const f = /* @__PURE__ */ ke(), s = Ft, r = /* @__PURE__ */ f._(ye), t = Uo(), a = On(), o = bn(), u = $e(), _ = Fo(), m = mn(), E = Bo(), d = Yo(), R = Qo(), p = vn(), c = Zo(), l = /* @__PURE__ */ new Set();
    function y(v, w, x, G) {
      if (!(typeof window > "u") && (0, a.isLocalURL)(w)) {
        if (!G.bypassPrefetchedCheck) {
          const k = (
            // Let the link's locale prop override the default router locale.
            typeof G.locale < "u" ? G.locale : "locale" in v ? v.locale : void 0
          ), D = w + "%" + x + "%" + k;
          if (l.has(D))
            return;
          l.add(D);
        }
        v.prefetch(w, x, G).catch((k) => {
          if (process.env.NODE_ENV !== "production")
            throw k;
        });
      }
    }
    function h(v) {
      const x = v.currentTarget.getAttribute("target");
      return x && x !== "_self" || v.metaKey || v.ctrlKey || v.shiftKey || v.altKey || // triggers resource download
      v.nativeEvent && v.nativeEvent.which === 2;
    }
    function C(v, w, x, G, k, D, X, J, z) {
      const { nodeName: $ } = v.currentTarget;
      if ($.toUpperCase() === "A" && h(v) || v.currentTarget.hasAttribute("download"))
        return;
      if (!(0, a.isLocalURL)(x)) {
        k && (v.preventDefault(), location.replace(x));
        return;
      }
      v.preventDefault(), (() => {
        if (z) {
          let te = !1;
          if (z({
            preventDefault: () => {
              te = !0;
            }
          }), te)
            return;
        }
        const ee = X ?? !0;
        "beforePopState" in w ? w[k ? "replace" : "push"](x, G, {
          shallow: D,
          locale: J,
          scroll: ee
        }) : w[k ? "replace" : "push"](G || x, {
          scroll: ee
        });
      })();
    }
    function g(v) {
      return typeof v == "string" ? v : (0, o.formatUrl)(v);
    }
    const A = /* @__PURE__ */ r.default.forwardRef(function(w, x) {
      let G;
      const { href: k, as: D, children: X, prefetch: J = null, passHref: z, replace: $, shallow: W, scroll: Z, locale: ee, onClick: te, onNavigate: B, onMouseEnter: Y, onTouchStart: Q, legacyBehavior: O = !1, ...ae } = w;
      G = X, O && (typeof G == "string" || typeof G == "number") && (G = /* @__PURE__ */ (0, s.jsx)("a", {
        children: G
      }));
      const V = r.default.useContext(m.RouterContext), ue = J !== !1;
      if (process.env.NODE_ENV !== "production") {
        let K = function(M) {
          return Object.defineProperty(new Error(`Failed prop type: The prop \`${M.key}\` expects a ${M.expected} in \`<Link>\`, but got \`${M.actual}\` instead.` + (typeof window < "u" ? `
Open your browser's console to view the Component stack trace.` : "")), "__NEXT_ERROR_CODE", {
            value: "E319",
            enumerable: !1,
            configurable: !0
          });
        };
        Object.keys({
          href: !0
        }).forEach((M) => {
          if (M === "href" && (w[M] == null || typeof w[M] != "string" && typeof w[M] != "object"))
            throw K({
              key: M,
              expected: "`string` or `object`",
              actual: w[M] === null ? "null" : typeof w[M]
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
        }).forEach((M) => {
          const H = typeof w[M];
          if (M === "as") {
            if (w[M] && H !== "string" && H !== "object")
              throw K({
                key: M,
                expected: "`string` or `object`",
                actual: H
              });
          } else if (M === "locale") {
            if (w[M] && H !== "string")
              throw K({
                key: M,
                expected: "`string`",
                actual: H
              });
          } else if (M === "onClick" || M === "onMouseEnter" || M === "onTouchStart" || M === "onNavigate") {
            if (w[M] && H !== "function")
              throw K({
                key: M,
                expected: "`function`",
                actual: H
              });
          } else if (M === "replace" || M === "scroll" || M === "shallow" || M === "passHref" || M === "legacyBehavior") {
            if (w[M] != null && H !== "boolean")
              throw K({
                key: M,
                expected: "`boolean`",
                actual: H
              });
          } else if (M === "prefetch" && w[M] != null && H !== "boolean" && w[M] !== "auto")
            throw K({
              key: M,
              expected: '`boolean | "auto"`',
              actual: H
            });
        });
      }
      const { href: b, as: P } = r.default.useMemo(() => {
        if (!V) {
          const I = g(k);
          return {
            href: I,
            as: D ? g(D) : I
          };
        }
        const [K, oe] = (0, t.resolveHref)(V, k, !0);
        return {
          href: K,
          as: D ? (0, t.resolveHref)(V, D) : oe || K
        };
      }, [
        V,
        k,
        D
      ]), ge = r.default.useRef(b), F = r.default.useRef(P);
      let U;
      if (O)
        if (process.env.NODE_ENV === "development") {
          te && console.warn(`"onClick" was passed to <Link> with \`href\` of \`${k}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`), Y && console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${k}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
          try {
            U = r.default.Children.only(G);
          } catch {
            throw G ? Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${k}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window < "u" ? ` 
Open your browser's console to view the Component stack trace.` : "")), "__NEXT_ERROR_CODE", {
              value: "E266",
              enumerable: !1,
              configurable: !0
            }) : Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${k}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
              value: "E320",
              enumerable: !1,
              configurable: !0
            });
          }
        } else
          U = r.default.Children.only(G);
      else if (process.env.NODE_ENV === "development" && G?.type === "a")
        throw Object.defineProperty(new Error(`Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
Learn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor`), "__NEXT_ERROR_CODE", {
          value: "E209",
          enumerable: !1,
          configurable: !0
        });
      const ie = O ? U && typeof U == "object" && U.ref : x, [he, fe, ce] = (0, E.useIntersection)({
        rootMargin: "200px"
      }), _e = r.default.useCallback((K) => {
        (F.current !== P || ge.current !== b) && (ce(), F.current = P, ge.current = b), he(K);
      }, [
        P,
        b,
        ce,
        he
      ]), le = (0, p.useMergedRef)(_e, ie);
      r.default.useEffect(() => {
        process.env.NODE_ENV === "production" && V && (!fe || !ue || y(V, b, P, {
          locale: ee
        }));
      }, [
        P,
        b,
        fe,
        ee,
        ue,
        V?.locale,
        V
      ]);
      const L = {
        ref: le,
        onClick(K) {
          if (process.env.NODE_ENV !== "production" && !K)
            throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
              value: "E312",
              enumerable: !1,
              configurable: !0
            });
          !O && typeof te == "function" && te(K), O && U.props && typeof U.props.onClick == "function" && U.props.onClick(K), V && (K.defaultPrevented || C(K, V, b, P, $, W, Z, ee, B));
        },
        onMouseEnter(K) {
          !O && typeof Y == "function" && Y(K), O && U.props && typeof U.props.onMouseEnter == "function" && U.props.onMouseEnter(K), V && y(V, b, P, {
            locale: ee,
            priority: !0,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: !0
          });
        },
        onTouchStart: process.env.__NEXT_LINK_NO_TOUCH_START ? void 0 : function(oe) {
          !O && typeof Q == "function" && Q(oe), O && U.props && typeof U.props.onTouchStart == "function" && U.props.onTouchStart(oe), V && y(V, b, P, {
            locale: ee,
            priority: !0,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: !0
          });
        }
      };
      if ((0, u.isAbsoluteUrl)(P))
        L.href = P;
      else if (!O || z || U.type === "a" && !("href" in U.props)) {
        const K = typeof ee < "u" ? ee : V?.locale, oe = V?.isLocaleDomain && (0, d.getDomainLocale)(P, K, V?.locales, V?.domainLocales);
        L.href = oe || (0, R.addBasePath)((0, _.addLocale)(P, K, V?.defaultLocale));
      }
      return O ? (process.env.NODE_ENV === "development" && (0, c.errorOnce)(`\`legacyBehavior\` is deprecated and will be removed in a future release. A codemod is available to upgrade your components:

npx @next/codemod@latest new-link .

Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components`), /* @__PURE__ */ r.default.cloneElement(U, L)) : /* @__PURE__ */ (0, s.jsx)("a", {
        ...ae,
        ...L,
        children: G
      });
    }), S = /* @__PURE__ */ (0, r.createContext)({
      // We do not support link status in the Pages Router, so we always return false
      pending: !1
    }), T = () => (0, r.useContext)(S), j = A;
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), n.exports = e.default);
  })(Ae, Ae.exports)), Ae.exports;
}
var Xt, cn;
function ea() {
  return cn || (cn = 1, Xt = Jo()), Xt;
}
var ta = ea();
const ve = /* @__PURE__ */ hn(ta), ra = () => {
  const [n, e] = Nn(!1);
  return /* @__PURE__ */ q("nav", { className: "bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4", children: /* @__PURE__ */ de("div", { className: "relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6", children: [
    /* @__PURE__ */ de("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ q(ve, { href: "/", children: /* @__PURE__ */ q(yo, {}) }),
      /* @__PURE__ */ q(
        Ee,
        {
          variant: "ghost",
          className: "flex size-9 items-center justify-center md:hidden",
          onClick: () => e((f) => !f),
          "aria-label": n ? "Close menu" : "Open menu",
          children: n ? /* @__PURE__ */ q(Dn, {}) : /* @__PURE__ */ q(Hn, {})
        }
      )
    ] }),
    /* @__PURE__ */ de("div", { className: "hidden w-full flex-row justify-end gap-5 md:flex", children: [
      /* @__PURE__ */ de("div", { className: "flex flex-col gap-1 md:flex-row", children: [
        /* @__PURE__ */ q(ve, { href: "#features", children: /* @__PURE__ */ q(Ee, { variant: "ghost", className: "w-full md:w-auto", children: "Features" }) }),
        /* @__PURE__ */ q(ve, { href: "#about", children: /* @__PURE__ */ q(Ee, { variant: "ghost", className: "w-full md:w-auto", children: "About" }) }),
        /* @__PURE__ */ q(ve, { href: "#contact", children: /* @__PURE__ */ q(Ee, { variant: "ghost", className: "w-full md:w-auto", children: "Contact" }) })
      ] }),
      /* @__PURE__ */ q(ve, { href: "#pricing", children: /* @__PURE__ */ q(Ee, { children: "Try for free" }) })
    ] }),
    /* @__PURE__ */ de("div", { className: "flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden", children: [
      /* @__PURE__ */ de("div", { className: "flex flex-col gap-1 md:flex-row", children: [
        /* @__PURE__ */ q(ve, { href: "#features", children: /* @__PURE__ */ q(Ee, { variant: "ghost", className: "w-full md:w-auto", children: "Features" }) }),
        /* @__PURE__ */ q(ve, { href: "#about", children: /* @__PURE__ */ q(Ee, { variant: "ghost", className: "w-full md:w-auto", children: "About" }) }),
        /* @__PURE__ */ q(ve, { href: "#contact", children: /* @__PURE__ */ q(Ee, { variant: "ghost", className: "w-full md:w-auto", children: "Contact" }) })
      ] }),
      /* @__PURE__ */ q(ve, { href: "#pricing", children: /* @__PURE__ */ q(Ee, { className: "w-full", children: "Try for free" }) })
    ] })
  ] }) });
}, na = [
  // { id: "title", label: "Heading", type: "text", default: "Welcome" },
  { id: "subtitle", label: "Subheading", type: "text" },
  { id: "content", label: "Body", type: "richtext" },
  { id: "background_image", label: "Background image", type: "image_picker" },
  { id: "background_color", label: "Background color", type: "color" }
], oa = {
  zap: ln,
  shield: Xn,
  chart: Un,
  clock: qn,
  users: $n,
  settings: kn
}, aa = ({
  title: n,
  description: e,
  features: i,
  columns: f = 3,
  textAlignment: s = "center"
}) => /* @__PURE__ */ q(
  "section",
  {
    id: "features",
    className: "bg-background section-padding-y",
    "aria-labelledby": "features-heading",
    children: /* @__PURE__ */ de("div", { className: "container-padding-x container mx-auto", children: [
      /* @__PURE__ */ de(
        "div",
        {
          className: `section-title-gap-lg mx-auto mb-12 flex max-w-2xl flex-col lg:mb-16 ${s === "center" ? "text-center" : "text-left"}`,
          children: [
            /* @__PURE__ */ q("h2", { id: "features-heading", className: "heading-lg", children: n }),
            e && /* @__PURE__ */ q("p", { className: "text-muted-foreground text-base lg:text-lg", children: e })
          ]
        }
      ),
      /* @__PURE__ */ q("div", { className: `grid gap-6 lg:gap-8 ${f === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`, children: i?.map((t, a) => {
        const o = oa[t.icon || "zap"] || ln;
        return /* @__PURE__ */ de(
          "div",
          {
            className: "bg-secondary flex flex-col gap-4 rounded-xl p-6 lg:p-8",
            children: [
              /* @__PURE__ */ q("div", { className: "bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg", children: /* @__PURE__ */ q(o, { className: "text-primary h-6 w-6" }) }),
              /* @__PURE__ */ de("div", { className: "section-title-gap-sm flex flex-col", children: [
                /* @__PURE__ */ q("h3", { className: "text-card-foreground text-lg font-semibold", children: t.title }),
                /* @__PURE__ */ q("p", { className: "text-muted-foreground text-sm leading-relaxed", children: t.description })
              ] })
            ]
          },
          a
        );
      }) })
    ] })
  }
), ia = [
  {
    id: "title",
    label: "Heading",
    type: "text",
    default: "Everything you need to close more deals"
  },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    default: "Powerful features designed to help your team capture insights, track progress, and never miss a follow-up."
  },
  {
    id: "features",
    label: "Features",
    type: "array",
    default: [
      {
        icon: "zap",
        title: "Automatic Transcription",
        description: "Every meeting is transcribed in real-time with speaker identification and timestamps."
      },
      {
        icon: "chart",
        title: "Deal Intelligence",
        description: "Track deal progress across conversations and get alerts when deals are at risk."
      },
      {
        icon: "users",
        title: "Team Collaboration",
        description: "Share meeting insights with your team and keep everyone aligned on customer needs."
      },
      {
        icon: "clock",
        title: "Action Items",
        description: "Automatically extract action items and follow-ups from every conversation."
      },
      {
        icon: "shield",
        title: "Enterprise Security",
        description: "SOC 2 compliant with end-to-end encryption and role-based access controls."
      },
      {
        icon: "settings",
        title: "CRM Integration",
        description: "Sync meeting notes and insights directly to Salesforce, HubSpot, and more."
      }
    ],
    itemSchema: [
      {
        id: "icon",
        label: "Icon",
        type: "select",
        options: [
          { value: "zap", label: "Zap" },
          { value: "shield", label: "Shield" },
          { value: "chart", label: "Chart" },
          { value: "clock", label: "Clock" },
          { value: "users", label: "Users" },
          { value: "settings", label: "Settings" }
        ],
        default: "zap"
      },
      {
        id: "title",
        label: "Title",
        type: "text",
        default: "Feature title"
      },
      {
        id: "description",
        label: "Description",
        type: "textarea",
        default: "Feature description goes here."
      }
    ]
  },
  {
    id: "columns",
    label: "Columns",
    type: "select",
    options: [
      { value: 2, label: "2 Columns" },
      { value: 3, label: "3 Columns" }
    ],
    default: 3
  },
  {
    id: "textAlignment",
    label: "Header alignment",
    type: "text_alignment",
    options: ["left", "center"],
    default: "center"
  }
], ha = {
  hero: Ro,
  header: ra,
  features: aa
}, _a = {
  hero: vo,
  header: na,
  features: ia
};
export {
  _a as sectionSettingsSchemas,
  ha as sectionsComponents
};
