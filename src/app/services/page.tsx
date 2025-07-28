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
        <div className="flex flex-col md:flex-row gap-2">
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
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">33%</div>
        </div>
      </div>
    </>
  );
}
