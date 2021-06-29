import React from "react";
import "./DashboardPanel.scss";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import DetailsRow from "../components/DetailsRow";
import InputboxComponent from "../components/Inputbox";
import barcodePic from "../assets/barcodePic.png";
import Select from "react-select";
import TrackOrderProduct from "../components/TrackOrderProduct";
import ProductList from "../components/ProductList";
import "./OrderPanel.scss";
export default class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { approved: false };
  }
  render() {
    const Options = [
      { value: "Fixed Cart Discount", label: "Fixed Cart Discount" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];
    return (
      <div className="panel__conatainer__empty">
        <div className="panel__conatainer__empty__row">
          <Card>
            <div className="order__details__header">
              <div className="order__details__heading">Order Details</div>
              <div className="order__details__cta">
                {this.state.approved ? (
                  <Button placeholder="Approved" variant="upload-btn" />
                ) : (
                  <Button
                    placeholder="Approve"
                    variant="btn"
                    onClick={() => {
                      this.setState({
                        approved: true,
                      });
                    }}
                  />
                )}
                <div className="order__details__cta__divider"></div>
                <Button
                  placeholder="Decline"
                  variant="btn-delete"
                  onClick={() => {
                    this.setState({
                      approved: false,
                    });
                  }}
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="panel__conatainer__empty__row">
          <Card>
            <div
              className="order__details__product__list"
              style={{ width: "105%" }}
            >
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
            </div>
          </Card>
          <Card>
            <div className="order__details__customer">
              <DetailsRow property="Customer" value="Wasif Awan Awan" />
              <DetailsRow
                property="Shipping Address"
                value="3862  Clement Street Atlanta GA Georgia"
              />
              <DetailsRow
                property="Note"
                value={
                  <InputboxComponent
                    textarea="textarea"
                    ClassName="input__box"
                    placeholder="Note here"
                  />
                }
              />
              <DetailsRow
                property="Customer Email"
                value="awanwasif777@gmail.com"
              />
              <DetailsRow
                property="Customer Phone No."
                value="+92 242 24242424"
              />
              <DetailsRow
                property="Billing Address"
                value="Same as delivery address"
              />
              <DetailsRow
                property="Amazon"
                value={
                  <div
                    style={{
                      display: "flex",
                      marginBottom: ".5em",
                    }}
                  >
                    <div style={{ width: "100px", marginRight: ".5em" }}>
                      <Button placeholder="Prime" variant="upload-btn" />
                    </div>
                    <div style={{ width: "100px" }}>
                      <Button placeholder="Prime" variant="upload-btn" />
                    </div>
                  </div>
                }
              />
              <DetailsRow
                property="Barcode"
                value={
                  <img
                    src={barcodePic}
                    alt="barcodePic"
                    style={{ width: "100px", marginBottom: ".5em" }}
                  />
                }
              />
              <DetailsRow
                property="Amazon Link"
                value={
                  <Link to="" className="details__row__value__link">
                    Link
                  </Link>
                }
              />
            </div>
          </Card>
        </div>
        <div className="panel__conatainer__empty__row">
          <Card>
            <div className="order__details__shipping">
              <div className="order__details__shipping__heading">
                Shipment Tracking
              </div>
              <TrackOrderProduct />
            </div>
          </Card>
        </div>
        <div className="panel__conatainer__empty__row">
          <Card>
            <div className="order__details__shipping__heading">
              Shipping Status: Prepared
            </div>
            <DetailsRow property="Order Number" value="#2464" />
            <DetailsRow property="Place on" value="14/04/2010" />
            <DetailsRow property="Payment Type" value="Credit Card14/04/2010" />
            <DetailsRow property="Checkout id" value="1313414" />
            <DetailsRow property="User Email" value="alex@gmail.com" />
            <DetailsRow property="User Phone" value="+123 45678902" />
          </Card>
          <Card>
            <div className="order__details__customer">
              <div className="order__details__shipping__heading">
                Deliver To
              </div>
              <DetailsRow property="Customer" value="Wasif Awan Awan" />
              <DetailsRow
                property="Shipping Address"
                value="3862  Clement Street Atlanta GA Georgia"
              />
              <DetailsRow
                property="Note"
                value={
                  <InputboxComponent
                    textarea="textarea"
                    ClassName="input__box"
                    placeholder="Note here"
                  />
                }
              />
              <DetailsRow
                property="Customer Email"
                value="awanwasif777@gmail.com"
              />
              <DetailsRow
                property="Customer Phone No."
                value="+92 242 24242424"
              />
              <DetailsRow
                property="Billing Address"
                value="Same as delivery address"
              />
              <DetailsRow property="Post/Zip Code" value="2343434" />
            </div>
          </Card>
        </div>
        {this.state.approved ? (
          <div className="panel__conatainer__empty__row">
            <Card>
              <div className="order__details__shipping__heading">
                Card Transaction
              </div>
              <DetailsRow property="Authorized" value="Aur-162" />
              <DetailsRow property="Created" value="14/04/2010" />
              <DetailsRow property="UID" value="343789472389749" />
              <DetailsRow property="Action ID" value="1313414" />
              <DetailsRow property="Status" value="Approved" />
              <DetailsRow property="Card" value="XXXX XXXX ---- ----" />
              <DetailsRow property="Reference" value="Auth-che-45678902" />
              <DetailsRow property="Auth Code" value="678902" />
              <DetailsRow
                property="Transaction for order ids"
                value="678902678902"
              />
            </Card>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <Card>
                <div className="order__details__shipping__heading">
                  Charge Card
                </div>
                <InputboxComponent
                  type="text"
                  ClassName="input__box"
                  placeholder="Amount"
                />
                <div style={{ height: "1em" }}></div>
                <Button placeholder="Charge" variant="btn" />
              </Card>
              <div style={{ height: "2em" }}></div>
              <Card>
                <div className="order__details__shipping__heading">
                  Send Notification
                </div>
                <Select
                  // defaultValue={[colourOptions[2], colourOptions[3]]}
                  name="colors"
                  options={Options}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
                <div style={{ height: "1em" }}></div>
                <Button placeholder="Send Notification" variant="btn" />
              </Card>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
