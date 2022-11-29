import React from "react";
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [userMenu, setUserMenu] = useState(false);

  return (
    <nav className="font-DMsans m-5">
      <div className="flex flex-wrap items-center  justify-between">
        <Link to="/" className="flex items-center basis-1/6">
          <h1 className="hr-6 mr-3 text-sky-500 text-4xl">
            <FaHouseUser />
          </h1>
          <span className="text-black font-semibold text-4xl ">
            SvendePrøve
          </span>
        </Link>
        <div className="">
          <a className="py-2 pl-10 pr-10 text-lg text-blue-600 underline underline-offset-8 decoration-blue-500">
            Search
          </a>
          <Link to="/About" className="py-2 pl-10 pr-10 text-lg">
            About
          </Link>
          <Link to="test" className="py-2 pl-10 pr-10 text-lg">
            Help
          </Link>
          <a className="py-2 pl-10 pr-10 text-lg">Real Estate Agents</a>
          <a className="py-2 pl-10 pr-10 text-lg">Blog</a>
        </div>
        {/* <select className="h-10 w-10 rounded-full bg-blue-500 appearance-none">
          <option>Sign In</option>
        </select> */}
        <div>
          {userMenu ? (
            <>
              <button
                onClick={() => setUserMenu(!userMenu)}
                className="block h-9 w-9 rounded-full overflow-hidden border-2 border-gray-100 focus:outline-none hover:border-gray-500"
              >
                <img
                  className="h-full w-full object-cover"
                  src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/profile-icon.png"
                />
              </button>
              <div className="bg-gray-100 rounded-lg mt-1 ">
                <Link
                  className="block py-1.5 p-3 hover:bg-gray-200 w-full rounded-md mb-1"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
                <Link className="block py-1.5 p-3 hover:bg-gray-200 rounded-md mb-1">
                  Sign In
                </Link>
                {/* <Link className="block py-1 p-3 hover:bg-gray-200 rounded-md">
                  Sign Out
                </Link> */}
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setUserMenu(!userMenu)}
                className="block h-9 w-9 rounded-full overflow-hidden border-2 border-gray-100 focus:outline-none hover:border-gray-500"
              >
                <img
                  className="h-full w-full object-cover"
                  src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/profile-icon.png"
                />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
