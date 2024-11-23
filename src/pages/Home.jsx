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
import centerimg from "../assets/Images/centerbn.png";
import galery1 from "../assets/Images/gl1.png";
import galery2 from "../assets/Images/gl2.png";
import galery3 from "../assets/Images/gl3.png";
import galery4 from "../assets/Images/4.png";
import galery5 from "../assets/Images/gl5.png";
import galery6 from "../assets/Images/gl6.png";
import galery7 from "../assets/Images/gl7.png";
import galery8 from "../assets/Images/gl8.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "https://via.placeholder.com/300", alt: "Item 1" },
  { src: "https://via.placeholder.com/300", alt: "Item 2" },
  { src: "https://via.placeholder.com/300", alt: "Item 3" },
  { src: "https://via.placeholder.com/300", alt: "Item 4" },
  { src: "https://via.placeholder.com/300", alt: "Item 5" },
];

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

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
                <img className="rounded-lg mb-6" src={bn1} alt="" />
                <p className="text-center text-black font-bold">Dining</p>
              </div>
              <div>
                <img className="rounded-lg mb-6" src={bn2} alt="" />
                <p className="text-center  text-black font-bold">living</p>
              </div>
              <div>
                <img className="rounded-lg mb-6" src={bn3} alt="" />
                <p className="text-center  text-black font-bold">bedroom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 mb-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>

  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         
            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr1} 
                alt="Syltherine"
                className="w-full h-48 object-cover transition-transform transform hover:scale-105 cursor-pointer"
              />
              <div className="p-4 bg-blue-50">
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

            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr2} 
                alt="Syltherine"
                className="w-full h-48 object-cover transition-transform transform hover:scale-105 cursor-pointer"
              />
              <div className="p-4 bg-blue-50">
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

 
            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr3} 
                alt="Lolito"
                className="w-full h-48 object-cover transition-transform transform hover:scale-105 cursor-pointer"
              />
              <div className="p-4  bg-blue-50">
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
            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr4} 
                alt="Syltherine"
                className="w-full h-48 object-cover transition-transform transform hover:scale-105 cursor-pointer"
              />
              <div className="p-4 bg-blue-50">
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

            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr1} 
                alt="Syltherine"
                className="w-full h-48 object-cover transition-transform transform hover:scale-105 cursor-pointer"
              />
              <div className="p-4 bg-blue-50">
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


            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr1} 
                alt="Syltherine"
                className="w-full h-48 object-cover transition-transform transform hover:scale-105 cursor-pointer"
              />
              <div className="p-4 bg-blue-50">
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

     
            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr3} 
                alt="Lolito"
                className="w-full h-48 object-cover transition-transform transform hover:scale-105 cursor-pointer"
              />
              <div className="p-4  bg-blue-50">
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

            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={pr1}
                alt="Syltherine"
                className="w-full h-48 object-cover transition-transform transform hover:scale-105 cursor-pointer"
              />
              <div className="p-4 bg-blue-50">
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


          </div>


          <div className="text-center mt-10">
            <button className="bg-white text-yellow-600 border border-yellow-600 px-6 py-3 rounded-md hover:bg-yellow-800 transition">
              Show More
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-roomsbg mb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
     
            <div>
              <h2 className="text-4xl font-bold mb-4">
                50+ Beautiful rooms inspiration
              </h2>
              <p className="text-gray-600 mb-6">
                Our designer already made a lot of beautiful prototypes of rooms
                that inspire you.
              </p>
              <button className="bg-yellow-700 text-white px-6 py-3 rounded-md hover:bg-yellow-800 transition">
                Explore More
              </button>
            </div>

            <div>
              <div className="relative">
                <img
                  className="rounded-lg h-96 w-full"
                  src={centerimg}
                  alt=""
                />
                <div className="absolute bottom-6 left-6 bg-white p-4 shadow-lg rounded-lg">
                  <p className="text-sm text-gray-500">01 — Bed Room</p>
                  <h3 className="text-lg font-bold">Inner Peace</h3>
                </div>
              </div>
            </div>

            {/* Slider */}
            <div>
              <Slider {...sliderSettings}>
                {/* Slide 1 */}
                <div>
                  <img
                    src={pr5} 
                    alt="Room Inspiration"
                    className="rounded-lg w-full object-cover"
                  />
                </div>

                {/* Slide 2 */}
                <div>
                  <img
                    src={pr5}
                    alt="Room Inspiration"
                    className="rounded-lg w-full object-cover"
                  />
                </div>

                {/* Slide 3 */}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" ">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-gray-700">Share your setup with</h2>
            <h1 className="text-black font-bold text-3xl">#FuniroFurniture</h1>
          </div>
          {/* Image Grid */}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6">
              <img className="" src={galery1} alt="" />
              <img className="" src={galery2} alt="" />
              <img src={galery3} alt="" />
              <img src={galery4} alt="" />
              <img src={galery5} alt="" />
              <img src={galery6} alt="" />
              <img src={galery7} alt="" />
              <img src={galery8} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
