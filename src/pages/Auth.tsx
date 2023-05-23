import { MDBInput } from 'mdb-react-ui-kit'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const Auth = () => {
	const [formValue, setFormValue] = useState(initialState)

	return <div>Auth</div>
}

export default Auth
