import React from "react";
import SideBar from "../components/SideBar";
import "./Dashboard.scss";
import { Switch, Route } from "react-router-dom";
import DashboardPanel from "./DashboardPanel";
import OrderPanel from "./OrderPanel";
import AddProduct from "./AddProduct";
import AddCoupon from "./AddCoupon";

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
            <Route path="/dashboard/order-pending">
              <OrderPanel screenName="Order Pending" />
            </Route>
            <Route path="/dashboard/order-delivered">
              <OrderPanel screenName="Order Delivered" />
            </Route>
            <Route path="/dashboard/order-canceled">
              <OrderPanel screenName="Order Canceled" />
            </Route>
            <Route path="/dashboard/add-product">
              <AddProduct screenName="Add Product" />
            </Route>
            <Route path="/dashboard/edit-product">
              <AddProduct screenName="Edit Product" />
            </Route>
            <Route path="/dashboard/add-coupon">
              <AddCoupon screenName="Add Coupon" />
            </Route>
          </div>
        </Switch>
      </div>
    );
  }
}
