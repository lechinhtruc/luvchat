"use client";

import { Avatar } from "antd";
import MessageProps from "../Types/MessageProps.type";
import MessageOptions from "./MessageOptions";
import MessageContent from "./MessageContent";

const MessageReceived: React.FC<MessageProps> = ({
  avatarSrc,
  content,
  at,
  type,
  attachment,
}) => {
  return (
    <div className="flex gap-x-2 items-end p-3 group">
      <Avatar src={avatarSrc} size={35} className="max-w-[35px]" />
      <MessageContent content={content} type={type} attachment={attachment} />
      <MessageOptions className="group-hover:opacity-100" />
    </div>
  );
};

export default MessageReceived;
