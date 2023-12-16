import React from "react";
import NavBar from "./Navbar";
import img from "../assets/pic2.png";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  const fixedNavbarStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
  };

  return (
    <div
      className="bg-url justify-center text-black flex-col items-start bg-red-500 font-poppins"
      style={backgroundImageStyle}
    >
      <NavBar style={fixedNavbarStyle} />
      <div className="flex justify-center items-center w-3/4 text-white mx-auto mt-32 flex-col">
        <h1 className="text-5xl font-bold">A Great Hotel Is The</h1>
        <h1 className="text-5xl font-bold">Place Where You Belong</h1>
        <p className="text-lg mt-5 font-medium">Discover The Perfect Place For Getaways!</p>
      </div>
      <div className="rounded-3xl flex w-5/6 justify-center mt-[100px] px-[70px] py-[50px] bg-white mx-auto gap-8 items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="gap-8 flex items-start">
          <div className="flex flex-col justify-start">
            <label
              htmlFor="Guests"
              className="text-xl font-semibold self-start"
            >
              Guests
            </label>
            <input
            placeholder="Add Guests"
              type="text"
              className="h-[55px] w-[230px] border border-solid border-red-400 mt-3 px-4 rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-start ">
            <label
              htmlFor="Guests"
              className="text-xl font-semibold self-start"
            >
              Check In
            </label>
            <input
              placeholder="Add Dates"
              type="date"
              className="h-[55px] w-[230px] border border-solid border-red-400 mt-3 px-4 rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-start">
            <label
              htmlFor="Guests"
              className="text-xl font-semibold self-start"
            >
              Check Out
            </label>
            <input
              placeholder="Add Dates"
              type="date"
              className="h-[55px] w-[230px] border border-solid border-red-400 mt-3 px-4 rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <label className="text-white">test</label>
          <button className="bg-primary h-[55px] w-[230px] border border-solid border-red-400 mt-3  rounded-xl text-lg text-white flex items-center justify-center hover:opacity-80 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            Check Availability
          </button>
        </div>  
      </div>
    </div>
  );
};

export default Hero;
