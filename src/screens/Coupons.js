import React, { useState } from "react";
import "./Users.scss";
import Button from "../components/Button";
import { Nav, Form, Button as ButtonReact, Row } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import userImg from "../assets/userPic.png";

function CouponsRow() {
  const [option, setOption] = useState(false);
  return (
    <Nav.Link className="panel__main__row">
      <div className="panel__main__row__entry">Name</div>
      <div className="panel__main__row__entry">Fixed Cart</div>
      <div className="panel__main__row__entry">$35</div>
      <div className="panel__main__row__entry">14 May 2020</div>
      <div className="panel__main__row__entry">
        <button className="panel__main__row__entry__btn">
          View Info
          <div className="panel__main__row__entry__para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            possimus illo officiis quis velit odit. Voluptate et magni dolorem
            neque!
          </div>
        </button>
      </div>
      <div className="panel__main__row__entry">
        <button
          className="panel__main__row__entry__btn"
          onClick={() => {
            if (option === false) {
              setOption(true);
            } else if (option === true) {
              setOption(false);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="6"
            viewBox="0 0 24 6"
            fill="currentColor"
          >
            <g
              id="Group_345"
              data-name="Group 345"
              transform="translate(-1686 -405)"
            >
              <circle
                id="Ellipse_58"
                data-name="Ellipse 58"
                cx="3"
                cy="3"
                r="3"
                transform="translate(1686 405)"
              />
              <circle
                id="Ellipse_59"
                data-name="Ellipse 59"
                cx="3"
                cy="3"
                r="3"
                transform="translate(1695 405)"
              />
              <circle
                id="Ellipse_60"
                data-name="Ellipse 60"
                cx="3"
                cy="3"
                r="3"
                transform="translate(1704 405)"
              />
            </g>
          </svg>
          {option ? (
            <div className="panel__main__row__entry__option">
              <Nav.Link
                className="panel__main__row__entry__option__entry"
                as={Link}
                to="/dashboard/edit-coupon"
              >
                Edit
              </Nav.Link>
              <button className="panel__main__row__entry__option__entry">
                Duplicate
              </button>
              <button
                className="panel__main__row__entry__option__entry"
                style={{ color: "#e33e3e" }}
              >
                Delete
              </button>
            </div>
          ) : null}
        </button>
      </div>
    </Nav.Link>
  );
}
export default class Coupons extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">All Coupons</div>
        <div className="panel__main__plans">
          <div className="panel__main__role__manager__content">
            <div className="panel__main__freelancer">
              <div className="panel__main__heading__row">
                <div className="panel__main__heading__row__entry">Code</div>
                <div className="panel__main__heading__row__entry">
                  Discount Type
                </div>
                <div className="panel__main__heading__row__entry">Amount</div>
                <div className="panel__main__heading__row__entry">
                  Expiry Date
                </div>
                <div className="panel__main__heading__row__entry">
                  Description
                </div>
                <div className="panel__main__heading__row__entry">Options</div>
              </div>
              <CouponsRow />
              <CouponsRow />
              <CouponsRow />
              <CouponsRow />
              <CouponsRow />
              <CouponsRow />
              <CouponsRow />
              <CouponsRow />
              <CouponsRow />
              <div className="page__slider">
                <div className="slider">
                  <Nav variant="pills" defaultActiveKey="/dashboard/coupons">
                    <Nav.Link
                      to="/dashboard/coupons"
                      href="/dashboard/coupons"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      1
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/coupons"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      2
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/coupons"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      3
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/coupons"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      4
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/coupons"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      5
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/coupons"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-5"
                    >
                      6
                    </Nav.Link>
                  </Nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
