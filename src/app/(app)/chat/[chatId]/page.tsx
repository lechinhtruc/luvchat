"use client";
import BodyConversation from "@/components/Chat/Conversation/BodyConversation";
import ConversationHeader from "@/components/Chat/Conversation/HeaderConversation";
import InputMessage from "@/components/Chat/Conversation/InputMessage";

export default function ChatBody() {
  return (
    <div className="flex w-full">
      <div className={`flex flex-col w-full`}>
        <ConversationHeader
          avatarSrc={
            "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/318585007_867151754536844_3509429684571264758_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YaFIHFEv-T4AX9p3ivi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkg4-1.xx&oh=00_AfBaIK66FhynNuvlRi3gYKEbs7CWWQj_spcVekzSXbY3GA&oe=6483954F"
          }
          username={"Lê Trực"}
          lastOnlineTime={"Đang hoạt động"}
        />
        <BodyConversation />
        <InputMessage />
      </div>
    </div>
  );
}
