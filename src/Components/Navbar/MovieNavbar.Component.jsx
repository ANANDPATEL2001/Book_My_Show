import React, { useContext } from 'react';
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";

import { MovieContext } from '../../context/Movie.Context';

const NavSm = () => {
  const { movie } = useContext(MovieContext);

  return (
    <>
      <div className='text-gray-700 flex items-center justify-between'>
        <div><h3 className='text-xl font-bold'>{movie.original_title}</h3></div>
        <div className='w-8 h-8'>
          <BiShareAlt className='w-full h-full' />
        </div>
      </div>
    </>
  )
}

const NavLg = () => {
  return (
    <>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        <div className='flex items-center w-1/2 gap-3'>
          <div className='w-10 h-10'>
            <img src="https://3.bp.blogspot.com/-V1HtpQUrsKU/VjrmHbGzGXI/AAAAAAAABWw/cZOnt0XqPl4/s1600/Screenshot_2015-11-04-14-38-10-1.png" alt="logo"
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
            Bangalore, KA <BiChevronDown />
          </span>
          <button className='bg-red-600 text-white px-2 py-1 text-sm rounded-md'>Sign In</button>
          <div className='w-8 h-8 text-white'>
            <BiMenu className='w-full h-full' />
          </div>
        </div>
      </div>
    </>
  )
}

const MovieNavbar = () => {
  return (
    <>
      <div className='bg-white border-b-2 lg:bg-darkBackground-700 p-4'>
         {/* This Navbar is for Mobile and Medium screen */}
         <div className='md:hidden'>
          <NavSm />
        </div>

        {/* This Navbar is for Large Screen */}
        <div className='hidden w-full lg:flex'>
          <NavLg />
        </div>
      </div>
    </>
  )
}

export default MovieNavbar