"use client";

import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchButton = () => {
  const openSearch = () => {
    // Simulate pressing "/" which DocSearch listens for
    const event = new KeyboardEvent("keydown", {
      key: "/",
      code: "Slash",
      keyCode: 191,
      which: 191,
      bubbles: true,
    });

    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={openSearch}
      className="flex items-center gap-2 px-3 text-sm text-light-font/55 bg-dark-bg-200 border border-cru-border rounded-lg hover:bg-dark-bg-300 hover:text-light-font transition-colors h-9"
      aria-label="Open search"
    >
      <MagnifyingGlassIcon className="h-4 w-4" />
      <span>Search</span>
      <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-xs text-primary-color bg-dark-bg-300 rounded">
        /
      </span>
    </button>
  );
};

export default SearchButton;
