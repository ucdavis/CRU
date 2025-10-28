import Link from "next/link";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

const DocumentationSidebar: React.FC = () => {
  return (
    <div className="md:w-1/3 w-full">
      <div className="md:sticky md:top-20">
        <div className="card card-lg">
          <div className="card-body">
            <h2 className="card-title text-documentation">
              <b>Create a ticket</b>
            </h2>
            <p>
              Unable to find what you need? Make a ticket and we will get back
              to you as soon as possible.
            </p>
            <br />
            <Link
              className="btn btn-error"
              href="https://caeshelp.ucdavis.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create a ticket
            </Link>
          </div>
        </div>

        <ul className="pt-6">
          <li>
            <a
              href="/files/EmeritiandStaffRetireeITsupportguidelinesFINAL.pdf"
              className="inline-flex items-center gap-2 px-3 py-2 rounded hover:bg-base-300 transition-colors duration-200 text-lg"
            >
              <ArrowDownOnSquareIcon className="h-5 w-5" />
              <span>Information Technology Resource Guidelines</span>
            </a>
          </li>
          <li>
            <a
              href="/files/EmeritiandStaffRetireeITsupportguidelinesFINAL.pdf"
              className="inline-flex items-center gap-2 px-3 py-2 rounded hover:bg-base-300 transition-colors duration-200 text-lg"
            >
              <ArrowDownOnSquareIcon className="h-5 w-5" />
              <span>Emeriti and Staff Retirees IT Support Guidelines</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentationSidebar;
