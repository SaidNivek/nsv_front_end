import React from 'react'

function Hours({location}) {

  return (

    <div className="w-[11rem] mt-[1rem] md:mt-0 hours gap-[8px]">
        <p className="card_medium_font ">Hours</p>
        <div className="flex gap-[8px]">
            <div>
                <p>Mon:</p>
                <p>Tue:</p>
                <p>Wed:</p>
                <p>Thu:</p>
                <p>Fri:</p>
                <p>Sat:</p>
                <p>Sun:</p>
            </div>
            <div className="">
                <p>{location.mon}</p>
                <p>{location.tue}</p>
                <p>{location.wed}</p>
                <p>{location.thu}</p>
                <p>{location.fri}</p>
                <p>{location.sat}</p>
                <p>{location.sun}</p>
            </div>
        </div>
    </div>
  )
}

export default Hours