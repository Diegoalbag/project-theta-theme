export const Header = () => {
  return <div className="header">Header</div>;
};

export const headerSettingsSchema = [
  { id: "title", label: "Heading", type: "text", default: "Welcome" },
  { id: "subtitle", label: "Subheading", type: "text" },
  { id: "content", label: "Body", type: "richtext" },
  { id: "background_image", label: "Background image", type: "image_picker" },
  { id: "background_color", label: "Background color", type: "color" },
];