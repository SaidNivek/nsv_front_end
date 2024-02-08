import React from 'react'

function SectionHead({ text, width, height, viewBox, rect_x, rect_y, rect_width, rect_height, classes }) {

  return (
    <div className="md:pt-0 pt-2">
        <h2 className="md:text-[32px] text-[24px]">{text}</h2>

        <svg   
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute ml-[50%] -translate-x-[50%] top-[17px] md:w-[100%]`} 
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

