import React from 'react'
import { SectionHead } from '../../assets'
import brandImages from '../../assets/brandimages'

function Brands() {
  return (
    <section className="flex flex-col">
      <div className="text-center relative">
          <SectionHead text="Brands We Carry" width="278" height="30" viewBox="0 0 278 30" rect_x="0.472778" rect_y="0.299316" rect_width="277.054" rect_height="28.8819" />
      </div>
      <div className="flex justify-evenly brandLogos flex-col sm:flex-row gap-[16px]">
        {brandImages.map((brand, url, idx) => (
          <a href={brand.url} target="_blank" rel='noreferrer'><img src={brand.image} alt={brand.name} key={idx} /></a>
        ))}
      </div>  
    </section>
  )
}

export default Brands

