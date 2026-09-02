import Diamond from "./components/diamond";
import QuicklinkList from "./components/quicklinklist";
import { getAllPortfolio } from "@/lib/portfolio";
import { getCurrentTeamMembers } from "@/lib/team";
import TeamPortrait, { hasTeamPortrait } from "./components/teamPortrait";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "CRU – Computing Resources Unit",
  description:
    "Application development, technology infrastructure, and customer service for UC Davis CAES.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  const projects = getAllPortfolio()
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 4);

  const team = getCurrentTeamMembers();
  const teamByName = new Map(team.map((m) => [m.name.toLowerCase().trim(), m]));

  return (
    <div className="mb-8">
      <div className="border-b-1 border-cru-border pt-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center pb-16">
            <div className="md:1/2 w-full">
              <p className="text-sm font-medium text-light-font/75 uppercase leading-normal">
                Computing Resources Unit College of Agricultural and
                Environmental Sciences at UC Davis
              </p>
              <h1>
                Top tier application development, <br /> technology
                infrastructure, <br /> & customer service
              </h1>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://caeshelp.ucdavis.edu/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Get Help
                </a>
                <Link className="btn btn-outline btn-lg" href="/documentation">
                  Read the Docs
                </Link>
              </div>
            </div>
            <div>
              <Diamond />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-6 py-8">
          <div className="md:w-2/3 w-full">
            <h2>Recent Projects</h2>
            <div className="overflow-x-auto mt-4">
              <table aria-label="Recent projects" className="table min-w-[640px]">
                <caption className="sr-only">Recent CRU projects</caption>
                <tbody>
                  {projects.map((p) => (
                    <tr key={p.slug}>
                      <td className="w-36 align-top">
                        {p.image ? (
                          <Image
                            width={128}
                            height={128}
                            className="rounded-md"
                            alt={`${p.title} logo`}
                            src={`/portfolio/${p.image}.png`}
                          />
                        ) : (
                          <div className="w-[128px] h-[104px] bg-gray-200 rounded" />
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
                          {p.description && (
                            <p className="mt-2">{p.description}</p>
                          )}
                          {p.url ? (
                            <Link
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link link-hover text-primary"
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
                              const m = teamByName.get(
                                dev.toLowerCase().trim(),
                              );
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
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-4 align-end">
                <Link
                  href="/portfolio"
                  className="link link-hover text-primary font-medium"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 w-full">
            <h2>Quick Links</h2>
            <QuicklinkList />
          </div>
        </div>
      </div>

      <div className="border-t-1 py-8 border-cru-border">
        <div className="container">
          <h2>Contact</h2>
          <div className="flex flex-col md:flex-row gap-6 py-8">
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Help Desk</h3>
                <div className="grid grid-cols-2 gap-y-2">
                  <span className="font-semibold text-base-content/70">
                    Location
                  </span>
                  <span>150 Mrak Hall First Floor</span>

                  {/* <span className="font-semibold text-base-content/70">
                    Phone
                  </span>
                  <span>(530) 754-7122</span> */}

                  <span className="font-semibold text-base-content/70">
                    Link
                  </span>

                  <a
                    href="https://caeshelp.ucdavis.edu/"
                    className="link link-hover text-primary"
                  >
                    caeshelp.ucdavis.edu
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Lab Support</h3>
                <div className="grid grid-cols-2 gap-y-2">
                  <span className="font-semibold text-base-content/70">
                    Location
                  </span>
                  <p>
                    1137 PES Calendar
                    <br />
                    253 Hunt Calendar
                  </p>

                  {/* <span className="font-semibold text-base-content/70">
                    Phone
                  </span>
                  <span>(530) 752-1823</span> */}

                  <span className="font-semibold text-base-content/70">
                    Link
                  </span>

                  <a
                    href="https://ic.ucdavis.edu/"
                    className="link link-hover text-primary"
                  >
                    ic.ucdavis.edu
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Web and App Support</h3>
                <div className="grid grid-cols-2 gap-y-2">
                  <span className="font-semibold text-base-content/70">
                    Location
                  </span>
                  <span>38 Mrak Hall Basement</span>
                  <span className="font-semibold text-base-content/70">
                    Link
                  </span>
                  <div>
                    <a
                      href="https://caeshelp.ucdavis.edu/"
                      className="link link-hover text-primary"
                      target="_blank"
                    >
                      caeshelp.ucdavis.edu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
