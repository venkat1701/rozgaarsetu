import React from 'react'
import CardsView from './CardsView';
import Navbar from './Navbar';

const Header = () => {
  return (
    <section className='flex flex-col justify-between items-center w-full z-10'>
        <Navbar />
        <header className="min-h-screen w-full flex flex-col justify-evenly items-center text-center px-4 py-8">
            {/* Team Vidyut Button */}
            <div className="mb-4">
                <button className="bg-gradient-white text-blue-dark py-2 px-4 border border-blue-dark shadow-sm shadow-blue-light rounded-full text-xs sm:text-sm tracking-tight">
                    Team Vidyut
                </button>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-white max-w-4xl tracking-tight leading-snug sm:leading-tight mb-8 font-mainfont">
                Next Gen Job and Internship Platform bridging Gap between <span className="text-blue-dark">freshers and recruiters</span>
            </h1> 

            {/* Email Input and Join Waitlist Button */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-lg mb-12">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full sm:w-[300px] lg:w-[350px] py-3 px-4 rounded-full text-blue-dark bg-input-bg border-none focus:outline-none text-sm sm:text-base"
                />
                <button className="bg-button-bg text-primary-white py-3 px-6 sm:px-8 w-full sm:w-[200px] lg:w-[250px] rounded-full hover:bg-gradient-dark transition font-paragraphfont text-sm sm:text-base tracking-tight">
                    Join our Waitlist
                </button>
            </div>

            {/* Cards Section */}
            <div className="flex justify-center items-center w-full">
                <CardsView />
            </div>
        </header>
    </section>
  )
}

export default Header;
