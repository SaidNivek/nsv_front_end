import React, {useState, useEffect} from 'react'
import Values from '../components/Values'
import Brands from '../components/Brands'
import AddressHoursCard from '../cards/AddressHoursCard'

function Home() {
  return (
    <>
        <Values />
        <Brands />
        <AddressHoursCard />
    </>
  )
}

export default Home