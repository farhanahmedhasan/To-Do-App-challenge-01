import React from "react";
import { Link } from "react-router-dom";

import { BsFillMoonFill } from "react-icons/bs";
import { navLeftData } from "../data/data";

function NavBar() {
  return (
    <nav className="bg-purple-900 py-2.5 px-16 flex justify-between">
      <ul className="flex space-x-5">
        {navLeftData.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          );
        })}
      </ul>

      <ul className="flex space-x-5">
        <button>
          <BsFillMoonFill fill="white" />
        </button>
        <li>
          <Link to="/overdue">overdue</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
