import PageHeader from "../components/pageheader";
import Image from "next/image";
import { Metadata } from "next";

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
        <div className="flex flex-col md:flex-row gap-16 items-center justify-between py-8"></div>
      </div>
    </>
  );
}
