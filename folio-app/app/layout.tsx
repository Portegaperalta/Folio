import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Sidebar } from "lucide-react";
import { Roboto } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/AppSidebar";

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
      <body className={`${roboto.className}`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="px-4 py-4">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
