import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function OrdersHistoryRow() {
  return (
    <Nav.Link
      className="panel__main__row"
      as={Link}
      to="/dashboard/order-details"
    >
      <div className="panel__main__row__entry">#23242</div>
      <div className="panel__main__row__entry">27 May 2020</div>
      <div className="panel__main__row__entry">John Doe</div>
      <div className="panel__main__row__entry">$345</div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__badge">Processing</div>
      </div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__badge">Payment Pending</div>
      </div>
      <div className="panel__main__row__entry">1 Item</div>
      <div className="panel__main__row__entry">Standard</div>
    </Nav.Link>
  );
}
