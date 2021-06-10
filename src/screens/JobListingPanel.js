import React from "react";
import { Col, Row, Nav } from "react-bootstrap";
import "./JobListingPanel.scss";
import { Switch, Route, Link } from "react-router-dom";
import PostingRow from "../components/PostingRow";

export default class JobListingPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Job Listing</div>
        <div style={{ flex: 1 }}>
          <Col>
            <Row className="posting__table__row__heading">
              <Col className="title table__heading">Title</Col>
              <Col className="applicants table__heading">Applicats</Col>
              <Col className="visitors table__heading">Visitors</Col>
              <Col className="date-created table__heading">Created</Col>
              <Col className="state table__heading">Status</Col>
              <Col className="state table__heading" style={{ color: "white" }}>
                Edit
              </Col>
              <Col className="state table__heading" style={{ color: "white" }}>
                Duplicate
              </Col>
            </Row>
            <PostingRow />
            <PostingRow />
            <PostingRow />
            <PostingRow />
            <PostingRow />
            <PostingRow />
            <PostingRow />
            <PostingRow />
            <PostingRow />
            <PostingRow />
            <PostingRow />
            <PostingRow />
            <PostingRow />
            <PostingRow />
            <PostingRow />
            <div className="page__slider">
              <div className="slider">
                <Nav variant="pills" defaultActiveKey="/dashboard/job-listing">
                  <Nav.Link
                    to="/dashboard/job-listing"
                    href="/dashboard/job-listing"
                    as={Link}
                    className="nav__link__horizontal"
                  >
                    1
                  </Nav.Link>
                  <Nav.Link
                    to="/dashboard/job-listing"
                    as={Link}
                    className="nav__link__horizontal"
                    eventKey="link-1"
                  >
                    2
                  </Nav.Link>
                  <Nav.Link
                    to="/dashboard/job-listing"
                    as={Link}
                    className="nav__link__horizontal"
                    eventKey="link-2"
                  >
                    3
                  </Nav.Link>
                  <Nav.Link
                    to="/dashboard/job-listing"
                    as={Link}
                    className="nav__link__horizontal"
                    eventKey="link-3"
                  >
                    4
                  </Nav.Link>
                  <Nav.Link
                    to="/dashboard/job-listing"
                    as={Link}
                    className="nav__link__horizontal"
                    eventKey="link-4"
                  >
                    5
                  </Nav.Link>
                  <Nav.Link
                    to="/dashboard/job-listing"
                    as={Link}
                    className="nav__link__horizontal"
                    eventKey="link-5"
                  >
                    6
                  </Nav.Link>
                </Nav>
              </div>
            </div>
          </Col>
        </div>
      </div>
    );
  }
}
