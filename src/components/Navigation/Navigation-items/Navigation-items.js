import React from "react";

import classes from "./Navigation-items.module.css";
import NavigationItem from "./Navigation-item/NavigationItem";

const navigationItems = () => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/" active>
			Burger Builder
		</NavigationItem>
		<NavigationItem link="/">Checkout</NavigationItem>
	</ul>
);

export default navigationItems;
