import React from "react";
import "./Users.scss";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoreSupplierRow from "../components/StoreSupplierRow";
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
