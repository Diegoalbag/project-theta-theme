import { Button } from "@theme/ui";
import { Check, ArrowRight } from "lucide-react";
import { AspectRatio } from "@theme/ui";
import Image from "next/image";

export const Hero = ({ title }) => {
  return (
    <section
      className="bg-secondary section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl">
              Never forget what was said in a meeting again
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              AI that joins, transcribes, and transforms your meetings into
              structured knowledge
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Deal progress tracking
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Customer sentiment analysis
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Automatic CRM updates
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Try for free</Button>
            <Button variant="ghost">
              How it works
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/assets/Hero.png"
              alt="Hero visual"
              fill
              priority
              className="h-full w-full rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
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