import React from "react";
import "./UsersDetails.scss";
import Button from "../components/Button";
import DetailsRow from "../components/DetailsRow";
import bankDepositeFile from "../assets/bankDepositeFile.png";

export default class BankDepositDetails extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Bank Deposit Details</div>
        <div className="panel__main__add__product">
          <div className="panel__main__add__product__col__xl">
            <DetailsRow property="Amount" value="$355" />
            <DetailsRow property="Status" value="Confirmed" />
            <DetailsRow
              property="Account"
              value="3DFKSGJO34-34234234092834-343"
            />
            <DetailsRow
              property="Transaction Reference"
              value="2349249284928492"
            />
            <DetailsRow
              property="File"
              value={
                <img
                  src={bankDepositeFile}
                  alt="bankDepositeFile"
                  style={{ width: "300px", marginBottom: ".5em" }}
                />
              }
            />
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
                  toPath="/dashboard/edit-bank-deposite"
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
