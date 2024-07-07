import React from "react";
import { useSelector } from "react-redux";
import Email from "./Email";
import { selectStarredEmails } from "../redux/appSlice";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import {MdCropSquare} from "react-icons/md"
const StarredEmails = () => {
  const starredEmails = useSelector(selectStarredEmails);

  return (
    <div className="p-4">
      {/* Header with icons */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <IconWithTooltip icon={MdCropSquare} tooltip="Select" size={"20px"} />
          <IconWithTooltip icon={IoMdRefresh} tooltip="Refresh"  size={"20px"}/>
          <IconWithTooltip icon={IoMdMore} tooltip="More" size={"20px"} />
        </div>
      </div>
      {/* Starred Emails List */}
      {starredEmails && starredEmails.map((email) => (
        <Email key={email._id} email={email} />
      ))}
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

export default StarredEmails;
