import {useLogin} from "../../hooks/useLogin";
import {Navigate} from "react-router-dom";

export const AuthorizationCheck = ({children}) => {
	const {data} = useLogin()
	return data ? <Navigate to={'/'}/> : children
}