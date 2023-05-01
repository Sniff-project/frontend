import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";

const CustomLink = React.memo(
	({ to, children, className = "", color = "black", ...rest }) => {
		const navigate = useNavigate();

		const linkClassName = `link text-${color} ${className}`;

		const handleClick = useCallback(
			(event) => {
				event.preventDefault();
				navigate(to);
			},
			[navigate, to]
		);

		return (
			<Link
				to={to}
				className={linkClassName}
				onClick={handleClick}
				{...rest}
			>
				{children}
			</Link>
		);
	}
);

export default CustomLink;
