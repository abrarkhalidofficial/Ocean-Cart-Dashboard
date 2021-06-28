import React from "react";
import "./Users.scss";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CashOnDeliveryRow from "../components/CashOnDeliveryRow";
export default class CashOnDelivery extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">All Cash On Delivery</div>
        <div className="panel__main__plans">
          <div className="panel__main__role__manager__content">
            <div className="panel__main__freelancer">
              <div className="panel__main__heading__row">
                <div className="panel__main__heading__row__entry">ID</div>
                <div className="panel__main__heading__row__entry">Amount</div>
                <div className="panel__main__heading__row__entry">Created</div>
                <div className="panel__main__heading__row__entry">Show</div>
              </div>
              <CashOnDeliveryRow />
              <CashOnDeliveryRow />
              <CashOnDeliveryRow />
              <CashOnDeliveryRow />
              <CashOnDeliveryRow />
              <CashOnDeliveryRow />
              <CashOnDeliveryRow />
              <CashOnDeliveryRow />
              <CashOnDeliveryRow />
              <div className="page__slider">
                <div className="slider">
                  <Nav
                    variant="pills"
                    defaultActiveKey="/dashboard/bank-deposite"
                  >
                    <Nav.Link
                      to="/dashboard/bank-deposite"
                      href="/dashboard/bank-deposite"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      1
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/bank-deposite"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      2
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/bank-deposite"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      3
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/bank-deposite"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      4
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/bank-deposite"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      5
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/bank-deposite"
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
