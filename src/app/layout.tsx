import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-expect-error: allow side-effect CSS impo rt (add a '*.css' declaration file for stricter typing)
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import ToastProvider from "@/components/ToastProvider";
import ClientLoader from "@/components/ClientLoader";


const interSans = Inter({
  variable: "--font-inter", // CSS variable name
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Let Cassius convert your ideas into profit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interSans.variable} antialiased w-screen overflow-x-hidden`}>
        <ThemeProvider
        attribute={"class"}
        defaultTheme="dark"
        disableTransitionOnChange
        >
            <ToastProvider />
            <ClientLoader>
              {children}
            </ClientLoader>
        </ThemeProvider>
      </body>
    </html>
  );
}
