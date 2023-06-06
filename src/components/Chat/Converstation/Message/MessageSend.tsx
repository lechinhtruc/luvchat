"use client";

import { Avatar } from "antd";
import MessageProps from "../Types/MessageProps.type";
import MessageOptions from "./MessageOptions";
import MessageContent from "./MessageContent";

const MessageSend: React.FC<MessageProps> = ({
  avatarSrc,
  content,
  at,
  type,
  attachment,
}) => {
  return (
    <div className="flex gap-x-2 items-end w-full justify-end p-3 group">
      <MessageOptions className="group-hover:opacity-100 flex-row-reverse" />
      <MessageContent content={content} type={type} attachment={attachment} />
    </div>
  );
};

export default MessageSend;
