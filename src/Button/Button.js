import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary my-5">{children}</button>
    </div>
  );
};

export default Button;
