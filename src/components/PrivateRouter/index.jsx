import {useLogin} from "../../hooks/useLogin";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRouter = () => {
	// const { isAuth } = useLogin()
	const isAuth = true
	return isAuth ? <Outlet/> : <Navigate to={'/auth/login'}/>
}

export default PrivateRouter;