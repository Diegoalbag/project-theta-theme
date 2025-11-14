export const Hero = ({ title }) => {
  return <div className="hero">{title}</div>;
};

export const heroSettingsSchema = [
  {
    id: "heading",
    label: "Heading",
    type: "text",
    default: "Welcome to our site",
    info: "Main section heading",
  },
  {
    id: "subheading",
    label: "Subheading",
    type: "textarea",
    default: "This is a subtitle description.",
  },
  {
    id: "showDivider",
    label: "Show Divider",
    type: "radio",
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ],
    default: true,
  },
  {
    id: "itemsPerRow",
    label: "Items per row",
    type: "number",
    default: 3,
    info: "How many items display in a row",
  },
  {
    id: "spacing",
    label: "Spacing",
    type: "number",
    default: 24,
    info: "Spacing (in px) between items",
  },
  {
    id: "layoutVariant",
    label: "Layout variant",
    type: "select",
    options: [
      { value: "variantA", label: "Variant A" },
      { value: "variantB", label: "Variant B" },
      { value: "variantC", label: "Variant C" },
    ],
    default: "variantA",
  },
  {
    id: "backgroundColor",
    label: "Background Color",
    type: "custom",
    customType: "colorPicker",
    default: "#ffffff",
  },
  {
    id: "backgroundImage",
    label: "Background Image",
    type: "custom",
    customType: "imagePicker",
  },
  {
    id: "buttonLink",
    label: "Button Link",
    type: "text",
    info: "URL for the button CTA",
  },
  {
    id: "enableVideo",
    label: "Enable Video",
    type: "checkbox",
    default: false,
  },
  {
    id: "videoURL",
    label: "Video URL",
    type: "custom",
    customType: "videoUrlPicker",
    info: "YouTube or Vimeo link",
  },
  {
    id: "fontChoice",
    label: "Font",
    type: "custom",
    customType: "fontPicker",
    default: "sans-serif",
  },
  {
    id: "richContent",
    label: "Rich Content",
    type: "textarea",
    info: "Use HTML or rich text if supported",
  },
  {
    id: "textAlignment",
    label: "Text Alignment",
    type: "select",
    options: [
      { value: "left", label: "Left" },
      { value: "center", label: "Center" },
      { value: "right", label: "Right" },
    ],
    default: "center",
  },
];