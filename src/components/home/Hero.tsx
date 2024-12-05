import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-shrine-dark">
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Eucharistic Burnt Forest Shrine"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
          Eucharistic Burnt Forest Shrine
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-8">
          A sacred place of prayer, healing, and divine encounter
        </p>
        <a
          href="/visit"
          className="bg-shrine-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Plan Your Visit
        </a>
      </div>
    </div>
  );
};

export default Hero;