import Diamond from "./components/diamond";

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
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="md:1/2 w-full">Recent</div>
          <div className="md:1/2 w-full">Quick Links</div>
        </div>
      </div>
    </div>
  );
}
