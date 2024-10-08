import React from 'react'
import { SectionHead } from '../../assets'
import brandImages from '../../assets/brandimages'

function Brands() {
  return (
    <div className="flex flex-col">
      <div className="text-center relative">
          <SectionHead text="Brands We Carry" width="278" height="30" viewBox="0 0 278 30" rect_x="0.472778" rect_y="0.299316" rect_width="277.054" rect_height="28.8819" />
      </div>
      <div className="flex justify-evenly">
        {brandImages.map((brand, idx) => (
          <img src={brand.image} alt={brand.name} key={idx} />
        ))}
      </div>
      <div>
        
      </div>    
    </div>
  )
}

export default Brands

