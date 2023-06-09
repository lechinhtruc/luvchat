"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "#141414",
            colorPrimaryBg: "#111111",
            colorPrimary: "#282828",
            controlOutline: "rgba(17, 17, 17, 0.01)",
            colorBorder: "#424242",
            colorError: "#dc4446",
            colorText: "white",
            colorTextPlaceholder: "rgba(255, 255, 255, 0.25)",
            colorBgElevated: "#1f1f1f",
          },
        }}
      >
        <body
          className={`${inter.className} scroll-smooth antialiased overflow-hidden`}
        >
          <SessionProvider>{children}</SessionProvider>
        </body>
      </ConfigProvider>
    </html>
  );
}
