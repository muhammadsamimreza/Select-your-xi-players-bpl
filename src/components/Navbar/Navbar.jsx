import React from "react";
import NavImg from "../../assets/logo.png"
const Navbar = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="navbar justify-between items-center py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          
            </ul>
          </div>
          <a className="text-xl">
            <img className="w-[50px] h-[50px]" src={NavImg} alt="" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <button className="btn">
          <span>100000000</span>
          <span className="font-bold">Coin</span>
          <span>
            <img src="https://i.ibb.co.com/XZrh1JLd/Currency.png" alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
