import { NavLink, useNavigate } from "react-router-dom";
import BtnGetStarted from "../BtnGetStarted";
import { FaWindowClose } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  // State;
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // Comportements;
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <header className="container sticky top-0 z-50 flex justify-between items-center bg-slate-900 text-slate-100 shadow-2xl p-4">
      {/* Logo Title */}
      <div>
        <h1
          onClick={() => navigate("/", { replace: true })}
          className="text-2xl font-bold cursor-pointer"
        >
          Café Florette
          <span className="text-blue-500 text-3xl font-bold rounded-full">
            .
          </span>
        </h1>
      </div>

      {/* Navigation Menu */}
      <div className="text-gray-100/90">
        <ul className="hidden md:flex justify-center items-center font-bold space-x-6">
          <li className="">
            <NavLink
              to="/"
              className="text-base text-gray-100/90 hover:text-blue-500"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className="text-base text-gray-100/90 hover:text-blue-500"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Menu"
              className="text-base text-gray-100/90 hover:text-blue-500"
            >
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className="text-base text-gray-100/90 hover:text-blue-500"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Get Stated */}
      <div className="hidden md:flex">
        <BtnGetStarted />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <div
          onClick={toggleMenu}
          className="flex items-center justify-center cursor-pointer"
        >
          {showMenu ? (
            <FaWindowClose className="h-6 w-6 text-black-950 font-bold " />
          ) : (
            <IoMenuSharp className="h-6 w-6 text-blue-500 font-bold " />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        onClick={toggleMenu}
        className={
          showMenu
            ? "w-full absolute left-0 top-0 bg-gray-100/90 text-gray-800 px-4 py-4 flex flex-col rounded-xl"
            : "absolute left-[-100%]"
        }
      >
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/", { replace: true })}
        >
          Café Florette
          <span className="text-blue-500 text-3xl rounded-full">.</span>
        </h1>
        <ul className="mt-4 font-bold">
          <li className="border-b-1 mb-4">
            <NavLink to="/" className="text-base hover:text-blue-500">
              Home
            </NavLink>
          </li>
          <li className="border-b-1 mb-4">
            <NavLink to="/About" className="text-base hover:text-blue-500">
              About
            </NavLink>
          </li>
          <li className="border-b-1 mb-4">
            <NavLink to="/Menu" className="text-base hover:text-blue-500">
              Recipes
            </NavLink>
          </li>
          <li className="border-b-1 mb-4">
            <NavLink to="/Contact" className="text-base hover:text-blue-500">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="md:flex w-full mx-auto">
          <BtnGetStarted />
        </div>
        <div className="flex justify-between items-center my-6 ">
          <FaFacebook className="w-6 h-6 text-blue-500 hover:text-blue-700 cursor-pointer" />
          <FaTwitter className="w-6 h-6 text-blue-500 hover:text-blue-700 cursor-pointer" />
          <FaInstagramSquare className="w-6 h-6 text-red-400 hover:text-red-500 cursor-pointer" />
          <FaYoutube className="w-6 h-6 text-red-700 hover:text-red-600 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
