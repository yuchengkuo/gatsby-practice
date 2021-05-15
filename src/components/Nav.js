import { Link } from "gatsby";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <div id="logo">
        <Link to="/">
          <svg
            width="32"
            height="22"
            viewBox="0 0 32 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1V21M11 1H1L6 11L1 21H11M11 1H21M11 21H21M11 21L21 1M26 11.4167L31 1H21M26 11.4167L31 21H21M26 11.4167L21 21"
              stroke="#777980"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/#project">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Send a message</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
