import PageHeader from "../components/pageheader";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="Computing Resources Unit College of Agricultural and Environmental Sciences at UC Davis"
        patternClassName="bg-caret-pattern"
      />
      <div className="container">
        <div className="flex flex-col md:flex-row gap-2">
          {/* Left Col */}
          <div className="md:w-1/2 w-full">
            <h2 className="mb-2">Help Desk/Infrastructure</h2>
            <p>
              The Help Desk and Infrastructure group provides computer support
              to the Dean’s Office, Centers and Institutes, numbering over 300
              workstations, 150 laptops, and 100 mobile devices. In addition to
              client computer support, the group maintains the infrastructure
              for the various services offered: email/calendaring, printing,
              websites, business applications, databases, etc., as well as
              providing computer security consulting and remediation for the
              college under the Cyber-Safety Program.
            </p>
            <div className="flex avatar-group -space-x-2 mt-2">
              {[
                { name: "Dj", src: "/team/dj.png" },
                { name: "Surina", src: "/team/surina.png" },
                { name: "Jackie", src: "/team/jackie.png" },
                { name: "Steven", src: "/team/steven.png" },
                { name: "Shuka", src: "/team/shuka.png" },
              ].map(({ name, src }) => (
                <div key={name} className="avatar">
                  <div className="w-8">
                    <Image
                      src={src}
                      alt={`${name}'s avatar`}
                      width={48}
                      height={48}
                      role="img"
                      aria-label={`${name}'s avatar`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mb-2 mt-5">Business Application Development</h2>
            <p>
              The Application Development group writes systems to automate
              critical business functions. The group retains close ties with
              application users, so many of the systems evolve continually to
              address new needs or to meet changes (such as updates in DaFIS
              accounting databases). The Application group authored and
              maintains business applications such as Faculty Recruitments,
              Pre-Purchasing, Student Information Management System, and
              internal time reporting systems, to name a few. View our portfolio
              to see our entire catalog of projects.
            </p>
            <div className="flex avatar-group -space-x-2 mt-2">
              {[
                { name: "Spruce", src: "/team/spruce.png" },
                { name: "Rob", src: "/team/rob.png" },
                { name: "Jason", src: "/team/jason.png" },
                { name: "Scott", src: "/team/scott.png" },
              ].map(({ name, src }) => (
                <div key={name} className="avatar">
                  <div className="w-8">
                    <Image
                      src={src}
                      alt={`${name}'s avatar`}
                      width={48}
                      height={48}
                      role="img"
                      aria-label={`${name}'s avatar`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mb-2 mt-5">Web Design and Development</h2>
            <p>
              The web development group has nearly 40 websites in active use
              and/or development. These can be divided into the following types:
              Center sites, program and group sites, research focused sites,
              institute sites, and conference/event sites. Sites include the
              college homepage, Agricultural Sustainability Institute, Afghan
              Agricultural Project, Foods for Health Initiative, as examples.
            </p>
            <div className="flex avatar-group -space-x-2 mt-2">
              {[{ name: "Cal", src: "/team/cal.png" }].map(({ name, src }) => (
                <div key={name} className="avatar">
                  <div className="w-8">
                    <Image
                      src={src}
                      alt={`${name}'s avatar`}
                      width={48}
                      height={48}
                      role="img"
                      aria-label={`${name}'s avatar`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Col */}
          <div className="md:w-1/2 w-full">
            <div className="bg-base-100 p-4 shadow rounded">
              <h3 className="text-lg font-semibold mb-2">33% Column</h3>
              <p className="text-sm">
                You can place sidebar or summary content here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
