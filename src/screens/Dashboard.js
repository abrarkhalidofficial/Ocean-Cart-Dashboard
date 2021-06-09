import React from "react";
import SideBar from "../components/SideBar";
import "./Dashboard.scss";
import { Switch, Route } from "react-router-dom";
import DashboardPanel from "./DashboardPanel";
import ApplicantsPanel from "./ApplicantsPanel";
import JobListingPanel from "./JobListingPanel";
import JobPostingPanel from "./JobPostingPanel";
import FilterPanel from "./FilterPanel";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dasboard__container">
        <SideBar />
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPanel />
          </Route>
          <div className="main">
            <Route path="/dashboard/job-posting">
              <JobPostingPanel />
            </Route>
            <Route path="/dashboard/job-listing">
              <JobListingPanel />
            </Route>
            <Route path="/dashboard/applicants">
              <ApplicantsPanel />
            </Route>
            <Route path="/dashboard/filters">
              <FilterPanel />
            </Route>
          </div>
        </Switch>
      </div>
    );
  }
}
