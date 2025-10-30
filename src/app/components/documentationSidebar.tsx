import Link from "next/link";
import {
  AcademicCapIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  DocumentIcon,
  EnvelopeIcon,
  KeyIcon,
  NumberedListIcon,
  PencilIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

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
          <h4>Guidelines</h4>
          <li>
            <Link
              href="/files/CAESInformationTechnologyResourcesGuidelines22.pdf"
              className="fancy-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DocumentIcon className="h-5 w-5" />
              <span>Technology Resource Guidelines</span>
            </Link>
          </li>
          <li>
            <Link
              href="/files/EmeritiandStaffRetireeITsupportguidelinesFINAL.pdf"
              className="fancy-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AcademicCapIcon className="h-5 w-5" />
              <span>Emeriti and Staff Retirees IT Support Guidelines</span>
            </Link>
          </li>
        </ul>
        <ul className="pt-6">
          <h4>Quick Nav</h4>
          <li>
            <Link
              href="/documentation/helpdesk"
              rel="noopener noreferrer"
              className="fancy-list"
            >
              <ComputerDesktopIcon className="h-5 w-5 mr-1" />
              Help Desk
            </Link>
          </li>

          <li>
            <Link
              href="/documentation/finjector"
              rel="noopener noreferrer"
              className="fancy-list"
            >
              <CurrencyDollarIcon className="h-5 w-5 mr-1" />
              Finjector
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/ace"
              rel="noopener noreferrer"
              className="fancy-list"
            >
              <BookOpenIcon className="h-5 w-5 mr-1" />
              Ace
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/purchasing"
              rel="noopener noreferrer"
              className="fancy-list"
            >
              <BriefcaseIcon className="h-5 w-5 mr-1" />
              Purchasing
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/peaks"
              rel="noopener noreferrer"
              className="fancy-list"
            >
              <KeyIcon className="h-5 w-5 mr-1" />
              Peaks
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/registration"
              rel="noopener noreferrer"
              className="fancy-list"
            >
              <EnvelopeIcon className="h-5 w-5 mr-1" />
              Registration
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/payments"
              rel="noopener noreferrer"
              className="fancy-list"
            >
              <CreditCardIcon className="h-5 w-5 mr-1" />
              Payments
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/harvest"
              rel="noopener noreferrer"
              className="fancy-list"
            >
              <SunIcon className="h-5 w-5 mr-1" />
              Harvest
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/policies"
              rel="noopener noreferrer"
              className="fancy-list"
            >
              <NumberedListIcon className="h-5 w-5 mr-1" />
              Policies
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentationSidebar;
