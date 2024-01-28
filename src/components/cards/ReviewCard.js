import React from 'react'

function ReviewCard({review}) {
  return (
    <div className={`ValueCard md:w-[30%] w-[70%] sm:m-[1%] relative md:mt-8 mt-5`} >        
        <p>{review.text}</p>
    </div>
  )
}

export default ReviewCard