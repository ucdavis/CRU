import type { Metadata } from "next";

export const siteUrl = "https://computing.caes.ucdavis.edu";

const defaultImage = {
  url: "/thumbnail.jpg",
  width: 1200,
  height: 600,
  alt: "CRU – Computing Resources Unit at UC Davis",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const openGraphTitle = absoluteTitle ? title : `${title} | CRU`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: openGraphTitle,
      description,
      url: path,
      siteName: "CRU – UC Davis",
      images: [defaultImage],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description,
      images: [defaultImage.url],
    },
  };
}
