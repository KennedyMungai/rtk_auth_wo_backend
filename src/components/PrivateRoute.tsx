import { ReactNode } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectAuth } from '../features/auth/authSlice'
import LoadingToRedirect from './LoadingToRedirect'

type Props = {
	children: ReactNode
}

const PrivateRoute = ({ children }: Props) => {
	const token = useAppSelector(selectAuth)

	return token ? children : <LoadingToRedirect />
}

export default PrivateRoute
