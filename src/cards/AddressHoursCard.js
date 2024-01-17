import React, {useState, useEffect} from 'react'
import Hours from '../components/Hours'
import Address from '../components/Address';

const QUERY = encodeURIComponent('*[_type == "locations"]')
const URL = `https://${process.env.REACT_APP_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_DATASET}?query=${QUERY}`;


function LocationCard() {
    let [locations, setLocations] = useState([])

    useEffect(() => {
        getLocations()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // This function will fetch the locations that the store is open, and set it to the state variable locations
    function getLocations() {
        fetch(URL)
            .then((res) => res.json())
            .then(({ result }) => {
                if(result.length > 0) {
                    setLocations(result)
                }
            })
            .catch((err) => console.error(err))
    }
  return (

        <div className="flex md:flex-row md:w-[550px] flex-col w-310">
        {locations?.map((location) => (
            <div className="AddressHoursCard md:p-[40px] md:m-[60px] p-[24px] m-[30px]">
                <p className="address_card_large_font">{location.city}, {location.state}</p>
                <div className="flex md:flex-row flex-col ">
                    <Address location={location} />
                    <Hours location={location} />
                </div>
            </div>
        ))}
        </div>

  )
}

export default LocationCard