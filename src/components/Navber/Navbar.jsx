import React from "react";
import dollerimg from "../../assets/Currency.png";
import logo from "../../assets/logo.png";

const Navbar = ({ coin = 0 }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="navbar container mx-auto px-4 py-2.5">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              aria-label="Toggle Menu"
              className="btn btn-ghost lg:hidden mr-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 text-gray-700 rounded-2xl z-20 mt-3 w-52 p-3 shadow-lg border border-gray-100 space-y-1"
            >
              <li>
                <a href="#home" className="font-medium hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#fixture" className="font-medium hover:text-black">
                  Fixture
                </a>
              </li>
              <li>
                <a href="#teams" className="font-medium hover:text-black">
                  Teams
                </a>
              </li>
              <li>
                <a href="#schedules" className="font-medium hover:text-black">
                  Schedules
                </a>
              </li>
            </ul>
          </div>

          <a
            href="#home"
            className="flex items-center gap-2 hover:opacity-90 transition"
          >
            <img
              src={logo}
              alt="Dream 11 Logo"
              className="h-11 w-auto object-contain"
            />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
            <li>
              <a href="#home" className="hover:text-gray-950 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#fixture" className="hover:text-gray-950 transition">
                Fixture
              </a>
            </li>
            <li>
              <a href="#teams" className="hover:text-gray-950 transition">
                Teams
              </a>
            </li>
            <li>
              <a href="#schedules" className="hover:text-gray-950 transition">
                Schedules
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 transition px-4 py-2 rounded-xl shadow-2xs">
            <span className="font-bold text-sm sm:text-base text-gray-900">
              {coin} Coin
            </span>
            <img
              src={dollerimg}
              alt="Coin"
              className="w-5 h-5 object-contain shrink-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;