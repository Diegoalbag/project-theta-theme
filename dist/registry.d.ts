export declare const sectionsComponents: {
    hero: ({ title, description, featureOne, featureTwo, featureThree, primaryCtaLabel, primaryCtaUrl, secondaryCtaLabel, secondaryCtaUrl, heroImage, textAlignment, }: import('./sections/Hero').HeroProps) => any;
    header: () => any;
};
export declare const sectionSettingsSchemas: {
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
        options: {
            value: string;
            label: string;
        }[];
        default: string;
    })[];
    header: ({
        id: string;
        label: string;
        type: string;
        default: string;
    } | {
        id: string;
        label: string;
        type: string;
        default?: undefined;
    })[];
};
