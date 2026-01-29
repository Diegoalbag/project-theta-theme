import { Zap, Shield, BarChart3, Clock, Users, Settings } from "lucide-react";

export interface FeatureItem {
  icon?: string;
  title?: string;
  description?: string;
}

export interface FeaturesProps {
  title?: string;
  description?: string;
  features?: FeatureItem[];
  columns?: 2 | 3;
  textAlignment?: "left" | "center";
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  zap: Zap,
  shield: Shield,
  chart: BarChart3,
  clock: Clock,
  users: Users,
  settings: Settings,
};

export const Features = ({
  title,
  description,
  features,
  columns = 3,
  textAlignment = "center",
}: FeaturesProps) => {
  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <section
      id="features"
      className="bg-background section-padding-y"
      aria-labelledby="features-heading"
    >
      <div className="container-padding-x container mx-auto">
        {/* Section Header */}
        <div
          className={`section-title-gap-lg mx-auto mb-12 flex max-w-2xl flex-col lg:mb-16 ${
            textAlignment === "center" ? "text-center" : "text-left"
          }`}
        >
          <h2 id="features-heading" className="heading-lg">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground text-base lg:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Features Grid */}
        <div className={`grid gap-6 lg:gap-8 ${gridCols}`}>
          {features?.map((feature, index) => {
            const IconComponent = iconMap[feature.icon || "zap"] || Zap;

            return (
              <div
                key={index}
                className="bg-secondary flex flex-col gap-4 rounded-xl p-6 lg:p-8"
              >
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <IconComponent className="text-primary h-6 w-6" />
                </div>
                <div className="section-title-gap-sm flex flex-col">
                  <h3 className="text-card-foreground text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const featuresSettingsSchema = [
  {
    id: "title",
    label: "Heading",
    type: "text",
    default: "Everything you need to close more deals",
  },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    default:
      "Powerful features designed to help your team capture insights, track progress, and never miss a follow-up.",
  },
  {
    id: "features",
    label: "Features",
    type: "array",
    default: [
      {
        icon: "zap",
        title: "Automatic Transcription",
        description:
          "Every meeting is transcribed in real-time with speaker identification and timestamps.",
      },
      {
        icon: "chart",
        title: "Deal Intelligence",
        description:
          "Track deal progress across conversations and get alerts when deals are at risk.",
      },
      {
        icon: "users",
        title: "Team Collaboration",
        description:
          "Share meeting insights with your team and keep everyone aligned on customer needs.",
      },
      {
        icon: "clock",
        title: "Action Items",
        description:
          "Automatically extract action items and follow-ups from every conversation.",
      },
      {
        icon: "shield",
        title: "Enterprise Security",
        description:
          "SOC 2 compliant with end-to-end encryption and role-based access controls.",
      },
      {
        icon: "settings",
        title: "CRM Integration",
        description:
          "Sync meeting notes and insights directly to Salesforce, HubSpot, and more.",
      },
    ],
    itemSchema: [
      {
        id: "icon",
        label: "Icon",
        type: "select",
        options: [
          { value: "zap", label: "Zap" },
          { value: "shield", label: "Shield" },
          { value: "chart", label: "Chart" },
          { value: "clock", label: "Clock" },
          { value: "users", label: "Users" },
          { value: "settings", label: "Settings" },
        ],
        default: "zap",
      },
      {
        id: "title",
        label: "Title",
        type: "text",
        default: "Feature title",
      },
      {
        id: "description",
        label: "Description",
        type: "textarea",
        default: "Feature description goes here.",
      },
    ],
  },
  {
    id: "columns",
    label: "Columns",
    type: "select",
    options: [
      { value: 2, label: "2 Columns" },
      { value: 3, label: "3 Columns" },
    ],
    default: 3,
  },
  {
    id: "textAlignment",
    label: "Header alignment",
    type: "text_alignment",
    options: ["left", "center"],
    default: "center",
  },
];
