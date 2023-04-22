import "./styles.scss";

const Button = ({
	type = "button",
	className = "",
	onClick,
	children,
	...rest
}) => {
	const buttonClassName = `btn btn-primary button1 ${className}`.trim();

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
};

export default Button;
