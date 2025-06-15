import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { AppProviders } from "./providers";

export const metadata: Metadata = {
  title: "Deny's Portfolio",
  description: "Generated to impress you",
};

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={`${gabarito.variable} overflow-x-hidden bg-background text-foreground antialiased transition-all duration-300 font-(family-name:--font-gabarito)`}
        >
          <AppProviders>
            <Navbar />
            {children}
          </AppProviders>
        </body>
      </html>
    </>
  );
}
