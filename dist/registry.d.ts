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
