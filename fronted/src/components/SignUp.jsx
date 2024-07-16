
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from "axios";

const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/user/register", input, {
        headers: {
          'Content-Type': "application/json"
        },
        withCredentials: true
      });

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="flex items-center justify-center w-screen mt-10">
      <form onSubmit={submitHandler} className="flex flex-col gap-3 bg-white p-4 w-full max-w-md mx-4 sm:w-96 rounded-md shadow-lg">
        <h1 className="font-bold text-2xl uppercase my-2 text-center">Sign Up</h1>
        <input onChange={changeHandler} value={input.fullname} name="fullname" type="text" placeholder="Name" className="border border-gray-400 rounded-md px-2 py-1" />
        <input onChange={changeHandler} value={input.email} name="email" type="email" placeholder="Email" className="border border-gray-400 rounded-md px-2 py-1" />
        <input onChange={changeHandler} value={input.password} name="password" type="password" placeholder="Password" className="border border-gray-400 rounded-md px-2 py-1" />
        <button type="submit" className="bg-gray-700 p-2 text-white my-2 rounded-md">Sign Up</button>
        <p className="text-center">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
      </form>
    </div>
  );
}

export default SignUp;

