import React from "react";
const Testimonials = () => {
  return (
    <>
      <section className="p-10">
        <h2 className="text-orange-400 text-2xl font-bold mb-10">
          TESTIMONIALS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Testimonial */}
          <div className="relative flex flex-col items-center text-center text-gray-400 bg-[#f8f6f4]">
            <div className="w-28 h-28 mb-6 absolute top-0 transform -translate-y-4  rounded-full p-2">
              <img
                className="rounded-full w-full h-full  object-cover border-4 border-gray-200"
                src="https://namascape.me/assets/images/testomonial-user-1.png"
                alt="Testimonial 1"
              />
            </div>
            <div className="mt-20 p-6 rounded-lg">
              <p className="text-sm">
                <i className="fa-solid fa-quote-left mr-3 text-#b09684"></i>
                Namascape has become my primary platform whenever I find myself
                stuck in the monotonous cycle of my daily routine. It has been
                helping me to get out of my head into my body. Exploring three
                different events through Namascape has proven to be a series of
                transformative experiences, each offering a unique and enriching
                journey in itself.
                <i className="fa-solid fa-quote-right ml-3 text-#b09684"></i>
              </p>
              <h3 className="text-lg font-bold mt-2 text-#b09684">Anna W.</h3>
            </div>
          </div>

          {/* Right Testimonial */}
          <div className="relative flex flex-col items-center text-center text-gray-400 bg-[#f8f6f4]">
            <div className="w-28 h-28 mb-6 absolute top-0 transform -translate-y-4  rounded-full p-2">
              <img
                className="rounded-full w-full h-full object-cover border-4 border-gray-200"
                src="https://namascape.me/assets/images/testimonial3.png"
                alt="Testimonial 2"
              />
            </div>
            <div className="mt-20 p-6 rounded-lg">
              <p className="text-sm">
                <i className="fa-solid fa-quote-left mr-3"></i>
                Namascape has simplified my journey into mindfulness. The
                user-friendly platform and diverse events consistently inspire
                me to explore new classes. It's a great platform for discovering
                new experiences and connecting with like-minded individuals. I
                can only recommend it to anyone looking for a place to harmonize
                body, mind, and soul.
                <i className="fa-solid fa-quote-right ml-3"></i>
              </p>
              <h3 className="text-lg font-bold mt-2">John M.</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
