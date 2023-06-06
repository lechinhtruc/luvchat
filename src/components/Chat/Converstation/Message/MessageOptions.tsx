import { Tooltip } from "antd";
import { RiEmotionLine, RiReplyFill } from "react-icons/ri";
import { MdMoreHoriz } from "react-icons/md";
import { twMerge } from "tailwind-merge";

import ButtonCircle from "@/components/Buttons/ButtonCircle";

type MessageOptionsProps = {
  className?: string;
};

const MessageOptions: React.FC<MessageOptionsProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        `flex gap-1 opacity-0 duration-300 self-center`,
        className,
      )}
    >
      <ButtonCircle
        icon={
          <Tooltip title={"Emoji"}>
            <RiEmotionLine size={18} />
          </Tooltip>
        }
      />

      <ButtonCircle
        icon={
          <Tooltip title={"Reply Message"}>
            <RiReplyFill size={18} />
          </Tooltip>
        }
      />

      <ButtonCircle
        icon={
          <Tooltip title={"More"}>
            <MdMoreHoriz size={18} />
          </Tooltip>
        }
      />
    </div>
  );
};
export default MessageOptions;
