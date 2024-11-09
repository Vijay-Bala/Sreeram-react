import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import WhyTrustUs from "./WhytrustUs.jsx";
import ProductRange from "./productRange.jsx";
import ReviewsSection from "./reviews.jsx";
import ClientsMarqueeSection from "./Marquee.jsx";
import Services from "../services/Services.jsx";

const Home = () => {

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');  
  };
  
  return (
    <>
      {/* Top Banner Section */}
      <section className="TopBanner relative h-screen text-white flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-68"
          style={{ backgroundImage: "url('/bg1.jpg')" }}>
        </div>
        <div className="absolute inset-0 bg-black opacity-40 z-5"></div>

        <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl mb-4 text-center z-10 drop-shadow-lg [text-shadow:3.5px_4.5px_3px_var(--tw-shadow-color)] shadow-black">
          Driving Your Business Forward with Quality Auto Parts
        </h1>
        <p className="font-roboto text-base md:text-lg lg:text-xl mb-6 text-center z-10 drop-shadow-lg [text-shadow:1px_2px_2px_var(--tw-shadow-color)] shadow-black">
          Trusted Since 1971 | Your One-Stop Solution for Automobile Parts
        </p>

        <div className="absolute bottom-8 inset-x-0 flex justify-center space-x-4 z-20">
          <button  onClick={handleContactClick} className="explore border border-white text-white font-roboto py-2 px-4 md:py-2 md:px-6 rounded-md hover:bg-gray-100 hover:text-steel-blue transition duration-300 drop-shadow-lg [text-shadow:1px_1px_5.6px_var(--tw-shadow-color)] shadow-black">
            Contact Us
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about_us h-[30vh] md:h-[35vh] text-white flex flex-col justify-center items-center">
        <h2
          className="font-oswald text-3xl md:text-4xl lg:text-5xl mb-4 text-center [text-shadow:1px_2px_4px_var(--tw-shadow-color)] shadow-black text-transparent bg-cover bg-center bg-clip-text"
          style={{ backgroundImage: "url('/I.jpg')" }}
        >
          Over 50 Years of Excellence
        </h2>
        <p className="font-roboto text-sm md:text-lg lg:text-xl text-center text-slate-900">
          Customer Satisfaction, Quality Assurance, and Long-term Relationships
        </p>
      </section>

      {/* Product Range Section */}
      <ProductRange className="my-8 mx-auto max-w-screen-lg px-4 md:px-6 lg:px-8" />

      {/* Why Trust Us & Reviews Section */}
      <section className="trust_us py-1">
        <WhyTrustUs />
        <ReviewsSection />
      </section>

      <Services/>

      <ClientsMarqueeSection/>
    </>
  );
};

export default Home;
