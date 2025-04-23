import type { Metadata } from "next";

// FONT FROM GOOGLE FONT
import { Roboto, Noto_Naskh_Arabic, Exo_2, Noto_Serif_JP } from "next/font/google";

// RESET FILE CSS LINK
import "@/style/reset.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// FOR ENGLISH, FRENCH AND SPANISH LANGUAGE
const roboto = Roboto({
  subsets : ["latin"],
  weight : ["400", "700"],
  display : "swap",
  variable : "--font-roboto",
})

// FOR ARABIC LANGUAGE
const arabic = Noto_Naskh_Arabic({
  subsets : ["arabic"],
  weight : ["400", "700"],
  display : "swap",
  variable : "--font-arabic",
})

// FOR ENGLISH, FRENCH AND SPANISH LANGUAGE
const exo = Exo_2({
  subsets : ["latin"],
  weight : ["400", "700"],
  display : "swap",
  variable : "--font-exo",
})

// FOR JAPANESE LANGUAGE
const JP = Noto_Serif_JP({
  subsets : ["latin"],
  weight : ["400", "700"],
  display : "swap",
  variable : "--font-JP",
})

export const metadata: Metadata = {
  title: "The Daily News",
  description: "Stay Enhanced With Latest News",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${arabic.variable} ${exo.variable} ${JP.variable} antialiased`}
      >
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
