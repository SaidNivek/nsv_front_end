import React, {useState, useEffect} from 'react'
import Hours from '../Home_Components/Hours';
import Address from '../Home_Components/Address';
import SectionHead from '../SectionHead';
import { mapPlaceholder, insideStore } from '../../assets'
import CustomMap from '../Home_Components/CustomMap';
import { APIProvider } from "@vis.gl/react-google-maps";


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
            <SectionHead text="Come visit us" width="226" height="30" viewBox="0 0 226 30" rect_x="0.480225" rect_y="0.299316" rect_width="225.04" rect_height="28.8819" />
        </div>    
        <div className="flex flex-row mt-2 justify-evenly m-auto">
            {locations?.map((location, idx) => (                
                <div className="AddressHoursCard m-[2%] p-5 flex md:flex-row flex-col justify-evenly" key={idx}>
                    <div >
                        <p className="card_large_font">{location.city}, {location.state}</p>
                        <div className="flex md:flex-row flex-col">
                            <Address location={location} />
                            <Hours location={location} />
                        </div>
                    </div>
                    {/* Can comment this back in to use the Google Map API */}
                    {/* <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                        <CustomMap />
                    </APIProvider> */}
                </div>
                ))}

            </div>
    </div>

  )
}

export default AddressHoursCard