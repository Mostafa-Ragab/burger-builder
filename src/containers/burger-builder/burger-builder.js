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

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const removeCount = oldCount - 1;
		const removeIngredients = {
			...this.state.ingredients,
		};
		removeIngredients[type] = removeCount;
		const oldPrice = this.state.totalPrice;
		const priceAddition = INGREDIENTS_PRICES[type];
		const removePrice = oldPrice - priceAddition;
		this.setState({ totalPrice: removePrice, ingredients: removeIngredients });
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<>
				<Burger ingredients={this.state.ingredients}></Burger>
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
				/>
			</>
		);
	}
}

export default BurgerBuilder;
