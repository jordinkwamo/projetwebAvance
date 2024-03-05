import { connectToDb } from "@/libs/connecttToDb";
import { connect } from "mongoose";
import { NextResponse } from "next/server";
import React from "react"; 
export async function GET() {
    connectToDb();
    const events = await Event.find
    return  NextResponse.json({
            events,
        });
}

export async function POST(request , res) {
    if (request.method === 'post'){
        await connectToDb();
        try{
                const {title,description,date,place,img,alt} = await request.json();
                await Event.create({title,description,date,place,img,alt});
                return NextResponse.json({message : "Event created"},{status:201})

        }catch(error){
            console.log("Erreur lors du post d'un evenement", error);
            res.status(500).json({message:"erreur lors de la creation d'un event"})
        }
    }
    else{
        res.status(405).json({message:"seule les requests post sont autorisees"})
    }

}

export async function DELETE() {
    const id = request.nextUrl.searchParams.get("id");
    connectToDb();
    const events = await Event.find
    return  NextResponse.json({message:"Event deleted"}), {status:200};
}