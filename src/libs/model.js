import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        title:String,
        description: String,
        date:String,
        place:String,
        img:String,
        alt:String,
    },
    {timestamps:true}
);
export const Event =
    mongoose.model?.Event || mongoose.model("Event",eventSchema)