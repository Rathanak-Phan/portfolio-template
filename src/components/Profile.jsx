import React from 'react';

const Profile = () => {
  return (
    <div className="text-gray-900 dark:text-gray-200 transition-colors duration-300">
      <div className="flex flex-row items-center justify-center">
        <div className="relative">
          {/* Profile Image */}
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocJBdZQY6AdfNoBJPTqvkrVJPK9Cv4zSk-bLijo6OvE7Cfocp96u=s288-c-no"
            alt="Profile"
            className="relative rounded-full shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10"
          />
          
          {/* Spinning Circle with Space */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-b-green-500 animate-[spin_4s_linear_infinite] w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-20 transform scale-110 shadow-[0_0_10px_5px_rgba(138,0,128,0.5)]"></div>

          {/* Leading Point (Dot) */}
          <div className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-30 transform scale-120 -scale-x-120 animate-[spin_5s_linear_infinite]">
            <div className="w-3 h-3 bg-emerald-500 shadow-[10px_10px_35px_rgba(0,0,255,1.0)] hover:shadow-[0_0_30px_rgba(255,0,0,2.5)] rounded-full absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
          </div>
          {/* Leading Point (Dot) */}
          <div className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-30 transform scale-130 -scale-x-130 animate-[spin_3s_linear_infinite]">
            <div className="w-3 h-3 bg-red-500 shadow-[10px_10px_35px_rgba(0,0,255,1.0)] hover:shadow-[0_0_30px_rgba(255,0,0,2.5)] rounded-full absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;