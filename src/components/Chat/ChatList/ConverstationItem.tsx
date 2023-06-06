"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Avatar } from "antd";
import ConversationItemProps from "./Types/ConverstationItemProps.type";
import { MdMoreHoriz } from "react-icons/md";

const ConversationItem: React.FC<ConversationItemProps> = ({
  convertstationId,
  avatarSrc,
  username,
  lastMessage,
  at,
  seen,
}) => {
  const { chatId } = useParams();
  const isFocus = chatId?.startsWith(convertstationId.toString());

  return (
    <Link href={`/chat/${convertstationId}`}>
      <div className="flex items-center group relative">
        <div
          className={`flex gap-x-2 items-center w-full cursor-pointer py-1 px-2 rounded-xl duration-300 hover:bg-opacity-50 hover:bg-[#424242] ${
            isFocus && "bg-[#424242] bg-opacity-50"
          }`}
        >
          <Avatar src={avatarSrc} size={50} className="min-w-[50px]" />
          <div className="flex flex-col">
            <p className="font-semibold text-sm opacity-80 max-w-[150px] text-ellipsis whitespace-nowrap overflow-hidden">
              {username}
            </p>
            <div className="flex gap-x-1 max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
              <p className="font-extralight text-sm opacity-60 text-ellipsis whitespace-nowrap max-w-[200px] overflow-hidden">
                {lastMessage}
              </p>
              <span className="font-extralight text-sm opacity-60 text-center">
                .
              </span>
              <p className="font-extralight text-sm opacity-60">{at}</p>
            </div>
          </div>
        </div>
        <button
          className={`absolute right-3 bg-[#424242] rounded-3xl p-1 opacity-0 cursor-pointer duration-300 hover:bg-opacity-40 group-hover:opacity-80`}
        >
          <MdMoreHoriz size={25} />
        </button>
      </div>
    </Link>
  );
};

export default ConversationItem;
