import type React from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

export interface HeroProps {
  title?: string;
  description?: string;
  renderBlocks?: () => React.ReactNode;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  heroImage?: {
    url: string;
    id: string;
  };
  textAlignment?: "left" | "center" | "right";
}

export const Hero = ({
  title,
  description,
  renderBlocks,
  primaryCtaLabel,
  primaryCtaUrl,
  secondaryCtaLabel,
  secondaryCtaUrl,
  heroImage,
  textAlignment,
}: HeroProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <section
      className="bg-secondary section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div
          className={`flex flex-1 flex-col gap-6 lg:gap-8 ${alignmentClasses[textAlignment || "left"]}`}
        >
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl">
              {title}
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              {description}
            </p>
          </div>

          {/* Feature List (dynamic blocks) */}
          {renderBlocks && (
            <div className="flex flex-col gap-2 md:gap-3">
              {renderBlocks()}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={primaryCtaUrl}>{primaryCtaLabel}</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href={secondaryCtaUrl}>
                {secondaryCtaLabel}
                <ArrowRight />
              </a>
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={heroImage?.url || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-EK6lJQh9Tq3HAhrRx6QQGhjNwND9Gs.png"}
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
    id: "title",
    label: "Heading",
    type: "text",
    default: "Never forget what was said in a meeting again",
  },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    default:
      "AI that joins, transcribes, and transforms your meetings into structured knowledge",
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
    type: "url",
    default: "#",
    placeholder: "https://example.com",
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
    type: "url",
    default: "#",
    placeholder: "https://example.com",
  },
  {
    id: "heroImage",
    label: "Hero image",
    type: "image_picker",
    default: {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-EK6lJQh9Tq3HAhrRx6QQGhjNwND9Gs.png",
      alt: "Hero visual",
      width: 1000,
      height: 1000,
    },
    info: "Upload or select an image for the hero section",
  },
  {
    id: "textAlignment",
    label: "Text alignment",
    type: "text_alignment",
    default: "left",
  },
];