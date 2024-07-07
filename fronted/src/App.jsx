import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import Body from "./components/Body";
import Email from "./components/Email";
import { createBrowserRouter, RouterProvider,Navigate,Link } from 'react-router-dom';
import SendEmail from "./components/SendEmail";
import SignUp from "./components/SignUp";
import Login from"./components/Login";
import toast, { Toaster } from 'react-hot-toast';
import  StarredEmails from './components/StarredEmails';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <Inbox />
        // element: <Navigate to="/inbox" />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      },
      {
        path: "/starred",
        element: <StarredEmails />
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  }
])

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#F6F8FC] h-screen">
      {/* <Navbar /> */}
      <RouterProvider router={appRouter}/>
      <div className="absolute w-[30%] bottom-0 top-[300px] right-20 z-10">
        <SendEmail/>
      </div>
      <Toaster/>
    </div>
  );
}

export default App;
