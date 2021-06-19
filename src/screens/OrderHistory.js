import React from "react";
import "./Users.scss";
import Button from "../components/Button";
import { Nav, Form, Button as ButtonReact, Row } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import userImg from "../assets/userPic.png";
import InputboxComponent from "../components/Inputbox";
import Select from "react-select";

function OrdersHistoryRow() {
  return (
    <Nav.Link
      className="panel__main__row"
      as={Link}
      to="/dashboard/order-details"
    >
      <div className="panel__main__row__entry">#23242</div>
      <div className="panel__main__row__entry">27 May 2020</div>
      <div className="panel__main__row__entry">John Doe</div>
      <div className="panel__main__row__entry">$345</div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__badge">Processing</div>
      </div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__badge">Payment Pending</div>
      </div>
      <div className="panel__main__row__entry">1 Item</div>
      <div className="panel__main__row__entry">Standard</div>
    </Nav.Link>
  );
}
export default class OrdersHistory extends React.Component {
  render() {
    const Options = [
      { value: "Fixed Cart Discount", label: "Fixed Cart Discount" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Order History</div>
        <div className="panel__main__selctors__filters">
          <InputboxComponent
            placeholder="Search"
            ClassName="input__box"
            type="search"
          />
<div className="panel__main__selctors__filters__entity">
            <Select
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              name="colors"
              options={Options}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="panel__main__selctors__filters__entity">
            <Select
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              name="colors"
              options={Options}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="panel__main__selctors__filters__entity">
            <Select
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              name="colors"
              options={Options}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="panel__main__selctors__filters__entity">
            <Select
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              name="colors"
              options={Options}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </div>
        <div className="panel__main__plans">
          <div className="panel__main__role__manager__content">
            <div className="panel__main__freelancer">
              <div className="panel__main__heading__row">
                <div className="panel__main__heading__row__entry">ID</div>
                <div className="panel__main__heading__row__entry">Date</div>
                <div className="panel__main__heading__row__entry">Customer</div>
                <div className="panel__main__heading__row__entry">Total</div>
                <div className="panel__main__heading__row__entry">Status</div>
                <div className="panel__main__heading__row__entry">Payment</div>
                <div className="panel__main__heading__row__entry">Items</div>
                <div className="panel__main__heading__row__entry">
                  Delivery Methode
                </div>
              </div>
              <OrdersHistoryRow />
              <OrdersHistoryRow />
              <OrdersHistoryRow />
              <OrdersHistoryRow />
              <OrdersHistoryRow />
              <OrdersHistoryRow />
              <OrdersHistoryRow />
              <OrdersHistoryRow />
              <OrdersHistoryRow />
              <div className="page__slider">
                <div className="slider">
                  <Nav
                    variant="pills"
                    defaultActiveKey="/dashboard/orders-history"
                  >
                    <Nav.Link
                      to="/dashboard/orders-history"
                      href="/dashboard/orders-history"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      1
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/orders-history"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      2
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/orders-history"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      3
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/orders-history"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      4
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/orders-history"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      5
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/orders-history"
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
