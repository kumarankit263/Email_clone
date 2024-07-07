// import React, { useState,useEffect } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoSearch } from "react-icons/io5";
// import { CiCircleQuestion } from "react-icons/ci";
// import { IoMdSettings } from "react-icons/io";
// import { TbGridDots } from "react-icons/tb";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchText,setAuthUser } from "../redux/appSlice";
// import axios from "axios";
// import toast, { Toaster } from 'react-hot-toast';

// import { useNavigate } from "react-router-dom";

// // import Avatar from "react-avatar";

// export default function Navbar() {
//   const [text,setText]=useState();
//   const {user}=useSelector(store=>store.app)
//   const dispatch=useDispatch();
//   const navigate=useNavigate();

//   const logoutHandler=async()=>{
//     try{
//       const res = await axios.get('http://localhost:8080/api/v1/user/logout',{withCredentials:true});
//             console.log(res);
//             toast.success(res.data.message);
//             dispatch(setAuthUser(null));
//             navigate("/login");
//     }
//     catch(error){
//       console.log(error);
//     }
//   }
//   useEffect(()=>{
//     dispatch(setSearchText(text))
//   },[text]);
//   return (
//     <div
//       className="flex items-center justify-between
//      mx-3 h-16"
//     >
//       <div className="flex items-center gap-10">
//         <div className="flex items-center gap-2">
//           <div className="p-3 hover:bg-gray-200 rounded-full cursor-pointer">
//             <GiHamburgerMenu />
//           </div>
//           <img
//             className="w-8"
//             src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
//             alt="logo"
//           />
//           <h1 className="text-2xl">Gmail</h1>
//         </div>
//       </div>
//       {
//         user && (
//           <>
//             <div className="w-[50%] mr-60">
//               <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
//                 <IoSearch size={"24px"} />
//                 <input

//                   className="rounded-full w-full bg-transparent outline-none px-1"
//                   type="text"
//                   value={text}
//                   onChange={(e)=>setText(e.target.value)}
//                   placeholder="Search Mail"
//                 />
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
//                 <CiCircleQuestion size={"24px"} />
//               </div>

//               <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
//                 <IoMdSettings size={"24px"} />
//               </div>

//               <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
//                 <TbGridDots size={"24px"} />
//               </div>
//               <span  onClick={logoutHandler} className="underline cursor-pointer bg-slate-500 text-white rounded-md p-2 hover:cursor-pointer hover:bg-slate-700">Logout</span>
//               {/* <Avatar src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" size="100" round={true} /> */}
//             </div>
//           </>
//         )
//       }

//     </div>
//   );
// }

// ***************************************rsdponsive code*****************************
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setAuthUser } from "../redux/appSlice";
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
// import Avatar from "react-avatar";

export default function Navbar() {
  const [text, setText] = useState("");
  const { user } = useSelector(store => store.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/v1/user/logout', { withCredentials: true });
      console.log(res);
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dispatch(setSearchText(text));
  }, [text]);

  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 sm:p-3 hover:bg-gray-200 rounded-full cursor-pointer">
            <GiHamburgerMenu size="24px" />
          </div>
          <img
            className="w-6 sm:w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="logo"
          />
          <h1 className="hidden sm:block text-lg sm:text-2xl">Gmail</h1>
        </div>
      </div>
      {user && (
        <>
          <div className="w-full sm:w-[50%] mr-0 sm:mr-60">
            <div className="flex items-center bg-[#EAF1FB] px-2 py-2 sm:py-3 rounded-full">
              <IoSearch size={"24px"} />
              <input
                className="rounded-full w-full bg-transparent outline-none px-1"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Search Mail"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 sm:p-3 rounded-full hover:bg-gray-200 cursor-pointer">
              <CiCircleQuestion size={"24px"} />
            </div>
            <div className="p-2 sm:p-3 rounded-full hover:bg-gray-200 cursor-pointer">
              <IoMdSettings size={"24px"} />
            </div>
            <div className="p-2 sm:p-3 rounded-full hover:bg-gray-200 cursor-pointer">
              <TbGridDots size={"24px"} />
            </div>
            <span
              onClick={logoutHandler}
              className="underline cursor-pointer bg-slate-500 text-white rounded-md p-1 sm:p-2 hover:bg-slate-700"
            >
              Logout
            </span>
            {/* <Avatar src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" size="100" round={true} /> */}
          </div>
        </>
      )}
    </div>
  );
}
// ****************************************chat gpt*****************************

// import React, { useState, useEffect } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoSearch } from "react-icons/io5";
// import { CiCircleQuestion } from "react-icons/ci";
// import { IoMdSettings } from "react-icons/io";
// import { TbGridDots } from "react-icons/tb";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchText, setAuthUser } from "../redux/appSlice";
// import axios from "axios";
// import toast from 'react-hot-toast';
// import { useNavigate, Link } from "react-router-dom";

// export default function Navbar() {
//   const [text, setText] = useState("");
//   const { user } = useSelector(store => store.app);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get('http://localhost:8080/api/v1/user/logout', { withCredentials: true });
//       console.log(res);
//       toast.success(res.data.message);
//       dispatch(setAuthUser(null));
//       navigate("/login");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     dispatch(setSearchText(text));
//   }, [text]);

//   return (
//     <div className="flex items-center justify-between mx-3 h-16">
//       <div className="flex items-center gap-2 sm:gap-4">
//         <div className="flex items-center gap-2">
//           <div className="p-2 sm:p-3 hover:bg-gray-200 rounded-full cursor-pointer">
//             <GiHamburgerMenu size="24px" />
//           </div>
//           <img
//             className="w-6 sm:w-8"
//             src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
//             alt="logo"
//           />
//           <h1 className="hidden sm:block text-lg sm:text-2xl">Gmail</h1>
//         </div>
//       </div>
//       {user && (
//         <>
//           <div className="w-full sm:w-[50%] mr-0 sm:mr-60">
//             <div className="flex items-center bg-[#EAF1FB] px-2 py-2 sm:py-3 rounded-full">
//               <IoSearch size={"24px"} />
//               <input
//                 className="rounded-full w-full bg-transparent outline-none px-1"
//                 type="text"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 placeholder="Search Mail"
//               />
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="p-2 sm:p-3 rounded-full hover:bg-gray-200 cursor-pointer">
//               <CiCircleQuestion size={"24px"} />
//             </div>
//             <div className="p-2 sm:p-3 rounded-full hover:bg-gray-200 cursor-pointer">
//               <IoMdSettings size={"24px"} />
//             </div>
//             <div className="p-2 sm:p-3 rounded-full hover:bg-gray-200 cursor-pointer">
//               <TbGridDots size={"24px"} />
//             </div>
//             <Link to="/starred" className="underline cursor-pointer bg-slate-500 text-white rounded-md p-1 sm:p-2 hover:bg-slate-700">
//               Starred
//             </Link>
//             <span
//               onClick={logoutHandler}
//               className="underline cursor-pointer bg-slate-500 text-white rounded-md p-1 sm:p-2 hover:bg-slate-700"
//             >
//               Logout
//             </span>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
