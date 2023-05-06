import { memo, forwardRef } from "react";
import "./Tab.scss";

const Tab = memo(
  forwardRef(({ isActive = false, className = "", children, ...rest }, ref) => {
    return (
      <li
        ref={ref}
        className={`tabs__item ${className}`}
        role="presentation"
        key={rest.key}
        {...rest}>
        <button className={`tabs__button ${isActive ? "active" : ""}`}>
          {children}
        </button>
      </li>
    );
  })
);

export default Tab;
