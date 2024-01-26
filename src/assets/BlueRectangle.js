import React from 'react'

function BlueRectangle({ width, height, viewBox, rect_x, rect_y, rect_width, rect_height }) {
  return (
    <svg   
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg" 
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
  )
}

export default BlueRectangle

