import React from 'react'

function InfoCard({title, copy, tag}) {
  return (
    <>
      <h2>{title ? title : "Generic"}</h2>
      <p>{copy}</p>
      <p><strong>{tag}</strong></p>
      <p>List of Brands / Services</p>
    </>
  )
}

export default InfoCard