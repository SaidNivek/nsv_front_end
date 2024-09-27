import React from 'react'

function Address({location}) {
  let google_query=`http://maps.google.com/?q=${location.street},${location.city},${location.state},${location.zip}`

  return (
    <div className=" flex flex-col">
      <p className="card_medium_font">Address</p>
      <div className="card_small_font sm:w-[11rem]">
        <p>{location.street}</p>
        <p>{location.city}, {location.state} {location.zip}</p>
        <p>{location.phone}</p>
        <a className="address_link hover:underline hover:decoration-[#4FB0E8] hover:decoration-4" href={`${google_query}`} target="_blank" rel="noreferrer"><p className="mt-[12px]">Get Directions</p></a>
      </div>
    </div>
  )
}

export default Address