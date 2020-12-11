import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigation-items/Navigation-items";
const Toolbar = (props) => (
	<header className={classes.Toolbar}>
		<div>Menu</div>
		<Logo />
		<NavigationItems />
	</header>
);

export default Toolbar;
