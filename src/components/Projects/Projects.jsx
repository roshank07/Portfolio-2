import React from "react";
import Project1Image from "../../assets/portfolio1.jpg"; // Import your project images
import Project2Image from "../../assets/portfolio1.jpg"; // Import your project images

export default function Portfolio() {
  return (
    <section className="py-8 bg-gray-100" id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-10 sm:p-2">
          {/* Project 1 */}
          <div className="bg-red-500  border border-gray-500 shadow-md  p-6 flex flex-col justify-between hover:scale-105 transition duration-300 hover:bg-gray-100">
            <div className="">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">
                Project 1
              </h3>
              <p className="text-sm lg:text-base text-gray-600 mb-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat odit hic optio iure minus! A beatae dolor cumque aliquam laborum perferendis, iste officia cum, voluptatem deserunt totam molestias tempore neque.
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <a
                href="https://github.com/yourusername/interest-calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub Repo
              </a>
              <a
                href="https://interest-calculator-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-green-500 border border-gray-500 shadow-md  p-6 flex flex-col justify-between hover:scale-105 transition duration-300 hover:bg-gray-100">
            <div className="">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">
                Project 1
              </h3>
              <p className="text-sm lg:text-base text-gray-600 mb-2">
                Short description of Project 1
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <a
                href="https://github.com/yourusername/interest-calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub Repo
              </a>
              <a
                href="https://interest-calculator-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-yellow-500  border border-gray-500 shadow-md  p-6 flex flex-col justify-between hover:scale-105 transition duration-300 hover:bg-gray-100">
            <div className="">
             
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">
                Project 1
              </h3>
              <p className="text-sm lg:text-base text-gray-600 mb-2">
                Short description of Project 1
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <a
                href="https://github.com/yourusername/interest-calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub Repo
              </a>
              <a
                href="https://interest-calculator-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
          {/* Project 4 */}
          <div className="bg-blue-500  border border-gray-500 shadow-md  p-6 flex flex-col justify-between hover:scale-105 transition duration-300 hover:bg-gray-100">
            <div className="">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">
                Project 1
              </h3>
              <p className="text-sm lg:text-base text-gray-600 mb-2">
                Short description of Project 1
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <a
                href="https://github.com/yourusername/interest-calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub Repo
              </a>
              <a
                href="https://interest-calculator-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
