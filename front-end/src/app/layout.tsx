import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
// import { dark } from '@clerk/themes';


export const metadata: Metadata = {
  title: "The Note App",
  description: "AI powered note taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>

  );
}
