"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchButton from "./searchButton";

const nav = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/documentation", label: "Docs" },
  { href: "/team", label: "Team" },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  // ✅ Wrap BOTH the toggle button + the panel in this ref
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // ✅ Use "click" (not mousedown) and check against the wrapper ref
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!open) return;
      const target = e.target as Node;
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-10 border-b border-cru-border bg-base-100">
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <div className="flex min-w-0 items-center gap-3">
            <Link href="/#" className="flex items-center text-lg shrink-0">
              <Image
                className="mr-2"
                src="/cru_icon.svg"
                alt="CRU circuitboard CAES logo"
                width={24}
                height={24}
                priority
              />
              <span className="font-semibold">CRU</span>
            </Link>

            <div className="hidden md:block">
              <SearchButton />
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative text-light-font font-bold text-nav px-2 py-2
                    after:content-[''] after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-[2px]
                    after:scale-x-0 after:bg-light-font after:origin-left after:transition-transform after:duration-300
                    hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ✅ Mobile menu wrapper includes both button + dropdown */}
          <div
            ref={mobileMenuRef}
            className="md:hidden flex items-center gap-2"
          >
            <SearchButton />

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="btn btn-ghost btn-square"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {open ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>

            <div
              className={[
                "absolute left-0 right-0 top-full bg-base-100 border-b border-cru-border",
                "overflow-hidden transition-[max-height,opacity] duration-200",
                open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              <ul className="flex flex-col gap-1 p-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 font-bold text-light-font hover:bg-base-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
