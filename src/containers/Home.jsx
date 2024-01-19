import React, {useState, useEffect} from 'react'
import Values from '../components/Home_Components/Values'
import Brands from '../components/Home_Components/Brands'
import AddressHoursCard from '../cards/AddressHoursCard'
import WhyShopWithUs from '../components/Home_Components/WhyShopWithUs'
import Reviews from '../components/Home_Components/Reviews'

function Home() {
  return (
    <>
        <Values />
        <Brands />
        <AddressHoursCard />
        <WhyShopWithUs />
        <Reviews />
    </>
  )
}

export default Home