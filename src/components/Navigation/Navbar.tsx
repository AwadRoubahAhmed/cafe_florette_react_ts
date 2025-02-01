import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container navbar sticky top-0 z-50 bg-base-100 shadow-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            aria-label="button"
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http//:www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            <li>
              <NavLink to="/" className="text-base">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className="text-base">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Menu" className="text-base">
                {" "}
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="text-base">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          Café Florette <span className="text-blue-500 text-xl">.</span>
        </Link>
      </div>
    </header>

    ////////////////////////////////////////////////////////////////////////
    // <div className="container sticky top-0 z-50 sm:flex-col">
    //   <header className="w-full h-[50px] flex justify-between items-center bg-white shadow-xl p-6 text-gray-800 leading-6 md:leading-7 font-mono ">
    //     <Link to="/">
    //       <h1 className="text-xl font-bold">
    //         Café Florette<span className="text-blue-500">.</span>
    //       </h1>
    //     </Link>
    //     <nav className="flex">
    //       <ul className="flex space-x-6 shadow-2xl text-lg font-boldmenu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2">
    //         <li className="inline-block">
    //           <NavLink to="/">Home</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/About">About</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/Menu"> Recipes</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/Contact">Contact</NavLink>
    //         </li>
    //       </ul>
    //     </nav>
    //   </header>
    // </div>
    ////////////////////////////////////////////////////////////
  );
};

export default Navbar;
