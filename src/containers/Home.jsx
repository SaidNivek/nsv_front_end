import React, {useState, useEffect} from 'react'
import Values from '../components/Values'
import AddressHoursCard from '../cards/AddressHoursCard'

function Home() {
  return (
    <>
        <Values />
        <AddressHoursCard />
    </>
  )
}

export default Home