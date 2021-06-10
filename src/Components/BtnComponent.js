import React from "react";

export default function BtnComponent({ placeholder, btnStyle, icon }) {
  return (
    <button className="form__btn" style={btnStyle}>
      {placeholder}
      {icon}
    </button>
  );
}
