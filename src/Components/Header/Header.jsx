import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/headerlogo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

const Header = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Rooms", link: "/" },
    { name: "Contact us", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <div>
        <div
          className={`w-full fixed top-0 left-0 z-10 ${
            isScrolled ? "shadow-lg" : ""
          }`}
        >
          <div className="md:flex items-center justify-between  py-3 md:px-10 px-7 bg-white">
            <div className="flex items-center font-bold cursor-pointer">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-16" />
                <h2 className="text-3xl text-black">Furniro</h2>
              </Link>
            </div>

            <div
              onClick={toggleMenu}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              {open ? <IoMdClose /> : <IoMenu />}
            </div>

            <ul
              className={`md:flex bg-white md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20 " : "top-[-490px]"
              }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="md:ml-8 text-xl font-bold md:my-0 my-7"
                >
                  <Link
                    to={link.link}
                    className="text-black text-base hover:text-yellow-300 duration-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <div className="flex gap-5 items-center">
                <CiUser className="text-xl" />
                <CiSearch className="text-xl" />
                <CiHeart className="text-xl" />
                <CiShoppingCart className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
