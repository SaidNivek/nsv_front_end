import React from 'react'
import { arrow } from '../../assets'

function ValueCard({value}) {
  return (
    <div className="ValueCard flex w-[30%] sm:m-[1%] ">
      <img src={arrow} alt="bullseye" className="md:w-[120px] md:h-[120px] w-[80px] h-[50px] md:absolute top-[46px] left-[152px] " />
      <h2 className="card_large_font ">{value.title}</h2>
      <p>{value.copy}</p>
    </div>
  )
}

export default ValueCard