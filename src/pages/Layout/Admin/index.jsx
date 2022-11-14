import React from 'react';
import {BsPlusLg} from "react-icons/bs";
import {useLogin} from "../../../hooks/useLogin";
import ModalForm from "./components/Form";
import cs from './style.module.scss'

const Admin = () => {
	// const {data} = useLogin()
	// console.log(data.uid)

	const [stateModal , setStateModal] = React.useState(false)

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
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>Maria Anders</td>
						</tr>
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