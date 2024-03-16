import React from "react";
import { FiAward } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import resume from "../../assets/cv.pdf";

export default function Header() {
  return (
    <header id="home" className="">
      <div className="flex flex-col justify-center mx-auto px-2 mb-8 w-full text-gray-200">
        <h2 className="font-semibold text-xl text-center">Hello I'am</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-center">
          Roshan Purbey
        </h1>
        <h5 className="text-lg mb-4 flex justify-center">
          Full stack Developer
        </h5>
        <div className="flex justify-center mb-4 gap-2">
          <div className="ml-4  pt-2 pb-2">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-sm p-2  hover:bg-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              Resume
            </a>
          </div>
          <div className="pt-2 pb-2">
            <a
              href="#contacts"
              className="border-2 rounded-sm p-2 bg-blue-300  hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              Connect
            </a>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto my-auto"><HeaderSocials/></div> */}
      <div className="flex flex-col justify-center mx-auto px-2 w-full">
        <div className="about__cards mb-4  flex justify-center gap-2 font-mono">
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
        <div className="p-3 mx-auto border border-transparent bg-slate-800 text-gray-200 rounded-lg hover:scale-105 transition-transform-300">
          <div className="text-gray-100 sm:text-sm text-xs flex justify-center mb-4">
            I'm Roshan K Purbey, a graduate of Electrical Engineering from IIT
            Bhilai. My fascination with technology
            <br /> led me to pursue a career in software engineering. With five
            years of programming experience(College+Work),
            <br /> I embarked on a journey with a startup, honing my skills
            across various domains. From optimizing <br /> backend technologies
            like Singlesore and Node.js to delving into DevOps with Kubernetes,
            Docker,
            <br /> Git, and Prometheus, I've embraced every opportunity to
            expand my expertise.
            <br />
            <br />
            Now, I'm eager to transition into full-stack development, leveraging
            my diverse skill set to drive innovation and
            <br /> make a meaningful impact in the tech industry.
          </div>
        </div>
        <a href="#contacts" className="text-green-300 flex justify-center mt-2">
          Let's Talk
        </a>
      </div>
    </header>
  );
}
