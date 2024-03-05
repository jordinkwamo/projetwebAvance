import mongoose from "mongoose";

export const connectToDb = async () => {
    try{
        await mongoose.connect(process.env.Mongo);
        console.log("connection successful")
    }catch (error) {
        console.log(error)
    }
};
