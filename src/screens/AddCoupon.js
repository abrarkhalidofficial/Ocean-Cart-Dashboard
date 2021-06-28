import React from "react";
import "./AddCoupon.scss";
import Button from "../components/Button";
import Select from "react-select";
import InputboxComponent from "../components/Inputbox";

export default function AddCoupon({ screenName }) {
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
            <label htmlFor="" className="c">
              Code ( required )
            </label>
            <InputboxComponent placeholder="Code" ClassName="input__box" />
          </div>
          <div
            className="input__field"
            style={{
              maxWidth: "200px",
              margin: "1em auto",
            }}
          >
            <Button placeholder="Generate Coupon Code" variant="btn" />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Description
            </label>
            <InputboxComponent
              placeholder="Description"
              ClassName="input__box"
              textarea="textarea"
            />
          </div>
          <div className="panel__main__add__product__row">
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Discount Type
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
                Coupon Ammout
              </label>
              <InputboxComponent
                placeholder="Price"
                ClassName="input__box"
                type="number"
              />
            </div>
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Coupon Expiry Date
              </label>
              <InputboxComponent
                placeholder="Code"
                ClassName="input__box"
                type="date"
              />
            </div>
          </div>
          <div
            className="panel__main__add__product__row"
            style={{ margin: "1em 0em" }}
          >
            <div style={{ marginRight: "1em" }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-11"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-11">
                Check this box if the coupon grants free shipping
              </label>
            </div>
            <input
              className="styled-checkbox"
              id="styled-checkbox-12"
              type="checkbox"
              value="value1"
            />
            <label htmlFor="styled-checkbox-12">
              Check this box if the coupon cannot be used in conjunction with
              other coupons.
            </label>
          </div>
          <div
            className="panel__main__add__product__row"
            style={{ margin: "1em 0em" }}
          >
            <input
              className="styled-checkbox"
              id="styled-checkbox-13"
              type="checkbox"
              value="value1"
            />
            <label htmlFor="styled-checkbox-13">
              Check this box if the coupon should not apply to items on sale.
              Per-item coupons will only work if the item is not on sale.
              Per-cart coupons will only work if there are items in the cart
              that are not on sale.
            </label>
          </div>
          <div className="panel__main__add__product__row">
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Minimum spend
              </label>
              <InputboxComponent
                placeholder="No minimum"
                ClassName="input__box"
                type="number"
              />
            </div>
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Maximum spend
              </label>
              <InputboxComponent
                placeholder="No maximum"
                ClassName="input__box"
                type="number"
              />
            </div>
          </div>
          <div className="panel__main__add__product__row">
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Exclude product
              </label>
              <Select
                // defaultValue={[colourOptions[2], colourOptions[3]]}
                isMulti
                name="colors"
                options={Options}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Exclude catagory
              </label>
              <Select
                // defaultValue={[colourOptions[2], colourOptions[3]]}
                isMulti
                name="colors"
                options={Options}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>
        </div>
        <div className="panel__main__add__product__col">
          <div className="">
            <div className="input__field">
              <Button placeholder="Save Draft" variant="upload-btn" />
            </div>
            <div className="input__field">
              <Button placeholder="Add Product" variant="btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
