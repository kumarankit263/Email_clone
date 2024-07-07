// import express from 'express';
// import dotenv from "dotenv"
// import connectDB from './db/connectDB.js';
// import cookieParser from 'cookie-parser';
// import cors from "cors";
// import userRoute from"./routes/user.route.js";
// import emailRoute from "./routes/email.route.js"

// dotenv.config({});
// connectDB();


// const app = express();
// const PORT = 8080;

// // middleware
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(cookieParser());

// const corsOptions={
//     origin:'http://localhost:5173',
//     // credentials:true
//     credential:true
// }
// app.use(cors(corsOptions));

// //  routes
// app.use("/api/v1/user",userRoute);
// app.use("/api/v1/email",emailRoute);


// // "http://localhost:8080/api/v1/user/register"
// // "http://localhost:8080/api/v1/user/login"


// app.listen(PORT, () => {
//   console.log(`Server running at port ${PORT}`);
// });



import express from "express"; // react style
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import emailRoute from "./routes/email.route.js";

dotenv.config({});
connectDB();
const PORT = 8080;
const app = express();

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/email", emailRoute);

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`);
});