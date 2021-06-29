import React from "react";
import { Accordion, Nav } from "react-bootstrap";
import productPic from "../assets/productPic.png";
import Button from "./Button";
import TrackOrderProduct from "./TrackOrderProduct";

export default function ProductList() {
  return (
    <Accordion defaultActiveKey="0">
      <Nav.Link
        className="order__details__product__list__entry"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Accordion.Toggle
          eventKey="1"
          className="Accordion__toggle__order__details__product__list__entry"
        >
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
              <div className="order__details__product__list__entry__price">
                $35
              </div>
              <Button placeholder="Delete" variant="btn-delete" />
            </div>
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <>
            <div className="order__details__product__list__entry">
              <div className="order__details__product__list__entry__left">
                <div className="order__details__product__list__entry__price">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                  sapiente maiores assumenda rerum obcaecati eos et quibusdam
                  deleniti.
                </div>
              </div>
            </div>
            <div className="order__details__product__list__entry">
              <div className="order__details__product__list__entry__left">
                <div className="order__details__product__list__entry__price">
                  Delivery: 1 day
                </div>
              </div>
              <div className="order__details__product__list__entry__right">
                <div className="order__details__product__list__entry__price">
                  Weight: 800 grams
                </div>
              </div>
            </div>
            <div className="order__details__product__list__entry">
              <div className="order__details__product__list__entry__left">
                <div className="order__details__product__list__entry__price">
                  Price: $26.14
                </div>
              </div>
              <div className="order__details__product__list__entry__right">
                <div className="order__details__product__list__entry__price">
                  Marchant: Amazon_UK
                </div>
              </div>
            </div>
            <div className="order__details__product__list__entry">
              <div className="order__details__product__list__entry__left">
                <div className="panel__card__content__notes">
                  <a
                    href="https://www.google.com"
                    style={{ margin: "0em", padding: "0em" }}
                  >
                    Amazon Link
                  </a>
                </div>
              </div>
              <div className="order__details__product__list__entry__right">
                <div className="order__details__product__list__entry__price">
                  20/10/2020
                </div>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <TrackOrderProduct />
            </div>
            <div
              style={{
                margin: ".5em auto",
                width: "60%",
                height: "2px",
                backgroundColor: "gray",
              }}
            ></div>
          </>
        </Accordion.Collapse>
      </Nav.Link>
    </Accordion>
  );
}
