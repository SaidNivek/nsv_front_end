import React from 'react'
import InfoCard from '../components/cards/InfoCard'

function Services() {
  return (
    <div>
      <h2>Services</h2>
      <p>Services Nav</p>
      <br />
      <InfoCard title="Repairs" type="" copy="This is the copy for the repairs section." tag="Services We Offer" products={[]} />
      {/* <InfoCard title="Central Vacuum Install" copy="This is the copy for the central vacuum install section." tag="Services We Offer" />
      <InfoCard title="Central Vacuum Repair" copy="This is the copy for the central vacuum repair section." tag="Services We Offer" /> */}
      {/* <p>Repairs header</p>
      <p>Repairs Copy</p>
      <p>Services List</p>
      <br />
      <p>Central Vacuum Install header</p>
      <p>Central Vacuum Install Copy</p>
      <p>Services List</p>
      <br />
      <p>Central Vacuum Repair header</p>
      <p>Central Vacuum Repair Copy</p>
      <p>Services List</p>
      <br /> */}
    </div>
  )
}

export default Services