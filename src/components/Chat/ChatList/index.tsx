import { MdOutlineBorderColor } from "react-icons/md";
import ButtonCircle from "@/components/Buttons/ButtonCircle";
import SearchBox from "./SearchBox";
import ConversationList from "./ConversationList";
import Header from "./Header";

const ChatList: React.FC = () => (
  <div
    className={`flex flex-col h-full px-4 py-2 w-80 min-w-[320px] border-r-[#424242] border-r-[1px]`}
  >
    <Header />
    <SearchBox />
    <ConversationList convertsationList={[]} />
  </div>
);

export default ChatList;
