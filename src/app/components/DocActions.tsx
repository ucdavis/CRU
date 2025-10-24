"use client";

import { usePathname } from "next/navigation";
import { EnvelopeIcon, PaperClipIcon } from "@heroicons/react/24/solid";
import { useCallback } from "react";

import { toast } from "react-hot-toast";

export default function DocActions() {
  const pathname = usePathname();

  const handleMailClick = useCallback(() => {
    const url = `${window.location.origin}${pathname}`;
    const subject = encodeURIComponent("Check out this documentation page");
    const body = encodeURIComponent(`Here's the link: ${url}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }, [pathname]);

  const handleCopyClick = useCallback(async () => {
    try {
      const url = `${window.location.origin}${pathname}`;
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy URL:", err);
      toast.error("Failed to copy URL.");
    }
  }, [pathname]);

  return (
    <div className="flex items-center">
      <button
        onClick={handleMailClick}
        className="hover:scale-110 transition-transform"
        title="Share via email"
      >
        <EnvelopeIcon className="w-6 h-6 mr-4 text-documentation" />
      </button>

      <button
        onClick={handleCopyClick}
        className="hover:scale-110 transition-transform"
        title="Copy link"
      >
        <PaperClipIcon className="w-6 h-6 text-documentation" />
      </button>
    </div>
  );
}
