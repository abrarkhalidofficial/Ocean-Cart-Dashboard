import React from "react";
import "./JobPostingPanel.scss";
import ButtonComponent from "../components/Button";
import InputBox from "../components/Inputbox";
import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class JobPostingPanel extends React.Component {
  render() {
    const OptionsEducation = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];
    const Options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];

    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Post a Job</div>
        <div style={{ flex: 1 }}>
          <div className="company__details__content">
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Job Title
                </div>
              </div>
              <div className="company__details__row__input__box">
                <InputBox
                  placeholder="Graphic design"
                  ClassName="input__box"
                  type="text"
                />
              </div>
            </div>
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Job Location
                </div>
              </div>
              <div className="company__details__row__input__box">
                <InputBox
                  placeholder="Netherland"
                  ClassName="input__box"
                  type="text"
                />
              </div>
            </div>
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Job Education
                </div>
              </div>
              <div className="company__details__row__input__box">
                <Select
                  // defaultValue={[colourOptions[2], colourOptions[3]]}
                  isMulti
                  name="colors"
                  options={OptionsEducation}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
            </div>
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Specialism
                </div>
              </div>
              <div className="company__details__row__input__box">
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
            <div className="company__details__row__textarea">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Job Description
                </div>
              </div>
              <div className="company__details__row__input__box">
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
            </div>
            <div className="company__details__row__textarea">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Job Requirment
                </div>
              </div>
              <div className="company__details__row__input__box">
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
            </div>
            <div className="company__details__row__textarea">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Trainging Direction
                </div>
              </div>
              <div className="company__details__row__input__box">
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
            </div>
            <div className="company__details__row__textarea">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Company Details
                </div>
              </div>
              <div className="company__details__row__input__box">
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
            </div>
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Job Opening Date
                </div>
              </div>
              <div className="company__details__row__input__box">
                <InputBox ClassName="input__box" type="date" />
              </div>
            </div>
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Job Closing Date
                </div>
              </div>
              <div className="company__details__row__input__box">
                <InputBox ClassName="input__box" type="date" />
              </div>
            </div>
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Job Manager Name
                </div>
              </div>
              <div className="company__details__row__input__box">
                <InputBox
                  placeholder="John Doe"
                  ClassName="input__box"
                  type="text"
                />
              </div>
            </div>
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Job Manager Picture
                </div>
              </div>
              <div
                className="company__details__row__input__box"
                style={{ maxWidth: "200px" }}
              >
                <ButtonComponent variant="upload-btn" placeholder="Upload" />
              </div>
            </div>
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Job Manager Email
                </div>
              </div>
              <div className="company__details__row__input__box">
                <InputBox
                  placeholder="johndoe@gmail.com"
                  ClassName="input__box"
                  type="email"
                />
              </div>
            </div>
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Job Manager Phone
                </div>
              </div>
              <div className="company__details__row__input__box">
                <InputBox
                  placeholder="+92 123 456 789"
                  ClassName="input__box"
                  type="text"
                />
              </div>
            </div>
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Job Manger WhatsApp
                </div>
              </div>
              <div className="company__details__row__input__box">
                <InputBox
                  placeholder="+92 123 456 789"
                  ClassName="input__box"
                  type="text"
                />
              </div>
            </div>
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Job Manager LinkedIn
                </div>
              </div>
              <div className="company__details__row__input__box">
                <InputBox
                  placeholder="URL"
                  ClassName="input__box"
                  type="text"
                />
              </div>
            </div>
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div className="company__details__row__attribute__heading">
                  Salary
                </div>
              </div>
              <div className="company__details__row__input__box">
                <InputBox
                  placeholder="Value"
                  ClassName="input__box"
                  type="number"
                />
              </div>
            </div>
            <div className="company__details__row">
              <div className="company__details__row__attribute">
                <div
                  className="company__details__row__attribute__heading"
                  style={{ color: "transparent" }}
                >
                  Salary
                </div>
              </div>
              <div className="company__details__row__input__box">
                <ButtonComponent variant="btn" placeholder="Save" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
