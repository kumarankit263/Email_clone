import React from "react";
import Sidebar from "./Sidebar";
import Inbox from "./Inbox";
import { Outlet,useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import { useEffect } from "react";
const Body = () => {
    const { user } = useSelector(store => store.app);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [])
    return (
        <>
        <Navbar/>
        <div className="flex">

            <Sidebar />
             <Outlet/>
             {/* <Inbox/> */}
             
        </div>
        </>
    )
}
export default Body;

