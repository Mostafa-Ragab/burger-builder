import React, { Component } from "react";
import BuildControls from "../../components/burger-controls/BuildControls";

import Burger from "../../components/burger/Burger";

const INGREDIENTS_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	bacon: 0.3,
	meat: 0.7,
};
class BurgerBuilder extends Component {
	// constructor(props) {
	//     super(props);
	//     this.state = {...}
	// }
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 4,
	};

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENTS_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
	};
	render() {
		return (
			<>
				<Burger ingredients={this.state.ingredients}></Burger>
				<BuildControls ingredientAdded={this.addIngredientHandler} />
			</>
		);
	}
}

export default BurgerBuilder;
