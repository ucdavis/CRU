"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import parse, { domToReact } from "html-react-parser";
import { marked } from "marked";
import type { FC } from "react";

type Props = {
  content: string;
};

const MarkdownRender: FC<Props> = ({ content }) => {
  // 1. Convert Markdown → HTML
  const html = marked.parse(content);

  // 2. Replace <i class="fas ..."> with Heroicons
  return parse(html, {
    replace(domNode) {
      if (domNode.type === "tag" && domNode.name === "i") {
        const cls = domNode.attribs.class || "";

        if (cls.includes("fa-arrow-left")) {
          return <ArrowLeftIcon className="inline h-5 w-5 mr-1" />;
        }
        if (cls.includes("fa-arrow-right")) {
          return <ArrowRightIcon className="inline h-5 w-5 ml-1" />;
        }
      }
    },
  });
};

export default MarkdownRender;
