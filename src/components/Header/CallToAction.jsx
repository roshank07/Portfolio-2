import React from "react";
import resume from "../../assets/Roshan_resume_feb.pdf";

export default function CallToAction() {
  return (
    <div className="flex justify-center mt-8 text-xs md:text-sm text-gray-500 ">
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="border rounded-sm py-2 px-4 mr-4 hover:bg-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out"
      >
        Resume
      </a>
      <a
        href="#contacts"
        className="border-2 rounded-sm  py-2 px-4 mr-4 bg-blue-300  hover:scale-105 transform transition-all duration-300 ease-in-out"
      >
        Connect
      </a>
    </div>
  );
}
