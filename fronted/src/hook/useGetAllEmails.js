// import axios from "axios";
// import { useEffect } from "react";
// const useGetAllEmails=()=>{
//     useEffect(()=>{
//         const fetchEmails=async()=>{
//             try{
//                 const res=await axios.get("http://localhost:8080/api/v1/email/getallemails");
//                 console.log(res.data);
//             }
//             catch(error){
//                 console.kog(error);
//             }
//         }
//         fetchEmails();
//     },[]);
// }
// export default useGetAllEmails;

// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch , useSelector} from "react-redux";
// import { setEmails } from "../redux/appSlice";

// const getEmails = async () => {
//     const dispatch=useDispatch();
// const {emails} = useSelector(store=>store.app);
//     try {
//         const res = await axios.get("http://localhost:8080/api/v1/email/getallemails",{
//             withCredentials:true
//         });
//         // console.log(res.data.emails);
//         dispatch(setEmails(res.data.emails));
//     } catch (error) {
//         console.log(error);
//     }
// };

// const useGetAllEmails = () => {
//     useEffect(() => {
//         getEmails();
//     }, []);
// };

// export default useGetAllEmails;


// import axios from "axios"
// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux";
// import { setEmails } from "../redux/appSlice";

// const useGetAllEmails = () => {
//     const dispatch = useDispatch();
//     const {emails} = useSelector(store=>store.app);
//     useEffect(() => {
//         const fetchEmails = async () => {
//             try {

//                 const res = await axios.get("http://localhost:8080/api/v1/email/getallemails", {
//                     withCredentials: true
//                 });
//                 dispatch(setEmails(res.data.emails));

//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchEmails();
//     }, []);
// };
// export default useGetAllEmails;

// ********************************************chatgpt*************************************************************

import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

const useGetAllEmails = () => {
    const dispatch = useDispatch();
    const { emails } = useSelector(store => store.app);
    
    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/v1/email/getallemails", {
                    withCredentials: true
                });

                const storedStarredEmails = JSON.parse(localStorage.getItem("starredEmails")) || {};

                const emailsWithStarred = res.data.emails.map(email => ({
                    ...email,
                    isStarred: storedStarredEmails[email._id] || false
                }));

                dispatch(setEmails(emailsWithStarred));
            } catch (error) {
                console.log(error);
            }
        };
        fetchEmails();
    }, [dispatch]);
};

export default useGetAllEmails;
