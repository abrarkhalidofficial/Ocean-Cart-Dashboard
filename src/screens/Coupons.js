import React from "react";
import "./Users.scss";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CouponsRow from "../components/CouponsRow";
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
