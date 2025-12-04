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
      className="flex items-center gap-2 px-3 text-sm text-gray-400 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 hover:text-gray-200 transition-colors"
      aria-label="Open search"
    >
      <MagnifyingGlassIcon className="h-4 w-4" />
      <span>Search</span>
      <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-xs font-medium text-gray-500 bg-gray-700 rounded">
        /
      </span>
    </button>
  );
};

export default SearchButton;
