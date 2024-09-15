import React from 'react';
import Card from './Card';
import { FaBriefcase, FaUserTie, FaBuilding } from 'react-icons/fa';

const WhatWeBring = () => {
  return (
    <div className='flex bg-gradient-light w-full flex-col justify-evenly items-center min-h-[100vh] py-8'>
      {/* Header Section */}
      <div className='flex flex-col justify-between items-center mb-12 px-4'>
        <div className="mb-4">
          <button className="bg-gradient-white text-blue-dark py-2 px-4 border border-blue-dark shadow-sm shadow-blue-light rounded-full text-xs sm:text-sm tracking-tight">
            Team Vidyut
          </button>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-white max-w-4xl text-center tracking-tight leading-snug sm:leading-tight mb-8 font-mainfont">
          Get the Most Powerful and <span className="text-blue-dark">Easy to Use</span> Payment Software
        </h1>
      </div>

      {/* Cards Section */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-4 w-full px-4'>
        <Card
          icon={FaBriefcase}
          title="Private Sector"
          background="white"
          paragraph="Unlock career opportunities with AI-driven job matching. Get access to private sector roles tailored to your skills and aspirations."
        />
        <Card
          icon={FaUserTie}
          title="Government"
          background="bg-blue-dark text-primary-white"
          titlestyle="text-blue-light"
          paragraph="Explore internships and job listings in the public sector, with personalized career guidance and mentorship from industry professionals."
        />
        <Card
          icon={FaBuilding}
          title="International"
          background="white"
          paragraph="Expand your horizons with global career opportunities. Our platform connects you with international internships and jobs, making your transition smooth and seamless."
        />
      </div>
    </div>
  );
};

export default WhatWeBring;
