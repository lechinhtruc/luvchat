import { ChangeEvent, useState } from "react";
import { MdEmojiEmotions, MdSend } from "react-icons/md";
import { BsFillStickyFill } from "react-icons/bs";
import { RiHeart3Fill, RiImage2Fill, RiFile3Fill } from "react-icons/ri";

import ButtonCircle from "@/components/Buttons/ButtonCircle";

const InputMessage: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const onTypingMessage = (e: ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  return (
    <div className="flex gap-1 p-2 border-t-[1px] border-t-[#424242] ">
      <div className="flex gap-1">
        <ButtonCircle icon={<RiFile3Fill size={20} />} />
        <ButtonCircle icon={<RiImage2Fill size={20} />} />
        <ButtonCircle icon={<BsFillStickyFill size={20} />} />
      </div>

      <div className="flex w-full items-center rounded-3xl bg-[#1f1f1f]">
        <input
          value={message}
          onChange={onTypingMessage}
          placeholder="Aa"
          className="w-full bg-transparent border-none outline-none font-light p-2 text-sm"
        />
        <ButtonCircle icon={<MdEmojiEmotions size={20} />} />
      </div>

      <div className="flex items-center">
        <ButtonCircle
          icon={
            message.length > 0 ? (
              <MdSend size={20} />
            ) : (
              <RiHeart3Fill size={20} />
            )
          }
        />
      </div>
    </div>
  );
};
export default InputMessage;
