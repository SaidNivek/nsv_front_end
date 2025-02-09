import React from 'react'
import { SectionHead, oldStorePic, insideStore } from '../../assets'


function WhyShopWithUs() {
  return (
  <section className="flex flex-col md:mb-[16px] mr-[2%]">
    <div className="text-center relative">
        <SectionHead text="Why Shop With Us?" width="296" height="30" viewBox="0 0 296 30" rect_x="0.293579" rect_y="0.299316" rect_width="295.413" rect_height="28.8819" />
    </div>
    <div className="flex flex-col md:flex-row justify-evenly mt-[16px]">
      <div className="flex flex-col align-center mb-5 whyShopWithUs">
        <p>Shopping with our local, family-owned vacuum sales and service store is not just a transaction; it's an investment in quality, expertise, and a sense of community.</p>
        <br /> 
        <p>Since 1934, we've been committed to offering top-notch sales and service for residential, commercial, and central vacuums. When you choose us, you're not just a customer; you're a valued member of our extended family.</p>
        <br />
        <p>Our team of experts knows vacuums inside and out, ensuring that you receive personalized recommendations and unmatched service. By supporting us, you're also supporting your local community and helping to preserve a legacy of trust and reliability that spans generations.</p>
        <br />
        <p>Choose local, choose family, and choose quality – choose North Shore Vacuum for all your vacuum needs.</p>
      </div>
      <div className="w-[90%] relative hidden sm:block">
        <div className="ml-[8%]">          
          <img src={oldStorePic} alt="old vacuum store" className="absolute md:w-[45%] w-[30%] left-[35%] "/>
          <img src={insideStore} alt="inside new vacuum store" className="absolute top-[75px] left-[55%] md:w-[45%] w-[30%]" />
        </div>
      </div>
      <div className="block sm:hidden mb-[-9%] xs:mb-[-14%]">
        <div className="relative ">
          <img src={oldStorePic} alt="old vacuum store" className="absolute w-[30%] left-[30%] xs:w-[25%]"/>
          <img src={insideStore} alt="inside new vacuum store" className="absolute w-[30%] mt-[10%] left-[50%] xs:w-[25%] " />
        </div>
      </div>
    </div>    
  </section>
  )
}

export default WhyShopWithUs