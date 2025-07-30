import PageHeader from "../components/pageheader";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="Computing Resources Unit College of Agricultural and Environmental Sciences at UC Davis"
        patternClassName="bg-caret-pattern"
      />
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 justify-between">
          {/* Left Col */}
          <div className="md:w-3/5 w-full">
            <p className="text-lg">
              The goal of the Computing Resources Unit is to provide the best
              possible customer service, application development, and technology
              infrastructure to support the business needs of the Dean’s Office
              and the College of Agricultural & Environmental Sciences and its
              departments.
            </p>
            <hr className="mt-8" />
            <br />
            <hr className="mb-8" />
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

            <h2 className="mb-2 mt-16">Business Application Development</h2>
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

            <h2 className="mb-2 mt-16">Web Design and Development</h2>
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
          <div className="md:w-1/3 w-full">
            <div className="card card-xl shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-secondary">Rates</h2>
                <p>
                  <b>$122/hr</b> - Project Planning and Management
                </p>
                <p>
                  <b>$84/hr</b> - Application Development
                </p>
                <p>
                  <b>$70/hr</b> - Web Design and Development
                </p>
                <p>
                  <b>$73/hr</b> - Network Systems
                </p>
                <p>
                  <b>$67/hr</b> - Help Desk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
