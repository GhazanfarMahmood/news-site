import type { Metadata } from "next";

// FONT FROM GOOGLE FONT
import { Roboto, Noto_Naskh_Arabic, Exo_2, Noto_Serif_JP } from "next/font/google";

// RESET FILE CSS LINK
import "@/style/reset.css";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/shared/Navbar";
import { UserProvider } from "@/context/UserContext";

// FOR ENGLISH, FRENCH AND SPANISH LANGUAGE
const roboto = Roboto({
  subsets : ["latin"],
  weight : ["400", "700"],
  display : "swap",
  variable : "--font-roboto",
})

// FOR ARABIC LANGUAGE
// const arabic = Noto_Naskh_Arabic({
//   subsets : ["arabic"],
//   weight : ["400", "700"],
//   display : "swap",
//   variable : "--font-arabic",
// })

// FOR ENGLISH, FRENCH AND SPANISH LANGUAGE
// const exo = Exo_2({
//   subsets : ["latin"],
//   weight : ["400", "700"],
//   display : "swap",
//   variable : "--font-exo",
// })

// FOR JAPANESE LANGUAGE
// const JP = Noto_Serif_JP({
//   subsets : ["latin"],
//   weight : ["400", "700"],
//   display : "swap",
//   variable : "--font-JP",
// })

export const metadata: Metadata = {
  title: "The Daily News",
  description: "Stay Enhanced With Latest News",

  icons : {
    icon : [
      {
        media : "(prefers-color-scheme : light)",
        url : "/assets/images/favicon-dark-32x32.png",
        href : "/assets/images/favicon-dark-32x32.png"
      },
      {
        media : "(prefers-color-scheme : dark)",
        url : "/assets/images/favicon-light-32x32.png",
        href : "/assets/images/favicon-light-32x32.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <ThemeProvider>
          <UserProvider>
            <Navbar />
              {children}
            <Footer />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
