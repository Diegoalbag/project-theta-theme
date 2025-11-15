import { jsx as _jsx } from "react/jsx-runtime";
export const Header = () => {
    return _jsx("div", { className: "header", children: "Header" });
};
export const headerSettingsSchema = [
    { id: "title", label: "Heading", type: "text", default: "Welcome" },
    { id: "subtitle", label: "Subheading", type: "text" },
    { id: "content", label: "Body", type: "richtext" },
    { id: "background_image", label: "Background image", type: "image_picker" },
    { id: "background_color", label: "Background color", type: "color" },
];
