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
    <div className="flex flex-wrap justify-evenly items-center flex-col min-h-[100vh] bg-gradient-light w-full">
      <h1 className="text-5xl md:text-6xl font-bold text-blue-dark max-w-4xl text-center tracking-tight leading-tight mb-8 font-mainfont">
        Meet Our Team
      </h1>
      <p className="text-center text-xl max-w-[650px] font-paragraphfont">Our team is complete with experience in the industry. We are a set of codi-vated individuals who are no less than Sharma ji ke bete/betiyaan who can code in sleep(ok while being sleepy).</p>
      <div className='flex flex-row justify-center items-center gap-2 '>
        {team.map((teammember) => {
            return (
            <div className='flex flex-col justify-center items-center gap-2  bg-gradient-medium rounded-md p-4 shadow-lg'>
                <div className='w-16 h-16 bg-blue-dark rounded-full text-center font-bold text-primary-white font-mainfont flex flex-col justify-center items-center'>{getInitials(teammember.name)}</div>
                <h2 className='text-2xl font-paragraphfont font-bold text-primary-white'>{teammember.name}</h2>
                <p className='text-md font-paragraphfont'>{teammember.role}</p>
            </div>
            )
        })}
      </div> 
    </div>
  )
}

export default Team