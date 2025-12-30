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
export declare const Hero: ({ title, description, featureOne, featureTwo, featureThree, primaryCtaLabel, primaryCtaUrl, secondaryCtaLabel, secondaryCtaUrl, heroImage, textAlignment, }: HeroProps) => any;
export declare const heroSettingsSchema: ({
    id: string;
    label: string;
    type: string;
    default: string;
    options?: undefined;
} | {
    id: string;
    label: string;
    type: string;
    options: {
        value: string;
        label: string;
    }[];
    default: string;
})[];
