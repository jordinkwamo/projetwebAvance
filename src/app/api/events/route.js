import { connectToDb } from '@/libs/connectToDb';
import { Event } from '@/libs/models';
import { connect } from 'mongoose';
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

export async function GET()  {
    connectToDb();
    const event =  await Event.find() ;
  return NextResponse.json({
        event,
    });
  
}

export async function POST(request,response)  {
    if(request.method === 'POST'){
        await connectToDb();
        try{
            const {title,description,date,place,img,alt} = await request.json();
            await Event.create({title,description,date,place,img,alt});
            return NextResponse.json({message : "Event created"},{status: 201})

        }catch(error){
            console.log("Erreur lors du post d'un evenement", error)
            response.status(500).json({message: "Erreur lors de la creation du event"})
        }
    }else{
        response.status(405).json({message: "seule les requests post ne sont pas autorisees"})
    
  
}
}

export async function DELETE(request)  {
    const id = request.nexturl.searchParams.get("id")
    connectToDb();
    const event =  await Event.findByIdAndDelete(id) ;
  return NextResponse.json({
        message: "Event deleted"
    }, {status: 200});
  
}

