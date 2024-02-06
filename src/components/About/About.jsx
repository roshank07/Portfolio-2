import React from "react";
import Me from "../../assets/portfolio_about.png";
import { FiAward } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h5 className="text-lg text-gray-600 text-center">Get to Know me</h5>
        <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
          About me
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="w-1/2 mb-8 lg:mb-0 relative">
            <img
              src={Me}
              alt="about-me"
              className="rounded-lg shadow-lg object-cover"
              style={{ maxHeight: "400px" }}
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="about__cards mb-8 flex justify-between ml-2 sm:ml-0 font-mono">
              <div className="bg-gray-300 flex items-center pb-3 pl-2 pr-2 border rounded-lg border-black hover:scale-105 hover:bg-white transition duration-300">
                <FiAward className="about__icon text-gray-800 mr-2 text-xl" />
                <div>
                  <h5 className="text-gray-800 font-semibold mt-5 text-xl">
                    Experience
                  </h5>
                  <small className="text-gray-600 text-lg pl-2">2+ Years</small>
                </div>
              </div>
              <div className="bg-gray-300 flex items-center pb-3 pl-4 pr-4 border rounded-lg border-black hover:scale-105 hover:bg-white transition duration-300">
                <GrProjects className="about__icon text-gray-800 mr-2 text-xl" />
                <div>
                  <h5 className="text-gray-800 font-semibold mt-5 text-xl">
                    Projects
                  </h5>
                  <small className="text-gray-600 text-lg pl-2">10+</small>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-6 ml-2 sm:ml-0 font-serif ">
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
            <a href="#contacts" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
