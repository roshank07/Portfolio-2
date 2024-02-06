import React from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    <div className="social-icons flex flex-col items-start mt-4 gap-2">
      <a href='https://www.linkedin.com/in/roshan-purbey-824783168/' target='_blank' rel="noreferrer" className="text-gray-500 hover:text-blue-500 mb-2 text-lg"><BsLinkedin/></a>
      <a href='https://github.com/roshank07' target='_blank' rel="noreferrer" className="text-gray-500 hover:text-blue-500 text-lg"><BsGithub/></a>
    </div>
  );
}
