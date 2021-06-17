import React from "react";
import "./Users.scss";
import Button from "../components/Button";
import { Nav, Form, Button as ButtonReact, Row } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import userImg from "../assets/userPic.png";

function OrdersRow() {
  return (
    <Nav.Link className="panel__main__row">
      <div className="panel__main__row__entry">#23242</div>
      <div className="panel__main__row__entry">
        <img src={userImg} alt="userImg" style={{ width: "40px" }} />
      </div>
      <div className="panel__main__row__entry">Placed</div>
      <div className="panel__main__row__entry">Processing</div>
      <div className="panel__main__row__entry">36</div>
      <div className="panel__main__row__entry">$345</div>
      <div className="panel__main__row__entry">$3454</div>
      <div className="panel__main__row__entry">27 May 2020</div>
      <div className="panel__main__row__entry">Abu Dabi</div>
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
        <div className="panel__main__row__entry__cta">
          <Button
            variant="link-btn"
            placeholder="Show"
            toPath="/dashboard/order-details"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <button className="panel__main__row__entry__btn">
            View Note
            <div className="panel__main__row__entry__para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident possimus illo officiis quis velit odit. Voluptate et
              magni dolorem neque!
            </div>
          </button>
        </div>
      </div>
    </Nav.Link>
  );
}
export default class Orders extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">All Orders</div>
        <div className="panel__main__plans">
          <div className="panel__main__role__manager__content">
            <div className="panel__main__freelancer">
              <div className="panel__main__heading__row">
                <div className="panel__main__heading__row__entry">ID</div>
                <div className="panel__main__heading__row__entry">
                  Products Image
                </div>
                <div className="panel__main__heading__row__entry">
                  Placed/Created
                </div>
                <div className="panel__main__heading__row__entry">Status</div>
                <div className="panel__main__heading__row__entry">
                  Weight (kg)
                </div>
                <div className="panel__main__heading__row__entry">Cost</div>
                <div className="panel__main__heading__row__entry">Revenue</div>
                <div className="panel__main__heading__row__entry">
                  Estimated Delivery
                </div>
                <div className="panel__main__heading__row__entry">Country</div>
                <div className="panel__main__heading__row__entry">Info</div>
                <div className="panel__main__heading__row__entry">Show</div>
                <div className="panel__main__heading__row__entry">Note</div>
              </div>
              <OrdersRow />
              <OrdersRow />
              <OrdersRow />
              <OrdersRow />
              <OrdersRow />
              <OrdersRow />
              <OrdersRow />
              <OrdersRow />
              <OrdersRow />
              <div className="page__slider">
                <div className="slider">
                  <Nav variant="pills" defaultActiveKey="/dashboard/orders">
                    <Nav.Link
                      to="/dashboard/orders"
                      href="/dashboard/orders"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      1
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/orders"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      2
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/orders"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      3
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/orders"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      4
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/orders"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      5
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/orders"
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
