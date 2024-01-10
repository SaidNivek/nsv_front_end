import React from 'react'

// , {useState, useEffect}

const QUERY = encodeURIComponent('*[_type == "hours"]')

const URL = `https://${process.env.REACT_APP_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_DATASET}?query=${QUERY}`;

console.log(URL)

fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
        if(result.length > 0) {
            console.log(result)
        }
    })
    .catch((err) => console.error(err))

function Hours() {



  return (
    <div>Hours</div>
  )
}

export default Hours