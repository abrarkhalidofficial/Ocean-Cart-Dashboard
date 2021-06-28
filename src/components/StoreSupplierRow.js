import React from "react";
import Button from "../components/Button";
import { Nav } from "react-bootstrap";

export default function StoreSupplierRow() {
  return (
    <Nav.Link className="panel__main__row">
      <div className="panel__main__row__entry">#23242</div>
      <div className="panel__main__row__entry">Supplier</div>
      <div className="panel__main__row__entry">Abu Dabi</div>
      <div className="panel__main__row__entry">Seller</div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__badge">Processing</div>
      </div>
      <div className="panel__main__row__entry">oceancart.com</div>
      <div className="panel__main__row__entry">27 May 2020</div>
      <div className="panel__main__row__entry">20/10</div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__cta">
          <Button
            variant="link-btn"
            placeholder="Show"
            toPath="/dashboard/store-supplier-details"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <Button
            variant="link"
            toPath="/dashboard/edit-store-supplier"
            placeholder="Edit"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <Button variant="btn-delete" placeholder="Remove" />
        </div>
      </div>
    </Nav.Link>
  );
}
