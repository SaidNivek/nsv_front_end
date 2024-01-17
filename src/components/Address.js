import React from 'react'

function Address({location}) {
  return (
    <div className="w-[299px] md:mt-[12px] mt-[24px]">
      <p className="address_card_medium_font">Address</p>
      <div className="address_card_small_font">
        <p>{location.street}</p>
        <p>{location.city},{location.state} {location.zip}</p>
        <p>{location.phone}</p>
      </div>
    </div>
  )
}

export default Address