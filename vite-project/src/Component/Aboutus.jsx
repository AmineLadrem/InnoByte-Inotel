import React from "react";
import building from "../assets/Building.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between px-8 py-16 bg-gray-100 w-3/4 mx-auto font-poppins" >
      <div className="md:w-1/2 text-center md:text-left md:pr-16">
        <h2 className="text-4xl font-semibold mb-4">About Us</h2>
        <hr className="w-32 h-1 my-4 bg-gray-700 border-0 rounded mt-4 mb-10 dark:bg-gray-700"></hr>
        <p className="text-base font-medium">
          Welcome to INOTEL, where modern comfort meets the charm of Algerian
          hospitality. Our hotel is more than just accommodation; it's an
          authentic experience shaped by our commitment to excellence. From our
          inception to now, INOTEL symbolizes warm welcomes, community
          engagement, and sustainable practices. Embark on a journey with us,
          where every stay becomes a celebration of Algerian culture and genuine
          hospitality.
        </p>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-5">
        <img
          src={building}
          alt="building-image"
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default AboutUs;
