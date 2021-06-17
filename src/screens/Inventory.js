import React, { useState } from "react";
import "./Users.scss";
import Button from "../components/Button";
import { Nav, Form, Button as ButtonReact, Row } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import userImg from "../assets/userPic.png";
import InputboxComponent from "../components/Inputbox";

function InventoryRow() {
  const [option, setOption] = useState(false);
  return (
    <Nav.Link className="panel__main__row">
      <div className="panel__main__row__entry">
        <img
          src={userImg}
          alt="userImg"
          style={{ width: "30px", marginRight: ".5em" }}
        />
        Product
      </div>
      <div className="panel__main__row__entry">2424</div>
      <div className="panel__main__row__entry">Not confirmed</div>
      <div className="panel__main__row__entry">New</div>
      <div className="panel__main__row__entry">Distribution Center - Dubai</div>
      <div className="panel__main__row__entry">$34</div>
      <div className="panel__main__row__entry">27 May 2020</div>
      <div className="panel__main__row__entry">30</div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__cta">
          <div style={{ width: "100px" }}>
            <InputboxComponent
              placeholder="0"
              ClassName="input__box"
              type="number"
            />
          </div>
          <div style={{ width: "50px" }}>
            <Button variant="btn" placeholder="Add" />
          </div>
          <div style={{ width: "50px" }}>
            <Button variant="upload-btn" placeholder="Set" />
          </div>
        </div>
      </div>
    </Nav.Link>
  );
}
export default class Inventory extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Inventory</div>
        <div className="panel__main__plans">
          <div className="panel__main__role__manager__content">
            <div className="panel__main__freelancer">
              <div className="panel__main__heading__row">
                <div className="panel__main__heading__row__entry">Product</div>
                <div className="panel__main__heading__row__entry">SKU</div>
                <div className="panel__main__heading__row__entry">
                  Confirmed
                </div>
                <div className="panel__main__heading__row__entry">
                  Condition
                </div>
                <div className="panel__main__heading__row__entry">
                  Location/Sub Location
                </div>
                <div className="panel__main__heading__row__entry">Price</div>
                <div className="panel__main__heading__row__entry">
                  Created At
                </div>
                <div className="panel__main__heading__row__entry">
                  Available
                </div>
                <div
                  className="panel__main__heading__row__entry"
                  style={{ width: "200px" }}
                ></div>
                <div className="panel__main__heading__row__entry">
                  Edit Quantity Available
                </div>
              </div>
              <InventoryRow />
              <InventoryRow />
              <InventoryRow />
              <InventoryRow />
              <InventoryRow />
              <InventoryRow />
              <InventoryRow />
              <InventoryRow />
              <div className="page__slider">
                <div className="slider">
                  <Nav variant="pills" defaultActiveKey="/dashboard/products">
                    <Nav.Link
                      to="/dashboard/products"
                      href="/dashboard/products"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      1
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/products"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      2
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/products"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      3
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/products"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      4
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/products"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      5
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/products"
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
