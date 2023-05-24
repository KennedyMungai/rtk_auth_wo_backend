import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import { useAppDispatch } from './app/hooks'
import { useEffect } from 'react'
import { setUser } from './features/auth/authSlice'

function App() {
	const dispatch = useAppDispatch()
	const user = JSON.parse(localStorage.getItem('user') || '{}')

	useEffect(() => {
		dispatch(setUser(user))
	}, [])

	return (
		<main className='App'>
			<Router>
				<ToastContainer />
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
