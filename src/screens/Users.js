import React from "react";
import "./Users.scss";
import Button from "../components/Button";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import userImg from "../assets/userPic.png";

function UsersRow() {
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
export default class Users extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Users</div>
        <div className="panel__main__plans">
          <div className="panel__main__role__manager__content">
            <div className="panel__main__freelancer">
              <div className="panel__main__heading__row">
                <div className="panel__main__heading__row__entry">ID</div>
                <div className="panel__main__heading__row__entry">User</div>
                <div className="panel__main__heading__row__entry">
                  Document Type
                </div>
                <div className="panel__main__heading__row__entry">
                  Document Number
                </div>
                <div className="panel__main__heading__row__entry">Verified</div>
                <div className="panel__main__heading__row__entry">Created</div>
                <div
                  className="panel__main__heading__row__entry"
                  style={{ opacity: 0 }}
                >
                  Actions
                </div>
                <div
                  className="panel__main__heading__row__entry"
                  style={{ opacity: 0 }}
                >
                  Actions
                </div>
              </div>
              <UsersRow />
              <UsersRow />
              <UsersRow />
              <UsersRow />
              <UsersRow />
              <UsersRow />
              <UsersRow />
              <UsersRow />
              <UsersRow />
              <div className="page__slider">
                <div className="slider">
                  <Nav variant="pills" defaultActiveKey="/dashboard/users">
                    <Nav.Link
                      to="/dashboard/users"
                      href="/dashboard/users"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      1
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/users"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      2
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/users"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      3
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/users"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      4
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/users"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      5
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/users"
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
