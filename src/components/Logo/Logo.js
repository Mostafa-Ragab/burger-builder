import classes from "./Logo.module.css";
import BurgerLogo from "../../assets/images/burger-logo.png";

const Logo = (props) => (
	<div className={classes.Logo} style={{ height: props.height }}>
		<img src={BurgerLogo} alt="Logo" />
	</div>
);

export default Logo;
