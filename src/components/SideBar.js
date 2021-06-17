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
                  <span>Orders</span>
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
                      // defaultActiveKey="/dashboard/orders"
                      className="sidebar__links"
                    >
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          href="/dashboard/orders"
                          to="/dashboard/orders"
                          className="nav__link__vertical__collapse"
                        >
                          All Orders
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/orders-history"
                          className="nav__link__vertical__collapse"
                          eventKey="link-1"
                        >
                          Order History
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
                  <span>Products</span>
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
                      // defaultActiveKey="/dashboard/products"
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
                          to="/dashboard/promote"
                          className="nav__link__vertical__collapse"
                          eventKey="link-3"
                        >
                          Promote
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/product-bulk-upload"
                          className="nav__link__vertical__collapse"
                          eventKey="link-4"
                        >
                          Product bulk upload
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
                  <span>Coupons</span>
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
                      // defaultActiveKey="/dashboard/coupons"
                      className="sidebar__links"
                    >
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          href="/dashboard/coupons"
                          to="/dashboard/coupons"
                          className="nav__link__vertical__collapse"
                        >
                          All Coupons
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
              className="nav__link__vertical"
              eventKey="link-5"
            >
              Users
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="link-6"
              className="nav__link__vertical__accordion__link"
            >
              <Accordion>
                <Accordion.Toggle
                  eventKey="0"
                  className="nav__link__vertical__accordion"
                >
                  <span>Cash on Delivery</span>
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
                      // defaultActiveKey="/dashboard/cod"
                      className="sidebar__links"
                    >
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          href="/dashboard/cod"
                          to="/dashboard/cod"
                          className="nav__link__vertical__collapse"
                        >
                          All Cash on Delivery
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/add-cod"
                          className="nav__link__vertical__collapse"
                          eventKey="link-1"
                        >
                          Add Cash on Delivery
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/cod-bulk-upload"
                          className="nav__link__vertical__collapse"
                          eventKey="link-3"
                        >
                          Cash on Delivery bulk upload
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
              eventKey="link-7"
              className="nav__link__vertical__accordion__link"
            >
              <Accordion>
                <Accordion.Toggle
                  eventKey="0"
                  className="nav__link__vertical__accordion"
                >
                  <span>Bank Deposite</span>
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
                      // defaultActiveKey="/dashboard/bank-deposite"
                      className="sidebar__links"
                    >
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          href="/dashboard/bank-deposite"
                          to="/dashboard/bank-deposite"
                          className="nav__link__vertical__collapse"
                        >
                          All Bank Deposite
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/add-bank-deposite"
                          className="nav__link__vertical__collapse"
                          eventKey="link-1"
                        >
                          Add Bank Deposite
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
              eventKey="link-8"
              className="nav__link__vertical__accordion__link"
            >
              <Accordion>
                <Accordion.Toggle
                  eventKey="0"
                  className="nav__link__vertical__accordion"
                >
                  <span>Consolidation</span>
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
                      // defaultActiveKey="/dashboard/consolidations"
                      className="sidebar__links"
                    >
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          href="/dashboard/consolidations"
                          to="/dashboard/consolidations"
                          className="nav__link__vertical__collapse"
                        >
                          All Consolidations
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/add-consolidation"
                          className="nav__link__vertical__collapse"
                          eventKey="link-1"
                        >
                          Add Consolidation
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/fix-items"
                          className="nav__link__vertical__collapse"
                          eventKey="link-2"
                        >
                          Fix missing items
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
              eventKey="link-9"
              className="nav__link__vertical__accordion__link"
            >
              <Accordion>
                <Accordion.Toggle
                  eventKey="0"
                  className="nav__link__vertical__accordion"
                >
                  <span>Store / Supplier</span>
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
                      // defaultActiveKey="/dashboard/store-supplier-list"
                      className="sidebar__links"
                    >
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          href="/dashboard/store-supplier-list"
                          to="/dashboard/store-supplier-list"
                          className="nav__link__vertical__collapse"
                        >
                          All Store / Supplier
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/add-store-supplier"
                          className="nav__link__vertical__collapse"
                          eventKey="link-1"
                        >
                          Add Store / Supplier
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
              to="/dashboard/inventory"
              className="nav__link__vertical"
              eventKey="link-10"
            >
              Invetory
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="link-11"
              className="nav__link__vertical__accordion__link"
            >
              <Accordion>
                <Accordion.Toggle
                  eventKey="0"
                  className="nav__link__vertical__accordion"
                >
                  <span>Movement</span>
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
                      // defaultActiveKey="/dashboard/store-movement"
                      className="sidebar__links"
                    >
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          href="/dashboard/movement"
                          to="/dashboard/movement"
                          className="nav__link__vertical__collapse"
                        >
                          All Movement
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to="/dashboard/add-movement"
                          className="nav__link__vertical__collapse"
                          eventKey="link-1"
                        >
                          Add Movement
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
