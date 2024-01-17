import React from 'react'

function Address({location}) {
  let google_query=`http://maps.google.com/?q=${location.street},${location.city},${location.state},${location.zip}`

  return (
    <div className="w-[299px] md:mt-[12px] mt-[24px]">
      <p className="address_card_medium_font">Address</p>
      <div className="address_card_small_font">
        <p>{location.street}</p>
        <p>{location.city}, {location.state} {location.zip}</p>
        <p>{location.phone}</p>
        <a className="address_link" href={`${google_query}`} target="_blank" rel="noreferrer"><p className="mt-[12px]">Get Directions</p></a>
      </div>
    </div>
  )
}

export default Address