import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <hr className="mb-10" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Funiro.</h2>
            <address className="text-gray-600 not-italic">
              400 University Drive Suite 200
              <br />
              Coral Gables, FL 33134 USA
            </address>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="text-black space-y-2">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="text-black space-y-2">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        {/* Bottom Text */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-500">
          2023 Funiro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
