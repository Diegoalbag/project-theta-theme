export interface TeamMemberData {
  name?: string;
  last_name?: string;
  role?: string;
  profile_picture?: { id?: number; url?: string };
  // Defensive marker the platform stamps when a referenced entry can't be resolved.
  __missing?: boolean;
}

export interface TeamMemberBlockProps {
  // Resolved object on the published site; raw documentId string in the customizer
  teamMember?: TeamMemberData | string;
  blockId?: string;
  blockType?: string;
}

// True when the resolved data object carries no meaningful display fields, so the
// real-render branch would produce a blank card. An empty `{}` (the pre-fix
// quick-create shape) and a `{ __missing: true }` marker are truthy objects, so
// they slip past the falsy/string guard — treat them as placeholder data.
const hasNoDisplayFields = (d: TeamMemberData): boolean =>
  !d.name && !d.last_name && !d.role && !d.profile_picture;

export const TeamMemberBlock = ({ teamMember }: TeamMemberBlockProps) => {
  // Show the placeholder when:
  //  - the platform passes a raw documentId string (customizer), or value is falsy
  //  - the resolved object is explicitly marked __missing, or
  //  - the resolved object has no meaningful display fields (empty/partial data)
  if (
    !teamMember ||
    typeof teamMember === "string" ||
    teamMember.__missing ||
    hasNoDisplayFields(teamMember)
  ) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center shadow-sm">
        <div className="bg-muted h-20 w-20 rounded-full" />
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm italic">Team member preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center shadow-sm">
      {teamMember.profile_picture?.url && (
        <img
          src={teamMember.profile_picture.url}
          alt={teamMember.name}
          className="h-20 w-20 rounded-full object-cover"
        />
      )}
      <div className="flex flex-col gap-1">
        <p className="text-card-foreground font-semibold">
          {teamMember.name} {teamMember.last_name}
        </p>
        {teamMember.role && (
          <p className="text-muted-foreground text-sm">{teamMember.role}</p>
        )}
      </div>
    </div>
  );
};

export const teamMemberBlockSettingsSchema = [
  {
    id: "teamMember",
    label: "Team Member",
    type: "metaobject_ref",
    metaobjectType: "team_member"  // must match the definition key in Strapi
  }
];
