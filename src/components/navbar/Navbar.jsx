import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#4682b4] dark:bg-[#4682b4] fixed w-full z-20 top-0 start-0  dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link
          to="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-145 object-fill rounded-2xl"
          />
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-1 text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-gray-300"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full  overflow-hidden transition-all duration-500 ease-in-out lg:flex lg:w-auto ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} lg:max-h-full lg:opacity-100`}
          id="navbar-default"
        >
          <ul className="flex flex-col font-oswald py-1 px-2 mt-2 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-4 lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-1 pl-2 pr-3 text-black lg:text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-gray-300 lg:p-0 dark:text-white dark:bg-gray-800 lg:dark:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#services"
                className="block py-1 pl-2 pr-3 text-black lg:text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-gray-300 lg:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#clients"
                className="block py-1 pl-2 pr-3 text-black lg:text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-gray-300 lg:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                Clients
              </a>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-1 pl-2 pr-3 text-black lg:text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-gray-300 lg:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-1 pl-2 pr-3 text-black lg:text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-gray-300 lg:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
