import React from "react";
import "./Button.css";

const Button = ({ className, type, onClick, children }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
