import React, {useState, useEffect} from 'react'
import Values from '../components/Home_Components/Values'
import Brands from '../components/Home_Components/Brands'
import AddressHoursCard from '../components/cards/AddressHoursCard'
import WhyShopWithUs from '../components/Home_Components/WhyShopWithUs'
import Reviews from '../components/Home_Components/Reviews'

function Home() {
  return (
    <div className="flex flex-col">
        <Values />
        <Brands />
        <AddressHoursCard />
        <WhyShopWithUs />
        <Reviews />
    </div>
  )
}

export default Home