import React from "react";
import "./UsersDetails.scss";
import Button from "../components/Button";
import DetailsRow from "../components/DetailsRow";

export default class CashOnDeliveryDetails extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Cash On Delivery Details</div>
        <div className="panel__main__add__product">
          <div className="panel__main__add__product__col__xl">
            <DetailsRow property="Amount" value="$355" />
            <DetailsRow property="Status" value="Confirmed" />
            <DetailsRow property="Verified By" value="(ids)" />
            <DetailsRow
              property="Admin Notes"
              value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, sunt."
            />
          </div>
          <div className="panel__main__add__product__col">
            <div className="">
              <div className="input__field">
                <Button
                  placeholder="Edit"
                  variant="link"
                  toPath="/dashboard/edit-cod"
                />
              </div>
              <div className="input__field">
                <Button placeholder="Delete" variant="btn-delete" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
