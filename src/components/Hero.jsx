import React from "react";
import profilePic from "../assets/2.png";

function Hero() {
  return (
    <div className="container mx-auto w-full h-[400px] m-10 flex items-center justify-between">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center m-5 p-3">
        <h2 className="text-white text-wrap font-lavishly-yours text-5xl">
          I'm Pradeep Kalyan S
        </h2>
        <span className="text-[#A9A9A9] font-courier-prime text-center p-2 m-3 text-wrap">
          Code Pirate | Full-Stack Navigator | AI/ML Explorer | Python Treasure
          Seeker
        </span>
        <button className="text-center font-dancing-script text-2xl bg-blue-400 text-white hover:bg-blue-500 p-3 m-5 rounded-lg ring-1">
          Let's Connect
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center m-5">
        <img
          src={profilePic}
          alt="profile-pic"
          className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-3xl text-red-500"
        />
      </div>
    </div>
  );
}

export default Hero;
