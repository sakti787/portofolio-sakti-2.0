import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Wallpaper from "@/components/Wallpaper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio | Frontend Developer",
  description:
    "Portfolio website showcasing frontend development projects, skills, and experience. Built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: ["portfolio", "frontend developer", "web developer", "next.js", "react"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Wallpaper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
