import React from 'react';
import {BsPlusLg} from "react-icons/bs";
import {useLogin} from "../../../hooks/useLogin";
import ModalForm from "./components/Form";
import {useNavigate} from "react-router-dom";
import cs from './style.module.scss'

const Admin = () => {
	const {dataBase} = useLogin()
	const navigate = useNavigate()
	const [stateModal, setStateModal] = React.useState(false)

	if (!dataBase?.class) {
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
						<th>Группа</th>
						<th>Класс</th>
					</tr>
					</thead>
					<tbody>
					{
						Object.values(dataBase.class).map(({className,group, classGroup, id}, i) => (
							<tr
								onClick={() => navigate('/admin/class', {state: id})}
								className={cs.submitNavigate}
								key={i}
							>
								<td>{className}</td>
								<td>{group}</td>
								<td>{classGroup}</td>
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