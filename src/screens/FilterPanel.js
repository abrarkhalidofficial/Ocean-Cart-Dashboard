import React from "react";
import "./FilterPanel.scss";
import Button from "../components/Button";
import { Nav, Form, Button as ButtonReact, Row } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import InputBox from "../components/Inputbox";

function FilterRow() {
  return (
    <Nav.Link className="panel__main__row">
      <div className="panel__main__row__entry">Filter X</div>
      <div className="panel__main__row__entry">20</div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__cta">
          <Button
            variant="link"
            toPath="/dashboard/filters/edit-plan"
            placeholder="Edit"
          />
        </div>
      </div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__cta">
          <Button variant="btn" placeholder="Remove" />
        </div>
      </div>
    </Nav.Link>
  );
}
function Option() {
  return (
    <div className="panel__main__role__manager__input__row">
      <InputBox placeholder="Option Name" ClassName="input__box" />
      <button className="panel__main__role__manager__input__row__option__btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.88 22.88"
          fill="currentColor"
        >
          <path
            d="M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539
	l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539
	c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0
	c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z"
          />
        </svg>
      </button>
    </div>
  );
}
export default class FilterPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Filters</div>
        <div className="panel__main__plans">
          <Switch>
            <Route path="/dashboard/filters" exact>
              <div className="panel__main__role__manager__row">
                <div className="panel__main__role__manager__info">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat qui cupiditate nostrum amet! Iusto, iure.
                </div>
                <div className="panel__main__role__manager__cta__row">
                  <div className="panel__main__role__manager__cta">
                    <Button
                      variant="link"
                      toPath="/dashboard/filters/new-plan"
                      placeholder="Add New"
                    />
                  </div>
                </div>
              </div>
              <div className="panel__main__role__manager__content">
                <div className="panel__main__freelancer">
                  <div className="panel__main__heading__row">
                    <div className="panel__main__heading__row__entry">
                      Filter Name
                    </div>
                    <div className="panel__main__heading__row__entry">
                      No. of options
                    </div>
                    <div
                      className="panel__main__heading__row__entry"
                      style={{ color: "transparent" }}
                    >
                      edit
                    </div>
                    <div
                      className="panel__main__heading__row__entry"
                      style={{ color: "transparent" }}
                    >
                      remove
                    </div>
                  </div>
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <FilterRow />
                  <div className="page__slider">
                    <div className="slider">
                      <Nav
                        variant="pills"
                        defaultActiveKey="/dashboard/filters"
                      >
                        <Nav.Link
                          to="/dashboard/filters"
                          href="/dashboard/filters"
                          as={Link}
                          className="nav__link__horizontal"
                        >
                          1
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/filters"
                          as={Link}
                          className="nav__link__horizontal"
                          eventKey="link-1"
                        >
                          2
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/filters"
                          as={Link}
                          className="nav__link__horizontal"
                          eventKey="link-2"
                        >
                          3
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/filters"
                          as={Link}
                          className="nav__link__horizontal"
                          eventKey="link-3"
                        >
                          4
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/filters"
                          as={Link}
                          className="nav__link__horizontal"
                          eventKey="link-4"
                        >
                          5
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/filters"
                          as={Link}
                          className="nav__link__horizontal"
                          eventKey="link-5"
                        >
                          6
                        </Nav.Link>
                      </Nav>
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/dashboard/filters/new-plan">
              <div className="panel__main__role__manager__new__role">
                <div className="panel__main__role__manager__heading__row">
                  <Nav.Link
                    as={Link}
                    to="/dashboard/filters"
                    className="screen__back__btn"
                    style={{ marginRight: "0.3em" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20.556 17.629"
                    >
                      <g
                        id="_507257"
                        data-name="507257"
                        transform="translate(0 -31.842)"
                      >
                        <g
                          id="Group_506"
                          data-name="Group 506"
                          transform="translate(0 31.842)"
                        >
                          <path
                            id="Path_753"
                            data-name="Path 753"
                            d="M19.32,39.213a1.469,1.469,0,0,0-.254-.019H4.564l.316-.147a2.941,2.941,0,0,0,.831-.588l4.067-4.067a1.522,1.522,0,0,0,.213-1.949,1.471,1.471,0,0,0-2.206-.191L.431,39.606a1.471,1.471,0,0,0,0,2.08h0l7.354,7.354a1.471,1.471,0,0,0,2.206-.147,1.522,1.522,0,0,0-.213-1.949L5.718,42.871a2.942,2.942,0,0,0-.735-.537l-.441-.2H18.984A1.522,1.522,0,0,0,20.536,40.9,1.471,1.471,0,0,0,19.32,39.213Z"
                            transform="translate(0 -31.842)"
                            fill="currentColor"
                          />
                        </g>
                      </g>
                    </svg>
                  </Nav.Link>
                  <div className="panel__main__role__manager__heading">
                    Add New Filter
                  </div>
                  <div style={{ marginLeft: "1em" }}>
                    <Button variant="btn" placeholder="Add Option" />
                  </div>
                </div>
                <div className="panel__main__role__manager__input__row">
                  <InputBox placeholder="Filter Name" ClassName="input__box" />
                </div>
                <div className="options__list" style={{ maxWidth: "600px" }}>
                  <Option />
                </div>
                <div className="panel__main__role__manager__new__role__cta">
                  <Button variant="btn" placeholder="Save Filter" />
                </div>
              </div>
            </Route>
            <Route path="/dashboard/filters/edit-plan">
              <div className="panel__main__role__manager__new__role">
                <div className="panel__main__role__manager__heading__row">
                  <Nav.Link
                    as={Link}
                    to="/dashboard/filters"
                    className="screen__back__btn"
                    style={{ marginRight: "0.3em" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20.556 17.629"
                    >
                      <g
                        id="_507257"
                        data-name="507257"
                        transform="translate(0 -31.842)"
                      >
                        <g
                          id="Group_506"
                          data-name="Group 506"
                          transform="translate(0 31.842)"
                        >
                          <path
                            id="Path_753"
                            data-name="Path 753"
                            d="M19.32,39.213a1.469,1.469,0,0,0-.254-.019H4.564l.316-.147a2.941,2.941,0,0,0,.831-.588l4.067-4.067a1.522,1.522,0,0,0,.213-1.949,1.471,1.471,0,0,0-2.206-.191L.431,39.606a1.471,1.471,0,0,0,0,2.08h0l7.354,7.354a1.471,1.471,0,0,0,2.206-.147,1.522,1.522,0,0,0-.213-1.949L5.718,42.871a2.942,2.942,0,0,0-.735-.537l-.441-.2H18.984A1.522,1.522,0,0,0,20.536,40.9,1.471,1.471,0,0,0,19.32,39.213Z"
                            transform="translate(0 -31.842)"
                            fill="currentColor"
                          />
                        </g>
                      </g>
                    </svg>
                  </Nav.Link>
                  <div className="panel__main__role__manager__heading">
                    Edit Filter
                  </div>
                  <div style={{ marginLeft: "1em" }}>
                    <Button variant="btn" placeholder="Add Option" />
                  </div>
                </div>
                <div className="panel__main__role__manager__input__row">
                  <InputBox placeholder="Filter X" ClassName="input__box" />
                </div>
                <div className="options__list" style={{ maxWidth: "600px" }}>
                  <Option />
                </div>
                <div className="panel__main__role__manager__new__role__cta">
                  <Button variant="btn" placeholder="Save Filter" />
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
