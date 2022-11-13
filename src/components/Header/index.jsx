import React from 'react';
import SideBar from "./components/SideBar";
import LOGO from "../../UI/LOGO";
import cs from './style.module.scss'

const Header = () => {
	const [sideBar , setSideBar] = React.useState(false)
	return (
		<div className={cs.header}>
			<LOGO/>
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