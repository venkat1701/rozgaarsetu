import React from 'react'

const Team = () => {
  const team = [
    {
      name: "Krish Jaiswal",
      role: "Backend Developer"
    },
    {
      name: "Jenish Togadiya",
      role: "Android Developer"
    },
    {
      name: "Asmit Kumar Nayak",
      role: "UI/UX Designer"
    },
    {
      name: "Archisman Midya",
      role: "Android Developer"
    },
    {
      name: "Arnav Gupta",
      role: "Backend Developer"
    },
    {
      name: "Varsha Devaraj",
      role: "Android Developer"
    },
  ]

  const getInitials = (name) => {
    const names = name.split(" ");
    let initials = "";
    for (let i = 0; i < names.length; i++) {
      initials += names[i][0];
    }
    return initials;
  }

  return (
    <div className="flex flex-col justify-evenly items-center min-h-[100vh] bg-gradient-light w-full py-8">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-dark max-w-4xl text-center tracking-tight leading-tight mb-6 md:mb-8 font-mainfont">
        Meet Our Team
      </h1>
      <p className="text-center text-lg sm:text-xl max-w-[650px] font-paragraphfont mb-8 md:mb-12 px-4">
        Our team is complete with experience in the industry. We are a set of codi-vated individuals who are no less than Sharma ji ke bete/betiyaan who can code in their sleep (ok, while being sleepy).
      </p>

      {/* Team Members */}
      <div className="flex flex-wrap justify-center items-center gap-4 px-4">
        {team.map((teammember, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2 bg-gradient-medium rounded-lg p-6 shadow-lg w-[200px] sm:w-[250px] text-center"
          >
            <div className="w-16 h-16 bg-blue-dark rounded-full text-center font-bold text-primary-white font-mainfont flex flex-col justify-center items-center">
              {getInitials(teammember.name)}
            </div>
            <h2 className="text-lg sm:text-xl font-paragraphfont font-bold text-primary-white">
              {teammember.name}
            </h2>
            <p className="text-sm sm:text-md font-paragraphfont text-primary-white">
              {teammember.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
