import Aux from "../../../hoc/Aux_";

const OrderSummary = (props) => {
	const ingredientsSummary = Object.keys(props.ingredients).map((key) => {
		return (
			<li key={key}>
				<span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
				{props.ingredients[key]}
			</li>
		);
	});
	return (
		<Aux>
			<h3>Yuor order </h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientsSummary}</ul>
			<p>Continue to Checkout?</p>
		</Aux>
	);
};

export default OrderSummary;
