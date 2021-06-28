import React from "react";
import "./Users.scss";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputboxComponent from "../components/Inputbox";
import OrdersRow from "../components/OrdersRow";
import Select from "react-select";
export default class Orders extends React.Component {
  render() {
    const Options = [
      { value: "Fixed Cart Discount", label: "Fixed Cart Discount" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">All Orders</div>
        <div>
          <Nav variant="pills" defaultActiveKey="/dashboard/orders">
            <Nav.Link
              to="/dashboard/orders"
              href="/dashboard/orders"
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
              to="/dashboard/orders"
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
              Processing
            </Nav.Link>
            <Nav.Link
              to="/dashboard/orders"
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
              Required Manual Ordering
            </Nav.Link>
            <Nav.Link
              to="/dashboard/orders"
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
              Approved
            </Nav.Link>
            <Nav.Link
              to="/dashboard/orders"
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
              Prepared
            </Nav.Link>
            <Nav.Link
              to="/dashboard/orders"
              as={Link}
              className="posting__nav__link"
              eventKey="link-5"
            >
              <div
                className="posting__nav__link__badge"
                style={{
                  backgroundColor: "#ffae0c",
                }}
              >
                100
              </div>
              Shipped
            </Nav.Link>
            <Nav.Link
              to="/dashboard/orders"
              as={Link}
              className="posting__nav__link"
              eventKey="link-6"
            >
              <div
                className="posting__nav__link__badge"
                style={{
                  backgroundColor: "#ffae0c",
                }}
              >
                100
              </div>
              Delivered
            </Nav.Link>
            <Nav.Link
              to="/dashboard/orders"
              as={Link}
              className="posting__nav__link"
              eventKey="link-7"
            >
              <div
                className="posting__nav__link__badge"
                style={{
                  backgroundColor: "#ffae0c",
                }}
              >
                100
              </div>
              Returned
            </Nav.Link>
            <Nav.Link
              to="/dashboard/orders"
              as={Link}
              className="posting__nav__link"
              eventKey="link-8"
            >
              <div
                className="posting__nav__link__badge"
                style={{
                  backgroundColor: "#ffae0c",
                }}
              >
                100
              </div>
              Cancelled
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
                <div className="panel__main__heading__row__entry">Image</div>
                <div
                  className="panel__main__heading__row__entry"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "1em",
                    alignItems: "center",
                  }}
                >
                  <span>Placed/</span>
                  <span>Created</span>
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
