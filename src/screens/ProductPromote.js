import React from "react";
import "./AddCoupon.scss";
import Button from "../components/Button";
import Select from "react-select";
import InputboxComponent from "../components/Inputbox";

export default function ProductPromote({ screenName }) {
  const Options = [
    { value: "Fixed Cart Discount", label: "Fixed Cart Discount" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="panel__conatainer">
      <div className="panel__heading">Product Promote</div>
      <div className="panel__main__add__product">
        <div className="panel__main__add__product__col__xl">
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Products
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
              Promo Type
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
              Department / Catagory
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
              Description
            </label>
            <InputboxComponent
              placeholder="Description"
              ClassName="input__box"
              textarea="textarea"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Promo Duration
            </label>
            <InputboxComponent
              placeholder=""
              ClassName="input__box"
              type="time"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Sale Banner Picture
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
        </div>
        <div className="panel__main__add__product__col">
          <div className="">
            <div className="input__field">
              <Button placeholder="Publish" variant="btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
