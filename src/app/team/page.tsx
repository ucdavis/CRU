import PageHeader from "../components/pageheader";
import Image from "next/image";
import { getCurrentTeamMembers } from "@/lib/team";

export const metadata = {
  title: "Team",
};

export default function TeamPage() {
  const team = getCurrentTeamMembers();

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
      <hr className="my-12" />
      <div className="container py-16">
        <div className="md:w-2/3 w-full mx-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Phone #</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {team.map((member) => (
                <tr key={member.slug}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={48}
                            height={48}
                          />
                        </div>
                      </div>
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
                      <span className="text-gray-400 italic">—</span>
                    )}
                  </td>
                  <td>
                    {member.email ? (
                      <a
                        href={`mailto:${member.email}`}
                        className="link link-hover text-secondary"
                      >
                        {member.email}
                      </a>
                    ) : (
                      <span className="text-gray-400 italic">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}
