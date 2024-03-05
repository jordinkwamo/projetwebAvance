import mongoose from "mongoose"; 

export const connectToDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("mongo connection successful");
    } catch (error){
        console.log(error)
    }
}