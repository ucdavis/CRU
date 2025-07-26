import PageHeader from "../components/pageheader";

export default function services() {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="Computing Resources Unit College of Agricultural and Environmental Sciences at UC Davis"
        patternClassName="bg-caret-pattern"
      />
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3 w-full">
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
          </div>
          <div className="md:w-1/3 w-full">33%</div>
        </div>
      </div>
    </>
  );
}
