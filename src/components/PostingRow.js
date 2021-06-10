import React, { useState } from "react";
import {
  Row,
  Col,
  Alert,
  Button,
  Nav,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Status({ value }) {
  if (value === "option-1") {
    return (
      <Alert key="live" className="status status-live">
        Live
      </Alert>
    );
  } else if (value === "option-2") {
    return (
      <Alert key="live" className="status status-hold">
        Hold
      </Alert>
    );
  } else if (value === "option-3") {
    return (
      <Alert key="live" className="status status-closed">
        Closed
      </Alert>
    );
  }
}

export default function PostingRows() {
  const [selected, setSelected] = useState("option-1");

  function handleChangeLive() {
    setSelected("option-1");
  }
  function handleChangeHold() {
    setSelected("option-2");
  }
  function handleChangeClosed() {
    setSelected("option-3");
  }
  return (
    <Nav.Link className="nav__link__padding">
      <Row className="posting__table__row data__row">
        <Col className="table__data__col">
          <Row className="table__data__row" style={{ marginRight: "2em" }}>
            <Col className="title row__heading">Title</Col>
            <Col className="applicants row__heading">Applicats</Col>
            <Col className="visitors row__heading">Visitors</Col>
            <Col className="date-created row__heading">Created</Col>
            <Col className="state row__heading">Status</Col>
            <Col className="edits row__heading" style={{ color: "white" }}>
              Edits
            </Col>
            <Col className="edits row__heading" style={{ color: "white" }}>
              Duplicate
            </Col>
          </Row>
          <Row className="table__data__row">
            <Nav.Link
              to="/dashboard/applicants"
              as={Link}
              className="title table__data"
            >
              <Col>Sales Manager</Col>
            </Nav.Link>
            <Nav.Link
              to="/dashboard/applicants"
              as={Link}
              className="applicants table__data"
            >
              <Col>10</Col>
            </Nav.Link>
            <Nav.Link
              to="/dashboard/applicants"
              as={Link}
              className="visitors table__data"
            >
              <Col>7</Col>
            </Nav.Link>
            <Nav.Link
              to="/dashboard/applicants"
              as={Link}
              className="date-created table__data"
            >
              <Col>2 days ago</Col>
            </Nav.Link>
            <Col className="status__col">
              <Dropdown as={ButtonGroup}>
                <Status value={selected} />
                <Dropdown.Toggle
                  split
                  variant="dark"
                  id="dropdown-custom-2"
                  style={{
                    backgroundColor: "#eeeeee",
                    borderColor: "#eeeeee",
                    color: "#444444",
                    height: 36,
                  }}
                />
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item
                    onClick={handleChangeLive}
                    style={{
                      display: "flex",
                      flexDirectino: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#09C956",
                        borderRadius: 10,
                        marginRight: 10,
                      }}
                    ></div>
                    Live
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={handleChangeHold}
                    style={{
                      display: "flex",
                      flexDirectino: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#ffae0c",
                        borderRadius: 10,
                        marginRight: 10,
                      }}
                    ></div>
                    Hold
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={handleChangeClosed}
                    style={{
                      display: "flex",
                      flexDirectino: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#ff4d4d",
                        borderRadius: 10,
                        marginRight: 10,
                      }}
                    ></div>
                    Closed
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col className="edits">
              <Button
                variant="outline-primary"
                style={{
                  border: "none",
                  padding: "0em",
                  wdth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Nav.Link
                  className="data__row__btn__reverse"
                  to="dashboard/job-listing/edit"
                  as={Link}
                >
                  Edit
                </Nav.Link>
              </Button>
            </Col>
            <Col className="edits">
              <Button
                variant="outline-primary"
                style={{
                  border: "none",
                  padding: "0em",
                  wdth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Nav.Link
                  className="data__row__btn"
                  to="/dashboard/job-posting"
                  as={Link}
                >
                  Duplicate
                </Nav.Link>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Nav.Link>
  );
}
