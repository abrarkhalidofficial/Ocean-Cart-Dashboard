import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Select from "react-select";

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

  const languagePanel = () => {
    if (document.querySelector(".language__panel").style.display === "none") {
      document.querySelector(".language__panel").style.display = "flex";
    } else {
      document.querySelector(".language__panel").style.display = "none";
    }
  };
  const selectOptions = [
    { value: "Germany", label: "Germany" },
    { value: "English", label: "English" },
    { value: "Russian", label: "Russian" },
    { value: "Hindi", label: "Hindi" },
  ];

  return (
    <Navbar
      expand="lg"
      variant="light"
      fixed="top"
      className={navbar ? "nav__bar active" : "nav__bar"}
    >
      <Navbar.Brand as={Link} to="/" className="brand__name">
        OC
      </Navbar.Brand>
      <div className="catagory__select">
        <Select
          // defaultValue={}
          name="colors"
          options={selectOptions}
          className="select"
          classNamePrefix="select"
          placeholder="Explore"
        />
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/" className="nav__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 23.791 20.817"
            >
              <path
                id="Icon_open-account-logout"
                data-name="Icon open-account-logout"
                d="M8.922,0V2.974h11.9V17.843H8.922v2.974H23.791V0ZM5.948,5.948,0,10.409l5.948,4.461V11.9h11.9V8.922H5.948Z"
                transform="translate(23.791 20.817) rotate(180)"
              />
            </svg>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
