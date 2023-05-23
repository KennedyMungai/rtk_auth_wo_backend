import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes
} from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'

function App() {
	return (
		<main className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Navigate to='/auth' replace />} />
					<Route path='/auth' element={<Auth />} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</Router>
		</main>
	)
}

export default App
