import React, { useState } from "react";
import Button from "../components/Button";
import { Nav, Alert, Dropdown, Col, ButtonGroup } from "react-bootstrap";
import userImg from "../assets/userPic.png";
import productPic from "../assets/productPic.png";

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

export default function OrdersRow() {
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
    <Nav.Link
      className="panel__main__row"
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident possimus illo officiis quis velit odit. Voluptate et
              magni dolorem neque!
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
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-direction",
          width: "100%",
          marginTop: "1em",
        }}
      >
        <img
          src={productPic}
          alt="productPic"
          style={{ width: "30px", marginRight: "1em" }}
        />
        <img
          src={productPic}
          alt="productPic"
          style={{ width: "30px", marginRight: "1em" }}
        />
        <img
          src={productPic}
          alt="productPic"
          style={{ width: "30px", marginRight: "1em" }}
        />
        <img
          src={productPic}
          alt="productPic"
          style={{ width: "30px", marginRight: "1em" }}
        />
        <img
          src={productPic}
          alt="productPic"
          style={{ width: "30px", marginRight: "1em" }}
        />
        <img
          src={productPic}
          alt="productPic"
          style={{ width: "30px", marginRight: "1em" }}
        />
        <img
          src={productPic}
          alt="productPic"
          style={{ width: "30px", marginRight: "1em" }}
        />
      </div>
    </Nav.Link>
  );
}
