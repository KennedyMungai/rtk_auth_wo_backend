import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const PrivateRoute = ({ children }: Props) => {
	return <div>PrivateRoute</div>
}

export default PrivateRoute
