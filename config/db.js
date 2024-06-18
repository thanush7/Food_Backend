import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

 export const connectDB=async()=>{
    await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log('db connected')});
}

//mongodb+srv://alagut:77083344@cluster0.ggmqr2a.mongodb.net/food-del