import classes from "./Modal.module.css";
import Aux from "../../../hoc/Aux_";
import Backdrop from "../Backdrop/Bckdrop";
import { memo } from "react";
const Modal = (props) => (
	<Aux>
		<Backdrop show={props.show} clicked={props.modalClosed} />
		<div
			className={classes.Modal}
			style={{
				transform: props.show ? "translateY(0)" : "translate(-100vh)",
				opacity: props.show ? "1" : "0",
			}}
		>
			{props.children}
		</div>
	</Aux>
);

export default memo(Modal);
