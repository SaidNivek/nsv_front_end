import React, { useState, useEffect } from 'react'
import { SectionHead } from '../../assets'
import ReviewCard from '../cards/ReviewCard';
const QUERY = encodeURIComponent('*[_type == "reviews"]')
const URL = `https://${process.env.REACT_APP_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_DATASET}?query=${QUERY}`;


function Reviews() {
  let [reviews, setReviews] = useState([])

    useEffect(() => {
        getReviews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // This function will fetch the locations that the store is open, and set it to the state variable locations
    function getReviews() {
        fetch(URL)
            .then((res) => res.json())
            .then(({ result }) => {
                if(result.length > 0) {
                    setReviews(result)

                }
            })
            .catch((err) => console.error(err))
    }

  return (
    <div className="">
      <div className="text-center relative">
        <SectionHead text="What our customers are saying" width="464" height="30" viewBox="0 0 464 30" rect_x="0.151611" rect_y="0.299316" rect_width="463.697" rect_height="28.8819" />
        <div className="flex md:flex-row flex-col gap-2 justify-center items-center items-stretch">            
          {reviews?.map((review, id) => (
            <ReviewCard review={review} />
          ))}
        </div>
    </div>    
  </div>
  )
}

export default Reviews

