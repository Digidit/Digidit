import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  // Detect when the section is in viewport
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensures animation runs every time it enters viewport
    threshold: 0.5, // Triggers when 50% of the section is visible
  });

  console.log("Stats section is in view:", inView); // Debugging log

  return (
    <section ref={ref} className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Clients */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {inView ? <CountUp start={0} end={35} duration={2} /> : "0"}+
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Worked With</p>
          </div>
          {/* Views Increased */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {inView ? <CountUp start={0} end={3} duration={3} separator="," /> : "0"}+
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Experience</p>
          </div>
          {/* Projects */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {inView ? <CountUp start={0} end={50} duration={2.5} /> : "0"}+
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Projects Completed</p>
          </div>
          {/* Edited Videos */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {inView ? <CountUp start={0} end={500} duration={3} /> : "0"}+
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Videos Edited</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
