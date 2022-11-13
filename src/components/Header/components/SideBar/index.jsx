import React from 'react';
import {useLogin} from "../../../../hooks/useLogin";
import cs from './style.module.scss'
import {Link} from "react-router-dom";

const SideBar = ({sideBar, setSideBar}) => {
	// const {auth} = useLogin()
	const auth = true
	return (
		<div style={sideBar ? {display: 'block'} : {display: 'none'}} className={cs.sideBar}>
			{
				auth
					? (
						<Link
							onClick={() => setSideBar(false)}
							to={'/admin'}
							className={cs.link}
						>
							admin
						</Link>
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