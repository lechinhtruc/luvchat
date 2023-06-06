"use client";
import { Avatar, Tooltip } from "antd";
import UserItemProps from "./Types/UserItemProps.type";

const UserItem: React.FC<UserItemProps> = ({ avatarSrc }) => (
  <div className="flex items-center justify-center cursor-pointer">
    <Tooltip arrow={false} placement="right" title={`Account`}>
      <Avatar shape="circle" src={avatarSrc} size={40} />
    </Tooltip>
  </div>
);

export default UserItem;
