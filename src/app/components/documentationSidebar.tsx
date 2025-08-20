import Link from "next/link";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

const documentationSidebar: React.FC = () => {
  return (
    <div className="md:w-1/3 w-full">
      <div className="card card-xl shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-primary">Create a ticket</h2>
          <p>
            Unable find what you need? make a ticket and we will get back to you
            as soon as possible.
          </p>
          <br />
          <Link
            className="btn btn-primary"
            href={"https://caeshelp.ucdavis.edu/"}
          >
            Create a ticket
          </Link>
        </div>
      </div>
      <ul className="pt-6">
        <li className="w-max">
          <a
            href="/files/EmeritiandStaffRetireeITsupportguidelinesFINAL.pdf"
            className="inline-flex items-center gap-2 px-3 py-2 rounded hover:bg-base-300 transition-colors duration-200 text-lg"
          >
            <ArrowDownOnSquareIcon className="h-5 w-5" />
            <span>Information Technology Resource Guidelines</span>
          </a>
        </li>
        <li className="w-max">
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
  );
};

export default documentationSidebar;
