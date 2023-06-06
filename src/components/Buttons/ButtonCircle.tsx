import ButtonProps from "@/components/Buttons/Types/ButtonProps.type";

const ButtonCircle: React.FC<ButtonProps> = ({ icon }) => {
  return (
    <button
      className={`rounded-3xl p-2 opacity-60 duration-300 hover:bg-[#424242] hover:opacity-100`}
    >
      {icon}
    </button>
  );
};

export default ButtonCircle;
