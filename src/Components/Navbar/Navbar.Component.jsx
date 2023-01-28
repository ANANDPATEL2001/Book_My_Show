import React from 'react';
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";


function NavSm() {
  return (
    <>
      <div
        className='text-white flex items-center justify-between'>
        <div>
          <h3 className='text-xl font-bold'>It All Starts Here!!</h3>
          <span className='text-gray-400 text-xs flex items-center cursor-pointer hover:text-gray-50'>
            Delhi NCR <BiChevronDown />
          </span>
        </div>
        <div className='w-8 h-8'>
          <BiSearch className='w-full h-full' />
        </div>
      </div>
    </>
  )
}

function NavMd() {
  return (
    <>
      <div className='w-10 h-10'>
        <img
          src="https://3.bp.blogspot.com/-V1HtpQUrsKU/VjrmHbGzGXI/AAAAAAAABWw/cZOnt0XqPl4/s1600/Screenshot_2015-11-04-14-38-10-1.png"
          alt="logo"
          className='w-full h-full'
        />
      </div>
      <div
        className='w-full flex items-center mx-2 bg-white px-3 py-1 rounded-md'>
        <BiSearch />
        <input type="search" className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, plays, sports and activities" />
      </div>
    </>
  )
}

function NavLg() {
  return (
    <>
      <div
        className='container mx-auto flex items-center gap-3 px-4 justify-between'>
        <div className='flex items-center w-1/2 gap-3'>
          <div className='w-10 h-10'>
            <img
              src="https://3.bp.blogspot.com/-V1HtpQUrsKU/VjrmHbGzGXI/AAAAAAAABWw/cZOnt0XqPl4/s1600/Screenshot_2015-11-04-14-38-10-1.png"
              alt="logo"
              className='w-full h-full'
            />
          </div>
          <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities" />
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <span className='text-gray-200 text-base flex items-center cursor-pointer hover:text-white'>
            Delhi NCR <BiChevronDown />
          </span>
          <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>
            Sign In
          </button>
          <div className='w-8 h-8 text-white'>
            <BiMenu className='w-full h-full cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  )
}


// This 'Navbar' is for both HomePage & PlayPage i.e. DefaultLayoutHoc 
const Navbar = () => {
  return (
    <>
      <div className='bg-darkBackground-800 px-4 py-3'>
        {/* This Navbar is for Mobile  */}
        <div className='md:hidden'>
          <NavSm />
        </div>

        {/* This Navbar is for Medium/Tab Screen  */}
        <div className='hidden md:flex lg:hidden'>
          <NavMd />
        </div>

        {/* This Navbar is for Large Screen */}
        <div className='hidden md:hidden lg:flex'>
          <NavLg />
        </div>
      </div>

    </>
  )
};

export default Navbar;