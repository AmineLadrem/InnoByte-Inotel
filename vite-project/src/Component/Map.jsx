import React from "react";
import Location from "../assets/Location.png";

const Map = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center md:justify-between px-8 py-16 bg-gray-100 w-3/4 mx-auto gap-8 font-poppins
    "
    >
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src={Location}
          alt="building-image"
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left md:pr-16 flex flex-col items-center">
        <p className="text-base font-medium">
          Our prime location ensures easy access to the city's vibrant
          attractions, allowing you to immerse yourself in the essence of
          Algerian culture. Experience the convenience and charm of our
          surroundings, making INOTEL the perfect choice for your stay.
        </p>
        <button class="text-white bg-primary text-xl font-medium font-sans  break-words my-10 py-3 px-5 rounded-xl hover:opacity-80">
          Find Our Location
        </button>
      </div>
    </div>
  );
};

export default Map;
