import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useLogin} from "../../../hooks/useLogin";
import ModalForm from "./components/ModalForm";
import {BsPlusLg} from "react-icons/bs";
import {deleteClass, deletePeople} from "../../../API";
import cs from './style.module.scss'

const Class = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const {dataBase, data, setUpdate} = useLogin()
	const [state, setState] = React.useState(null)
	const [stateModal, setStateModal] = React.useState(false)

	React.useEffect(() => {
		setState(dataBase?.class[location.state]?.people)
	}, [dataBase])

	function onDeletePeople(...value) {
		deletePeople(value[0], value[1], value[2])
			.then(res => setUpdate(state => !state))
	}

	function onDeleteClass(...value){
		deleteClass(value[0] , value[1])
			.then(res => {
				setUpdate(state => !state)
				navigate('/admin')
			})
	}

	if (!state) {
		return (
			<div className={cs.container}>
				<div className={cs.container_text}>
					<h1>
						Создать ученика
						<BsPlusLg onClick={() => setStateModal(true)} className={cs.icon}/>
					</h1>
				</div>
				<div style={stateModal ? {display: 'block'} : {display: 'none'}}>
					<ModalForm setStateModal={setStateModal}/>
				</div>
				<button
					onClick={() => onDeleteClass(data?.uid , location.state)}
					className={cs.delete}
				>
					удалить класс
				</button>
			</div>
		)
	}

	return (
		<div className={cs.class}>
			<div className={cs.container_card}>

				{
					Object.values(state).map((item, index) => (
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
								<p>
									<span>Группа:</span> <span>{item.group}</span>
								</p>
								<p>
									<span>Класс:</span> <span>{item.classGroup}</span>
								</p>
							</div>
							<div className={cs.card_footer}>
								<button>изменить</button>
								<button onClick={() => onDeletePeople(data?.uid, location.state, item.id)}>удалить</button>
							</div>
						</div>
					))
				}

			</div>

			<div style={stateModal ? {display: 'block'} : {display: 'none'}}>
				<ModalForm setStateModal={setStateModal}/>
			</div>

			<button
				onClick={() => onDeleteClass(data?.uid , location.state)}
				className={cs.delete}
			>
				удалить класс
			</button>

			<BsPlusLg onClick={() => setStateModal(true)} className={cs.icon}/>
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