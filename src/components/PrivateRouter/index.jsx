import {useLogin} from "../../hooks/useLogin";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRouter = () => {
	// const { isAuth } = useLogin()
	console.log('auth')
	const isAuth = false
	return isAuth ? <Outlet/> : <Navigate to={'/auth/login'}/>
}

export default PrivateRouter;