import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="border-t-1 border-cru-border">
      <div className="container">
        <div className="flex justify-between py-4">
          <p className="text-light-font/55">
            © Copyright 2025 All Rights Reserved
          </p>
          <Link href="https://caes.ucdavis.edu/">
            <Image
              width={162}
              height={30}
              className="opacity-75"
              alt={"UCDAVIS CA&ES logo"}
              src="/caes.svg"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
