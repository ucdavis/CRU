import {
  DocumentIcon,
  AcademicCapIcon,
  FlagIcon,
  HomeIcon,
  PaperAirplaneIcon,
  EnvelopeIcon,
  CodeBracketSquareIcon,
  PencilSquareIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { Quicklink } from "./quicklink";

const links = [
  {
    href: "/media/files/CAESInformationTechnologyResourcesGuidelines22.pdf",
    label: "Technology Resource Guidelines",
    icon: <DocumentIcon className="w-5 h-5" />,
    isExternal: true,
  },
  {
    href: "/media/files/EmeritiandStaffRetireeITsupportguidelinesFINAL.pdf",
    label: "Emeriti and Staff Retirees IT Support Guidelines",
    icon: <AcademicCapIcon className="w-5 h-5" />,
    isExternal: true,
  },
  {
    href: "https://caeshelp.ucdavis.edu/",
    label: "Help Desk Ticket",
    icon: <FlagIcon className="w-5 h-5" />,
    isExternal: true,
  },
  {
    href: "/documentation/helpdesk/working-remotely",
    label: "How to Work Remotely",
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    href: "/documentation/helpdesk/out-of-office",
    label: "Out of Office Reply",
    icon: <PaperAirplaneIcon className="w-5 h-5" />,
  },
  {
    href: "https://365.ucdavis.edu/",
    label: "Outlook Web App",
    icon: <EnvelopeIcon className="w-5 h-5" />,
    isExternal: true,
  },
  {
    href: "/documentation/helpdesk/dafis-connect",
    label: "DaFis Connect",
    icon: <CodeBracketSquareIcon className="w-5 h-5" />,
  },
  {
    href: "/documentation/helpdesk/temporary-affiliate-form",
    label: "Temporary Affiliate Form",
    icon: <PencilSquareIcon className="w-5 h-5" />,
  },
  {
    href: "https://ucdavisit.service-now.com/servicehub/?id=ucd_kb_article&sysparm_article=KB0000101",
    label: "Change your Kerberos Password",
    icon: <KeyIcon className="w-5 h-5" />,
    isExternal: true,
  },
];

export default function QuicklinkList() {
  return (
    <ul className="menu bg-base-100 py-4 shadow-md rounded-box w-full">
      {links.map((link) => (
        <Quicklink
          key={link.href}
          href={link.href}
          label={link.label}
          icon={link.icon}
          isExternal={link.isExternal}
        />
      ))}
    </ul>
  );
}
