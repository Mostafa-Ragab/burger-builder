import React, { Component } from "react";
import BuildControls from "../../components/burger-controls/BuildControls";
import Aux from "../../hoc/Aux_";
import Modal from "../../components/UI/Modal/Modal";
import Burger from "../../components/burger/Burger";
import OrderSummary from "../../components/burger/oreder-summary/OrderSummary";
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
		purchasable: false,
		purchasing: false,
	};

	updatedPurchasable(ingredients) {
		const sum = Object.keys(ingredients)
			.map((key) => {
				return ingredients[key];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({ purchasable: sum > 0 });
	}

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
		this.updatedPurchasable(updatedIngredients);
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
		this.updatedPurchasable(removeIngredients);
	};

	purchasingHandler = () => {
		this.setState({ purchasing: true });
	};
	purchaeCloseModalHandler = () => {
		this.setState({ purchasing: false });
	};
	puchaseContinueHandler = () => {
		alert("You Continue!");
	};
	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaeCloseModalHandler}
				>
					<OrderSummary
						price={this.state.totalPrice}
						ingredients={this.state.ingredients}
						cancelOrder={this.purchaeCloseModalHandler}
						continue={this.puchaseContinueHandler}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients}></Burger>
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					order={this.purchasingHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
