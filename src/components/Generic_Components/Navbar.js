import { useState } from "react";
import { close, logo, menu, logo2 } from "../../assets";
import { navLinks } from "../../constants";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar pl-[24px] pr-[24px] md:mb-10 ">
      <img src={logo2} alt="northshorevacuum" className="md:w-[25%]" />
      <div className="list-none sm:flex hidden justify-end item-center flex-1">
        {navLinks.map((nav, index) => (
          <NavLink
            to={`${nav.id}`}
            className={`cursor-pointer text-[16px] text-black hover:underline hover:decoration-[#4FB0E8] hover:decoration-4 
          // This dynamic code will change the margin-right to prevent margin from apperaing on the last item in the array
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            {nav.title}
          </NavLink>
        ))}
      </div>

      {/* This code is for mobile, where the menu icon will show up if toggle is false, and close if toggle is true */}
      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          // This onClick uses a CB function to call setToggle
          // setToggle then uses a CB function using the prev keyword to use the previous state, not the direct state, which React does not like
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-4 absolute top-20 right-0`}
        >
          <ul className="list-none flex items-center justify-between flex-col z-10 small_nav">
            {navLinks.map((nav, index) => (
              <NavLink to={`${nav.id}`}>
                <li
                  key={nav.id}
                  className={`card_medium_font cursor-pointer text-[16px] text-black btn small_nav_link
                    // This dynamic code will change the margin-right to prevent margin from appearing on the last item in the array
                    ${index === navLinks.length - 1 ? "mr-0" : "mb-1"} `}
                >
                  {nav.title}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
