import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Manga Reader",
  description: "Manga Reader",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="px-4 py-2">
            <NavBar />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
