import React from "react";
import Project1Image from "../../assets/portfolio1.jpg"; // Import your project images
import Project2Image from "../../assets/portfolio1.jpg"; // Import your project images

export default function Portfolio() {
  return (
    <section className="py-8 bg-indigo-900" id="projects">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-10 sm:p-2">
          {/* Project 1 */}
          <div className="bg-red-500  border border-gray-500 shadow-md  p-6 flex flex-col justify-between hover:scale-105 transition duration-300 hover:bg-gray-100">
            <div className="">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">
                MERN Blog
              </h3>
              <p className="text-sm lg:text-base text-black font-serif mb-2">
              This project embodies a long-standing aspiration of mine—an endeavor through which I aim to impart my insights and experiences to a broader audience. This meticulously crafted responsive website represents the quintessential platform for individuals keen on engaging in daily blogging endeavors.
              </p>
            </div>
            <div className="flex justify-between text-sm font-mono">
              <a
                href="https://github.com/roshank07/My_blog_website-MERN"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub Repo
              </a>
              <a
                href="https://roshan-blog.onrender.com/"
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
                Interest Calculator
              </h3>
              <p className="text-sm lg:text-base text-black font-serif mb-2">
              The Interest Calculator web app revolutionizes financial planning with its user-friendly interface and precise calculations. Seamlessly combining React and Node.js, it simplifies interest rate computations for investments, loans, and savings. Empowering users with efficiency and accuracy, it's the ultimate tool for informed financial decision-making.
              </p>
            </div>
            <div className="flex justify-between text-sm font-mono">
              <a
                href="https://github.com/roshank07/Interest-calculator-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub Repo
              </a>
              <a
                href="https://roshan-interest-calculator.netlify.app/"
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
          <div className="bg-blue-500 border border-gray-500 shadow-md  p-6 flex flex-col justify-between hover:scale-105 transition duration-300 hover:bg-gray-100">
            <div className="">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">
                Interest Calculator
              </h3>
              <p className="text-sm lg:text-base text-black font-serif mb-2">
              The Interest Calculator web app revolutionizes financial planning with its user-friendly interface and precise calculations. Seamlessly combining React and Node.js, it simplifies interest rate computations for investments, loans, and savings. Empowering users with efficiency and accuracy, it's the ultimate tool for informed financial decision-making.
              </p>
            </div>
            <div className="flex justify-between text-sm font-mono">
              <a
                href="https://github.com/roshank07/Interest-calculator-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub Repo
              </a>
              <a
                href="https://roshan-interest-calculator.netlify.app/"
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
