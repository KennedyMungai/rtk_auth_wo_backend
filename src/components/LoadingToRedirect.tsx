import { MDBModal, MDBModalContent, MDBModalDialog } from 'mdb-react-ui-kit'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoadingToRedirect = () => {
    const [count, setCount] = useState<number>(5)
    const navigate = useNavigate()

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((currentCount) => --currentCount)
		}, 1000)

		count === 0 && navigate('/auth')

        return () => clearInterval(interval)
	}, [count, navigate])
    

    return (
		<div className='vh-100 gradient-custom'>
			<MDBModal show={true}>
				<MDBModalDialog centered>
					<MDBModalContent>
						<p className='mt-3'>
							Redirecting you in {count} seconds
						</p>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</div>
	)
}

export default LoadingToRedirect
