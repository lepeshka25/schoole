import React from 'react';
import Swiper from "./components/swiper";
import cs from './style.module.scss'
import Contacts from "./components/Contacts";
import InfoScholl from "./components/InfoScholl";

const Main = () => {
	return (
		<div className={cs.main}>
			<div className={cs.swiper_container}>
				<Swiper/>
			</div>

			<div className={cs.container_infoSchool}>
				<InfoScholl/>
			</div>

			<div className={cs.container_contacts}>
				<Contacts/>
			</div>
		</div>
	);
};

export default Main;