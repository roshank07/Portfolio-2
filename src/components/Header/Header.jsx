import React from 'react';
import CallToAction from './CallToAction';
import Me from '../../assets/portfolio_me.png';
import HeaderSocials from './HeaderSocials';
import { FiAward } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";

export default function Header() {
  return (
    <header id='home' className=''>
      <div className='mx-auto px-4 py-5 sm:py-10 flex flex-col items-center text-white'>
        <h2 className='font-semibold text-xl text-center'>Hello I'am</h2>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-center'>Roshan Purbey</h1>
        <h5 className='text-lg mt-2'>Full stack Developer</h5>
        <CallToAction />  
      </div>
          <div className="mx-auto my-auto"><HeaderSocials/></div>
          <div className='flex justify-center'>
          <div className="w-1/2 lg:pl-8">
            <div className="about__cards mb-8 flex justify-between ml-2 sm:ml-0 font-mono">
              <div className="bg-slate-800 flex items-center pb-3 pl-2 pr-2 border rounded-lg border-gray hover:scale-105 transition duration-300">
                <FiAward className="about__icon text-gray-200 mr-2 text-xl" />
                <div>
                  <h5 className="text-gray-200 font-semibold mt-5 pr-1 text-xl">
                    Experience
                  </h5>
                  <small className="text-gray-400 text-lg pl-2">2+ Years</small>
                </div>
              </div>
              <div className="bg-slate-800 flex items-center pb-3 pl-4 pr-4 border rounded-lg border-gray hover:scale-105 transition duration-300">
                <GrProjects className="about__icon text-gray-200 mr-2 text-xl" />
                <div>
                  <h5 className="text-gray-200 font-semibold mt-5 text-xl">
                    Projects
                  </h5>
                  <small className="text-gray-400 text-lg pl-2">10+</small>
                </div>
              </div>
            </div>
            <p className="text-gray-100 mb-6 ml-2 sm:ml-0 sm:text-sm text-xs">
              I'm Roshan K Purbey, a graduate of Electrical Engineering from IIT
              Bhilai. My fascination with technology led me to pursue a career
              in software engineering. With five years of programming
              experience(College+Work), I embarked on a journey with a startup, honing my
              skills across various domains. From optimizing backend
              technologies like Singlesore and Node.js to delving into DevOps
              with Kubernetes, Docker, Git, and Prometheus, I've embraced every
              opportunity to expand my expertise. 
              <br/>
              Now, I'm eager to transition into full-stack development, leveraging my diverse skill set to
              drive innovation and make a meaningful impact in the tech
              industry.
            </p>
            <a href="#contacts" className="text-green-300">
              Let's Talk
            </a>
      
      </div>
      </div>
    </header>
  );
}
