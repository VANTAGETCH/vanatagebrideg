import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const title =
  "Web development company in Accra, Ghana | Vantage Bridge Technologies";

export const metadata: Metadata = {
  metadataBase: new URL("https://vantagebridge.com"),
  title: {
    default: title,
    template: "%s | Vantage Bridge Technologies",
  },
  description: site.description,
  openGraph: {
    title,
    description: site.description,
    locale: "en_GH",
    type: "website",
    siteName: site.name,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  email: site.email,
  description: site.description,
  areaServed: "Ghana",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  parentOrganization: {
    "@type": "Organization",
    name: site.parent,
  },
  url: "https://vantagebridge.com",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-mist font-sans text-heading">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
