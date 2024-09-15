import React from 'react'
import CardsView from './CardsView';
import Navbar from './Navbar';
const Header = () => {
  return (
    <section className='flex flex-col justify-between items-center w-full z-10'>
        <Navbar/>
        <header className="min-h-[100vh] w-full flex flex-col justify-evenly items-center text-center px-4">
            <div className="mb-4">
                <button className="bg-gradient-white  text-blue-dark py-2 px-4 border-x-1 border-y-1 shadow-sm shadow-blue-light border-blue-dark rounded-full text-sm tracking-tight">
                    Team Vidyut
                </button>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-white max-w-4xl tracking-tight leading-tight mb-8 font-mainfont">
                Next Gen Job and Internship Platform bridging Gap bet'n  <span className="text-blue-dark">freshers and recruiters</span>
            </h1> 
            <div className="flex justify-center items-center space-x-4 w-full max-w-lg mb-12">
                <input
                type="email"
                placeholder="Your email address"
                className="w-[350px] py-3 px-4 rounded-full text-blue-dark bg-input-bg border-none focus:outline-none"
                />
                <button className="bg-button-bg text-primary-white py-3 w-[250px] px-8 rounded-full hover:bg-gradient-dark transition font-paragraphfont tracking-tight ">
                    Join our Waitlist
                </button>
            </div>
            <div className="flex justify-between align-center w-full">
                <CardsView/>
            </div>
        </header>
    </section>
    
  )
}

export default Header
