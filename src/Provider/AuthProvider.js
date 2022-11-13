import React from "react";

export const Auth = React.createContext({})

const AuthProvider = ({children}) => {
	const [state , setState] = React.useState(null)

	const value = React.useMemo(() => ({

	}), [])

	return <Auth.Provider value={'привет'}>{children}</Auth.Provider>
}

export default AuthProvider;