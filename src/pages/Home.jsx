import React from "react";
import homebg from "../assets/Images/homebg.jpeg"; // Ensure the correct path to your image
import bn1 from "../assets/Images/bn3.png";
import bn2 from "../assets/Images/bn2.png";
import bn3 from "../assets/Images/bn3.png";

import pr1 from "../assets/Images/product1.png";
import pr2 from "../assets/Images/product2.png";
import pr3 from "../assets/Images/product3.jpeg";
import pr4 from "../assets/Images/product3.png";
import pr5 from "../assets/Images/product4.png";

const HomePage = () => {
  return (
    <div>
      <div
        className="relative mb-10 bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${homebg})` }}
      >
        <div style={{ marginLeft: "45rem" }} className=" mt-16">
          <div className=" bg-homebg bg-opacity-80 rounded-lg shadow-lg p-6 md:p-10 max-w-lg">
            <p className="text-sm uppercase text-gray-500 mb-4">New Arrival</p>
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4">
              Discover Our New Collection
            </h1>
            <p className="text-gray-600 mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-yellow-700 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <section className="mb-10">
        <div className="container">
          <div>
            <div className="text-center text mb-6">
              <h2 className="text-2xl font-bold">Browse The Range</h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <img className="rounded-lg " src={bn1} alt="" />
                <p className="text-center">Dining</p>
              </div>
              <div>
                <img className="rounded-lg" src={bn2} alt="" />
                <p className="text-center">Dining</p>
              </div>
              <div>
                <img className="rounded-lg" src={bn3} alt="" />
                <p className="text-center">Dining</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Card 1 */}
            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr1} // Replace with actual product image
                alt="Syltherine"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Syltherine</h3>
                <p className="text-sm text-gray-500">Stylish cafe chair</p>
                <p className="text-xl font-bold text-yellow-700">
                  Rp 2.500.000
                </p>
                <p className="text-sm line-through text-gray-400">
                  Rp 3.500.000
                </p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr2} // Replace with actual product image
                alt="Leviosa"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Leviosa</h3>
                <p className="text-sm text-gray-500">Stylish cafe chair</p>
                <p className="text-xl font-bold text-yellow-700">
                  Rp 2.500.000
                </p>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr3} // Replace with actual product image
                alt="Lolito"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Lolito</h3>
                <p className="text-sm text-gray-500">Luxury big sofa</p>
                <p className="text-xl font-bold text-yellow-700">
                  Rp 7.000.000
                </p>
                <p className="text-sm line-through text-gray-400">
                  Rp 14.000.000
                </p>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr4} // Replace with actual product image
                alt="Respira"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Respira</h3>
                <p className="text-sm text-gray-500">
                  Outdoor bar table and stool
                </p>
                <p className="text-xl font-bold text-yellow-700">Rp 500.000</p>
              </div>
            </div>

            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr1} // Replace with actual product image
                alt="Syltherine"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Syltherine</h3>
                <p className="text-sm text-gray-500">Stylish cafe chair</p>
                <p className="text-xl font-bold text-yellow-700">
                  Rp 2.500.000
                </p>
                <p className="text-sm line-through text-gray-400">
                  Rp 3.500.000
                </p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr2} // Replace with actual product image
                alt="Leviosa"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Leviosa</h3>
                <p className="text-sm text-gray-500">Stylish cafe chair</p>
                <p className="text-xl font-bold text-yellow-700">
                  Rp 2.500.000
                </p>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr3} // Replace with actual product image
                alt="Lolito"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Lolito</h3>
                <p className="text-sm text-gray-500">Luxury big sofa</p>
                <p className="text-xl font-bold text-yellow-700">
                  Rp 7.000.000
                </p>
                <p className="text-sm line-through text-gray-400">
                  Rp 14.000.000
                </p>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr4} // Replace with actual product image
                alt="Respira"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Respira</h3>
                <p className="text-sm text-gray-500">
                  Outdoor bar table and stool
                </p>
                <p className="text-xl font-bold text-yellow-700">Rp 500.000</p>
              </div>
            </div>

            {/* Add more product cards as needed */}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-10">
            <button className="bg-yellow-700 text-white px-6 py-3 rounded-md hover:bg-yellow-800 transition">
              Show More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
