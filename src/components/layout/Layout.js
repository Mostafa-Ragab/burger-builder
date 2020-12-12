import "./layout.css";
import Toolbar from "../../components/Navigation/toolbar/Tollbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => (
	<>
		<Toolbar />
		<SideDrawer />
		<main className="content">{props.children}</main>
	</>
);
export default Layout;
