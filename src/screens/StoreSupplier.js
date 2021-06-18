import React from "react";
import "./Users.scss";
import Button from "../components/Button";
import { Nav, Form, Button as ButtonReact, Row } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import userImg from "../assets/userPic.png";

function StoreSupplierRow() {
  return (
    <Nav.Link className="panel__main__row">
      <div className="panel__main__row__entry">#23242</div>
      <div className="panel__main__row__entry">Supplier</div>
      <div className="panel__main__row__entry">Abu Dabi</div>
      <div className="panel__main__row__entry">Seller</div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__badge">Processing</div>
      </div>
      <div className="panel__main__row__entry">oceancart.com</div>
      <div className="panel__main__row__entry">27 May 2020</div>
      <div className="panel__main__row__entry">20/10</div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__cta">
          <Button
            variant="link-btn"
            placeholder="Show"
            toPath="/dashboard/store-supplier-details"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <Button
            variant="link"
            toPath="/dashboard/edit-store-supplier"
            placeholder="Edit"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <Button variant="btn-delete" placeholder="Remove" />
        </div>
      </div>
    </Nav.Link>
  );
}
export default class StoreSupplier extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">All Store / Supplier</div>
        <div className="panel__main__plans">
          <div className="panel__main__role__manager__content">
            <div className="panel__main__freelancer">
              <div className="panel__main__heading__row">
                <div className="panel__main__heading__row__entry">ID</div>
                <div className="panel__main__heading__row__entry">Name</div>
                <div className="panel__main__heading__row__entry">Country</div>
                <div className="panel__main__heading__row__entry">Catagory</div>
                <div className="panel__main__heading__row__entry">Status</div>
                <div className="panel__main__heading__row__entry">Link</div>
                <div className="panel__main__heading__row__entry">Created</div>
                <div className="panel__main__heading__row__entry">
                  Products/InStocks
                </div>
                <div
                  className="panel__main__heading__row__entry"
                  style={{ opacity: 0 }}
                >
                  ----------------------------
                </div>
              </div>
              <StoreSupplierRow />
              <StoreSupplierRow />
              <StoreSupplierRow />
              <StoreSupplierRow />
              <StoreSupplierRow />
              <StoreSupplierRow />
              <StoreSupplierRow />
              <StoreSupplierRow />
              <StoreSupplierRow />
              <div className="page__slider">
                <div className="slider">
                  <Nav
                    variant="pills"
                    defaultActiveKey="/dashboard/store-supplier-list"
                  >
                    <Nav.Link
                      to="/dashboard/store-supplier-list"
                      href="/dashboard/store-supplier-list"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      1
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/store-supplier-list"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      2
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/store-supplier-list"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      3
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/store-supplier-list"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      4
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/store-supplier-list"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      5
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/store-supplier-list"
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
