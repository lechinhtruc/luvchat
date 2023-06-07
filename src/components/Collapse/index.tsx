import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import CollapseProps from "./Types/CollapseProps.type";
import CollapseItem from "./CollapseItem";

const Collapse: React.FC<CollapseProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col w-full">
      <div
        className="flex items-center cursor-pointer duration-300 p-2 mb-2 rounded-lg text-white justify-between hover:bg-[#424242]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-semibold">{title}</p>
        <MdKeyboardArrowRight
          size={20}
          className={`duration-300 ${isOpen && "rotate-90"}`}
        />
      </div>
      <div className={`flex flex-col w-full ${!isOpen && "hidden"}`}>
        {items.map((item) => (
          <CollapseItem key={item.title} title={item.title} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};
export default Collapse;
