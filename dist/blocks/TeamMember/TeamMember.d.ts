export interface TeamMemberData {
    name?: string;
    last_name?: string;
    role?: string;
    profile_picture?: {
        id?: number;
        url?: string;
    };
}
export interface TeamMemberBlockProps {
    teamMember?: TeamMemberData | string;
    blockId?: string;
    blockType?: string;
}
export declare const TeamMemberBlock: ({ teamMember }: TeamMemberBlockProps) => import("react/jsx-runtime").JSX.Element;
export declare const teamMemberBlockSettingsSchema: {
    id: string;
    label: string;
    type: string;
    metaobjectType: string;
}[];
