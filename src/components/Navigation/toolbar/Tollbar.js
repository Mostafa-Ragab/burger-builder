import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigation-items/Navigation-items";

const Toolbar = (props) => (
	<header className={classes.Toolbar}>
		<div className={classes.DrawerToggle} onClick={props.toggle}>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<Logo height="80%" />
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);

export default Toolbar;
