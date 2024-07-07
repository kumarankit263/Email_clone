
import React, { useState } from "react";
import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoTag } from "react-icons/go";
import Emails from "./Emails";

const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    text: "Social",
  },
];

const Inbox = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex-1 bg-white rounded-xl mx-2 sm:mx-5">
      <div className="flex items-center justify-between px-2 sm:px-4 my-2">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-1">
            {/* <MdCropSquare size={"20px"}  tooltip="Select"/> */}
            <IconWithTooltip icon={MdCropSquare} tooltip="Select" size={"20px"} />
            <IconWithTooltip icon={FaCaretDown} tooltip="Select" size={"20px"} />

            {/* <FaCaretDown size={"20px"} /> */}
          </div>

          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            {/* <IoMdRefresh size={"20px"} tooltip="Refresh" /> */}
            <IconWithTooltip icon={IoMdRefresh} tooltip="Refresh" size={"20px"} />

          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            {/* <IoMdMore size={"20px"} /> */}
            <IconWithTooltip icon={IoMdMore} tooltip="More" size={"20px"} />
            
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <span> 1 to 50 </span>
          <MdKeyboardArrowLeft size={"24px"} />
          <MdKeyboardArrowRight size={"24px"} />
        </div>
      </div>

      <div className="h-90h overflow-y-auto">
        <div className="flex items-center gap-1 sm:gap-2 flex-wrap sm:flex-nowrap">
          {mailType.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`${
                selected === index
                  ? "border-b-4 border-b-blue-600 text-blue-600"
                  : " border-b-4 border-b-transparent"
              } flex items-center gap-2 sm:gap-5 p-2 sm:p-4 w-full sm:w-52 hover:bg-gray-100`}
            >
              {item.icon}
              <span className="text-xs sm:text-base">{item.text}</span>
            </button>
          ))}
        </div>
        <Emails />
      </div>
    </div>
  );
};

const IconWithTooltip = ({ icon: Icon, tooltip }) => (
  <div className="relative group">
    <Icon size={20} className="cursor-pointer text-gray-600 group-hover:text-black" />
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
      {tooltip}
    </div>
  </div>
);

export default Inbox;
