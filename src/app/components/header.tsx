import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed bg-base-100 inset-x-0 top-0 z-10 border-b-1 border-cru-border">
      <div className="container">
        <nav className="flex justify-between py-4">
          <Link className="flex items-center text-lg" href="/#">
            <Image
              className="mr-2"
              src="/cru_icon.svg"
              alt="Logo"
              width={24}
              height={24}
            />
            CRU
          </Link>

          <ul className="nav-links">
            <Link
              className="relative text-light-font font-bold text-nav pe-2 me-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-light-font after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              href="/#about"
            >
              Portfolio
            </Link>

            <Link
              className="relative text-light-font font-bold text-nav pe-2 me-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-light-font after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="relative text-light-font font-bold text-nav pe-2 me-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-light-font after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              href="/#purchase"
            >
              Docs
            </Link>
            <Link
              className="relative text-light-font font-bold text-nav pe-2 me-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-light-font after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              href="/faq"
            >
              Team
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
