import React, {useState, useEffect}  from 'react'
import InfoCard from '../components/cards/InfoCard'

const QUERY = encodeURIComponent('*[_type == "product"]')
const URL = `https://${process.env.REACT_APP_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_DATASET}?query=${QUERY}`;
function Products() {

  let [products, setProducts] = useState([])
  let [residentials, setResidentials] = useState([])
  let [centralVacuums, setCentralVacuums] = useState([])
  let [commercials, setCommercials] = useState([])
  let [others, setOthers] = useState([])
  
  console.log(others)

    useEffect(() => {
        getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
      setCommercials(products?.filter((product) => product.productType === "commercial"))
      setResidentials(products?.filter((product) => product.productType === "residential"))
      setCentralVacuums(products?.filter((product) => product.productType === "centralVacuum"))
      setOthers(products?.filter((product) => product.productType === "other"))
    }, products)

    // This function will fetch the locations that the store is open, and set it to the state variable locations
    function getProducts() {
        fetch(URL)
            .then((res) => res.json())
            .then(({ result }) => {
                if(result.length > 0) {
                    setProducts(result)
                }
                console.log(products)
            })
            .then((products) => {

            })
            .catch((err) => console.error(err))
    }

  return (
    <>
      <h2 className='text-[60px]'>Our Products</h2>
      <p>Product Nav - Residential Central Vacuum Commercial</p>
      <p>Details and image</p>
      <br />
      <InfoCard title="Residential" type="residential"copy="This is the copy for the residential section." tag="Brands We Carry" products={residentials}/>
      <InfoCard title="Central Vacuum" type="centralVacuum" copy="This is the copy for the central vacuum section." tag="Brands We Carry" products={centralVacuums} />
      <InfoCard title="Commercial" type="commercial" copy="This is the copy for the commercial section." tag="Brands We Carry" products={commercials} />
      <InfoCard title="Other" type="other" copy="This is the copy for the  section." tag="Brands We Carry" products={others}/>

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