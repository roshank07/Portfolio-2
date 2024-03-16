import React from "react";
import Project1Image from "../../assets/portfolio1.jpg"; // Import your project images
import Project2Image from "../../assets/portfolio1.jpg"; // Import your project images

export default function Portfolio() {
  return (
    <section className="py-8 " id="projects">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-10 sm:p-2">
          {/* Project 1 */}
          <div className="bg-slate-800  border border-violet shadow-md  p-6 flex flex-col justify-between hover:scale-105 transition duration-300">
            <div className="">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-200 mb-1 lg:mb-2">
                Blog App
              </h3>
              <p className="text-sm lg:text-base text-gray-400 mb-2">
                This project embodies a long-standing aspiration of mine—an
                endeavor through which I aim to impart my insights and
                experiences to a broader audience. This meticulously crafted
                responsive website represents the quintessential platform for
                individuals keen on engaging in daily blogging endeavors.
              </p>
            </div>
            <div className="flex justify-between text-sm font-mono text-gray-300">
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
          <div className="bg-slate-800 border border-violet shadow-md  p-6 flex flex-col justify-between hover:scale-105 transition duration-300 ">
            <div className="">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-200 mb-1 lg:mb-2">
                Chat App
              </h3>
              <p className="text-sm lg:text-base text-gray-400  mb-2">
                Created a MERN stack chat app for seamless integration into web
                platforms. This solution facilitates instant communication
                between business admins and customers, enhancing support and
                engagement. With user authentication and real-time features like
                typing indicators, it offers a versatile platform for businesses
                to interact with their audience in real time, driving improved
                customer satisfaction and loyalty.
              </p>
            </div>
            <div className="flex justify-between text-sm font-mono text-gray-300">
              <a
                href="https://github.com/roshank07/Chat_App"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub Repo
              </a>
              <a
                href="https://chat-app-d5qw.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-slate-800 border border-violet shadow-md  p-6 flex flex-col justify-between hover:scale-105 transition duration-300 ">
            <div className="">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-200 mb-1 lg:mb-2">
                Interest Calculator
              </h3>
              <p className="text-sm lg:text-base text-gray-400  mb-2">
                The Interest Calculator web app revolutionizes financial
                planning with its user-friendly interface and precise
                calculations. Seamlessly combining React and Node.js, it
                simplifies interest rate computations for investments, loans,
                and savings. Empowering users with efficiency and accuracy, it's
                the ultimate tool for informed financial decision-making.
              </p>
            </div>
            <div className="flex justify-between text-sm font-mono text-gray-300">
              <a
                href="https://github.com/roshank07/MERN-Interest-App"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub Repo
              </a>
              <a
                href="https://interest-app.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
          {/* Project 4 */}
          <div className="bg-slate-800 border border-violet shadow-md  p-6 flex flex-col justify-between hover:scale-105 transition duration-300 ">
            <div className="">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-200 mb-1 lg:mb-2">
                Shopping App
              </h3>
              <p className="text-sm lg:text-base text-gray-400  mb-2">
                Discover My Shopping App, your go-to app for seamless online
                shopping. Register, sign in securely, and explore a wide range
                of products. With integrated Razorpay API, transactions are fast
                and secure. When you're done, sign out effortlessly. Elevate
                your shopping experience with Very Shopping. Download now and
                shop with ease!
              </p>
            </div>
            <div className="flex justify-between text-sm font-mono text-gray-300">
              <a
                href="https://github.com/roshank07/Shopping_App"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub Repo
              </a>
              <a
                href="https://shopping-app-g3ow.onrender.com"
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
