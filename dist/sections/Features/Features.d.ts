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
export declare const Features: ({ title, description, features, columns, textAlignment, }: FeaturesProps) => any;
export declare const featuresSettingsSchema: ({
    id: string;
    label: string;
    type: string;
    default: string;
    itemSchema?: undefined;
    options?: undefined;
} | {
    id: string;
    label: string;
    type: string;
    default: {
        icon: string;
        title: string;
        description: string;
    }[];
    itemSchema: ({
        id: string;
        label: string;
        type: string;
        options: {
            value: string;
            label: string;
        }[];
        default: string;
    } | {
        id: string;
        label: string;
        type: string;
        default: string;
        options?: undefined;
    })[];
    options?: undefined;
} | {
    id: string;
    label: string;
    type: string;
    options: {
        value: number;
        label: string;
    }[];
    default: number;
    itemSchema?: undefined;
} | {
    id: string;
    label: string;
    type: string;
    options: string[];
    default: string;
    itemSchema?: undefined;
})[];
