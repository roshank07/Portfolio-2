import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
          Education
        </h2>
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Indian Institute of Technology Bhilai</h3>
          <p className="text-gray-600 mb-2">B.Tech in Electrical Engineering</p>
          <p className="text-gray-600 mb-2">8.2/10</p>
          <p className="text-gray-600 mb-2">2017-2021</p>
        </div>
      </div>
    </section>
  );
}
