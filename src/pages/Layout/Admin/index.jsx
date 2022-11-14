import React from 'react';
import {BsPlusLg} from "react-icons/bs";
import {useLogin} from "../../../hooks/useLogin";
import ModalForm from "./components/Form";
import cs from './style.module.scss'

const Admin = () => {
	const {dataBase} = useLogin()
	const [stateModal, setStateModal] = React.useState(false)

	console.log(stateModal)

	if(!dataBase?.class){
		return (
			<div className={cs.container_pusto}>
				<h1>
					Создать класс =>
					<BsPlusLg onClick={() => setStateModal(true)} className={cs.icon}/>
				</h1>
				<div style={stateModal ? {display: 'block'} : {display: 'none'}}>
					<ModalForm setStateModal={setStateModal}/>
				</div>
			</div>
		)
	}

	return (
		<div className={cs.admin}>
			<div className={cs.container_table}>
				<table className={cs.table}>
					<thead>
					<tr>
						<th>Класс</th>
						<th>кол-во</th>
					</tr>
					</thead>
					<tbody>
						{
							dataBase?.class && Object.values(dataBase.class).map(({name , num}, i) => (
								<tr key={i}>
									<td>{name}</td>
									<td>{num}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>

			<BsPlusLg onClick={() => setStateModal(true)} className={cs.icon}/>
			<div style={stateModal ? {display: 'block'} : {display: 'none'}}>
				<ModalForm setStateModal={setStateModal}/>
			</div>
		</div>
	);
};

export default Admin;