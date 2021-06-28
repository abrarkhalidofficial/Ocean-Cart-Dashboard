import React from "react";
import Button from "../components/Button";
import { Nav } from "react-bootstrap";
import userImg from "../assets/userPic.png";

export default function UsersRow() {
  return (
    <Nav.Link className="panel__main__row">
      <div className="panel__main__row__entry">23242</div>
      <div className="panel__main__row__entry">
        <img
          src={userImg}
          alt="userImg"
          style={{ width: "40px", marginRight: "1em" }}
        />
        User Name
      </div>
      <div className="panel__main__row__entry">National ID</div>
      <div className="panel__main__row__entry">XXXXXXXXX</div>
      <div className="panel__main__row__entry">No</div>
      <div className="panel__main__row__entry">27 May 2020</div>
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
            toPath="/dashboard/user-review"
            placeholder="Reviews"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <Button variant="btn-delete" placeholder="Remove" />
        </div>
      </div>
    </Nav.Link>
  );
}
