import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { FreeMode, Autoplay } from 'swiper/modules';

const SkillsandExpertise = () => {
  const skillsData = [
    { icon: 'fas fa-laptop-code', title: 'Frontend Development', skills: ['React', 'Vue.js', 'JavaScript', 'HTML5', 'CSS3'] },
    { icon: 'fas fa-database', title: 'Cloud Services', skills: ['AWS', 'Google Cloud', 'Docker'] },
    { icon: 'fas fa-server', title: 'Backend Development', skills: ['Node.js', 'Python', 'MongoDB', 'SQL'] },
    { icon: 'fas fa-cogs', title: 'UI/UX Design', skills: ['Figma', 'Adobe XD', 'User Research'] },
    { icon: 'fas fa-chart-line', title: 'Data Science', skills: ['Python', 'Machine Learning', 'Data Analysis'] },
    { icon: 'fas fa-shield-alt', title: 'Cybersecurity', skills: ['Ethical Hacking', 'Network Security', 'Cryptography'] },
  ];

  return (
    <div className='container-fluid mx-auto px-5 md:px-0 py-10 pb-30 text-center text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900'>
      <div className='container mx-auto px-5 py-10 text-center text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900'>
        <h2 className='text-3xl font-bold mb-10'>Skills & Expertise</h2>

        {/* Swiper Auto Scroll */}
        <Swiper
          slidesPerView={3} // Show 3 slides at a time
          spaceBetween={20}
          freeMode={true}
          autoplay={{
            delay: 0, // No delay between transitions
            disableOnInteraction: false, // Keep autoplay after user interaction
            pauseOnMouseEnter: true, // Pause autoplay on hover
          }}
          speed={1500} // Smooth transition speed
          loop={true} // Infinite scroll
          grabCursor={true} // Show grab cursor on hover
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {skillsData.map((section, index) => (
            <SwiperSlide key={index}>
              <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer'>
                <i className={`${section.icon} text-4xl mb-4 text-gray-500 dark:text-gray-400`}></i>
                <h3 className='text-xl font-semibold mb-4'>{section.title}</h3>
                <ul className='text-gray-700 dark:text-gray-300'>
                  {section.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SkillsandExpertise;