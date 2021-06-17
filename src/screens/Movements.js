import React from "react";
import "./Users.scss";
import Button from "../components/Button";
import { Nav, Form, Button as ButtonReact, Row } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import userImg from "../assets/userPic.png";

function MovementsRow() {
  return (
    <Nav.Link className="panel__main__row">
      <div
        className="panel__main__row__entry"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <span style={{ maxWidth: "120px" }}>Distribution Center - Dubai</span>
        <span
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "1em",
          }}
        >
          <img
            src={userImg}
            alt="userImg"
            style={{ width: "40px", marginRight: ".5em" }}
          />
          <img
            src={userImg}
            alt="userImg"
            style={{ width: "40px", marginRight: ".5em" }}
          />
          <img
            src={userImg}
            alt="userImg"
            style={{ width: "40px", marginRight: ".5em" }}
          />
        </span>
      </div>
      <div className="panel__main__row__entry">
        <span style={{ maxWidth: "50px", margin: "0em 1em" }}>
          Delivery Address
        </span>
      </div>
      <div className="panel__main__row__entry">242556</div>
      <div className="panel__main__row__entry">
        <span style={{ maxWidth: "120px" }}>27 May 2020 - 1:30 pm</span>
      </div>
      <div className="panel__main__row__entry" style={{ maxWidth: "100px" }}>
        <span style={{ maxWidth: "120px" }}>30 May 2020 - 1:30 pm</span>
      </div>
      <div className="panel__main__row__entry">24</div>
      <div className="panel__main__row__entry">
        <span style={{ maxWidth: "100px" }}>Ocean Cart 284928492</span>
      </div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__cta">
          <Button
            variant="link-btn"
            placeholder="Show"
            toPath="/dashboard/users-details"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <Button
            variant="link"
            toPath="/dashboard/users/reviews"
            placeholder="Add"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <Button variant="btn-delete" placeholder="Remove" />
        </div>
      </div>
    </Nav.Link>
  );
}
export default class Movements extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">All Movements</div>
        <div className="panel__main__plans">
          <div className="panel__main__role__manager__content">
            <div className="panel__main__freelancer">
              <div className="panel__main__heading__row">
                <div className="panel__main__heading__row__entry">Origin</div>
                <div className="panel__main__heading__row__entry">
                  Destination
                </div>
                <div className="panel__main__heading__row__entry">I Number</div>
                <div className="panel__main__heading__row__entry">Departed</div>
                <div className="panel__main__heading__row__entry">Arrived</div>
                <div className="panel__main__heading__row__entry">
                  Item Count
                </div>
                <div className="panel__main__heading__row__entry">
                  Tracking No.
                </div>
                <div
                  className="panel__main__heading__row__entry"
                  style={{ opacity: 0 }}
                >
                  -------------------------------
                </div>
              </div>
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
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
