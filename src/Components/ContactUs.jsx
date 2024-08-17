import { useState } from "react";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const handleFirstNameBlur = () => {
    if (!firstName) {
      setFirstNameError("Please enter first name");
    } else {
      setFirstNameError("");
    }
  };

  return (
    <section className="p-12 mt-10" id='contactus'>
      <div className="flex gap-8">
        {/* Left Column */}
        <div className="flex flex-col w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold text-orange-400">
            GET IN TOUCH
          </h2>
          <p className="text-gray-600">
            Do you have any questions? Connect with us at any time. If you have
            any inquiries or need assistance, our dedicated team is available
            24/7, and more than happy to assist you. Whether you're seeking
            information or support, we're here to provide the help you need.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-center text-[#b09684] text-sm">
              <i className="fa-solid fa-phone mr-2 border border-[#b09684] p-3"></i>
              <a href="tel:+41768348224" className="text-gray-500 p-3">
                +41 768348224
              </a>
            </li>
            <li className="flex items-center text-[#b09684] text-sm">
              <i className="fa-regular fa-envelope mr-2 border border-[#b09684] p-3"></i>
              <a href="mailto:Info@namascape.me" className="text-gray-500 p-3">
                Info@namascape.me
              </a>
            </li>
            <li className="flex items-center text-[#b09684] text-sm">
              <i className="fa-solid fa-location-dot mr-2 border border-[#b09684] p-3"></i>
              <a
                href="https://www.google.com/maps?q=Kantonsstrasse+8807+Irelenbach"
                className="text-gray-500 p-3"
              >
                Kantonsstrasse 8807 Irelenbach
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <div
          className="w-1/2 bg-[rgb(176,150,132)] p-8 relative"
          style={{ paddingBottom: "60px", marginLeft: "20px" }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">CONTACT US</h3>
          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-white mb-1">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={handleFirstNameBlur}
                  className="w-full p-2 border-none outline-none"
                />
                {firstNameError && (
                  <div className="text-white text-sm">{firstNameError}</div>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-white mb-1">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onFocus={handleFirstNameBlur}
                  className="w-full p-2 border-none outline-none "
                />
              </div>
            </div>
            <div>
              <label className="block text-white mb-1">Email Address</label>
              <input
                type="email"
                className="w-full p-2 border-none outline-none "
              />
            </div>
            <div>
              <label className="block text-white mb-1">Mobile Number</label>
              <input
                type="tel"
                placeholder="+41 XXX XXX XXX"
                className="w-full p-2 border-none outline-none "
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-1">
                Message
              </label>
              <textarea
                rows="2"
                className="w-full p-2 border-none outline-none "
              ></textarea>
            </div>
            <button
              type="submit"
              className=" py-2 px-12 bg-transparent border-2 border-white text-white hover:bg-orange-500 hover:border-orange-500 transition-colors duration-300 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
