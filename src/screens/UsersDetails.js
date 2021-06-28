import React from "react";
import "./UsersDetails.scss";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import DetailsRow from "../components/DetailsRow";

export default class UsersDetails extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">User Details</div>
        <div className="panel__main__add__product">
          <div className="panel__main__add__product__col__xl">
            <DetailsRow property="Name" value="Distribution Center - Dubai" />
            <DetailsRow property="Email" value="johndoe@gamil.com" />
            <DetailsRow property="Phone no." value="+92 133 1243453" />
            <DetailsRow property="Address" value="22nd street vest verginia" />
            <DetailsRow property="Current IP" value="192.168.10.1" />
            <DetailsRow property="Last IP" value="192.168.1.1" />
            <DetailsRow property="Joined" value="20 Jun 2019" />
            <DetailsRow
              property="Orders"
              value={
                <Link to="" className="details__row__value__link">
                  Link
                </Link>
              }
            />
          </div>
          <div className="panel__main__add__product__col">
            <div className="">
              <div className="input__field">
                <Button placeholder="Deactivate Account" variant="btn-delete" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
