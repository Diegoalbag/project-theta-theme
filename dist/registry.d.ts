import { default as React } from 'react';
export declare const sectionsComponents: {
    hero: ({ title, description, renderBlocks, primaryCtaLabel, primaryCtaUrl, secondaryCtaLabel, secondaryCtaUrl, heroImage, textAlignment, }: import('./sections/Hero').HeroProps) => any;
    header: () => any;
};
export declare const sectionSettingsSchemas: {
    hero: ({
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
    header: {
        id: string;
        label: string;
        type: string;
    }[];
};
export declare const blocksComponents: Record<string, React.ComponentType<Record<string, unknown>>>;
export declare const blockSettingsSchemas: Record<string, Array<{
    id: string;
    label: string;
    type: string;
    default?: string | number | boolean;
    info?: string;
    options?: Array<{
        value: string | number | boolean;
        label: string;
    }>;
    customType?: string;
}>>;
export declare const sectionBlocksConfig: Record<string, {
    blocks: Array<{
        type: string;
    }>;
    maxBlocks?: number;
    localBlocks?: Array<{
        type: string;
        name: string;
        component?: React.ComponentType<Record<string, unknown>>;
        settings: Array<{
            id: string;
            label: string;
            type: string;
            default?: string | number | boolean;
            info?: string;
            options?: Array<{
                value: string | number | boolean;
                label: string;
            }>;
            customType?: string;
        }>;
    }>;
}>;
