"use client";

import { useState } from "react";
import { MdSearch, MdKeyboardBackspace } from "react-icons/md";

import ButtonCircle from "@/components/Buttons/ButtonCircle";

const SearchBox: React.FC = () => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="flex items-center gap-x-1">
      {isFocus && <ButtonCircle icon={<MdKeyboardBackspace size={20} />} />}
      <div className="flex rounded-2xl bg-[#1f1f1f] w-full my-2 items-center px-2">
        <MdSearch size={20} className={`opacity-60 ${isFocus && "hidden"}`} />
        <input
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          className="w-full bg-transparent border-none outline-none font-light p-2 text-sm"
          placeholder="Find a conversation"
        />
      </div>
    </div>
  );
};
export default SearchBox;
