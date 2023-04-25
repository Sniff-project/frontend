import React from "react";

const WarningMessage = ({ message }) => {
  return (
    <div className="alert alert-warning" role="alert">
      {message}
    </div>
  );
};

export default WarningMessage;
