import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'

function App() {

	return (
		<div id="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
		
	)
}

export default App
