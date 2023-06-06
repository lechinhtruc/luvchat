import ButtonCircle from "@/components/Buttons/ButtonCircle";
import ConverstationHeaderProps from "./Types/ConverstationHeaderProps.type";
import { Avatar } from "antd";
import { MdCall, MdVideocam, MdMoreHoriz } from "react-icons/md";

const ConverstationHeader: React.FC<ConverstationHeaderProps> = ({
  avatarSrc,
  username,
  lastOnlineTime,
}) => {
  return (
    <div
      className={`flex w-full justify-between px-2 py-1 border-b-[1px] border-b-[#424242] select-none`}
    >
      <div className="flex gap-2 px-2 py-1 rounded-lg overflow-hidden duration-300 hover:bg-opacity-50 hover:bg-[#424242]">
        <Avatar src={avatarSrc} size={50} className="min-w-[50px]" />
        <div className="flex flex-col justify-center w-full cursor-pointer">
          <p className="text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-sm">
            {username}
          </p>
          <p className="text-sm font-extralight text-ellipsis overflow-hidden whitespace-nowrap max-w-sm">
            {lastOnlineTime}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-1">
        <ButtonCircle icon={<MdCall size={20} />} />
        <ButtonCircle icon={<MdVideocam size={20} />} />
        <ButtonCircle icon={<MdMoreHoriz size={20} />} />
      </div>
    </div>
  );
};

export default ConverstationHeader;
