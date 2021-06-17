<Route path="/dashboard/users-details">
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