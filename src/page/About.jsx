import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container-fluid mx-auto  px-5 md:px-0 py-10 pb-30 text-center text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-5 md:px-20 py-10 pb-34 text-center text-gray-900 dark:text-gray-100">
        {/* About Me Section */}
        <div>
          <h1 className="text-4xl font-bold mb-10 md:mt-30 text-center text-gray-900 dark:text-gray-100">
            About Me
          </h1>
        </div>

        {/* Description and Image Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Description Section */}
          <div className="w-full lg:w-3/4 h-auto text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg p-3 md:p-8 transition-transform transform hover:scale-101 md:hover:scale-102 hover:shadow-2xl duration-300">
            <h2 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Hello, I'm a student<span className="text-blue-800 dark:text-blue-300"> ....</span>
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mt-2">
              University: <span className="text-blue-600 dark:text-blue-300">.................................</span>
            </h3>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mt-2">
              Major: <span className="text-blue-600 dark:text-blue-300">.......................................</span>
            </h3>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mt-2">
              Year: <span className="text-blue-600 dark:text-blue-300">..........</span>
            </h3>
            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed mt-4">
              I am a passionate and dedicated IT engineering student at the .............................., currently in my second year of study. My academic focus includes software development, web technologies, and cybersecurity. I am eager to expand my knowledge in full-stack development, API integration, and web performance optimization.
              {!isExpanded && (
                <span
                  onClick={toggleExpand}
                  className="text-blue-600 dark:text-blue-400 cursor-pointer ml-1"
                >
                  ...Read More
                </span>
              )}
            </p>
            {isExpanded && (
              <div>
                <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed mt-4">
                  Beyond my coursework, I am actively learning programming languages such as Python, Java, and JavaScript, as well as frameworks like Vue.js and React. I am also interested in UI/UX design and ethical hacking. My goal is to develop innovative web applications, enhance security measures, and contribute to the field of technology through research and development.
                  I am always open to new challenges and opportunities to grow my skills in the IT field.
                </p>
                <span
                  onClick={toggleExpand}
                  className="text-blue-600 dark:text-blue-400 cursor-pointer mt-2 inline-block"
                >
                  Show Less
                </span>
              </div>
            )}
            {/* Buttons for CV and Projects */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                className="px-6 py-3 font-semibold rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 dark:hover:bg-opacity-80 transition duration-200"
                aria-label="Download CV"
              >
                Download CV <i className="fa-solid fa-cloud-arrow-down ml-2"></i>
              </button>
              <button
                className="px-6 py-3 font-semibold rounded-full text-blue-600 border border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-800/20 transition duration-200"
                aria-label="View Projects"
              >
                View Projects <i className="fa-solid fa-external-link ml-2"></i>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="hidden lg:block w-1/4 h-108 bg-cover bg-center rounded-xl shadow-lg hover:scale-101 md:hover:scale-102 hover:shadow-2xl transition-shadow duration-300"
            style={{
              backgroundImage: "url('https://cdn.pixabay.com/photo/2024/12/16/16/28/hot-air-balloons-9271140_1280.jpg')",
            }}
          ></div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card Component */}
            {[
              { icon: "fa-code", count: 11, label: "TOTAL PROJECTS", description: "Innovative web solutions crafted" },
              { icon: "fa-award", count: 7, label: "CERTIFICATES", description: "Professional skills validated" },
              { icon: "fa-globe", count: 3, label: "YEARS OF EXPERIENCE", description: "Years of experience in web development" },
              { icon: "fa-heart", count: 10, label: "HAPPY CLIENTS", description: "Satisfied clients worldwide" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl shadow-lg border-2 bg-white dark:bg-gray-900 dark:text-gray-100 hover:scale-101 md:hover:scale-102 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full">
                    <i className={`fa-solid ${item.icon} text-gray-800 dark:text-white text-lg`}></i>
                  </div>
                  <p className="text-5xl font-bold">{item.count}</p>
                </div>
                <p className="text-lg text-left font-semibold mt-4">{item.label}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
                  <i className="fa-solid fa-external-link ml-2 text-gray-600 dark:text-gray-400"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
