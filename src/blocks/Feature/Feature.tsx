import { Check } from "lucide-react";

export interface FeatureBlockProps {
  feature?: string;
  blockId?: string;
  blockType?: string;
}

export const FeatureBlock = ({
  feature = "Your feature here",
}: FeatureBlockProps) => {
  return (
    <div className="flex items-start gap-3">
      <div className="pt-0.5">
        <Check className="text-primary h-5 w-5" />
      </div>
      <span className="text-card-foreground text-base leading-6 font-medium">
        {feature}
      </span>
    </div>
  );
};

export const featureBlockSettingsSchema = [
  {
    id: "feature",
    label: "Feature",
    type: "text",
    default: "Real progress tracking",
    placeholder: "Enter feature text",
  },
];
