import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonComponent from "../components/Button";

export default function ApplicantsRow() {
  return (
    <div className="applicant__row">
      <div className="applicant__row__heading__row">
        <div className="panel__main__heading__row__entry">Name</div>
        <div className="panel__main__heading__row__entry">SurName</div>
        <div className="panel__main__heading__row__entry">Email</div>
        <div className="panel__main__heading__row__entry">Phone</div>
        <div className="panel__main__heading__row__entry">Message</div>
        <div className="panel__main__heading__row__entry">CV</div>
      </div>
      <div className="panel__main__row">
        <Nav.Link
          className="panel__main__row__link"
          to="/dashboard/applicants/details"
          as={Link}
        >
          <>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">Kamran Akmal</div>
            <div className="panel__main__row__entry">johndoe@jgmail.com</div>
            <div className="panel__main__row__entry">+92132434878</div>
            <div className="panel__main__row__entry">Lorem ipsum dolor</div>
          </>
        </Nav.Link>
        <div className="panel__main__row__entry">
          <ButtonComponent
            variant="download"
            placeholder="Download CV"
            downloadLink="http://www.africau.edu/images/default/sample.pdf"
          />
        </div>
      </div>
    </div>
  );
}
