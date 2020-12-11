import Aux from "../../../hoc/Aux_";
import Button from "../../UI/Button/Button";
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
			<h3>Your order </h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientsSummary}</ul>
			<p>Continue to Checkout?</p>
			<Button btnType="Danger" clicked={props.cancelOrder}>
				CANCEL
			</Button>
			<Button btnType="Success" clicked={props.continue}>
				CONTINUE
			</Button>
		</Aux>
	);
};

export default OrderSummary;
