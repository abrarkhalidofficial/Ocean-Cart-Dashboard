import React, { useState } from "react";
import "./Users.scss";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import userImg from "../assets/userPic.png";
import InputboxComponent from "../components/Inputbox";
import Select from "react-select";

function ProductsRow() {
  const [option, setOption] = useState(false);
  return (
    <Nav.Link className="panel__main__row">
      <div className="panel__main__row__entry">
        <img
          src={userImg}
          alt="userImg"
          style={{ width: "40px", marginRight: "1em" }}
        />
        Product Name
      </div>
      <div className="panel__main__row__entry">2424</div>
      <div className="panel__main__row__entry">In Stock</div>
      <div className="panel__main__row__entry">$34</div>
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
        <button
          className="panel__main__row__entry__btn"
          onClick={() => {
            if (option === false) {
              setOption(true);
            } else if (option === true) {
              setOption(false);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="6"
            viewBox="0 0 24 6"
            fill="currentColor"
          >
            <g
              id="Group_345"
              data-name="Group 345"
              transform="translate(-1686 -405)"
            >
              <circle
                id="Ellipse_58"
                data-name="Ellipse 58"
                cx="3"
                cy="3"
                r="3"
                transform="translate(1686 405)"
              />
              <circle
                id="Ellipse_59"
                data-name="Ellipse 59"
                cx="3"
                cy="3"
                r="3"
                transform="translate(1695 405)"
              />
              <circle
                id="Ellipse_60"
                data-name="Ellipse 60"
                cx="3"
                cy="3"
                r="3"
                transform="translate(1704 405)"
              />
            </g>
          </svg>
          {option ? (
            <div className="panel__main__row__entry__option">
              <Nav.Link
                className="panel__main__row__entry__option__entry"
                as={Link}
                to="/dashboard/edit-product"
              >
                Edit
              </Nav.Link>
              <button className="panel__main__row__entry__option__entry">
                Duplicate
              </button>
              <button
                className="panel__main__row__entry__option__entry"
                style={{ color: "#e33e3e" }}
              >
                Delete
              </button>
              <Nav.Link
                className="panel__main__row__entry__option__entry"
                as={Link}
                to="/dashboard/product-review"
              >
                See Review
              </Nav.Link>
            </div>
          ) : null}
        </button>
      </div>
    </Nav.Link>
  );
}
export default class Products extends React.Component {
  render() {
    const Options = [
      { value: "Fixed Cart Discount", label: "Fixed Cart Discount" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">All Products</div>
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
                <div className="panel__main__heading__row__entry">Stocks</div>
                <div className="panel__main__heading__row__entry">Price</div>
                <div className="panel__main__heading__row__entry">
                  Catogries
                </div>
                <div className="panel__main__heading__row__entry">Options</div>
              </div>
              <ProductsRow />
              <ProductsRow />
              <ProductsRow />
              <ProductsRow />
              <ProductsRow />
              <ProductsRow />
              <ProductsRow />
              <ProductsRow />
              <ProductsRow />
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
