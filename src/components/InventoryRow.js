import React from "react";
import Button from "./Button";
import { Nav } from "react-bootstrap";
import userImg from "../assets/userPic.png";
import InputboxComponent from "./Inputbox";

export default function InventoryRow() {
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
