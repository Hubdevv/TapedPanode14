import React from "react";
import { NavLink } from "react-router-dom";

const Tab = () => {
  return (
    <div className="mb-10">
      <h1 className="mb-10">Tabed Pan </h1>
      <NavLink
        to= {"/tab1"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-indigo-400 font-bold bg-white"
            : "text-white bg-indigo-400 hover:text-indigo-900 transition-all ease-out duration-300 font-bold"
        }
      >
        Tab one
      </NavLink>

      <NavLink
      to={"/tab2"}
        className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-indigo-400 font-bold bg-white"
          : "text-white bg-indigo-400 hover:text-indigo-900 transition-all ease-out duration-300 font-bold"
      }
      >
        Tab Two
      </NavLink>
    </div>
  );
};

export default Tab;
