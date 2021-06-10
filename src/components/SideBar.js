import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logo from "../assets/NoPath.png";

export default class SideBar extends React.Component {
  render() {
    return (
      <div className="side__bar">
        {/* <img
          className="side__bar__heading"
          src={logo}
          alt="logo"
          syle={{ width: "100%", height: "150px" }}
        /> */}
        <Nav
          variant="pills"
          className="sidebar__links"
          defaultActiveKey="/dashboard"
        >
          <Nav.Item>
            <Nav.Link
              as={Link}
              href="/dashboard"
              to="/dashboard"
              className="nav__link__vertical"
            >
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/job-posting"
              className="nav__link__vertical"
              eventKey="link-1"
            >
              Job Posting
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
