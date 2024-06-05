"use client";

import React, { useState, useEffect } from 'react';

type PhraseWithColor = {
  phrase: string;
  gradient: string;
};

const phrasesWithColors: PhraseWithColor[] = [
  { phrase: "Vanakkam !", gradient: "bg-gradient-to-r from-teal-600 to-cyan-200" },
  { phrase: "Namastee !", gradient: "bg-gradient-to-r from-cyan-500 to-purple-500" },
  { phrase: "Good to See You !", gradient: "bg-gradient-to-r from-teal-600 to-cyan-200" },
];


const Banner: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrasesWithColors.length);
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-7xl font-semibold text-white animate-bounce">Hey, Hello! 👋🏼</h1>
      <h2 className={`text-6xl font-semibold bg-clip-text text-transparent ${phrasesWithColors[index].gradient} transition-all duration-1000`}>
        {phrasesWithColors[index].phrase}
      </h2>
      <p className="mt-4 text-2xl font-medium text-gray-300">
      <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600">
        Welcome to my hub, where you can visualize everything.
      </span>
      </p>
      <p className="my-5 text-gray-200">
        Come get a sense of my balance between
        <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600"> precision, innovation & creativity.</span>
      </p>
      <div
        className="mx-auto mt-4 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border border-white hover:border-transparent transition-colors duration-300"
      >
        Let&#39;s discuss the fantastic ideas to make them into reality!
      </div>
    </div>
  );
};

export default Banner;

