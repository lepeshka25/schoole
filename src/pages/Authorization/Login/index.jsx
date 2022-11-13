import React from 'react';
import google from '../../../assets/googleSVG.svg'
import cs from './style.module.scss'
import {Link} from "react-router-dom";

const Login = () => {
	return (
		<div className={cs.login}>
			<div className={cs.login_container}>
				<img src={google} alt=""/>
			</div>
			<Link className={cs.link} to={'/auth/register'}>У вас еще нет аккаунт?</Link>
		</div>
	);
};

export default Login;