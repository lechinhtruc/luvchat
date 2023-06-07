import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { MdMoreHoriz } from "react-icons/md";
import NotificationItemProps from "./Types/NotificationItemType.type";

const NotificationItem: React.FC<NotificationItemProps> = ({
  avatarSrc,
  username,
  href,
  type,
  at,
}) => {
  const [content, setContent] = useState<React.ReactNode>();
  useEffect(() => {
    switch (type) {
      case 0:
        setContent(
          <p className="font-light text-sm break-words max-w-[200px] overflow-hidden line-clamp-2">
            <b className="font-bold">{username}</b> accepted your friend request
          </p>,
        );
        break;
      case 1:
        setContent(
          <p className="font-light text-sm break-words max-w-[200px] overflow-hidden line-clamp-2">
            <b className="font-bold">{username}</b>
            <div className="flex gap-x-1 w-full my-1">
              <button className="flex p-1 bg-[#1677ff] rounded-lg w-20 items-center justify-center duration-300 hover:opacity-60 font-semibold">
                Accept
              </button>
              <button className="flex p-1 bg-[#424242] rounded-lg w-20 items-center justify-center duration-300 hover:opacity-60 font-semibold">
                Delete
              </button>
            </div>
          </p>,
        );
        break;
    }
  }, [type, username]);

  return (
    <div className="flex w-full items-center group relative">
      <Link href={href || "/chat"} className="w-full">
        <div
          className={`flex gap-x-2 items-center w-full cursor-pointer py-1 px-2 rounded-xl duration-300 hover:bg-opacity-50 hover:bg-[#424242]`}
        >
          <Avatar src={avatarSrc} size={50} className="min-w-[50px]" />
          <div className="flex flex-col">
            <div className="flex flex-col max-w-[250px] overflow-hidden">
              {content}
              <p className="font-extralight text-sm opacity-60">{at}</p>
            </div>
          </div>
        </div>
      </Link>

      <button
        className={`absolute right-3 bg-[#424242] rounded-3xl p-1 opacity-0 cursor-pointer duration-300 hover:bg-opacity-40 group-hover:opacity-80`}
      >
        <MdMoreHoriz size={25} />
      </button>
    </div>
  );
};

export default NotificationItem;
