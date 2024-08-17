import React from "react";

const BottomFooter = () => {
  return (
    <>
      <hr className="bg-gray-700 border-t" />
      <div className="p-4 text-gray-600">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* left */}
          <p className="text-sm text-center flex-1">
            2024 @namascape all rights reserved
          </p>

          {/* center */}
          <div className="flex space-x-8 flex-1 justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=61555758840276"
              className="bg-orange-400 p-2 text-white flex items-center justify-center w-10 h-10 bg-transition"
            >
              <i className="fa-brands fa-facebook text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/namascape/?igsh=ZmU3ZXNqenkxcG5v"
              className="bg-orange-400 p-2 text-white flex items-center justify-center w-10 h-10 bg-transition"
            >
              <i className="fa-brands fa-instagram text-lg"></i>
            </a>
            <a
              href="http://www.tiktok.com/@namascape"
              className="bg-orange-400 p-2 text-white flex items-center justify-center w-10 h-10 bg-transition"
            >
              <i className="fa-brands fa-tiktok text-lg"></i>
            </a>
            <a
              href="https://chat.whatsapp.com/I7Ugx5pXwArFKK0fjq0p4X"
              className="bg-orange-400 p-2 text-white flex items-center justify-center w-10 h-10 bg-transition"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
            </a>
          </div>

          {/* right */}
          <ul className="flex space-x-4 flex-1 justify-center text-sm">
            <li>
              <a href="/impressum" className="">
                Impressum
              </a>
            </li>
            <li>
              <a href="/privacy policy and terms of service" className="">
                Privacy Policy and Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BottomFooter;
