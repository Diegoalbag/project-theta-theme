import { Button } from "@/src/components/ui/button";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

export interface HeroProps {
  title?: string;
  description?: string;
  featureOne?: string;
  featureTwo?: string;
  featureThree?: string;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  heroImage?: string | StaticImageData;
  textAlignment?: "left" | "center" | "right";
}

export const Hero = ({
  title,
  description,
  featureOne,
  featureTwo,
  featureThree,
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

          {/* Feature List */}
          <div className="flex flex-col gap-2 md:gap-3">
            {featureOne && (
              <div className="flex items-start gap-3">
                <div className="pt-0.5">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <span className="text-card-foreground text-base leading-6 font-medium">
                  {featureOne}
                </span>
              </div>
            )}

            {featureTwo && (
              <div className="flex items-start gap-3">
                <div className="pt-0.5">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <span className="text-card-foreground text-base leading-6 font-medium">
                  {featureTwo}
                </span>
              </div>
            )}

            {featureThree && (
              <div className="flex items-start gap-3">
                <div className="pt-0.5">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <span className="text-card-foreground text-base leading-6 font-medium">
                  {featureThree}
                </span>
              </div>
            )}
          </div>

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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-EK6lJQh9Tq3HAhrRx6QQGhjNwND9Gs.png"
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
    default:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-EK6lJQh9Tq3HAhrRx6QQGhjNwND9Gs.png",
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
