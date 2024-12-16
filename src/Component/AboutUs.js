import React from "react";
import Logo from "../logo.webp";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#D5E7E0]">
      <div className=" max-w-lg w-full px-6 py-8 bg-white rounded-md shadow-lg m-20 text-sm">
        <h1 className="text-3xl font-bold text-[#184548] mb-4 flex justify-center text-cinter">
          About Us
        </h1>
        <img src={Logo} alt="Tridish Logo" className="h-300 w-500 mb-4" />
        <p className="max-w-2xl text-[#184548] text-justify px-4 mb-6">
          Welcome to Tridish! We are dedicated to bringing you the finest
          culinary experiences from around the globe. Our passion for food
          drives us to source the freshest ingredients and craft dishes that
          celebrate the rich flavors and traditions of various cultures.
        </p>
        <p className="max-w-2xl text-[#184548] text-justify px-4 mb-6">
          At Tridish, we believe that every meal should be an adventure. Our
          team of skilled chefs combines creativity and expertise to create a
          menu that delights the senses and leaves a lasting impression. Whether
          you’re dining in or ordering for delivery, we guarantee that every
          bite will be a memorable one.
        </p>
        <p className="max-w-2xl text-[#184548] text-justify px-4 mb-6">
          Join us on this delicious journey! We are committed to sustainability
          and supporting local farmers. Together, let’s explore the world of
          flavors and indulge in the ultimate dining experience.
        </p>
        <p className="text-[#184548] text-justify px-4">
          Thank you for choosing Tridish - where every dish tells a story!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
