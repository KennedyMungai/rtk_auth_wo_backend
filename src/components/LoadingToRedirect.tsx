import { MDBModal, MDBModalContent, MDBModalDialog } from 'mdb-react-ui-kit'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoadingToRedirect = () => {
    const [count, setCount] = useState<number>(5)
	const navigate = useNavigate()

	return <div>LoadingToRedirect</div>
}

export default LoadingToRedirect
