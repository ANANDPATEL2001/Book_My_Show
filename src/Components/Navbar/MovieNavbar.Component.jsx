import React, { useContext } from 'react';
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";

import { MovieContext } from '../../context/Movie.Context';

const NavSm = () => {
  const { movie } = useContext(MovieContext);

  return (
    <>
      <div className='text-gray-700 flex items-center justify-between'>
        <div className='text-xl font-bold'>{movie.original_title}</div>
      </div>
      <div className='w-8 h-8'>
        <BiShareAlt className='w-full h-full' />
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
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

const MovieNavbar = () => {
  const { movie } = useContext(MovieContext);

  return (
    <>
      <div className='text-gray-700 flex items-center justify-between'>
        <div className='text-xl font-bold'>{movie.original_title}</div>
      </div>
    </>
  )
}

export default MovieNavbar