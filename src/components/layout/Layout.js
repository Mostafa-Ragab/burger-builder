import "./layout.css";

const Layout = (props) => (
	<>
		<main className="content">{props.children}</main>
	</>
);
export default Layout;
