import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigation-items/Navigation-items";
import classes from "./SideDrawer.module.css";

const SideDrawer = () => {
	return (
		<div className={classes.SideDrawer}>
			<div className={classes.Logo}>
				<Logo />
			</div>
			<nav>
				<NavigationItems />
			</nav>
		</div>
	);
};

export default SideDrawer;
