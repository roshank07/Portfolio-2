import React from "react";
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiGooglecloud,
  SiReact,
  SiExpress,
  SiKubernetes,
  SiDocker,
  SiGithub,
  SiGit,
  SiPrometheus,
  SiSinglestore
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";


export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
          My Skills
        </h2>
        <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-black">
        <div className="bg-indigo-400 shadow-lg rounded-lg p-6 flex items-center hover:scale-105 transition duration-300">
        <div className="font-mono">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Language
              </h3>
              <p>
                <SiCplusplus className="text-red-500  w-6 h-6 mr-2 inline-block" />
                C++
              </p>
              <p>
                <SiJavascript className="text-yellow-500 w-6 h-6 mr-2 inline-block" />
                JavaScript
              </p>
              <p>
                <SiPython className="text-blue-500 w-6 h-6 mr-2 inline-block" />
                Python
              </p>
              <p>
                <SiHtml5 className="text-red-500 w-6 h-6 mr-2 inline-block" />
                HTML
              </p>
              <p>
                <SiCss3 className="text-blue-500 w-6 h-6 mr-2 inline-block" />
                CSS
              </p>
              <p>
                <BsFiletypeSql className="text-blue-500 w-6 h-6 mr-2 inline-block" />
                SQL
              </p>
        </div>
        </div>
          {/* Frameworks/Libraries */}
          <div className="bg-indigo-400 shadow-lg rounded-lg p-6 flex items-center hover:scale-105 transition duration-300">
            <div className="font-mono">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Frameworks/Libraries
              </h3>
              <p>
                <SiReact className="text-blue-500 w-6 h-6 mr-2 inline-block" />
                React.js
              </p>
              <p>
                <SiExpress className="text-blue-500 w-6 h-6 mr-2 inline-block" />
                Express.js
              </p>
              <p><DiNodejs className="text-green-500 w-6 h-6 mr-2 inline-block"/>Node.js</p>
            </div>
          </div>
          {/* Databases/Cloud */}
          <div className="bg-indigo-400 shadow-lg rounded-lg p-6 flex items-center hover:scale-105 transition duration-300">
            <div className="font-mono">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Databases/Cloud
              </h3>
              <p>
                <SiMysql className="text-blue-500 w-6 h-6 mr-2 inline-block" />
                MySQL
              </p>
              <p>
                <SiMongodb className="text-green-500 w-6 h-6 mr-2 inline-block" />
                MongoDB
              </p>
              <p>
                <SiGooglecloud className="text-blue-500 w-6 h-6 mr-2 inline-block" />
                Google Cloud Platform
              </p>
              <p>
                <SiSinglestore className="text-purple-500 w-6 h-6 mr-2 inline-block" />
                Singlestore
              </p>
            </div>
          </div>
          {/* Devops */}
          <div className="bg-indigo-400 shadow-lg rounded-lg p-6 flex items-center hover:scale-105 transition duration-300">
            <div className="font-mono">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Devops
              </h3>
              <p><SiKubernetes className="text-blue-500 w-6 h-6 mr-2 inline-block" />Kubernetes</p>
              <p>
                <SiDocker className="text-blue-500 w-6 h-6 mr-2 inline-block" />
                Docker
              </p>
              <p>
                <SiGit className="text-red-500 w-6 h-6 mr-2 inline-block" />
                Git
              </p>
              <p>
                <SiGithub className="text-gray-500 w-6 h-6 mr-2 inline-block" />
                Github
              </p>
              <p>
                <SiPrometheus className="text-red-500 w-6 h-6 mr-2 inline-block" />
                Prometheus
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
