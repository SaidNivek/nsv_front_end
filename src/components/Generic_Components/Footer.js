import React from 'react'
import { logo, logo2 } from '../../assets'
import { navLinks } from '../../constants'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className='mt-[3.75] md:mt-[2.5rem]'>
        <nav className="flex md:flex-row flex-col justify-between p-10 md:mt-0 mt-[2.5rem] items-center">

                {/* <div className="list-none sm:flex hidden justify-end item-center flex-1">
            {navLinks.map((nav, index) => (
              <NavLink to={`${nav.id}`} className={`cursor-pointer text-[16px] text-black hover:underline hover:decoration-[#4FB0E8] hover:decoration-4 
              // This dynamic code will change the margin-right to prevent margin from apperaing on the last item in the array
              ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}>
                {nav.title}
              </NavLink>
            ))}
          </div> */}
          <img src={logo2} alt="northshorevacuum" className=" md:mt-0 mt-5 w-[40%] " />
          <div className="md:text-right mt-[1rem] md:mt-0">
            <p>240 South Main St, Middleton, MA 01949</p>
            <p>(978) 774-1155</p>
          </div>
        </nav>
      </footer>
  )
}

export default Footer