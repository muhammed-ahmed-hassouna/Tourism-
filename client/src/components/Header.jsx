import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const location = useLocation();
  console.log(location.pathname)
  if(location.pathname == '/login' || location.pathname == '/signup'){
    console.log('hello')
    return null;
  }

  return (
    <nav
      className="relative flex w-full items-center justify-between bg-transparent py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30  lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-6 my-2">
        <div className="flex items-center">
          {/* <!-- Toggle button --> */}
          <button
            data-collapse-toggle="navbar-default"
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpened}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden={!isMenuOpened}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* <!-- Navbar Brand --> */}
          <Link to="/" className="flex items-center h-8">
            <h1 className="text-transparent bg-clip-text px-3 font-medium text-2xl bg-gradient-to-r from-cyan-500 to-blue-700">
              VoyageVista
            </h1>
          </Link>
        </div>

        {/* <!-- Collapsible wrapper --> */}
        <div
          className={`${
            isMenuOpened ? "" : "hidden"
          } w-full md:block md:w-auto navigation" id="navbar-default`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-3 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="font-normal block py-2 px-1 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="font-normal block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- Collapsible wrapper --> */}

        {/* <!-- Right elements --> */}
        <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
          <Link to="/login">
            <button
              type="button"
              className="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-cyan-600 hover:text-black transition duration-150 ease-in-out hover:bg-gradient-to-r hover:from-[#006f6f7a] hover:to-[#00249b9c] hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              type="button"
              className="inline-block rounded bg-gradient-to-r from-cyan-800 to-blue-700 hover:from-[#006f6f7a] hover:to-[#00249b9c] hover:text-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Sign up
            </button>
          </Link>
        </div>
        {/* <!-- Right elements --> */}
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
  );
};

export default Header;