import React from "react";

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="flex flex-col md:flex-row items-center bg-rgb(248, 246, 244) p-10"
    >
      {/* Image Section */}
      <div className="md:w-1/2">
        <div
          className="p-4"
          style={
            {
              // backgroundColor: 'rgb(176, 150, 132)',
              // border: '4px solid rgb(248, 246, 244)',
            }
          }
        >
          <img
            src="https://namascape.me/assets/images/about-us-image.webp"
            alt="Yoga Pose"
            className="w-full "
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10 bg-[#f8f6f4] p-8">
        <h2 className="text-orange-400 font-bold text-2xl mb-4">
          WHY CHOOSE US?
        </h2>

        <ul className="text-gray-700 space-y-3 text-sm font-semibold">
          <p className="text-sm ">
            Discover verified Events and authentic Experiences
          </p>
          <li className="flex items-center">
            <span className="text-orange-600 mr-2">🌙</span>
            Boost your mental and general well-being
          </li>
          <li className="flex items-center">
            <span className="text-orange-600 mr-2">🌙</span>
            Cultivate consistency: we nourish your routine
          </li>
          <li className="flex items-center">
            <span className="text-orange-600 mr-2">🌕</span>
            Find your like-minded community
          </li>
          <li className="flex items-center">
            <span className="text-orange-600 mr-2">🌕</span>
            Understand yourself and others better
          </li>

          <li className="flex items-center">
            <span className="text-orange-600 mr-2">🌕</span>
            We prioritize your growth and invest in you
          </li>
          <li className="flex items-center">
            <span className="text-orange-600 mr-2">🌕</span>
            Kickstart new habits and begin your transformative journey
          </li>
          <li className="flex items-center">
            <span className="text-orange-600 mr-2">🌕</span>
            Get out of your comfort zone and unlock your full potential
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experiences;
