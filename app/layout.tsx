import "./globals.css";
import { ThemeProvider } from "next-themes";
import NekoWrapper from "@/components/ui/NekoWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohit Joshi — Developer",
  description: "Software developer building fast, beautiful, full-stack products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <NekoWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
