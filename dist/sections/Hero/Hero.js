import { jsx as _jsx } from "react/jsx-runtime";
export const Hero = ({ title }) => {
    return _jsx("div", { className: "hero", children: title });
};
export const heroSettingsSchema = [
    { id: "title", label: "Heading", type: "text", default: "Welcome" },
    { id: "subtitle", label: "Subheading", type: "text" },
    { id: "content", label: "Body", type: "richtext" },
    { id: "background_image", label: "Background image", type: "image_picker" },
    { id: "background_color", label: "Background color", type: "color" },
    {
        id: "layout",
        label: "Layout",
        type: "select",
        options: [
            { value: "left", label: "Image left" },
            { value: "right", label: "Image right" },
            { value: "center", label: "Centered" },
        ],
        default: "center",
    },
    { id: "show_cta", label: "Show button", type: "checkbox", default: true },
    { id: "cta_label", label: "Button label", type: "text", default: "Shop now" },
    { id: "cta_url", label: "Button link", type: "url" },
];
