import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-28 px-6" id="AboutMe" >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-64 h-64 rounded-full overflow-hidden shadow-lg"
        >
          <motion.img 
            src="/suraj.jpg" 
            alt="Your Name" 
            className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        {/* About Me Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left max-w-2xl"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-yellow-500 dark:text-yellow-300">Me</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I started as a <b>freelance video editor</b>, continuously improving my craft through self-learning.  
            Over the past three years, I have edited more than <b>300 videos</b>, working with creators like 
            <span className="text-yellow-600 dark:text-yellow-400"> AI Ankit, Gen She Pod, Sushasan, Tigp, The Bookholics</span>, and many others.
          </p>

          {/* Quick Facts */}
          <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start">
            {[
              // { number: "500+", text: "Videos Edited" },
              // { number: "3+ Years", text: "Experience" },
              
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-yellow-100 dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md text-center"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{item.number}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
