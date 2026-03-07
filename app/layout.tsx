import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { Providers } from "./components/Providers";
import { ToastProvider } from "./components/Toast";
import { FloatingTriggers } from "./components/FloatingTriggers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HP Product Version & Lifecycle Hub",
  description: "Enterprise dashboard for HP product version tracking and lifecycle management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ToastProvider>
            <div className="flex min-h-screen">
              {/* Sidebar - Fixed left */}
              <Sidebar />
              
              {/* Main Stage - Scrollable right content */}
              <main className="flex-1 ml-0 md:ml-64 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
                {children}
              </main>
            </div>
            
            {/* Floating AI Triggers */}
            <FloatingTriggers />
          </ToastProvider>
        </Providers>
      </body>
    </html>
  );
}
