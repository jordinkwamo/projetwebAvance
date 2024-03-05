import { connectToDb } from "@/libs/connectToDb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const {id} = params;
    connectToDb();
    const event = await Event.findOne({_id: id});
    return NextResponse.json({event},{status: 200});
}

export async function PUT(request, { params }) {
    const {id} = params;
    const {title,description,date,place,img,alt} = await request.json();
    connectToDb();
   await Event.findByIdAndUpdate(id,{title,description,date,place,img,alt})
    return NextResponse.json({message: "event updated"},{status: 200});
}