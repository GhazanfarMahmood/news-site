import type { Metadata } from "next";

// FONT FROM GOOGLE FONT
import { Roboto } from "next/font/google";

// RESET FILE CSS LINK
import "@/style/reset.css";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/shared/Navbar";
import { UserProvider } from "@/context/UserContext";

const roboto = Roboto({
  subsets : ["latin"],
  weight : ["400", "700"],
  display : "swap",
  variable : "--font-roboto",
})

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
