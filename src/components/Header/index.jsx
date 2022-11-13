import React from 'react';
import SideBar from "./components/SideBar";
import cs from './style.module.scss'

const Header = () => {
	const [sideBar , setSideBar] = React.useState(false)
	return (
		<div className={cs.header}>
			<div className={cs.logo}>
				<h1>SCH<span>OOL</span></h1>
			</div>
			<div className={cs.avatar}>
				<img
					onClick={() => setSideBar(state => !state)}
					src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
					alt=""
				/>
				<SideBar setSideBar={setSideBar} sideBar={sideBar}/>
			</div>
		</div>
	);
};

export default Header;

//task
//после подключение firebase подключить через auth url (и сделать условие "если есть")