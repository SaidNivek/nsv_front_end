import React from 'react'
import { arrow } from '../../assets'

function ValueCard({value}) {
  // style={`background-image: url(${bullseye})`}
  return (
    <div className={`ValueCard flex w-[30%] sm:m-[1%] relative`} >
      <img src={arrow} alt="bullseye" className="bg-inherit-50 bg-blend-multiply bg-cover bg-no-repeat md:w-[40%] md:h-[60%] w-[80px] h-[50px] md:absolute bottom-[75%] left-[30%] " />
      <h2 className="card_large_font ">{value.title}</h2>
      <p>{value.copy}</p>
    </div>
  )
}

export default ValueCard