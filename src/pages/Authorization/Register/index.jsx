import React from 'react';
import google from "../../../assets/googleSVG.svg";
import {Link} from "react-router-dom";
import {GoogleAuth} from "../../../firebase";
import cs from './style.module.scss'

const Register = () => {
	return (
		<div className={cs.register}>
			<div className={cs.register_container}>
				<img onClick={() => GoogleAuth()} src={google} alt=""/>
			</div>
			<Link className={cs.link} to={'/auth/login'}>У вас уже есть аккаунт?</Link>
		</div>
	);
};

export default Register;