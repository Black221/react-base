import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import { Calendar } from "../components/Calendar"

function App() {


	return (<>
		<Routes>
			<Route path="/" element={<Layout />}>

				<Route path="/" element={<div className="">
					<Calendar getDate={(date) => console.log(date)} />
				</div>} />

				<Route path="/marketplace" element={<div> </div> } />
				<Route path="/profile" element={<div> Profile </div> } />
				<Route path="/panier" element={<div> Panier </div> } />

				<Route path="*" element={<div>404</div>} />

			</Route>
		</Routes>
	</>)
}

export default App
