import React from "react";
import { TypeAnimation } from "react-type-animation";
import FadeLeft from "../context/FadeLeftProfile";
import About from "./About";
import Contact from "./Contact";
import SkillsandExpertise from "./SkillsandExpertise";
import Porject from "./Porject";

const Home = () => {
  return (
    <div className="box-border bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300 relative overflow-hidden">
      {/* First Section */}
      <section className="container sm:pt-34 pt-10 md:mb-34  flex md:flex-row flex-col-reverse items-center justify-between gap-5 mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        {/* Colorful Circle Background (Only for the first section) */}
        {/* Light Mode Circles */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-50 blur-3xl animate-spin-slow dark:from-green-800 dark:to-blue-900 dark:opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-40 blur-3xl animate-spin-slow dark:from-purple-800 dark:to-pink-900 dark:opacity-30"></div>

        {/* Left Section */}
        <div className="text-center md:text-left my-16 md:w-3/5">
          <div className="text-3xl sm:text-2xl md:text-4xl font-semibold text-gray-500 dark:text-amber-300">
            Hello, my name is
            <span className="text-green-500 ml-1 text-3xl sm:text-3xl md:text-5xl font-serif inline-block sm:inline">
              (Your Name)
            </span>
          </div>

          <h1 className="my-8 sm:text-4xl text-2xl font-bold">
            Freelencer :{" "}
            <span className="text-green-400 dark:text-green-300 underline decoration-dashed">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "Frontend Developer",
                  1500,
                  "Backend Developer",
                  1500,
                  "Mobile Apps Developer",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            Experienced full-stack developer with 4+ years of expertise in Laravel,
            NestJS, Nuxt.js, Next.js, Android, and some Flutter experience.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start mt-6 gap-4">
            {["React", "JavaScript", "Node.js", "Tailwind CSS", "Bootstrap", "MySQL"].map((tech) => (
              <button
                key={tech}
                className="px-5 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white 
                          font-semibold rounded-full shadow-md bg-white dark:bg-gray-800 
                          hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 
                          focus:ring-blue-400 transition-all duration-300"
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-col md:flex-row gap-10 justify-center sm:justify-start">
            <div className="flex items-center justify-center gap-4">
              <a href="https://github.com" aria-label="Github">
                <i className="fa-brands fa-github text-4xl text-gray-800 dark:text-gray-200 hover:text-gray-600 rounded-full shadow-[0_0_15px_rgba(0,255,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,0,1)] dark:hover:text-gray-400 transition-colors duration-300"></i>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin text-4xl text-gray-800 dark:text-gray-200 hover:text-gray-600 rounded-full shadow-[0_0_15px_rgba(0,255,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,0,1)] dark:hover:text-gray-400 transition-colors duration-300"></i>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="fa-brands fa-facebook text-4xl text-gray-800 dark:text-gray-200 hover:text-gray-600 rounded-full shadow-[0_0_15px_rgba(0,255,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,0,1)] dark:hover:text-gray-400 transition-colors duration-300"></i>
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter text-4xl text-gray-800 dark:text-gray-200 hover:text-gray-600 rounded-full shadow-[0_0_15px_rgba(0,255,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,0,1)] dark:hover:text-gray-400 transition-colors duration-300"></i>
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <i className="fa-brands fa-instagram text-4xl text-gray-800 dark:text-gray-200 hover:text-gray-600 rounded-full shadow-[0_0_15px_rgba(0,255,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,0,1)] dark:hover:text-gray-400 transition-colors duration-300"></i>
              </a>
            </div>
            <button
              className="p-3 px-6 font-semibold rounded-full text-gray-900 bg-green-500 hover:bg-green-600 dark:text-white dark:bg-green-700 dark:hover:bg-green-800 transition duration-200"
              aria-label="Download CV"
            >
              Download CV <i className="fa-solid fa-cloud-arrow-down"></i>
            </button>
          </div>
        </div>

        <FadeLeft />
      </section>

      {/* Second Section */}
      <section className="mx-auto px-0 md:px-12 lg:px-20 relative z-10">
        <SkillsandExpertise />
      </section>

      {/* Third Section */}
      <section className="mx-auto px-0 md:px-12 lg:px-20 relative z-10">
        <Porject />
      </section>

      {/* Fourth Section */}
      <section className="mx-auto px-0 md:px-12 lg:px-20 relative z-10">
        <About />
      </section>

      {/* last section */}
      <section className="mx-auto px-0 md:px-12 lg:px-20 relative z-10">
          <Contact />
      </section>
    </div>
  );
};

export default Home;