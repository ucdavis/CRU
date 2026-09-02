"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DocumentationCategoryIcon from "./documentationCategoryIcon";
import {
  AcademicCapIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

const quickNav = [
  { href: "/documentation/helpdesk", label: "Help Desk", category: "helpdesk" },
  { href: "/documentation/finjector", label: "Finjector", category: "finjector" },
  { href: "/documentation/ace", label: "Ace", category: "ace" },
  { href: "/documentation/purchasing", label: "Purchasing", category: "purchasing" },
  { href: "/documentation/peaks", label: "Peaks", category: "peaks" },
  { href: "/documentation/registration", label: "Registration", category: "registration" },
  { href: "/documentation/payments", label: "Payments", category: "payments" },
  { href: "/documentation/harvest", label: "Harvest", category: "harvest" },
  { href: "/documentation/walter", label: "Walter", category: "walter" },
  { href: "/documentation/policies", label: "Policies", category: "policies" },
];

const DocumentationSidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="md:w-1/3 w-full">
      <div className="md:sticky md:top-20">
        <div className="card card-lg">
          <div className="card-body">
            <h2 className="card-title text-primary-color">
              <b>Something to say?</b>
            </h2>
            <p>
              Unable to find what you need? Make a ticket and we will get back
              to you as soon as possible.
            </p>
            <div className="mt-2 flex flex-col gap-3">
              <Link
                className="btn btn-primary btn-lg"
                href="https://caeshelp.ucdavis.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Create a ticket
              </Link>
              <Link
                className="btn btn-outline btn-lg"
                href="https://feedback.ucdavis.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Give feedback
              </Link>
            </div>
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
          {quickNav.map(({ href, label, category }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);

            return (
              <li key={href}>
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`fancy-list ${isActive ? "text-primary" : ""}`}
                  href={href}
                >
                  <DocumentationCategoryIcon
                    category={category}
                    className="mr-1 h-5 w-5"
                  />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DocumentationSidebar;
