import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useLogin} from "../../../hooks/useLogin";
import ModalForm from "./components/ModalForm";
import {BsPlusLg} from "react-icons/bs";
import {deleteClass, deletePeople} from "../../../API";
import Card from "./components/Card";
import cs from './style.module.scss'

const Class = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const {dataBase, data, setUpdate} = useLogin()
	const [state, setState] = React.useState(null)
	const [stateModal, setStateModal] = React.useState(false)
	const [select , setSelect] = React.useState('name')
	const [card , setCard] = React.useState(null)

	React.useEffect(() => {
		if(dataBase?.class[location.state]?.people){
			setState(Object.values(dataBase?.class[location.state]?.people))
		}
		// eslint-disable-next-line
	}, [dataBase, select])

	React.useEffect(() => {
		if(select === 'age'){
			let data = state?.sort((a , b) => {
				if(+a.age < +b.age){
					return 1
				}else {
					return -1
				}
			})
			setCard(data)
		}else if(select === 'name') {
			let data = state?.sort((a , b) => {
				if(a.name > b.name){
					return 1
				}else {
					return -1
				}
			})
			setCard(data)
		}else if(select === 'lastName') {
			let data = state?.sort((a , b) => {
				if(a.lastName > b.lastName){
					return 1
				}else {
					return -1
				}
			})
			setCard(data)
		}else if(select === 'group') {
			let data = state?.sort((a , b) => {
				if(a.group > b.group){
					return 1
				}else {
					return -1
				}
			})
			setCard(data)
		}else if(select === 'class') {
			let data = state?.sort((a , b) => {
				if(+a.classGroup < +b.classGroup){
					return 1
				}else {
					return -1
				}
			})
			setCard(data)
		}
	}, [state , select])

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

			<select onChange={e => setSelect(e.target.value)} className={cs.select}>
				<option value="name">Name</option>
				<option value="lastName">LastName</option>
				<option value="age">age</option>
				<option value="group">group</option>
				<option value="class">class</option>
			</select>

			<button
				onClick={() => onDeleteClass(data?.uid , location.state)}
				className={cs.delete}
			>
				удалить класс
			</button>

			<Card cs={cs} card={card} onDeletePeople={onDeletePeople} data={data} location={location}/>

			<div style={stateModal ? {display: 'block'} : {display: 'none'}}>
				<ModalForm setStateModal={setStateModal}/>
			</div>

			<BsPlusLg onClick={() => setStateModal(true)} className={cs.icon}/>
		</div>
	);
};

export default React.memo(Class);

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