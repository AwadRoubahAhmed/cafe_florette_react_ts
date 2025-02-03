import { NavLink, useNavigate } from "react-router-dom";
import BtnGetStarted from "../BtnGetStarted";
import { IoMenuSharp, IoClose } from "react-icons/io5";
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
      <div>
        <ul className="hidden md:flex justify-center items-center space-x-6">
          <li className="">
            <NavLink to="/" className="text-base hover:text-blue-500">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className="text-base hover:text-blue-500">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Menu" className="text-base hover:text-blue-500">
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="text-base hover:text-blue-500">
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
        <div onClick={toggleMenu} className="flex items-center justify-center">
          {showMenu ? (
            <IoClose className="h-6 w-6 text-blue-500  font-bold" />
          ) : (
            <IoMenuSharp className="h-6 w-6 text-blue-500  font-bold " />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        onClick={toggleMenu}
        className={
          showMenu
            ? "w-full absolute left-0 top-0 bg-gray-100/90 text-gray-800 px-4 py-4 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <h1 className="text-2xl font-bold">
          Café Florette
          <span className="text-blue-500 text-3xl rounded-full">.</span>
        </h1>
        <ul className="mt-4 ">
          <li className="border-b-1 mb-4">
            <NavLink to="/" className="text-base">
              Home
            </NavLink>
          </li>
          <li className="border-b-1 mb-4">
            <NavLink to="/About" className="text-base">
              About
            </NavLink>
          </li>
          <li className="border-b-1 mb-4">
            <NavLink to="/Menu" className="text-base">
              Recipes
            </NavLink>
          </li>
          <li className="border-b-1 mb-4">
            <NavLink to="/Contact" className="text-base">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="md:flex w-full mx-auto">
          <BtnGetStarted />
        </div>
        <div className="flex justify-between items-center my-4 text-blue-500">
          <FaFacebook />
          <FaTwitter />
          <FaInstagramSquare />
          <FaYoutube />
        </div>
      </div>
    </header>

    ////////////////////////////////////////////////////////////////////////
    // <div className="navbar-start">
    //     <div className="dropdown">
    //       <div
    //         tabIndex={0}
    //         role="button"
    //         aria-label="button"
    //         className="btn btn-ghost btn-circle"
    //       >
    //         <svg
    //           xmlns="http//:www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h16M4 18h7"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
    //       >
    //         <li>
    //           <NavLink to="/" className="text-base">
    //             Home
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/About" className="text-base">
    //             About
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/Menu" className="text-base">
    //             {" "}
    //             Recipes
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/Contact" className="text-base">
    //             Contact
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="navbar-center">
    //     <Link to="/" className="btn btn-ghost text-xl">
    //       Café Florette <span className="text-blue-500 text-xl">.</span>
    //     </Link>
    //   </div>
    ////////////////////////////////////////////////////////////
  );
};

export default Navbar;
