import React from 'react';
import cs from './style.module.scss'
import LOGO from "../../UI/LOGO";
import {list} from "../../utils";

const Footer = () => {
	return (
		<div className={cs.footer}>
			<LOGO/>
			<ul className={cs.list}>
				{
					list.map(item => (
						<li key={item.id}>
							<item.icon className={cs.icon}/>
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default Footer;