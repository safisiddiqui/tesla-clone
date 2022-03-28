import React from "react";
import "../MenuItem/MenuItem.styles.css";

const MenuItem = ({ title }) => {
  return (
    <div className="menuItem">
      <h4>{title}</h4>
    </div>
  );
};

export default MenuItem;
