import React from "react";
import Sidebar from "@/components/Chat/Sidebar";
import ChatList from "@/components/Chat/ChatList";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen text-white bg-[#141414] overflow-hidden">
      <Sidebar />
      <ChatList />
      {children}
    </div>
  );
}
