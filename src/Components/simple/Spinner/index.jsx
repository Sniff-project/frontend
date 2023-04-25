import React from "react";
import "./styles.scss";

const Spinner = ({ size = 200 }) => {
  return (
    <div className="spinner__container position-absolute w-100 h-100 d-flex align-items-center justify-content-center py-5">
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="1.5"
              floodColor="#fc6767"
            />
          </filter>
        </defs>
        <circle
          id="spinner"
          style={{
            fill: "transparent",
            stroke: "#dd2476",
            strokeWidth: "7px",
            strokeLinecap: "round",
            filter: "url(#shadow)",
          }}
          cx="50"
          cy="50"
          r="45"
        />
      </svg>
    </div>
  );
};

export default Spinner;
