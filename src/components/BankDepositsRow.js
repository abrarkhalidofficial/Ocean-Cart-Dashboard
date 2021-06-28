import React from "react";
import { Nav } from "react-bootstrap";
import Button from "./Button";

export default function BankDepositsRow() {
  return (
    <Nav.Link className="panel__main__row">
      <div className="panel__main__row__entry">#23242</div>
      <div className="panel__main__row__entry">$345</div>
      <div className="panel__main__row__entry">No</div>
      <div className="panel__main__row__entry">27 May 2020</div>
      <div className="panel__main__row__entry">Abu dabi Islamic bank</div>
      <div className="panel__main__row__entry">345345GETR2345345</div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__cta">
          <Button
            variant="link-btn"
            placeholder="Show"
            toPath="/dashboard/bank-deposit-details"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <Button
            variant="link"
            toPath="/dashboard/edit-bank-deposite"
            placeholder="Edit"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <Button variant="btn-delete" placeholder="Remove" />
        </div>
      </div>
    </Nav.Link>
  );
}
