import type React from "react";

export interface TeamProps {
  heading?: string;
  subheading?: string;
  columns?: number;
  backgroundColor?: string;
  textAlignment?: "left" | "center" | "right";
  renderBlocks?: () => React.ReactNode;
  sectionId?: string;
  sectionName?: string;
}

export const Team = ({
  heading = "Meet the team",
  subheading,
  columns = 3,
  backgroundColor,
  textAlignment = "center",
  renderBlocks,
}: TeamProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <section
      className="section-padding-y"
      style={{ backgroundColor: backgroundColor || undefined }}
      aria-labelledby="team-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className={`flex flex-col gap-3 ${alignmentClasses[textAlignment]}`}>
          <h2 id="team-heading" className="heading-lg">
            {heading}
          </h2>
          {subheading && (
            <p className="text-muted-foreground text-base lg:text-lg">
              {subheading}
            </p>
          )}
        </div>

        {/* Member grid */}
        {renderBlocks && (
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {renderBlocks()}
          </div>
        )}
      </div>
    </section>
  );
};

export const teamSettingsSchema = [
  {
    id: "heading",
    label: "Heading",
    type: "text",
    default: "Meet the team",
  },
  {
    id: "subheading",
    label: "Subheading",
    type: "textarea",
    placeholder: "Optional subheading",
  },
  {
    id: "columns",
    label: "Columns",
    type: "number",
    default: 3,
    min: 1,
    max: 6,
  },
  {
    id: "backgroundColor",
    label: "Background color",
    type: "color",
    default: "#ffffff",
  },
  {
    id: "textAlignment",
    label: "Text alignment",
    type: "text_alignment",
    default: "center",
  },
];
