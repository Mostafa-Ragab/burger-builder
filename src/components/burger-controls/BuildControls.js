import classes from "./BuildControls.module.css";
import BuildControl from "./build-control/buildControl";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" },
];
const BuildControls = (props) => (
	<div className={classes.BuildControls}>
		<p>
			Current Price:<strong>{props.price.toFixed(2)}</strong>
		</p>
		{controls.map((ctrl) => (
			<BuildControl
				key={ctrl.label}
				label={ctrl.label}
				added={() => props.ingredientAdded(ctrl.type)}
				reomved={() => props.ingredientRemoved(ctrl.type)}
				disabled={props.disabled[ctrl.type]}
			/>
		))}
		<button
			className={classes.OrderButton}
			disabled={!props.purchasable}
			onClick={props.order}
		>
			Order Now
		</button>
	</div>
);

export default BuildControls;
