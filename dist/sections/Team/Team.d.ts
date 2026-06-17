import { default as React } from 'react';
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
export declare const Team: ({ heading, subheading, columns, backgroundColor, textAlignment, renderBlocks, }: TeamProps) => React.JSX.Element;
export declare const teamSettingsSchema: ({
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
