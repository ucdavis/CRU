import { ReactElement } from "react";

interface QuicklinkProps {
  href: string;
  label: string;
  icon: ReactElement;
  isExternal?: boolean;
}

export function Quicklink({
  href,
  label,
  icon,
  isExternal = false,
}: QuicklinkProps) {
  return (
    <li className="w-max">
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-2 px-3 py-2 rounded hover:bg-base-300 transition-colors duration-200 text-lg"
      >
        {icon}
        <span>{label}</span>
      </a>
    </li>
  );
}
