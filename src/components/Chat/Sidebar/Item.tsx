"use client";
import { Tooltip } from "antd";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import ItemProps from "./Types/ItemProps.type";

const Item: React.FC<ItemProps> = ({ title, href, icon }) => {
  const pathname = usePathname();
  const { chatId } = useParams();
  const isFocus = pathname?.startsWith(href);
  const previousPath = chatId ? `/chat/${chatId}` : "";
  return (
    <Tooltip placement="right" title={<p>{title}</p>} arrow={false}>
      <div
        className={`flex items-center justify-center p-2 opacity-70 rounded-md cursor-pointer duration-300 hover:bg-[#424242] hover:opacity-100 ${
          isFocus && "bg-[#424242] opacity-100"
        }`}
      >
        <Link href={href}>{icon}</Link>
      </div>
    </Tooltip>
  );
};

export default Item;
