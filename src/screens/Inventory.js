import React from "react";
import "./Users.scss";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputboxComponent from "../components/Inputbox";
import InventoryRow from "../components/InventoryRow";
import Select from "react-select";
export default class Inventory extends React.Component {
  render() {
    const Options = [
      { value: "Fixed Cart Discount", label: "Fixed Cart Discount" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Inventory</div>
        <div className="panel__main__selctors__filters">
          <InputboxComponent
            placeholder="Search"
            ClassName="input__box"
            type="search"
          />
          <div className="panel__main__selctors__filters__entity">
            <InputboxComponent
              placeholder="SKU"
              ClassName="input__box"
              type="text"
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
                <div className="panel__main__heading__row__entry">Product</div>
                <div className="panel__main__heading__row__entry">SKU</div>
                <div className="panel__main__heading__row__entry">
                  Confirmed
                </div>
                <div className="panel__main__heading__row__entry">
                  Condition
                </div>
                <div className="panel__main__heading__row__entry">
                  Location/Sub Location
                </div>
                <div className="panel__main__heading__row__entry">Price</div>
                <div className="panel__main__heading__row__entry">
                  Created At
                </div>
                <div className="panel__main__heading__row__entry">
                  Available
                </div>
                <div
                  className="panel__main__heading__row__entry"
                  style={{ width: "200px" }}
                ></div>
                <div className="panel__main__heading__row__entry">
                  Edit Quantity Available
                </div>
              </div>
              <InventoryRow />
              <InventoryRow />
              <InventoryRow />
              <InventoryRow />
              <InventoryRow />
              <InventoryRow />
              <InventoryRow />
              <InventoryRow />
              <div className="page__slider">
                <div className="slider">
                  <Nav variant="pills" defaultActiveKey="/dashboard/products">
                    <Nav.Link
                      to="/dashboard/products"
                      href="/dashboard/products"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      1
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/products"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      2
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/products"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      3
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/products"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      4
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/products"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      5
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/products"
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
