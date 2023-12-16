import React from "react";
import chamberImg from "../assets/chamber.png";
import seaImg from "../assets/sea.png";
import eatImg from "../assets/eat.png";
import img1 from "../assets/Blog_2.png"
import img2 from "../assets/Blog_4.png"
import img3 from "../assets/Blog_5.png"

const Blogsection = () => {
  return (
    <div className="pt-40 flex flex-col px-44 my-9">
      <div className="self-start text-4xl flex flex-col justify-start text-start font-semibold font-poppins">
        <span>Our Services: </span>
        <span>Popular Ameneties</span>{" "}
        <hr class="w-32 h-1 my-4 bg-gray-100 border-0 rounded  mt-4 dark:bg-gray-700 "></hr>
      </div>

      <div class="flex justify-center items-center gap-9">
        <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg ">
          <img src={img1} alt="img1"/>
        </div>
        <div class="max-w-sm overflow-hidden shadow-lg rounded-3xl">
          <img src={img2} alt="img2"/>
        </div>
        <div class="max-w-sm overflow-hidden shadow-lg rounded-3xl">
          <img src={img3} alt="img3"/>
        </div>
      </div>
      <button className="rounded-full bg-slate-600 w-[120px] mx-auto px-4 py-3 text-white mt-9 font-semibold ">
        View All
      </button>
    </div>
  );
};

export default Blogsection;
