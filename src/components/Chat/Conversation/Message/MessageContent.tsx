import Image from "next/image";
import React, { useEffect, useState } from "react";

type MessageContentProps = {
  content: string;
  type: number;
  attachment: string;
};

const MessageContent: React.FC<MessageContentProps> = ({
  content,
  type,
  attachment,
}) => {
  const [messageContent, setMessageContent] = useState<React.JSX.Element>(
    <></>,
  );
  useEffect(() => {
    switch (type) {
      case 0:
        setMessageContent(
          <div className="bg-[#1f1f1f] rounded-xl p-2 break-normal">
            <p className="font-light break-words max-w-xs whitespace-break-spaces">
              {content}
            </p>
          </div>,
        );
        break;
      case 1:
        setMessageContent(
          <div className="w-72 h-72 relative cursor-pointer">
            <Image
              className="rounded-xl"
              src={attachment}
              alt={"Pictures"}
              fill
              sizes="(max-width: 288px)"
              style={{ objectFit: "cover" }}
            />
          </div>,
        );
        break;
    }
  }, [content, attachment, type]);

  return messageContent;
};
export default MessageContent;
