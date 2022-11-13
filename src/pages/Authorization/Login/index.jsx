import React from 'react';
import google from '../../../assets/googleSVG.svg'
import {Link} from "react-router-dom";
import {GoogleAuth} from "../../../firebase";
import cs from './style.module.scss'

const Login = () => {
	return (
		<div className={cs.login}>
			<div className={cs.login_container}>
				<img onClick={() => GoogleAuth()} src={google} alt=""/>
			</div>
			<Link className={cs.link} to={'/auth/register'}>У вас еще нет аккаунт?</Link>
		</div>
	);
};

export default Login;