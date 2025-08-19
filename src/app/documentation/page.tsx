import PageHeader from "../components/pageheader";
import Image from "next/image";
import { Metadata } from "next";

import DocumentationSidebar from "../components/documentationSidebar";

export const metadata: Metadata = {
  title: "Documentation",
};

export default function Documentation() {
  return (
    <>
      <PageHeader
        title="Documentation"
        subtitle="Computing Resources Unit College of Agricultural and Environmental Sciences at UC Davis"
        patternClassName="bg-plus-pattern"
      />
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 items-center justify-between">
          <div className="flex flex-col md:flex-row gap-16 justify-between">
            {/* Left Col */}
            <div className="md:w-3/5 w-full">
              <p className="text-lg">
                This section is your go-to guide for learning how to use our
                apps and computing resources, with easy-to-follow tips and
                instructions to help you get things done.
              </p>
              <hr className="mt-8" />
              <br />
              <hr className="mb-8" />
            </div>
            {/* Right Col */}

            <DocumentationSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
