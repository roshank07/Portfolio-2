import React from 'react';
import CallToAction from './CallToAction';
import Me from '../../assets/portfolio_me.png';
import HeaderSocials from './HeaderSocials';

export default function Header() {
  return (
    <header id='home' className='bg-blue-400'>
      <div className='mx-auto px-4 py-5 sm:py-10 flex flex-col items-center'>
        <h2 className='font-semibold text-xl text-center'>Hello I'am</h2>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-center'>Roshan Purbey</h1>
        <h5 className='text-lg mt-2'>Full stack Developer</h5>
        <CallToAction />  
      </div>
        <div className='grid grid-cols-3'>
          <div className="mx-auto my-auto"><HeaderSocials/></div>
          
          <img src={Me} alt='Me' className='w-32 sm:w-48 md:w-64 lg:w-72 rounded-lg mx-auto overflow-hidden mt-4' />
        </div>
    </header>
  );
}
