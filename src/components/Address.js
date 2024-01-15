import React from 'react'

function Address({location}) {
  return (
    <div className="w-[299px]">
      <p><strong>Address</strong></p>
      <p>{location.street}</p>
      <p>{location.city},{location.state} {location.zip}</p>
      <p>{location.phone}</p>
    </div>
  )
}

export default Address