import React from "react";
import "./DashboardPanel.scss";
import Card from "../components/Card";
import productPic from "../assets/productPic.png";
import UserPic from "../assets/userPic.png";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Button from "../components/Button";

const MessagePanelRow = () => {
  return (
    <Nav.Link
      to="/dashboard/messages"
      as={Link}
      className="message__panel__small__row"
    >
      <div className="message__panel__samll__content">
        <img
          src={UserPic}
          alt="user-pic"
          className="message__panel__small__row__img"
        />
        <div className="messenger__name" style={{ fontWeight: "800" }}>
          Francesca Metts
        </div>
      </div>
      <div className="messenger__name">3 Days Ago</div>
    </Nav.Link>
  );
};

function StatsCard({ isData, data, heading, infoContent }) {
  return (
    <Card heading={heading} infoContent={infoContent}>
      {isData ? (
        <div className="panel__card__content__statistics">{data}</div>
      ) : (
        <div className="panel__card__content__statistics__null">
          Nothing Here
        </div>
      )}
    </Card>
  );
}
export default class OrderDetails extends React.Component {
  render() {
    return (
      <div className="panel__conatainer__empty">
        <div className="panel__conatainer__empty__row">
          <Card>
            <div className="order__details__header">
              <div className="order__details__heading">Order Details</div>
              <div className="order__details__cta">
                <Button placeholder="Approve" variant="btn" />
                <div className="order__details__cta__divider"></div>
                <Button placeholder="Decline" variant="btn-delete" />
              </div>
            </div>
          </Card>
        </div>
        <div className="panel__conatainer__empty__row">
          <Card>
            <div className="order__details__product__list">
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
                  <Button placeholder="Decline" variant="btn-delete" />
                </div>
              </div>
            </div>
          </Card>
          <Card />
        </div>
        <div className="panel__conatainer__empty__row">
          <Card
            heading="USA Consolidation Arrival To Departure: "
            headingTimeStamp="2 days, 11 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="59 hours"
          />
          <Card
            heading="USA Consolidation Arrival To Departure:"
            headingTimeStamp="2 days, 11 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="54 hours"
          />
          <Card
            heading="USA Consolidation Arrival To Departure:"
            headingTimeStamp="2 days, 11 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="54 hours"
          />
        </div>
      </div>
    );
  }
}
