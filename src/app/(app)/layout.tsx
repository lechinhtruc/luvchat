"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Menu from "@/components/Menu";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen text-white bg-[#141414] overflow-hidden">
      <Sidebar />
      <Menu />
      {children}
    </div>
  );
}
