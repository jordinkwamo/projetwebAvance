import mongoose from "mongoose";

const eventschema = new mongoose.Schema(
    {
        title: String,
        description:String,
        date:String,
        place: String,
        img: String,
        alt: String
    },
    {timestamps: true}
);

export const Event = mongoose.models?.Event || mongoose.model("Event",eventschema)