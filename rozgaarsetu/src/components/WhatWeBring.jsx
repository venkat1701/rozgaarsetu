import React from 'react';
import { Box, Text, Heading, SimpleGrid, VStack, HStack, Container, Button } from '@chakra-ui/react';
import Card from './Card';
import { FaBriefcase, FaUserTie, FaBuilding } from 'react-icons/fa';

const WhatWeBring = () => {
  return (
    <div className='flex bg-gradient-light w-full flex-col justify-evenly items-center min-h-[100vh]'>
        <div className='flex flex-col justify-between items-center'>
            <div className="mb-4">
                <button className="bg-gradient-white  text-blue-dark py-2 px-4 border-x-1 border-y-1 shadow-sm shadow-blue-light border-blue-dark rounded-full text-sm tracking-tight">
                    Team Vidyut
                </button>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-white max-w-4xl text-center tracking-tight leading-tight mb-8 font-mainfont">
                Get the Most Powerful and  <span className="text-blue-dark">Easy to Use</span> Payment Software
            </h1>
        </div>
        <div className='flex flex-row justify-center items-center gap-2'>
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