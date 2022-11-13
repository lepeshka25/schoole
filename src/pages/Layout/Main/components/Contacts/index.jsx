import React from 'react';
import cs from './style.module.scss'

const Contacts = () => {
	return (
		<div className={cs.contacts}>
			<div className={cs.left_container}>
				<img src="https://www.collinsdictionary.com/images/full/school_309241295.jpg" alt=""/>
			</div>
			<div className={cs.right_container}>
				<form>
					<div>
						<h1>Обратная связь</h1>
					</div>
					<div>
						<input type="text" placeholder={'Email'}/>
					</div>
					<div>
						<input type="text" placeholder={'+996 555 55 55 55'}/>
					</div>
					<div>
						<button type="submit">ОТПРАВИТЬ</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contacts;