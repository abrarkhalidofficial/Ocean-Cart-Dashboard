import React from "react";
import "./AddProduct.scss";
import Button from "../components/Button";
import Select from "react-select";
import InputboxComponent from "../components/Inputbox";

export default function AddProduct({ screenName }) {
  const Options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [showCatagoryEdit, setShowCatagoryEdit] = React.useState(false);
  return (
    <div className="panel__conatainer">
      <div className="panel__heading">{screenName}</div>
      <div className="panel__main__add__product">
        <div className="panel__main__add__product__col__xl">
          <div className="panel__main__add__product__row">
            <div className="input__field">
              <label htmlFor="" className="c">
                Name (Required)
              </label>
              <InputboxComponent placeholder="Name" ClassName="input__box" />
            </div>
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Product Vendor
              </label>
              <InputboxComponent placeholder="Amazon" ClassName="input__box" />
            </div>
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
              <label htmlFor="" className="c">
                Price (Required)
              </label>
              <InputboxComponent placeholder="Price" ClassName="input__box" />
            </div>
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Selling Price
              </label>
              <InputboxComponent placeholder="Price" ClassName="input__box" />
            </div>
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Media
            </label>
            <div className="input__field__box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="25.5"
                viewBox="0 0 21 25.5"
              >
                <path
                  id="Icon_material-file-upload"
                  data-name="Icon material-file-upload"
                  d="M13.5,24h9V15h6L18,4.5,7.5,15h6Zm-6,3h21v3H7.5Z"
                  transform="translate(-7.5 -4.5)"
                  fill="#242424"
                />
              </svg>
              <span>Upload </span>
              <input type="file" />
            </div>
          </div>
          <div className="panel__main__add__product__row">
            <div className="input__field">
              <label htmlFor="" className="c">
                Quantity
              </label>
              <InputboxComponent
                placeholder="Quantity"
                ClassName="input__box"
              />
            </div>
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                SKU
              </label>
              <InputboxComponent placeholder="SKU" ClassName="input__box" />
            </div>
          </div>
          <div className="panel__main__add__product__row">
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Weight
              </label>
              <InputboxComponent placeholder="Weight" ClassName="input__box" />
            </div>
            <div className="input__field"></div>
          </div>
        </div>
        <div className="panel__main__add__product__col">
          <div className="input__field">
            <Button placeholder="Save Draft" variant="upload-btn" />
          </div>
          <div className="input__field">
            <Button placeholder="Add Product" variant="btn" />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Catagory
            </label>
            <div className="catagory__card">
              <input
                className="styled-checkbox"
                id="styled-checkbox-2"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-2">Remember Me</label>
              <input
                className="styled-checkbox"
                id="styled-checkbox-3"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-3">Remember Me</label>
              <input
                className="styled-checkbox"
                id="styled-checkbox-4"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-4">Remember Me</label>
              <input
                className="styled-checkbox"
                id="styled-checkbox-5"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-5">Remember Me</label>
              <input
                className="styled-checkbox"
                id="styled-checkbox-6"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-6">Remember Me</label>
              <input
                className="styled-checkbox"
                id="styled-checkbox-7"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-7">Remember Me</label>
              <input
                className="styled-checkbox"
                id="styled-checkbox-8"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-8">Remember Me</label>
              <input
                className="styled-checkbox"
                id="styled-checkbox-9"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-9">Remember Me</label>
              <input
                className="styled-checkbox"
                id="styled-checkbox-10"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-10">Remember Me</label>
              <button
                className="catagory__card__btn"
                onClick={() => {
                  setShowCatagoryEdit(true);
                }}
              >
                Add New Catagory
              </button>
            </div>
            {showCatagoryEdit ? (
              <form>
                <InputboxComponent
                  placeholder="Add New Catagory Name"
                  ClassName="input__box"
                />
                <div style={{ height: "1em" }}></div>
                <Button
                  placeholder="Add catagory"
                  variant="btn"
                  onClick={() => {
                    setShowCatagoryEdit(false);
                  }}
                />
              </form>
            ) : null}
          </div>
          <div className="veriant__card">
            <div className="panel__main__add__variant__row">
              <div className="panel__main__add__variant__row__heading">
                Add Veriant
              </div>
              <div style={{ width: "100px" }}>
                <Button placeholder="Add " variant="btn" />
              </div>
            </div>
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Veriant Group Name
              </label>
              <InputboxComponent
                placeholder="Veriant Group Name"
                ClassName="input__box"
              />
            </div>
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Veriant Option
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
      </div>
    </div>
  );
}
