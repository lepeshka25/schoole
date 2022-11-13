import React from 'react';
import {useLogin} from "../../../../hooks/useLogin";
import {Link} from "react-router-dom";
import {Exit} from "../../../../firebase";
import cs from './style.module.scss'

const SideBar = ({sideBar, setSideBar}) => {
	const {data} = useLogin()

	return (
		<div style={sideBar ? {display: 'block'} : {display: 'none'}} className={cs.sideBar}>
			{
				data
					? (
						<React.Fragment>
							<Link
								onClick={() => setSideBar(false)}
								to={'/admin'}
								className={cs.link}
							>
								admin
							</Link>
							<p onClick={() => Exit()} className={cs.link}>
								exit
							</p>
						</React.Fragment>
					)
					: (
						<React.Fragment>
							<Link
								onClick={() => setSideBar(false)}
								to={'/auth/login'}
								className={cs.link}
							>
								войти
							</Link>
							<Link
								onClick={() => setSideBar(false)}
								to={'/auth/register'}
								className={cs.link}
							>
								регистрация
							</Link>
						</React.Fragment>
					)

			}
		</div>
	);
};

export default SideBar;