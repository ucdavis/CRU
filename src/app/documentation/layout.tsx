// src/app/documentation/layout.tsx

import DocumentationSidebar from "../components/documentationSidebar";
import PageHeader from "../components/pageheader";

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageHeader
        title="Documentation"
        subtitle="Computing Resources Unit College of Agricultural and Environmental Sciences at UC Davis"
        patternClassName="bg-plus-pattern"
      />
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 items-center justify-between">
          <div className="flex flex-col md:flex-row gap-16 justify-between">
            {/* Left Col */}
            <div className="md:w-3/5 w-full">{children}</div>
            <DocumentationSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
