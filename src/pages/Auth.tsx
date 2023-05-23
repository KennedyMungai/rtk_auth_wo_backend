import { MDBInput } from 'mdb-react-ui-kit'
import { ChangeEvent, useEffect, useState } from 'react'
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
	const [showRegister, setShowRegister] = useState(false)

	const { firstName, lastName, email, password, confirmPassword } = formValue

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {}

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
									{!showRegister ? (
										<button
											className='btn btn-outline-light btn-lg px-5'
											type='button'
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Auth
