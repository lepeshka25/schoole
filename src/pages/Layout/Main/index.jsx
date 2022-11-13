import React from 'react';
import Swiper from "./components/swiper";
import cs from './style.module.scss'

const Main = () => {
	return (
		<div className={cs.main}>
			<div className={cs.swiper_container}>
				<Swiper/>
			</div>
		</div>
	);
};

export default Main;