import CollapseItemProps from "./Types/CollapseItemProps.type";

const CollapseItem: React.FC<CollapseItemProps> = ({ icon, title }) => {
  return (
    <div className="flex gap-x-2 text-white p-2 items-center cursor-pointer duration-300 rounded-lg hover:bg-[#424242] hover:bg-opacity-60">
      <div className="flex items-center justify-center p-1 rounded-3xl bg-[#424242]">
        {icon}
      </div>
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default CollapseItem;
