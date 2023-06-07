import Header from "./PeopleHeader";

const People: React.FC = () => {
  return (
    <div
      className={`flex flex-col h-full px-4 py-2 w-80 min-w-[320px] border-r-[#424242] border-r-[1px]`}
    >
      <Header />
    </div>
  );
};

export default People;
