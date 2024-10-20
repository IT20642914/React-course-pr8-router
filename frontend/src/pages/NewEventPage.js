import React from 'react'
import EventForm from '../components/EventForm'
import{json, redirect}from "react-router-dom"

const NewEventPage = () => {

  return (
    <div><EventForm  method={"POST"}/></div>
  )
}

export default NewEventPage

export async function action({request,params}) {
    const data=await request.formData()
    const method=request.method
    console.log("method",method)
    const eventData={
        title:data.get("title"),
        description:data.get("description"),
        date:data.get("date"),
        image:data.get("image"),
    }
    let url ="http://localhost:8080/events"
    if(method==="PATCH"){
        const eventId=params.eventId
        url=url+`/${eventId}`
    }
   const response= await fetch(url,{
        method:method,
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(eventData),

    })
    if(response.status===422){
      return response
    }
    if(!response.ok){
        throw json({message:"Failed to create event"},{status:500})
    }
 return redirect("/events")
}