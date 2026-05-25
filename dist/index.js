import Mr, { jsx as T, jsxs as X } from "react/jsx-runtime";
import * as W from "react";
import Te, { useState as Lr } from "react";
import { cva as Dr } from "class-variance-authority";
import { clsx as jr } from "clsx";
import { twMerge as qr } from "tailwind-merge";
import "react-dom";
import { ArrowRight as Hr, X as Ur, Menu as Xr, Check as kr } from "lucide-react";
function Ct(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function Fr(...t) {
  return (e) => {
    let a = !1;
    const s = t.map((l) => {
      const o = Ct(l, e);
      return !a && typeof o == "function" && (a = !0), o;
    });
    if (a)
      return () => {
        for (let l = 0; l < s.length; l++) {
          const o = s[l];
          typeof o == "function" ? o() : Ct(t[l], null);
        }
      };
  };
}
var Gr = /* @__PURE__ */ Symbol.for("react.lazy"), be = W[" use ".trim().toString()];
function Vr(t) {
  return typeof t == "object" && t !== null && "then" in t;
}
function vr(t) {
  return t != null && typeof t == "object" && "$$typeof" in t && t.$$typeof === Gr && "_payload" in t && Vr(t._payload);
}
// @__NO_SIDE_EFFECTS__
function Pr(t) {
  const e = /* @__PURE__ */ Wr(t), a = W.forwardRef((s, l) => {
    let { children: o, ...n } = s;
    vr(o) && typeof be == "function" && (o = be(o._payload));
    const u = W.Children.toArray(o), r = u.find(Yr);
    if (r) {
      const i = r.props.children, c = u.map((d) => d === r ? W.Children.count(i) > 1 ? W.Children.only(null) : W.isValidElement(i) ? i.props.children : null : d);
      return /* @__PURE__ */ T(e, { ...n, ref: l, children: W.isValidElement(i) ? W.cloneElement(i, void 0, c) : null });
    }
    return /* @__PURE__ */ T(e, { ...n, ref: l, children: o });
  });
  return a.displayName = `${t}.Slot`, a;
}
var zr = /* @__PURE__ */ Pr("Slot");
// @__NO_SIDE_EFFECTS__
function Wr(t) {
  const e = W.forwardRef((a, s) => {
    let { children: l, ...o } = a;
    if (vr(l) && typeof be == "function" && (l = be(l._payload)), W.isValidElement(l)) {
      const n = Kr(l), u = $r(o, l.props);
      return l.type !== W.Fragment && (u.ref = s ? Fr(s, n) : n), W.cloneElement(l, u);
    }
    return W.Children.count(l) > 1 ? W.Children.only(null) : null;
  });
  return e.displayName = `${t}.SlotClone`, e;
}
var Br = /* @__PURE__ */ Symbol("radix.slottable");
function Yr(t) {
  return W.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Br;
}
function $r(t, e) {
  const a = { ...e };
  for (const s in e) {
    const l = t[s], o = e[s];
    /^on[A-Z]/.test(s) ? l && o ? a[s] = (...u) => {
      const r = o(...u);
      return l(...u), r;
    } : l && (a[s] = l) : s === "style" ? a[s] = { ...l, ...o } : s === "className" && (a[s] = [l, o].filter(Boolean).join(" "));
  }
  return { ...t, ...a };
}
function Kr(t) {
  let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, a = e && "isReactWarning" in e && e.isReactWarning;
  return a ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get, a = e && "isReactWarning" in e && e.isReactWarning, a ? t.props.ref : t.props.ref || t.ref);
}
function Qr(...t) {
  return qr(jr(t));
}
const Zr = Dr(
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
function te({
  className: t,
  variant: e,
  size: a,
  asChild: s = !1,
  ...l
}) {
  return /* @__PURE__ */ T(
    s ? zr : "button",
    {
      "data-slot": "button",
      className: Qr(Zr({ variant: e, size: a, className: t })),
      ...l
    }
  );
}
var Jr = [
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
], en = Jr.reduce((t, e) => {
  const a = /* @__PURE__ */ Pr(`Primitive.${e}`), s = W.forwardRef((l, o) => {
    const { asChild: n, ...u } = l, r = n ? a : e;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ T(r, { ...u, ref: o });
  });
  return s.displayName = `Primitive.${e}`, { ...t, [e]: s };
}, {}), tn = "AspectRatio", Cr = W.forwardRef(
  (t, e) => {
    const { ratio: a = 1 / 1, style: s, ...l } = t;
    return /* @__PURE__ */ T(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / a}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ T(
          en.div,
          {
            ...l,
            ref: e,
            style: {
              ...s,
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
Cr.displayName = tn;
var rn = Cr;
const nn = rn, an = ({
  title: t,
  description: e,
  renderBlocks: a,
  primaryCtaLabel: s,
  primaryCtaUrl: l,
  secondaryCtaLabel: o,
  secondaryCtaUrl: n,
  heroImage: u,
  textAlignment: r
}) => /* @__PURE__ */ T(
  "section",
  {
    className: "bg-secondary section-padding-y",
    "aria-labelledby": "hero-heading",
    children: /* @__PURE__ */ X("div", { className: "container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16", children: [
      /* @__PURE__ */ X(
        "div",
        {
          className: `flex flex-1 flex-col gap-6 lg:gap-8 ${{
            left: "text-left",
            center: "text-center",
            right: "text-right"
          }[r || "left"]}`,
          children: [
            /* @__PURE__ */ X("div", { className: "section-title-gap-xl flex flex-col", children: [
              /* @__PURE__ */ T("h1", { id: "hero-heading", className: "heading-xl", children: t }),
              /* @__PURE__ */ T("p", { className: "text-muted-foreground text-base lg:text-lg", children: e })
            ] }),
            a && /* @__PURE__ */ T("div", { className: "flex flex-col gap-2 md:gap-3", children: a() }),
            /* @__PURE__ */ X("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
              /* @__PURE__ */ T(te, { asChild: !0, children: /* @__PURE__ */ T("a", { href: l, children: s }) }),
              /* @__PURE__ */ T(te, { variant: "ghost", asChild: !0, children: /* @__PURE__ */ X("a", { href: n, children: [
                o,
                /* @__PURE__ */ T(Hr, {})
              ] }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ T("div", { className: "w-full flex-1", children: /* @__PURE__ */ T(nn, { ratio: 1 / 1, children: /* @__PURE__ */ T(
        "img",
        {
          src: u?.url || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-EK6lJQh9Tq3HAhrRx6QQGhjNwND9Gs.png",
          alt: "Hero visual",
          className: "absolute inset-0 h-full w-full rounded-xl object-cover"
        }
      ) }) })
    ] })
  }
), on = [
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
      id: null,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-EK6lJQh9Tq3HAhrRx6QQGhjNwND9Gs.png"
    },
    info: "Upload or select an image for the hero section"
  },
  {
    id: "textAlignment",
    label: "Text alignment",
    type: "text_alignment",
    default: "left"
  }
], un = ({ width: t = 135, height: e = 36, className: a }) => /* @__PURE__ */ X(
  "svg",
  {
    width: t,
    height: e,
    viewBox: "0 0 135 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "text-foreground w-[120px] h-[32px] md:w-[135px] md:h-[36px]",
    children: [
      /* @__PURE__ */ X("g", { clipPath: "url(#clip0_22005_7547)", children: [
        /* @__PURE__ */ X("g", { clipPath: "url(#clip1_22005_7547)", children: [
          /* @__PURE__ */ T(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M25.5391 1.96969C21.9841 -0.0227045 17.7853 -0.527706 13.8593 0.564945C9.93327 1.6576 6.599 4.25914 4.58444 7.8016C2.56989 11.3441 2.03868 15.5397 3.10679 19.4724C4.1749 23.4052 6.75558 26.7556 10.2854 28.7923V34.7143C10.2854 35.0553 10.4208 35.3823 10.662 35.6234C10.9031 35.8645 11.2301 36 11.5711 36H24.4282C24.7692 36 25.0963 35.8645 25.3374 35.6234C25.5785 35.3823 25.714 35.0553 25.714 34.7143V29.5714H29.5711C30.5941 29.5714 31.5752 29.165 32.2985 28.4417C33.0219 27.7183 33.4282 26.7372 33.4282 25.7143V15.4286C33.4279 12.6865 32.6967 9.99412 31.3101 7.62853C29.9235 5.26294 27.9314 3.30963 25.5391 1.96969Z",
              fill: "#FFDFD0"
            }
          ),
          /* @__PURE__ */ T(
            "path",
            {
              d: "M13.4351 6.90452C11.4747 8.03848 9.97314 9.82303 9.19107 11.9485C8.40901 14.0739 8.39577 16.4061 9.15366 18.5402C9.50851 19.538 10.5859 20.0394 11.6094 19.7668C16.7908 18.3937 22.0674 14.6831 25.2714 11.7877C26.1199 11.0188 26.2974 9.73824 25.5414 8.88195C24.0612 7.20665 22.0475 6.09441 19.8412 5.73358C17.635 5.37274 15.3719 5.78807 13.4351 6.90452Z",
              fill: "#F95E16"
            }
          )
        ] }),
        /* @__PURE__ */ T(
          "path",
          {
            d: "M44 23.9412V11.741H47.2741L50.5309 17.6343L53.7533 11.741H56.9068V23.9412H54.4426V15.0323L50.979 21.2186H49.9795L46.4642 15.0323V23.9412H44Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ T(
          "path",
          {
            d: "M59.1541 23.9412V14.86H61.5665V23.9412H59.1541ZM60.3603 13.9467C59.9123 13.9467 59.5504 13.8146 59.2747 13.5503C58.999 13.2746 58.8611 12.9242 58.8611 12.4992C58.8611 12.0512 59.0047 11.6893 59.2919 11.4136C59.5791 11.1379 59.941 11 60.3775 11C60.7796 11 61.1243 11.1379 61.4115 11.4136C61.7101 11.6778 61.8595 12.0339 61.8595 12.482C61.8595 12.9185 61.7159 13.2746 61.4287 13.5503C61.153 13.8146 60.7968 13.9467 60.3603 13.9467Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ T(
          "path",
          {
            d: "M63.4789 23.9412V14.86H65.7363L65.8569 15.9111C66.1096 15.6009 66.3968 15.3597 66.7185 15.1874C67.0517 15.0036 67.3848 14.8772 67.718 14.8083C68.0626 14.7393 68.3728 14.7049 68.6485 14.7049C69.5216 14.7049 70.1994 14.8944 70.6819 15.2735C71.1759 15.6526 71.5262 16.1639 71.733 16.8072C71.9513 17.439 72.0604 18.1455 72.0604 18.9267V23.9412H69.6479V19.2369C69.6479 18.9612 69.625 18.6855 69.579 18.4098C69.5331 18.134 69.4469 17.8813 69.3205 17.6516C69.2057 17.4218 69.0391 17.238 68.8208 17.1001C68.6025 16.9623 68.3153 16.8933 67.9592 16.8933C67.4997 16.8933 67.1148 17.0082 66.8047 17.238C66.4945 17.4677 66.2647 17.7779 66.1154 18.1685C65.966 18.5591 65.8914 18.9899 65.8914 19.4609V23.9412H63.4789Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ T(
          "path",
          {
            d: "M77.6517 24.0619C76.7326 24.0619 75.9687 23.8551 75.3598 23.4415C74.7624 23.0164 74.3144 22.4535 74.0157 21.7528C73.717 21.0405 73.5677 20.2536 73.5677 19.392C73.5677 18.4844 73.7285 17.6803 74.0502 16.9795C74.3719 16.2672 74.8486 15.7101 75.4804 15.308C76.1123 14.9059 76.8992 14.7049 77.8412 14.7049C78.1629 14.7049 78.4788 14.7451 78.789 14.8255C79.1107 14.8944 79.4036 15.0036 79.6678 15.1529C79.9435 15.2908 80.179 15.4746 80.3743 15.7043V11.741H82.7868V23.9412H80.4433L80.4088 22.9245C80.202 23.1888 79.9493 23.407 79.6506 23.5794C79.3634 23.7402 79.0532 23.8608 78.7201 23.9412C78.3869 24.0217 78.0308 24.0619 77.6517 24.0619ZM78.1342 21.8906C78.6511 21.8906 79.0704 21.77 79.3921 21.5288C79.7253 21.2875 79.9723 20.9773 80.1331 20.5982C80.2939 20.2191 80.3743 19.8113 80.3743 19.3748C80.3743 18.9267 80.2939 18.5189 80.1331 18.1513C79.9837 17.7722 79.7425 17.4735 79.4093 17.2552C79.0877 17.0255 78.6626 16.9106 78.1342 16.9106C77.6057 16.9106 77.1807 17.0312 76.859 17.2724C76.5373 17.5137 76.3076 17.8296 76.1697 18.2202C76.0434 18.5993 75.9802 19.0071 75.9802 19.4437C75.9802 19.7653 76.0146 20.0755 76.0836 20.3742C76.164 20.6614 76.2903 20.9199 76.4627 21.1496C76.635 21.3794 76.859 21.5632 77.1347 21.7011C77.4104 21.8274 77.7436 21.8906 78.1342 21.8906Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ T(
          "path",
          {
            d: "M89.6279 24.0791C88.7778 24.0791 87.9851 23.947 87.2499 23.6828C86.5262 23.4185 85.9173 22.9992 85.4233 22.4248C84.9408 21.8504 84.6364 21.1094 84.51 20.2019H87.0259C87.1293 20.5925 87.3188 20.9084 87.5945 21.1496C87.8703 21.3794 88.1977 21.546 88.5768 21.6494C88.9674 21.7528 89.3752 21.8045 89.8002 21.8045C90.1219 21.8045 90.4378 21.7643 90.748 21.6838C91.0582 21.6034 91.3109 21.4656 91.5062 21.2703C91.713 21.075 91.8164 20.8108 91.8164 20.4776C91.8164 20.2249 91.7589 20.0181 91.6441 19.8572C91.5407 19.6964 91.3856 19.57 91.1788 19.4781C90.9835 19.3748 90.7423 19.2828 90.4551 19.2024C90.2138 19.1335 89.9611 19.0761 89.6968 19.0301C89.4441 18.9842 89.1914 18.9267 88.9386 18.8578C88.6974 18.7889 88.4619 18.7084 88.2321 18.6165C87.7956 18.5017 87.3763 18.3638 86.9742 18.203C86.5721 18.0307 86.216 17.8181 85.9058 17.5654C85.5956 17.3012 85.3486 16.9738 85.1648 16.5832C84.9925 16.1926 84.9063 15.7216 84.9063 15.1701C84.9063 14.5728 85.004 14.0673 85.1993 13.6537C85.4061 13.2402 85.676 12.9013 86.0092 12.637C86.3538 12.3613 86.7329 12.1488 87.1465 11.9995C87.5716 11.8501 87.9966 11.7467 88.4217 11.6893C88.8467 11.6318 89.2488 11.6031 89.6279 11.6031C90.4206 11.6031 91.1328 11.741 91.7647 12.0167C92.3965 12.2924 92.9135 12.706 93.3156 13.2574C93.7176 13.8088 93.9474 14.5038 94.0048 15.3425H91.6096C91.5636 14.9978 91.4373 14.7164 91.2305 14.4981C91.0237 14.2798 90.7595 14.119 90.4378 14.0156C90.1276 13.9122 89.7773 13.8605 89.3867 13.8605C89.1339 13.8605 88.8869 13.8835 88.6457 13.9294C88.4044 13.9754 88.1862 14.0501 87.9909 14.1535C87.8071 14.2454 87.6577 14.3717 87.5428 14.5326C87.4394 14.6934 87.3878 14.8887 87.3878 15.1184C87.3878 15.3482 87.4509 15.5492 87.5773 15.7216C87.7037 15.8824 87.8875 16.026 88.1287 16.1524C88.3815 16.2672 88.6744 16.3764 89.0076 16.4798C89.3522 16.5947 89.7141 16.6866 90.0932 16.7555C90.4723 16.8244 90.8342 16.9163 91.1788 17.0312C91.6153 17.1461 92.0232 17.2839 92.4023 17.4448C92.7814 17.5941 93.1145 17.7894 93.4017 18.0307C93.6889 18.2604 93.9129 18.5591 94.0738 18.9267C94.2346 19.2828 94.315 19.7251 94.315 20.2536C94.315 20.9544 94.1829 21.5517 93.9187 22.0457C93.6659 22.5282 93.3156 22.9188 92.8675 23.2175C92.431 23.5162 91.9313 23.7344 91.3684 23.8723C90.8054 24.0102 90.2253 24.0791 89.6279 24.0791Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ T(
          "path",
          {
            d: "M96.0581 27.3359V14.86H98.3155L98.4362 15.9973C98.8038 15.5492 99.2231 15.2218 99.6941 15.0151C100.177 14.8083 100.705 14.7049 101.279 14.7049C102.176 14.7049 102.916 14.9117 103.502 15.3252C104.088 15.7388 104.525 16.3017 104.812 17.014C105.111 17.7147 105.26 18.5017 105.26 19.3748C105.26 20.2708 105.105 21.075 104.795 21.7872C104.496 22.488 104.042 23.0452 103.433 23.4587C102.825 23.8608 102.066 24.0619 101.159 24.0619C100.768 24.0619 100.401 24.0159 100.056 23.924C99.7113 23.8321 99.4069 23.7115 99.1427 23.5621C98.8785 23.4013 98.6544 23.2232 98.4706 23.0279V27.3359H96.0581ZM100.745 21.8906C101.285 21.8906 101.71 21.77 102.02 21.5288C102.331 21.2875 102.549 20.9831 102.675 20.6155C102.802 20.2364 102.865 19.8458 102.865 19.4437C102.865 19.0071 102.796 18.5936 102.658 18.203C102.52 17.8124 102.29 17.5022 101.969 17.2724C101.659 17.0312 101.233 16.9106 100.694 16.9106C100.211 16.9106 99.8032 17.0312 99.4701 17.2724C99.1369 17.5022 98.8842 17.8066 98.7119 18.1857C98.5396 18.5648 98.4534 18.9727 98.4534 19.4092C98.4534 19.8458 98.5338 20.2536 98.6946 20.6327C98.867 21.0118 99.1197 21.3162 99.4529 21.546C99.7975 21.7757 100.228 21.8906 100.745 21.8906Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ T(
          "path",
          {
            d: "M109.689 24.0619C109.275 24.0619 108.873 24.0102 108.483 23.9068C108.104 23.7919 107.765 23.6196 107.466 23.3898C107.167 23.1601 106.932 22.8728 106.76 22.5282C106.587 22.1836 106.501 21.7815 106.501 21.322C106.501 20.7016 106.628 20.2076 106.88 19.84C107.133 19.4609 107.472 19.1737 107.897 18.9784C108.322 18.7831 108.81 18.651 109.362 18.5821C109.925 18.5132 110.505 18.4787 111.102 18.4787H112.412C112.412 18.1455 112.349 17.8526 112.222 17.5999C112.107 17.3356 111.929 17.1346 111.688 16.9967C111.447 16.8474 111.137 16.7727 110.757 16.7727C110.516 16.7727 110.281 16.8072 110.051 16.8761C109.833 16.9336 109.649 17.0197 109.5 17.1346C109.35 17.2495 109.253 17.3988 109.207 17.5826H106.76C106.829 17.0772 106.989 16.6464 107.242 16.2902C107.495 15.9226 107.811 15.6239 108.19 15.3942C108.569 15.1644 108.983 14.9978 109.431 14.8944C109.89 14.7796 110.361 14.7221 110.844 14.7221C112.165 14.7221 113.141 15.1012 113.773 15.8594C114.405 16.6061 114.721 17.6688 114.721 19.0473V23.9412H112.55L112.515 22.7695C112.228 23.1715 111.901 23.4645 111.533 23.6483C111.177 23.8321 110.832 23.947 110.499 23.9929C110.166 24.0389 109.896 24.0619 109.689 24.0619ZM110.24 22.1491C110.643 22.1491 111.01 22.0687 111.343 21.9079C111.676 21.747 111.941 21.5288 112.136 21.253C112.331 20.9773 112.429 20.6672 112.429 20.3225V20.0985H110.775C110.533 20.0985 110.298 20.11 110.068 20.133C109.85 20.1559 109.649 20.2019 109.465 20.2708C109.293 20.3283 109.155 20.4259 109.051 20.5638C108.948 20.7016 108.896 20.8854 108.896 21.1152C108.896 21.3449 108.954 21.5402 109.069 21.7011C109.195 21.8504 109.362 21.9653 109.568 22.0457C109.775 22.1146 109.999 22.1491 110.24 22.1491Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ T(
          "path",
          {
            d: "M120.672 24.0619C119.742 24.0619 118.943 23.8723 118.277 23.4932C117.622 23.1141 117.122 22.5799 116.778 21.8906C116.433 21.1899 116.261 20.3685 116.261 19.4264C116.261 18.4729 116.439 17.6458 116.795 16.945C117.151 16.2328 117.662 15.6814 118.328 15.2908C119.006 14.9002 119.822 14.7049 120.775 14.7049C121.511 14.7049 122.165 14.837 122.74 15.1012C123.314 15.3654 123.774 15.7445 124.118 16.2385C124.475 16.7325 124.681 17.3414 124.739 18.0651H122.378C122.275 17.663 122.074 17.3701 121.775 17.1863C121.488 17.0025 121.143 16.9106 120.741 16.9106C120.224 16.9106 119.81 17.0369 119.5 17.2897C119.202 17.5424 118.983 17.8641 118.845 18.2547C118.719 18.6453 118.656 19.0359 118.656 19.4264C118.656 19.8515 118.725 20.2536 118.863 20.6327C119.001 21.0003 119.219 21.3047 119.517 21.546C119.828 21.7757 120.23 21.8906 120.724 21.8906C121.137 21.8906 121.499 21.7987 121.809 21.6149C122.12 21.4196 122.321 21.1209 122.412 20.7188H124.825C124.768 21.4656 124.543 22.0859 124.153 22.5799C123.762 23.0739 123.263 23.4473 122.654 23.7C122.056 23.9412 121.396 24.0619 120.672 24.0619Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ T(
          "path",
          {
            d: "M130.434 24.0619C129.481 24.0619 128.671 23.8723 128.005 23.4932C127.338 23.1141 126.827 22.5799 126.471 21.8906C126.115 21.1899 125.937 20.3742 125.937 19.4437C125.937 18.5017 126.121 17.6803 126.488 16.9795C126.856 16.2672 127.373 15.7101 128.039 15.308C128.717 14.9059 129.515 14.7049 130.434 14.7049C131.124 14.7049 131.727 14.8198 132.244 15.0495C132.772 15.2793 133.214 15.6009 133.571 16.0145C133.938 16.4281 134.208 16.9106 134.381 17.462C134.564 18.0019 134.65 18.5878 134.639 19.2197C134.639 19.3805 134.633 19.5356 134.622 19.6849C134.61 19.8343 134.587 19.9836 134.553 20.133H128.332C128.367 20.4776 128.464 20.7935 128.625 21.0807C128.786 21.3679 129.01 21.5977 129.297 21.77C129.596 21.9308 129.963 22.0113 130.4 22.0113C130.687 22.0113 130.951 21.9825 131.193 21.9251C131.434 21.8562 131.641 21.7528 131.813 21.6149C131.985 21.4771 132.106 21.3162 132.175 21.1324H134.553C134.403 21.8102 134.122 22.3674 133.708 22.8039C133.306 23.2405 132.818 23.5621 132.244 23.7689C131.669 23.9642 131.066 24.0619 130.434 24.0619ZM128.384 18.4442H132.33C132.318 18.134 132.238 17.8468 132.089 17.5826C131.951 17.3069 131.738 17.0886 131.451 16.9278C131.175 16.7555 130.819 16.6693 130.383 16.6693C129.946 16.6693 129.579 16.7555 129.28 16.9278C128.993 17.1001 128.774 17.3241 128.625 17.5999C128.487 17.8641 128.407 18.1455 128.384 18.4442Z",
            fill: "currentColor"
          }
        )
      ] }),
      /* @__PURE__ */ X("defs", { children: [
        /* @__PURE__ */ T("clipPath", { id: "clip0_22005_7547", children: /* @__PURE__ */ T("rect", { width: "135", height: "36", fill: "white" }) }),
        /* @__PURE__ */ T("clipPath", { id: "clip1_22005_7547", children: /* @__PURE__ */ T("rect", { width: "36", height: "36", fill: "white" }) })
      ] })
    ]
  }
);
function cn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var de = { exports: {} }, Me = {}, yt;
function yr() {
  if (yt) return Me;
  yt = 1;
  function t(a) {
    if (typeof WeakMap != "function") return null;
    var s = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
    return (t = function(o) {
      return o ? l : s;
    })(a);
  }
  function e(a, s) {
    if (!s && a && a.__esModule) return a;
    if (a === null || typeof a != "object" && typeof a != "function") return { default: a };
    var l = t(s);
    if (l && l.has(a)) return l.get(a);
    var o = { __proto__: null }, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in a)
      if (u !== "default" && Object.prototype.hasOwnProperty.call(a, u)) {
        var r = n ? Object.getOwnPropertyDescriptor(a, u) : null;
        r && (r.get || r.set) ? Object.defineProperty(o, u, r) : o[u] = a[u];
      }
    return o.default = a, l && l.set(a, o), o;
  }
  return Me._ = e, Me;
}
var pe = { exports: {} }, Le = {}, bt;
function br() {
  return bt || (bt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(n, u) {
      for (var r in u) Object.defineProperty(n, r, {
        enumerable: !0,
        get: u[r]
      });
    }
    e(t, {
      assign: function() {
        return o;
      },
      searchParamsToUrlQuery: function() {
        return a;
      },
      urlQueryToSearchParams: function() {
        return l;
      }
    });
    function a(n) {
      const u = {};
      for (const [r, i] of n.entries()) {
        const c = u[r];
        typeof c > "u" ? u[r] = i : Array.isArray(c) ? c.push(i) : u[r] = [
          c,
          i
        ];
      }
      return u;
    }
    function s(n) {
      return typeof n == "string" ? n : typeof n == "number" && !isNaN(n) || typeof n == "boolean" ? String(n) : "";
    }
    function l(n) {
      const u = new URLSearchParams();
      for (const [r, i] of Object.entries(n))
        if (Array.isArray(i))
          for (const c of i)
            u.append(r, s(c));
        else
          u.set(r, s(i));
      return u;
    }
    function o(n, ...u) {
      for (const r of u) {
        for (const i of r.keys())
          n.delete(i);
        for (const [i, c] of r.entries())
          n.append(i, c);
      }
      return n;
    }
  })(Le)), Le;
}
var De = {}, Tt;
function Tr() {
  return Tt || (Tt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(r, i) {
      for (var c in i) Object.defineProperty(r, c, {
        enumerable: !0,
        get: i[c]
      });
    }
    e(t, {
      formatUrl: function() {
        return o;
      },
      formatWithValidation: function() {
        return u;
      },
      urlObjectKeys: function() {
        return n;
      }
    });
    const s = /* @__PURE__ */ (/* @__PURE__ */ yr())._(br()), l = /https?|ftp|gopher|file/;
    function o(r) {
      let { auth: i, hostname: c } = r, d = r.protocol || "", m = r.pathname || "", _ = r.hash || "", g = r.query || "", f = !1;
      i = i ? encodeURIComponent(i).replace(/%3A/i, ":") + "@" : "", r.host ? f = i + r.host : c && (f = i + (~c.indexOf(":") ? `[${c}]` : c), r.port && (f += ":" + r.port)), g && typeof g == "object" && (g = String(s.urlQueryToSearchParams(g)));
      let h = r.search || g && `?${g}` || "";
      return d && !d.endsWith(":") && (d += ":"), r.slashes || (!d || l.test(d)) && f !== !1 ? (f = "//" + (f || ""), m && m[0] !== "/" && (m = "/" + m)) : f || (f = ""), _ && _[0] !== "#" && (_ = "#" + _), h && h[0] !== "?" && (h = "?" + h), m = m.replace(/[?#]/g, encodeURIComponent), h = h.replace("#", "%23"), `${d}${f}${m}${h}${_}`;
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
    function u(r) {
      return process.env.NODE_ENV === "development" && r !== null && typeof r == "object" && Object.keys(r).forEach((i) => {
        n.includes(i) || console.warn(`Unknown key passed via urlObject into url.format: ${i}`);
      }), o(r);
    }
  })(De)), De;
}
var je = {}, Ot;
function sn() {
  return Ot || (Ot = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "omit", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(a, s) {
      const l = {};
      return Object.keys(a).forEach((o) => {
        s.includes(o) || (l[o] = a[o]);
      }), l;
    }
  })(je)), je;
}
var qe = {}, Nt;
function Oe() {
  return Nt || (Nt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(E, R) {
      for (var y in R) Object.defineProperty(E, y, {
        enumerable: !0,
        get: R[y]
      });
    }
    e(t, {
      DecodeError: function() {
        return g;
      },
      MiddlewareNotFoundError: function() {
        return P;
      },
      MissingStaticPage: function() {
        return p;
      },
      NormalizeError: function() {
        return f;
      },
      PageNotFoundError: function() {
        return h;
      },
      SP: function() {
        return m;
      },
      ST: function() {
        return _;
      },
      WEB_VITALS: function() {
        return a;
      },
      execOnce: function() {
        return s;
      },
      getDisplayName: function() {
        return r;
      },
      getLocationOrigin: function() {
        return n;
      },
      getURL: function() {
        return u;
      },
      isAbsoluteUrl: function() {
        return o;
      },
      isResSent: function() {
        return i;
      },
      loadGetInitialProps: function() {
        return d;
      },
      normalizeRepeatedSlashes: function() {
        return c;
      },
      stringifyError: function() {
        return b;
      }
    });
    const a = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function s(E) {
      let R = !1, y;
      return (...C) => (R || (R = !0, y = E(...C)), y);
    }
    const l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, o = (E) => l.test(E);
    function n() {
      const { protocol: E, hostname: R, port: y } = window.location;
      return `${E}//${R}${y ? ":" + y : ""}`;
    }
    function u() {
      const { href: E } = window.location, R = n();
      return E.substring(R.length);
    }
    function r(E) {
      return typeof E == "string" ? E : E.displayName || E.name || "Unknown";
    }
    function i(E) {
      return E.finished || E.headersSent;
    }
    function c(E) {
      const R = E.split("?");
      return R[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (R[1] ? `?${R.slice(1).join("?")}` : "");
    }
    async function d(E, R) {
      if (process.env.NODE_ENV !== "production" && E.prototype?.getInitialProps) {
        const N = `"${r(E)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
        throw Object.defineProperty(new Error(N), "__NEXT_ERROR_CODE", {
          value: "E1035",
          enumerable: !1,
          configurable: !0
        });
      }
      const y = R.res || R.ctx && R.ctx.res;
      if (!E.getInitialProps)
        return R.ctx && R.Component ? {
          pageProps: await d(R.Component, R.ctx)
        } : {};
      const C = await E.getInitialProps(R);
      if (y && i(y))
        return C;
      if (!C) {
        const N = `"${r(E)}.getInitialProps()" should resolve to an object. But found "${C}" instead.`;
        throw Object.defineProperty(new Error(N), "__NEXT_ERROR_CODE", {
          value: "E1025",
          enumerable: !1,
          configurable: !0
        });
      }
      return process.env.NODE_ENV !== "production" && Object.keys(C).length === 0 && !R.ctx && console.warn(`${r(E)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`), C;
    }
    const m = typeof performance < "u", _ = m && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((E) => typeof performance[E] == "function");
    class g extends Error {
    }
    class f extends Error {
    }
    class h extends Error {
      constructor(R) {
        super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${R}`;
      }
    }
    class p extends Error {
      constructor(R, y) {
        super(), this.message = `Failed to load static file for page: ${R} ${y}`;
      }
    }
    class P extends Error {
      constructor() {
        super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
      }
    }
    function b(E) {
      return JSON.stringify({
        message: E.message,
        stack: E.stack
      });
    }
  })(qe)), qe;
}
var he = { exports: {} }, He = {}, St;
function Or() {
  return St || (St = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "removeTrailingSlash", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(a) {
      return a.replace(/\/$/, "") || "/";
    }
  })(He)), He;
}
var Ue = {}, At;
function Et() {
  return At || (At = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "parsePath", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(a) {
      const s = a.indexOf("#"), l = a.indexOf("?"), o = l > -1 && (s < 0 || l < s);
      return o || s > -1 ? {
        pathname: a.substring(0, o ? l : s),
        query: o ? a.substring(l, s > -1 ? s : void 0) : "",
        hash: s > -1 ? a.slice(s) : ""
      } : {
        pathname: a,
        query: "",
        hash: ""
      };
    }
  })(Ue)), Ue;
}
var xt;
function Ne() {
  return xt || (xt = 1, (function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizePathTrailingSlash", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const a = Or(), s = Et(), l = (o) => {
      if (!o.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH)
        return o;
      const { pathname: n, query: u, hash: r } = (0, s.parsePath)(o);
      return process.env.__NEXT_TRAILING_SLASH ? /\.[^/]+\/?$/.test(n) ? `${(0, a.removeTrailingSlash)(n)}${u}${r}` : n.endsWith("/") ? `${n}${u}${r}` : `${n}/${u}${r}` : `${(0, a.removeTrailingSlash)(n)}${u}${r}`;
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  })(he, he.exports)), he.exports;
}
var Xe = {}, _e = { exports: {} }, ke = {}, wt;
function Nr() {
  return wt || (wt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "pathHasPrefix", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const e = Et();
    function a(s, l) {
      if (typeof s != "string")
        return !1;
      const { pathname: o } = (0, e.parsePath)(s);
      return o === l || o.startsWith(l + "/");
    }
  })(ke)), ke;
}
var It;
function ln() {
  return It || (It = 1, (function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "hasBasePath", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const a = Nr(), s = process.env.__NEXT_ROUTER_BASEPATH || "";
    function l(o) {
      return (0, a.pathHasPrefix)(o, s);
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  })(_e, _e.exports)), _e.exports;
}
var Mt;
function Sr() {
  return Mt || (Mt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isLocalURL", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const e = Oe(), a = ln();
    function s(l) {
      if (!(0, e.isAbsoluteUrl)(l)) return !0;
      try {
        const o = (0, e.getLocationOrigin)(), n = new URL(l, o);
        return n.origin === o && (0, a.hasBasePath)(n.pathname);
      } catch {
        return !1;
      }
    }
  })(Xe)), Xe;
}
var Fe = {}, Ge = {}, Lt;
function fn() {
  return Lt || (Lt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(o, n) {
      for (var u in n) Object.defineProperty(o, u, {
        enumerable: !0,
        get: n[u]
      });
    }
    e(t, {
      getSortedRouteObjects: function() {
        return l;
      },
      getSortedRoutes: function() {
        return s;
      }
    });
    class a {
      insert(n) {
        this._insert(n.split("/").filter(Boolean), [], !1);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(n = "/") {
        const u = [
          ...this.children.keys()
        ].sort();
        this.slugName !== null && u.splice(u.indexOf("[]"), 1), this.restSlugName !== null && u.splice(u.indexOf("[...]"), 1), this.optionalRestSlugName !== null && u.splice(u.indexOf("[[...]]"), 1);
        const r = u.map((i) => this.children.get(i)._smoosh(`${n}${i}/`)).reduce((i, c) => [
          ...i,
          ...c
        ], []);
        if (this.slugName !== null && r.push(...this.children.get("[]")._smoosh(`${n}[${this.slugName}]/`)), !this.placeholder) {
          const i = n === "/" ? "/" : n.slice(0, -1);
          if (this.optionalRestSlugName != null)
            throw Object.defineProperty(new Error(`You cannot define a route with the same specificity as a optional catch-all route ("${i}" and "${i}[[...${this.optionalRestSlugName}]]").`), "__NEXT_ERROR_CODE", {
              value: "E458",
              enumerable: !1,
              configurable: !0
            });
          r.unshift(i);
        }
        return this.restSlugName !== null && r.push(...this.children.get("[...]")._smoosh(`${n}[...${this.restSlugName}]/`)), this.optionalRestSlugName !== null && r.push(...this.children.get("[[...]]")._smoosh(`${n}[[...${this.optionalRestSlugName}]]/`)), r;
      }
      _insert(n, u, r) {
        if (n.length === 0) {
          this.placeholder = !1;
          return;
        }
        if (r)
          throw Object.defineProperty(new Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
            value: "E392",
            enumerable: !1,
            configurable: !0
          });
        let i = n[0];
        if (i.startsWith("[") && i.endsWith("]")) {
          let m = function(_, g) {
            if (_ !== null && _ !== g)
              throw Object.defineProperty(new Error(`You cannot use different slug names for the same dynamic path ('${_}' !== '${g}').`), "__NEXT_ERROR_CODE", {
                value: "E337",
                enumerable: !1,
                configurable: !0
              });
            u.forEach((f) => {
              if (f === g)
                throw Object.defineProperty(new Error(`You cannot have the same slug name "${g}" repeat within a single dynamic path`), "__NEXT_ERROR_CODE", {
                  value: "E247",
                  enumerable: !1,
                  configurable: !0
                });
              if (f.replace(/\W/g, "") === i.replace(/\W/g, ""))
                throw Object.defineProperty(new Error(`You cannot have the slug names "${f}" and "${g}" differ only by non-word symbols within a single dynamic path`), "__NEXT_ERROR_CODE", {
                  value: "E499",
                  enumerable: !1,
                  configurable: !0
                });
            }), u.push(g);
          }, c = i.slice(1, -1), d = !1;
          if (c.startsWith("[") && c.endsWith("]") && (c = c.slice(1, -1), d = !0), c.startsWith("…"))
            throw Object.defineProperty(new Error(`Detected a three-dot character ('…') at ('${c}'). Did you mean ('...')?`), "__NEXT_ERROR_CODE", {
              value: "E147",
              enumerable: !1,
              configurable: !0
            });
          if (c.startsWith("...") && (c = c.substring(3), r = !0), c.startsWith("[") || c.endsWith("]"))
            throw Object.defineProperty(new Error(`Segment names may not start or end with extra brackets ('${c}').`), "__NEXT_ERROR_CODE", {
              value: "E421",
              enumerable: !1,
              configurable: !0
            });
          if (c.startsWith("."))
            throw Object.defineProperty(new Error(`Segment names may not start with erroneous periods ('${c}').`), "__NEXT_ERROR_CODE", {
              value: "E288",
              enumerable: !1,
              configurable: !0
            });
          if (r)
            if (d) {
              if (this.restSlugName != null)
                throw Object.defineProperty(new Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${n[0]}" ).`), "__NEXT_ERROR_CODE", {
                  value: "E299",
                  enumerable: !1,
                  configurable: !0
                });
              m(this.optionalRestSlugName, c), this.optionalRestSlugName = c, i = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null)
                throw Object.defineProperty(new Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${n[0]}").`), "__NEXT_ERROR_CODE", {
                  value: "E300",
                  enumerable: !1,
                  configurable: !0
                });
              m(this.restSlugName, c), this.restSlugName = c, i = "[...]";
            }
          else {
            if (d)
              throw Object.defineProperty(new Error(`Optional route parameters are not yet supported ("${n[0]}").`), "__NEXT_ERROR_CODE", {
                value: "E435",
                enumerable: !1,
                configurable: !0
              });
            m(this.slugName, c), this.slugName = c, i = "[]";
          }
        }
        this.children.has(i) || this.children.set(i, new a()), this.children.get(i)._insert(n.slice(1), u, r);
      }
      constructor() {
        this.placeholder = !0, this.children = /* @__PURE__ */ new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
      }
    }
    function s(o) {
      const n = new a();
      return o.forEach((u) => n.insert(u)), n.smoosh();
    }
    function l(o, n) {
      const u = {}, r = [];
      for (let c = 0; c < o.length; c++) {
        const d = n(o[c]);
        u[d] = c, r[c] = d;
      }
      return s(r).map((c) => o[u[c]]);
    }
  })(Ge)), Ge;
}
var Ve = {}, ze = {}, We = {}, Be = {}, Dt;
function dn() {
  return Dt || (Dt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "ensureLeadingSlash", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(a) {
      return a.startsWith("/") ? a : `/${a}`;
    }
  })(Be)), Be;
}
var Ye = {}, jt;
function Ar() {
  return jt || (jt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(d, m) {
      for (var _ in m) Object.defineProperty(d, _, {
        enumerable: !0,
        get: m[_]
      });
    }
    e(t, {
      DEFAULT_SEGMENT_KEY: function() {
        return i;
      },
      NOT_FOUND_SEGMENT_KEY: function() {
        return c;
      },
      PAGE_SEGMENT_KEY: function() {
        return r;
      },
      addSearchParamsIfPageSegment: function() {
        return o;
      },
      computeSelectedLayoutSegment: function() {
        return n;
      },
      getSegmentValue: function() {
        return a;
      },
      getSelectedLayoutSegmentPath: function() {
        return u;
      },
      isGroupSegment: function() {
        return s;
      },
      isParallelRouteSegment: function() {
        return l;
      }
    });
    function a(d) {
      return Array.isArray(d) ? d[1] : d;
    }
    function s(d) {
      return d[0] === "(" && d.endsWith(")");
    }
    function l(d) {
      return d.startsWith("@") && d !== "@children";
    }
    function o(d, m) {
      if (d.includes(r)) {
        const g = JSON.stringify(m);
        return g !== "{}" ? r + "?" + g : r;
      }
      return d;
    }
    function n(d, m) {
      if (!d || d.length === 0)
        return null;
      const _ = m === "children" ? d[0] : d[d.length - 1];
      return _ === i ? null : _;
    }
    function u(d, m, _ = !0, g = []) {
      let f;
      if (_)
        f = d[1][m];
      else {
        const P = d[1];
        f = P.children ?? Object.values(P)[0];
      }
      if (!f) return g;
      const h = f[0];
      let p = a(h);
      return !p || p.startsWith(r) ? g : (g.push(p), u(f, m, !1, g));
    }
    const r = "__PAGE__", i = "__DEFAULT__", c = "/_not-found";
  })(Ye)), Ye;
}
var qt;
function pn() {
  return qt || (qt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(u, r) {
      for (var i in r) Object.defineProperty(u, i, {
        enumerable: !0,
        get: r[i]
      });
    }
    e(t, {
      compareAppPaths: function() {
        return o;
      },
      normalizeAppPath: function() {
        return l;
      },
      normalizeRscURL: function() {
        return n;
      }
    });
    const a = dn(), s = Ar();
    function l(u) {
      return (0, a.ensureLeadingSlash)(u.split("/").reduce((r, i, c, d) => !i || (0, s.isGroupSegment)(i) || i[0] === "@" || (i === "page" || i === "route") && c === d.length - 1 ? r : `${r}/${i}`, ""));
    }
    function o(u, r) {
      const i = u.includes("/@"), c = r.includes("/@");
      return i && !c ? -1 : !i && c ? 1 : u.localeCompare(r);
    }
    function n(u) {
      return u.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
  })(We)), We;
}
var Ht;
function Se() {
  return Ht || (Ht = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(n, u) {
      for (var r in u) Object.defineProperty(n, r, {
        enumerable: !0,
        get: u[r]
      });
    }
    e(t, {
      INTERCEPTION_ROUTE_MARKERS: function() {
        return s;
      },
      extractInterceptionRouteInformation: function() {
        return o;
      },
      isInterceptionRouteAppPath: function() {
        return l;
      }
    });
    const a = pn(), s = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function l(n) {
      return n.split("/").find((u) => s.find((r) => u.startsWith(r))) !== void 0;
    }
    function o(n) {
      let u, r, i;
      for (const c of n.split("/"))
        if (r = s.find((d) => c.startsWith(d)), r) {
          [u, i] = n.split(r, 2);
          break;
        }
      if (!u || !r || !i)
        throw Object.defineProperty(new Error(`Invalid interception route: ${n}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
          value: "E269",
          enumerable: !1,
          configurable: !0
        });
      switch (u = (0, a.normalizeAppPath)(u), r) {
        case "(.)":
          u === "/" ? i = `/${i}` : i = u + "/" + i;
          break;
        case "(..)":
          if (u === "/")
            throw Object.defineProperty(new Error(`Invalid interception route: ${n}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
              value: "E207",
              enumerable: !1,
              configurable: !0
            });
          i = u.split("/").slice(0, -1).concat(i).join("/");
          break;
        case "(...)":
          i = "/" + i;
          break;
        case "(..)(..)":
          const c = u.split("/");
          if (c.length <= 2)
            throw Object.defineProperty(new Error(`Invalid interception route: ${n}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
              value: "E486",
              enumerable: !1,
              configurable: !0
            });
          i = c.slice(0, -2).concat(i).join("/");
          break;
        default:
          throw Object.defineProperty(new Error("Invariant: unexpected marker"), "__NEXT_ERROR_CODE", {
            value: "E112",
            enumerable: !1,
            configurable: !0
          });
      }
      return {
        interceptingRoute: u,
        interceptedRoute: i
      };
    }
  })(ze)), ze;
}
var Ut;
function hn() {
  return Ut || (Ut = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isDynamicRoute", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const e = Se(), a = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/, s = /\/\[[^/]+\](?=\/|$)/;
    function l(o, n = !0) {
      return (0, e.isInterceptionRouteAppPath)(o) && (o = (0, e.extractInterceptionRouteInformation)(o).interceptedRoute), n ? s.test(o) : a.test(o);
    }
  })(Ve)), Ve;
}
var Xt;
function _n() {
  return Xt || (Xt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(l, o) {
      for (var n in o) Object.defineProperty(l, n, {
        enumerable: !0,
        get: o[n]
      });
    }
    e(t, {
      getSortedRouteObjects: function() {
        return a.getSortedRouteObjects;
      },
      getSortedRoutes: function() {
        return a.getSortedRoutes;
      },
      isDynamicRoute: function() {
        return s.isDynamicRoute;
      }
    });
    const a = fn(), s = hn();
  })(Fe)), Fe;
}
var $e = {}, Ke = {}, Qe = {}, Ze = { exports: {} }, kt;
function mn() {
  return kt || (kt = 1, (() => {
    typeof __nccwpck_require__ < "u" && (__nccwpck_require__.ab = __dirname + "/");
    var t = {};
    (() => {
      var e = t;
      Object.defineProperty(e, "__esModule", { value: !0 }), e.pathToRegexp = e.tokensToRegexp = e.regexpToFunction = e.match = e.tokensToFunction = e.compile = e.parse = void 0;
      function a(f) {
        for (var h = [], p = 0; p < f.length; ) {
          var P = f[p];
          if (P === "*" || P === "+" || P === "?") {
            h.push({ type: "MODIFIER", index: p, value: f[p++] });
            continue;
          }
          if (P === "\\") {
            h.push({ type: "ESCAPED_CHAR", index: p++, value: f[p++] });
            continue;
          }
          if (P === "{") {
            h.push({ type: "OPEN", index: p, value: f[p++] });
            continue;
          }
          if (P === "}") {
            h.push({ type: "CLOSE", index: p, value: f[p++] });
            continue;
          }
          if (P === ":") {
            for (var b = "", E = p + 1; E < f.length; ) {
              var R = f.charCodeAt(E);
              if (R >= 48 && R <= 57 || R >= 65 && R <= 90 || R >= 97 && R <= 122 || R === 95) {
                b += f[E++];
                continue;
              }
              break;
            }
            if (!b) throw new TypeError("Missing parameter name at ".concat(p));
            h.push({ type: "NAME", index: p, value: b }), p = E;
            continue;
          }
          if (P === "(") {
            var y = 1, C = "", E = p + 1;
            if (f[E] === "?")
              throw new TypeError('Pattern cannot start with "?" at '.concat(E));
            for (; E < f.length; ) {
              if (f[E] === "\\") {
                C += f[E++] + f[E++];
                continue;
              }
              if (f[E] === ")") {
                if (y--, y === 0) {
                  E++;
                  break;
                }
              } else if (f[E] === "(" && (y++, f[E + 1] !== "?"))
                throw new TypeError("Capturing groups are not allowed at ".concat(E));
              C += f[E++];
            }
            if (y) throw new TypeError("Unbalanced pattern at ".concat(p));
            if (!C) throw new TypeError("Missing pattern at ".concat(p));
            h.push({ type: "PATTERN", index: p, value: C }), p = E;
            continue;
          }
          h.push({ type: "CHAR", index: p, value: f[p++] });
        }
        return h.push({ type: "END", index: p, value: "" }), h;
      }
      function s(f, h) {
        h === void 0 && (h = {});
        for (var p = a(f), P = h.prefixes, b = P === void 0 ? "./" : P, E = h.delimiter, R = E === void 0 ? "/#?" : E, y = [], C = 0, N = 0, A = "", v = function(V) {
          if (N < p.length && p[N].type === V) return p[N++].value;
        }, O = function(V) {
          var H = v(V);
          if (H !== void 0) return H;
          var $ = p[N], z = $.type, oe = $.index;
          throw new TypeError("Unexpected ".concat(z, " at ").concat(oe, ", expected ").concat(V));
        }, x = function() {
          for (var V = "", H; H = v("CHAR") || v("ESCAPED_CHAR"); )
            V += H;
          return V;
        }, w = function(V) {
          for (var H = 0, $ = R; H < $.length; H++) {
            var z = $[H];
            if (V.indexOf(z) > -1) return !0;
          }
          return !1;
        }, M = function(V) {
          var H = y[y.length - 1], $ = V || (H && typeof H == "string" ? H : "");
          if (H && !$)
            throw new TypeError('Must have text between two parameters, missing text after "'.concat(H.name, '"'));
          return !$ || w($) ? "[^".concat(r(R), "]+?") : "(?:(?!".concat(r($), ")[^").concat(r(R), "])+?");
        }; N < p.length; ) {
          var I = v("CHAR"), q = v("NAME"), B = v("PATTERN");
          if (q || B) {
            var U = I || "";
            b.indexOf(U) === -1 && (A += U, U = ""), A && (y.push(A), A = ""), y.push({ name: q || C++, prefix: U, suffix: "", pattern: B || M(U), modifier: v("MODIFIER") || "" });
            continue;
          }
          var D = I || v("ESCAPED_CHAR");
          if (D) {
            A += D;
            continue;
          }
          A && (y.push(A), A = "");
          var J = v("OPEN");
          if (J) {
            var U = x(), Z = v("NAME") || "", G = v("PATTERN") || "", Y = x();
            O("CLOSE"), y.push({ name: Z || (G ? C++ : ""), pattern: Z && !G ? M(U) : G, prefix: U, suffix: Y, modifier: v("MODIFIER") || "" });
            continue;
          }
          O("END");
        }
        return y;
      }
      e.parse = s;
      function l(f, h) {
        return o(s(f, h), h);
      }
      e.compile = l;
      function o(f, h) {
        h === void 0 && (h = {});
        var p = i(h), P = h.encode, b = P === void 0 ? function(C) {
          return C;
        } : P, E = h.validate, R = E === void 0 ? !0 : E, y = f.map((function(C) {
          if (typeof C == "object")
            return new RegExp("^(?:".concat(C.pattern, ")$"), p);
        }));
        return function(C) {
          for (var N = "", A = 0; A < f.length; A++) {
            var v = f[A];
            if (typeof v == "string") {
              N += v;
              continue;
            }
            var O = C ? C[v.name] : void 0, x = v.modifier === "?" || v.modifier === "*", w = v.modifier === "*" || v.modifier === "+";
            if (Array.isArray(O)) {
              if (!w)
                throw new TypeError('Expected "'.concat(v.name, '" to not repeat, but got an array'));
              if (O.length === 0) {
                if (x) continue;
                throw new TypeError('Expected "'.concat(v.name, '" to not be empty'));
              }
              for (var M = 0; M < O.length; M++) {
                var I = b(O[M], v);
                if (R && !y[A].test(I))
                  throw new TypeError('Expected all "'.concat(v.name, '" to match "').concat(v.pattern, '", but got "').concat(I, '"'));
                N += v.prefix + I + v.suffix;
              }
              continue;
            }
            if (typeof O == "string" || typeof O == "number") {
              var I = b(String(O), v);
              if (R && !y[A].test(I))
                throw new TypeError('Expected "'.concat(v.name, '" to match "').concat(v.pattern, '", but got "').concat(I, '"'));
              N += v.prefix + I + v.suffix;
              continue;
            }
            if (!x) {
              var q = w ? "an array" : "a string";
              throw new TypeError('Expected "'.concat(v.name, '" to be ').concat(q));
            }
          }
          return N;
        };
      }
      e.tokensToFunction = o;
      function n(f, h) {
        var p = [], P = g(f, p, h);
        return u(P, p, h);
      }
      e.match = n;
      function u(f, h, p) {
        p === void 0 && (p = {});
        var P = p.decode, b = P === void 0 ? function(E) {
          return E;
        } : P;
        return function(E) {
          var R = f.exec(E);
          if (!R) return !1;
          for (var y = R[0], C = R.index, N = /* @__PURE__ */ Object.create(null), A = function(O) {
            if (R[O] === void 0) return "continue";
            var x = h[O - 1];
            x.modifier === "*" || x.modifier === "+" ? N[x.name] = R[O].split(x.prefix + x.suffix).map((function(w) {
              return b(w, x);
            })) : N[x.name] = b(R[O], x);
          }, v = 1; v < R.length; v++)
            A(v);
          return { path: y, index: C, params: N };
        };
      }
      e.regexpToFunction = u;
      function r(f) {
        return f.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function i(f) {
        return f && f.sensitive ? "" : "i";
      }
      function c(f, h) {
        if (!h) return f;
        for (var p = /\((?:\?<(.*?)>)?(?!\?)/g, P = 0, b = p.exec(f.source); b; )
          h.push({ name: b[1] || P++, prefix: "", suffix: "", modifier: "", pattern: "" }), b = p.exec(f.source);
        return f;
      }
      function d(f, h, p) {
        var P = f.map((function(b) {
          return g(b, h, p).source;
        }));
        return new RegExp("(?:".concat(P.join("|"), ")"), i(p));
      }
      function m(f, h, p) {
        return _(s(f, p), h, p);
      }
      function _(f, h, p) {
        p === void 0 && (p = {});
        for (var P = p.strict, b = P === void 0 ? !1 : P, E = p.start, R = E === void 0 ? !0 : E, y = p.end, C = y === void 0 ? !0 : y, N = p.encode, A = N === void 0 ? function(H) {
          return H;
        } : N, v = p.delimiter, O = v === void 0 ? "/#?" : v, x = p.endsWith, w = x === void 0 ? "" : x, M = "[".concat(r(w), "]|$"), I = "[".concat(r(O), "]"), q = R ? "^" : "", B = 0, U = f; B < U.length; B++) {
          var D = U[B];
          if (typeof D == "string")
            q += r(A(D));
          else {
            var J = r(A(D.prefix)), Z = r(A(D.suffix));
            if (D.pattern)
              if (h && h.push(D), J || Z)
                if (D.modifier === "+" || D.modifier === "*") {
                  var G = D.modifier === "*" ? "?" : "";
                  q += "(?:".concat(J, "((?:").concat(D.pattern, ")(?:").concat(Z).concat(J, "(?:").concat(D.pattern, "))*)").concat(Z, ")").concat(G);
                } else
                  q += "(?:".concat(J, "(").concat(D.pattern, ")").concat(Z, ")").concat(D.modifier);
              else {
                if (D.modifier === "+" || D.modifier === "*")
                  throw new TypeError('Can not repeat "'.concat(D.name, '" without a prefix and suffix'));
                q += "(".concat(D.pattern, ")").concat(D.modifier);
              }
            else
              q += "(?:".concat(J).concat(Z, ")").concat(D.modifier);
          }
        }
        if (C)
          b || (q += "".concat(I, "?")), q += p.endsWith ? "(?=".concat(M, ")") : "$";
        else {
          var Y = f[f.length - 1], V = typeof Y == "string" ? I.indexOf(Y[Y.length - 1]) > -1 : Y === void 0;
          b || (q += "(?:".concat(I, "(?=").concat(M, "))?")), V || (q += "(?=".concat(I, "|").concat(M, ")"));
        }
        return new RegExp(q, i(p));
      }
      e.tokensToRegexp = _;
      function g(f, h, p) {
        return f instanceof RegExp ? c(f, h) : Array.isArray(f) ? d(f, h, p) : m(f, h, p);
      }
      e.pathToRegexp = g;
    })(), Ze.exports = t;
  })()), Ze.exports;
}
var Je = {}, Ft;
function gn() {
  return Ft || (Ft = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(r, i) {
      for (var c in i) Object.defineProperty(r, c, {
        enumerable: !0,
        get: i[c]
      });
    }
    e(t, {
      PARAM_SEPARATOR: function() {
        return a;
      },
      hasAdjacentParameterIssues: function() {
        return s;
      },
      normalizeAdjacentParameters: function() {
        return l;
      },
      normalizeTokensForRegexp: function() {
        return o;
      },
      stripNormalizedSeparators: function() {
        return n;
      },
      stripParameterSeparators: function() {
        return u;
      }
    });
    const a = "_NEXTSEP_";
    function s(r) {
      return typeof r != "string" ? !1 : !!(/\/\(\.{1,3}\):[^/\s]+/.test(r) || /:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(r));
    }
    function l(r) {
      let i = r;
      return i = i.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${a}:$2`), i = i.replace(/:([^:/\s)]+)(?=:)/g, `:$1${a}`), i;
    }
    function o(r) {
      return r.map((i) => typeof i == "object" && i !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
      "modifier" in i && // Only repeating modifiers (* or +) cause the validation error
      // Other modifiers like '?' (optional) are fine
      (i.modifier === "*" || i.modifier === "+") && // Token objects can have different shapes depending on route pattern
      "prefix" in i && "suffix" in i && // Both prefix and suffix must be empty strings
      // This is what causes the validation error in path-to-regexp
      i.prefix === "" && i.suffix === "" ? {
        ...i,
        prefix: "/"
      } : i);
    }
    function n(r) {
      return r.replace(new RegExp(`\\)${a}`, "g"), ")");
    }
    function u(r) {
      const i = {};
      for (const [c, d] of Object.entries(r))
        typeof d == "string" ? i[c] = d.replace(new RegExp(`^${a}`), "") : Array.isArray(d) ? i[c] = d.map((m) => typeof m == "string" ? m.replace(new RegExp(`^${a}`), "") : m) : i[c] = d;
      return i;
    }
  })(Je)), Je;
}
var Gt;
function En() {
  return Gt || (Gt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(r, i) {
      for (var c in i) Object.defineProperty(r, c, {
        enumerable: !0,
        get: i[c]
      });
    }
    e(t, {
      safeCompile: function() {
        return o;
      },
      safePathToRegexp: function() {
        return l;
      },
      safeRegexpToFunction: function() {
        return n;
      },
      safeRouteMatcher: function() {
        return u;
      }
    });
    const a = mn(), s = gn();
    function l(r, i, c) {
      if (typeof r != "string")
        return (0, a.pathToRegexp)(r, i, c);
      const d = (0, s.hasAdjacentParameterIssues)(r), m = d ? (0, s.normalizeAdjacentParameters)(r) : r;
      try {
        return (0, a.pathToRegexp)(m, i, c);
      } catch (_) {
        if (!d)
          try {
            const g = (0, s.normalizeAdjacentParameters)(r);
            return (0, a.pathToRegexp)(g, i, c);
          } catch {
            throw _;
          }
        throw _;
      }
    }
    function o(r, i) {
      const c = (0, s.hasAdjacentParameterIssues)(r), d = c ? (0, s.normalizeAdjacentParameters)(r) : r;
      try {
        const m = (0, a.compile)(d, i);
        return c ? (_) => (0, s.stripNormalizedSeparators)(m(_)) : m;
      } catch (m) {
        if (!c)
          try {
            const _ = (0, s.normalizeAdjacentParameters)(r), g = (0, a.compile)(_, i);
            return (f) => (0, s.stripNormalizedSeparators)(g(f));
          } catch {
            throw m;
          }
        throw m;
      }
    }
    function n(r, i) {
      const c = (0, a.regexpToFunction)(r, i || []);
      return (d) => {
        const m = c(d);
        return m ? {
          ...m,
          params: (0, s.stripParameterSeparators)(m.params)
        } : !1;
      };
    }
    function u(r) {
      return (i) => {
        const c = r(i);
        return c ? (0, s.stripParameterSeparators)(c) : !1;
      };
    }
  })(Qe)), Qe;
}
var Vt;
function xr() {
  return Vt || (Vt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "getRouteMatcher", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const e = Oe(), a = En();
    function s({ re: l, groups: o }) {
      const n = (u) => {
        const r = l.exec(u);
        if (!r) return !1;
        const i = (d) => {
          try {
            return decodeURIComponent(d);
          } catch {
            throw Object.defineProperty(new e.DecodeError("failed to decode param"), "__NEXT_ERROR_CODE", {
              value: "E528",
              enumerable: !1,
              configurable: !0
            });
          }
        }, c = {};
        for (const [d, m] of Object.entries(o)) {
          const _ = r[m.pos];
          _ !== void 0 && (m.repeat ? c[d] = _.split("/").map((g) => i(g)) : c[d] = i(_));
        }
        return c;
      };
      return (0, a.safeRouteMatcher)(n);
    }
  })(Ke)), Ke;
}
var et = {}, tt = {}, zt;
function Rn() {
  return zt || (zt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(Pt, S) {
      for (var Q in S) Object.defineProperty(Pt, Q, {
        enumerable: !0,
        get: S[Q]
      });
    }
    e(t, {
      ACTION_SUFFIX: function() {
        return _;
      },
      APP_DIR_ALIAS: function() {
        return G;
      },
      CACHE_ONE_YEAR_SECONDS: function() {
        return x;
      },
      DOT_NEXT_ALIAS: function() {
        return J;
      },
      ESLINT_DEFAULT_DIRS: function() {
        return Ie;
      },
      GSP_NO_RETURNED_VALUE: function() {
        return F;
      },
      GSSP_COMPONENT_MEMBER_ERROR: function() {
        return le;
      },
      GSSP_NO_RETURNED_VALUE: function() {
        return xe;
      },
      HTML_CONTENT_TYPE_HEADER: function() {
        return s;
      },
      INFINITE_CACHE: function() {
        return w;
      },
      INSTRUMENTATION_HOOK_FILENAME: function() {
        return U;
      },
      JSON_CONTENT_TYPE_HEADER: function() {
        return l;
      },
      MATCHED_PATH_HEADER: function() {
        return u;
      },
      MIDDLEWARE_FILENAME: function() {
        return M;
      },
      MIDDLEWARE_LOCATION_REGEXP: function() {
        return I;
      },
      NEXT_BODY_SUFFIX: function() {
        return h;
      },
      NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return v;
      },
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return b;
      },
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return E;
      },
      NEXT_CACHE_ROOT_PARAM_TAG_ID: function() {
        return O;
      },
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return A;
      },
      NEXT_CACHE_TAGS_HEADER: function() {
        return P;
      },
      NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return C;
      },
      NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return N;
      },
      NEXT_DATA_SUFFIX: function() {
        return g;
      },
      NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return n;
      },
      NEXT_META_SUFFIX: function() {
        return f;
      },
      NEXT_NAV_DEPLOYMENT_ID_HEADER: function() {
        return p;
      },
      NEXT_QUERY_PARAM_PREFIX: function() {
        return o;
      },
      NEXT_RESUME_HEADER: function() {
        return R;
      },
      NEXT_RESUME_STATE_LENGTH_HEADER: function() {
        return y;
      },
      NON_STANDARD_NODE_ENV: function() {
        return fe;
      },
      PAGES_DIR_ALIAS: function() {
        return D;
      },
      PRERENDER_REVALIDATE_HEADER: function() {
        return r;
      },
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return i;
      },
      PROXY_FILENAME: function() {
        return q;
      },
      PROXY_LOCATION_REGEXP: function() {
        return B;
      },
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return k;
      },
      ROOT_DIR_ALIAS: function() {
        return Z;
      },
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return Ae;
      },
      RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return oe;
      },
      RSC_ACTION_PROXY_ALIAS: function() {
        return H;
      },
      RSC_ACTION_VALIDATE_ALIAS: function() {
        return V;
      },
      RSC_CACHE_WRAPPER_ALIAS: function() {
        return $;
      },
      RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
        return z;
      },
      RSC_MOD_REF_PROXY_ALIAS: function() {
        return Y;
      },
      RSC_SEGMENTS_DIR_SUFFIX: function() {
        return c;
      },
      RSC_SEGMENT_SUFFIX: function() {
        return d;
      },
      RSC_SUFFIX: function() {
        return m;
      },
      SERVER_PROPS_EXPORT_ERROR: function() {
        return ce;
      },
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return ee;
      },
      SERVER_PROPS_SSG_CONFLICT: function() {
        return K;
      },
      SERVER_RUNTIME: function() {
        return ne;
      },
      SSG_FALLBACK_EXPORT_ERROR: function() {
        return we;
      },
      SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return ie;
      },
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return ue;
      },
      TEXT_PLAIN_CONTENT_TYPE_HEADER: function() {
        return a;
      },
      UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return se;
      },
      WEBPACK_LAYERS: function() {
        return ae;
      },
      WEBPACK_RESOURCE_QUERIES: function() {
        return vt;
      },
      WEB_SOCKET_MAX_RECONNECTIONS: function() {
        return j;
      }
    });
    const a = "text/plain", s = "text/html; charset=utf-8", l = "application/json; charset=utf-8", o = "nxtP", n = "nxtI", u = "x-matched-path", r = "x-prerender-revalidate", i = "x-prerender-revalidate-if-generated", c = ".segments", d = ".segment.rsc", m = ".rsc", _ = ".action", g = ".json", f = ".meta", h = ".body", p = "x-nextjs-deployment-id", P = "x-next-cache-tags", b = "x-next-revalidated-tags", E = "x-next-revalidate-tag-token", R = "next-resume", y = "x-next-resume-state-length", C = 128, N = 256, A = 1024, v = "_N_T_", O = "_N_RP_", x = 31536e3, w = 4294967294, M = "middleware", I = `(?:src/)?${M}`, q = "proxy", B = `(?:src/)?${q}`, U = "instrumentation", D = "private-next-pages", J = "private-dot-next", Z = "private-next-root-dir", G = "private-next-app-dir", Y = "private-next-rsc-mod-ref-proxy", V = "private-next-rsc-action-validate", H = "private-next-rsc-server-reference", $ = "private-next-rsc-cache-wrapper", z = "private-next-rsc-track-dynamic-import", oe = "private-next-rsc-action-encryption", Ae = "private-next-rsc-action-client-wrapper", k = "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict", ie = "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps", ee = "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.", K = "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps", ue = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props", ce = "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export", F = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?", xe = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?", se = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.", le = "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member", fe = 'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env', we = "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export", Ie = [
      "app",
      "pages",
      "components",
      "lib",
      "src"
    ], ne = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    }, j = 12, L = {
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
    }, ae = {
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
    }, vt = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
  })(tt)), tt;
}
var rt = {}, Wt;
function vn() {
  return Wt || (Wt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "escapeStringRegexp", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const e = /[|\\{}()[\]^$+*?.-]/, a = /[|\\{}()[\]^$+*?.-]/g;
    function s(l) {
      return e.test(l) ? l.replace(a, "\\$&") : l;
    }
  })(rt)), rt;
}
var nt = {}, at = {}, Bt;
function Rt() {
  return Bt || (Bt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "InvariantError", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    class e extends Error {
      constructor(s, l) {
        super(`Invariant: ${s.endsWith(".") ? s : s + "."} This is a bug in Next.js.`, l), this.name = "InvariantError";
      }
    }
  })(at)), at;
}
var ot = {}, Yt;
function Pn() {
  return Yt || (Yt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "parseLoaderTree", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const e = Ar();
    function a(s) {
      const [l, o, n, u] = s, { layout: r, template: i } = n;
      let { page: c } = n;
      c = l === e.DEFAULT_SEGMENT_KEY ? n.defaultPage : c;
      const d = r?.[1] || i?.[1] || c?.[1];
      return {
        page: c,
        segment: l,
        modules: n,
        /* it can be either layout / template / page */
        conventionPath: d,
        parallelRoutes: o,
        staticSiblings: u
      };
    }
  })(ot)), ot;
}
var it = {}, ut = {}, $t;
function Cn() {
  return $t || ($t = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(n, u) {
      for (var r in u) Object.defineProperty(n, r, {
        enumerable: !0,
        get: u[r]
      });
    }
    e(t, {
      getParamProperties: function() {
        return o;
      },
      getSegmentParam: function() {
        return s;
      },
      isCatchAll: function() {
        return l;
      }
    });
    const a = Se();
    function s(n) {
      const u = a.INTERCEPTION_ROUTE_MARKERS.find((r) => n.startsWith(r));
      return u && (n = n.slice(u.length)), n.startsWith("[[...") && n.endsWith("]]") ? {
        // TODO-APP: Optional catchall does not currently work with parallel routes,
        // so for now aren't handling a potential interception marker.
        paramType: "optional-catchall",
        paramName: n.slice(5, -2)
      } : n.startsWith("[...") && n.endsWith("]") ? {
        paramType: u ? `catchall-intercepted-${u}` : "catchall",
        paramName: n.slice(4, -1)
      } : n.startsWith("[") && n.endsWith("]") ? {
        paramType: u ? `dynamic-intercepted-${u}` : "dynamic",
        paramName: n.slice(1, -1)
      } : null;
    }
    function l(n) {
      return n === "catchall" || n === "catchall-intercepted-(..)(..)" || n === "catchall-intercepted-(.)" || n === "catchall-intercepted-(..)" || n === "catchall-intercepted-(...)" || n === "optional-catchall";
    }
    function o(n) {
      let u = !1, r = !1;
      switch (n) {
        case "catchall":
        case "catchall-intercepted-(..)(..)":
        case "catchall-intercepted-(.)":
        case "catchall-intercepted-(..)":
        case "catchall-intercepted-(...)":
          u = !0;
          break;
        case "optional-catchall":
          u = !0, r = !0;
          break;
      }
      return {
        repeat: u,
        optional: r
      };
    }
  })(ut)), ut;
}
var Kt;
function yn() {
  return Kt || (Kt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(c, d) {
      for (var m in d) Object.defineProperty(c, m, {
        enumerable: !0,
        get: d[m]
      });
    }
    e(t, {
      isInterceptionAppRoute: function() {
        return r;
      },
      isNormalizedAppRoute: function() {
        return u;
      },
      parseAppRoute: function() {
        return i;
      },
      parseAppRouteSegment: function() {
        return n;
      }
    });
    const a = Rt(), s = Cn(), l = Se();
    function o(c) {
      if (!/%5b|%5d/i.test(c))
        return c;
      try {
        const d = decodeURIComponent(c);
        return (0, s.getSegmentParam)(d) ? d : c;
      } catch {
        return c;
      }
    }
    function n(c) {
      if (c === "")
        return null;
      const d = l.INTERCEPTION_ROUTE_MARKERS.find((_) => c.startsWith(_)), m = (0, s.getSegmentParam)(c);
      return m ? {
        type: "dynamic",
        name: c,
        param: m,
        interceptionMarker: d
      } : c.startsWith("(") && c.endsWith(")") ? {
        type: "route-group",
        name: c,
        interceptionMarker: d
      } : c.startsWith("@") ? {
        type: "parallel-route",
        name: c,
        interceptionMarker: d
      } : {
        type: "static",
        name: c,
        interceptionMarker: d
      };
    }
    function u(c) {
      return c.normalized;
    }
    function r(c) {
      return c.interceptionMarker !== void 0 && c.interceptingRoute !== void 0 && c.interceptedRoute !== void 0;
    }
    function i(c, d) {
      const m = c.split("/").filter(Boolean), _ = [];
      let g, f, h;
      for (const P of m) {
        const b = o(P), E = n(b);
        if (E) {
          if (d && (E.type === "route-group" || E.type === "parallel-route"))
            throw Object.defineProperty(new a.InvariantError(`${c} is being parsed as a normalized route, but it has a route group or parallel route segment.`), "__NEXT_ERROR_CODE", {
              value: "E923",
              enumerable: !1,
              configurable: !0
            });
          if (_.push(E), E.interceptionMarker) {
            const R = c.split(E.interceptionMarker);
            if (R.length !== 2)
              throw Object.defineProperty(new Error(`Invalid interception route: ${c}`), "__NEXT_ERROR_CODE", {
                value: "E924",
                enumerable: !1,
                configurable: !0
              });
            f = d ? i(R[0], !0) : i(R[0], !1), h = d ? i(R[1], !0) : i(R[1], !1), g = E.interceptionMarker;
          }
        }
      }
      const p = _.filter((P) => P.type === "dynamic");
      return {
        normalized: d,
        pathname: c,
        segments: _,
        dynamicSegments: p,
        interceptionMarker: g,
        interceptingRoute: f,
        interceptedRoute: h
      };
    }
  })(it)), it;
}
var ct = {}, st = {}, Qt;
function bn() {
  return Qt || (Qt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "interceptionPrefixFromParamType", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(a) {
      switch (a) {
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
  })(st)), st;
}
var Zt;
function Tn() {
  return Zt || (Zt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "resolveParamValue", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const e = Rt(), a = bn();
    function s(o, n, u) {
      return o.type === "dynamic" ? n[o.param.paramName] : (0, a.interceptionPrefixFromParamType)(u) === o.interceptionMarker ? o.name.replace(o.interceptionMarker, "") : o.name;
    }
    function l(o, n, u, r, i) {
      switch (n) {
        case "catchall":
        case "optional-catchall":
        case "catchall-intercepted-(..)(..)":
        case "catchall-intercepted-(.)":
        case "catchall-intercepted-(..)":
        case "catchall-intercepted-(...)":
          const c = [];
          for (let d = u; d < r.segments.length; d++) {
            const m = r.segments[d];
            if (m.type === "static") {
              let _ = m.name;
              const g = (0, a.interceptionPrefixFromParamType)(n);
              g && d === u && g === m.interceptionMarker && (_ = _.replace(m.interceptionMarker, "")), c.push(_);
            } else {
              if (!i.hasOwnProperty(m.param.paramName)) {
                if (m.param.paramType === "optional-catchall")
                  break;
                return;
              }
              const _ = i[m.param.paramName];
              Array.isArray(_) ? c.push(..._) : c.push(_);
            }
          }
          if (c.length > 0)
            return c;
          if (n === "optional-catchall")
            return;
          throw Object.defineProperty(new e.InvariantError(`Unexpected empty path segments match for a route "${r.pathname}" with param "${o}" of type "${n}"`), "__NEXT_ERROR_CODE", {
            value: "E931",
            enumerable: !1,
            configurable: !0
          });
        case "dynamic":
        case "dynamic-intercepted-(..)(..)":
        case "dynamic-intercepted-(.)":
        case "dynamic-intercepted-(..)":
        case "dynamic-intercepted-(...)":
          if (u < r.segments.length) {
            const d = r.segments[u];
            return d.type === "dynamic" && !i.hasOwnProperty(d.param.paramName) ? void 0 : s(d, i, n);
          }
          return;
      }
    }
  })(ct)), ct;
}
var Jt;
function On() {
  return Jt || (Jt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(m, _) {
      for (var g in _) Object.defineProperty(m, g, {
        enumerable: !0,
        get: _[g]
      });
    }
    e(t, {
      PARAMETER_PATTERN: function() {
        return i;
      },
      getDynamicParam: function() {
        return r;
      },
      interpolateParallelRouteParams: function() {
        return u;
      },
      parseMatchedParameter: function() {
        return d;
      },
      parseParameter: function() {
        return c;
      }
    });
    const a = Rt(), s = Pn(), l = yn(), o = Tn();
    function n(m, _, g) {
      let f = m[_];
      if (g?.has(_)) {
        const [h] = g.get(_);
        f = h;
      } else Array.isArray(f) ? f = f.map((h) => encodeURIComponent(h)) : typeof f == "string" && (f = encodeURIComponent(f));
      return f;
    }
    function u(m, _, g, f) {
      const h = structuredClone(_), p = [
        {
          tree: m,
          depth: 0
        }
      ], P = (0, l.parseAppRoute)(g, !0);
      for (; p.length > 0; ) {
        const { tree: b, depth: E } = p.pop(), { segment: R, parallelRoutes: y } = (0, s.parseLoaderTree)(b), C = (0, l.parseAppRouteSegment)(R);
        if (C?.type === "dynamic" && !h.hasOwnProperty(C.param.paramName) && // If the param is in the fallback route params, we don't need to
        // interpolate it because it's already marked as being unknown.
        !f?.has(C.param.paramName)) {
          const { paramName: A, paramType: v } = C.param, O = (0, o.resolveParamValue)(A, v, E, P, h);
          if (O !== void 0)
            h[A] = O;
          else if (v !== "optional-catchall")
            throw Object.defineProperty(new a.InvariantError(`Could not resolve param value for segment: ${A}`), "__NEXT_ERROR_CODE", {
              value: "E932",
              enumerable: !1,
              configurable: !0
            });
        }
        let N = E;
        C && C.type !== "route-group" && C.type !== "parallel-route" && N++;
        for (const A of Object.values(y))
          p.push({
            tree: A,
            depth: N
          });
      }
      return h;
    }
    function r(m, _, g, f, h) {
      let p = n(m, _, f);
      if (!p || p.length === 0) {
        if (g === "oc")
          return {
            param: _,
            value: null,
            type: g,
            treeSegment: [
              _,
              "",
              g,
              h
            ]
          };
        throw Object.defineProperty(new a.InvariantError(`Missing value for segment key: "${_}" with dynamic param type: ${g}`), "__NEXT_ERROR_CODE", {
          value: "E864",
          enumerable: !1,
          configurable: !0
        });
      }
      const P = Array.isArray(p) ? p.join("/") : p;
      return {
        param: _,
        // The value that is passed to user code.
        value: p,
        // The value that is rendered in the router tree.
        // TODO: If the number of static siblings exceeds some threshold (e.g.,
        // dozens or hundreds), consider sending a Bloom filter instead of the full
        // array to reduce payload size. The client would then use the Bloom filter
        // to check membership with a small false positive rate.
        treeSegment: [
          _,
          P,
          g,
          h
        ],
        type: g
      };
    }
    const i = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
    function c(m) {
      const _ = m.match(i);
      return d(_ ? _[2] : m);
    }
    function d(m) {
      const _ = m.startsWith("[") && m.endsWith("]");
      _ && (m = m.slice(1, -1));
      const g = m.startsWith("...");
      return g && (m = m.slice(3)), {
        key: m,
        repeat: g,
        optional: _
      };
    }
  })(nt)), nt;
}
var er;
function wr() {
  return er || (er = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(g, f) {
      for (var h in f) Object.defineProperty(g, h, {
        enumerable: !0,
        get: f[h]
      });
    }
    e(t, {
      getNamedMiddlewareRegex: function() {
        return _;
      },
      getNamedRouteRegex: function() {
        return m;
      },
      getRouteRegex: function() {
        return r;
      }
    });
    const a = Rn(), s = Se(), l = vn(), o = Or(), n = On();
    function u(g, f, h) {
      const p = {};
      let P = 1;
      const b = [];
      for (const E of (0, o.removeTrailingSlash)(g).slice(1).split("/")) {
        const R = s.INTERCEPTION_ROUTE_MARKERS.find((C) => E.startsWith(C)), y = E.match(n.PARAMETER_PATTERN);
        if (R && y && y[2]) {
          const { key: C, optional: N, repeat: A } = (0, n.parseMatchedParameter)(y[2]);
          p[C] = {
            pos: P++,
            repeat: A,
            optional: N
          }, b.push(`/${(0, l.escapeStringRegexp)(R)}([^/]+?)`);
        } else if (y && y[2]) {
          const { key: C, repeat: N, optional: A } = (0, n.parseMatchedParameter)(y[2]);
          p[C] = {
            pos: P++,
            repeat: N,
            optional: A
          }, h && y[1] && b.push(`/${(0, l.escapeStringRegexp)(y[1])}`);
          let v = N ? A ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          h && y[1] && (v = v.substring(1)), b.push(v);
        } else
          b.push(`/${(0, l.escapeStringRegexp)(E)}`);
        f && y && y[3] && b.push((0, l.escapeStringRegexp)(y[3]));
      }
      return {
        parameterizedRoute: b.join(""),
        groups: p
      };
    }
    function r(g, { includeSuffix: f = !1, includePrefix: h = !1, excludeOptionalTrailingSlash: p = !1 } = {}) {
      const { parameterizedRoute: P, groups: b } = u(g, f, h);
      let E = P;
      return p || (E += "(?:/)?"), {
        re: new RegExp(`^${E}$`),
        groups: b
      };
    }
    function i() {
      let g = 0;
      return () => {
        let f = "", h = ++g;
        for (; h > 0; )
          f += String.fromCharCode(97 + (h - 1) % 26), h = Math.floor((h - 1) / 26);
        return f;
      };
    }
    function c({ interceptionMarker: g, getSafeRouteKey: f, segment: h, routeKeys: p, keyPrefix: P, backreferenceDuplicateKeys: b }) {
      const { key: E, optional: R, repeat: y } = (0, n.parseMatchedParameter)(h);
      let C = E.replace(/\W/g, "");
      P && (C = `${P}${C}`);
      let N = !1;
      (C.length === 0 || C.length > 30) && (N = !0), isNaN(parseInt(C.slice(0, 1))) || (N = !0), N && (C = f());
      const A = C in p;
      P ? p[C] = `${P}${E}` : p[C] = E;
      const v = g ? (0, l.escapeStringRegexp)(g) : "";
      let O;
      return A && b ? O = `\\k<${C}>` : y ? O = `(?<${C}>.+?)` : O = `(?<${C}>[^/]+?)`, {
        key: E,
        pattern: R ? `(?:/${v}${O})?` : `/${v}${O}`,
        cleanedKey: C,
        optional: R,
        repeat: y
      };
    }
    function d(g, f, h, p, P, b = {
      names: {},
      intercepted: {}
    }) {
      const E = i(), R = {}, y = [], C = [];
      b = structuredClone(b);
      for (const N of (0, o.removeTrailingSlash)(g).slice(1).split("/")) {
        const A = s.INTERCEPTION_ROUTE_MARKERS.some((w) => N.startsWith(w)), v = N.match(n.PARAMETER_PATTERN), O = A ? v?.[1] : void 0;
        let x;
        if (O && v?.[2] ? (x = f ? a.NEXT_INTERCEPTION_MARKER_PREFIX : void 0, b.intercepted[v[2]] = O) : v?.[2] && b.intercepted[v[2]] ? x = f ? a.NEXT_INTERCEPTION_MARKER_PREFIX : void 0 : x = f ? a.NEXT_QUERY_PARAM_PREFIX : void 0, O && v && v[2]) {
          const { key: w, pattern: M, cleanedKey: I, repeat: q, optional: B } = c({
            getSafeRouteKey: E,
            interceptionMarker: O,
            segment: v[2],
            routeKeys: R,
            keyPrefix: x,
            backreferenceDuplicateKeys: P
          });
          y.push(M), C.push(`/${v[1]}:${b.names[w] ?? I}${q ? B ? "*" : "+" : ""}`), b.names[w] ??= I;
        } else if (v && v[2]) {
          p && v[1] && (y.push(`/${(0, l.escapeStringRegexp)(v[1])}`), C.push(`/${v[1]}`));
          const { key: w, pattern: M, cleanedKey: I, repeat: q, optional: B } = c({
            getSafeRouteKey: E,
            segment: v[2],
            routeKeys: R,
            keyPrefix: x,
            backreferenceDuplicateKeys: P
          });
          let U = M;
          p && v[1] && (U = U.substring(1)), y.push(U), C.push(`/:${b.names[w] ?? I}${q ? B ? "*" : "+" : ""}`), b.names[w] ??= I;
        } else
          y.push(`/${(0, l.escapeStringRegexp)(N)}`), C.push(`/${N}`);
        h && v && v[3] && (y.push((0, l.escapeStringRegexp)(v[3])), C.push(v[3]));
      }
      return {
        namedParameterizedRoute: y.join(""),
        routeKeys: R,
        pathToRegexpPattern: C.join(""),
        reference: b
      };
    }
    function m(g, f) {
      const h = d(g, f.prefixRouteKeys, f.includeSuffix ?? !1, f.includePrefix ?? !1, f.backreferenceDuplicateKeys ?? !1, f.reference);
      let p = h.namedParameterizedRoute;
      return f.excludeOptionalTrailingSlash || (p += "(?:/)?"), {
        ...r(g, f),
        namedRegex: `^${p}$`,
        routeKeys: h.routeKeys,
        pathToRegexpPattern: h.pathToRegexpPattern,
        reference: h.reference
      };
    }
    function _(g, f) {
      const { parameterizedRoute: h } = u(g, !1, !1), { catchAll: p = !0 } = f;
      if (h === "/")
        return {
          namedRegex: `^/${p ? ".*" : ""}$`
        };
      const { namedParameterizedRoute: P } = d(g, !1, !1, !1, !1, void 0);
      return {
        namedRegex: `^${P}${p ? "(?:(/.*)?)" : ""}$`
      };
    }
  })(et)), et;
}
var tr;
function Nn() {
  return tr || (tr = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "interpolateAs", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const e = xr(), a = wr();
    function s(l, o, n) {
      let u = "";
      const r = (0, a.getRouteRegex)(l), i = r.groups, c = (
        // Try to match the dynamic route against the asPath
        (o !== l ? (0, e.getRouteMatcher)(r)(o) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        n
      );
      u = l;
      const d = Object.keys(i);
      return d.every((m) => {
        let _ = c[m] || "";
        const { repeat: g, optional: f } = i[m];
        let h = `[${g ? "..." : ""}${m}]`;
        return f && (h = `${_ ? "" : "/"}[${h}]`), g && !Array.isArray(_) && (_ = [
          _
        ]), (f || m in c) && // Interpolate group into data URL if present
        (u = u.replace(h, g ? _.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (p) => encodeURIComponent(p)
        ).join("/") : encodeURIComponent(_)) || "/");
      }) || (u = ""), {
        params: d,
        result: u
      };
    }
  })($e)), $e;
}
var rr;
function Sn() {
  return rr || (rr = 1, (function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "resolveHref", {
      enumerable: !0,
      get: function() {
        return m;
      }
    });
    const a = br(), s = Tr(), l = sn(), o = Oe(), n = Ne(), u = Sr(), r = _n(), i = Nn(), c = wr(), d = xr();
    function m(_, g, f) {
      let h, p = typeof g == "string" ? g : (0, s.formatWithValidation)(g);
      const P = p.match(/^[a-z][a-z0-9+.-]*:\/\//i), b = P ? p.slice(P[0].length) : p;
      if ((b.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
        console.error(`Invalid href '${p}' passed to next/router in page: '${_.pathname}'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.`);
        const R = (0, o.normalizeRepeatedSlashes)(b);
        p = (P ? P[0] : "") + R;
      }
      if (!(0, u.isLocalURL)(p))
        return f ? [
          p
        ] : p;
      try {
        let R = p.startsWith("#") ? _.asPath : _.pathname;
        if (p.startsWith("?") && (R = _.asPath, (0, r.isDynamicRoute)(_.pathname))) {
          R = _.pathname;
          const y = (0, c.getRouteRegex)(_.pathname);
          (0, d.getRouteMatcher)(y)(_.asPath) || (R = _.asPath);
        }
        h = new URL(R, "http://n");
      } catch {
        h = new URL("/", "http://n");
      }
      try {
        const R = new URL(p, h);
        R.pathname = (0, n.normalizePathTrailingSlash)(R.pathname);
        let y = "";
        if ((0, r.isDynamicRoute)(R.pathname) && R.searchParams && f) {
          const N = (0, a.searchParamsToUrlQuery)(R.searchParams), { result: A, params: v } = (0, i.interpolateAs)(R.pathname, R.pathname, N);
          A && (y = (0, s.formatWithValidation)({
            pathname: A,
            hash: R.hash,
            query: (0, l.omit)(N, v)
          }));
        }
        const C = R.origin === h.origin ? R.href.slice(R.origin.length) : R.href;
        return f ? [
          C,
          y || C
        ] : C;
      } catch {
        return f ? [
          p
        ] : p;
      }
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  })(pe, pe.exports)), pe.exports;
}
var me = { exports: {} }, lt = {}, ft = {}, nr;
function Ir() {
  return nr || (nr = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "addPathPrefix", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const e = Et();
    function a(s, l) {
      if (!s.startsWith("/") || !l)
        return s;
      const { pathname: o, query: n, hash: u } = (0, e.parsePath)(s);
      return `${l}${o}${n}${u}`;
    }
  })(ft)), ft;
}
var ar;
function An() {
  return ar || (ar = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "addLocale", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const e = Ir(), a = Nr();
    function s(l, o, n, u) {
      if (!o || o === n) return l;
      const r = l.toLowerCase();
      return !u && ((0, a.pathHasPrefix)(r, "/api") || (0, a.pathHasPrefix)(r, `/${o.toLowerCase()}`)) ? l : (0, e.addPathPrefix)(l, `/${o}`);
    }
  })(lt)), lt;
}
var or;
function xn() {
  return or || (or = 1, (function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addLocale", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const a = Ne(), s = (l, ...o) => process.env.__NEXT_I18N_SUPPORT ? (0, a.normalizePathTrailingSlash)(An().addLocale(l, ...o)) : l;
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  })(me, me.exports)), me.exports;
}
var dt = {}, pt = {}, ir;
function wn() {
  if (ir) return pt;
  ir = 1;
  function t(e) {
    return e && e.__esModule ? e : { default: e };
  }
  return pt._ = t, pt;
}
var ur;
function In() {
  return ur || (ur = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "RouterContext", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const s = (/* @__PURE__ */ (/* @__PURE__ */ wn())._(Te)).default.createContext(null);
    process.env.NODE_ENV !== "production" && (s.displayName = "RouterContext");
  })(dt)), dt;
}
var ge = { exports: {} }, Ee = { exports: {} }, cr;
function Mn() {
  return cr || (cr = 1, (function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function a(o, n) {
      for (var u in n) Object.defineProperty(o, u, {
        enumerable: !0,
        get: n[u]
      });
    }
    a(e, {
      cancelIdleCallback: function() {
        return l;
      },
      requestIdleCallback: function() {
        return s;
      }
    });
    const s = typeof self < "u" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(o) {
      let n = Date.now();
      return self.setTimeout(function() {
        o({
          didTimeout: !1,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - n));
          }
        });
      }, 1);
    }, l = typeof self < "u" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(o) {
      return clearTimeout(o);
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  })(Ee, Ee.exports)), Ee.exports;
}
var sr;
function Ln() {
  return sr || (sr = 1, (function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "useIntersection", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const a = Te, s = Mn(), l = typeof IntersectionObserver == "function", o = /* @__PURE__ */ new Map(), n = [];
    function u(c) {
      const d = {
        root: c.root || null,
        margin: c.rootMargin || ""
      }, m = n.find((h) => h.root === d.root && h.margin === d.margin);
      let _;
      if (m && (_ = o.get(m), _))
        return _;
      const g = /* @__PURE__ */ new Map(), f = new IntersectionObserver((h) => {
        h.forEach((p) => {
          const P = g.get(p.target), b = p.isIntersecting || p.intersectionRatio > 0;
          P && b && P(b);
        });
      }, c);
      return _ = {
        id: d,
        observer: f,
        elements: g
      }, n.push(d), o.set(d, _), _;
    }
    function r(c, d, m) {
      const { id: _, observer: g, elements: f } = u(m);
      return f.set(c, d), g.observe(c), function() {
        if (f.delete(c), g.unobserve(c), f.size === 0) {
          g.disconnect(), o.delete(_);
          const p = n.findIndex((P) => P.root === _.root && P.margin === _.margin);
          p > -1 && n.splice(p, 1);
        }
      };
    }
    function i({ rootRef: c, rootMargin: d, disabled: m }) {
      const _ = m || !l, [g, f] = (0, a.useState)(!1), h = (0, a.useRef)(null), p = (0, a.useCallback)((b) => {
        h.current = b;
      }, []);
      (0, a.useEffect)(() => {
        if (l) {
          if (_ || g) return;
          const b = h.current;
          if (b && b.tagName)
            return r(b, (R) => R && f(R), {
              root: c?.current,
              rootMargin: d
            });
        } else if (!g) {
          const b = (0, s.requestIdleCallback)(() => f(!0));
          return () => (0, s.cancelIdleCallback)(b);
        }
      }, [
        _,
        d,
        c,
        g,
        h.current
      ]);
      const P = (0, a.useCallback)(() => {
        f(!1);
      }, []);
      return [
        p,
        g,
        P
      ];
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  })(ge, ge.exports)), ge.exports;
}
var Re = { exports: {} }, ve = { exports: {} }, ht = {}, lr;
function Dn() {
  return lr || (lr = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const e = /* @__PURE__ */ new WeakMap();
    function a(s, l) {
      if (!l) return {
        pathname: s
      };
      let o = e.get(l);
      o || (o = l.map((c) => c.toLowerCase()), e.set(l, o));
      let n;
      const u = s.split("/", 2);
      if (!u[1]) return {
        pathname: s
      };
      const r = u[1].toLowerCase(), i = o.indexOf(r);
      return i < 0 ? {
        pathname: s
      } : (n = l[i], s = s.slice(n.length + 1) || "/", {
        pathname: s,
        detectedLocale: n
      });
    }
  })(ht)), ht;
}
var fr;
function jn() {
  return fr || (fr = 1, (function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const a = (s, l) => process.env.__NEXT_I18N_SUPPORT ? Dn().normalizeLocalePath(s, l) : {
      pathname: s,
      detectedLocale: void 0
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  })(ve, ve.exports)), ve.exports;
}
var Pe = { exports: {} }, _t = {}, dr;
function qn() {
  return dr || (dr = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(a, s, l) {
      if (a) {
        l && (l = l.toLowerCase());
        for (const o of a) {
          const n = o.domain?.split(":", 1)[0].toLowerCase();
          if (s === n || l === o.defaultLocale.toLowerCase() || o.locales?.some((u) => u.toLowerCase() === l))
            return o;
        }
      }
    }
  })(_t)), _t;
}
var pr;
function Hn() {
  return pr || (pr = 1, (function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const a = (...s) => {
      if (process.env.__NEXT_I18N_SUPPORT)
        return qn().detectDomainLocale(...s);
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  })(Pe, Pe.exports)), Pe.exports;
}
var hr;
function Un() {
  return hr || (hr = 1, (function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "getDomainLocale", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const a = Ne(), s = process.env.__NEXT_ROUTER_BASEPATH || "";
    function l(o, n, u, r) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const i = jn().normalizeLocalePath, c = Hn().detectDomainLocale, d = n || i(o, u).detectedLocale, m = c(r, void 0, d);
        if (m) {
          const _ = `http${m.http ? "" : "s"}://`, g = d === m.defaultLocale ? "" : `/${d}`;
          return `${_}${m.domain}${(0, a.normalizePathTrailingSlash)(`${s}${g}${o}`)}`;
        }
        return !1;
      } else
        return !1;
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  })(Re, Re.exports)), Re.exports;
}
var Ce = { exports: {} }, _r;
function Xn() {
  return _r || (_r = 1, (function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addBasePath", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const a = Ir(), s = Ne(), l = process.env.__NEXT_ROUTER_BASEPATH || "";
    function o(n, u) {
      return (0, s.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !u ? n : (0, a.addPathPrefix)(n, l));
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  })(Ce, Ce.exports)), Ce.exports;
}
var ye = { exports: {} }, mr;
function kn() {
  return mr || (mr = 1, (function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "useMergedRef", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const a = Te;
    function s(o, n) {
      const u = (0, a.useRef)(null), r = (0, a.useRef)(null);
      return (0, a.useCallback)((i) => {
        if (i === null) {
          const c = u.current;
          c && (u.current = null, c());
          const d = r.current;
          d && (r.current = null, d());
        } else
          o && (u.current = l(o, i)), n && (r.current = l(n, i));
      }, [
        o,
        n
      ]);
    }
    function l(o, n) {
      if (typeof o == "function") {
        const u = o(n);
        return typeof u == "function" ? u : () => o(null);
      } else
        return o.current = n, () => {
          o.current = null;
        };
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  })(ye, ye.exports)), ye.exports;
}
var mt = {}, gr;
function Fn() {
  return gr || (gr = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "errorOnce", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    let e = (a) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const a = /* @__PURE__ */ new Set();
      e = (s) => {
        a.has(s) || console.error(s), a.add(s);
      };
    }
  })(mt)), mt;
}
var Er;
function Gn() {
  return Er || (Er = 1, (function(t, e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function a(v, O) {
      for (var x in O) Object.defineProperty(v, x, {
        enumerable: !0,
        get: O[x]
      });
    }
    a(e, {
      default: function() {
        return A;
      },
      useLinkStatus: function() {
        return N;
      }
    });
    const s = /* @__PURE__ */ yr(), l = Mr, o = /* @__PURE__ */ s._(Te), n = Sn(), u = Sr(), r = Tr(), i = Oe(), c = xn(), d = In(), m = Ln(), _ = Un(), g = Xn(), f = kn(), h = Fn(), p = /* @__PURE__ */ new Set();
    function P(v, O, x, w) {
      if (!(typeof window > "u") && (0, u.isLocalURL)(O)) {
        if (!w.bypassPrefetchedCheck) {
          const M = (
            // Let the link's locale prop override the default router locale.
            typeof w.locale < "u" ? w.locale : "locale" in v ? v.locale : void 0
          ), I = O + "%" + x + "%" + M;
          if (p.has(I))
            return;
          p.add(I);
        }
        v.prefetch(O, x, w).catch((M) => {
          if (process.env.NODE_ENV !== "production")
            throw M;
        });
      }
    }
    function b(v) {
      const x = v.currentTarget.getAttribute("target");
      return x && x !== "_self" || v.metaKey || v.ctrlKey || v.shiftKey || v.altKey || // triggers resource download
      v.nativeEvent && v.nativeEvent.which === 2;
    }
    function E(v, O, x, w, M, I, q, B, U) {
      const { nodeName: D } = v.currentTarget;
      if (D.toUpperCase() === "A" && b(v) || v.currentTarget.hasAttribute("download"))
        return;
      if (!(0, u.isLocalURL)(x)) {
        M && (v.preventDefault(), location.replace(x));
        return;
      }
      v.preventDefault(), (() => {
        if (U) {
          let Y = !1;
          if (U({
            preventDefault: () => {
              Y = !0;
            }
          }), Y)
            return;
        }
        const G = q ?? !0;
        "beforePopState" in O ? O[M ? "replace" : "push"](x, w, {
          shallow: I,
          locale: B,
          scroll: G
        }) : O[M ? "replace" : "push"](w || x, {
          scroll: G
        });
      })();
    }
    function R(v) {
      return typeof v == "string" ? v : (0, r.formatUrl)(v);
    }
    const y = /* @__PURE__ */ o.default.forwardRef(function(O, x) {
      let w;
      const { href: M, as: I, children: q, prefetch: B = null, passHref: U, replace: D, shallow: J, scroll: Z, locale: G, onClick: Y, onNavigate: V, onMouseEnter: H, onTouchStart: $, legacyBehavior: z = !1, transitionTypes: oe, ...Ae } = O;
      w = q, z && (typeof w == "string" || typeof w == "number") && (w = /* @__PURE__ */ (0, l.jsx)("a", {
        children: w
      }));
      const k = o.default.useContext(d.RouterContext), ie = B !== !1;
      if (process.env.NODE_ENV !== "production") {
        let j = function(S) {
          return Object.defineProperty(new Error(`Failed prop type: The prop \`${S.key}\` expects a ${S.expected} in \`<Link>\`, but got \`${S.actual}\` instead.` + (typeof window < "u" ? `
Open your browser's console to view the Component stack trace.` : "")), "__NEXT_ERROR_CODE", {
            value: "E319",
            enumerable: !1,
            configurable: !0
          });
        };
        Object.keys({
          href: !0
        }).forEach((S) => {
          if (S === "href" && (O[S] == null || typeof O[S] != "string" && typeof O[S] != "object"))
            throw j({
              key: S,
              expected: "`string` or `object`",
              actual: O[S] === null ? "null" : typeof O[S]
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
          onNavigate: !0,
          transitionTypes: !0
        }).forEach((S) => {
          const Q = typeof O[S];
          if (S === "as") {
            if (O[S] && Q !== "string" && Q !== "object")
              throw j({
                key: S,
                expected: "`string` or `object`",
                actual: Q
              });
          } else if (S === "locale") {
            if (O[S] && Q !== "string")
              throw j({
                key: S,
                expected: "`string`",
                actual: Q
              });
          } else if (S === "onClick" || S === "onMouseEnter" || S === "onTouchStart" || S === "onNavigate") {
            if (O[S] && Q !== "function")
              throw j({
                key: S,
                expected: "`function`",
                actual: Q
              });
          } else if (S === "replace" || S === "scroll" || S === "shallow" || S === "passHref" || S === "legacyBehavior") {
            if (O[S] != null && Q !== "boolean")
              throw j({
                key: S,
                expected: "`boolean`",
                actual: Q
              });
          } else if (S === "prefetch") {
            if (O[S] != null && Q !== "boolean" && O[S] !== "auto")
              throw j({
                key: S,
                expected: '`boolean | "auto"`',
                actual: Q
              });
          } else if (S === "transitionTypes" && O[S] != null && !Array.isArray(O[S]))
            throw j({
              key: S,
              expected: "`string[]`",
              actual: Q
            });
        });
      }
      const { href: ee, as: K } = o.default.useMemo(() => {
        if (!k) {
          const ae = R(M);
          return {
            href: ae,
            as: I ? R(I) : ae
          };
        }
        const [j, L] = (0, n.resolveHref)(k, M, !0);
        return {
          href: j,
          as: I ? (0, n.resolveHref)(k, I) : L || j
        };
      }, [
        k,
        M,
        I
      ]), ue = o.default.useRef(ee), ce = o.default.useRef(K);
      let F;
      if (z)
        if (process.env.NODE_ENV === "development") {
          Y && console.warn(`"onClick" was passed to <Link> with \`href\` of \`${M}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`), H && console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${M}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
          try {
            F = o.default.Children.only(w);
          } catch {
            throw w ? Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${M}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window < "u" ? ` 
Open your browser's console to view the Component stack trace.` : "")), "__NEXT_ERROR_CODE", {
              value: "E266",
              enumerable: !1,
              configurable: !0
            }) : Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${M}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
              value: "E320",
              enumerable: !1,
              configurable: !0
            });
          }
        } else
          F = o.default.Children.only(w);
      else if (process.env.NODE_ENV === "development" && w?.type === "a")
        throw Object.defineProperty(new Error(`Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
Learn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor`), "__NEXT_ERROR_CODE", {
          value: "E209",
          enumerable: !1,
          configurable: !0
        });
      const xe = z ? F && typeof F == "object" && F.ref : x, [se, le, fe] = (0, m.useIntersection)({
        rootMargin: "200px"
      }), we = o.default.useCallback((j) => {
        (ce.current !== K || ue.current !== ee) && (fe(), ce.current = K, ue.current = ee), se(j);
      }, [
        K,
        ee,
        fe,
        se
      ]), Ie = (0, f.useMergedRef)(we, xe);
      o.default.useEffect(() => {
        process.env.NODE_ENV === "production" && k && (!le || !ie || P(k, ee, K, {
          locale: G
        }));
      }, [
        K,
        ee,
        le,
        G,
        ie,
        k?.locale,
        k
      ]);
      const ne = {
        ref: Ie,
        onClick(j) {
          if (process.env.NODE_ENV !== "production" && !j)
            throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
              value: "E312",
              enumerable: !1,
              configurable: !0
            });
          !z && typeof Y == "function" && Y(j), z && F.props && typeof F.props.onClick == "function" && F.props.onClick(j), k && (j.defaultPrevented || E(j, k, ee, K, D, J, Z, G, V));
        },
        onMouseEnter(j) {
          !z && typeof H == "function" && H(j), z && F.props && typeof F.props.onMouseEnter == "function" && F.props.onMouseEnter(j), k && P(k, ee, K, {
            locale: G,
            priority: !0,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: !0
          });
        },
        onTouchStart: process.env.__NEXT_LINK_NO_TOUCH_START ? void 0 : function(L) {
          !z && typeof $ == "function" && $(L), z && F.props && typeof F.props.onTouchStart == "function" && F.props.onTouchStart(L), k && P(k, ee, K, {
            locale: G,
            priority: !0,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: !0
          });
        }
      };
      if ((0, i.isAbsoluteUrl)(K))
        ne.href = K;
      else if (!z || U || F.type === "a" && !("href" in F.props)) {
        const j = typeof G < "u" ? G : k?.locale, L = k?.isLocaleDomain && (0, _.getDomainLocale)(K, j, k?.locales, k?.domainLocales);
        ne.href = L || (0, g.addBasePath)((0, c.addLocale)(K, j, k?.defaultLocale));
      }
      return z ? (process.env.NODE_ENV === "development" && (0, h.errorOnce)(`\`legacyBehavior\` is deprecated and will be removed in a future release. A codemod is available to upgrade your components:

npx @next/codemod@latest new-link .

Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components`), /* @__PURE__ */ o.default.cloneElement(F, ne)) : /* @__PURE__ */ (0, l.jsx)("a", {
        ...Ae,
        ...ne,
        children: w
      });
    }), C = /* @__PURE__ */ (0, o.createContext)({
      // We do not support link status in the Pages Router, so we always return false
      pending: !1
    }), N = () => (0, o.useContext)(C), A = y;
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  })(de, de.exports)), de.exports;
}
var gt, Rr;
function Vn() {
  return Rr || (Rr = 1, gt = Gn()), gt;
}
var zn = Vn();
const re = /* @__PURE__ */ cn(zn), Wn = () => {
  const [t, e] = Lr(!1);
  return /* @__PURE__ */ T("nav", { className: "bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4", children: /* @__PURE__ */ X("div", { className: "relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6", children: [
    /* @__PURE__ */ X("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ T(re, { href: "/", children: /* @__PURE__ */ T(un, {}) }),
      /* @__PURE__ */ T(
        te,
        {
          variant: "ghost",
          className: "flex size-9 items-center justify-center md:hidden",
          onClick: () => e((s) => !s),
          "aria-label": t ? "Close menu" : "Open menu",
          children: t ? /* @__PURE__ */ T(Ur, {}) : /* @__PURE__ */ T(Xr, {})
        }
      )
    ] }),
    /* @__PURE__ */ X("div", { className: "hidden w-full flex-row justify-end gap-5 md:flex", children: [
      /* @__PURE__ */ X("div", { className: "flex flex-col gap-1 md:flex-row", children: [
        /* @__PURE__ */ T(re, { href: "#features", children: /* @__PURE__ */ T(te, { variant: "ghost", className: "w-full md:w-auto", children: "Features" }) }),
        /* @__PURE__ */ T(re, { href: "#about", children: /* @__PURE__ */ T(te, { variant: "ghost", className: "w-full md:w-auto", children: "About" }) }),
        /* @__PURE__ */ T(re, { href: "#contact", children: /* @__PURE__ */ T(te, { variant: "ghost", className: "w-full md:w-auto", children: "Contact" }) })
      ] }),
      /* @__PURE__ */ T(re, { href: "#pricing", children: /* @__PURE__ */ T(te, { children: "Try for free" }) })
    ] }),
    t && /* @__PURE__ */ X("div", { className: "flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden", children: [
      /* @__PURE__ */ X("div", { className: "flex flex-col gap-1 md:flex-row", children: [
        /* @__PURE__ */ T(re, { href: "#features", children: /* @__PURE__ */ T(te, { variant: "ghost", className: "w-full md:w-auto", children: "Features" }) }),
        /* @__PURE__ */ T(re, { href: "#about", children: /* @__PURE__ */ T(te, { variant: "ghost", className: "w-full md:w-auto", children: "About" }) }),
        /* @__PURE__ */ T(re, { href: "#contact", children: /* @__PURE__ */ T(te, { variant: "ghost", className: "w-full md:w-auto", children: "Contact" }) })
      ] }),
      /* @__PURE__ */ T(re, { href: "#pricing", children: /* @__PURE__ */ T(te, { className: "w-full", children: "Try for free" }) })
    ] })
  ] }) });
}, Bn = [
  // { id: "title", label: "Heading", type: "text", default: "Welcome" },
  { id: "subtitle", label: "Subheading", type: "text" },
  { id: "content", label: "Body", type: "richtext" },
  { id: "background_image", label: "Background image", type: "image_picker" },
  { id: "background_color", label: "Background color", type: "color" }
], Yn = ({
  heading: t = "Meet the team",
  subheading: e,
  columns: a = 3,
  backgroundColor: s,
  textAlignment: l = "center",
  renderBlocks: o
}) => /* @__PURE__ */ T(
  "section",
  {
    className: "section-padding-y",
    style: { backgroundColor: s || void 0 },
    "aria-labelledby": "team-heading",
    children: /* @__PURE__ */ X("div", { className: "container-padding-x container mx-auto flex flex-col gap-10", children: [
      /* @__PURE__ */ X("div", { className: `flex flex-col gap-3 ${{
        left: "text-left",
        center: "text-center",
        right: "text-right"
      }[l]}`, children: [
        /* @__PURE__ */ T("h2", { id: "team-heading", className: "heading-lg", children: t }),
        e && /* @__PURE__ */ T("p", { className: "text-muted-foreground text-base lg:text-lg", children: e })
      ] }),
      o && /* @__PURE__ */ T(
        "div",
        {
          className: "grid gap-6",
          style: { gridTemplateColumns: `repeat(${a}, minmax(0, 1fr))` },
          children: o()
        }
      )
    ] })
  }
), $n = [
  {
    id: "heading",
    label: "Heading",
    type: "text",
    default: "Meet the team"
  },
  {
    id: "subheading",
    label: "Subheading",
    type: "textarea",
    placeholder: "Optional subheading"
  },
  {
    id: "columns",
    label: "Columns",
    type: "number",
    default: 3,
    min: 1,
    max: 6
  },
  {
    id: "backgroundColor",
    label: "Background color",
    type: "color",
    default: "#ffffff"
  },
  {
    id: "textAlignment",
    label: "Text alignment",
    type: "text_alignment",
    default: "center"
  }
], Kn = ({
  feature: t = "Your feature here"
}) => /* @__PURE__ */ X("div", { className: "flex items-start gap-3", children: [
  /* @__PURE__ */ T("div", { className: "pt-0.5", children: /* @__PURE__ */ T(kr, { className: "text-primary h-5 w-5" }) }),
  /* @__PURE__ */ T("span", { className: "text-card-foreground text-base leading-6 font-medium", children: t })
] }), Qn = [
  {
    id: "feature",
    label: "Feature",
    type: "text",
    default: "Real progress tracking",
    placeholder: "Enter feature text"
  }
], Zn = ({ teamMember: t }) => !t || typeof t == "string" ? /* @__PURE__ */ X("div", { className: "flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center shadow-sm", children: [
  /* @__PURE__ */ T("div", { className: "bg-muted h-20 w-20 rounded-full" }),
  /* @__PURE__ */ T("div", { className: "flex flex-col gap-1", children: /* @__PURE__ */ T("p", { className: "text-muted-foreground text-sm italic", children: "Team member preview" }) })
] }) : /* @__PURE__ */ X("div", { className: "flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center shadow-sm", children: [
  t.profile_picture?.url && /* @__PURE__ */ T(
    "img",
    {
      src: t.profile_picture.url,
      alt: t.name,
      className: "h-20 w-20 rounded-full object-cover"
    }
  ),
  /* @__PURE__ */ X("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ X("p", { className: "text-card-foreground font-semibold", children: [
      t.name,
      " ",
      t.last_name
    ] }),
    t.role && /* @__PURE__ */ T("p", { className: "text-muted-foreground text-sm", children: t.role })
  ] })
] }), Jn = [
  {
    id: "teamMember",
    label: "Team Member",
    type: "metaobject_ref",
    metaobjectType: "team_member"
    // must match the definition key in Strapi
  }
], ua = {
  hero: an,
  header: Wn,
  team: Yn
}, ca = {
  hero: on,
  header: Bn,
  team: $n
}, sa = {
  feature: Kn,
  "team-member": Zn
}, la = {
  feature: Qn,
  "team-member": Jn
}, fa = {
  hero: {
    blocks: [{ type: "@theme" }],
    maxBlocks: 10
  },
  team: {
    blocks: [{ type: "team-member" }],
    maxBlocks: 20
  }
};
export {
  la as blockSettingsSchemas,
  sa as blocksComponents,
  fa as sectionBlocksConfig,
  ca as sectionSettingsSchemas,
  ua as sectionsComponents
};
