import { MdChatBubble, MdPeopleAlt, MdNotifications } from "react-icons/md";
import Item from "./Item";
import UserItem from "./UserItem";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col w-14 min-w-[56px] h-full border-r-[#424242] border-r-[1px] p-2">
      <nav className="flex-grow">
        <div className="flex flex-col gap-y-1 h-full">
          <Item title="Chat" href="/chat" icon={<MdChatBubble size={20} />} />
          <Item
            title="Notification"
            href="/notification"
            icon={<MdNotifications size={20} />}
          />
          <Item
            title="People"
            href="/people"
            icon={<MdPeopleAlt size={20} />}
          />
        </div>
      </nav>
      <div className="flex flex-col gap-y-1">
        <UserItem avatarSrc="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/318585007_867151754536844_3509429684571264758_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YaFIHFEv-T4AX9p3ivi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkg4-1.xx&oh=00_AfBaIK66FhynNuvlRi3gYKEbs7CWWQj_spcVekzSXbY3GA&oe=6483954F" />
      </div>
    </div>
  );
};

export default Sidebar;
