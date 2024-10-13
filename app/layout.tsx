import type { Metadata } from "next";
import "./globals.css";
import { textFont } from "./ui/fonts";
import React from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header></header>
      <body className={`${textFont.className} antialiased`}>{children}</body>
      <footer></footer>
    </html>
  );
}
