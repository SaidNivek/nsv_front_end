import React from 'react'
import { SectionHead, oldStorePic, insideStore } from '../../assets'


function WhyShopWithUs() {
  return (
    <div className="flex flex-col">
    <div className="text-center relative">
        <SectionHead text="Why shop with us?" width="296" height="30" viewBox="0 0 296 30" rect_x="0.293579" rect_y="0.299316" rect_width="295.413" rect_height="28.8819" />
    </div>
    <div className="flex">
      <div className="flex flex-col w-[50%] ">
        <p>Shopping with our local, family-owned vacuum sales and service store is not just a transaction; it's an investment in quality, expertise, and a sense of community.</p>
        <br /> 
        <p>Since 1934, we've been committed to offering top-notch sales and service for residential, commercial, and central vacuums. When you choose us, you're not just a customer; you're a valued member of our extended family.</p>
        <br />
        <p>Our team of experts knows vacuums inside and out, ensuring that you receive personalized recommendations and unmatched service. By supporting us, you're also supporting your local community and helping to preserve a legacy of trust and reliability that spans generations.</p>
        <br />
        <p>Choose local, choose family, and choose quality – choose North Shore Vacuum for all your vacuum needs.</p>
      </div>
      <div>
        <img src={oldStorePic} alt="old vacuum store" />
        <img src={insideStore} alt="inside new vacuum store" />
      </div>
    </div>    
  </div>
  )
}

export default WhyShopWithUs