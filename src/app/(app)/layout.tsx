"use client";
import React from "react";
import { ConfigProvider } from "antd";
import Sidebar from "@/components/Chat/Sidebar";
import Menu from "@/components/Menu";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen text-white bg-[#141414] overflow-hidden">
      <ConfigProvider
        theme={{
          token: {
            colorText: "white",
            colorBgElevated: "#1f1f1f",
          },
        }}
      >
        <Sidebar />
        <Menu />
        {children}
      </ConfigProvider>
    </div>
  );
}
