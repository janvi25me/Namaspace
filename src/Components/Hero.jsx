import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-[#f8f6f4] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold text-orange-400 mb-5">
            THE PLATFORM FOR BODY, MIND & SOUL
          </h1>
          <p className="text-gray-600 text-sm">
            Immerse yourself in the spiritual world with Namasacpe — offering diverse events, classes, treats, retreats, coachings and trainings. All carefully chosen and curated to foster holistic well-being. It welcomes all seekers on the path of self-discovery and mindfulness, serving as your nurturing companion and guide.
          </p>
          <div >
          <button className="mt-6 py-3 px-10 bg-orange-400 text-white  text-sm font-medium hover:bg-orange-500">
            See Experiences
          </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className=" flex justify-center items-center">
         <div className=""></div>
          <div className="relative p-2 bg-[rgb(248,246,244)] border border-solid border-[rgb(248,246,244)]">
            <img
            style={{height:'350px', width: '450px'}}
              src="https://namascape.me/_next/static/media/main.ce421255.png"
              alt="Meditating Monk"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
