import React, { useState } from "react";
import "./Users.scss";
import Button from "../components/Button";
import {
  Nav,
  Form,
  Button as ButtonReact,
  Row,
  Alert,
  Dropdown,
  Col,
  ButtonGroup,
} from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import userImg from "../assets/userPic.png";
import InputboxComponent from "../components/Inputbox";
import Select from "react-select";

function Status({ value }) {
  if (value === "option-1") {
    return (
      <Alert key="live" className="status status-live">
        Live
      </Alert>
    );
  } else if (value === "option-2") {
    return (
      <Alert key="live" className="status status-hold">
        Hold
      </Alert>
    );
  } else if (value === "option-3") {
    return (
      <Alert key="live" className="status status-closed">
        Closed
      </Alert>
    );
  }
}

function OrdersRow() {
  const [selected, setSelected] = useState("option-1");

  function handleChangeLive() {
    setSelected("option-1");
  }
  function handleChangeHold() {
    setSelected("option-2");
  }
  function handleChangeClosed() {
    setSelected("option-3");
  }
  return (
    <Nav.Link className="panel__main__row">
      <div className="panel__main__row__entry">#23242</div>
      <div className="panel__main__row__entry">
        <img src={userImg} alt="userImg" style={{ width: "30px" }} />
      </div>
      <div className="panel__main__row__entry">Placed</div>
      <Col className="status__col">
        <Dropdown as={ButtonGroup}>
          <Status value={selected} />
          <Dropdown.Toggle
            split
            variant="dark"
            id="dropdown-custom-2"
            style={{
              backgroundColor: "#eeeeee",
              borderColor: "#eeeeee",
              color: "#444444",
              height: 36,
            }}
          />
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item
              onClick={handleChangeLive}
              className="status__dropdown"
            >
              <div
                className="status__option"
                style={{
                  backgroundColor: "#09C956",
                }}
              ></div>
              Live
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleChangeHold}
              className="status__dropdown"
            >
              <div
                className="status__option"
                style={{
                  backgroundColor: "#ffae0c",
                }}
              ></div>
              Hold
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleChangeClosed}
              className="status__dropdown"
            >
              <div
                className="status__option"
                style={{
                  backgroundColor: "#ff4d4d",
                }}
              ></div>
              Closed
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
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
