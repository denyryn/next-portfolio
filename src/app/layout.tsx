import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { UserProvider } from "@/contexts/UserContext";
import { NavbarProvider } from "@/contexts/NavbarContext";
import { Navbar } from "@/components/navbar";

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
          className={`${gabarito.variable} overflow-x-hidden bg-background text-foreground antialiased transition-all duration-300`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <UserProvider>
              <NavbarProvider>
                <Navbar />
                {children}
              </NavbarProvider>
            </UserProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
