import React from 'react'
import { logo } from '../../assets'
import { navLinks } from '../../constants'

function Footer() {
  return (
    <footer className="flex md:flex-row-reverse flex-col justify-between p-10 md:mt-0 mt-10">
      <div className="flex flex-col md:flex-row">
        {navLinks?.map((nav, index) => (
          <a key={nav.id}
          className={`cursor-pointer text-[16px] text-black underline hover:decoration-[#4FB0E8] hover:decoration-2
          // This dynamic code will change the margin-right to prevent margin from appearing on the last item in the array
          ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}          
          href={`#${nav.id}`}>
                {nav.title}
          </a>
        ))}
      </div>
      <img src={logo} alt="northshorevacuum" className="md:w-[10%] md:mt-0 mt-5 w-[60%] " />
    </footer>
  )
}

export default Footer