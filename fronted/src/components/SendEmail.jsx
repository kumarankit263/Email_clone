// // import React, { useState } from "react";
// // import {RxCross2} from "react-icons/rx"
// // import { useDispatch, useSelector } from "react-redux";
// // import { setEmails, setOpen } from "../redux/appSlice";
// // import toast, { Toaster } from 'react-hot-toast';
// // import axios from "axios";

// // const SendEmail = () => {
// //     const [formData,setFormData]=useState({
// //         to:"",
// //         subject:"",
// //         message:""
// //     })
// //     const changeHandler=(e)=>{
// //         setFormData({...formData,[e.target.name]:e.target.value})
// //     }

// //     const submitHandler=async(e)=>{
// //         e.preventDefault()
// //         // console.log(formData)
// //         try{
// //             const res=await axios.post("http://localhost:8080/api/v1/email/create",formData,{
// //                 headers:{
// //                     'Content-Type':"application/json"
// //                 },
// //                 withCredentials:true
// //             });
// //             // console.log(res.data);
// //             // dispatch(setEmails(...Emails.res.data.emails))
// //             dispatch(setEmails([...Emails.res.data.email]))
// //         }
// //         catch(error){
// //             console.log(error);
// //             toast.error(error.response.data.message)
// //         }
// //         dispatch(setOpen(false));
// //     }
// //     const dispatch =useDispatch();
// //     const {open}=useSelector(store=>store.app);
// //     return (
// //         <div className={`${open?"block":"hidden"} bg-white max-w-6xl shadow-xl shadow-slate-600 round-t-md`}>
// //             <div className="flex items-center justify-between px-3 py-2 bg-[#F2F6FC]">
// //                 <h1>New Message</h1>
// //                 <div  onClick={()=>dispatch(setOpen(false))} className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
// //                     <RxCross2 size="20px" />
// //                 </div>
// //             </div>
// //             <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
// //                 <input  onChange={changeHandler} value={formData.to} type="text" name="to"placeholder="To" className="outkine-none py-1"/>
// //                 <input  onChange={changeHandler} value={formData.subject} type="text" name="subject" placeholder="Subject" className="outkine-none py-1"/>
// //                 <textarea  onChange={changeHandler} value={formData.message} rows={'30'} cols={'30'} name="message" className=" outline-none py-1"></textarea>
// //                 <button type="submit" className="bg-blue-600 px-5 py-1 rounded-full w-fit text-white">Send</button>
// //             </form>
// //         </div>
// //     )
// // }
// // export default SendEmail;



import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails, setOpen } from '../redux/appSlice';
import toast from 'react-hot-toast';
import axios from 'axios';

const SendEmail = () => {
    const [formData, setFormData] = useState({
        to: "",
        subject: "",
        message: ""
    });
    const { open, emails } = useSelector(store => store.app);
    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/v1/email/create", formData, {
                headers: {
                    'Content-Type': "application/json"
                },
                withCredentials: true
            });
            dispatch(setEmails([...emails, res.data.email]));
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
        dispatch(setOpen(false));
    }

    return (
        <div className={`${open ? 'block' : 'hidden'} bg-white max-w-full sm:max-w-6xl shadow-xl shadow-slate-600 rounded-t-md mx-2 sm:mx-auto`}>
            <div className='flex items-center justify-between px-3 py-2 bg-[#F2F6FC]'>
                <h1 className="text-sm sm:text-base">New Message</h1>
                <div onClick={() => dispatch(setOpen(false))} className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
                    <RxCross2 size="20px" />
                </div>
            </div>
            <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
                <input onChange={changeHandler} value={formData.to} name="to" type="text" placeholder='To' className='outline-none py-1 px-2 border rounded-md w-full' />
                <input onChange={changeHandler} value={formData.subject} name="subject" type="text" placeholder='Subject' className='outline-none py-1 px-2 border rounded-md w-full' />
                <textarea onChange={changeHandler} value={formData.message} name="message" rows='10' className='outline-none py-1 px-2 border rounded-md w-full'></textarea>
                <button type='submit' className='bg-blue-700 rounded-full px-5 py-1 w-fit text-white self-end'>Send</button>
            </form>
        </div>
    );
}

export default SendEmail;