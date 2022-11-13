import {useLogin} from "../../hooks/useLogin";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRouter = () => {
	const {data} = useLogin()
	return data ? <Outlet/> : <Navigate to={'/auth/login'}/>
}

export default PrivateRouter;