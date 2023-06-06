import ButtonCircle from "@/components/Buttons/ButtonCircle";
import { MdOutlineBorderColor } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="font-bold text-2xl">Chat</h3>
      <div className="flex gap-x-1">
        <ButtonCircle icon={<MdOutlineBorderColor size={20} />} />
      </div>
    </div>
  );
};

export default Header;
