import React from "react";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "../firebase";

export const Auth = React.createContext({})

const AuthProvider = ({children}) => {
	const [loading, setLoading] = React.useState(true)
	const [data, setData] = React.useState(null)

	React.useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setData(user)
				setLoading(false)
			} else {
				setData(null)
				setLoading(false)
			}

		})
	}, [auth])

	const value = React.useMemo(() => ({
		data,
		loading,
		setData
	}), [data, loading, setData])

	return <Auth.Provider value={value}>{children}</Auth.Provider>
}

export default AuthProvider;