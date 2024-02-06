import React from "react";
import Me from "../../assets/me-about.jpg";
import { FiAward } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h5 className="text-lg text-gray-600">Get to Know me</h5>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">About me</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
            <img src={Me} alt="about-me" className="rounded-lg shadow-lg object-cover w-full h-full" style={{ maxHeight: '400px' }} />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="about__cards mb-8 flex justify-between">
              <div className="about__card flex items-center">
                <FiAward className="about__icon text-gray-500 mr-2" />
                <div>
                  <h5 className="text-gray-800 font-semibold">Experience</h5>
                  <small className="text-gray-600">2+ Years</small>
                </div>
              </div>
              <div className="about__card flex items-center">
                <GrProjects className="about__icon text-gray-500 mr-2" />
                <div>
                  <h5 className="text-gray-800 font-semibold">Projects</h5>
                  <small className="text-gray-600">10+</small>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, veritatis dicta minus fuga iure voluptas suscipit nisi eveniet! Consequuntur qui ullam voluptates recusandae nostrum, dignissimos explicabo mollitia amet. Debitis, inventore!
            </p>
            <a href="#contacts" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
}
