import classes from "./burger.module.css";
import BurgerIngredient from "./burger-ingredients/burger-ingredients";
const Burger = (props) => {
	const tranformedIngredients = Object.keys(props.ingredients)
		.map((igkey) => {
			return [...Array(props.ingredients[igkey])].map((_, i) => {
				return <BurgerIngredient key={igkey + i} type={igkey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	if (tranformedIngredients.length === 0) {
		tranformedIngredients = <p>Please start adding ingredients!</p>;
	}
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{tranformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default Burger;
