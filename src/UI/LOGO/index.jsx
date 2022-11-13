import React from 'react';
import {Link} from "react-router-dom";
import cs from './style.module.scss'

const LOGO = () => {
	return (
		<div className={cs.logo}>
			<Link to={'/'} className={cs.link}>SCH<span>OOL</span></Link>
		</div>
	);
};

export default LOGO;