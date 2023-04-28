import React, { useRef } from "react";
import "./styles.scss";

const ErrorMessage = ({ message, margin = {} }) => {
  const { top = 0, right = 0, bottom = 0, left = 0 } = margin;
  const errorMessageRef = useRef(null);

  const handleClose = () => {
    errorMessageRef.current.style.display = "none";
  };

  return (
    <div
      ref={errorMessageRef}
      className={`message-error bg-danger border-danger mt-${top} me-${right} mb-${bottom} ms-${left}`}
      role="alert"
    >
      <div className="icon__wrapper">
        <span className="alert-outline">
          <i className="bi bi-exclamation-triangle fs-6"></i>
        </span>
      </div>
      <div className="text-white ps-3">{message}</div>
      <span className="close" onClick={handleClose}>
        <i className="bi bi-x"></i>
      </span>
    </div>
  );
};

export default ErrorMessage;
