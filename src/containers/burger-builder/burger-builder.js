import React, { Component } from "react";
import BuildControls from "../../components/burger-controls/BuildControls";

import Burger from "../../components/burger/Burger";

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
	};

	render() {
		return (
			<>
				<Burger ingredients={this.state.ingredients}></Burger>
				<BuildControls />
			</>
		);
	}
}

export default BurgerBuilder;
