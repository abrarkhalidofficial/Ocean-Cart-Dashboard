import React from "react";
import Button from "../components/Button";
import { Nav } from "react-bootstrap";
import userImg from "../assets/userPic.png";

export default function MovementsRow() {
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
            toPath="/dashboard/movement-details"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <Button
            variant="link"
            toPath="/dashboard/edit-movement"
            placeholder="Edit"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <Button variant="btn-delete" placeholder="Remove" />
        </div>
      </div>
    </Nav.Link>
  );
}
