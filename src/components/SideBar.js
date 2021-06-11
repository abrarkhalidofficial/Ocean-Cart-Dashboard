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
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="link-1"
              className="nav__link__vertical__accordion__link"
            >
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
                    <Nav
                      variant="pills"
                      defaultActiveKey="/dashboard/order-pending"
                      className="sidebar__links"
                    >
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          href="/dashboard/order-pending"
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
                          eventKey="link-1"
                        >
                          Order Delivered
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/order-canceled"
                          className="nav__link__vertical__collapse"
                          eventKey="link-2"
                        >
                          Order Canceled
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/products"
                          className="nav__link__vertical__collapse"
                          eventKey="link-3"
                        >
                          Order History
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/order-details"
                          className="nav__link__vertical__collapse"
                          eventKey="link-4"
                        >
                          Order Details
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/order-tracking"
                          className="nav__link__vertical__collapse"
                          eventKey="link-5"
                        >
                          Order Tracking
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="link-3"
              className="nav__link__vertical__accordion__link"
            >
              <Accordion>
                <Accordion.Toggle
                  eventKey="0"
                  className="nav__link__vertical__accordion"
                >
                  <span>Product</span>
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
                    <Nav
                      variant="pills"
                      defaultActiveKey="/dashboard/products"
                      className="sidebar__links"
                    >
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          href="/dashboard/products"
                          to="/dashboard/products"
                          className="nav__link__vertical__collapse"
                        >
                          All Products
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/add-product"
                          className="nav__link__vertical__collapse"
                          eventKey="link-1"
                        >
                          Add Product
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/inventory"
                          className="nav__link__vertical__collapse"
                          eventKey="link-2"
                        >
                          Inventory
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="link-4"
              className="nav__link__vertical__accordion__link"
            >
              <Accordion>
                <Accordion.Toggle
                  eventKey="0"
                  className="nav__link__vertical__accordion"
                >
                  <span>Coupon</span>
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
                    <Nav
                      variant="pills"
                      defaultActiveKey="/dashboard/coupons"
                      className="sidebar__links"
                    >
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          href="/dashboard/coupons"
                          to="/dashboard/coupons"
                          className="nav__link__vertical__collapse"
                        >
                          Coupons
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/add-coupon"
                          className="nav__link__vertical__collapse"
                          eventKey="link-1"
                        >
                          Add Coupon
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/users"
              eventKey="link-2"
              className="nav__link__vertical"
            >
              Users
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
