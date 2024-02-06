import React from 'react';
import { LuGraduationCap } from "react-icons/lu";


export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
          Education
        </h2>
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-10">
          <LuGraduationCap className='text-7xl'/>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Indian Institute of Technology Bhilai</h3>
          <p className="text-gray-600 mb-2 text-xs sm:text-sm">B.Tech in Electrical Engineering</p>
          <p className="text-gray-600 mb-2 text-xs sm:text-sm">8.2/10</p>
          <p className="text-gray-600 mb-2 text-xs sm:text-sm">2017-2021</p>
        </div>
      </div>
    </section>
  );
}
