
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        open: false,
        user: null,
        emails: [],
        selectedEmail: null,
        searchText: "",
    },
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setAuthUser: (state, action) => {
            state.user = action.payload;
        },
        setEmails: (state, action) => {
            state.emails = action.payload;
        },
        setSelectedEmail: (state, action) => {
            state.selectedEmail = action.payload;
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        toggleStarred: (state, action) => {
            const email = state.emails.find(email => email._id === action.payload);
            if (email) {
                email.isStarred = !email.isStarred;
                // Update local storage
                const storedStarredEmails = JSON.parse(localStorage.getItem("starredEmails")) || {};
                if (email.isStarred) {
                    storedStarredEmails[email._id] = true;
                } else {
                    delete storedStarredEmails[email._id];
                }
                localStorage.setItem("starredEmails", JSON.stringify(storedStarredEmails));
            }
        }
    }
});

export const { setOpen, setAuthUser, setEmails, setSelectedEmail, setSearchText, toggleStarred } = appSlice.actions;

export const selectStarredEmails = state => state.app.emails.filter(email => email.isStarred); // for stared comp

export default appSlice.reducer;
