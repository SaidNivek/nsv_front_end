import React from 'react'

function ProductsServices() {
  return (
    <div className='m-[1rem] sub-div flex flex-col md:m-auto m-1[rem]'>

        <div className="promo-banner">
            <h3>FREE Shipping on orders over $59</h3>
            <p>Some restrictions apply</p>
        </div>

        <h1>We carry a full line of products & services</h1>

        {/* 
        <div className="flex flex-col sm:flex-row sm:justify-between mt-[1rem]">
            <button className='btn-link sm:w-[31%]'>Central Vacuums & Services</button>
            <button className='btn-link sm:w-[31%]'>Residential Vacuums & Services</button>
            <button className='btn-link sm:w-[31%]'>Commercial Vacuums & Services</button>
        </div>
        */}

        <div>
            <h3>Products we carry</h3>
            <ul className="list-inside ml-[1rem]">
                <li>Commercial and residential vacuums</li>
                <li>Bags</li>
                <li>Filters</li>
                <li>Accessories</li>
                <li>Hoses</li>
                <li>Motors</li>
                <li>Hard-to-find parts</li>
                <li>Central vacuum systems</li>
            </ul>
        </div>

        <div className='mt-[2rem]'>
            <h3>Services we offer</h3>
            <ul className="list-inside ml-[1rem]">
                <li>Central vacuum installation & repair</li>
                <li>Residential & commercial vacuum repair</li>
            </ul>
        </div>

        <h4 className='mt-[2rem]'><strong>Call us today for a quote!</strong></h4>
        <p>(978) 774-1155​</p>
    </div>
  )
}

export default ProductsServices