import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="p-10 bg-[#f8f6f4]" id='#aboutus'>
        <div className="flex items-center group hover:bg-[rgb(176,150,132)] hover:text-white transition-colors duration-300 gap-6">
          <div className="flex flex-col w-1/3 p-6">
            <h2 className="text-orange-400 text-2xl group-hover:text-white">
              WANT TO BECOME A PARTNER?
            </h2>
            <p className="mt-2 text-sm group-hover:text-white">
              Let us handle the details so you can focus on creating
              unforgettable experiences. Join Namascape and enjoy the benefits
              of:
            </p>
            <ul className="pl-5 space-y-2 group-hover:text-white">
              <li className="flex items-center">
                <i className="fa-regular fa-circle-check mr-2"></i>Attract the
                right audience
              </li>
              <li className="flex items-center">
                <i className="fa-regular fa-circle-check mr-2"></i>Streamlined
                ticket sales for your event/offering
              </li>
              <li className="flex items-center">
                <i className="fa-regular fa-circle-check mr-2"></i>Free Social
                Media & Google Ads Marketing
              </li>
              <li className="flex items-center">
                <i className="fa-regular fa-circle-check mr-2"></i>Seamless
                self-check-in via QR-Code in App
              </li>
            </ul>
          </div>

          <div className="flex justify-center w-1/3">
            <img
              src="https://namascape.me/assets/images/even-organizer-image.webp"
              alt="organizer-image"
              className="w-full max-w-sm"
            />
          </div>

          <div className="flex justify-center w-1/3">
            <button className="bg-orange-400 text-white px-6 py-3 hover:bg-orange-500 transition duration-300">
              Join us today!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
