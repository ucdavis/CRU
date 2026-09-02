const categoryIcons: Record<string, string> = {
  ace: "ace",
  finjector: "finjector",
  harvest: "harvest",
  helpdesk: "help",
  payments: "payments",
  peaks: "peaks",
  policies: "policies",
  purchasing: "prepurchasing",
  registration: "registration",
  walter: "walter",
};

type DocumentationCategoryIconProps = {
  category: string;
  className?: string;
};

export function hasDocumentationCategoryIcon(category: string) {
  return category in categoryIcons;
}

export default function DocumentationCategoryIcon({
  category,
  className = "h-5 w-5",
}: DocumentationCategoryIconProps) {
  const icon = categoryIcons[category];

  if (!icon) return null;

  const iconUrl = `/documentation/${icon}.svg`;

  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        mask: `url("${iconUrl}") center / contain no-repeat`,
        WebkitMask: `url("${iconUrl}") center / contain no-repeat`,
      }}
    />
  );
}
