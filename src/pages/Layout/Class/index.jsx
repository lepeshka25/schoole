import React from 'react';
import {useLocation} from "react-router-dom";
import {useLogin} from "../../../hooks/useLogin";
import cs from './style.module.scss'

const Class = () => {
	const location = useLocation()
	const {dataBase} = useLogin()
	const [state , setState] = React.useState(null)

	React.useEffect(() => {
		// setState(dataBase?.class[location.state]?.people)
	}, [dataBase])

	if(!state){
		return <h1>пусто</h1>
	}

	return (
		<div className={cs.class}>
			<div className={cs.container_card}>

				{
					Object.values(state).map((item , index) => (
						<div key={index} className={cs.card}>
							<div className={cs.card_header}>
								<img src={item.url} alt=""/>
							</div>
							<div className={cs.card_body}>
								<p>
									<span>Имя:</span> <span>{item.name}</span>
								</p>
								<p>
									<span>Фамилия:</span> <span>{item.lastName}</span>
								</p>
								<p>
									<span>Возраст:</span> <span>{item.age} годиков</span>
								</p>
							</div>
							<div className={cs.card_footer}>
								<button>изменить</button>
								<button>удалить</button>
							</div>
						</div>
					))
				}

			</div>
		</div>
	);
};

export default Class;

// <table className={cs.table}>*/}
// 	{/*	<thead>*/}
// 	{/*	<tr>*/}
// 	{/*		<th>Имя</th>*/}
// 	{/*		<th>Фамилия</th>*/}
// 	{/*		<th>Возраст</th>*/}
// 	{/*	</tr>*/}
// 	{/*	</thead>*/}
// 	{/*	<tbody>*/}
// 	{/*	<tr>*/}
// 	{/*		<td>Ruslan</td>*/}
// 	{/*		<td>Muratbekov</td>*/}
// 	{/*		<td>18</td>*/}
// 	{/*	</tr>*/}
// 	{/*	</tbody>*/}
// 	{/*</table>