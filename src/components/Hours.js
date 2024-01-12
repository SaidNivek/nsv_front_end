import React, {useState, useEffect} from 'react'
const QUERY = encodeURIComponent('*[_type == "hours"]')
const URL = `https://${process.env.REACT_APP_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_DATASET}?query=${QUERY}`;



console.log(URL)

function Hours({location}) {
    let [hours, setHours] = useState(null)

    useEffect(() => {
        getHours()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // This function will fetch the hours that the store is open, and set it to the state variable hours
    function getHours() {
        fetch(URL)
            .then((res) => res.json())
            .then(({ result }) => {
                if(result.length > 0) {
                    setHours(result)
                }
                console.log(hours)
            })
            .catch((err) => console.error(err))
    } 

  return (
    <>
    <div>
        <p><strong>Hours</strong></p>
        <p>Mon:</p>
        <p>Tue:</p>
        <p>Wed:</p>
        <p>Thu:</p>
        <p>Fri:</p>
        <p>Sat:</p>
        <p>Sun:</p>
    </div>
    <div>
        <p>{location.mon}</p>
        <p>{location.tue}</p>
        <p>{location.wed}</p>
        <p>{location.thu}</p>
        <p>{location.fri}</p>
        <p>{location.sat}</p>
        <p>{location.sun}</p>
    </div>
    </>
  )
}

export default Hours