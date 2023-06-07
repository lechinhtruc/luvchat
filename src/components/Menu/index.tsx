"use client";
import { usePathname, useParams } from "next/navigation";
import ChatList from "../Chat/ChatList";
import Notifications from "../Notifications";
import People from "../People";
import React from "react";

const Menu: React.FC = () => {
  const pathname = usePathname();
  const menus = [
    { href: "/chat", menu: <ChatList /> },
    { href: "/notification", menu: <Notifications /> },
    { href: "/people", menu: <People /> },
  ];

  return (
    <>
      {menus.map((item) => {
        if (pathname.startsWith(item.href))
          return <React.Fragment key={item.href}>{item.menu}</React.Fragment>;
      })}
    </>
  );
};

export default Menu;
