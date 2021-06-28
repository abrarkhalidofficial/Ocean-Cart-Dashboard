import React from "react";
import "./Users.scss";
import MovementsRow from "../components/MovementsRow";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
export default class Movements extends React.Component {
  render() {
    const Options = [
      { value: "Fixed Cart Discount", label: "Fixed Cart Discount" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">All Movements</div>
        <div className="panel__main__selctors__filters">
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
                <div className="panel__main__heading__row__entry">Origin</div>
                <div className="panel__main__heading__row__entry">
                  Destination
                </div>
                <div className="panel__main__heading__row__entry">I Number</div>
                <div className="panel__main__heading__row__entry">Departed</div>
                <div className="panel__main__heading__row__entry">Arrived</div>
                <div className="panel__main__heading__row__entry">
                  Item Count
                </div>
                <div className="panel__main__heading__row__entry">
                  Tracking No.
                </div>
                <div
                  className="panel__main__heading__row__entry"
                  style={{ opacity: 0 }}
                >
                  -------------------------------
                </div>
              </div>
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
              <MovementsRow />
              <div className="page__slider">
                <div className="slider">
                  <Nav
                    variant="pills"
                    defaultActiveKey="/dashboard/store-supplier-list"
                  >
                    <Nav.Link
                      to="/dashboard/store-supplier-list"
                      href="/dashboard/store-supplier-list"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      1
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/store-supplier-list"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      2
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/store-supplier-list"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      3
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/store-supplier-list"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      4
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/store-supplier-list"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      5
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/store-supplier-list"
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
