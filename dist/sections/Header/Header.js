import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/src/components/ui/button";
import { Logo } from "../../components/ui/logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    return (_jsx("nav", { className: "bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4", children: _jsxs("div", { className: "relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Link, { href: "/", children: _jsx(Logo, {}) }), _jsx(Button, { variant: "ghost", className: "flex size-9 items-center justify-center md:hidden", onClick: toggleMenu, "aria-label": isMenuOpen ? "Close menu" : "Open menu", children: isMenuOpen ? _jsx(X, {}) : _jsx(Menu, {}) })] }), _jsxs("div", { className: "hidden w-full flex-row justify-end gap-5 md:flex", children: [_jsxs("div", { className: "flex flex-col gap-1 md:flex-row", children: [_jsx(Link, { href: "#features", children: _jsx(Button, { variant: "ghost", className: "w-full md:w-auto", children: "Features" }) }), _jsx(Link, { href: "#about", children: _jsx(Button, { variant: "ghost", className: "w-full md:w-auto", children: "About" }) }), _jsx(Link, { href: "#contact", children: _jsx(Button, { variant: "ghost", className: "w-full md:w-auto", children: "Contact" }) })] }), _jsx(Link, { href: "#pricing", children: _jsx(Button, { children: "Try for free" }) })] }), _jsxs("div", { className: "flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden", children: [_jsxs("div", { className: "flex flex-col gap-1 md:flex-row", children: [_jsx(Link, { href: "#features", children: _jsx(Button, { variant: "ghost", className: "w-full md:w-auto", children: "Features" }) }), _jsx(Link, { href: "#about", children: _jsx(Button, { variant: "ghost", className: "w-full md:w-auto", children: "About" }) }), _jsx(Link, { href: "#contact", children: _jsx(Button, { variant: "ghost", className: "w-full md:w-auto", children: "Contact" }) })] }), _jsx(Link, { href: "#pricing", children: _jsx(Button, { className: "w-full", children: "Try for free" }) })] })] }) }));
};
export const headerSettingsSchema = [
    { id: "title", label: "Heading", type: "text", default: "Welcome" },
    { id: "subtitle", label: "Subheading", type: "text" },
    { id: "content", label: "Body", type: "richtext" },
    { id: "background_image", label: "Background image", type: "image_picker" },
    { id: "background_color", label: "Background color", type: "color" },
];
