import React from "react";
import SideBar from "../components/SideBar";
import "./Dashboard.scss";
import { Switch, Route } from "react-router-dom";
import DashboardPanel from "./DashboardPanel";
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
import ProductsReviews from "./ProductsReview";
import ProductBulkUpload from "./ProductBulkUpload";
import CashOnDeliveryBulkUpload from "./CashOnDeliveryBulkUpload";
import ProductPromote from "./ProductPromote";
import AddCashOnDelivery from "./AddCashOnDelivery";
import AddBankDeposit from "./AddBankDeposit";
import AddConsolidation from "./AddConsolidation";
import FixMissingItems from "./FixMissingItems";
import AddStoreSupplier from "./AddStoreSupplier";
import AddMovement from "./AddMovement";
import OrderDetails from "./OrderDetails";
import CashOnDeliveryDetails from "./CashOnDeliveryDetails";
import BankDepositDetails from "./BankDepositDetails";
import StoreSupplierDetails from "./StoreSupplierDetails";
import MovementDetails from "./MovementDetails";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dasboard__container">
        <SideBar />
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPanel />
          </Route>
          <Route path="/dashboard/order-details">
            <OrderDetails />
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
            <Route path="/dashboard/product-review">
              <ProductsReviews screenName="Product's Reviews" />
            </Route>
            <Route path="/dashboard/user-review">
              <ProductsReviews screenName="Users's Reviews" />
            </Route>
            <Route path="/dashboard/product-bulk-upload">
              <ProductBulkUpload />
            </Route>
            <Route path="/dashboard/cod-bulk-upload">
              <CashOnDeliveryBulkUpload />
            </Route>
            <Route path="/dashboard/promote">
              <ProductPromote />
            </Route>
            <Route path="/dashboard/add-cod">
              <AddCashOnDelivery screenName="Add Cash On Delivery" />
            </Route>
            <Route path="/dashboard/edit-cod">
              <AddCashOnDelivery screenName="Edit Cash On Delivery" />
            </Route>
            <Route path="/dashboard/add-bank-deposite">
              <AddBankDeposit screenName="Add Bank Deposit" />
            </Route>
            <Route path="/dashboard/edit-bank-deposite">
              <AddBankDeposit screenName="Edit Bank Deposit" />
            </Route>
            <Route path="/dashboard/add-consolidation">
              <AddConsolidation screenName="Add Consolidaion" />
            </Route>
            <Route path="/dashboard/edit-consolidation">
              <AddConsolidation screenName="Edit Consolidation" />
            </Route>
            <Route path="/dashboard/add-store-supplier">
              <AddStoreSupplier screenName="Add Store / Supplier" />
            </Route>
            <Route path="/dashboard/edit-store-supplier">
              <AddStoreSupplier screenName="Edit Store / Supplier" />
            </Route>
            <Route path="/dashboard/add-movement">
              <AddMovement screenName="Add Movement" />
            </Route>
            <Route path="/dashboard/edit-movement">
              <AddMovement screenName="Edit Movement" />
            </Route>
            <Route path="/dashboard/fix-items">
              <FixMissingItems />
            </Route>
            <Route path="/dashboard/cod-details">
              <CashOnDeliveryDetails />
            </Route>
            <Route path="/dashboard/bank-deposit-details">
              <BankDepositDetails />
            </Route>
            <Route path="/dashboard/store-supplier-details">
              <StoreSupplierDetails />
            </Route>
            <Route path="/dashboard/movement-details">
              <MovementDetails />
            </Route>
          </div>
        </Switch>
      </div>
    );
  }
}
