import React from "react";
import { Accordion, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/userPic.png";

export default class SideBar extends React.Component {
  render() {
    return (
      <div className="side__bar">
        <div className="side__bar__header">
          <img className="side__bar__header__img" src={logo} alt="logo" />
          <div className="side__bar__header__content">
            <div className="side__bar__header__content__top__row">
              <div className="side__bar__header__content__name">John Doe</div>
              <div className="side__bar__header__content__status">
                <div className="side__bar__header__content__status__beacon"></div>
              </div>
            </div>
            <div className="side__bar__header__content__designation">
              Designation
            </div>
          </div>
        </div>

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
          <Accordion>
            <Accordion.Toggle
              eventKey="0"
              className="nav__link__vertical__accordion"
            >
              <span>Order</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 9 18"
                className="nav__link__vertical__accordion__icon"
              >
                <path
                  id="Icon_ionic-md-arrow-dropdown"
                  data-name="Icon ionic-md-arrow-dropdown"
                  d="M9,13.5l9,9,9-9Z"
                  transform="translate(-13.5 27) rotate(-90)"
                />
              </svg>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div className="nav__link__vertical__accordion__collapse">
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/dashboard/order-pending"
                    className="nav__link__vertical__collapse"
                  >
                    Order Pending
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/dashboard/order-delivered"
                    className="nav__link__vertical__collapse"
                  >
                    Order Delivered
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/dashboard/order-canceled"
                    className="nav__link__vertical__collapse"
                  >
                    Order Canceled
                  </Nav.Link>
                </Nav.Item>
              </div>
            </Accordion.Collapse>
          </Accordion>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/add-product"
              className="nav__link__vertical"
              eventKey="link-2"
            >
              Add Product
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/add-coupon"
              className="nav__link__vertical"
              eventKey="link-3"
            >
              Add Coupon
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/products"
              className="nav__link__vertical"
              eventKey="link-4"
            >
              Product
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/products"
              className="nav__link__vertical"
              eventKey="link-5"
            >
              Order History
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/order-details"
              className="nav__link__vertical"
              eventKey="link-6"
            >
              Order Details
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
