import React from "react";
import { FaHouseUser, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleOnRegister,
  toggleOnLogin,
  toggleOff,
} from "../features/modal/ModalSlice";
import { logout, reset } from "../features/auth/authSlice";

export default function Header() {
  const { toggleModal, renderRegister } = useSelector((state) => state.modal);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [userMenu, setUserMenu] = useState(false);
  console.log(userMenu);

  const onClickRegister = () => {
    dispatch(toggleOnRegister());
  };
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    dispatch(toggleOff());
  };
  const onClickLogin = () => {
    dispatch(toggleOnLogin());
  };

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
          {user ? (
            <>
              <button
                onClick={() => setUserMenu(!userMenu)}
                className="block h-9 w-9 rounded-full overflow-hidden border-2 border-gray-100 focus:outline-none hover:border-gray-500"
              >
                <FaUserAlt className="h-full w-full" />
              </button>
              {userMenu ? (
                <ul className="bg-gray-100 rounded-lg mt-1 z-50 absolute text-right float-right right-3 ">
                  <li>
                    <Link
                      className="block py-1.5 p-3 hover:bg-gray-200 w-full rounded-md mb-1"
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={onLogout}
                      className="block py-1.5 p-3 hover:bg-gray-200 rounded-md mb-1"
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              ) : null}
            </>
          ) : (
            <>
              <div className="flex">
                <Link
                  onClick={onClickRegister}
                  className="py-1.5 p-3 hover:bg-gray-200 rounded-md mb-1"
                >
                  Sign Up
                </Link>
                <Link
                  onClick={onClickLogin}
                  className="py-1.5 p-3 hover:bg-gray-200 rounded-md mb-1"
                >
                  Sign In
                </Link>
              </div>
            </>
          )}
        </div>
        {toggleModal ? <Modal /> : null}
      </div>
    </nav>
  );
}
