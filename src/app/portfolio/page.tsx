// app/portfolio/page.tsx
import PageHeader from "../components/pageheader";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getAllPortfolio } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Portfolio() {
  const items = getAllPortfolio(); // server-side read at build/runtime

  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Computing Resources Unit College of Agricultural and Environmental Sciences at UC Davis"
        patternClassName="bg-slant-pattern"
      />

      <div className="container">
        <div className="flex flex-col justify-between py-8">
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
          <table className="table">
            <thead className="text-base-content/65">
              <tr>
                <th></th>
                <th>Info</th>
                <th>URL</th>
                <th>Team</th>
                <th>Audience</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {items.map((p) => (
                <tr key={p.slug}>
                  <td className="w-16 align-top">
                    {p.image ? (
                      <Image
                        width={128}
                        height={128}
                        className="rounded"
                        alt={`${p.title} logo`}
                        src={`/portfolio/${p.image}.png`}
                      />
                    ) : (
                      <div className="w-[128px] h-[58px] bg-gray-200 rounded" />
                    )}
                  </td>
                  <td className="align-top">
                    <div className="flex flex-col">
                      <p className="text-xl">{p.title}</p>
                      {p.date && (
                        <span className="text-base-content/75">
                          {new Date(p.date).toLocaleDateString()}
                        </span>
                      )}
                      {p.description && <p className="mt-2">{p.description}</p>}
                    </div>
                  </td>
                  <td>
                    {p.url ? (
                      <Link
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-hover text-ucd-arboretum"
                      >
                        {p.url}
                      </Link>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td>
                    {p.developers?.length ? p.developers.join(", ") : "—"}
                  </td>
                  <td>{p.audience || "—"}</td>
                  <td>{p.type || "Web Application"}</td>
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
