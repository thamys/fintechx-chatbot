import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrainBox",
  description: " Unlock the Power Of Future AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className="min-h-screen">
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
