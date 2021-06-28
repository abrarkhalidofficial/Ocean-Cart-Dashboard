import React from "react";
import "./AddCoupon.scss";
import Button from "../components/Button";
import InputboxComponent from "../components/Inputbox";

export default function FixMissingItems({ screenName }) {
  return (
    <div className="panel__conatainer">
      <div className="panel__heading">Fix Missing Items</div>
      <div className="panel__main__add__product">
        <div className="panel__main__add__product__col__xl">
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Check Status of Movement Items(I-XXXX)
            </label>
            <InputboxComponent
              placeholder=""
              ClassName="input__box"
              textarea="textarea"
            />
            <div style={{ width: "200px", marginTop: ".5em" }}>
              <Button placeholder="Check" variant="upload-btn" />
            </div>
          </div>
          <div className="panel__main__add__product__row">
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Json to CSV converter
              </label>
              <div style={{ marginBottom: ".5em" }}>
                <InputboxComponent
                  placeholder="Movement ID"
                  ClassName="input__box"
                />
              </div>
              <InputboxComponent
                placeholder="Consolidation Ids (I-xxx)"
                ClassName="input__box"
                textarea="textarea"
              />
              <div style={{ width: "200px", marginTop: ".5em" }}>
                <Button placeholder="Check" variant="upload-btn" />
              </div>
            </div>
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Add/Modify items in consolidation
              </label>
              <div style={{ marginBottom: ".5em" }}>
                <InputboxComponent
                  placeholder="Consolidation ID"
                  ClassName="input__box"
                />
              </div>
              <InputboxComponent
                placeholder="Consolidation Ids (I-xxx)"
                ClassName="input__box"
                textarea="textarea"
              />
              <div style={{ width: "300px", marginTop: ".5em" }}>
                <Button
                  placeholder="Add Items to consolidation"
                  variant="upload-btn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
