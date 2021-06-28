import React from "react";
import "./OrderPanel.scss";
import productImg from "../assets/productPic.png";
import TrackOrderProduct from "../components/TrackOrderProduct";

export default class OrderPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">{this.props.screenName}</div>
        <div className="panel__main__plans">
          <TrackOrderProduct productImg={productImg} />
          <TrackOrderProduct productImg={productImg} />
          <TrackOrderProduct productImg={productImg} />
        </div>
      </div>
    );
  }
}
