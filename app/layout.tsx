import Footer from "@/components/widgets/footer";
import Navbar from "@/components/widgets/navbar";
import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";

const LOGO_URL = "https://www.employvirtual.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femploy_virtual_logo.4a04620f.png&w=640&q=75";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.employvirtual.com"),
  title: "Best Virtual Staffing Agency to Hire Employ Virtual Efficiently",
  description: "Hire top virtual staff efficiently with the best virtual staffing agency. Streamline your remote hiring process and boost productivity with expert virtual professionals",
  alternates: {
    canonical: "https://www.employvirtual.com/",
  },
  openGraph: {
    title: "Best Virtual Staffing Agency to Hire Employ Virtual Efficiently",
    description: "Hire top virtual staff efficiently with the best virtual staffing agency. Streamline your remote hiring process and boost productivity with expert virtual professionals",
    url: "https://www.employvirtual.com/",
    siteName: "Employ Virtual",
    type: "website",
    images: [
      {
        url: LOGO_URL,
        width: 640,
        height: 200,
        alt: "Employ Virtual Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Employ Virtual",
    title: "Best Virtual Staffing Agency to Hire Employ Virtual Efficiently",
    description: "Hire top virtual staff efficiently with the best virtual staffing agency. Streamline your remote hiring process and boost productivity with expert virtual professionals",
    images: [LOGO_URL],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Employ Virtual",
  "alternateName": "Employ Virtual",
  "url": "https://www.employvirtual.com/",
  "logo": LOGO_URL,
  "sameAs": [
    "https://www.facebook.com/employvirtual/",
    "https://x.com/employvirtual",
    "https://www.instagram.com/employvirtual/",
    "https://www.linkedin.com/company/employ-virtual/posts/?feedView=all"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MVNXJB6W');`}
        </Script>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MVNXJB6W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <AppRouterCacheProvider>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}


