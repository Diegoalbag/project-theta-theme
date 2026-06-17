import { default as React } from 'react';
export declare const sectionsComponents: {
    hero: ({ title, description, renderBlocks, primaryCtaLabel, primaryCtaUrl, secondaryCtaLabel, secondaryCtaUrl, heroImage, textAlignment, }: import('./sections/Hero').HeroProps) => React.JSX.Element;
    header: () => React.JSX.Element;
    team: ({ heading, subheading, columns, backgroundColor, textAlignment, renderBlocks, }: import('./sections/Team/Team').TeamProps) => React.JSX.Element;
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
            id: any;
            url: string;
        };
        info: string;
        placeholder?: undefined;
    })[];
    header: {
        id: string;
        label: string;
        type: string;
    }[];
    team: ({
        id: string;
        label: string;
        type: string;
        default: string;
        placeholder?: undefined;
        min?: undefined;
        max?: undefined;
    } | {
        id: string;
        label: string;
        type: string;
        placeholder: string;
        default?: undefined;
        min?: undefined;
        max?: undefined;
    } | {
        id: string;
        label: string;
        type: string;
        default: number;
        min: number;
        max: number;
        placeholder?: undefined;
    })[];
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
