import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const CustomLink = ({
	to,
	children,
	className = "",
	color = "black",
	...rest
}) => {
	const navigate = useNavigate();

	const linkClassName = `link text-${color} ${className}`;

	function handleClick(event) {
		event.preventDefault();
		navigate(to);
	}

	return (
		<a href={to} onClick={handleClick} className={linkClassName} {...rest}>
			{children}
		</a>
	);
};

export default CustomLink;
