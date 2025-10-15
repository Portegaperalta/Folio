import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Folio",
  description: "All your links in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={`${roboto.className}`}
      >
        <main className="px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
