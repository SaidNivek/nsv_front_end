import React, {useState, useEffect} from 'react'
import oreck from '../../assets/brandimages'
import miele from '../../assets/brandimages'
import brandImages from '../../assets/brandimages'

function InfoCard({title, copy, tag, products}) {
  let [brands, setBrands] = useState([])

  useEffect(() => {
    setBrands([...new Set(products.map((product) => product.brand))])
  }, [products])
  
  console.log(brands)


  if(brands.length === 0) {
    return <>Loading</>
  }

  return (
    <>
      <h2>{title ? title : "Generic"}</h2>
      <p>{copy}</p>
      <p><strong>{tag}</strong></p>
      <div className="flex justify-evenly">
        {brandImages.map((brand, idx) => (
          <img src={brand.image} alt={brand.name} key={idx} />
        ))}
      </div>
    </>
  )
}

export default InfoCard