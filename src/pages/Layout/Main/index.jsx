import React from 'react';
import Swiper from "./components/swiper";
import InfoScholl from "./components/InfoScholl";
import cs from './style.module.scss'

const Main = () => {
	return (
		<div className={cs.main}>
			<div className={cs.swiper_container}>
				<Swiper/>
			</div>

			<div className={cs.container_infoSchool}>
				<InfoScholl/>
			</div>
		</div>
	);
};

export default Main;