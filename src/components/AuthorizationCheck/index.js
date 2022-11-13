import {useLogin} from "../../hooks/useLogin";
import {Navigate} from "react-router-dom";

export const AuthorizationCheck = ({children}) => {
	// const {auth} = useLogin()
	const auth = true
	return auth ? <Navigate to={'/'}/> : children
}