import PageHeader from "../components/pageheader";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
};

export default function Team() {
  return (
    <>
      <PageHeader
        title="Team"
        subtitle="Computing Resources Unit College of Agricultural and Environmental Sciences at UC Davis"
        patternClassName="bg-circle-pattern"
      />
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <div className="md:w-1/2 w-full">
            <p className="text-xl">
              One Lab Supporter in the Laboratory,
              <br /> Two Client Supporters under the sky,
              <br /> Two System Administrators in their cubicles of stone,
              <br /> Five website developers doomed to code,
              <br /> One Director to rule them all,
              <br /> One Director to find them,
              <br /> One Director to bring them all and in the basement bind
              them <br /> In the land of Davis where agriculture rules.
            </p>
          </div>
          <div className="md:w-1/2 w-full md:px-16 xl:px-24">
            <Image
              src="/team/team.png"
              alt="Pixel versions of the team"
              width={1149}
              height={654}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <hr />
      <br />
      <hr />
    </>
  );
}
