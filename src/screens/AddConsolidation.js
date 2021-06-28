import React from "react";
import "./AddCoupon.scss";
import Button from "../components/Button";
import InputboxComponent from "../components/Inputbox";

export default function AddCashOnDelivery({ screenName }) {
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
