import React from "react";
import "./Dashboard.scss";
import { Switch, Route } from "react-router-dom";
import HomeBG from "../Assets/HomeBG.png";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dasboard__container">
        <img src={HomeBG} alt="HomeBG" className="dasboard__container_img" />
        <div className="dasboard__container__overlay">
          <Header />
          <div className="main">
            <SideBar />
            <Switch>
              <div className="main__conatienr"></div>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
