import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container sticky top-0 z-50">
      <header className="w-full h-[50px] flex justify-between items-center bg-white shadow-xl p-6 text-gray-800 leading-6 md:leading-7 font-mono ">
        <Link to="/">
          <h1 className="text-xl font-bold">
            Café Florette<span className="text-blue-500">.</span>
          </h1>
        </Link>
        <nav className="flex">
          <ul className="flex space-x-6 shadow-2xl text-lg font-bold">
            <li className="inline-block">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
