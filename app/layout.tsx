
import "./globals.css";
import Header from "./components/Header"

import type { ReactNode } from "react";
import { Orbitron } from "next/font/google";

const font = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <Header />
        {children}
        </body>
    </html>
  );
}