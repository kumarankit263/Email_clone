// import React from "react";
// import { IoMdStar } from "react-icons/io";
// import { LuPencil } from "react-icons/lu";
// import {
//   MdInbox,
//   MdOutlineDrafts,
//   MdOutlineForwardToInbox,
//   MdOutlineKeyboardArrowDown,
// } from "react-icons/md";
// import { TbSend2 } from "react-icons/tb";
// import { useDispatch } from "react-redux";
// import { setOpen } from "../redux/appSlice";
// const siderbarItems = [
//   {
//     icon: <MdInbox size={"20px"} />,
//     text: "Inbox",
//   },
//   {
//     icon: <IoMdStar size={"20px"} />,
//     text: "Starred",
//   },
//   {
//     icon: <MdOutlineForwardToInbox size={"20px"} />,
//     text: "Snoozed",
//   },
//   {
//     icon: <TbSend2 size={"20px"} />,
//     text: "Sent",
//   },
//   {
//     icon: <MdOutlineDrafts size={"20px"} />,
//     text: "Drafts",
//   },
//   {
//     icon: <MdOutlineKeyboardArrowDown size={"20px"} />,
//     text: "More",
//   },
// ];
// const Sidebar = () => {
//   const dispatch=useDispatch();
//   return (
//     <div className="w-[15%]">
//       <div className="p-3">
//         <button  onClick={()=>dispatch(setOpen(true))} className="flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md">
//           <LuPencil size="24px" />
//           Compose
//         </button>
//       </div>

//       <div className="text-gray-600">
//         {siderbarItems.map((item, index) => {
//           return (
//             <div
//               key={index}
//               className="flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 
//         hover:cursor-pointer hover:bg-gray-200 key={index}"
//             >
//               {item.icon}

//               <p>{item.text}</p>
//             </div>
//           );
//         })}

//         {/* <div className="flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 
//         hover:cursor-pointer hover: bg-gray-200">
//           <MdOutlineForwardToInbox size={"20px"} />
//           <p>Inbox</p> */}
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };
// export default Sidebar;

// **********************************************chatgpt 2*****************************************

import React from "react";
import { IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import {
  MdInbox,
  MdOutlineDrafts,
  MdOutlineForwardToInbox,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const sidebarItems = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Inbox",
    // path: "/inbox", // Define paths for each sidebar item
  },
  {
    icon: <IoMdStar size={"20px"} />,
    text: "Starred",
    path: "/starred", // Define paths for each sidebar item
  },
  {
    icon: <MdOutlineForwardToInbox size={"20px"} />,
    text: "Snoozed",
    path: "/snoozed", // Define paths for each sidebar item
  },
  {
    icon: <TbSend2 size={"20px"} />,
    text: "Sent",
    path: "/sent", // Define paths for each sidebar item
  },
  {
    icon: <MdOutlineDrafts size={"20px"} />,
    text: "Drafts",
    path: "/drafts", // Define paths for each sidebar item
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"20px"} />,
    text: "More",
    path: "/more", // Define paths for each sidebar item
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  
  return (
    <div className="w-full sm:w-[15%] sm:max-w-xs p-2 sm:p-3 bg-white shadow-md rounded-lg">
      <div className="flex justify-center sm:justify-start">
        <button
          onClick={() => dispatch(setOpen(true))}
          className="flex items-center gap-2 bg-[#C2E7FF] p-3 sm:p-4 rounded-2xl hover:shadow-md w-full sm:w-auto justify-center"
        >
          <LuPencil size="24px" />
          <span className="hidden sm:inline">Compose</span>
        </button>
      </div>

      <div className="text-gray-600 mt-4">
        {sidebarItems.map((item, index) => (
          <Link to={item.path} key={index} className="text-gray-600 hover:bg-gray-200 rounded-full my-2 flex items-center pl-2 sm:pl-6 py-2 gap-4 hover:cursor-pointer">
            {item.icon}
            <p className="hidden sm:inline">{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

