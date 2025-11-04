import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import Script from "next/script";
export const metadata: Metadata = {
  title: {
    default: "CRU – Computing Resources Unit",
    template: "%s | CRU",
  },
  icons: {
    icon: "/favicon.ico",
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
        {/* Google Analytics */}
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
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="grid grid-cols-[3%_94%_3%] flex-1 w-full">
            <div className="border-r-1 border-cru-border"></div>
            <div className="pt-25 pb-12">{children}</div>
            <div className="border-l-1 border-cru-border bg-slash-pattern"></div>
          </div>
        </div>
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
