import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { AppThemeProvider } from "./provider/themeProvider";
import { Poppins, Metrophobic, Nunito_Sans } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const heading = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-heading",
});
const para = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-para",
});

export const metadata: Metadata = {
  title: "AI Educator",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${heading.variable} ${para.variable} antialiased`}
      >
        <AppThemeProvider>
          <Header />
          <div className="flex-1 pt-[4.1rem]">{children}</div>
          <Footer />
        </AppThemeProvider>
      </body>
    </html>
  );
}
