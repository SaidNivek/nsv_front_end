import React from 'react'

function SectionHead({ text, width, height, viewBox, rect_x, rect_y, rect_width, rect_height }) {

  return (
    <div>
        <h2>{text}</h2>

        <svg   
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute ml-[50%] -translate-x-[50%] top-[17px]" 
            >
            <rect
                opacity="0.3"
                x={rect_x}
                y={rect_y}
                width={rect_width}
                height={rect_height}
                fill="#4FB0E8"
                />
        </svg>
    </div>
  )
}

export default SectionHead

