import React from "react";
import "./AddCoupon.scss";
import samplePDF from "../assets/sample.pdf";
import Button from "../components/Button";
import InputboxComponent from "../components/Inputbox";

export default function ProductBulkUpload({ screenName }) {
  return (
    <div className="panel__conatainer">
      <div className="panel__heading">Product Bulk Upload</div>
      <div className="panel__main__add__product">
        <div className="panel__main__add__product__col__xl">
          <div className="panel__main__add__product__row">
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Json to CSV converter
              </label>
              <InputboxComponent
                placeholder=""
                ClassName="input__box"
                textarea="textarea"
              />
              <div style={{ width: "200px", marginTop: ".5em" }}>
                <Button placeholder="Convert" variant="upload-btn" />
              </div>
            </div>
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Download Existing Products Data
              </label>
              <InputboxComponent
                placeholder=""
                ClassName="input__box"
                textarea="textarea"
              />
              <div style={{ width: "200px", marginTop: ".5em" }}>
                <Button placeholder="Download" variant="upload-btn" />
              </div>
            </div>
          </div>
          <div className="panel__main__add__product__row">
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Download Template
              </label>
              <Button
                placeholder="Template"
                variant="download-btn"
                downloadLink={samplePDF}
              />
            </div>
            <div className="input__field">
              <label htmlFor="" className="input__field__label">
                Tamplet Instruction
              </label>
              <div style={{ fontWeight: "300" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia dolor accusamus dignissimos minus temporibus facilis
                libero placeat distinctio quam natus aspernatur facere cum
                autem, ab animi voluptates, nobis quas dicta.
              </div>
            </div>
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Upload Product List
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
            <div style={{ width: "200px", marginTop: ".5em" }}>
              <Button placeholder="Upload" variant="upload-btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
