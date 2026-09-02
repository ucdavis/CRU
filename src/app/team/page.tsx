import PageHeader from "../components/pageheader";
import Image from "next/image";
import TeamPortrait, { hasTeamPortrait } from "../components/teamPortrait";
import { getCurrentTeamMembers } from "@/lib/team";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/siteMetadata";

const teamSprites = [
  { name: "Odin", src: "/team/isolated/odin.png", width: 1254, height: 1254, left: "-5.35%", top: "8.04%", size: "25.26%", zIndex: 1 },
  { name: "Arista", src: "/team/isolated/arista.png?v=2", width: 1155, height: 1362, left: "-10.44%", top: "19.43%", size: "38.14%", zIndex: 7 },
  { name: "Jason", src: "/team/isolated/jason.png?v=4", width: 1180, height: 1333, left: "-4.87%", top: "0.24%", size: "41.70%", zIndex: 4 },
  { name: "Spruce", src: "/team/isolated/spruce.png?v=9", width: 1124, height: 1399, left: "7.49%", top: "-2.66%", size: "38.67%", zIndex: 5 },
  { name: "Cal", src: "/team/isolated/cal.png?v=2", width: 1180, height: 1333, left: "2.09%", top: "18.57%", size: "40.17%", zIndex: 8 },
  { name: "Rob", src: "/team/isolated/rob.png", width: 1254, height: 1254, left: "10.61%", top: "12.60%", size: "47.53%", zIndex: 7 },
  { name: "Scott", src: "/team/isolated/scott.png", width: 1179, height: 1334, left: "20.80%", top: "1.49%", size: "41.48%", zIndex: 3 },
  { name: "Adam", src: "/team/isolated/adam.png", width: 1254, height: 1254, left: "36.21%", top: "16.82%", size: "47.85%", zIndex: 6 },
  { name: "Steven", src: "/team/isolated/steven.png?v=3", width: 1254, height: 1254, left: "51.31%", top: "3.90%", size: "42.63%", zIndex: 4 },
  { name: "Shuka", src: "/team/isolated/shuka.png", width: 1175, height: 1338, left: "61.68%", top: "20.46%", size: "38.03%", zIndex: 7 },
  { name: "Jackie", src: "/team/isolated/jackie.png", width: 1199, height: 1312, left: "64.50%", top: "8.91%", size: "43.50%", zIndex: 3 },
  { name: "DJ", src: "/team/isolated/dj.png?v=6", width: 1254, height: 1254, left: "69.97%", top: "23.90%", size: "44.88%", zIndex: 8 },
];

export const metadata: Metadata = createPageMetadata({
  title: "Team",
  description: "Meet the Computing Resources Unit team at UC Davis CAES.",
  path: "/team",
});

export default async function TeamPage() {
  const team = getCurrentTeamMembers();

  return (
    <>
      <PageHeader
        title="Team"
        subtitle="Computing Resources Unit College of Agricultural and Environmental Sciences at UC Davis"
        patternClassName="bg-circle-pattern"
      />
      <div className="container">
        <div className="flex items-center justify-center">
          {/* <div className="md:w-1/2 w-full">
            <p className="text-xl mb-8 md:mb-0">
              One Lab Supporter in the Laboratory,
              <br /> Two Client Supporters under the sky,
              <br /> Two System Administrators in their cubicles of stone,
              <br /> Five website developers doomed to code,
              <br /> One Director to rule them all,
              <br /> One Director to find them,
              <br /> One Director to bring them all and in the basement bind
              them <br /> In the land of Davis where agriculture rules.
            </p>
          </div> */}
          <div className="w-full max-w-7xl">
            <div
              className="relative hidden aspect-video w-full overflow-hidden md:block"
              role="img"
              aria-label="Pixel-art portraits of the Computing Resources Unit team"
            >
              {teamSprites.map((sprite) => (
                <div
                  key={sprite.name}
                  className="absolute"
                  style={{
                    left: sprite.left,
                    top: sprite.top,
                    width: sprite.size,
                    zIndex: sprite.zIndex,
                  }}
                >
                  {sprite.name === "Odin" || sprite.name === "Spruce" || sprite.name === "DJ" || sprite.name === "Rob" || sprite.name === "Arista" || sprite.name === "Cal" ? (
                    <div
                      aria-hidden="true"
                      className={`team-sprite-sheet team-sprite-sheet--${sprite.name.toLowerCase()}`}
                    />
                  ) : (
                    <Image
                      src={sprite.src}
                      alt=""
                      width={sprite.width}
                      height={sprite.height}
                      sizes="(min-width: 1024px) 1080px, 90vw"
                      unoptimized
                      className="h-auto w-full"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:hidden">
              {teamSprites.map((sprite) => (
                <Image
                  key={sprite.name}
                  src={sprite.src}
                  alt={`${sprite.name}'s pixel-art portrait`}
                  width={sprite.width}
                  height={sprite.height}
                  unoptimized
                  className="h-auto w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <div className="container py-16">
        <div className="md:w-2/3 w-full mx-auto">
          <div className="overflow-x-auto">
          <table aria-label="CRU team members" className="table min-w-[640px]">
            <caption className="sr-only">Current CRU team members</caption>
            <thead className="text-base-content/65">
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Phone #</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {team.filter((member) => member.slug !== "odin").map((member) => {
                const portrait = hasTeamPortrait(member.slug);

                return (
                  <tr key={member.slug}>
                    <td>
                      <div className="flex items-center gap-3">
                        {portrait ? (
                          <TeamPortrait slug={member.slug} name={member.name} />
                        ) : (
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={48}
                            height={48}
                            className="h-12 w-12 rounded-xl"
                          />
                        )}
                      <div>
                        <div>
                          <b>{member.name}</b>
                          <br />
                          {member.pronouns}
                        </div>
                      </div>
                    </div>
                    </td>
                    <td>
                      <span className="badge">{member.role}</span>
                    </td>
                    <td>
                      {member.phone ? (
                        <a
                          href={`tel:${member.phone}`}
                          className="link link-hover"
                        >
                          {member.phone}
                        </a>
                      ) : (
                        <span className="text-base-300 italic">—</span>
                      )}
                    </td>
                    <td>
                      {member.email ? (
                        <a
                          href={`mailto:${member.email}`}
                          className="link link-hover text-primary-color"
                        >
                          {member.email}
                        </a>
                      ) : (
                        <span className="text-gray-400 italic">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  );
}
