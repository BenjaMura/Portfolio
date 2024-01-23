import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import UpToHome from "@/components/up-to-home";
import LanguageSwitch from "@/components/language-switch";
import LanguageContextProvider from "@/context/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Benjamin Muratore | Personal Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="!scroll-smooth">
      <body
        className={`${inter.className} bg-amber-50 text-amber-950 relative pt-28 sm:pt-36 dark:bg-zinc-900 dark:text-amber-100 dark:text-opacity-90`}
      >
        <div className="bg-[#f3ca4c] absolute top-[-6rem] left-1/2 transform translate-x-[-50%] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#f3ca4c]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <LanguageContextProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <UpToHome />
              <LanguageSwitch />
              <ThemeSwitch />
            </LanguageContextProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
