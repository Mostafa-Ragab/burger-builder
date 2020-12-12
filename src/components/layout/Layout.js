import React, { useState } from "react";
import "./layout.css";
import Toolbar from "../../components/Navigation/toolbar/Tollbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Aux from "../../hoc/Aux_";
const Layout = (props) => {
	const [showSideDrawer, setshowSideDrawer] = useState(true);

	return (
		<Aux>
			<Toolbar />
			<SideDrawer
				open={showSideDrawer}
				closed={() => setshowSideDrawer((showSideDrawer) => !showSideDrawer)}
			/>
			<main className="content">{props.children}</main>
		</Aux>
	);
};
export default Layout;
