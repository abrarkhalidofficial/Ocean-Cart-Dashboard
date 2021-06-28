import React from "react";
import { Nav } from "react-bootstrap";
import productPic from "../assets/productPic.png";
import Button from "./Button";

export default function ProductList() {
  return (
    <Nav.Link className="order__details__product__list__entry">
      <div className="order__details__product__list__entry">
        <div className="order__details__product__list__entry__left">
          <img
            src={productPic}
            alt="productPic"
            className="order__details__product__list__entry__img"
          />
          <div className="order__details__product__list__entry__name">
            Product Name
          </div>
        </div>
        <div className="order__details__product__list__entry__right">
          <div className="order__details__product__list__entry__price">$35</div>
          <Button placeholder="Delete" variant="btn-delete" />
        </div>
      </div>
    </Nav.Link>
  );
}
