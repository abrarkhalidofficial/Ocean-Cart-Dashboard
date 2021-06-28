import React from "react";
import "./Users.scss";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputboxComponent from "../components/Inputbox";
import ConsolidationRow from "../components/ConsolidationRow";
export default class Consolidation extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">All Consolidations</div>
        <div className="panel__main__selctors__filters">
          <div className="panel__main__selctors__filters__entity">
            <InputboxComponent
              placeholder="ID"
              ClassName="input__box"
              type="text"
            />
          </div>
          <div className="panel__main__selctors__filters__entity">
            <InputboxComponent
              placeholder="Name"
              ClassName="input__box"
              type="text"
            />
          </div>
        </div>
        <div className="panel__main__plans">
          <div className="panel__main__role__manager__content">
            <div className="panel__main__freelancer">
              <div className="panel__main__heading__row">
                <div className="panel__main__heading__row__entry">ID</div>
                <div className="panel__main__heading__row__entry">Name</div>
                <div className="panel__main__heading__row__entry">
                  Friendly Name
                </div>
                <div
                  className="panel__main__heading__row__entry"
                  style={{ opacity: 0 }}
                >
                  Action
                </div>
              </div>
              <ConsolidationRow />
              <ConsolidationRow />
              <ConsolidationRow />
              <ConsolidationRow />
              <ConsolidationRow />
              <ConsolidationRow />
              <ConsolidationRow />
              <ConsolidationRow />
              <ConsolidationRow />
              <div className="page__slider">
                <div className="slider">
                  <Nav
                    variant="pills"
                    defaultActiveKey="/dashboard/consolidations"
                  >
                    <Nav.Link
                      to="/dashboard/consolidations"
                      href="/dashboard/consolidations"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      1
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/consolidations"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      2
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/consolidations"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      3
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/consolidations"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      4
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/consolidations"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      5
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/consolidations"
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
