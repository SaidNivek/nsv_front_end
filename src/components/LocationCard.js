import React, {useState, useEffect} from 'react'
import Hours from './Hours'

const QUERY = encodeURIComponent('*[_type == "locations"]')
const URL = `https://${process.env.REACT_APP_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_DATASET}?query=${QUERY}`;


function LocationCard() {
    let [locations, setLocations] = useState([])

    useEffect(() => {
        getLocations()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // This function will fetch the hours that the store is open, and set it to the state variable hours
    function getLocations() {
        fetch(URL)
            .then((res) => res.json())
            .then(({ result }) => {
                if(result.length > 0) {
                    setLocations(result)
                }
                console.log(locations)
            })
            .catch((err) => console.error(err))
    }
  return (
    <>
        {locations?.map((location) => (
            <p>{location.city}</p>
        ))}
        <Hours />
    </>
  )
}

export default LocationCard