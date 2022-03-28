import React from "react";
import "../Buttons/ButtonPrimary.styles.css";

const ButtonPrimary = ({ type, onClick, name }) => {
  return (
    <button className="buttonPrimary" onClick={onClick} type={type}>
      {name}
    </button>
  );
};

export default ButtonPrimary;
