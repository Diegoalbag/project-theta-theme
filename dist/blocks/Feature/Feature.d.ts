export interface FeatureBlockProps {
    feature?: string;
    blockId?: string;
    blockType?: string;
}
export declare const FeatureBlock: ({ feature, }: FeatureBlockProps) => any;
export declare const featureBlockSettingsSchema: {
    id: string;
    label: string;
    type: string;
    default: string;
    placeholder: string;
}[];
