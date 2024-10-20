import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'
const EditEventPage = () => {
    const data=useRouteLoaderData('event-detail')

  return (
    <div>{data&&<EventForm event={data.event}/>}</div>
  )
}

export default EditEventPage