import { MDBInput } from 'mdb-react-ui-kit'
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../app/hooks'
import { setUser } from '../features/auth/authSlice'
import { useLoginUserMutation } from '../services/authApi'

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const Auth = () => {
	const [formValue, setFormValue] = useState(initialState)
	const [showRegister, setShowRegister] = useState(false)

	const navigate = useNavigate()

	const dispatch = useAppDispatch()

	const [
		loginUser,
		{
			data: loginData,
			isSuccess: isLoginSuccess,
			isError: isLoginError,
			error: loginError
		}
	] = useLoginUserMutation()

	const { firstName, lastName, email, password, confirmPassword } = formValue

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value })
	}

	const handleLogin = async () => {
		if (email && password) {
			await loginUser({ email, password })
		} else {
			toast.error('Please fill all input fields')
		}
	}

	useEffect(() => {
		if (isLoginSuccess) {
			toast.success('User logged in successfully')
			dispatch(
				setUser({ name: loginData.result.name, token: loginData.token })
			)
			navigate('/dashboard')
		}
	}, [isLoginSuccess])

	return (
		<section className='vh-100 vw-100 gradient-custom'>
			<div className='container py-4 h-100'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col-12 col-md-8 col-lg-6 col-xl-5'>
						<div
							className='card bg-dark text-white'
							style={{ borderRadius: '1rem' }}
						>
							<div className='card-body p-4 text-center'>
								<div className='mb-md-5 mt-md-4 pb-5'>
									<h2 className='fw-bold mb-2 text-uppercase'>
										{!showRegister ? 'Login' : 'Register'}
									</h2>
									<p className='text-white-50 mb-'>
										{!showRegister
											? 'Please Enter your Email and Password'
											: 'Please Enter User Details'}
									</p>
									{showRegister && (
										<>
											<div className='form-outline form-white mb-4'>
												<MDBInput
													type='text'
													name='firstName'
													value={firstName}
													onChange={handleChange}
													label='First Name'
													className='form-control form-control-lg'
												/>
											</div>
											<div className='form-outline form-white mb-4'>
												<MDBInput
													type='text'
													name='lastName'
													value={lastName}
													onChange={handleChange}
													label='Last Name'
													className='form-control form-control-lg'
												/>
											</div>
										</>
									)}
									<div className='form-outline form-white mb-4'>
										<MDBInput
											type='email'
											name='email'
											value={email}
											onChange={handleChange}
											label='Email'
											className='form-control form-control-lg'
										/>
									</div>
									<div className='form-outline form-white mb-4'>
										<MDBInput
											type='password'
											name='password'
											value={password}
											onChange={handleChange}
											label='Password'
											className='form-control form-control-lg'
										/>
									</div>
									{showRegister && (
										<div className='form-outline form-white mb-4'>
											<MDBInput
												type='password'
												name='confirmPassword'
												value={confirmPassword}
												onChange={handleChange}
												label='Confirm Password'
												className='form-control form-control-lg'
											/>
										</div>
									)}
									{!showRegister ? (
										<button
											className='btn btn-outline-light btn-lg px-5'
											type='button'
											onClick={() => handleLogin()}
										>
											Login
										</button>
									) : (
										<button
											className='btn btn-outline-light btn-lg px-5'
											type='button'
										>
											Register
										</button>
									)}
								</div>
								<div className=''>
									<h5 className='mb-0'>
										{!showRegister ? (
											<>
												Don't have an account?{' '}
												<p
													className='text-white-50 fw-bold'
													style={{
														cursor: 'pointer'
													}}
													onClick={() =>
														setShowRegister(true)
													}
												>
													Sign Up
												</p>
											</>
										) : (
											<>
												Already have an account?
												<p
													className='text-white-50 fw-bold'
													style={{
														cursor: 'pointer'
													}}
													onClick={() =>
														setShowRegister(false)
													}
												>
													Sign In
												</p>
											</>
										)}
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Auth
