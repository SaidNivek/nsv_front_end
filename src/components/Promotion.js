import React, {useEffect, useState} from 'react'
const QUERY = encodeURIComponent('*[_type == "promotions"]')
const URL = `https://${process.env.REACT_APP_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_DATASET}?query=${QUERY}`;


function Promotion() {
  let [promotions, setPromotions] = useState([])

  useEffect(() => {
      getValues()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // This function will fetch the locations that the store is open, and set it to the state variable locations
  function getValues() {
      fetch(URL)
          .then((res) => res.json())
          .then(({ result }) => {
              if(result.length > 0) {
                  setPromotions(result)
              }
          })
          .catch((err) => console.error(err))
  }

  promotions ? console.log("Yes promos") : console.log("No promos")
  return (
  
    <div>Promotion</div>
  )
}

export default Promotion