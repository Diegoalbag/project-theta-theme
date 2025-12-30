import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/src/components/ui/button";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
export const Hero = ({ title, description, featureOne, featureTwo, featureThree, primaryCtaLabel, primaryCtaUrl, secondaryCtaLabel, secondaryCtaUrl, heroImage, textAlignment, }) => {
    const alignmentClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    };
    return (_jsx("section", { className: "bg-secondary section-padding-y", "aria-labelledby": "hero-heading", children: _jsxs("div", { className: "container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16", children: [_jsxs("div", { className: `flex flex-1 flex-col gap-6 lg:gap-8 ${alignmentClasses[textAlignment || "left"]}`, children: [_jsxs("div", { className: "section-title-gap-xl flex flex-col", children: [_jsx("h1", { id: "hero-heading", className: "heading-xl", children: title }), _jsx("p", { className: "text-muted-foreground text-base lg:text-lg", children: description })] }), _jsxs("div", { className: "flex flex-col gap-2 md:gap-3", children: [featureOne && (_jsxs("div", { className: "flex items-start gap-3", children: [_jsx("div", { className: "pt-0.5", children: _jsx(Check, { className: "text-primary h-5 w-5" }) }), _jsx("span", { className: "text-card-foreground text-base leading-6 font-medium", children: featureOne })] })), featureTwo && (_jsxs("div", { className: "flex items-start gap-3", children: [_jsx("div", { className: "pt-0.5", children: _jsx(Check, { className: "text-primary h-5 w-5" }) }), _jsx("span", { className: "text-card-foreground text-base leading-6 font-medium", children: featureTwo })] })), featureThree && (_jsxs("div", { className: "flex items-start gap-3", children: [_jsx("div", { className: "pt-0.5", children: _jsx(Check, { className: "text-primary h-5 w-5" }) }), _jsx("span", { className: "text-card-foreground text-base leading-6 font-medium", children: featureThree })] }))] }), _jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [_jsx(Button, { asChild: true, children: _jsx("a", { href: primaryCtaUrl, children: primaryCtaLabel }) }), _jsx(Button, { variant: "ghost", asChild: true, children: _jsxs("a", { href: secondaryCtaUrl, children: [secondaryCtaLabel, _jsx(ArrowRight, {})] }) })] })] }), _jsx("div", { className: "w-full flex-1", children: _jsx(AspectRatio, { ratio: 1 / 1, children: _jsx(Image, { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-EK6lJQh9Tq3HAhrRx6QQGhjNwND9Gs.png", alt: "Hero visual", fill: true, priority: true, className: "h-full w-full rounded-xl object-cover" }) }) })] }) }));
};
export const heroSettingsSchema = [
    {
        id: "title",
        label: "Heading",
        type: "text",
        default: "Never forget what was said in a meeting again",
    },
    {
        id: "description",
        label: "Description",
        type: "textarea",
        default: "AI that joins, transcribes, and transforms your meetings into structured knowledge",
    },
    {
        id: "featureOne",
        label: "Feature #1",
        type: "text",
        default: "Deal progress tracking",
    },
    {
        id: "featureTwo",
        label: "Feature #2",
        type: "text",
        default: "Customer sentiment analysis",
    },
    {
        id: "featureThree",
        label: "Feature #3",
        type: "text",
        default: "Automatic CRM updates",
    },
    {
        id: "primaryCtaLabel",
        label: "Primary button label",
        type: "text",
        default: "Try for free",
    },
    {
        id: "primaryCtaUrl",
        label: "Primary button URL",
        type: "text",
        default: "#",
    },
    {
        id: "secondaryCtaLabel",
        label: "Secondary button label",
        type: "text",
        default: "How it works",
    },
    {
        id: "secondaryCtaUrl",
        label: "Secondary button URL",
        type: "text",
        default: "#",
    },
    {
        id: "heroImage",
        label: "Hero image URL",
        type: "text", // or custom: imagePicker later
        default: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-EK6lJQh9Tq3HAhrRx6QQGhjNwND9Gs.png",
    },
    {
        id: "textAlignment",
        label: "Text alignment",
        type: "select",
        options: [
            { value: "left", label: "Left" },
            { value: "center", label: "Center" },
        ],
        default: "left",
    },
];
