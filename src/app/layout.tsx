import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";

import "@docsearch/css";
import "./globals.css";

import Script from "next/script";
import Search from "./components/search";
export const metadata: Metadata = {
  title: {
    default: "CRU – Computing Resources Unit",
    template: "%s | CRU",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CRU – Computing Resources Unit",
    description: "Computing Resources Unit at CAES UC Davis",
    url: "https://computing.caes.ucdavis.edu/",
    siteName: "CRU – UC Davis",
    images: [
      {
        url: "https://computing.caes.ucdavis.edu/thumbnail.jpg",
        width: 1200,
        height: 600,
        alt: "CRU – Computing Resources Unit at UC Davis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  description: "Computing Resources Unit at CAES UC Davis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="gunrock" lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-P7TG6TXWK0`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P7TG6TXWK0', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="flex min-h-screen flex-col">
        <Search />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="grid grid-cols-[3%_94%_3%] flex-1 w-full">
            <div className="border-r-1 border-cru-border"></div>
            <main id="main" className="pt-25 pb-12">
              {children}
            </main>
            <div className="border-l-1 border-cru-border bg-slash-pattern"></div>
          </div>
        </div>
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
