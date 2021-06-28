import React from "react";
import "./AddCoupon.scss";
import Button from "../components/Button";
import Select from "react-select";
import InputboxComponent from "../components/Inputbox";

export default function AddStoreSupplier({ screenName }) {
  const Options = [
    { value: "Fixed Cart Discount", label: "Fixed Cart Discount" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
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
              placeholder="Supplier"
              ClassName="input__box"
              type="text"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Country
            </label>
            <Select
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              name="colors"
              options={Options}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Status
            </label>
            <Select
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              name="colors"
              options={Options}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Catagory
            </label>
            <Select
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              name="colors"
              options={Options}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Link
            </label>
            <InputboxComponent
              placeholder="link"
              ClassName="input__box"
              type="text"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Created
            </label>
            <InputboxComponent
              placeholder=""
              ClassName="input__box"
              type="date"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Products
            </label>
            <InputboxComponent
              placeholder="20"
              ClassName="input__box"
              type="number"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              In Stock
            </label>
            <InputboxComponent
              placeholder="10"
              ClassName="input__box"
              type="number"
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
