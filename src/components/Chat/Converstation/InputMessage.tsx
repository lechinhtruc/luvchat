import ButtonCircle from "@/components/Buttons/ButtonCircle";
import {
  MdEmojiEmotions,
} from "react-icons/md";
import { BsFillStickyFill } from "react-icons/bs";
import { RiHeart3Fill, RiImage2Fill, RiFile3Fill } from "react-icons/ri";

const InputMessage: React.FC = () => {
  return (
    <div className="flex gap-1 p-2 border-t-[1px] border-t-[#424242] ">
      <div className="flex gap-1">
        <ButtonCircle icon={<RiFile3Fill size={20} />} />
        <ButtonCircle icon={<RiImage2Fill size={20} />} />
        <ButtonCircle icon={<BsFillStickyFill size={20} />} />
      </div>

      <div className="flex w-full items-center rounded-3xl bg-[#1f1f1f]">
        <input
          placeholder="Aa"
          className="w-full bg-transparent border-none outline-none font-light p-2 text-sm"
        />
        <ButtonCircle icon={<MdEmojiEmotions size={20} />} />
      </div>

      <div className="flex items-center">
        <ButtonCircle icon={<RiHeart3Fill size={20} />} />
      </div>
    </div>
  );
};
export default InputMessage;
