import React from 'react'
import CallToAction from './CallToAction'
import Me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

export default function Header() {
  return (
    <header id='home'>
        <div className='container header__container'>
            <h5>Hello I'am</h5>
            <h1>Roshan K Purbey</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <CallToAction/>
            <HeaderSocials/>
            <div className='me'>
                <img src={Me} alt='Me' />
            </div>
            <a href='#contacts' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}
