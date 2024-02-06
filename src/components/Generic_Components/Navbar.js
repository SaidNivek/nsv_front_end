import { useState } from "react"
import { close, logo, menu } from '../../assets'
import { navLinks } from '../../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar pr-10">
      <img src={logo} alt="northshorevacuum" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end item-center flex-1" >
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id}
            className={`cursor-pointer text-[16px] text-black hover:underline hover:decoration-[#4FB0E8] hover:decoration-4 
              // This dynamic code will change the margin-right to prevent margin from apperaing on the last item in the array
              ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* This code is for mobile, where the menu icon will show up if toggle is false, and close if toggle is true */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu} 
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            // This onClick uses a CB function to call setToggle
            // setToggle then uses a CB function using the prev keyword to use the previous state, not the direct state, which React does not like
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-center flex-1 flex-col" >
              {navLinks.map((nav, index) => (
                <li 
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-black 
                    // This dynamic code will change the margin-right to prevent margin from apperaing on the last item in the array
                    ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'}`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>

    </nav>
  )
}

export default Navbar