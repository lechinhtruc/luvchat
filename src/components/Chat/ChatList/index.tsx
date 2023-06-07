"use client";
import SearchBox from "./SearchBox";
import ConversationList from "./ConversationList";
import Header from "./HeaderChatList";
import { usePathname } from "next/navigation";

const ChatList: React.FC = () => {
  const pathname = usePathname();
  const isShowChatList = pathname.startsWith("/chat");
  return (
    <div
      className={`flex flex-col h-full px-4 py-2 w-80 min-w-[320px] border-r-[#424242] border-r-[1px] ${!isShowChatList} && 'hidden'`}
    >
      <Header />
      <SearchBox />
      <ConversationList convertsationList={[]} />
    </div>
  );
};

export default ChatList;
