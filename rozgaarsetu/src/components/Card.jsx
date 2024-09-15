import React from 'react';

const Card = ({ icon, title, background, paragraph, titlestyle }) => {
  return (
    <div className='flex flex-col justify-between max-w-[400px] bg-primary-white p-[5px] items-start gap-5 bg-gradient-dark '>
        <div className={`${background} flex flex-col items-start gap-5 justify-center p-8`}>
            <div className='w-10 h-10 rounded-full bg-gradient-medium'></div>
            <h1 className={`text-2xl font-paragraphfont font-bold ${titlestyle}`}>{title}</h1>
            <p className="text-lg font-paragraphfont">{paragraph}</p>
        </div>
    </div>
  );
};

export default Card;