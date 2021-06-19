import React from "react";

export default function DetailsRow({ property, value }) {
  return (
    <div className="details__row">
      <div className="details__row__left">
        <label htmlFor="" className="details__row__property">
          {property}
        </label>
      </div>
      <div className="details__row__right">
        <div className="details__row__value">{value}</div>
      </div>
    </div>
  );
}
