// // // import React from 'react'
// // // import { MdCropSquare } from 'react-icons/md'
// // // import { MdOutlineStarBorder } from 'react-icons/md'
// // // import { useDispatch } from 'react-redux';
// // // import { useNavigate } from 'react-router-dom'


// // // export default function Email({email}) {
// // //     const navigate=useNavigate();
// // //     const dispatch=useDispatch();
// // //     const openMail=()=>{
// // //         // navigate("/mail/1234");
// // //         dispatch(setSelectedEmail(email))
// // //         navigate(`/mail/${email._id}`);
// // //     }
// // //     return (
// // //         <div onClick={openMail}   className='flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover: cursor-pointer
// // //     hover:shadow-md'>
// // //             <div className='flex items-center gap-3'>
// // //                 <div className='text-gray-400'>
// // //                     <MdCropSquare size={"20px"} />
// // //                 </div>

// // //                 <div  className='text-gray-400'>
// // //                     <MdOutlineStarBorder size={"20px"} />
// // //                 </div>
// // //                 <div  >
// // //                     <h1 className="font-semibold">{email?.subject}</h1>
// // //                 </div>
// // //             </div>

// // //             <div className='flex-1 ml-4'>
// // //                 <p>{email?.message}</p>
// // //             </div>

// // //             <div className='flex-none text-gray text-sm'>
// // //                 <p>12 days ago</p>
// // //             </div>
// // //         </div>
// // //     )
// // // }


// // import React from 'react'
// // import { MdCropSquare } from 'react-icons/md'
// // import { MdOutlineStarBorder } from "react-icons/md";
// // import { useDispatch } from 'react-redux';
// // import { useNavigate } from 'react-router-dom';
// // import { setSelectedEmail } from '../redux/appSlice';

// // const Email = ({email}) => {
// //     const navigate = useNavigate();
// //     const dispatch = useDispatch();
// //     const openMail = () => {
// //         dispatch(setSelectedEmail(email));
// //         navigate(`/mail/${email._id}`);
// //     }
// //     return (
// //         <div onClick={openMail} className='flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md'>
// //             <div className='flex items-center gap-3'>
// //                 <div className='text-gray-400'>
// //                     <MdCropSquare size={'20px'} />
// //                 </div>
// //                 <div className='text-gray-400'>
// //                     <MdOutlineStarBorder size={'20px'} />
// //                 </div>
// //                 <div>
// //                     <h1 className='font-semibold'>{email?.subject}</h1>
// //                 </div>
// //             </div>
// //             <div className='flex-1 ml-4' >
// //                 <p>{email?.message}</p>
// //             </div>
// //             <div className='flex-none text-gray text-sm'>
// //                 <p>{email?.createdAt}</p>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Email

// ****************************************************chatgpt************************************

import React from 'react';
import { MdCropSquare } from 'react-icons/md';
import { MdOutlineStarBorder, MdStar } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedEmail, toggleStarred } from '../redux/appSlice';
import toast from "react-hot-toast"; // Import toast

const Email = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isStarred = useSelector((state) =>
    state.app.emails.find((e) => e._id === email._id)?.isStarred
  );

  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${email._id}`);
  };

  const toggleStar = (e) => {
    e.stopPropagation(); // Prevent triggering openMail
    dispatch(toggleStarred(email._id));

    const action = email.isStarred ? "removed from" : "added to";
    toast.success(`Email ${action} starred`);
  };

  

  return (
    <div onClick={openMail} className='flex items-center justify-between border-b border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-sm hover:cursor-pointer hover:shadow-md'>
      <div className='flex items-center gap-2 sm:gap-3'>
        <div className='text-gray-400'>
          <MdCropSquare size={'20px'} />
        </div>
        <div className='text-gray-400' onClick={toggleStar}>
          {isStarred ? <MdStar size={'20px'} className="text-yellow-500" /> : <MdOutlineStarBorder size={'20px'} />}
        </div>
        <div>
          <h1 className='font-semibold text-xs sm:text-sm'>{email?.subject}</h1>
        </div>
      </div>
      <div className='flex-1 ml-2 sm:ml-4'>
        <p className='text-xs sm:text-sm truncate'>{email?.message}</p>
      </div>
      <div className='flex-none text-gray text-xs sm:text-sm'>
        <p>{new Date(email?.createdAt).toLocaleDateString()}</p>
      </div>
      {/* <div className="flex gap-2 mt-1">
          <button className="text-blue-500 hover:text-blue-700" onClick={handleReply}>Reply</button>
          <button className="text-blue-500 hover:text-blue-700" onClick={handleForward}>Forward</button>
        </div> */}
    </div>
  );
};

export default Email;

