import "./layout.css";
import Toolbar from "../../components/Navigation/toolbar/Tollbar";
const Layout = (props) => (
	<>
		<Toolbar />
		<main className="content">{props.children}</main>
	</>
);
export default Layout;
