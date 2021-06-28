import React from "react";
import "./Users.scss";
import BankDepositsRow from "../components/BankDepositsRow";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class BankDeposits extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">All Bank Deposits</div>
        <div className="panel__main__plans">
          <div className="panel__main__role__manager__content">
            <div className="panel__main__freelancer">
              <div className="panel__main__heading__row">
                <div className="panel__main__heading__row__entry">ID</div>
                <div className="panel__main__heading__row__entry">Amount</div>
                <div className="panel__main__heading__row__entry">Verified</div>
                <div className="panel__main__heading__row__entry">Created</div>
                <div className="panel__main__heading__row__entry">Bank</div>
                <div className="panel__main__heading__row__entry">Ref</div>
                <div
                  className="panel__main__heading__row__entry"
                  style={{ width: "250px" }}
                ></div>
                <div
                  className="panel__main__heading__row__entry"
                  style={{ opacity: 0 }}
                >
                  ------------------------------
                </div>
              </div>
              <BankDepositsRow />
              <BankDepositsRow />
              <BankDepositsRow />
              <BankDepositsRow />
              <BankDepositsRow />
              <BankDepositsRow />
              <BankDepositsRow />
              <BankDepositsRow />
              <BankDepositsRow />
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
