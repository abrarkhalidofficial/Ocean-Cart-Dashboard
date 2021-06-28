import React from "react";
import "./UsersDetails.scss";
import Button from "../components/Button";
import DetailsRow from "../components/DetailsRow";

export default class StoreSupplierDetails extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Store Supplier Details</div>
        <div className="panel__main__add__product">
          <div className="panel__main__add__product__col__xl">
            <DetailsRow property="Name" value="Supplier" />
            <DetailsRow property="Country" value="Abu Dabi" />
            <DetailsRow property="Status" value="Processing" />
            <DetailsRow property="Catagory" value="Electronics" />
            <DetailsRow
              property="Link"
              value={
                <a href="#" className="details__row__value__link">
                  Link
                </a>
              }
            />
            <DetailsRow property="Created" value="(ids)" />
            <DetailsRow property="Products" value="20" />
            <DetailsRow property="In Stock" value="10" />
          </div>
          <div className="panel__main__add__product__col">
            <div className="">
              <div className="input__field">
                <Button
                  placeholder="Edit"
                  variant="link"
                  toPath="/dashboard/edit-store-supplier"
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
