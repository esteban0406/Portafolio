import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./components/I18nProvider";
import { LanguageToggle } from "./components/LanguageToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luis Esteban Peña | Full Stack Developer",
  description:
    "Portfolio of Luis Esteban Peña — Full Stack Software Developer & CS & AI Engineering student. Building scalable applications with modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <I18nProvider>
          <LanguageToggle />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
