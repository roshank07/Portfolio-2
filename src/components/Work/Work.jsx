import React from "react";
import Me from "../../assets/Work.jpg";

export default function Work() {
  return (
    <section id="work" className="py-16 ">
      <div className="container mx-auto">
        <h5 className="text-lg text-white text-center">My Professional</h5>
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
          Experience
        </h2>
        <div className="gap-4 p-10 sm:p-2">
          <div className="px-2 border bg-slate-800 text-gray-200 rounded-lg hover:scale-105 transition-transform-300">
            <h3 className="text-xl font-semibold mb-2 mt-3">
              Deeplogic Tech Pvt Ltd, Remote, India
            </h3>
            <p className="text-gray-400 mb-4 text-xs">
              June 2021 - Oct 2023
            </p>
            <ul className="list-disc pl-6 ">
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
            <p className="text-gray-400 mt-4 font-mono mb-3">
              Exposure: Node.js, JavaScript, Distributed RDBMS, SQL, Linux,
              Singlestore, MySQL, Kubernetes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
