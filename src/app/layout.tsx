import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pawparty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <link rel="icon" href="/gatto.png" sizes="32x32" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
