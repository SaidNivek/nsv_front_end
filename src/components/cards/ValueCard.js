import React from 'react'

function ValueCard({value}) {
  return (
    <div className="ValueCard flex w-[30%] sm:m-[1%] ">
      <h2 className="card_large_font ">{value.title}</h2>
      <p>{value.copy}</p>
    </div>
  )
}

export default ValueCard