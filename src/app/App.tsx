import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"

function App() {

	return (<>
		<Routes>
			<Route path="/" element={<Layout />}>

				<Route path="/" element={<div> Vitrine </div> } />
				<Route path="/marketplace" element={<div> Market  </div> } />
				<Route path="/profile" element={<div> Profile </div> } />
				<Route path="/panier" element={<div> Panier </div> } />

				<Route path="*" element={<div>404</div>} />

			</Route>
		</Routes>
	</>)
}

export default App
