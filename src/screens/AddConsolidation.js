import React from "react";
import "./AddCoupon.scss";
import productImg from "../assets/productPic.png";
import Button from "../components/Button";
import Select from "react-select";
import { Nav, Form, Button as ButtonReact, Row } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import InputboxComponent from "../components/Inputbox";

export default function AddCashOnDelivery({ screenName }) {
  const Options = [
    { value: "Fixed Cart Discount", label: "Fixed Cart Discount" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [showCatagoryEdit, setShowCatagoryEdit] = React.useState(false);
  return (
    <div className="panel__conatainer">
      <div className="panel__heading">{screenName}</div>
      <div className="panel__main__add__product">
        <div className="panel__main__add__product__col__xl">
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Name
            </label>
            <InputboxComponent
              placeholder="supplier"
              ClassName="input__box"
              type="text"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Friendly Name
            </label>
            <InputboxComponent
              placeholder="Supplier Wearhouse"
              ClassName="input__box"
              type="text"
            />
          </div>
        </div>
        <div className="panel__main__add__product__col">
          <div className="">
            <div className="input__field">
              <Button placeholder="Save" variant="btn" />
            </div>
            <div className="input__field">
              <Button placeholder="Discard" variant="upload-btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
