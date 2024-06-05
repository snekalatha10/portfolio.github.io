"use client";
import React from "react";

const About: React.FC = () => {

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl"> Who am I ?</h1>
        <h4 className="text-white font-semibold text-3xl pt-10"> SNEKALATHA MANI RAJENDHIRAN</h4>

        <p className=" tracking-[0.5em] text-transparent font-light pb-5 pt-5  bg-clip-text bg-gradient-to-r from-teal-700 to-cyan-500 "
           style={{textAlign:"center"}}>
          A true tech enthusiast with a <br /> "LET ME TRY, I CAN MAKE THAT POSSIBLE" <br /> attitude.
        </p>
        <p className="text-gray-300 text-center ">
          Passionate Frontend Developer and SEO enthusiast with a strong foundation in web development and 
          digital marketing. Over the years, I've had the privilege of honing my skills and gaining valuable
          experience through various internships and projects.   </p>
        <p className="text-gray-300 text-center ">A digital polyglot fluent in HTML, CSS, Typescript, React, Next and constantly learning. </p>
        <p className="text-gray-300 text-center ">I am driven by the desire to turn ideas into functional applications, stimulating user experience, pushing the boundaries of human imagination.
        </p>
      </div>
    </section>
  );
};

export default About;
