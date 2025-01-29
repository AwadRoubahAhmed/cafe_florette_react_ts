import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
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

    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Menu"> Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          Café Florette
        </Link>
      </div>
    </div>
    //bg-gary-50 dark:bg-gray-800 dark:border-gray-700

    //////////////////////////////////////////

    // <nav className="border-gray-200  sticky top-0 z-50 bg-base-100 shadow-sm ">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
    //       <img
    //         src="https://flowbite.com/docs/images/logo.svg"
    //         className="h-8"
    //         alt="Flowbite Logo"
    //       />
    //       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    //         Café Florette
    //       </span>
    //     </a>
    //     <button
    //       data-collapse-toggle="navbar-hamburger"
    //       type="button"
    //       className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //       aria-controls="navbar-hamburger"
    //       aria-expanded="false"
    //     >
    //       <span className="sr-only">Open main menu</span>
    //       <svg
    //         className="w-5 h-5"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 17 14"
    //       >
    //         <path
    //           stroke="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M1 1h15M1 7h15M1 13h15"
    //         />
    //       </svg>
    //     </button>
    //     <div className="hidden w-full" id="navbar-hamburger">
    //       <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    //         <li
    //           className="block py-2 px-3 text-white bg-blue-700 rounded-sm dark:bg-blue-600"
    //           aria-current="page"
    //         >
    //           <NavLink to="/">Home</NavLink>
    //         </li>
    //         <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    //           <NavLink to="/About">About</NavLink>
    //         </li>
    //         <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">
    //           <NavLink to="/Menu"> Recipes</NavLink>
    //         </li>
    //         <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    //           <NavLink to="/Contact">Contact</NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
