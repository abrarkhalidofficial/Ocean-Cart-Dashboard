import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/NoPath.png";

export default class SideBar extends React.Component {
  render() {
    return (
      <div className="side__bar">
        <img
          className="side__bar__heading"
          src={logo}
          alt="logo"
          syle={{ width: "100%", height: "150px" }}
        />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 23.002 19.822"
              >
                <path
                  id="Icon_material-dashboard"
                  data-name="Icon material-dashboard"
                  d="M4.5,15.512H14.723V4.5H4.5Zm0,8.81H14.723V17.714H4.5Zm12.779,0H27.5V13.31H17.279Zm0-19.822v6.607H27.5V4.5Z"
                  transform="translate(-4.5 -4.5)"
                />
              </svg>
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
              <svg
                id="files"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 28.962 26.314"
              >
                <path
                  id="Path_26"
                  data-name="Path 26"
                  d="M905.359,2347.677h22.913l3.025-19.154H902.335Zm20.777-2.5H907.5l-2.235-14.154h23.11Z"
                  transform="translate(-902.335 -2321.363)"
                />
                <rect
                  id="Rectangle_17"
                  data-name="Rectangle 17"
                  width="10.086"
                  height="2.5"
                  transform="translate(9.437 12.79)"
                />
                <rect
                  id="Rectangle_18"
                  data-name="Rectangle 18"
                  width="23.925"
                  height="2.5"
                  transform="translate(2.518 3.58)"
                />
                <rect
                  id="Rectangle_19"
                  data-name="Rectangle 19"
                  width="18.452"
                  height="2.5"
                  transform="translate(5.255)"
                />
              </svg>
              Job Posting
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/job-listing"
              className="nav__link__vertical"
              eventKey="link-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 26.373 21.428"
              >
                <path
                  id="Icon_awesome-list"
                  data-name="Icon awesome-list"
                  d="M4.121,19.858H.824A.824.824,0,0,0,0,20.682v3.3a.824.824,0,0,0,.824.824h3.3a.824.824,0,0,0,.824-.824v-3.3A.824.824,0,0,0,4.121,19.858Zm0-16.483H.824A.824.824,0,0,0,0,4.2V7.5a.824.824,0,0,0,.824.824h3.3A.824.824,0,0,0,4.945,7.5V4.2A.824.824,0,0,0,4.121,3.375Zm0,8.242H.824A.824.824,0,0,0,0,12.441v3.3a.824.824,0,0,0,.824.824h3.3a.824.824,0,0,0,.824-.824v-3.3A.824.824,0,0,0,4.121,11.617Zm21.428,9.066H9.066a.824.824,0,0,0-.824.824v1.648a.824.824,0,0,0,.824.824H25.549a.824.824,0,0,0,.824-.824V21.506A.824.824,0,0,0,25.549,20.682Zm0-16.483H9.066a.824.824,0,0,0-.824.824V6.672a.824.824,0,0,0,.824.824H25.549a.824.824,0,0,0,.824-.824V5.023A.824.824,0,0,0,25.549,4.2Zm0,8.242H9.066a.824.824,0,0,0-.824.824v1.648a.824.824,0,0,0,.824.824H25.549a.824.824,0,0,0,.824-.824V13.265A.824.824,0,0,0,25.549,12.441Z"
                  transform="translate(0 -3.375)"
                />
              </svg>
              Job Listing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/applicants"
              className="nav__link__vertical"
              eventKey="link-3"
            >
              <svg
                id="Group_15"
                data-name="Group 15"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32.436 26.224"
              >
                <path
                  id="Path_18"
                  data-name="Path 18"
                  d="M297.27,2238.051a5.775,5.775,0,0,0-3.577,1.249,7.244,7.244,0,1,0-.282,8.858,5.791,5.791,0,1,0,3.859-10.107Zm-9.444,10.24a4.75,4.75,0,1,1,4.75-4.749A4.755,4.755,0,0,1,287.826,2248.291Zm9.444-1.153a3.255,3.255,0,0,1-2.578-1.286,7.081,7.081,0,0,0,.131-4.176,3.283,3.283,0,1,1,2.447,5.462Z"
                  transform="translate(-274.941 -2236.292)"
                />
                <path
                  id="Path_19"
                  data-name="Path 19"
                  d="M297.27,2249.869a11.119,11.119,0,0,0-6.86,2.251,15.53,15.53,0,0,0-2.584-.221c-6.48,0-11.932,3.951-12.681,9.19l-.2,1.427h25.77l-.2-1.427a8.833,8.833,0,0,0-.795-2.572h7.665l-.2-1.427C306.584,2252.974,302.327,2249.869,297.27,2249.869ZM278,2260.016c1.284-3.285,5.227-5.617,9.829-5.617s8.544,2.332,9.829,5.617Zm23.865-4h-3.868a12.5,12.5,0,0,0-4.291-2.944,9.32,9.32,0,0,1,3.567-.7c3.161,0,5.893,1.493,6.977,3.648Z"
                  transform="translate(-274.941 -2236.292)"
                />
              </svg>
              CV Banks
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/filters"
              className="nav__link__vertical"
              eventKey="link-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 28.004 28.022"
              >
                <path
                  id="_1659021"
                  data-name="1659021"
                  d="M26.45,0H1.555A1.055,1.055,0,0,0,.5,1.055,10.3,10.3,0,0,0,3.955,8.749l4.62,4.106a3.759,3.759,0,0,1,1.261,2.807V25.949a1.055,1.055,0,0,0,1.64.878L17.7,22.678a1.055,1.055,0,0,0,.47-.878V15.662a3.759,3.759,0,0,1,1.261-2.807l4.62-4.106A10.3,10.3,0,0,0,27.5,1.055,1.055,1.055,0,0,0,26.45,0Zm-3.8,7.172-4.62,4.107a5.871,5.871,0,0,0-1.969,4.384v5.574l-4.114,2.743V15.662a5.871,5.871,0,0,0-1.969-4.384L5.357,7.172A8.194,8.194,0,0,1,2.678,2.109H25.326a8.192,8.192,0,0,1-2.679,5.062Zm0,0"
                  transform="translate(0 0.5)"
                  fill="currentColor"
                  stroke="currentColor"
                />
              </svg>
              Filters
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="side__bar__cta">
          <Nav.Link as={Link} to="/" className="nav__link__vertical">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.81 28.805">
              <g id="loguot" transform="translate(29.81 28.805) rotate(180)">
                <path
                  id="Path_31"
                  data-name="Path 31"
                  d="M0,7.479H13.665l-3.457,3.127,1.677,1.854,6.89-6.23L11.885,0,10.208,1.854l3.457,3.126H0Z"
                  transform="translate(0 8.173)"
                  fill="currentColor"
                />
                <path
                  id="Path_32"
                  data-name="Path 32"
                  d="M24.313,0H0V6.1H2.5V2.5H21.813V26.3H2.5v-3.66H0V28.8H24.313Z"
                  transform="translate(5.496)"
                  fill="currentColor"
                />
              </g>
            </svg>
            Logout
          </Nav.Link>
        </div>
      </div>
    );
  }
}
