const teamPortraits = {
  adam: { src: "/team/isolated/adam.png", position: "50% 9%" },
  arista: { src: "/team/isolated/arista.png?v=2", position: "50% 6%" },
  cal: { src: "/team/isolated/cal.png?v=2", position: "50% 10%" },
  darell: { src: "/team/isolated/dj.png?v=6", position: "50% 9%" },
  jackie: { src: "/team/isolated/jackie.png", position: "50% 9%" },
  jason: { src: "/team/isolated/jason.png?v=4", position: "50% 7%" },
  odin: { src: "/team/isolated/odin.png", position: "50% 18%" },
  rob: { src: "/team/isolated/rob.png", position: "50% 10%" },
  scott: { src: "/team/isolated/scott.png", position: "50% 6%" },
  shuka: { src: "/team/isolated/shuka.png", position: "50% 7%" },
  spruce: { src: "/team/isolated/spruce.png?v=9", position: "50% 4%" },
  steven: { src: "/team/isolated/steven.png?v=3", position: "50% 9%" },
} as const;

const coolPortraits = new Set(["arista", "spruce", "scott", "cal", "jason", "rob"]);

type TeamPortraitProps = {
  slug: string;
  name: string;
  className?: string;
};

export function hasTeamPortrait(slug: string) {
  return slug in teamPortraits;
}

export default function TeamPortrait({
  slug,
  name,
  className = "h-12 w-12",
}: TeamPortraitProps) {
  const portrait = teamPortraits[slug as keyof typeof teamPortraits];

  if (!portrait) return null;

  return (
    <div
      aria-label={`${name}'s pixel-art portrait`}
      className={`shrink-0 rounded-xl bg-no-repeat ring ring-base-100 ring-offset-1 ${
        coolPortraits.has(slug) ? "bg-[#CDD6E0]" : "bg-[#FFECB2]"
      } ${className}`}
      role="img"
      style={{
        backgroundImage: `url("${portrait.src}")`,
        backgroundPosition: portrait.position,
        backgroundSize: "auto 420%",
      }}
    />
  );
}
