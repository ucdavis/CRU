"use client";

import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

export default function Search() {
  return (
    <DocSearch
      appId="N1VN1JY5MU"
      apiKey="934665565cd7c4255c0358035556e769"
      indexName="CRU Computing Site"
    />
  );
}
