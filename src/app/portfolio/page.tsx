export const runtime = "nodejs";

import PageHeader from "../components/pageheader";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import TeamPortrait, { hasTeamPortrait } from "../components/teamPortrait";
import { getAllPortfolio } from "@/lib/portfolio";
import { getCurrentTeamMembers } from "@/lib/team";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Selected web applications, websites, and technology projects built by the Computing Resources Unit.",
  path: "/portfolio",
});

export default function Portfolio() {
  const items = getAllPortfolio();
  const team = getCurrentTeamMembers();
  const teamByName = new Map(team.map((m) => [m.name.toLowerCase().trim(), m]));
  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Computing Resources Unit College of Agricultural and Environmental Sciences at UC Davis"
        patternClassName="bg-slant-pattern"
      />

      <div className="container">
        <div className="flex flex-col justify-between">
          <div className="md:w-3/5 w-full">
            <p className="text-lg">
              From small centers and departments to projects that span the whole
              campus, we’ve worked with a wide variety of groups. Take a look
              below to see the range of our work.
            </p>
          </div>
          <hr className="mt-8" />
          <br />
          <hr className="mb-8" />
        </div>
      </div>

      <div className="container py-16">
        <div className="w-full mx-auto overflow-x-auto">
          <table aria-label="CRU portfolio projects" className="table min-w-[760px]">
            <caption className="sr-only">CRU portfolio projects</caption>
            <thead className="text-base-content/65">
              <tr>
                <th><span className="sr-only">Project logo</span></th>
                <th>Info</th>

                <th>Team</th>
                <th>Audience</th>
                <th className="text-center">Type</th>
              </tr>
            </thead>
            <tbody>
              {items.map((p) => (
                <tr key={p.slug}>
                  <td className="w-[160px] align-top">
                    {p.image ? (
                      <Image
                        width={128}
                        height={128}
                        className="rounded-md"
                        alt={`${p.title} logo`}
                        src={`/portfolio/${p.image}.png`}
                      />
                    ) : (
                      <div className="w-[128px] h-[58px] bg-gray-200 rounded" />
                    )}
                  </td>
                  <td className="w-186 align-top">
                    <div className="flex flex-col">
                      <p className="text-xl">{p.title}</p>
                      {p.date && (
                        <span className="text-base-content/75">
                          {new Date(p.date).toLocaleDateString()}
                        </span>
                      )}
                      {p.description && <p className="mt-2">{p.description}</p>}
                      {p.url ? (
                        <Link
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link link-hover text-primary-color"
                        >
                          {p.url}
                        </Link>
                      ) : (
                        "—"
                      )}
                    </div>
                  </td>

                  <td>
                    {p.developers?.length ? (
                      <div
                        className={`flex ${
                          p.developers.length > 1
                            ? "-space-x-2 mt-2"
                            : "items-center"
                        }`}
                      >
                        {p.developers.map((dev) => {
                          const m = teamByName.get(dev.toLowerCase().trim());
                          const initials = dev
                            .split(/\s+/)
                            .map((s) => s[0]?.toUpperCase() ?? "")
                            .slice(0, 2)
                            .join("");

                          return (
                            <div key={dev}>
                              <div className="h-8 w-8">
                                {m && hasTeamPortrait(m.slug) ? (
                                  <TeamPortrait
                                    className="h-8 w-8"
                                    name={m.name}
                                    slug={m.slug}
                                  />
                                ) : (
                                  <div className="flex h-8 w-8 items-center justify-center bg-base-300 text-xs font-semibold">
                                    {initials || "—"}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td>{p.audience || "—"}</td>
                  <td className="align-middle text-center whitespace-nowrap">
                    {p.type ? (
                      <span
                        className={`badge shrink-0 whitespace-nowrap ${
                          p.type.toLowerCase() === "web app"
                            ? "badge badge-outline badge-secondary"
                            : p.type.toLowerCase() === "static site"
                              ? "badge badge-outline badge-info"
                              : "badge-ghost"
                        }`}
                      >
                        {p.type}
                      </span>
                    ) : (
                      <span className="badge badge-ghost shrink-0 whitespace-nowrap">
                        Unknown
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr />
      <br />
      <hr />
    </>
  );
}
