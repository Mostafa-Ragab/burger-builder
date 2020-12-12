import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigation-items/Navigation-items";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Bckdrop";
import Aux from "../../../hoc/Aux_";
const SideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(" ")}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default SideDrawer;
