import React from "react";
import "./styles.scss";

const Button = React.memo(
	({
		type = "button",
		className = "",
		color = "primary",
		onClick,
		children,
		...rest
	}) => {
		const buttonClassName = `btn btn-${color} button1 ${className}`.trim();

		return (
			<button
				type={type}
				className={buttonClassName}
				onClick={onClick}
				{...rest}
			>
				{children}
			</button>
		);
	}
);

export default Button;
