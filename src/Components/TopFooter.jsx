import React from "react";

const TopFooter = () => {
  return (
    <section className="p-12">
      <div className="flex justify-between items-start p-5 ">

        {/* First Column */}
        <div className="flex flex-col w-1/3 p-6 space-y-4 -mt-8 items-center">
          <a href="/" alt="logo">
            <img
              className="h-20 w-30"
              src="https://namascape.me/assets/images/footer-logo.svg"
              alt="logo"
            />
          </a>
          <p className="text-gray-700 text-sm">
            Discover exclusive and free offerings available only in our app.
            Look forward to a free offer every week. Don't miss out on this
            week's offer - download today!
          </p>
          <nav className="flex space-x-4">
            <a
              href="/"
              className="text-orange-600 hover:text-orange-800 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/experiences"
              className="text-gray-800 hover:text-orange-600 text-sm font-medium"
            >
              Experiences
            </a>
            <a
              href="/aboutus"
              className="text-gray-800 hover:text-orange-600 text-sm font-medium"
            >
              About Us
            </a>
            <a
              href="/contactus"
              className="text-gray-800 hover:text-orange-600 text-sm font-medium"
            >
              Contact Us
            </a>
          </nav>
        </div>

        {/* Second Column */}
        <div className="flex flex-col w-1/3 p-6 border-2 border-orange-100 transform translate-y-1/2">
  <h2 className="text-lg font-semibold mb-2 text-gray-800">
    Download for User
  </h2><div className="flex space-x-4">
  <a href='https://play.google.com/store/apps/details?id=com.app.user.namascape'>
    <img
      src="https://namascape.me/assets/images/google-play-image.svg"
      alt="google play"
      className="w-40 bg-blue-50"
    />
    </a>
    <a href="https://apps.apple.com/in/app/namascape/id6479004183">
    <img
      src="https://namascape.me/assets/images/app-store-image.svg"
      alt="app store"
      className="w-40"
    />
    </a>
  </div>
</div>


        {/* Third Column */}
        <div className="flex flex-col w-1/3 p-6 border-2 border-orange-100 transform translate-y-1/2">
  <h2 className="text-lg font-semibold mb-2 text-gray-800">
    Download for User
  </h2><div className="flex space-x-4">
  <a href="https://play.google.com/store/apps/details?id=com.app.user.namascape">
    <img
      src="https://namascape.me/assets/images/google-play-image.svg"
      alt="google play"
      className="w-40 bg-blue-50"
    />
  </a>
    <a href="https://apps.apple.com/in/app/namascape/id6479004183">
    <img
      src="https://namascape.me/assets/images/app-store-image.svg"
      alt="app store"
      className="w-40"
    />
    </a>
  </div>
</div>
      </div>




    </section>
  );
};

export default TopFooter;
