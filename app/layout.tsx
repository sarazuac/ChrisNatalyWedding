import type { Metadata } from "next";
import { Fraunces, Archivo } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-config";
import { LanguageProvider } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.natalyandchris.com"),
  title: `${site.partnerOne} & ${site.partnerTwo} | ${site.weddingDateDisplayEn}`,
  description: `Join us as we celebrate the wedding of ${site.partnerOne} and ${site.partnerTwo}, ${site.weddingDateDisplayEn}, aboard an MSC Cruises Caribbean & Bahamas voyage.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <LanguageProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
