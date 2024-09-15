import React from 'react';

const Card = ({ icon, title, background, paragraph, titlestyle }) => {
  return (
    <div className='flex flex-col justify-between max-w-[300px] sm:max-w-[350px] md:max-w-[400px] bg-primary-white p-[5px] items-start gap-5 bg-gradient-dark'>
      <div className={`${background} flex flex-col items-start gap-5 justify-center p-6 sm:p-8 md:p-10`}>
        <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-medium'></div>
        <h1 className={`text-xl sm:text-2xl md:text-3xl font-paragraphfont font-bold ${titlestyle}`}>
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-paragraphfont">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
