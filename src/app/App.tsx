import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"

function App() {


	return (<>
		<Routes>
			<Route path="/" element={<Layout />}>

				<Route path="/" element={<Home />} />

				<Route path="/marketplace" element={<div> </div> } />
				<Route path="/profile" element={<div> Profile </div> } />
				<Route path="/panier" element={<div> Panier </div> } />

				<Route path="*" element={<div>404</div>} />

			</Route>
		</Routes>
	</>)
}

export default App
