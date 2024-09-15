import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full p-8 flex-col lg:flex-row md:flex-row gap-5 flex justify-between items-center'>
        <div>
            <h2 className="text-4xl font-mainfont font-thin text-primary-white tracking-tight">Rozgaar Setu</h2>
        </div>
        <div className=''>
            <button className='hidden lg:flex md:flex bg-button-bg text-primary-white px-6 py-2 rounded-lg hover:bg-gradient-dark transition duration-300 ease-in-out text-xl tracking-tighter'>
                Download Our App
            </button>
        </div>
    </div>
  )
}

export default Navbar
