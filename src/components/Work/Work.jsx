import React from "react";
import Me from "../../assets/Work.jpg";

export default function Work() {
  return (
    <section id="work" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h5 className="text-lg text-gray-600">My Professional</h5>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
          Experience
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
            <img
              src={Me}
              alt="about-me"
              className="rounded-lg shadow-lg object-cover w-full h-full"
              style={{ maxHeight: "400px" }}
            />
          </div>
          <div className="px-2">
            <h3 className="text-xl font-semibold mb-2">
              Deeplogic Tech Pvt Ltd, Remote, India
            </h3>
            <p className="text-gray-600 mb-4">
              Software Engineer | June 2021 - Oct 2023
            </p>
            <ul className="list-disc pl-6">
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
                Revamped a customer’s infrastructure with 40 Singlestore
                databases for optimal query performance.
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              Exposure: Node.js, JavaScript, Distributed RDBMS, SQL, Linux,
              Singlestore, MySQL, Kubernetes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
