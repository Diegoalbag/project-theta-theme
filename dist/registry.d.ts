export declare const sectionsComponents: {
    hero: ({ title, description, featureOne, featureTwo, featureThree, primaryCtaLabel, primaryCtaUrl, secondaryCtaLabel, secondaryCtaUrl, heroImage, textAlignment, }: import('./sections/Hero').HeroProps) => any;
    header: () => any;
    features: ({ title, description, features, columns, textAlignment, }: import('./sections/Features').FeaturesProps) => any;
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
    features: ({
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
};
