import React, { useEffect, useState } from "react";
import Email from "./Email"
import useGetAllEmails from "../hook/useGetAllEmails";
import { useSelector } from "react-redux";


const Emails=()=>{
    useGetAllEmails();
    const {emails,searchText}=useSelector(store=>store.app);
    const[filterEmail,setFilterEmail]=useState(emails);

    useEffect(()=>{
        const filteredEmail=emails.filter((email)=>{
            // return email.subject.toLowerCase().includes(searchText.toLowerCase()) || email.to.toLowerCase().includes(searchText.toLowerCase()) || email.message.toLowerCase().includes(searchText.toLowerCase())
            return email.subject||email.to||email.message
        });
        setFilterEmail(filteredEmail);
    },[searchText,emails])
    return (
        <div>
            {
                filterEmail && filterEmail?.map((email)=><Email key={email._id} email={email}/>)
            }
            {/* <Email/>
            <Email/>
            <Email/>
            <Email/> */}

        </div>
    )
}
export default Emails;