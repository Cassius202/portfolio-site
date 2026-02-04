import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import ToastProvider from "@/components/ToastProvider";
import ClientLoader from "@/components/ClientLoader";


const interSans = Inter({
  variable: "--font-inter", // CSS variable name
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-site-your-name.vercel.app"),
  title: "Cassius Portfolio Website",
  description: "Let Cassius convert your ideas into a beautiful, high converting website",
  openGraph: {
    title: "Cassius Portfolio Website",
    description: "Let Cassius convert your ideas into a beautiful, high converting website",
    url: "https://cassius-samuel-dev.vercel.app",
    siteName: "Cassius Portfolio",
    images: [
      {
        url: "/images/meta-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Cassius Portfolio Preview",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cassius Portfolio Website",
    description: "Let Cassius convert your ideas into a beautiful, high-converting website",
    images: ["/images/meta-image.jpg"],
  },
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
