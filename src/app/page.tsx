import Diamond from "./components/diamond";
import QuicklinkList from "./components/quicklinklist";

export default function Home() {
  return (
    <div className="mb-8">
      <div className="border-b-1 border-cru-border pt-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center pb-16">
            <div className="md:1/2 w-full">
              <h4>
                Computing Resources Unit College of Agricultural and
                Environmental Sciences at UC Davis
              </h4>
              <h1>
                Top tier application development, <br /> technology
                infrastructure, <br /> & customer service
              </h1>
            </div>
            <div>
              <Diamond />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-6 py-8">
          <div className="md:w-1/2 w-full">
            <h2>Recent</h2>
          </div>
          <div className="md:w-1/2 w-full">
            <h2>Quick Links</h2>
            <QuicklinkList />
          </div>
        </div>
      </div>
      <div className="border-t-1 py-8 border-cru-border">
        <div className="container">
          <h2>Contact</h2>
          <div className="flex flex-col md:flex-row gap-6 py-8">
            <div className="card bg-base-200">
              <div className="card-body">
                <h2 className="card-title">Help Desk</h2>
                <div className="grid grid-cols-2 gap-y-2">
                  <span className="font-semibold text-base-content/70">
                    Location
                  </span>
                  <span>150 Mrak Hall First Floor</span>

                  {/* <span className="font-semibold text-base-content/70">
                    Phone
                  </span>
                  <span>(530) 754-7122</span> */}

                  <span className="font-semibold text-base-content/70">
                    Link
                  </span>

                  <a
                    href="https://caeshelp.ucdavis.edu/"
                    className="link link-hover text-primary"
                  >
                    caeshelp.ucdavis.edu
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <h2 className="card-title">Lab Support</h2>
                <div className="grid grid-cols-2 gap-y-2">
                  <span className="font-semibold text-base-content/70">
                    Location
                  </span>
                  <p>
                    1137 PES Calendar
                    <br />
                    253 Hunt Calendar
                  </p>

                  {/* <span className="font-semibold text-base-content/70">
                    Phone
                  </span>
                  <span>(530) 752-1823</span> */}

                  <span className="font-semibold text-base-content/70">
                    Link
                  </span>

                  <a
                    href="https://ic.ucdavis.edu/"
                    className="link link-hover text-primary"
                  >
                    ic.ucdavis.edu
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <h2 className="card-title">Web and App Support</h2>
                <div className="grid grid-cols-2 gap-y-2">
                  <span className="font-semibold text-base-content/70">
                    Location
                  </span>
                  <span>38 Mrak Hall Basement</span>
                  <span className="font-semibold text-base-content/70">
                    Link
                  </span>
                  <div>
                    <a
                      href="https://caeshelp.ucdavis.edu/"
                      className="link link-hover text-primary"
                      target="_blank"
                    >
                      caeshelp.ucdavis.edu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
