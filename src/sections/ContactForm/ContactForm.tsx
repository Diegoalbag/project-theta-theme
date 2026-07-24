import type React from "react";
import { cn } from "@/lib/utils";
import { FormRenderer } from "@/forms/FormRenderer";

export interface ContactFormProps {
  heading?: string;
  description?: string;
  /** Form key, set by the customizer's form_picker setting. */
  formKey?: string;
  layout?: "centered" | "split";
  backgroundColor?: string;
  textAlignment?: "left" | "center" | "right";
}

const alignmentClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

/**
 * Renders a form built in the platform's Forms dashboard.
 *
 * The section holds only presentation; the fields come from the bound form's
 * definition, fetched by FormRenderer at runtime. That split is what lets a client
 * add or reorder fields without a theme redeploy.
 *
 * Style settings are a FIXED vocabulary (the alignmentClasses map above, the two
 * layouts) rather than free-form values, because Tailwind compiles this theme in CI
 * long before a client picks anything — a class name assembled from a client-chosen
 * value would be purged and simply not exist at runtime.
 */
export const ContactForm = ({
  heading,
  description,
  formKey,
  layout = "centered",
  backgroundColor,
  textAlignment = "left",
}: ContactFormProps) => {
  const isSplit = layout === "split";

  return (
    <section
      className="section-padding-y"
      style={backgroundColor ? { backgroundColor } : undefined}
      aria-labelledby={heading ? "contact-form-heading" : undefined}
    >
      <div
        className={cn(
          "container-padding-x container mx-auto",
          isSplit ? "flex flex-col gap-10 lg:flex-row lg:gap-16" : "max-w-2xl"
        )}
      >
        {(heading || description) && (
          <div
            className={cn(
              "flex flex-col gap-3",
              isSplit ? "flex-1" : "mb-8",
              alignmentClasses[textAlignment]
            )}
          >
            {heading && (
              <h2 id="contact-form-heading" className="heading-lg">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-base text-muted-foreground">{description}</p>
            )}
          </div>
        )}

        <div className={isSplit ? "flex-1" : undefined}>
          <FormRenderer formKey={formKey} />
        </div>
      </div>
    </section>
  );
};

export const contactFormSettingsSchema = [
  {
    id: "formKey",
    label: "Form",
    type: "form_picker",
    info: "Build forms under Content → Forms.",
  },
  {
    id: "heading",
    label: "Heading",
    type: "text",
    default: "Get in touch",
  },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Optional supporting text",
  },
  {
    id: "layout",
    label: "Layout",
    type: "select",
    default: "centered",
    options: [
      { value: "centered", label: "Centered" },
      { value: "split", label: "Text beside form" },
    ],
  },
  {
    id: "textAlignment",
    label: "Text alignment",
    type: "text_alignment",
    default: "left",
  },
  {
    id: "backgroundColor",
    label: "Background color",
    type: "color",
  },
];
