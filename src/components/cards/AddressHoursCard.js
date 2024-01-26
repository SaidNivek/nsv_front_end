import React, {useState, useEffect} from 'react'
import Hours from '../Home_Components/Hours';
import Address from '../Home_Components/Address';
import BlueRectangle from '../../assets/BlueRectangle';
import { rect_test } from '../../assets';

const QUERY = encodeURIComponent('*[_type == "locations"]')
const URL = `https://${process.env.REACT_APP_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_DATASET}?query=${QUERY}`;


function AddressHoursCard() {
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
    <div className="flex flex-col">
        <div className="text-center relative">
            <h2>Come visit us</h2>
            <img src={rect_test} alt="blue rectangle behind text" className="absolute ml-[50%] -translate-x-[50%] top-[17px]" />
        </div>    
            <div className="flex sm:flex-row flex-col">
            {locations?.map((location, idx) => (
                <div className="AddressHoursCard m-[2%] md:p-[2%] p-[6%]  m-4%flex">
                    <p className="card_large_font">{location.city}, {location.state}</p>
                    <div className="flex md:flex-row flex-col">
                        <Address location={location} />
                        <Hours location={location} />
                    </div>
                </div>
            ))}
            </div>
    </div>

  )
}

export default AddressHoursCard