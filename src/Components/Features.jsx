import React from "react";
import "../App.css";

const Features = () => {
  return (
    <section id ='features' className="items-center p-12">

      {/* features section */}
      <div className="text-orange-400 text-2xl font-bold mb-5">
        MAIN FEATURES
      </div>
      <div className="grid gap-6 sm:grid-cols-3 text-center p-7">
    
        {/* first */}
        <div className="feature-item group border border-orange-100 p-5 relative overflow-hidden">
          <h3 className="text-xl font-semibold text-orange-400 mb-5  transition-colors duration-300">
            Experiences
          </h3>
          <p className="text-sm text-gray-400 transition-transform duration-300 group-hover:translate-y-0 max-h-[60px] overflow-hidden group-hover:max-h-[200px]">
            Find your next magical event, retreat, treat or gathering in your
            city and indulge in wonderful new experiences. Everything is
            available for you to soothe your body, mind, and soul. Book with one
            click your ticket and let your horizon be expanded.
          </p>
          <img
            src="https://namascape.me/assets/images/home-screen-image.webp"
            alt="first"
            className="transition-transform duration-300 transform group-hover:translate-y-4"
          />
        </div>

        {/* second */}
        <div className="feature-item group border border-orange-100 p-5 relative overflow-hidden">
          <h3 className="text-xl font-semibold text-orange-400 mb-5 transition-colors duration-300">
            Community
          </h3>
          <p className="text-sm text-gray-400 transition-transform duration-300 group-hover:translate-y-0 max-h-[60px] overflow-hidden group-hover:max-h-[200px]">
            Connect with a like-minded community. This platform is all about
            fostering a community and connecting like-minded people with each
            other. Before booking an Experience, you have the option to view the
            list of attendees and decide whether to book anonymously. If you
            choose to be visible, other attendees can connect with you.
          </p>
          <img
            src="https://namascape.me/assets/images/organizer-screen-image.webp"
            alt="second"
            className="transition-transform duration-300 transform group-hover:translate-y-4"
          />
        </div>

        {/* third */}
        <div className="feature-item group border border-orange-100 p-5 relative overflow-hidden">
          <h3 className="text-xl font-semibold text-orange-400 mb-5 transition-colors duration-300">
            E-ticket
          </h3>
          <p className="text-sm text-gray-400 transition-transform duration-300 group-hover:translate-y-0 max-h-[60px] overflow-hidden group-hover:max-h-[200px]">
            Show your QR code confirmation in the app to ensure a seamless
            check-in. Everything you need is right at your fingertips. Our goal
            is to provide you with a hassle-free process so you can focus on the
            experience.
          </p>
          <img
            src="https://namascape.me/assets/images/e-ticket-screen-image.webp"
            alt="third"
            className="transition-transform duration-300 transform group-hover:translate-y-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
