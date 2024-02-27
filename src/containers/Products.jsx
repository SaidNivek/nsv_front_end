import React from 'react'
import InfoCard from '../components/cards/InfoCard'
import brands from '../assets/brands'

function Products() {
  return (
    <>
      <h2>Our Products</h2>
      <p>Product Nav - Residential Central Vacuum Commercial</p>
      <p>Details and image</p>
      <br />
      <InfoCard title="Residential" copy="This is the copy for the residential section." />
      <InfoCard title="Central Vacuum" copy="This is the copy for the central vacuum section." tag="Brands We Carry" />
      <InfoCard title="Commercial" copy="This is the copy for the commercial section." />

      {/* <p>Residential Heading</p>
      <p>Residential Copy</p>
      <p>Brands We Carry</p>
      <p>Brand Logos</p>
      <br />
      <p>Central Vacuum Heading</p>
      <p>Central Vacuum Copy</p>
      <p>Brands We Carry</p>
      <p>Brand Logos</p>
      <br />
      <p>Commercial Heading</p>
      <p>Commercial Copy</p>
      <p>Brands We Carry</p>
      <p>Brand Logos</p> */}
    </>
  )
}

export default Products