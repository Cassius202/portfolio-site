import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import ToastProvider from "@/components/ToastProvider";

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
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
            <ToastProvider />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
