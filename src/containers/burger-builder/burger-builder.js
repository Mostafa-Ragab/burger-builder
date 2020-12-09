import React, { Component } from "react";

import Burger from "../../components/burger/Burger";

class BurgerBuilder extends Component {
	// constructor(props) {
	//     super(props);
	//     this.state = {...}
	// }
	state = {
		ingredients: {
			salad: 1,
			bacon: 1,
			cheese: 2,
			meat: 2,
		},
	};

	render() {
		return (
			<>
				<Burger ingredients={this.state.ingredients}>
					<div>Build Controls</div>
				</Burger>
			</>
		);
	}
}

export default BurgerBuilder;
