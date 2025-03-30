import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://shivi:shivi123456@cluster0.z5dfl1v.mongodb.net/food_del').then(()=>console.log("DB Connected"));

}

