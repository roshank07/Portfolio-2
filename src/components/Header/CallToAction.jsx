import React from "react";
import resume from "../../assets/Roshan_resume_feb.pdf";

export default function CallToAction() {
  return (
    <div className="flex justify-center gap-2 mt-4 text-xs md:text-sm text-gray-500 ">
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="border rounded-sm p-2  hover:bg-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out"
      >
        Resume
      </a>
      <a
        href="#contacts"
        className="border-2 rounded-sm p-2 bg-blue-300  hover:scale-105 transform transition-all duration-300 ease-in-out"
      >
        Connect
      </a>
    </div>
  );
}
