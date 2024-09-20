import React, {useState, useEffect} from 'react'
import oreck from '../../assets/brandimages'
import miele from '../../assets/brandimages'
import brandImages from '../../assets/brandimages'

function InfoCard({title, type, copy, tag, products}) {
  let [brands, setBrands] = useState([])

  useEffect(() => {
    setBrands([...new Set(products.map((product) => product.brand))])
  }, [products])

  if(brands?.length === 0) {
    return <>Loading</>
  }

  return (
    <>
      <h2 className='text-[54px]'>{title ? title : "Generic"}</h2>
      <p className='text-[24px]' >{copy}</p>
      <p className="text-[40px]" ><strong>{tag}</strong></p>
      {brands.length === 0 || brands===undefined ? 
        <></> :
        <div className="flex justify-left gap-5">
          {brands?.map((brand, idx) => (
            <p className="InfoCard " >{`${brand.charAt(0).toUpperCase() + brand.slice(1)}`}</p>
            ))}
        </div>
        }
    </>
  )
}

export default InfoCard