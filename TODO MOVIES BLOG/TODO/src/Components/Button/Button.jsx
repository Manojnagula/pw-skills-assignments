// import "./Button.css";

// const Button = ({ add }) => {
//   return <button className="button" onClick={add}>Add</button>;
// };

// export default Button;

import React from "react";
import "./Button.css";

const Button = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Add
    </button>
  );
};

export default Button;
