import React from "react";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "../firebase";
import {createTeacher, getTeacher} from "../API";

export const Auth = React.createContext({})

const AuthProvider = ({children}) => {
	const [loading, setLoading] = React.useState(true)
	const [data, setData] = React.useState(null)
	const [dataBase, setDataBase] = React.useState(null)
	const [update, setUpdate] = React.useState(false)

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
		// eslint-disable-next-line
	}, [auth])

	React.useEffect(() => {
		if (data) {
			getTeacher(data.uid)
				.then(res => {
					if (res.data === null) {
						createTeacher(data.uid, {names: `${data.displayName}`})
							.then(r => setDataBase(r.data))
					} else {
						setDataBase(res.data)
					}
				})
		}
	}, [data, update])

	const value = React.useMemo(() => ({
		data,
		loading,
		dataBase,
		setUpdate,
	}), [data, loading, dataBase, setUpdate])

	return <Auth.Provider value={value}>{children}</Auth.Provider>
}

export default AuthProvider;