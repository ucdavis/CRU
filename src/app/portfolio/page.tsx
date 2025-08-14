// app/portfolio/page.tsx
import PageHeader from "../components/pageheader";
import Link from "next/link";
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
        <div className="flex flex-col md:flex-row gap-16 items-center justify-between py-8" />
      </div>

      <hr className="my-12" />

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
                  <td className="w-8">{/* blank cell per your layout */}</td>
                  <td className="font-medium">
                    <div className="flex flex-col">
                      <span>{p.title}</span>
                      {p.date && (
                        <span className="text-base-content/75">
                          {new Date(p.date).toLocaleDateString()}
                        </span>
                      )}
                      {p.description && (
                        <span className="text-base-content">
                          {p.description}
                        </span>
                      )}
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
