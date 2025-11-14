export declare const Hero: ({ title }: {
    title: any;
}) => any;
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
    default?: undefined;
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
} | {
    id: string;
    label: string;
    type: string;
    default: boolean;
    options?: undefined;
})[];
