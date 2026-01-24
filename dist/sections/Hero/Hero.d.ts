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
    heroImage?: {
        url: string;
        id: string;
    };
    textAlignment?: "left" | "center" | "right";
}
export declare const Hero: ({ title, description, featureOne, featureTwo, featureThree, primaryCtaLabel, primaryCtaUrl, secondaryCtaLabel, secondaryCtaUrl, heroImage, textAlignment, }: HeroProps) => any;
export declare const heroSettingsSchema: ({
    id: string;
    label: string;
    type: string;
    default: string;
    placeholder?: undefined;
    info?: undefined;
} | {
    id: string;
    label: string;
    type: string;
    default: string;
    placeholder: string;
    info?: undefined;
} | {
    id: string;
    label: string;
    type: string;
    default: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    info: string;
    placeholder?: undefined;
})[];
