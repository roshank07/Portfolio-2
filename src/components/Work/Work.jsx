import React from "react";
import Me from "../../assets/Work.jpg";

export default function Work() {
  return (
    <section id="work" className="py-16 bg-indigo-900">
      <div className="container mx-auto">
        <h5 className="text-lg text-gray-600 text-center">My Professional</h5>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center">
          Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10 sm:p-2">
        <div className="border border-gray-100 shadow-md  p-6 flex flex-col justify-between hover:border-gray-400">
            <img
              src={Me}
              alt="about-me"
              className="rounded-lg shadow-lg object-cover w-full h-full"
              style={{ maxHeight: "400px" }}
            />
          </div>
          <div className="px-2 border border-blue-500  rounded-lg hover:scale-105 transition-transform-300">
            <h3 className="text-xl font-semibold mb-2">
              Deeplogic Tech Pvt Ltd, Remote, India
            </h3>
            <p className="text-gray-600 mb-4">
              June 2021 - Oct 2023
            </p>
            <ul className="list-disc pl-6 font-serif">
              <li>
                Developed an in-house tool using Node.js for real-time
                monitoring of database servers.
              </li>
              <li>
                Led enhancements in a Node.js-based internal employee hours
                logging application with advanced logics.
              </li>
              <li>
                Collaborated with client development teams to optimize queries,
                reducing API latency from 10 mins to 2 mins.
              </li>
              <li>
                Revamped a customer's infrastructure with 40 Singlestore
                databases for optimal query performance.
              </li>
            </ul>
            <p className="text-gray-600 mt-4 font-mono">
              Exposure: Node.js, JavaScript, Distributed RDBMS, SQL, Linux,
              Singlestore, MySQL, Kubernetes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
