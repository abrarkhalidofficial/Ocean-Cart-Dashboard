import React from "react";
import "./Users.scss";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputboxComponent from "../components/Inputbox";
import OrdersHistoryRow from "../components/OrdersHistoryRow";
import Select from "react-select";
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
        <div>
          <Nav variant="pills" defaultActiveKey="/dashboard/orders-history">
            <Nav.Link
              to="/dashboard/orders-history"
              href="/dashboard/orders-history"
              as={Link}
              className="posting__nav__link"
            >
              <div
                className="posting__nav__link__badge"
                style={{
                  backgroundColor: "#09C956",
                }}
              >
                23
              </div>
              All
            </Nav.Link>
            <Nav.Link
              to="/dashboard/orders-history"
              as={Link}
              className="posting__nav__link"
              eventKey="link-1"
            >
              <div
                className="posting__nav__link__badge"
                style={{
                  backgroundColor: "#5C3DFF",
                }}
              >
                3103
              </div>
              Unfulfilled
            </Nav.Link>
            <Nav.Link
              to="/dashboard/orders-history"
              as={Link}
              className="posting__nav__link"
              eventKey="link-2"
            >
              <div
                className="posting__nav__link__badge"
                style={{
                  backgroundColor: "#ff4d4d",
                }}
              >
                30
              </div>
              Unpaid
            </Nav.Link>
            <Nav.Link
              to="/dashboard/orders-history"
              as={Link}
              className="posting__nav__link"
              eventKey="link-3"
            >
              <div
                className="posting__nav__link__badge"
                style={{
                  backgroundColor: "#ffae0c",
                }}
              >
                100
              </div>
              Open
            </Nav.Link>
            <Nav.Link
              to="/dashboard/orders-history"
              as={Link}
              className="posting__nav__link"
              eventKey="link-4"
            >
              <div
                className="posting__nav__link__badge"
                style={{
                  backgroundColor: "#ffae0c",
                }}
              >
                100
              </div>
              Closed
            </Nav.Link>
          </Nav>
        </div>
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
