export declare const sectionsComponents: {
    hero: ({ title }: {
        title: any;
    }) => any;
};
export declare const settingsSettingsSchemas: {
    hero: ({
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
};
