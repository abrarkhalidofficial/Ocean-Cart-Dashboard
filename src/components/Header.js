import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function Header({ search }) {
  const [navbar, setNavbar] = useState(false);

  const changeBackgrond = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackgrond);
  window.addEventListener("mouseover", changeBackgrond);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      className={navbar ? "nav__bar active" : "nav__bar"}
    >
      <Navbar.Brand as={Link} to="/" className="brand__name">
        OC
      </Navbar.Brand>
      {/* <div className="catagory__select">
        <Select
          // defaultValue={}
          name="colors"
          options={selectOptions}
          className="select"
          classNamePrefix="select"
          placeholder="Explore"
        />
      </div> */}
      <div
        className=""
        style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
      >
        <Nav.Link as={Link} to="/" className="nav__link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24.304 24.304"
          >
            <g
              id="Icon_feather-log-out"
              data-name="Icon feather-log-out"
              transform="translate(-3 -3)"
            >
              <path
                id="Path_701"
                data-name="Path 701"
                d="M11.6,25.8H6.867A2.367,2.367,0,0,1,4.5,23.437V6.867A2.367,2.367,0,0,1,6.867,4.5H11.6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                id="Path_702"
                data-name="Path 702"
                d="M24,22.336l5.918-5.918L24,10.5"
                transform="translate(-4.114 -1.266)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                id="Path_703"
                data-name="Path 703"
                d="M27.7,18H13.5"
                transform="translate(-1.899 -2.848)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </g>
          </svg>
        </Nav.Link>
      </div>
    </Navbar>
  );
}
