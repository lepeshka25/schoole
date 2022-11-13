import React from 'react';
import cs from './style.module.scss'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

const data = [
	'https://img.freepik.com/premium-vector/back-school-wallpaper_23-2148607427.jpg?w=2000',
	"https://wallpapercave.com/wp/wp3310726.jpg",
	"https://img.freepik.com/free-vector/back-school-background_23-2148598171.jpg",
]

const Swiper = () => {
	const [stateSwiper , setStateSwiper]  = React.useState(0)

	function onClickLeft(){
		if(stateSwiper <= 0){
			setStateSwiper(2)
		}else {
			setStateSwiper(state => state - 1)
		}
	}

	function onClickRight(){
		if(stateSwiper >= 2){
			setStateSwiper(0)
		}else {
			setStateSwiper(state => state + 1)
		}
	}

	return (
		<div className={cs.swiper}>
			<AiOutlineArrowLeft
				onClick={onClickLeft}
				className={cs.arrowLeft}
			/>
			<img src={data[stateSwiper]} alt=""/>
			<AiOutlineArrowRight
				onClick={onClickRight}
				className={cs.arrowRight}
			/>
		</div>
	);
};

export default Swiper;