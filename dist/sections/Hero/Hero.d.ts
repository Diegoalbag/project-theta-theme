import { default as React } from 'react';
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
export declare const Hero: ({ title, description, renderBlocks, primaryCtaLabel, primaryCtaUrl, secondaryCtaLabel, secondaryCtaUrl, heroImage, textAlignment, }: HeroProps) => React.JSX.Element;
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
        id: any;
        url: string;
    };
    info: string;
    placeholder?: undefined;
})[];
