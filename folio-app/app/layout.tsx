import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Folio.",
  description: "All your websites in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-[#0F172A]`}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger className="text-white cursor-pointer" />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
