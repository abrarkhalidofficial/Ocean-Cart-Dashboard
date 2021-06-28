import React from "react";
import "./UsersDetails.scss";
import Button from "../components/Button";
import DetailsRow from "../components/DetailsRow";
import productPic from "../assets/productPic.png";

export default class MovementDetails extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Movement Details</div>
        <div className="panel__main__add__product">
          <div className="panel__main__add__product__col__xl">
            <DetailsRow property="Origin" value="Distribution Center - Dubai" />
            <DetailsRow property="Destination" value="Delivery Address" />
            <DetailsRow property="Carrier" value="Fedex" />
            <DetailsRow property="Departed" value="27 May 2020 - 1:30 pm" />
            <DetailsRow property="Arrived" value="30 May 2020 - 1:30 pm" />
            <DetailsRow property="Cost" value="$345" />
            <DetailsRow property="Items" value="12" />
            <DetailsRow
              property="Images"
              value={
                <>
                  <img
                    src={productPic}
                    alt="productPic"
                    style={{
                      width: "50px",
                      marginBottom: ".5em",
                      marginRight: "1em",
                    }}
                  />
                  <img
                    src={productPic}
                    alt="productPic"
                    style={{
                      width: "50px",
                      marginBottom: ".5em",
                      marginRight: "1em",
                    }}
                  />
                  <img
                    src={productPic}
                    alt="productPic"
                    style={{
                      width: "50px",
                      marginBottom: ".5em",
                      marginRight: "1em",
                    }}
                  />
                </>
              }
            />
            <DetailsRow
              property="Tracking Number"
              value="Ocean Cart (2349249284928492)"
            />
            <DetailsRow property="Revnue" value="$3535" />
            <DetailsRow
              property="Product Link"
              value={
                <a href="#" className="details__row__value__link">
                  Link
                </a>
              }
            />
          </div>
          <div className="panel__main__add__product__col">
            <div className="">
              <div className="input__field">
                <Button
                  placeholder="Edit"
                  variant="link"
                  toPath="/dashboard/edit-movement"
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
