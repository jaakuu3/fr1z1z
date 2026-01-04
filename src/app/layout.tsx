import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Guides",
  description: "Simple game instruction pages."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
