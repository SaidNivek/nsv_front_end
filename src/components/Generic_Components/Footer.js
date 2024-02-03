import React from 'react'
import { logo } from '../../assets'
import { navLinks } from '../../constants'

function Footer() {
  return (
    <footer className="flex justify-between p-10">
      <img src={logo} alt="northshorevacuum" className="w-[124px] h-[32px]" />
      <div>
        {navLinks?.map((nav, index) => (
          <a key={nav.id}
          className={`cursor-pointer text-[16px] text-black 
          // This dynamic code will change the margin-right to prevent margin from apperaing on the last item in the array
          ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}          
          href={`#${nav.id}`}>
                {nav.title}
              </a>
          ))}
        </div>
    </footer>
  )
}

export default Footer