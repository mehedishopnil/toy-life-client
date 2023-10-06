import React from "react";
import bannerImage from '../../../assets/images/banner-background-image.jpeg';

const Banner = () => {
  return (
    <div>
      <section className="relative h-[800px] sm:h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={bannerImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Banner Content */}
      <div className="relative z-10 max-w-screen-lg mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-semibold">Let's your baby learn with <span className="font-bold text-[#e73529]">Toys</span></h1>
        <p className="mt-4 text-lg">Educational toys are more than just playthings; they are powerful tools that ignite a child's curiosity and foster essential skills. These toys, carefully designed to be both fun and instructive, encourage creativity, problem-solving, and cognitive development in children. From building blocks that teach spatial awareness to interactive puzzles that enhance critical thinking, educational toys offer a world of learning disguised as play. Discover the magic of learning through playtime with our educational toy collection.</p>
        <button className="mt-6 bg-[#94c120] hover:bg-[#e73529] text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out">
          Choose Your Toy
        </button>
      </div>
    </section>
    </div>
  );
};

export default Banner;
