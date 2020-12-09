import Layout from "./components/layout/Layout";
import BurgerBuilder from "./containers/burger-builder/burger-builder";
function App() {
	return (
		<div className="App">
			<Layout>
				<BurgerBuilder />
			</Layout>
		</div>
	);
}

export default App;
