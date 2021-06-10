import React from "react";
import "./JobPostingPanel.scss";
import userPic from "../assets/userPic.png";
export default class ApplicantsDetailsPanel extends React.Component {
  render() {
    return (
      <div className="company__details__content">
        <div className="company__details__row">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Job Title
            </div>
          </div>
          <div className="company__details__row__value">Graphic design</div>
        </div>
        <div className="company__details__row">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Job Location
            </div>
          </div>
          <div className="company__details__row__value">Netherland</div>
        </div>
        <div className="company__details__row">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Job Education
            </div>
          </div>
          <div className="company__details__row__value">
            <div className="company__details__row__value__badge">Degree 1</div>
            <div className="company__details__row__value__badge">Degree 2</div>
            <div className="company__details__row__value__badge">Degree 3</div>
            <div className="company__details__row__value__badge">Degree 4</div>
          </div>
        </div>
        <div className="company__details__row__textarea">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Job Description
            </div>
          </div>
          <div className="company__details__row__value">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            corporis magni soluta pariatur officiis nam earum? Quis alias quam
            modi!
          </div>
        </div>
        <div className="company__details__row">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Job Requirment
            </div>
          </div>
          <div className="company__details__row__value">
            <div className="company__details__row__value__badge">
              Requirment 1
            </div>
            <div className="company__details__row__value__badge">
              Requirment 2
            </div>
          </div>
        </div>
        <div className="company__details__row">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Company Details
            </div>
          </div>
          <div className="company__details__row__value">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ipsa?
            Libero maiores excepturi aut similique sed aliquam nobis aspernatur
            molestiae.
          </div>
        </div>
        <div className="company__details__row">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Job Closing Date
            </div>
          </div>
          <div className="company__details__row__value">20/10/2021</div>
        </div>
        <div className="company__details__row">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Job Manager Name
            </div>
          </div>
          <div className="company__details__row__value">John Doe</div>
        </div>
        <div className="company__details__row">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Job Manager Picture
            </div>
          </div>
          <div
            className="company__details__row__value"
            style={{ maxWidth: "200px" }}
          >
            <img
              src={userPic}
              alt="uploaded-applicant-img"
              style={{ width: "50px" }}
            />
          </div>
        </div>
        <div className="company__details__row">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Job Manager Email
            </div>
          </div>
          <div className="company__details__row__value">johndoe@gmail.com</div>
        </div>
        <div className="company__details__row">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Job Manager Phone
            </div>
          </div>
          <div className="company__details__row__value">+92 123 456 789</div>
        </div>
        <div className="company__details__row">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Job Manger WhatsApp
            </div>
          </div>
          <div className="company__details__row__value">+92 123 456 789</div>
        </div>
        <div className="company__details__row">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Job Manager LinkedIn
            </div>
          </div>
          <div className="company__details__row__value">URL</div>
        </div>
        <div className="company__details__row">
          <div className="company__details__row__attribute">
            <div className="company__details__row__attribute__heading">
              Salary
            </div>
          </div>
          <div className="company__details__row__value">$400</div>
        </div>
      </div>
    );
  }
}
