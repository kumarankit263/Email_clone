
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
