import React from "react";
import SideBar from "../components/SideBar";
import "./Dashboard.scss";
import { Switch, Route } from "react-router-dom";
import DashboardPanel from "./DashboardPanel";
import OrderPanel from "./OrderPanel";
import AddProduct from "./AddProduct";
import AddCoupon from "./AddCoupon";
import Users from "./Users";
import UsersDetails from "./UsersDetails";
import Orders from "./Orders";
import OrdersHistory from "./OrderHistory";
import Products from "./Products";
import Inventory from "./Inventory";
import Coupons from "./Coupons";
import BankDeposits from "./BankDeposits";
import CashOnDelivery from "./CashOnDelivery";
import Consolidation from "./Consolidation";
import StoreSupplier from "./StoreSupplier";
import Movements from "./Movements";

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
            <Route path="/dashboard/add-product">
              <AddProduct screenName="Add Product" />
            </Route>
            <Route path="/dashboard/edit-product">
              <AddProduct screenName="Edit Product" />
            </Route>
            <Route path="/dashboard/products">
              <Products />
            </Route>
            <Route path="/dashboard/add-coupon">
              <AddCoupon screenName="Add Coupon" />
            </Route>
            <Route path="/dashboard/edit-coupon">
              <AddCoupon screenName="Edit Coupon" />
            </Route>
            <Route path="/dashboard/users">
              <Users />
            </Route>
            <Route path="/dashboard/users-details">
              <UsersDetails />
            </Route>
            <Route path="/dashboard/orders">
              <Orders />
            </Route>
            <Route path="/dashboard/orders-history">
              <OrdersHistory />
            </Route>
            <Route path="/dashboard/inventory">
              <Inventory />
            </Route>
            <Route path="/dashboard/coupons">
              <Coupons />
            </Route>
            <Route path="/dashboard/bank-deposite">
              <BankDeposits />
            </Route>
            <Route path="/dashboard/cod">
              <CashOnDelivery />
            </Route>
            <Route path="/dashboard/consolidations">
              <Consolidation />
            </Route>
            <Route path="/dashboard/movement">
              <Movements />
            </Route>
            <Route path="/dashboard/store-supplier-list">
              <StoreSupplier />
            </Route>
          </div>
        </Switch>
      </div>
    );
  }
}
