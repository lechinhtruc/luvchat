import { Avatar, Drawer, Space } from "antd";
import { useState } from "react";
import {
  MdCall,
  MdVideocam,
  MdMoreHoriz,
  MdNotifications,
  MdGroupAdd,
  MdPushPin,
  MdEmojiEmotions,
} from "react-icons/md";
import { VscTextSize } from "react-icons/vsc";

import ConverstationHeaderProps from "./Types/ConversationHeaderProps.type";
import ButtonCircle from "@/components/Buttons/ButtonCircle";
import Collapse from "@/components/Collapse";

const ConversationHeader: React.FC<ConverstationHeaderProps> = ({
  avatarSrc,
  username,
  lastOnlineTime,
}) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const chatInfoItems = [
    { title: "Pinned Message", icon: <MdPushPin size={15} /> },
  ];

  const customizeChatItems = [
    { title: "Change emoji", icon: <MdEmojiEmotions size={15} /> },
    { title: "Edit nicknames", icon: <VscTextSize size={15} /> },
  ];

  return (
    <div
      className={`flex w-full justify-between px-2 py-1 border-b-[1px] border-b-[#424242] select-none`}
    >
      <div className="flex gap-2 px-2 py-1 rounded-lg overflow-hidden duration-300 hover:bg-opacity-50 hover:bg-[#424242]">
        <Avatar src={avatarSrc} size={50} className="min-w-[50px]" />
        <div className="flex flex-col justify-center w-full cursor-pointer">
          <p className="text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-sm">
            {username}
          </p>
          <p className="text-sm font-extralight text-ellipsis overflow-hidden whitespace-nowrap max-w-sm">
            {lastOnlineTime}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-1">
        <ButtonCircle icon={<MdCall size={20} />} />
        <ButtonCircle icon={<MdVideocam size={20} />} />
        <ButtonCircle
          icon={<MdMoreHoriz size={20} />}
          onClick={() => setDrawerOpen(true)}
        />
      </div>
      <Drawer
        placement="right"
        closable={false}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <div className="flex flex-col w-full items-center justify-center select-none">
          <Avatar src={avatarSrc} size={80} shape="circle" />
          <p className="text-xl font-semibold text-white">{username}</p>
          <small className="text-white font-light text-sm opacity-60">
            Active now
          </small>
          <Space className="mt-4" align="center" size={4}>
            <Space
              direction="vertical"
              align="center"
              className="w-24 h-24"
              size={2}
            >
              <ButtonCircle icon={<MdNotifications size={20} />} />
              <p className="text-white opacity-60 text-ellipsis text-center line-clamp-2 overflow-hidden font-light">
                Turn off notification
              </p>
            </Space>
            <Space
              direction="vertical"
              align="center"
              className="w-24 h-24"
              size={2}
            >
              <ButtonCircle icon={<MdPushPin size={20} />} />
              <p className="text-white opacity-60 text-ellipsis text-center line-clamp-2 overflow-hidden font-light">
                Pin conversation
              </p>
            </Space>
            <Space
              direction="vertical"
              align="center"
              className="w-24 h-24"
              size={2}
            >
              <ButtonCircle icon={<MdGroupAdd size={20} />} />
              <p className="text-white opacity-60 text-ellipsis text-center line-clamp-2 overflow-hidden font-light">
                Create Group
              </p>
            </Space>
          </Space>
          <Space direction="vertical" size={2} className="w-full">
            <Collapse title="Chat info" items={chatInfoItems} />
            <Collapse title="Customize chat" items={customizeChatItems} />
          </Space>
        </div>
      </Drawer>
    </div>
  );
};

export default ConversationHeader;
