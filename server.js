import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { userAddress } from "./controllers/addressController.js";
import dotenv from 'dotenv';
dotenv.config();

//app config
const app=express();
const port=process.env.PORT || 3000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api end-point
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);
app.use("/api/address",userAddress);

app.get("/",(req,res)=>{res.send("vanakkam")})
app.listen(port,()=>{console.log(`listening port ${port}`)})

