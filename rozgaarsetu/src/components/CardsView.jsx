import React from 'react'

const CardsView = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full z-10">
        
        {/* Card 1: AI-Driven Interviews */}
        <div className="bg-card-bg border border-card-border rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-light rounded-full flex items-center justify-center mr-2">
              <span className="text-gradient-dark text-sm sm:text-md font-bold">AI</span>
            </div>
            <p className="text-amount-text text-sm sm:text-base">Connecting Graduates</p>
          </div>
          <p className="text-amount-text text-lg sm:text-xl font-bold mb-3">AI-Driven Interviews</p>
          <p className="text-gradient-medium text-xl sm:text-2xl font-bold mb-3">Efficient Job Matching</p>
          <div className="flex items-center text-xs sm:text-sm text-blue-dark space-x-2">
            <p>Instant Job Matches Available</p>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-blue-dark space-x-2 mt-1">
            <p>Real-Time Feedback</p>
          </div>
        </div>

        {/* Card 2: Career Development Resources */}
        <div className="bg-blue-dark border border-card-border rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 flex justify-center items-center flex-col">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-light rounded-full flex items-center justify-center mr-2">
              <span className="text-gradient-dark text-sm sm:text-md font-bold">CG</span>
            </div>
            <p className="text-card-bg text-sm sm:text-base font-paragraphfont">Career Guidance</p>
          </div>
          <p className="text-card-bg text-lg sm:text-xl font-bold mb-3 font-paragraphfont">Career Resources</p>
          <p className="text-blue-light text-xl sm:text-2xl font-bold mb-3">Guidance from Experts</p>
          <div className="flex items-center text-xs sm:text-sm text-blue-light space-x-2">
            <p>Access to Mentorship Programs</p>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-blue-light space-x-2 mt-1">
            <p>Job and Internship Preparation</p>
          </div>
        </div>

        {/* Card 3: Global Job Market Access */}
        <div className="bg-card-bg border border-card-border rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-light rounded-full flex items-center justify-center mr-2">
              <span className="text-gradient-dark text-sm sm:text-md font-bold">GO</span>
            </div>
            <p className="text-amount-text text-sm sm:text-base">Global Opportunities</p>
          </div>
          <p className="text-amount-text text-lg sm:text-2xl font-bold mb-3">Global Job Market Access</p>
          <p className="text-gradient-medium text-xl sm:text-2xl font-bold mb-3">Guidance from Experts</p>
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-gradient-medium">AI Mock Interviews</span>
            <span className="text-amount-text">Project-Based Filtering</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsView;
