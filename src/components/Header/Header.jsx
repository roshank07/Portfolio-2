import React from 'react';
import CallToAction from './CallToAction';
import Me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

export default function Header() {
  return (
    <header id='home' className='bg-gray-800 text-white'>
      <div className='mx-auto px-4 py-5 sm:py-10 mt-5 flex flex-col items-center'>
        <h5 className='text-sm font-semibold text-center'>Hello I'am</h5>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-center'>Roshan K Purbey</h1>
        <h5 className='text-lg mt-2'>Fullstack Developer</h5>
        <CallToAction />
      </div>
        <div className='grid grid-cols-3'>
          <div className="mx-auto my-auto"><HeaderSocials/></div>
          
          <img src={Me} alt='Me' className='w-32 sm:w-48 md:w-64 lg:w-72 rounded-lg mx-auto overflow-hidden mt-4' />
        </div>
    </header>
  );
}
